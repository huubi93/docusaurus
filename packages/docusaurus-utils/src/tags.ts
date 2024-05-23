/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import fs from 'fs-extra';
import _ from 'lodash';
import logger from '@docusaurus/logger';
import YAML from 'js-yaml';
import {normalizeUrl} from './urlUtils';
import type {TagsFeature} from '@docusaurus/types';

export type TagsFile = Record<string, Tag>;

/** What the user configures. */
export type Tag = {
  label: string;
  /** Permalink to this tag's page, without the `/tags/` base path. */
  permalink: string;
};

export type NormalizedTag = Tag & {
  inline: boolean;
};

/** What the tags list page should know about each tag. */
export type TagsListItem = Tag & {
  /** Number of posts/docs with this tag. */
  count: number;
};

/** What the tag's own page should know about the tag. */
export type TagModule = TagsListItem & {
  /** The tags list page's permalink. */
  allTagsPath: string;
  /** Is this tag unlisted? (when it only contains unlisted items) */
  unlisted: boolean;
};

export type FrontMatterTag = string | Tag;

function normalizeFrontMatterTag(
  tagsPath: string,
  frontMatterTag: FrontMatterTag,
): Tag {
  function toTagObject(tagString: string): Tag {
    return {
      label: tagString,
      permalink: _.kebabCase(tagString),
    };
  }

  // TODO maybe make ensure the permalink is valid url path?
  function normalizeTagPermalink(permalink: string): string {
    // Note: we always apply tagsPath on purpose. For versioned docs, v1/doc.md
    // and v2/doc.md tags with custom permalinks don't lead to the same created
    // page. tagsPath is different for each doc version
    return normalizeUrl([tagsPath, permalink]);
  }

  const tag: Tag =
    typeof frontMatterTag === 'string'
      ? toTagObject(frontMatterTag)
      : frontMatterTag;

  return {
    label: tag.label,
    permalink: normalizeTagPermalink(tag.permalink),
  };
}

/**
 * Takes tag objects as they are defined in front matter, and normalizes each
 * into a standard tag object. The permalink is created by appending the
 * sluggified label to `tagsPath`. Front matter tags already containing
 * permalinks would still have `tagsPath` prepended.
 *
 * The result will always be unique by permalinks. The behavior with colliding
 * permalinks is undetermined.
 */
// TODO does this method still make sense? probably not
export function normalizeFrontMatterTags(
  /** Base path to append the tag permalinks to. */
  tagsPath: string,
  /** Can be `undefined`, so that we can directly pipe in `frontMatter.tags`. */
  frontMatterTags: FrontMatterTag[] | undefined = [],
): Tag[] {
  const tags = frontMatterTags.map((tag) =>
    normalizeFrontMatterTag(tagsPath, tag),
  );

  return _.uniqBy(tags, (tag) => tag.permalink);
}

export function normalizeTags({
  versionTagsPath,
  tagsFile,
  frontMatterTags,
}: {
  versionTagsPath: string;
  tagsFile: TagsFile | undefined;
  frontMatterTags: FrontMatterTag[];
}): NormalizedTag[] {
  function normalizeTag(tag: FrontMatterTag): NormalizedTag {
    if (typeof tag === 'string') {
      const tagDescription = tagsFile?.[tag];
      if (tagDescription) {
        // inline string known tag
        return {
          label: tagDescription.label,
          permalink: normalizeFrontMatterTag(
            versionTagsPath,
            tagDescription.permalink ?? _.kebabCase(tagDescription.label),
          ).permalink,
          inline: false,
        };
      } else {
        // inline string unknown tag
        return {
          ...normalizeFrontMatterTag(versionTagsPath, tag),
          inline: true,
        };
      }
    }
    // legacy inline tag object, always inline, unknown because isn't a string
    else {
      return {
        ...normalizeFrontMatterTag(versionTagsPath, tag),
        inline: true,
      };
    }
  }

  const tags = frontMatterTags.map(normalizeTag);
  return _.uniqBy(tags, (tag) => tag.permalink);
}

type TaggedItemGroup<Item> = {
  tag: Tag;
  items: Item[];
};

/**
 * Permits to group docs/blog posts by tag (provided by front matter).
 *
 * @returns a map from tag permalink to the items and other relevant tag data.
 * The record is indexed by permalink, because routes must be unique in the end.
 * Labels may vary on 2 MD files but they are normalized. Docs with
 * label='some label' and label='some-label' should end up in the same page.
 */
export function groupTaggedItems<Item>(
  items: readonly Item[],
  /**
   * A callback telling me how to get the tags list of the current item. Usually
   * simply getting it from some metadata of the current item.
   */
  getItemTags: (item: Item) => readonly Tag[],
): {[permalink: string]: TaggedItemGroup<Item>} {
  const result: {[permalink: string]: TaggedItemGroup<Item>} = {};

  items.forEach((item) => {
    getItemTags(item).forEach((tag) => {
      // Init missing tag groups
      // TODO: it's not really clear what should be the behavior if 2 tags have
      // the same permalink but the label is different for each
      // For now, the first tag found wins
      result[tag.permalink] ??= {
        tag,
        items: [],
      };

      // Add item to group
      result[tag.permalink]!.items.push(item);
    });
  });

  // If user add twice the same tag to a md doc (weird but possible),
  // we don't want the item to appear twice in the list...
  Object.values(result).forEach((group) => {
    group.items = _.uniq(group.items);
  });

  return result;
}

/**
 * Permits to get the "tag visibility" (hard to find a better name)
 * IE, is this tag listed or unlisted
 * And which items should be listed when this tag is browsed
 */
export function getTagVisibility<Item>({
  items,
  isUnlisted,
}: {
  items: Item[];
  isUnlisted: (item: Item) => boolean;
}): {
  unlisted: boolean;
  listedItems: Item[];
} {
  const allItemsUnlisted = items.every(isUnlisted);
  // When a tag is full of unlisted items, we display all the items
  // when tag is browsed, but we mark the tag as unlisted
  if (allItemsUnlisted) {
    return {unlisted: true, listedItems: items};
  }
  // When a tag has some listed items, the tag remains listed
  // but we filter its unlisted items
  return {
    unlisted: false,
    listedItems: items.filter((item) => !isUnlisted(item)),
  };
}

export function validateFrontMatterTags({
  tags,
  source,
  options,
}: {
  tags: NormalizedTag[];
  source: string;
  options: TagsFeature;
}): void {
  const inlineTags = tags.filter((tag) => tag.inline);
  if (inlineTags.length > 0 && options.onUnknownTags !== 'ignore') {
    const uniqueUnknownTags = [...new Set(inlineTags.map((tag) => tag.label))];
    const tagListString = uniqueUnknownTags.join(', ');
    logger.report(options.onUnknownTags)(
      `Tags [${tagListString}] used in ${source} are not defined in ${options.tagsFilePath}`,
    );
  }
}

export function processFileTagsPath({
  options,
  source,
  frontMatterTags,
  versionTagsPath,
  tagsFile,
}: {
  options: TagsFeature;
  source: string;
  frontMatterTags: FrontMatterTag[] | undefined;
  versionTagsPath: string;
  tagsFile: TagsFile | undefined;
}): NormalizedTag[] {
  const tags = normalizeTags({
    versionTagsPath,
    tagsFile,
    frontMatterTags: frontMatterTags ?? [],
  });

  validateFrontMatterTags({
    tags,
    source,
    options,
  });

  return tags;
}

export async function getTagsFile<T>(
  options: TagsFeature,
  contentPath: string,
  validateDefinedTags: (data: unknown) => T,
): Promise<T | null> {
  if (
    options.tagsFilePath === false ||
    options.tagsFilePath === null ||
    // TODO doesn't work if not set
    options.onUnknownTags === 'ignore' // TODO that looks wrong
  ) {
    return null;
  }
  const tagDefinitionPath = path.join(
    contentPath,
    // TODO default value isn't used ?
    options.tagsFilePath ? options.tagsFilePath : 'tags.yml',
  );
  const tagDefinitionContent = await fs.readFile(tagDefinitionPath, 'utf-8');
  const data = YAML.load(tagDefinitionContent);
  return validateDefinedTags(data);
  // if (definedTags.error) {
  //   throw new Error(
  //     `There was an error extracting tags from file: ${definedTags.error.message}`,
  //     {cause: definedTags},
  //   );
  // }
  // return definedTags.value;
}
