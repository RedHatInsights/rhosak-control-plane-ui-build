(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[211],{7725:(e,t,n)=>{e.exports={parse:n(3039),stringify:n(1320)}},8073:(e,t,n)=>{var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(1739);e.exports=function(e){var t,n=0,i=!0,a={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return i=!0,void n++;i?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(a.voidElement=!0),a.name=r):(a.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(a.attrs[t]=t),t=r),n++,i=!1})),a}},3039:(e,t,n)=>{var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(8073),i=Object.create?Object.create(null):{};function a(e,t,n,r,o){var i=t.indexOf("<",r),a=t.slice(r,-1===i?void 0:i);/^\s*$/.test(a)&&(a=" "),(!o&&i>-1&&n+e.length>=0||" "!==a)&&e.push({type:"text",content:a})}e.exports=function(e,t){t||(t={}),t.components||(t.components=i);var n,c=[],s=-1,u=[],l={},f=!1;return e.replace(r,(function(r,i){if(f){if(r!=="</"+n.name+">")return;f=!1}var p,d="/"!==r.charAt(1),y=0===r.indexOf("\x3c!--"),g=i+r.length,b=e.charAt(g);d&&!y&&(s++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!b||"<"===b||a(n.children,e,s,g,t.ignoreWhitespace),l[n.tagName]=n,0===s&&c.push(n),(p=u[s-1])&&p.children.push(n),u[s]=n),(y||!d||n.voidElement)&&(y||s--,!f&&"<"!==b&&b&&a(p=-1===s?c:u[s].children,e,s,g,t.ignoreWhitespace))})),!c.length&&e.length&&a(c,e,0,0,t.ignoreWhitespace),c}},1320:e=>{function t(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(t,"")+"</"+n.name+">"}}e.exports=function(e){return e.reduce((function(e,n){return e+t("",n)}),"")}},4211:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{I18nContext:()=>g,I18nextProvider:()=>_,Trans:()=>B,Translation:()=>Y,composeInitialProps:()=>w,getDefaults:()=>m,getI18n:()=>O,getInitialProps:()=>P,initReactI18next:()=>j,setDefaults:()=>b,setI18n:()=>v,useSSR:()=>q,useTranslation:()=>H,withSSR:()=>J,withTranslation:()=>M});var a=n(8121),c=n.n(a),s=n(7725),u=n.n(s);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d,y={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},g=c().createContext();function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y=p(p({},y),e)}function m(){return y}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var t,n,r;return t=e,(n=[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&l(t.prototype,n),r&&l(t,r),e}();function v(e){d=e}function O(){return d}var j={type:"3rdParty",init:function(e){b(e.options.react),v(e)}};function w(e){return function(t){return new Promise((function(n){var r=P();e.getInitialProps?e.getInitialProps(t).then((function(e){n(p(p({},e),r))})):n(r)}))}}function P(){var e=O(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}function S(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var E={};function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&E[t[0]]||("string"==typeof t[0]&&(E[t[0]]=new Date),S.apply(void 0,t))}function x(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return k("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||o&&!a(i,e))))}function I(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function A(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function T(e){return Array.isArray(e)?e:[e]}function L(e,t){if(!e)return"";var n="",i=T(e),a=t.transKeepBasicHtmlNodesFor||[];return i.forEach((function(e,i){if("string"==typeof e)n+="".concat(e);else if(c().isValidElement(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)n+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"==typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=L(l,t);n+="<".concat(i,">").concat(f,"</").concat(i,">")}else n+="<".concat(i,"></").concat(i,">")}else if("object"===o(e)){var p=e.format,d=r(e,["format"]),y=Object.keys(d);if(1===y.length){var g=p?"".concat(y[0],", ").concat(p):y[0];n+="{{".concat(g,"}}")}else S("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else S("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function z(e,t,n,r,i){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(a.join("|")).test(t);if(!e&&!s)return[t];var l={};!function e(t){T(t).forEach((function(t){"string"!=typeof t&&(R(t)?e(A(t)):"object"!==o(t)||c().isValidElement(t)||Object.assign(l,t))}))}(e);var f=n.services.interpolator.interpolate(t,C(C({},l),i),n.language),p=u().parse("<0>".concat(f,"</0>"));function d(e,t,n){var r=A(e),o=g(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c().isValidElement(e)}))}(r)&&0===o.length?r:o}function y(e,t,n,r,o){e.dummy&&(e.children=t),n.push(c().cloneElement(e,C(C({},e.props),{},{key:r}),o?void 0:t))}function g(t,n,i){var u=T(t);return T(n).reduce((function(t,n,l){var f,p,b,m=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var h=u[parseInt(n.name,10)];!h&&1===i.length&&i[0][n.name]&&(h=i[0][n.name]),h||(h={});var v=0!==Object.keys(n.attrs).length?(f={props:n.attrs},(b=C({},p=h)).props=Object.assign(f.props,p.props),b):h,O=c().isValidElement(v),j=O&&R(n,!0)&&!n.voidElement,w=s&&"object"===o(v)&&v.dummy&&!O,P="object"===o(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"==typeof v)t.push(v);else if(R(v)||j){y(v,d(v,n,i),t,l)}else if(w){var S=g(u,n.children,i);t.push(c().cloneElement(v,C(C({},v.props),{},{key:l}),S))}else if(Number.isNaN(parseFloat(n.name))){if(P)y(v,d(v,n,i),t,l,n.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(c().createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var E=g(u,n.children,i);t.push(c().createElement(n.name,{key:"".concat(n.name,"-").concat(l)},E))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var k=g(u,n.children,i);t.push("<".concat(n.name,">").concat(k,"</").concat(n.name,">"))}}else if("object"!==o(v)||O)1===n.children.length&&m?t.push(c().cloneElement(v,C(C({},v.props),{},{key:l}),m)):t.push(c().cloneElement(v,C(C({},v.props),{},{key:l})));else{var x=n.children[0]?m:null;x&&t.push(x)}}else"text"===n.type&&t.push(n.content);return t}),[])}return A(g([{dummy:!0,children:e}],p,T(e||[]))[0])}function B(e){var t=e.children,n=e.count,o=e.parent,i=e.i18nKey,s=e.tOptions,u=void 0===s?{}:s,l=e.values,f=e.defaults,p=e.components,d=e.ns,y=e.i18n,b=e.t,h=r(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),v=(0,a.useContext)(g)||{},j=v.i18n,w=v.defaultNS,P=y||j||O();if(!P)return k("You will need to pass in an i18next instance by using i18nextReactModule"),t;var S=b||P.t.bind(P)||function(e){return e},E=C(C({},m()),P.options&&P.options.react),x=d||S.ns||w||P.options&&P.options.defaultNS;x="string"==typeof x?[x]:x||["translation"];var N=f||L(t,E)||E.transEmptyNodeValue||i,I=E.hashTransKey,D=i||(I?I(N):N),R=l?u.interpolation:{interpolation:C(C({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=C(C(C(C({},u),{},{count:n},l),R),{},{defaultValue:N,ns:x}),T=z(p||t,D?S(D,A):N,P,E,A),B=void 0!==o?o:E.defaultTransParent;return B?c().createElement(B,h,T):T}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,a.useContext)(g)||{},o=r.i18n,i=r.defaultNS,c=n||o||O();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new h),!c){k("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&k("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=F(F(F({},m()),c.options.react),t),f=l.useSuspense,p=e||i||c.options&&c.options.defaultNS;p="string"==typeof p?[p]:p||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(p);var d=(c.isInitialized||c.initializedStoreOnce)&&p.every((function(e){return N(e,c,l)}));function y(){return{t:c.getFixedT(null,"fallback"===l.nsMode?p:p[0])}}var b=(0,a.useState)(y()),v=V(b,2),j=v[0],w=v[1],P=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){P.current&&w(y())}return P.current=!0,d||f||x(c,p,(function(){P.current&&w(y())})),e&&c&&c.on(e,n),t&&c&&c.store.on(t,n),function(){P.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,n)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,n)}))}}),[p.join()]);var S=[j.t,c,d];if(S.t=j.t,S.i18n=c,S.ready=d,d)return S;if(!d&&!f)return S;throw new Promise((function(e){x(c,p,(function(){e()}))}))}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function o(o){var i=o.forwardedRef,a=r(o,["forwardedRef"]),s=V(H(e,a),3),u=s[0],l=s[1],f=s[2],p=$($({},a),{},{t:u,i18n:l,tReady:f});return t.withRef&&i?p.ref=i:!t.withRef&&i&&(p.forwardedRef=i),c().createElement(n,p)}o.displayName="withI18nextTranslation(".concat(I(n),")"),o.WrappedComponent=n;return t.withRef?c().forwardRef((function(e,t){return c().createElement(o,Object.assign({},e,{forwardedRef:t}))})):o}}function Y(e){var t=e.ns,n=e.children,o=V(H(t,r(e,["ns","children"])),3),i=o[0],a=o[1],c=o[2];return n(i,{i18n:a,lng:a.language},c)}function _(e){var t=e.i18n,n=e.defaultNS,r=e.children,o=(0,a.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,a.createElement)(g.Provider,{value:o},r)}function q(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.i18n,o=(0,a.useContext)(g)||{},i=o.i18n,c=r||i||O();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),t&&!c.initializedLanguageOnce&&(c.changeLanguage(t),c.initializedLanguageOnce=!0))}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(){return function(e){function t(t){var n=t.initialI18nStore,o=t.initialLanguage,a=r(t,["initialI18nStore","initialLanguage"]);return q(n,o),c().createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a))}return t.getInitialProps=w(e),t.displayName="withI18nextSSR(".concat(I(e),")"),t.WrappedComponent=e,t}}},1739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=211.125e8b28254fc6924be7.js.map