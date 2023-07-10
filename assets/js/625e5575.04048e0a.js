"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5239],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"go\u6587\u4ef6\u5904\u7406",sidebar_position:2,keywords:["GO","\u6587\u4ef6"],tags:["GO"]},i=void 0,c={unversionedId:"go\u6587\u4ef6\u5904\u7406",id:"go\u6587\u4ef6\u5904\u7406",title:"go\u6587\u4ef6\u5904\u7406",description:"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u8def\u5f84",source:"@site/wiki/code-snippet/go\u6587\u4ef6\u5904\u7406.md",sourceDirName:".",slug:"/go\u6587\u4ef6\u5904\u7406",permalink:"/code-snippet/go\u6587\u4ef6\u5904\u7406",draft:!1,tags:[{label:"GO",permalink:"/code-snippet/tags/go"}],version:"current",lastUpdatedBy:"yishuifengxiao",lastUpdatedAt:1677046181,formattedLastUpdatedAt:"2023\u5e742\u670822\u65e5",sidebarPosition:2,frontMatter:{title:"go\u6587\u4ef6\u5904\u7406",sidebar_position:2,keywords:["GO","\u6587\u4ef6"],tags:["GO"]},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u542f\u52a8",permalink:"/code-snippet/"},next:{title:"go csv\u5904\u7406",permalink:"/code-snippet/go csv\u5de5\u5177"}},l={},p=[{value:"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u8def\u5f84",id:"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u8def\u5f84",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u8def\u5f84"},"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func currentAbPathByCaller() string {\n    var abPath string\n    _, filename, _, ok := runtime.Caller(0)\n    if ok {\n        abPath = path.Dir(filename)\n    }\n    return abPath\n}\n")))}f.isMDXComponent=!0}}]);