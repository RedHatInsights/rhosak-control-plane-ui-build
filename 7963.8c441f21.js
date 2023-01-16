"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[7963],{27081:()=>{},48090:(e,t,n)=>{n(85893),n(15847),n(54785),n(73685),n(3433)},3433:(e,t,n)=>{n.d(t,{pf:()=>i.p,D5:()=>p,C0:()=>c.C,jU:()=>c.j,yR:()=>v,wR:()=>h.w,L5:()=>g.L,bN:()=>m.bN,h0:()=>m.h0});var a=n(85893),s=n(93264);n(97644);var o=n(42695),r=n(54785);var i=n(43277),c=n(12973),l=n(73685),d=n(15847);n(4256);class u extends s.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,a.jsx)(r.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,a.jsx)(c.C,Object.assign({emptyStateProps:{variant:c.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,a.jsx)(r.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,l.withRouter)((0,d.withTranslation)()(u));const v=({bullseyeProps:e,spinnerProps:t})=>(0,a.jsx)(r.Bullseye,Object.assign({},e,{children:(0,a.jsx)(r.Spinner,Object.assign({},t))}));n(85853);const p=({onClose:e,isLoading:t=!0,drawerPanelContentProps:n,drawerHeaderProps:s,isExpanded:i,children:c,panelBodyContent:l,onExpand:d,notRequiredDrawerContentBackground:u,"data-ouia-app-id":p,inlineAlertMessage:m})=>{const h=n||{},{widths:g}=h,_=(0,o.__rest)(h,["widths"]),{text:j,title:x}=s||{},y=(0,a.jsx)(r.DrawerPanelContent,Object.assign({widths:g||{default:"width_50"}},_,{children:t?(0,a.jsx)(v,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.DrawerHead,{children:[(0,a.jsxs)(r.TextContent,{children:[(null==j?void 0:j.label)&&(0,a.jsx)(r.Text,Object.assign({component:(null==j?void 0:j.component)||r.TextVariants.small,className:(null==j?void 0:j.className)||"pf-u-mb-0"},{children:null==j?void 0:j.label})),(null==x?void 0:x.value)&&(0,a.jsx)(r.Title,Object.assign({headingLevel:(null==x?void 0:x.headingLevel)||"h2",size:(null==x?void 0:x.size)||r.TitleSizes.xl,className:(null==x?void 0:x.className)||"pf-u-mt-0"},{children:null==x?void 0:x.value}))]}),(0,a.jsx)(r.DrawerActions,{children:(0,a.jsx)(r.DrawerCloseButton,{onClick:e})})]}),(0,a.jsxs)(r.DrawerPanelBody,{children:[m,l]})]})}));return(0,a.jsx)(r.Drawer,Object.assign({isExpanded:i,onExpand:d,"data-ouia-app-id":p,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,a.jsx)(r.DrawerContent,Object.assign({panelContent:y,className:u?"pf-m-no-background":""},{children:(0,a.jsxs)(r.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",c]}))}))}))};var m=n(16846),h=n(69887),g=n(93697);n(8509)},94622:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(85893),s=n(93264),o=n(15847),r=n(97644);const i=()=>{const{registerModals:e}=(0,r.useModal)();return e((()=>{const{t:e}=(0,o.useTranslation)(["kasTemporaryFixMe"]);return{[r.ModalType.KasCreateInstance]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9669),n.e(3651),n.e(2695),n.e(3685),n.e(3824),n.e(5781),n.e(69),n.e(4372)]).then(n.bind(n,74372)))),variant:"medium",title:e("create_a_kafka_instance")},[r.ModalType.KasDeleteInstance]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9669),n.e(3651),n.e(2695),n.e(4785),n.e(3685),n.e(3824),n.e(3133),n.e(5626),n.e(5781),n.e(524)]).then(n.bind(n,78578)))),variant:"small"},[r.ModalType.KasTransferOwnership]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9669),n.e(2695),n.e(4785),n.e(3824),n.e(5781),n.e(8512)]).then(n.bind(n,98512)))),variant:"medium",title:e("change_owner")},[r.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(3651),n.e(2695),n.e(4785),n.e(3685),n.e(3824),n.e(3133),n.e(5626),n.e(854),n.e(8752)]).then(n.bind(n,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[r.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(3651),n.e(2695),n.e(4785),n.e(3685),n.e(3824),n.e(3133),n.e(5626),n.e(854),n.e(645)]).then(n.bind(n,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[r.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(3651),n.e(2695),n.e(4785),n.e(3685),n.e(3824),n.e(3133),n.e(5626),n.e(854),n.e(4410)]).then(n.bind(n,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,a.jsx)(a.Fragment,{})}},95950:(e,t,n)=>{n.d(t,{A:()=>a.A});var a=n(94622)},86435:(e,t,n)=>{n.d(t,{I:()=>i});var a=n(85893),s=n(15847),o=n(54785),r=n(3647);n(27081);const i=()=>{const{t:e}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.PageSection,Object.assign({variant:o.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},{children:(0,a.jsxs)(o.TextContent,{children:[(0,a.jsxs)(o.Text,Object.assign({component:"h1"},{children:[" ",e("serviceAccount.service_accounts")]})),(0,a.jsx)(o.Text,Object.assign({component:"p"},{children:e("serviceAccount.service_accounts_title_header_info")}))]})})),(0,a.jsx)(r.H,{})]})}},44947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(85893),s=n(86435),o=n(2055),r=n(95950);const i=()=>(0,a.jsxs)(o.ModalProvider,{children:[(0,a.jsx)(s.I,{}),(0,a.jsx)(r.A,{})]})},22194:(e,t,n)=>{n.d(t,{N:()=>c});var a=n(85893),s=n(15847),o=n(54785),r=n(3433),i=n(97644);const c=({fetchServiceAccounts:e})=>{const{showModal:t}=(0,i.useModal)(),{t:n}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return(0,a.jsx)(o.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,a.jsx)(r.C0,{emptyStateProps:{variant:r.jU.NoItems},titleProps:{title:n("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:n("serviceAccount.create_service_account_to_get_started")},buttonProps:{title:n("serviceAccount.create_service_account"),onClick:()=>{t(i.ModalType.KasCreateServiceAccount,{onCreate:e})},"data-testid":"emptyStateStreams-buttonCreateServiceAccount"}})}))}},3647:(e,t,n)=>{n.d(t,{H:()=>m});var a=n(42695),s=n(85893),o=n(97644),r=n(93264),i=n(30854),c=n(75381),l=n(54785),d=n(89943),u=n(3433),v=n(22194),p=n(87694);const m=()=>{const e=(0,o.useAuth)(),t=(0,o.useConfig)(),[n,m]=(0,r.useState)(),[h,g]=(0,r.useState)(!1),_=(0,r.useCallback)((()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==e?void 0:e.sas_ui.getToken();if(n&&t)try{const e=new i.ServiceAccountsApi(new i.Configuration({accessToken:n,basePath:null==t?void 0:t.sas_ui.apiBasePath}));yield e.getServiceAccounts(void 0,100).then((e=>{const t=null==e?void 0:e.data,n=null==t?void 0:t.sort(((e,t)=>e.createdAt&&t.createdAt?String(t.createdAt).localeCompare(String(e.createdAt)):-1));m(n)}))}catch(e){e instanceof Error&&(e=>{var t,n;let a;(0,c.G6)(e)&&(a=null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.code),a===c.SM.UNAUTHORIZED_USER&&g(!0)})(e)}}))),[e,t]);return(0,r.useEffect)((()=>{_()}),[_]),h?(0,s.jsx)(d.F,{}):void 0===n?(0,s.jsx)(l.PageSection,Object.assign({variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,s.jsx)(u.yR,{})})):n.length<1?(0,s.jsx)(v.N,{fetchServiceAccounts:_}):(0,s.jsx)(p.p,{fetchServiceAccounts:_,serviceAccountItems:n})}},87694:(e,t,n)=>{n.d(t,{p:()=>l});var a=n(85893),s=n(3433),o=n(93264),r=n(54785),i=n(91067),c=n(97644);const l=({fetchServiceAccounts:e,serviceAccountItems:t})=>{const{showModal:n}=(0,c.useModal)(),{showModal:l}=(0,c.useModal)(),{showModal:d}=(0,c.useModal)(),[u,v]=(0,o.useState)("name asc"),{page:p=1,perPage:m=10}=(0,s.h0)()||{};return(0,a.jsx)(r.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:r.PageSectionVariants.default,padding:{default:"noPadding"},"data-ouia-component-id":"page-ServiceAccounts"},{children:(0,a.jsx)(r.Card,{children:(0,a.jsx)(i.s,{page:p,perPage:m,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:t,orderBy:u,setOrderBy:v,onResetCredentials:e=>{n(c.ModalType.KasResetServiceAccountCredentials,{serviceAccount:e})},onDeleteServiceAccount:t=>{d(c.ModalType.KasDeleteServiceAccount,{serviceAccount:t,onDelete:e})},onCreateServiceAccount:()=>{l(c.ModalType.KasCreateServiceAccount,{onCreate:e})}})})}))}},66955:(e,t,n)=>{n.d(t,{s:()=>p});var a=n(85893),s=n(93264),o=n(15847),r=n(63133),i=n(54785),c=n(3433),l=n(75381),d=n(59379),u=n(97644),v=n(5480);const p=({page:e,perPage:t,expectedTotal:n,serviceAccountsDataLoaded:p,serviceAccountItems:m,onResetCredentials:h,onDeleteServiceAccount:g,orderBy:_,setOrderBy:j,onCreateServiceAccount:x})=>{const{t:y}=(0,o.useTranslation)(["kasTemporaryFixMe"]),S=(0,u.useAuth)(),[b,A]=(0,s.useState)(void 0),[C,P]=(0,s.useState)();(0,s.useEffect)((()=>{var e;null===(e=null==S?void 0:S.getUsername())||void 0===e||e.then((e=>A(e)))}),[S]),(0,s.useEffect)((()=>{var e;null===(e=null==S?void 0:S.isOrgAdmin())||void 0===e||e.then((e=>P(e)))}),[S]);const f=[{title:y("common.name")},{title:y("common.clientID")},{title:y("common.owner"),transforms:[(0,r.cellWidth)(20)]},{title:y("time_created")}],w=e=>{if(!p)return[];const t=e.originalData,n=void 0!==b&&t.createdBy===b||void 0!==C&&!0===C;let a={};n||(a={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});const s=[Object.assign(Object.assign({title:y("common.reset_credentials"),id:"reset-credentials","data-testid":"tableServiceAccounts-actionResetCredentials","data-ouia-component-id":"kebab-menu-reset-creds",onClick:e=>n&&((e,t)=>{var n,a,s,o;h&&h(t),null===(o=null===(s=null===(a=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===a?void 0:a.parentElement)||void 0===s?void 0:s.previousSibling)||void 0===o||o.focus()})(e,t)},a),{tooltipProps:{position:"left",content:y("serviceAccount.no_permission_to_reset_service_account")}}),Object.assign(Object.assign({title:y("serviceAccount.delete_service_account"),id:"delete-account","data-testid":"tableServiceAccounts-actionDeleteAccount","data-ouia-component-id":"kebab-menu-delete-sa",onClick:e=>n&&((e,t)=>{var n,a,s,o;g&&g(t),null===(o=null===(s=null===(a=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===a?void 0:a.parentElement)||void 0===s?void 0:s.previousSibling)||void 0===o||o.focus()})(e,t)},a),{tooltipProps:{position:"left",content:y("serviceAccount.no_permission_to_delete_service_account")}})];return s},k=e=>{switch(e.toLowerCase()){case"name":return 0;case"client_id":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.q,{onCreateServiceAccount:x}),(0,a.jsx)(c.wR,{tableProps:{cells:f,rows:(()=>{const s=[],o=(0,l.o8)(e,t,n);return p?(null==m||m.forEach((e=>{const{name:t,createdBy:n,clientId:a,createdAt:o}=e,r=(0,v.Z)(new Date(1e3*o),"PPpp");s.push({cells:[t,a,n,{title:(0,l.L0)(r,y("ago"))}],originalData:e})})),s):(0,l.vK)({loadingCount:o,skeleton:(0,a.jsx)(i.Skeleton,{}),length:f.length})})(),"aria-label":y("serviceAccount.service_account_list"),actionResolver:e=>w(e),onSort:(e,t,n)=>{j&&j(`${(e=>{switch(e){case 0:return"name";case 1:return"client_id";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}})(t)} ${n}`)},sortBy:(()=>{const e=(null==_?void 0:_.split(" "))||[];if(e.length>1)return{index:k(e[0]),direction:e[1]===r.SortByDirection.asc?r.SortByDirection.asc:r.SortByDirection.desc}})(),ouiaId:"table"}}),m&&(null==m?void 0:m.length)<1&&p&&(0,a.jsx)(c.C0,{emptyStateProps:{variant:c.jU.NoResult},titleProps:{title:y("no_results_found")},emptyStateBodyProps:{body:y("adjust_your_filters_and_try_again")}})]})}},59379:(e,t,n)=>{n.d(t,{q:()=>i});var a=n(85893),s=n(15847),o=n(54785),r=n(3433);const i=({onCreateServiceAccount:e})=>{const{t}=(0,s.useTranslation)(["kasTemporaryFixMe"]),n=[{item:(0,a.jsx)(o.Button,Object.assign({variant:"primary",onClick:e,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount",ouiaId:"button-create-account"},{children:t("serviceAccount.create_service_account")}))}];return(0,a.jsx)(r.L5,{toolbarProps:{id:"instance-toolbar",collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:n})}},91067:(e,t,n)=>{n.d(t,{s:()=>a.s});var a=n(66955);n(59379)},89943:(e,t,n)=>{n.d(t,{F:()=>c});var a=n(85893),s=n(15847),o=n(54785),r=n(3433),i=n(5569);const c=()=>{const{t:e}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return(0,a.jsx)(o.PageSection,Object.assign({variant:o.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,a.jsx)(r.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:i.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})}))}},82519:(e,t,n)=>{n(93264)}}]);
