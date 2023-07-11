"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8583],{3905:(t,e,n)=>{n.d(e,{Zo:()=>N,kt:()=>T});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.createContext({}),_=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},N=function(t){var e=_(t.components);return l.createElement(p.Provider,{value:e},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,N=u(t,["components","mdxType","originalType","parentName"]),o=_(n),s=a,T=o["".concat(p,".").concat(s)]||o[s]||m[s]||i;return n?l.createElement(T,r(r({ref:e},N),{},{components:n})):l.createElement(T,r({ref:e},N))}));function T(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=s;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[o]="string"==typeof t?t:a,r[1]=u;for(var _=2;_<i;_++)r[_]=n[_];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49555:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>_});var l=n(87462),a=(n(67294),n(3905));const i={},r="stdint.h",u={unversionedId:"C/lib \u6807\u51c6\u5e93/stdint.h",id:"C/lib \u6807\u51c6\u5e93/stdint.h",title:"stdint.h",description:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b",source:"@site/wiki/programming-language/C/lib \u6807\u51c6\u5e93/stdint.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/stdint.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/stdint.h",draft:!1,tags:[],version:"current",lastUpdatedBy:"yishuifengxiao",lastUpdatedAt:1689042298,formattedLastUpdatedAt:"2023\u5e747\u670811\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stddef.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/stddef.h"},next:{title:"stdio.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/stdio.h"}},p={},_=[{value:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b",id:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b",level:2},{value:"\u6700\u5927\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b",id:"\u6700\u5927\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b",level:2},{value:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u5e38\u91cf",id:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u5e38\u91cf",level:2},{value:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u6781\u9650\u503c",id:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u6781\u9650\u503c",level:2},{value:"\u5360\u4f4d\u7b26",id:"\u5360\u4f4d\u7b26",level:2}],N={toc:_},o="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(o,(0,l.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stdinth"},"stdint.h"),(0,a.kt)("h2",{id:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b"},"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b"),(0,a.kt)("p",null,"stdint.h \u5b9a\u4e49\u4e86\u4e00\u4e9b\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b\u522b\u540d\uff0c\u4e3b\u8981\u6709\u4e0b\u9762\u4e09\u7c7b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bbd\u5ea6\u5b8c\u5168\u786e\u5b9a\u7684\u6574\u6570",(0,a.kt)("inlineCode",{parentName:"li"},"intN_t"),"\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"int32_t"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bbd\u5ea6\u4e0d\u5c0f\u4e8e\u67d0\u4e2a\u5927\u5c0f\u7684\u6574\u6570",(0,a.kt)("inlineCode",{parentName:"li"},"int_leastN_t"),"\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"int_least8_t"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bbd\u5ea6\u4e0d\u5c0f\u4e8e\u67d0\u4e2a\u5927\u5c0f\u3001\u5e76\u4e14\u5904\u7406\u901f\u5ea6\u5c3d\u53ef\u80fd\u5feb\u7684\u6574\u6570",(0,a.kt)("inlineCode",{parentName:"li"},"int_fastN_t"),"\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"int_fast64_t"),"\u3002")),(0,a.kt)("p",null,"\u4e0a\u9762\u6240\u6709\u7c7b\u578b\u90fd\u662f\u6709\u7b26\u53f7\u7684\uff0c\u7c7b\u578b\u540d\u524d\u9762\u53ef\u4ee5\u52a0\u4e00\u4e2a\u524d\u7f00",(0,a.kt)("inlineCode",{parentName:"p"},"u"),"\uff0c\u8868\u793a\u65e0\u7b26\u53f7\u7c7b\u578b\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"uint16_t"),"\u3002"),(0,a.kt)("p",null,"C \u8bed\u8a00\u6807\u51c6\u8981\u6c42\u5b9a\u4e49\u4ee5\u4e0b\u7c7b\u578b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"int8_t\uff08\u53ef\u9009\uff09      uint8_t\uff08\u53ef\u9009\uff09"),(0,a.kt)("li",{parentName:"ul"},"int16_t\uff08\u53ef\u9009\uff09     uint16_t\uff08\u53ef\u9009\uff09"),(0,a.kt)("li",{parentName:"ul"},"int32_t\uff08\u53ef\u9009\uff09    uint32_t\uff08\u53ef\u9009\uff09"),(0,a.kt)("li",{parentName:"ul"},"int64_t\uff08\u53ef\u9009\uff09     uint64_t\uff08\u53ef\u9009\uff09"),(0,a.kt)("li",{parentName:"ul"},"int_least8_t      uint_least8_t"),(0,a.kt)("li",{parentName:"ul"},"int_least16_t     uint_least16_t"),(0,a.kt)("li",{parentName:"ul"},"int_least32_t     uint_least32_t"),(0,a.kt)("li",{parentName:"ul"},"int_least64_t     uint_least64_t"),(0,a.kt)("li",{parentName:"ul"},"int_fast8_t       uint_fast8_t"),(0,a.kt)("li",{parentName:"ul"},"int_fast16_t      uint_fast16_t"),(0,a.kt)("li",{parentName:"ul"},"int_fast32_t      uint_fast32_t"),(0,a.kt)("li",{parentName:"ul"},"int_fast64_t      uint_fast64_t")),(0,a.kt)("h2",{id:"\u6700\u5927\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b"},"\u6700\u5927\u5bbd\u5ea6\u7684\u6574\u6570\u7c7b\u578b"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e24\u4e2a\u7c7b\u578b\u8868\u793a\u5f53\u524d\u7cfb\u7edf\u53ef\u7528\u7684\u6700\u5927\u5bbd\u5ea6\u6574\u6570\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"intmax_t"),(0,a.kt)("li",{parentName:"ul"},"uintmax_t")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5c3d\u53ef\u80fd\u5927\u7684\u6574\u6570\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u7c7b\u578b\u3002"),(0,a.kt)("h2",{id:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u5e38\u91cf"},"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u5e38\u91cf"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e00\u4e9b\u5e26\u53c2\u6570\u7684\u5b8f\uff0c\u53ef\u4ee5\u751f\u6210\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u5e38\u91cf\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"INT8_C(x)     UINT8_C(x)"),(0,a.kt)("li",{parentName:"ul"},"INT16_C(x)    UINT16_C(x)"),(0,a.kt)("li",{parentName:"ul"},"INT32_C(x)    UINT32_C(x)"),(0,a.kt)("li",{parentName:"ul"},"INT64_C(x)    UINT64_C(x)"),(0,a.kt)("li",{parentName:"ul"},"INTMAX_C(x)   UINTMAX_C(x)")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u7528\u6cd5\u793a\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"uint16_t x = UINT16_C(12);\nintmax_t y = INTMAX_C(3490);\n")),(0,a.kt)("h2",{id:"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u6781\u9650\u503c"},"\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u6781\u9650\u503c"),(0,a.kt)("p",null,"\u4e0b\u9762\u4e00\u4e9b\u5b8f\u4ee3\u8868\u4e86\u56fa\u5b9a\u5bbd\u5ea6\u7684\u6574\u6570\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"INT8_MAX           INT8_MIN           UINT8_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT16_MAX          INT16_MIN          UINT16_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT32_MAX          INT32_MIN          UINT32_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT64_MAX          INT64_MIN          UINT64_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT_LEAST8_MAX     INT_LEAST8_MIN     UINT_LEAST8_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT_LEAST16_MAX    INT_LEAST16_MIN    UINT_LEAST16_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT_LEAST32_MAX    INT_LEAST32_MIN    UINT_LEAST32_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT_LEAST64_MAX    INT_LEAST64_MIN    UINT_LEAST64_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT_FAST8_MAX      INT_FAST8_MIN      UINT_FAST8_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT_FAST16_MAX     INT_FAST16_MIN     UINT_FAST16_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT_FAST32_MAX     INT_FAST32_MIN     UINT_FAST32_MAX"),(0,a.kt)("li",{parentName:"ul"},"INT_FAST64_MAX     INT_FAST64_MIN     UINT_FAST64_MAX"),(0,a.kt)("li",{parentName:"ul"},"INTMAX_MAX         INTMAX_MIN         UINTMAX_MAX")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u6240\u6709\u65e0\u7b26\u53f7\u6574\u6570\u7c7b\u578b\u7684\u6700\u5c0f\u503c\u90fd\u4e3a0\uff0c\u6240\u4ee5\u6ca1\u6709\u5bf9\u5e94\u7684\u5b8f\u3002"),(0,a.kt)("h2",{id:"\u5360\u4f4d\u7b26"},"\u5360\u4f4d\u7b26"),(0,a.kt)("p",null,"C \u8bed\u8a00\u8fd8\u5728\u5934\u6587\u4ef6 inttypes.h \u91cc\u9762\uff0c\u4e3a\u4e0a\u9762\u7c7b\u578b\u5b9a\u4e49\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"printf()"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"scanf()"),"\u7684\u5360\u4f4d\u7b26\uff0c\u53c2\u89c1\u300ainttypes.h\u300b\u4e00\u7ae0\u3002"))}m.isMDXComponent=!0}}]);