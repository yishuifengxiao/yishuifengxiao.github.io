"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>w,kt:()=>m});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},w=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,w=c(e,["components","mdxType","originalType","parentName"]),s=o(n),y=p,m=s["".concat(l,".").concat(y)]||s[y]||u[y]||a;return n?r.createElement(m,i(i({ref:t},w),{},{components:n})):r.createElement(m,i({ref:t},w))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:p,i[1]=c;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},46698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(87462),p=(n(67294),n(3905));const a={},i="wctype.h",c={unversionedId:"C/lib \u6807\u51c6\u5e93/wctype.h",id:"C/lib \u6807\u51c6\u5e93/wctype.h",title:"wctype.h",description:"wctype.h \u63d0\u4f9b ctype.h \u91cc\u9762\u51fd\u6570\u7684\u5bbd\u5b57\u7b26\u7248\u672c\u3002",source:"@site/wiki/programming-language/C/lib \u6807\u51c6\u5e93/wctype.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/wctype.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/wctype.h",draft:!1,tags:[],version:"current",lastUpdatedBy:"yishuifengxiao",lastUpdatedAt:1689042298,formattedLastUpdatedAt:"2023\u5e747\u670811\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"wchar.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/wchar.h"},next:{title:"\u7b80\u4ecb",permalink:"/programming-language/C++/\u7b80\u4ecb"}},l={},o=[{value:"\u5bbd\u5b57\u7b26\u7c7b\u578b\u5224\u65ad\u51fd\u6570",id:"\u5bbd\u5b57\u7b26\u7c7b\u578b\u5224\u65ad\u51fd\u6570",level:2},{value:"wctype()\uff0ciswctype()",id:"wctypeiswctype",level:2},{value:"\u5927\u5c0f\u5199\u8f6c\u6362\u51fd\u6570",id:"\u5927\u5c0f\u5199\u8f6c\u6362\u51fd\u6570",level:2}],w={toc:o},s="wrapper";function u(e){let{components:t,...n}=e;return(0,p.kt)(s,(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"wctypeh"},"wctype.h"),(0,p.kt)("p",null,"wctype.h \u63d0\u4f9b ctype.h \u91cc\u9762\u51fd\u6570\u7684\u5bbd\u5b57\u7b26\u7248\u672c\u3002"),(0,p.kt)("h2",{id:"\u5bbd\u5b57\u7b26\u7c7b\u578b\u5224\u65ad\u51fd\u6570"},"\u5bbd\u5b57\u7b26\u7c7b\u578b\u5224\u65ad\u51fd\u6570"),(0,p.kt)("p",null,"\u4e0b\u9762\u51fd\u6570\u5224\u65ad\u5bbd\u5b57\u7b26\u7684\u7c7b\u578b\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"iswalnum()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u4e3a\u5b57\u6bcd\u6570\u5b57"),(0,p.kt)("li",{parentName:"ul"},"iswalpha()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u4e3a\u5b57\u6bcd"),(0,p.kt)("li",{parentName:"ul"},"iswblank()\t\u6d4b\u8bd5\u8fd9\u662f\u5426\u662f\u4e00\u4e2a\u5bbd\u7a7a\u767d\u5b57\u7b26"),(0,p.kt)("li",{parentName:"ul"},"iswcntrl()\t\u6d4b\u8bd5\u8fd9\u662f\u5426\u662f\u4e00\u4e2a\u5bbd\u63a7\u5236\u5b57\u7b26\u3002"),(0,p.kt)("li",{parentName:"ul"},"iswdigit()\t\u6d4b\u8bd5\u8fd9\u4e2a\u5bbd\u5b57\u7b26\u662f\u5426\u662f\u6570\u5b57"),(0,p.kt)("li",{parentName:"ul"},"iswgraph()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u662f\u53ef\u6253\u5370\u7684\u975e\u7a7a\u683c\u5b57\u7b26"),(0,p.kt)("li",{parentName:"ul"},"iswlower()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u4e3a\u5c0f\u5199"),(0,p.kt)("li",{parentName:"ul"},"iswprint()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u53ef\u6253\u5370"),(0,p.kt)("li",{parentName:"ul"},"iswpunct()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u4e3a\u6807\u70b9\u7b26\u53f7"),(0,p.kt)("li",{parentName:"ul"},"iswspace()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u4e3a\u7a7a\u683c"),(0,p.kt)("li",{parentName:"ul"},"iswupper()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u4e3a\u5927\u5199"),(0,p.kt)("li",{parentName:"ul"},"iswxdigit()\t\u6d4b\u8bd5\u5bbd\u5b57\u7b26\u662f\u5426\u4e3a\u5341\u516d\u8fdb\u5236\u6570\u5b57")),(0,p.kt)("h2",{id:"wctypeiswctype"},"wctype()\uff0ciswctype()"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"iswctype()"),"\u662f\u4e0a\u4e00\u8282\u5404\u79cd\u5bbd\u5b57\u7b26\u7c7b\u578b\u5224\u65ad\u51fd\u6570\u7684\u901a\u7528\u7248\u672c\uff0c\u5fc5\u987b\u4e0e",(0,p.kt)("inlineCode",{parentName:"p"},"wctype()"),"\u914d\u5408\u4f7f\u7528\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},"int iswctype(wint_t wc, wctype_t desc);\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"iswctype()"),"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u9700\u8981\u5224\u65ad\u7c7b\u578b\u7684\u5bbd\u5b57\u7b26\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5bbd\u5b57\u7b26\u7c7b\u578b\u63cf\u8ff0\uff0c\u6765\u81ea",(0,p.kt)("inlineCode",{parentName:"p"},"wctype()"),"\u7684\u8fd4\u56de\u503c\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u5bbd\u5b57\u7b26\u5c5e\u4e8e\u6307\u5b9a\u7c7b\u578b\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"iswctype()"),"\u8fd4\u56de\u4e00\u4e2a\u975e\u96f6\u503c\uff0c\u5426\u5219\u8fd4\u56de\u96f6\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"wctype()"),"\u7528\u6765\u83b7\u53d6\u67d0\u4e2a\u79cd\u7c7b\u5bbd\u5b57\u7b26\u7684\u7c7b\u578b\u63cf\u8ff0\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},"wctype_t wctype(const char* property);\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"wctype()"),"\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\uff0c\u53ef\u7528\u7684\u503c\u5982\u4e0b\uff1aalnum\u3001alpha\u3001blank\u3001cntrl\u3001digit\u3001graph\u3001lower\u3001print\u3001punct\u3001space\u3001upper\u3001xdigit\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"wctype()"),"\u7684\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e3a wctype_t\uff0c\u901a\u5e38\u662f\u4e00\u4e2a\u6574\u6570\u3002\u5982\u679c\u53c2\u6570\u662f\u4e00\u4e2a\u65e0\u6548\u503c\uff0c\u5219\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},'if (iswctype(c, wctype("digit")))\n// \u76f8\u5f53\u4e8e\nif (iswdigit(c))\n')),(0,p.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u7528\u6765\u5224\u65ad\u5bbd\u5b57\u7b26",(0,p.kt)("inlineCode",{parentName:"p"},"c"),"\u662f\u5426\u4e3a\u6570\u503c\uff0c\u76f8\u5f53\u4e8e",(0,p.kt)("inlineCode",{parentName:"p"},"iswdigit()"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"iswctype()"),"\u7684\u5b8c\u6574\u7c7b\u578b\u5224\u65ad\u5982\u4e0b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},'iswctype(c, wctype("alnum"))    // \u76f8\u5f53\u4e8e iswalnum(c)\niswctype(c, wctype("alpha"))    // \u76f8\u5f53\u4e8e iswalpha(c)\niswctype(c, wctype("blank"))    // \u76f8\u5f53\u4e8e iswblank(c)\niswctype(c, wctype("cntrl"))    // \u76f8\u5f53\u4e8e iswcntrl(c)\niswctype(c, wctype("digit"))    // \u76f8\u5f53\u4e8e iswdigit(c)\niswctype(c, wctype("graph"))    // \u76f8\u5f53\u4e8e iswgraph(c)\niswctype(c, wctype("lower"))    // \u76f8\u5f53\u4e8e iswlower(c)\niswctype(c, wctype("print"))    // \u76f8\u5f53\u4e8e iswprint(c)\niswctype(c, wctype("punct"))    // \u76f8\u5f53\u4e8e iswpunct(c)\niswctype(c, wctype("space"))    // \u76f8\u5f53\u4e8e iswspace(c)\niswctype(c, wctype("upper"))    // \u76f8\u5f53\u4e8e iswupper(c)\niswctype(c, wctype("xdigit"))   // \u76f8\u5f53\u4e8e iswxdigit(c)\n')),(0,p.kt)("h2",{id:"\u5927\u5c0f\u5199\u8f6c\u6362\u51fd\u6570"},"\u5927\u5c0f\u5199\u8f6c\u6362\u51fd\u6570"),(0,p.kt)("p",null,"wctype.h \u63d0\u4f9b\u4ee5\u4e0b\u5bbd\u5b57\u7b26\u5927\u5c0f\u5199\u8f6c\u6362\u51fd\u6570\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"towlower()\t\u5c06\u5927\u5199\u5bbd\u5b57\u7b26\u8f6c\u6362\u4e3a\u5c0f\u5199"),(0,p.kt)("li",{parentName:"ul"},"towupper()\t\u5c06\u5c0f\u5199\u5bbd\u5b57\u7b26\u8f6c\u6362\u4e3a\u5927\u5199"),(0,p.kt)("li",{parentName:"ul"},"towctrans()\t\u5bbd\u5b57\u7b26\u5927\u5c0f\u5199\u8f6c\u6362\u7684\u901a\u7528\u51fd\u6570"),(0,p.kt)("li",{parentName:"ul"},"wctrans()\t\u5927\u5c0f\u5199\u8f6c\u6362\u7684\u8f85\u52a9\u51fd\u6570\uff0c\u914d\u5408 towctrans() \u4f7f\u7528")),(0,p.kt)("p",null,"\u5148\u770b",(0,p.kt)("inlineCode",{parentName:"p"},"towlower()"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"towupper()"),"\u7684\u7528\u6cd5\u793a\u4f8b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},"towlower(L'B') // b\ntowupper(L'e') // E\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"towctrans()"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"wctrans()"),"\u7684\u539f\u578b\u5982\u4e0b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},"wint_t towctrans(wint_t wc, wctrans_t desc);\nwctrans_t wctrans(const char* property);\n")),(0,p.kt)("p",null,"\u4e0b\u9762\u662f\u5b83\u4eec\u7684\u7528\u6cd5\u793a\u4f8b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},'towctrans(c, wctrans("toupper"))    // \u76f8\u5f53\u4e8e towupper(c)\ntowctrans(c, wctrans("tolower"))    // \u76f8\u5f53\u4e8e towlower(c)\n')))}u.isMDXComponent=!0}}]);