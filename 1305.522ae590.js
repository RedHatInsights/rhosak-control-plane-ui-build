/*! For license information please see 1305.522ae590.js.LICENSE.txt */
"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1305,5893],{75251:(e,a,t)=>{t(27418);var r=t(13400),n=60103;if(a.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),a.Fragment=o("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)s.call(a,r)&&!i.hasOwnProperty(r)&&(o[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:n,type:e,key:c,ref:d,props:o,_owner:l.current}}a.jsx=c,a.jsxs=c},85893:(e,a,t)=>{e.exports=t(75251)},94622:(e,a,t)=>{t.d(a,{A:()=>s});var r=t(85893),n=t(75418),o=t(4716),l=t(7451);const s=()=>{const{registerModals:e}=(0,l.useModal)();return e((()=>{const{t:e}=(0,o.useTranslation)(["kasTemporaryFixMe"]);return{[l.ModalType.KasCreateInstance]:{lazyComponent:(0,n.lazy)((()=>Promise.all([t.e(223),t.e(1803),t.e(9468),t.e(69),t.e(6437)]).then(t.bind(t,76437)))),variant:"medium",title:e("create_a_kafka_instance")},[l.ModalType.KasDeleteInstance]:{lazyComponent:(0,n.lazy)((()=>Promise.all([t.e(223),t.e(5052),t.e(9421),t.e(1803),t.e(8199),t.e(9468),t.e(8827),t.e(524)]).then(t.bind(t,78578)))),variant:"small"},[l.ModalType.KasTransferOwnership]:{lazyComponent:(0,n.lazy)((()=>Promise.all([t.e(223),t.e(9421),t.e(9468),t.e(8512)]).then(t.bind(t,98512)))),variant:"medium",title:e("change_owner")},[l.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,n.lazy)((()=>Promise.all([t.e(223),t.e(5052),t.e(9421),t.e(1803),t.e(8199),t.e(9468),t.e(8827),t.e(8752)]).then(t.bind(t,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[l.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,n.lazy)((()=>Promise.all([t.e(223),t.e(5052),t.e(9421),t.e(1803),t.e(8199),t.e(9468),t.e(8827),t.e(645)]).then(t.bind(t,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[l.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,n.lazy)((()=>Promise.all([t.e(223),t.e(5052),t.e(9421),t.e(1803),t.e(8199),t.e(9468),t.e(8827),t.e(4410)]).then(t.bind(t,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,r.jsx)(r.Fragment,{})}},51305:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var r=t(85893),n=t(4077),o=t(94622);const l=({children:e})=>(0,r.jsxs)(n.ModalProvider,{children:[e,(0,r.jsx)(o.A,{})]})}}]);
