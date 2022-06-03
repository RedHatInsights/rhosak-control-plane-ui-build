"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[2953],{27081:()=>{},86435:(e,t,n)=>{n.d(t,{I:()=>i});var o=n(85893),c=n(3538),a=n(99922),s=n(3647);n(27081);const i=()=>{const{t:e}=(0,c.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.PageSection,Object.assign({variant:a.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},{children:(0,o.jsxs)(a.TextContent,{children:[(0,o.jsxs)(a.Text,Object.assign({component:"h1"},{children:[" ",e("serviceAccount.service_accounts")]})),(0,o.jsx)(a.Text,Object.assign({component:"p"},{children:e("serviceAccount.service_accounts_title_header_info")}))]})})),(0,o.jsx)(s.H,{})]})}},44947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=n(85893),c=n(86435),a=n(59271),s=n(95950);const i=()=>(0,o.jsxs)(a.ModalProvider,{children:[(0,o.jsx)(c.I,{}),(0,o.jsx)(s.A,{})]})},22194:(e,t,n)=>{n.d(t,{N:()=>r});var o=n(85893),c=n(3538),a=n(99922),s=n(3433),i=n(5854);const r=({fetchServiceAccounts:e})=>{const{showModal:t}=(0,i.useModal)(),{t:n}=(0,c.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(a.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(s.C0,{emptyStateProps:{variant:s.jU.NoItems},titleProps:{title:n("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:n("serviceAccount.create_service_account_to_get_started")},buttonProps:{title:n("serviceAccount.create_service_account"),onClick:()=>{t(i.ModalType.KasCreateServiceAccount,{onCreate:e})},"data-testid":"emptyStateStreams-buttonCreateServiceAccount"}})}))}},3647:(e,t,n)=>{n.d(t,{H:()=>_});var o=n(9922),c=n(85893),a=n(5854),s=n(93264),i=n(28929),r=n(75381),l=n(99922),d=n(89943),u=n(3433),v=n(22194),p=n(87694);const _=()=>{const e=(0,a.useAuth)(),t=(0,a.useConfig)(),[n,_]=(0,s.useState)(),[g,m]=(0,s.useState)(!1),h=(0,s.useCallback)((()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var n;const o=yield null==e?void 0:e.kas.getToken();if(o&&t)try{const e=new i.SecurityApi(new i.Configuration({accessToken:o,basePath:null===(n=null==t?void 0:t.ams)||void 0===n?void 0:n.apiBasePath}));yield e.getServiceAccounts().then((e=>{const t=null==e?void 0:e.data,n=(null==t?void 0:t.items)||[],o=null==n?void 0:n.sort(((e,t)=>e.created_at&&t.created_at?t.created_at.localeCompare(e.created_at):-1));_(o)}))}catch(e){e instanceof Error&&(e=>{var t,n;let o;(0,r.G6)(e)&&(o=null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.code),o===r.SM.UNAUTHORIZED_USER&&m(!0)})(e)}}))),[e,t]);return(0,s.useEffect)((()=>{h()}),[h]),g?(0,c.jsx)(d.F,{}):void 0===n?(0,c.jsx)(l.PageSection,Object.assign({variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,c.jsx)(u.yR,{})})):n.length<1?(0,c.jsx)(v.N,{fetchServiceAccounts:h}):(0,c.jsx)(p.p,{fetchServiceAccounts:h,serviceAccountItems:n})}},87694:(e,t,n)=>{n.d(t,{p:()=>l});var o=n(85893),c=n(3433),a=n(93264),s=n(99922),i=n(91067),r=n(5854);const l=({fetchServiceAccounts:e,serviceAccountItems:t})=>{const{showModal:n}=(0,r.useModal)(),{showModal:l}=(0,r.useModal)(),{showModal:d}=(0,r.useModal)(),[u,v]=(0,a.useState)("name asc"),{page:p=1,perPage:_=10}=(0,c.h0)()||{};return(0,o.jsx)(s.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:s.PageSectionVariants.default,padding:{default:"noPadding"}},{children:(0,o.jsx)(s.Card,{children:(0,o.jsx)(i.s,{page:p,perPage:_,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:t,orderBy:u,setOrderBy:v,onResetCredentials:e=>{n(r.ModalType.KasResetServiceAccountCredentials,{serviceAccount:e})},onDeleteServiceAccount:t=>{d(r.ModalType.KasDeleteServiceAccount,{serviceAccount:t,onDelete:e})},onCreateServiceAccount:()=>{l(r.ModalType.KasCreateServiceAccount,{onCreate:e})}})})}))}},66955:(e,t,n)=>{n.d(t,{s:()=>v});var o=n(85893),c=n(93264),a=n(3538),s=n(28251),i=n(99922),r=n(3433),l=n(75381),d=n(59379),u=n(5854);const v=({page:e,perPage:t,expectedTotal:n,serviceAccountsDataLoaded:v,serviceAccountItems:p,onResetCredentials:_,onDeleteServiceAccount:g,orderBy:m,setOrderBy:h,onCreateServiceAccount:S})=>{const{t:A}=(0,a.useTranslation)(["kasTemporaryFixMe"]),y=(0,u.useAuth)(),[j,f]=(0,c.useState)(void 0),[x,b]=(0,c.useState)();(0,c.useEffect)((()=>{var e;null===(e=null==y?void 0:y.getUsername())||void 0===e||e.then((e=>f(e)))}),[y]),(0,c.useEffect)((()=>{var e;null===(e=null==y?void 0:y.isOrgAdmin())||void 0===e||e.then((e=>b(e)))}),[y]);const P=[{title:A("common.name")},{title:A("common.clientID")},{title:A("common.owner"),transforms:[(0,s.cellWidth)(20)]},{title:A("time_created")}],C=e=>{if(!v)return[];const t=e.originalData,n=void 0!==j&&t.created_by===j||void 0!==x&&!0===x;let o={};n||(o={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});const c=[Object.assign(Object.assign({title:A("common.reset_credentials"),id:"reset-credentials","data-testid":"tableServiceAccounts-actionResetCredentials",onClick:e=>n&&((e,t)=>{var n,o,c,a;_&&_(t),null===(a=null===(c=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===c?void 0:c.previousSibling)||void 0===a||a.focus()})(e,t)},o),{tooltipProps:{position:"left",content:A("serviceAccount.no_permission_to_reset_service_account")}}),Object.assign(Object.assign({title:A("serviceAccount.delete_service_account"),id:"delete-account","data-testid":"tableServiceAccounts-actionDeleteAccount",onClick:e=>n&&((e,t)=>{var n,o,c,a;g&&g(t),null===(a=null===(c=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===c?void 0:c.previousSibling)||void 0===a||a.focus()})(e,t)},o),{tooltipProps:{position:"left",content:A("serviceAccount.no_permission_to_delete_service_account")}})];return c},k=e=>{switch(e.toLowerCase()){case"name":return 0;case"client_id":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.q,{onCreateServiceAccount:S}),(0,o.jsx)(r.wR,{tableProps:{cells:P,rows:(()=>{const c=[],a=(0,l.o8)(e,t,n);return v?(null==p||p.forEach((e=>{const{name:t,created_by:n,client_id:o,created_at:a}=e;c.push({cells:[t,o,n,{title:(0,l.L0)(a,A("ago"))}],originalData:e})})),c):(0,l.vK)({loadingCount:a,skeleton:(0,o.jsx)(i.Skeleton,{}),length:P.length})})(),"aria-label":A("serviceAccount.service_account_list"),actionResolver:e=>C(e),onSort:(e,t,n)=>{h&&h(`${(e=>{switch(e){case 0:return"name";case 1:return"client_id";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}})(t)} ${n}`)},sortBy:(()=>{const e=(null==m?void 0:m.split(" "))||[];if(e.length>1)return{index:k(e[0]),direction:e[1]===s.SortByDirection.asc?s.SortByDirection.asc:s.SortByDirection.desc}})()}}),p&&(null==p?void 0:p.length)<1&&v&&(0,o.jsx)(r.C0,{emptyStateProps:{variant:r.jU.NoResult},titleProps:{title:A("no_results_found")},emptyStateBodyProps:{body:A("adjust_your_filters_and_try_again")}})]})}},59379:(e,t,n)=>{n.d(t,{q:()=>i});var o=n(85893),c=n(3538),a=n(99922),s=n(3433);const i=({onCreateServiceAccount:e})=>{const{t}=(0,c.useTranslation)(["kasTemporaryFixMe"]),n=[{item:(0,o.jsx)(a.Button,Object.assign({variant:"primary",onClick:e,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount"},{children:t("serviceAccount.create_service_account")}))}];return(0,o.jsx)(s.L5,{toolbarProps:{id:"instance-toolbar",collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:n})}},91067:(e,t,n)=>{n.d(t,{s:()=>o.s});var o=n(66955);n(59379)},89943:(e,t,n)=>{n.d(t,{F:()=>r});var o=n(85893),c=n(3538),a=n(99922),s=n(3433),i=n(5569);const r=()=>{const{t:e}=(0,c.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(a.PageSection,Object.assign({variant:a.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(s.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:i.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})}))}}}]);
//# sourceMappingURL=2953.1ccf5b11.js.map