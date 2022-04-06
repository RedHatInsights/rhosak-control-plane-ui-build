"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[2229,4313],{48090:(e,t,n)=>{n.d(t,{o:()=>c});var o=n(85893),i=n(8898),s=n(99421),a=n(68199),r=n(28962);const c=()=>{const{t:e}=(0,i.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(s.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(r.C0,Object.assign({emptyStateProps:{variant:r.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},{children:(0,o.jsx)((function(){const t=(0,a.useHistory)();return(0,o.jsx)(s.Button,Object.assign({onClick:function(){t.push("/")}},{children:e("return_to_home_page")}))}),{})}))}))}},28962:(e,t,n)=>{n.d(t,{uZ:()=>a,pf:()=>d.p,sw:()=>l,D5:()=>m.D,C0:()=>u.C,jU:()=>u.j,tV:()=>h,yR:()=>j,wu:()=>_.wu,wR:()=>x.w,L5:()=>b.L,bN:()=>_.bN,h0:()=>_.h0});var o=n(85893),i=n(75418),s=n(7451);const a=({children:e})=>{const[t,n]=(0,i.useState)([]),[a,r]=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=a.map((e=>e.key)),n=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,n=setTimeout((()=>c(t)),8e3);return{key:e.id,timeOut:n}}));return r([...a,...n]),()=>a.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,a]);const c=e=>{n((t=>[...t.filter((t=>t.id!==e))])),r((t=>[...t.filter((t=>t.key===e))]))};return(0,o.jsxs)(s.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const o=(new Date).getTime().toString();n([...t,Object.assign(Object.assign({},e),{id:o})])}}},{children:[(0,o.jsx)(l,{alerts:t,onCloseAlert:c}),e]}))};var r=n(223),c=n(99421);const l=({alerts:e,onCloseAlert:t})=>(0,o.jsx)(c.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:n,variant:i,title:s,description:a,dataTestId:l}=e,d=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,o.jsx)(c.Alert,Object.assign({isLiveRegion:!0,variant:c.AlertVariant[i],variantLabel:"",title:s,actionClose:(0,o.jsx)(c.AlertActionCloseButton,{title:s,onClose:()=>t(n)}),"data-testid":l},d,{children:a}),n)}))}));var d=n(43277),u=n(12973),v=n(68199),p=n(8898);n(4256);class g extends i.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,o.jsx)(c.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(u.C,Object.assign({emptyStateProps:{variant:u.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,o.jsx)(c.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}const h=(0,v.withRouter)((0,p.withTranslation)()(g)),j=({bullseyeProps:e,spinnerProps:t})=>(0,o.jsx)(c.Bullseye,Object.assign({},e,{children:(0,o.jsx)(c.Spinner,Object.assign({},t))}));var m=n(87842),_=n(16846),x=n(69887),b=n(93697);n(8509)},13449:(e,t,n)=>{n.d(t,{S:()=>s});var o=n(75418);const i=(0,o.createContext)(void 0),s=()=>(0,o.useContext)(i)},82519:(e,t,n)=>{n.d(t,{j:()=>i});var o=n(75418);function i(e){(0,o.useEffect)((()=>{const t=document.title;return document.title=e,()=>{document.title=t}}),[e])}},53269:(e,t,n)=>{n.r(t);var o=n(85893),i=n(75418),s=n(66235),a=n.n(s),r=n(223),c=n(68199),l=n(7451),d=(n(49901),n(74651),n(99521),n(15202),n(56594),n(94694),n(8898)),u=n(99421),v=n(48090),p=n(82519),g=n(14313),h=n(94622),j=n(81548),m=n(48635),_=n(53443);var x=n(4734),b=n(75381),y=n(28962),f=n(5569);const k=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(y.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:f.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})}))},S=({fetchServiceAccounts:e})=>{const{showModal:t}=(0,l.useModal)(),{t:n}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsx)(u.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,o.jsx)(y.C0,{emptyStateProps:{variant:y.jU.NoItems},titleProps:{title:n("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:n("serviceAccount.create_service_account_to_get_started")},buttonProps:{title:n("serviceAccount.create_service_account"),onClick:()=>{t(l.ModalType.KasCreateServiceAccount,{onCreate:e})},"data-testid":"emptyStateStreams-buttonCreateServiceAccount"}})}))};var P=n(57294);const A=({onCreateServiceAccount:e})=>{const{t}=(0,d.useTranslation)(["kasTemporaryFixMe"]),n=[{item:(0,o.jsx)(u.Button,Object.assign({variant:"primary",onClick:e,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount"},{children:t("serviceAccount.create_service_account")}))}];return(0,o.jsx)(y.L5,{toolbarProps:{id:"instance-toolbar",collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:n})},C=({page:e,perPage:t,expectedTotal:n,serviceAccountsDataLoaded:s,serviceAccountItems:a,onResetCredentials:r,onDeleteServiceAccount:c,orderBy:v,setOrderBy:p,onCreateServiceAccount:g})=>{const{t:h}=(0,d.useTranslation)(["kasTemporaryFixMe"]),j=(0,l.useAuth)(),[m,_]=(0,i.useState)(void 0),[x,f]=(0,i.useState)();(0,i.useEffect)((()=>{var e;null===(e=null==j?void 0:j.getUsername())||void 0===e||e.then((e=>_(e)))}),[j]),(0,i.useEffect)((()=>{var e;null===(e=null==j?void 0:j.isOrgAdmin())||void 0===e||e.then((e=>f(e)))}),[j]);const k=[{title:h("common.name")},{title:h("common.clientID")},{title:h("common.owner"),transforms:[(0,P.cellWidth)(20)]},{title:h("time_created")}],S=e=>{if(!s)return[];const t=e.originalData,n=t.owner===m||x;let o={};n||(o={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});const i=[Object.assign(Object.assign({title:h("common.reset_credentials"),id:"reset-credentials","data-testid":"tableServiceAccounts-actionResetCredentials",onClick:e=>n&&((e,t)=>{var n,o,i,s;r&&r(t),null===(s=null===(i=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===i?void 0:i.previousSibling)||void 0===s||s.focus()})(e,t)},o),{tooltipProps:{position:"left",content:h("serviceAccount.no_permission_to_reset_service_account")}}),Object.assign(Object.assign({title:h("serviceAccount.delete_service_account"),id:"delete-account","data-testid":"tableServiceAccounts-actionDeleteAccount",onClick:e=>n&&((e,t)=>{var n,o,i,s;c&&c(t),null===(s=null===(i=null===(o=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===i?void 0:i.previousSibling)||void 0===s||s.focus()})(e,t)},o),{tooltipProps:{position:"left",content:h("serviceAccount.no_permission_to_delete_service_account")}})];return i},C=e=>{switch(e.toLowerCase()){case"name":return 0;case"client_id":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A,{onCreateServiceAccount:g}),(0,o.jsx)(y.wR,{tableProps:{cells:k,rows:(()=>{const i=[],r=(0,b.o8)(e,t,n);return s?(null==a||a.forEach((e=>{const{name:t,owner:n,client_id:o,created_at:s}=e;i.push({cells:[t,o,n,{title:(0,b.L0)(s,h("ago"))}],originalData:e})})),i):(0,b.vK)({loadingCount:r,skeleton:(0,o.jsx)(u.Skeleton,{}),length:k.length})})(),"aria-label":h("serviceAccount.service_account_list"),actionResolver:e=>S(e),onSort:(e,t,n)=>{p&&p(`${(e=>{switch(e){case 0:return"name";case 1:return"client_id";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}})(t)} ${n}`)},sortBy:(()=>{const e=(null==v?void 0:v.split(" "))||[];if(e.length>1)return{index:C(e[0]),direction:e[1]===P.SortByDirection.asc?P.SortByDirection.asc:P.SortByDirection.desc}})()}}),a&&(null==a?void 0:a.length)<1&&s&&(0,o.jsx)(y.C0,{emptyStateProps:{variant:y.jU.NoResult},titleProps:{title:h("no_results_found")},emptyStateBodyProps:{body:h("adjust_your_filters_and_try_again")}})]})},O=({fetchServiceAccounts:e,serviceAccountItems:t})=>{const{showModal:n}=(0,l.useModal)(),{showModal:s}=(0,l.useModal)(),{showModal:a}=(0,l.useModal)(),[r,c]=(0,i.useState)("name asc"),{page:d=1,perPage:v=10}=(0,y.h0)()||{};return(0,o.jsx)(u.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:u.PageSectionVariants.default,padding:{default:"noPadding"}},{children:(0,o.jsx)(u.Card,{children:(0,o.jsx)(C,{page:d,perPage:v,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:t,orderBy:r,setOrderBy:c,onResetCredentials:e=>{n(l.ModalType.KasResetServiceAccountCredentials,{serviceAccount:e})},onDeleteServiceAccount:t=>{a(l.ModalType.KasDeleteServiceAccount,{serviceAccount:t,onDelete:e})},onCreateServiceAccount:()=>{s(l.ModalType.KasCreateServiceAccount,{onCreate:e})}})})}))},T=()=>{const e=(0,l.useAuth)(),t=(0,l.useConfig)(),[n,s]=(0,i.useState)(),[a,c]=(0,i.useState)(!1),d=(0,i.useCallback)((()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){var n;const o=yield null==e?void 0:e.kas.getToken();if(o&&t)try{const e=new x.SecurityApi(new x.Configuration({accessToken:o,basePath:null===(n=null==t?void 0:t.ams)||void 0===n?void 0:n.apiBasePath}));yield e.getServiceAccounts().then((e=>{const t=null==e?void 0:e.data,n=(null==t?void 0:t.items)||[],o=null==n?void 0:n.sort(((e,t)=>e.created_at&&t.created_at?t.created_at.localeCompare(e.created_at):-1));s(o)}))}catch(e){e instanceof Error&&(e=>{var t,n;let o;(0,b.G6)(e)&&(o=null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.code),o===b.SM.UNAUTHORIZED_USER&&c(!0)})(e)}}))),[e,t]);return(0,i.useEffect)((()=>{d()}),[d]),a?(0,o.jsx)(k,{}):void 0===n?(0,o.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,o.jsx)(y.yR,{})})):n.length<1?(0,o.jsx)(S,{fetchServiceAccounts:d}):(0,o.jsx)(O,{fetchServiceAccounts:d,serviceAccountItems:n})};n(27081);const w=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.PageSection,Object.assign({variant:u.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},{children:(0,o.jsxs)(u.TextContent,{children:[(0,o.jsxs)(u.Text,Object.assign({component:"h1"},{children:[" ",e("serviceAccount.service_accounts")]})),(0,o.jsx)(u.Text,Object.assign({component:"p"},{children:e("serviceAccount.service_accounts_title_header_info")}))]})})),(0,o.jsx)(T,{})]})},B=[{component:()=>(0,o.jsx)(g.ModalProvider,{children:(0,o.jsxs)(j.e0,{children:[(0,o.jsx)(m.LF,Object.assign({tokenEndPointUrl:"fake-token-url"},{children:(0,o.jsx)(_.V,{preCreateInstance:e=>Promise.resolve(e)})})),(0,o.jsx)(h.A,{})]})}),exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:()=>(0,o.jsx)(w,{}),exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"}],E=e=>{var{component:t,title:n}=e,i=(0,r.__rest)(e,["component","title"]);return(0,p.j)(n),(0,o.jsx)(c.Route,{render:function(e){return(0,o.jsx)(t,Object.assign({},i,e))}})},M=({title:e})=>((0,p.j)(e),(0,o.jsx)(c.Route,{component:v.o})),N=B.reduce(((e,t)=>[...e,...t.routes?t.routes:[t]]),[]),F=()=>{const{t:e}=(0,d.useTranslation)(["kasTemporaryFixMe"]);return(0,o.jsxs)(c.Switch,{children:[N.map((({path:e,exact:t,component:n,title:i,isAsync:s},a)=>(0,o.jsx)(E,{path:e,exact:t,component:n,title:i,isAsync:s},a))),(0,o.jsx)(M,{title:e("404_page_does_not_exist")})]})},D=n.p+"f940137c.svg";var R=n(32385),I=n.n(R);let L;const U=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return L||(yield $()),L})),$=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){try{L=I()(),L&&(yield L.init({onLoad:"login-required"}))}catch(e){L=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication")}})),V=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return yield null==L?void 0:L.updateToken(50),(null==L?void 0:L.token)?L.token:(console.error("No keycloak token available"),"foo")})),H=()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return yield null==L?void 0:L.updateToken(50),(null==L?void 0:L.tokenParsed)?L.tokenParsed:(console.error("No keycloak token available"),{})})),K=(0,i.createContext)({keycloak:void 0}),z=e=>{const t={kas:{getToken:V},getUsername:()=>H().then((e=>e.username)),isOrgAdmin:()=>H().then((e=>e.is_org_admin))};return(0,o.jsx)(l.AuthContext.Provider,Object.assign({value:t},{children:e.children}))},Z=({children:e})=>{var t,n;const[s,a]=(0,i.useState)(!0),[r,l]=(0,i.useState)(!0),[v,p]=(0,i.useState)(!1),g=(0,i.useContext)(K),h=(0,c.useLocation)(),{t:j}=(0,d.useTranslation)(["kasTemporaryFixMe"]);if(!g.keycloak)return(0,o.jsx)("div",{children:"403 Unauthorized"});if(!g.keycloak.authenticated)return null===(t=g.keycloak)||void 0===t||t.login(),(0,o.jsx)(o.Fragment,{});const m=null===(n=g.keycloak.profile)||void 0===n?void 0:n.email,_=(0,o.jsx)(u.PageHeaderTools,{children:m}),x=(0,o.jsx)(u.PageHeader,{logo:(0,o.jsx)((function(){const e=(0,c.useHistory)();return(0,o.jsx)("img",{src:D,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),{}),showNavToggle:!0,isNavOpen:s,headerTools:_,onNavToggle:r?()=>{p(!v)}:()=>{a(!s)},"aria-label":j("global_navigation")}),b=(e,t)=>(0,o.jsx)(u.NavItem,Object.assign({id:`${e.label}-${t}`},{children:(0,o.jsx)(c.NavLink,Object.assign({exact:!0,to:e.path,activeClassName:"pf-m-current"},{children:(null==e?void 0:e.label)&&j(e.label)}))}),`${e.label}-${t}`),y=(0,o.jsx)(u.Nav,Object.assign({id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":j("global")},{children:(0,o.jsx)(u.NavList,Object.assign({id:"nav-list-simple"},{children:B.map(((e,t)=>{return e.label&&(e.routes?(n=e,i=t,(0,o.jsx)(u.NavExpandable,Object.assign({id:`${n.label}-${i}`,title:n.label,isActive:n.routes.some((e=>e.path===h.pathname))},{children:n.routes.map(((e,t)=>e.label&&b(e,t)))}),`${n.label}-${i}`)):b(e,t));var n,i}))}))})),f=(0,o.jsx)(u.PageSidebar,{theme:"dark",nav:y,isNavOpen:r?v:s}),k=(0,o.jsx)(u.SkipToContent,Object.assign({href:"#primary-app-container"},{children:j("skip_to_content")}));return(0,o.jsx)(u.Page,Object.assign({mainContainerId:"primary-app-container",role:"main",header:x,sidebar:f,onPageResize:e=>{l(e.mobileView)},skipToContent:k},{children:e}))};let G;a().render((0,o.jsx)((()=>{const[e,t]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{(0,r.__awaiter)(void 0,void 0,void 0,(function*(){G=yield U(),t(!0)}))}),[]),e?(0,o.jsx)(l.BasenameContext.Provider,Object.assign({value:{getBasename:()=>""}},{children:(0,o.jsx)(l.ConfigContext.Provider,Object.assign({value:{kas:{apiBasePath:__BASE_PATH__},ams:{apiBasePath:__BASE_PATH__}}},{children:(0,o.jsxs)(g.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>n.e(3389).then(n.t.bind(n,3389,19)),"create-kafka-instance":()=>n.e(2192).then(n.t.bind(n,12192,19)),kafka:()=>n.e(4309).then(n.t.bind(n,94309,19)),metrics:()=>n.e(4564).then(n.t.bind(n,24530,19)),kasTemporaryFixMe:()=>n.e(6401).then(n.t.bind(n,26401,19))}},debug:!0},{children:[" ",(0,o.jsx)(K.Provider,Object.assign({value:{keycloak:G,profile:null==G?void 0:G.profile}},{children:(0,o.jsx)(z,{children:(0,o.jsx)(y.uZ,{children:(0,o.jsx)(c.BrowserRouter,{children:(0,o.jsx)(i.Suspense,Object.assign({fallback:(0,o.jsx)(y.yR,{})},{children:(0,o.jsx)(y.tV,{children:(0,o.jsx)(y.bN,{children:(0,o.jsxs)(g.ModalProvider,{children:[(0,o.jsx)(Z,{children:(0,o.jsx)(F,{})}),(0,o.jsx)(h.A,{})]})})})}))})})})}))]}))}))})):(0,o.jsx)(y.yR,{})}),{}),document.getElementById("root"))}}]);
//# sourceMappingURL=2229.a5b0625a.js.map