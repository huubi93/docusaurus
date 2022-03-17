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
  colorMode: defaultColorMode,
  onChange,
}: Props): JSX.Element {
  const isBrowser = useIsBrowser();
  const [colorMode, setColorMode] = useState(defaultColorMode);

  useEffect(() => {
    setColorMode(defaultColorMode);
  }, [defaultColorMode]);

  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode: colorMode
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
          const newColorMode = colorMode === 'dark' ? 'light' : 'dark';
          setColorMode(newColorMode);
          onChange(newColorMode);
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
