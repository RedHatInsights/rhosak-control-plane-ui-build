(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[575],{9995:(e,t,n)=>{"use strict";n.d(t,{G:()=>r});var a=n(48121),r=n.n(a)().createContext({basePath:void 0})},42603:(e,t,n)=>{"use strict";n.d(t,{V:()=>r});var a=n(48121),r=n.n(a)().createContext(void 0)},99229:(e,t,n)=>{"use strict";n.d(t,{wP:()=>c,Z7:()=>u,uZ:()=>l});var a=n(70655),r=n(48121),i=n.n(r),o=n(10705),s=n(25399),c=(0,r.createContext)({addAlert:function(){}}),u=function(){return(0,r.useContext)(c)},l=function(e){var t=e.children,n=(0,r.useState)([]),u=n[0],l=n[1],d=(0,r.useState)([]),v=d[0],p=d[1];(0,r.useEffect)((function(){var e=v.map((function(e){return e.key})),t=u.filter((function(t){return!e.includes(t.key)})).map((function(e){var t=setTimeout((function(){return m(e.key)}),8e3);return{key:e.key,timeOut:t}}));return p((0,a.__spreadArray)((0,a.__spreadArray)([],v),t)),function(){return v.forEach((function(e){return clearTimeout(e.timeOut)}))}}),[u]);var m=function(e){l((function(t){return(0,a.__spreadArray)([],t.filter((function(t){return t.key!==e})))})),p((function(t){return(0,a.__spreadArray)([],t.filter((function(t){return t.key===e})))}))};return i().createElement(c.Provider,{value:{addAlert:function(e,t,n,r){void 0===t&&(t=s.AlertVariant.default),l((0,a.__spreadArray)((0,a.__spreadArray)([],u),[{key:(new Date).getTime(),title:e,variant:t,body:n,dataTestId:r}]))}}},i().createElement(o.s,{alerts:u,onCloseAlert:m}),t)}},93564:(e,t,n)=>{"use strict";n.d(t,{wP:()=>a.wP,uZ:()=>a.uZ,Z7:()=>a.Z7});var a=n(99229);n(10705)},48090:(e,t,n)=>{"use strict";n(48121),n(13006),n(25399),n(48784)},48784:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>a.uZ,AX:()=>r.A,D5:()=>m.D,C0:()=>d,nW:()=>S,yR:()=>p.y,wu:()=>_.w,wR:()=>f.w,L5:()=>g.L,Z7:()=>a.Z7});var a=n(93564),r=n(71322),i=n(70655),o=n(48121),s=n.n(o),c=n(25399),u=n(20777),l=n(26378),d=(n(64514),function(e){var t=e.titleProps,n=e.buttonProps,a=e.emptyStateIconProps,r=e.emptyStateProps,o=e.emptyStateBodyProps,d=e.children,v=n||{},p=v.variant,m=void 0===p?c.ButtonVariant.primary:p,_=v.onClick,f=(0,i.__rest)(v,["variant","onClick"]),g=a||{},P=g.icon,S=void 0===P?u.ZP:P,y=(0,i.__rest)(g,["icon"]),h=t||{},E=h.title,A=h.size,b=void 0===A?c.TitleSizes.lg:A,C=h.headingLevel,k=void 0===C?"h1":C,I=(0,i.__rest)(h,["title","size","headingLevel"]),T=o||{},w=T.body,V=(0,i.__rest)(T,["body"]),Z=r||{},x=Z.className,D=(0,i.__rest)(Z,["className"]);return s().createElement(s().Fragment,null,s().createElement(c.EmptyState,(0,i.__assign)({className:(0,l.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",x)},D),s().createElement(c.EmptyStateIcon,(0,i.__assign)({icon:S},y)),E&&s().createElement(c.Title,(0,i.__assign)({headingLevel:k,size:b},I),E),w&&s().createElement(c.EmptyStateBody,(0,i.__assign)({},V),w),(null==n?void 0:n.title)&&s().createElement(c.Button,(0,i.__assign)({variant:m,onClick:_},f),null==n?void 0:n.title),d))}),v=n(34747),p=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.updateState=function(e){t.setState({hasError:e})},t}(0,i.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){return this.state.hasError?s().createElement(v.S,{updateState:this.updateState}):this.props.children}}(o.Component),n(63477)),m=n(98034),_=n(16846),f=n(69887),g=n(93697),P=n(5569),S=function(e){var t=e.pageSection,n=e.titleProps,a=e.emptyStateProps,r=e.emptyStateIconProps,o=e.emptyStateBodyProps,u=e.buttonProps,l=t||{},v=l.variant,p=void 0===v?c.PageSectionVariants.default:v,m=l.padding,_=(0,i.__rest)(l,["variant","padding"]);return s().createElement(c.PageSection,(0,i.__assign)({variant:p},_,{padding:m||{default:"noPadding"}}),s().createElement(d,{titleProps:n,emptyStateProps:a,emptyStateIconProps:(0,i.__assign)({icon:(null==r?void 0:r.icon)||P.ZP},r),emptyStateBodyProps:o,buttonProps:u}))};n(8509)},86435:(e,t,n)=>{"use strict";n.d(t,{I:()=>f});var a=n(70655),r=n(48121),i=n.n(r),o=n(5977),s=n(13006),c=n(25399),u=n(23141),l=n(42603),d=n(9995),v=n(75381),p=n(26992),m=n(48784),_=n(87134),f=function(e){e.getConnectToInstancePath;var t=(0,s.useTranslation)().t,n=(0,m.Z7)().addAlert,f=(0,o.TH)(),g=new URLSearchParams(f.search),P=parseInt(g.get("page")||"",10)||1,S=parseInt(g.get("perPage")||"",10)||10,y=(0,r.useContext)(l.V),h=(0,r.useContext)(d.G).basePath,E=(0,r.useState)(),A=E[0],b=E[1],C=(0,r.useState)(),k=C[0],I=C[1],T=(0,r.useState)(!1),w=T[0],V=T[1],Z=(0,r.useState)(0),x=Z[0],D=(Z[1],(0,r.useState)(0)),R=D[0],B=(D[1],(0,r.useState)(!0)),L=B[0],O=(B[1],(0,r.useState)("name")),N=O[0],z=O[1],F=(0,r.useState)("name"),U=F[0],G=F[1],M=(0,r.useState)([]),W=M[0],H=M[1],J=(0,r.useState)(!1),X=J[0],Y=J[1],j=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==y?void 0:y.getToken()];case 1:if(!(e=a.sent()))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new u.M2({accessToken:e,basePath:h}).listServiceAccounts().then((function(e){var t=null==e?void 0:e.data;b(t),I(null==t?void 0:t.items)}))];case 3:return a.sent(),[3,5];case 4:return function(e){var a,r,i,o,s;(0,v.G6)(e)&&(o=null===(a=e.response)||void 0===a?void 0:a.data.reason,s=null===(i=null===(r=e.response)||void 0===r?void 0:r.data)||void 0===i?void 0:i.code),s===v.SM.UNAUTHORIZED_USER?V(!0):n(t("something_went_wrong"),c.AlertVariant.danger,o)}(a.sent()),[3,5];case 5:return[2]}}))}))};(0,r.useEffect)((function(){j()}),[]);var q=function(){},K=function(){},Q=function(){Y(!X)};return w?i().createElement(m.nW,{titleProps:{title:t("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateBodyProps:{body:t("serviceAccount.unauthorized_access_to_service_accounts_info")}}):i().createElement(i().Fragment,null,i().createElement(m.uZ,null,i().createElement(c.PageSection,{variant:c.PageSectionVariants.light},i().createElement(c.Level,null,i().createElement(c.LevelItem,null,i().createElement(c.TextContent,null,i().createElement(c.Text,{component:"h1"}," ",t("serviceAccount.service_accounts")),i().createElement(c.Text,{component:"p"},t("serviceAccount.service_accounts_title_header_info"))))),i().createElement(_.i,{isOpen:X,setIsOpen:Y,handleCreateModal:Q})),function(){var e;return void 0===k?i().createElement(c.PageSection,{variant:c.PageSectionVariants.light,padding:{default:"noPadding"}},i().createElement(m.yR,null)):x&&x<1?i().createElement(c.PageSection,null,i().createElement(m.C0,{titleProps:{title:t("serviceAccount.you_do_not_have_any_service_accounts_yet"),headingLevel:"h2"},emptyStateBodyProps:{body:t("serviceAccount.create_service_account_to_get_started")},buttonProps:(e={title:t("serviceAccount.create_service_account"),onClick:function(){return Q()}},e["data-testid"]="emptyStateStreams-buttonCreateServiceAccount",e)})):i().createElement(c.PageSection,{className:"mk--main-page__page-section--table",variant:c.PageSectionVariants.light,padding:{default:"noPadding"}},i().createElement(p.s,{page:P,perPage:S,total:(null==A?void 0:A.total)||1,expectedTotal:R,serviceAccountsDataLoaded:L,serviceAccountItems:k,orderBy:N,setOrderBy:z,filterSelected:U,setFilterSelected:G,filteredValue:W,setFilteredValue:H,onResetCredentials:q,onDeleteServiceAccount:K,handleCreateModal:Q}))}()))}},44947:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(48121),r=n.n(a),i=n(86435),o=n(42603),s=n(99229),c=n(9995);n(78800);const u=function(e){var t=e.getUsername,n=e.getToken,a=e.addAlert,u=e.basePath,l=e.getConnectToInstancePath,d={getToken:n,getUsername:t},v={addAlert:a};return r().createElement(c.G.Provider,{value:{basePath:u}},r().createElement(s.wP.Provider,{value:v},r().createElement(o.V.Provider,{value:d},r().createElement(i.I,{getConnectToInstancePath:l}))))}},82519:(e,t,n)=>{"use strict";n(48121)},52648:(e,t,n)=>{"use strict";var a;n.d(t,{bv:()=>r,Bh:()=>o,hm:()=>i,Od:()=>a,JB:()=>s,wu:()=>l,pf:()=>c,md:()=>u,o8:()=>d}),function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision"}(a||(a={}));var r=[{value:"aws",label:"Amazon Web Services"}],i=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"}],o=[{value:"us-east-1",label:"US East, N. Virginia"}],s=32,c=10,u=5e3,l=function(e){return void 0!==e&&""!==e},d=function(e,t,n){var a=t;n&&n>0&&(e===(n%t!=0?Math.floor(n/t)+1:Math.floor(n/t))&&(a=n>t?n%t==0?t:n%t:n));return 0!==a?a:t}}}]);
//# sourceMappingURL=575.da69d06f.js.map