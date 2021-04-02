/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import {useLatestVersion, useActiveDocContext} from '@theme/hooks/useDocs';
import clsx from 'clsx';
import type {Props} from '@theme/NavbarItem/DocNavbarItem';
import {useDocsPreferredVersion} from '@docusaurus/theme-common';

export default function DocNavbarItem({
  docId,
  activeSidebarClassName,
  label: staticLabel,
  docsPluginId,
  ...props
}: Props): JSX.Element {
  const {activeVersion, activeDoc} = useActiveDocContext(docsPluginId);
  const {preferredVersion} = useDocsPreferredVersion(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId);

  const version = activeVersion ?? preferredVersion ?? latestVersion;

  const doc = version.docs.find((versionDoc) => versionDoc.id === docId);
  if (!doc) {
    const docIds = version.docs.map((versionDoc) => versionDoc.id).join('\n- ')
    throw new Error(
      `DocNavbarItem: couldn't find any doc with id=${docId} in version ${
        version.name
      }.
Available docIds=\n- ${docIds}`,
    );
  }

  return (
    <DefaultNavbarItem
      exact
      {...props}
      className={clsx(props.className, {
        [activeSidebarClassName]:
          activeDoc && activeDoc.sidebar === doc.sidebar,
      })}
      label={staticLabel ?? doc.id}
      to={doc.path}
    />
  );
}
