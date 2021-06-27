/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import type {Props} from '@theme/NavbarItem';

const NavbarItemComponents = {
  default: () => DefaultNavbarItem,
  localeDropdown: () => LocaleDropdownNavbarItem,
  search: () => SearchNavbarItem,

  // Need to lazy load these items as we don't know for sure the docs plugin is loaded
  // See https://github.com/facebook/docusaurus/issues/3360
  /* eslint-disable @typescript-eslint/no-var-requires, global-require */
  docsVersion: () => require('@theme/NavbarItem/DocsVersionNavbarItem').default,
  docsVersionDropdown: () =>
    require('@theme/NavbarItem/DocsVersionDropdownNavbarItem').default,
  doc: () => require('@theme/NavbarItem/DocNavbarItem').default,
  /* eslint-enable @typescript-eslint/no-var-requires, global-require */
} as const;

export type Types = keyof typeof NavbarItemComponents;

const getNavbarItemComponent = (type: Types = 'default') => {
  const navbarItemComponent = NavbarItemComponents[type];
  if (!navbarItemComponent) {
    throw new Error(`No NavbarItem component found for type "${type}".`);
  }
  return navbarItemComponent();
};

export default function NavbarItem({type, ...props}: Props): JSX.Element {
  const NavbarItemComponent = getNavbarItemComponent(type);
  return <NavbarItemComponent {...props} />;
}
