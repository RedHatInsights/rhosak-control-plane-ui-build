(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[6308],{66308:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ResetServiceAccount:()=>_,default:()=>m});var r=n(70655),i=n(48121),a=n.n(i),c=n(38936),s=n(58788),o=n(45024),u=n(75381),l=n(52648),d=n(82904),v=n(46748),_=function(){var e=(0,c.useTranslation)().t,t=(0,v.useAuth)(),n=(0,v.useConfig)().kas.apiBasePath,_=(0,v.useAlert)().addAlert,m=(0,o.QK)(),p=m.store,A=m.showModal,k=m.hideModal,f=((null==p?void 0:p.modalProps)||{}).serviceAccountToReset,h=(0,i.useState)(!1),w=h[0],g=h[1],C=function(i){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var a,c,l;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return a=null==i?void 0:i.id,[4,null==t?void 0:t.kas.getToken()];case 1:if(!(c=r.sent()))return[3,5];r.label=2;case 2:return r.trys.push([2,4,,5]),l=new d.SecurityApi(new d.Configuration({accessToken:c,basePath:n})),g(!0),[4,l.resetServiceAccountCreds(a).then((function(t){var n=null==t?void 0:t.data;k(),g(!1),A(o.Ny.GENERATE_CREDENTIALS,{credential:n,title:e("serviceAccount.reset_service_account_credentials")})}))];case 3:return r.sent(),[3,5];case 4:return function(t){var n,r;(0,u.G6)(t)&&(r=null===(n=t.response)||void 0===n?void 0:n.data.reason),_({title:e("something_went_wrong"),variant:s.AlertVariant.danger,description:r})}(r.sent()),g(!1),[3,5];case 5:return[2]}}))}))},E=function(){k()},T=null==f?void 0:f.name,b=null==f?void 0:f.client_id;return a().createElement(s.Modal,{id:"reset-service-account-modal",variant:s.ModalVariant.medium,title:e("serviceAccount.reset_service_account_credentials")+"?",isOpen:!0,onClose:E,appendTo:l.wx,actions:[a().createElement(s.Button,{key:"create",variant:"primary",type:"submit",onClick:function(){return C(f)},spinnerAriaValueText:e("common.submitting_request"),isLoading:w},e("serviceAccount.reset")),a().createElement(s.Button,{key:"cancel",variant:"link",onClick:E},e("common.cancel"))]},a().createElement("span",{dangerouslySetInnerHTML:{__html:e("serviceAccount.client_secret_will_be_reset",{serviceAccountId:T,client_id:b})}}))};const m=_}}]);
//# sourceMappingURL=6308.69f69f0a.js.map