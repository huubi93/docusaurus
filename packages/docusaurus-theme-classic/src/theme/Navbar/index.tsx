/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarItems from '@theme/Navbar/Items';

export default function Navbar(): JSX.Element {
  return (
    <NavbarLayout>
      <NavbarItems />
    </NavbarLayout>
  );
}
