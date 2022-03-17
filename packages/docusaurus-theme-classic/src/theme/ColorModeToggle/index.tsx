/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useEffect} from 'react';
import type {Props} from '@theme/ColorModeToggle';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import IconLightMode from '@theme/IconLightMode';
import IconDarkMode from '@theme/IconDarkMode';

import clsx from 'clsx';
import styles from './styles.module.css';

function ColorModeToggle({
  className,
  darkModeEnabled: defaultDarkModeEnabled,
  onChange,
}: Props): JSX.Element {
  const isBrowser = useIsBrowser();
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    defaultDarkModeEnabled,
  );

  useEffect(() => {
    setDarkModeEnabled(defaultDarkModeEnabled);
  }, [defaultDarkModeEnabled]);

  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode: darkModeEnabled
        ? translate({
            message: 'dark mode',
            id: 'theme.colorToggle.ariaLabel.mode.dark',
            description: 'The name for the dark color mode',
          })
        : translate({
            message: 'light mode',
            id: 'theme.colorToggle.ariaLabel.mode.light',
            description: 'The name for the light color mode',
          }),
    },
  );

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
        )}
        type="button"
        onClick={() => {
          setDarkModeEnabled(!darkModeEnabled);
          onChange(!darkModeEnabled);
        }}
        disabled={!isBrowser}
        title={title}
        aria-label={title}>
        <IconLightMode
          className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
        />
        <IconDarkMode
          className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
        />
      </button>
    </div>
  );
}

export default React.memo(ColorModeToggle);
