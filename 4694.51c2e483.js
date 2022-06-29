"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4694],{27081:()=>{},94622:(e,t,a)=>{a.d(t,{A:()=>r});var i=a(85893),n=a(93264),s=a(98743),l=a(5854);const r=()=>{const{registerModals:e}=(0,l.useModal)();return e((()=>{const{t:e}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return{[l.ModalType.KasCreateInstance]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(7196),a.e(9922),a.e(8199),a.e(2955),a.e(9835),a.e(4372)]).then(a.bind(a,74372)))),variant:"medium",title:e("create_a_kafka_instance")},[l.ModalType.KasDeleteInstance]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(7196),a.e(9922),a.e(8408),a.e(8199),a.e(2955),a.e(8251),a.e(5626),a.e(524)]).then(a.bind(a,78578)))),variant:"small"},[l.ModalType.KasTransferOwnership]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(9922),a.e(8408),a.e(2955),a.e(8512)]).then(a.bind(a,98512)))),variant:"medium",title:e("change_owner")},[l.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(7196),a.e(9922),a.e(8408),a.e(8199),a.e(2955),a.e(8251),a.e(5626),a.e(8752)]).then(a.bind(a,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[l.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(7196),a.e(9922),a.e(8408),a.e(8199),a.e(2955),a.e(8251),a.e(5626),a.e(645)]).then(a.bind(a,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[l.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,n.lazy)((()=>Promise.all([a.e(7196),a.e(9922),a.e(8408),a.e(8199),a.e(2955),a.e(8251),a.e(5626),a.e(4410)]).then(a.bind(a,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,i.jsx)(i.Fragment,{})}},63286:(e,t,a)=>{var i;a.d(t,{Z:()=>i}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(i||(i={}))},51622:(e,t,a)=>{a.d(t,{G:()=>h});var i=a(9922),n=a(85893),s=a(93264),l=a(98743),r=a(28251),o=a(75381),c=a(99922),d=a(68199),u=a(11228),p=a(3433);const v=({total:e,page:t,perPage:a})=>{const{t:i}=(0,l.useTranslation)(["kasTemporaryFixMe"]);return e>0?(0,n.jsx)(p.wu,{widgetId:"pagination-cloudProviderOptions-menu-bottom",itemCount:e,variant:c.PaginationVariant.bottom,page:t,perPage:a,titles:{paginationTitle:i("full_pagination"),perPageSuffix:i("per_page_suffix"),toFirstPage:i("to_first_page"),toPreviousPage:i("to_previous_page"),toLastPage:i("to_last_page"),toNextPage:i("to_next_page"),optionsToggle:i("options_toggle"),currPage:i("curr_page")}}):(0,n.jsx)(n.Fragment,{})},g=({count:e,dataLoaded:t})=>{const{t:a}=(0,l.useTranslation)(["kasTemporaryFixMe"]);return e<1&&t?(0,n.jsx)(p.C0,{emptyStateProps:{variant:p.jU.NoResult},titleProps:{title:a("no_results_found")},emptyStateBodyProps:{body:a("adjust_your_filters_and_try_again")}}):(0,n.jsx)(n.Fragment,{})};var m=a(17177),f=a(29422);const h=({onDeleteInstance:e,onChangeOwner:t,onViewInstance:a,onViewConnection:h,loggedInUser:x,page:b,perPage:_,total:S,expectedTotal:j,kafkaDataLoaded:F,kafkaInstanceItems:k,isOrgAdmin:O,setOrderBy:y,orderBy:w,filterSelected:C,setFilterSelected:I,filteredValue:T,setFilteredValue:D,onCreate:P,refresh:V,handleCreateInstanceModal:M,selectedInstanceName:E})=>{const{t:N}=(0,l.useTranslation)(["kasTemporaryFixMe"]),L=[{title:N("name"),transforms:[r.sortable]},{title:N("cloud_provider"),transforms:[r.sortable]},{title:N("region"),transforms:[r.sortable]},{title:N("owner"),transforms:[r.sortable]},{title:N("status"),transforms:[r.sortable]},{title:N("time_created"),transforms:[r.sortable]}],A=(0,s.useMemo)((()=>{const e=e=>{switch(e.toLowerCase()){case"name":return 0;case"cloud_provider":return 1;case"region":return 2;case"owner":return 3;case"status":return 4;case"created_at":return 5;default:return}},t=(null==w?void 0:w.split(" "))||[];if(t.length>1)return{index:e(t[0]),direction:t[1]===r.SortByDirection.asc?r.SortByDirection.asc:r.SortByDirection.desc}}),[w]),R=(0,s.useMemo)((()=>{const e=[],t=(0,o.o8)(b,_,j);return F?(null==k||k.forEach((t=>{const{name:a,cloud_provider:i,region:s,created_at:r,status:p,owner:v,instance_type:g,size:h}=t,x=N(i),b=N(s);e.push({cells:[{title:p===o.Od.DEPROVISION||p!==o.Od.READY?a:(0,n.jsx)(d.Link,Object.assign({to:`kafkas/${null==t?void 0:t.id}/dashboard`,"data-ouia-component-id":"table-link"},{children:a}))},x,b,v,{title:(0,n.jsx)(u.qV,{status:p,instanceName:a})},{title:(0,n.jsxs)(n.Fragment,{children:[(0,o.L0)(r,N("ago")),(0,n.jsx)("br",{}),(g===(null===o.ik||void 0===o.ik?void 0:o.ik.developer)||g===(null===o.ik||void 0===o.ik?void 0:o.ik.eval))&&((null==h?void 0:h.trialDurationHours)?(0,n.jsx)(l.Trans,{i18nKey:"common.expires_in",ns:["kasTemporaryFixMe"],components:{time:(0,n.jsx)(m.FormatDate,{date:(0,f.Z)(new Date(r),{hours:null==h?void 0:h.trialDurationHours}),format:"expiration"})}}):(0,n.jsx)(c.Skeleton,{}))]})}],originalData:t})})),e):(0,o.vK)({loadingCount:t,skeleton:(0,n.jsx)(c.Skeleton,{}),length:L.length})}),[b,_,j,F,k,L.length,N]),G=(e,i,n)=>{var s,l,r;"view-instanceDrawerInstance"===n?a(i):"connect-instanceDrawerInstance"===n?h(i):"change-owner"===n?t(i):"delete-instanceDrawerInstance"===n&&K(i);const o=null===(r=null===(l=null===(s=null==e?void 0:e.target)||void 0===s?void 0:s.parentElement)||void 0===l?void 0:l.parentElement)||void 0===r?void 0:r.previousSibling;null!=o&&o.focus()},K=t=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){yield e(t)}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.eG,{filterSelected:C,setFilterSelected:I,total:S,page:b,perPage:_,filteredValue:T,setFilteredValue:D,onCreate:P,refresh:V,handleCreateInstanceModal:M}),(0,n.jsx)(p.wR,{tableProps:{cells:L,rows:R,"aria-label":N("cluster_instance_list"),actionResolver:e=>{if(!F)return[];const t=e.originalData;if(t.status===o.Od.DEPROVISION||t.status===o.Od.DELETED)return[];const a=void 0!==x&&t.owner===x||void 0!==O&&!0===O;let i;a||(i={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});return[Object.assign(Object.assign({title:N("view_details"),id:"view-instanceDrawerInstance","data-testid":"tableStreams-actionDetails",onClick:e=>G(e,t,"view-instanceDrawerInstance")},i),{tooltipProps:{position:"left",content:N("no_permission_to_view_kafka")}}),Object.assign(Object.assign({title:N("view_connection_information"),id:"connect-instanceDrawerInstance","data-testid":"tableStreams-actionConnection",onClick:e=>G(e,t,"connect-instanceDrawerInstance")},i),{tooltipProps:{position:"left",content:N("no_permission_to_connect_kafka")}}),Object.assign(Object.assign({title:N("change_owner"),id:"change-owner","data-testid":"tableStreams-actionChangeOwner",onClick:e=>a&&G(e,t,"change-owner")},i),{tooltipProps:{position:"left",content:N("no_permission_to_change_owner")}}),Object.assign(Object.assign({title:N("delete_instance"),id:"delete-instanceDrawerInstance","data-testid":"tableStreams-actionDelete",onClick:e=>a&&G(e,t,"delete-instanceDrawerInstance")},i),{tooltipProps:{position:"left",content:N("no_permission_to_delete_kafka")}})]},onSort:(e,t,a,i)=>{let n=a;(null==A?void 0:A.index)!==t&&"time-created"===i.property&&(n=r.SortByDirection.desc),y(`${(e=>{switch(e){case 0:return"name";case 1:return"cloud_provider";case 2:return"region";case 3:return"owner";case 4:return"status";case 5:return"created_at";default:return""}})(t)} ${n}`)},sortBy:A,hasDefaultCustomRowWrapper:!0,ouiaId:"table-kafka-instances"},activeRow:E,onRowClick:(e,t,i)=>{if(e.target instanceof HTMLElement){const t=e.target.tagName.toLowerCase();if("button"===t||"a"===t)return}a(null==i?void 0:i.originalData)},rowDataTestId:"tableStreams-row",loggedInUser:x}),(0,n.jsx)(g,{count:(null==k?void 0:k.length)||0,dataLoaded:F}),(0,n.jsx)(v,{total:S,page:b,perPage:_})]})}},24950:(e,t,a)=>{a.d(t,{V:()=>k});var i=a(9922),n=a(85893),s=a(93264),l=a(68199),r=a(98743),o=a(99922),c=a(3433);function d(e,t){const a=(0,s.useRef)();(0,s.useEffect)((()=>{a.current=e}),[e]),(0,s.useEffect)((()=>{if(null!==t){const e=setInterval((function(){a.current&&a.current()}),t);return()=>{clearInterval(e)}}}),[t])}var u=a(75381),p=a(52955),v=a(5854),g=a(13449),m=(a(27081),a(11228)),f=a(63286),h=a(51622);function x(){const e=function(){const e=document;return void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":void 0}();return void 0!==e&&!document[e]}function b(){const[e,t]=(0,s.useState)(x()),a=()=>t(x());return(0,s.useEffect)((()=>{const e=function(){const e=document;return void 0!==e.hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":""}();return document.addEventListener(e,a,!1),()=>{document.removeEventListener(e,a)}}),[]),{isVisible:e,setIsVisible:t}}function _(e){return{name:e.name,status:e.status}}var S=a(81548),j=a(81847);const F=new Map,k=({preCreateInstance:e})=>{var t;const{shouldOpenCreateModal:a}=(0,g.S)()||{},x=(()=>{const e=(0,j.sF)();return(t,a)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const i=t+a;if(!F.has(i)){const n=yield e(t,a,[]);F.set(i,n)}return F.get(i)}))})(),k=(0,v.useAuth)(),{kas:O}=(0,v.useConfig)()||{},{apiBasePath:y}=O||{},w=(0,l.useLocation)(),C=(0,s.useMemo)((()=>new URLSearchParams(w.search)),[w.search]),{page:I=1,perPage:T=10,setPage:D}=(0,c.h0)()||{},{t:P}=(0,r.useTranslation)(["kasTemporaryFixMe"]),{addAlert:V}=(0,v.useAlert)()||{},{showModal:M}=(0,v.useModal)(),{showModal:E}=(0,v.useModal)(),{hideModal:N,showModal:L}=(0,v.useModal)(),A=(0,l.useHistory)(),{drawerInstance:R,closeDrawer:G,openDrawer:K,setDrawerActiveTab:B,setDrawerInstance:$}=(0,S.gD)(),[z,H]=(0,s.useState)(),[Z,U]=(0,s.useState)(!1),[Q,q]=(0,s.useState)(3),[Y,J]=(0,s.useState)(),[W,X]=(0,s.useState)("created_at desc"),[ee,te]=(0,s.useState)("name"),[ae,ie]=(0,s.useState)([]),[ne,se]=(0,s.useState)(!1),[le,re]=(0,s.useState)(void 0),[oe,ce]=(0,s.useState)(),[de,ue]=(0,s.useState)(!1),[pe,ve]=(0,s.useState)(!1);!function(e){const{t}=(0,r.useTranslation)(["kasTemporaryFixMe"]),{addAlert:a}=(0,v.useAlert)()||{},{isVisible:i}=b(),l=(0,s.useRef)(),c=(0,s.useRef)([]),p=(0,s.useRef)([]),g=(0,s.useCallback)((e=>{a({title:t("kafka_successfully_created"),variant:o.AlertVariant.success,description:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:t("kafka_success_message",{name:e})}}),dataTestId:"toastCreateKafka-success"})}),[a,t]),m=(0,s.useCallback)((e=>{a({title:t("kafka_successfully_deleted",{name:e}),variant:o.AlertVariant.success})}),[a,t]),f=(0,s.useCallback)((e=>{a({title:t("kafka_not_created"),variant:o.AlertVariant.danger,description:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:t("kafka_failed_message",{name:e})}}),dataTestId:"toastCreateKafka-failed"})}),[a,t]);(0,s.useEffect)((function(){if(e){const t=void 0===l.current,a=l.current||[],i=a.map((e=>`${e.id}:${e.status}`)),n=e.map((e=>`${e.id}:${e.status}`));if(JSON.stringify(i)!==JSON.stringify(n)){const i=(e,i)=>t?[]:e.filter((e=>e.status===i&&!a.find((t=>t.id===e.id&&e.status!==i)))),n=i(e,u.Od.READY),s=i(e,u.Od.FAILED),[r,o]=c.current.reduce((([t,a],i)=>void 0===e.find((e=>e.id===i.id))?[[...t,i],a]:[t,[...a,i]]),[[],[]]),d=e.filter((e=>[u.Od.DELETED,u.Od.DEPROVISION].includes(e.status)&&void 0===o.find((t=>t.id===e.id))));c.current=[...o,...d],p.current=[...p.current,...n.map(_),...s.map(_),...r.map(_)],l.current=e}}}),[e]),d((0,s.useCallback)((function(){if(i)for(;p.current.length>0;){const e=p.current.shift();switch(e.status){case u.Od.READY:g(e.name);break;case u.Od.FAILED:f(e.name);break;case u.Od.DEPROVISION:case u.Od.DELETED:m(e.name)}}}),[i,m,f,g]),1e3)}(null===(t=null==z?void 0:z.items)||void 0===t?void 0:t.filter((e=>e.owner===le)));const ge=(0,s.useCallback)(x,[x]),me=(0,s.useCallback)((e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const t=[...e];return t&&t.length>0&&(null==t||t.forEach(((e,a)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const{instance_type:i,cloud_provider:n,region:s}=e;if("developer"===i&&n&&s){const e=yield ge(n,s);t[a].size={trialDurationHours:e.trial.trialDurationHours}}}))))),t}))),[ge]),fe=()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){let t;e&&(t=yield e(!0)),t&&ke()})),he=e=>{$(e.id),B(f.Z.DETAILS),K()},xe=e=>{$(e.id),B(f.Z.CONNECTION),K()},be=(0,s.useCallback)((()=>{const e=[];return ae.forEach((t=>{const{filterKey:a,filterValue:i}=t;if(i&&i.length>0){let t="(";t+=i.map((e=>{const t=e.value.trim();return t===u.Od.PROVISIONING?`${a} = ${u.Od.PREPARING} or ${a} = ${u.Od.PROVISIONING}`:t===u.Od.DEPROVISION?`${a} = ${u.Od.DEPROVISION} or ${a} = ${u.Od.DELETED}`:""!==t?`${a} ${!0===e.isExact?`= ${t}`:`like %${t}%`}`:""})).join(" or "),t+=")",e.push(t)}})),e.join(" and ")}),[ae]),_e=(0,s.useCallback)(((e=!1)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const t=be(),a=yield null==k?void 0:k.kas.getToken();if(a)try{const n=new p.DefaultApi(new p.Configuration({accessToken:a,basePath:y}));e||U(!1),ve(!1),yield n.getKafkas(null==I?void 0:I.toString(),null==T?void 0:T.toString(),W,t).then((e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const t=e.data,a=(null==t?void 0:t.items)||[];H(t);const i=yield me(a);J(i),void 0!==(null==z?void 0:z.total)&&z.total>Q&&q(z.total),de&&ae.length<1&&0==(null==a?void 0:a.length)&&ue(!1)})))).finally((()=>U(!0)))}catch(e){(e=>{var t,a;let i;(0,u.G6)(e)&&(i=null===(a=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===a?void 0:a.code),i===u.SM.UNAUTHORIZED_USER&&se(!0)})(e)}}))),[k,y,Q,ae,be,z,W,I,T,de,me]),Se=(0,s.useCallback)((e=>{ie(e),D&&D(1)}),[D]),je=(0,s.useCallback)((()=>{ve(!0)}),[]),Fe=(0,s.useCallback)((()=>{q((void 0===z?0:z.total)+1)}),[z]),ke=(0,s.useCallback)((()=>{M(v.ModalType.KasCreateInstance,{onCreate:()=>{Fe(),je()}})}),[Fe,je,M]),Oe=()=>{q((void 0===z?0:z.total)-1)},ye=(0,s.useCallback)(((e,t)=>{C.set(e,t.toString())}),[C]),we=e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){E(v.ModalType.KasTransferOwnership,{kafka:e,refreshKafkas:je})})),Ce=e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const t=()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){yield Ie(e),Oe()}));e.status===u.Od.FAILED?yield t():L(v.ModalType.KasDeleteInstance,{onDelete:t,kafka:e})})),Ie=e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var t;if(void 0===e.id)throw new Error("kafka instanceDrawerInstance id is not set");const a=yield null==k?void 0:k.kas.getToken(),i=new p.DefaultApi(new p.Configuration({accessToken:a,basePath:y}));Oe(),N();try{yield i.deleteKafkaById(e.id,!0).then((()=>{ue(!0),je()}))}catch(e){let a;(0,u.G6)(e)&&(a=null===(t=e.response)||void 0===t?void 0:t.data.reason),V&&V({title:P("common.something_went_wrong"),variant:o.AlertVariant.danger,description:a})}}));(0,s.useEffect)((()=>{I>1&&void 0!==(null==z?void 0:z.items)&&0===z.size&&(ye("page",(I-1).toString()),ye("perPage",T.toString()),A.push({search:C.toString()}))}),[A,z,I,T,C,ye]);const Te=(0,s.useRef)(!1);(0,s.useEffect)((()=>{(!1===Te.current||pe)&&(Te.current=!0,_e())}),[_e,pe]),(0,s.useEffect)((()=>{je()}),[I,T,W,C,je,ae]),(0,s.useEffect)((()=>{var e;if(void 0!==z&&(null==z?void 0:z.size)>0&&R){void 0===(null===(e=z.items)||void 0===e?void 0:e.find((e=>(null==e?void 0:e.id)===(null==R?void 0:R.id))))&&G()}}),[G,R,null==R?void 0:R.id,z,K]),(0,s.useEffect)((()=>{0===(null==z?void 0:z.size)&&G()}),[z,G]),(0,s.useEffect)((()=>{var e,t;null===(e=k.getUsername())||void 0===e||e.then((e=>re(e))),null===(t=k.isOrgAdmin())||void 0===t||t.then((e=>ce(e)))}),[k]),(0,s.useEffect)((()=>{(0,i.__awaiter)(void 0,void 0,void 0,(function*(){a&&(yield a())&&ke()}))}),[ke,a]);if(d((0,s.useCallback)((function(){_e(!0)}),[_e]),u.md),ne)return(0,n.jsx)(m.NI,{});const De=Z&&ae.length<1&&void 0!==z&&(null==z?void 0:z.total)<1;return De?(0,n.jsx)(m.hs,{handleCreateInstanceModal:fe}):void 0!==De?(0,n.jsx)(o.PageSection,Object.assign({className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:o.PageSectionVariants.default,padding:{default:"noPadding"},"data-ouia-component-id":"page-KafkaInstances"},{children:(0,n.jsx)(o.Card,Object.assign({ouiaId:"card-controlplane"},{children:(0,n.jsx)(h.G,{onDeleteInstance:Ce,onViewInstance:he,onViewConnection:xe,onChangeOwner:we,loggedInUser:le,page:I,perPage:T,total:(null==z?void 0:z.total)||0,isOrgAdmin:oe,expectedTotal:Q,kafkaDataLoaded:Z,kafkaInstanceItems:Y,setOrderBy:X,setFilterSelected:te,setFilteredValue:Se,filteredValue:ae,handleCreateInstanceModal:fe,orderBy:W,filterSelected:ee,onCreate:Fe,refresh:je,selectedInstanceName:null==R?void 0:R.name})}))})):(0,n.jsx)(n.Fragment,{})}},11228:(e,t,a)=>{a.d(t,{hs:()=>D,LF:()=>P,qV:()=>d,eG:()=>w,NI:()=>I});a(51622);var i=a(85893),n=a(98743),s=a(99922),l=a(35451),r=a(41942),o=a(84564),c=a(52648);const d=({status:e,instanceName:t})=>{const{t:a}=(0,n.useTranslation)(["kasTemporaryFixMe"]),d=()=>{switch(null==e?void 0:e.toLowerCase()){case c.hm[0].value:return(0,i.jsx)(l.ZP,{className:"mk--instances__table--icon--completed"});case c.hm[1].value:return(0,i.jsx)(o.ZP,{className:"mk--instances__table--icon--failed"});case c.hm[2].value:return(0,i.jsx)(r.ZP,{});case c.hm[3].value:case c.hm[4].value:return(0,i.jsx)(s.Spinner,{size:"md","aria-label":t,"aria-valuetext":"Creation in progress"});case c.hm[5].value:case c.hm[6].value:return;default:return(0,i.jsx)(r.ZP,{})}};return(0,i.jsxs)(s.Flex,{children:[(0,i.jsx)((()=>{const e=d();return e?(0,i.jsx)(s.FlexItem,Object.assign({spacer:{default:"spacerSm"}},{children:e})):(0,i.jsx)(i.Fragment,{})}),{}),(0,i.jsx)(s.FlexItem,{children:(0,i.jsx)((()=>{const t=c.hm.filter((t=>t.value===(null==e?void 0:e.toLowerCase())));return 1===t.length?a(t[0].value):a("creation_pending")}),{})})]})};var u=a(93264),p=a(8755),v=a(3433),g=a(75381);const m=(e,t)=>{const{t:a}=(0,n.useTranslation)(["kasTemporaryFixMe"]);return e?(0,i.jsx)("div",{children:a("max_filter_message")}):"owner"===t?(0,i.jsx)("div",{children:a("owner_field_invalid_message",{name:t})}):(0,i.jsx)("div",{children:a("input_field_invalid_message",{name:t})})},f=({getSelectionForFilter:e,filterSelected:t,onDeleteChipGroup:a,onDeleteChip:l,updateFilter:r,isMaxFilter:o,removeFilterValue:c,isDisabledSelectOption:d})=>{var u;const{t:p}=(0,n.useTranslation)(["kasTemporaryFixMe"]),v=g.bv.map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,i.jsx)(s.ToolbarFilter,Object.assign({chips:null===(u=e("cloud_provider"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,t)=>l&&l("cloud_provider",t,v),deleteChipGroup:()=>a&&a("cloud_provider"),categoryName:p("cloud_provider"),showToolbarItem:"cloud_provider"===t},{children:(0,i.jsx)(h,{updateFilter:r,isMaxFilter:o,removeFilterValue:c,isDisabledSelectOption:d,options:v,getSelectionForFilter:e,filterSelected:t})}))},h=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:l,options:r,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,n.useTranslation)(["kasTemporaryFixMe"]),p=(0,u.useRef)(null),v=m(t),g=()=>t?(0,i.jsx)(s.Tooltip,{isVisible:t,content:v,reference:p}):(0,i.jsx)(i.Fragment,{}),[f,h]=(0,u.useState)(!1),x=()=>{h((e=>!e))},b=(t,a,i)=>{i&&_(),e("cloud_provider",{value:a.toString(),isExact:!0},!0),r.length<2&&h(!1)},_=()=>{a&&a("cloud_provider"),h(!1)};return"cloud_provider"===c?(0,i.jsx)(s.Select,Object.assign({id:"cloud-provider-select",variant:s.SelectVariant.checkbox,"aria-label":"Select cloud provider",onToggle:x,selections:o("cloud_provider"),isOpen:f,onSelect:b,placeholderText:d("filter_by_cloud_provider"),className:"select-custom-width",ref:p},{children:r.map(((e,a)=>(0,i.jsxs)(s.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&l("cloud_provider",e.value),value:e.value},{children:[(0,i.jsx)(g,{}),e.label]}),a)))})):(0,i.jsx)(i.Fragment,{})};var x=a(71070);const b=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,filterSelected:l,isMaxFilter:r,updateFilter:o})=>{const{t:c}=(0,n.useTranslation)(["kasTemporaryFixMe"]),[d,p]=(0,u.useState)(!0),[v,g]=(0,u.useState)(),f=(0,u.useRef)(null),h=m(r,"name"),b=e=>{g(e),!d&&p(!0)},_=e=>{"Enter"!==e.key||r||S()},S=()=>{v&&""!=v.trim()&&((e=>!e||/^([a-zA-Z0-9-_%]*[a-zA-Z0-9-_%])?$/.test(e.trim()))(v)?(o("name",{value:v,isExact:!1},!1),g("")):p(!1))};return(0,i.jsx)(s.ToolbarFilter,Object.assign({chips:e("name"),deleteChip:(e,a)=>t("name",a),deleteChipGroup:()=>a("name"),categoryName:c("name"),showToolbarItem:"name"===(null==l?void 0:l.toLowerCase())},{children:(()=>{const e=!d||r,t=()=>e?(0,i.jsx)(s.Tooltip,{isVisible:r||!d,content:h,reference:f}):(0,i.jsx)(i.Fragment,{});return"name"===(null==l?void 0:l.toLowerCase())?(0,i.jsxs)(s.InputGroup,{children:[(0,i.jsx)(s.TextInput,{name:"name",id:"filterText",type:"search","aria-label":"Search filter input",validated:e?s.ValidatedOptions.error:s.ValidatedOptions.default,placeholder:c("filter_by_name_lower"),onChange:b,onKeyPress:_,value:v,ref:f}),(0,i.jsx)(s.Button,Object.assign({variant:s.ButtonVariant.control,isDisabled:!d||r,onClick:()=>S(),"aria-label":"Search instances"},{children:(0,i.jsx)(x.ZP,{})})),(0,i.jsx)(t,{})]}):(0,i.jsx)(i.Fragment,{})})()}))},_=({getSelectionForFilter:e,onDeleteChipGroup:t,onDeleteChip:a,filterSelected:l,isMaxFilter:r,updateFilter:o})=>{const{t:c}=(0,n.useTranslation)(["kasTemporaryFixMe"]),d=(0,u.useRef)(null),p=m(r,"owner"),[v,g]=(0,u.useState)(),[f,h]=(0,u.useState)(!0),b=()=>{v&&""!=v.trim()&&((e=>!e||!/["$^<>|+%/;:,\s*=~#()]/.test(e.trim()))(v)?(o("owner",{value:v,isExact:!1},!1),g("")):h(!1))},_=e=>{"Enter"!==e.key||r||b()},S=e=>{g(e),!f&&h(!0)};return(0,i.jsx)(s.ToolbarFilter,Object.assign({chips:e("owner"),deleteChip:(e,t)=>a("owner",t),deleteChipGroup:()=>t("owner"),categoryName:c("owner"),showToolbarItem:"owner"===(null==l?void 0:l.toLowerCase())},{children:(()=>{if("owner"===(null==l?void 0:l.toLowerCase())){const e=!f||r,t=()=>e?(0,i.jsx)(s.Tooltip,{isVisible:r||!f,content:p,reference:d}):(0,i.jsx)(i.Fragment,{});return(0,i.jsxs)(s.InputGroup,{children:[(0,i.jsx)(s.TextInput,{name:"owner",id:"filterOwners",type:"search","aria-label":"Search filter input",placeholder:c("filter_by_owner"),validated:e?s.ValidatedOptions.error:s.ValidatedOptions.default,onChange:S,onKeyPress:_,value:v,ref:d}),(0,i.jsx)(s.Button,Object.assign({isDisabled:e,variant:s.ButtonVariant.control,onClick:b,"aria-label":"Search owners"},{children:(0,i.jsx)(x.ZP,{})})),(0,i.jsx)(t,{})]})}return(0,i.jsx)(i.Fragment,{})})()}))},S=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,removeFilterValue:l,isDisabledSelectOption:r,isMaxFilter:o,filterSelected:c,updateFilter:d})=>{var u;const{t:p}=(0,n.useTranslation)(["kasTemporaryFixMe"]),v=g.Bh.map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,i.jsx)(s.ToolbarFilter,Object.assign({chips:null===(u=e("region"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,a)=>t("region",a,v),deleteChipGroup:()=>a("region"),categoryName:p("region"),showToolbarItem:"region"===c},{children:(0,i.jsx)(j,{updateFilter:d,isMaxFilter:o,removeFilterValue:l,isDisabledSelectOption:r,options:v,getSelectionForFilter:e,filterSelected:c})}))},j=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:l,options:r,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,n.useTranslation)(["kasTemporaryFixMe"]),p=(0,u.useRef)(null),v=m(t),[g,f]=(0,u.useState)(!1),h=()=>t?(0,i.jsx)(s.Tooltip,{isVisible:t,content:v,reference:p}):(0,i.jsx)(i.Fragment,{}),x=()=>{f(!g)},b=(t,a,i)=>{i&&_(),e("region",{value:a.toString(),isExact:!0},!0),r.length<2&&f(!1)},_=()=>{a("region"),f(!1)};return"region"===c?(0,i.jsx)(s.Select,Object.assign({id:"region-select",variant:s.SelectVariant.checkbox,"aria-label":"Select region",onToggle:x,selections:o("region"),isOpen:g,onSelect:b,placeholderText:d("filter_by_region"),className:"select-custom-width",ref:p},{children:r.map(((e,a)=>(0,i.jsxs)(s.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&l("region",e.value),value:e.value},{children:[(0,i.jsx)(h,{}),e.label]}),a)))})):(0,i.jsx)(i.Fragment,{})},F=({setFilterSelected:e,filterSelected:t})=>{const{t:a}=(0,n.useTranslation)(["kasTemporaryFixMe"]),[l,r]=(0,u.useState)(!1),o=[{label:a("name"),value:"name",disabled:!1},{label:a("cloud_provider"),value:"cloud_provider",disabled:!1},{label:a("region"),value:"region",disabled:!1},{label:a("owner"),value:"owner",disabled:!1},{label:a("status"),value:"status",disabled:!1}];return(0,i.jsx)(s.ToolbarItem,{children:(0,i.jsx)(s.Select,Object.assign({variant:s.SelectVariant.single,"aria-label":"Select filter",onToggle:()=>{r(!l)},selections:t,isOpen:l,onSelect:(t,a)=>{r(!l),e(null==a?void 0:a.toString())}},{children:o.map(((e,t)=>(0,i.jsx)(s.SelectOption,Object.assign({isDisabled:e.disabled,value:e.value},{children:e.label}),t)))}))})},k=({getSelectionForFilter:e,onDeleteChip:t,onDeleteChipGroup:a,isMaxFilter:l,filterSelected:r,updateFilter:o,removeFilterValue:c,isDisabledSelectOption:d})=>{var u;const{t:p}=(0,n.useTranslation)(["kasTemporaryFixMe"]),v=g.hm.filter((e=>e.value!==g.Od.PREPARING&&e.value!==g.Od.DELETED)).map((e=>({label:p(e.value),value:e.value,disabled:!1})));return(0,i.jsx)(s.ToolbarFilter,Object.assign({chips:null===(u=e("status"))||void 0===u?void 0:u.map((e=>p(e))),deleteChip:(e,a)=>t("status",a,v),deleteChipGroup:()=>a("status"),categoryName:p("status"),showToolbarItem:"status"===r},{children:(0,i.jsx)(O,{updateFilter:o,isMaxFilter:l,removeFilterValue:c,isDisabledSelectOption:d,statusFilterOptions:v,getSelectionForFilter:e,filterSelected:r})}))},O=({updateFilter:e,isMaxFilter:t,removeFilterValue:a,isDisabledSelectOption:l,statusFilterOptions:r,getSelectionForFilter:o,filterSelected:c})=>{const{t:d}=(0,n.useTranslation)(["kasTemporaryFixMe"]),p=m(t),v=(0,u.useRef)(null),[g,f]=(0,u.useState)(!1),h=()=>t?(0,i.jsx)(s.Tooltip,{isVisible:t,content:p,reference:v}):(0,i.jsx)(i.Fragment,{}),x=()=>{f(!g)},b=(t,a,i)=>{i&&_(),e("status",{value:a.toString(),isExact:!0},!0)},_=()=>{a("status"),f(!1)};return"status"===c?(0,i.jsx)(s.Select,Object.assign({id:"status-select",variant:s.SelectVariant.checkbox,"aria-label":"Select status",onToggle:x,selections:o("status"),isOpen:g,onSelect:b,placeholderText:d("filter_by_status"),className:"select-custom-width",ref:v},{children:r.map(((e,a)=>(0,i.jsxs)(s.SelectOption,Object.assign({isDisabled:!!e.disabled||t&&l("status",e.value),value:e.value},{children:[(0,i.jsx)(h,{}),e.label]}),a)))})):(0,i.jsx)(i.Fragment,{})},y=({isMaxFilter:e,filteredValue:t,setFilteredValue:a,filterSelected:n,setFilterSelected:l})=>{const r=(e,a)=>{let i;const n=null==t?void 0:t.filter((({filterKey:t})=>t===e));if(n&&(null==n?void 0:n.length)>0){const{filterValue:e}=n[0];i=null==e?void 0:e.find((({value:e})=>e===a))}return!i},o=(e,i,n)=>{const s=Object.assign([],t),l=s.findIndex((t=>t.filterKey===e));if(l>-1){const e=s[l];if(e.filterValue&&e.filterValue.length>0){const t=e.filterValue.findIndex((e=>e.value===i.value));if(t>-1){if(!n)return;e.filterValue.splice(t,1)}else s[l].filterValue.push(i)}else s[l].filterValue=[i]}else s.push({filterKey:e,filterValue:[i]});a(s)},c=e=>{const a=t.filter((t=>t.filterKey===e));if(a.length>0)return a[0].filterValue.map((e=>e.value))},d=(e,i,n)=>{var s,l;const r=Object.assign([],t),o=r.findIndex((t=>t.filterKey===e)),c=Object.assign([],null===(s=r[o])||void 0===s?void 0:s.filterValue);let d=i.toString();n&&(null==n?void 0:n.length)>0&&(d=null===(l=null==n?void 0:n.find((e=>e.label===i.toString())))||void 0===l?void 0:l.value);const u=c.findIndex((e=>e.value===d));u>=0&&(r[o].filterValue.splice(u,1),a(r))},u=e=>{const i=Object.assign([],t),n=i.findIndex((t=>t.filterKey===e));n>=0&&(i.splice(n,1),a(i))},p=e=>{const i=Object.assign([],t),n=i.findIndex((t=>t.filterKey===e));n>=0&&i.splice(n,1),a(i)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.ToolbarGroup,Object.assign({variant:"filter-group"},{children:[(0,i.jsx)(F,{setFilterSelected:l,filterSelected:n}),(0,i.jsx)(b,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:r}),(0,i.jsx)(f,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:r}),(0,i.jsx)(S,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:r}),(0,i.jsx)(_,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:r}),(0,i.jsx)(k,{isMaxFilter:e,filterSelected:n,getSelectionForFilter:c,updateFilter:o,onDeleteChip:d,onDeleteChipGroup:u,removeFilterValue:p,isDisabledSelectOption:r})]}))})},w=({setFilterSelected:e,filterSelected:t="name",total:a,page:l,perPage:r,filteredValue:o,setFilteredValue:c,handleCreateInstanceModal:d})=>{const{t:m}=(0,n.useTranslation)(["kasTemporaryFixMe"]),[f,h]=(0,u.useState)(!1),x=(0,u.useCallback)((()=>{let e=0;null==o||o.forEach((t=>{const{filterValue:a,filterKey:i}=t,n="status"===i?null==a?void 0:a.filter((({value:e})=>e===g.Od.PROVISIONING)):[],s="status"===i?null==a?void 0:a.filter((({value:e})=>e===g.Od.DEPROVISION)):[];(null==n?void 0:n.length)>0&&(null==s?void 0:s.length)>0?e+=(null==a?void 0:a.length)+2:(null==n?void 0:n.length)>0||(null==s?void 0:s.length)>0?e+=(null==a?void 0:a.length)+1:e+=null==a?void 0:a.length})),e>=g.pf?h(!0):h(!1)}),[o]);(0,u.useEffect)((()=>{x()}),[x]);const b=[{item:(0,i.jsx)(s.Button,Object.assign({variant:"primary",onClick:d,"data-testid":"tableStreams-buttonCreateKafka",ouiaId:"button-create"},{children:m("create_kafka_instance")}))}];return a&&a>0&&b.push({item:(0,i.jsx)(v.wu,{widgetId:"pagination-cloudProviderOptions-menu-top",itemCount:a,page:l,perPage:r,isCompact:!0,titles:{paginationTitle:m("minimal_pagination"),perPageSuffix:m("per_page_suffix"),toFirstPage:m("to_first_page"),toPreviousPage:m("to_previous_page"),toLastPage:m("to_last_page"),toNextPage:m("to_next_page"),optionsToggle:m("options_toggle"),currPage:m("curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),(0,i.jsx)(v.L5,{toolbarProps:{id:"instanceDrawerInstance-toolbar",clearAllFilters:()=>{c([]),h(!1)},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:(0,i.jsx)(p.ZP,{}),breakpoint:"md"},toggleGroupItems:(0,i.jsx)(y,{isMaxFilter:f,filteredValue:o,setFilteredValue:c,setFilterSelected:e,filterSelected:t}),toolbarItems:b})};var C=a(5569);const I=()=>{const{t:e}=(0,n.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(s.PageSection,Object.assign({variant:s.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(v.C0,{titleProps:{title:e("access_permissions_needed"),headingLevel:"h2"},emptyStateIconProps:{icon:C.ZP},emptyStateBodyProps:{body:e("to_access_kafka_instances_contact_your_organization_administrators")}})}))};var T=a(10069);const D=({handleCreateInstanceModal:e})=>{const{t}=(0,n.useTranslation)(["kasTemporaryFixMe"]),a=(0,u.useContext)(T.QuickStartContext);return(0,i.jsx)(s.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(v.C0,Object.assign({emptyStateProps:{variant:v.jU.NoItems},emptyStateBodyProps:{body:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Trans,{i18nKey:"create_a_kafka_instance_to_get_started",ns:["kasTemporaryFixMe"],components:[(0,i.jsx)(s.Button,{variant:s.ButtonVariant.link,isSmall:!0,isInline:!0,onClick:()=>a.setActiveQuickStart&&a.setActiveQuickStart("getting-started")},"btn-quick-start")]})})},titleProps:{title:t("no_kafka_instances_yet")}},{children:(0,i.jsx)(s.Button,Object.assign({"data-testid":"emptyStateStreams-buttonCreateKafka",variant:s.ButtonVariant.primary,onClick:()=>e&&e(),ouiaId:"button-create"},{children:t("create_kafka_instance")}))}))}))},P=({children:e})=>{const{t}=(0,n.useTranslation)(["kasTemporaryFixMe"]),[a,l]=(0,u.useState)(!1);(0,u.useEffect)((()=>{if((0,g.Qw)()){const e=window.localStorage;if(e){const t=parseInt(e.getItem("openSessions")||"0"),a=t+1;t<1&&(e.setItem("openSessions",`${a}`),l(!0))}}}),[]);const r=()=>{l(!a)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("main",Object.assign({className:"pf-c-page__main"},{children:[(0,i.jsx)(s.PageSection,Object.assign({variant:s.PageSectionVariants.light},{children:(0,i.jsx)(s.Level,{children:(0,i.jsx)(s.LevelItem,{children:(0,i.jsx)(s.TextContent,{children:(0,i.jsx)(s.Text,Object.assign({component:"h1"},{children:t("kafka_instances")}))})})})})),e]})),(0,i.jsx)(s.Modal,Object.assign({variant:s.ModalVariant.small,title:"Mobile experience",isOpen:a,onClose:()=>r(),actions:[(0,i.jsx)(s.Button,Object.assign({variant:"primary",onClick:()=>r()},{children:"Ok"}),"confirm")]},{children:"The mobile experience isn't fully optimized yet, so some items might not appear correctly."}))]})}}}]);
