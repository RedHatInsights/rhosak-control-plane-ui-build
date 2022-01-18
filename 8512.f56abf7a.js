"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8512],{13449:(e,n,t)=>{t.d(n,{J:()=>a,S:()=>i});var r=t(75418),a=t.n(r)().createContext(void 0),i=function(){return(0,r.useContext)(a)}},98512:(e,n,t)=>{t.r(n),t.d(n,{TransferOwnership:()=>m,default:()=>p});var r=t(223),a=t(75418),i=t.n(a),o=t(59909),l=t(99421),s=t(13449),u=function(e){var n=e.selection,t=e.setSelection,r=e.allUsers,s=(0,o.useTranslation)(["kasTemporaryFixMe"]).t,u=(0,a.useState)(!1),c=u[0],d=u[1],_=r&&(null==r?void 0:r.map((function(e){var n=e.id,t=e.displayName;return i().createElement(l.SelectOption,{key:n,value:n,description:t},n)}))),m=function(){t(void 0),d(!1)};return i().createElement(l.Select,{id:"manage-permissions-owner-select",variant:l.SelectVariant.typeahead,onToggle:function(e){d(e)},isOpen:c,placeholderText:s("select_user_account"),createText:s("common.use"),menuAppendTo:"parent",maxHeight:400,onSelect:function(e,n,r){r&&m(),t(n.toString()),d(!1)},selections:n,isCreatable:!0,onFilter:function(e,n){return function(e,n){if(!e)return n;var t=new RegExp(e,"i");return null==n?void 0:n.filter((function(e){return t.test(e.props.value)||t.test(e.props.description)}))}(n,_)}},_)},c=t(44274),d=t(7451),_=t(78261),m=function(e){var n,t,m=e.kafka,p=e.onClose,v=e.hideModal,f=e.refreshKafkas,A=e.variant,w=e.title,E=(0,o.useTranslation)(["kasTemporaryFixMe"]).t,S=(0,d.useAuth)(),T=(0,d.useConfig)().kas.apiBasePath,g=((0,d.useAlert)()||{addAlert:function(){return""}}).addAlert,k=(0,a.useState)(),h=k[0],C=k[1],F=(0,a.useState)(),K=F[0],M=F[1],I=(0,a.useState)(),N=I[0],O=I[1],y=function(){v(),p&&p()};return i().createElement(l.Modal,{id:"manage-permissions-modal",title:w,isOpen:!0,onClose:y,variant:A,position:"top",actions:[i().createElement(l.Button,{id:"confirm__button",key:"changeowner",variant:"primary",onClick:function(){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var e,n,t,a,i,o;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==S?void 0:S.kas.getToken()];case 1:if(!((e=r.sent())&&(null==h?void 0:h.trim())&&(null==m?void 0:m.id)))return[3,5];M(!0),n={owner:h},t=new c.DefaultApi(new c.Configuration({accessToken:e,basePath:T})),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,t.updateKafkaById(m.id,n).then((function(){f&&f(),g({title:E("owner_change_sucess_title"),variant:l.AlertVariant.success,description:E("owner_change_sucess_message",{newOwner:h,name:null==m?void 0:m.name})}),M(!1),y()}))];case 3:return r.sent(),[3,5];case 4:return a=r.sent(),i=void 0,(0,_.G)(a)&&(i=null===(o=a.response)||void 0===o?void 0:o.data.code),O(i),M(!1),[3,5];case 5:return[2]}}))}))},isLoading:K,isDisabled:!(null==h?void 0:h.trim())||K},E("common.change_owner")),i().createElement(l.Button,{id:"cancel__button",key:"cancel",variant:"link",onClick:y},E("cancel"))]},i().createElement(l.Form,null,function(){var e,n;return N===_.S.OWNER_DOES_NOT_EXIST?(e=E("new_owner_does_not_exist_title"),n=E("new_owner_does_not_exist_message",{newOwner:h})):N&&(e=E("can_not_change_owner_title"),n=E("onwer_transfer_failed_message",{name:null==m?void 0:m.name})),e&&n?i().createElement(l.Alert,{variant:l.AlertVariant.danger,"aria-live":"polite",isInline:!0,title:e},n):i().createElement(i().Fragment,null)}(),i().createElement(l.FormGroup,{fieldId:"Current-owner-name",label:E("current_owner_name")},null==m?void 0:m.owner),i().createElement(l.FormGroup,{fieldId:"New-owner-name",label:E("new_owner_name")},i().createElement(u,{selection:h,setSelection:C,allUsers:(n=((0,s.S)()||{getAllUserAccounts:function(){return[]}}).getAllUserAccounts,t=n&&n(),null==t?void 0:t.map((function(e){return{id:e.id,displayName:e.displayName}})))}))))};const p=m},78261:(e,n,t)=>{t.d(n,{S:()=>r,G:()=>a});var r,a=function(e){var n;return void 0!==(null===(n=e.response)||void 0===n?void 0:n.data.code)};!function(e){e.UNAUTHORIZED_USER="KAFKAS-MGMT-4",e.DUPLICATE_INSTANCE_NAME="KAFKAS-MGMT-36",e.PREVIEW_KAFKA_INSTANCE_EXIST="KAFKAS-MGMT-24",e.INSUFFICIENT_QUOTA="KAFKAS-MGMT-120",e.FAILED_TO_CHECK_QUOTA="KAFKAS-MGMT-121",e.OWNER_DOES_NOT_EXIST="KAFKAS-MGMT-21"}(r||(r={}))}}]);
//# sourceMappingURL=8512.f56abf7a.js.map