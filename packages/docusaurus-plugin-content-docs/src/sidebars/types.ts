/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Optional} from 'utility-types';
import type {
  DocMetadataBase,
  VersionMetadata,
  NumberPrefixParser,
  SidebarOptions,
} from '../types';

// Makes all properties visible when hovering over the type
type Expand<T extends Record<string, unknown>> = {[P in keyof T]: T[P]};

export type SidebarItemBase = {
  className?: string;
  customProps?: Record<string, unknown>;
};

export type SidebarItemDoc = SidebarItemBase & {
  type: 'doc' | 'ref';
  label?: string;
  id: string;
};

export type SidebarItemLink = SidebarItemBase & {
  type: 'link';
  href: string;
  label: string;
};

export type SidebarItemAutogenerated = SidebarItemBase & {
  type: 'autogenerated';
  dirName: string;
};

type SidebarItemCategoryBase = SidebarItemBase & {
  type: 'category';
  label: string;
  collapsed: boolean;
  collapsible: boolean;
};

// The user-given configuration in sidebars.js, before normalization
export type SidebarItemCategoryConfig = Expand<
  Optional<SidebarItemCategoryBase, 'collapsed' | 'collapsible'> & {
    items: SidebarItemConfig[];
  }
>;

export type SidebarCategoriesShorthand = {
  [sidebarCategory: string]: SidebarItemConfig[];
};

export type SidebarItemConfig =
  | SidebarItemDoc
  | SidebarItemLink
  | SidebarItemAutogenerated
  | SidebarItemCategoryConfig
  | string
  | SidebarCategoriesShorthand;

export type SidebarConfig = SidebarCategoriesShorthand | SidebarItemConfig[];
export type SidebarsConfig = {
  [sidebarId: string]: SidebarConfig;
};

// Normalized but still has 'autogenerated', which will be handled in processing
export type NormalizedSidebarItemCategory = Expand<
  SidebarItemCategoryBase & {
    items: NormalizedSidebarItem[];
  }
>;

export type NormalizedSidebarItem =
  | SidebarItemDoc
  | SidebarItemLink
  | NormalizedSidebarItemCategory
  | SidebarItemAutogenerated;

export type NormalizedSidebar = NormalizedSidebarItem[];
export type NormalizedSidebars = {
  [sidebarId: string]: NormalizedSidebar;
};

export type SidebarItemCategory = Expand<
  SidebarItemCategoryBase & {
    items: SidebarItem[];
  }
>;

export type SidebarItem =
  | SidebarItemDoc
  | SidebarItemLink
  | SidebarItemCategory;

export type Sidebar = SidebarItem[];
export type SidebarItemType = SidebarItem['type'];
export type Sidebars = {
  [sidebarId: string]: Sidebar;
};

// Doc links have been resolved to URLs, ready to be passed to the theme
export type PropSidebarItemCategory = Expand<
  SidebarItemCategoryBase & {
    items: PropSidebarItem[];
  }
>;

export type PropSidebarItem = SidebarItemLink | PropSidebarItemCategory;
export type PropSidebar = PropSidebarItem[];
export type PropSidebars = {
  [sidebarId: string]: PropSidebar;
};

// Reduce API surface for options.sidebarItemsGenerator
// The user-provided generator fn should receive only a subset of metadata
// A change to any of these metadata can be considered as a breaking change
export type SidebarItemsGeneratorDoc = Pick<
  DocMetadataBase,
  'id' | 'frontMatter' | 'source' | 'sourceDirName' | 'sidebarPosition'
>;
export type SidebarItemsGeneratorVersion = Pick<
  VersionMetadata,
  'versionName' | 'contentPath'
>;

export type SidebarItemsGeneratorArgs = {
  item: SidebarItemAutogenerated;
  version: SidebarItemsGeneratorVersion;
  docs: SidebarItemsGeneratorDoc[];
  numberPrefixParser: NumberPrefixParser;
  options: SidebarOptions;
};
export type SidebarItemsGenerator = (
  generatorArgs: SidebarItemsGeneratorArgs,
) => Promise<SidebarItem[]>;

// Also inject the default generator to conveniently wrap/enhance/sort the default sidebar gen logic
// see https://github.com/facebook/docusaurus/issues/4640#issuecomment-822292320
export type SidebarItemsGeneratorOptionArgs = {
  defaultSidebarItemsGenerator: SidebarItemsGenerator;
} & SidebarItemsGeneratorArgs;
export type SidebarItemsGeneratorOption = (
  generatorArgs: SidebarItemsGeneratorOptionArgs,
) => Promise<SidebarItem[]>;
