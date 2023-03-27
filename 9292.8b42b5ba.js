"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[9292,959],{48090:(e,t,n)=>{n.d(t,{o:()=>c});var i=n(85893),o=n(15847),a=n(90154),s=n(73685),r=n(3433);const c=()=>{const{t:e}=(0,o.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(a.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(r.C0,Object.assign({emptyStateProps:{variant:r.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},{children:(0,i.jsx)((function(){const t=(0,s.useHistory)();return(0,i.jsx)(a.Button,Object.assign({onClick:function(){t.push("/")}},{children:e("return_to_home_page")}))}),{})}))}))}},3433:(e,t,n)=>{n.d(t,{uZ:()=>s,pf:()=>d.p,sw:()=>l,C0:()=>u.C,jU:()=>u.j,tV:()=>m,yR:()=>h,wR:()=>j.w,L5:()=>x.L,bN:()=>_.bN,h0:()=>_.h0});var i=n(85893),o=n(93264),a=n(97644);const s=({children:e})=>{const[t,n]=(0,o.useState)([]),[s,r]=(0,o.useState)([]);(0,o.useEffect)((()=>{const e=s.map((e=>e.key)),n=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,n=setTimeout((()=>c(t)),8e3);return{key:e.id,timeOut:n}}));return r([...s,...n]),()=>s.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,s]);const c=e=>{n((t=>[...t.filter((t=>t.id!==e))])),r((t=>[...t.filter((t=>t.key===e))]))};return(0,i.jsxs)(a.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const i=(new Date).getTime().toString();n([...t,Object.assign(Object.assign({},e),{id:i})])}}},{children:[(0,i.jsx)(l,{alerts:t,onCloseAlert:c}),e]}))};var r=n(87967),c=n(90154);const l=({alerts:e,onCloseAlert:t})=>(0,i.jsx)(c.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:n,variant:o,title:a,description:s,dataTestId:l}=e,d=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,i.jsx)(c.Alert,Object.assign({isLiveRegion:!0,variant:c.AlertVariant[o],variantLabel:"",title:a,actionClose:(0,i.jsx)(c.AlertActionCloseButton,{title:a,onClose:()=>t(n)}),"data-testid":l},d,{children:s}),n)}))}));var d=n(43277),u=n(12973),v=n(73685),p=n(15847);n(4256);class g extends o.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,i.jsx)(c.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(u.C,Object.assign({emptyStateProps:{variant:u.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,i.jsx)(c.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}const m=(0,v.withRouter)((0,p.withTranslation)()(g)),h=({bullseyeProps:e,spinnerProps:t})=>(0,i.jsx)(c.Bullseye,Object.assign({},e,{children:(0,i.jsx)(c.Spinner,Object.assign({},t))}));n(85853);var _=n(16846),j=n(69887),x=n(93697);n(8509)},13449:(e,t,n)=>{n.d(t,{S:()=>a});var i=n(93264);const o=(0,i.createContext)(null),a=()=>(0,i.useContext)(o)},81548:(e,t,n)=>{n.d(t,{gD:()=>a});n(87967),n(85893);var i=n(93264);const o=(0,i.createContext)(void 0),a=()=>{const e=(0,i.useContext)(o);if(void 0===e)throw new Error("must be used inside a InstanceDrawerContext provider");return e}},49626:(e,t,n)=>{n.d(t,{a:()=>c});var i=n(87967),o=n(88601),a=n(93264),s=n(70959),r=n(24584);function c(){const e=(0,o.d)(),{kafkaRequestToKafkaInstance:t}=function(){const e=(0,r.s9)(),t=(0,r.AU)("developer"),n=(0,r.AU)("standard"),o=(0,a.useCallback)((o=>(0,i.__awaiter)(this,void 0,void 0,(function*(){var i;const a=o,{marketplaceSubscriptions:s}=yield e(),r={billing:void 0,connectionRate:0,connections:0,createdAt:a.created_at,egress:0,expiryDate:a.expires_at,id:a.id,ingress:0,maxPartitions:0,messageSize:0,name:a.name,owner:a.owner,plan:a.billing_model,provider:a.cloud_provider,region:a.region,size:"1",status:d(a.status),storage:0,updatedAt:a.updated_at,request:a};try{const e=null===(i=s.find((e=>e.subscriptions.find((e=>e===a.billing_cloud_account_id)))))||void 0===i?void 0:i.marketplace,t="standard"===a.billing_model?"prepaid":e?{marketplace:e,subscription:a.billing_cloud_account_id}:void 0;r.billing=t}catch(e){console.warn("kafkaRequestToKafkaInstance","couldn't retrieve the billing info for",a)}try{const e=("developer"===a.instance_type?yield t(a.cloud_provider,a.region):yield n(a.cloud_provider,a.region)).find((e=>e.id===a.size_id));e&&(r.size=e.displayName,r.ingress=e.ingress,r.egress=e.egress,r.storage=a.max_data_retention_size.bytes,r.connections=e.connections,r.connectionRate=e.connectionRate,r.maxPartitions=e.maxPartitions,r.messageSize=e.messageSize)}catch(e){console.warn("kafkaRequestToKafkaInstance","couldn't retrieve the limits info for",a)}return r}))),[t,e,n]);return{kafkaRequestToKafkaInstance:o}}();return(0,a.useCallback)(((n,o,a,r,c)=>(0,i.__awaiter)(this,void 0,void 0,(function*(){const i=e(),d={name:"name",owner:"owner",provider:"cloud_provider",region:"region",createdAt:"created_at"};try{const{name:e,status:u,owner:v}=a,p=[l("name",e,"%"),l("owner",v,"%"),l("status",u.flatMap((e=>s.SimplifiedStatuses[e])),"=")].filter(Boolean).map((e=>`(${e})`)).join(" and "),g=yield i.getKafkas(n.toString(10),o.toString(10),r?`${d[r]} ${c}`:void 0,p,{cache:!1}),m=g.data.items,h=g.data.total;return{instances:yield Promise.all(m.map(t)),count:h}}catch(e){return{instances:[],count:0}}}))),[e,t])}function l(e,t,n){return t.map((t=>"%"===n?`${e} like %${t.trim()}%`:`${e} = ${t.trim()}`)).join(" or ")}function d(e){return{accepted:"accepted",preparing:"preparing",provisioning:"provisioning",ready:"ready",failed:"degraded",deprovision:"deprovision",deleting:"deleting",suspended:"suspended",suspending:"suspending",resuming:"resuming"}[e]||"degraded"}},82519:(e,t,n)=>{n.d(t,{j:()=>o});var i=n(93264);function o(e){(0,i.useEffect)((()=>{const t=document.title;return document.title=e,()=>{document.title=t}}),[e])}},53269:(e,t,n)=>{n.r(t);var i=n(85893),o=n(93264),a=n(3644),s=n.n(a),r=n(87967),c=n(73685),l=n(97644),d=(n(49901),n(74651),n(99521),n(15202),n(56594),n(94694),n(15847)),u=n(90154),v=n(48090),p=n(82519),g=n(70959),m=n(94622),h=n(35831),_=n(54930);var j=n(59581),x=n(75381),b=n(3433),f=n(5569);const y=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(b.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:f.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})}))},k=({fetchServiceAccounts:e})=>{const{showModal:t}=(0,l.useModal)(),{t:n}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(u.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(b.C0,{emptyStateProps:{variant:b.jU.NoItems},titleProps:{title:n("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:n("serviceAccount.create_service_account_to_get_started")},buttonProps:{title:n("serviceAccount.create_service_account"),onClick:()=>{t(l.ModalType.KasCreateServiceAccount,{onCreate:e})},"data-testid":"emptyStateStreams-buttonCreateServiceAccount"}})}))};var S=n(40227);const A=({onCreateServiceAccount:e})=>{const{t}=(0,d.useTranslation)(["kasTemporaryFixMe"]),n=[{item:(0,i.jsx)(u.Button,Object.assign({variant:"primary",onClick:e,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount",ouiaId:"button-create-account"},{children:t("serviceAccount.create_service_account")}))}];return(0,i.jsx)(b.L5,{toolbarProps:{id:"instance-toolbar",collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:n})};var P=n(5480);const C=({page:e,perPage:t,expectedTotal:n,serviceAccountsDataLoaded:a,serviceAccountItems:s,onResetCredentials:r,onDeleteServiceAccount:c,orderBy:v,setOrderBy:p,onCreateServiceAccount:g})=>{const{t:m}=(0,d.useTranslation)(["kasTemporaryFixMe"]),h=(0,l.useAuth)(),[_,j]=(0,o.useState)(void 0),[f,y]=(0,o.useState)();(0,o.useEffect)((()=>{var e;null===(e=null==h?void 0:h.getUsername())||void 0===e||e.then((e=>j(e)))}),[h]),(0,o.useEffect)((()=>{var e;null===(e=null==h?void 0:h.isOrgAdmin())||void 0===e||e.then((e=>y(e)))}),[h]);const k=[{title:m("common.name")},{title:m("common.clientID")},{title:m("common.owner"),transforms:[(0,S.cellWidth)(20)]},{title:m("time_created")}],C=e=>{if(!a)return[];const t=e.originalData,n=void 0!==_&&t.createdBy===_||void 0!==f&&!0===f;let i={};n||(i={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});const o=[Object.assign(Object.assign({title:m("common.reset_credentials"),id:"reset-credentials","data-testid":"tableServiceAccounts-actionResetCredentials","data-ouia-component-id":"kebab-menu-reset-creds",onClick:e=>n&&((e,t)=>{var n,i,o,a;r&&r(t),null===(a=null===(o=null===(i=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===i?void 0:i.parentElement)||void 0===o?void 0:o.previousSibling)||void 0===a||a.focus()})(e,t)},i),{tooltipProps:{position:"left",content:m("serviceAccount.no_permission_to_reset_service_account")}}),Object.assign(Object.assign({title:m("serviceAccount.delete_service_account"),id:"delete-account","data-testid":"tableServiceAccounts-actionDeleteAccount","data-ouia-component-id":"kebab-menu-delete-sa",onClick:e=>n&&((e,t)=>{var n,i,o,a;c&&c(t),null===(a=null===(o=null===(i=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===i?void 0:i.parentElement)||void 0===o?void 0:o.previousSibling)||void 0===a||a.focus()})(e,t)},i),{tooltipProps:{position:"left",content:m("serviceAccount.no_permission_to_delete_service_account")}})];return o},w=e=>{switch(e.toLowerCase()){case"name":return 0;case"client_id":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A,{onCreateServiceAccount:g}),(0,i.jsx)(b.wR,{tableProps:{cells:k,rows:(()=>{const o=[],r=(0,x.o8)(e,t,n);return a?(null==s||s.forEach((e=>{const{name:t,createdBy:n,clientId:i,createdAt:a}=e,s=(0,P.Z)(new Date(1e3*a),"PPpp");o.push({cells:[t,i,n,{title:(0,x.L0)(s,m("ago"))}],originalData:e})})),o):(0,x.vK)({loadingCount:r,skeleton:(0,i.jsx)(u.Skeleton,{}),length:k.length})})(),"aria-label":m("serviceAccount.service_account_list"),actionResolver:e=>C(e),onSort:(e,t,n)=>{p&&p(`${(e=>{switch(e){case 0:return"name";case 1:return"client_id";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}})(t)} ${n}`)},sortBy:(()=>{const e=(null==v?void 0:v.split(" "))||[];if(e.length>1)return{index:w(e[0]),direction:e[1]===S.SortByDirection.asc?S.SortByDirection.asc:S.SortByDirection.desc}})(),ouiaId:"table"}}),s&&(null==s?void 0:s.length)<1&&a&&(0,i.jsx)(b.C0,{emptyStateProps:{variant:b.jU.NoResult},titleProps:{title:m("no_results_found")},emptyStateBodyProps:{body:m("adjust_your_filters_and_try_again")}})]})},w=({fetchServiceAccounts:e,serviceAccountItems:t})=>{const{showModal:n}=(0,l.useModal)(),{showModal:a}=(0,l.useModal)(),{showModal:s}=(0,l.useModal)(),[r,c]=(0,o.useState)("name asc"),{page:d=1,perPage:v=10}=(0,b.h0)()||{};return(0,i.jsx)(u.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:u.PageSectionVariants.default,padding:{default:"noPadding"},"data-ouia-component-id":"page-ServiceAccounts"},{children:(0,i.jsx)(u.Card,{children:(0,i.jsx)(C,{page:d,perPage:v,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:t,orderBy:r,setOrderBy:c,onResetCredentials:e=>{n(l.ModalType.KasResetServiceAccountCredentials,{serviceAccount:e})},onDeleteServiceAccount:t=>{s(l.ModalType.KasDeleteServiceAccount,{serviceAccount:t,onDelete:e})},onCreateServiceAccount:()=>{a(l.ModalType.KasCreateServiceAccount,{onCreate:e})}})})}))},T=()=>{const e=(0,l.useAuth)(),t=(0,l.useConfig)(),[n,a]=(0,o.useState)(),[s,c]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==e?void 0:e.sas_ui.getToken();if(n&&t)try{const e=new j.ServiceAccountsApi(new j.Configuration({accessToken:n,basePath:null==t?void 0:t.sas_ui.apiBasePath}));yield e.getServiceAccounts(void 0,100).then((e=>{const t=null==e?void 0:e.data,n=null==t?void 0:t.sort(((e,t)=>e.createdAt&&t.createdAt?String(t.createdAt).localeCompare(String(e.createdAt)):-1));a(n)}))}catch(e){e instanceof Error&&(e=>{var t,n;let i;(0,x.G6)(e)&&(i=null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.code),i===x.SM.UNAUTHORIZED_USER&&c(!0)})(e)}}))),[e,t]);return(0,o.useEffect)((()=>{d()}),[d]),s?(0,i.jsx)(y,{}):void 0===n?(0,i.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,i.jsx)(b.yR,{})})):n.length<1?(0,i.jsx)(k,{fetchServiceAccounts:d}):(0,i.jsx)(w,{fetchServiceAccounts:d,serviceAccountItems:n})};n(27081);const O=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},{children:(0,i.jsxs)(u.TextContent,{children:[(0,i.jsxs)(u.Text,Object.assign({component:"h1"},{children:[" ",e("serviceAccount.service_accounts")]})),(0,i.jsx)(u.Text,Object.assign({component:"p"},{children:e("serviceAccount.service_accounts_title_header_info")}))]})})),(0,i.jsx)(T,{})]})},B=[{component:()=>(0,i.jsxs)(g.ModalProvider,{children:[(0,i.jsx)(h.LF,Object.assign({"data-ouia-app-id":"dummy"},{children:(0,i.jsx)(_.R,{preCreateInstance:e=>Promise.resolve(e)})})),(0,i.jsx)(m.A,{})]}),exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:()=>(0,i.jsx)(O,{}),exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"}],R=e=>{var{component:t,title:n}=e,o=(0,r.__rest)(e,["component","title"]);return(0,p.j)(n),(0,i.jsx)(c.Route,{render:function(e){return(0,i.jsx)(t,Object.assign({},o,e))}})},E=({title:e})=>((0,p.j)(e),(0,i.jsx)(c.Route,{component:v.o})),I=B.reduce(((e,t)=>[...e,...t.routes?t.routes:[t]]),[]),M=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsxs)(c.Switch,{children:[I.map((({path:e,exact:t,component:n,title:o,isAsync:a},s)=>(0,i.jsx)(R,{path:e,exact:t,component:n,title:o,isAsync:a},s))),(0,i.jsx)(E,{title:e("404_page_does_not_exist")})]})},N=n.p+"f940137c.svg";var D=n(32385),F=n.n(D);let L;const $=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return L||(yield U()),L})),U=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){try{L=F()(),L&&(yield L.init({onLoad:"login-required"}))}catch(e){L=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication")}})),z=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return yield null==L?void 0:L.updateToken(50),(null==L?void 0:L.token)?L.token:(console.error("No keycloak token available"),"foo")})),K=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return yield null==L?void 0:L.updateToken(50),(null==L?void 0:L.tokenParsed)?L.tokenParsed:(console.error("No keycloak token available"),{})})),V=(0,o.createContext)({keycloak:void 0}),H=e=>{const t={kas:{getToken:z},getUsername:()=>K().then((e=>e.username)),isOrgAdmin:()=>K().then((e=>e.is_org_admin))};return(0,i.jsx)(l.AuthContext.Provider,Object.assign({value:t},{children:e.children}))},q=({children:e})=>{var t,n;const[a,s]=(0,o.useState)(!0),[r,l]=(0,o.useState)(!0),[v,p]=(0,o.useState)(!1),g=(0,o.useContext)(V),m=(0,c.useLocation)(),{t:h}=(0,d.useTranslation)(["kasTemporaryFixMe"]);if(!g.keycloak)return(0,i.jsx)("div",{children:"403 Unauthorized"});if(!g.keycloak.authenticated)return null===(t=g.keycloak)||void 0===t||t.login(),(0,i.jsx)(i.Fragment,{});const _=null===(n=g.keycloak.profile)||void 0===n?void 0:n.email,j=(0,i.jsx)(u.PageHeaderTools,{children:_}),x=(0,i.jsx)(u.PageHeader,{logo:(0,i.jsx)((function(){const e=(0,c.useHistory)();return(0,i.jsx)("img",{src:N,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),{}),showNavToggle:!0,isNavOpen:a,headerTools:j,onNavToggle:r?()=>{p(!v)}:()=>{s(!a)},"aria-label":h("global_navigation")}),b=(e,t)=>(0,i.jsx)(u.NavItem,Object.assign({id:`${e.label}-${t}`},{children:(0,i.jsx)(c.NavLink,Object.assign({exact:!0,to:e.path,activeClassName:"pf-m-current"},{children:(null==e?void 0:e.label)&&h(e.label)}))}),`${e.label}-${t}`),f=(0,i.jsx)(u.Nav,Object.assign({id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":h("global")},{children:(0,i.jsx)(u.NavList,Object.assign({id:"nav-list-simple"},{children:B.map(((e,t)=>{return e.label&&(e.routes?(n=e,o=t,(0,i.jsx)(u.NavExpandable,Object.assign({id:`${n.label}-${o}`,title:n.label,isActive:n.routes.some((e=>e.path===m.pathname))},{children:n.routes.map(((e,t)=>e.label&&b(e,t)))}),`${n.label}-${o}`)):b(e,t));var n,o}))}))})),y=(0,i.jsx)(u.PageSidebar,{theme:"dark",nav:f,isNavOpen:r?v:a}),k=(0,i.jsx)(u.SkipToContent,Object.assign({href:"#primary-app-container"},{children:h("skip_to_content")}));return(0,i.jsx)(u.Page,Object.assign({mainContainerId:"primary-app-container",role:"main",header:x,sidebar:y,onPageResize:e=>{l(e.mobileView)},skipToContent:k},{children:e}))};let Z;s().render((0,i.jsx)((()=>{const[e,t]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{(0,r.__awaiter)(void 0,void 0,void 0,(function*(){Z=yield $(),t(!0)}))}),[]),e?(0,i.jsx)(l.BasenameContext.Provider,Object.assign({value:{getBasename:()=>""}},{children:(0,i.jsx)(l.ConfigContext.Provider,Object.assign({value:{kas:{apiBasePath:__BASE_PATH__},ams:{apiBasePath:__BASE_PATH__}}},{children:(0,i.jsxs)(g.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>n.e(3389).then(n.t.bind(n,3389,19)),"create-kafka-instance":()=>n.e(2192).then(n.t.bind(n,12192,19)),kafka:()=>n.e(4309).then(n.t.bind(n,94309,19)),metrics:()=>n.e(4564).then(n.t.bind(n,24530,19)),kasTemporaryFixMe:()=>n.e(6401).then(n.t.bind(n,26401,19))}},debug:!0},{children:[" ",(0,i.jsx)(V.Provider,Object.assign({value:{keycloak:Z,profile:null==Z?void 0:Z.profile}},{children:(0,i.jsx)(H,{children:(0,i.jsx)(b.uZ,{children:(0,i.jsx)(c.BrowserRouter,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:(0,i.jsx)(b.yR,{})},{children:(0,i.jsx)(b.tV,{children:(0,i.jsx)(b.bN,{children:(0,i.jsxs)(g.ModalProvider,{children:[(0,i.jsx)(q,{children:(0,i.jsx)(M,{})}),(0,i.jsx)(m.A,{})]})})})}))})})})}))]}))}))})):(0,i.jsx)(b.yR,{})}),{}),document.getElementById("root"))}}]);
//# sourceMappingURL=9292.8b42b5ba.js.map