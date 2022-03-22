/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @jest-environment jsdom
 */

// Jest doesn't allow pragma below other comments. https://github.com/facebook/jest/issues/12573
// eslint-disable-next-line header/header
import {usePrevious} from '../reactUtils';
import {renderHook} from '@testing-library/react-hooks';

describe('usePrevious', () => {
  it('returns the previous value of a variable', () => {
    const {result, rerender} = renderHook((val) => usePrevious(val), {
      initialProps: 1,
    });
    expect(result.current).toBeUndefined();
    rerender(2);
    expect(result.current).toBe(1);
    rerender(3);
    expect(result.current).toBe(2);
  });
});
