/*! For license information please see 4458.3d5e1482.js.LICENSE.txt */
(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4458,5183,655,1230,5512,7066],{35183:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(70655),o=r.__importStar(n(75418));var a;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case a.sm:return"1em";case a.md:return"1.5em";case a.lg:return"2em";case a.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:c=0,width:l,height:s,svgPath:u}){var f;return f=class extends o.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:a,color:i,title:f,noVerticalAlign:d}=e,h=r.__rest(e,["size","color","title","noVerticalAlign"]),p=Boolean(f),v=t.getSize(a),m=-.125*Number.parseFloat(v),y=d?null:{verticalAlign:`${m}em`},_=[n,c,l,s].join(" ");return o.createElement("svg",Object.assign({style:y,fill:i,height:v,width:v,viewBox:_,"aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img"},h),p&&o.createElement("title",{id:this.id},f),o.createElement("path",{d:u}))}},f.displayName=e,f.defaultProps={color:"currentColor",size:a.sm,noVerticalAlign:!1},f}},84564:(e,t,n)=>{"use strict";t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},5569:(e,t,n)=>{"use strict";t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{"use strict";t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},34558:(e,t,n)=>{"use strict";t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},76831:function(e,t,n){e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),r={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return n.default.locale(r,null,!0),r}(n(86369))},56176:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,r){var o=n.prototype,a=o.format;r.en.formats=e,o.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,o){var a=o&&o.toUpperCase();return r||n[o]||e[o]||n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))}(t,void 0===n?{}:n);return a.call(this,r)}}}()},71958:()=>{},77903:()=>{},217:(e,t,n)=>{"use strict";n.d(t,{o:()=>_});var r=n(75418),o=n.n(r),a=n(31521),i=n(86369),c=n.n(i),l=n(56176),s=n.n(l),u=(n(77903),n(71958),n(28962)),f=n(75381),d=n(84669),h=n(81548),p=n(63286),v=o().lazy((function(){return n.e(3495).then(n.bind(n,43495))})),m=o().lazy((function(){return n.e(4988).then(n.bind(n,44988))})),y=function(e){var t,n=e.tokenEndPointUrl,r=(0,a.useTranslation)().t,i=(0,h.gD)(),c=i.instanceDrawerTab,l=i.setInstanceDrawerTab,s=i.instanceDrawerInstance,y=(null==s?void 0:s.status)===f.Od.ACCEPTED||(null==s?void 0:s.status)===f.Od.PREPARING;return o().createElement(o().Suspense,{fallback:o().createElement(u.yR,null)},o().createElement(d.Tabs,{activeKey:c.toString(),onSelect:function(e,t){return function(e){e===p.Z.CONNECTION?l(p.Z.CONNECTION):l(p.Z.DETAILS)}(t)}},o().createElement(d.Tab,{eventKey:p.Z.DETAILS.toString(),title:o().createElement(d.TabTitleText,null,r("details"))},o().createElement(m,null)),o().createElement(d.Tab,{eventKey:p.Z.CONNECTION.toString(),title:o().createElement(d.TabTitleText,null,r("connection")),"data-testid":"drawerStreams-tabConnect"},o().createElement(v,{externalServer:(t=(s||{}).bootstrap_server_host,(null==t?void 0:t.endsWith(":443"))?t:"".concat(t,":443")),isKafkaPending:y,tokenEndPointUrl:n,instanceId:null==s?void 0:s.id}))))},_=function(e){var t=e.children,n=e["data-ouia-app-id"],r=e.tokenEndPointUrl;c().extend(s());var i=(0,a.useTranslation)().t,l=(0,h.gD)(),f=l.isInstanceDrawerOpen,d=l.instanceDrawerInstance,p=l.closeInstanceDrawer,v=l.noInstances;return o().createElement(u.D5,{isExpanded:f,isLoading:void 0===d,onClose:p,panelBodyContent:o().createElement(y,{tokenEndPointUrl:r}),drawerHeaderProps:{text:{label:i("instance_name")},title:{value:null==d?void 0:d.name,headingLevel:"h1"}},"data-ouia-app-id":n,notRequiredDrawerContentBackground:v},t)}},3946:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(75418),o=n.n(r),a=n(31521),i=n(78800),c=n(217),l=n(97919),s=n(95950),u=n(81548);const f=function(e){var t=e["data-ouia-app-id"],n=e.tokenEndPointUrl,r=e.children;return o().createElement(a.I18nextProvider,{i18n:(0,i.Y)()},o().createElement(l.ModalProvider,null,o().createElement(u.e0,null,o().createElement(c.o,{"data-ouia-app-id":t,tokenEndPointUrl:n},r)),o().createElement(s.A,null)))}},81548:(e,t,n)=>{"use strict";n.d(t,{gD:()=>c,e0:()=>l});var r=n(75418),o=n.n(r),a=n(63286),i=o().createContext(void 0),c=function(){var e=(0,r.useContext)(i);if(void 0===e)throw new Error("must be used inside a InstanceDrawerContext provider");return e},l=function(e){var t=e.initialTab,n=e.initialInstance,c=e.initialNoInstances,l=void 0!==c&&c,s=e.children,u=a.Z.DETAILS,f=(0,r.useState)(t),d=f[0],h=f[1],p=(0,r.useState)(n),v=p[0],m=p[1],y=(0,r.useState)(l),_=y[0],w=y[1];return o().createElement(i.Provider,{value:{isInstanceDrawerOpen:void 0!==d,instanceDrawerTab:void 0===d?u:d,setInstanceDrawerTab:h,instanceDrawerInstance:v,setInstanceDrawerInstance:m,setNoInstances:w,noInstances:_,openInstanceDrawer:function(e){h(e||u)},closeInstanceDrawer:function(){h(void 0),m(void 0)}}},s)}},63286:(e,t,n)=>{"use strict";var r;n.d(t,{Z:()=>r}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(r||(r={}))},70655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__extends:()=>o,__assign:()=>a,__rest:()=>i,__decorate:()=>c,__param:()=>l,__metadata:()=>s,__awaiter:()=>u,__generator:()=>f,__createBinding:()=>d,__exportStar:()=>h,__values:()=>p,__read:()=>v,__spread:()=>m,__spreadArrays:()=>y,__spreadArray:()=>_,__await:()=>w,__asyncGenerator:()=>b,__asyncDelegator:()=>g,__asyncValues:()=>O,__makeTemplateObject:()=>S,__importStar:()=>Y,__importDefault:()=>I,__classPrivateFieldGet:()=>P,__classPrivateFieldSet:()=>M});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function l(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function h(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)r[o]=a[i];return r}function _(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof w?Promise.resolve(n.value.v).then(l,s):u(a[0][2],n)}catch(e){u(a[0][3],e)}var n}function l(e){c("next",e)}function s(e){c("throw",e)}function u(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function g(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:w(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function Y(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return E(t,e),t}function I(e){return e&&e.__esModule?e:{default:e}}function P(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function M(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);
//# sourceMappingURL=4458.3d5e1482.js.map