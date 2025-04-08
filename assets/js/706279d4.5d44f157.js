"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["46459"],{29082:function(e,n,t){t.r(n),t.d(n,{frontMatter:()=>c,default:()=>m,contentTitle:()=>h,assets:()=>u,toc:()=>g,metadata:()=>s});var s=JSON.parse('{"id":"guides/docs/sidebar/items","title":"Sidebar items","description":"We have introduced three types of item types in the example in the previous section autogenerated, which we will explain in detail later.","source":"@site/docs/guides/docs/sidebar/items.mdx","sourceDirName":"guides/docs/sidebar","slug":"/sidebar/items","permalink":"/docs/sidebar/items","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/items.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1744106025000,"frontMatter":{"toc_max_heading_level":4,"slug":"/sidebar/items"},"sidebar":"docs","previous":{"title":"Sidebar","permalink":"/docs/sidebar"},"next":{"title":"Autogenerated","permalink":"/docs/sidebar/autogenerated"}}'),a=t(85893),i=t(80980),r=t(15398),l=t(58636),o=t(14522),d=t(86762);let c={toc_max_heading_level:4,slug:"/sidebar/items"},h="Sidebar items",u={},g=[{value:"Doc: link to a doc",id:"sidebar-item-doc",level:2},{value:"Link: link to any page",id:"sidebar-item-link",level:2},{value:"HTML: render custom markup",id:"sidebar-item-html",level:2},{value:"Category: create a hierarchy",id:"sidebar-item-category",level:2},{value:"Category links",id:"category-link",level:3},{value:"Generated index page",id:"generated-index-page",level:4},{value:"Doc link",id:"category-doc-link",level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",level:4},{value:"Collapsible categories",id:"collapsible-categories",level:3},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:3},{value:"Using shorthands",id:"using-shorthands",level:2},{value:"Doc shorthand",id:"doc-shorthand",level:3},{value:"Category shorthand",id:"category-shorthand",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"sidebar-items",children:"Sidebar items"})}),"\n","\n",(0,a.jsxs)(n.p,{children:["We have introduced three types of item types in the example in the previous section: ",(0,a.jsx)(n.code,{children:"doc"}),", ",(0,a.jsx)(n.code,{children:"category"}),", and ",(0,a.jsx)(n.code,{children:"link"}),", whose usages are fairly intuitive. We will formally introduce their APIs. There's also a fourth type: ",(0,a.jsx)(n.code,{children:"autogenerated"}),", which we will explain in detail later."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"#sidebar-item-doc",children:"Doc"})}),": link to a doc page, associating it with the sidebar"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"#sidebar-item-link",children:"Link"})}),": link to any internal or external page"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"#sidebar-item-category",children:"Category"})}),": creates a dropdown of sidebar items"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"Autogenerated"})}),": generate a sidebar slice automatically"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"#sidebar-item-html",children:"HTML"})}),": renders pure HTML in the item's position"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars#sidebar-item-ref",children:"*Ref"})}),": link to a doc page, without making the item take part in navigation generation"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sidebar-item-doc",children:"Doc: link to a doc"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"doc"})," type to link to a doc page and assign that doc to a sidebar:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n      customProps?: Record<string, unknown>; // Custom props\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'doc1', // document ID\n      label: 'Getting started', // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    'doc2', // document ID\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you use the doc shorthand or ",(0,a.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"autogenerated"})," sidebar, you would lose the ability to customize the sidebar label through item definition. You can, however, use the ",(0,a.jsx)(n.code,{children:"sidebar_label"})," Markdown front matter within that doc, which has higher precedence over the ",(0,a.jsx)(n.code,{children:"label"})," key in the sidebar item. Similarly, you can use ",(0,a.jsx)(n.code,{children:"sidebar_custom_props"})," to declare custom metadata for a doc page."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"doc"})," item sets an ",(0,a.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars#sidebar-association",children:"implicit sidebar association"}),". Don't assign the same doc to multiple sidebars: change the type to ",(0,a.jsx)(n.code,{children:"ref"})," instead."]})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Sidebar custom props is a useful way to propagate arbitrary doc metadata to the client side, so you can get additional information when using any doc-related hook that fetches a doc object."})}),"\n",(0,a.jsx)(n.h2,{id:"sidebar-item-link",children:"Link: link to any page"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"link"})," type to link to any page (internal or external) that is not a doc."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n  className?: string;\n  description?: string;\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"sidebar-item-html",children:"HTML: render custom markup"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"html"})," type to render custom HTML within the item's ",(0,a.jsx)(n.code,{children:"<li>"})," tag."]}),"\n",(0,a.jsx)(n.p,{children:"This can be useful for inserting custom items such as dividers, section titles, ads, and images."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemHtml = {\n  type: 'html';\n  value: string;\n  defaultStyle?: boolean; // Use default menu item styles\n  className?: string;\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myHtmlSidebar: [\n    // highlight-start\n    {\n      type: 'html',\n      value: '<img src=\"sponsor.png\" alt=\"Sponsor\" />', // The HTML to be rendered\n      defaultStyle: true, // Use the default menu item styling\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["The menu item is already wrapped in an ",(0,a.jsx)(n.code,{children:"<li>"})," tag, so if your custom item is simple, such as a title, just supply a string as the value and use the ",(0,a.jsx)(n.code,{children:"className"})," property to style it:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myHtmlSidebar: [\n    {\n      type: 'html',\n      value: 'Core concepts',\n      className: 'sidebar-title',\n    },\n  ],\n};\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"sidebar-item-category",children:"Category: create a hierarchy"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"category"})," type to create a hierarchy of sidebar items."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n  description?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsible: true,\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.a,{href:"#category-shorthand",children:(0,a.jsx)(n.strong,{children:"shorthand syntax"})})," when you don't need customizations:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n      },\n    ],\n  },\n};\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"category-link",children:"Category links"}),"\n",(0,a.jsx)(n.p,{children:"With category links, clicking on a category can navigate you to another page."}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"Use category links to introduce a category of documents."}),(0,a.jsxs)(n.p,{children:["Autogenerated categories can use the ",(0,a.jsx)(n.a,{href:"/docs/sidebar/autogenerated#category-item-metadata",children:(0,a.jsx)(n.code,{children:"_category_.yml"})})," file to declare the link."]})]}),"\n",(0,a.jsx)(n.h4,{id:"generated-index-page",children:"Generated index page"}),"\n",(0,a.jsxs)(n.p,{children:["You can auto-generate an index page that displays all the direct children of this category. The ",(0,a.jsx)(n.code,{children:"slug"})," allows you to customize the generated page's route, which defaults to ",(0,a.jsx)(n.code,{children:"/category/[categoryName]"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description: 'Learn about the most important Docusaurus concepts!',\n        slug: '/category/docusaurus-guides',\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See it in action on the ",(0,a.jsx)(n.a,{href:"/docs/category/guides",children:"Docusaurus Guides page"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"generated-index"})," links as a quick way to get an introductory document."]})}),"\n",(0,a.jsx)(n.h4,{id:"category-doc-link",children:"Doc link"}),"\n",(0,a.jsx)(n.p,{children:"A category can link to an existing document."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {type: 'doc', id: 'introduction'},\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See it in action on the ",(0,a.jsx)(n.a,{href:"/docs/i18n/introduction",children:"i18n introduction page"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"embedding-generated-index-in-doc-page",children:"Embedding generated index in doc page"}),"\n",(0,a.jsxs)(n.p,{children:["You can embed the generated cards list in a normal doc page as well with the ",(0,a.jsx)(n.code,{children:"DocCardList"})," component. It will display all the sidebar items of the parent category of the current document."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",metastring:'title="docs/sidebar/index.md"',children:"import DocCardList from '@theme/DocCardList';\n\n<DocCardList />\n"})}),"\n",(0,a.jsx)(o.Z,{children:(0,a.jsx)(d.Z,{})}),"\n",(0,a.jsx)(n.h3,{id:"collapsible-categories",children:"Collapsible categories"}),"\n",(0,a.jsxs)(n.p,{children:["We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,a.jsx)(n.code,{children:"collapsible: false"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          // highlight-next-line\n          collapsible: false,\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To make all categories non-collapsible by default, set the ",(0,a.jsx)(n.code,{children:"sidebarCollapsible"})," option in ",(0,a.jsx)(n.code,{children:"plugin-content-docs"})," to ",(0,a.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The option in ",(0,a.jsx)(n.code,{children:"sidebars.js"})," takes precedence over plugin configuration, so it is possible to make certain categories collapsible when ",(0,a.jsx)(n.code,{children:"sidebarCollapsible"})," is set to ",(0,a.jsx)(n.code,{children:"false"})," globally."]})}),"\n",(0,a.jsx)(n.h3,{id:"expanded-categories-by-default",children:"Expanded categories by default"}),"\n",(0,a.jsxs)(n.p,{children:["Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set ",(0,a.jsx)(n.code,{children:"collapsed"})," to ",(0,a.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        // highlight-next-line\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.code,{children:"collapsible"}),", you can also set the global configuration ",(0,a.jsx)(n.code,{children:"options.sidebarCollapsed"})," to ",(0,a.jsx)(n.code,{children:"false"}),". Individual ",(0,a.jsx)(n.code,{children:"collapsed"})," options in ",(0,a.jsx)(n.code,{children:"sidebars.js"})," will still take precedence over this configuration."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["When a category has ",(0,a.jsx)(n.code,{children:"collapsed: true"})," but ",(0,a.jsx)(n.code,{children:"collapsible: false"})," (either through ",(0,a.jsx)(n.code,{children:"sidebars.js"})," or through plugin configuration), the latter takes precedence and the category is still rendered as expanded."]})}),"\n",(0,a.jsx)(n.h2,{id:"using-shorthands",children:"Using shorthands"}),"\n",(0,a.jsxs)(n.p,{children:["You can express typical sidebar items without much customization more concisely with ",(0,a.jsx)(n.strong,{children:"shorthand syntaxes"}),". There are two parts to this: ",(0,a.jsx)(n.a,{href:"#doc-shorthand",children:(0,a.jsx)(n.strong,{children:"doc shorthand"})})," and ",(0,a.jsx)(n.a,{href:"#category-shorthand",children:(0,a.jsx)(n.strong,{children:"category shorthand"})}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"doc-shorthand",children:"Doc shorthand"}),"\n",(0,a.jsxs)(n.p,{children:["An item with type ",(0,a.jsx)(n.code,{children:"doc"})," can be simply a string representing its ID:"]}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{value:"Longhand",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'myDoc',\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,a.jsx)(l.Z,{value:"Shorthand",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    'myDoc',\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"So it's possible to simplify the example above to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        // highlight-next-line\n        'doc1',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        // highlight-start\n        'doc2',\n        'doc3',\n        // highlight-end\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.h3,{id:"category-shorthand",children:"Category shorthand"}),"\n",(0,a.jsx)(n.p,{children:"A category item can be represented by an object whose key is its label, and the value is an array of subitems."}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{value:"Longhand",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Getting started',\n      items: ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,a.jsx)(l.Z,{value:"Shorthand",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"This permits us to simplify that example to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n    },\n    {\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Each shorthand object after this transformation will contain exactly one entry. Now consider the further simplified example below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note how the two consecutive category shorthands are compressed into one object with two entries. This syntax generates a ",(0,a.jsx)(n.strong,{children:"sidebar slice"}),': you shouldn\'t see that object as one bulk item\u2014this object is unwrapped, with each entry becoming a separate item, and they spliced together with the rest of the items (in this case, the "Learn more" link) to form the final sidebar level. Sidebar slices are also important when discussing ',(0,a.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"autogenerated sidebars"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Wherever you have an array of items that is reduced to one category shorthand, you can omit that enclosing array as well."}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{value:"Before",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: [\n        {\n          'Basic guides': ['doc2', 'doc3'],\n          'Advanced guides': ['doc4', 'doc5'],\n        },\n      ],\n    },\n  ],\n};\n"})})}),(0,a.jsx)(l.Z,{value:"After",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: {\n    'Getting started': ['doc1'],\n    Docusaurus: {\n      'Basic guides': ['doc2', 'doc3'],\n      'Advanced guides': ['doc4', 'doc5'],\n    },\n  },\n};\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},86762:function(e,n,t){t.d(n,{Z:()=>f});var s=t(85893);t(67294);var a=t(90496),i=t(85921),r=t(35363),l=t(11660),o=t(82095),d=t(77827),c=t(57922);let h={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function u(e){let{className:n,href:t,children:i}=e;return(0,s.jsx)(r.Z,{href:t,className:(0,a.Z)("card padding--lg",h.cardContainer,n),children:i})}function g(e){let{className:n,href:t,icon:i,title:r,description:l}=e;return(0,s.jsxs)(u,{href:t,className:n,children:[(0,s.jsxs)(c.Z,{as:"h2",className:(0,a.Z)("text--truncate",h.cardTitle),title:r,children:[i," ",r]}),l&&(0,s.jsx)("p",{className:(0,a.Z)("text--truncate",h.cardDescription),title:l,children:l})]})}function p(e){let{item:n}=e,t=(0,i.LM)(n),a=function(){let{selectMessage:e}=(0,l.c)();return n=>e(n,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,s.jsx)(g,{className:n.className,href:t,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??a(n.items.length)}):null}function m(e){let{item:n}=e,t=(0,o.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,i.xz)(n.docId??void 0);return(0,s.jsx)(g,{className:n.className,href:n.href,icon:t,title:n.label,description:n.description??a?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,s.jsx)(m,{item:n});case"category":return(0,s.jsx)(p,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function j(e){let{className:n}=e,t=(0,i.Ok)();return(0,s.jsx)(f,{items:t,className:n})}function b(e){let{item:n}=e;return(0,s.jsx)("article",{className:(0,a.Z)("docCardListItem_hvcp","col col--6"),children:(0,s.jsx)(x,{item:n})})}function f(e){let{items:n,className:t}=e;if(!n)return(0,s.jsx)(j,{...e});let r=(0,i.MN)(n);return(0,s.jsx)("section",{className:(0,a.Z)("row",t),children:r.map((e,n)=>(0,s.jsx)(b,{item:e},n))})}},58636:function(e,n,t){t.d(n,{Z:()=>i});var s=t(85893);t(67294);var a=t(90496);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_pnkT",i),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>b});var s=t(85893),a=t(67294),i=t(90496),r=t(54947),l=t(3620),o=t(844),d=t(97486),c=t(32263),h=t(16971);function u(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t(71607);function m(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),h=e=>{let n=e.currentTarget,t=o[d.indexOf(n)].value;t!==a&&(c(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:r}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{d.push(e)},onKeyDown:u,onClick:h,...r,className:(0,i.Z)("tabs__item","tabItem_AQgk",r?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:r}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,i=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}),s=(0,c.lx)(e,(e,n)=>e.value===n.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[n,t])}(e),[r,p]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:i})),[m,x]=function(e){let{queryString:n=!1,groupId:t}=e,s=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(i),(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})},[i,s])]}({queryString:t,groupId:s}),[j,b]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[s,i]=(0,h.Nk)(t);return[s,(0,a.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:s}),f=(()=>{let e=m??j;return g({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{f&&p(f)},[f]),{selectedValue:r,selectValue:(0,a.useCallback)(e=>{if(!g({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),x(e),b(e)},[x,b,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_Qoir"),children:[(0,s.jsx)(m,{...n,...e}),(0,s.jsx)(x,{...n,...e})]})}function b(e){let n=(0,p.Z)();return(0,s.jsx)(j,{...e,children:u(e.children)},String(n))}},11660:function(e,n,t){t.d(n,{c:()=>o});var s=t(67294),a=t(8156);let i=["zero","one","two","few","many","other"];function r(e){return i.filter(n=>e.includes(n))}let l={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)(()=>{try{let n=new Intl.PluralRules(e);return{locale:e,pluralForms:r(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),l}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let a=t.select(n);return s[Math.min(t.pluralForms.indexOf(a),s.length-1)]})(t,n,e)}}},14522:function(e,n,t){t.d(n,{Z:()=>l});var s=t(85893);t(67294);var a=t(90496);let i="dot_giz1",r="bar_rrRL";function l(e){let{children:n,minHeight:t,url:l="http://localhost:3000",style:o,bodyStyle:d}=e;return(0,s.jsxs)("div",{className:"browserWindow_my1Q",style:{...o,minHeight:t},children:[(0,s.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,s.jsxs)("div",{className:"buttons_uHc7",children:[(0,s.jsx)("span",{className:i,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:i,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:i,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,a.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:l}),(0,s.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:r}),(0,s.jsx)("span",{className:r}),(0,s.jsx)("span",{className:r})]})})]}),(0,s.jsx)("div",{className:"browserWindowBody_Idgs",style:d,children:n})]})}},80980:function(e,n,t){t.d(n,{Z:()=>l,a:()=>r});var s=t(67294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);