/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export {importSwcJsMinifierOptions, importSwcJsLoaderFactory} from './faster';

export {
  getCurrentBundler,
  getCSSExtractPlugin,
  getCopyPlugin,
  getProgressBarPlugin,
} from './currentBundler';

export {getMinimizers} from './minification';
