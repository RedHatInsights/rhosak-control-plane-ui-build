(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[7684],{99229:(e,t,n)=>{"use strict";n.d(t,{u:()=>c});var a=n(70655),r=n(48121),i=n.n(r),o=n(45024),l=n(46748),c=function(e){var t=e.children,n=(0,r.useState)([]),c=n[0],s=n[1],u=(0,r.useState)([]),d=u[0],m=u[1];(0,r.useEffect)((function(){var e=d.map((function(e){return e.key})),t=c.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,a=setTimeout((function(){return p(n)}),8e3);return{key:e.id,timeOut:a}}));return m((0,a.__spreadArray)((0,a.__spreadArray)([],d),t)),function(){return d.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[c]);var p=function(e){s((function(t){return(0,a.__spreadArray)([],t.filter((function(t){return t.id!==e})))})),m((function(t){return(0,a.__spreadArray)([],t.filter((function(t){return t.key===e})))}))};return i().createElement(l.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();s((0,a.__spreadArray)((0,a.__spreadArray)([],c),[(0,a.__assign)((0,a.__assign)({},e),{id:t})]))}}},i().createElement(o.sw,{alerts:c,onCloseAlert:p}),t)}},48090:(e,t,n)=>{"use strict";n.d(t,{o:()=>s});var a=n(48121),r=n.n(a),i=n(38936),o=n(58788),l=n(76007),c=n(45024),s=function(){var e=(0,i.useTranslation)().t;return r().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},r().createElement(c.C0,{emptyStateProps:{variant:c.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},r().createElement((function(){var t=(0,l.useHistory)();return r().createElement(o.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},79630:(e,t,n)=>{"use strict";n.d(t,{Ny:()=>a.Ny,OU:()=>a.OU,QK:()=>a.QK});var a=n(23038)},45024:(e,t,n)=>{"use strict";n.d(t,{sw:()=>c,a$:()=>C.a,AX:()=>s.A,C0:()=>_,jU:()=>a,tV:()=>k,LW:()=>A.L,yR:()=>b.y,wu:()=>S.w,wR:()=>w.w,L5:()=>P.L,Ny:()=>N.Ny,QK:()=>N.QK});n(99229);var a,r=n(70655),i=n(48121),o=n.n(i),l=n(58788),c=function(e){var t=e.alerts,n=e.onCloseAlert;return o().createElement(l.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,a=e.variant,i=e.title,c=e.description,s=e.dataTestId,u=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return o().createElement(l.Alert,(0,r.__assign)({key:t,isLiveRegion:!0,variant:l.AlertVariant[a],variantLabel:"",title:i,actionClose:o().createElement(l.AlertActionCloseButton,{title:i,onClose:function(){return n(t)}}),"data-testid":s},u),c)})))},s=n(71322),u=n(20777),d=n(34558),m=n(5569),p=n(71070),v=n(84564),f=n(65131),g=n(63651);n(64514);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(a||(a={}));var _=function(e){var t=e.titleProps,n=e.buttonProps,i=e.emptyStateIconProps,c=e.emptyStateProps,s=e.emptyStateBodyProps,_=e.children,h=n||{},E=h.variant,y=void 0===E?l.ButtonVariant.primary:E,k=h.onClick,b=(0,r.__rest)(h,["variant","onClick"]),S=t||{},w=S.title,P=(0,r.__rest)(S,["title"]),A=s||{},C=A.body,N=(0,r.__rest)(A,["body"]),T=c||{},x=T.variant,I=void 0===x?a.GettingStarted:x,L=T.className,R=(0,r.__rest)(T,["variant","className"]),z=function(){return o().createElement("img",{src:f.Z,alt:"Not found page",width:"128px"})},D=function(){var e={};switch(I){case a.GettingStarted:e={variant:l.EmptyStateVariant.xl,icon:d.ZP,titleSize:l.TitleSizes["4xl"],headingLevel:"h1"};break;case a.NoAccess:e={variant:l.EmptyStateVariant.large,icon:m.ZP,titleSize:l.TitleSizes.xl,headingLevel:"h2"};break;case a.NoItems:e={variant:l.EmptyStateVariant.large,icon:u.ZP,titleSize:l.TitleSizes.xl,headingLevel:"h2"};break;case a.NoResult:e={variant:l.EmptyStateVariant.large,icon:p.ZP,titleSize:l.TitleSizes.lg,headingLevel:"h2"};break;case a.UnexpectedError:e={variant:l.EmptyStateVariant.full,icon:v.ZP,titleSize:l.TitleSizes.lg,headingLevel:"h1"};break;case a.PageNotFound:e={variant:l.EmptyStateVariant.full,icon:z,titleSize:l.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:I||l.EmptyStateVariant.full,icon:null==i?void 0:i.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),U=D.variant,B=D.icon,V=D.titleSize,O=D.headingLevel;return o().createElement(l.EmptyState,(0,r.__assign)({variant:U,className:(0,g.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",L)},R),o().createElement(l.EmptyStateIcon,(0,r.__assign)({icon:B},i)),w&&o().createElement(l.Title,(0,r.__assign)({headingLevel:O,size:V},P),w),C&&o().createElement(l.EmptyStateBody,(0,r.__assign)({},N),C),(null==n?void 0:n.title)&&o().createElement(l.Button,(0,r.__assign)({variant:y,onClick:k},b),null==n?void 0:n.title),_)},h=n(76007),E=n(38936),y=(n(4256),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,r.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?o().createElement(l.PageSection,{padding:{default:"noPadding"},isFilled:!0},o().createElement(_,{emptyStateProps:{variant:a.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},o().createElement(l.Button,{onClick:this.onClickButton},e("go_to_kafka_instances")))):this.props.children},t}(i.Component)),k=(0,h.withRouter)((0,E.withTranslation)()(y)),b=n(63477),S=(n(29675),n(16846)),w=n(69887),P=n(93697),A=(n(8509),n(96034)),C=n(47394),N=n(79630)},82519:(e,t,n)=>{"use strict";n.d(t,{j:()=>r});var a=n(48121);function r(e){a.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},52648:(e,t,n)=>{"use strict";n.d(t,{mh:()=>i,bv:()=>o,Bh:()=>c,hm:()=>l,Od:()=>a,JB:()=>s,pf:()=>u,md:()=>p,o8:()=>v,Nw:()=>d,lt:()=>m,E7:()=>f,L0:()=>g,wx:()=>_,Qw:()=>h,vK:()=>E});var a,r=n(94683);function i(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(a||(a={}));var o=[{value:"aws",label:"Amazon Web Services"}],l=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],c=[{value:"us-east-1",label:"US East, N. Virginia"}],s=32,u=10,d=50,m=255,p=5e3,v=function(e,t,n){var a=t;n&&n>0&&(e===(n%t!=0?Math.floor(n/t)+1:Math.floor(n/t))&&(a=n>t?n%t==0?t:n%t:n));return 0!==a?a:t},f=function(e,t,n){void 0===n&&(n="asc");return null==e?void 0:e.sort((function(e,a){if(!Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(a,t))return 0;var r="string"==typeof e[t]?e[t].toUpperCase():e[t],i="string"==typeof a[t]?a[t].toUpperCase():a[t],o=0;return r>i?o=1:r<i&&(o=-1),"desc"===n?-1*o:o}))},g=function(e,t){return e="string"==typeof e?new Date(e):e,(0,r.formatDistance)(e,new Date)+" "+t},_=function(){return document.querySelector("#qs-content")||document.body},h=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},E=function(e){for(var t=e.loadingCount,n=e.skeleton,a=e.length,r=[],i=[],o=0;o<a;o++)i.push({title:n});for(o=0;o<t;o++)r.push({cells:i});return r}},81115:(e,t,n)=>{"use strict";n.r(t);var a=n(48121),r=n.n(a),i=n(61568),o=n.n(i),l=n(70655),c=n(38936),s=n(76007),u=n(46748),d=(n(74651),n(99521),n(15202),n(56594),n(94694),n(58788)),m=n(52648),p=n(48090),v=n(82519),f=n(19581),g=n(33097),_=n(75381),h=n(45024),E=n(82904),y=n(26992),k=n(5569),b=function(){var e=(0,c.useTranslation)().t,t=(0,u.useAlert)().addAlert,n=(0,h.QK)().showModal,i=(0,s.useLocation)(),o=new URLSearchParams(i.search),m=parseInt(o.get("page")||"",10)||1,p=parseInt(o.get("perPage")||"",10)||10,v=o.has("user-testing"),f=(0,u.useAuth)(),g=(0,u.useConfig)().kas.apiBasePath,b=(0,a.useState)(),S=(b[0],b[1]),w=(0,a.useState)(),P=w[0],A=w[1],C=(0,a.useState)(!1),N=C[0],T=C[1],x=(0,a.useState)("name asc"),I=x[0],L=x[1],R=(0,a.useState)("name"),z=R[0],D=R[1],U=(0,a.useState)([]),B=U[0],V=U[1],O=(0,a.useState)(!1),F=O[0],j=O[1],G=function(){return(0,l.__awaiter)(void 0,void 0,void 0,(function(){var n;return(0,l.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==f?void 0:f.kas.getToken()];case 1:if(!(n=a.sent()))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new E.SecurityApi(new E.Configuration({accessToken:n,basePath:g})).getServiceAccounts().then((function(e){var t=null==e?void 0:e.data,n=(null==t?void 0:t.items)||[],a=null==n?void 0:n.length;S(t);var r=(0,_.E7)(n,"name","asc");A(r),j(!a||a<1)}))];case 3:return a.sent(),[3,5];case 4:return function(n){var a,r,i,o,l;(0,_.G6)(n)&&(o=null===(a=n.response)||void 0===a?void 0:a.data.reason,l=null===(i=null===(r=n.response)||void 0===r?void 0:r.data)||void 0===i?void 0:i.code),l===_.SM.UNAUTHORIZED_USER?T(!0):t({variant:d.AlertVariant.danger,title:e("common.something_went_wrong"),description:o})}(a.sent()),[3,5];case 5:return[2]}}))}))};(0,a.useEffect)((function(){G()}),[]);var H=function(e){n(h.Ny.RESET_CREDENTIALS,{serviceAccountToReset:e})},M=function(){n(h.Ny.CREATE_SERVICE_ACCOUNT,{fetchServiceAccounts:G})},K=function(e){n(h.Ny.DELETE_SERVICE_ACCOUNT,{serviceAccountToDelete:e,fetchServiceAccounts:G})};return N?r().createElement(d.PageSection,{variant:d.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},r().createElement(h.C0,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateIconProps:{icon:k.ZP},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}})):r().createElement(r().Fragment,null,r().createElement(d.PageSection,{variant:d.PageSectionVariants.light},r().createElement(d.TextContent,null,r().createElement(d.Text,{component:"h1"}," ",e("serviceAccount.service_accounts")),r().createElement(d.Text,{component:"p"},e("serviceAccount.service_accounts_title_header_info")))),function(){var t;return void 0===P?r().createElement(d.PageSection,{variant:d.PageSectionVariants.light,padding:{default:"noPadding"}},r().createElement(h.yR,null)):F?r().createElement(d.PageSection,{padding:{default:"noPadding"},isFilled:!0},r().createElement(h.C0,{emptyStateProps:{variant:h.jU.NoItems},titleProps:{title:e("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:e("serviceAccount.create_service_account_to_get_started")},buttonProps:(t={title:e("serviceAccount.create_service_account"),onClick:M},t["data-testid"]="emptyStateStreams-buttonCreateServiceAccount",t)})):r().createElement(d.PageSection,{className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:d.PageSectionVariants.default,padding:{default:"noPadding"}},r().createElement(d.Card,null,r().createElement(y.s,{page:m,perPage:p,total:1,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:P,orderBy:I,setOrderBy:L,filterSelected:z,setFilterSelected:D,filteredValue:B,setFilteredValue:V,onResetCredentials:H,onDeleteServiceAccount:K,handleCreateModal:M,mainToggle:v})))}())},S=n(25948),w=n.n(S),P=n(16486),A=n.n(P),C=n(13885),N=n.n(C),T=n(32578),x=n.n(T),I=n(97012),L=n.n(I);n(76831);var R,z=n(49304),D=n(66151),U=function(e){var t=e.kafkaId,n=(0,a.useState)(!1),i=n[0],o=n[1],l=t||"1vca460i43rGHzPBsFhERrw7L9P",s=(0,c.useTranslation)().t;return r().createElement(d.PageSection,null,i?r().createElement(D.g,{title:s("metrics.empty_state_no_data_title"),body:s("metrics.empty_state_no_data_body"),noData:!0}):r().createElement(d.Grid,{hasGutter:!0},r().createElement(d.GridItem,null,r().createElement(z.iG,{kafkaID:l,metricsDataUnavailable:i,setMetricsDataUnavailable:o})),r().createElement(d.GridItem,null,r().createElement(z.jo,{metricsDataUnavailable:i,setMetricsDataUnavailable:o,kafkaID:l}))))},B=n(99229),V=[{component:function(){var e=(0,s.useHistory)();return r().createElement(g.L,{onConnectToRoute:function(t,n){e.push("/"+n)},getConnectToRoutePath:function(t,n){return e.createHref({pathname:"/"+n})},preCreateInstance:function(e){return Promise.resolve(e)},createDialogOpen:function(){return!1},tokenEndPointUrl:"fake-token-url"})},exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:function(){return r().createElement(b,null)},exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"},{component:function(){return r().createElement(u.ConfigContext.Provider,{value:{kas:{apiBasePath:__BASE_PATH__}}},r().createElement(B.u,null,r().createElement(U,null)))},exact:!0,label:"Metrics",path:"/metrics",title:"Metrics"}],O=function(e){var t=e.component,n=e.isAsync,r=void 0!==n&&n,i=e.title,o=(0,l.__rest)(e,["component","isAsync","title"]);return function(e){var t=(0,f.useLastLocation)();a.useEffect((function(){return e||null===t||(R=(0,m.mh)()),function(){window.clearTimeout(R)}}),[e,t])}(r),(0,v.j)(i),a.createElement(s.Route,{render:function(e){return a.createElement(t,(0,l.__assign)({},o,e))}})},F=function(e){var t=e.title;return(0,v.j)(t),a.createElement(s.Route,{component:p.o})},j=V.reduce((function(e,t){return(0,l.__spreadArray)((0,l.__spreadArray)([],e),t.routes?t.routes:[t])}),[]),G=function(){var e=(0,c.useTranslation)().t;return a.createElement(f.LastLocationProvider,null,a.createElement(s.Switch,null,j.map((function(e,t){var n=e.path,r=e.exact,i=e.component,o=e.title,l=e.isAsync;return a.createElement(O,{path:n,exact:r,component:i,key:t,title:o,isAsync:l})})),a.createElement(F,{title:e("404_page_does_not_exist")})))};const H=n.p+"f940137c.svg";var M,K,q=n(86235),Z=n.n(q),Q=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return M?[3,2]:[4,W()];case 1:e.sent(),e.label=2;case 2:return[2,M]}}))}))},W=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(M=Z()())?[4,M.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),M=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},J=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==M?void 0:M.updateToken(50)];case 1:return e.sent(),(null==M?void 0:M.token)?[2,M.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},X=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==M?void 0:M.updateToken(50)];case 1:return e.sent(),(null==M?void 0:M.tokenParsed)?[2,M.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))}))},Y=r().createContext({keycloak:void 0}),$=function(e){var t={kas:{getToken:J},getUsername:function(){return X().then((function(e){return e.username}))},isOrgAdmin:function(){return X().then((function(e){return e.is_org_admin}))}};return r().createElement(u.AuthContext.Provider,{value:t},e.children)},ee=function(e){var t,n=e.children,r=a.useState(!0),i=r[0],o=r[1],l=a.useState(!0),u=l[0],m=l[1],p=a.useState(!1),v=p[0],f=p[1],g=a.useContext(Y),_=(0,s.useLocation)(),h=(0,c.useTranslation)().t;if(!g.keycloak)return a.createElement("div",null,"403 Unauthorized");if(!g.keycloak.authenticated)return null===(t=g.keycloak)||void 0===t||t.login(),a.createElement(a.Fragment,null);var E=g.keycloak.tokenParsed&&g.keycloak.tokenParsed.email,y=a.createElement(d.PageHeaderTools,null,E),k=a.createElement(d.PageHeader,{logo:a.createElement((function(){var e=(0,s.useHistory)();return a.createElement("img",{src:H,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:i,headerTools:y,onNavToggle:u?function(){f(!v)}:function(){o(!i)},"aria-label":h("global_navigation")}),b=function(e,t){return a.createElement(d.NavItem,{key:e.label+"-"+t,id:e.label+"-"+t},a.createElement(s.NavLink,{exact:!0,to:e.path,activeClassName:"pf-m-current"},(null==e?void 0:e.label)&&h(e.label)))},S=a.createElement(d.Nav,{id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":h("global")},a.createElement(d.NavList,{id:"nav-list-simple"},V.map((function(e,t){return e.label&&(e.routes?(n=e,r=t,a.createElement(d.NavExpandable,{key:n.label+"-"+r,id:n.label+"-"+r,title:n.label,isActive:n.routes.some((function(e){return e.path===_.pathname}))},n.routes.map((function(e,t){return e.label&&b(e,t)})))):b(e,t));var n,r})))),w=a.createElement(d.PageSidebar,{theme:"dark",nav:S,isNavOpen:u?v:i}),P=a.createElement(d.SkipToContent,{href:"#primary-app-container"},h("skip_to_content"));return a.createElement(d.Page,{mainContainerId:"primary-app-container",role:"main",header:k,sidebar:w,onPageResize:function(e){m(e.mobileView)},skipToContent:P},n)},te=n(79630);o().render(r().createElement((function(){var e,t,a=r().useState(!1),i=a[0],o=a[1];return r().useEffect((function(){(0,l.__awaiter)(void 0,void 0,void 0,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,Q()];case 1:return K=e.sent(),o(!0),[2]}}))}))}),[]),i?r().createElement(u.ConfigContext.Provider,{value:{kas:{apiBasePath:__BASE_PATH__}}},r().createElement(c.I18nextProvider,{i18n:(e="true"===new URLSearchParams(window.location.search).get("pseudolocalization"),t=w().createInstance(),t.use(new(x())({enabled:e,wrapped:!0})).use(N()).use(A()).use(c.initReactI18next).init({backend:{loadPath:n.p+"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,n,a){return a=a||{},"number"===t?new Intl.NumberFormat(n).format(e):e instanceof Date?"fromNow"===t?L()(e).fromNow(!0===a.omitSuffix):L()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,t,n){}},(function(){L().locale(w().language)})),t.on("languageChanged",(function(e){L().locale(e)})),t)},r().createElement(Y.Provider,{value:{keycloak:K,profile:null==K?void 0:K.profile}},r().createElement($,null,r().createElement(B.u,null,r().createElement(s.BrowserRouter,null,r().createElement(r().Suspense,{fallback:r().createElement(h.yR,null)},r().createElement(h.tV,null,r().createElement(te.OU,null,r().createElement(ee,null,r().createElement(G,null))))))))))):r().createElement(h.yR,null)}),null),document.getElementById("root"))}}]);
//# sourceMappingURL=7684.708b7a9f.js.map