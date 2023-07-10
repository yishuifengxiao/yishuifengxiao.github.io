"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},o=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),s=c(n),k=l,d=s["".concat(p,".").concat(k)]||s[k]||u[k]||a;return n?i.createElement(d,m(m({ref:t},o),{},{components:n})):i.createElement(d,m({ref:t},o))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,m=new Array(a);m[0]=k;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[s]="string"==typeof e?e:l,m[1]=r;for(var c=2;c<a;c++)m[c]=n[c];return i.createElement.apply(null,m)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},28411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(87462),l=(n(67294),n(3905));const a={},m="time.h",r={unversionedId:"C/lib \u6807\u51c6\u5e93/time.h",id:"C/lib \u6807\u51c6\u5e93/time.h",title:"time.h",description:"time_t",source:"@site/wiki/programming-language/C/lib \u6807\u51c6\u5e93/time.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/time.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/time.h",draft:!1,tags:[],version:"current",lastUpdatedBy:"yishuifengxiao",lastUpdatedAt:1675842334,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"string.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/string.h"},next:{title:"wchar.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/wchar.h"}},p={},c=[{value:"time_t",id:"time_t",level:2},{value:"struct tm",id:"struct-tm",level:2},{value:"time()",id:"time",level:2},{value:"ctime()",id:"ctime",level:2},{value:"localtime()\uff0cgmtime()",id:"localtimegmtime",level:2},{value:"asctime()",id:"asctime",level:2},{value:"mktime()",id:"mktime",level:2},{value:"difftime()",id:"difftime",level:2},{value:"strftime()",id:"strftime",level:2},{value:"timespec_get()",id:"timespec_get",level:2},{value:"clock()",id:"clock",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],o={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"timeh"},"time.h"),(0,l.kt)("h2",{id:"time_t"},"time_t"),(0,l.kt)("p",null,"time_t \u662f\u4e00\u4e2a\u8868\u793a\u65f6\u95f4\u7684\u7c7b\u578b\u522b\u540d\uff0c\u53ef\u4ee5\u89c6\u4e3a\u56fd\u9645\u6807\u51c6\u65f6 UTC\u3002\u5b83\u53ef\u80fd\u662f\u6d6e\u70b9\u6570\uff0c\u4e5f\u53ef\u80fd\u662f\u6574\u6570\uff0cUnix \u7cfb\u7edf\u4e00\u822c\u662f\u6574\u6570\u3002"),(0,l.kt)("p",null,"\u8bb8\u591a\u7cfb\u7edf\u4e0a\uff0ctime_t \u8868\u793a\u81ea\u65f6\u95f4\u7eaa\u5143\uff08time epoch\uff09\u4ee5\u6765\u7684\u79d2\u6570\u3002Unix \u7684\u65f6\u95f4\u7eaa\u5143\u662f\u56fd\u9645\u6807\u51c6\u65f6 UTC \u76841970\u5e741\u67081\u65e5\u7684\u96f6\u5206\u96f6\u79d2\u3002time_t \u5982\u679c\u4e3a\u8d1f\u6570\uff0c\u5219\u8868\u793a\u65f6\u95f4\u7eaa\u5143\u4e4b\u524d\u7684\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"time_t \u4e00\u822c\u662f32\u4f4d\u621664\u4f4d\u6574\u6570\u7c7b\u578b\u7684\u522b\u540d\uff0c\u5177\u4f53\u7c7b\u578b\u53d6\u51b3\u4e8e\u5f53\u524d\u7cfb\u7edf\u3002\u5982\u679c\u662f32\u4f4d\u5e26\u7b26\u53f7\u6574\u6570\uff0ctime_t \u53ef\u4ee5\u8868\u793a\u7684\u65f6\u95f4\u5230 2038\u5e741\u670819\u65e503:14:07 UTC \u4e3a\u6b62\uff1b\u5982\u679c\u662f32\u4f4d\u65e0\u7b26\u53f7\u6574\u6570\uff0c\u5219\u8868\u793a\u52302106\u5e74\u3002\u5982\u679c\u662f64\u4f4d\u5e26\u7b26\u53f7\u6574\u6570\uff0c\u53ef\u4ee5\u8868\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"-2930"),"\u4ebf\u5e74\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"+2930"),"\u4ebf\u5e74\u7684\u65f6\u95f4\u8303\u56f4\u3002"),(0,l.kt)("h2",{id:"struct-tm"},"struct tm"),(0,l.kt)("p",null,"struct tm \u662f\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u7528\u6765\u4fdd\u5b58\u65f6\u95f4\u7684\u5404\u4e2a\u7ec4\u6210\u90e8\u5206\uff0c\u6bd4\u5982\u5c0f\u65f6\u3001\u5206\u949f\u3001\u79d2\u3001\u65e5\u3001\u6708\u3001\u5e74\u7b49\u3002\u4e0b\u9762\u662f\u5b83\u7684\u7ed3\u6784\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"struct tm {\n  int tm_sec;    // \u79d2\u6570 [0, 60]\n  int tm_min;    // \u5206\u949f [0, 59]\n  int tm_hour;   // \u5c0f\u65f6 [0, 23]\n  int tm_mday;   // \u6708\u4efd\u7684\u5929\u6570 [1, 31]\n  int tm_mon;    // \u6708\u4efd [0, 11]\uff0c\u4e00\u6708\u7528 0 \u8868\u793a\n  int tm_year;   // \u8ddd\u79bb 1900 \u7684\u5e74\u6570\n  int tm_wday;   // \u661f\u671f\u51e0 [0, 6]\uff0c\u661f\u671f\u5929\u7528 0 \u8868\u793a\n  int tm_yday;   // \u8ddd\u79bb1\u67081\u65e5\u7684\u5929\u6570 [0, 365]\n  int tm_isdst;  // \u662f\u5426\u91c7\u7528\u590f\u4ee4\u65f6\uff0c1 \u8868\u793a\u91c7\u7528\uff0c0 \u8868\u793a\u672a\u91c7\u7528\n};\n")),(0,l.kt)("h2",{id:"time"},"time()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"time()"),"\u51fd\u6570\u8fd4\u56de\u4ece\u65f6\u95f4\u7eaa\u5143\u5230\u73b0\u5728\u7ecf\u8fc7\u7684\u79d2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"time_t time(time_t* returned_value);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"time()"),"\u63a5\u53d7\u4e00\u4e2a time_t \u6307\u9488\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u503c\u4f1a\u5199\u5165\u6307\u9488\u5730\u5740\u3002\u53c2\u6570\u53ef\u4ee5\u662f\u7a7a\u6307\u9488 NULL\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"time()"),"\u7684\u8fd4\u56de\u503c\u662f time_t \u7c7b\u578b\u7684\u5f53\u524d\u65f6\u95f4\u3002 \u5982\u679c\u8ba1\u7b97\u673a\u65e0\u6cd5\u63d0\u4f9b\u5f53\u524d\u7684\u79d2\u6570\uff0c\u6216\u8005\u8fd4\u56de\u503c\u592a\u5927\uff0c\u65e0\u6cd5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"time_t"),"\u7c7b\u578b\u8868\u793a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"time()"),"\u51fd\u6570\u5c31\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"time_t now;\n\n// \u5199\u6cd5\u4e00    \nnow = time(NULL);\n\n// \u5199\u6cd5\u4e8c    \ntime(&now);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u5c55\u793a\u4e86\u5c06\u5f53\u524d\u65f6\u95f4\u5b58\u5165\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"now"),"\u7684\u4e24\u79cd\u5199\u6cd5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u77e5\u9053\u67d0\u4e2a\u64cd\u4f5c\u8017\u8d39\u7684\u7cbe\u786e\u65f6\u95f4\uff0c\u9700\u8981\u8c03\u7528\u4e24\u6b21",(0,l.kt)("inlineCode",{parentName:"p"},"time()"),"\uff0c\u518d\u5c06\u4e24\u6b21\u7684\u8fd4\u56de\u503c\u76f8\u51cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'time_t begin = time(NULL);\n\n// ... \u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\n\ntime_t end = time(NULL);\n\nprintf("%d\\n", end - begin);\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u4e0a\u9762\u7684\u65b9\u6cd5\u53ea\u80fd\u7cbe\u786e\u5230\u79d2\u3002"),(0,l.kt)("h2",{id:"ctime"},"ctime()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ctime()"),"\u7528\u6765\u5c06 time_t \u7c7b\u578b\u7684\u503c\u76f4\u63a5\u8f93\u51fa\u4e3a\u4eba\u7c7b\u53ef\u8bfb\u7684\u683c\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"char* ctime( time_t const * time_value );\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ctime()"),"\u7684\u53c2\u6570\u662f\u4e00\u4e2a time_t \u6307\u9488\uff0c\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u6307\u9488\u3002\u8be5\u5b57\u7b26\u4e32\u7684\u683c\u5f0f\u7c7b\u4f3c\u201cSun Jul 4 04:02:48 1976\\n\\0\u201d\uff0c\u5c3e\u90e8\u5305\u542b\u6362\u884c\u7b26\u548c\u5b57\u7b26\u4e32\u7ec8\u6b62\u6807\u5fd7\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'time_t now; \n\nnow = time(NULL);\n\n// \u8f93\u51fa Sun Feb 28 18:47:25 2021\nprintf("%s", ctime(&now));\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ctime()"),"\u4f1a\u5728\u5b57\u7b26\u4e32\u5c3e\u90e8\u81ea\u52a8\u6dfb\u52a0\u6362\u884c\u7b26\u3002"),(0,l.kt)("h2",{id:"localtimegmtime"},"localtime()\uff0cgmtime()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"localtime()"),"\u51fd\u6570\u7528\u6765\u5c06 time_t \u7c7b\u578b\u7684\u65f6\u95f4\uff0c\u8f6c\u6362\u4e3a\u5f53\u524d\u65f6\u533a\u7684 struct tm \u7ed3\u6784\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gmtime()"),"\u51fd\u6570\u7528\u6765\u5c06 time_t \u7c7b\u578b\u7684\u65f6\u95f4\uff0c\u8f6c\u6362\u4e3a UTC \u65f6\u95f4\u7684 struct tm \u7ed3\u6784\u3002"),(0,l.kt)("p",null,"\u5b83\u4eec\u7684\u533a\u522b\u5c31\u662f\u8fd4\u56de\u503c\uff0c\u524d\u8005\u662f\u672c\u5730\u65f6\u95f4\uff0c\u540e\u8005\u662f UTC \u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"struct tm* localtime(const time_t* timer);\nstruct tm* gmtime(const time_t* timer);\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'time_t now = time(NULL);\n\n// \u8f93\u51fa Local: Sun Feb 28 20:15:27 2021\nprintf("Local: %s", asctime(localtime(&now)));\n\n// \u8f93\u51fa UTC  : Mon Mar  1 04:15:27 2021\nprintf("UTC  : %s", asctime(gmtime(&now)));\n')),(0,l.kt)("h2",{id:"asctime"},"asctime()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"asctime()"),"\u51fd\u6570\u7528\u6765\u5c06 struct tm \u7ed3\u6784\uff0c\u76f4\u63a5\u8f93\u51fa\u4e3a\u4eba\u7c7b\u53ef\u8bfb\u7684\u683c\u5f0f\u3002\u8be5\u51fd\u6570\u4f1a\u81ea\u52a8\u5728\u8f93\u51fa\u7684\u5c3e\u90e8\u6dfb\u52a0\u6362\u884c\u7b26\u3002"),(0,l.kt)("p",null,"\u7528\u6cd5\u793a\u4f8b\u53c2\u8003\u4e0a\u4e00\u5c0f\u8282\u3002"),(0,l.kt)("h2",{id:"mktime"},"mktime()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mktime()"),"\u51fd\u6570\u7528\u4e8e\u628a\u4e00\u4e2a struct tm \u7ed3\u6784\u8f6c\u6362\u4e3a time_t \u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"time_t\u3000mktime(struct tm* tm_ptr);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mktime()"),"\u7684\u53c2\u6570\u662f\u4e00\u4e2a struct tm \u6307\u9488\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mktime()"),"\u4f1a\u81ea\u52a8\u8bbe\u7f6e struct tm \u7ed3\u6784\u91cc\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"tm_wday"),"\u5c5e\u6027\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"tm_yday"),"\u5c5e\u6027\uff0c\u5f00\u53d1\u8005\u81ea\u5df1\u4e0d\u5fc5\u586b\u5199\u8fd9\u4e24\u4e2a\u5c5e\u6027\u3002\u6240\u4ee5\uff0c\u8fd9\u4e2a\u51fd\u6570\u5e38\u7528\u6765\u83b7\u5f97\u6307\u5b9a\u65f6\u95f4\u662f\u661f\u671f\u51e0\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"tm_wday"),"\uff09\u3002"),(0,l.kt)("p",null,"struct tm \u7ed3\u6784\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"tm_isdst"),"\u5c5e\u6027\u4e5f\u53ef\u4ee5\u8bbe\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"\uff0c\u8ba9",(0,l.kt)("inlineCode",{parentName:"p"},"mktime()"),"\u51b3\u5b9a\u662f\u5426\u5e94\u8be5\u91c7\u7528\u590f\u4ee4\u65f6\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'struct tm some_time = {\n  .tm_year=82,   // \u8ddd\u79bb 1900 \u7684\u5e74\u6570\n  .tm_mon=3,     // \u6708\u4efd [0, 11]\n  .tm_mday=12,   // \u5929\u6570 [1, 31]\n  .tm_hour=12,   // \u5c0f\u65f6 [0, 23]\n  .tm_min=00,    // \u5206\u949f [0, 59]\n  .tm_sec=04,    // \u79d2\u6570 [0, 60]\n  .tm_isdst=-1,  // \u590f\u4ee4\u65f6\n};\n    \ntime_t some_time_epoch;\nsome_time_epoch = mktime(&some_time);\n    \n// \u8f93\u51fa Mon Apr 12 12:00:04 1982\nprintf("%s", ctime(&some_time_epoch));\n\n// \u8f93\u51fa Is DST: 0\nprintf("Is DST: %d\\n", some_time.tm_isdst);\n')),(0,l.kt)("h2",{id:"difftime"},"difftime()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"difftime()"),"\u7528\u6765\u8ba1\u7b97\u4e24\u4e2a\u65f6\u95f4\u4e4b\u95f4\u7684\u5dee\u5f02\u3002Unix \u7cfb\u7edf\u4e0a\uff0c\u76f4\u63a5\u76f8\u51cf\u4e24\u4e2a time_t \u503c\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230\u76f8\u5dee\u7684\u79d2\u6570\uff0c\u4f46\u662f\u4e3a\u4e86\u7a0b\u5e8f\u7684\u53ef\u79fb\u690d\u6027\uff0c\u6700\u597d\u8fd8\u662f\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"double difftime( time_t time1, time_t time2 );\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"difftime()"),"\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a time_t \u7c7b\u578b\u7684\u65f6\u95f4\u4f5c\u4e3a\u53c2\u6570\uff0c\u8ba1\u7b97 time1 - time2 \u7684\u5dee\uff0c\u5e76\u628a\u7ed3\u679c\u8f6c\u6362\u4e3a\u79d2\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\u5b83\u7684\u8fd4\u56de\u503c\u662f double \u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <time.h>\n    \nint main(void) {\n  struct tm time_a = {\n    .tm_year=82, \n    .tm_mon=3,   \n    .tm_mday=12, \n    .tm_hour=4,  \n    .tm_min=00,  \n    .tm_sec=04,  \n    .tm_isdst=-1,\n  };\n    \n  struct tm time_b = {\n    .tm_year=120,\n    .tm_mon=10,  \n    .tm_mday=15, \n    .tm_hour=16, \n    .tm_min=27,  \n    .tm_sec=00,  \n    .tm_isdst=-1,\n  };\n    \n  time_t cal_a = mktime(&time_a);\n  time_t cal_b = mktime(&time_b);\n    \n  double diff = difftime(cal_b, cal_a);\n    \n  double years = diff / 60 / 60 / 24 / 365.2425;\n  \n  // \u8f93\u51fa 1217996816.000000 seconds (38.596783 years) between events\n  printf("%f seconds (%f years) between events\\n", diff, years);\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u6298\u7b97\u5e74\u4efd\u65f6\uff0c\u4e3a\u4e86\u5c3d\u91cf\u51c6\u786e\uff0c\u4f7f\u7528\u4e86\u4e00\u5e74\u7684\u51c6\u786e\u957f\u5ea6 365.2425 \u5929\uff0c\u8fd9\u6837\u53ef\u4ee5\u62b5\u6d88\u95f0\u5e74\u7684\u5f71\u54cd\u3002"),(0,l.kt)("h2",{id:"strftime"},"strftime()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strftime()"),"\u51fd\u6570\u7528\u6765\u5c06 struct tm \u7ed3\u6784\u8f6c\u6362\u4e3a\u4e00\u4e2a\u6307\u5b9a\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u590d\u5236\u5230\u6307\u5b9a\u5730\u5740\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"size_t strftime(\n  char* str, \n  size_t maxsize, \n  const char* format, \n  const struct tm* timeptr\n)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strftime()"),"\u63a5\u53d7\u56db\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u76ee\u6807\u5b57\u7b26\u4e32\u7684\u6307\u9488\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u76ee\u6807\u5b57\u7b26\u4e32\u53ef\u4ee5\u63a5\u53d7\u7684\u6700\u5927\u957f\u5ea6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4e2a\u53c2\u6570\uff1a\u683c\u5f0f\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u4e2a\u53c2\u6570\uff1astruct tm \u7ed3\u6784\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u6267\u884c\u6210\u529f\uff08\u8f6c\u6362\u5e76\u590d\u5236\uff09\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"strftime()"),"\u51fd\u6570\u8fd4\u56de\u590d\u5236\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\uff1b\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <time.h>\n\nint main(void) {\n  char s[128];\n  time_t now = time(NULL);\n\n  // %c: \u672c\u5730\u65f6\u95f4\n  strftime(s, sizeof s, "%c", localtime(&now));\n  puts(s);   // Sun Feb 28 22:29:00 2021\n\n  // %A: \u5b8c\u6574\u7684\u661f\u671f\u65e5\u671f\u7684\u540d\u79f0\n  // %B: \u5b8c\u6574\u7684\u6708\u4efd\u540d\u79f0\n  // %d: \u6708\u4efd\u7684\u5929\u6570\n  strftime(s, sizeof s, "%A, %B %d", localtime(&now));\n  puts(s);   // Sunday, February 28\n\n  // %I: \u5c0f\u65f6\uff0812\u5c0f\u65f6\u5236\uff09\n  // %M: \u5206\u949f\n  // %S: \u79d2\u6570\n  // %p: AM \u6216 PM\n  strftime(s, sizeof s, "It\'s %I:%M:%S %p", localtime(&now));\n  puts(s);   // It\'s 10:29:00 PM\n\n  // %F: ISO 8601 yyyy-mm-dd \u683c\u5f0f\n  // %T: ISO 8601 hh:mm:ss \u683c\u5f0f\n  // %z: ISO 8601 \u65f6\u533a\n  strftime(s, sizeof s, "ISO 8601: %FT%T%z", localtime(&now));\n  puts(s);   // ISO 8601: 2021-02-28T22:29:00-0800\n}\n')),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u5e38\u7528\u7684\u683c\u5f0f\u5360\u4f4d\u7b26\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"%%\uff1a\u8f93\u51fa % \u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"%a\uff1a\u661f\u671f\u51e0\u7684\u7b80\u5199\u5f62\u5f0f\uff0c\u4ee5\u5f53\u5730\u65f6\u95f4\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},"%A\uff1a\u661f\u671f\u51e0\u7684\u5b8c\u6574\u5f62\u5f0f\uff0c\u4ee5\u5f53\u5730\u65f6\u95f4\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},"%b\uff1a\u6708\u4efd\u7684\u7b80\u5199\u5f62\u5f0f\uff0c\u4ee5\u5f53\u5730\u65f6\u95f4\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},"%B\uff1a\u6708\u4efd\u7684\u5b8c\u6574\u5f62\u5f0f\uff0c\u4ee5\u5f53\u5730\u65f6\u95f4\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},"%c\uff1a\u65e5\u671f\u548c\u65f6\u95f4\uff0c\u4f7f\u7528\u201c%x %X\u201d\u3002"),(0,l.kt)("li",{parentName:"ul"},"%d\uff1a\u6708\u4efd\u7684\u5929\u6570\uff0801-31\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%H\uff1a\u5c0f\u65f6\uff0c\u91c7\u752824\u5c0f\u65f6\u5236\uff0800-23\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%I\uff1a\u5c0f\u65f6\uff0c\u91c7\u752812\u5c0f\u65f6\u5236\uff0800-12\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%J\uff1a\u4e00\u5e74\u7684\u7b2c\u51e0\u5929\uff08001-366\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%m\uff1a\u6708\u6570\uff0801-12\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%M\uff1a\u5206\u949f\uff0800\uff5e59\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%P\uff1aAM \u6216 PM\u3002"),(0,l.kt)("li",{parentName:"ul"},'%R\uff1a\u76f8\u5f53\u4e8e"%H:%M"\u3002'),(0,l.kt)("li",{parentName:"ul"},"%S\uff1a\u79d2\uff0800-61\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%U\uff1a\u4e00\u5e74\u7684\u7b2c\u51e0\u661f\u671f\uff0800-53\uff09\uff0c\u4ee5\u661f\u671f\u65e5\u4e3a\u7b2c1\u5929\u3002"),(0,l.kt)("li",{parentName:"ul"},"%w\uff1a\u4e00\u661f\u671f\u7684\u7b2c\u51e0\u5929\uff0c\u661f\u671f\u65e5\u4e3a\u7b2c0\u5929\u3002"),(0,l.kt)("li",{parentName:"ul"},"%W\uff1a\u4e00\u5e74\u7684\u7b2c\u51e0\u661f\u671f(00-53)\uff0c\u4ee5\u661f\u671f\u4e00\u4e3a\u7b2c1\u5929\u3002"),(0,l.kt)("li",{parentName:"ul"},"%x\uff1a\u5b8c\u6574\u7684\u5e74\u6708\u65e5\u7684\u65e5\u671f\uff0c\u4ee5\u5f53\u5730\u65f6\u95f4\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},"%X\uff1a\u5b8c\u6574\u7684\u65f6\u5206\u79d2\u7684\u65f6\u95f4\uff0c\u4ee5\u5f53\u5730\u65f6\u95f4\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},"%y\uff1a\u4e24\u4f4d\u6570\u5e74\u4efd\uff0800-99\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%Y\uff1a\u56db\u4f4d\u6570\u5e74\u4efd\uff08\u4f8b\u5982 1984\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"%Z\uff1a\u65f6\u533a\u7684\u7b80\u5199\u3002")),(0,l.kt)("h2",{id:"timespec_get"},"timespec_get()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"timespec_get()"),"\u7528\u6765\u5c06\u5f53\u524d\u65f6\u95f4\u8f6c\u6210\u8ddd\u79bb\u65f6\u95f4\u7eaa\u5143\u7684\u7eb3\u79d2\u6570\uff08\u5341\u4ebf\u5206\u4e4b\u4e00\u79d2\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int timespec_get ( struct timespec* ts, int base ) ;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"timespec_get()"),"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f struct timespec \u7ed3\u6784\u6307\u9488\uff0c\u7528\u6765\u4fdd\u5b58\u8f6c\u6362\u540e\u7684\u65f6\u95f4\u4fe1\u606f\u3002struct timespec \u7684\u7ed3\u6784\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"struct timespec {\n  time_t tv_sec;   // \u79d2\u6570\n  long   tv_nsec;  // \u7eb3\u79d2\n};\n")),(0,l.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u65f6\u95f4\u8ba1\u7b97\u7684\u8d77\u70b9\u3002\u6807\u51c6\u53ea\u7ed9\u51fa\u4e86\u5b8f TIME_UTC \u8fd9\u4e00\u4e2a\u53ef\u80fd\u7684\u503c\uff0c\u8868\u793a\u8fd4\u56de\u8ddd\u79bb\u65f6\u95f4\u7eaa\u5143\u7684\u79d2\u6570\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'struct timespec ts;\n    \ntimespec_get(&ts, TIME_UTC);\n    \n// 1614581530 s, 806325800 ns\nprintf("%ld s, %ld ns\\n", ts.tv_sec, ts.tv_nsec);\n    \ndouble float_time = ts.tv_sec + ts.tv_nsec/1000000000.0;\n\n// 1614581530.806326 seconds since epoch\nprintf("%f seconds since epoch\\n", float_time);\n')),(0,l.kt)("h2",{id:"clock"},"clock()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clock()"),"\u51fd\u6570\u8fd4\u56de\u4ece\u7a0b\u5e8f\u5f00\u59cb\u6267\u884c\u5230\u5f53\u524d\u7684 CPU \u65f6\u949f\u5468\u671f\u3002\u4e00\u4e2a\u65f6\u949f\u5468\u671f\u7b49\u4e8e CPU \u9891\u7387\u7684\u5012\u6570\uff0c\u6bd4\u5982 CPU \u7684\u9891\u7387\u5982\u679c\u662f 1G Hz\uff0c\u8868\u793a1\u79d2\u5185\u65f6\u949f\u4fe1\u53f7\u53ef\u4ee5\u53d8\u5316 10^9 \u6b21\uff0c\u90a3\u4e48\u6bcf\u4e2a\u65f6\u949f\u5468\u671f\u5c31\u662f 10^-9 \u79d2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"clock_t\u3000clock(void);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clock()"),"\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u4ece\u7a0b\u5e8f\u5f00\u59cb\u5230\u73b0\u5728\u7684 CPU \u65f6\u949f\u5468\u671f\u7684\u6b21\u6570\u3002\u8fd9\u4e2a\u503c\u7684\u7c7b\u578b\u662f clock_t\uff0c\u4e00\u822c\u662f long int \u7c7b\u578b\u3002 "),(0,l.kt)("p",null,"\u4e3a\u4e86\u628a\u8fd9\u4e2a\u503c\u8f6c\u6362\u4e3a\u79d2\uff0c\u5e94\u8be5\u628a\u5b83\u9664\u4ee5\u5e38\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"CLOCKS_PER_SEC"),"\uff08\u6bcf\u79d2\u7684\u65f6\u949f\u5468\u671f\uff09\uff0c\u8fd9\u4e2a\u5e38\u91cf\u4e5f\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"time.h"),"\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'printf("CPU time: %f\\n", clock() / (double)CLOCKS_PER_SEC);\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u53ef\u4ee5\u8f93\u51fa\u7a0b\u5e8f\u4ece\u5f00\u59cb\u5230\u8fd0\u884c\u5230\u8fd9\u4e00\u884c\u6240\u82b1\u8d39\u7684\u79d2\u6570\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8ba1\u7b97\u673a\u65e0\u6cd5\u63d0\u4f9b CPU \u65f6\u95f4\uff0c\u6216\u8005\u8fd4\u56de\u503c\u592a\u5927\uff0c\u65e0\u6cd5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"clock_t"),"\u7c7b\u578b\u8868\u793a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"clock()"),"\u51fd\u6570\u5c31\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u77e5\u9053\u67d0\u4e2a\u64cd\u4f5c\u6240\u8017\u8d39\u7684\u7cbe\u786e\u65f6\u95f4\uff0c\u9700\u8981\u8c03\u7528\u4e24\u6b21",(0,l.kt)("inlineCode",{parentName:"p"},"clock()"),"\uff0c\u7136\u540e\u5c06\u4e24\u6b21\u7684\u8fd4\u56de\u503c\u76f8\u51cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"clock_t start = clock();\n\n// ... \u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\n\nclock_t end = clock();\n\nlong double seconds = (float)(end - start) / CLOCKS_PER_SEC;\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://serhack.me/articles/measure-execution-time-program/"},"How to Measure Execution Time of a Program"))))}u.isMDXComponent=!0}}]);