import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
