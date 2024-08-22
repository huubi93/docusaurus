/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

async function importFaster() {
   
  return import('@docusaurus/faster');
}

async function ensureFaster() {
  try {
    return await importFaster();
  } catch (error) {
    throw new Error(
      'Your Docusaurus site need to add the @docusaurus/faster package as a dependency.',
      {cause: error},
    );
  }
}

export async function getFasterJsLoader() {
  const faster = await ensureFaster();
  return faster.jsLoader;
}
