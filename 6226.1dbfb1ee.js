"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[6226,500],{48090:(e,t,n)=>{n.d(t,{o:()=>c});var i=n(85893),a=n(30645),o=n(28188),s=n(73685),r=n(3433);const c=()=>{const{t:e}=(0,a.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(o.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(r.C0,Object.assign({emptyStateProps:{variant:r.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},{children:(0,i.jsx)((function(){const t=(0,s.useHistory)();return(0,i.jsx)(o.Button,Object.assign({onClick:function(){t.push("/")}},{children:e("return_to_home_page")}))}),{})}))}))}},3433:(e,t,n)=>{n.d(t,{uZ:()=>s,pf:()=>d.p,sw:()=>l,C0:()=>u.C,jU:()=>u.j,tV:()=>_,yR:()=>g,wu:()=>h.wu,wR:()=>b.w,L5:()=>y.L,bN:()=>h.bN,h0:()=>h.h0});var i=n(85893),a=n(93264),o=n(50834);const s=({children:e})=>{const[t,n]=(0,a.useState)([]),[s,r]=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=s.map((e=>e.key)),n=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,n=setTimeout((()=>c(t)),8e3);return{key:e.id,timeOut:n}}));return r([...s,...n]),()=>s.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,s]);const c=e=>{n((t=>[...t.filter((t=>t.id!==e))])),r((t=>[...t.filter((t=>t.key===e))]))};return(0,i.jsxs)(o.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const i=(new Date).getTime().toString();n([...t,Object.assign(Object.assign({},e),{id:i})])}}},{children:[(0,i.jsx)(l,{alerts:t,onCloseAlert:c}),e]}))};var r=n(9922),c=n(28188);const l=({alerts:e,onCloseAlert:t})=>(0,i.jsx)(c.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:n,variant:a,title:o,description:s,dataTestId:l}=e,d=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,i.jsx)(c.Alert,Object.assign({isLiveRegion:!0,variant:c.AlertVariant[a],variantLabel:"",title:o,actionClose:(0,i.jsx)(c.AlertActionCloseButton,{title:o,onClose:()=>t(n)}),"data-testid":l},d,{children:s}),n)}))}));var d=n(43277),u=n(12973),v=n(73685),p=n(30645);n(4256);class m extends a.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,i.jsx)(c.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(u.C,Object.assign({emptyStateProps:{variant:u.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,i.jsx)(c.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}const _=(0,v.withRouter)((0,p.withTranslation)()(m)),g=({bullseyeProps:e,spinnerProps:t})=>(0,i.jsx)(c.Bullseye,Object.assign({},e,{children:(0,i.jsx)(c.Spinner,Object.assign({},t))}));n(85853);var h=n(16846),b=n(69887),y=n(93697);n(8509)},13449:(e,t,n)=>{n.d(t,{S:()=>o});var i=n(93264);const a=(0,i.createContext)(void 0),o=()=>(0,i.useContext)(a)},81548:(e,t,n)=>{n.d(t,{gD:()=>o});n(9922),n(85893);var i=n(93264);const a=(0,i.createContext)(void 0),o=()=>{const e=(0,i.useContext)(a);if(void 0===e)throw new Error("must be used inside a InstanceDrawerContext provider");return e}},61617:(e,t,n)=>{n.d(t,{b4:()=>d,qT:()=>l,DO:()=>h.D,TM:()=>u,AU:()=>p,dt:()=>m,df:()=>_});var i=n(9922),a=n(88601),o=n(75381),s=n(50834),r=n(93264);const c="rhosak",l=()=>{const e=(()=>{const e=(0,a.c)();return(0,r.useCallback)((()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var t,n,i,a;const o=e(),s=yield o.apiAccountsMgmtV1CurrentAccountGet(),r=null===(n=null===(t=null==s?void 0:s.data)||void 0===t?void 0:t.organization)||void 0===n?void 0:n.id;if(!r)throw new Error("User has no organization id");const l=yield o.apiAccountsMgmtV1OrganizationsOrgIdQuotaCostGet(r,void 0,!0,void 0,!0);if(200!==l.status)throw new Error(l.statusText);const d=null===(i=l.data.items)||void 0===i?void 0:i.filter((e=>{var t;return null===(t=e.related_resources)||void 0===t?void 0:t.find((e=>e.resource_name===c&&"RHOSAK"===e.product))})),u=null==d?void 0:d.find((e=>{var t;return null===(t=e.related_resources)||void 0===t?void 0:t.find((e=>"standard"===e.billing_model))})),v=null==d?void 0:d.filter((e=>{var t;return null===(t=e.related_resources)||void 0===t?void 0:t.find((e=>"marketplace"===e.billing_model))})),p=(null===(a=l.data.items)||void 0===a?void 0:a.some((e=>{var t;return null===(t=e.related_resources)||void 0===t?void 0:t.find((e=>e.resource_name===c&&"RHOSAKTrial"===e.product))})))||!1,m=u?u.allowed-u.consumed:void 0,_=null==v?void 0:v.reduce(((e,t)=>t.allowed-t.consumed+e),0),g=null==v?void 0:v.filter((e=>void 0!==e.cloud_accounts)).flatMap((e=>e.cloud_accounts)),h=Array.from(new Set(null==g?void 0:g.map((e=>e.cloud_provider_id))));return{hasTrialQuota:p,remainingPrepaidQuota:m,remainingMarketplaceQuota:_,marketplaceSubscriptions:g?h.map((e=>({marketplace:e,subscriptions:g.filter((t=>t.cloud_provider_id===e)).map((e=>e.cloud_account_id))}))):[]}}))),[e])})();return(0,r.useCallback)((({onNoQuotaAvailable:t,onOutOfQuota:n,onQuotaAvailable:a})=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){try{const{hasTrialQuota:i,remainingPrepaidQuota:o,remainingMarketplaceQuota:s,marketplaceSubscriptions:r}=yield e();s||o?s&&0===s&&o&&0===o?n({quota:{marketplaceSubscriptions:r}}):a({quota:{remainingPrepaidQuota:o,remainingMarketplaceQuota:s,marketplaceSubscriptions:r}}):t({hasTrialQuota:i})}catch(e){t({hasTrialQuota:!1})}}))),[e])},d=()=>{const{getUsername:e}=(0,s.useAuth)(),t=(0,a.d)(),n=(0,r.useCallback)((({onAvailable:n,onUnavailable:a,onUsed:s})=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){try{const i=t(),a=`owner = ${yield e()}`,r=yield i.getKafkas("","","",a);if(r.data.items){r.data.items.some((e=>(null==e?void 0:e.instance_type)===(null===o.ik||void 0===o.ik?void 0:o.ik.eval)||(null==e?void 0:e.instance_type)===(null===o.ik||void 0===o.ik?void 0:o.ik.developer)))?s():n()}}catch(e){a()}}))),[t,e]);return n},u=()=>{const e=(0,a.d)(),t=v(),n=(0,r.useCallback)(((n,{onAvailable:a,onUnavailable:o})=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var s;try{const o=e(),r=yield o.getCloudProviders(),c=(null===(s=null==r?void 0:r.data)||void 0===s?void 0:s.items)||[],l=yield Promise.all(c.filter((e=>e.enabled)).map((e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield t(e.id,n);return{id:e.id,displayName:e.display_name,regions:i}}))))),d=l[0];a({providers:l,defaultProvider:null==d?void 0:d.id})}catch(e){o()}}))),[t,e]);return n},v=()=>{const e=(0,a.d)();return(0,r.useCallback)((function(t,n){var a;return(0,i.__awaiter)(this,void 0,void 0,(function*(){const i=e(),o=yield i.getCloudProviderRegions(t);if(!(null===(a=null==o?void 0:o.data)||void 0===a?void 0:a.items))return[];return o.data.items.filter((e=>e.enabled&&e.capacity.some((e=>e.instance_type===n)))).map((e=>{var t;const i=null===(t=e.capacity)||void 0===t?void 0:t.some((e=>{var t;return e.instance_type===n&&0===(null===(t=e.available_sizes)||void 0===t?void 0:t.length)}));return{id:e.id,displayName:e.display_name,isDisabled:i,capacity:e.capacity}}))}))}),[e])},p=e=>{const t=(0,a.d)(),n=v();return(0,r.useCallback)(((a,o)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var i,s,r;const c=t(),l=(yield n(a,e)).find((e=>e.id===o)),d=(null==l?void 0:l.capacity.flatMap((e=>e.available_sizes.map((t=>`${e.instance_type}.${t}`)))))||[],u=yield c.getInstanceTypesByCloudProviderAndRegion(a,o);if(!(null===(i=null==u?void 0:u.data)||void 0===i?void 0:i.instance_types))throw new Error("No instance_types from backend");return((null===(r=null===(s=null==u?void 0:u.data)||void 0===s?void 0:s.instance_types.find((t=>t.id===e)))||void 0===r?void 0:r.sizes)||[]).map(g.bind(void 0,(t=>!d.includes(`${e}.${t}`))))}))),[n,t,e])},m=()=>p("standard"),_=()=>{const e=p("standard"),t=p("developer");return(0,r.useCallback)(((n,a)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){let i;try{i=yield e(n,a)}catch(e){i=[{id:"1",displayName:"1"},{id:"2",displayName:"2"}]}return{standard:i,trial:(yield t(n,a))[0]}}))),[t,e])};function g(e,t){const n=t;return{id:n.id,displayName:n.display_name,quota:n.quota_consumed,ingress:(n.ingress_throughput_per_sec.bytes||0)/1048576,egress:(n.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((n.max_data_retention_size.bytes||0)/1073741824),connections:n.total_max_connections,connectionRate:n.max_connection_attempts_per_sec,maxPartitions:n.max_partitions,messageSize:(n.max_message_size.bytes||0)/1048576,status:"stable"===n.maturity_status?"stable":"preview",trialDurationHours:n.lifespan_seconds?n.lifespan_seconds/60/60:0,isDisabled:e(n.id)}}var h=n(46163)},82519:(e,t,n)=>{n.d(t,{j:()=>a});var i=n(93264);function a(e){(0,i.useEffect)((()=>{const t=document.title;return document.title=e,()=>{document.title=t}}),[e])}},53269:(e,t,n)=>{n.r(t);var i=n(85893),a=n(93264),o=n(3644),s=n.n(o),r=n(9922),c=n(73685),l=n(50834),d=(n(49901),n(74651),n(99521),n(15202),n(56594),n(94694),n(30645)),u=n(28188),v=n(48090),p=n(82519),m=n(10500),_=n(94622),g=n(11228),h=n(88688);var b=n(4212),y=n(75381),j=n(3433),x=n(5569);const f=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(j.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:x.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})}))},k=({fetchServiceAccounts:e})=>{const{showModal:t}=(0,l.useModal)(),{t:n}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(u.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(j.C0,{emptyStateProps:{variant:j.jU.NoItems},titleProps:{title:n("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:n("serviceAccount.create_service_account_to_get_started")},buttonProps:{title:n("serviceAccount.create_service_account"),onClick:()=>{t(l.ModalType.KasCreateServiceAccount,{onCreate:e})},"data-testid":"emptyStateStreams-buttonCreateServiceAccount"}})}))};var S=n(19576);const A=({onCreateServiceAccount:e})=>{const{t}=(0,d.useTranslation)(["kasTemporaryFixMe"]),n=[{item:(0,i.jsx)(u.Button,Object.assign({variant:"primary",onClick:e,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount",ouiaId:"button-create-account"},{children:t("serviceAccount.create_service_account")}))}];return(0,i.jsx)(j.L5,{toolbarProps:{id:"instance-toolbar",collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:n})},P=({page:e,perPage:t,expectedTotal:n,serviceAccountsDataLoaded:o,serviceAccountItems:s,onResetCredentials:r,onDeleteServiceAccount:c,orderBy:v,setOrderBy:p,onCreateServiceAccount:m})=>{const{t:_}=(0,d.useTranslation)(["kasTemporaryFixMe"]),g=(0,l.useAuth)(),[h,b]=(0,a.useState)(void 0),[x,f]=(0,a.useState)();(0,a.useEffect)((()=>{var e;null===(e=null==g?void 0:g.getUsername())||void 0===e||e.then((e=>b(e)))}),[g]),(0,a.useEffect)((()=>{var e;null===(e=null==g?void 0:g.isOrgAdmin())||void 0===e||e.then((e=>f(e)))}),[g]);const k=[{title:_("common.name")},{title:_("common.clientID")},{title:_("common.owner"),transforms:[(0,S.cellWidth)(20)]},{title:_("time_created")}],P=e=>{if(!o)return[];const t=e.originalData,n=void 0!==h&&t.created_by===h||void 0!==x&&!0===x;let i={};n||(i={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});const a=[Object.assign(Object.assign({title:_("common.reset_credentials"),id:"reset-credentials","data-testid":"tableServiceAccounts-actionResetCredentials","data-ouia-component-id":"kebab-menu-reset-creds",onClick:e=>n&&((e,t)=>{var n,i,a,o;r&&r(t),null===(o=null===(a=null===(i=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===i?void 0:i.parentElement)||void 0===a?void 0:a.previousSibling)||void 0===o||o.focus()})(e,t)},i),{tooltipProps:{position:"left",content:_("serviceAccount.no_permission_to_reset_service_account")}}),Object.assign(Object.assign({title:_("serviceAccount.delete_service_account"),id:"delete-account","data-testid":"tableServiceAccounts-actionDeleteAccount","data-ouia-component-id":"kebab-menu-delete-sa",onClick:e=>n&&((e,t)=>{var n,i,a,o;c&&c(t),null===(o=null===(a=null===(i=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===i?void 0:i.parentElement)||void 0===a?void 0:a.previousSibling)||void 0===o||o.focus()})(e,t)},i),{tooltipProps:{position:"left",content:_("serviceAccount.no_permission_to_delete_service_account")}})];return a},C=e=>{switch(e.toLowerCase()){case"name":return 0;case"client_id":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A,{onCreateServiceAccount:m}),(0,i.jsx)(j.wR,{tableProps:{cells:k,rows:(()=>{const a=[],r=(0,y.o8)(e,t,n);return o?(null==s||s.forEach((e=>{const{name:t,created_by:n,client_id:i,created_at:o}=e;a.push({cells:[t,i,n,{title:(0,y.L0)(o,_("ago"))}],originalData:e})})),a):(0,y.vK)({loadingCount:r,skeleton:(0,i.jsx)(u.Skeleton,{}),length:k.length})})(),"aria-label":_("serviceAccount.service_account_list"),actionResolver:e=>P(e),onSort:(e,t,n)=>{p&&p(`${(e=>{switch(e){case 0:return"name";case 1:return"client_id";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}})(t)} ${n}`)},sortBy:(()=>{const e=(null==v?void 0:v.split(" "))||[];if(e.length>1)return{index:C(e[0]),direction:e[1]===S.SortByDirection.asc?S.SortByDirection.asc:S.SortByDirection.desc}})(),ouiaId:"table"}}),s&&(null==s?void 0:s.length)<1&&o&&(0,i.jsx)(j.C0,{emptyStateProps:{variant:j.jU.NoResult},titleProps:{title:_("no_results_found")},emptyStateBodyProps:{body:_("adjust_your_filters_and_try_again")}})]})},C=({fetchServiceAccounts:e,serviceAccountItems:t})=>{const{showModal:n}=(0,l.useModal)(),{showModal:o}=(0,l.useModal)(),{showModal:s}=(0,l.useModal)(),[r,c]=(0,a.useState)("name asc"),{page:d=1,perPage:v=10}=(0,j.h0)()||{};return(0,i.jsx)(u.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:u.PageSectionVariants.default,padding:{default:"noPadding"},"data-ouia-component-id":"page-ServiceAccounts"},{children:(0,i.jsx)(u.Card,{children:(0,i.jsx)(P,{page:d,perPage:v,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:t,orderBy:r,setOrderBy:c,onResetCredentials:e=>{n(l.ModalType.KasResetServiceAccountCredentials,{serviceAccount:e})},onDeleteServiceAccount:t=>{s(l.ModalType.KasDeleteServiceAccount,{serviceAccount:t,onDelete:e})},onCreateServiceAccount:()=>{o(l.ModalType.KasCreateServiceAccount,{onCreate:e})}})})}))},w=()=>{const e=(0,l.useAuth)(),t=(0,l.useConfig)(),[n,o]=(0,a.useState)(),[s,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){var n;const i=yield null==e?void 0:e.kas.getToken();if(i&&t)try{const e=new b.SecurityApi(new b.Configuration({accessToken:i,basePath:null===(n=null==t?void 0:t.ams)||void 0===n?void 0:n.apiBasePath}));yield e.getServiceAccounts().then((e=>{const t=null==e?void 0:e.data,n=(null==t?void 0:t.items)||[],i=null==n?void 0:n.sort(((e,t)=>e.created_at&&t.created_at?t.created_at.localeCompare(e.created_at):-1));o(i)}))}catch(e){e instanceof Error&&(e=>{var t,n;let i;(0,y.G6)(e)&&(i=null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.code),i===y.SM.UNAUTHORIZED_USER&&c(!0)})(e)}}))),[e,t]);return(0,a.useEffect)((()=>{d()}),[d]),s?(0,i.jsx)(f,{}):void 0===n?(0,i.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,i.jsx)(j.yR,{})})):n.length<1?(0,i.jsx)(k,{fetchServiceAccounts:d}):(0,i.jsx)(C,{fetchServiceAccounts:d,serviceAccountItems:n})};n(27081);const O=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},{children:(0,i.jsxs)(u.TextContent,{children:[(0,i.jsxs)(u.Text,Object.assign({component:"h1"},{children:[" ",e("serviceAccount.service_accounts")]})),(0,i.jsx)(u.Text,Object.assign({component:"p"},{children:e("serviceAccount.service_accounts_title_header_info")}))]})})),(0,i.jsx)(w,{})]})},T=[{component:()=>(0,i.jsxs)(m.ModalProvider,{children:[(0,i.jsx)(g.LF,Object.assign({"data-ouia-app-id":"dummy"},{children:(0,i.jsx)(h.V,{preCreateInstance:e=>Promise.resolve(e)})})),(0,i.jsx)(_.A,{})]}),exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:()=>(0,i.jsx)(O,{}),exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"}],M=e=>{var{component:t,title:n}=e,a=(0,r.__rest)(e,["component","title"]);return(0,p.j)(n),(0,i.jsx)(c.Route,{render:function(e){return(0,i.jsx)(t,Object.assign({},a,e))}})},B=({title:e})=>((0,p.j)(e),(0,i.jsx)(c.Route,{component:v.o})),E=T.reduce(((e,t)=>[...e,...t.routes?t.routes:[t]]),[]),N=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsxs)(c.Switch,{children:[E.map((({path:e,exact:t,component:n,title:a,isAsync:o},s)=>(0,i.jsx)(M,{path:e,exact:t,component:n,title:a,isAsync:o},s))),(0,i.jsx)(B,{title:e("404_page_does_not_exist")})]})},D=n.p+"f940137c.svg";var R=n(32385),I=n.n(R);let F;const L=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return F||(yield U()),F})),U=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){try{F=I()(),F&&(yield F.init({onLoad:"login-required"}))}catch(e){F=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication")}})),$=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return yield null==F?void 0:F.updateToken(50),(null==F?void 0:F.token)?F.token:(console.error("No keycloak token available"),"foo")})),z=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return yield null==F?void 0:F.updateToken(50),(null==F?void 0:F.tokenParsed)?F.tokenParsed:(console.error("No keycloak token available"),{})})),Q=(0,a.createContext)({keycloak:void 0}),V=e=>{const t={kas:{getToken:$},getUsername:()=>z().then((e=>e.username)),isOrgAdmin:()=>z().then((e=>e.is_org_admin))};return(0,i.jsx)(l.AuthContext.Provider,Object.assign({value:t},{children:e.children}))},H=({children:e})=>{var t,n;const[o,s]=(0,a.useState)(!0),[r,l]=(0,a.useState)(!0),[v,p]=(0,a.useState)(!1),m=(0,a.useContext)(Q),_=(0,c.useLocation)(),{t:g}=(0,d.useTranslation)(["kasTemporaryFixMe"]);if(!m.keycloak)return(0,i.jsx)("div",{children:"403 Unauthorized"});if(!m.keycloak.authenticated)return null===(t=m.keycloak)||void 0===t||t.login(),(0,i.jsx)(i.Fragment,{});const h=null===(n=m.keycloak.profile)||void 0===n?void 0:n.email,b=(0,i.jsx)(u.PageHeaderTools,{children:h}),y=(0,i.jsx)(u.PageHeader,{logo:(0,i.jsx)((function(){const e=(0,c.useHistory)();return(0,i.jsx)("img",{src:D,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),{}),showNavToggle:!0,isNavOpen:o,headerTools:b,onNavToggle:r?()=>{p(!v)}:()=>{s(!o)},"aria-label":g("global_navigation")}),j=(e,t)=>(0,i.jsx)(u.NavItem,Object.assign({id:`${e.label}-${t}`},{children:(0,i.jsx)(c.NavLink,Object.assign({exact:!0,to:e.path,activeClassName:"pf-m-current"},{children:(null==e?void 0:e.label)&&g(e.label)}))}),`${e.label}-${t}`),x=(0,i.jsx)(u.Nav,Object.assign({id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":g("global")},{children:(0,i.jsx)(u.NavList,Object.assign({id:"nav-list-simple"},{children:T.map(((e,t)=>{return e.label&&(e.routes?(n=e,a=t,(0,i.jsx)(u.NavExpandable,Object.assign({id:`${n.label}-${a}`,title:n.label,isActive:n.routes.some((e=>e.path===_.pathname))},{children:n.routes.map(((e,t)=>e.label&&j(e,t)))}),`${n.label}-${a}`)):j(e,t));var n,a}))}))})),f=(0,i.jsx)(u.PageSidebar,{theme:"dark",nav:x,isNavOpen:r?v:o}),k=(0,i.jsx)(u.SkipToContent,Object.assign({href:"#primary-app-container"},{children:g("skip_to_content")}));return(0,i.jsx)(u.Page,Object.assign({mainContainerId:"primary-app-container",role:"main",header:y,sidebar:f,onPageResize:e=>{l(e.mobileView)},skipToContent:k},{children:e}))};let K;s().render((0,i.jsx)((()=>{const[e,t]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{(0,r.__awaiter)(void 0,void 0,void 0,(function*(){K=yield L(),t(!0)}))}),[]),e?(0,i.jsx)(l.BasenameContext.Provider,Object.assign({value:{getBasename:()=>""}},{children:(0,i.jsx)(l.ConfigContext.Provider,Object.assign({value:{kas:{apiBasePath:__BASE_PATH__},ams:{apiBasePath:__BASE_PATH__}}},{children:(0,i.jsxs)(m.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>n.e(3389).then(n.t.bind(n,3389,19)),"create-kafka-instance":()=>n.e(2192).then(n.t.bind(n,12192,19)),kafka:()=>n.e(4309).then(n.t.bind(n,94309,19)),metrics:()=>n.e(4564).then(n.t.bind(n,24530,19)),kasTemporaryFixMe:()=>n.e(6401).then(n.t.bind(n,26401,19))}},debug:!0},{children:[" ",(0,i.jsx)(Q.Provider,Object.assign({value:{keycloak:K,profile:null==K?void 0:K.profile}},{children:(0,i.jsx)(V,{children:(0,i.jsx)(j.uZ,{children:(0,i.jsx)(c.BrowserRouter,{children:(0,i.jsx)(a.Suspense,Object.assign({fallback:(0,i.jsx)(j.yR,{})},{children:(0,i.jsx)(j.tV,{children:(0,i.jsx)(j.bN,{children:(0,i.jsxs)(m.ModalProvider,{children:[(0,i.jsx)(H,{children:(0,i.jsx)(N,{})}),(0,i.jsx)(_.A,{})]})})})}))})})})}))]}))}))})):(0,i.jsx)(j.yR,{})}),{}),document.getElementById("root"))}}]);
//# sourceMappingURL=6226.1dbfb1ee.js.map