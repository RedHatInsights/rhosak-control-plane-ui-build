(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4429],{94429:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t),n.d(t,{I18nContext:()=>E,I18nextProvider:()=>ae,Trans:()=>_,Translation:()=>ie,composeInitialProps:()=>R,date:()=>fe,getDefaults:()=>x,getI18n:()=>I,getInitialProps:()=>C,initReactI18next:()=>D,number:()=>de,plural:()=>ge,select:()=>ye,selectOrdinal:()=>me,setDefaults:()=>S,setI18n:()=>N,time:()=>pe,useSSR:()=>ce,useTranslation:()=>X,withSSR:()=>le,withTranslation:()=>re});var o=n(71002),i=n(4942),a=n(75418),c=n.n(a),s=n(71739),u=n.n(s),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function f(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(u()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(l),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),t.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,y=Object.create(null);function g(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(g,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var m={parse:function(e,t){t||(t={}),t.components||(t.components=y);var n,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(p,(function(c,s){if(a){if(c!=="</"+n.name+">")return;a=!1}var u,l="/"!==c.charAt(1),p=c.startsWith("\x3c!--"),y=s+c.length,g=e.charAt(y);if(p){var m=f(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(n=f(c)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!g||"<"===g||n.children.push({type:"text",content:e.slice(y,e.indexOf("<",y))}),0===i&&r.push(n),(u=o[i-1])&&u.children.push(n),o[i]=n),(!l||n.voidElement)&&(i>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(i--,n=-1===i?r:o[i]),!a&&"<"!==g&&g)){u=-1===i?r:o[i].children;var h=e.indexOf("<",y),b=e.slice(y,-1===h?void 0:h);d.test(b)&&(b=" "),(h>-1&&i+u.length>=0||" "!==b)&&u.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+g("",t)}),"")}};const h=m;var b=n(15671),v=n(43144);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w,P={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},E=c().createContext();function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P=j(j({},P),e)}function x(){return P}var k=function(){function e(){(0,b.Z)(this,e),this.usedNamespaces={}}return(0,v.Z)(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function N(e){w=e}function I(){return w}var D={type:"3rdParty",init:function(e){S(e.options.react),N(e)}};function R(e){return function(t){return new Promise((function(n){var r=C();e.getInitialProps?e.getInitialProps(t).then((function(e){n(j(j({},e),r))})):n(r)}))}}function C(){var e=I(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}function A(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var T={};function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&T[t[0]]||("string"==typeof t[0]&&(T[t[0]]=new Date),A.apply(void 0,t))}function z(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function L(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return Z("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||o&&!a(i,e))))}function B(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var U=["format"],V=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function H(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function M(e){return Array.isArray(e)?e:[e]}function $(e,t){if(!e)return"";var n="",i=M(e),a=t.transKeepBasicHtmlNodesFor||[];return i.forEach((function(e,i){if("string"==typeof e)n+="".concat(e);else if(c().isValidElement(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)n+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"==typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=$(l,t);n+="<".concat(i,">").concat(f,"</").concat(i,">")}else n+="<".concat(i,"></").concat(i,">")}else if(null===e)A("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,o.Z)(e)){var p=e.format,d=r(e,U),y=Object.keys(d);if(1===y.length){var g=p?"".concat(y[0],", ").concat(p):y[0];n+="{{".concat(g,"}}")}else A("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else A("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function Y(e,t,n,r,i){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(a.join("|")).test(t);if(!e&&!s)return[t];var u={};!function e(t){M(t).forEach((function(t){"string"!=typeof t&&(F(t)?e(H(t)):"object"!==(0,o.Z)(t)||c().isValidElement(t)||Object.assign(u,t))}))}(e);var l=h.parse("<0>".concat(t,"</0>")),f=W(W({},u),i);function p(e,t,n){var r=H(e),o=y(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c().isValidElement(e)}))}(r)&&0===o.length?r:o}function d(e,t,n,r,o){e.dummy&&(e.children=t),n.push(c().cloneElement(e,W(W({},e.props),{},{key:r}),o?void 0:t))}function y(t,i,u){var l=M(t);return M(i).reduce((function(t,i,g){var m,h,b,v=i.children&&i.children[0]&&i.children[0].content&&n.services.interpolator.interpolate(i.children[0].content,f,n.language);if("tag"===i.type){var O=l[parseInt(i.name,10)];!O&&1===u.length&&u[0][i.name]&&(O=u[0][i.name]),O||(O={});var j=0!==Object.keys(i.attrs).length?(m={props:i.attrs},(b=W({},h=O)).props=Object.assign(m.props,h.props),b):O,w=c().isValidElement(j),P=w&&F(i,!0)&&!i.voidElement,E=s&&"object"===(0,o.Z)(j)&&j.dummy&&!w,S="object"===(0,o.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof j){var x=n.services.interpolator.interpolate(j,f,n.language);t.push(x)}else if(F(j)||P){d(j,p(j,i,u),t,g)}else if(E){var k=y(l,i.children,u);t.push(c().cloneElement(j,W(W({},j.props),{},{key:g}),k))}else if(Number.isNaN(parseFloat(i.name))){if(S)d(j,p(j,i,u),t,g,i.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(i.name)>-1)if(i.voidElement)t.push(c().createElement(i.name,{key:"".concat(i.name,"-").concat(g)}));else{var N=y(l,i.children,u);t.push(c().createElement(i.name,{key:"".concat(i.name,"-").concat(g)},N))}else if(i.voidElement)t.push("<".concat(i.name," />"));else{var I=y(l,i.children,u);t.push("<".concat(i.name,">").concat(I,"</").concat(i.name,">"))}}else if("object"!==(0,o.Z)(j)||w)1===i.children.length&&v?t.push(c().cloneElement(j,W(W({},j.props),{},{key:g}),v)):t.push(c().cloneElement(j,W(W({},j.props),{},{key:g})));else{var D=i.children[0]?v:null;D&&t.push(D)}}else if("text"===i.type){var R=r.transWrapTextNodes,C=n.services.interpolator.interpolate(i.content,f,n.language);R?t.push(c().createElement(R,{key:"".concat(i.name,"-").concat(g)},C)):t.push(C)}return t}),[])}return H(y([{dummy:!0,children:e||[]}],l,M(e||[]))[0])}function _(e){var t=e.children,n=e.count,o=e.parent,i=e.i18nKey,s=e.tOptions,u=void 0===s?{}:s,l=e.values,f=e.defaults,p=e.components,d=e.ns,y=e.i18n,g=e.t,m=r(e,V),h=(0,a.useContext)(E)||{},b=h.i18n,v=h.defaultNS,O=y||b||I();if(!O)return Z("You will need to pass in an i18next instance by using i18nextReactModule"),t;var j=g||O.t.bind(O)||function(e){return e},w=W(W({},x()),O.options&&O.options.react),P=d||j.ns||v||O.options&&O.options.defaultNS;P="string"==typeof P?[P]:P||["translation"];var S=f||$(t,w)||w.transEmptyNodeValue||i,k=w.hashTransKey,N=i||(k?k(S):S),D=l?u.interpolation:{interpolation:W(W({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},R=W(W(W(W({},u),{},{count:n},l),D),{},{defaultValue:S,ns:P}),C=Y(p||t,N?j(N,R):S,O,w,R),A=void 0!==o?o:w.defaultTransParent;return A?c().createElement(A,m,C):C}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,a.useContext)(E)||{},o=r.i18n,i=r.defaultNS,c=n||o||I();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new k),!c){Z("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&Z("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=Q(Q(Q({},x()),c.options.react),t),f=l.useSuspense,p=l.keyPrefix,d=e||i||c.options&&c.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(d);var y=(c.isInitialized||c.initializedStoreOnce)&&d.every((function(e){return L(e,c,l)}));function g(){return c.getFixedT(null,"fallback"===l.nsMode?d:d[0],p)}var m=(0,a.useState)(g),h=G(m,2),b=h[0],v=h[1],O=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){O.current&&v(g)}return O.current=!0,y||f||z(c,d,(function(){O.current&&v(g)})),e&&c&&c.on(e,n),t&&c&&c.store.on(t,n),function(){O.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,n)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,n)}))}}),[c,d.join()]);var j=(0,a.useRef)(!0);(0,a.useEffect)((function(){O.current&&!j.current&&v(g),j.current=!1}),[c]);var w=[b,c,y];if(w.t=b,w.i18n=c,w.ready=y,y)return w;if(!y&&!f)return w;throw new Promise((function(e){z(c,d,(function(){e()}))}))}var ee=["forwardedRef"];function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function o(o){var i=o.forwardedRef,a=r(o,ee),s=G(X(e,a),3),u=s[0],l=s[1],f=s[2],p=ne(ne({},a),{},{t:u,i18n:l,tReady:f});return t.withRef&&i?p.ref=i:!t.withRef&&i&&(p.forwardedRef=i),c().createElement(n,p)}o.displayName="withI18nextTranslation(".concat(B(n),")"),o.WrappedComponent=n;return t.withRef?c().forwardRef((function(e,t){return c().createElement(o,Object.assign({},e,{forwardedRef:t}))})):o}}var oe=["ns","children"];function ie(e){var t=e.ns,n=e.children,o=G(X(t,r(e,oe)),3),i=o[0],a=o[1],c=o[2];return n(i,{i18n:a,lng:a.language},c)}function ae(e){var t=e.i18n,n=e.defaultNS,r=e.children,o=(0,a.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,a.createElement)(E.Provider,{value:o},r)}function ce(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.i18n,o=(0,a.useContext)(E)||{},i=o.i18n,c=r||i||I();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),t&&!c.initializedLanguageOnce&&(c.changeLanguage(t),c.initializedLanguageOnce=!0))}var se=["initialI18nStore","initialLanguage"];function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(){return function(e){function t(t){var n=t.initialI18nStore,o=t.initialLanguage,a=r(t,se);return ce(n,o),c().createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a))}return t.getInitialProps=R(e),t.displayName="withI18nextSSR(".concat(B(e),")"),t.WrappedComponent=e,t}}var fe=function(){return""},pe=function(){return""},de=function(){return""},ye=function(){return""},ge=function(){return""},me=function(){return""}},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},15671:(e,t,n)=>{"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>r})},43144:(e,t,n)=>{"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:()=>o})},4942:(e,t,n)=>{"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r})},71002:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=4429.19b0de1e.js.map