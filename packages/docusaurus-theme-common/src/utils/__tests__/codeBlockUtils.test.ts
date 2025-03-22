/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getLineNumbersStart,
  type MagicCommentConfig,
  getCodeBlockTitle,
  parseLanguage,
  parseLines,
  parseCodeBlockMetaOptions,
} from '../codeBlockUtils';

const defaultMagicComments: MagicCommentConfig[] = [
  {
    className: 'theme-code-block-highlighted-line',
    line: 'highlight-next-line',
    block: {start: 'highlight-start', end: 'highlight-end'},
  },
];

describe('parseCodeBlockMetaOptions', () => {
  describe('title', () => {
    it('parses double quote delimited title', () => {
      expect(parseCodeBlockMetaOptions(`title="index.js"`).title).toBe(
        `index.js`,
      );
    });

    it('parses single quote delimited title', () => {
      expect(parseCodeBlockMetaOptions(`title='index.js'`).title).toBe(
        `index.js`,
      );
    });

    it('does not parse mismatched quote delimiters', () => {
      expect(parseCodeBlockMetaOptions(`title="index.js'`).title).toBe(``);
    });

    it('parses undefined metastring', () => {
      expect(parseCodeBlockMetaOptions(undefined).title).toBe(``);
    });

    it('parses metastring with no title specified', () => {
      expect(parseCodeBlockMetaOptions(`{1,2-3}`).title).toBe(``);
    });

    it('parses with multiple metadata title first', () => {
      expect(
        parseCodeBlockMetaOptions(`title="index.js" label="JavaScript"`).title,
      ).toBe(`index.js`);
    });

    it('parses with multiple metadata title last', () => {
      expect(
        parseCodeBlockMetaOptions(`label="JavaScript" title="index.js"`).title,
      ).toBe(`index.js`);
    });

    it('parses double quotes when delimited by single quotes', () => {
      expect(
        parseCodeBlockMetaOptions(`title='console.log("Hello, World!")'`).title,
      ).toBe(`console.log("Hello, World!")`);
    });

    it('parses single quotes when delimited by double quotes', () => {
      expect(
        parseCodeBlockMetaOptions(`title="console.log('Hello, World!')"`).title,
      ).toBe(`console.log('Hello, World!')`);
    });
  });
});
describe('parseLanguage', () => {
  it('works', () => {
    expect(parseLanguage('language-foo xxx yyy')).toBe('foo');
    expect(parseLanguage('xxxxx language-foo yyy')).toBe('foo');
    expect(parseLanguage('xx-language-foo yyyy')).toBeUndefined();
    expect(parseLanguage('xxx yyy zzz')).toBeUndefined();
  });
});

describe('parseLines', () => {
  it('does not parse content with metastring', () => {
    expect(
      parseLines('aaaaa\nnnnnn', {
        metastring: '{1}',
        language: 'js',
        magicComments: defaultMagicComments,
      }),
    ).toMatchSnapshot();
    expect(
      parseLines(
        `// highlight-next-line
aaaaa
bbbbb`,
        {
          metastring: '{1}',
          language: 'js',
          magicComments: defaultMagicComments,
        },
      ),
    ).toMatchSnapshot();
    expect(
      parseLines(
        `aaaaa
bbbbb`,
        {
          metastring: '{1}',
          language: 'undefined',
          magicComments: defaultMagicComments,
        },
      ),
    ).toMatchSnapshot();
    expect(() =>
      parseLines(
        `aaaaa
bbbbb`,
        {
          metastring: '{1}',
          language: 'js',
          magicComments: [],
        },
      ),
    ).toThrowErrorMatchingInlineSnapshot(
      `"A highlight range has been given in code block's metastring (\`\`\` {1}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges."`,
    );
  });
  it('does not parse content with no language', () => {
    expect(
      parseLines(
        `// highlight-next-line
aaaaa
bbbbb`,
        {
          metastring: '',
          language: undefined,
          magicComments: defaultMagicComments,
        },
      ),
    ).toMatchSnapshot();
  });
  it('removes lines correctly', () => {
    expect(
      parseLines(
        `// highlight-next-line
aaaaa
bbbbb`,
        {metastring: '', language: 'js', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot();
    expect(
      parseLines(
        `// highlight-start
aaaaa
// highlight-end
bbbbb`,
        {metastring: '', language: 'js', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot();
    expect(
      parseLines(
        `// highlight-start
// highlight-next-line
aaaaa
bbbbbbb
// highlight-next-line
// highlight-end
bbbbb`,
        {metastring: '', language: 'js', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot();
  });
  it('respects language', () => {
    expect(
      parseLines(
        `# highlight-next-line
aaaaa
bbbbb`,
        {metastring: '', language: 'js', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot('js');
    expect(
      parseLines(
        `/* highlight-next-line */
aaaaa
bbbbb`,
        {metastring: '', language: 'py', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot('py');
    expect(
      parseLines(
        `// highlight-next-line
aaaa
/* highlight-next-line */
bbbbb
# highlight-next-line
ccccc
<!-- highlight-next-line -->
dddd`,
        {metastring: '', language: 'py', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot('py');
    expect(
      parseLines(
        `// highlight-next-line
aaaa
/* highlight-next-line */
bbbbb
# highlight-next-line
ccccc
<!-- highlight-next-line -->
dddd`,
        {metastring: '', language: '', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot('none');
    expect(
      parseLines(
        `// highlight-next-line
aaaa
{/* highlight-next-line */}
bbbbb
<!-- highlight-next-line -->
dddd`,
        {metastring: '', language: 'jsx', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot('jsx');
    expect(
      parseLines(
        `// highlight-next-line
aaaa
{/* highlight-next-line */}
bbbbb
<!-- highlight-next-line -->
dddd`,
        {metastring: '', language: 'html', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot('html');
    expect(
      parseLines(
        `---
# highlight-next-line
aaa: boo
---

aaaa

<div>
{/* highlight-next-line */}
foo
</div>

bbbbb
<!-- highlight-next-line -->
dddd

\`\`\`js
// highlight-next-line
console.log("preserved");
\`\`\`
`,
        {metastring: '', language: 'md', magicComments: defaultMagicComments},
      ),
    ).toMatchSnapshot('md');
  });

  it('parses multiple types of magic comments', () => {
    expect(
      parseLines(
        `
// highlight-next-line
highlighted
// collapse-next-line
collapsed
/* collapse-start */
collapsed
collapsed
/* collapse-end */
`,
        {
          language: 'js',
          metastring: '',
          magicComments: [
            {
              className: 'highlight',
              line: 'highlight-next-line',
              block: {start: 'highlight-start', end: 'highlight-end'},
            },
            {
              className: 'collapse',
              line: 'collapse-next-line',
              block: {start: 'collapse-start', end: 'collapse-end'},
            },
          ],
        },
      ),
    ).toMatchSnapshot();
  });

  it('handles one line with multiple class names', () => {
    expect(
      parseLines(
        `
// highlight-next-line
// collapse-next-line
highlighted and collapsed
/* collapse-start */
/* highlight-start */
highlighted and collapsed
highlighted and collapsed
/* collapse-end */
Only highlighted
/* highlight-end */
/* collapse-start */
Only collapsed
/* highlight-start */
highlighted and collapsed
highlighted and collapsed
/* highlight-end */
Only collapsed
// highlight-next-line
highlighted and collapsed
/* collapse-end */
`,
        {
          language: 'js',
          metastring: '',
          magicComments: [
            {
              className: 'highlight',
              line: 'highlight-next-line',
              block: {start: 'highlight-start', end: 'highlight-end'},
            },
            {
              className: 'collapse',
              line: 'collapse-next-line',
              block: {start: 'collapse-start', end: 'collapse-end'},
            },
          ],
        },
      ),
    ).toMatchSnapshot();
    expect(
      parseLines(
        `// a
// b
// c
// d
line
// b
// d
line
`,
        {
          language: 'js',
          metastring: '',
          magicComments: [
            {className: 'a', line: 'a'},
            {className: 'b', line: 'b'},
            {className: 'c', line: 'c'},
            {className: 'd', line: 'd'},
          ],
        },
      ),
    ).toMatchSnapshot();
  });
});

describe('getLineNumbersStart', () => {
  it('with nothing set', () => {
    expect(
      getLineNumbersStart({
        showLineNumbers: undefined,
        metastring: undefined,
      }),
    ).toMatchSnapshot();
    expect(
      getLineNumbersStart({
        showLineNumbers: undefined,
        metastring: '',
      }),
    ).toMatchSnapshot();
  });

  describe('handles prop', () => {
    describe('combined with metastring', () => {
      it('set to true', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: true,
            metastring: 'showLineNumbers=2',
          }),
        ).toMatchSnapshot();
      });

      it('set to false', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: false,
            metastring: 'showLineNumbers=2',
          }),
        ).toMatchSnapshot();
      });

      it('set to number', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: 10,
            metastring: 'showLineNumbers=2',
          }),
        ).toMatchSnapshot();
      });
    });

    describe('standalone', () => {
      it('set to true', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: true,
            metastring: undefined,
          }),
        ).toMatchSnapshot();
      });

      it('set to false', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: false,
            metastring: undefined,
          }),
        ).toMatchSnapshot();
      });

      it('set to number', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: 10,
            metastring: undefined,
          }),
        ).toMatchSnapshot();
      });
    });
  });

  describe('handles metadata', () => {
    describe('standalone', () => {
      it('set as flag', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: undefined,
            metastring: 'showLineNumbers',
          }),
        ).toMatchSnapshot();
      });
      it('set with number', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: undefined,
            metastring: 'showLineNumbers=10',
          }),
        ).toMatchSnapshot();
      });
    });

    describe('combined with other options', () => {
      it('set as flag', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: undefined,
            metastring: '{1,2-3}  title="file.txt" showLineNumbers noInline',
          }),
        ).toMatchSnapshot();
      });
      it('set with number', () => {
        expect(
          getLineNumbersStart({
            showLineNumbers: undefined,
            metastring: '{1,2-3}  title="file.txt" showLineNumbers=10 noInline',
          }),
        ).toMatchSnapshot();
      });
    });
  });
});

describe('getCodeBlockTitle', () => {
  it('with nothing set', () => {
    expect(
      getCodeBlockTitle({
        titleProp: undefined,
        metaOptions: {},
      }),
    ).toMatchSnapshot();
  });

  describe('returns titleProp', () => {
    it('with empty options', () => {
      expect(
        getCodeBlockTitle({
          titleProp: 'Prop',
          metaOptions: {},
        }),
      ).toMatchSnapshot();
    });
    it('with empty string on option', () => {
      expect(
        getCodeBlockTitle({
          titleProp: 'Prop',
          metaOptions: {
            title: '',
          },
        }),
      ).toMatchSnapshot();
    });
  });

  describe('returns option', () => {
    it('with undefined prop', () => {
      expect(
        getCodeBlockTitle({
          titleProp: undefined,
          metaOptions: {
            title: 'Option',
          },
        }),
      ).toMatchSnapshot();
    });
    it('with empty prop', () => {
      expect(
        getCodeBlockTitle({
          titleProp: '',
          metaOptions: {
            title: 'Option',
          },
        }),
      ).toMatchSnapshot();
    });
    it('with filled prop', () => {
      expect(
        getCodeBlockTitle({
          titleProp: 'Prop',
          metaOptions: {
            title: 'Option',
          },
        }),
      ).toMatchSnapshot();
    });
  });
});
