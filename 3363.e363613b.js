"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[3363],{43363:(e,t,n)=>{n.r(t),n.d(t,{CreateServiceAccount:()=>f,default:()=>h});var a=n(70655),r=n(75418),i=n.n(r),c=n(84669),o=n(55277),u=n(92550),s=n(11593),l=n(75381),d=function(e){if(void 0===e.name.value)throw new Error("ServiceAccountRequest.name must not be undefined");if(void 0===e.description.value)throw new Error("ServiceAccountRequest.description must not be undefined");return{name:e.name.value,description:e.description.value}},v=function(e){return"error"===e.name.validated||"error"===e.description.validated},m=n(62308),_=function(e){var t=e.serviceAccountRequest,n=e.createServiceAccount,o=e.setServiceAccountRequest,u=e.id,d=(0,s.useTranslation)().t,m=(0,r.useState)(!1),_=m[0],p=m[1],f=function(e){return void 0===e.description.value||/^[a-zA-Z0-9.,\-\s]*$/.test(e.description.value.trim())?void 0!==e.description.value&&e.description.value.length>l.lt?(e.description.validated="error",e.description.errorMessage=d("serviceAccount.service_account_description_length_is_greater_than_expected",{maxLength:l.JB})):e.description.validated="default":(e.description.validated="error",e.description.errorMessage=d("common.input_filed_invalid_helper_text")),e},h=function(e){return void 0===e.name.value||""===e.name.value.trim()?(e.name.validated="error",e.name.errorMessage=d("common.this_is_a_required_field")):void 0===e.name.value||/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.name.value.trim())?void 0!==e.name.value&&e.name.value.length>l.Nw?(e.name.validated="error",e.name.errorMessage=d("serviceAccount.service_account_name_length_is_greater_than_expected",{maxLength:l.JB})):e.name.validated="success":(e.name.validated="error",e.name.errorMessage=d("common.input_filed_invalid_helper_text")),e},g=function(){o({name:{value:""},description:{value:""}})};return i().createElement(c.Form,{onSubmit:function(e){e.preventDefault(),p(!0);var r=h(f(t));o((0,a.__assign)({},r)),v(r)||n().then((function(){return g()}))},id:u},i().createElement((function(){return _&&v(t)?i().createElement(c.FormAlert,null,i().createElement(c.Alert,{variant:"danger",title:d("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})):i().createElement(i().Fragment,null)}),null),i().createElement(c.FormGroup,{label:"Name",isRequired:!0,fieldId:"text-input-name",helperTextInvalid:t.name.errorMessage,validated:t.name.validated,helperText:d("common.input_filed_invalid_helper_text")},i().createElement(c.TextInput,{isRequired:!0,type:"text",id:"text-input-name",name:"text-input-name",value:t.name.value,onChange:function(e){o((function(t){var n=(0,a.__assign)((0,a.__assign)({},t),{name:{value:e}});return h(n)}))},validated:t.name.validated,autoFocus:!0})),i().createElement(c.FormGroup,{label:"Description",fieldId:"text-input-description",helperTextInvalid:t.description.errorMessage,validated:t.description.validated,helperText:d("common.input_text_area_invalid_helper_text")},i().createElement(c.TextArea,{id:"text-input-description",name:"text-input-description",value:t.description.value,onChange:function(e){o((function(t){var n=(0,a.__assign)((0,a.__assign)({},t),{description:{value:e}});return f(n)}))},validated:t.description.validated})))},p="create_service_account_form",f=function(){var e=(0,u.QK)(),t=e.store,n=e.showModal,f=e.hideModal,h=((null==t?void 0:t.modalProps)||{}).fetchServiceAccounts,g=(0,s.useTranslation)().t,A=(0,m.useAuth)(),x=((0,m.useConfig)()||{kas:{}}).kas.apiBasePath,S=((0,m.useAlert)()||{}).addAlert,C=(0,r.useState)({name:{value:""},description:{value:""}}),E=C[0],T=C[1],b=(0,r.useState)(!1),w=b[0],k=b[1];return i().createElement(u.a$,{id:"modalCreateSAccount",isModalOpen:!0,title:g("serviceAccount.create_a_service_account"),handleModalToggle:function(){f()},isFormValid:!v(E),primaryButtonTitle:"Create",isCreationInProgress:w,dataTestIdSubmit:"modalCreateServiceAccount-buttonSubmit",dataTestIdCancel:"modalCreateServiceAccount-buttonCancel",formId:p},i().createElement(_,{createServiceAccount:function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,r;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==A?void 0:A.kas.getToken()];case 1:if(!(e=a.sent()))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),t=new o.SecurityApi(new o.Configuration({accessToken:e,basePath:x})),k(!0),[4,t.createServiceAccount(d(E)).then((function(e){return null==e?void 0:e.data}))];case 3:return r=a.sent(),n(u.Ng.CREDENTIALS,{serviceAccount:r}),S&&S({title:g("serviceAccount.service_account_creation_success_message"),variant:c.AlertVariant.success}),h&&h(),[3,5];case 4:return function(e){var t,n;(0,l.G6)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.reason),S&&S({title:g("something_went_wrong"),variant:c.AlertVariant.danger,description:n})}(a.sent()),[3,5];case 5:return k(!1),[2]}}))}))},setServiceAccountRequest:T,serviceAccountRequest:E,id:p}))};const h=f}}]);
//# sourceMappingURL=3363.e363613b.js.map