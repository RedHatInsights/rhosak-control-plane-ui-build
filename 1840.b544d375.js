"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1840],{27081:()=>{},91329:(e,t,n)=>{n.d(t,{d9:()=>i});var a=n(75418);function r(){return!document[(e=document,void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":"")];var e}function i(){var e=(0,a.useState)(r()),t=e[0],n=e[1],i=function(){return n(r())};return(0,a.useEffect)((function(){var e,t=void 0!==(e=document).hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":"";return document.addEventListener(t,i,!1),function(){document.removeEventListener(t,i)}}),[]),{isVisible:t,setIsVisible:n}}},217:(e,t,n)=>{n.d(t,{o:()=>E});var a=n(75418),r=n.n(a),i=n(31521),l=n(86369),o=n.n(l),s=n(56176),u=n.n(s),c=(n(77903),n(71958),n(28962)),d=n(75381),f=n(84669),v=n(81548),m=n(63286),p=r().lazy((function(){return n.e(3495).then(n.bind(n,43495))})),g=r().lazy((function(){return n.e(4988).then(n.bind(n,44988))})),_=function(e){var t,n=e.tokenEndPointUrl,a=(0,i.useTranslation)().t,l=(0,v.gD)(),o=l.instanceDrawerTab,s=l.setInstanceDrawerTab,u=l.instanceDrawerInstance,_=(null==u?void 0:u.status)===d.Od.ACCEPTED||(null==u?void 0:u.status)===d.Od.PREPARING;return r().createElement(r().Suspense,{fallback:r().createElement(c.yR,null)},r().createElement(f.Tabs,{activeKey:o.toString(),onSelect:function(e,t){return function(e){e===m.Z.CONNECTION?s(m.Z.CONNECTION):s(m.Z.DETAILS)}(t)}},r().createElement(f.Tab,{eventKey:m.Z.DETAILS.toString(),title:r().createElement(f.TabTitleText,null,a("details"))},r().createElement(g,null)),r().createElement(f.Tab,{eventKey:m.Z.CONNECTION.toString(),title:r().createElement(f.TabTitleText,null,a("connection")),"data-testid":"drawerStreams-tabConnect"},r().createElement(p,{externalServer:(t=(u||{}).bootstrap_server_host,(null==t?void 0:t.endsWith(":443"))?t:"".concat(t,":443")),isKafkaPending:_,tokenEndPointUrl:n,instanceId:null==u?void 0:u.id}))))},E=function(e){var t=e.children,n=e["data-ouia-app-id"],a=e.tokenEndPointUrl;o().extend(u());var l=(0,i.useTranslation)().t,s=(0,v.gD)(),d=s.isInstanceDrawerOpen,f=s.instanceDrawerInstance,m=s.closeInstanceDrawer,p=s.noInstances;return r().createElement(c.D5,{isExpanded:d,isLoading:void 0===f,onClose:m,panelBodyContent:r().createElement(_,{tokenEndPointUrl:a}),drawerHeaderProps:{text:{label:l("instance_name")},title:{value:null==f?void 0:f.name,headingLevel:"h1"}},"data-ouia-app-id":n,notRequiredDrawerContentBackground:p},t)}},81548:(e,t,n)=>{n.d(t,{gD:()=>o,e0:()=>s});var a=n(75418),r=n.n(a),i=n(63286),l=r().createContext(void 0),o=function(){var e=(0,a.useContext)(l);if(void 0===e)throw new Error("must be used inside a InstanceDrawerContext provider");return e},s=function(e){var t=e.initialTab,n=e.initialInstance,o=e.initialNoInstances,s=void 0!==o&&o,u=e.children,c=i.Z.DETAILS,d=(0,a.useState)(t),f=d[0],v=d[1],m=(0,a.useState)(n),p=m[0],g=m[1],_=(0,a.useState)(s),E=_[0],h=_[1];return r().createElement(l.Provider,{value:{isInstanceDrawerOpen:void 0!==f,instanceDrawerTab:void 0===f?c:f,setInstanceDrawerTab:v,instanceDrawerInstance:p,setInstanceDrawerInstance:g,setNoInstances:h,noInstances:E,openInstanceDrawer:function(e){v(e||c)},closeInstanceDrawer:function(){v(void 0),g(void 0)}}},u)}},63286:(e,t,n)=>{var a;n.d(t,{Z:()=>a}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(a||(a={}))},51622:(e,t,n)=>{n.d(t,{G:()=>g});var a=n(70655),r=n(75418),i=n.n(r),l=n(31521),o=n(27577),s=n(75381),u=n(84669),c=n(98068),d=n(48635),f=n(28962),v=function(e){var t=e.total,n=e.page,a=e.perPage,r=(0,l.useTranslation)().t;return t>0?i().createElement(f.wu,{widgetId:"pagination-cloudProviderOptions-menu-bottom",itemCount:t,variant:u.PaginationVariant.bottom,page:n,perPage:a,titles:{paginationTitle:r("full_pagination"),perPageSuffix:r("per_page_suffix"),toFirstPage:r("to_first_page"),toPreviousPage:r("to_previous_page"),toLastPage:r("to_last_page"),toNextPage:r("to_next_page"),optionsToggle:r("options_toggle"),currPage:r("curr_page")}}):i().createElement(i().Fragment,null)},m=function(e){var t=e.count,n=e.dataLoaded,a=(0,l.useTranslation)().t;return t<1&&n?i().createElement(f.C0,{emptyStateProps:{variant:f.jU.NoResult},titleProps:{title:a("no_results_found")},emptyStateBodyProps:{body:a("adjust_your_filters_and_try_again")}}):i().createElement(i().Fragment,null)},p=n(81548),g=function(e){var t=e.onDeleteInstance,n=e.onChangeOwner,g=e.onViewInstance,_=e.onViewConnection,E=e.loggedInUser,h=e.page,S=e.perPage,b=e.total,w=e.expectedTotal,I=e.kafkaDataLoaded,F=e.kafkaInstanceItems,D=e.isOrgAdmin,k=e.setOrderBy,C=e.orderBy,O=e.filterSelected,T=e.setFilterSelected,P=e.filteredValue,y=e.setFilteredValue,V=e.onCreate,x=e.refresh,N=e.handleCreateInstanceModal,L=(0,l.useTranslation)().t,M=(0,p.gD)().instanceDrawerInstance,A=[{title:L("name"),transforms:[o.sortable]},{title:L("cloud_provider"),transforms:[o.sortable]},{title:L("region"),transforms:[o.sortable]},{title:L("owner"),transforms:[o.sortable]},{title:L("status"),transforms:[o.sortable]},{title:L("time_created"),transforms:[o.sortable]}],R=(0,r.useMemo)((function(){var e=(null==C?void 0:C.split(" "))||[];if(e.length>1)return{index:function(e){switch(e.toLowerCase()){case"name":return 0;case"cloud_provider":return 1;case"region":return 2;case"owner":return 3;case"status":return 4;case"created_at":return 5;default:return}}(e[0]),direction:e[1]===o.SortByDirection.asc?o.SortByDirection.asc:o.SortByDirection.desc}}),[C]),G=(0,r.useMemo)((function(){var e=[],t=(0,s.o8)(h,S,w);return I?(null==F||F.forEach((function(t){var n=t.name,a=t.cloud_provider,r=t.region,l=t.created_at,o=t.status,u=t.owner,f=t.instance_type,v=L(a),m=L(r);e.push({cells:[{title:o===s.Od.DEPROVISION||o!==s.Od.READY?n:i().createElement(c.Link,{to:"kafkas/".concat(null==t?void 0:t.id,"/dashboard")},n)},v,m,u,{title:i().createElement(d.qV,{status:o,instanceName:n})},{title:i().createElement(i().Fragment,null,(0,s.L0)(l,L("ago")),i().createElement("br",null),f===(null===s.ik||void 0===s.ik?void 0:s.ik.eval)&&"48 hours duration")}],originalData:t})})),e):(0,s.vK)({loadingCount:t,skeleton:i().createElement(u.Skeleton,null),length:A.length})}),[h,S,w,I,F]),B=function(e,t,a){var r,i,l;"view-instanceDrawerInstance"===a?g(t):"connect-instanceDrawerInstance"===a?_(t):"change-owner"===a?n(t):"delete-instanceDrawerInstance"===a&&K(t);var o=null===(l=null===(i=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.parentElement)||void 0===i?void 0:i.parentElement)||void 0===l?void 0:l.previousSibling;null!=o&&o.focus()},K=function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,t(e)];case 1:return n.sent(),[2]}}))}))};return i().createElement(i().Fragment,null,i().createElement(d.eG,{filterSelected:O,setFilterSelected:T,total:b,page:h,perPage:S,filteredValue:P,setFilteredValue:y,onCreate:V,refresh:x,handleCreateInstanceModal:N}),i().createElement(f.wR,{tableProps:{cells:A,rows:G,"aria-label":L("cluster_instance_list"),actionResolver:function(e){var t,n,r,i;if(!I)return[];var l=e.originalData;if(l.status===s.Od.DEPROVISION||l.status===s.Od.DELETED)return[];var o,u=l.owner===E||D;return u||(o={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}}),[(0,a.__assign)((0,a.__assign)((t={title:L("view_details"),id:"view-instanceDrawerInstance"},t["data-testid"]="tableStreams-actionDetails",t.onClick=function(e){return B(e,l,"view-instanceDrawerInstance")},t),o),{tooltipProps:{position:"left",content:L("no_permission_to_view_kafka")}}),(0,a.__assign)((0,a.__assign)((n={title:L("view_connection_information"),id:"connect-instanceDrawerInstance"},n["data-testid"]="tableStreams-actionConnection",n.onClick=function(e){return B(e,l,"connect-instanceDrawerInstance")},n),o),{tooltipProps:{position:"left",content:L("no_permission_to_connect_kafka")}}),(0,a.__assign)((0,a.__assign)((r={title:L("change_owner"),id:"change-owner"},r["data-testid"]="tableStreams-actionChangeOwner",r.onClick=function(e){return u&&B(e,l,"change-owner")},r),o),{tooltipProps:{position:"left",content:L("no_permission_to_change_owner")}}),(0,a.__assign)((0,a.__assign)((i={title:L("delete_instance"),id:"delete-instanceDrawerInstance"},i["data-testid"]="tableStreams-actionDelete",i.onClick=function(e){return u&&B(e,l,"delete-instanceDrawerInstance")},i),o),{tooltipProps:{position:"left",content:L("no_permission_to_delete_kafka")}})]},onSort:function(e,t,n,a){var r=n;(null==R?void 0:R.index)!==t&&"time-created"===a.property&&(r=o.SortByDirection.desc),k("".concat(function(e){switch(e){case 0:return"name";case 1:return"cloud_provider";case 2:return"region";case 3:return"owner";case 4:return"status";case 5:return"created_at";default:return""}}(t)," ").concat(r))},sortBy:R,hasDefaultCustomRowWrapper:!0},activeRow:null==M?void 0:M.name,onRowClick:function(e,t,n){if(e.target instanceof HTMLElement){var a=e.target.tagName.toLowerCase();if("button"===a||"a"===a)return}g(null==n?void 0:n.originalData)},rowDataTestId:"tableStreams-row",loggedInUser:E}),i().createElement(m,{count:(null==F?void 0:F.length)||0,dataLoaded:I}),i().createElement(v,{total:b,page:h,perPage:S}))}},51840:(e,t,n)=>{n.d(t,{V:()=>D});var a=n(70655),r=n(75418),i=n.n(r),l=n(98068),o=n(31521),s=n(56176),u=n.n(s),c=n(86369),d=n.n(c),f=n(84669),v=n(28962);function m(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){n.current=e}),[e]),(0,r.useEffect)((function(){if(null!==t){var e=setTimeout((function(){n.current()}),t);return function(){clearInterval(e)}}}),[e,t])}var p=n(75381),g=n(91329),_=n(80881),E=n(46332),h=n(13449),S=(n(27081),n(48635)),b=n(81548),w=n(63286),I=n(51622),F=function(){var e=(0,o.useTranslation)().t,t=((0,E.useAlert)()||{}).addAlert,n=(0,E.useAuth)(),l=(0,r.useState)([]),s=l[0],u=l[1],c=(0,r.useState)(),d=c[0],v=c[1],h=(0,r.useState)([]),S=h[0],b=h[1],w=(0,r.useState)(void 0),I=w[0],F=w[1],D=(0,g.d9)().isVisible,k=(kas||{}).apiBasePath;(0,r.useEffect)((function(){var e;null===(e=n.getUsername())||void 0===e||e.then((function(e){return F(e)}))}),[n]);var C=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var r,i;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==n?void 0:n.kas.getToken()];case 1:if(r=a.sent(),i="owner = ".concat(I),!r||!D)return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new _.DefaultApi(new _.Configuration({accessToken:r,basePath:k})).getKafkas("","","",i).then((function(e){var t=e.data;v(t.items)}))];case 3:return a.sent(),[3,5];case 4:return function(n){var a,r;(0,p.G6)(n)&&(r=null===(a=n.response)||void 0===a?void 0:a.data.reason),t({variant:f.AlertVariant.danger,title:e("common.something_went_wrong"),description:r})}(a.sent()),[3,5];case 5:return[2]}}))}))};(0,r.useEffect)((function(){I&&C()}),[I]),m((function(){return C()}),p.md);var O=function(){if(d){var n=d.filter((function(e){return e.status===p.Od.DEPROVISION||e.status===p.Od.DELETED})).filter((function(e){return s.findIndex((function(t){return t===e.name}))<0})).map((function(e){return e.name||""})),r=(0,a.__spreadArray)((0,a.__spreadArray)([],s,!0),n,!0);u(r),r.forEach((function(n){(null==d?void 0:d.findIndex((function(e){return e.name===n})))<0&&(!function(e){var t=s.findIndex((function(t){return t===e}));if(t>-1){var n=Object.assign([],s);n.splice(t,1),u(n)}}(n),t&&t({title:e("kafka_successfully_deleted",{name:n}),variant:f.AlertVariant.success}))}))}};return(0,r.useEffect)((function(){O(),function(){var n=JSON.parse(JSON.stringify(S));if(S&&S.length>0){var a=Object.assign([],d).filter((function(e){return e.status===p.Od.READY||e.status===p.Od.FAILED}));n.forEach((function(n){var r,l,o=a.filter((function(e){return n.id===e.id}));o&&o.length>0&&(o[0].status===p.Od.READY?t&&t({title:e("kafka_successfully_created"),variant:f.AlertVariant.success,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:e("kafka_success_message",{name:null===(r=o[0])||void 0===r?void 0:r.name})}}),dataTestId:"toastCreateKafka-success"}):o[0].status===p.Od.FAILED&&t&&t({title:e("kafka_not_created"),variant:f.AlertVariant.danger,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:e("kafka_failed_message",{name:null===(l=o[0])||void 0===l?void 0:l.name})}}),dataTestId:"toastCreateKafka-failed"}))}))}var r=Object.assign([],null==d?void 0:d.filter((function(e){return e.status===p.Od.PROVISIONING||e.status===p.Od.ACCEPTED})));b(r)}()}),[d]),i().createElement(i().Fragment,null)},D=function(e){var t=e.preCreateInstance;d().extend(u());var n=((0,h.S)()||{}).shouldOpenCreateModal,s=(0,E.useAuth)(),c=(((0,E.useConfig)()||{}).kas||{}).apiBasePath,D=(0,g.d9)().isVisible,k=(0,l.useLocation)(),C=new URLSearchParams(k.search),O=(0,v.h0)()||{},T=O.page,P=void 0===T?1:T,y=O.perPage,V=void 0===y?10:y,x=(0,o.useTranslation)().t,N=((0,E.useAlert)()||{}).addAlert,L=(0,E.useModal)().showModal,M=(0,E.useModal)().showModal,A=(0,E.useModal)(),R=A.hideModal,G=A.showModal,B=(0,b.gD)(),K=B.setInstanceDrawerTab,Z=B.setInstanceDrawerInstance,U=B.instanceDrawerInstance,j=B.setNoInstances,z=(0,l.useHistory)(),H=(0,r.useState)(),q=H[0],Q=H[1],Y=(0,r.useState)(!1),J=Y[0],W=Y[1],$=(0,r.useState)(3),X=$[0],ee=$[1],te=(0,r.useState)("created_at desc"),ne=te[0],ae=te[1],re=(0,r.useState)("name"),ie=re[0],le=re[1],oe=(0,r.useState)([]),se=oe[0],ue=oe[1],ce=(0,r.useState)(!1),de=ce[0],fe=ce[1],ve=(0,r.useState)(void 0),me=ve[0],pe=ve[1],ge=(0,r.useState)(),_e=ge[0],Ee=ge[1],he=(0,r.useState)(!1),Se=he[0],be=he[1];(0,r.useEffect)((function(){(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return(e=n)?[4,n()]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&we(),[2]}}))}))}),[n]);var we=function(){L(E.ModalType.KasCreateInstance,{onCreate:function(){ke(),De()}})},Ie=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return t?[4,t(!0)]:[3,2];case 1:e=n.sent(),n.label=2;case 2:return e&&we(),[2]}}))}))},Fe=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return a=[],se.forEach((function(e){var t=e.filterKey,n=e.filterValue;if(n&&n.length>0){var r="(";r+=n.map((function(e){var n=e.value.trim();return n===p.Od.PROVISIONING?"".concat(t," = ").concat(p.Od.PREPARING," or ").concat(t," = ").concat(p.Od.PROVISIONING):n===p.Od.DEPROVISION?"".concat(t," = ").concat(p.Od.DEPROVISION," or ").concat(t," = ").concat(p.Od.DELETED):""!==n?"".concat(t," ").concat(!0===e.isExact?"= ".concat(n):"like %".concat(n,"%")):""})).join(" or "),r+=")",a.push(r)}})),e=a.join(" and "),[4,null==s?void 0:s.kas.getToken()];case 1:if(!(t=n.sent())||!D)return[3,5];n.label=2;case 2:return n.trys.push([2,4,,5]),[4,new _.DefaultApi(new _.Configuration({accessToken:t,basePath:c})).getKafkas(null==P?void 0:P.toString(),null==V?void 0:V.toString(),ne,e).then((function(e){var t=e.data,n=(null==t?void 0:t.items)||[];Q(t),void 0!==(null==q?void 0:q.total)&&q.total>X&&ee(q.total),Se&&se.length<1&&0==(null==n?void 0:n.length)&&be(!1),W(!0)}))];case 3:return n.sent(),[3,5];case 4:return function(e){var t,n,a,r,i;(0,p.G6)(e)&&(r=null===(t=e.response)||void 0===t?void 0:t.data.reason,i=null===(a=null===(n=e.response)||void 0===n?void 0:n.data)||void 0===a?void 0:a.code),i===p.SM.UNAUTHORIZED_USER?fe(!0):N&&N({variant:f.AlertVariant.danger,title:x("common.something_went_wrong"),description:r})}(n.sent()),[3,5];case 5:return[2]}var a}))}))};(0,r.useEffect)((function(){W(!1),Fe()}),[s,P,V,se,ne]),(0,r.useEffect)((function(){var e;if(void 0!==q&&(null==q?void 0:q.size)>0){var t=null===(e=q.items)||void 0===e?void 0:e.find((function(e){return(null==e?void 0:e.id)===(null==U?void 0:U.id)}));void 0!==t&&Z(t)}}),[null==q?void 0:q.items]),(0,r.useEffect)((function(){j(0===(null==q?void 0:q.size))}),[null==q?void 0:q.size]),(0,r.useEffect)((function(){var e,t;null===(e=s.getUsername())||void 0===e||e.then((function(e){return pe(e)})),null===(t=s.isOrgAdmin())||void 0===t||t.then((function(e){return Ee(e)}))}),[s]),m((function(){return Fe()}),p.md);var De=function(){1===(null==q?void 0:q.size)?W(!0):W(!1),Fe()},ke=function(){ee((void 0===q?0:q.total)+1)},Ce=function(){W(!1),ee((void 0===q?0:q.total)-1)},Oe=(0,r.useCallback)((function(e,t){C.set(e,t.toString())}),[C]);(0,r.useEffect)((function(){P>1&&void 0!==(null==q?void 0:q.items)&&0===q.size&&(Oe("page",(P-1).toString()),Oe("perPage",V.toString()),z.push({search:C.toString()}))}),[P,V,null==q?void 0:q.items]);var Te=function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var t,n,r,i,l;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(void 0===e.id)throw new Error("kafka instanceDrawerInstance id is not set");return[4,null==s?void 0:s.kas.getToken()];case 1:t=a.sent(),n=new _.DefaultApi(new _.Configuration({accessToken:t,basePath:c})),Ce(),R(),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,n.deleteKafkaById(e.id,!0).then((function(){be(!0),De()}))];case 3:return a.sent(),[3,5];case 4:return r=a.sent(),i=void 0,(0,p.G6)(r)&&(i=null===(l=r.response)||void 0===l?void 0:l.data.reason),N&&N({title:x("common.something_went_wrong"),variant:f.AlertVariant.danger,description:i}),[3,5];case 5:return[2]}}))}))};if(de)return i().createElement(S.NI,null);var Pe=J&&se.length<1&&void 0!==q&&(null==q?void 0:q.total)<1;return Pe?i().createElement(S.hs,{handleCreateInstanceModal:Ie}):void 0!==Pe?i().createElement(f.PageSection,{className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:f.PageSectionVariants.default,padding:{default:"noPadding"}},i().createElement(f.Card,null,i().createElement(I.G,{onDeleteInstance:function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return t=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return[4,Te(e)];case 1:return t.sent(),Ce(),[2]}}))}))},e.status!==p.Od.FAILED?[3,2]:[4,t()];case 1:return n.sent(),[3,3];case 2:G(E.ModalType.KasDeleteInstance,{onDelete:t,kafka:e}),n.label=3;case 3:return[2]}}))}))},onViewInstance:function(e){Z(e),K(w.Z.DETAILS)},onViewConnection:function(e){Z(e),K(w.Z.CONNECTION)},onChangeOwner:function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){return M(E.ModalType.KasTransferOwnership,{kafka:e,refreshKafkas:De}),[2]}))}))},loggedInUser:me,page:P,perPage:V,total:X,isOrgAdmin:_e,expectedTotal:X,kafkaDataLoaded:J,kafkaInstanceItems:null==q?void 0:q.items,setOrderBy:ae,setFilterSelected:le,setFilteredValue:ue,filteredValue:se,handleCreateInstanceModal:Ie,orderBy:ne,filterSelected:ie,onCreate:ke,refresh:De})),i().createElement(F,null)):i().createElement(i().Fragment,null)}},48635:(e,t,n)=>{n.d(t,{hs:()=>y,LF:()=>x,qV:()=>d,eG:()=>C,NI:()=>T});n(51622);var a=n(75418),r=n.n(a),i=n(31521),l=n(84669),o=n(35451),s=n(41942),u=n(84564),c=n(52648),d=function(e){var t=e.status,n=e.instanceName,a=(0,i.useTranslation)().t,d=function(){switch(null==t?void 0:t.toLowerCase()){case c.hm[0].value:return r().createElement(o.ZP,{className:"mk--instances__table--icon--completed"});case c.hm[1].value:return r().createElement(u.ZP,{className:"mk--instances__table--icon--failed"});case c.hm[2].value:return r().createElement(s.ZP,null);case c.hm[3].value:case c.hm[4].value:return r().createElement(l.Spinner,{size:"md","aria-label":n,"aria-valuetext":"Creation in progress"});case c.hm[5].value:case c.hm[6].value:return;default:return r().createElement(s.ZP,null)}};return r().createElement(l.Flex,null,r().createElement((function(){var e=d();return e?r().createElement(l.FlexItem,{spacer:{default:"spacerSm"}},e):r().createElement(r().Fragment,null)}),null),r().createElement(l.FlexItem,null,r().createElement((function(){var e=c.hm.filter((function(e){return e.value===(null==t?void 0:t.toLowerCase())}));return 1===e.length?a(e[0].value):a("creation_pending")}),null)))},f=n(8755),v=n(28962),m=n(75381),p=function(e,t){var n=(0,i.useTranslation)().t;return e?r().createElement("div",null,n("max_filter_message")):"owner"===t?r().createElement("div",null,n("owner_field_invalid_message",{name:t})):r().createElement("div",null,n("input_field_invalid_message",{name:t}))},g=function(e){var t,n=e.getSelectionForFilter,a=e.filterSelected,o=e.onDeleteChipGroup,s=e.onDeleteChip,u=e.updateFilter,c=e.isMaxFilter,d=e.removeFilterValue,f=e.isDisabledSelectOption,v=(0,i.useTranslation)().t,p=m.bv.map((function(e){return{label:v(e.value),value:e.value,disabled:!1}}));return r().createElement(l.ToolbarFilter,{chips:null===(t=n("cloud_provider"))||void 0===t?void 0:t.map((function(e){return v(e)})),deleteChip:function(e,t){return s&&s("cloud_provider",t,p)},deleteChipGroup:function(){return o&&o("cloud_provider")},categoryName:v("cloud_provider"),showToolbarItem:"cloud_provider"===a},r().createElement(_,{updateFilter:u,isMaxFilter:c,removeFilterValue:d,isDisabledSelectOption:f,options:p,getSelectionForFilter:n,filterSelected:a}))},_=function(e){var t=e.updateFilter,n=e.isMaxFilter,o=e.removeFilterValue,s=e.isDisabledSelectOption,u=e.options,c=e.getSelectionForFilter,d=e.filterSelected,f=(0,i.useTranslation)().t,v=(0,a.useRef)(null),m=p(n),g=function(){return n?r().createElement(l.Tooltip,{isVisible:n,content:m,reference:v}):r().createElement(r().Fragment,null)},_=(0,a.useState)(!1),E=_[0],h=_[1],S=function(){o&&o("cloud_provider"),h(!1)};return"cloud_provider"===d?r().createElement(l.Select,{id:"cloud-provider-select",variant:l.SelectVariant.checkbox,"aria-label":"Select cloud provider",onToggle:function(){h((function(e){return!e}))},selections:c("cloud_provider"),isOpen:E,onSelect:function(e,n,a){a&&S(),t("cloud_provider",{value:n.toString(),isExact:!0},!0),u.length<2&&h(!1)},placeholderText:f("filter_by_cloud_provider"),className:"select-custom-width",ref:v},u.map((function(e,t){return r().createElement(l.SelectOption,{isDisabled:!!e.disabled||n&&s("cloud_provider",e.value),key:t,value:e.value},r().createElement(g,null),e.label)}))):r().createElement(r().Fragment,null)},E=n(71070),h=function(e){var t,n=e.getSelectionForFilter,o=e.onDeleteChip,s=e.onDeleteChipGroup,u=e.filterSelected,c=e.isMaxFilter,d=e.updateFilter,f=(0,i.useTranslation)().t,v=(0,a.useState)(!0),m=v[0],g=v[1],_=(0,a.useState)(),h=_[0],S=_[1],b=(0,a.useRef)(null),w=p(c,"name"),I=function(e){S(e),!m&&g(!0)},F=function(e){"Enter"!==e.key||c||D()},D=function(){h&&""!=h.trim()&&(!function(e){return!e||/^([a-zA-Z0-9-_%]*[a-zA-Z0-9-_%])?$/.test(e.trim())}(h)?g(!1):(d("name",{value:h,isExact:!1},!1),S("")))};return r().createElement(l.ToolbarFilter,{chips:n("name"),deleteChip:function(e,t){return o("name",t)},deleteChipGroup:function(){return s("name")},categoryName:f("name"),showToolbarItem:"name"===(null==u?void 0:u.toLowerCase())},(t=!m||c,"name"===(null==u?void 0:u.toLowerCase())?r().createElement(l.InputGroup,null,r().createElement(l.TextInput,{name:"name",id:"filterText",type:"search","aria-label":"Search filter input",validated:t?l.ValidatedOptions.error:l.ValidatedOptions.default,placeholder:f("filter_by_name_lower"),onChange:I,onKeyPress:F,value:h,ref:b}),r().createElement(l.Button,{variant:l.ButtonVariant.control,isDisabled:!m||c,onClick:function(){return D()},"aria-label":"Search instances"},r().createElement(E.ZP,null)),r().createElement((function(){return t?r().createElement(l.Tooltip,{isVisible:c||!m,content:w,reference:b}):r().createElement(r().Fragment,null)}),null)):r().createElement(r().Fragment,null)))},S=function(e){var t=e.getSelectionForFilter,n=e.onDeleteChipGroup,o=e.onDeleteChip,s=e.filterSelected,u=e.isMaxFilter,c=e.updateFilter,d=(0,i.useTranslation)().t,f=(0,a.useRef)(null),v=p(u,"owner"),m=(0,a.useState)(),g=m[0],_=m[1],h=(0,a.useState)(!0),S=h[0],b=h[1],w=function(){g&&""!=g.trim()&&(!function(e){return!e||!/["$^<>|+%/;:,\s*=~#()]/.test(e.trim())}(g)?b(!1):(c("owner",{value:g,isExact:!1},!1),_("")))},I=function(e){"Enter"!==e.key||u||w()},F=function(e){_(e),!S&&b(!0)};return r().createElement(l.ToolbarFilter,{chips:t("owner"),deleteChip:function(e,t){return o("owner",t)},deleteChipGroup:function(){return n("owner")},categoryName:d("owner"),showToolbarItem:"owner"===(null==s?void 0:s.toLowerCase())},function(){if("owner"===(null==s?void 0:s.toLowerCase())){var e=!S||u;return r().createElement(l.InputGroup,null,r().createElement(l.TextInput,{name:"owner",id:"filterOwners",type:"search","aria-label":"Search filter input",placeholder:d("filter_by_owner"),validated:e?l.ValidatedOptions.error:l.ValidatedOptions.default,onChange:F,onKeyPress:I,value:g,ref:f}),r().createElement(l.Button,{isDisabled:e,variant:l.ButtonVariant.control,onClick:w,"aria-label":"Search owners"},r().createElement(E.ZP,null)),r().createElement((function(){return e?r().createElement(l.Tooltip,{isVisible:u||!S,content:v,reference:f}):r().createElement(r().Fragment,null)}),null))}return r().createElement(r().Fragment,null)}())},b=function(e){var t,n=e.getSelectionForFilter,a=e.onDeleteChip,o=e.onDeleteChipGroup,s=e.removeFilterValue,u=e.isDisabledSelectOption,c=e.isMaxFilter,d=e.filterSelected,f=e.updateFilter,v=(0,i.useTranslation)().t,p=m.Bh.map((function(e){return{label:v(e.value),value:e.value,disabled:!1}}));return r().createElement(l.ToolbarFilter,{chips:null===(t=n("region"))||void 0===t?void 0:t.map((function(e){return v(e)})),deleteChip:function(e,t){return a("region",t,p)},deleteChipGroup:function(){return o("region")},categoryName:v("region"),showToolbarItem:"region"===d},r().createElement(w,{updateFilter:f,isMaxFilter:c,removeFilterValue:s,isDisabledSelectOption:u,options:p,getSelectionForFilter:n,filterSelected:d}))},w=function(e){var t=e.updateFilter,n=e.isMaxFilter,o=e.removeFilterValue,s=e.isDisabledSelectOption,u=e.options,c=e.getSelectionForFilter,d=e.filterSelected,f=(0,i.useTranslation)().t,v=(0,a.useRef)(null),m=p(n),g=(0,a.useState)(!1),_=g[0],E=g[1],h=function(){return n?r().createElement(l.Tooltip,{isVisible:n,content:m,reference:v}):r().createElement(r().Fragment,null)},S=function(){o("region"),E(!1)};return"region"===d?r().createElement(l.Select,{id:"region-select",variant:l.SelectVariant.checkbox,"aria-label":"Select region",onToggle:function(){E(!_)},selections:c("region"),isOpen:_,onSelect:function(e,n,a){a&&S(),t("region",{value:n.toString(),isExact:!0},!0),u.length<2&&E(!1)},placeholderText:f("filter_by_region"),className:"select-custom-width",ref:v},u.map((function(e,t){return r().createElement(l.SelectOption,{isDisabled:!!e.disabled||n&&s("region",e.value),key:t,value:e.value},r().createElement(h,null),e.label)}))):r().createElement(r().Fragment,null)},I=function(e){var t=e.setFilterSelected,n=e.filterSelected,o=(0,i.useTranslation)().t,s=(0,a.useState)(!1),u=s[0],c=s[1],d=[{label:o("name"),value:"name",disabled:!1},{label:o("cloud_provider"),value:"cloud_provider",disabled:!1},{label:o("region"),value:"region",disabled:!1},{label:o("owner"),value:"owner",disabled:!1},{label:o("status"),value:"status",disabled:!1}];return r().createElement(l.ToolbarItem,null,r().createElement(l.Select,{variant:l.SelectVariant.single,"aria-label":"Select filter",onToggle:function(){c(!u)},selections:n,isOpen:u,onSelect:function(e,n){c(!u),t(null==n?void 0:n.toString())}},d.map((function(e,t){return r().createElement(l.SelectOption,{isDisabled:e.disabled,key:t,value:e.value},e.label)}))))},F=function(e){var t,n=e.getSelectionForFilter,a=e.onDeleteChip,o=e.onDeleteChipGroup,s=e.isMaxFilter,u=e.filterSelected,c=e.updateFilter,d=e.removeFilterValue,f=e.isDisabledSelectOption,v=(0,i.useTranslation)().t,p=m.hm.filter((function(e){return e.value!==m.Od.PREPARING&&e.value!==m.Od.DELETED})).map((function(e){return{label:v(e.value),value:e.value,disabled:!1}}));return r().createElement(l.ToolbarFilter,{chips:null===(t=n("status"))||void 0===t?void 0:t.map((function(e){return v(e)})),deleteChip:function(e,t){return a("status",t,p)},deleteChipGroup:function(){return o("status")},categoryName:v("status"),showToolbarItem:"status"===u},r().createElement(D,{updateFilter:c,isMaxFilter:s,removeFilterValue:d,isDisabledSelectOption:f,statusFilterOptions:p,getSelectionForFilter:n,filterSelected:u}))},D=function(e){var t=e.updateFilter,n=e.isMaxFilter,o=e.removeFilterValue,s=e.isDisabledSelectOption,u=e.statusFilterOptions,c=e.getSelectionForFilter,d=e.filterSelected,f=(0,i.useTranslation)().t,v=p(n),m=(0,a.useRef)(null),g=(0,a.useState)(!1),_=g[0],E=g[1],h=function(){return n?r().createElement(l.Tooltip,{isVisible:n,content:v,reference:m}):r().createElement(r().Fragment,null)},S=function(){o("status"),E(!1)};return"status"===d?r().createElement(l.Select,{id:"status-select",variant:l.SelectVariant.checkbox,"aria-label":"Select status",onToggle:function(){E(!_)},selections:c("status"),isOpen:_,onSelect:function(e,n,a){a&&S(),t("status",{value:n.toString(),isExact:!0},!0)},placeholderText:f("filter_by_status"),className:"select-custom-width",ref:m},u.map((function(e,t){return r().createElement(l.SelectOption,{isDisabled:!!e.disabled||n&&s("status",e.value),key:t,value:e.value},r().createElement(h,null),e.label)}))):r().createElement(r().Fragment,null)},k=function(e){var t=e.isMaxFilter,n=e.filteredValue,a=e.setFilteredValue,i=e.filterSelected,o=e.setFilterSelected,s=function(e,t){var a,r=null==n?void 0:n.filter((function(t){return t.filterKey===e}));if(r&&(null==r?void 0:r.length)>0){var i=r[0].filterValue;a=null==i?void 0:i.find((function(e){return e.value===t}))}return!a},u=function(e,t,r){var i=Object.assign([],n),l=i.findIndex((function(t){return t.filterKey===e}));if(l>-1){var o=i[l];if(o.filterValue&&o.filterValue.length>0){var s=o.filterValue.findIndex((function(e){return e.value===t.value}));if(s>-1){if(!r)return;o.filterValue.splice(s,1)}else i[l].filterValue.push(t)}else i[l].filterValue=[t]}else i.push({filterKey:e,filterValue:[t]});a(i)},c=function(e){var t=n.filter((function(t){return t.filterKey===e}));if(t.length>0)return t[0].filterValue.map((function(e){return e.value}))},d=function(e,t,r){var i,l,o=Object.assign([],n),s=o.findIndex((function(t){return t.filterKey===e})),u=Object.assign([],null===(i=o[s])||void 0===i?void 0:i.filterValue),c=t.toString();r&&(null==r?void 0:r.length)>0&&(c=null===(l=null==r?void 0:r.find((function(e){return e.label===t.toString()})))||void 0===l?void 0:l.value);var d=u.findIndex((function(e){return e.value===c}));d>=0&&(o[s].filterValue.splice(d,1),a(o))},f=function(e){var t=Object.assign([],n),r=t.findIndex((function(t){return t.filterKey===e}));r>=0&&(t.splice(r,1),a(t))},v=function(e){var t=Object.assign([],n),r=t.findIndex((function(t){return t.filterKey===e}));r>=0&&t.splice(r,1),a(t)};return r().createElement(r().Fragment,null,r().createElement(l.ToolbarGroup,{variant:"filter-group"},r().createElement(I,{setFilterSelected:o,filterSelected:i}),r().createElement(h,{isMaxFilter:t,filterSelected:i,getSelectionForFilter:c,updateFilter:u,onDeleteChip:d,onDeleteChipGroup:f,removeFilterValue:v,isDisabledSelectOption:s}),r().createElement(g,{isMaxFilter:t,filterSelected:i,getSelectionForFilter:c,updateFilter:u,onDeleteChip:d,onDeleteChipGroup:f,removeFilterValue:v,isDisabledSelectOption:s}),r().createElement(b,{isMaxFilter:t,filterSelected:i,getSelectionForFilter:c,updateFilter:u,onDeleteChip:d,onDeleteChipGroup:f,removeFilterValue:v,isDisabledSelectOption:s}),r().createElement(S,{isMaxFilter:t,filterSelected:i,getSelectionForFilter:c,updateFilter:u,onDeleteChip:d,onDeleteChipGroup:f,removeFilterValue:v,isDisabledSelectOption:s}),r().createElement(F,{isMaxFilter:t,filterSelected:i,getSelectionForFilter:c,updateFilter:u,onDeleteChip:d,onDeleteChipGroup:f,removeFilterValue:v,isDisabledSelectOption:s})))},C=function(e){var t=e.setFilterSelected,n=e.filterSelected,o=void 0===n?"name":n,s=e.total,u=e.page,c=e.perPage,d=e.filteredValue,p=e.setFilteredValue,g=e.handleCreateInstanceModal,_=(0,i.useTranslation)().t,E=(0,a.useState)(!1),h=E[0],S=E[1];(0,a.useEffect)((function(){b()}),[d]);var b=function(){var e=0;null==d||d.forEach((function(t){var n=t.filterValue,a=t.filterKey,r="status"===a?null==n?void 0:n.filter((function(e){return e.value===m.Od.PROVISIONING})):[],i="status"===a?null==n?void 0:n.filter((function(e){return e.value===m.Od.DEPROVISION})):[];(null==r?void 0:r.length)>0&&(null==i?void 0:i.length)>0?e+=(null==n?void 0:n.length)+2:(null==r?void 0:r.length)>0||(null==i?void 0:i.length)>0?e+=(null==n?void 0:n.length)+1:e+=null==n?void 0:n.length})),e>=m.pf?S(!0):S(!1)},w=[{item:r().createElement(l.Button,{variant:"primary",onClick:g,"data-testid":"tableStreams-buttonCreateKafka"},_("create_kafka_instance"))}];return s&&s>0&&w.push({item:r().createElement(v.wu,{widgetId:"pagination-cloudProviderOptions-menu-top",itemCount:s,page:u,perPage:c,isCompact:!0,titles:{paginationTitle:_("minimal_pagination"),perPageSuffix:_("per_page_suffix"),toFirstPage:_("to_first_page"),toPreviousPage:_("to_previous_page"),toLastPage:_("to_last_page"),toNextPage:_("to_next_page"),optionsToggle:_("options_toggle"),currPage:_("curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),r().createElement(v.L5,{toolbarProps:{id:"instanceDrawerInstance-toolbar",clearAllFilters:function(){p([]),S(!1)},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:r().createElement(f.ZP,null),breakpoint:"md"},toggleGroupItems:r().createElement(k,{isMaxFilter:h,filteredValue:d,setFilteredValue:p,setFilterSelected:t,filterSelected:o}),toolbarItems:w})},O=n(5569),T=function(){var e=(0,i.useTranslation)().t;return r().createElement(l.PageSection,{variant:l.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},r().createElement(v.C0,{titleProps:{title:e("access_permissions_needed"),headingLevel:"h2"},emptyStateIconProps:{icon:O.ZP},emptyStateBodyProps:{body:e("to_access_kafka_instances_contact_your_organization_administrators")}}))},P=n(10069),y=function(e){var t=e.handleCreateInstanceModal,n=(0,i.useTranslation)().t,a=r().useContext(P.QuickStartContext);return r().createElement(l.PageSection,{padding:{default:"noPadding"},isFilled:!0},r().createElement(v.C0,{emptyStateProps:{variant:v.jU.NoItems},emptyStateBodyProps:{body:r().createElement(r().Fragment,null,r().createElement(i.Trans,{i18nKey:"create_a_kafka_instance_to_get_started",components:[r().createElement(l.Button,{variant:l.ButtonVariant.link,isSmall:!0,isInline:!0,key:"btn-quick-start",onClick:function(){return a.setActiveQuickStart&&a.setActiveQuickStart("getting-started")}})]}))},titleProps:{title:n("no_kafka_instances_yet")}},r().createElement(l.Button,{"data-testid":"emptyStateStreams-buttonCreateKafka",variant:l.ButtonVariant.primary,onClick:function(){return t&&t()}},n("create_kafka_instance"))))},V=n(217),x=function(e){var t=e.children,n=e.tokenEndPointUrl,o=(0,i.useTranslation)().t,s=(0,a.useState)(!1),u=s[0],c=s[1];(0,a.useEffect)((function(){if((0,m.Qw)()){var e=window.localStorage;if(e){var t=parseInt(e.getItem("openSessions")||"0"),n=t+1;t<1&&(e.setItem("openSessions","".concat(n)),c(!0))}}}),[]);var d=function(){c(!u)};return r().createElement(r().Fragment,null,r().createElement(V.o,{"data-ouia-app-id":"controlPlane-streams",tokenEndPointUrl:n},r().createElement("main",{className:"pf-c-page__main"},r().createElement(l.PageSection,{variant:l.PageSectionVariants.light},r().createElement(l.Level,null,r().createElement(l.LevelItem,null,r().createElement(l.TextContent,null,r().createElement(l.Text,{component:"h1"},o("kafka_instances")))))),t)),r().createElement(l.Modal,{variant:l.ModalVariant.small,title:"Mobile experience",isOpen:u,onClose:function(){return d()},actions:[r().createElement(l.Button,{key:"confirm",variant:"primary",onClick:function(){return d()}},"Ok")]},"The mobile experience isn't fully optimized yet, so some items might not appear correctly."))}}}]);
