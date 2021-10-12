"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[7030],{91329:(e,t,n)=>{n.d(t,{d9:()=>r});var a=n(75418);function i(){return!document[(e=document,void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":"")];var e}function r(){var e=(0,a.useState)(i()),t=e[0],n=e[1],r=function(){return n(i())};return(0,a.useEffect)((function(){var e,t=void 0!==(e=document).hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":"";return document.addEventListener(t,r,!1),function(){document.removeEventListener(t,r)}}),[]),{isVisible:t,setIsVisible:n}}},61413:(e,t,n)=>{n.d(t,{o:()=>f});var a=n(75418),i=n.n(a),r=n(11593),l=n(86369),o=n.n(l),s=n(56176),u=n.n(s),c=(n(77903),n(71958),n(35946)),d=n(11845),f=function(e){var t=e.initialTab,n=e.onClose,a=e.instanceDetail,l=e.isExpanded,s=e.isLoading,f=e.children,v=e["data-ouia-app-id"],m=e.tokenEndPointUrl,g=e.notRequiredDrawerContentBackground;o().extend(u());var p=(0,r.useTranslation)().t;return i().createElement(c.D5,{isExpanded:l,isLoading:s,onClose:n,panelBodyContent:i().createElement(d.XA,{initialTab:t,instanceDetail:a,tokenEndPointUrl:m}),drawerHeaderProps:{text:{label:p("instance_name")},title:{value:null==a?void 0:a.name,headingLevel:"h1"}},"data-ouia-app-id":v,notRequiredDrawerContentBackground:g},f)}},11845:(e,t,n)=>{n.d(t,{so:()=>a,XA:()=>f});var a,i=n(75418),r=n.n(i),l=n(11593),o=n(75381),s=n(35946),u=n(84669),c=r().lazy((function(){return n.e(3495).then(n.bind(n,43495))})),d=r().lazy((function(){return n.e(4988).then(n.bind(n,44988))}));!function(e){e.DETAILS="details",e.CONNECTION="connection"}(a||(a={}));var f=function(e){var t,n=e.initialTab,f=e.instanceDetail,v=e.tokenEndPointUrl,m=(0,l.useTranslation)().t,g=(0,i.useState)(n||a.DETAILS),p=g[0],_=g[1],h=(null==f?void 0:f.status)===o.Od.ACCEPTED||(null==f?void 0:f.status)===o.Od.PREPARING;return r().createElement(r().Suspense,{fallback:r().createElement(s.yR,null)},r().createElement(u.Tabs,{activeKey:p.toString(),onSelect:function(e,t){return function(e){e===a.CONNECTION?_(a.CONNECTION):_(a.DETAILS)}(t)}},r().createElement(u.Tab,{eventKey:a.DETAILS.toString(),title:r().createElement(u.TabTitleText,null,m("details"))},r().createElement(d,{instanceDetail:f})),r().createElement(u.Tab,{eventKey:a.CONNECTION.toString(),title:r().createElement(u.TabTitleText,null,m("connection")),"data-testid":"drawerStreams-tabConnect"},r().createElement(c,{externalServer:(t=(f||{}).bootstrap_server_host,(null==t?void 0:t.endsWith(":443"))?t:t+":443"),isKafkaPending:h,tokenEndPointUrl:v}))))}},7030:(e,t,n)=>{n.d(t,{L:()=>L});var a=n(70655),i=n(75418),r=n.n(i),l=n(98068),o=n(11593),s=n(56176),u=n.n(s),c=n(86369),d=n.n(c),f=n(84669),v=n(35946);function m(e,t){var n=(0,i.useRef)();(0,i.useEffect)((function(){n.current=e}),[e]),(0,i.useEffect)((function(){if(null!==t){var e=setTimeout((function(){n.current()}),t);return function(){clearInterval(e)}}}),[e,t])}var g=n(75381),p=n(91329),_=n(10069),h=n(27577),E=n(55277),b=n(71070),S=n(8755),k=function(e){var t,n,a,l=e.setFilterSelected,s=e.filterSelected,u=void 0===s?"name":s,c=e.total,d=e.page,m=e.perPage,p=e.filteredValue,_=e.setFilteredValue,h=e.handleCreateInstanceModal,E=(0,o.useTranslation)().t,k=(0,i.useRef)(),w=(0,i.useRef)(),I=(0,i.useState)(!1),P=I[0],y=I[1],C=(0,i.useState)(!1),T=C[0],O=C[1],D=(0,i.useState)(!1),V=D[0],x=D[1],N=(0,i.useState)(!1),L=N[0],A=N[1],R=(0,i.useState)(),B=R[0],F=R[1],K=(0,i.useState)(),G=K[0],M=K[1],U=(0,i.useState)(!0),j=U[0],H=U[1],Z=(0,i.useState)(!0),z=Z[0],q=Z[1],Q=(0,i.useState)(!1),W=Q[0],Y=Q[1],J=[{label:E("name"),value:"name",disabled:!1},{label:E("cloud_provider"),value:"cloud_provider",disabled:!1},{label:E("region"),value:"region",disabled:!1},{label:E("owner"),value:"owner",disabled:!1},{label:E("status"),value:"status",disabled:!1}];(0,i.useEffect)((function(){ue()}),[p]);var X=g.bv.map((function(e){return{label:E(e.value),value:e.value,disabled:!1}})),$=g.Bh.map((function(e){return{label:E(e.value),value:e.value,disabled:!1}})),ee=g.hm.filter((function(e){return e.value!==g.Od.PREPARING&&e.value!==g.Od.DELETED})).map((function(e){return{label:E(e.value),value:e.value,disabled:!1}})),te=function(e,t,n){var a=Object.assign([],p),i=a.findIndex((function(t){return t.filterKey===e}));if(i>-1){var r=a[i];if(r.filterValue&&r.filterValue.length>0){var l=r.filterValue.findIndex((function(e){return e.value===t.value}));if(l>-1){if(!n)return;r.filterValue.splice(l,1)}else a[i].filterValue.push(t)}else a[i].filterValue=[t]}else a.push({filterKey:e,filterValue:[t]});_(a)},ne=function(e){return!e||/^([a-zA-Z0-9-_%]*[a-zA-Z0-9-_%])?$/.test(e.trim())},ae=function(e){"name"===e&&B&&""!=B.trim()?ne(B)?(te("name",{value:B,isExact:!1},!1),F("")):H(!1):"owner"===e&&G&&""!=G.trim()&&(ne(G)?(te("owner",{value:G,isExact:!1},!1),M("")):q(!1))},ie=function(e){var t=Object.assign([],p),n=t.findIndex((function(t){return t.filterKey===e}));n>=0&&t.splice(n,1),_(t),"name"===e&&F(""),"owner"===e&&M(""),"cloud_provider"===e&&A(!1),"region"===e&&x(!1),"status"===e&&A(!1)},re=function(e){var t;if("Enter"===e.key&&!W){var n=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.name;ae(n)}},le=function(e){var t=p.filter((function(t){return t.filterKey===e}));if(t.length>0)return t[0].filterValue.map((function(e){return e.value}))},oe=function(e,t,n){var a,i,r=Object.assign([],p),l=r.findIndex((function(t){return t.filterKey===e})),o=Object.assign([],null===(a=r[l])||void 0===a?void 0:a.filterValue),s=t.toString();n&&(null==n?void 0:n.length)>0&&(s=null===(i=null==n?void 0:n.find((function(e){return e.label===t.toString()})))||void 0===i?void 0:i.value);var u=o.findIndex((function(e){return e.value===s}));u>=0&&(r[l].filterValue.splice(u,1),_(r))},se=function(e){var t=Object.assign([],p),n=t.findIndex((function(t){return t.filterKey===e}));n>=0&&(t.splice(n,1),_(t))},ue=function(){var e=0;null==p||p.forEach((function(t){var n=t.filterValue,a=t.filterKey,i="status"===a&&(null==n?void 0:n.filter((function(e){return e.value===g.Od.PROVISIONING}))),r="status"===a&&(null==n?void 0:n.filter((function(e){return e.value===g.Od.DEPROVISION})));(null==i?void 0:i.length)>0&&(null==r?void 0:r.length)>0?e+=(null==n?void 0:n.length)+2:(null==i?void 0:i.length)>0||(null==r?void 0:r.length)>0?e+=(null==n?void 0:n.length)+1:e+=null==n?void 0:n.length})),e>=g.pf?Y(!0):Y(!1)},ce=function(e,t){var n,a=null==p?void 0:p.filter((function(t){return t.filterKey===e}));if(a&&(null==a?void 0:a.length)>0){var i=a[0].filterValue;n=null==i?void 0:i.find((function(e){return e.value===t}))}return!n},de=function(e){return W?r().createElement("div",null,E("max_filter_message")):r().createElement("div",null,E("input_field_invalid_message",{name:e}))},fe=r().createElement(r().Fragment,null,r().createElement(f.ToolbarGroup,{variant:"filter-group"},r().createElement(f.Select,{variant:f.SelectVariant.single,"aria-label":"Select filter",onToggle:function(){y(!P)},selections:u,isOpen:P,onSelect:function(e,t){y(!P),l(null==t?void 0:t.toString())}},J.map((function(e,t){return r().createElement(f.SelectOption,{isDisabled:e.disabled,key:t,value:e.value},e.label)}))),r().createElement(f.ToolbarFilter,{chips:le("name"),deleteChip:function(e,t){return oe("name",t)},deleteChipGroup:function(){return se("name")},categoryName:E("name"),showToolbarItem:"name"===(null==u?void 0:u.toLowerCase())},"name"===(null==u?void 0:u.toLowerCase())&&r().createElement(f.InputGroup,{className:"mk--filter-instances__toolbar--text-input"},r().createElement(f.TextInput,{name:"name",id:"filterText",type:"search","aria-label":"Search filter input",validated:!j||W?f.ValidatedOptions.error:f.ValidatedOptions.default,placeholder:E("filter_by_name_lower"),onChange:function(e){F(e),!j&&H(!0)},onKeyPress:re,value:B,ref:k}),r().createElement(f.Button,{variant:f.ButtonVariant.control,isDisabled:!j||W,onClick:function(){return ae("name")},"aria-label":"Search instances"},r().createElement(b.ZP,null)),(!j||W)&&r().createElement(f.Tooltip,{isVisible:W||!j,content:de("name"),reference:k}))),r().createElement(f.ToolbarFilter,{chips:null===(t=le("cloud_provider"))||void 0===t?void 0:t.map((function(e){return E(e)})),deleteChip:function(e,t){return oe("cloud_provider",t,X)},deleteChipGroup:function(){return se("cloud_provider")},categoryName:E("cloud_provider"),showToolbarItem:"cloud_provider"===u},"cloud_provider"===u&&r().createElement(f.Select,{id:"cloud-provider-select",variant:f.SelectVariant.checkbox,"aria-label":"Select cloud provider",onToggle:function(){O(!T)},selections:le("cloud_provider"),isOpen:T,onSelect:function(e,t,n){n&&ie("cloud_provider"),te("cloud_provider",{value:t.toString(),isExact:!0},!0),g.bv.length<2&&O(!1)},placeholderText:E("filter_by_cloud_provider"),className:"select-custom-width"},X.map((function(e,t){var n=document.getElementById("cloud-provider-select");return r().createElement(f.SelectOption,{isDisabled:e.disabled||W&&ce("cloud_provider",e.value),key:t,value:e.value},W&&r().createElement(f.Tooltip,{isVisible:W,content:de(),reference:n||void 0}),e.label)})))),r().createElement(f.ToolbarFilter,{chips:null===(n=le("region"))||void 0===n?void 0:n.map((function(e){return E(e)})),deleteChip:function(e,t){return oe("region",t,$)},deleteChipGroup:function(){return se("region")},categoryName:E("region"),showToolbarItem:"region"===u},"region"===u&&r().createElement(f.Select,{id:"region-select",variant:f.SelectVariant.checkbox,"aria-label":"Select region",onToggle:function(){x(!V)},selections:le("region"),isOpen:V,onSelect:function(e,t,n){n&&ie("region"),te("region",{value:t.toString(),isExact:!0},!0),$.length<2&&x(!1)},placeholderText:E("filter_by_region"),className:"select-custom-width"},$.map((function(e,t){var n=document.getElementById("region-select");return r().createElement(f.SelectOption,{isDisabled:e.disabled||W&&ce("region",e.value),key:t,value:e.value},W&&r().createElement(f.Tooltip,{isVisible:W,content:de(),reference:n||void 0}),e.label)})))),r().createElement(f.ToolbarFilter,{chips:le("owner"),deleteChip:function(e,t){return oe("owner",t)},deleteChipGroup:function(){return se("owner")},categoryName:E("owner"),showToolbarItem:"owner"===(null==u?void 0:u.toLowerCase())},"owner"===u.toLowerCase()&&r().createElement(f.InputGroup,{className:"mk--filter-instances__toolbar--text-input"},r().createElement(f.TextInput,{name:"owner",id:"filterOwners",type:"search","aria-label":"Search filter input",placeholder:E("filter_by_owner"),validated:!z||W?f.ValidatedOptions.error:f.ValidatedOptions.default,onChange:function(e){M(e),!z&&q(!0)},onKeyPress:re,value:G,ref:w}),r().createElement(f.Button,{isDisabled:!z||W,variant:f.ButtonVariant.control,onClick:function(){return ae("owner")},"aria-label":"Search owners"},r().createElement(b.ZP,null)),(!z||W)&&r().createElement(f.Tooltip,{isVisible:W||!z,content:de("owner"),reference:w}))),r().createElement(f.ToolbarFilter,{chips:null===(a=le("status"))||void 0===a?void 0:a.map((function(e){return E(e)})),deleteChip:function(e,t){return oe("status",t,ee)},deleteChipGroup:function(){return se("status")},categoryName:E("status"),showToolbarItem:"status"===u},"status"===u&&r().createElement(f.Select,{id:"status-select",variant:f.SelectVariant.checkbox,"aria-label":"Select status",onToggle:function(){A(!L)},selections:le("status"),isOpen:L,onSelect:function(e,t,n){n&&ie("status"),te("status",{value:t.toString(),isExact:!0},!0)},placeholderText:E("filter_by_status"),className:"select-custom-width"},ee.map((function(e,t){var n=document.getElementById("status-select");return r().createElement(f.SelectOption,{isDisabled:e.disabled||W&&ce("status",e.value),key:t,value:e.value},W&&r().createElement(f.Tooltip,{isVisible:W,content:de(),reference:n||void 0}),e.label)})))))),ve=[{item:r().createElement(f.Button,{variant:"primary",onClick:h,"data-testid":"tableStreams-buttonCreateKafka"},E("create_kafka_instance"))}];return c&&c>0&&ve.length>0&&ve.push({item:r().createElement(v.wu,{widgetId:"pagination-options-menu-top",itemCount:c,page:d,perPage:m,isCompact:!0,titles:{paginationTitle:E("minimal_pagination"),perPageSuffix:E("per_page_suffix"),toFirstPage:E("to_first_page"),toPreviousPage:E("to_previous_page"),toLastPage:E("to_last_page"),toNextPage:E("to_next_page"),optionsToggle:E("options_toggle"),currPage:E("curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),r().createElement(v.L5,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){_([]),Y(!1)},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:r().createElement(S.ZP,null),breakpoint:"md"},toggleGroupItems:fe,toolbarItems:ve})},w=n(35451),I=n(41942),P=n(84564),y=n(52648),C=function(e){var t,n=e.status,a=e.instanceName,i=(0,o.useTranslation)().t,l=function(){switch(null==n?void 0:n.toLowerCase()){case y.hm[0].value:return r().createElement(w.ZP,{className:"mk--instances__table--icon--completed"});case y.hm[1].value:return r().createElement(P.ZP,{className:"mk--instances__table--icon--failed"});case y.hm[2].value:return r().createElement(I.ZP,null);case y.hm[3].value:case y.hm[4].value:return r().createElement(f.Spinner,{size:"md","aria-label":a,"aria-valuetext":"Creation in progress"});case y.hm[5].value:case y.hm[6].value:return;default:return r().createElement(I.ZP,null)}}();return r().createElement(f.Flex,null,l&&r().createElement(f.FlexItem,{spacer:{default:"spacerSm"}},l),r().createElement(f.FlexItem,null,1===(t=y.hm.filter((function(e){return e.value===(null==n?void 0:n.toLowerCase())}))).length?i(t[0].value):i("creation_pending")))},T=n(46332),O=n(13449),D=function(e){var t=e.kafkaInstanceItems,n=e.onViewInstance,s=e.onViewConnection,u=e.refresh,c=e.page,d=e.perPage,m=e.total,p=e.kafkaDataLoaded,_=e.onDelete,b=e.expectedTotal,S=e.filteredValue,w=e.setFilteredValue,I=e.setFilterSelected,P=e.filterSelected,y=e.orderBy,D=e.setOrderBy,V=e.isDrawerOpen,x=e.loggedInUser,N=e.setWaitingForDelete,L=e.currentUserkafkas,A=e.onCreate,R=e.handleCreateInstanceModal,B=(0,T.useAuth)(),F=(((0,T.useConfig)()||{}).kas||{}).apiBasePath,K=(0,o.useTranslation)().t,G=new URLSearchParams(location.search),M=(0,l.useHistory)(),U=((0,T.useAlert)()||{}).addAlert,j=((0,O.S)()||{}).setKafkaInstance,H=(0,T.useModal)(),Z=H.showModal,z=H.hideModal,q=(0,i.useState)({}),Q=q[0],W=q[1],Y=(0,i.useState)(),J=Y[0],X=Y[1],$=(0,i.useState)([]),ee=$[0],te=$[1],ne=(0,i.useState)([]),ae=ne[0],ie=ne[1],re=(0,i.useState)(),le=re[0],oe=re[1],se=[{title:K("name"),transforms:[h.sortable]},{title:K("cloud_provider"),transforms:[h.sortable]},{title:K("region"),transforms:[h.sortable]},{title:K("owner"),transforms:[h.sortable]},{title:K("status"),transforms:[h.sortable]},{title:K("time_created"),transforms:[h.sortable]}];(0,i.useEffect)((function(){var e;null===(e=B.isOrgAdmin())||void 0===e||e.then((function(e){return oe(e)}))}),[B]);var ue=(0,i.useCallback)((function(e,t){G.set(e,t.toString())}),[G]);(0,i.useEffect)((function(){V||X("")}),[V]);var ce=function(){if(L){var e=L.filter((function(e){return e.status===g.Od.DEPROVISION||e.status===g.Od.DELETED})).filter((function(e){return ee.findIndex((function(t){return t===e.name}))<0})).map((function(e){return e.name||""})),t=(0,a.__spreadArray)((0,a.__spreadArray)([],ee,!0),e,!0);te(t),t.forEach((function(e){(null==L?void 0:L.findIndex((function(t){return t.name===e})))<0&&(!function(e){var t=ee.findIndex((function(t){return t===e}));if(t>-1){var n=Object.assign([],ee);n.splice(t,1),te(n)}}(e),U&&U({title:K("kafka_successfully_deleted",{name:e}),variant:T.AlertVariant.success}))}))}};(0,i.useEffect)((function(){c>1&&0===t.length&&(ue("page",(c-1).toString()),ue("perPage",d.toString()),M.push({search:G.toString()})),ce(),function(){var e=JSON.parse(JSON.stringify(ae));if(ae&&ae.length>0){var n=Object.assign([],t).filter((function(e){return e.status===g.Od.READY||e.status===g.Od.FAILED}));e.forEach((function(e){var t,a,i=n.filter((function(t){return e.id===t.id}));i&&i.length>0&&(i[0].status===g.Od.READY?U&&U({title:K("kafka_successfully_created"),variant:T.AlertVariant.success,description:r().createElement("span",{dangerouslySetInnerHTML:{__html:K("kafka_success_message",{name:null===(t=i[0])||void 0===t?void 0:t.name})}}),dataTestId:"toastCreateKafka-success"}):i[0].status===g.Od.FAILED&&U&&U({title:K("kafka_not_created"),variant:T.AlertVariant.danger,description:r().createElement("span",{dangerouslySetInnerHTML:{__html:K("kafka_failed_message",{name:null===(a=i[0])||void 0===a?void 0:a.name})}}),dataTestId:"toastCreateKafka-failed"}))}))}var a=Object.assign([],null==t?void 0:t.filter((function(e){return e.status===g.Od.PROVISIONING||e.status===g.Od.ACCEPTED})));ie(a)}()}),[c,d,t,L]);var de,fe,ve=function(e,t,a){var i,r,l;"view-instance"===a?(n(t),X(null==t?void 0:t.name)):"connect-instance"===a?(s(t),X(null==t?void 0:t.name)):"change-owner"===a?me(t):"delete-instance"===a&&ge(t);var o=null===(l=null===(r=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.parentElement)||void 0===r?void 0:r.parentElement)||void 0===l?void 0:l.previousSibling;null!=o&&o.focus()},me=function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){return j&&j(e),W(e),Z(T.ModalType.KasTransferOwnership,{kafka:e,refreshKafkas:u}),[2]}))}))},ge=function(e){var t=e.status;W(e),t===g.Od.FAILED?pe(e):Z(T.ModalType.KasDeleteInstance,{onDelete:function(){return pe(e)},kafka:e})},pe=function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var t,n,i,r,l,o;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(void 0===(t=(null==Q?void 0:Q.id)||(null==e?void 0:e.id)))throw new Error("kafka instance id is not set");return[4,null==B?void 0:B.kas.getToken()];case 1:n=a.sent(),i=new E.DefaultApi(new E.Configuration({accessToken:n,basePath:F})),_(),z(),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,i.deleteKafkaById(t,!0).then((function(){X(void 0),N(!0),u(),W(void 0)}))];case 3:return a.sent(),[3,5];case 4:return r=a.sent(),l=void 0,(0,g.G6)(r)&&(l=null===(o=r.response)||void 0===o?void 0:o.data.reason),U&&U({title:K("common.something_went_wrong"),variant:T.AlertVariant.danger,description:l}),[3,5];case 5:return[2]}}))}))},_e=function(e){switch(e.toLowerCase()){case"name":return 0;case"cloud_provider":return 1;case"region":return 2;case"owner":return 3;case"status":return 4;case"created_at":return 5;default:return}},he=function(){var e=(null==y?void 0:y.split(" "))||[];if(e.length>1)return{index:_e(e[0]),direction:e[1]===h.SortByDirection.asc?h.SortByDirection.asc:h.SortByDirection.desc}};return r().createElement(r().Fragment,null,r().createElement(k,{filterSelected:P,setFilterSelected:I,total:m,page:c,perPage:d,filteredValue:S,setFilteredValue:w,onCreate:A,refresh:u,handleCreateInstanceModal:R}),r().createElement(v.wR,{tableProps:{cells:se,rows:(de=[],fe=(0,g.o8)(c,d,b),p?(t.forEach((function(e){var t=e.name,n=e.cloud_provider,a=e.region,i=e.created_at,o=e.status,s=e.owner,u=e.instance_type,c=K(n),d=K(a);de.push({cells:[{title:o===g.Od.DEPROVISION||o!==g.Od.READY?t:r().createElement(l.Link,{to:"kafkas/"+(null==e?void 0:e.id)},t)},c,d,s,{title:r().createElement(C,{status:o,instanceName:t})},{title:r().createElement(r().Fragment,null,(0,g.L0)(i,K("ago")),r().createElement("br",null),u===(null===g.ik||void 0===g.ik?void 0:g.ik.eval)&&"48 hours duration")}],originalData:e})})),de):(0,g.vK)({loadingCount:fe,skeleton:r().createElement(f.Skeleton,null),length:se.length})),"aria-label":K("cluster_instance_list"),actionResolver:function(e){return function(e){var t,n,i,r;if(!p)return[];var l=e.originalData;if(l.status===g.Od.DEPROVISION||l.status===g.Od.DELETED)return[];var o,s=l.owner===x||le;return s||(o={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}}),[(0,a.__assign)((0,a.__assign)((t={title:K("view_details"),id:"view-instance"},t["data-testid"]="tableStreams-actionDetails",t.onClick=function(e){return s&&ve(e,l,"view-instance")},t),o),{tooltipProps:{position:"left",content:K("no_permission_to_view_kafka")}}),(0,a.__assign)((0,a.__assign)((n={title:K("view_connection_information"),id:"connect-instance"},n["data-testid"]="tableStreams-actionConnection",n.onClick=function(e){return s&&ve(e,l,"connect-instance")},n),o),{tooltipProps:{position:"left",content:K("no_permission_to_connect_kafka")}}),(0,a.__assign)((0,a.__assign)((i={title:K("change_owner"),id:"change-owner"},i["data-testid"]="tableStreams-actionChangeOwner",i.onClick=function(e){return s&&ve(e,l,"change-owner")},i),o),{tooltipProps:{position:"left",content:K("no_permission_to_change_owner")}}),(0,a.__assign)((0,a.__assign)((r={title:K("delete_instance"),id:"delete-instance"},r["data-testid"]="tableStreams-actionDelete",r.onClick=function(e){return s&&ve(e,l,"delete-instance")},r),o),{tooltipProps:{position:"left",content:K("no_permission_to_delete_kafka")}})]}(e)},onSort:function(e,t,n,a){var i,r=n;(null===(i=he())||void 0===i?void 0:i.index)!==t&&"time-created"===a.property&&(r="desc"),D(function(e){switch(e){case 0:return"name";case 1:return"cloud_provider";case 2:return"region";case 3:return"owner";case 4:return"status";case 5:return"created_at";default:return""}}(t)+" "+r)},sortBy:he(),hasDefaultCustomRowWrapper:!0},activeRow:J,onRowClick:function(e,t,a){var i,r,l=a.originalData,o=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.type,s=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.tagName;"button"!==o&&"a"!==(null==s?void 0:s.toLowerCase())&&(n(l),X(null==l?void 0:l.name))},rowDataTestId:"tableStreams-row",loggedInUser:x}),t.length<1&&p&&r().createElement(v.C0,{emptyStateProps:{variant:v.jU.NoResult},titleProps:{title:K("no_results_found")},emptyStateBodyProps:{body:K("adjust_your_filters_and_try_again")}}),m>0&&r().createElement(v.wu,{widgetId:"pagination-options-menu-bottom",itemCount:m,variant:f.PaginationVariant.bottom,page:c,perPage:d,titles:{paginationTitle:K("full_pagination"),perPageSuffix:K("per_page_suffix"),toFirstPage:K("to_first_page"),toPreviousPage:K("to_previous_page"),toLastPage:K("to_last_page"),toNextPage:K("to_next_page"),optionsToggle:K("options_toggle"),currPage:K("curr_page")}}))},V=n(61413),x=n(5569),N=n(11845),L=function(e){var t=e.preCreateInstance,n=e.tokenEndPointUrl;d().extend(u());var s=((0,O.S)()||{}).shouldOpenCreateModal,c=(0,T.useAuth)(),h=(((0,T.useConfig)()||{}).kas||{}).apiBasePath,b=(0,p.d9)().isVisible,S=(0,l.useLocation)(),k=new URLSearchParams(S.search),w=(0,v.h0)()||{},I=w.page,P=void 0===I?1:I,y=w.perPage,C=void 0===y?10:y,L=k.has("user-testing"),A=(0,o.useTranslation)().t,R=((0,T.useAlert)()||{}).addAlert,B=(0,T.useModal)().showModal,F=window.localStorage,K=r().useContext(_.QuickStartContext),G=(0,i.useState)(),M=G[0],U=G[1],j=(0,i.useState)({}),H=j[0],Z=j[1],z=(0,i.useState)(!1),q=z[0],Q=z[1],W=(0,i.useState)("created_at desc"),Y=W[0],J=W[1],X=(0,i.useState)(),$=X[0],ee=X[1],te=(0,i.useState)(0),ne=te[0],ae=te[1],ie=(0,i.useState)(void 0),re=ie[0],le=ie[1],oe=(0,i.useState)("name"),se=oe[0],ue=oe[1],ce=(0,i.useState)([]),de=ce[0],fe=ce[1],ve=(0,i.useState)(!1),me=ve[0],ge=ve[1],pe=(0,i.useState)(!1),_e=pe[0],he=pe[1],Ee=(0,i.useState)(!1),be=Ee[0],Se=Ee[1],ke=(0,i.useState)(void 0),we=ke[0],Ie=ke[1],Pe=(0,i.useState)(),ye=Pe[0],Ce=Pe[1],Te=$||{},Oe=Te.activeTab,De=Te.instanceDetail;(0,i.useEffect)((function(){if((0,g.Qw)()&&F){var e=parseInt(F.getItem("openSessions")||"0"),t=e+1;e<1&&(F.setItem("openSessions",""+t),he(!0))}}),[]);var Ve=function(){he(!_e)};(0,i.useEffect)((function(){(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return(e=s)?[4,s()]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&xe(),[2]}}))}))}),[s]);var xe=function(){B(T.ModalType.KasCreateInstance,{onCreate:function(){Ge(),Ke()}})},Ne=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return t?[4,t(!0)]:[3,2];case 1:e=n.sent(),n.label=2;case 2:return e&&(Fe(),xe()),[2]}}))}))},Le=function(e){ee({instanceDetail:e,activeTab:N.so.DETAILS})},Ae=function(e){ee({instanceDetail:e,activeTab:N.so.CONNECTION})},Re=function(e){var t,n,a,i,r;(0,g.G6)(e)&&(i=null===(t=e.response)||void 0===t?void 0:t.data.reason,r=null===(a=null===(n=e.response)||void 0===n?void 0:n.data)||void 0===a?void 0:a.code),r===g.SM.UNAUTHORIZED_USER?ge(!0):R&&R({variant:f.AlertVariant.danger,title:A("common.something_went_wrong"),description:i})},Be=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return i=[],de.forEach((function(e){var t=e.filterKey,n=e.filterValue;if(n&&n.length>0){var a="(";a+=n.map((function(e){var n=e.value.trim();return n===g.Od.PROVISIONING?t+" = "+g.Od.PREPARING+" or "+t+" = "+g.Od.PROVISIONING:n===g.Od.DEPROVISION?t+" = "+g.Od.DEPROVISION+" or "+t+" = "+g.Od.DELETED:""!==n?t+" "+(!0===e.isExact?"= "+n:"like %"+n+"%"):""})).join(" or "),a+=")",i.push(a)}})),e=i.join(" and "),[4,null==c?void 0:c.kas.getToken()];case 1:if(!(t=a.sent())||!b)return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new E.DefaultApi(new E.Configuration({accessToken:t,basePath:h})).getKafkas(null==P?void 0:P.toString(),null==C?void 0:C.toString(),Y,e).then((function(e){var t=e.data,n=(null==t?void 0:t.items)||[];Z(t),U(n),void 0!==(null==H?void 0:H.total)&&H.total>ne&&ae(H.total),be&&de.length<1&&0==(null==n?void 0:n.length)&&(le(!0),Se(!1)),Q(!0)}))];case 3:return a.sent(),[3,5];case 4:return n=a.sent(),Re(n),[3,5];case 5:return[2]}var i}))}))};(0,i.useEffect)((function(){(!M||(null==M?void 0:M.length)<=1)&&(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,null==c?void 0:c.kas.getToken()];case 1:if(!(e=n.sent())||!b)return[3,5];n.label=2;case 2:return n.trys.push([2,4,,5]),[4,new E.DefaultApi(new E.Configuration({accessToken:e,basePath:h})).getKafkas("1","1").then((function(e){var t,n,a=null===(n=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.items)||void 0===n?void 0:n.length;le(!a||a<1)}))];case 3:return n.sent(),[3,5];case 4:return t=n.sent(),Re(t),[3,5];case 5:return[2]}}))}))}),[M]);var Fe=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null==c?void 0:c.kas.getToken()];case 1:if(e=a.sent(),t="owner = "+we,!e||!b)return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,new E.DefaultApi(new E.Configuration({accessToken:e,basePath:h})).getKafkas("","","",t).then((function(e){var t=e.data;Ce(t.items)}))];case 3:return a.sent(),[3,5];case 4:return n=a.sent(),Re(n),[3,5];case 5:return[2]}}))}))};(0,i.useEffect)((function(){we&&Fe()}),[we]),m((function(){return Fe()}),g.md),(0,i.useEffect)((function(){Q(!1),Be()}),[c,P,C,de,Y]),(0,i.useEffect)((function(){Be()}),[]),(0,i.useEffect)((function(){!function(){if(M&&(null==M?void 0:M.length)>0){var e=null==M?void 0:M.filter((function(e){var t;return(null==e?void 0:e.id)===(null===(t=null==$?void 0:$.instanceDetail)||void 0===t?void 0:t.id)}))[0],t=(0,a.__assign)((0,a.__assign)({},$),{instanceDetail:e});e&&ee(t)}}()}),[M]),(0,i.useEffect)((function(){var e;null===(e=c.getUsername())||void 0===e||e.then((function(e){return Ie(e)}))}),[c]),m((function(){return Be()}),g.md);var Ke=function(){M&&1===(null==M?void 0:M.length)?Q(!0):Q(!1),Be()},Ge=function(){ae(H.total+1)},Me=function(){Q(!1),ae(H.total-1)};if(me)return r().createElement(f.PageSection,{variant:f.PageSectionVariants.default,padding:{default:"noPadding"},isFilled:!0},r().createElement(v.C0,{titleProps:{title:A("access_permissions_needed"),headingLevel:"h2"},emptyStateIconProps:{icon:x.ZP},emptyStateBodyProps:{body:A("to_access_kafka_instances_contact_your_organization_administrators")}}));return r().createElement(r().Fragment,null,r().createElement(V.o,{isExpanded:null!=$,initialTab:Oe,isLoading:void 0===De,instanceDetail:De,onClose:function(){ee(null)},"data-ouia-app-id":"controlPlane-streams",tokenEndPointUrl:n,notRequiredDrawerContentBackground:re},r().createElement("main",{className:"pf-c-page__main"},r().createElement(f.PageSection,{variant:f.PageSectionVariants.light},r().createElement(f.Level,null,r().createElement(f.LevelItem,null,r().createElement(f.TextContent,null,r().createElement(f.Text,{component:"h1"},A("kafka_instances")))))),void 0===M?r().createElement(f.PageSection,{variant:f.PageSectionVariants.light,padding:{default:"noPadding"}},r().createElement(v.yR,null)):re?r().createElement(f.PageSection,{padding:{default:"noPadding"},isFilled:!0},r().createElement(v.C0,{emptyStateProps:{variant:v.jU.NoItems},emptyStateBodyProps:{body:r().createElement(r().Fragment,null,r().createElement(o.Trans,{i18nKey:"create_a_kafka_instance_to_get_started",components:[r().createElement(f.Button,{variant:f.ButtonVariant.link,isSmall:!0,isInline:!0,key:"btn-quick-start",onClick:function(){return K.setActiveQuickStart&&K.setActiveQuickStart("getting-started")}})]}))},titleProps:{title:A("no_kafka_instances_yet")}},r().createElement(f.Button,{"data-testid":"emptyStateStreams-buttonCreateKafka",variant:f.ButtonVariant.primary,onClick:function(){return Ne()}},A("create_kafka_instance"))),")"):M&&void 0!==re?r().createElement(f.PageSection,{className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:f.PageSectionVariants.default,padding:{default:"noPadding"}},r().createElement(f.Card,null,r().createElement(D,{kafkaInstanceItems:M,mainToggle:L,onViewConnection:Ae,onViewInstance:Le,refresh:Ke,kafkaDataLoaded:q,setWaitingForDelete:Se,onDelete:Me,page:P,perPage:C,total:null==H?void 0:H.total,expectedTotal:ne,filteredValue:de,setFilteredValue:fe,setFilterSelected:ue,filterSelected:se,orderBy:Y,setOrderBy:J,isDrawerOpen:null!==$,loggedInUser:we,currentUserkafkas:ye,onCreate:Ge,handleCreateInstanceModal:Ne}))):r().createElement(r().Fragment,null))),r().createElement(f.Modal,{variant:f.ModalVariant.small,title:"Mobile experience",isOpen:_e,onClose:function(){return Ve()},actions:[r().createElement(f.Button,{key:"confirm",variant:"primary",onClick:function(){return Ve()}},"Ok")]},"The mobile experience isn't fully optimized yet, so some items might not appear correctly."))}}}]);
//# sourceMappingURL=7030.03b349fb.js.map