/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {toValue} from '../utils';
import type {Node} from 'unist';
import type {
  MdxjsEsm,
  // @ts-expect-error: TODO see https://github.com/microsoft/TypeScript/issues/49721
} from 'mdast-util-mdx';
import type {TOCHeading, TOCItem, TOCItems, TOCSlice} from './types';
import type {Program, SpreadElement, ImportDeclaration} from 'estree';

export function getImportDeclarations(program: Program): ImportDeclaration[] {
  return program.body.filter(
    (item): item is ImportDeclaration => item.type === 'ImportDeclaration',
  );
}

export const isImport = (child: Node): child is MdxjsEsm => {
  if (child.type === 'mdxjsEsm') {
    return (child as MdxjsEsm).value.startsWith('import');
  }
  return false;
};

export function isMarkdownImport(node: Node): node is ImportDeclaration {
  if (node.type !== 'ImportDeclaration') {
    return false;
  }
  const importPath = (node as ImportDeclaration).source.value;
  return typeof importPath === 'string' && /\.mdx?$/.test(importPath);
}

export function findDefaultImportName(
  importDeclaration: ImportDeclaration,
): string | undefined {
  return importDeclaration.specifiers.find(
    (o: Node) => o.type === 'ImportDefaultSpecifier',
  )?.local.name;
}

function createTOCSliceAST(tocSlice: TOCSlice): SpreadElement {
  return {
    type: 'SpreadElement',
    argument: {type: 'Identifier', name: tocSlice.name},
  };
}

async function createTOCHeadingAST({heading}: TOCHeading) {
  const {toString} = await import('mdast-util-to-string');
  const {valueToEstree} = await import('estree-util-value-to-estree');

  const tocItem: TOCItem = {
    value: toValue(heading, toString),
    id: heading.data!.id!,
    level: heading.depth,
  };

  return valueToEstree(tocItem);
}

async function createTOCItemAST(tocItem: TOCItems[number]) {
  switch (tocItem.type) {
    case 'slice':
      return createTOCSliceAST(tocItem);
    case 'heading':
      return createTOCHeadingAST(tocItem);
    default: {
      throw new Error(`unexpected toc item type`);
    }
  }
}

export function isNamedExport(node: Node, exportName: string): boolean {
  if (node.type !== 'mdxjsEsm') {
    return false;
  }
  const program = (node as MdxjsEsm).data?.estree;
  if (!program) {
    return false;
  }
  if (program.body.length !== 1) {
    return false;
  }
  const exportDeclaration = program.body[0]!;
  if (exportDeclaration.type !== 'ExportNamedDeclaration') {
    return false;
  }
  const variableDeclaration = exportDeclaration.declaration;
  if (variableDeclaration?.type !== 'VariableDeclaration') {
    return false;
  }
  const {id} = variableDeclaration.declarations[0]!;
  if (id.type !== 'Identifier') {
    return false;
  }

  return id.name === exportName;
}

export async function createTOCExportNodeAST(
  name: string,
  tocItems: TOCItems,
): Promise<MdxjsEsm> {
  const tocItemArrayAST = await Promise.all(tocItems.map(createTOCItemAST));

  return {
    type: 'mdxjsEsm',
    value: '', // See https://github.com/facebook/docusaurus/pull/9684#discussion_r1457595181
    data: {
      estree: {
        type: 'Program',
        body: [
          {
            type: 'ExportNamedDeclaration',
            declaration: {
              type: 'VariableDeclaration',
              declarations: [
                {
                  type: 'VariableDeclarator',
                  id: {
                    type: 'Identifier',
                    name,
                  },
                  init: {
                    type: 'ArrayExpression',
                    elements: tocItemArrayAST,
                  },
                },
              ],
              kind: 'const',
            },
            specifiers: [],
            source: null,
          },
        ],
        sourceType: 'module',
      },
    },
  };
}
