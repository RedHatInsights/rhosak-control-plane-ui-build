"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4227],{88372:(e,n,t)=>{t.r(n),t.d(n,{DeleteServiceAccount:()=>v,default:()=>f});var i=t(70655),r=t(75418),a=t.n(r),c=t(11593),o=t(84669),s=t(35946),l=t(75381),u=t(55277),d=t(46332),v=function(e){var n=e.onDelete,t=e.serviceAccount,v=e.title,f=e.hideModal,h=(0,c.useTranslation)().t,_=(0,d.useAuth)(),k=((0,d.useConfig)()||{kas:{}}).kas.apiBasePath,p=((0,d.useAlert)()||{}).addAlert,w=(0,r.useState)(!1),A=w[0],g=w[1],m=function(){f()};return a().createElement(s.pf,{isModalOpen:!0,handleModalToggle:m,title:v,confirmButtonProps:{onClick:function(){return function(e){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var t,r,a,c,s,d;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:if(void 0===(t=null==e?void 0:e.id))throw new Error("service account id not defined");return[4,null==_?void 0:_.kas.getToken()];case 1:if(!(r=i.sent()))return[3,5];a=new u.SecurityApi(new u.Configuration({accessToken:r,basePath:k})),g(!0),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,a.deleteServiceAccountById(t).then((function(){m(),g(!1),p&&p({title:h("serviceAccount.service_account_successfully_deleted",{name:null==e?void 0:e.name}),variant:o.AlertVariant.success}),n&&n()}))];case 3:return i.sent(),[3,5];case 4:return c=i.sent(),s=void 0,(0,l.G6)(c)&&(s=null===(d=c.response)||void 0===d?void 0:d.data.reason),m(),g(!1),p&&p({title:h("common.something_went_wrong"),variant:o.AlertVariant.danger,description:s}),[3,5];case 5:return[2]}}))}))}(t)},label:"Delete",isLoading:A}},a().createElement("p",null,a().createElement("b",null,null==t?void 0:t.name)," ",h("serviceAccount.will_be_deleted")))};const f=v}}]);
//# sourceMappingURL=4227.0cb9ddd0.js.map