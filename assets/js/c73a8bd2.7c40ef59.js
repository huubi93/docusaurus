"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["30165"],{65292:function(e,a,n){n.r(a),n.d(a,{frontMatter:()=>l,default:()=>h,contentTitle:()=>o,assets:()=>u,toc:()=>c,metadata:()=>r});var r=JSON.parse('{"id":"guides/markdown-features/diagrams","title":"Diagrams","description":"Writing diagrams with Mermaid","source":"@site/docs/guides/markdown-features/markdown-features-diagrams.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/diagrams","permalink":"/docs/markdown-features/diagrams","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-diagrams.mdx","tags":[],"version":"current","lastUpdatedBy":"BinhTO","lastUpdatedAt":1744430905000,"frontMatter":{"id":"diagrams","title":"Diagrams","description":"Writing diagrams with Mermaid","slug":"/markdown-features/diagrams"},"sidebar":"docs","previous":{"title":"Math Equations","permalink":"/docs/markdown-features/math-equations"},"next":{"title":"Head metadata","permalink":"/docs/markdown-features/head-metadata"}}'),t=n(85893),i=n(80980),s=n(15398),d=n(58636);let l={id:"diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",slug:"/markdown-features/diagrams"},o="Diagrams",u={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Theming",id:"theming",level:2},{value:"Mermaid Config",id:"configuration",level:2},{value:"Dynamic Mermaid Component",id:"component",level:2}];function m(e){let a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"diagrams",children:"Diagrams"})}),"\n",(0,t.jsxs)(a.p,{children:["Diagrams can be rendered using ",(0,t.jsx)(a.a,{href:"https://mermaid-js.github.io/mermaid/",children:"Mermaid"})," in a code block."]}),"\n",(0,t.jsx)(a.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(d.Z,{value:"npm",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(d.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"yarn add @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(d.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(d.Z,{value:"bun",label:"Bun",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"bun add @docusaurus/theme-mermaid\n"})})})]}),"\n",(0,t.jsxs)(a.p,{children:["Enable Mermaid functionality by adding plugin ",(0,t.jsx)(a.code,{children:"@docusaurus/theme-mermaid"})," and setting ",(0,t.jsx)(a.code,{children:"markdown.mermaid"})," to ",(0,t.jsx)(a.code,{children:"true"})," in your ",(0,t.jsx)(a.code,{children:"docusaurus.config.js"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  markdown: {\n    mermaid: true,\n  },\n  themes: ['@docusaurus/theme-mermaid'],\n};\n"})}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(a.p,{children:["Add a code block with language ",(0,t.jsx)(a.code,{children:"mermaid"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-md",metastring:'title="Example Mermaid diagram"',children:"```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n"})}),"\n",(0,t.jsx)(a.mermaid,{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}),"\n",(0,t.jsxs)(a.p,{children:["See the ",(0,t.jsx)(a.a,{href:"https://mermaid-js.github.io/mermaid/#/./n00b-syntaxReference",children:"Mermaid syntax documentation"})," for more information on the Mermaid syntax."]}),"\n",(0,t.jsx)(a.h2,{id:"theming",children:"Theming"}),"\n",(0,t.jsxs)(a.p,{children:["The diagram dark and light themes can be changed by setting ",(0,t.jsx)(a.code,{children:"mermaid.theme"})," values in the ",(0,t.jsx)(a.code,{children:"themeConfig"})," in your ",(0,t.jsx)(a.code,{children:"docusaurus.config.js"}),". You can set themes for both light and dark mode."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      theme: {light: 'neutral', dark: 'forest'},\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(a.p,{children:["See the ",(0,t.jsx)(a.a,{href:"https://mermaid-js.github.io/mermaid/#/theming",children:"Mermaid theme documentation"})," for more information on theming Mermaid diagrams."]}),"\n",(0,t.jsx)(a.h2,{id:"configuration",children:"Mermaid Config"}),"\n",(0,t.jsxs)(a.p,{children:["Options in ",(0,t.jsx)(a.code,{children:"mermaid.options"})," will be passed directly to ",(0,t.jsx)(a.code,{children:"mermaid.initialize"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      options: {\n        maxTextSize: 50,\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(a.p,{children:["See the ",(0,t.jsx)(a.a,{href:"https://mermaid-js.github.io/mermaid/#/./Setup?id=configuration",children:"Mermaid config documentation"})," and the ",(0,t.jsx)(a.a,{href:"https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.type.ts",children:"Mermaid config types"})," for the available config options."]}),"\n",(0,t.jsx)(a.h2,{id:"component",children:"Dynamic Mermaid Component"}),"\n",(0,t.jsxs)(a.p,{children:["To generate dynamic diagrams, you can use the ",(0,t.jsx)(a.code,{children:"Mermaid"})," component:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-mdx",metastring:'title="Example of dynamic Mermaid component"',children:"import Mermaid from '@theme/Mermaid';\n\n<Mermaid\n  value={`graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;`}\n/>\n"})})]})}function h(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},58636:function(e,a,n){n.d(a,{Z:()=>i});var r=n(85893);n(67294);var t=n(90496);function i(e){let{children:a,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_pnkT",i),hidden:n,children:a})}},15398:function(e,a,n){n.d(a,{Z:()=>j});var r=n(85893),t=n(67294),i=n(90496),s=n(54947),d=n(3620),l=n(844),o=n(97486),u=n(32263),c=n(16971);function m(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:a,tabValues:n}=e;return n.some(e=>e.value===a)}var p=n(71607);function g(e){let{className:a,block:n,selectedValue:t,selectValue:d,tabValues:l}=e,o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{let a=e.currentTarget,n=l[o.indexOf(a)].value;n!==t&&(u(a),d(n))},m=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1]}}a?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},a),children:l.map(e=>{let{value:a,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>{o.push(e)},onKeyDown:m,onClick:c,...s,className:(0,i.Z)("tabs__item","tabItem_AQgk",s?.className,{"tabs__item--active":t===a}),children:n??a},a)})})}function f(e){let{lazy:a,children:n,selectedValue:s}=e,d=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){let e=d.find(e=>e.props.value===s);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:d.map((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s}))})}function x(e){let a=function(e){let{defaultValue:a,queryString:n=!1,groupId:r}=e,i=function(e){let{values:a,children:n}=e;return(0,t.useMemo)(()=>{let e=a??m(n).map(e=>{let{props:{value:a,label:n,attributes:r,default:t}}=e;return{value:a,label:n,attributes:r,default:t}}),r=(0,u.lx)(e,(e,a)=>e.value===a.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[a,n])}(e),[s,p]=(0,t.useState)(()=>(function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:a,tabValues:i})),[g,f]=function(e){let{queryString:a=!1,groupId:n}=e,r=(0,d.k6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(i),(0,t.useCallback)(e=>{if(!i)return;let a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})},[i,r])]}({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:a}=e,n=a?`docusaurus.tab.${a}`:null,[r,i]=(0,c.Nk)(n);return[r,(0,t.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:r}),b=(()=>{let e=g??x;return h({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{b&&p(b)},[b]),{selectedValue:s,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),j(e)},[f,j,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(g,{...a,...e}),(0,r.jsx)(f,{...a,...e})]})}function j(e){let a=(0,p.Z)();return(0,r.jsx)(x,{...e,children:m(e.children)},String(a))}},80980:function(e,a,n){n.d(a,{Z:()=>d,a:()=>s});var r=n(67294);let t={},i=r.createContext(t);function s(e){let a=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);