"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[710],{4137:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(4137));const o={id:"enums",title:"Enums",sidebar_position:5},i=void 0,s={unversionedId:"openapi-3/enums",id:"openapi-3/enums",title:"Enums",description:"",source:"@site/docs/openapi-3/enums.md",sourceDirName:"openapi-3",slug:"/openapi-3/enums",permalink:"/docs/openapi-3/enums",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"enums",title:"Enums",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Responses",permalink:"/docs/openapi-3/responses"},next:{title:"oneOf and anyOf",permalink:"/docs/openapi-3/x-of"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{textAlign:"justify"}},(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"'@enum'")," reserved keyword to specify possible values of a request parameter or a model property.  ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/data-models/enums"},"See more about it here"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example #1"',title:'"Example','#1"':!0},"app.get('/path', (req, res) => {\n    ...\n    /*  #swagger.parameters['any_name'] = {\n            in: 'query',\n            description: 'Some description...',\n            schema: {\n                '@enum': ['arc', 'desc']\n            }\n    } */\n   ...\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example #2 (reusable)"',title:'"Example',"#2":!0,'(reusable)"':!0},'const doc = {\n    ...\n    components: {\n        schemas: {\n            Color: {\n                \'@enum\': [\n                    "black",\n                    "white",\n                    "red",\n                    "green"\n                ]\n            }\n        }\n    }\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/path', (req, res) => {\n    ...\n    /*  #swagger.parameters['any_name'] = {\n            in: 'query',\n            description: 'Some description...',\n            schema: {\n                $ref: '#/components/schemas/Color'\n            }\n    } */\n   ...\n});\n")))}m.isMDXComponent=!0}}]);