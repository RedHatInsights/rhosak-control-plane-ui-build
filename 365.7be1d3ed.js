(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[365],{35451:(e,t,n)=>{"use strict";t.GR={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},t.rE=n(35183).createIcon(t.GR),t.ZP=t.rE},8755:(e,t,n)=>{"use strict";t._t={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},t.k1=n(35183).createIcon(t._t),t.ZP=t.k1},41942:(e,t,n)=>{"use strict";t.yR={name:"PendingIcon",height:1024,width:1024,svgPath:"M512.1,895.9 C300.3,895.9 128.1,723.8 128.1,511.9 C128.1,300.2 300.3,127.9 512.1,127.9 C723.8,127.9 896,300.2 896.1,511.9 C896.1,723.7 723.8,895.9 512.1,895.9 M512.1,0 C229.7,0 0,229.7 0,512 C0,794.3 229.7,1024 512.1,1024 C794.3,1024 1024,794.3 1024,512 C1024,229.7 794.3,0 512.1,0 M704,288 L704,272 C704,263.2 696.8,256 688,256 L336,256 C327.2,256 320,263.2 320,272 L320,288 C320,447 480,449 480,512 C480,575 320,575 320,736 L320,752 C320,760.8 327.2,768 336,768 L688,768 C696.8,768 704,760.8 704,752 L704,736 C704,576 544,577 544,512 C544,447 704,448 704,288 M603.9,704 L420.3,704 C417.3,704 418.2,695 419.4,686.8 C426.8,634.5 480.1,617.4 495.2,612.3 C512.3,606.6 512.3,606.6 528.9,612.3 C544,617.6 597.6,635.4 604.8,687 C605.9,695.2 606.9,704 603.9,704",yOffset:0,xOffset:0},t.tu=n(35183).createIcon(t.yR),t.ZP=t.tu},13006:(e,t,n)=>{"use strict";n.d(t,{oY:()=>g});var a=n(48121),r=n.n(a),i=n(38936),l=n(97012),o=n.n(l),s=n(56176),u=n.n(s),c=n(58788),d=(n(77903),n(71958),n(45024)),f=n(75381),v=r().lazy((function(){return n.e(9061).then(n.bind(n,69061))})),m=r().lazy((function(){return n.e(6863).then(n.bind(n,36863))})),p=r().lazy((function(){return Promise.resolve().then(n.bind(n,53592))})),g=function(e){var t=e.mainToggle,n=e.onClose,l=e.activeTab,s=e.instanceDetail,g=e.isExpanded,_=e.isLoading,b=e.children,h=e["data-ouia-app-id"],E=e.getConnectToRoutePath,C=e.onConnectToRoute,S=e.tokenEndPointUrl,k=e.notRequiredDrawerContentBackground;o().extend(u());var w=(0,i.useTranslation)().t,P=s||{},T=P.name,y=P.status,I=(0,a.useState)(0),O=I[0],x=I[1],D=(0,a.useState)(0),V=D[0],L=D[1];(0,a.useEffect)((function(){var e="details"===(null==l?void 0:l.toLowerCase())?0:1;x(e),L(0)}),[l]);var R,A=function(e,t){x(t)},N=function(e,t){L(t)},F=y===f.Od.ACCEPTED||y===f.Od.PREPARING;return r().createElement(r().Suspense,{fallback:r().createElement(d.yR,null)},r().createElement(p,{isExpanded:g,isLoading:_,onClose:n,panelBodyContent:r().createElement(r().Suspense,{fallback:r().createElement(d.yR,null)},r().createElement(c.Tabs,{activeKey:O,onSelect:A},r().createElement(c.Tab,{eventKey:0,title:r().createElement(c.TabTitleText,null,w("details"))},r().createElement(m,{mainToggle:t,instanceDetail:s})),r().createElement(c.Tab,{eventKey:1,title:r().createElement(c.TabTitleText,null,w("connection")),"data-testid":"drawerStreams-tabConnect"},r().createElement(v,{mainToggle:t,activeKey:V,instance:s,externalServer:(R=(s||{}).bootstrap_server_host,(null==R?void 0:R.endsWith(":443"))?R:R+":443"),onSelect:N,isKafkaPending:F,getConnectToRoutePath:E,onConnectToRoute:C,tokenEndPointUrl:S})))),drawerHeaderProps:{text:{label:w("instance_name")},title:{value:T,headingLevel:"h1"}},"data-ouia-app-id":h,inlineAlertMessage:F?r().createElement(c.Alert,{isInline:!0,variant:c.AlertVariant.info,title:w("kafka_instance_not_ready_inline_message"),className:"pf-u-mt-sm"}):r().createElement(r().Fragment,null),notRequiredDrawerContentBackground:k},b))}},365:(e,t,n)=>{"use strict";n.d(t,{oY:()=>P.oY,fw:()=>w,ez:()=>k});var a=n(70655),r=n(48121),i=n.n(r),l=n(38936),o=n(76007),s=n(94550),u=n(58788),c=n(75381),d=n(45024),f=n(82904),v=n(71070),m=n(8755),p=n(95368),g=function(e){var t,n,o,s=e.setFilterSelected,f=e.filterSelected,g=void 0===f?"name":f,_=e.total,b=e.page,h=e.perPage,E=e.filteredValue,C=e.setFilteredValue,S=e.isDisabledCreateButton,k=e.buttonTooltipContent,w=e.labelWithTooltip,P=e.onCreate,T=e.refresh,y=e.cloudProviders,I=(0,l.useTranslation)().t,O=(0,r.useRef)(),x=(0,r.useRef)(),D=(0,d.QK)().showModal,V=(0,p.SP)().preCreateInstance,L=(0,r.useState)(!1),R=L[0],A=L[1],N=(0,r.useState)(!1),F=N[0],K=N[1],B=(0,r.useState)(!1),G=B[0],M=B[1],Z=(0,r.useState)(!1),j=Z[0],z=Z[1],Y=(0,r.useState)(),U=Y[0],W=Y[1],H=(0,r.useState)(),q=H[0],J=H[1],Q=(0,r.useState)(!0),$=Q[0],X=Q[1],ee=(0,r.useState)(!0),te=ee[0],ne=ee[1],ae=(0,r.useState)(!1),re=ae[0],ie=ae[1],le=[{label:I("name"),value:"name",disabled:!1},{label:I("cloud_provider"),value:"cloud_provider",disabled:!1},{label:I("region"),value:"region",disabled:!1},{label:I("owner"),value:"owner",disabled:!1},{label:I("status"),value:"status",disabled:!1}];(0,r.useEffect)((function(){be()}),[E]);var oe=c.bv.map((function(e){return{label:I(e.value),value:e.value,disabled:!1}})),se=c.Bh.map((function(e){return{label:I(e.value),value:e.value,disabled:!1}})),ue=c.hm.filter((function(e){return e.value!==c.Od.PREPARING&&e.value!==c.Od.DELETED})).map((function(e){return{label:I(e.value),value:e.value,disabled:!1}})),ce=function(e,t,n){var a=Object.assign([],E),r=a.findIndex((function(t){return t.filterKey===e}));if(r>-1){var i=a[r];if(i.filterValue&&i.filterValue.length>0){var l=i.filterValue.findIndex((function(e){return e.value===t.value}));if(l>-1){if(!n)return;i.filterValue.splice(l,1)}else a[r].filterValue.push(t)}else a[r].filterValue=[t]}else a.push({filterKey:e,filterValue:[t]});C(a)},de=function(e){return!e||/^([a-zA-Z0-9-_%]*[a-zA-Z0-9-_%])?$/.test(e.trim())},fe=function(e){"name"===e&&U&&""!=U.trim()?de(U)?(ce("name",{value:U,isExact:!1},!1),W("")):X(!1):"owner"===e&&q&&""!=q.trim()&&(de(q)?(ce("owner",{value:q,isExact:!1},!1),J("")):ne(!1))},ve=function(e){var t=Object.assign([],E),n=t.findIndex((function(t){return t.filterKey===e}));n>=0&&t.splice(n,1),C(t),"name"===e&&W(""),"owner"===e&&J(""),"cloud_provider"===e&&z(!1),"region"===e&&M(!1),"status"===e&&z(!1)},me=function(e){var t;if("Enter"===e.key&&!re){var n=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.name;fe(n)}},pe=function(e){var t=E.filter((function(t){return t.filterKey===e}));if(t.length>0)return t[0].filterValue.map((function(e){return e.value}))},ge=function(e,t,n){var a,r,i=Object.assign([],E),l=i.findIndex((function(t){return t.filterKey===e})),o=Object.assign([],null===(a=i[l])||void 0===a?void 0:a.filterValue),s=t.toString();n&&(null==n?void 0:n.length)>0&&(s=null===(r=null==n?void 0:n.find((function(e){return e.label===t.toString()})))||void 0===r?void 0:r.value);var u=o.findIndex((function(e){return e.value===s}));u>=0&&(i[l].filterValue.splice(u,1),C(i))},_e=function(e){var t=Object.assign([],E),n=t.findIndex((function(t){return t.filterKey===e}));n>=0&&(t.splice(n,1),C(t))},be=function(){var e=0;null==E||E.forEach((function(t){var n=t.filterValue,a=t.filterKey,r="status"===a&&(null==n?void 0:n.filter((function(e){return e.value===c.Od.PROVISIONING}))),i="status"===a&&(null==n?void 0:n.filter((function(e){return e.value===c.Od.DEPROVISION})));(null==r?void 0:r.length)>0&&(null==i?void 0:i.length)>0?e+=(null==n?void 0:n.length)+2:(null==r?void 0:r.length)>0||(null==i?void 0:i.length)>0?e+=(null==n?void 0:n.length)+1:e+=null==n?void 0:n.length})),e>=c.pf?ie(!0):ie(!1)},he=function(e,t){var n,a=null==E?void 0:E.filter((function(t){return t.filterKey===e}));if(a&&(null==a?void 0:a.length)>0){var r=a[0].filterValue;n=null==r?void 0:r.find((function(e){return e.value===t}))}return!n},Ee=function(e){return re?i().createElement("div",null,I("max_filter_message")):i().createElement("div",null,I("input_field_invalid_message",{name:e}))},Ce=i().createElement(i().Fragment,null,i().createElement(u.ToolbarGroup,{variant:"filter-group"},i().createElement(u.Select,{variant:u.SelectVariant.single,"aria-label":"Select filter",onToggle:function(){A(!R)},selections:g,isOpen:R,onSelect:function(e,t){A(!R),s(null==t?void 0:t.toString())}},le.map((function(e,t){return i().createElement(u.SelectOption,{isDisabled:e.disabled,key:t,value:e.value},e.label)}))),i().createElement(u.ToolbarFilter,{chips:pe("name"),deleteChip:function(e,t){return ge("name",t)},deleteChipGroup:function(){return _e("name")},categoryName:I("name"),showToolbarItem:"name"===(null==g?void 0:g.toLowerCase())},"name"===(null==g?void 0:g.toLowerCase())&&i().createElement(u.InputGroup,{className:"mk--filter-instances__toolbar--text-input"},i().createElement(u.TextInput,{name:"name",id:"filterText",type:"search","aria-label":"Search filter input",validated:!$||re?u.ValidatedOptions.error:u.ValidatedOptions.default,placeholder:I("filter_by_name_lower"),onChange:function(e){W(e),!$&&X(!0)},onKeyPress:me,value:U,ref:O}),i().createElement(u.Button,{variant:u.ButtonVariant.control,isDisabled:!$||re,onClick:function(){return fe("name")},"aria-label":"Search instances"},i().createElement(v.ZP,null)),(!$||re)&&i().createElement(u.Tooltip,{isVisible:re||!$,content:Ee("name"),reference:O}))),i().createElement(u.ToolbarFilter,{chips:null===(t=pe("cloud_provider"))||void 0===t?void 0:t.map((function(e){return I(e)})),deleteChip:function(e,t){return ge("cloud_provider",t,oe)},deleteChipGroup:function(){return _e("cloud_provider")},categoryName:I("cloud_provider"),showToolbarItem:"cloud_provider"===g},"cloud_provider"===g&&i().createElement(u.Select,{id:"cloud-provider-select",variant:u.SelectVariant.checkbox,"aria-label":"Select cloud provider",onToggle:function(){K(!F)},selections:pe("cloud_provider"),isOpen:F,onSelect:function(e,t,n){n&&ve("cloud_provider"),ce("cloud_provider",{value:t.toString(),isExact:!0},!0),c.bv.length<2&&K(!1)},placeholderText:I("filter_by_cloud_provider"),className:"select-custom-width"},oe.map((function(e,t){var n=document.getElementById("cloud-provider-select");return i().createElement(u.SelectOption,{isDisabled:e.disabled||re&&he("cloud_provider",e.value),key:t,value:e.value},re&&i().createElement(u.Tooltip,{isVisible:re,content:Ee(),reference:n||void 0}),e.label)})))),i().createElement(u.ToolbarFilter,{chips:null===(n=pe("region"))||void 0===n?void 0:n.map((function(e){return I(e)})),deleteChip:function(e,t){return ge("region",t,se)},deleteChipGroup:function(){return _e("region")},categoryName:I("region"),showToolbarItem:"region"===g},"region"===g&&i().createElement(u.Select,{id:"region-select",variant:u.SelectVariant.checkbox,"aria-label":"Select region",onToggle:function(){M(!G)},selections:pe("region"),isOpen:G,onSelect:function(e,t,n){n&&ve("region"),ce("region",{value:t.toString(),isExact:!0},!0),se.length<2&&M(!1)},placeholderText:I("filter_by_region"),className:"select-custom-width"},se.map((function(e,t){var n=document.getElementById("region-select");return i().createElement(u.SelectOption,{isDisabled:e.disabled||re&&he("region",e.value),key:t,value:e.value},re&&i().createElement(u.Tooltip,{isVisible:re,content:Ee(),reference:n||void 0}),e.label)})))),i().createElement(u.ToolbarFilter,{chips:pe("owner"),deleteChip:function(e,t){return ge("owner",t)},deleteChipGroup:function(){return _e("owner")},categoryName:I("owner"),showToolbarItem:"owner"===(null==g?void 0:g.toLowerCase())},"owner"===g.toLowerCase()&&i().createElement(u.InputGroup,{className:"mk--filter-instances__toolbar--text-input"},i().createElement(u.TextInput,{name:"owner",id:"filterOwners",type:"search","aria-label":"Search filter input",placeholder:I("filter_by_owner"),validated:!te||re?u.ValidatedOptions.error:u.ValidatedOptions.default,onChange:function(e){J(e),!te&&ne(!0)},onKeyPress:me,value:q,ref:x}),i().createElement(u.Button,{isDisabled:!te||re,variant:u.ButtonVariant.control,onClick:function(){return fe("owner")},"aria-label":"Search owners"},i().createElement(v.ZP,null)),(!te||re)&&i().createElement(u.Tooltip,{isVisible:re||!te,content:Ee("owner"),reference:x}))),i().createElement(u.ToolbarFilter,{chips:null===(o=pe("status"))||void 0===o?void 0:o.map((function(e){return I(e)})),deleteChip:function(e,t){return ge("status",t,ue)},deleteChipGroup:function(){return _e("status")},categoryName:I("status"),showToolbarItem:"status"===g},"status"===g&&i().createElement(u.Select,{id:"status-select",variant:u.SelectVariant.checkbox,"aria-label":"Select status",onToggle:function(){z(!j)},selections:pe("status"),isOpen:j,onSelect:function(e,t,n){n&&ve("status"),ce("status",{value:t.toString(),isExact:!0},!0)},placeholderText:I("filter_by_status"),className:"select-custom-width"},ue.map((function(e,t){var n=document.getElementById("status-select");return i().createElement(u.SelectOption,{isDisabled:e.disabled||re&&he("status",e.value),key:t,value:e.value},re&&i().createElement(u.Tooltip,{isVisible:re,content:Ee(),reference:n||void 0}),e.label)})))))),Se=function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return V?[4,V(!0)]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&D(d.Ny.CREATE_KAFKA_INSTANCE,{onCreate:P,cloudProviders:y,refresh:T}),[2]}}))}))},ke=[{item:S?i().createElement(u.Tooltip,{content:k},i().createElement(u.Button,{variant:"primary",onClick:Se,"data-testid":"tableStreams-buttonCreateKafka",isAriaDisabled:S},I("create_kafka_instance"))):i().createElement(u.Button,{variant:"primary",onClick:Se,"data-testid":"tableStreams-buttonCreateKafka"},I("create_kafka_instance"))},{item:w}];return _&&_>0&&ke.length>1&&ke.push({item:i().createElement(d.wu,{widgetId:"pagination-options-menu-top",itemCount:_,page:b,perPage:h,isCompact:!0,titles:{paginationTitle:I("minimal_pagination"),perPageSuffix:I("per_page_suffix"),toFirstPage:I("to_first_page"),toPreviousPage:I("to_previous_page"),toLastPage:I("to_last_page"),toNextPage:I("to_next_page"),optionsToggle:I("options_toggle"),currPage:I("curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),i().createElement(d.L5,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){C([]),ie(!1)},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:i().createElement(m.ZP,null),breakpoint:"md"},toggleGroupItems:Ce,toolbarItems:ke})},_=n(35451),b=n(41942),h=n(84564),E=n(52648),C=function(e){var t,n=e.status,a=e.instanceName,r=(0,l.useTranslation)().t,o=function(){switch(null==n?void 0:n.toLowerCase()){case E.hm[0].value:return i().createElement(_.ZP,{className:"mk--instances__table--icon--completed"});case E.hm[1].value:return i().createElement(h.ZP,{className:"mk--instances__table--icon--failed"});case E.hm[2].value:return i().createElement(b.ZP,null);case E.hm[3].value:case E.hm[4].value:return i().createElement(u.Spinner,{size:"md","aria-label":a,"aria-valuetext":"Creation in progress"});case E.hm[5].value:case E.hm[6].value:return;default:return i().createElement(b.ZP,null)}}();return i().createElement(u.Flex,null,o&&i().createElement(u.FlexItem,{spacer:{default:"spacerSm"}},o),i().createElement(u.FlexItem,null,1===(t=E.hm.filter((function(e){return e.value===(null==n?void 0:n.toLowerCase())}))).length?r(t[0].value):r("creation_pending")))},S=n(46748),k=function(e,t,n,a){var r={title:"",confirmActionLabel:"",description:""},i=a?" You might not be able to create a new instance because all of them are currently provisioned by other users.":"";return t===c.Od.READY?(r.title=e("delete_instance")+"?",r.confirmActionLabel=e("delete"),r.description=e("delete_instance_status_complete",{instanceName:n})+i):t!==c.Od.ACCEPTED&&t!==c.Od.PROVISIONING&&t!==c.Od.PREPARING||(r.title=e("delete_instance")+"?",r.confirmActionLabel=e("delete"),r.description=e("delete_instance_status_accepted_or_provisioning",{instanceName:n})+i),r},w=function(e){var t=e.mainToggle,n=e.kafkaInstanceItems,v=e.onViewInstance,m=e.onViewConnection,p=e.onConnectToRoute,_=e.getConnectToRoutePath,b=e.refresh,h=e.page,E=e.perPage,w=e.total,P=e.kafkaDataLoaded,T=e.onDelete,y=e.expectedTotal,I=e.filteredValue,O=e.setFilteredValue,x=e.setFilterSelected,D=e.filterSelected,V=e.orderBy,L=e.setOrderBy,R=e.isDrawerOpen,A=e.isMaxCapacityReached,N=e.buttonTooltipContent,F=e.isDisabledCreateButton,K=e.loggedInUser,B=e.labelWithTooltip,G=e.setWaitingForDelete,M=e.currentUserkafkas,Z=e.cloudProviders,j=e.onCreate,z=(0,S.useAuth)(),Y=(0,S.useConfig)().kas.apiBasePath,U=(0,l.useTranslation)().t,W=new URLSearchParams(location.search),H=(0,o.useHistory)(),q=(0,S.useAlert)().addAlert,J=(0,d.QK)(),Q=J.showModal,$=J.hideModal,X=(0,r.useState)({}),ee=X[0],te=X[1],ne=(0,r.useState)(),ae=ne[0],re=ne[1],ie=(0,r.useState)([]),le=ie[0],oe=ie[1],se=(0,r.useState)([]),ue=se[0],ce=se[1],de=(0,r.useState)(),fe=de[0],ve=de[1],me=[{title:U("name"),transforms:[s.sortable]},{title:U("cloud_provider"),transforms:[s.sortable]},{title:U("region"),transforms:[s.sortable]},{title:U("owner"),transforms:[s.sortable]},{title:U("status"),transforms:[s.sortable]},{title:U("time_created"),transforms:[s.sortable]}];(0,r.useEffect)((function(){null==z||z.isOrgAdmin().then((function(e){return ve(e)}))}),[z]);var pe=(0,r.useCallback)((function(e,t){W.set(e,t.toString())}),[W]);(0,r.useEffect)((function(){R||re("")}),[R]);var ge=function(){if(M){var e=M.filter((function(e){return e.status===c.Od.DEPROVISION||e.status===c.Od.DELETED})).filter((function(e){return le.findIndex((function(t){return t===e.name}))<0})).map((function(e){return e.name||""})),t=(0,a.__spreadArray)((0,a.__spreadArray)([],le),e);oe(t),t.forEach((function(e){(null==M?void 0:M.findIndex((function(t){return t.name===e})))<0&&(!function(e){var t=le.findIndex((function(t){return t===e}));if(t>-1){var n=Object.assign([],le);n.splice(t,1),oe(n)}}(e),q({title:U("kafka_successfully_deleted",{name:e}),variant:S.AlertVariant.success}))}))}};(0,r.useEffect)((function(){h>1&&0===n.length&&(pe("page",(h-1).toString()),pe("perPage",E.toString()),H.push({search:W.toString()})),ge(),function(){var e=JSON.parse(JSON.stringify(ue));if(ue&&ue.length>0){var t=Object.assign([],n).filter((function(e){return e.status===c.Od.READY||e.status===c.Od.FAILED}));e.forEach((function(e){var n,a,r=t.filter((function(t){return e.id===t.id}));r&&r.length>0&&(r[0].status===c.Od.READY?q({title:U("kafka_successfully_created"),variant:S.AlertVariant.success,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:U("kafka_success_message",{name:null===(n=r[0])||void 0===n?void 0:n.name})}}),dataTestId:"toastCreateKafka-success"}):r[0].status===c.Od.FAILED&&q({title:U("kafka_not_created"),variant:S.AlertVariant.danger,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:U("kafka_failed_message",{name:null===(a=r[0])||void 0===a?void 0:a.name})}}),dataTestId:"toastCreateKafka-failed"}))}))}var a=Object.assign([],null==n?void 0:n.filter((function(e){return e.status===c.Od.PROVISIONING||e.status===c.Od.ACCEPTED})));ce(a)}()}),[h,E,n,M]);var _e,be,he=function(e,t,n){var a,r,i;"view-instance"===n?(v(t),re(null==t?void 0:t.name)):"connect-instance"===n?(m(t),re(null==t?void 0:t.name)):"delete-instance"===n&&Ce(t);var l=null===(i=null===(r=null===(a=null==e?void 0:e.target)||void 0===a?void 0:a.parentElement)||void 0===r?void 0:r.parentElement)||void 0===i?void 0:i.previousSibling;null!=l&&l.focus()},Ee=function(e){var t=e.name,n=e.row;return i().createElement(o.Link,{to:function(){return _(n,"kafkas/"+(null==n?void 0:n.id))},onClick:function(e){e.preventDefault(),p(n,"kafkas/"+(null==n?void 0:n.id))},"data-testid":"tableStreams-linkKafka"},t)},Ce=function(e){var t=e.status,n=e.name;if(te(e),t===c.Od.FAILED)Se(e);else{var a=k(U,t,n,A),r=a.title,i=a.confirmActionLabel,l=a.description;Q(d.Ny.DELETE_KAFKA_INSTANCE,{instanceStatus:t,selectedItemData:e,title:r,confirmButtonProps:{onClick:Se,label:i},textProps:{description:l}})}},Se=function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var t,n,r,i,l,o;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(void 0===(t=(null==ee?void 0:ee.id)||(null==e?void 0:e.id)))throw new Error("kafka instance id is not set");return[4,null==z?void 0:z.kas.getToken()];case 1:n=a.sent(),r=new f.DefaultApi(new f.Configuration({accessToken:n,basePath:Y})),T(),$(),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,r.deleteKafkaById(t,!0).then((function(){re(void 0),G(!0),b()}))];case 3:return a.sent(),[3,5];case 4:return i=a.sent(),l=void 0,(0,c.G6)(i)&&(l=null===(o=i.response)||void 0===o?void 0:o.data.reason),q({title:U("common.something_went_wrong"),variant:S.AlertVariant.danger,description:l}),[3,5];case 5:return[2]}}))}))},ke=function(e){switch(e.toLowerCase()){case"name":return 0;case"cloud_provider":return 1;case"region":return 2;case"owner":return 3;case"status":return 4;case"created_at":return 5;default:return}},we=function(){var e=(null==V?void 0:V.split(" "))||[];if(e.length>1)return{index:ke(e[0]),direction:e[1]===s.SortByDirection.asc?s.SortByDirection.asc:s.SortByDirection.desc}};return i().createElement(i().Fragment,null,i().createElement(g,{mainToggle:t,filterSelected:D,setFilterSelected:x,total:w,page:h,perPage:E,filteredValue:I,setFilteredValue:O,isDisabledCreateButton:F,buttonTooltipContent:N,labelWithTooltip:B,cloudProviders:Z,onCreate:j,refresh:b}),i().createElement(d.wR,{tableProps:{cells:me,rows:(_e=[],be=(0,c.o8)(h,E,y),P?(n.forEach((function(e){var t=e.name,n=e.cloud_provider,a=e.region,r=e.created_at,l=e.status,o=e.owner,s=U(n),u=U(a);_e.push({cells:[{title:l===c.Od.DEPROVISION||l!==c.Od.READY?t:Ee({name:t,row:e})},s,u,o,{title:i().createElement(C,{status:l,instanceName:t})},{title:(0,c.L0)(r,U("ago"))}],originalData:e})})),_e):(0,c.vK)({loadingCount:be,skeleton:i().createElement(u.Skeleton,null),length:me.length})),"aria-label":U("cluster_instance_list"),actionResolver:function(e){return function(e){var t,n,r;if(!P)return[];var i=e.originalData;if(i.status===c.Od.DEPROVISION||i.status===c.Od.DELETED)return[];var l,o=i.owner===K||fe;return o||(l={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}}),[(0,a.__assign)((0,a.__assign)((t={title:U("view_details"),id:"view-instance"},t["data-testid"]="tableStreams-actionDetails",t.onClick=function(e){return o&&he(e,i,"view-instance")},t),l),{tooltipProps:{position:"left",content:U("no_permission_to_view_kafka")}}),(0,a.__assign)((0,a.__assign)((n={title:U("view_connection_information"),id:"connect-instance"},n["data-testid"]="tableStreams-actionConnection",n.onClick=function(e){return o&&he(e,i,"connect-instance")},n),l),{tooltipProps:{position:"left",content:U("no_permission_to_connect_kafka")}}),(0,a.__assign)((0,a.__assign)((r={title:U("delete_instance"),id:"delete-instance"},r["data-testid"]="tableStreams-actionDelete",r.onClick=function(e){return o&&he(e,i,"delete-instance")},r),l),{tooltipProps:{position:"left",content:U("no_permission_to_delete_kafka")}})]}(e)},onSort:function(e,t,n,a){var r,i=n;(null===(r=we())||void 0===r?void 0:r.index)!==t&&"time-created"===a.property&&(i="desc"),L(function(e){switch(e){case 0:return"name";case 1:return"cloud_provider";case 2:return"region";case 3:return"owner";case 4:return"status";case 5:return"created_at";default:return""}}(t)+" "+i)},sortBy:we(),hasDefaultCustomRowWrapper:!0},activeRow:ae,onRowClick:function(e,t,n){var a,r,i=n.originalData,l=null===(a=null==e?void 0:e.target)||void 0===a?void 0:a.type,o=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.tagName;"button"!==l&&"a"!==(null==o?void 0:o.toLowerCase())&&(v(i),re(null==i?void 0:i.name))},rowDataTestId:"tableStreams-row",loggedInUser:K}),n.length<1&&P&&i().createElement(d.C0,{emptyStateProps:{variant:d.jU.NoResult},titleProps:{title:U("no_results_found")},emptyStateBodyProps:{body:U("adjust_your_filters_and_try_again")}}),w>0&&i().createElement(d.wu,{widgetId:"pagination-options-menu-bottom",itemCount:w,variant:u.PaginationVariant.bottom,page:h,perPage:E,titles:{paginationTitle:U("full_pagination"),perPageSuffix:U("per_page_suffix"),toFirstPage:U("to_first_page"),toPreviousPage:U("to_previous_page"),toLastPage:U("to_last_page"),toNextPage:U("to_next_page"),optionsToggle:U("options_toggle"),currPage:U("curr_page")}}))},P=n(13006)}}]);
//# sourceMappingURL=365.7be1d3ed.js.map