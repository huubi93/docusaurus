/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import vfile from 'to-vfile';
import plugin from '../index';
import headings from '../../headings/index';
import type {
  MdxjsEsm,
  // @ts-expect-error: TODO see https://github.com/microsoft/TypeScript/issues/49721
} from 'mdast-util-mdx';

const processFixture = async (name: string) => {
  const {remark} = await import('remark');
  const {default: gfm} = await import('remark-gfm');
  const {default: mdx} = await import('remark-mdx');

  const filePath = path.join(
    __dirname,
    '__fixtures__',
    name.endsWith('.mdx') ? name : `${name}.md`,
  );

  const file = await vfile.read(filePath);
  const result = await remark()
    .use(headings)
    .use(gfm)
    .use(mdx)
    .use(plugin)
    // Permits to convert generated TOC back to string values
    // More convenient to reveiw tests
    .use(() => async (root) => {
      const {generate} = await import('astring');
      const {visit} = await import('unist-util-visit');
      visit(root, (child) => {
        if (child.type === 'mdxjsEsm') {
          const node = child as MdxjsEsm;
          node.value = node.data?.estree
            ? generate(node.data.estree)
            : node.value;
        }
      });
    })
    .process(file);

  return result.value;
};

describe('toc remark plugin', () => {
  it('outputs empty array for no TOC', async () => {
    const result = await processFixture('no-heading');
    expect(result).toMatchSnapshot();
  });

  // A very implicit API: we allow users to hand-write the toc variable. It will
  // get overwritten in most cases, but until we find a better way, better keep
  // supporting this
  it('does not overwrite TOC var if no TOC', async () => {
    const result = await processFixture('no-heading-with-toc-export');
    expect(result).toMatchSnapshot();
  });

  it('works on non text phrasing content', async () => {
    const result = await processFixture('non-text-content');
    expect(result).toMatchSnapshot();
  });

  it('escapes inline code', async () => {
    const result = await processFixture('inline-code');
    expect(result).toMatchSnapshot();
  });

  it('works on text content', async () => {
    const result = await processFixture('just-content');
    expect(result).toMatchSnapshot();
  });

  it('exports even with existing name', async () => {
    const result = await processFixture('name-exist');
    expect(result).toMatchSnapshot();
  });

  it('inserts below imports', async () => {
    const result = await processFixture('insert-below-imports');
    expect(result).toMatchSnapshot();
  });

  it('handles empty headings', async () => {
    const result = await processFixture('empty-headings');
    expect(result).toMatchSnapshot();
  });

  it('works with imported markdown', async () => {
    const result = await processFixture('partials/index.mdx');
    expect(result).toMatchSnapshot();
  });

  it('works with partials importing other partials', async () => {
    const result = await processFixture('partials/_partial2.mdx');
    expect(result).toMatchSnapshot();
  });
});
