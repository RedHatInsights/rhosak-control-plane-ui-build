/*! For license information please see 1775.5d7e58fe.js.LICENSE.txt */
"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1775,5893],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const o=n(223),r=o.__importStar(n(75418));var a;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case a.sm:return"1em";case a.md:return"1.5em";case a.lg:return"2em";case a.xl:return"3em";default:return"1em"}};let c=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:s=0,width:i,height:l,svgPath:d}){var u;return u=class extends r.Component{constructor(){super(...arguments),this.id="icon-title-"+c++}render(){const e=this.props,{size:a,color:c,title:u,noVerticalAlign:v}=e,p=o.__rest(e,["size","color","title","noVerticalAlign"]),h=Boolean(u),m=t.getSize(a),g=-.125*Number.parseFloat(m),_=v?null:{verticalAlign:`${g}em`},f=[n,s,i,l].join(" ");return r.createElement("svg",Object.assign({style:_,fill:c,height:m,width:m,viewBox:f,"aria-labelledby":h?this.id:null,"aria-hidden":!h||null,role:"img"},p),h&&r.createElement("title",{id:this.id},u),r.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:a.sm,noVerticalAlign:!1},u}},84564:(e,t,n)=>{t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},5569:(e,t,n)=>{t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},34558:(e,t,n)=>{t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},38296:(e,t,n)=>{function o(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const r=typeof e;if("string"===r||"number"===r)t.push(e);else if(Array.isArray(e)&&e.length){const n=o(...e);n&&t.push(n)}else if("object"===r)for(const o in e)n.call(e,o)&&e[o]&&t.push(o)})),t.join(" ")}n.d(t,{i:()=>o})},27081:()=>{},75251:(e,t,n)=>{n(27418);var o=n(75418),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;r=a("react.element"),t.Fragment=a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!i.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:d,props:a,_owner:c.current}}t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},48090:(e,t,n)=>{n(85893),n(4716),n(99922),n(68199),n(28962)},28962:(e,t,n)=>{n.d(t,{pf:()=>c.p,D5:()=>v.D,C0:()=>s.C,jU:()=>s.j,yR:()=>u,wu:()=>p.wu,wR:()=>h.w,L5:()=>m.L,bN:()=>p.bN,h0:()=>p.h0});var o=n(85893),r=n(75418);n(7451);n(223);var a=n(99922);var c=n(43277),s=n(12973),i=n(68199),l=n(4716);n(4256);class d extends r.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,o.jsx)(a.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(s.C,Object.assign({emptyStateProps:{variant:s.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,o.jsx)(a.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,i.withRouter)((0,l.withTranslation)()(d));const u=({bullseyeProps:e,spinnerProps:t})=>(0,o.jsx)(a.Bullseye,Object.assign({},e,{children:(0,o.jsx)(a.Spinner,Object.assign({},t))}));var v=n(87842),p=n(16846),h=n(69887),m=n(93697);n(8509)},94622:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(85893),r=n(75418),a=n(4716),c=n(7451);const s=()=>{const{registerModals:e}=(0,c.useModal)();return e((()=>{const{t:e}=(0,a.useTranslation)(["kasTemporaryFixMe"]);return{[c.ModalType.KasCreateInstance]:{lazyComponent:(0,r.lazy)((()=>Promise.all([n.e(223),n.e(1803),n.e(3861),n.e(69),n.e(6437)]).then(n.bind(n,76437)))),variant:"medium",title:e("create_a_kafka_instance")},[c.ModalType.KasDeleteInstance]:{lazyComponent:(0,r.lazy)((()=>Promise.all([n.e(223),n.e(9922),n.e(1803),n.e(9981),n.e(3861),n.e(8827),n.e(524)]).then(n.bind(n,78578)))),variant:"small"},[c.ModalType.KasTransferOwnership]:{lazyComponent:(0,r.lazy)((()=>Promise.all([n.e(223),n.e(9922),n.e(3861),n.e(8512)]).then(n.bind(n,98512)))),variant:"medium",title:e("change_owner")},[c.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,r.lazy)((()=>Promise.all([n.e(223),n.e(9922),n.e(1803),n.e(9981),n.e(3861),n.e(8827),n.e(8752)]).then(n.bind(n,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[c.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,r.lazy)((()=>Promise.all([n.e(223),n.e(9922),n.e(1803),n.e(9981),n.e(3861),n.e(8827),n.e(645)]).then(n.bind(n,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[c.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,r.lazy)((()=>Promise.all([n.e(223),n.e(9922),n.e(1803),n.e(9981),n.e(3861),n.e(8827),n.e(4410)]).then(n.bind(n,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,o.jsx)(o.Fragment,{})}},95950:(e,t,n)=>{n.d(t,{A:()=>o.A});var o=n(94622)},86435:(e,t,n)=>{n.d(t,{I:()=>s});var o=n(85893),r=n(4716),a=n(99922),c=n(3647);n(27081);const s=()=>{const{t:e}=(0,r.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.PageSection,Object.assign({variant:a.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},{children:(0,o.jsxs)(a.TextContent,{children:[(0,o.jsxs)(a.Text,Object.assign({component:"h1"},{children:[" ",e("serviceAccount.service_accounts")]})),(0,o.jsx)(a.Text,Object.assign({component:"p"},{children:e("serviceAccount.service_accounts_title_header_info")}))]})})),(0,o.jsx)(c.H,{})]})}},44947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(85893),r=n(86435),a=n(54172),c=n(95950);const s=()=>(0,o.jsxs)(a.ModalProvider,{children:[(0,o.jsx)(r.I,{}),(0,o.jsx)(c.A,{})]})},22194:(e,t,n)=>{n.d(t,{N:()=>i});var o=n(85893),r=n(4716),a=n(99922),c=n(28962),s=n(7451);const i=({fetchServiceAccounts:e})=>{const{showModal:t}=(0,s.useModal)(),{t:n}=(0,r.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(a.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(c.C0,{emptyStateProps:{variant:c.jU.NoItems},titleProps:{title:n("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:n("serviceAccount.create_service_account_to_get_started")},buttonProps:{title:n("serviceAccount.create_service_account"),onClick:()=>{t(s.ModalType.KasCreateServiceAccount,{onCreate:e})},"data-testid":"emptyStateStreams-buttonCreateServiceAccount"}})}))}},3647:(e,t,n)=>{n.d(t,{H:()=>h});var o=n(223),r=n(85893),a=n(7451),c=n(75418),s=n(23861),i=n(75381),l=n(99922),d=n(89943),u=n(28962),v=n(22194),p=n(87694);const h=()=>{const e=(0,a.useAuth)(),t=(0,a.useConfig)(),[n,h]=(0,c.useState)(),[m,g]=(0,c.useState)(!1),_=(0,c.useCallback)((()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var n;const o=yield null==e?void 0:e.kas.getToken();if(o&&t)try{const e=new s.SecurityApi(new s.Configuration({accessToken:o,basePath:null===(n=null==t?void 0:t.ams)||void 0===n?void 0:n.apiBasePath}));yield e.getServiceAccounts().then((e=>{const t=null==e?void 0:e.data,n=(null==t?void 0:t.items)||[],o=null==n?void 0:n.sort(((e,t)=>e.created_at&&t.created_at?t.created_at.localeCompare(e.created_at):-1));h(o)}))}catch(e){e instanceof Error&&(e=>{var t,n;let o;(0,i.G6)(e)&&(o=null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.code),o===i.SM.UNAUTHORIZED_USER&&g(!0)})(e)}}))),[e,t]);return(0,c.useEffect)((()=>{_()}),[_]),m?(0,r.jsx)(d.F,{}):void 0===n?(0,r.jsx)(l.PageSection,Object.assign({variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,r.jsx)(u.yR,{})})):n.length<1?(0,r.jsx)(v.N,{fetchServiceAccounts:_}):(0,r.jsx)(p.p,{fetchServiceAccounts:_,serviceAccountItems:n})}},87694:(e,t,n)=>{n.d(t,{p:()=>l});var o=n(85893),r=n(28962),a=n(75418),c=n(99922),s=n(91067),i=n(7451);const l=({fetchServiceAccounts:e,serviceAccountItems:t})=>{const{showModal:n}=(0,i.useModal)(),{showModal:l}=(0,i.useModal)(),{showModal:d}=(0,i.useModal)(),[u,v]=(0,a.useState)("name asc"),{page:p=1,perPage:h=10}=(0,r.h0)()||{};return(0,o.jsx)(c.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:c.PageSectionVariants.default,padding:{default:"noPadding"}},{children:(0,o.jsx)(c.Card,{children:(0,o.jsx)(s.s,{page:p,perPage:h,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:t,orderBy:u,setOrderBy:v,onResetCredentials:e=>{n(i.ModalType.KasResetServiceAccountCredentials,{serviceAccount:e})},onDeleteServiceAccount:t=>{d(i.ModalType.KasDeleteServiceAccount,{serviceAccount:t,onDelete:e})},onCreateServiceAccount:()=>{l(i.ModalType.KasCreateServiceAccount,{onCreate:e})}})})}))}},66955:(e,t,n)=>{n.d(t,{s:()=>v});var o=n(85893),r=n(75418),a=n(4716),c=n(28251),s=n(99922),i=n(28962),l=n(75381),d=n(59379),u=n(7451);const v=({page:e,perPage:t,expectedTotal:n,serviceAccountsDataLoaded:v,serviceAccountItems:p,onResetCredentials:h,onDeleteServiceAccount:m,orderBy:g,setOrderBy:_,onCreateServiceAccount:f})=>{const{t:y}=(0,a.useTranslation)(["kasTemporaryFixMe"]),S=(0,u.useAuth)(),[x,P]=(0,r.useState)(void 0),[j,A]=(0,r.useState)();(0,r.useEffect)((()=>{var e;null===(e=null==S?void 0:S.getUsername())||void 0===e||e.then((e=>P(e)))}),[S]),(0,r.useEffect)((()=>{var e;null===(e=null==S?void 0:S.isOrgAdmin())||void 0===e||e.then((e=>A(e)))}),[S]);const b=[{title:y("common.name")},{title:y("common.clientID")},{title:y("common.owner"),transforms:[(0,c.cellWidth)(20)]},{title:y("time_created")}],C=e=>{if(!v)return[];const t=e.originalData,n=t.owner===x||j;let o={};n||(o={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});const r=[Object.assign(Object.assign({title:y("common.reset_credentials"),id:"reset-credentials","data-testid":"tableServiceAccounts-actionResetCredentials",onClick:e=>n&&((e,t)=>{var n,o,r,a;h&&h(t),null===(a=null===(r=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===r?void 0:r.previousSibling)||void 0===a||a.focus()})(e,t)},o),{tooltipProps:{position:"left",content:y("serviceAccount.no_permission_to_reset_service_account")}}),Object.assign(Object.assign({title:y("serviceAccount.delete_service_account"),id:"delete-account","data-testid":"tableServiceAccounts-actionDeleteAccount",onClick:e=>n&&((e,t)=>{var n,o,r,a;m&&m(t),null===(a=null===(r=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===r?void 0:r.previousSibling)||void 0===a||a.focus()})(e,t)},o),{tooltipProps:{position:"left",content:y("serviceAccount.no_permission_to_delete_service_account")}})];return r},O=e=>{switch(e.toLowerCase()){case"name":return 0;case"client_id":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.q,{onCreateServiceAccount:f}),(0,o.jsx)(i.wR,{tableProps:{cells:b,rows:(()=>{const r=[],a=(0,l.o8)(e,t,n);return v?(null==p||p.forEach((e=>{const{name:t,owner:n,client_id:o,created_at:a}=e;r.push({cells:[t,o,n,{title:(0,l.L0)(a,y("ago"))}],originalData:e})})),r):(0,l.vK)({loadingCount:a,skeleton:(0,o.jsx)(s.Skeleton,{}),length:b.length})})(),"aria-label":y("serviceAccount.service_account_list"),actionResolver:e=>C(e),onSort:(e,t,n)=>{_&&_(`${(e=>{switch(e){case 0:return"name";case 1:return"client_id";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}})(t)} ${n}`)},sortBy:(()=>{const e=(null==g?void 0:g.split(" "))||[];if(e.length>1)return{index:O(e[0]),direction:e[1]===c.SortByDirection.asc?c.SortByDirection.asc:c.SortByDirection.desc}})()}}),p&&(null==p?void 0:p.length)<1&&v&&(0,o.jsx)(i.C0,{emptyStateProps:{variant:i.jU.NoResult},titleProps:{title:y("no_results_found")},emptyStateBodyProps:{body:y("adjust_your_filters_and_try_again")}})]})}},59379:(e,t,n)=>{n.d(t,{q:()=>s});var o=n(85893),r=n(4716),a=n(99922),c=n(28962);const s=({onCreateServiceAccount:e})=>{const{t}=(0,r.useTranslation)(["kasTemporaryFixMe"]),n=[{item:(0,o.jsx)(a.Button,Object.assign({variant:"primary",onClick:e,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount"},{children:t("serviceAccount.create_service_account")}))}];return(0,o.jsx)(c.L5,{toolbarProps:{id:"instance-toolbar",collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:n})}},91067:(e,t,n)=>{n.d(t,{s:()=>o.s});var o=n(66955);n(59379)},89943:(e,t,n)=>{n.d(t,{F:()=>i});var o=n(85893),r=n(4716),a=n(99922),c=n(28962),s=n(5569);const i=()=>{const{t:e}=(0,r.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(a.PageSection,Object.assign({variant:a.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(c.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:s.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})}))}},82519:(e,t,n)=>{n(75418)}}]);
