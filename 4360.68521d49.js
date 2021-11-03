/*! For license information please see 4360.68521d49.js.LICENSE.txt */
"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4360,5183,655,1230,5512],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=n(70655),r=a.__importStar(n(75418));var i;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(i=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case i.sm:return"1em";case i.md:return"1.5em";case i.lg:return"2em";case i.xl:return"3em";default:return"1em"}};let o=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:l=0,width:c,height:s,svgPath:u}){var d;return d=class extends r.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:i,color:o,title:d,noVerticalAlign:m}=e,v=a.__rest(e,["size","color","title","noVerticalAlign"]),f=Boolean(d),p=t.getSize(i),_=-.125*Number.parseFloat(p),g=m?null:{verticalAlign:`${_}em`},h=[n,l,c,s].join(" ");return r.createElement("svg",Object.assign({style:g,fill:o,height:p,width:p,viewBox:h,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},v),f&&r.createElement("title",{id:this.id},d),r.createElement("path",{d:u}))}},d.displayName=e,d.defaultProps={color:"currentColor",size:i.sm,noVerticalAlign:!1},d}},73171:(e,t,n)=>{t.qw={name:"AwsIcon",height:512,width:640,svgPath:"M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z",yOffset:0,xOffset:0},t.er=n(35183).createIcon(t.qw),t.ZP=t.er},91329:(e,t,n)=>{n.d(t,{d9:()=>i});var a=n(75418);function r(){return!document[(e=document,void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":"")];var e}function i(){var e=(0,a.useState)(r()),t=e[0],n=e[1],i=function(){return n(r())};return(0,a.useEffect)((function(){var e,t=void 0!==(e=document).hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":"";return document.addEventListener(t,i,!1),function(){document.removeEventListener(t,i)}}),[]),{isVisible:t,setIsVisible:n}}},54360:(e,t,n)=>{n.r(t),n.d(t,{CreateInstance:()=>E,default:()=>T});var a=n(70655),r=n(75418),i=n.n(r),o=n(47237),l=n(84669),c=n(78261),s=n(75381),u=n(80542),d=n(10069),m=function(e){var t=e.isKasTrial,n=(0,o.useTranslation)().t,a=i().useContext(d.QuickStartContext);return i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.h3},n("common.instance_information")),i().createElement(l.TextList,{component:l.TextListVariants.dl},i().createElement(l.Grid,{sm:6,lg:12,hasGutter:!0},t&&i().createElement(l.GridItem,null,i().createElement(l.TextListItem,{component:l.TextListItemVariants.dt},n("common.duration")),i().createElement(l.TextListItem,{component:l.TextListItemVariants.dd},n("common.duration_value"))),i().createElement(l.GridItem,null,i().createElement(l.TextListItem,{component:l.TextListItemVariants.dt},n("common.ingress_egress")),i().createElement(l.TextListItem,{component:l.TextListItemVariants.dd},n("common.ingress_egress_value"))),i().createElement(l.GridItem,null,i().createElement(l.TextListItem,{component:l.TextListItemVariants.dt},n("common.storage")),i().createElement(l.TextListItem,{component:l.TextListItemVariants.dd},n("common.storage_value"))),i().createElement(l.GridItem,null,i().createElement(l.TextListItem,{component:l.TextListItemVariants.dt},n("common.partitions")),i().createElement(l.TextListItem,{component:l.TextListItemVariants.dd},n("common.partitions_value"))),i().createElement(l.GridItem,null,i().createElement(l.TextListItem,{component:l.TextListItemVariants.dt},n("common.client_connections")),i().createElement(l.TextListItem,{component:l.TextListItemVariants.dd},n("common.client_connections_value"))),i().createElement(l.GridItem,null,i().createElement(l.TextListItem,{component:l.TextListItemVariants.dt},n("common.connection_rate")),i().createElement(l.TextListItem,{component:l.TextListItemVariants.dd},n("common.connection_rate_value"))),i().createElement(l.GridItem,null,i().createElement(l.TextListItem,{component:l.TextListItemVariants.dt},n("common.message_size")),i().createElement(l.TextListItem,{component:l.TextListItemVariants.dd},n("common.message_size_value")))),i().createElement(l.Button,{isSmall:!0,isInline:!0,variant:l.ButtonVariant.link,style:{marginTop:"20px"},onClick:function(){return a.setActiveQuickStart&&a.setActiveQuickStart("getting-started")}},n("common.quick_start_guide_message"))))},v=n(46332),f=function(e){var t=e.quota,n=e.hasKafkaCreationFailed,a=e.userHasTrialInstance,r=(0,o.useTranslation)().t;if(void 0===t||t.loading)return i().createElement(l.Alert,{id:"mk-create-instance-quota-alert",className:"pf-u-mb-md",variant:l.AlertVariant.info,title:r("instance_checking_message"),"aria-live":"polite",isInline:!0,customIcon:i().createElement(l.Spinner,{size:"md","aria-valuetext":"Checking kafka availability"})});var c=function(){var e,r,i=null===(e=t.data)||void 0===e?void 0:e.get(null===v.QuotaType||void 0===v.QuotaType?void 0:v.QuotaType.kas),o=null===(r=t.data)||void 0===r?void 0:r.get(null===v.QuotaType||void 0===v.QuotaType?void 0:v.QuotaType.kasTrial);return n?{variant:l.AlertVariant.danger,titleKey:"kafka_creation_failed_alert_title",messageKey:i?"standard_kafka_creation_failed_alert_message":"trial_kafka_creation_failed_alert_message"}:t.isServiceDown?{titleKey:"something_went_wrong",variant:l.AlertVariant.danger,messageKey:"ams_service_down_message"}:!i&&o&&a?{titleKey:"trial_kafka_title",variant:l.AlertVariant.warning,messageKey:"deploy_one_instance_alert_message"}:i||o?i||!o||a?i&&0===(null==i?void 0:i.remaining)?{variant:l.AlertVariant.warning,titleKey:"standard_kafka_alert_title",messageKey:"standard_kafka_alert_message"}:void 0:{variant:l.AlertVariant.info,titleKey:"trial_quota_kafka_title",messageKey:""}:{variant:l.AlertVariant.warning,titleKey:"no_quota_kafka_alert_title",messageKey:"no_quota_kafka_alert_message"}}();return void 0===c?i().createElement(i().Fragment,null):i().createElement(l.Alert,{id:"mk-create-instance-quota-alert",className:"pf-u-mb-md",variant:c.variant,title:r(c.titleKey),"aria-live":"polite",isInline:!0},r(c.messageKey))},p=function(e){if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,multi_az:e.multi_az.value,cloud_provider:e.cloud_provider.value}},_=function(e){return"error"===e.name.validated||"error"===e.region.validated||"error"===e.cloud_provider.validated||"error"===e.multi_az.validated},g=function(e){var t=e.kafkaRequest,n=e.selectCloudRegion,a=e.cloudRegions,r=(0,o.useTranslation)().t;return void 0===a?i().createElement(l.Skeleton,{fontSize:"2xl"}):i().createElement(l.FormSelect,{validated:t.region.validated,value:t.region.value,onChange:n,id:"cloud-region-select",name:"cloud-region","aria-label":r("cloud_region"),isDisabled:void 0===a},[i().createElement(l.FormSelectOption,{value:"",key:"placeholder",label:r("please_select")}),(a||[]).map((function(e,t){var n=e.id,a=e.display_name,o=void 0===a?"":a;return i().createElement(l.FormSelectOption,{key:t,value:n,label:n?r(n):o})}))])},h=n(73171),y=function(e){var t=e.cloudProviders,n=e.kafkaRequest,a=e.selectCloudProvider,r=function(e){if("aws"===(null==e?void 0:e.toLowerCase()))return i().createElement(h.ZP,{size:"lg",color:"black",className:"mk--create-instance__tile--icon"})};return void 0===t?i().createElement(l.Skeleton,{className:"pf-m-text-4xl",screenreaderText:"Loading contents"}):i().createElement(i().Fragment,null,t.map((function(e){return i().createElement(l.Tile,{key:"tile-"+e.name,title:e.display_name||"",icon:r(e.name),isSelected:n.cloud_provider.value===e.name,onClick:function(){return a(e)}})})))},b=function(e){var t=e.createInstance,n=e.kafkaRequest,c=e.setKafkaRequest,u=e.cloudProviders,d=e.getCloudRegions,m=e.id,v=(0,o.useTranslation)().t,f=(0,r.useState)(!1),p=f[0],h=f[1],b=(0,r.useState)(),w=b[0],k=b[1],E=function(e){return void 0===e.name.value||""===e.name.value.trim()?(e.name.validated="error",e.name.errorMessage=v("common.this_is_a_required_field")):/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.name.value.trim())?e.name.value.length>s.JB&&(e.name.validated="error",e.name.errorMessage=v("length_is_greater_than_expected",{maxLength:s.JB})):(e.name.validated="error",e.name.errorMessage=v("common.input_filed_invalid_helper_text")),e},T=function(e){return void 0!==e.region.value&&""!==e.region.value.trim()||(e.region.validated="error",e.region.errorMessage=v("common.this_is_a_required_field")),e},I=function(){h(!1),c({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}})},x=function(e){c((function(t){return(0,a.__assign)((0,a.__assign)({},t),{cloud_provider:{value:e.name||""}})}))},S=function(e){c((function(t){var n=(0,a.__assign)((0,a.__assign)({},t),{region:{value:e||""}});return T(n)}))},A=function(e){c((function(t){return(0,a.__assign)((0,a.__assign)({},t),{multi_az:{value:e}})}))};(0,r.useEffect)((function(){void 0!==u&&u.length>0&&u[0].name&&x(u[0])}),[u]),(0,r.useEffect)((function(){A(!0)}),[]),(0,r.useEffect)((function(){var e;void 0!==n.cloud_provider.value&&(e=n.cloud_provider.value,(0,a.__awaiter)(void 0,void 0,void 0,(function(){var t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,d(e)];case 1:return void 0!==(t=n.sent())&&1===t.length&&void 0!==t[0].id&&S(t[0].id),k(t),[2]}}))})))}),[n.cloud_provider]);return i().createElement(l.Form,{onSubmit:function(e){e.preventDefault(),h(!0);var r=T(E(n));c((0,a.__assign)({},r)),_(r)||t().then((function(){return I()}))},id:m},i().createElement((function(){return p&&_(n)?i().createElement(l.FormAlert,null,i().createElement(l.Alert,{variant:"danger",title:v("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})):i().createElement(i().Fragment,null)}),null),i().createElement(l.FormGroup,{label:v("instance_name"),helperText:v("create_instance_name_helper_text"),helperTextInvalid:n.name.errorMessage,isRequired:!0,validated:n.name.validated,fieldId:"form-instance-name"},i().createElement(l.TextInput,{isRequired:!0,validated:n.name.validated,type:"text",id:"form-instance-name",name:"instance-name",value:n.name.value,onChange:function(e){c((function(t){var n=(0,a.__assign)((0,a.__assign)({},t),{name:{value:e}});return E(n)}))},autoFocus:!0})),i().createElement(l.FormGroup,{label:v("cloud_provider"),fieldId:"form-cloud-provider-name"},i().createElement(y,{kafkaRequest:n,selectCloudProvider:x,cloudProviders:u})),i().createElement(l.FormGroup,{label:v("cloud_region"),helperTextInvalid:n.region.errorMessage,validated:n.region.validated,fieldId:"form-cloud-region-option",isRequired:!0},i().createElement(g,{kafkaRequest:n,selectCloudRegion:S,cloudRegions:w})),i().createElement(l.FormGroup,{label:v("availabilty_zones"),fieldId:"availability-zones"},i().createElement(l.ToggleGroup,{"aria-label":v("availability_zone_selection")},i().createElement(l.Tooltip,{content:v("kafkaInstance.availabilty_zones_tooltip_message")},i().createElement(l.ToggleGroupItem,{text:v("single"),value:"single",isDisabled:!0,buttonId:"single",onChange:A})),i().createElement(l.ToggleGroupItem,{text:v("multi"),value:"multi",buttonId:"multi",isSelected:n.multi_az.value||!1,onChange:A}),i().createElement(l.Tooltip,{content:v("kafkaInstance.availabilty_zones_tooltip_message"),reference:function(){return document.getElementById("multi")||document.createElement("span")}}))))},w=n(91329),k="create_instance_-form",E=function(e){var t,n,d=e.onCreate,g=e.title,h=e.hideModal,y=(0,o.useTranslation)().t,E=(0,v.useAuth)(),T=(((0,v.useConfig)()||{}).kas||{}).apiBasePath,I=((0,v.useAlert)()||{}).addAlert,x=((0,v.useQuota)()||{}).getQuota,S=(0,w.d9)().isVisible,A=(0,r.useState)({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}}),C=A[0],O=A[1],P=(0,r.useState)(!1),z=P[0],K=P[1],L=(0,r.useState)(),V=L[0],R=L[1],F=(0,r.useState)(!1),j=F[0],M=F[1],q=(0,r.useState)(),G=q[0],N=q[1],D=(0,r.useState)(),Q=D[0],B=D[1],U=null===(t=null==V?void 0:V.data)||void 0===t?void 0:t.get(null===v.QuotaType||void 0===v.QuotaType?void 0:v.QuotaType.kas),H=null===(n=null==V?void 0:V.data)||void 0===n?void 0:n.get(null===v.QuotaType||void 0===v.QuotaType?void 0:v.QuotaType.kasTrial),J=void 0===(null==V?void 0:V.loading)||(null==V?void 0:V.loading),W=H&&!U;(0,r.useEffect)((function(){(0,a.__awaiter)(void 0,void 0,void 0,(function(){return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return x?[4,x().then((function(e){R(e)}))]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}),[]);(0,r.useEffect)((function(){(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n,r;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==E?void 0:E.kas.getToken()];case 1:if(!(e=a.sent()))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new u.DefaultApi(new u.Configuration({accessToken:e,basePath:T})).getCloudProviders().then((function(e){var t,n=(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.items)||[],a=null==n?void 0:n.filter((function(e){return e.enabled}));N(a)}))];case 3:return a.sent(),[3,5];case 4:return t=a.sent(),n=void 0,(0,c.G)(t)&&(n=null===(r=t.response)||void 0===r?void 0:r.data.reason),I&&I({variant:l.AlertVariant.danger,title:y("common.something_went_wrong"),description:n}),[3,5];case 5:return[2]}}))}))}),[]);var X=function(e){var t,n,a,r;(0,c.G)(e)&&(r=null===(t=e.response)||void 0===t?void 0:t.data.reason,null===(a=null===(n=e.response)||void 0===n?void 0:n.data)||void 0===a||a.code),I&&I({variant:l.AlertVariant.danger,title:y("common.something_went_wrong"),description:r})};(0,r.useEffect)((function(){(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n,r,i;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==E?void 0:E.getUsername()];case 1:return e=a.sent(),[4,null==E?void 0:E.kas.getToken()];case 2:if(t=a.sent(),!e)return[3,6];if(n="owner = "+e,!t||!S)return[3,6];a.label=3;case 3:return a.trys.push([3,5,,6]),[4,new u.DefaultApi(new u.Configuration({accessToken:t,basePath:T})).getKafkas("","","",n)];case 4:return(r=a.sent()).data.items&&B(r.data.items.some((function(e){return(null==e?void 0:e.instance_type)===(null===s.ik||void 0===s.ik?void 0:s.ik.eval)}))),[3,6];case 5:return i=a.sent(),X(i),[3,6];case 6:return[2]}}))}))}),[]);var Z=function(){h()};return i().createElement(l.Modal,{id:"modalCreateKafka",variant:l.ModalVariant.medium,title:g,isOpen:!0,onClose:Z,appendTo:s.wx,actions:[i().createElement(l.Button,{key:"submit",variant:"primary",type:"submit",form:k,isDisabled:_(C)||z||J||Q||j||U&&0===(null==U?void 0:U.remaining)||!U&&!H,spinnerAriaValueText:y("submitting_request"),isLoading:z,"data-testid":"modalCreateKafka-buttonSubmit"},y("create_instance")),i().createElement(l.Button,{key:"cancel",variant:"link",onClick:Z,"data-testid":"modalCreateKafka-buttonCancel"},y("cancel"))]},i().createElement(f,{quota:V,hasKafkaCreationFailed:j,loadingQuota:J,userHasTrialInstance:Q,isKasTrial:W}),i().createElement(l.Flex,{direction:{default:"column",lg:"row"}},i().createElement(l.FlexItem,{flex:{default:"flex_2"}},i().createElement(b,{kafkaRequest:C,setKafkaRequest:O,createInstance:function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n,r,i,o,m;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==E?void 0:E.kas.getToken()];case 1:if(!(e=a.sent()))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),t=new u.DefaultApi(new u.Configuration({accessToken:e,basePath:T})),K(!0),d&&d(),[4,t.createKafka(!0,p(C))];case 3:return a.sent(),h(),d&&d(),[3,5];case 4:return n=a.sent(),(0,c.G)(n)&&(r=(null===(m=null==n?void 0:n.response)||void 0===m?void 0:m.data)||{},i=r.code,o=r.reason,i===s.SM.DUPLICATE_INSTANCE_NAME?(C.name.validated="error",C.name.errorMessage=y("the_name_already_exists_please_enter_a_unique_name",{name:C.name.value})):i===s.SM.PREVIEW_KAFKA_INSTANCE_EXIST||i===s.SM.INSUFFICIENT_QUOTA||i===s.SM.FAILED_TO_CHECK_QUOTA?M(!0):I&&I({title:y("common.something_went_wrong"),variant:l.AlertVariant.danger,description:o,dataTestId:"toastCreateKafka-failed"})),K(!1),[3,5];case 5:return[2]}}))}))},cloudProviders:G,getCloudRegions:function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var t,n,r,i,o,s;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==E?void 0:E.kas.getToken()];case 1:if(!(t=a.sent())||!e)return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new u.DefaultApi(new u.Configuration({accessToken:t,basePath:T})).getCloudProviderRegions(e)];case 3:return n=a.sent(),[2,null===(o=n.data.items)||void 0===o?void 0:o.filter((function(e){return e.enabled}))];case 4:return r=a.sent(),i=void 0,(0,c.G)(r)&&(i=null===(s=r.response)||void 0===s?void 0:s.data.reason),I&&I({title:y("common.something_went_wrong"),variant:l.AlertVariant.danger,description:i}),[3,5];case 5:return[2,void 0]}}))}))},id:k})),i().createElement(l.Divider,{isVertical:!0}),i().createElement(l.FlexItem,{flex:{default:"flex_1"},className:"mk--create-instance-modal__sidebar--content"},i().createElement(m,{isKasTrial:W}))))};const T=E},78261:(e,t,n)=>{n.d(t,{S:()=>a,G:()=>r});var a,r=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.UNAUTHORIZED_USER="KAFKAS-MGMT-4",e.DUPLICATE_INSTANCE_NAME="KAFKAS-MGMT-36",e.PREVIEW_KAFKA_INSTANCE_EXIST="KAFKAS-MGMT-24",e.INSUFFICIENT_QUOTA="KAFKAS-MGMT-120",e.FAILED_TO_CHECK_QUOTA="KAFKAS-MGMT-121",e.OWNER_DOES_NOT_EXIST="KAFKAS-MGMT-21"}(a||(a={}))},75381:(e,t,n)=>{n.d(t,{Od:()=>a.Od,ik:()=>a.ik,pf:()=>a.pf,JB:()=>a.JB,md:()=>a.md,Nw:()=>a.Nw,bv:()=>a.bv,Bh:()=>a.Bh,L0:()=>a.L0,o8:()=>a.o8,wx:()=>a.wx,vK:()=>a.vK,Qw:()=>a.Qw,E7:()=>a.E7,hm:()=>a.hm,SM:()=>r.S,G6:()=>r.G});var a=n(52648),r=(n(82519),n(78261))},82519:(e,t,n)=>{n.d(t,{j:()=>r});var a=n(75418);function r(e){a.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},52648:(e,t,n)=>{n.d(t,{mh:()=>o,bv:()=>l,Bh:()=>s,hm:()=>c,Od:()=>a,JB:()=>u,pf:()=>d,md:()=>v,o8:()=>f,Nw:()=>m,E7:()=>p,L0:()=>_,wx:()=>g,Qw:()=>h,vK:()=>y,ik:()=>r});var a,r,i=n(72633);function o(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(a||(a={})),function(e){e.eval="eval",e.standard="standard"}(r||(r={}));var l=[{value:"aws",label:"Amazon Web Services"}],c=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],s=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],u=32,d=10,m=50,v=5e3,f=function(e,t,n){var a=t;n&&n>0&&(e===(n%t!=0?Math.floor(n/t)+1:Math.floor(n/t))&&(a=n>t?n%t==0?t:n%t:n));return 0!==a?a:t},p=function(e,t,n){void 0===n&&(n="asc");return null==e?void 0:e.sort((function(e,a){if(!Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(a,t))return 0;var r="string"==typeof e[t]?e[t].toUpperCase():e[t],i="string"==typeof a[t]?a[t].toUpperCase():a[t],o=0;return r>i?o=1:r<i&&(o=-1),"desc"===n?-1*o:o}))},_=function(e,t){return e="string"==typeof e?new Date(e):e,(0,i.formatDistance)(e,new Date)+" "+t},g=function(){return document.getElementById("chrome-app-render-root")||document.body},h=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},y=function(e){for(var t=e.loadingCount,n=e.skeleton,a=e.length,r=[],i=[],o=0;o<a;o++)i.push({title:n});for(o=0;o<t;o++)r.push({cells:i});return r}},70655:(e,t,n)=>{n.r(t),n.d(t,{__extends:()=>r,__assign:()=>i,__rest:()=>o,__decorate:()=>l,__param:()=>c,__metadata:()=>s,__awaiter:()=>u,__generator:()=>d,__createBinding:()=>m,__exportStar:()=>v,__values:()=>f,__read:()=>p,__spread:()=>_,__spreadArrays:()=>g,__spreadArray:()=>h,__await:()=>y,__asyncGenerator:()=>b,__asyncDelegator:()=>w,__asyncValues:()=>k,__makeTemplateObject:()=>E,__importStar:()=>I,__importDefault:()=>x,__classPrivateFieldGet:()=>S,__classPrivateFieldSet:()=>A});var a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)};function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};function o(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}function l(e,t,n,a){var r,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(i<3?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}function c(e,t){return function(n,a){t(n,a,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))}function d(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var m=Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]};function v(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||m(t,e,n)}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o}function _(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,l=i.length;o<l;o++,r++)a[r]=i[o];return a}function h(e,t,n){if(n||2===arguments.length)for(var a,r=0,i=t.length;r<i;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,r=n.apply(e,t||[]),i=[];return a={},o("next"),o("throw"),o("return"),a[Symbol.asyncIterator]=function(){return this},a;function o(e){r[e]&&(a[e]=function(t){return new Promise((function(n,a){i.push([e,t,n,a])>1||l(e,t)}))})}function l(e,t){try{(n=r[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,s):u(i[0][2],n)}catch(e){u(i[0][3],e)}var n}function c(e){l("next",e)}function s(e){l("throw",e)}function u(e,t){e(t),i.shift(),i.length&&l(i[0][0],i[0][1])}}function w(e){var t,n;return t={},a("next"),a("throw",(function(e){throw e})),a("return"),t[Symbol.iterator]=function(){return this},t;function a(a,r){t[a]=e[a]?function(t){return(n=!n)?{value:y(e[a](t)),done:"return"===a}:r?r(t):t}:r}}function k(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t);function a(n){t[n]=e[n]&&function(t){return new Promise((function(a,r){(function(e,t,n,a){Promise.resolve(a).then((function(t){e({value:t,done:n})}),t)})(a,r,(t=e[n](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var T=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function I(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&m(t,e,n);return T(t,e),t}function x(e){return e&&e.__esModule?e:{default:e}}function S(e,t,n,a){if("a"===n&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)}function A(e,t,n,a,r){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?r.call(e,n):r?r.value=n:t.set(e,n),n}}}]);
