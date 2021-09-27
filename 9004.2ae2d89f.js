"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[9004],{64514:()=>{},4256:()=>{},43277:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(70655),l=a(75418),i=a.n(l),s=a(84669),o=a(52648),r=function(e){var t=e.isModalOpen,a=e.title,l=e.modalProps,r=e.confirmButtonProps,u=e.cancelButtonProps,L=e.handleModalToggle,d=e.textProps,c=e.children,M=e.selectedItemData,C=e.textInputProps,E=l||{},w=E.variant,T=void 0===w?s.ModalVariant.small:w,N=E.titleIconVariant,m=void 0===N?"warning":N,A=E["aria-label"],g=E.showClose,j=void 0===g||g,D=(0,n.__rest)(E,["variant","titleIconVariant","aria-label","showClose"]),_=r||{},I=_.id,v=void 0===I?"confirm__button":I,S=_.key,p=void 0===S?"confirm-button":S,y=_.variant,x=void 0===y?s.ButtonVariant.danger:y,b=_.onClick,z=_.isDisabled,k=_.label,P=void 0===k?"Delete":k,h=_.isLoading,f=(0,n.__rest)(_,["id","key","variant","onClick","isDisabled","label","isLoading"]),R=u||{},B=R.id,K=void 0===B?"cancel__button":B,O=R.key,U=void 0===O?'"cancel-button':O,F=R.variant,Q=void 0===F?s.ButtonVariant.link:F,V=R.label,Z=void 0===V?"Cancel":V,G=(0,n.__rest)(R,["id","key","variant","label"]),Y=d||{},H=Y.className,W=void 0===H?"delete-item__modal--text":H,J=Y.description,X=(0,n.__rest)(Y,["className","description"]),q=C||{},$=q.label,ee=void 0===$?"":$,te=q.value,ae=q.onChange,ne=q.onKeyPress,le=q.showTextInput,ie=(0,n.__rest)(q,["label","value","onChange","onKeyPress","showTextInput"]);return i().createElement(s.Modal,(0,n.__assign)({variant:T,isOpen:t,"aria-label":A,title:a,titleIconVariant:m,showClose:j,onClose:L,appendTo:o.wx,actions:[i().createElement(s.Button,(0,n.__assign)({id:v,key:p,variant:x,onClick:function(){return b&&b(M)},isDisabled:z,isLoading:h},f),P),i().createElement(s.Button,(0,n.__assign)({id:K,key:U,variant:Q,onClick:L},G),Z)]},D),i().createElement(s.Text,(0,n.__assign)({className:W,dangerouslySetInnerHTML:{__html:J||""}},X)),i().createElement((function(){return le?i().createElement(i().Fragment,null,i().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:ee}}),i().createElement(s.TextInput,(0,n.__assign)({id:"name__input",name:"mas-name-input",type:"text",value:te,onChange:ae,onKeyPress:ne,autoFocus:!0},ie))):i().createElement(i().Fragment,null)}),null),c)}},47394:(e,t,a)=>{a.d(t,{a:()=>r});var n=a(75418),l=a.n(n),i=a(84669),s=a(11593),o=a(52648),r=function(e){var t=e.isModalOpen,a=e.children,n=e.title,r=e.handleModalToggle,u=e.isFormValid,L=e.isCreationInProgress,d=e.primaryButtonTitle,c=e.dataTestIdSubmit,M=e.dataTestIdCancel,C=e.id,E=void 0===C?"modalCreateKafka":C,w=e.isDisabledButton,T=e.formId,N=(0,s.useTranslation)().t;return l().createElement(i.Modal,{id:E,variant:i.ModalVariant.medium,title:n,isOpen:t,onClose:r,appendTo:o.wx,actions:[l().createElement(i.Button,{key:"submit",variant:"primary",type:"submit",form:T,isDisabled:!u||L||w,spinnerAriaValueText:N("submitting_request"),isLoading:L,"data-testid":c},d),l().createElement(i.Button,{key:"cancel",variant:"link",onClick:r,"data-testid":M},N("cancel"))]},a)}},53592:(e,t,a)=>{a.r(t),a.d(t,{MASDrawer:()=>r,default:()=>u});var n=a(70655),l=a(75418),i=a.n(l),s=a(84669),o=a(92550),r=function(e){var t=e.onClose,a=e.isLoading,l=void 0===a||a,r=e.drawerPanelContentProps,u=e.drawerHeaderProps,L=e.isExpanded,d=e.children,c=e.panelBodyContent,M=e.onExpand,C=e.notRequiredDrawerContentBackground,E=e["data-ouia-app-id"],w=e.inlineAlertMessage,T=r||{},N=T.widths,m=(0,n.__rest)(T,["widths"]),A=u||{},g=A.text,j=A.title,D=i().createElement(s.DrawerPanelContent,(0,n.__assign)({widths:N||{default:"width_50"}},m),l?i().createElement(o.yR,null):i().createElement(i().Fragment,null,i().createElement(s.DrawerHead,null,i().createElement(s.TextContent,null,(null==g?void 0:g.label)&&i().createElement(s.Text,{component:(null==g?void 0:g.component)||s.TextVariants.small,className:(null==g?void 0:g.className)||"pf-u-mb-0"},null==g?void 0:g.label),(null==j?void 0:j.value)&&i().createElement(s.Title,{headingLevel:(null==j?void 0:j.headingLevel)||"h2",size:(null==j?void 0:j.size)||s.TitleSizes.xl,className:(null==j?void 0:j.className)||"pf-u-mt-0"},null==j?void 0:j.value)),i().createElement(s.DrawerActions,null,i().createElement(s.DrawerCloseButton,{onClick:t}))),i().createElement(s.DrawerPanelBody,null,w,c)));return i().createElement(s.Drawer,{isExpanded:L,onExpand:M,"data-ouia-app-id":E,"data-testid":"mk--instance__drawer"},i().createElement(s.DrawerContent,{panelContent:D,className:C?"pf-m-no-background":""},i().createElement(s.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",d)))};const u=r},29675:(e,t,a)=>{a(53592)},63477:(e,t,a)=>{a.d(t,{y:()=>o});var n=a(70655),l=a(75418),i=a.n(l),s=a(84669),o=function(e){var t=e.bullseyeProps,a=e.spinnerProps;return i().createElement(s.Bullseye,(0,n.__assign)({},t),i().createElement(s.Spinner,(0,n.__assign)({},a)))}},8509:(e,t,a)=>{a(48090)},16846:(e,t,a)=>{a.d(t,{wu:()=>L,bN:()=>u,h0:()=>r});var n=a(70655),l=a(75418),i=a.n(l),s=a(84669),o=(0,l.createContext)(void 0),r=function(){return(0,l.useContext)(o)},u=function(e){var t=e.children,a=(0,l.useState)(1),n=a[0],s=a[1],r=(0,l.useState)(10),u=r[0],L=r[1];return i().createElement(o.Provider,{value:{page:n,perPage:u,setPage:s,setPerPage:L}},t)},L=function(e){var t=e.itemCount,a=e.variant,o=void 0===a?s.PaginationVariant.top:a,u=e.isCompact,L=e.titles,d=(0,n.__rest)(e,["itemCount","variant","isCompact","titles"]),c=r()||{},M=c.setPage,C=c.setPerPage,E=c.perPage,w=c.page,T=(0,l.useCallback)((function(e,t){M&&M(t)}),[]),N=(0,l.useCallback)((function(e,t){M&&M(1),C&&C(t)}),[]);return i().createElement(s.Pagination,(0,n.__assign)({itemCount:t,perPage:E,page:w,onSetPage:T,variant:o,onPerPageSelect:N,isCompact:u},d,{titles:L}))}},69887:(e,t,a)=>{a.d(t,{w:()=>c});var n=a(70655),l=a(75418),i=a.n(l),s=a(27577),o=a(76814),r=a(75381),u=(0,l.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),L=u.Provider,d=function(e){var t=(0,l.useContext)(u),a=t.activeRow,s=t.onRowClick,L=t.rowDataTestId,d=t.loggedInUser,c=e||{},M=c.trRef,C=c.className,E=c.rowProps,w=c.row,T=(0,n.__rest)(c,["trRef","className","rowProps","row"]),N=E.rowIndex,m=w.isExpanded,A=w.originalData,g=(null==A?void 0:A.status)===r.Od.DEPROVISION||(null==A?void 0:A.status)===r.Od.DELETED,j=d===(null==A?void 0:A.owner),D=g||!j;return i().createElement("tr",(0,n.__assign)({"data-testid":L,tabIndex:D?void 0:0,ref:M,className:(0,o.css)(C,"pf-c-table-row__item",g?"pf-m-disabled":j&&"pf-m-selectable",!D&&a&&a===(null==A?void 0:A.name)&&"pf-m-selected"),hidden:void 0!==m&&!m,onClick:function(e){return!D&&s&&s(e,N,w)}},T))},c=function(e){var t=e.tableProps,a=e.tableHeaderProps,l=e.tableBodyProps,r=e.children,u=e.activeRow,c=e.onRowClick,M=e.rowDataTestId,C=e.loggedInUser,E=t.cells,w=t.rows,T=t.actionResolver,N=t.onSort,m=t.sortBy,A=t["aria-label"],g=t.variant,j=t.className,D=t.hasDefaultCustomRowWrapper,_=void 0!==D&&D,I=(0,n.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return _&&(I.rowWrapper=d),i().createElement(L,{value:{activeRow:u,onRowClick:c,rowDataTestId:M,loggedInUser:C}},i().createElement(s.Table,(0,n.__assign)({className:(0,o.css)(_&&"mas--streams-table-view__table",j),cells:E,variant:g,rows:w,"aria-label":A,actionResolver:T,onSort:N,sortBy:m},I),i().createElement(s.TableHeader,(0,n.__assign)({},a)),i().createElement(s.TableBody,(0,n.__assign)({},l)),r))}},93697:(e,t,a)=>{a.d(t,{L:()=>o});var n=a(70655),l=a(75418),i=a.n(l),s=a(84669),o=function(e){var t=e.toolbarProps,a=e.toggleGroupProps,l=e.toolbarItems,o=e.toggleGroupItems,r=t.id,u=t.clearAllFilters,L=t.collapseListedFiltersBreakpoint,d=void 0===L?"md":L,c=t.inset,M=(0,n.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return i().createElement(i().Fragment,null,i().createElement(s.Toolbar,(0,n.__assign)({id:r,clearAllFilters:u,inset:c,collapseListedFiltersBreakpoint:d},M),i().createElement(s.ToolbarContent,null,a&&i().createElement(s.ToolbarToggleGroup,(0,n.__assign)({},a,{toggleIcon:a.toggleIcon}),o),null==l?void 0:l.map((function(e,t){var a=e.key,l=void 0===a?"mas":a,o=e.variant,r=e.className,u=e.id,L=e.alignment,d=e.item,c=(0,n.__rest)(e,["key","variant","className","id","alignment","item"]);return i().createElement(s.ToolbarItem,(0,n.__assign)({key:l+"-"+t,variant:o,className:r,id:u,alignment:L},c),d)})))))}},33753:(e,t,a)=>{a.d(t,{Ng:()=>C,OU:()=>N,QK:()=>T});var n,l=a(70655),i=a(75418),s=a.n(i),o=s().lazy((function(){return Promise.all([a.e(5277),a.e(69),a.e(5255)]).then(a.bind(a,35255))})),r=s().lazy((function(){return a.e(273).then(a.bind(a,30273))})),u=s().lazy((function(){return Promise.all([a.e(5277),a.e(365),a.e(4338)]).then(a.bind(a,41486))})),L=s().lazy((function(){return Promise.all([a.e(5277),a.e(3363)]).then(a.bind(a,43363))})),d=s().lazy((function(){return Promise.all([a.e(5277),a.e(8372)]).then(a.bind(a,88372))})),c=s().lazy((function(){return Promise.all([a.e(5277),a.e(6308)]).then(a.bind(a,66308))})),M=s().lazy((function(){return a.e(6783).then(a.bind(a,6783))})),C={CREATE_KAFKA_INSTANCE:"CREATE_KAFKA_INSTANCE",DELETE_KAFKA_INSTANCE:"DELETE_KAFKA_INSTANCE",CREATE_SERVICE_ACCOUNT:"CREATE_SERVICE_ACCOUNT",DELETE_SERVICE_ACCOUNT:"DELETE_SERVICE_ACCOUNT",RESET_CREDENTIALS:"RESET_CREDENTIALS",CREDENTIALS:"CREDENTIALS",DELETE_KAFKA_EXTERNALLY:"DELETE_KAFKA_EXTERNALLY"},E=((n={})[C.CREATE_KAFKA_INSTANCE]=o,n[C.DELETE_KAFKA_INSTANCE]=r,n[C.CREATE_SERVICE_ACCOUNT]=L,n[C.DELETE_SERVICE_ACCOUNT]=d,n[C.RESET_CREDENTIALS]=c,n[C.CREDENTIALS]=M,n[C.DELETE_KAFKA_EXTERNALLY]=u,n),w=(0,i.createContext)({showModal:function(){},hideModal:function(){},store:{}}),T=function(){return(0,i.useContext)(w)},N=function(e){var t,a=e.children,n=(0,i.useState)(),o=n[0],r=n[1],u=o||{},L=u.modalType,d=void 0===L?"":L,c=u.modalProps;return s().createElement(w.Provider,{value:{store:o,showModal:function(e,t){void 0===t&&(t={}),r((0,l.__assign)((0,l.__assign)({},o),{modalType:e,modalProps:t}))},hideModal:function(){r((0,l.__assign)((0,l.__assign)({},o),{modalType:"",modalProps:{}}))}}},(t=E[d],d.length&&t?s().createElement(s().Suspense,{fallback:null},s().createElement(t,(0,l.__assign)({id:"global-modal"},c))):null),a)}},78261:(e,t,a)=>{a.d(t,{S:()=>n,G:()=>l});var n,l=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.UNAUTHORIZED_USER="KAFKAS-MGMT-4",e.DUPLICATE_INSTANCE_NAME="KAFKAS-MGMT-36",e.PREVIEW_KAFKA_INSTANCE_EXIST="KAFKAS-MGMT-24",e.INSUFFICIENT_QUOTA="KAFKAS-MGMT-120",e.FAILED_TO_CHECK_QUOTA="KAFKAS-MGMT-121"}(n||(n={}))},75381:(e,t,a)=>{a.d(t,{Od:()=>n.Od,ik:()=>n.ik,pf:()=>n.pf,JB:()=>n.JB,md:()=>n.md,lt:()=>n.lt,Nw:()=>n.Nw,bv:()=>n.bv,Bh:()=>n.Bh,L0:()=>n.L0,o8:()=>n.o8,vK:()=>n.vK,Qw:()=>n.Qw,E7:()=>n.E7,hm:()=>n.hm,SM:()=>l.S,G6:()=>l.G});var n=a(52648),l=(a(82519),a(78261))},13168:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=9004.2ae2d89f.js.map