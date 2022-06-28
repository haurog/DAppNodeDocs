"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[9515],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:1},i="Overview",l={unversionedId:"get-started/installation/custom-hardware/installation/overview",id:"get-started/installation/custom-hardware/installation/overview",title:"Overview",description:"DAppNode project is open source which means you can install it on your hardware. There are two main ways to install DAppNode:",source:"@site/docs/get-started/installation/custom-hardware/installation/overview.md",sourceDirName:"get-started/installation/custom-hardware/installation",slug:"/get-started/installation/custom-hardware/installation/overview",permalink:"/get-started/installation/custom-hardware/installation/overview",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/get-started/installation/custom-hardware/installation/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Hardware Recommendations",permalink:"/get-started/installation/custom-hardware/hardware-recommendations"},next:{title:"ISO Installation",permalink:"/get-started/installation/custom-hardware/installation/iso"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"DAppNode project is open source which means you can install it on your hardware. There are two main ways to install DAppNode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/get-started/installation/custom-hardware/installation/script"},"Installing with a script")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/get-started/installation/custom-hardware/installation/iso"},"Installing with an ISO"))),(0,a.kt)("p",null,"There are some little differences that we have to mention. These differences are important for more technical users. It does not affect the performance of the DAppNode but it does have a slightly different user experience that is generally limited to advanced users who interact with command line often."),(0,a.kt)("p",null,"If you install DAppNode with an ISO:"),(0,a.kt)("p",null,"The root account will be locked from SSH when installed via ISO, and the host account (default username: ",(0,a.kt)("inlineCode",{parentName:"p"},"dappnode"),") will need to manually be added to the sudoers file to access root directories or use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," command."),(0,a.kt)("p",null,"Both the install script and ISO install the same core packages."))}p.isMDXComponent=!0}}]);