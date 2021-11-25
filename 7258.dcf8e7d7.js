(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[7258,8068,6332,5827],{76831:function(e,t,n){e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),r={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return n.default.locale(r,null,!0),r}(n(86369))},48090:(e,t,n)=>{"use strict";n.d(t,{o:()=>s});var r=n(75418),a=n.n(r),o=n(31521),i=n(84669),c=n(98068),l=n(28962),s=function(){var e=(0,o.useTranslation)().t;return a().createElement(i.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(l.C0,{emptyStateProps:{variant:l.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},a().createElement((function(){var t=(0,c.useHistory)();return a().createElement(i.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},28962:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>c,pf:()=>u.p,sw:()=>s,D5:()=>g.D,C0:()=>m.C,jU:()=>m.j,tV:()=>v,yR:()=>_,wu:()=>k.wu,wR:()=>h.w,L5:()=>b.L,bN:()=>k.bN,h0:()=>k.h0});var r=n(70655),a=n(75418),o=n.n(a),i=n(46332),c=function(e){var t=e.children,n=(0,a.useState)([]),c=n[0],l=n[1],u=(0,a.useState)([]),m=u[0],d=u[1];(0,a.useEffect)((function(){var e=m.map((function(e){return e.key})),t=c.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return p(n)}),8e3);return{key:e.id,timeOut:r}}));return d((0,r.__spreadArray)((0,r.__spreadArray)([],m,!0),t,!0)),function(){return m.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[c]);var p=function(e){l((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.id!==e})),!0)})),d((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})),!0)}))};return o().createElement(i.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();l((0,r.__spreadArray)((0,r.__spreadArray)([],c,!0),[(0,r.__assign)((0,r.__assign)({},e),{id:t})],!1))}}},o().createElement(s,{alerts:c,onCloseAlert:p}),t)},l=n(84669),s=function(e){var t=e.alerts,n=e.onCloseAlert;return o().createElement(l.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,a=e.variant,i=e.title,c=e.description,s=e.dataTestId,u=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return o().createElement(l.Alert,(0,r.__assign)({key:t,isLiveRegion:!0,variant:l.AlertVariant[a],variantLabel:"",title:i,actionClose:o().createElement(l.AlertActionCloseButton,{title:i,onClose:function(){return n(t)}}),"data-testid":s},u),c)})))},u=n(43277),m=n(12973),d=n(98068),p=n(31521),f=(n(4256),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,r.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?o().createElement(l.PageSection,{padding:{default:"noPadding"},isFilled:!0},o().createElement(m.C,{emptyStateProps:{variant:m.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},o().createElement(l.Button,{onClick:this.onClickButton},e("go_to_kafka_instances")))):this.props.children},t}(a.Component)),v=(0,d.withRouter)((0,p.withTranslation)()(f)),_=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return o().createElement(l.Bullseye,(0,r.__assign)({},t),o().createElement(l.Spinner,(0,r.__assign)({},n)))},g=n(87842),k=n(16846),h=n(69887),b=n(93697);n(8509)},13449:(e,t,n)=>{"use strict";n.d(t,{S:()=>o});var r=n(75418),a=n.n(r)().createContext(void 0),o=function(){return(0,r.useContext)(a)}},36953:(e,t,n)=>{"use strict";n.d(t,{GX:()=>i,cW:()=>c});var r=n(70655),a=n(82625),o=n(30681),i=function(e){var t=e.kafkaId,n=e.timeDuration,a=e.timeInterval,i=e.accessToken,c=e.basePath;return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var e,l,s;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,new o.DefaultApi(new o.Configuration({accessToken:i,basePath:c})).getMetricsByRangeQuery(t,n,a,["kubelet_volume_stats_used_bytes"])];case 1:return e=r.sent(),l=(e.data.items||[]).filter((function(e){return!(e.values&&e.metric&&e.metric.topic&&e.metric.name&&e.metric.persistentvolumeclaim&&e.metric.persistentvolumeclaim.includes("zookeeper"))})),s={},l.forEach((function(e){e.values.forEach((function(e){var t=e.value,n=e.timestamp;return s[n]=t+(s[n]||0)}))})),[2,s]}}))}))},c=function(e){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var t,n,a,o,i,c,u;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,Promise.all([l({basePath:e.kafkaApiPath,accessToken:e.accessToken}),s(e)])];case 1:return t=r.sent(),n=t[0],a=t[1],o=a.topics,i=a.bytesIncoming,c=a.bytesOutgoing,u=a.bytesPerPartition,[2,{kafkaTopics:n,metricsTopics:o,bytesIncoming:i,bytesOutgoing:c,bytesPerPartition:u}]}}))}))},l=function(e){var t=e.accessToken,n=e.basePath;return(0,r.__awaiter)(void 0,void 0,Promise,(function(){return(0,r.__generator)(this,(function(e){switch(e.label){case 0:return[4,new a.TopicsApi(new o.Configuration({accessToken:t,basePath:n})).getTopics(void 0,100,100,void 0,void 0,void 0,void 0)];case 1:return[2,(e.sent().data.items||[]).map((function(e){return e.name}))]}}))}))};function s(e){var t=e.accessToken,n=e.basePath,a=e.kafkaId,i=e.timeDuration,c=e.timeInterval,l=e.selectedTopic;return(0,r.__awaiter)(this,void 0,Promise,(function(){var e,s,u,m,d,p,f,v;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return e=["__consumer_offsets","__strimzi_canary"],[4,new o.DefaultApi(new o.Configuration({accessToken:t,basePath:n})).getMetricsByRangeQuery(a,i,c,["kafka_server_brokertopicmetrics_bytes_in_total","kafka_server_brokertopicmetrics_bytes_out_total","kafka_topic:kafka_log_log_size:sum"])];case 1:return s=r.sent(),u=(s.data.items||[]).filter((function(t){var n;return!(t.values&&t.metric&&t.metric.topic&&t.metric.name||e.includes((null===(n=t.metric)||void 0===n?void 0:n.topic)||""))})),m=u.filter((function(e){var t;return void 0===l||(null===(t=e.metric)||void 0===t?void 0:t.topic)===l})),d=Array.from(new Set(u.map((function(e){return e.metric.topic})))),p={},f={},v={},m.forEach((function(e){var t,n=e.metric,r=n.__name__,a=n.topic;function o(t){e.values.forEach((function(e){var n=e.value,r=e.timestamp;return t[r]=n+(t[r]||0)}))}switch(r){case"kafka_server_brokertopicmetrics_bytes_in_total":o(p);break;case"kafka_server_brokertopicmetrics_bytes_out_total":o(f);break;case"kafka_topic:kafka_log_log_size:sum":t=v[a]||{},e.values.forEach((function(e){var n=e.value,r=e.timestamp;return t[r]=n+(t[r]||0)})),v[a]=t}})),[2,{topics:d,bytesOutgoing:f,bytesIncoming:p,bytesPerPartition:v}]}}))}))}},82519:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(75418);function a(e){r.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},52648:(e,t,n)=>{"use strict";n.d(t,{mh:()=>i,bv:()=>c,Bh:()=>s,hm:()=>l,Od:()=>r,JB:()=>u,pf:()=>m,md:()=>p,o8:()=>f,Nw:()=>d,E7:()=>v,L0:()=>_,wx:()=>g,Qw:()=>k,vK:()=>h,ik:()=>a});var r,a,o=n(59093);function i(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(r||(r={})),function(e){e.eval="eval",e.standard="standard"}(a||(a={}));var c=[{value:"aws",label:"Amazon Web Services"}],l=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],s=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],u=32,m=10,d=50,p=5e3,f=function(e,t,n){var r=t;n&&n>0&&(e===(n%t!=0?Math.floor(n/t)+1:Math.floor(n/t))&&(r=n>t?n%t==0?t:n%t:n));return 0!==r?r:t},v=function(e,t,n){void 0===n&&(n="asc");return null==e?void 0:e.sort((function(e,r){if(!Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(r,t))return 0;var a="string"==typeof e[t]?e[t].toUpperCase():e[t],o="string"==typeof r[t]?r[t].toUpperCase():r[t],i=0;return a>o?i=1:a<o&&(i=-1),"desc"===n?-1*i:i}))},_=function(e,t){return e="string"==typeof e?new Date(e):e,(0,o.formatDistance)(e,new Date)+" "+t},g=function(){return document.getElementById("chrome-app-render-root")||document.body},k=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},h=function(e){for(var t=e.loadingCount,n=e.skeleton,r=e.length,a=[],o=[],i=0;i<r;i++)o.push({title:n});for(i=0;i<t;i++)a.push({cells:o});return a}},41705:(e,t,n)=>{"use strict";n.r(t);var r=n(75418),a=n.n(r),o=n(66235),i=n.n(o),c=n(70655),l=n(31521),s=n(98068),u=n(46332),m=n(84669),d=n(52648),p=n(48090),f=n(82519),v=n(19581),_=n(5827),g=n(94622),k=n(81548),h=n(48635),b=n(51840),y=n(48364),w=(n(27081),function(){var e=(0,l.useTranslation)().t;return a().createElement(a().Fragment,null,a().createElement(m.PageSection,{variant:m.PageSectionVariants.light,className:"mk--main-page__page-section--table pf-m-padding-on-xl",padding:{default:"noPadding"}},a().createElement(m.TextContent,null,a().createElement(m.Text,{component:"h1"}," ",e("serviceAccount.service_accounts")),a().createElement(m.Text,{component:"p"},e("serviceAccount.service_accounts_title_header_info")))),a().createElement(y.H,null))}),E=n(45113),P=n.n(E),C=n(16486),A=n.n(C),T=n(73337),x=n.n(T),S=n(32578),Y=n.n(S),D=n(86369),I=n.n(D);n(76831);var L,N=n(53832),B=(n(36953),[{component:function(){return a().createElement(_.ModalProvider,null,a().createElement(k.e0,null,a().createElement(h.LF,{tokenEndPointUrl:"fake-token-url"},a().createElement(b.V,{preCreateInstance:function(e){return Promise.resolve(e)}})),a().createElement(g.A,null)))},exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:function(){return a().createElement(w,null)},exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"},{component:function(){return r.createElement(N.C,{kafkaId:"1vX09n2EKVPBDr9Cu9rE47gj67y",onCreateTopic:function(){}})},exact:!0,label:"Metrics",path:"/metrics",title:"Metrics"}]),M=function(e){var t=e.component,n=e.isAsync,a=void 0!==n&&n,o=e.title,i=(0,c.__rest)(e,["component","isAsync","title"]);return function(e){var t=(0,v.useLastLocation)();r.useEffect((function(){return e||null===t||(L=(0,d.mh)()),function(){window.clearTimeout(L)}}),[e,t])}(a),(0,f.j)(o),r.createElement(s.Route,{render:function(e){return r.createElement(t,(0,c.__assign)({},i,e))}})},R=function(e){var t=e.title;return(0,f.j)(t),r.createElement(s.Route,{component:p.o})},z=B.reduce((function(e,t){return(0,c.__spreadArray)((0,c.__spreadArray)([],e,!0),t.routes?t.routes:[t],!0)}),[]),H=function(){var e=(0,l.useTranslation)().t;return r.createElement(v.LastLocationProvider,null,r.createElement(s.Switch,null,z.map((function(e,t){var n=e.path,a=e.exact,o=e.component,i=e.title,c=e.isAsync;return r.createElement(M,{path:n,exact:a,component:o,key:t,title:i,isAsync:c})})),r.createElement(R,{title:e("404_page_does_not_exist")})))};const j=n.p+"f940137c.svg";var O,U,F=n(86235),V=n.n(F),q=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return O?[3,2]:[4,G()];case 1:e.sent(),e.label=2;case 2:return[2,O]}}))}))},G=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(O=V()())?[4,O.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),O=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},K=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==O?void 0:O.updateToken(50)];case 1:return e.sent(),(null==O?void 0:O.token)?[2,O.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},Q=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==O?void 0:O.updateToken(50)];case 1:return e.sent(),(null==O?void 0:O.tokenParsed)?[2,O.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))}))},W=a().createContext({keycloak:void 0}),X=function(e){var t={kas:{getToken:K},getUsername:function(){return Q().then((function(e){return e.username}))},isOrgAdmin:function(){return Q().then((function(e){return e.is_org_admin}))}};return a().createElement(u.AuthContext.Provider,{value:t},e.children)},Z=function(e){var t,n=e.children,a=r.useState(!0),o=a[0],i=a[1],c=r.useState(!0),u=c[0],d=c[1],p=r.useState(!1),f=p[0],v=p[1],_=r.useContext(W),g=(0,s.useLocation)(),k=(0,l.useTranslation)().t;if(!_.keycloak)return r.createElement("div",null,"403 Unauthorized");if(!_.keycloak.authenticated)return null===(t=_.keycloak)||void 0===t||t.login(),r.createElement(r.Fragment,null);var h=_.keycloak.tokenParsed&&_.keycloak.tokenParsed.email,b=r.createElement(m.PageHeaderTools,null,h),y=r.createElement(m.PageHeader,{logo:r.createElement((function(){var e=(0,s.useHistory)();return r.createElement("img",{src:j,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:o,headerTools:b,onNavToggle:u?function(){v(!f)}:function(){i(!o)},"aria-label":k("global_navigation")}),w=function(e,t){return r.createElement(m.NavItem,{key:"".concat(e.label,"-").concat(t),id:"".concat(e.label,"-").concat(t)},r.createElement(s.NavLink,{exact:!0,to:e.path,activeClassName:"pf-m-current"},(null==e?void 0:e.label)&&k(e.label)))},E=r.createElement(m.Nav,{id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":k("global")},r.createElement(m.NavList,{id:"nav-list-simple"},B.map((function(e,t){return e.label&&(e.routes?(n=e,a=t,r.createElement(m.NavExpandable,{key:"".concat(n.label,"-").concat(a),id:"".concat(n.label,"-").concat(a),title:n.label,isActive:n.routes.some((function(e){return e.path===g.pathname}))},n.routes.map((function(e,t){return e.label&&w(e,t)})))):w(e,t));var n,a})))),P=r.createElement(m.PageSidebar,{theme:"dark",nav:E,isNavOpen:u?f:o}),C=r.createElement(m.SkipToContent,{href:"#primary-app-container"},k("skip_to_content"));return r.createElement(m.Page,{mainContainerId:"primary-app-container",role:"main",header:y,sidebar:P,onPageResize:function(e){d(e.mobileView)},skipToContent:C},n)},J=n(28962);i().render(a().createElement((function(){var e,t,r=a().useState(!1),o=r[0],i=r[1];return a().useEffect((function(){(0,c.__awaiter)(void 0,void 0,void 0,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,q()];case 1:return U=e.sent(),i(!0),[2]}}))}))}),[]),o?a().createElement(u.BasenameContext.Provider,{value:{getBasename:function(){return""}}},a().createElement(u.ConfigContext.Provider,{value:{kas:{apiBasePath:__BASE_PATH__},ams:{apiBasePath:__BASE_PATH__}}},a().createElement(l.I18nextProvider,{i18n:(e="true"===new URLSearchParams(window.location.search).get("pseudolocalization"),t=P().createInstance(),t.use(new(Y())({enabled:e,wrapped:!0})).use(x()).use(A()).use(l.initReactI18next).init({backend:{loadPath:"".concat(n.p,"locales/{{lng}}/{{ns}}.json")},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,n,r){return r=r||{},"number"===t?new Intl.NumberFormat(n).format(e):e instanceof Date?"fromNow"===t?I()(e).fromNow(!0===r.omitSuffix):I()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0},(function(){I().locale(P().language)})),t.on("languageChanged",(function(e){I().locale(e)})),t)},a().createElement(W.Provider,{value:{keycloak:U,profile:null==U?void 0:U.profile}},a().createElement(X,null,a().createElement(J.uZ,null,a().createElement(s.BrowserRouter,null,a().createElement(a().Suspense,{fallback:a().createElement(J.yR,null)},a().createElement(J.tV,null,a().createElement(J.bN,null,a().createElement(_.ModalProvider,null,a().createElement(Z,null,a().createElement(H,null)),a().createElement(g.A,null)))))))))))):a().createElement(J.yR,null)}),null),document.getElementById("root"))}}]);
//# sourceMappingURL=7258.dcf8e7d7.js.map