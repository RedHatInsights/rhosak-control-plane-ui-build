"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1527],{27081:()=>{},88601:(e,t,a)=>{a.d(t,{c:()=>p,d:()=>u});var i=a(50834),n=a(70353),r=a(81318),l=a(22178),s=a(9669),o=a.n(s),c=a(93264);const d=(0,l.createCacheAdapter)({debug:null!==localStorage.getItem("log-axios")}),u=()=>{const e=(0,i.useAuth)(),{kas:{apiBasePath:t}}=(0,i.useConfig)();return(0,c.useCallback)((()=>new r.DefaultApi(new r.Configuration({accessToken:e.kas.getToken(),basePath:t}),void 0,o().create({adapter:d,cache:15e3}))),[e.kas,t])},p=()=>{const e=(0,i.useAuth)(),{ams:{apiBasePath:t}}=(0,i.useConfig)();return(0,c.useCallback)((()=>new n.AppServicesApi(new r.Configuration({accessToken:e.ams.getToken(),basePath:t}),void 0,o().create({adapter:d,cache:15e3}))),[t,e.ams])}},94622:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(85893),n=a(93264),r=a(30645),l=a(50834);const s=()=>{const{registerModals:e}=(0,l.useModal)();return e((()=>{const{t:e}=(0,r.useTranslation)(["kasTemporaryFixMe"]);return{[l.ModalType.KasCreateInstance]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(9669),a.e(2135),a.e(9922),a.e(3685),a.e(1318),a.e(4447),a.e(69),a.e(4372)]).then(a.bind(a,74372)))),variant:"medium",title:e("create_a_kafka_instance")},[l.ModalType.KasDeleteInstance]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(9669),a.e(2135),a.e(9922),a.e(8188),a.e(3685),a.e(1318),a.e(9576),a.e(5626),a.e(4447),a.e(524)]).then(a.bind(a,78578)))),variant:"small"},[l.ModalType.KasTransferOwnership]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(9669),a.e(9922),a.e(8188),a.e(1318),a.e(4447),a.e(8512)]).then(a.bind(a,98512)))),variant:"medium",title:e("change_owner")},[l.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(2135),a.e(9922),a.e(8188),a.e(3685),a.e(1318),a.e(9576),a.e(5626),a.e(8752)]).then(a.bind(a,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[l.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(2135),a.e(9922),a.e(8188),a.e(3685),a.e(1318),a.e(9576),a.e(5626),a.e(645)]).then(a.bind(a,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[l.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(2135),a.e(9922),a.e(8188),a.e(3685),a.e(1318),a.e(9576),a.e(5626),a.e(4410)]).then(a.bind(a,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,i.jsx)(i.Fragment,{})}},63286:(e,t,a)=>{var i;a.d(t,{Z:()=>i}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(i||(i={}))},51622:(e,t,a)=>{a.d(t,{G:()=>h});var i=a(9922),n=a(85893),r=a(93264),l=a(30645),s=a(19576),o=a(75381),c=a(28188),d=a(73685),u=a(11228),p=a(3433);const v=({total:e,page:t,perPage:a})=>{const{t:i}=(0,l.useTranslation)(["kasTemporaryFixMe"]);return e>0?(0,n.jsx)(p.wu,{widgetId:"pagination-cloudProviderOptions-menu-bottom",itemCount:e,variant:c.PaginationVariant.bottom,page:t,perPage:a,titles:{paginationTitle:i("full_pagination"),perPageSuffix:i("per_page_suffix"),toFirstPage:i("to_first_page"),toPreviousPage:i("to_previous_page"),toLastPage:i("to_last_page"),toNextPage:i("to_next_page"),optionsToggle:i("options_toggle"),currPage:i("curr_page")}}):(0,n.jsx)(n.Fragment,{})},g=({count:e,dataLoaded:t})=>{const{t:a}=(0,l.useTranslation)(["kasTemporaryFixMe"]);return e<1&&t?(0,n.jsx)(p.C0,{emptyStateProps:{variant:p.jU.NoResult},titleProps:{title:a("no_results_found")},emptyStateBodyProps:{body:a("adjust_your_filters_and_try_again")}}):(0,n.jsx)(n.Fragment,{})};var m=a(70792),f=a(9420);const h=({onDeleteInstance:e,onChangeOwner:t,onViewInstance:a,onViewConnection:h,loggedInUser:b,page:x,perPage:_,total:S,expectedTotal:k,kafkaDataLoaded:j,kafkaInstanceItems:F,isOrgAdmin:O,setOrderBy:w,orderBy:y,filterSelected:C,setFilterSelected:I,filteredValue:T,setFilteredValue:D,onCreate:P,refresh:V,handleCreateInstanceModal:M,selectedInstanceName:E})=>{const{t:A}=(0,l.useTranslation)(["kasTemporaryFixMe"]),N=[{title:A("name"),transforms:[s.sortable]},{title:A("cloud_provider"),transforms:[s.sortable]},{title:A("region"),transforms:[s.sortable]},{title:A("owner"),transforms:[s.sortable]},{title:A("status"),transforms:[s.sortable]},{title:A("time_created"),transforms:[s.sortable]}],R=(0,r.useMemo)((()=>{const e=e=>{switch(e.toLowerCase()){case"name":return 0;case"cloud_provider":return 1;case"region":return 2;case"owner":return 3;case"status":return 4;case"created_at":return 5;default:return}},t=(null==y?void 0:y.split(" "))||[];if(t.length>1)return{index:e(t[0]),direction:t[1]===s.SortByDirection.asc?s.SortByDirection.asc:s.SortByDirection.desc}}),[y]),L=(0,r.useMemo)((()=>{const e=[],t=(0,o.o8)(x,_,k);return j?(null==F||F.forEach((t=>{const{name:a,cloud_provider:i,region:r,created_at:s,status:p,owner:v,instance_type:g,size:h}=t,b=A(i),x=A(r);e.push({cells:[{title:p===o.Od.DEPROVISION||p!==o.Od.READY?a:(0,n.jsx)(d.Link,Object.assign({to:`kafkas/${null==t?void 0:t.id}/dashboard`,"data-ouia-component-id":"table-link"},{children:a}))},b,x,v,{title:(0,n.jsx)(u.qV,{status:p,instanceName:a})},{title:(0,n.jsxs)(n.Fragment,{children:[(0,o.L0)(s,A("ago")),(0,n.jsx)("br",{}),(g===(null===o.ik||void 0===o.ik?void 0:o.ik.developer)||g===(null===o.ik||void 0===o.ik?void 0:o.ik.eval))&&((null==h?void 0:h.trialDurationHours)?(0,n.jsx)(l.Trans,{i18nKey:"common.expires_in",ns:["kasTemporaryFixMe"],components:{time:(0,n.jsx)(m.FormatDate,{date:(0,f.Z)(new Date(s),{hours:null==h?void 0:h.trialDurationHours}),format:"expiration"})}}):(0,n.jsx)(c.Skeleton,{}))]})}],originalData:t})})),e):(0,o.vK)({loadingCount:t,skeleton:(0,n.jsx)(c.Skeleton,{}),length:N.length})}),[x,_,k,j,F,N.length,A]),K=(e,i,n)=>{var r,l,s;"view-instanceDrawerInstance"===n?a(i):"connect-instanceDrawerInstance"===n?h(i):"change-owner"===n?t(i):"delete-instanceDrawerInstance"===n&&G(i);const o=null===(s=null===(l=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.parentElement)||void 0===l?void 0:l.parentElement)||void 0===s?void 0:s.previousSibling;null!=o&&o.focus()},G=t=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){yield e(t)}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.eG,{filterSelected:C,setFilterSelected:I,total:S,page:x,perPage:_,filteredValue:T,setFilteredValue:D,onCreate:P,refresh:V,handleCreateInstanceModal:M}),(0,n.jsx)(p.wR,{tableProps:{cells:N,rows:L,"aria-label":A("cluster_instance_list"),actionResolver:e=>{if(!j)return[];const t=e.originalData;if(t.status===o.Od.DEPROVISION||t.status===o.Od.DELETED)return[];const a=void 0!==b&&t.owner===b||void 0!==O&&!0===O;let i;a||(i={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});return[{title:A("view_details"),id:"view-instanceDrawerInstance","data-testid":"tableStreams-actionDetails",onClick:e=>K(e,t,"view-instanceDrawerInstance")},{title:A("view_connection_information"),id:"connect-instanceDrawerInstance","data-testid":"tableStreams-actionConnection",onClick:e=>K(e,t,"connect-instanceDrawerInstance")},Object.assign(Object.assign({title:A("change_owner"),id:"change-owner","data-testid":"tableStreams-actionChangeOwner",onClick:e=>a&&K(e,t,"change-owner")},i),{tooltipProps:{position:"left",content:A("no_permission_to_change_owner")}}),Object.assign(Object.assign({title:A("delete_instance"),id:"delete-instanceDrawerInstance","data-testid":"tableStreams-actionDelete",onClick:e=>a&&K(e,t,"delete-instanceDrawerInstance")},i),{tooltipProps:{position:"left",content:A("no_permission_to_delete_kafka")}})]},onSort:(e,t,a,i)=>{let n=a;(null==R?void 0:R.index)!==t&&"time-created"===i.property&&(n=s.SortByDirection.desc),w(`${(e=>{switch(e){case 0:return"name";case 1:return"cloud_provider";case 2:return"region";case 3:return"owner";case 4:return"status";case 5:return"created_at";default:return""}})(t)} ${n}`)},sortBy:R,hasDefaultCustomRowWrapper:!0,ouiaId:"table-kafka-instances"},activeRow:E,onRowClick:(e,t,i)=>{if(e.target instanceof HTMLElement){const t=e.target.tagName.toLowerCase();if("button"===t||"a"===t)return}a(null==i?void 0:i.originalData)},rowDataTestId:"tableStreams-row",loggedInUser:b}),(0,n.jsx)(g,{count:(null==F?void 0:F.length)||0,dataLoaded:j}),(0,n.jsx)(v,{total:S,page:x,perPage:_})]})}},88688:(e,t,a)=>{a.d(t,{V:()=>j});var i=a(9922),n=a(85893),r=a(88601),l=a(3433),s=a(13449),o=a(93264);function c(e,t){const a=(0,o.useRef)();(0,o.useEffect)((()=>{a.current=e}),[e]),(0,o.useEffect)((()=>{if(null!==t){const e=setInterval((function(){a.current&&a.current()}),t);return()=>{clearInterval(e)}}}),[t])}var d=a(81548),u=a(63286),p=a(11228),v=a(51622),g=(a(27081),a(75381)),m=a(28188),f=a(50834),h=a(30645),b=a(73685),x=a(61617);function _(){const e=function(){const e=document;return void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":void 0}();return void 0!==e&&!document[e]}function S(){const[e,t]=(0,o.useState)(_()),a=()=>t(_());return(0,o.useEffect)((()=>{const e=function(){const e=document;return void 0!==e.hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":""}();return document.addEventListener(e,a,!1),()=>{document.removeEventListener(e,a)}}),[]),{isVisible:e,setIsVisible:t}}function k(e){return{name:e.name,status:e.status}}const j=({preCreateInstance:e})=>{var t;const{shouldOpenCreateModal:a}=(0,s.S)()||{},_=(0,f.useAuth)(),j=(0,r.d)(),F=(0,x.AU)("developer"),O=(0,b.useLocation)(),w=(0,o.useMemo)((()=>new URLSearchParams(O.search)),[O.search]),{page:y=1,perPage:C=10,setPage:I}=(0,l.h0)()||{},{t:T}=(0,h.useTranslation)(["kasTemporaryFixMe"]),{addAlert:D}=(0,f.useAlert)()||{},{showModal:P}=(0,f.useModal)(),{showModal:V}=(0,f.useModal)(),{hideModal:M,showModal:E}=(0,f.useModal)(),A=(0,b.useHistory)(),{drawerInstance:N,closeDrawer:R,openDrawer:L,setDrawerActiveTab:K,setDrawerInstance:G}=(0,d.gD)(),[B,z]=(0,o.useState)(),[$,H]=(0,o.useState)(!1),[U,Z]=(0,o.useState)(3),[q,Q]=(0,o.useState)(),[Y,J]=(0,o.useState)("created_at desc"),[W,X]=(0,o.useState)("name"),[ee,te]=(0,o.useState)([]),[ae,ie]=(0,o.useState)(!1),[ne,re]=(0,o.useState)(void 0),[le,se]=(0,o.useState)(),[oe,ce]=(0,o.useState)(!1),[de,ue]=(0,o.useState)(!1);!function(e){const{t}=(0,h.useTranslation)(["kasTemporaryFixMe"]),{addAlert:a}=(0,f.useAlert)()||{},{isVisible:i}=S(),r=(0,o.useRef)(),l=(0,o.useRef)([]),s=(0,o.useRef)([]),d=(0,o.useCallback)((e=>{a({title:t("kafka_successfully_created"),variant:m.AlertVariant.success,description:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:t("kafka_success_message",{name:e})}}),dataTestId:"toastCreateKafka-success"})}),[a,t]),u=(0,o.useCallback)((e=>{a({title:t("kafka_successfully_deleted",{name:e}),variant:m.AlertVariant.success})}),[a,t]),p=(0,o.useCallback)((e=>{a({title:t("kafka_not_created"),variant:m.AlertVariant.danger,description:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:t("kafka_failed_message",{name:e})}}),dataTestId:"toastCreateKafka-failed"})}),[a,t]);(0,o.useEffect)((function(){if(e){const t=void 0===r.current,a=r.current||[],i=a.map((e=>`${e.id}:${e.status}`)),n=e.map((e=>`${e.id}:${e.status}`));if(JSON.stringify(i)!==JSON.stringify(n)){const i=(e,i)=>t?[]:e.filter((e=>e.status===i&&!a.find((t=>t.id===e.id&&e.status!==i)))),n=i(e,g.Od.READY),o=i(e,g.Od.FAILED),[c,d]=l.current.reduce((([t,a],i)=>void 0===e.find((e=>e.id===i.id))?[[...t,i],a]:[t,[...a,i]]),[[],[]]),u=e.filter((e=>[g.Od.DELETED,g.Od.DEPROVISION].includes(e.status)&&void 0===d.find((t=>t.id===e.id))));l.current=[...d,...u],s.current=[...s.current,...n.map(k),...o.map(k),...c.map(k)],r.current=e}}}),[e]),c((0,o.useCallback)((function(){if(i)for(;s.current.length>0;){const e=s.current.shift();switch(e.status){case g.Od.READY:d(e.name);break;case g.Od.FAILED:p(e.name);break;case g.Od.DEPROVISION:case g.Od.DELETED:u(e.name)}}}),[i,u,p,d]),1e3)}(null===(t=null==B?void 0:B.items)||void 0===t?void 0:t.filter((e=>e.owner===ne)));const pe=(0,o.useCallback)((e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const t=[];return yield Promise.all(null==e?void 0:e.map((e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const{instance_type:a,cloud_provider:i,region:n}=e;let r;if("developer"===a&&i&&n){r={trialDurationHours:(yield F(i,n))[0].trialDurationHours}}t.push(Object.assign(Object.assign({},e),{size:r}))}))))),t}))),[F]),ve=()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){let t;e&&(t=yield e(!0)),t&&Se()})),ge=e=>{G(e.id),K(u.Z.DETAILS),L()},me=e=>{G(e.id),K(u.Z.CONNECTION),L()},fe=(0,o.useCallback)((()=>{const e=[];return ee.forEach((t=>{const{filterKey:a,filterValue:i}=t;if(i&&i.length>0){let t="(";t+=i.map((e=>{const t=e.value.trim();return t===g.Od.PROVISIONING?`${a} = ${g.Od.PREPARING} or ${a} = ${g.Od.PROVISIONING}`:t===g.Od.DEPROVISION?`${a} = ${g.Od.DEPROVISION} or ${a} = ${g.Od.DELETED}`:""!==t?`${a} ${!0===e.isExact?`= ${t}`:`like %${t}%`}`:""})).join(" or "),t+=")",e.push(t)}})),e.join(" and ")}),[ee]),he=(0,o.useCallback)(((e=!1)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const t=fe();try{const a=j();e||H(!1),ue(!1),yield a.getKafkas(null==y?void 0:y.toString(),null==C?void 0:C.toString(),Y,t,{cache:!!e&&g.md}).then((e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const t=e.data,a=(null==t?void 0:t.items)||[];z(t);const i=yield pe(a);Q(i),void 0!==(null==B?void 0:B.total)&&B.total>U&&Z(B.total),oe&&ee.length<1&&0==(null==a?void 0:a.length)&&ce(!1)})))).finally((()=>H(!0)))}catch(e){(e=>{var t,a;let i;(0,g.G6)(e)&&(i=null===(a=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===a?void 0:a.code),i===g.SM.UNAUTHORIZED_USER&&ie(!0)})(e)}}))),[j,U,ee,fe,B,Y,y,C,oe,pe]),be=(0,o.useCallback)((e=>{te(e),I&&I(1)}),[I]),xe=(0,o.useCallback)((()=>{ue(!0)}),[]),_e=(0,o.useCallback)((()=>{Z((void 0===B?0:B.total)+1)}),[B]),Se=(0,o.useCallback)((()=>{P(f.ModalType.KasCreateInstance,{onCreate:()=>{_e(),xe()}})}),[_e,xe,P]),ke=()=>{Z((void 0===B?0:B.total)-1)},je=(0,o.useCallback)(((e,t)=>{w.set(e,t.toString())}),[w]),Fe=e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){V(f.ModalType.KasTransferOwnership,{kafka:e,refreshKafkas:xe})})),Oe=e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const t=()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){yield we(e),ke()}));e.status===g.Od.FAILED?yield t():E(f.ModalType.KasDeleteInstance,{onDelete:t,kafka:e})})),we=e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var t;if(void 0===e.id)throw new Error("kafka instanceDrawerInstance id is not set");const a=j();ke(),M();try{yield a.deleteKafkaById(e.id,!0).then((()=>{ce(!0),xe()}))}catch(e){let a;(0,g.G6)(e)&&(a=null===(t=e.response)||void 0===t?void 0:t.data.reason),D&&D({title:T("common.something_went_wrong"),variant:m.AlertVariant.danger,description:a})}}));(0,o.useEffect)((()=>{y>1&&void 0!==(null==B?void 0:B.items)&&0===B.size&&(je("page",(y-1).toString()),je("perPage",C.toString()),A.push({search:w.toString()}))}),[A,B,y,C,w,je]);const ye=(0,o.useRef)(!1);(0,o.useEffect)((()=>{(!1===ye.current||de)&&(ye.current=!0,he())}),[he,de]),(0,o.useEffect)((()=>{xe()}),[y,C,Y,w,xe,ee]),(0,o.useEffect)((()=>{var e;if(void 0!==B&&(null==B?void 0:B.size)>0&&N){void 0===(null===(e=B.items)||void 0===e?void 0:e.find((e=>(null==e?void 0:e.id)===(null==N?void 0:N.id))))&&R()}}),[R,N,null==N?void 0:N.id,B,L]),(0,o.useEffect)((()=>{0===(null==B?void 0:B.size)&&R()}),[B,R]),(0,o.useEffect)((()=>{var e,t;null===(e=_.getUsername())||void 0===e||e.then((e=>re(e))),null===(t=_.isOrgAdmin())||void 0===t||t.then((e=>se(e)))}),[_]),(0,o.useEffect)((()=>{(0,i.__awaiter)(void 0,void 0,void 0,(function*(){a&&(yield a())&&Se()}))}),[Se,a]);if(c((0,o.useCallback)((function(){he(!0)}),[he]),g.md),ae)return(0,n.jsx)(p.NI,{});const Ce=$&&ee.length<1&&void 0!==B&&(null==B?void 0:B.total)<1;return Ce?(0,n.jsx)(p.hs,{handleCreateInstanceModal:ve}):void 0!==Ce?(0,n.jsx)(m.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:m.PageSectionVariants.default,padding:{default:"noPadding"},"data-ouia-component-id":"page-KafkaInstances"},{children:(0,n.jsx)(m.Card,Object.assign({ouiaId:"card-controlplane"},{children:(0,n.jsx)(v.G,{onDeleteInstance:Oe,onViewInstance:ge,onViewConnection:me,onChangeOwner:Fe,loggedInUser:ne,page:y,perPage:C,total:(null==B?void 0:B.total)||0,isOrgAdmin:le,expectedTotal:U,kafkaDataLoaded:$,kafkaInstanceItems:q,setOrderBy:J,setFilterSelected:X,setFilteredValue:be,filteredValue:ee,handleCreateInstanceModal:ve,orderBy:Y,filterSelected:W,onCreate:_e,refresh:xe,selectedInstanceName:null==N?void 0:N.name})}))})):(0,n.jsx)(n.Fragment,{})}},11228:(e,t,a)=>{a.d(t,{hs:()=>D,LF:()=>P,qV:()=>d,eG:()=>y,NI:()=>I});a(51622);var i=a(85893),n=a(30645),r=a(28188),l=a(35451),s=a(41942),o=a(84564),c=a(52648);const d=({status:e,instanceName:t})=>{const{t:a}=(0,n.useTranslation)(["kasTemporaryFixMe"]),d=()=>{switch(null==e?void 0:e.toLowerCase()){case c.hm[0].value:return(0,i.jsx)(l.ZP,{className:"mk--instances__table--icon--completed"});case c.hm[1].value:return(0,i.jsx)(o.ZP,{className:"mk--instances__table--icon--failed"});case c.hm[2].value:return(0,i.jsx)(s.ZP,{});case c.hm[3].value:case c.hm[4].value:return(0,i.jsx)(r.Spinner,{size:"md","aria-label":t,"aria-valuetext":"Creation in progress"});case c.hm[5].value:case c.hm[6].value:return;default:return(0,i.jsx)(s.ZP,{})}};return(0,i.jsxs)(r.Flex,{children:[(0,i.jsx)((()=>{const e=d();return e?(0,i.jsx)(r.FlexItem,Object.assign({spacer:{default:"spacerSm"}},{children:e})):(0,i.jsx)(i.Fragment,{})}),{}),(0,i.jsx)(r.FlexItem,{children:(0,i.jsx)((()=>{const t=c.hm.filter((t=>t.value===(null==e?void 0:e.toLowerCase())));return 1===t.length?a(t[0].value):a("creation_pending")}),{})})]})};var u=a(93264),p=a(8755),v=a(3433),g=a(75381);const m=(e,t)=>{const{t:a}=(0,n.useTranslation)(["kasTemporaryFixMe"]);return e?(0,i.jsx)("div",{children:a("max_filter_message")}):"owner"===t?(0,i.jsx)("div",{children:a("owner_field_invalid_message",{name:t})}):(0,i.jsx)("div",{children:a("input_field_invalid_message",{name:t})})},f=({getSelectionForFilter:e,filterSelected:t,onDeleteChipGroup:a,onDeleteChip:l,updateFilter:s,isMaxFilter:o,removeFilterValue:c,isDisabledSelectOption:d})=>{var u;const{t:p}=(0,n.useTranslation)(["kasTemporaryFixMe"]),v=g.bv.map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,i.jsx)(r.ToolbarFilter,Object.assign({chips:null===(u=e("cloud_provider"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,t)=>l&&l("cloud_provider",t,v),deleteChipGroup:()=>a&&a("cloud_provider"),categoryName:p("cloud_provider"),showToolbarItem:"cloud_provider"===t},{children:(0,i.jsx)(h,{updateFilter:s,isMaxFilter:o,removeFilterValue:c,isDisabledSelectOption:d,options:v,getSelectionForFilter:e,filterSelected:t})}))},h=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:l,options:s,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,n.useTranslation)(["kasTemporaryFixMe"]),p=(0,u.useRef)(null),v=m(t),g=()=>t?(0,i.jsx)(r.Tooltip,{isVisible:t,content:v,reference:p}):(0,i.jsx)(i.Fragment,{}),[f,h]=(0,u.useState)(!1),b=()=>{h((e=>!e))},x=(t,a,i)=>{i&&_(),e("cloud_provider",{value:a.toString(),isExact:!0},!0),s.length<2&&h(!1)},_=()=>{a&&a("cloud_provider"),h(!1)};return"cloud_provider"===c?(0,i.jsx)(r.Select,Object.assign({id:"cloud-provider-select",variant:r.SelectVariant.checkbox,"aria-label":"Select cloud provider",onToggle:b,selections:o("cloud_provider"),isOpen:f,onSelect:x,placeholderText:d("filter_by_cloud_provider"),className:"select-custom-width",ref:p},{children:s.map(((e,a)=>(0,i.jsxs)(r.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&l("cloud_provider",e.value),value:e.value},{children:[(0,i.jsx)(g,{}),e.label]}),a)))})):(0,i.jsx)(i.Fragment,{})};var b=a(71070);const x=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,filterSelected:l,isMaxFilter:s,updateFilter:o})=>{const{t:c}=(0,n.useTranslation)(["kasTemporaryFixMe"]),[d,p]=(0,u.useState)(!0),[v,g]=(0,u.useState)(),f=(0,u.useRef)(null),h=m(s,"name"),x=e=>{g(e),!d&&p(!0)},_=e=>{"Enter"!==e.key||s||S()},S=()=>{v&&""!=v.trim()&&((e=>!e||/^([a-zA-Z0-9-_%]*[a-zA-Z0-9-_%])?$/.test(e.trim()))(v)?(o("name",{value:v,isExact:!1},!1),g("")):p(!1))};return(0,i.jsx)(r.ToolbarFilter,Object.assign({chips:e("name"),deleteChip:(e,a)=>t("name",a),deleteChipGroup:()=>a("name"),categoryName:c("name"),showToolbarItem:"name"===(null==l?void 0:l.toLowerCase())},{children:(()=>{const e=!d||s,t=()=>e?(0,i.jsx)(r.Tooltip,{isVisible:s||!d,content:h,reference:f}):(0,i.jsx)(i.Fragment,{});return"name"===(null==l?void 0:l.toLowerCase())?(0,i.jsxs)(r.InputGroup,{children:[(0,i.jsx)(r.TextInput,{name:"name",id:"filterText",type:"search","aria-label":"Search filter input",validated:e?r.ValidatedOptions.error:r.ValidatedOptions.default,placeholder:c("filter_by_name_lower"),onChange:x,onKeyPress:_,value:v,ref:f}),(0,i.jsx)(r.Button,Object.assign({variant:r.ButtonVariant.control,isDisabled:!d||s,onClick:()=>S(),"aria-label":"Search instances"},{children:(0,i.jsx)(b.ZP,{})})),(0,i.jsx)(t,{})]}):(0,i.jsx)(i.Fragment,{})})()}))},_=({getSelectionForFilter:e,onDeleteChipGroup:t,onDeleteChip:a,filterSelected:l,isMaxFilter:s,updateFilter:o})=>{const{t:c}=(0,n.useTranslation)(["kasTemporaryFixMe"]),d=(0,u.useRef)(null),p=m(s,"owner"),[v,g]=(0,u.useState)(),[f,h]=(0,u.useState)(!0),x=()=>{v&&""!=v.trim()&&((e=>!e||!/["$^<>|+%/;:,\s*=~#()]/.test(e.trim()))(v)?(o("owner",{value:v,isExact:!1},!1),g("")):h(!1))},_=e=>{"Enter"!==e.key||s||x()},S=e=>{g(e),!f&&h(!0)};return(0,i.jsx)(r.ToolbarFilter,Object.assign({chips:e("owner"),deleteChip:(e,t)=>a("owner",t),deleteChipGroup:()=>t("owner"),categoryName:c("owner"),showToolbarItem:"owner"===(null==l?void 0:l.toLowerCase())},{children:(()=>{if("owner"===(null==l?void 0:l.toLowerCase())){const e=!f||s,t=()=>e?(0,i.jsx)(r.Tooltip,{isVisible:s||!f,content:p,reference:d}):(0,i.jsx)(i.Fragment,{});return(0,i.jsxs)(r.InputGroup,{children:[(0,i.jsx)(r.TextInput,{name:"owner",id:"filterOwners",type:"search","aria-label":"Search filter input",placeholder:c("filter_by_owner"),validated:e?r.ValidatedOptions.error:r.ValidatedOptions.default,onChange:S,onKeyPress:_,value:v,ref:d}),(0,i.jsx)(r.Button,Object.assign({isDisabled:e,variant:r.ButtonVariant.control,onClick:x,"aria-label":"Search owners"},{children:(0,i.jsx)(b.ZP,{})})),(0,i.jsx)(t,{})]})}return(0,i.jsx)(i.Fragment,{})})()}))},S=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,removeFilterValue:l,isDisabledSelectOption:s,isMaxFilter:o,filterSelected:c,updateFilter:d})=>{var u;const{t:p}=(0,n.useTranslation)(["kasTemporaryFixMe"]),v=g.Bh.map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,i.jsx)(r.ToolbarFilter,Object.assign({chips:null===(u=e("region"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,a)=>t("region",a,v),deleteChipGroup:()=>a("region"),categoryName:p("region"),showToolbarItem:"region"===c},{children:(0,i.jsx)(k,{updateFilter:d,isMaxFilter:o,removeFilterValue:l,isDisabledSelectOption:s,options:v,getSelectionForFilter:e,filterSelected:c})}))},k=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:l,options:s,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,n.useTranslation)(["kasTemporaryFixMe"]),p=(0,u.useRef)(null),v=m(t),[g,f]=(0,u.useState)(!1),h=()=>t?(0,i.jsx)(r.Tooltip,{isVisible:t,content:v,reference:p}):(0,i.jsx)(i.Fragment,{}),b=()=>{f(!g)},x=(t,a,i)=>{i&&_(),e("region",{value:a.toString(),isExact:!0},!0),s.length<2&&f(!1)},_=()=>{a("region"),f(!1)};return"region"===c?(0,i.jsx)(r.Select,Object.assign({id:"region-select",variant:r.SelectVariant.checkbox,"aria-label":"Select region",onToggle:b,selections:o("region"),isOpen:g,onSelect:x,placeholderText:d("filter_by_region"),className:"select-custom-width",ref:p},{children:s.map(((e,a)=>(0,i.jsxs)(r.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&l("region",e.value),value:e.value},{children:[(0,i.jsx)(h,{}),e.label]}),a)))})):(0,i.jsx)(i.Fragment,{})},j=({setFilterSelected:e,filterSelected:t})=>{const{t:a}=(0,n.useTranslation)(["kasTemporaryFixMe"]),[l,s]=(0,u.useState)(!1),o=[{label:a("name"),value:"name",disabled:!1},{label:a("cloud_provider"),value:"cloud_provider",disabled:!1},{label:a("region"),value:"region",disabled:!1},{label:a("owner"),value:"owner",disabled:!1},{label:a("status"),value:"status",disabled:!1}];return(0,i.jsx)(r.ToolbarItem,{children:(0,i.jsx)(r.Select,Object.assign({variant:r.SelectVariant.single,"aria-label":"Select filter",onToggle:()=>{s(!l)},selections:t,isOpen:l,onSelect:(t,a)=>{s(!l),e(null==a?void 0:a.toString())}},{children:o.map(((e,t)=>(0,i.jsx)(r.SelectOption,Object.assign({isDisabled:e.disabled,value:e.value},{children:e.label}),t)))}))})},F=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,isMaxFilter:l,filterSelected:s,updateFilter:o,removeFilterValue:c,isDisabledSelectOption:d})=>{var u;const{t:p}=(0,n.useTranslation)(["kasTemporaryFixMe"]),v=g.hm.filter((e=>e.value!==g.Od.PREPARING&&e.value!==g.Od.DELETED)).map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,i.jsx)(r.ToolbarFilter,Object.assign({chips:null===(u=e("status"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,a)=>t("status",a,v),deleteChipGroup:()=>a("status"),categoryName:p("status"),showToolbarItem:"status"===s},{children:(0,i.jsx)(O,{updateFilter:o,isMaxFilter:l,removeFilterValue:c,isDisabledSelectOption:d,statusFilterOptions:v,getSelectionForFilter:e,filterSelected:s})}))},O=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:l,statusFilterOptions:s,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,n.useTranslation)(["kasTemporaryFixMe"]),p=m(t),v=(0,u.useRef)(null),[g,f]=(0,u.useState)(!1),h=()=>t?(0,i.jsx)(r.Tooltip,{isVisible:t,content:p,reference:v}):(0,i.jsx)(i.Fragment,{}),b=()=>{f(!g)},x=(t,a,i)=>{i&&_(),e("status",{value:a.toString(),isExact:!0},!0)},_=()=>{a("status"),f(!1)};return"status"===c?(0,i.jsx)(r.Select,Object.assign({id:"status-select",variant:r.SelectVariant.checkbox,"aria-label":"Select status",onToggle:b,selections:o("status"),isOpen:g,onSelect:x,placeholderText:d("filter_by_status"),className:"select-custom-width",ref:v},{children:s.map(((e,a)=>(0,i.jsxs)(r.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&l("status",e.value),value:e.value},{children:[(0,i.jsx)(h,{}),e.label]}),a)))})):(0,i.jsx)(i.Fragment,{})},w=({isMaxFilter:e,filteredValue:t,setFilteredValue:a,filterSelected:n,setFilterSelected:l})=>{const s=(e,a)=>{let i;const n=null==t?void 0:t.filter((({filterKey:t})=>t===e));if(n&&(null==n?void 0:n.length)>0){const{filterValue:e}=n[0];i=null==e?void 0:e.find((({value:e})=>e===a))}return!i},o=(e,i,n)=>{const r=Object.assign([],t),l=r.findIndex((t=>t.filterKey===e));if(l>-1){const e=r[l];if(e.filterValue&&e.filterValue.length>0){const t=e.filterValue.findIndex((e=>e.value===i.value));if(t>-1){if(!n)return;e.filterValue.splice(t,1)}else r[l].filterValue.push(i)}else r[l].filterValue=[i]}else r.push({filterKey:e,filterValue:[i]});a(r)},c=e=>{const a=t.filter((t=>t.filterKey===e));if(a.length>0)return a[0].filterValue.map((e=>e.value))},d=(e,i,n)=>{var r,l;const s=Object.assign([],t),o=s.findIndex((t=>t.filterKey===e)),c=Object.assign([],null===(r=s[o])||void 0===r?void 0:r.filterValue);let d=i.toString();n&&(null==n?void 0:n.length)>0&&(d=null===(l=null==n?void 0:n.find((e=>e.label===i.toString())))||void 0===l?void 0:l.value);const u=c.findIndex((e=>e.value===d));u>=0&&(s[o].filterValue.splice(u,1),a(s))},u=e=>{const i=Object.assign([],t),n=i.findIndex((t=>t.filterKey===e));n>=0&&(i.splice(n,1),a(i))},p=e=>{const i=Object.assign([],t),n=i.findIndex((t=>t.filterKey===e));n>=0&&i.splice(n,1),a(i)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.ToolbarGroup,Object.assign({variant:"filter-group"},{children:[(0,i.jsx)(j,{setFilterSelected:l,filterSelected:n}),(0,i.jsx)(x,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:s}),(0,i.jsx)(f,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:s}),(0,i.jsx)(S,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:s}),(0,i.jsx)(_,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:s}),(0,i.jsx)(F,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:s})]}))})},y=({setFilterSelected:e,filterSelected:t="name",total:a,page:l,perPage:s,filteredValue:o,setFilteredValue:c,handleCreateInstanceModal:d})=>{const{t:m}=(0,n.useTranslation)(["kasTemporaryFixMe"]),[f,h]=(0,u.useState)(!1),b=(0,u.useCallback)((()=>{let e=0;null==o||o.forEach((t=>{const{filterValue:a,filterKey:i}=t,n="status"===i?null==a?void 0:a.filter((({value:e})=>e===g.Od.PROVISIONING)):[],r="status"===i?null==a?void 0:a.filter((({value:e})=>e===g.Od.DEPROVISION)):[];(null==n?void 0:n.length)>0&&(null==r?void 0:r.length)>0?e+=(null==a?void 0:a.length)+2:(null==n?void 0:n.length)>0||(null==r?void 0:r.length)>0?e+=(null==a?void 0:a.length)+1:e+=null==a?void 0:a.length})),e>=g.pf?h(!0):h(!1)}),[o]);(0,u.useEffect)((()=>{b()}),[b]);const x=[{item:(0,i.jsx)(r.Button,Object.assign({variant:"primary",onClick:d,"data-testid":"tableStreams-buttonCreateKafka",ouiaId:"button-create"},{children:m("create_kafka_instance")}))}];return a&&a>0&&x.push({item:(0,i.jsx)(v.wu,{widgetId:"pagination-cloudProviderOptions-menu-top",itemCount:a,page:l,perPage:s,isCompact:!0,titles:{paginationTitle:m("minimal_pagination"),perPageSuffix:m("per_page_suffix"),toFirstPage:m("to_first_page"),toPreviousPage:m("to_previous_page"),toLastPage:m("to_last_page"),toNextPage:m("to_next_page"),optionsToggle:m("options_toggle"),currPage:m("curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),(0,i.jsx)(v.L5,{toolbarProps:{id:"instanceDrawerInstance-toolbar",clearAllFilters:()=>{c([]),h(!1)},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:(0,i.jsx)(p.ZP,{}),breakpoint:"md"},toggleGroupItems:(0,i.jsx)(w,{isMaxFilter:f,filteredValue:o,setFilteredValue:c,setFilterSelected:e,filterSelected:t}),toolbarItems:x})};var C=a(5569);const I=()=>{const{t:e}=(0,n.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(v.C0,{titleProps:{title:e("access_permissions_needed"),headingLevel:"h2"},emptyStateIconProps:{icon:C.ZP},emptyStateBodyProps:{body:e("to_access_kafka_instances_contact_your_organization_administrators")}})}))};var T=a(10069);const D=({handleCreateInstanceModal:e})=>{const{t}=(0,n.useTranslation)(["kasTemporaryFixMe"]),a=(0,u.useContext)(T.QuickStartContext);return(0,i.jsx)(r.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(v.C0,Object.assign({emptyStateProps:{variant:v.jU.NoItems},emptyStateBodyProps:{body:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Trans,{i18nKey:"create_a_kafka_instance_to_get_started",ns:["kasTemporaryFixMe"],components:[(0,i.jsx)(r.Button,{variant:r.ButtonVariant.link,isSmall:!0,isInline:!0,onClick:()=>a.setActiveQuickStart&&a.setActiveQuickStart("getting-started")},"btn-quick-start")]})})},titleProps:{title:t("no_kafka_instances_yet")}},{children:(0,i.jsx)(r.Button,Object.assign({"data-testid":"emptyStateStreams-buttonCreateKafka",variant:r.ButtonVariant.primary,onClick:()=>e&&e(),ouiaId:"button-create"},{children:t("create_kafka_instance")}))}))}))},P=({children:e})=>{const{t}=(0,n.useTranslation)(["kasTemporaryFixMe"]),[a,l]=(0,u.useState)(!1);(0,u.useEffect)((()=>{if((0,g.Qw)()){const e=window.localStorage;if(e){const t=parseInt(e.getItem("openSessions")||"0"),a=t+1;t<1&&(e.setItem("openSessions",`${a}`),l(!0))}}}),[]);const s=()=>{l(!a)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("main",Object.assign({className:"pf-c-page__main"},{children:[(0,i.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light},{children:(0,i.jsx)(r.Level,{children:(0,i.jsx)(r.LevelItem,{children:(0,i.jsx)(r.TextContent,{children:(0,i.jsx)(r.Text,Object.assign({component:"h1"},{children:t("kafka_instances")}))})})})})),e]})),(0,i.jsx)(r.Modal,Object.assign({variant:r.ModalVariant.small,title:"Mobile experience",isOpen:a,onClose:()=>s(),actions:[(0,i.jsx)(r.Button,Object.assign({variant:"primary",onClick:()=>s()},{children:"Ok"}),"confirm")]},{children:"The mobile experience isn't fully optimized yet, so some items might not appear correctly."}))]})}},46163:(e,t,a)=>{a.d(t,{D:()=>s});var i=a(9922);var n=a(78261),r=a(75381),l=a(88601);const s=()=>{const e=(0,l.d)();return(t,a,l)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var i;const s=e();try{const e=(e=>{if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,cloud_provider:e.cloud_provider.value}})({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}});e.name=t.name,e.cloud_provider=t.provider,e.region=t.region,e.plan=t.plan+"."+t.sizeId,e.billing_model="prepaid"===t.billing?"standard":void 0!==t.billing?"marketplace":null,e.billing_cloud_account_id=t.billing&&"prepaid"!==t.billing?t.billing.subscription:null,yield s.createKafka(!0,e),a()}catch(e){if((0,n.G6)(e)){const{code:a}=(null===(i=null==e?void 0:e.response)||void 0===i?void 0:i.data)||{};switch(t.plan){case"developer":if(a===r.SM.DUPLICATE_INSTANCE_NAME)l("name-taken");else l("developer-unavailable");break;case"standard":switch(a){case r.SM.DUPLICATE_INSTANCE_NAME:l("name-taken");break;case r.SM.INTERNAL_CAPACITY_ERROR:l("region-unavailable");break;case r.SM.INSUFFICIENT_QUOTA:l("insufficient-quota");break;default:console.error("useAvailableProvidersAndDefault","createKafka unknown error",e),l("unknown")}}}else console.error("useAvailableProvidersAndDefault","createKafka unexpected error",e)}}))}}}]);
