/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {StatusStrategy} from '@theme/NavbarStrategies';
import useThemeContext from '@theme/hooks/useThemeContext';
import CustomStrategies from '@theme/NavbarStrategies/CustomStrategies';
import useIsBrowser from '@docusaurus/useIsBrowser';

const alwaysActive: StatusStrategy<undefined> = () => {
  return 'active';
};

const useRouteMatch: StatusStrategy<string> = (routePattern) => {
  const isBrowser = useIsBrowser();
  if (!isBrowser) {
    return 'hidden';
  }
  return new RegExp(routePattern).test(window.location.pathname)
    ? 'active'
    : 'hidden';
};

const useRouteNotMatch: StatusStrategy<string> = (routePattern) => {
  const isBrowser = useIsBrowser();
  if (!isBrowser) {
    return 'active';
  }
  return new RegExp(routePattern).test(window.location.pathname)
    ? 'hidden'
    : 'active';
};

const useColorMode: StatusStrategy<string> = (mode) => {
  const {isDarkTheme} = useThemeContext();
  const activeOnDark = mode === 'dark';
  return isDarkTheme === activeOnDark ? 'active' : 'hidden';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavbarStrategies: Record<string, StatusStrategy<any>> = {
  routeMatch: useRouteMatch,
  routeNotMatch: useRouteNotMatch,
  colorMode: useColorMode,
  alwaysActive,
  ...CustomStrategies,
};

export default NavbarStrategies;
