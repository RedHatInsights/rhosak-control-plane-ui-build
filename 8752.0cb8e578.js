(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8752],{40400:(e,t,n)=>{"use strict";n.d(t,{Jh:()=>r,IU:()=>o});var r,a=n(223),i=n(45052);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));let c=0;function o({name:e,xOffset:t=0,yOffset:n=0,width:o,height:s,svgPath:l}){var u;return u=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+c++}render(){const e=this.props,{size:c,color:u,title:d,noVerticalAlign:m}=e,v=(0,a.__rest)(e,["size","color","title","noVerticalAlign"]),p=Boolean(d),f=(e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}})(c),h=-.125*Number.parseFloat(f),_=m?null:{verticalAlign:`${h}em`},g=[t,n,o,s].join(" ");return i.createElement("svg",Object.assign({style:_,fill:u,height:f,width:f,viewBox:g,"aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img"},v),p&&i.createElement("title",{id:this.id},d),i.createElement("path",{d:l}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},u}},84213:(e,t,n)=>{"use strict";n.d(t,{MU:()=>a,by:()=>i,ZP:()=>c});var r=n(40400);const a={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},i=(0,r.IU)(a),c=i},35183:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(223),a=r.__importStar(n(45052));var i;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(i=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case i.sm:return"1em";case i.md:return"1.5em";case i.lg:return"2em";case i.xl:return"3em";default:return"1em"}};let c=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:o=0,width:s,height:l,svgPath:u}){var d;return d=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+c++}render(){const e=this.props,{size:i,color:c,title:d,noVerticalAlign:m}=e,v=r.__rest(e,["size","color","title","noVerticalAlign"]),p=Boolean(d),f=t.getSize(i),h=-.125*Number.parseFloat(f),_=m?null:{verticalAlign:`${h}em`},g=[n,o,s,l].join(" ");return a.createElement("svg",Object.assign({style:_,fill:c,height:f,width:f,viewBox:g,"aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img"},v),p&&a.createElement("title",{id:this.id},d),a.createElement("path",{d:u}))}},d.displayName=e,d.defaultProps={color:"currentColor",size:i.sm,noVerticalAlign:!1},d}},84564:(e,t,n)=>{"use strict";t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},690:(e,t,n)=>{"use strict";t.zS={name:"KeyIcon",height:1024,width:1024,svgPath:"M802,320 C748.980664,320 706,277.019336 706,224 C706,170.980664 748.980664,128 802,128 C855.019336,128 898,170.980664 898,224 C898,277.019336 855.019336,320 802,320 M704,0 C527.3,0 384,143.3 384,320 C383.937788,357.490503 390.505571,394.696657 403.4,429.9 L0,824.1 L0,1024 L192,1024 L192,896 L320,896 L320,768 L448,768 L597,622 C596.906403,621.881923 596.838304,621.745723 596.8,621.6 C631.220126,633.811107 667.47802,640.034477 704,640 C880.7,640 1024,496.7 1024,320 C1024,143.3 880.7,0 704,0",yOffset:0,xOffset:0},t._m=n(35183).createIcon(t.zS),t.ZP=t._m},5569:(e,t,n)=>{"use strict";t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{"use strict";t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},34558:(e,t,n)=>{"use strict";t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},38296:(e,t,n)=>{"use strict";function r(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)&&e.length){const n=r(...e);n&&t.push(n)}else if("object"===a)for(const r in e)n.call(e,r)&&e[r]&&t.push(r)})),t.join(" ")}n.d(t,{i:()=>r})},95979:()=>{},66912:()=>{},77903:()=>{},48090:(e,t,n)=>{"use strict";n.d(t,{o:()=>l});var r=n(75418),a=n.n(r),i=n(59909),c=n(99421),o=n(68199),s=n(28962),l=function(){var e=(0,i.useTranslation)(["kasTemporaryFixMe"]).t;return a().createElement(c.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(s.C0,{emptyStateProps:{variant:s.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},a().createElement((function(){var t=(0,o.useHistory)();return a().createElement(c.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},28962:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>o,pf:()=>u.p,sw:()=>l,D5:()=>_.D,C0:()=>d.C,jU:()=>d.j,tV:()=>f,yR:()=>h,wu:()=>g.wu,wR:()=>C.w,L5:()=>y.L,bN:()=>g.bN,h0:()=>g.h0});var r=n(223),a=n(75418),i=n.n(a),c=n(7451),o=function(e){var t=e.children,n=(0,a.useState)([]),o=n[0],s=n[1],u=(0,a.useState)([]),d=u[0],m=u[1];(0,a.useEffect)((function(){var e=d.map((function(e){return e.key})),t=o.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return v(n)}),8e3);return{key:e.id,timeOut:r}}));return m((0,r.__spreadArray)((0,r.__spreadArray)([],d,!0),t,!0)),function(){return d.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[o]);var v=function(e){s((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.id!==e})),!0)})),m((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})),!0)}))};return i().createElement(c.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();s((0,r.__spreadArray)((0,r.__spreadArray)([],o,!0),[(0,r.__assign)((0,r.__assign)({},e),{id:t})],!1))}}},i().createElement(l,{alerts:o,onCloseAlert:v}),t)},s=n(99421),l=function(e){var t=e.alerts,n=e.onCloseAlert;return i().createElement(s.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,a=e.variant,c=e.title,o=e.description,l=e.dataTestId,u=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return i().createElement(s.Alert,(0,r.__assign)({key:t,isLiveRegion:!0,variant:s.AlertVariant[a],variantLabel:"",title:c,actionClose:i().createElement(s.AlertActionCloseButton,{title:c,onClose:function(){return n(t)}}),"data-testid":l},u),o)})))},u=n(43277),d=n(12973),m=n(68199),v=n(59909),p=(n(4256),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,r.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?i().createElement(s.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(d.C,{emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},i().createElement(s.Button,{onClick:this.onClickButton},e("go_to_kafka_instances")))):this.props.children},t}(a.Component)),f=(0,m.withRouter)((0,v.withTranslation)()(p)),h=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return i().createElement(s.Bullseye,(0,r.__assign)({},t),i().createElement(s.Spinner,(0,r.__assign)({},n)))},_=n(87842),g=n(16846),C=n(69887),y=n(93697);n(8509)},26678:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(75418),a=n.n(r),i=n(99421),c=n(690),o=(n(77903),n(95979),n(66912),n(59909)),s=n(28962);const l=function(e){var t=e.serviceAccount,n=e.close,l=(0,o.useTranslation)(["kasTemporaryFixMe"]).t,u=(0,r.useState)(!1),d=u[0],m=u[1];return a().createElement(a().Fragment,null,a().createElement(s.C0,{emptyStateProps:{variant:i.EmptyStateVariant.large},emptyStateIconProps:{icon:c.ZP},titleProps:{title:l("credentials_successfully_generated"),headingLevel:"h2",size:i.TitleSizes.lg}},a().createElement(i.TextContent,null,a().createElement(i.Text,{component:i.TextVariants.small,className:"pf-u-mt-lg"},l("connect_to_the_kafka_instance_using_this_clientID_and_secret"))),a().createElement(i.InputGroup,{className:"pf-u-mt-lg"},a().createElement(i.InputGroupText,{className:"mk--generate-credential__empty-state--input-group"},l("client_id")),a().createElement(i.ClipboardCopy,{isReadOnly:!0,className:"pf-u-w-100","data-testid":"modalCredentials-copyClientID",textAriaLabel:l("client_id")},null==t?void 0:t.client_id)),a().createElement(i.InputGroup,{className:"pf-u-mt-md"},a().createElement(i.InputGroupText,{className:"mk--generate-credential__empty-state--input-group"},l("common.client_secret")),a().createElement(i.ClipboardCopy,{isReadOnly:!0,className:"pf-u-w-100","data-testid":"modalCredentials-copyClientSecret",textAriaLabel:l("common.client_secret")},null==t?void 0:t.client_secret)),a().createElement(i.TextContent,null,a().createElement(i.Text,{component:i.TextVariants.small,className:"pf-u-mt-lg"},l("create_service_account_credentials_warning_message"))),a().createElement(i.Bullseye,{className:"pf-u-mt-lg"},a().createElement(i.Checkbox,{label:l("client_id_confirmation_checkbox_label"),isChecked:d,onChange:function(e){m(e)},id:"check-1",name:"check1"})),a().createElement(i.Button,{variant:"primary",isDisabled:!d,onClick:n,"data-testid":"modalCredentials-buttonClose"},l("close"))))}},45587:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CreateServiceAccountConnected:()=>g,default:()=>C});var r,a=n(223),i=n(75418),c=n.n(i),o=n(99421),s=n(53015),l=n(59909),u=n(75381),d=function(e){if(void 0===e.name.value)throw new Error("ServiceAccountRequest.name must not be undefined");return{name:e.name.value}},m=function(e){return"error"===e.name.validated},v=n(7451),p=n(84213),f=function(e){var t=e.serviceAccountRequest,n=e.createServiceAccount,r=e.setServiceAccountRequest,s=e.id,d=(0,l.useTranslation)(["kasTemporaryFixMe"]).t,v=(0,i.useState)(!1),f=v[0],h=v[1],_=function(e){return void 0===e.name.value||""===e.name.value.trim()?(e.name.validated="error",e.name.errorMessage=d("common.this_is_a_required_field")):void 0===e.name.value||/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.name.value.trim())?void 0!==e.name.value&&e.name.value.length>u.Nw?(e.name.validated="error",e.name.errorMessage=d("serviceAccount.service_account_name_length_is_greater_than_expected",{maxLength:u.JB})):e.name.validated="success":(e.name.validated="error",e.name.errorMessage=d("common.input_filed_invalid_helper_text")),e},g=function(){r({name:{value:""}})};return c().createElement(o.Form,{onSubmit:function(e){e.preventDefault(),h(!0);var i=_(t);r((0,a.__assign)({},i)),m(i)||n().then((function(){return g()}))},id:s},c().createElement((function(){return f&&m(t)?c().createElement(o.FormAlert,null,c().createElement(o.Alert,{variant:"danger",title:d("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})):c().createElement(c().Fragment,null)}),null),c().createElement(o.FormGroup,{label:d("serviceAccount.short_description"),isRequired:!0,fieldId:"text-input-short-description",helperTextInvalid:t.name.errorMessage,validated:t.name.validated,helperText:d("common.input_filed_invalid_helper_text"),labelIcon:c().createElement(o.Popover,{headerContent:c().createElement("div",null,d("serviceAccount.short_description_popover_title")),bodyContent:c().createElement("div",null,d("serviceAccount.short_description_popover_body"))},c().createElement("button",{"aria-label":d("serviceAccount.short_description_popover_button"),onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},c().createElement(p.ZP,{noVerticalAlign:!0})))},c().createElement(o.TextInput,{isRequired:!0,type:"text",id:"text-input-short-description",name:"text-input-short-description",value:t.name.value,onChange:function(e){r((function(t){var n=(0,a.__assign)((0,a.__assign)({},t),{name:{value:e}});return _(n)}))},validated:t.name.validated,autoFocus:!0})))},h=n(26678),_="create_service_account_form";!function(e){e.CreateServiceAccount="CreateServiceAccount",e.Credentials="Credentials"}(r||(r={}));var g=function(e){var t=e.onCreate,n=e.title,p=e.hideModal,g=(0,l.useTranslation)(["kasTemporaryFixMe"]).t,C=(0,v.useAuth)(),y=((0,v.useConfig)()||{kas:{}}).kas.apiBasePath,E=((0,v.useAlert)()||{}).addAlert,A=(0,i.useState)({name:{value:""}}),S=A[0],x=A[1],b=(0,i.useState)(!1),w=b[0],P=b[1],k=(0,i.useState)(r.CreateServiceAccount),I=k[0],T=k[1],z=(0,i.useState)(),O=z[0],M=z[1],L=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,n,i;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==C?void 0:C.kas.getToken()];case 1:if(!(e=a.sent()))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),n=new s.SecurityApi(new s.Configuration({accessToken:e,basePath:y})),P(!0),[4,n.createServiceAccount(d(S)).then((function(e){return null==e?void 0:e.data}))];case 3:return i=a.sent(),M(i),T(r.Credentials),E&&E({title:g("serviceAccount.service_account_creation_success_message"),variant:o.AlertVariant.success}),t&&t(),[3,5];case 4:return function(e){var t,n;(0,u.G6)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.reason),E&&E({title:g("something_went_wrong"),variant:o.AlertVariant.danger,description:n})}(a.sent()),[3,5];case 5:return P(!1),[2]}}))}))},B=function(){p()};return c().createElement(o.Modal,{id:"modalCreateSAccount",variant:o.ModalVariant.medium,title:I===r.CreateServiceAccount?n:"",isOpen:!0,onClose:B,appendTo:u.wx,actions:I===r.CreateServiceAccount?[c().createElement(o.Button,{key:"submit",variant:"primary",type:"submit",form:_,isDisabled:m(S)||w,spinnerAriaValueText:g("submitting_request"),isLoading:w,"data-testid":"modalCreateServiceAccount-buttonSubmit"},"Create"),c().createElement(o.Button,{key:"cancel",variant:"link",onClick:B,"data-testid":"modalCreateServiceAccount-buttonCancel"},g("cancel"))]:[]},c().createElement((function(){if(I===r.CreateServiceAccount)return c().createElement(f,{createServiceAccount:L,setServiceAccountRequest:x,serviceAccountRequest:S,id:_});if(void 0===O)throw new Error("resetServiceAccount must not be undefined");return c().createElement(h.Z,{serviceAccount:O,close:p})}),null))};const C=g},82519:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(75418);function a(e){r.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}}}]);
//# sourceMappingURL=8752.0cb8e578.js.map