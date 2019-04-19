/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import routesChunkNames from '@generated/routesChunkNames';
import prefetchHelper from './prefetch';

const docusaurus = {
  prefetch: routePath => {
    console.log(routePath);
    // Skip prefetching if we know user is on slow or constrained connection
    if (`connection` in navigator) {
      if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
        return false;
      }
      if (navigator.connection.saveData) {
        return false;
      }
    }

    // Find all chunk names needed for that particular route
    // TODO: make it more efficient and declarative
    const chunkNamesNeeded = [];
    function dfs(target) {
      if (!target) {
        return;
      }
      if (Array.isArray(target)) {
        target.forEach(value => {
          dfs(value);
        });
        return;
      }

      if (typeof target === 'object') {
        Object.keys(target).forEach(key => {
          dfs(target[key]);
        });
        return;
      }
      chunkNamesNeeded.push(target);
    }
    dfs(routesChunkNames[routePath]);

    // Get all important webpack chunk assets we need to prefetch
    const chunkAssetsNeeded = chunkNamesNeeded.reduce((arr, chunkName) => {
      const chunkAssets = window.__chunkMapping[chunkName];
      return arr.concat(chunkAssets);
    }, []);

    // Prefetch all the chunks assets file needed
    chunkAssetsNeeded.map(prefetchHelper);

    return true;
  },
};

export default docusaurus;
