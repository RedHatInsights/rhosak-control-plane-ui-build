/*! For license information please see 1305.7795105d.js.LICENSE.txt */
"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1305,7418,5893],{27418:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,l,c=a(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))t.call(i,u)&&(c[u]=i[u]);if(r){l=r(i);for(var p=0;p<l.length;p++)n.call(i,l[p])&&(c[l[p]]=i[l[p]])}}return c}},75251:(e,r,t)=>{t(27418);var n=t(93264),a=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),r.Fragment=o("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,o={},s=null,u=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(u=r.ref),r)l.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:a,type:e,key:s,ref:u,props:o,_owner:i.current}}r.jsx=s,r.jsxs=s},85893:(e,r,t)=>{e.exports=t(75251)},94622:(e,r,t)=>{t.d(r,{A:()=>l});var n=t(85893),a=t(93264),o=t(93049),i=t(5854);const l=()=>{const{registerModals:e}=(0,i.useModal)();return e((()=>{const{t:e}=(0,o.useTranslation)(["kasTemporaryFixMe"]);return{[i.ModalType.KasCreateInstance]:{lazyComponent:(0,a.lazy)((()=>Promise.all([t.e(7196),t.e(9922),t.e(8199),t.e(7118),t.e(9835),t.e(4372)]).then(t.bind(t,74372)))),variant:"medium",title:e("create_a_kafka_instance")},[i.ModalType.KasDeleteInstance]:{lazyComponent:(0,a.lazy)((()=>Promise.all([t.e(7196),t.e(9922),t.e(8408),t.e(8199),t.e(7118),t.e(8251),t.e(5626),t.e(524)]).then(t.bind(t,78578)))),variant:"small"},[i.ModalType.KasTransferOwnership]:{lazyComponent:(0,a.lazy)((()=>Promise.all([t.e(9922),t.e(8408),t.e(7118),t.e(8512)]).then(t.bind(t,98512)))),variant:"medium",title:e("change_owner")},[i.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,a.lazy)((()=>Promise.all([t.e(7196),t.e(9922),t.e(8408),t.e(8199),t.e(7118),t.e(8251),t.e(5626),t.e(8752)]).then(t.bind(t,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[i.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,a.lazy)((()=>Promise.all([t.e(7196),t.e(9922),t.e(8408),t.e(8199),t.e(7118),t.e(8251),t.e(5626),t.e(645)]).then(t.bind(t,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[i.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,a.lazy)((()=>Promise.all([t.e(7196),t.e(9922),t.e(8408),t.e(8199),t.e(7118),t.e(8251),t.e(5626),t.e(4410)]).then(t.bind(t,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,n.jsx)(n.Fragment,{})}},51305:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var n=t(85893),a=t(1808),o=t(94622);const i=({children:e})=>(0,n.jsxs)(a.ModalProvider,{children:[e,(0,n.jsx)(o.A,{})]})}}]);
