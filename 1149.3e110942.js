(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1149],{61149:(e,t,n)=>{"use strict";n.r(t),n.d(t,{I18nContext:()=>m,I18nextProvider:()=>J,Trans:()=>V,Translation:()=>G,composeInitialProps:()=>P,date:()=>ne,getDefaults:()=>y,getI18n:()=>j,getInitialProps:()=>E,initReactI18next:()=>w,number:()=>ie,plural:()=>ae,select:()=>oe,selectOrdinal:()=>ce,setDefaults:()=>v,setI18n:()=>O,time:()=>re,useSSR:()=>Q,useTranslation:()=>H,withSSR:()=>te,withTranslation:()=>Y});var r=n(45987),i=n(71002),o=n(4942),a=n(19437),c=n.n(a),s=n(81613),u=n(12020),l=n(15671),p=n(43144);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g,h={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},m=c().createContext();function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h=d(d({},h),e)}function y(){return h}var b=function(){function e(){(0,l.Z)(this,e),this.usedNamespaces={}}return(0,p.Z)(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function O(e){g=e}function j(){return g}var w={type:"3rdParty",init:function(e){v(e.options.react),O(e)}};function P(e){return function(t){return new Promise((function(n){var r=E();e.getInitialProps?e.getInitialProps(t).then((function(e){n(d(d({},e),r))})):n(r)}))}}function E(){var e=j(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}function x(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var S={};function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&S[t[0]]||("string"==typeof t[0]&&(S[t[0]]=new Date),x.apply(void 0,t))}function N(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return k("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],i=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||i&&!a(o,e))))}function Z(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var D=["format"],R=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function z(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function L(e){return Array.isArray(e)?e:[e]}function U(e,t){if(!e)return"";var n="",o=L(e),a=t.transKeepBasicHtmlNodesFor||[];return o.forEach((function(e,o){if("string"==typeof e)n+="".concat(e);else if(c().isValidElement(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)n+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(o,"></").concat(o,">");else if(u&&1===s&&"string"==typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=U(l,t);n+="<".concat(o,">").concat(p,"</").concat(o,">")}else n+="<".concat(o,"></").concat(o,">")}else if(null===e)x("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,i.Z)(e)){var f=e.format,d=(0,r.Z)(e,D),g=Object.keys(d);if(1===g.length){var h=f?"".concat(g[0],", ").concat(f):g[0];n+="{{".concat(h,"}}")}else x("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else x("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function B(e,t,n,r,o,a){if(""===t)return[];var l=r.transKeepBasicHtmlNodesFor||[],p=t&&new RegExp(l.join("|")).test(t);if(!e&&!p)return[t];var f={};!function e(t){L(t).forEach((function(t){"string"!=typeof t&&(A(t)?e(z(t)):"object"!==(0,i.Z)(t)||c().isValidElement(t)||Object.assign(f,t))}))}(e);var d=s.Z.parse("<0>".concat(t,"</0>")),g=T(T({},f),o);function h(e,t,n){var r=z(e),i=v(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c().isValidElement(e)}))}(r)&&0===i.length?r:i}function m(e,t,n,r,i){e.dummy&&(e.children=t),n.push(c().cloneElement(e,T(T({},e.props),{},{key:r}),i?void 0:t))}function v(t,o,s){var f=L(t);return L(o).reduce((function(t,o,d){var y,b,O,j=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,g,n.language);if("tag"===o.type){var w=f[parseInt(o.name,10)];!w&&1===s.length&&s[0][o.name]&&(w=s[0][o.name]),w||(w={});var P=0!==Object.keys(o.attrs).length?(y={props:o.attrs},(O=T({},b=w)).props=Object.assign(y.props,b.props),O):w,E=c().isValidElement(P),x=E&&A(o,!0)&&!o.voidElement,S=p&&"object"===(0,i.Z)(P)&&P.dummy&&!E,k="object"===(0,i.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof P){var N=n.services.interpolator.interpolate(P,g,n.language);t.push(N)}else if(A(P)||x){m(P,h(P,o,s),t,d)}else if(S){var I=v(f,o.children,s);t.push(c().cloneElement(P,T(T({},P.props),{},{key:d}),I))}else if(Number.isNaN(parseFloat(o.name))){if(k)m(P,h(P,o,s),t,d,o.voidElement);else if(r.transSupportBasicHtmlNodes&&l.indexOf(o.name)>-1)if(o.voidElement)t.push(c().createElement(o.name,{key:"".concat(o.name,"-").concat(d)}));else{var Z=v(f,o.children,s);t.push(c().createElement(o.name,{key:"".concat(o.name,"-").concat(d)},Z))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var D=v(f,o.children,s);t.push("<".concat(o.name,">").concat(D,"</").concat(o.name,">"))}}else if("object"!==(0,i.Z)(P)||E)1===o.children.length&&j?t.push(c().cloneElement(P,T(T({},P.props),{},{key:d}),j)):t.push(c().cloneElement(P,T(T({},P.props),{},{key:d})));else{var R=o.children[0]?j:null;R&&t.push(R)}}else if("text"===o.type){var C=r.transWrapTextNodes,z=a?(0,u.A)(n.services.interpolator.interpolate(o.content,g,n.language)):n.services.interpolator.interpolate(o.content,g,n.language);C?t.push(c().createElement(C,{key:"".concat(o.name,"-").concat(d)},z)):t.push(z)}return t}),[])}return z(v([{dummy:!0,children:e||[]}],d,L(e||[]))[0])}function V(e){var t=e.children,n=e.count,i=e.parent,o=e.i18nKey,s=e.tOptions,u=void 0===s?{}:s,l=e.values,p=e.defaults,f=e.components,d=e.ns,g=e.i18n,h=e.t,v=e.shouldUnescape,b=(0,r.Z)(e,R),O=(0,a.useContext)(m)||{},w=O.i18n,P=O.defaultNS,E=g||w||j();if(!E)return k("You will need to pass in an i18next instance by using i18nextReactModule"),t;var x=h||E.t.bind(E)||function(e){return e},S=T(T({},y()),E.options&&E.options.react),N=d||x.ns||P||E.options&&E.options.defaultNS;N="string"==typeof N?[N]:N||["translation"];var I=p||U(t,S)||S.transEmptyNodeValue||o,Z=S.hashTransKey,D=o||(Z?Z(I):I),C=l?u.interpolation:{interpolation:T(T({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=T(T(T(T({},u),{},{count:n},l),C),{},{defaultValue:I,ns:N}),z=B(f||t,D?x(D,A):I,E,S,A,v),L=void 0!==i?i:S.defaultTransParent;return L?c().createElement(L,b,z):z}var K=n(29439);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,a.useContext)(m)||{},i=r.i18n,o=r.defaultNS,c=n||i||j();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new b),!c){k("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&k("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=F(F(F({},y()),c.options.react),t),p=l.useSuspense,f=l.keyPrefix,d=e||o||c.options&&c.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(d);var g=(c.isInitialized||c.initializedStoreOnce)&&d.every((function(e){return I(e,c,l)}));function h(){return c.getFixedT(null,"fallback"===l.nsMode?d:d[0],f)}var v=(0,a.useState)(h),O=(0,K.Z)(v,2),w=O[0],P=O[1],E=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){E.current&&P(h)}return E.current=!0,g||p||N(c,d,(function(){E.current&&P(h)})),e&&c&&c.on(e,n),t&&c&&c.store.on(t,n),function(){E.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,n)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,n)}))}}),[c,d.join()]);var x=(0,a.useRef)(!0);(0,a.useEffect)((function(){E.current&&!x.current&&P(h),x.current=!1}),[c]);var S=[w,c,g];if(S.t=w,S.i18n=c,S.ready=g,g)return S;if(!g&&!p)return S;throw new Promise((function(e){N(c,d,(function(){e()}))}))}var M=["forwardedRef"];function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function i(i){var o=i.forwardedRef,a=(0,r.Z)(i,M),s=H(e,a),u=(0,K.Z)(s,3),l=u[0],p=u[1],f=u[2],d=q(q({},a),{},{t:l,i18n:p,tReady:f});return t.withRef&&o?d.ref=o:!t.withRef&&o&&(d.forwardedRef=o),c().createElement(n,d)}i.displayName="withI18nextTranslation(".concat(Z(n),")"),i.WrappedComponent=n;return t.withRef?c().forwardRef((function(e,t){return c().createElement(i,Object.assign({},e,{forwardedRef:t}))})):i}}var _=["ns","children"];function G(e){var t=e.ns,n=e.children,i=H(t,(0,r.Z)(e,_)),o=(0,K.Z)(i,3),a=o[0],c=o[1],s=o[2];return n(a,{i18n:c,lng:c.language},s)}function J(e){var t=e.i18n,n=e.defaultNS,r=e.children,i=(0,a.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,a.createElement)(m.Provider,{value:i},r)}function Q(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.i18n,i=(0,a.useContext)(m)||{},o=i.i18n,c=r||o||j();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),t&&!c.initializedLanguageOnce&&(c.changeLanguage(t),c.initializedLanguageOnce=!0))}var X=["initialI18nStore","initialLanguage"];function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(){return function(e){function t(t){var n=t.initialI18nStore,i=t.initialLanguage,a=(0,r.Z)(t,X);return Q(n,i),c().createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a))}return t.getInitialProps=P(e),t.displayName="withI18nextSSR(".concat(Z(e),")"),t.WrappedComponent=e,t}}var ne=function(){return""},re=function(){return""},ie=function(){return""},oe=function(){return""},ae=function(){return""},ce=function(){return""}},12020:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r="".replace,i=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,o={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'};function a(e){return r.call(e,i,c)}function c(e){return o[e]}},81613:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(71739),i=n.n(r),o=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function a(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(i()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(o),c=null;null!==(c=a.exec(e));)if(c[0].trim())if(c[1]){var s=c[1].trim(),u=[s,""];s.indexOf("=")>-1&&(u=s.split("=")),t.attrs[u[0]]=u[1],a.lastIndex--}else c[2]&&(t.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return t}var c=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,s=/^\s*$/,u=Object.create(null);function l(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(l,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var p={parse:function(e,t){t||(t={}),t.components||(t.components=u);var n,r=[],i=[],o=-1,l=!1;if(0!==e.indexOf("<")){var p=e.indexOf("<");r.push({type:"text",content:-1===p?e:e.substring(0,p)})}return e.replace(c,(function(c,u){if(l){if(c!=="</"+n.name+">")return;l=!1}var p,f="/"!==c.charAt(1),d=c.startsWith("\x3c!--"),g=u+c.length,h=e.charAt(g);if(d){var m=a(c);return o<0?(r.push(m),r):((p=i[o]).children.push(m),r)}if(f&&(o++,"tag"===(n=a(c)).type&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!h||"<"===h||n.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===o&&r.push(n),(p=i[o-1])&&p.children.push(n),i[o]=n),(!f||n.voidElement)&&(o>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(o--,n=-1===o?r:i[o]),!l&&"<"!==h&&h)){p=-1===o?r:i[o].children;var v=e.indexOf("<",g),y=e.slice(g,-1===v?void 0:v);s.test(y)&&(y=" "),(v>-1&&o+p.length>=0||" "!==y)&&p.push({type:"text",content:y})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+l("",t)}),"")}};const f=p},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},45987:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(63366);function i(e,t){if(null==e)return{};var n,i,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},63366:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:()=>r})},29439:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(83878);var i=n(88192),o=n(25267);function a(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||(0,i.Z)(e,t)||(0,o.Z)()}}}]);
//# sourceMappingURL=1149.3e110942.js.map