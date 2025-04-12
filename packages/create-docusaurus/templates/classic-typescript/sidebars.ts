import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Hướng dẫn sử dụng công cụ',
      link: { type: 'generated-index' },
      collapsed: false,
      items: ['guides/getting-started'],
    },
    {
      type: 'category',
      label: 'Thuật ngữ nội bộ',
      link: { type: 'generated-index' },
      collapsed: false,
      items: ['glossary/markdown'],
    },
    {
      type: 'category',
      label: 'Câu hỏi thường gặp',
      link: { type: 'generated-index' },
      collapsed: false,
      items: ['faq/general'],
    },
  ],
};

export default sidebars;
