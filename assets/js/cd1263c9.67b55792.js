(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(149)),o={},i={unversionedId:"user-guide/ui/packages",id:"user-guide/ui/packages",isDocsHomePage:!1,title:"Packages View",description:"On this view, we can check what packages we have installed in our DAppNodes. You can check some general parameters and do the next actions on this page:",source:"@site/docs/user-guide/ui/packages.md",sourceDirName:"user-guide/ui",slug:"/user-guide/ui/packages",permalink:"/user-guide/ui/packages",editUrl:"https://github.com/dappnode/DAppNodeDocs/docs/user-guide/ui/packages.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DAppStore View",permalink:"/user-guide/ui/dappstore"},next:{title:"System View",permalink:"/user-guide/ui/system"}},s=[{value:"My packages",id:"my-packages",children:[]},{value:"System packages",id:"system-packages",children:[]}],p={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"On this view, we can check what packages we have installed in our DAppNodes. You can check some general parameters and do the next actions on this page:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"STATUS"),": indicate the state of the package, they can be 3: Running, Crashed and Stopped. Running mean is turned on. Crashed means the package has suffered some error and it's stopped. Stopped means the container has been stopped by the user."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Name"),": it's the name of the package."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Link to de package view"),": click on it to go to the package view in case you want to check some parameter or set up something related to the package."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Restart package"),": restart all the package, it means all the containers of the package are restarted.")),Object(c.b)("h2",{id:"my-packages"},"My packages"),Object(c.b)("p",null,"My packages refers to the packages the user have installed and they are not essential for the performance of DAppNode."),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"../../../../img/packages_view_1.png"})),Object(c.b)("h2",{id:"system-packages"},"System packages"),Object(c.b)("p",null,"They are the packages that are essential for DAppNode or including a feature that is so important for DAppNode."),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"../../../../img/packages_view_2.png"})))}u.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(a),g=n,m=l["".concat(o,".").concat(g)]||l[g]||d[g]||c;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);