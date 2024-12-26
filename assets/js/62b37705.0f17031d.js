"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["80220"],{77409:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>u,default:()=>m,assets:()=>d,toc:()=>h,frontMatter:()=>i});var r=JSON.parse('{"id":"canary","title":"Canary releases","description":"Docusaurus has a canary releases system.","source":"@site/community/4-canary.mdx","sourceDirName":".","slug":"/canary","permalink":"/community/canary","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/community/4-canary.mdx","tags":[],"version":"current","lastUpdatedBy":"Pierre Millot","lastUpdatedAt":1735216772000,"sidebarPosition":4,"frontMatter":{},"sidebar":"community","previous":{"title":"Contributing","permalink":"/community/contributing"},"next":{"title":"Release process","permalink":"/community/release-process"}}'),s=t("85893"),a=t("80980"),c=t("46291"),l=t("67860"),o=t("3153");let i={},u="Canary releases",d={},h=[{value:"Canary npm dist tag",id:"canary-npm-dist-tag",level:2},{value:"Using a canary release",id:"using-a-canary-release",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"canary-releases",children:"Canary releases"})}),"\n","\n",(0,s.jsxs)(o.mC,{children:[(0,s.jsx)(n.p,{children:"Docusaurus has a canary releases system."}),(0,s.jsxs)(n.p,{children:["It permits you to ",(0,s.jsx)(n.strong,{children:"test new unreleased features"})," as soon as the pull requests are merged on the ",(0,s.jsx)(n.a,{href:"/community/release-process#next-version",children:"next version"})," of Docusaurus."]}),(0,s.jsxs)(n.p,{children:["It is a good way to ",(0,s.jsx)(n.strong,{children:"give feedback to maintainers"}),", ensuring the newly implemented feature works as intended."]}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Using a canary release in production might seem risky, but in practice, it's not."}),(0,s.jsx)(n.p,{children:"A canary release passes all automated tests and is used in production by the Docusaurus site itself."})]}),(0,s.jsx)(o.UM,{children:(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["The canary version shown below ",(0,s.jsx)(n.strong,{children:"may not be up-to-date"}),". Please go to the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"npm page"})," to find the actual version name."]})})}),(0,s.jsx)(o.FS,{children:(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The canary version shown below is directly fetched from npm and ",(0,s.jsx)(n.strong,{children:"is up-to-date"}),". You can directly use these numbers in your package.json."]})})}),(0,s.jsx)(n.h2,{id:"canary-npm-dist-tag",children:"Canary npm dist tag"}),(0,s.jsxs)(n.p,{children:["For any code-related commit on ",(0,s.jsx)(n.code,{children:"main"}),", the continuous integration will publish a canary release under the ",(0,s.jsx)(n.code,{children:"@canary"})," npm dist tag. It generally takes up to 10 minutes."]}),(0,s.jsxs)(n.p,{children:["You can see on ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"npm"})," the current dist tags:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"latest"}),": stable releases (Current: ",(0,s.jsx)(o.SR,{}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"canary"}),": canary releases (",(0,s.jsx)(o.I1,{}),")"]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Make sure to use the latest canary release and check the publication date (sometimes the publish process fails). ",(0,s.jsx)(o.rv,{})]})}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Canary versions follow the naming convention ",(0,s.jsx)(n.code,{children:"0.0.0-commitNumber"}),"."]})}),(0,s.jsx)(n.h2,{id:"using-a-canary-release",children:"Using a canary release"}),(0,s.jsxs)(n.p,{children:["Take the latest version published under the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"canary npm dist tag"})," (",(0,s.jsx)(o.I1,{}),")."]}),(0,s.jsxs)(n.p,{children:["Use it for all the ",(0,s.jsx)(n.code,{children:"@docusaurus/*"})," dependencies in your ",(0,s.jsx)(n.code,{children:"package.json"}),":"]}),(0,s.jsx)(o.Hc,{}),(0,s.jsx)(n.p,{children:"Then, install the dependencies again and start your site:"}),(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install\nnpm start\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn install\nyarn start\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm install\npnpm start\n"})})})]}),(0,s.jsxs)(n.p,{children:["You can also upgrade the ",(0,s.jsx)(n.code,{children:"@docusaurus/*"})," packages with command line:"]}),(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add --exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})})]}),(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["Make sure to include all the ",(0,s.jsx)(n.code,{children:"@docusaurus/*"})," packages."]}),(0,s.jsxs)(n.p,{children:["For canary releases, prefer using an exact version instead of a semver range (avoid the ",(0,s.jsx)(n.code,{children:"^"})," prefix)."]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},67860:function(e,n,t){t.d(n,{Z:()=>c});var r=t("85893");t("67294");var s=t("90496");let a="tabItem_pnkT";function c(e){let{children:n,hidden:t,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a,c),hidden:t,children:n})}},46291:function(e,n,t){t.d(n,{Z:()=>y});var r=t("85893"),s=t("67294"),a=t("90496"),c=t("12451"),l=t("3620"),o=t("89637"),i=t("74417"),u=t("46918"),d=t("58247");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("8903");let f="tabList_Qoir",x="tabItem_AQgk";function j(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e,i=[],{blockElementScrollPositionUntilNextRender:u}=(0,c.o5)(),d=e=>{let n=e.currentTarget,t=o[i.indexOf(n)].value;t!==s&&(u(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{let t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:c}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{i.push(e)},onKeyDown:h,onClick:d,...c,className:(0,a.Z)("tabs__item",x,c?.className,{"tabs__item--active":s===n}),children:t??n},n)})})}function b(e){let{lazy:n,children:t,selectedValue:c}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===c);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==c}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[c,m]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[f,x]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),c=(0,i._X)(a);return[c,(0,s.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[j,b]=function(e){var n;let{groupId:t}=e;let r=(n=t)?`docusaurus.tab.${n}`:null,[a,c]=(0,d.Nk)(r);return[a,(0,s.useCallback)(e=>{if(!!r)c.set(e)},[r,c])]}({groupId:r}),g=(()=>{let e=f??j;return p({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{g&&m(g)},[g]),{selectedValue:c,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),b(e)},[x,b,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,r.jsx)(j,{...n,...e}),(0,r.jsx)(b,{...n,...e})]})}function y(e){let n=(0,m.Z)();return(0,r.jsx)(g,{...e,children:h(e.children)},String(n))}},82234:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(85893);t(67294);var s=t(8903);function a(e){let{children:n,fallback:t}=e;return(0,s.Z)()?(0,r.jsx)(r.Fragment,{children:n?.()}):t??null}},3153:function(e,n,t){t.d(n,{CW:function(){return j},FS:function(){return w},Fr:function(){return b},Hc:function(){return B},I1:function(){return p},SR:function(){return m},UM:function(){return k},Zl:function(){return y},mC:function(){return d},mq:function(){return v},rv:function(){return C}});var r=t(85893),s=t(67294),a=t(66088),c=t(59064),l=t(80661),o=t(64152),i=t(45960);let u=s.createContext(null);function d(e){let{children:n}=e,[t,a]=(0,s.useState)(null),c=(0,s.useRef)(!0);return(0,s.useEffect)(()=>(c.current=!0,()=>{c.current=!1}),[]),(0,s.useEffect)(()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then(e=>e.json()).then(e=>{if(!c.current)return;let n=Object.keys(e.versions).at(-1),t=e.time[n];a({name:n,time:t})})},[]),(0,r.jsx)(u.Provider,{value:t,children:n})}function h(){let e=a.J("default").preferredVersion?.name,n=(0,c.gB)("default"),t=(n.find(e=>"current"!==e.name)??n[0]).name;return e&&"current"!==e?e:t}function p(){let e=(0,s.useContext)(u);return e?(0,r.jsx)("span",{children:(0,r.jsx)(l.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:(0,r.jsx)("b",{children:e.name})},children:"Current: {canaryVersionName}"})}):(0,r.jsx)("span",{children:(0,r.jsx)(l.Z,{description:"An example canary version tag when the actual version can't be fetched.",children:"Example: 0.0.0-4922"})})}function m(){let e=h();return(0,r.jsx)("span",{children:e})}function f(){return 3}function x(){return 2}function j(){return(0,r.jsx)("span",{children:3})}function b(){return(0,r.jsx)("span",{children:2})}function g(e){let{branch:n}=e;return(0,r.jsx)(o.Z,{to:`https://github.com/facebook/docusaurus/tree/${n}`,children:(0,r.jsx)("code",{children:n})})}function y(){let e="docusaurus-v"+2;return(0,r.jsx)(g,{branch:e})}function v(){return(0,r.jsx)(g,{branch:"main"})}function k(e){let{children:n}=e;return(0,s.useContext)(u)?null:n}function w(e){let{children:n}=e;return(0,s.useContext)(u)?n:null}function B(){let e=s.useContext(u)?.name??"0.0.0-4922",n=h();return(0,r.jsx)(i.Z,{language:"diff",children:`-  "@docusaurus/core": "^${n}",
-  "@docusaurus/preset-classic": "^${n}",
+  "@docusaurus/core": "${e}",
+  "@docusaurus/preset-classic": "${e}",
`})}function C(){let e=s.useContext(u)?.time;return e?(0,r.jsx)(l.Z,{values:{time:(0,r.jsx)("b",{children:new Date(e).toLocaleString()})},children:"The latest canary version that's available on npm is published at {time}."}):null}},45960:function(e,n,t){t.d(n,{Z:()=>ec});var r,s={};t.r(s),t.d(s,{ButtonExample:()=>L});var a=t("85893"),c=t("67294"),l=t("90496"),o=t("8903"),i=t("10075"),u=t("80661"),d=t("30056"),h=t("82234"),p=t("22687"),m=t("31058"),f=t("70341");function x(){let{prism:e}=(0,f.L)(),{colorMode:n}=(0,m.I)(),t=e.theme,r=e.darkTheme||t;return"dark"===n?r:t}var j=t("18605");let b="playgroundContainer_6Ior",g="playgroundHeader_Tvsk",y="playgroundEditor_TySg",v="playgroundPreview_mApW";function k(e){let{children:n}=e;return(0,a.jsx)("div",{className:(0,l.Z)(g),children:n})}function w(){return(0,a.jsx)("div",{children:"Loading..."})}function B(){return(0,a.jsx)(h.Z,{fallback:(0,a.jsx)(w,{}),children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.Z,{fallback:e=>(0,a.jsx)(p.Ac,{...e}),children:(0,a.jsx)(i.i5,{})}),(0,a.jsx)(i.IF,{})]})})}function C(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(k,{children:(0,a.jsx)(u.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,a.jsx)("div",{className:v,children:(0,a.jsx)(B,{})})]})}function N(){let e=(0,o.Z)();return(0,a.jsx)(i.uz,{className:y},String(e))}function E(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(k,{children:(0,a.jsx)(u.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,a.jsx)(N,{})]})}let Z=e=>`${e};`;function T(e){let{children:n,transformCode:t,...r}=e,{siteConfig:{themeConfig:s}}=(0,d.Z)(),{liveCodeBlock:{playgroundPosition:c}}=s,l=x(),o=r.metastring?.includes("noInline")??!1;return(0,a.jsx)("div",{className:b,children:(0,a.jsx)(i.nu,{code:n?.replace(/\n$/,""),noInline:o,transformCode:t??Z,theme:l,...r,children:"top"===c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{}),(0,a.jsx)(E,{})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E,{}),(0,a.jsx)(C,{})]})})})}function L(e){return(0,a.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let I={React:c,...c,...s};var S=t("2235"),_=t("6324"),A=t.n(_);let $=/title=(?<quote>["'])(?<title>.*?)\1/,M=/\{(?<range>[\d,-]+)\}/,O={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},D={...O,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},F=Object.keys(O);function V(e,n){let t=e.map(e=>{let{start:t,end:r}=D[e];return`(?:${t}\\s*(${n.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${t})\\s*$`)}let R="codeBlockContainer_jDV4";function H(e){let{as:n,...t}=e,r=function(e){let n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,a=n[r];a&&"string"==typeof s&&(t[a]=s)}),t}(x());return(0,a.jsx)(n,{...t,style:r,className:(0,l.Z)(t.className,R,S.k.common.codeBlock)})}let q={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W(e){let{children:n,className:t}=e;return(0,a.jsx)(H,{as:"pre",tabIndex:0,className:(0,l.Z)(q.codeBlockStandalone,"thin-scrollbar",t),children:(0,a.jsx)("code",{className:q.codeBlockLines,children:n})})}var U=t("31008");let P={attributes:!0,characterData:!0,childList:!0,subtree:!0};var z=t("7316");let Y={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function G(e){let{line:n,classNames:t,showLineNumbers:r,getLineProps:s,getTokenProps:c}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");let o=s({line:n,className:(0,l.Z)(t,r&&Y.codeLine)}),i=n.map((e,n)=>(0,a.jsx)("span",{...c({token:e})},n));return(0,a.jsxs)("span",{...o,children:[r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:Y.codeLineNumber}),(0,a.jsx)("span",{className:Y.codeLineContent,children:i})]}):i,(0,a.jsx)("br",{})]})}var Q=t("84171");function J(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function X(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee(e){let{code:n,className:t}=e,[r,s]=(0,c.useState)(!1),o=(0,c.useRef)(void 0),i=(0,c.useCallback)(()=>{(0,Q.Z)(n),s(!0),o.current=window.setTimeout(()=>{s(!1)},1e3)},[n]);return(0,c.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,a.jsx)("button",{type:"button","aria-label":r?(0,u.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,u.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",t,K.copyButton,r&&K.copyButtonCopied),onClick:i,children:(0,a.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,a.jsx)(J,{className:K.copyButtonIcon}),(0,a.jsx)(X,{className:K.copyButtonSuccessIcon})]})})}function en(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let et={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function er(e){let{className:n,onClick:t,isEnabled:r}=e,s=(0,u.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,a.jsx)("button",{type:"button",onClick:t,className:(0,l.Z)("clean-btn",n,r&&et.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,a.jsx)(en,{className:et.wordWrapButtonIcon,"aria-hidden":"true"})})}function es(e){var n,t,r;let{children:s,className:o="",metastring:i,title:u,showLineNumbers:d,language:h}=e,{prism:{defaultLanguage:p,magicComments:m}}=(0,f.L)();let j=(n=h??function(e){let n=e.split(" ").find(e=>e.startsWith("language-"));return n?.replace(/language-/,"")}(o)??p,n?.toLowerCase()),b=x(),g=function(){let[e,n]=(0,c.useState)(!1),[t,r]=(0,c.useState)(!1),s=(0,c.useRef)(null),a=(0,c.useCallback)(()=>{let t=s.current.querySelector("code");e?t.removeAttribute("style"):(t.style.whiteSpace="pre-wrap",t.style.overflowWrap="anywhere"),n(e=>!e)},[s,e]),l=(0,c.useCallback)(()=>{let{scrollWidth:e,clientWidth:n}=s.current;r(e>n||s.current.querySelector("code").hasAttribute("style"))},[s]);return!function(e,n){let[t,r]=(0,c.useState)(),s=(0,c.useCallback)(()=>{r(e.current?.closest("[role=tabpanel][hidden]"))},[e,r]);(0,c.useEffect)(()=>{s()},[s]),!function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P,r=(0,U.zX)(n),s=(0,U.Ql)(t);(0,c.useEffect)(()=>{let n=new MutationObserver(r);return e&&n.observe(e,s),()=>n.disconnect()},[e,r,s])}(t,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(n(),s())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(s,l),(0,c.useEffect)(()=>{l()},[e,l]),(0,c.useEffect)(()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)}),[l]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:t,toggle:a}}();let y=(t=i,(t?.match($)?.groups.title??"")||u),{lineClassNames:v,code:k}=function(e,n){let t=e.replace(/\n$/,""),{language:r,magicComments:s,metastring:a}=n;if(a&&M.test(a)){let e=a.match(M).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let n=s[0].className;return{lineClassNames:Object.fromEntries(A()(e).filter(e=>e>0).map(e=>[e-1,[n]])),code:t}}if(void 0===r)return{lineClassNames:{},code:t};let c=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return V(["js","jsBlock"],n);case"jsx":case"tsx":return V(["js","jsBlock","jsx"],n);case"html":return V(["js","jsBlock","html"],n);case"python":case"py":case"bash":return V(["bash"],n);case"markdown":case"md":return V(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return V(["tex"],n);case"lua":case"haskell":return V(["lua"],n);case"sql":return V(["lua","jsBlock"],n);case"wasm":return V(["wasm"],n);case"vb":case"vba":case"visual-basic":return V(["vb","rem"],n);case"vbnet":return V(["vbnet","rem"],n);case"batch":return V(["rem"],n);case"basic":return V(["rem","f90"],n);case"fsharp":return V(["js","ml"],n);case"ocaml":case"sml":return V(["ml"],n);case"fortran":return V(["f90"],n);case"cobol":return V(["cobol"],n);default:return V(F,n)}}(r,s),l=t.split("\n"),o=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),i=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:n,line:t}=e;return[t,n]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:n,block:t}=e;return[t.start,n]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:n,block:t}=e;return[t.end,n]}));for(let e=0;e<l.length;){let n=l[e].match(c);if(!n){e+=1;continue}let t=n.slice(1).find(e=>void 0!==e);i[t]?o[i[t]].range+=`${e},`:u[t]?o[u[t]].start=e:d[t]&&(o[d[t]].range+=`${o[d[t]].start}-${e-1},`),l.splice(e,1)}t=l.join("\n");let h={};return Object.entries(o).forEach(e=>{let[n,{range:t}]=e;A()(t).forEach(e=>{h[e]??=[],h[e].push(n)})}),{lineClassNames:h,code:t}}(s,{metastring:i,language:j,magicComments:m});let w=d??(r=i,!!r?.includes("showLineNumbers"));return(0,a.jsxs)(H,{as:"div",className:(0,l.Z)(o,j&&!o.includes(`language-${j}`)&&`language-${j}`),children:[y&&(0,a.jsx)("div",{className:q.codeBlockTitle,children:y}),(0,a.jsxs)("div",{className:q.codeBlockContent,children:[(0,a.jsx)(z.y$,{theme:b,code:k,language:j??"text",children:e=>{let{className:n,style:t,tokens:r,getLineProps:s,getTokenProps:c}=e;return(0,a.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,l.Z)(n,q.codeBlock,"thin-scrollbar"),style:t,children:(0,a.jsx)("code",{className:(0,l.Z)(q.codeBlockLines,w&&q.codeBlockLinesWithNumbering),children:r.map((e,n)=>(0,a.jsx)(G,{line:e,getLineProps:s,getTokenProps:c,classNames:v[n],showLineNumbers:w},n))})})}}),(0,a.jsxs)("div",{className:q.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,a.jsx)(er,{className:q.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,a.jsx)(ee,{className:q.codeButton,code:k})]})]})]})}let ea=(r=function(e){var n;let{children:t,...r}=e,s=(0,o.Z)();let l=(n=t,c.Children.toArray(n).some(e=>(0,c.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n),i="string"==typeof l?es:W;return(0,a.jsx)(i,{...r,children:l},String(s))},function(e){return e.live?(0,a.jsx)(T,{scope:I,...e}):(0,a.jsx)(r,{...e})});function ec(e){return(0,a.jsx)(ea,{...e})}}}]);