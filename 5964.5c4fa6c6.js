"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[5964],{27081:()=>{},94622:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(85893),i=a(75418),s=a(8898),r=a(7451);const l=()=>{const{registerModals:e}=(0,r.useModal)();return e((()=>{const{t:e}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return{[r.ModalType.KasCreateInstance]:{lazyComponent:(0,i.lazy)((()=>Promise.all([a.e(223),a.e(1803),a.e(4734),a.e(69),a.e(6437)]).then(a.bind(a,76437)))),variant:"medium",title:e("create_a_kafka_instance")},[r.ModalType.KasDeleteInstance]:{lazyComponent:(0,i.lazy)((()=>Promise.all([a.e(223),a.e(5052),a.e(9421),a.e(1803),a.e(8199),a.e(4734),a.e(8827),a.e(524)]).then(a.bind(a,78578)))),variant:"small"},[r.ModalType.KasTransferOwnership]:{lazyComponent:(0,i.lazy)((()=>Promise.all([a.e(223),a.e(9421),a.e(4734),a.e(8512)]).then(a.bind(a,98512)))),variant:"medium",title:e("change_owner")},[r.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,i.lazy)((()=>Promise.all([a.e(223),a.e(5052),a.e(9421),a.e(1803),a.e(8199),a.e(4734),a.e(8827),a.e(8752)]).then(a.bind(a,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[r.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,i.lazy)((()=>Promise.all([a.e(223),a.e(5052),a.e(9421),a.e(1803),a.e(8199),a.e(4734),a.e(8827),a.e(645)]).then(a.bind(a,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[r.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,i.lazy)((()=>Promise.all([a.e(223),a.e(5052),a.e(9421),a.e(1803),a.e(8199),a.e(4734),a.e(8827),a.e(4410)]).then(a.bind(a,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,n.jsx)(n.Fragment,{})}},217:(e,t,a)=>{a.d(t,{o:()=>x});var n=a(85893),i=a(75418),s=a(8898),r=a(86369),l=a.n(r),o=a(56176),c=a.n(o),d=(a(77903),a(71958),a(28962)),u=a(75381),p=a(99421),v=a(81548),g=a(63286);const m=(0,i.lazy)((()=>a.e(3495).then(a.bind(a,43495)))),f=(0,i.lazy)((()=>a.e(4988).then(a.bind(a,44988)))),h=({tokenEndPointUrl:e})=>{const{t}=(0,s.useTranslation)(["kasTemporaryFixMe"]),{instanceDrawerTab:a,setInstanceDrawerTab:r,instanceDrawerInstance:l}=(0,v.gD)(),o=(null==l?void 0:l.status)===u.Od.ACCEPTED||(null==l?void 0:l.status)===u.Od.PREPARING;return(0,n.jsx)(i.Suspense,Object.assign({fallback:(0,n.jsx)(d.yR,{})},{children:(0,n.jsxs)(p.Tabs,Object.assign({activeKey:a.toString(),onSelect:(e,t)=>(e=>{e===g.Z.CONNECTION?r(g.Z.CONNECTION):r(g.Z.DETAILS)})(t)},{children:[(0,n.jsx)(p.Tab,Object.assign({eventKey:g.Z.DETAILS.toString(),title:(0,n.jsx)(p.TabTitleText,{children:t("details")})},{children:(0,n.jsx)(f,{})})),(0,n.jsx)(p.Tab,Object.assign({eventKey:g.Z.CONNECTION.toString(),title:(0,n.jsx)(p.TabTitleText,{children:t("connection")}),"data-testid":"drawerStreams-tabConnect"},{children:(0,n.jsx)(m,{externalServer:(()=>{const{bootstrap_server_host:e}=l||{};return(null==e?void 0:e.endsWith(":443"))?e:`${e}:443`})(),isKafkaPending:o,tokenEndPointUrl:e,instanceId:null==l?void 0:l.id})}))]}))}))},x=({renderContent:e,"data-ouia-app-id":t,tokenEndPointUrl:a})=>{l().extend(c());const{t:r}=(0,s.useTranslation)(["kasTemporaryFixMe"]),{isInstanceDrawerOpen:o,instanceDrawerInstance:u,openInstanceDrawer:p,closeInstanceDrawer:g,setInstanceDrawerInstance:m,noInstances:f}=(0,v.gD)(),x=(0,i.useMemo)((()=>e({closeDrawer:g,openDrawer:p,setInstance:m})),[g,p,e,m]);return(0,n.jsx)(d.D5,Object.assign({isExpanded:o,isLoading:void 0===u,onClose:g,panelBodyContent:(0,n.jsx)(h,{tokenEndPointUrl:a}),drawerHeaderProps:{text:{label:r("instance_name")},title:{value:null==u?void 0:u.name,headingLevel:"h1"}},"data-ouia-app-id":t,notRequiredDrawerContentBackground:f},{children:x}))}},81548:(e,t,a)=>{a.d(t,{gD:()=>l,e0:()=>o});var n=a(85893),i=a(75418),s=a(63286);const r=(0,i.createContext)(void 0),l=()=>{const e=(0,i.useContext)(r);if(void 0===e)throw new Error("must be used inside a InstanceDrawerContext provider");return e},o=({initialTab:e,initialInstance:t,initialNoInstances:a=!1,children:l})=>{const o=s.Z.DETAILS,[c,d]=(0,i.useState)(e),[u,p]=(0,i.useState)(t),[v,g]=(0,i.useState)(a);return(0,n.jsx)(r.Provider,Object.assign({value:{isInstanceDrawerOpen:void 0!==c,instanceDrawerTab:void 0===c?o:c,setInstanceDrawerTab:d,instanceDrawerInstance:u,setInstanceDrawerInstance:p,setNoInstances:g,noInstances:v,openInstanceDrawer:e=>{d(e||o)},closeInstanceDrawer:()=>{d(void 0),p(void 0)}}},{children:l}))}},63286:(e,t,a)=>{var n;a.d(t,{Z:()=>n}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(n||(n={}))},51622:(e,t,a)=>{a.d(t,{G:()=>f});var n=a(223),i=a(85893),s=a(75418),r=a(8898),l=a(57294),o=a(75381),c=a(99421),d=a(68199),u=a(48635),p=a(28962);const v=({total:e,page:t,perPage:a})=>{const{t:n}=(0,r.useTranslation)(["kasTemporaryFixMe"]);return e>0?(0,i.jsx)(p.wu,{widgetId:"pagination-cloudProviderOptions-menu-bottom",itemCount:e,variant:c.PaginationVariant.bottom,page:t,perPage:a,titles:{paginationTitle:n("full_pagination"),perPageSuffix:n("per_page_suffix"),toFirstPage:n("to_first_page"),toPreviousPage:n("to_previous_page"),toLastPage:n("to_last_page"),toNextPage:n("to_next_page"),optionsToggle:n("options_toggle"),currPage:n("curr_page")}}):(0,i.jsx)(i.Fragment,{})},g=({count:e,dataLoaded:t})=>{const{t:a}=(0,r.useTranslation)(["kasTemporaryFixMe"]);return e<1&&t?(0,i.jsx)(p.C0,{emptyStateProps:{variant:p.jU.NoResult},titleProps:{title:a("no_results_found")},emptyStateBodyProps:{body:a("adjust_your_filters_and_try_again")}}):(0,i.jsx)(i.Fragment,{})};var m=a(81548);const f=({onDeleteInstance:e,onChangeOwner:t,onViewInstance:a,onViewConnection:f,loggedInUser:h,page:x,perPage:b,total:S,expectedTotal:j,kafkaDataLoaded:_,kafkaInstanceItems:F,isOrgAdmin:O,setOrderBy:k,orderBy:I,filterSelected:w,setFilterSelected:T,filteredValue:C,setFilteredValue:y,onCreate:D,refresh:P,handleCreateInstanceModal:V})=>{const{t:E}=(0,r.useTranslation)(["kasTemporaryFixMe"]),{instanceDrawerInstance:M}=(0,m.gD)(),N=[{title:E("name"),transforms:[l.sortable]},{title:E("cloud_provider"),transforms:[l.sortable]},{title:E("region"),transforms:[l.sortable]},{title:E("owner"),transforms:[l.sortable]},{title:E("status"),transforms:[l.sortable]},{title:E("time_created"),transforms:[l.sortable]}],A=(0,s.useMemo)((()=>{const e=e=>{switch(e.toLowerCase()){case"name":return 0;case"cloud_provider":return 1;case"region":return 2;case"owner":return 3;case"status":return 4;case"created_at":return 5;default:return}},t=(null==I?void 0:I.split(" "))||[];if(t.length>1)return{index:e(t[0]),direction:t[1]===l.SortByDirection.asc?l.SortByDirection.asc:l.SortByDirection.desc}}),[I]),L=(0,s.useMemo)((()=>{const e=[],t=(0,o.o8)(x,b,j);return _?(null==F||F.forEach((t=>{const{name:a,cloud_provider:n,region:s,created_at:r,status:l,owner:c,instance_type:p}=t,v=E(n),g=E(s);e.push({cells:[{title:l===o.Od.DEPROVISION||l!==o.Od.READY?a:(0,i.jsx)(d.Link,Object.assign({to:`kafkas/${null==t?void 0:t.id}/dashboard`},{children:a}))},v,g,c,{title:(0,i.jsx)(u.qV,{status:l,instanceName:a})},{title:(0,i.jsxs)(i.Fragment,{children:[(0,o.L0)(r,E("ago")),(0,i.jsx)("br",{}),p===(null===o.ik||void 0===o.ik?void 0:o.ik.eval)&&"48 hours duration"]})}],originalData:t})})),e):(0,o.vK)({loadingCount:t,skeleton:(0,i.jsx)(c.Skeleton,{}),length:N.length})}),[x,b,j,_,F,N.length,E]),R=(e,n,i)=>{var s,r,l;"view-instanceDrawerInstance"===i?a(n):"connect-instanceDrawerInstance"===i?f(n):"change-owner"===i?t(n):"delete-instanceDrawerInstance"===i&&K(n);const o=null===(l=null===(r=null===(s=null==e?void 0:e.target)||void 0===s?void 0:s.parentElement)||void 0===r?void 0:r.parentElement)||void 0===l?void 0:l.previousSibling;null!=o&&o.focus()},K=t=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){yield e(t)}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.eG,{filterSelected:w,setFilterSelected:T,total:S,page:x,perPage:b,filteredValue:C,setFilteredValue:y,onCreate:D,refresh:P,handleCreateInstanceModal:V}),(0,i.jsx)(p.wR,{tableProps:{cells:N,rows:L,"aria-label":E("cluster_instance_list"),actionResolver:e=>{if(!_)return[];const t=e.originalData;if(t.status===o.Od.DEPROVISION||t.status===o.Od.DELETED)return[];const a=t.owner===h||O;let n;a||(n={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});return[Object.assign(Object.assign({title:E("view_details"),id:"view-instanceDrawerInstance","data-testid":"tableStreams-actionDetails",onClick:e=>R(e,t,"view-instanceDrawerInstance")},n),{tooltipProps:{position:"left",content:E("no_permission_to_view_kafka")}}),Object.assign(Object.assign({title:E("view_connection_information"),id:"connect-instanceDrawerInstance","data-testid":"tableStreams-actionConnection",onClick:e=>R(e,t,"connect-instanceDrawerInstance")},n),{tooltipProps:{position:"left",content:E("no_permission_to_connect_kafka")}}),Object.assign(Object.assign({title:E("change_owner"),id:"change-owner","data-testid":"tableStreams-actionChangeOwner",onClick:e=>a&&R(e,t,"change-owner")},n),{tooltipProps:{position:"left",content:E("no_permission_to_change_owner")}}),Object.assign(Object.assign({title:E("delete_instance"),id:"delete-instanceDrawerInstance","data-testid":"tableStreams-actionDelete",onClick:e=>a&&R(e,t,"delete-instanceDrawerInstance")},n),{tooltipProps:{position:"left",content:E("no_permission_to_delete_kafka")}})]},onSort:(e,t,a,n)=>{let i=a;(null==A?void 0:A.index)!==t&&"time-created"===n.property&&(i=l.SortByDirection.desc),k(`${(e=>{switch(e){case 0:return"name";case 1:return"cloud_provider";case 2:return"region";case 3:return"owner";case 4:return"status";case 5:return"created_at";default:return""}})(t)} ${i}`)},sortBy:A,hasDefaultCustomRowWrapper:!0},activeRow:null==M?void 0:M.name,onRowClick:(e,t,n)=>{if(e.target instanceof HTMLElement){const t=e.target.tagName.toLowerCase();if("button"===t||"a"===t)return}a(null==n?void 0:n.originalData)},rowDataTestId:"tableStreams-row",loggedInUser:h}),(0,i.jsx)(g,{count:(null==F?void 0:F.length)||0,dataLoaded:_}),(0,i.jsx)(v,{total:S,page:x,perPage:b})]})}},53443:(e,t,a)=>{a.d(t,{V:()=>I});var n=a(223),i=a(85893),s=a(75418),r=a(68199),l=a(8898),o=a(56176),c=a.n(o),d=a(86369),u=a.n(d),p=a(99421),v=a(28962);function g(e,t){const a=(0,s.useRef)();(0,s.useEffect)((()=>{a.current=e}),[e]),(0,s.useEffect)((()=>{if(null!==t){const e=setTimeout((function(){a.current&&a.current()}),t);return()=>{clearInterval(e)}}}),[e,t])}var m=a(75381);function f(){const e=function(){const e=document;return void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":void 0}();return void 0!==e&&!document[e]}function h(){const[e,t]=(0,s.useState)(f()),a=()=>t(f());return(0,s.useEffect)((()=>{const e=function(){const e=document;return void 0!==e.hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":""}();return document.addEventListener(e,a,!1),()=>{document.removeEventListener(e,a)}}),[]),{isVisible:e,setIsVisible:t}}var x=a(4734),b=a(7451),S=a(13449),j=(a(27081),a(48635)),_=a(81548),F=a(63286),O=a(51622);const k=()=>{const{t:e}=(0,l.useTranslation)(["kasTemporaryFixMe"]),{addAlert:t}=(0,b.useAlert)()||{},a=(0,b.useAuth)(),[r,o]=(0,s.useState)([]),[c,d]=(0,s.useState)(),[u,v]=(0,s.useState)([]),[f,S]=(0,s.useState)(void 0),{isVisible:j}=h(),{kas:_}=(0,b.useConfig)()||{},{apiBasePath:F}=_||{};(0,s.useEffect)((()=>{var e;null===(e=a.getUsername())||void 0===e||e.then((e=>S(e)))}),[a]);const O=(0,s.useCallback)((()=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield null==a?void 0:a.kas.getToken(),t=`owner = ${f}`;if(e&&j){const a=new x.DefaultApi(new x.Configuration({accessToken:e,basePath:F}));yield a.getKafkas("","","",t).then((e=>{const t=e.data;d(t.items)}))}}))),[a,F,j,f]);(0,s.useEffect)((()=>{f&&O()}),[O,f]),g((()=>O()),m.md);const k=(0,s.useCallback)((()=>{if(c){const a=c.filter((e=>e.status===m.Od.DEPROVISION||e.status===m.Od.DELETED)).filter((e=>r.findIndex((t=>t===e.name))<0)).map((e=>e.name||"")),n=[...r,...a];o(n),n.forEach((a=>{(null==c?void 0:c.findIndex((e=>e.name===a)))<0&&((e=>{const t=r.findIndex((t=>t===e));if(t>-1){const e=Object.assign([],r);e.splice(t,1),o(e)}})(a),t&&t({title:e("kafka_successfully_deleted",{name:a}),variant:p.AlertVariant.success}))}))}}),[t,c,r,e]),I=(0,s.useCallback)((()=>{const a=JSON.parse(JSON.stringify(u));if(u&&u.length>0){const n=Object.assign([],c).filter((e=>e.status===m.Od.READY||e.status===m.Od.FAILED));a.forEach((a=>{var s,r;const l=n.filter((e=>a.id===e.id));l&&l.length>0&&(l[0].status===m.Od.READY?t&&t({title:e("kafka_successfully_created"),variant:p.AlertVariant.success,description:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e("kafka_success_message",{name:null===(s=l[0])||void 0===s?void 0:s.name})}}),dataTestId:"toastCreateKafka-success"}):l[0].status===m.Od.FAILED&&t&&t({title:e("kafka_not_created"),variant:p.AlertVariant.danger,description:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e("kafka_failed_message",{name:null===(r=l[0])||void 0===r?void 0:r.name})}}),dataTestId:"toastCreateKafka-failed"}))}))}const n=Object.assign([],null==c?void 0:c.filter((e=>e.status===m.Od.PROVISIONING||e.status===m.Od.ACCEPTED)));v(n)}),[t,c,u,e]);return(0,s.useEffect)((()=>{k(),I()}),[I,k,c]),(0,i.jsx)(i.Fragment,{})},I=({preCreateInstance:e})=>{u().extend(c());const{shouldOpenCreateModal:t}=(0,S.S)()||{},a=(0,b.useAuth)(),{kas:o}=(0,b.useConfig)()||{},{apiBasePath:d}=o||{},{isVisible:f}=h(),I=(0,r.useLocation)(),w=(0,s.useMemo)((()=>new URLSearchParams(I.search)),[I.search]),{page:T=1,perPage:C=10}=(0,v.h0)()||{},{t:y}=(0,l.useTranslation)(["kasTemporaryFixMe"]),{addAlert:D}=(0,b.useAlert)()||{},{showModal:P}=(0,b.useModal)(),{showModal:V}=(0,b.useModal)(),{hideModal:E,showModal:M}=(0,b.useModal)(),{setInstanceDrawerTab:N,setInstanceDrawerInstance:A,instanceDrawerInstance:L,setNoInstances:R}=(0,_.gD)(),K=(0,r.useHistory)(),[G,B]=(0,s.useState)(),[z,$]=(0,s.useState)(!1),[Z,U]=(0,s.useState)(3),[H,q]=(0,s.useState)("created_at desc"),[Q,Y]=(0,s.useState)("name"),[J,W]=(0,s.useState)([]),[X,ee]=(0,s.useState)(!1),[te,ae]=(0,s.useState)(void 0),[ne,ie]=(0,s.useState)(),[se,re]=(0,s.useState)(!1),le=()=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){let t;e&&(t=yield e(!0)),t&&ge()})),oe=e=>{A(e),N(F.Z.DETAILS)},ce=e=>{A(e),N(F.Z.CONNECTION)},de=(0,s.useCallback)((()=>{const e=[];return J.forEach((t=>{const{filterKey:a,filterValue:n}=t;if(n&&n.length>0){let t="(";t+=n.map((e=>{const t=e.value.trim();return t===m.Od.PROVISIONING?`${a} = ${m.Od.PREPARING} or ${a} = ${m.Od.PROVISIONING}`:t===m.Od.DEPROVISION?`${a} = ${m.Od.DEPROVISION} or ${a} = ${m.Od.DELETED}`:""!==t?`${a} ${!0===e.isExact?`= ${t}`:`like %${t}%`}`:""})).join(" or "),t+=")",e.push(t)}})),e.join(" and ")}),[J]),ue=(0,s.useCallback)((()=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){const e=de(),t=yield null==a?void 0:a.kas.getToken();if(t&&f)try{const a=new x.DefaultApi(new x.Configuration({accessToken:t,basePath:d}));yield a.getKafkas(null==T?void 0:T.toString(),null==C?void 0:C.toString(),H,e).then((e=>{const t=e.data,a=(null==t?void 0:t.items)||[];B(t),void 0!==(null==G?void 0:G.total)&&G.total>Z&&U(G.total),se&&J.length<1&&0==(null==a?void 0:a.length)&&re(!1),$(!0)}))}catch(e){(e=>{var t,a;let n;(0,m.G6)(e)&&(n=null===(a=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===a?void 0:a.code),n===m.SM.UNAUTHORIZED_USER&&ee(!0)})(e)}}))),[a,d,Z,J.length,de,f,G,H,T,C,se]),pe=(0,s.useCallback)((()=>{1===(null==G?void 0:G.size)?$(!0):$(!1),ue()}),[ue,G]),ve=(0,s.useCallback)((()=>{U((void 0===G?0:G.total)+1)}),[G]),ge=(0,s.useCallback)((()=>{P(b.ModalType.KasCreateInstance,{onCreate:()=>{ve(),pe()}})}),[ve,pe,P]),me=()=>{$(!1),U((void 0===G?0:G.total)-1)},fe=(0,s.useCallback)(((e,t)=>{w.set(e,t.toString())}),[w]),he=e=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){V(b.ModalType.KasTransferOwnership,{kafka:e,refreshKafkas:pe})})),xe=e=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){const t=()=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){yield be(e),me()}));e.status===m.Od.FAILED?yield t():M(b.ModalType.KasDeleteInstance,{onDelete:t,kafka:e})})),be=e=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){var t;if(void 0===e.id)throw new Error("kafka instanceDrawerInstance id is not set");const n=yield null==a?void 0:a.kas.getToken(),i=new x.DefaultApi(new x.Configuration({accessToken:n,basePath:d}));me(),E();try{yield i.deleteKafkaById(e.id,!0).then((()=>{re(!0),pe()}))}catch(e){let a;(0,m.G6)(e)&&(a=null===(t=e.response)||void 0===t?void 0:t.data.reason),D&&D({title:y("common.something_went_wrong"),variant:p.AlertVariant.danger,description:a})}}));if((0,s.useEffect)((()=>{T>1&&void 0!==(null==G?void 0:G.items)&&0===G.size&&(fe("page",(T-1).toString()),fe("perPage",C.toString()),K.push({search:w.toString()}))}),[K,G,T,C,w,fe]),(0,s.useEffect)((()=>{$(!1),ue()}),[a,T,C,J,H,ue]),(0,s.useEffect)((()=>{var e;if(void 0!==G&&(null==G?void 0:G.size)>0){const t=null===(e=G.items)||void 0===e?void 0:e.find((e=>(null==e?void 0:e.id)===(null==L?void 0:L.id)));void 0!==t&&A(t)}}),[L,G,A]),(0,s.useEffect)((()=>{R(0===(null==G?void 0:G.size))}),[G,R]),(0,s.useEffect)((()=>{var e,t;null===(e=a.getUsername())||void 0===e||e.then((e=>ae(e))),null===(t=a.isOrgAdmin())||void 0===t||t.then((e=>ie(e)))}),[a]),(0,s.useEffect)((()=>{(0,n.__awaiter)(void 0,void 0,void 0,(function*(){t&&(yield t())&&ge()}))}),[ge,t]),g((()=>ue()),m.md),X)return(0,i.jsx)(j.NI,{});const Se=z&&J.length<1&&void 0!==G&&(null==G?void 0:G.total)<1;return Se?(0,i.jsx)(j.hs,{handleCreateInstanceModal:le}):void 0!==Se?(0,i.jsxs)(p.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:p.PageSectionVariants.default,padding:{default:"noPadding"}},{children:[(0,i.jsx)(p.Card,Object.assign({ouiaId:"card-controlplane"},{children:(0,i.jsx)(O.G,{onDeleteInstance:xe,onViewInstance:oe,onViewConnection:ce,onChangeOwner:he,loggedInUser:te,page:T,perPage:C,total:(null==G?void 0:G.total)||0,isOrgAdmin:ne,expectedTotal:Z,kafkaDataLoaded:z,kafkaInstanceItems:null==G?void 0:G.items,setOrderBy:q,setFilterSelected:Y,setFilteredValue:W,filteredValue:J,handleCreateInstanceModal:le,orderBy:H,filterSelected:Q,onCreate:ve,refresh:pe})})),(0,i.jsx)(k,{})]})):(0,i.jsx)(i.Fragment,{})}},48635:(e,t,a)=>{a.d(t,{hs:()=>D,LF:()=>V,qV:()=>d,eG:()=>w,NI:()=>C});a(51622);var n=a(85893),i=a(8898),s=a(99421),r=a(35451),l=a(41942),o=a(84564),c=a(52648);const d=({status:e,instanceName:t})=>{const{t:a}=(0,i.useTranslation)(["kasTemporaryFixMe"]),d=()=>{switch(null==e?void 0:e.toLowerCase()){case c.hm[0].value:return(0,n.jsx)(r.ZP,{className:"mk--instances__table--icon--completed"});case c.hm[1].value:return(0,n.jsx)(o.ZP,{className:"mk--instances__table--icon--failed"});case c.hm[2].value:return(0,n.jsx)(l.ZP,{});case c.hm[3].value:case c.hm[4].value:return(0,n.jsx)(s.Spinner,{size:"md","aria-label":t,"aria-valuetext":"Creation in progress"});case c.hm[5].value:case c.hm[6].value:return;default:return(0,n.jsx)(l.ZP,{})}};return(0,n.jsxs)(s.Flex,{children:[(0,n.jsx)((()=>{const e=d();return e?(0,n.jsx)(s.FlexItem,Object.assign({spacer:{default:"spacerSm"}},{children:e})):(0,n.jsx)(n.Fragment,{})}),{}),(0,n.jsx)(s.FlexItem,{children:(0,n.jsx)((()=>{const t=c.hm.filter((t=>t.value===(null==e?void 0:e.toLowerCase())));return 1===t.length?a(t[0].value):a("creation_pending")}),{})})]})};var u=a(75418),p=a(8755),v=a(28962),g=a(75381);const m=(e,t)=>{const{t:a}=(0,i.useTranslation)(["kasTemporaryFixMe"]);return e?(0,n.jsx)("div",{children:a("max_filter_message")}):"owner"===t?(0,n.jsx)("div",{children:a("owner_field_invalid_message",{name:t})}):(0,n.jsx)("div",{children:a("input_field_invalid_message",{name:t})})},f=({getSelectionForFilter:e,filterSelected:t,onDeleteChipGroup:a,onDeleteChip:r,updateFilter:l,isMaxFilter:o,removeFilterValue:c,isDisabledSelectOption:d})=>{var u;const{t:p}=(0,i.useTranslation)(["kasTemporaryFixMe"]),v=g.bv.map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,n.jsx)(s.ToolbarFilter,Object.assign({chips:null===(u=e("cloud_provider"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,t)=>r&&r("cloud_provider",t,v),deleteChipGroup:()=>a&&a("cloud_provider"),categoryName:p("cloud_provider"),showToolbarItem:"cloud_provider"===t},{children:(0,n.jsx)(h,{updateFilter:l,isMaxFilter:o,removeFilterValue:c,isDisabledSelectOption:d,options:v,getSelectionForFilter:e,filterSelected:t})}))},h=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:r,options:l,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,i.useTranslation)(["kasTemporaryFixMe"]),p=(0,u.useRef)(null),v=m(t),g=()=>t?(0,n.jsx)(s.Tooltip,{isVisible:t,content:v,reference:p}):(0,n.jsx)(n.Fragment,{}),[f,h]=(0,u.useState)(!1),x=()=>{h((e=>!e))},b=(t,a,n)=>{n&&S(),e("cloud_provider",{value:a.toString(),isExact:!0},!0),l.length<2&&h(!1)},S=()=>{a&&a("cloud_provider"),h(!1)};return"cloud_provider"===c?(0,n.jsx)(s.Select,Object.assign({id:"cloud-provider-select",variant:s.SelectVariant.checkbox,"aria-label":"Select cloud provider",onToggle:x,selections:o("cloud_provider"),isOpen:f,onSelect:b,placeholderText:d("filter_by_cloud_provider"),className:"select-custom-width",ref:p},{children:l.map(((e,a)=>(0,n.jsxs)(s.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&r("cloud_provider",e.value),value:e.value},{children:[(0,n.jsx)(g,{}),e.label]}),a)))})):(0,n.jsx)(n.Fragment,{})};var x=a(71070);const b=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,filterSelected:r,isMaxFilter:l,updateFilter:o})=>{const{t:c}=(0,i.useTranslation)(["kasTemporaryFixMe"]),[d,p]=(0,u.useState)(!0),[v,g]=(0,u.useState)(),f=(0,u.useRef)(null),h=m(l,"name"),b=e=>{g(e),!d&&p(!0)},S=e=>{"Enter"!==e.key||l||j()},j=()=>{v&&""!=v.trim()&&((e=>!e||/^([a-zA-Z0-9-_%]*[a-zA-Z0-9-_%])?$/.test(e.trim()))(v)?(o("name",{value:v,isExact:!1},!1),g("")):p(!1))};return(0,n.jsx)(s.ToolbarFilter,Object.assign({chips:e("name"),deleteChip:(e,a)=>t("name",a),deleteChipGroup:()=>a("name"),categoryName:c("name"),showToolbarItem:"name"===(null==r?void 0:r.toLowerCase())},{children:(()=>{const e=!d||l,t=()=>e?(0,n.jsx)(s.Tooltip,{isVisible:l||!d,content:h,reference:f}):(0,n.jsx)(n.Fragment,{});return"name"===(null==r?void 0:r.toLowerCase())?(0,n.jsxs)(s.InputGroup,{children:[(0,n.jsx)(s.TextInput,{name:"name",id:"filterText",type:"search","aria-label":"Search filter input",validated:e?s.ValidatedOptions.error:s.ValidatedOptions.default,placeholder:c("filter_by_name_lower"),onChange:b,onKeyPress:S,value:v,ref:f}),(0,n.jsx)(s.Button,Object.assign({variant:s.ButtonVariant.control,isDisabled:!d||l,onClick:()=>j(),"aria-label":"Search instances"},{children:(0,n.jsx)(x.ZP,{})})),(0,n.jsx)(t,{})]}):(0,n.jsx)(n.Fragment,{})})()}))},S=({getSelectionForFilter:e,onDeleteChipGroup:t,onDeleteChip:a,filterSelected:r,isMaxFilter:l,updateFilter:o})=>{const{t:c}=(0,i.useTranslation)(["kasTemporaryFixMe"]),d=(0,u.useRef)(null),p=m(l,"owner"),[v,g]=(0,u.useState)(),[f,h]=(0,u.useState)(!0),b=()=>{v&&""!=v.trim()&&((e=>!e||!/["$^<>|+%/;:,\s*=~#()]/.test(e.trim()))(v)?(o("owner",{value:v,isExact:!1},!1),g("")):h(!1))},S=e=>{"Enter"!==e.key||l||b()},j=e=>{g(e),!f&&h(!0)};return(0,n.jsx)(s.ToolbarFilter,Object.assign({chips:e("owner"),deleteChip:(e,t)=>a("owner",t),deleteChipGroup:()=>t("owner"),categoryName:c("owner"),showToolbarItem:"owner"===(null==r?void 0:r.toLowerCase())},{children:(()=>{if("owner"===(null==r?void 0:r.toLowerCase())){const e=!f||l,t=()=>e?(0,n.jsx)(s.Tooltip,{isVisible:l||!f,content:p,reference:d}):(0,n.jsx)(n.Fragment,{});return(0,n.jsxs)(s.InputGroup,{children:[(0,n.jsx)(s.TextInput,{name:"owner",id:"filterOwners",type:"search","aria-label":"Search filter input",placeholder:c("filter_by_owner"),validated:e?s.ValidatedOptions.error:s.ValidatedOptions.default,onChange:j,onKeyPress:S,value:v,ref:d}),(0,n.jsx)(s.Button,Object.assign({isDisabled:e,variant:s.ButtonVariant.control,onClick:b,"aria-label":"Search owners"},{children:(0,n.jsx)(x.ZP,{})})),(0,n.jsx)(t,{})]})}return(0,n.jsx)(n.Fragment,{})})()}))},j=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,removeFilterValue:r,isDisabledSelectOption:l,isMaxFilter:o,filterSelected:c,updateFilter:d})=>{var u;const{t:p}=(0,i.useTranslation)(["kasTemporaryFixMe"]),v=g.Bh.map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,n.jsx)(s.ToolbarFilter,Object.assign({chips:null===(u=e("region"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,a)=>t("region",a,v),deleteChipGroup:()=>a("region"),categoryName:p("region"),showToolbarItem:"region"===c},{children:(0,n.jsx)(_,{updateFilter:d,isMaxFilter:o,removeFilterValue:r,isDisabledSelectOption:l,options:v,getSelectionForFilter:e,filterSelected:c})}))},_=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:r,options:l,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,i.useTranslation)(["kasTemporaryFixMe"]),p=(0,u.useRef)(null),v=m(t),[g,f]=(0,u.useState)(!1),h=()=>t?(0,n.jsx)(s.Tooltip,{isVisible:t,content:v,reference:p}):(0,n.jsx)(n.Fragment,{}),x=()=>{f(!g)},b=(t,a,n)=>{n&&S(),e("region",{value:a.toString(),isExact:!0},!0),l.length<2&&f(!1)},S=()=>{a("region"),f(!1)};return"region"===c?(0,n.jsx)(s.Select,Object.assign({id:"region-select",variant:s.SelectVariant.checkbox,"aria-label":"Select region",onToggle:x,selections:o("region"),isOpen:g,onSelect:b,placeholderText:d("filter_by_region"),className:"select-custom-width",ref:p},{children:l.map(((e,a)=>(0,n.jsxs)(s.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&r("region",e.value),value:e.value},{children:[(0,n.jsx)(h,{}),e.label]}),a)))})):(0,n.jsx)(n.Fragment,{})},F=({setFilterSelected:e,filterSelected:t})=>{const{t:a}=(0,i.useTranslation)(["kasTemporaryFixMe"]),[r,l]=(0,u.useState)(!1),o=[{label:a("name"),value:"name",disabled:!1},{label:a("cloud_provider"),value:"cloud_provider",disabled:!1},{label:a("region"),value:"region",disabled:!1},{label:a("owner"),value:"owner",disabled:!1},{label:a("status"),value:"status",disabled:!1}];return(0,n.jsx)(s.ToolbarItem,{children:(0,n.jsx)(s.Select,Object.assign({variant:s.SelectVariant.single,"aria-label":"Select filter",onToggle:()=>{l(!r)},selections:t,isOpen:r,onSelect:(t,a)=>{l(!r),e(null==a?void 0:a.toString())}},{children:o.map(((e,t)=>(0,n.jsx)(s.SelectOption,Object.assign({isDisabled:e.disabled,value:e.value},{children:e.label}),t)))}))})},O=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,isMaxFilter:r,filterSelected:l,updateFilter:o,removeFilterValue:c,isDisabledSelectOption:d})=>{var u;const{t:p}=(0,i.useTranslation)(["kasTemporaryFixMe"]),v=g.hm.filter((e=>e.value!==g.Od.PREPARING&&e.value!==g.Od.DELETED)).map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,n.jsx)(s.ToolbarFilter,Object.assign({chips:null===(u=e("status"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,a)=>t("status",a,v),deleteChipGroup:()=>a("status"),categoryName:p("status"),showToolbarItem:"status"===l},{children:(0,n.jsx)(k,{updateFilter:o,isMaxFilter:r,removeFilterValue:c,isDisabledSelectOption:d,statusFilterOptions:v,getSelectionForFilter:e,filterSelected:l})}))},k=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:r,statusFilterOptions:l,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,i.useTranslation)(["kasTemporaryFixMe"]),p=m(t),v=(0,u.useRef)(null),[g,f]=(0,u.useState)(!1),h=()=>t?(0,n.jsx)(s.Tooltip,{isVisible:t,content:p,reference:v}):(0,n.jsx)(n.Fragment,{}),x=()=>{f(!g)},b=(t,a,n)=>{n&&S(),e("status",{value:a.toString(),isExact:!0},!0)},S=()=>{a("status"),f(!1)};return"status"===c?(0,n.jsx)(s.Select,Object.assign({id:"status-select",variant:s.SelectVariant.checkbox,"aria-label":"Select status",onToggle:x,selections:o("status"),isOpen:g,onSelect:b,placeholderText:d("filter_by_status"),className:"select-custom-width",ref:v},{children:l.map(((e,a)=>(0,n.jsxs)(s.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&r("status",e.value),value:e.value},{children:[(0,n.jsx)(h,{}),e.label]}),a)))})):(0,n.jsx)(n.Fragment,{})},I=({isMaxFilter:e,filteredValue:t,setFilteredValue:a,filterSelected:i,setFilterSelected:r})=>{const l=(e,a)=>{let n;const i=null==t?void 0:t.filter((({filterKey:t})=>t===e));if(i&&(null==i?void 0:i.length)>0){const{filterValue:e}=i[0];n=null==e?void 0:e.find((({value:e})=>e===a))}return!n},o=(e,n,i)=>{const s=Object.assign([],t),r=s.findIndex((t=>t.filterKey===e));if(r>-1){const e=s[r];if(e.filterValue&&e.filterValue.length>0){const t=e.filterValue.findIndex((e=>e.value===n.value));if(t>-1){if(!i)return;e.filterValue.splice(t,1)}else s[r].filterValue.push(n)}else s[r].filterValue=[n]}else s.push({filterKey:e,filterValue:[n]});a(s)},c=e=>{const a=t.filter((t=>t.filterKey===e));if(a.length>0)return a[0].filterValue.map((e=>e.value))},d=(e,n,i)=>{var s,r;const l=Object.assign([],t),o=l.findIndex((t=>t.filterKey===e)),c=Object.assign([],null===(s=l[o])||void 0===s?void 0:s.filterValue);let d=n.toString();i&&(null==i?void 0:i.length)>0&&(d=null===(r=null==i?void 0:i.find((e=>e.label===n.toString())))||void 0===r?void 0:r.value);const u=c.findIndex((e=>e.value===d));u>=0&&(l[o].filterValue.splice(u,1),a(l))},u=e=>{const n=Object.assign([],t),i=n.findIndex((t=>t.filterKey===e));i>=0&&(n.splice(i,1),a(n))},p=e=>{const n=Object.assign([],t),i=n.findIndex((t=>t.filterKey===e));i>=0&&n.splice(i,1),a(n)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.ToolbarGroup,Object.assign({variant:"filter-group"},{children:[(0,n.jsx)(F,{setFilterSelected:r,filterSelected:i}),(0,n.jsx)(b,{isMaxFilter:e,filterSelected:i,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:l}),(0,n.jsx)(f,{isMaxFilter:e,filterSelected:i,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:l}),(0,n.jsx)(j,{isMaxFilter:e,filterSelected:i,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:l}),(0,n.jsx)(S,{isMaxFilter:e,filterSelected:i,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:l}),(0,n.jsx)(O,{isMaxFilter:e,filterSelected:i,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:l})]}))})},w=({setFilterSelected:e,filterSelected:t="name",total:a,page:r,perPage:l,filteredValue:o,setFilteredValue:c,handleCreateInstanceModal:d})=>{const{t:m}=(0,i.useTranslation)(["kasTemporaryFixMe"]),[f,h]=(0,u.useState)(!1),x=(0,u.useCallback)((()=>{let e=0;null==o||o.forEach((t=>{const{filterValue:a,filterKey:n}=t,i="status"===n?null==a?void 0:a.filter((({value:e})=>e===g.Od.PROVISIONING)):[],s="status"===n?null==a?void 0:a.filter((({value:e})=>e===g.Od.DEPROVISION)):[];(null==i?void 0:i.length)>0&&(null==s?void 0:s.length)>0?e+=(null==a?void 0:a.length)+2:(null==i?void 0:i.length)>0||(null==s?void 0:s.length)>0?e+=(null==a?void 0:a.length)+1:e+=null==a?void 0:a.length})),e>=g.pf?h(!0):h(!1)}),[o]);(0,u.useEffect)((()=>{x()}),[x]);const b=[{item:(0,n.jsx)(s.Button,Object.assign({variant:"primary",onClick:d,"data-testid":"tableStreams-buttonCreateKafka",ouiaId:"button-create"},{children:m("create_kafka_instance")}))}];return a&&a>0&&b.push({item:(0,n.jsx)(v.wu,{widgetId:"pagination-cloudProviderOptions-menu-top",itemCount:a,page:r,perPage:l,isCompact:!0,titles:{paginationTitle:m("minimal_pagination"),perPageSuffix:m("per_page_suffix"),toFirstPage:m("to_first_page"),toPreviousPage:m("to_previous_page"),toLastPage:m("to_last_page"),toNextPage:m("to_next_page"),optionsToggle:m("options_toggle"),currPage:m("curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),(0,n.jsx)(v.L5,{toolbarProps:{id:"instanceDrawerInstance-toolbar",clearAllFilters:()=>{c([]),h(!1)},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:(0,n.jsx)(p.ZP,{}),breakpoint:"md"},toggleGroupItems:(0,n.jsx)(I,{isMaxFilter:f,filteredValue:o,setFilteredValue:c,setFilterSelected:e,filterSelected:t}),toolbarItems:b})};var T=a(5569);const C=()=>{const{t:e}=(0,i.useTranslation)(["kasTemporaryFixMe"]);return(0,n.jsx)(s.PageSection,Object.assign({variant:s.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,n.jsx)(v.C0,{titleProps:{title:e("access_permissions_needed"),headingLevel:"h2"},emptyStateIconProps:{icon:T.ZP},emptyStateBodyProps:{body:e("to_access_kafka_instances_contact_your_organization_administrators")}})}))};var y=a(10069);const D=({handleCreateInstanceModal:e})=>{const{t}=(0,i.useTranslation)(["kasTemporaryFixMe"]),a=(0,u.useContext)(y.QuickStartContext);return(0,n.jsx)(s.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,n.jsx)(v.C0,Object.assign({emptyStateProps:{variant:v.jU.NoItems},emptyStateBodyProps:{body:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Trans,{i18nKey:"create_a_kafka_instance_to_get_started",ns:["kasTemporaryFixMe"],components:[(0,n.jsx)(s.Button,{variant:s.ButtonVariant.link,isSmall:!0,isInline:!0,onClick:()=>a.setActiveQuickStart&&a.setActiveQuickStart("getting-started")},"btn-quick-start")]})})},titleProps:{title:t("no_kafka_instances_yet")}},{children:(0,n.jsx)(s.Button,Object.assign({"data-testid":"emptyStateStreams-buttonCreateKafka",variant:s.ButtonVariant.primary,onClick:()=>e&&e(),ouiaId:"button-create"},{children:t("create_kafka_instance")}))}))}))};var P=a(217);const V=({children:e,tokenEndPointUrl:t})=>{const{t:a}=(0,i.useTranslation)(["kasTemporaryFixMe"]),[r,l]=(0,u.useState)(!1);(0,u.useEffect)((()=>{if((0,g.Qw)()){const e=window.localStorage;if(e){const t=parseInt(e.getItem("openSessions")||"0"),a=t+1;t<1&&(e.setItem("openSessions",`${a}`),l(!0))}}}),[]);const o=()=>{l(!r)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.o,{tokenEndPointUrl:t,renderContent:()=>(0,n.jsxs)("main",Object.assign({className:"pf-c-page__main"},{children:[(0,n.jsx)(s.PageSection,Object.assign({variant:s.PageSectionVariants.light},{children:(0,n.jsx)(s.Level,{children:(0,n.jsx)(s.LevelItem,{children:(0,n.jsx)(s.TextContent,{children:(0,n.jsx)(s.Text,Object.assign({component:"h1"},{children:a("kafka_instances")}))})})})})),e]}))}),(0,n.jsx)(s.Modal,Object.assign({variant:s.ModalVariant.small,title:"Mobile experience",isOpen:r,onClose:()=>o(),actions:[(0,n.jsx)(s.Button,Object.assign({variant:"primary",onClick:()=>o()},{children:"Ok"}),"confirm")]},{children:"The mobile experience isn't fully optimized yet, so some items might not appear correctly."}))]})}}}]);
//# sourceMappingURL=5964.5c4fa6c6.js.map