"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8578],{78578:(e,t,n)=>{n.r(t),n.d(t,{DeleteInstanceConnected:()=>p,default:()=>m});var a=n(70655),s=n(75418),o=n.n(s),l=n(11593),i=n(84669),u=n(11272),d=n(55277),r=n(92550),c=n(75381),f=function(e){var t=e.kafka,n=e.onClose,a=e.hideModal,i=e.onDelete,u=e.isLoading,d=(0,l.useTranslation)().t,f=null==t?void 0:t.name,p=(0,s.useState)(),m=p[0],k=p[1],_=function(e){k(e)},h=function(){return t.status===c.Od.READY&&(null==m?void 0:m.toLowerCase())!==(null==f?void 0:f.toLowerCase())},g=function(e){"Enter"!==e.key||h()||D()},D=function(){i&&i()},b=function(){k(""),a(),n&&n()};return t.status===c.Od.READY?o().createElement(r.pf,{isModalOpen:!0,title:d("delete_instance")+"?",confirmButtonProps:{isDisabled:h(),"data-testid":"modalDeleteKafka-buttonDelete",label:d("delete"),onClick:D,isLoading:u},handleModalToggle:b,textProps:{description:d("delete_instance_status_complete",{instanceName:t.name})},selectedItemData:t,textInputProps:{showTextInput:t.status===c.Od.READY,label:d("instance_name_label",{name:f}),value:m,onChange:_,onKeyPress:g,autoFocus:!0}}):t.status===c.Od.ACCEPTED||t.status===c.Od.PROVISIONING||t.status===c.Od.PREPARING?o().createElement(r.pf,{isModalOpen:!0,title:d("delete_instance")+"?",confirmButtonProps:{isDisabled:h(),"data-testid":"modalDeleteKafka-buttonDelete",label:d("delete"),onClick:D,isLoading:u},handleModalToggle:b,textProps:{description:d("delete_instance_status_accepted_or_provisioning",{instanceName:t.name})},selectedItemData:t,textInputProps:{showTextInput:!1,label:d("instance_name_label",{name:f}),value:m,onChange:_,onKeyPress:g,autoFocus:!0}}):o().createElement(r.pf,{isModalOpen:!0,title:"",confirmButtonProps:{isDisabled:h(),"data-testid":"modalDeleteKafka-buttonDelete",label:d("delete"),onClick:D,isLoading:u},handleModalToggle:b,selectedItemData:t,textInputProps:{showTextInput:t.status===c.Od.READY,label:d("instance_name_label",{name:f}),value:m,onChange:_,onKeyPress:g,autoFocus:!0}})};var p=function(e){var t=e.kafka,n=e.onDelete,r=e.hideModal,p=((0,u.useAlert)()||{}).addAlert,m=(0,l.useTranslation)().t,k=(0,u.useAuth)(),_=(((0,u.useConfig)()||{}).kas||{}).apiBasePath,h=(0,s.useState)(!1),g=h[0],D=h[1],b=function(){r()},v=function(e){var t,n;(0,c.G6)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.reason),p&&p({title:m("something_went_wrong"),variant:i.AlertVariant.danger,description:n})};return o().createElement(f,{hideModal:r,onClose:b,kafka:t,onDelete:function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,s;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==k?void 0:k.kas.getToken()];case 1:if(!(e=a.sent())||!t.id)return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),D(!0),[4,new d.DefaultApi(new d.Configuration({accessToken:e,basePath:_})).deleteKafkaById(t.id,!0).then((function(){D(!1)}))];case 3:return a.sent(),b(),n&&n(),[3,5];case 4:return s=a.sent(),D(!1),v(s),[3,5];case 5:return[2]}}))}))},isLoading:g})};const m=p}}]);
//# sourceMappingURL=8578.c52ce0b8.js.map