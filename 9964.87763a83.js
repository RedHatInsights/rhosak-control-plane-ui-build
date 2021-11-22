"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[9964,8068,6332,9818],{48090:(e,t,n)=>{n.d(t,{o:()=>s});var a=n(75418),r=n.n(a),o=n(75205),i=n(84669),c=n(98068),l=n(28962),s=function(){var e=(0,o.useTranslation)().t;return r().createElement(i.PageSection,{padding:{default:"noPadding"},isFilled:!0},r().createElement(l.C0,{emptyStateProps:{variant:l.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},r().createElement((function(){var t=(0,c.useHistory)();return r().createElement(i.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},28962:(e,t,n)=>{n.d(t,{uZ:()=>c,pf:()=>u.p,sw:()=>s,D5:()=>g.D,C0:()=>m.C,jU:()=>m.j,tV:()=>f,yR:()=>_,wu:()=>k.wu,wR:()=>h.w,L5:()=>b.L,bN:()=>k.bN,h0:()=>k.h0});var a=n(70655),r=n(75418),o=n.n(r),i=n(46332),c=function(e){var t=e.children,n=(0,r.useState)([]),c=n[0],l=n[1],u=(0,r.useState)([]),m=u[0],d=u[1];(0,r.useEffect)((function(){var e=m.map((function(e){return e.key})),t=c.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,a=setTimeout((function(){return p(n)}),8e3);return{key:e.id,timeOut:a}}));return d((0,a.__spreadArray)((0,a.__spreadArray)([],m,!0),t,!0)),function(){return m.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[c]);var p=function(e){l((function(t){return(0,a.__spreadArray)([],t.filter((function(t){return t.id!==e})),!0)})),d((function(t){return(0,a.__spreadArray)([],t.filter((function(t){return t.key===e})),!0)}))};return o().createElement(i.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();l((0,a.__spreadArray)((0,a.__spreadArray)([],c,!0),[(0,a.__assign)((0,a.__assign)({},e),{id:t})],!1))}}},o().createElement(s,{alerts:c,onCloseAlert:p}),t)},l=n(84669),s=function(e){var t=e.alerts,n=e.onCloseAlert;return o().createElement(l.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,r=e.variant,i=e.title,c=e.description,s=e.dataTestId,u=(0,a.__rest)(e,["id","variant","title","description","dataTestId"]);return o().createElement(l.Alert,(0,a.__assign)({key:t,isLiveRegion:!0,variant:l.AlertVariant[r],variantLabel:"",title:i,actionClose:o().createElement(l.AlertActionCloseButton,{title:i,onClose:function(){return n(t)}}),"data-testid":s},u),c)})))},u=n(43277),m=n(12973),d=n(98068),p=n(75205),v=(n(4256),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,a.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?o().createElement(l.PageSection,{padding:{default:"noPadding"},isFilled:!0},o().createElement(m.C,{emptyStateProps:{variant:m.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},o().createElement(l.Button,{onClick:this.onClickButton},e("go_to_kafka_instances")))):this.props.children},t}(r.Component)),f=(0,d.withRouter)((0,p.withTranslation)()(v)),_=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return o().createElement(l.Bullseye,(0,a.__assign)({},t),o().createElement(l.Spinner,(0,a.__assign)({},n)))},g=n(87842),k=n(16846),h=n(69887),b=n(93697);n(8509)},13449:(e,t,n)=>{n.d(t,{S:()=>o});var a=n(75418),r=n.n(a)().createContext(void 0),o=function(){return(0,a.useContext)(r)}},36953:(e,t,n)=>{n.d(t,{GX:()=>i,cW:()=>c});var a=n(70655),r=n(82625),o=n(30681),i=function(e){var t=e.kafkaId,n=e.timeDuration,r=e.timeInterval,i=e.accessToken,c=e.basePath;return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,l,s;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,new o.DefaultApi(new o.Configuration({accessToken:i,basePath:c})).getMetricsByRangeQuery(t,n,r,["kubelet_volume_stats_used_bytes"])];case 1:return e=a.sent(),l=(e.data.items||[]).filter((function(e){return!(e.values&&e.metric&&e.metric.topic&&e.metric.name&&e.metric.persistentvolumeclaim&&e.metric.persistentvolumeclaim.includes("zookeeper"))})),s={},l.forEach((function(e){e.values.forEach((function(e){var t=e.value,n=e.timestamp;return s[n]=t+(s[n]||0)}))})),[2,s]}}))}))},c=function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var t,n,r,o,i,c,u;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,Promise.all([l({basePath:e.kafkaApiPath,accessToken:e.accessToken}),s(e)])];case 1:return t=a.sent(),n=t[0],r=t[1],o=r.topics,i=r.bytesIncoming,c=r.bytesOutgoing,u=r.bytesPerPartition,[2,{kafkaTopics:n,metricsTopics:o,bytesIncoming:i,bytesOutgoing:c,bytesPerPartition:u}]}}))}))},l=function(e){var t=e.accessToken,n=e.basePath;return(0,a.__awaiter)(void 0,void 0,Promise,(function(){return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return[4,new r.TopicsApi(new o.Configuration({accessToken:t,basePath:n})).getTopics(void 0,100,100,void 0,void 0,void 0,void 0)];case 1:return[2,(e.sent().data.items||[]).map((function(e){return e.name}))]}}))}))};function s(e){var t=e.accessToken,n=e.basePath,r=e.kafkaId,i=e.timeDuration,c=e.timeInterval,l=e.selectedTopic;return(0,a.__awaiter)(this,void 0,Promise,(function(){var e,s,u,m,d,p,v,f;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return e=["__consumer_offsets","__strimzi_canary"],[4,new o.DefaultApi(new o.Configuration({accessToken:t,basePath:n})).getMetricsByRangeQuery(r,i,c,["kafka_server_brokertopicmetrics_bytes_in_total","kafka_server_brokertopicmetrics_bytes_out_total","kafka_topic:kafka_log_log_size:sum"])];case 1:return s=a.sent(),u=(s.data.items||[]).filter((function(t){var n;return!(t.values&&t.metric&&t.metric.topic&&t.metric.name||e.includes((null===(n=t.metric)||void 0===n?void 0:n.topic)||""))})),m=u.filter((function(e){var t;return void 0===l||(null===(t=e.metric)||void 0===t?void 0:t.topic)===l})),d=Array.from(new Set(u.map((function(e){return e.metric.topic})))),p={},v={},f={},m.forEach((function(e){var t,n=e.metric,a=n.__name__,r=n.topic;function o(t){e.values.forEach((function(e){var n=e.value,a=e.timestamp;return t[a]=n+(t[a]||0)}))}switch(a){case"kafka_server_brokertopicmetrics_bytes_in_total":o(p);break;case"kafka_server_brokertopicmetrics_bytes_out_total":o(v);break;case"kafka_topic:kafka_log_log_size:sum":t=f[r]||{},e.values.forEach((function(e){var n=e.value,a=e.timestamp;return t[a]=n+(t[a]||0)})),f[r]=t}})),[2,{topics:d,bytesOutgoing:v,bytesIncoming:p,bytesPerPartition:f}]}}))}))}},82519:(e,t,n)=>{n.d(t,{j:()=>r});var a=n(75418);function r(e){a.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},52648:(e,t,n)=>{n.d(t,{mh:()=>i,bv:()=>c,Bh:()=>s,hm:()=>l,Od:()=>a,JB:()=>u,pf:()=>m,md:()=>p,o8:()=>v,Nw:()=>d,E7:()=>f,L0:()=>_,wx:()=>g,Qw:()=>k,vK:()=>h,ik:()=>r});var a,r,o=n(59093);function i(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(a||(a={})),function(e){e.eval="eval",e.standard="standard"}(r||(r={}));var c=[{value:"aws",label:"Amazon Web Services"}],l=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],s=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],u=32,m=10,d=50,p=5e3,v=function(e,t,n){var a=t;n&&n>0&&(e===(n%t!=0?Math.floor(n/t)+1:Math.floor(n/t))&&(a=n>t?n%t==0?t:n%t:n));return 0!==a?a:t},f=function(e,t,n){void 0===n&&(n="asc");return null==e?void 0:e.sort((function(e,a){if(!Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(a,t))return 0;var r="string"==typeof e[t]?e[t].toUpperCase():e[t],o="string"==typeof a[t]?a[t].toUpperCase():a[t],i=0;return r>o?i=1:r<o&&(i=-1),"desc"===n?-1*i:i}))},_=function(e,t){return e="string"==typeof e?new Date(e):e,(0,o.formatDistance)(e,new Date)+" "+t},g=function(){return document.getElementById("chrome-app-render-root")||document.body},k=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},h=function(e){for(var t=e.loadingCount,n=e.skeleton,a=e.length,r=[],o=[],i=0;i<a;i++)o.push({title:n});for(i=0;i<t;i++)r.push({cells:o});return r}},86434:(e,t,n)=>{n.r(t);var a=n(75418),r=n.n(a),o=n(66235),i=n.n(o),c=n(70655),l=n(75205),s=n(98068),u=n(46332),m=n(84669),d=n(52648),p=n(48090),v=n(82519),f=n(19581),_=n(29818),g=function(){var e,t;return(0,(0,u.useModal)().registerModals)((t=(0,l.useTranslation)().t,(e={})[u.ModalType.KasCreateInstance]={lazyComponent:r().lazy((function(){return Promise.all([n.e(4669),n.e(9093),n.e(681),n.e(69),n.e(4360)]).then(n.bind(n,54360))})),variant:"medium",title:t("create_a_kafka_instance")},e[u.ModalType.KasDeleteInstance]={lazyComponent:r().lazy((function(){return Promise.all([n.e(6814),n.e(4669),n.e(8068),n.e(7577),n.e(9093),n.e(8827),n.e(681),n.e(3009),n.e(7355)]).then(n.bind(n,78578))})),variant:"small"},e[u.ModalType.KasTransferOwnership]={lazyComponent:r().lazy((function(){return Promise.all([n.e(4669),n.e(681),n.e(8512)]).then(n.bind(n,98512))})),variant:"medium",title:t("change_owner")},e[u.ModalType.KasCreateServiceAccount]={lazyComponent:r().lazy((function(){return Promise.all([n.e(6814),n.e(4669),n.e(8068),n.e(7577),n.e(9093),n.e(8827),n.e(681),n.e(3009),n.e(5775)]).then(n.bind(n,45587))})),variant:"medium",title:t("serviceAccount.create_a_service_account")},e[u.ModalType.KasDeleteServiceAccount]={lazyComponent:r().lazy((function(){return Promise.all([n.e(6814),n.e(4669),n.e(8068),n.e(7577),n.e(9093),n.e(8827),n.e(681),n.e(3009),n.e(6402)]).then(n.bind(n,88372))})),title:t("serviceAccount.delete_service_account")+"?",variant:"small"},e[u.ModalType.KasResetServiceAccountCredentials]={lazyComponent:r().lazy((function(){return Promise.all([n.e(6814),n.e(4669),n.e(8068),n.e(7577),n.e(9093),n.e(8827),n.e(681),n.e(3009),n.e(6767)]).then(n.bind(n,99240))})),title:"".concat(t("serviceAccount.reset_service_account_credentials"),"?"),variant:"medium"},e)),r().createElement(r().Fragment,null)},k=n(81548),h=n(48635),b=n(51840),y=n(48364),E=(n(27081),function(){var e=(0,l.useTranslation)().t;return r().createElement(r().Fragment,null,r().createElement(m.PageSection,{variant:m.PageSectionVariants.light,className:"mk--main-page__page-section--table pf-m-padding-on-xl",padding:{default:"noPadding"}},r().createElement(m.TextContent,null,r().createElement(m.Text,{component:"h1"}," ",e("serviceAccount.service_accounts")),r().createElement(m.Text,{component:"p"},e("serviceAccount.service_accounts_title_header_info")))),r().createElement(y.H,null))}),w=n(91575),P=n.n(w),C=n(16486),T=n.n(C),A=n(73337),S=n.n(A),x=n(32578),I=n.n(x),z=n(86369),N=n.n(z);n(76831);var D,B=n(53832),R=(n(36953),[{component:function(){return r().createElement(_.ModalProvider,null,r().createElement(k.e0,null,r().createElement(h.LF,{tokenEndPointUrl:"fake-token-url"},r().createElement(b.V,{preCreateInstance:function(e){return Promise.resolve(e)}})),r().createElement(g,null)))},exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:function(){return r().createElement(E,null)},exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"},{component:function(){return a.createElement(B.C,{kafkaId:"1vX09n2EKVPBDr9Cu9rE47gj67y",onCreateTopic:function(){}})},exact:!0,label:"Metrics",path:"/metrics",title:"Metrics"}]),L=function(e){var t=e.component,n=e.isAsync,r=void 0!==n&&n,o=e.title,i=(0,c.__rest)(e,["component","isAsync","title"]);return function(e){var t=(0,f.useLastLocation)();a.useEffect((function(){return e||null===t||(D=(0,d.mh)()),function(){window.clearTimeout(D)}}),[e,t])}(r),(0,v.j)(o),a.createElement(s.Route,{render:function(e){return a.createElement(t,(0,c.__assign)({},i,e))}})},O=function(e){var t=e.title;return(0,v.j)(t),a.createElement(s.Route,{component:p.o})},M=R.reduce((function(e,t){return(0,c.__spreadArray)((0,c.__spreadArray)([],e,!0),t.routes?t.routes:[t],!0)}),[]),j=function(){var e=(0,l.useTranslation)().t;return a.createElement(f.LastLocationProvider,null,a.createElement(s.Switch,null,M.map((function(e,t){var n=e.path,r=e.exact,o=e.component,i=e.title,c=e.isAsync;return a.createElement(L,{path:n,exact:r,component:o,key:t,title:i,isAsync:c})})),a.createElement(O,{title:e("404_page_does_not_exist")})))};const F=n.p+"f940137c.svg";var U,V,K=n(86235),H=n.n(K),q=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return U?[3,2]:[4,G()];case 1:e.sent(),e.label=2;case 2:return[2,U]}}))}))},G=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(U=H()())?[4,U.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),U=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},Q=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==U?void 0:U.updateToken(50)];case 1:return e.sent(),(null==U?void 0:U.token)?[2,U.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},W=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==U?void 0:U.updateToken(50)];case 1:return e.sent(),(null==U?void 0:U.tokenParsed)?[2,U.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))}))},X=r().createContext({keycloak:void 0}),Z=function(e){var t={kas:{getToken:Q},getUsername:function(){return W().then((function(e){return e.username}))},isOrgAdmin:function(){return W().then((function(e){return e.is_org_admin}))}};return r().createElement(u.AuthContext.Provider,{value:t},e.children)},J=function(e){var t,n=e.children,r=a.useState(!0),o=r[0],i=r[1],c=a.useState(!0),u=c[0],d=c[1],p=a.useState(!1),v=p[0],f=p[1],_=a.useContext(X),g=(0,s.useLocation)(),k=(0,l.useTranslation)().t;if(!_.keycloak)return a.createElement("div",null,"403 Unauthorized");if(!_.keycloak.authenticated)return null===(t=_.keycloak)||void 0===t||t.login(),a.createElement(a.Fragment,null);var h=_.keycloak.tokenParsed&&_.keycloak.tokenParsed.email,b=a.createElement(m.PageHeaderTools,null,h),y=a.createElement(m.PageHeader,{logo:a.createElement((function(){var e=(0,s.useHistory)();return a.createElement("img",{src:F,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:o,headerTools:b,onNavToggle:u?function(){f(!v)}:function(){i(!o)},"aria-label":k("global_navigation")}),E=function(e,t){return a.createElement(m.NavItem,{key:"".concat(e.label,"-").concat(t),id:"".concat(e.label,"-").concat(t)},a.createElement(s.NavLink,{exact:!0,to:e.path,activeClassName:"pf-m-current"},(null==e?void 0:e.label)&&k(e.label)))},w=a.createElement(m.Nav,{id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":k("global")},a.createElement(m.NavList,{id:"nav-list-simple"},R.map((function(e,t){return e.label&&(e.routes?(n=e,r=t,a.createElement(m.NavExpandable,{key:"".concat(n.label,"-").concat(r),id:"".concat(n.label,"-").concat(r),title:n.label,isActive:n.routes.some((function(e){return e.path===g.pathname}))},n.routes.map((function(e,t){return e.label&&E(e,t)})))):E(e,t));var n,r})))),P=a.createElement(m.PageSidebar,{theme:"dark",nav:w,isNavOpen:u?v:o}),C=a.createElement(m.SkipToContent,{href:"#primary-app-container"},k("skip_to_content"));return a.createElement(m.Page,{mainContainerId:"primary-app-container",role:"main",header:y,sidebar:P,onPageResize:function(e){d(e.mobileView)},skipToContent:C},n)},Y=n(28962);i().render(r().createElement((function(){var e,t,a=r().useState(!1),o=a[0],i=a[1];return r().useEffect((function(){(0,c.__awaiter)(void 0,void 0,void 0,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,q()];case 1:return V=e.sent(),i(!0),[2]}}))}))}),[]),o?r().createElement(u.BasenameContext.Provider,{value:{getBasename:function(){return""}}},r().createElement(u.ConfigContext.Provider,{value:{kas:{apiBasePath:__BASE_PATH__},ams:{apiBasePath:__BASE_PATH__}}},r().createElement(l.I18nextProvider,{i18n:(e="true"===new URLSearchParams(window.location.search).get("pseudolocalization"),t=P().createInstance(),t.use(new(I())({enabled:e,wrapped:!0})).use(S()).use(T()).use(l.initReactI18next).init({backend:{loadPath:"".concat(n.p,"locales/{{lng}}/{{ns}}.json")},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,n,a){return a=a||{},"number"===t?new Intl.NumberFormat(n).format(e):e instanceof Date?"fromNow"===t?N()(e).fromNow(!0===a.omitSuffix):N()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0},(function(){N().locale(P().language)})),t.on("languageChanged",(function(e){N().locale(e)})),t)},r().createElement(X.Provider,{value:{keycloak:V,profile:null==V?void 0:V.profile}},r().createElement(Z,null,r().createElement(Y.uZ,null,r().createElement(s.BrowserRouter,null,r().createElement(r().Suspense,{fallback:r().createElement(Y.yR,null)},r().createElement(Y.tV,null,r().createElement(Y.bN,null,r().createElement(_.ModalProvider,null,r().createElement(J,null,r().createElement(j,null)),r().createElement(g,null)))))))))))):r().createElement(Y.yR,null)}),null),document.getElementById("root"))}}]);
//# sourceMappingURL=9964.87763a83.js.map