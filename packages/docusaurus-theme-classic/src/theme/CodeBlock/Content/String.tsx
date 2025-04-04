/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ComponentProps, type ReactNode} from 'react';
import clsx from 'clsx';
import {useThemeConfig, usePrismTheme} from '@docusaurus/theme-common';
import {
  useCodeWordWrap,
  createCodeBlockMetadata,
  type CodeBlockMetadata,
  CodeBlockContextProvider,
  useCodeBlockContext,
} from '@docusaurus/theme-common/internal';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {Highlight} from 'prism-react-renderer';
import Line from '@theme/CodeBlock/Line';
import CopyButton from '@theme/CodeBlock/CopyButton';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import Container from '@theme/CodeBlock/Container';
import type {Props} from '@theme/CodeBlock/Content/String';

import styles from './styles.module.css';

function CodeBlockTitle({children}: {children: ReactNode}): ReactNode {
  // Just a pass-through for now
  return children;
}

// TODO Docusaurus v4: remove useless forwardRef
const Pre = React.forwardRef<HTMLPreElement, ComponentProps<'pre'>>(
  (props, ref) => {
    return (
      <pre
        ref={ref}
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
        tabIndex={0}
        {...props}
        className={clsx(props.className, styles.codeBlock, 'thin-scrollbar')}
      />
    );
  },
);

function Code(props: ComponentProps<'code'>) {
  const {metadata} = useCodeBlockContext();
  return (
    <code
      {...props}
      className={clsx(
        props.className,
        styles.codeBlockLines,
        metadata.lineNumbersStart !== undefined &&
          styles.codeBlockLinesWithNumbering,
      )}
      style={{
        ...props.style,
        counterReset:
          metadata.lineNumbersStart === undefined
            ? undefined
            : `line-count ${metadata.lineNumbersStart - 1}`,
      }}
    />
  );
}

function CodeBlockContent(): ReactNode {
  const {metadata, wordWrap} = useCodeBlockContext();
  const prismTheme = usePrismTheme();
  const {code, language, lineNumbersStart, lineClassNames} = metadata;
  return (
    <Highlight theme={prismTheme} code={code} language={language}>
      {({className, style, tokens: lines, getLineProps, getTokenProps}) => (
        <Pre ref={wordWrap.codeBlockRef} className={className} style={style}>
          <Code>
            {lines.map((line, i) => (
              <Line
                key={i}
                line={line}
                getLineProps={getLineProps}
                getTokenProps={getTokenProps}
                classNames={lineClassNames[i]}
                showLineNumbers={lineNumbersStart !== undefined}
              />
            ))}
          </Code>
        </Pre>
      )}
    </Highlight>
  );
}

function CodeBlockButtons(): ReactNode {
  const {metadata, wordWrap} = useCodeBlockContext();
  return (
    <div className={styles.buttonGroup}>
      {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
        <WordWrapButton
          className={styles.codeButton}
          onClick={() => wordWrap.toggle()}
          isEnabled={wordWrap.isEnabled}
        />
      )}
      <CopyButton className={styles.codeButton} code={metadata.code} />
    </div>
  );
}

function CodeBlockLayout(): ReactNode {
  const isBrowser = useIsBrowser();
  const {metadata} = useCodeBlockContext();
  return (
    <Container as="div" className={metadata.className}>
      {metadata.title && (
        <div className={styles.codeBlockTitle}>
          <CodeBlockTitle>{metadata.title}</CodeBlockTitle>
        </div>
      )}
      <div className={styles.codeBlockContent}>
        <CodeBlockContent />
        {isBrowser && <CodeBlockButtons />}
      </div>
    </Container>
  );
}

function useCodeBlockMetadata(props: Props): CodeBlockMetadata {
  const {prism} = useThemeConfig();
  return createCodeBlockMetadata({
    code: props.children,
    className: props.className,
    metastring: props.metastring,
    magicComments: prism.magicComments,
    defaultLanguage: prism.defaultLanguage,
    language: props.language,
    title: props.title,
    showLineNumbers: props.showLineNumbers,
  });
}

export default function CodeBlockString(props: Props): ReactNode {
  const metadata = useCodeBlockMetadata(props);
  const wordWrap = useCodeWordWrap();
  return (
    <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
      <CodeBlockLayout />
    </CodeBlockContextProvider>
  );
}
