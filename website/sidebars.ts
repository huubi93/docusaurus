/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Hướng dẫn sử dụng công cụ',
      link: {type: 'generated-index'},
      collapsed: false,
      items: ['guides/getting-started'],
    },
    {
      type: 'category',
      label: 'Thuật ngữ nội bộ',
      link: {type: 'generated-index'},
      collapsed: false,
      items: ['glossary/markdown'],
    },
    {
      type: 'category',
      label: 'Câu hỏi thường gặp',
      link: {type: 'generated-index'},
      collapsed: false,
      items: ['faq/general'],
    },
  ],
};

export default sidebars;
