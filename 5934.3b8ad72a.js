"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[5934,2669],{48090:(e,t,n)=>{n.d(t,{o:()=>u});var r=n(75418),a=n.n(r),o=n(8898),i=n(99421),l=n(68199),c=n(28962),u=function(){var e=(0,o.useTranslation)(["kasTemporaryFixMe"]).t;return a().createElement(i.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(c.C0,{emptyStateProps:{variant:c.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},a().createElement((function(){var t=(0,l.useHistory)();return a().createElement(i.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},28962:(e,t,n)=>{n.d(t,{uZ:()=>l,pf:()=>s.p,sw:()=>u,D5:()=>E.D,C0:()=>d.C,jU:()=>d.j,tV:()=>v,yR:()=>_,wu:()=>k.wu,wR:()=>h.w,L5:()=>g.L,bN:()=>k.bN,h0:()=>k.h0});var r=n(223),a=n(75418),o=n.n(a),i=n(7451),l=function(e){var t=e.children,n=(0,a.useState)([]),l=n[0],c=n[1],s=(0,a.useState)([]),d=s[0],m=s[1];(0,a.useEffect)((function(){var e=d.map((function(e){return e.key})),t=l.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return f(n)}),8e3);return{key:e.id,timeOut:r}}));return m((0,r.__spreadArray)((0,r.__spreadArray)([],d,!0),t,!0)),function(){return d.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[l]);var f=function(e){c((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.id!==e})),!0)})),m((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})),!0)}))};return o().createElement(i.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();c((0,r.__spreadArray)((0,r.__spreadArray)([],l,!0),[(0,r.__assign)((0,r.__assign)({},e),{id:t})],!1))}}},o().createElement(u,{alerts:l,onCloseAlert:f}),t)},c=n(99421),u=function(e){var t=e.alerts,n=e.onCloseAlert;return o().createElement(c.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,a=e.variant,i=e.title,l=e.description,u=e.dataTestId,s=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return o().createElement(c.Alert,(0,r.__assign)({key:t,isLiveRegion:!0,variant:c.AlertVariant[a],variantLabel:"",title:i,actionClose:o().createElement(c.AlertActionCloseButton,{title:i,onClose:function(){return n(t)}}),"data-testid":u},s),l)})))},s=n(43277),d=n(12973),m=n(68199),f=n(8898),p=(n(4256),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,r.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?o().createElement(c.PageSection,{padding:{default:"noPadding"},isFilled:!0},o().createElement(d.C,{emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},o().createElement(c.Button,{onClick:this.onClickButton},e("go_to_kafka_instances")))):this.props.children},t}(a.Component)),v=(0,m.withRouter)((0,f.withTranslation)()(p)),_=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return o().createElement(c.Bullseye,(0,r.__assign)({},t),o().createElement(c.Spinner,(0,r.__assign)({},n)))},E=n(87842),k=n(16846),h=n(69887),g=n(93697);n(8509)},13449:(e,t,n)=>{n.d(t,{S:()=>o});var r=n(75418),a=n.n(r)().createContext(void 0),o=function(){return(0,r.useContext)(a)}},82519:(e,t,n)=>{n.d(t,{j:()=>a});var r=n(75418);function a(e){r.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},11723:(e,t,n)=>{n.r(t);var r=n(75418),a=n.n(r),o=n(66235),i=n.n(o),l=n(223),c=n(68199),u=n(7451),s=(n(49901),n(74651),n(99521),n(15202),n(56594),n(94694),n(8898)),d=n(99421),m=n(48090),f=n(82519),p=n(72669),v=n(94622),_=n(81548),E=n(48635),k=n(53443),h=n(48364),g=(n(27081),function(){var e=(0,s.useTranslation)(["kasTemporaryFixMe"]).t;return a().createElement(a().Fragment,null,a().createElement(d.PageSection,{variant:d.PageSectionVariants.light,className:"pf-m-padding-on-xl",padding:{default:"noPadding"}},a().createElement(d.TextContent,null,a().createElement(d.Text,{component:"h1"}," ",e("serviceAccount.service_accounts")),a().createElement(d.Text,{component:"p"},e("serviceAccount.service_accounts_title_header_info")))),a().createElement(h.H,null))});var y=[{component:function(){return a().createElement(p.ModalProvider,null,a().createElement(_.e0,null,a().createElement(E.LF,{tokenEndPointUrl:"fake-token-url"},a().createElement(k.V,{preCreateInstance:function(e){return Promise.resolve(e)}})),a().createElement(v.A,null)))},exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:function(){return a().createElement(g,null)},exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"}],b=function(e){var t=e.component,n=e.title,a=(0,l.__rest)(e,["component","title"]);return(0,f.j)(n),r.createElement(c.Route,{render:function(e){return r.createElement(t,(0,l.__assign)({},a,e))}})},P=function(e){var t=e.title;return(0,f.j)(t),r.createElement(c.Route,{component:m.o})},C=y.reduce((function(e,t){return(0,l.__spreadArray)((0,l.__spreadArray)([],e,!0),t.routes?t.routes:[t],!0)}),[]),A=function(){var e=(0,s.useTranslation)(["kasTemporaryFixMe"]).t;return r.createElement(c.Switch,null,C.map((function(e,t){var n=e.path,a=e.exact,o=e.component,i=e.title,l=e.isAsync;return r.createElement(b,{path:n,exact:a,component:o,key:t,title:i,isAsync:l})})),r.createElement(P,{title:e("404_page_does_not_exist")}))};const T=n.p+"f940137c.svg";var w,x,S=n(32385),N=n.n(S),B=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return w?[3,2]:[4,F()];case 1:e.sent(),e.label=2;case 2:return[2,w]}}))}))},F=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(w=N()())?[4,w.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),w=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},I=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==w?void 0:w.updateToken(50)];case 1:return e.sent(),(null==w?void 0:w.token)?[2,w.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},L=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==w?void 0:w.updateToken(50)];case 1:return e.sent(),(null==w?void 0:w.tokenParsed)?[2,w.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))}))},R=a().createContext({keycloak:void 0}),j=function(e){var t={kas:{getToken:I},getUsername:function(){return L().then((function(e){return e.username}))},isOrgAdmin:function(){return L().then((function(e){return e.is_org_admin}))}};return a().createElement(u.AuthContext.Provider,{value:t},e.children)},H=function(e){var t,n=e.children,a=r.useState(!0),o=a[0],i=a[1],l=r.useState(!0),u=l[0],m=l[1],f=r.useState(!1),p=f[0],v=f[1],_=r.useContext(R),E=(0,c.useLocation)(),k=(0,s.useTranslation)(["kasTemporaryFixMe"]).t;if(!_.keycloak)return r.createElement("div",null,"403 Unauthorized");if(!_.keycloak.authenticated)return null===(t=_.keycloak)||void 0===t||t.login(),r.createElement(r.Fragment,null);var h=_.keycloak.tokenParsed&&_.keycloak.tokenParsed.email,g=r.createElement(d.PageHeaderTools,null,h),b=r.createElement(d.PageHeader,{logo:r.createElement((function(){var e=(0,c.useHistory)();return r.createElement("img",{src:T,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:o,headerTools:g,onNavToggle:u?function(){v(!p)}:function(){i(!o)},"aria-label":k("global_navigation")}),P=function(e,t){return r.createElement(d.NavItem,{key:"".concat(e.label,"-").concat(t),id:"".concat(e.label,"-").concat(t)},r.createElement(c.NavLink,{exact:!0,to:e.path,activeClassName:"pf-m-current"},(null==e?void 0:e.label)&&k(e.label)))},C=r.createElement(d.Nav,{id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":k("global")},r.createElement(d.NavList,{id:"nav-list-simple"},y.map((function(e,t){return e.label&&(e.routes?(n=e,a=t,r.createElement(d.NavExpandable,{key:"".concat(n.label,"-").concat(a),id:"".concat(n.label,"-").concat(a),title:n.label,isActive:n.routes.some((function(e){return e.path===E.pathname}))},n.routes.map((function(e,t){return e.label&&P(e,t)})))):P(e,t));var n,a})))),A=r.createElement(d.PageSidebar,{theme:"dark",nav:C,isNavOpen:u?p:o}),w=r.createElement(d.SkipToContent,{href:"#primary-app-container"},k("skip_to_content"));return r.createElement(d.Page,{mainContainerId:"primary-app-container",role:"main",header:b,sidebar:A,onPageResize:function(e){m(e.mobileView)},skipToContent:w},n)},M=n(28962);i().render(a().createElement((function(){var e=a().useState(!1),t=e[0],r=e[1];return a().useEffect((function(){(0,l.__awaiter)(void 0,void 0,void 0,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,B()];case 1:return x=e.sent(),r(!0),[2]}}))}))}),[]),t?a().createElement(u.BasenameContext.Provider,{value:{getBasename:function(){return""}}},a().createElement(u.ConfigContext.Provider,{value:{kas:{apiBasePath:__BASE_PATH__},ams:{apiBasePath:__BASE_PATH__}}},a().createElement(p.I18nProvider,{lng:"en",resources:{en:{common:function(){return n.e(3389).then(n.t.bind(n,3389,19))},"create-kafka-instance":function(){return n.e(2192).then(n.t.bind(n,12192,19))},kafka:function(){return n.e(4309).then(n.t.bind(n,94309,19))},metrics:function(){return n.e(4564).then(n.t.bind(n,24530,19))},kasTemporaryFixMe:function(){return n.e(6401).then(n.t.bind(n,26401,19))}}},debug:!0}," ",a().createElement(R.Provider,{value:{keycloak:x,profile:null==x?void 0:x.profile}},a().createElement(j,null,a().createElement(M.uZ,null,a().createElement(c.BrowserRouter,null,a().createElement(a().Suspense,{fallback:a().createElement(M.yR,null)},a().createElement(M.tV,null,a().createElement(M.bN,null,a().createElement(p.ModalProvider,null,a().createElement(H,null,a().createElement(A,null)),a().createElement(v.A,null)))))))))))):a().createElement(M.yR,null)}),null),document.getElementById("root"))}}]);
//# sourceMappingURL=5934.3b8ad72a.js.map