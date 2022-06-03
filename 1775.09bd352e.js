/*! For license information please see 1775.09bd352e.js.LICENSE.txt */
"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1775,8296,5893],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=n(9922),s=a.__importStar(n(75418));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let r=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:c=0,width:i,height:l,svgPath:d}){var u;return u=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{size:o,color:r,title:u,noVerticalAlign:v}=e,p=a.__rest(e,["size","color","title","noVerticalAlign"]),h=Boolean(u),m=t.getSize(o),g=-.125*Number.parseFloat(m),_=v?null:{verticalAlign:`${g}em`},f=[n,c,i,l].join(" ");return s.createElement("svg",Object.assign({style:_,fill:r,height:m,width:m,viewBox:f,"aria-labelledby":h?this.id:null,"aria-hidden":!h||null,role:"img"},p),h&&s.createElement("title",{id:this.id},u),s.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},u}},84564:(e,t,n)=>{t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},5569:(e,t,n)=>{t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},34558:(e,t,n)=>{t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},38296:(e,t,n)=>{function a(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const s=typeof e;if("string"===s||"number"===s)t.push(e);else if(Array.isArray(e)&&e.length){const n=a(...e);n&&t.push(n)}else if("object"===s)for(const a in e)n.call(e,a)&&e[a]&&t.push(a)})),t.join(" ")}n.d(t,{i:()=>a})},27081:()=>{},75251:(e,t,n)=>{n(27418);var a=n(75418),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),t.Fragment=o("react.fragment")}var r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,o={},l=null,d=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,a)&&!i.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:r.current}}t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},48090:(e,t,n)=>{n(85893),n(3538),n(99922),n(68199),n(3433)},3433:(e,t,n)=>{n.d(t,{pf:()=>c.p,D5:()=>p,C0:()=>i.C,jU:()=>i.j,yR:()=>v,wu:()=>h.wu,wR:()=>m.w,L5:()=>g.L,bN:()=>h.bN,h0:()=>h.h0});var a=n(85893),s=n(75418);n(5854);var o=n(9922),r=n(99922);var c=n(43277),i=n(12973),l=n(68199),d=n(3538);n(4256);class u extends s.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,a.jsx)(r.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,a.jsx)(i.C,Object.assign({emptyStateProps:{variant:i.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,a.jsx)(r.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,l.withRouter)((0,d.withTranslation)()(u));const v=({bullseyeProps:e,spinnerProps:t})=>(0,a.jsx)(r.Bullseye,Object.assign({},e,{children:(0,a.jsx)(r.Spinner,Object.assign({},t))}));n(85853);const p=({onClose:e,isLoading:t=!0,drawerPanelContentProps:n,drawerHeaderProps:s,isExpanded:c,children:i,panelBodyContent:l,onExpand:d,notRequiredDrawerContentBackground:u,"data-ouia-app-id":p,inlineAlertMessage:h})=>{const m=n||{},{widths:g}=m,_=(0,o.__rest)(m,["widths"]),{text:f,title:y}=s||{},x=(0,a.jsx)(r.DrawerPanelContent,Object.assign({widths:g||{default:"width_50"}},_,{children:t?(0,a.jsx)(v,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.DrawerHead,{children:[(0,a.jsxs)(r.TextContent,{children:[(null==f?void 0:f.label)&&(0,a.jsx)(r.Text,Object.assign({component:(null==f?void 0:f.component)||r.TextVariants.small,className:(null==f?void 0:f.className)||"pf-u-mb-0"},{children:null==f?void 0:f.label})),(null==y?void 0:y.value)&&(0,a.jsx)(r.Title,Object.assign({headingLevel:(null==y?void 0:y.headingLevel)||"h2",size:(null==y?void 0:y.size)||r.TitleSizes.xl,className:(null==y?void 0:y.className)||"pf-u-mt-0"},{children:null==y?void 0:y.value}))]}),(0,a.jsx)(r.DrawerActions,{children:(0,a.jsx)(r.DrawerCloseButton,{onClick:e})})]}),(0,a.jsxs)(r.DrawerPanelBody,{children:[h,l]})]})}));return(0,a.jsx)(r.Drawer,Object.assign({isExpanded:c,onExpand:d,"data-ouia-app-id":p,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,a.jsx)(r.DrawerContent,Object.assign({panelContent:x,className:u?"pf-m-no-background":""},{children:(0,a.jsxs)(r.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",i]}))}))}))};var h=n(16846),m=n(69887),g=n(93697);n(8509)},94622:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(85893),s=n(75418),o=n(3538),r=n(5854);const c=()=>{const{registerModals:e}=(0,r.useModal)();return e((()=>{const{t:e}=(0,o.useTranslation)(["kasTemporaryFixMe"]);return{[r.ModalType.KasCreateInstance]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9922),n.e(5355),n.e(8929),n.e(9835),n.e(4372)]).then(n.bind(n,74372)))),variant:"medium",title:e("create_a_kafka_instance")},[r.ModalType.KasDeleteInstance]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9922),n.e(8408),n.e(5355),n.e(8929),n.e(8251),n.e(5626),n.e(524)]).then(n.bind(n,78578)))),variant:"small"},[r.ModalType.KasTransferOwnership]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9922),n.e(8408),n.e(8929),n.e(8512)]).then(n.bind(n,98512)))),variant:"medium",title:e("change_owner")},[r.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9922),n.e(8408),n.e(5355),n.e(8929),n.e(8251),n.e(5626),n.e(8752)]).then(n.bind(n,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[r.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9922),n.e(8408),n.e(5355),n.e(8929),n.e(8251),n.e(5626),n.e(645)]).then(n.bind(n,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[r.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9922),n.e(8408),n.e(5355),n.e(8929),n.e(8251),n.e(5626),n.e(4410)]).then(n.bind(n,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,a.jsx)(a.Fragment,{})}},95950:(e,t,n)=>{n.d(t,{A:()=>a.A});var a=n(94622)},86435:(e,t,n)=>{n.d(t,{I:()=>c});var a=n(85893),s=n(3538),o=n(99922),r=n(3647);n(27081);const c=()=>{const{t:e}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.PageSection,Object.assign({variant:o.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},{children:(0,a.jsxs)(o.TextContent,{children:[(0,a.jsxs)(o.Text,Object.assign({component:"h1"},{children:[" ",e("serviceAccount.service_accounts")]})),(0,a.jsx)(o.Text,Object.assign({component:"p"},{children:e("serviceAccount.service_accounts_title_header_info")}))]})})),(0,a.jsx)(r.H,{})]})}},44947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(85893),s=n(86435),o=n(59271),r=n(95950);const c=()=>(0,a.jsxs)(o.ModalProvider,{children:[(0,a.jsx)(s.I,{}),(0,a.jsx)(r.A,{})]})},22194:(e,t,n)=>{n.d(t,{N:()=>i});var a=n(85893),s=n(3538),o=n(99922),r=n(3433),c=n(5854);const i=({fetchServiceAccounts:e})=>{const{showModal:t}=(0,c.useModal)(),{t:n}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return(0,a.jsx)(o.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,a.jsx)(r.C0,{emptyStateProps:{variant:r.jU.NoItems},titleProps:{title:n("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:n("serviceAccount.create_service_account_to_get_started")},buttonProps:{title:n("serviceAccount.create_service_account"),onClick:()=>{t(c.ModalType.KasCreateServiceAccount,{onCreate:e})},"data-testid":"emptyStateStreams-buttonCreateServiceAccount"}})}))}},3647:(e,t,n)=>{n.d(t,{H:()=>h});var a=n(9922),s=n(85893),o=n(5854),r=n(75418),c=n(28929),i=n(75381),l=n(99922),d=n(89943),u=n(3433),v=n(22194),p=n(87694);const h=()=>{const e=(0,o.useAuth)(),t=(0,o.useConfig)(),[n,h]=(0,r.useState)(),[m,g]=(0,r.useState)(!1),_=(0,r.useCallback)((()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){var n;const a=yield null==e?void 0:e.kas.getToken();if(a&&t)try{const e=new c.SecurityApi(new c.Configuration({accessToken:a,basePath:null===(n=null==t?void 0:t.ams)||void 0===n?void 0:n.apiBasePath}));yield e.getServiceAccounts().then((e=>{const t=null==e?void 0:e.data,n=(null==t?void 0:t.items)||[],a=null==n?void 0:n.sort(((e,t)=>e.created_at&&t.created_at?t.created_at.localeCompare(e.created_at):-1));h(a)}))}catch(e){e instanceof Error&&(e=>{var t,n;let a;(0,i.G6)(e)&&(a=null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.code),a===i.SM.UNAUTHORIZED_USER&&g(!0)})(e)}}))),[e,t]);return(0,r.useEffect)((()=>{_()}),[_]),m?(0,s.jsx)(d.F,{}):void 0===n?(0,s.jsx)(l.PageSection,Object.assign({variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,s.jsx)(u.yR,{})})):n.length<1?(0,s.jsx)(v.N,{fetchServiceAccounts:_}):(0,s.jsx)(p.p,{fetchServiceAccounts:_,serviceAccountItems:n})}},87694:(e,t,n)=>{n.d(t,{p:()=>l});var a=n(85893),s=n(3433),o=n(75418),r=n(99922),c=n(91067),i=n(5854);const l=({fetchServiceAccounts:e,serviceAccountItems:t})=>{const{showModal:n}=(0,i.useModal)(),{showModal:l}=(0,i.useModal)(),{showModal:d}=(0,i.useModal)(),[u,v]=(0,o.useState)("name asc"),{page:p=1,perPage:h=10}=(0,s.h0)()||{};return(0,a.jsx)(r.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:r.PageSectionVariants.default,padding:{default:"noPadding"}},{children:(0,a.jsx)(r.Card,{children:(0,a.jsx)(c.s,{page:p,perPage:h,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:t,orderBy:u,setOrderBy:v,onResetCredentials:e=>{n(i.ModalType.KasResetServiceAccountCredentials,{serviceAccount:e})},onDeleteServiceAccount:t=>{d(i.ModalType.KasDeleteServiceAccount,{serviceAccount:t,onDelete:e})},onCreateServiceAccount:()=>{l(i.ModalType.KasCreateServiceAccount,{onCreate:e})}})})}))}},66955:(e,t,n)=>{n.d(t,{s:()=>v});var a=n(85893),s=n(75418),o=n(3538),r=n(28251),c=n(99922),i=n(3433),l=n(75381),d=n(59379),u=n(5854);const v=({page:e,perPage:t,expectedTotal:n,serviceAccountsDataLoaded:v,serviceAccountItems:p,onResetCredentials:h,onDeleteServiceAccount:m,orderBy:g,setOrderBy:_,onCreateServiceAccount:f})=>{const{t:y}=(0,o.useTranslation)(["kasTemporaryFixMe"]),x=(0,u.useAuth)(),[j,S]=(0,s.useState)(void 0),[b,P]=(0,s.useState)();(0,s.useEffect)((()=>{var e;null===(e=null==x?void 0:x.getUsername())||void 0===e||e.then((e=>S(e)))}),[x]),(0,s.useEffect)((()=>{var e;null===(e=null==x?void 0:x.isOrgAdmin())||void 0===e||e.then((e=>P(e)))}),[x]);const C=[{title:y("common.name")},{title:y("common.clientID")},{title:y("common.owner"),transforms:[(0,r.cellWidth)(20)]},{title:y("time_created")}],A=e=>{if(!v)return[];const t=e.originalData,n=void 0!==j&&t.created_by===j||void 0!==b&&!0===b;let a={};n||(a={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});const s=[Object.assign(Object.assign({title:y("common.reset_credentials"),id:"reset-credentials","data-testid":"tableServiceAccounts-actionResetCredentials",onClick:e=>n&&((e,t)=>{var n,a,s,o;h&&h(t),null===(o=null===(s=null===(a=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===a?void 0:a.parentElement)||void 0===s?void 0:s.previousSibling)||void 0===o||o.focus()})(e,t)},a),{tooltipProps:{position:"left",content:y("serviceAccount.no_permission_to_reset_service_account")}}),Object.assign(Object.assign({title:y("serviceAccount.delete_service_account"),id:"delete-account","data-testid":"tableServiceAccounts-actionDeleteAccount",onClick:e=>n&&((e,t)=>{var n,a,s,o;m&&m(t),null===(o=null===(s=null===(a=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===a?void 0:a.parentElement)||void 0===s?void 0:s.previousSibling)||void 0===o||o.focus()})(e,t)},a),{tooltipProps:{position:"left",content:y("serviceAccount.no_permission_to_delete_service_account")}})];return s},w=e=>{switch(e.toLowerCase()){case"name":return 0;case"client_id":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.q,{onCreateServiceAccount:f}),(0,a.jsx)(i.wR,{tableProps:{cells:C,rows:(()=>{const s=[],o=(0,l.o8)(e,t,n);return v?(null==p||p.forEach((e=>{const{name:t,created_by:n,client_id:a,created_at:o}=e;s.push({cells:[t,a,n,{title:(0,l.L0)(o,y("ago"))}],originalData:e})})),s):(0,l.vK)({loadingCount:o,skeleton:(0,a.jsx)(c.Skeleton,{}),length:C.length})})(),"aria-label":y("serviceAccount.service_account_list"),actionResolver:e=>A(e),onSort:(e,t,n)=>{_&&_(`${(e=>{switch(e){case 0:return"name";case 1:return"client_id";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}})(t)} ${n}`)},sortBy:(()=>{const e=(null==g?void 0:g.split(" "))||[];if(e.length>1)return{index:w(e[0]),direction:e[1]===r.SortByDirection.asc?r.SortByDirection.asc:r.SortByDirection.desc}})()}}),p&&(null==p?void 0:p.length)<1&&v&&(0,a.jsx)(i.C0,{emptyStateProps:{variant:i.jU.NoResult},titleProps:{title:y("no_results_found")},emptyStateBodyProps:{body:y("adjust_your_filters_and_try_again")}})]})}},59379:(e,t,n)=>{n.d(t,{q:()=>c});var a=n(85893),s=n(3538),o=n(99922),r=n(3433);const c=({onCreateServiceAccount:e})=>{const{t}=(0,s.useTranslation)(["kasTemporaryFixMe"]),n=[{item:(0,a.jsx)(o.Button,Object.assign({variant:"primary",onClick:e,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount"},{children:t("serviceAccount.create_service_account")}))}];return(0,a.jsx)(r.L5,{toolbarProps:{id:"instance-toolbar",collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:n})}},91067:(e,t,n)=>{n.d(t,{s:()=>a.s});var a=n(66955);n(59379)},89943:(e,t,n)=>{n.d(t,{F:()=>i});var a=n(85893),s=n(3538),o=n(99922),r=n(3433),c=n(5569);const i=()=>{const{t:e}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return(0,a.jsx)(o.PageSection,Object.assign({variant:o.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,a.jsx)(r.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:c.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})}))}},82519:(e,t,n)=>{n(75418)}}]);
//# sourceMappingURL=1775.09bd352e.js.map