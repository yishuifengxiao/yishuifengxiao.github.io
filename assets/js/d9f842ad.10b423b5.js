"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=d(n),k=i,s=u["".concat(p,".").concat(k)]||u[k]||g[k]||l;return n?a.createElement(s,o(o({ref:t},m),{},{components:n})):a.createElement(s,o({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=k;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={title:"go\u547d\u4ee4",sidebar_position:2,keywords:["GO","go\u547d\u4ee4"],tags:["GO"]},o=void 0,r={unversionedId:"go\u547d\u4ee4\u76f8\u5173",id:"go\u547d\u4ee4\u76f8\u5173",title:"go\u547d\u4ee4",description:"\u4e00 go get \u547d\u4ee4",source:"@site/wiki/code-snippet/go\u547d\u4ee4\u76f8\u5173.md",sourceDirName:".",slug:"/go\u547d\u4ee4\u76f8\u5173",permalink:"/code-snippet/go\u547d\u4ee4\u76f8\u5173",draft:!1,tags:[{label:"GO",permalink:"/code-snippet/tags/go"}],version:"current",lastUpdatedBy:"yishuifengxiao",lastUpdatedAt:1689150403,formattedLastUpdatedAt:"2023\u5e747\u670812\u65e5",sidebarPosition:2,frontMatter:{title:"go\u547d\u4ee4",sidebar_position:2,keywords:["GO","go\u547d\u4ee4"],tags:["GO"]},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u542f\u52a8",permalink:"/code-snippet/"},next:{title:"go\u6587\u4ef6\u5904\u7406",permalink:"/code-snippet/go\u6587\u4ef6\u5904\u7406"}},p={},d=[{value:"\u4e00 go get \u547d\u4ee4",id:"\u4e00-go-get-\u547d\u4ee4",level:2},{value:"1.1.1 \u4f7f\u7528\u4e34\u65f6\u6e90",id:"111-\u4f7f\u7528\u4e34\u65f6\u6e90",level:3},{value:"\u4e8c GOMODULE\u5e38\u7528\u547d\u4ee4",id:"\u4e8c-gomodule\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u4e09 \u79c1\u6709\u4f9d\u8d56",id:"\u4e09-\u79c1\u6709\u4f9d\u8d56",level:2}],m={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e00-go-get-\u547d\u4ee4"},"\u4e00 go get \u547d\u4ee4"),(0,i.kt)("p",null,"Go 1.16 \u4e2d\u5305\u542b\u7740\u5927\u91cf\u7684 Modules \u76f8\u5173\u7684\u66f4\u65b0\uff0c\u8be6\u7ec6\u5185\u5bb9\u53ef\u76f4\u63a5\u67e5\u770b\u5176 Release Note","[2]","\u3002\u6574\u4f53\u800c\u8a00\uff0c\u5305\u542b\u4ee5\u4e0b\u8981\u70b9\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GO111MODULE")," \u9ed8\u8ba4\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"}," on")," \uff0c\u5982\u679c\u8981\u6062\u590d\u5230\u4e4b\u524d\u7684\u884c\u4e3a\uff0c\u5219\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"GO111MODULE")," \u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"}," auto")," \uff0c\u8fd9\u6837\u5dee\u4e0d\u591a\u610f\u5473\u7740 GOPATH \u6a21\u5f0f\u8981\u9010\u6b65\u6de1\u51fa\u4eba\u4eec\u7684\u89c6\u91ce\u4e86\uff1b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go install")," \u547d\u4ee4\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u7248\u672c\u540e\u7f00\u4e86\uff0c\uff08\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"go install sigs.k8s.io/kind@v0.9.0"),"\uff09\uff0c\u5e76\u4e14\u5b83\u662f\u5728\u6a21\u5757\u611f\u77e5\u7684\u6a21\u5f0f\u4e0b\u8fd0\u884c\uff0c\u53ef\u5ffd\u7565\u5f53\u524d\u76ee\u5f55\u6216\u4e0a\u5c42\u76ee\u5f55\u7684 go.mod \u6587\u4ef6\u3002\u8fd9\u5bf9\u4e8e\u5728\u4e0d\u5f71\u54cd\u4e3b\u6a21\u5757\u4f9d\u8d56\u7684\u60c5\u51b5\u4e0b\uff0c\u5b89\u88c5\u4e8c\u8fdb\u5236\u5f88\u65b9\u4fbf\uff1b"),(0,i.kt)("p",null,"\u5728\u5c06\u6765\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"go install "),"\u88ab\u8bbe\u8ba1\u4e3a\u201c\u7528\u4e8e\u6784\u5efa\u548c\u5b89\u88c5\u4e8c\u8fdb\u5236\u6587\u4ef6\u201d\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"go get "),"\u5219\u88ab\u8bbe\u8ba1\u4e3a \u201c\u7528\u4e8e\u7f16\u8f91 go.mod \u53d8\u66f4\u4f9d\u8d56\u201d\uff0c\u5e76\u4e14\u4f7f\u7528\u65f6\uff0c\u5e94\u8be5\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"-d "),"\u53c2\u6570\u5171\u7528\uff0c\u5728\u5c06\u6765\u7248\u672c\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," \u53ef\u80fd\u4f1a\u9ed8\u8ba4\u542f\u7528\uff1b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go build")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"go test")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u518d\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"}," go.mod")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"go.sum"),"\u3002\u53ef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"go mod tidy "),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"go get "),"\u6216\u8005\u624b\u52a8\u5b8c\u6210\uff1b\n\u603b\u7ed3\u800c\u8a00\uff0c\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"go install")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"go get")," \u5fc5\u987b\u8981\u6ce8\u610f\u7684\u662f\uff1a"),(0,i.kt)("p",null,"\u57fa\u672c\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"go install <package>@<version> "),"\u662f\u7528\u4e8e\u547d\u4ee4\u7684\u5168\u5c40\u5b89\u88c5\uff1a"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"go install sigs.k8s.io/kind@v0.9.0"),";"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go get "),"\u5b89\u88c5\u4e8c\u8fdb\u5236\u7684\u529f\u80fd\uff0c\u540e\u7eed\u7248\u672c\u5c06\u4f1a\u5220\u9664\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"go get")," \u4e3b\u8981\u88ab\u8bbe\u8ba1\u4e3a\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"go.mod "),"\u8ffd\u52a0\u4f9d\u8d56\u4e4b\u7c7b\u7684\uff0c\u4f46\u8fd8\u5b58\u5728\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"p"},"go mod tidy "),"\u4e4b\u7c7b\u7684\u547d\u4ee4\uff0c\u6240\u4ee5\u4f7f\u7528\u9891\u7387\u53ef\u80fd\u4e0d\u4f1a\u5f88\u9ad8\uff1b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go get")," \u652f\u6301\u81ea\u5b9a\u4e49\u57df\u540d\u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u53c2\u6570\u4ecb\u7ecd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-d"),"     \u53ea\u4e0b\u8f7d\u4e0d\u5b89\u88c5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-f"),"     \u53ea\u6709\u5728\u4f60\u5305\u542b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"-u")," \u53c2\u6570\u7684\u65f6\u5019\u624d\u6709\u6548\uff0c\u4e0d\u8ba9 ",(0,i.kt)("inlineCode",{parentName:"li"},"-u")," \u53bb\u9a8c\u8bc1 ",(0,i.kt)("inlineCode",{parentName:"li"},"import")," \u4e2d\u7684\u6bcf\u4e00\u4e2a\u90fd\u5df2\u7ecf\u83b7\u53d6\u4e86\uff0c\u8fd9\u5bf9\u4e8e\u672c\u5730 fork \u7684\u5305\u7279\u522b\u6709\u7528"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-fix"),"  \u5728\u83b7\u53d6\u6e90\u7801\u4e4b\u540e\u5148\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"fix"),"\uff0c\u7136\u540e\u518d\u53bb\u505a\u5176\u4ed6\u7684\u4e8b\u60c5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t"),"     \u540c\u65f6\u4e5f\u4e0b\u8f7d\u9700\u8981\u4e3a\u8fd0\u884c\u6d4b\u8bd5\u6240\u9700\u8981\u7684\u5305"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-u"),"      \u5f3a\u5236\u4f7f\u7528\u7f51\u7edc\u53bb\u66f4\u65b0\u5305\u548c\u5b83\u7684\u4f9d\u8d56\u5305\u3001\u4e0b\u8f7d\u4e22\u5931\u7684\u5305\uff0c\u4f46\u4e0d\u4f1a\u66f4\u65b0\u5df2\u7ecf\u5b58\u5728\u7684\u5305"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v"),"      \u663e\u793a\u6267\u884c\u7684\u547d\u4ee4\u3001\u663e\u793a\u64cd\u4f5c\u6d41\u7a0b\u7684\u65e5\u5fd7\u53ca\u4fe1\u606f\uff0c\u65b9\u4fbf\u68c0\u67e5\u9519\u8bef"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-insecure"),"      \u5141\u8bb8\u4f7f\u7528\u4e0d\u5b89\u5168\u7684 HTTP \u65b9\u5f0f\u8fdb\u884c\u4e0b\u8f7d\u64cd\u4f5c")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"111-\u4f7f\u7528\u4e34\u65f6\u6e90"},"1.1.1 \u4f7f\u7528\u4e34\u65f6\u6e90"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"go get")," \u547d\u4ee4\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"-u")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," \u6807\u5fd7\u6765\u4f7f\u7528\u4e34\u65f6\u6e90\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com")," \u4e0a\u83b7\u53d6\u6700\u65b0\u7248\u672c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," \u5e93\u5e76\u6253\u5370\u8be6\u7ec6\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u -v github.com/username/example\n")),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com")," \u66ff\u6362\u4e3a\u5176\u4ed6\u6e90\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"gitee.com")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab.com"),"\uff0c\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u4e34\u65f6\u6e90\u3002\u8bf7\u6ce8\u610f\uff0c\u4f7f\u7528\u4e34\u65f6\u6e90\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5b89\u5168\u95ee\u9898\uff0c\u56e0\u6b64\u8bf7\u8c28\u614e\u4f7f\u7528"),(0,i.kt)("h2",{id:"\u4e8c-gomodule\u5e38\u7528\u547d\u4ee4"},"\u4e8c GOMODULE\u5e38\u7528\u547d\u4ee4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go mod init"),"  # \u521d\u59cb\u5316go.mod"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go mod tidy"),"  # \u76f4\u63a5\u4ece\u6e90\u4ee3\u7801\u4e2d\u83b7\u53d6\u4f9d\u8d56\u5173\u7cfb\uff0c\u66f4\u65b0\u4f9d\u8d56\u6587\u4ef6\u3002\u53ef\u5220\u6389go.mod\u4e2d\u65e0\u7528\u7684\u4f9d\u8d56\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go mod download"),"  # \u4e0b\u8f7d\u4f9d\u8d56\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go mod vendor"),"  # \u5c06\u4f9d\u8d56\u8f6c\u79fb\u81f3\u672c\u5730\u7684vendor\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go mod edit"),"  # \u624b\u52a8\u4fee\u6539\u4f9d\u8d56\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go mod graph"),"  # \u6253\u5370\u4f9d\u8d56\u56fe"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go mod verify ")," # \u6821\u9a8c\u4f9d\u8d56")),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u6e90\u7801\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u8bed\u53e5\uff0c\u5bfc\u5165\u65b0\u7684\u4f9d\u8d56\u6a21\u5757\u524d\uff0c\u53ef\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"go get"),"\u547d\u4ee4\uff0c\u5148\u4e0b\u8f7d\u65b0\u6a21\u5757\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go instsll \u5e94\u8be5\u5728module\u5916\u90e8\u4f7f\u7528 https://github.com/golang/go/issues/40276\n\u5f03\u7528go get\u547d\u4ee4\u5b89\u88c5\u53ef\u6267\u884c\u6587\u4ef6 https://go.dev/doc/go-get-install-deprecation\nGo 1.16 \u4e2d\u5173\u4e8e go get \u548c go install https://cloud.tencent.com/developer/article/1766820\n\n")),(0,i.kt)("h2",{id:"\u4e09-\u79c1\u6709\u4f9d\u8d56"},"\u4e09 \u79c1\u6709\u4f9d\u8d56"),(0,i.kt)("p",null,"\u8981\u5b89\u88c5\u79c1\u6709\u4f9d\u8d56\u9879\uff0c\u60a8\u9700\u8981\u5c06\u4f9d\u8d56\u9879\u7684\u4ee3\u7801\u5b58\u50a8\u5728\u672c\u5730\u6216\u8005\u79c1\u6709\u4ee3\u7801\u4ed3\u5e93\u4e2d\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e4b\u4e00\u6765\u5b89\u88c5\u4f9d\u8d56\u9879\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u672c\u5730\u8def\u5f84\u5b89\u88c5")),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u5c06\u4f9d\u8d56\u9879\u7684\u4ee3\u7801\u5b58\u50a8\u5728\u672c\u5730\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u8be5\u4f9d\u8d56\u9879\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go install /path/to/dependency\n")),(0,i.kt)("p",null,"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/dependency")," \u662f\u4f9d\u8d56\u9879\u7684\u672c\u5730\u8def\u5f84"),(0,i.kt)("p",null,"\u200b\t\t\t2 \u4f7f\u7528\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u5b89\u88c5"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u7684\u4f9d\u8d56\u9879\u5b58\u50a8\u5728\u79c1\u6709\u4ee3\u7801\u4ed3\u5e93\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u8be5\u4f9d\u8d56\u9879\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u gitlab.com/username/repo\n")),(0,i.kt)("p",null,"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab.com/username/repo")," \u662f\u60a8\u7684\u79c1\u6709\u4ee3\u7801\u4ed3\u5e93\u5730\u5740\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8\u9700\u8981\u5728\u5b89\u88c5\u4e4b\u524d\u8bbe\u7f6e\u6b63\u786e\u7684\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4ee5\u8bbf\u95ee\u79c1\u6709\u4ee3\u7801\u4ed3\u5e93\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e9b\u65b9\u6cd5\u4e4b\u4e00\uff0c\u60a8\u53ef\u4ee5\u5b89\u88c5\u79c1\u6709\u4f9d\u8d56\u9879\u5e76\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u5b83\u4eec"))}g.isMDXComponent=!0}}]);