/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as fs from 'fs-extra';
import importFresh from 'import-fresh';

import {
  VersionOneConfig,
  VersionTwoConfig,
  ClassicPresetEntries,
  SidebarEntries,
} from './types';
import extractMetadata from './frontMatter';
import sanitizeMD from './sanitizeMD';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const DOCUSAURUS_VERSION = require('../package.json').version;

export function walk(dir: string): Array<string> {
  let results: Array<string> = [];
  const list = fs.readdirSync(dir);
  list.forEach((file: string) => {
    const fullPath = `${dir}/${file}`;
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

function sanitizedFileContent(
  content: string,
  migrateMDFiles: boolean,
): string {
  const extractedData = extractMetadata(content);
  const extractedMetaData = Object.entries(extractedData.metadata).reduce(
    (metaData, value) => {
      return `${metaData}\n${value[0]}: ${
        value[0] === 'tags' ? value[1] : `"${value[1]}"`
      }`;
    },
    '',
  );
  const sanitizedData = `---\n${extractedMetaData}\n---\n${
    migrateMDFiles
      ? sanitizeMD(extractedData.rawContent)
      : extractedData.rawContent
  }`;
  return sanitizedData;
}

export async function migrateDocusaurusProject(
  siteDir: string,
  newDir: string,
  migrateMdFiles: boolean = false,
): Promise<void> {
  const siteConfig = importFresh(`${siteDir}/siteConfig`) as VersionOneConfig;
  const config = createConfigFile(siteConfig);
  const classicPreset = config.presets[0][1];

  const deps: {[key: string]: string} = {
    '@docusaurus/core': DOCUSAURUS_VERSION,
    '@docusaurus/preset-classic': DOCUSAURUS_VERSION,
    clsx: '^1.1.1',
    react: '^16.10.2',
    'react-dom': '^16.10.2',
  };
  createClientRedirects(siteConfig, deps, config);
  createLandingPage(newDir, siteDir);
  migrateStaticFiles(siteDir, newDir);
  migrateBlogFiles(siteDir, newDir, classicPreset, migrateMdFiles);
  handleVersioning(siteDir, newDir, config, migrateMdFiles);
  migrateLatestDocs(siteDir, newDir, migrateMdFiles);
  migrateLatestSidebar(siteDir, newDir, classicPreset, siteConfig);
  fs.writeFileSync(
    path.join(newDir, 'docusaurus.config.js'),
    `module.exports=${JSON.stringify(config, null, 2)}`,
  );
  migratePackageFile(siteDir, deps, newDir);
}

export function createConfigFile(
  siteConfig: VersionOneConfig,
): VersionTwoConfig {
  const homePageId = siteConfig.headerLinks?.filter((value) => value.doc)[0]
    .doc;
  return {
    title: siteConfig.title ?? '',
    tagline: siteConfig.tagline,
    url: siteConfig.url ?? '',
    baseUrl: siteConfig.baseUrl ?? '',
    organizationName: siteConfig.organizationName,
    projectName: siteConfig.projectName,
    scripts: siteConfig.scripts,
    stylesheets: siteConfig.stylesheets,
    favicon: siteConfig.favicon ?? '',
    customFields: {
      users: siteConfig.users,
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            path: 'docs',
            homePageId,
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            editUrl: siteConfig.editUrl,
          },
          blog: {},
          theme: {},
        },
      ],
    ],
    plugins: [],
    themeConfig: {
      navbar: {
        title: siteConfig.title,
        logo: {
          src: siteConfig.headerIcon,
        },
        image: siteConfig.ogImage,
        links: (siteConfig.headerLinks ?? [])
          .map((link) => {
            if (link.doc) {
              return {
                to: `docs/${link.doc === homePageId ? '' : link.doc}`,
                label: link.label,
                position: 'left',
              };
            }
            if (link.page) {
              return {
                to: `/${link.page}`,
                label: link.label,
                position: 'left',
              };
            }
            if (link.href) {
              return {...link, position: 'left'};
            }
            return null;
          })
          .filter(Boolean),
      },
      footer: {
        links: siteConfig.twitterUsername
          ? [
              {
                title: 'Community',
                items: [
                  {
                    label: 'Twitter',
                    to: `https://twitter.com/${siteConfig.twitterUsername}`,
                  },
                ],
              },
            ]
          : [],
        copyright: siteConfig.copyright,
        logo: {
          src: siteConfig.footerIcon,
        },
      },
      algolia: siteConfig.algolia ? siteConfig.algolia : undefined,
    },
  };
}

function createClientRedirects(
  siteConfig: VersionOneConfig,
  deps: {[key: string]: string},
  config: VersionTwoConfig,
): void {
  if (!siteConfig.cleanUrl) {
    deps['@docusaurus/plugin-client-redirects'] = DOCUSAURUS_VERSION;
    config.plugins.push([
      '@docusaurus/plugin-client-redirects',
      {fromExtensions: ['html']},
    ]);
  }
}

function createLandingPage(newDir: string, siteDir: string): void {
  fs.mkdirpSync(path.join(newDir, 'src', 'pages'));
  if (fs.existsSync(path.join(siteDir, 'pages', 'en'))) {
    const indexPage = `import Layout from "@theme/Layout";
    import React from "react";
    
    export default () => {
      return <Layout />;
    };
    `;
    fs.writeFileSync(`${newDir}/src/pages/index.js`, indexPage);
  } else {
    console.log('Ignoring Pages');
  }
}

function migrateStaticFiles(siteDir: string, newDir: string): void {
  try {
    fs.statSync(`${siteDir}/static`);
    fs.copySync(`${siteDir}/static`, `${newDir}/static`);
  } catch {
    console.log('Ignoring static assets');
    fs.mkdirSync(`${newDir}/static`);
  }
}

function migrateBlogFiles(
  siteDir: string,
  newDir: string,
  classicPreset: ClassicPresetEntries,
  migrateMDFiles: boolean,
): void {
  try {
    fs.statSync(`${siteDir}/blog`);
    fs.copySync(`${siteDir}/blog`, `${newDir}/blog`);
    const files = walk(`${newDir}/blog`);
    files.forEach((file) => {
      const content = String(fs.readFileSync(file));
      fs.writeFileSync(file, sanitizedFileContent(content, migrateMDFiles));
    });
    classicPreset.blog.path = 'blog';
  } catch {
    console.log('No Blog found');
  }
}

function handleVersioning(
  siteDir: string,
  newDir: string,
  config: VersionTwoConfig,
  migrateMDFiles: boolean,
): void {
  if (fs.existsSync(path.join(siteDir, 'versions.json'))) {
    const loadedVersions: Array<string> = JSON.parse(
      String(fs.readFileSync(path.join(siteDir, 'versions.json'))),
    );
    fs.copyFile(
      path.join(siteDir, 'versions.json'),
      path.join(newDir, 'versions.json'),
    );
    const versions = loadedVersions.reverse();
    const versionRegex = new RegExp(`version-(${versions.join('|')})-`, 'mgi');
    migrateVersionedSidebar(siteDir, newDir, versions, versionRegex, config);
    fs.mkdirpSync(path.join(newDir, 'versioned_docs'));
    migrateVersionedDocs(
      versions,
      siteDir,
      newDir,
      versionRegex,
      migrateMDFiles,
    );
  }
}

function migrateVersionedDocs(
  versions: string[],
  siteDir: string,
  newDir: string,
  versionRegex: RegExp,
  migrateMDFiles: boolean,
): void {
  versions.reverse().forEach((version, index) => {
    if (index === 0) {
      fs.copySync(
        path.join(siteDir, '..', 'docs'),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
      fs.copySync(
        path.join(siteDir, 'versioned_docs', `version-${version}`),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
      return;
    }
    try {
      fs.mkdirsSync(path.join(newDir, 'versioned_docs', `version-${version}`));
      fs.copySync(
        path.join(newDir, 'versioned_docs', `version-${versions[index - 1]}`),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
      fs.copySync(
        path.join(siteDir, 'versioned_docs', `version-${version}`),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
    } catch {
      fs.copySync(
        path.join(newDir, 'versioned_docs', `version-${versions[index - 1]}`),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
    }
  });
  const files = walk(path.join(newDir, 'versioned_docs'));
  files.forEach((pathToFile) => {
    const content = fs.readFileSync(pathToFile).toString();
    fs.writeFileSync(
      pathToFile,
      sanitizedFileContent(content.replace(versionRegex, ''), migrateMDFiles),
    );
  });
}

function migrateVersionedSidebar(
  siteDir: string,
  newDir: string,
  versions: string[],
  versionRegex: RegExp,
  config: VersionTwoConfig,
): void {
  if (fs.existsSync(path.join(siteDir, 'versioned_sidebars'))) {
    fs.mkdirpSync(path.join(newDir, 'versioned_sidebars'));
    const sidebars: {
      entries: SidebarEntries;
      version: string;
    }[] = [];
    versions.forEach((version, index) => {
      let sidebarEntries: SidebarEntries;
      const sidebarPath = path.join(
        siteDir,
        'versioned_sidebars',
        `version-${version}-sidebars.json`,
      );
      try {
        fs.statSync(sidebarPath);
        sidebarEntries = JSON.parse(String(fs.readFileSync(sidebarPath)));
      } catch {
        sidebars.push({version, entries: sidebars[index - 1].entries});
        return;
      }
      const newSidebar = Object.entries(sidebarEntries).reduce(
        (topLevel: {[key: string]: any}, value) => {
          const key = value[0].replace(versionRegex, '');
          // eslint-disable-next-line no-param-reassign
          topLevel[key] = Object.entries(value[1]).reduce(
            (
              acc: {[key: string]: Array<Record<string, unknown> | string>},
              val,
            ) => {
              acc[val[0].replace(versionRegex, '')] = (val[1] as Array<
                any
              >).map((item) => {
                if (typeof item === 'string') {
                  return item.replace(versionRegex, '');
                }
                return {
                  type: 'category',
                  label: item.label,
                  ids: item.ids.map((id: string) =>
                    id.replace(versionRegex, ''),
                  ),
                };
              });
              return acc;
            },
            {},
          );
          return topLevel;
        },
        {},
      );
      sidebars.push({version, entries: newSidebar});
    });
    sidebars.forEach((sidebar) => {
      const newSidebar = Object.entries(sidebar.entries).reduce(
        (acc: {[key: string]: any}, val) => {
          const key = `version-${sidebar.version}/${val[0]}`;
          // eslint-disable-next-line prefer-destructuring
          acc[key] = Object.entries(val[1]).map((value) => {
            return {
              type: 'category',
              label: value[0],
              items: (value[1] as Array<any>).map((sidebarItem) => {
                if (typeof sidebarItem === 'string') {
                  return {
                    type: 'doc',
                    id: `version-${sidebar.version}/${sidebarItem}`,
                  };
                }
                return {
                  type: 'category',
                  label: sidebarItem.label,
                  items: sidebarItem.ids.map((id: string) => ({
                    type: 'doc',
                    id: `version-${sidebar.version}/${id}`,
                  })),
                };
              }),
            };
          });
          return acc;
        },
        {},
      );
      fs.writeFileSync(
        path.join(
          newDir,
          'versioned_sidebars',
          `version-${sidebar.version}-sidebars.json`,
        ),
        JSON.stringify(newSidebar, null, 2),
      );
    });
    config.themeConfig.navbar.links.push({
      label: 'Version',
      to: 'docs',
      position: 'right',
      items: [
        {
          label: versions[versions.length - 1],
          to: 'docs/',
          activeBaseRegex: `docs/(?!${versions.join('|')}|next)`,
        },
        ...versions
          .reverse()
          .slice(1)
          .map((version) => ({
            label: version,
            to: `docs/${version}/`,
          })),
        {
          label: 'Master/Unreleased',
          to: `docs/next/`,
          activeBaseRegex: `docs/next/(?!support|team|resources)`,
        },
      ],
    });
  }
}

function migrateLatestSidebar(
  siteDir: string,
  newDir: string,
  classicPreset: ClassicPresetEntries,
  siteConfig: VersionOneConfig,
): void {
  try {
    fs.copyFileSync(
      path.join(siteDir, 'sidebars.json'),
      path.join(newDir, 'sidebars.json'),
    );
    classicPreset.docs.sidebarPath = path.join(newDir, 'sidebars.json');
  } catch {
    console.log('Ignoring sidebar');
  }
  if (siteConfig.colors) {
    const css = `
      :root{
        --ifm-color-primary: ${siteConfig.colors.primaryColor};
      }
      `;
    fs.mkdirpSync(path.join(newDir, 'src', 'css'));
    fs.writeFileSync(path.join(newDir, 'src', 'css', 'customTheme.css'), css);
    classicPreset.theme.customCss = path.join(
      newDir,
      'src',
      'css',
      'customTheme.css',
    );
  }
}

function migrateLatestDocs(
  siteDir: string,
  newDir: string,
  migrateMDFiles: boolean,
): void {
  try {
    fs.copySync(path.join(siteDir, '..', 'docs'), path.join(newDir, 'docs'));
    const files = walk(path.join(newDir, 'docs'));
    files.forEach((file) => {
      const content = String(fs.readFileSync(file));
      fs.writeFileSync(file, sanitizedFileContent(content, migrateMDFiles));
    });
  } catch {
    fs.mkdir(path.join(newDir, 'docs'));
  }
}

function migratePackageFile(
  siteDir: string,
  deps: {[key: string]: string},
  newDir: string,
): void {
  const packageFile = importFresh(`${siteDir}/package.json`) as {
    [key: string]: any;
  };
  packageFile.scripts = {
    ...packageFile.scripts,
    start: 'docusaurus start',
    build: 'docusaurus build',
    swizzle: 'docusaurus swizzle',
    deploy: 'docusaurus deploy',
  };
  if (packageFile.dependencies) {
    delete packageFile.dependencies.docusaurus;
  }
  if (packageFile.devDependencies) {
    delete packageFile.devDependencies.docusaurus;
  }

  packageFile.dependencies = {
    ...packageFile.dependencies,
    ...deps,
  };
  fs.writeFileSync(
    path.join(newDir, 'package.json'),
    JSON.stringify(packageFile, null, 2),
  );
}

export async function migrateMDToMDX(
  siteDir: string,
  newDir: string,
): Promise<void> {
  fs.mkdirpSync(newDir);
  fs.copySync(siteDir, newDir);
  const files = walk(newDir);
  files.forEach((file) => {
    fs.writeFileSync(
      file,
      sanitizedFileContent(String(fs.readFileSync(file)), true),
    );
  });
  console.log(`Migrated ${siteDir} to ${newDir}`);
}
