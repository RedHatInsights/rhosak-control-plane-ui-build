"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4321],{95368:(e,t,a)=>{a.d(t,{JH:()=>s,ti:()=>n,N1:()=>i,SP:()=>l});var n=function(){this.cloud_provider="",this.multi_az=!0,this.region="",this.name=""},i=function(){this.name="",this.description=""},r=a(75418),s=a.n(r)().createContext({tokenEndPointUrl:""}),l=function(){return(0,r.useContext)(s)}},34321:(e,t,a)=>{a.r(t),a.d(t,{CreateServiceAccount:()=>m,default:()=>f});var n=a(70655),i=a(75418),r=a.n(i),s=a(58788),l=a(74162),o=a(95368),c=a(45024),u=a(54532),d=a(75381),_=a(70854),m=function(){var e=new o.N1,t=(0,c.QK)(),a=t.store,m=t.showModal,f=t.hideModal,v=((null==a?void 0:a.modalProps)||{}).fetchServiceAccounts,p=(0,u.useTranslation)().t,h=(0,_.useAuth)(),g=(0,_.useConfig)().kas.apiBasePath,S=(0,_.useAlert)().addAlert,x=(0,i.useState)({fieldState:"default"}),A=x[0],C=x[1],E=(0,i.useState)({fieldState:"default"}),T=E[0],w=E[1],b=(0,i.useState)(e),k=b[0],I=b[1],N=(0,i.useState)(!0),z=N[0],F=N[1],P=(0,i.useState)(!1),y=P[0],L=P[1],$=function(){C({fieldState:"default"}),w({fieldState:"default"}),I(e),F(!0)};(0,i.useEffect)((function(){"error"!==A.fieldState&&"error"!==T.fieldState&&F(!0)}),[A.fieldState,T.fieldState]);var G,M,R,q,D,V,B=function(e){I((0,n.__assign)((0,n.__assign)({},k),{name:e}));var t=!0;e&&!/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.trim())&&(t=!1),e&&e.length>d.Nw?C({fieldState:"error",message:p("serviceAccount.service_account_name_length_is_greater_than_expected",{maxLength:d.Nw})}):t&&"error"===A.fieldState?C({fieldState:"default",message:""}):t||C({fieldState:"error",message:p("common.input_filed_invalid_helper_text")})},Z=function(e){I((0,n.__assign)((0,n.__assign)({},k),{description:e}));var t=!0;e&&!/^[a-zA-Z0-9.,\-\s]*$/.test(e.trim())&&(t=!1),e&&e.length>d.lt?w({fieldState:"error",message:p("serviceAccount.service_account_description_length_is_greater_than_expected",{maxLength:d.lt})}):t&&"error"===T.fieldState?w({fieldState:"default",message:""}):t||w({fieldState:"error",message:p("common.input_text_area_invalid_helper_text")})},H=function(){return(0,n.__awaiter)(void 0,void 0,void 0,(function(){var e,t,a;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return e=function(){var e=!0,t=k.name,a=k.description;return t&&""!==t.trim()?/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(t.trim())?/^[a-zA-Z0-9.,\-\s]*$/.test(a.trim())||(e=!1,w({fieldState:"error",message:p("common.input_text_area_invalid_helper_text")})):(e=!1,C({fieldState:"error",message:p("common.input_filed_invalid_helper_text")})):(e=!1,C({fieldState:"error",message:p("common.this_is_a_required_field")})),t.length>d.Nw&&(e=!1,C({fieldState:"error",message:p("serviceAccount.service_account_name_length_is_greater_than_expected",{maxLength:d.Nw})})),a&&a.length>d.lt&&(e=!1,w({fieldState:"error",message:p("serviceAccount.service_account_name_length_is_greater_than_expected",{maxLength:d.lt})})),e}(),[4,null==h?void 0:h.kas.getToken()];case 1:if(t=n.sent(),!e)return F(!1),[2];if(!t)return[3,5];n.label=2;case 2:return n.trys.push([2,4,,5]),a=new l.SecurityApi(new l.Configuration({accessToken:t,basePath:g})),L(!0),[4,a.createServiceAccount(k).then((function(e){var t=null==e?void 0:e.data;f(),m(c.Ny.GENERATE_CREDENTIALS,{credential:t}),$(),S({title:p("serviceAccount.service_account_creation_success_message"),variant:s.AlertVariant.success}),v&&v()}))];case 3:return n.sent(),[3,5];case 4:return function(e){var t,a;(0,d.G6)(e)&&(a=null===(t=e.response)||void 0===t?void 0:t.data.reason),S({title:p("something_went_wrong"),variant:s.AlertVariant.danger,description:a})}(n.sent()),[3,5];case 5:return L(!1),[2]}}))}))},J=function(e){e.preventDefault(),H()};return r().createElement(c.a$,{id:"modalCreateSAccount",isModalOpen:!0,title:p("serviceAccount.create_a_service_account"),handleModalToggle:function(){$(),f()},onCreate:H,isFormValid:z,primaryButtonTitle:"Create",isCreationInProgress:y,dataTestIdSubmit:"modalCreateServiceAccount-buttonSubmit",dataTestIdCancel:"modalCreateServiceAccount-buttonCancel"},(G=A.message,M=A.fieldState,R=k.name,q=k.description,D=T.message,V=T.fieldState,r().createElement(s.Form,{onSubmit:J},!z&&r().createElement(s.FormAlert,null,r().createElement(s.Alert,{variant:"danger",title:p("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})),r().createElement(s.FormGroup,{label:"Name",isRequired:!0,fieldId:"text-input-name",helperTextInvalid:G,validated:M,helperText:p("common.input_filed_invalid_helper_text")},r().createElement(s.TextInput,{isRequired:!0,type:"text",id:"text-input-name",name:"text-input-name",value:R,onChange:B,validated:M,autoFocus:!0})),r().createElement(s.FormGroup,{label:"Description",fieldId:"text-input-description",helperTextInvalid:D,validated:V,helperText:p("common.input_text_area_invalid_helper_text")},r().createElement(s.TextArea,{id:"text-input-description",name:"text-input-description",value:q,onChange:Z,validated:V})))))};const f=m}}]);
//# sourceMappingURL=4321.fa92c3e5.js.map