"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["94535"],{22408:function(e,t,n){n.r(t),n.d(t,{default:()=>f,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>u,contentTitle:()=>a});var s=JSON.parse('{"id":"tests/visibility/only-unlisteds/unlisted-subcategory/index","title":"Only Unlisteds - Subcategory index unlisted","description":"Doc with unlisted front matter","source":"@site/_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx","sourceDirName":"tests/visibility/only-unlisteds/unlisted-subcategory","slug":"/tests/visibility/only-unlisteds/unlisted-subcategory/","permalink":"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/","draft":false,"unlisted":true,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"},{"inline":false,"label":"Unlisted","permalink":"/tests/docs/tags/unlisted"}],"version":"current","lastUpdatedBy":"Hichem Fantar","lastUpdatedAt":1738333510000,"frontMatter":{"unlisted":true,"tags":["visibility","unlisted"]},"sidebar":"sidebar"}'),i=n(85893),r=n(80980),l=n(86762);let o={unlisted:!0,tags:["visibility","unlisted"]},a="Only Unlisteds - Subcategory index unlisted",c={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"only-unlisteds---subcategory-index-unlisted",children:"Only Unlisteds - Subcategory index unlisted"})}),"\n",(0,i.jsx)(t.p,{children:"Doc with unlisted front matter"}),"\n","\n",(0,i.jsx)(l.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}f.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx)"},86762:function(e,t,n){n.d(t,{Z:()=>b});var s=n(85893);n(67294);var i=n(90496),r=n(85921),l=n(35363),o=n(11660),a=n(82095),c=n(77827),u=n(57922);let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function f(e){let{href:t,children:n}=e;return(0,s.jsx)(l.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:l}=e;return(0,s.jsxs)(f,{href:t,children:[(0,s.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),l&&(0,s.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function h(e){let{item:t}=e,n=(0,r.LM)(t),i=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,s.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function p(e){let{item:t}=e,n=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,r.xz)(t.docId??void 0);return(0,s.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(p,{item:t});case"category":return(0,s.jsx)(h,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,n=(0,r.Ok)();return(0,s.jsx)(b,{items:n,className:t})}function x(e){let{item:t}=e;return(0,s.jsx)("article",{className:(0,i.Z)("docCardListItem_hvcp","col col--6"),children:(0,s.jsx)(y,{item:t})})}function b(e){let{items:t,className:n}=e;if(!t)return(0,s.jsx)(g,{...e});let l=(0,r.MN)(t);return(0,s.jsx)("section",{className:(0,i.Z)("row",n),children:l.map((e,t)=>(0,s.jsx)(x,{item:e},t))})}},11660:function(e,t,n){n.d(t,{c:()=>a});var s=n(67294),i=n(8156);let r=["zero","one","two","few","many","other"];function l(e){return r.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,s.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let i=n.select(t);return s[Math.min(n.pluralForms.indexOf(i),s.length-1)]})(n,t,e)}}},80980:function(e,t,n){n.d(t,{Z:()=>o,a:()=>l});var s=n(67294);let i={},r=s.createContext(i);function l(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);