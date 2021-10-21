/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import usePrismTheme from '@theme/hooks/usePrismTheme';
import styles from './styles.module.css';
import CodeBlock from '@theme-init/CodeBlock';

function Header({children}) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function ResultWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks">
          Result
        </Translate>
      </Header>
      <div className={styles.playgroundPreview}>
        <LivePreview />
        <LiveError />
      </div>
    </>
  );
}

function EditorWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks">
          Live Editor
        </Translate>
      </Header>
      <LiveEditor className={styles.playgroundEditor} />
    </>
  );
}

function StaticCodeBlock({className, children}) {
  return (
    <>
      <Header>
        <Translate id="theme.Playground.liveEditor">Live Editor</Translate>
      </Header>
      <CodeBlock className={className}>{children}</CodeBlock>
    </>
  );
}

export default function Playground({children, transformCode, ...props}) {
  const {
    siteConfig: {
      themeConfig: {
        liveCodeBlock: {playgroundPosition},
      },
    },
  } = useDocusaurusContext();
  const prismTheme = usePrismTheme();

  return (
    // https://github.com/facebook/docusaurus/issues/5747
    <BrowserOnly
      fallback={
        <StaticCodeBlock className={props.className}>
          {children}
        </StaticCodeBlock>
      }>
      {() => (
        <div className={styles.playgroundContainer}>
          <LiveProvider
            code={children.replace(/\n$/, '')}
            transformCode={transformCode || ((code) => `${code};`)}
            theme={prismTheme}
            {...props}>
            {playgroundPosition === 'top' ? (
              <>
                <ResultWithHeader />
                <EditorWithHeader />
              </>
            ) : (
              <>
                <EditorWithHeader />
                <ResultWithHeader />
              </>
            )}
          </LiveProvider>
        </div>
      )}
    </BrowserOnly>
  );
}
