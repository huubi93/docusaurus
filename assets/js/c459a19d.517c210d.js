"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["12395"],{80296:function(e,n,r){r.r(n),r.d(n,{frontMatter:()=>c,default:()=>f,contentTitle:()=>u,assets:()=>d,toc:()=>p,metadata:()=>t});var t=JSON.parse('{"id":"api/plugins/plugin-vercel-analytics","title":"\uD83D\uDCE6 plugin-vercel-analytics","description":"Vercel Analytics provides comprehensive insights into your website\'s visitors, tracking top pages, referrers, and demographics like location, operating systems, and browser info.","source":"@site/docs/api/plugins/plugin-vercel-analytics.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-vercel-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-vercel-analytics","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-vercel-analytics.mdx","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1744104573000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"slug":"/api/plugins/@docusaurus/plugin-vercel-analytics"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-sitemap","permalink":"/docs/api/plugins/@docusaurus/plugin-sitemap"},"next":{"title":"Themes overview","permalink":"/docs/api/themes"}}'),a=r(85893),l=r(80980),i=r(15398),s=r(58636),o=r(32240);let c={sidebar_position:11,slug:"/api/plugins/@docusaurus/plugin-vercel-analytics"},u="\uD83D\uDCE6 plugin-vercel-analytics",d={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"-plugin-vercel-analytics",children:"\uD83D\uDCE6 plugin-vercel-analytics"})}),"\n","\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://vercel.com/docs/analytics",children:"Vercel Analytics"})," provides comprehensive insights into your website's visitors, tracking top pages, referrers, and demographics like location, operating systems, and browser info."]}),"\n",(0,a.jsx)(n.admonition,{title:"production only",type:"warning",children:(0,a.jsxs)(n.p,{children:["This plugin is always inactive in development and ",(0,a.jsx)(n.strong,{children:"only active in production"})," (",(0,a.jsx)(n.code,{children:"docusaurus build"}),") to avoid polluting the analytics statistics."]})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-vercel-analytics\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-vercel-analytics\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-vercel-analytics\n"})})}),(0,a.jsx)(s.Z,{value:"bun",label:"Bun",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bun add @docusaurus/plugin-vercel-analytics\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,a.jsx)(o.Z,{children:(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"mode"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"string"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"'auto'"})}),(0,a.jsxs)(n.td,{children:["Override the automatic environment detection. Read the ",(0,a.jsx)(n.a,{href:"https://vercel.com/docs/analytics/package#mode",children:"official docs"})," for details."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"debug"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"boolean"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"undefined"})}),(0,a.jsxs)(n.td,{children:["Enable browser console logging of analytics events. Read the ",(0,a.jsx)(n.a,{href:"https://vercel.com/docs/analytics/package#debug",children:"official docs"})," for details."]})]})]})]})}),"\n",(0,a.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,a.jsx)(n.p,{children:"You can configure this plugin through plugin options."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      'vercel-analytics',\n      {\n        debug: true,\n        mode: 'auto',\n      },\n    ],\n  ],\n};\n"})})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},58636:function(e,n,r){r.d(n,{Z:()=>l});var t=r(85893);r(67294);var a=r(90496);function l(e){let{children:n,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_pnkT",l),hidden:r,children:n})}},15398:function(e,n,r){r.d(n,{Z:()=>x});var t=r(85893),a=r(67294),l=r(90496),i=r(54947),s=r(3620),o=r(844),c=r(97486),u=r(32263),d=r(16971);function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var f=r(71607);function g(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==a&&(u(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...i,className:(0,l.Z)("tabs__item","tabItem_AQgk",i?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function m(e){let{lazy:n,children:r,selectedValue:i}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,l=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}),t=(0,u.lx)(e,(e,n)=>e.value===n.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[n,r])}(e),[i,f]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:l})),[g,m]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(l),(0,a.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})},[l,t])]}({queryString:r,groupId:t}),[b,x]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,l]=(0,d.Nk)(r);return[t,(0,a.useCallback)(e=>{r&&l.set(e)},[r,l])]}({groupId:t}),v=(()=>{let e=g??b;return h({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{v&&f(v)},[v]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),x(e)},[m,x,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(m,{...n,...e})]})}function x(e){let n=(0,f.Z)();return(0,t.jsx)(b,{...e,children:p(e.children)},String(n))}},32240:function(e,n,r){r.d(n,{Z:()=>o});var t=r(85893),a=r(67294),l=r(96700),i=r(3620);let s=a.forwardRef(function(e,n){let{name:r,children:s}=e,o=function(e){let n=e;for(;(0,a.isValidElement)(n);)[n]=a.Children.toArray(n.props.children);if("string"!=typeof n)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return n}(s),c=r?`${r}-${o}`:o,u=`#${c}`,d=(0,i.k6)();return(0,l.Z)().collectAnchor(c),(0,t.jsx)("tr",{id:c,tabIndex:0,ref:d.location.hash===u?n:void 0,onClick:e=>{let n="TD"===e.target.tagName.toUpperCase(),r=!!window.getSelection()?.toString();n&&!r&&d.push(u)},onKeyDown:e=>{"Enter"===e.key&&d.push(u)},children:s.props.children})});function o(e){let{children:n,name:r}=e;if("table"!==n.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[l,i]=a.Children.toArray(n.props.children),o=(0,a.useRef)(null);(0,a.useEffect)(()=>{o.current?.focus()},[o]);let c=a.Children.map(i.props.children,e=>(0,t.jsx)(s,{name:r,ref:o,children:e}));return(0,t.jsxs)("table",{className:"apiTable_e8hp",children:[l,(0,t.jsx)("tbody",{children:c})]})}},80980:function(e,n,r){r.d(n,{Z:()=>s,a:()=>i});var t=r(67294);let a={},l=t.createContext(a);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);