/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {
  SidebarItem,
  SidebarItemDoc,
  SidebarItemCategory,
  SidebarItemsGenerator,
  SidebarItemsGeneratorDoc,
} from './types';
import {keyBy, sortBy} from 'lodash';
import {addTrailingSlash, posixPath} from '@docusaurus/utils';
import {Joi} from '@docusaurus/utils-validation';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs-extra';
import Yaml from 'js-yaml';

const BreadcrumbSeparator = '/';
// To avoid possible name clashes with a folder of the same name as the ID
const docIdPrefix = '$doc$/';

export const CategoryMetadataFilenameBase = '_category_';
export const CategoryMetadataFilenamePattern = '_category_.{json,yml,yaml}';

export type CategoryMetadatasFile = {
  label?: string;
  position?: number;
  collapsed?: boolean;
  collapsible?: boolean;
  className?: string;

  // TODO should we allow "items" here? how would this work? would an "autogenerated" type be allowed?
  // This mkdocs plugin do something like that: https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin/
  // cf comment: https://github.com/facebook/docusaurus/issues/3464#issuecomment-784765199
};

type WithPosition<T> = T & {position?: number};

/**
 * A representation of the fs structure. For each object entry:
 * If it's a folder, the key is the directory name, and value is the directory content;
 * If it's a doc file, the key is the doc id prefixed with '$doc$/', and value is null
 */
type Dir = {
  [item: string]: Dir | null;
};

const CategoryMetadatasFileSchema = Joi.object<CategoryMetadatasFile>({
  label: Joi.string(),
  position: Joi.number(),
  collapsed: Joi.boolean(),
  collapsible: Joi.boolean(),
  className: Joi.string(),
});

// TODO I now believe we should read all the category metadata files ahead of time: we may need this metadata to customize docs metadata
// Example use-case being able to disable number prefix parsing at the folder level, or customize the default route path segment for an intermediate directory...
// TODO later if there is `CategoryFolder/index.md`, we may want to read the metadata as yaml on it
// see https://github.com/facebook/docusaurus/issues/3464#issuecomment-818670449
async function readCategoryMetadatasFile(
  categoryDirPath: string,
): Promise<CategoryMetadatasFile | null> {
  async function tryReadFile(
    fileNameWithExtension: string,
    parse: (content: string) => unknown,
  ): Promise<CategoryMetadatasFile | null> {
    // Simpler to use only posix paths for mocking file metadatas in tests
    const filePath = posixPath(
      path.join(categoryDirPath, fileNameWithExtension),
    );
    if (await fs.pathExists(filePath)) {
      const contentString = await fs.readFile(filePath, {encoding: 'utf8'});
      const unsafeContent = parse(contentString);
      try {
        return Joi.attempt(unsafeContent, CategoryMetadatasFileSchema);
      } catch (e) {
        console.error(
          chalk.red(
            `The docs sidebar category metadata file looks invalid!\nPath: ${filePath}`,
          ),
        );
        throw e;
      }
    }
    return null;
  }

  return (
    (await tryReadFile(`${CategoryMetadataFilenameBase}.json`, JSON.parse)) ??
    (await tryReadFile(`${CategoryMetadataFilenameBase}.yml`, Yaml.load)) ??
    // eslint-disable-next-line no-return-await
    (await tryReadFile(`${CategoryMetadataFilenameBase}.yaml`, Yaml.load))
  );
}

// Comment for this feature: https://github.com/facebook/docusaurus/issues/3464#issuecomment-818670449
const DefaultSidebarItemsGenerator: SidebarItemsGenerator = async ({
  numberPrefixParser,
  docs: allDocs,
  options,
  item: {dirName: autogenDir},
  version,
}) => {
  /**
   * Step 1. Extract the docs that are in the autogen dir.
   */
  function getAutogenDocs(): SidebarItemsGeneratorDoc[] {
    function isInAutogeneratedDir(doc: SidebarItemsGeneratorDoc) {
      return (
        // Doc at the root of the autogenerated sidebar dir
        doc.sourceDirName === autogenDir ||
        // autogen dir is . and doc is in subfolder
        autogenDir === '.' ||
        // autogen dir is not . and doc is in subfolder
        // "api/myDoc" startsWith "api/" (note "api2/myDoc" is not included)
        doc.sourceDirName.startsWith(addTrailingSlash(autogenDir))
      );
    }
    const docs = allDocs.filter(isInAutogeneratedDir);

    if (docs.length === 0) {
      console.warn(
        chalk.yellow(
          `No docs found in dir ${autogenDir}: can't auto-generate a sidebar.`,
        ),
      );
    }
    return docs;
  }

  /**
   * Step 2. Turn the linear file list into a tree structure.
   */
  function treeify(docs: SidebarItemsGeneratorDoc[]): Dir {
    // Get the category breadcrumb of a doc (relative to the dir of the autogenerated sidebar item)
    // autogenDir=a/b and docDir=a/b/c/d => returns [c, d]
    // autogenDir=a/b and docDir=a/b => returns []
    // TODO: try to use path.relative()
    function getRelativeBreadcrumb(doc: SidebarItemsGeneratorDoc): string[] {
      return autogenDir === doc.sourceDirName
        ? []
        : doc.sourceDirName
            .replace(addTrailingSlash(autogenDir), '')
            .split(BreadcrumbSeparator);
    }
    const treeRoot: Dir = {};
    docs.forEach((doc) => {
      const breadcrumb = getRelativeBreadcrumb(doc);
      let currentDir = treeRoot; // We walk down the file's path to generate the fs structure
      // eslint-disable-next-line no-restricted-syntax
      for (const dir of breadcrumb) {
        if (typeof currentDir[dir] === 'undefined') {
          currentDir[dir] = {}; // Create new folder.
        }
        currentDir = currentDir[dir]!; // Go into the subdirectory.
      }
      currentDir[`${docIdPrefix}${doc.id}`] = null; // We've walked through the file path. Register the file in this directory.
    });
    return treeRoot;
  }

  /**
   * Step 3. Recursively transform the tree-like file structure to sidebar items.
   * (From a record to an array of items, akin to normalizing shorthand)
   */
  function generateSidebar(fsModel: Dir): Promise<WithPosition<SidebarItem>[]> {
    const docsById = keyBy(allDocs, (doc) => doc.id);
    function createDocItem(id: string): WithPosition<SidebarItemDoc> {
      const {
        sidebarPosition: position,
        frontMatter: {sidebar_label: label, sidebar_class_name: className},
      } = docsById[id];
      return {
        type: 'doc',
        id,
        position,
        // We don't want these fields to magically appear in the generated sidebar
        ...(label !== undefined && {label}),
        ...(className !== undefined && {className}),
      };
    }
    async function createCategoryItem(
      dir: Dir,
      fullPath: string,
      folderName: string,
    ): Promise<WithPosition<SidebarItemCategory>> {
      const categoryPath = path.join(version.contentPath, autogenDir, fullPath);
      const categoryMetadatas = await readCategoryMetadatasFile(categoryPath);
      const className = categoryMetadatas?.className;
      const {filename, numberPrefix} = numberPrefixParser(folderName);
      return {
        type: 'category',
        label: categoryMetadatas?.label ?? filename,
        collapsible:
          categoryMetadatas?.collapsible ?? options.sidebarCollapsible,
        collapsed: categoryMetadatas?.collapsed ?? options.sidebarCollapsed,
        position: categoryMetadatas?.position ?? numberPrefix,
        ...(className !== undefined && {className}),
        items: await Promise.all(
          Object.entries(dir).map(([key, content]) =>
            dirToItem(content, key, `${fullPath}/${key}`),
          ),
        ),
      };
    }
    async function dirToItem(
      dir: Dir | null, // The directory item to be transformed.
      itemKey: string, // For docs, it's the doc ID; for categories, it's used to generate the next `relativePath`.
      fullPath: string, // `dir`'s full path relative to the autogen dir.
    ): Promise<WithPosition<SidebarItem>> {
      return dir
        ? createCategoryItem(dir, fullPath, itemKey)
        : createDocItem(itemKey.substring(docIdPrefix.length));
    }
    return Promise.all(
      Object.entries(fsModel).map(([key, content]) =>
        dirToItem(content, key, key),
      ),
    );
  }

  /**
   * Step 4. Recursively sort the categories/docs + remove the "position" attribute from final output.
   * Note: the "position" is only used to sort "inside" a sidebar slice. It is not
   * used to sort across multiple consecutive sidebar slices (ie a whole Category
   * composed of multiple autogenerated items)
   */
  function sortItems(sidebarItems: WithPosition<SidebarItem>[]): SidebarItem[] {
    const processedSidebarItems = sidebarItems.map((item) => {
      if (item.type === 'category') {
        return {...item, items: sortItems(item.items)};
      }
      return item;
    });
    const sortedSidebarItems = sortBy(
      processedSidebarItems,
      (item) => item.position,
    );
    return sortedSidebarItems.map(({position, ...item}) => item);
  }
  // TODO: the whole code is designed for pipeline operator
  // return getAutogenDocs() |> treeify |> await generateSidebar(^) |> sortItems;
  const docs = getAutogenDocs();
  const fsModel = treeify(docs);
  const sidebarWithPosition = await generateSidebar(fsModel);
  const sortedSidebar = sortItems(sidebarWithPosition);
  return sortedSidebar;
};

export {DefaultSidebarItemsGenerator};
