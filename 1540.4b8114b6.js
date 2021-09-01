"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1540],{51540:(e,t,n)=>{n.d(t,{L:()=>b});var a=n(70655),i=n(75418),r=n.n(i),o=n(76007),s=n(54532),l=n(56176),u=n.n(l),c=n(97012),d=n.n(c),v=n(58788),f=n(45024);function g(e,t){var n=(0,i.useRef)();(0,i.useEffect)((function(){n.current=e}),[e]),(0,i.useEffect)((function(){if(null!==t){var e=setTimeout((function(){n.current()}),t);return function(){clearInterval(e)}}}),[e,t])}var m=n(75381);function p(){return!document[(e=document,void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":"")];var e}function h(){var e=(0,i.useState)(p()),t=e[0],n=e[1],a=function(){return n(p())};return(0,i.useEffect)((function(){var e,t=void 0!==(e=document).hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":"";return document.addEventListener(t,a,!1),function(){document.removeEventListener(t,a)}}),[]),{isVisible:t,setIsVisible:n}}var _=n(54950),k=n(365),E=n(92717),S=n(95216),w=n(5569),P=n(13449),b=function(e){var t=e.preCreateInstance,n=e.tokenEndPointUrl;d().extend(u());var l=((0,P.S)()||{}).shouldOpenCreateModal,c=(0,S.useAuth)(),p=((0,S.useConfig)()||{}).kas.apiBasePath,b=h().isVisible,y=(0,o.useLocation)(),C=new URLSearchParams(y.search),I=parseInt(C.get("page")||"",10)||1,T=parseInt(C.get("perPage")||"",10)||10,D=C.has("user-testing"),V=(0,s.useTranslation)().t,O=((0,S.useAlert)()||{}).addAlert,A=(0,f.QK)().showModal,N=window.localStorage,R=r().useContext(_.QuickStartContext),x=(0,i.useState)(),B=x[0],L=x[1],U=(0,i.useState)({}),F=U[0],K=U[1],H=(0,i.useState)([]),M=H[0],G=H[1],Q=(0,i.useState)(!1),j=Q[0],q=Q[1],z=(0,i.useState)("created_at desc"),Z=z[0],W=z[1],Y=(0,i.useState)(),J=Y[0],X=Y[1],$=(0,i.useState)(0),ee=$[0],te=$[1],ne=(0,i.useState)(void 0),ae=ne[0],ie=ne[1],re=(0,i.useState)("name"),oe=re[0],se=re[1],le=(0,i.useState)([]),ue=le[0],ce=le[1],de=(0,i.useState)(!1),ve=de[0],fe=de[1],ge=(0,i.useState)(!1),me=ge[0],pe=ge[1],he=(0,i.useState)(!1),_e=he[0],ke=he[1],Ee=(0,i.useState)(void 0),Se=Ee[0],we=Ee[1],Pe=(0,i.useState)(),be=Pe[0],ye=Pe[1],Ce=J||{},Ie=Ce.activeTab,Te=Ce.instanceDetail,De=null==be?void 0:be.some((function(e){return(null==e?void 0:e.instance_type)===(null===m.ik||void 0===m.ik?void 0:m.ik.eval)}));(0,i.useEffect)((function(){if((0,m.Qw)()&&N){var e=parseInt(N.getItem("openSessions")||"0"),t=e+1;e<1&&(N.setItem("openSessions",""+t),pe(!0))}}),[]);var Ve=function(){pe(!me)};(0,i.useEffect)((function(){(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return(t=l)?[4,l()]:[3,2];case 1:t=n.sent(),n.label=2;case 2:return(e=t)&&(null==M?void 0:M.length)<1&&Le(),e&&(null==M?void 0:M.length)>0&&Oe(),[2]}}))}))}),[l,M]);var Oe=function(){A(f.Ny.CREATE_KAFKA_INSTANCE,{onCreate:Fe,cloudProviders:M,mainToggle:D,refresh:Ue,hasUserTrialKafka:De})},Ae=function(e){X({instanceDetail:e,activeTab:"Details"})},Ne=function(e){X({instanceDetail:e,activeTab:"Connection"})},Re=function(e){var t,n,a,i,r;(0,m.G6)(e)&&(i=null===(t=e.response)||void 0===t?void 0:t.data.reason,r=null===(a=null===(n=e.response)||void 0===n?void 0:n.data)||void 0===a?void 0:a.code),r===m.SM.UNAUTHORIZED_USER?fe(!0):O({variant:v.AlertVariant.danger,title:V("common.something_went_wrong"),description:i})},xe=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return i=[],ue.forEach((function(e){var t=e.filterKey,n=e.filterValue;if(n&&n.length>0){var a="(";a+=n.map((function(e){var n=e.value.trim();return n===m.Od.PROVISIONING?t+" = "+m.Od.PREPARING+" or "+t+" = "+m.Od.PROVISIONING:n===m.Od.DEPROVISION?t+" = "+m.Od.DEPROVISION+" or "+t+" = "+m.Od.DELETED:""!==n?t+" "+(!0===e.isExact?"= "+n:"like %"+n+"%"):""})).join(" or "),a+=")",i.push(a)}})),e=i.join(" and "),[4,null==c?void 0:c.kas.getToken()];case 1:if(!(t=a.sent())||!b)return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new E.DefaultApi(new E.Configuration({accessToken:t,basePath:p})).getKafkas(null==I?void 0:I.toString(),null==T?void 0:T.toString(),Z,e).then((function(e){var t=e.data,n=(null==t?void 0:t.items)||[];K(t),L(n),void 0!==(null==F?void 0:F.total)&&F.total>ee&&te(F.total),_e&&ue.length<1&&0==(null==n?void 0:n.length)&&(ie(!0),ke(!1)),q(!0)}))];case 3:return a.sent(),[3,5];case 4:return n=a.sent(),Re(n),[3,5];case 5:return[2]}var i}))}))};(0,i.useEffect)((function(){(!B||(null==B?void 0:B.length)<=1)&&(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,null==c?void 0:c.kas.getToken()];case 1:if(!(e=n.sent())||!b)return[3,5];n.label=2;case 2:return n.trys.push([2,4,,5]),[4,new E.DefaultApi(new E.Configuration({accessToken:e,basePath:p})).getKafkas("1","1").then((function(e){var t,n,a=null===(n=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.items)||void 0===n?void 0:n.length;ie(!a||a<1)}))];case 3:return n.sent(),[3,5];case 4:return t=n.sent(),Re(t),[3,5];case 5:return[2]}}))}))}),[B]);var Be=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==c?void 0:c.kas.getToken()];case 1:if(e=a.sent(),t="owner = "+Se,!e||!b)return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new E.DefaultApi(new E.Configuration({accessToken:e,basePath:p})).getKafkas("","","",t).then((function(e){var t=e.data;ye(t.items)}))];case 3:return a.sent(),[3,5];case 4:return n=a.sent(),Re(n),[3,5];case 5:return[2]}}))}))};(0,i.useEffect)((function(){Se&&Be()}),[Se]),g((function(){return Be()}),m.md);var Le=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n,i;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==c?void 0:c.kas.getToken()];case 1:if(!(e=a.sent()))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new E.DefaultApi(new E.Configuration({accessToken:e,basePath:p})).getCloudProviders().then((function(e){var t,n=(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.items)||[],a=null==n?void 0:n.filter((function(e){return e.enabled}));G(a)}))];case 3:return a.sent(),[3,5];case 4:return t=a.sent(),n=void 0,(0,m.G6)(t)&&(n=null===(i=t.response)||void 0===i?void 0:i.data.reason),O({variant:v.AlertVariant.danger,title:V("common.something_went_wrong"),description:n}),[3,5];case 5:return[2]}}))}))};(0,i.useEffect)((function(){q(!1),xe()}),[c,I,T,ue,Z]),(0,i.useEffect)((function(){Le(),xe()}),[]),(0,i.useEffect)((function(){!function(){if(B&&(null==B?void 0:B.length)>0){var e=null==B?void 0:B.filter((function(e){var t;return(null==e?void 0:e.id)===(null===(t=null==J?void 0:J.instanceDetail)||void 0===t?void 0:t.id)}))[0],t=(0,a.__assign)((0,a.__assign)({},J),{instanceDetail:e});e&&X(t)}}()}),[B]),(0,i.useEffect)((function(){null==c||c.getUsername().then((function(e){return we(e)}))}),[c]),g((function(){return xe()}),m.md);var Ue=function(){B&&1===(null==B?void 0:B.length)?q(!0):q(!1),xe()},Fe=function(){te(F.total+1)},Ke=function(){q(!1),te(F.total-1)};if(ve)return r().createElement(v.PageSection,{variant:v.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},r().createElement(f.C0,{titleProps:{title:V("access_permissions_needed"),headingLevel:"h2"},emptyStateIconProps:{icon:w.ZP},emptyStateBodyProps:{body:V("to_access_kafka_instances_contact_your_organization_administrators")}}));return r().createElement(r().Fragment,null,r().createElement(k.oY,{mainToggle:D,isExpanded:null!=J,activeTab:Ie,isLoading:void 0===Te,instanceDetail:Te,onClose:function(){X(null)},"data-ouia-app-id":"controlPlane-streams",tokenEndPointUrl:n,notRequiredDrawerContentBackground:ae},r().createElement("main",{className:"pf-c-page__main"},r().createElement(v.PageSection,{variant:v.PageSectionVariants.light},r().createElement(v.Level,null,r().createElement(v.LevelItem,null,r().createElement(v.TextContent,null,r().createElement(v.Text,{component:"h1"},V("kafka_instances")))))),void 0===B?r().createElement(v.PageSection,{variant:v.PageSectionVariants.light,padding:{default:"noPadding"}},r().createElement(f.yR,null)):ae?r().createElement(v.PageSection,{padding:{default:"noPadding"},isFilled:!0},r().createElement(f.C0,{emptyStateProps:{variant:f.jU.NoItems},emptyStateBodyProps:{body:r().createElement(r().Fragment,null,V("create_a_kafka_instance_to_get_started")," ",r().createElement(v.Button,{variant:v.ButtonVariant.link,isSmall:!0,isInline:!0,onClick:function(){return R.setActiveQuickStart&&R.setActiveQuickStart("getting-started")}},"quick start guide."))},titleProps:{title:V("no_kafka_instances_yet")}},r().createElement(v.Button,{"data-testid":"emptyStateStreams-buttonCreateKafka",variant:v.ButtonVariant.primary,onClick:function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return t?[4,t(!0)]:[3,2];case 1:e=n.sent(),n.label=2;case 2:return e&&Oe(),[2]}}))}))}},V("create_kafka_instance"))),")"):B&&void 0!==ae?r().createElement(v.PageSection,{className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:v.PageSectionVariants.default,padding:{default:"noPadding"}},r().createElement(v.Card,null,r().createElement(k.fw,{kafkaInstanceItems:B,mainToggle:D,onViewConnection:Ne,onViewInstance:Ae,refresh:Ue,kafkaDataLoaded:j,setWaitingForDelete:ke,onDelete:Ke,page:I,perPage:T,total:null==F?void 0:F.total,expectedTotal:ee,filteredValue:ue,setFilteredValue:ce,setFilterSelected:se,filterSelected:oe,orderBy:Z,setOrderBy:W,isDrawerOpen:null!==J,loggedInUser:Se,currentUserkafkas:be,onCreate:Fe,cloudProviders:M}))):r().createElement(r().Fragment,null))),r().createElement(v.Modal,{variant:v.ModalVariant.small,title:"Mobile experience",isOpen:me,onClose:function(){return Ve()},actions:[r().createElement(v.Button,{key:"confirm",variant:"primary",onClick:function(){return Ve()}},"Ok")]},"The mobile experience isn't fully optimized yet, so some items might not appear correctly."))}}}]);
//# sourceMappingURL=1540.4b8114b6.js.map