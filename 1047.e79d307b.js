"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1047,1808],{48090:(e,t,n)=>{n.d(t,{o:()=>c});var o=n(85893),i=n(93049),a=n(99922),s=n(68199),r=n(3433);const c=()=>{const{t:e}=(0,i.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(a.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(r.C0,Object.assign({emptyStateProps:{variant:r.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},{children:(0,o.jsx)((function(){const t=(0,s.useHistory)();return(0,o.jsx)(a.Button,Object.assign({onClick:function(){t.push("/")}},{children:e("return_to_home_page")}))}),{})}))}))}},3433:(e,t,n)=>{n.d(t,{uZ:()=>s,pf:()=>d.p,sw:()=>l,C0:()=>u.C,jU:()=>u.j,tV:()=>h,yR:()=>j,wu:()=>m.wu,wR:()=>_.w,L5:()=>x.L,bN:()=>m.bN,h0:()=>m.h0});var o=n(85893),i=n(93264),a=n(5854);const s=({children:e})=>{const[t,n]=(0,i.useState)([]),[s,r]=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=s.map((e=>e.key)),n=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,n=setTimeout((()=>c(t)),8e3);return{key:e.id,timeOut:n}}));return r([...s,...n]),()=>s.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,s]);const c=e=>{n((t=>[...t.filter((t=>t.id!==e))])),r((t=>[...t.filter((t=>t.key===e))]))};return(0,o.jsxs)(a.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const o=(new Date).getTime().toString();n([...t,Object.assign(Object.assign({},e),{id:o})])}}},{children:[(0,o.jsx)(l,{alerts:t,onCloseAlert:c}),e]}))};var r=n(9922),c=n(99922);const l=({alerts:e,onCloseAlert:t})=>(0,o.jsx)(c.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:n,variant:i,title:a,description:s,dataTestId:l}=e,d=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,o.jsx)(c.Alert,Object.assign({isLiveRegion:!0,variant:c.AlertVariant[i],variantLabel:"",title:a,actionClose:(0,o.jsx)(c.AlertActionCloseButton,{title:a,onClose:()=>t(n)}),"data-testid":l},d,{children:s}),n)}))}));var d=n(43277),u=n(12973),v=n(68199),p=n(93049);n(4256);class g extends i.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,o.jsx)(c.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(u.C,Object.assign({emptyStateProps:{variant:u.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,o.jsx)(c.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}const h=(0,v.withRouter)((0,p.withTranslation)()(g)),j=({bullseyeProps:e,spinnerProps:t})=>(0,o.jsx)(c.Bullseye,Object.assign({},e,{children:(0,o.jsx)(c.Spinner,Object.assign({},t))}));n(85853);var m=n(16846),_=n(69887),x=n(93697);n(8509)},13449:(e,t,n)=>{n.d(t,{S:()=>a});var o=n(93264);const i=(0,o.createContext)(void 0),a=()=>(0,o.useContext)(i)},81548:(e,t,n)=>{n.d(t,{gD:()=>a});n(9922),n(85893);var o=n(93264);const i=(0,o.createContext)(void 0),a=()=>{const e=(0,o.useContext)(i);if(void 0===e)throw new Error("must be used inside a InstanceDrawerContext provider");return e}},82519:(e,t,n)=>{n.d(t,{j:()=>i});var o=n(93264);function i(e){(0,o.useEffect)((()=>{const t=document.title;return document.title=e,()=>{document.title=t}}),[e])}},53269:(e,t,n)=>{n.r(t);var o=n(85893),i=n(93264),a=n(3644),s=n.n(a),r=n(9922),c=n(68199),l=n(5854),d=(n(49901),n(74651),n(99521),n(15202),n(56594),n(94694),n(93049)),u=n(99922),v=n(48090),p=n(82519),g=n(1808),h=n(94622),j=n(11228),m=n(24950);var _=n(17118),x=n(75381),b=n(3433),y=n(5569);const f=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(b.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:y.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})}))},k=({fetchServiceAccounts:e})=>{const{showModal:t}=(0,l.useModal)(),{t:n}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(u.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(b.C0,{emptyStateProps:{variant:b.jU.NoItems},titleProps:{title:n("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:n("serviceAccount.create_service_account_to_get_started")},buttonProps:{title:n("serviceAccount.create_service_account"),onClick:()=>{t(l.ModalType.KasCreateServiceAccount,{onCreate:e})},"data-testid":"emptyStateStreams-buttonCreateServiceAccount"}})}))};var S=n(28251);const A=({onCreateServiceAccount:e})=>{const{t}=(0,d.useTranslation)(["kasTemporaryFixMe"]),n=[{item:(0,o.jsx)(u.Button,Object.assign({variant:"primary",onClick:e,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount"},{children:t("serviceAccount.create_service_account")}))}];return(0,o.jsx)(b.L5,{toolbarProps:{id:"instance-toolbar",collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:n})},P=({page:e,perPage:t,expectedTotal:n,serviceAccountsDataLoaded:a,serviceAccountItems:s,onResetCredentials:r,onDeleteServiceAccount:c,orderBy:v,setOrderBy:p,onCreateServiceAccount:g})=>{const{t:h}=(0,d.useTranslation)(["kasTemporaryFixMe"]),j=(0,l.useAuth)(),[m,_]=(0,i.useState)(void 0),[y,f]=(0,i.useState)();(0,i.useEffect)((()=>{var e;null===(e=null==j?void 0:j.getUsername())||void 0===e||e.then((e=>_(e)))}),[j]),(0,i.useEffect)((()=>{var e;null===(e=null==j?void 0:j.isOrgAdmin())||void 0===e||e.then((e=>f(e)))}),[j]);const k=[{title:h("common.name")},{title:h("common.clientID")},{title:h("common.owner"),transforms:[(0,S.cellWidth)(20)]},{title:h("time_created")}],P=e=>{if(!a)return[];const t=e.originalData,n=void 0!==m&&t.created_by===m||void 0!==y&&!0===y;let o={};n||(o={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});const i=[Object.assign(Object.assign({title:h("common.reset_credentials"),id:"reset-credentials","data-testid":"tableServiceAccounts-actionResetCredentials",onClick:e=>n&&((e,t)=>{var n,o,i,a;r&&r(t),null===(a=null===(i=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===i?void 0:i.previousSibling)||void 0===a||a.focus()})(e,t)},o),{tooltipProps:{position:"left",content:h("serviceAccount.no_permission_to_reset_service_account")}}),Object.assign(Object.assign({title:h("serviceAccount.delete_service_account"),id:"delete-account","data-testid":"tableServiceAccounts-actionDeleteAccount",onClick:e=>n&&((e,t)=>{var n,o,i,a;c&&c(t),null===(a=null===(i=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===i?void 0:i.previousSibling)||void 0===a||a.focus()})(e,t)},o),{tooltipProps:{position:"left",content:h("serviceAccount.no_permission_to_delete_service_account")}})];return i},C=e=>{switch(e.toLowerCase()){case"name":return 0;case"client_id":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A,{onCreateServiceAccount:g}),(0,o.jsx)(b.wR,{tableProps:{cells:k,rows:(()=>{const i=[],r=(0,x.o8)(e,t,n);return a?(null==s||s.forEach((e=>{const{name:t,created_by:n,client_id:o,created_at:a}=e;i.push({cells:[t,o,n,{title:(0,x.L0)(a,h("ago"))}],originalData:e})})),i):(0,x.vK)({loadingCount:r,skeleton:(0,o.jsx)(u.Skeleton,{}),length:k.length})})(),"aria-label":h("serviceAccount.service_account_list"),actionResolver:e=>P(e),onSort:(e,t,n)=>{p&&p(`${(e=>{switch(e){case 0:return"name";case 1:return"client_id";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}})(t)} ${n}`)},sortBy:(()=>{const e=(null==v?void 0:v.split(" "))||[];if(e.length>1)return{index:C(e[0]),direction:e[1]===S.SortByDirection.asc?S.SortByDirection.asc:S.SortByDirection.desc}})()}}),s&&(null==s?void 0:s.length)<1&&a&&(0,o.jsx)(b.C0,{emptyStateProps:{variant:b.jU.NoResult},titleProps:{title:h("no_results_found")},emptyStateBodyProps:{body:h("adjust_your_filters_and_try_again")}})]})},C=({fetchServiceAccounts:e,serviceAccountItems:t})=>{const{showModal:n}=(0,l.useModal)(),{showModal:a}=(0,l.useModal)(),{showModal:s}=(0,l.useModal)(),[r,c]=(0,i.useState)("name asc"),{page:d=1,perPage:v=10}=(0,b.h0)()||{};return(0,o.jsx)(u.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:u.PageSectionVariants.default,padding:{default:"noPadding"}},{children:(0,o.jsx)(u.Card,{children:(0,o.jsx)(P,{page:d,perPage:v,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:t,orderBy:r,setOrderBy:c,onResetCredentials:e=>{n(l.ModalType.KasResetServiceAccountCredentials,{serviceAccount:e})},onDeleteServiceAccount:t=>{s(l.ModalType.KasDeleteServiceAccount,{serviceAccount:t,onDelete:e})},onCreateServiceAccount:()=>{a(l.ModalType.KasCreateServiceAccount,{onCreate:e})}})})}))},O=()=>{const e=(0,l.useAuth)(),t=(0,l.useConfig)(),[n,a]=(0,i.useState)(),[s,c]=(0,i.useState)(!1),d=(0,i.useCallback)((()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){var n;const o=yield null==e?void 0:e.kas.getToken();if(o&&t)try{const e=new _.SecurityApi(new _.Configuration({accessToken:o,basePath:null===(n=null==t?void 0:t.ams)||void 0===n?void 0:n.apiBasePath}));yield e.getServiceAccounts().then((e=>{const t=null==e?void 0:e.data,n=(null==t?void 0:t.items)||[],o=null==n?void 0:n.sort(((e,t)=>e.created_at&&t.created_at?t.created_at.localeCompare(e.created_at):-1));a(o)}))}catch(e){e instanceof Error&&(e=>{var t,n;let o;(0,x.G6)(e)&&(o=null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.code),o===x.SM.UNAUTHORIZED_USER&&c(!0)})(e)}}))),[e,t]);return(0,i.useEffect)((()=>{d()}),[d]),s?(0,o.jsx)(f,{}):void 0===n?(0,o.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,o.jsx)(b.yR,{})})):n.length<1?(0,o.jsx)(k,{fetchServiceAccounts:d}):(0,o.jsx)(C,{fetchServiceAccounts:d,serviceAccountItems:n})};n(27081);const T=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},{children:(0,o.jsxs)(u.TextContent,{children:[(0,o.jsxs)(u.Text,Object.assign({component:"h1"},{children:[" ",e("serviceAccount.service_accounts")]})),(0,o.jsx)(u.Text,Object.assign({component:"p"},{children:e("serviceAccount.service_accounts_title_header_info")}))]})})),(0,o.jsx)(O,{})]})},w=[{component:()=>(0,o.jsxs)(g.ModalProvider,{children:[(0,o.jsx)(j.LF,Object.assign({"data-ouia-app-id":"dummy"},{children:(0,o.jsx)(m.V,{preCreateInstance:e=>Promise.resolve(e)})})),(0,o.jsx)(h.A,{})]}),exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:()=>(0,o.jsx)(T,{}),exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"}],B=e=>{var{component:t,title:n}=e,i=(0,r.__rest)(e,["component","title"]);return(0,p.j)(n),(0,o.jsx)(c.Route,{render:function(e){return(0,o.jsx)(t,Object.assign({},i,e))}})},E=({title:e})=>((0,p.j)(e),(0,o.jsx)(c.Route,{component:v.o})),M=w.reduce(((e,t)=>[...e,...t.routes?t.routes:[t]]),[]),N=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsxs)(c.Switch,{children:[M.map((({path:e,exact:t,component:n,title:i,isAsync:a},s)=>(0,o.jsx)(B,{path:e,exact:t,component:n,title:i,isAsync:a},s))),(0,o.jsx)(E,{title:e("404_page_does_not_exist")})]})},F=n.p+"f940137c.svg";var D=n(32385),I=n.n(D);let R;const L=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return R||(yield U()),R})),U=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){try{R=I()(),R&&(yield R.init({onLoad:"login-required"}))}catch(e){R=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication")}})),$=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return yield null==R?void 0:R.updateToken(50),(null==R?void 0:R.token)?R.token:(console.error("No keycloak token available"),"foo")})),V=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return yield null==R?void 0:R.updateToken(50),(null==R?void 0:R.tokenParsed)?R.tokenParsed:(console.error("No keycloak token available"),{})})),H=(0,i.createContext)({keycloak:void 0}),K=e=>{const t={kas:{getToken:$},getUsername:()=>V().then((e=>e.username)),isOrgAdmin:()=>V().then((e=>e.is_org_admin))};return(0,o.jsx)(l.AuthContext.Provider,Object.assign({value:t},{children:e.children}))},z=({children:e})=>{var t,n;const[a,s]=(0,i.useState)(!0),[r,l]=(0,i.useState)(!0),[v,p]=(0,i.useState)(!1),g=(0,i.useContext)(H),h=(0,c.useLocation)(),{t:j}=(0,d.useTranslation)(["kasTemporaryFixMe"]);if(!g.keycloak)return(0,o.jsx)("div",{children:"403 Unauthorized"});if(!g.keycloak.authenticated)return null===(t=g.keycloak)||void 0===t||t.login(),(0,o.jsx)(o.Fragment,{});const m=null===(n=g.keycloak.profile)||void 0===n?void 0:n.email,_=(0,o.jsx)(u.PageHeaderTools,{children:m}),x=(0,o.jsx)(u.PageHeader,{logo:(0,o.jsx)((function(){const e=(0,c.useHistory)();return(0,o.jsx)("img",{src:F,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),{}),showNavToggle:!0,isNavOpen:a,headerTools:_,onNavToggle:r?()=>{p(!v)}:()=>{s(!a)},"aria-label":j("global_navigation")}),b=(e,t)=>(0,o.jsx)(u.NavItem,Object.assign({id:`${e.label}-${t}`},{children:(0,o.jsx)(c.NavLink,Object.assign({exact:!0,to:e.path,activeClassName:"pf-m-current"},{children:(null==e?void 0:e.label)&&j(e.label)}))}),`${e.label}-${t}`),y=(0,o.jsx)(u.Nav,Object.assign({id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":j("global")},{children:(0,o.jsx)(u.NavList,Object.assign({id:"nav-list-simple"},{children:w.map(((e,t)=>{return e.label&&(e.routes?(n=e,i=t,(0,o.jsx)(u.NavExpandable,Object.assign({id:`${n.label}-${i}`,title:n.label,isActive:n.routes.some((e=>e.path===h.pathname))},{children:n.routes.map(((e,t)=>e.label&&b(e,t)))}),`${n.label}-${i}`)):b(e,t));var n,i}))}))})),f=(0,o.jsx)(u.PageSidebar,{theme:"dark",nav:y,isNavOpen:r?v:a}),k=(0,o.jsx)(u.SkipToContent,Object.assign({href:"#primary-app-container"},{children:j("skip_to_content")}));return(0,o.jsx)(u.Page,Object.assign({mainContainerId:"primary-app-container",role:"main",header:x,sidebar:f,onPageResize:e=>{l(e.mobileView)},skipToContent:k},{children:e}))};let Z;s().render((0,o.jsx)((()=>{const[e,t]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{(0,r.__awaiter)(void 0,void 0,void 0,(function*(){Z=yield L(),t(!0)}))}),[]),e?(0,o.jsx)(l.BasenameContext.Provider,Object.assign({value:{getBasename:()=>""}},{children:(0,o.jsx)(l.ConfigContext.Provider,Object.assign({value:{kas:{apiBasePath:__BASE_PATH__},ams:{apiBasePath:__BASE_PATH__}}},{children:(0,o.jsxs)(g.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>n.e(3389).then(n.t.bind(n,3389,19)),"create-kafka-instance":()=>n.e(2192).then(n.t.bind(n,12192,19)),kafka:()=>n.e(4309).then(n.t.bind(n,94309,19)),metrics:()=>n.e(4564).then(n.t.bind(n,24530,19)),kasTemporaryFixMe:()=>n.e(6401).then(n.t.bind(n,26401,19))}},debug:!0},{children:[" ",(0,o.jsx)(H.Provider,Object.assign({value:{keycloak:Z,profile:null==Z?void 0:Z.profile}},{children:(0,o.jsx)(K,{children:(0,o.jsx)(b.uZ,{children:(0,o.jsx)(c.BrowserRouter,{children:(0,o.jsx)(i.Suspense,Object.assign({fallback:(0,o.jsx)(b.yR,{})},{children:(0,o.jsx)(b.tV,{children:(0,o.jsx)(b.bN,{children:(0,o.jsxs)(g.ModalProvider,{children:[(0,o.jsx)(z,{children:(0,o.jsx)(N,{})}),(0,o.jsx)(h.A,{})]})})})}))})})})}))]}))}))})):(0,o.jsx)(b.yR,{})}),{}),document.getElementById("root"))}}]);
