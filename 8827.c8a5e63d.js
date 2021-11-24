"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8827],{4256:()=>{},43277:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(70655),i=a(75418),l=a.n(i),s=a(84669),o=a(52648),r=function(e){var t=e.isModalOpen,a=e.title,i=e.modalProps,r=e.confirmButtonProps,u=e.cancelButtonProps,c=e.handleModalToggle,L=e.textProps,d=e.children,M=e.selectedItemData,w=e.textInputProps,m=i||{},C=m.variant,N=void 0===C?s.ModalVariant.small:C,g=m.titleIconVariant,v=void 0===g?"warning":g,T=m["aria-label"],j=m.showClose,E=void 0===j||j,p=(0,n.__rest)(m,["variant","titleIconVariant","aria-label","showClose"]),S=r||{},D=S.id,x=void 0===D?"confirm__button":D,y=S.key,I=void 0===y?"confirm-button":y,_=S.variant,A=void 0===_?s.ButtonVariant.danger:_,b=S.onClick,z=S.isDisabled,k=S.label,h=void 0===k?"Delete":k,P=S.isLoading,f=(0,n.__rest)(S,["id","key","variant","onClick","isDisabled","label","isLoading"]),B=u||{},O=B.id,U=void 0===O?"cancel__button":O,G=B.key,Z=void 0===G?'"cancel-button':G,Q=B.variant,R=void 0===Q?s.ButtonVariant.link:Q,V=B.label,F=void 0===V?"Cancel":V,K=(0,n.__rest)(B,["id","key","variant","label"]),H=L||{},W=H.className,Y=void 0===W?"delete-item__modal--text":W,J=H.description,X=(0,n.__rest)(H,["className","description"]),q=w||{},$=q.label,ee=void 0===$?"":$,te=q.value,ae=q.onChange,ne=q.onKeyPress,ie=q.showTextInput,le=(0,n.__rest)(q,["label","value","onChange","onKeyPress","showTextInput"]);return l().createElement(s.Modal,(0,n.__assign)({variant:N,isOpen:t,"aria-label":T,title:a,titleIconVariant:v,showClose:E,onClose:c,appendTo:o.wx,actions:[l().createElement(s.Button,(0,n.__assign)({id:x,key:I,variant:A,onClick:function(){return b&&b(M)},isDisabled:z,isLoading:P},f),h),l().createElement(s.Button,(0,n.__assign)({id:U,key:Z,variant:R,onClick:c},K),F)]},p),l().createElement(s.Text,(0,n.__assign)({className:Y,dangerouslySetInnerHTML:{__html:J||""}},X)),l().createElement((function(){return ie?l().createElement(l().Fragment,null,l().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:ee}}),l().createElement(s.TextInput,(0,n.__assign)({id:"name__input",name:"mas-name-input",type:"text",value:te,onChange:ae,onKeyPress:ne,autoFocus:!0},le))):l().createElement(l().Fragment,null)}),null),d)}},87842:(e,t,a)=>{a.d(t,{D:()=>r});var n=a(70655),i=a(75418),l=a.n(i),s=a(84669),o=a(28962),r=function(e){var t=e.onClose,a=e.isLoading,i=void 0===a||a,r=e.drawerPanelContentProps,u=e.drawerHeaderProps,c=e.isExpanded,L=e.children,d=e.panelBodyContent,M=e.onExpand,w=e.notRequiredDrawerContentBackground,m=e["data-ouia-app-id"],C=e.inlineAlertMessage,N=r||{},g=N.widths,v=(0,n.__rest)(N,["widths"]),T=u||{},j=T.text,E=T.title,p=l().createElement(s.DrawerPanelContent,(0,n.__assign)({widths:g||{default:"width_50"}},v),i?l().createElement(o.yR,null):l().createElement(l().Fragment,null,l().createElement(s.DrawerHead,null,l().createElement(s.TextContent,null,(null==j?void 0:j.label)&&l().createElement(s.Text,{component:(null==j?void 0:j.component)||s.TextVariants.small,className:(null==j?void 0:j.className)||"pf-u-mb-0"},null==j?void 0:j.label),(null==E?void 0:E.value)&&l().createElement(s.Title,{headingLevel:(null==E?void 0:E.headingLevel)||"h2",size:(null==E?void 0:E.size)||s.TitleSizes.xl,className:(null==E?void 0:E.className)||"pf-u-mt-0"},null==E?void 0:E.value)),l().createElement(s.DrawerActions,null,l().createElement(s.DrawerCloseButton,{onClick:t}))),l().createElement(s.DrawerPanelBody,null,C,d)));return l().createElement(s.Drawer,{isExpanded:c,onExpand:M,"data-ouia-app-id":m,"data-testid":"mk--instance__drawer",className:"kas-drawer"},l().createElement(s.DrawerContent,{panelContent:p,className:w?"pf-m-no-background":""},l().createElement(s.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",L)))}},12973:(e,t,a)=>{a.d(t,{C:()=>w,j:()=>d});var n=a(70655),i=a(75418),l=a.n(i),s=a(84669),o=a(20777),r=a(34558),u=a(5569),c=a(71070),L=a(84564);var d,M=a(76814);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(d||(d={}));var w=function(e){var t=e.titleProps,a=e.buttonProps,i=e.emptyStateIconProps,w=e.emptyStateProps,m=e.emptyStateBodyProps,C=e.children,N=a||{},g=N.variant,v=void 0===g?s.ButtonVariant.primary:g,T=N.onClick,j=(0,n.__rest)(N,["variant","onClick"]),E=t||{},p=E.title,S=(0,n.__rest)(E,["title"]),D=m||{},x=D.body,y=(0,n.__rest)(D,["body"]),I=w||{},_=I.variant,A=void 0===_?d.GettingStarted:_,b=I.className,z=(0,n.__rest)(I,["variant","className"]),k=function(){return l().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"})},h=function(){var e={};switch(A){case d.GettingStarted:e={variant:s.EmptyStateVariant.xl,icon:r.ZP,titleSize:s.TitleSizes["4xl"],headingLevel:"h1"};break;case d.NoAccess:e={variant:s.EmptyStateVariant.large,icon:u.ZP,titleSize:s.TitleSizes.xl,headingLevel:"h2"};break;case d.NoItems:e={variant:s.EmptyStateVariant.large,icon:o.ZP,titleSize:s.TitleSizes.xl,headingLevel:"h2"};break;case d.NoResult:e={variant:s.EmptyStateVariant.large,icon:c.ZP,titleSize:s.TitleSizes.lg,headingLevel:"h2"};break;case d.UnexpectedError:e={variant:s.EmptyStateVariant.full,icon:L.ZP,titleSize:s.TitleSizes.lg,headingLevel:"h1"};break;case d.PageNotFound:e={variant:s.EmptyStateVariant.full,icon:k,titleSize:s.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:A||s.EmptyStateVariant.full,icon:null==i?void 0:i.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),P=h.variant,f=h.icon,B=h.titleSize,O=h.headingLevel;return l().createElement(s.EmptyState,(0,n.__assign)({variant:P,className:(0,M.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",b)},z),l().createElement(s.EmptyStateIcon,(0,n.__assign)({icon:f},i)),p&&l().createElement(s.Title,(0,n.__assign)({headingLevel:O,size:B},S),p),x&&l().createElement(s.EmptyStateBody,(0,n.__assign)({},y),x),(null==a?void 0:a.title)&&l().createElement(s.Button,(0,n.__assign)({variant:v,onClick:T},j),null==a?void 0:a.title),C)}},8509:(e,t,a)=>{a(48090)},16846:(e,t,a)=>{a.d(t,{wu:()=>c,bN:()=>u,h0:()=>r});var n=a(70655),i=a(75418),l=a.n(i),s=a(84669),o=(0,i.createContext)(void 0),r=function(){return(0,i.useContext)(o)},u=function(e){var t=e.children,a=(0,i.useState)(1),n=a[0],s=a[1],r=(0,i.useState)(10),u=r[0],c=r[1];return l().createElement(o.Provider,{value:{page:n,perPage:u,setPage:s,setPerPage:c}},t)},c=function(e){var t=e.itemCount,a=e.variant,o=void 0===a?s.PaginationVariant.top:a,u=e.isCompact,c=e.titles,L=(0,n.__rest)(e,["itemCount","variant","isCompact","titles"]),d=r()||{},M=d.setPage,w=d.setPerPage,m=d.perPage,C=d.page,N=(0,i.useCallback)((function(e,t){M&&M(t)}),[]),g=(0,i.useCallback)((function(e,t){M&&M(1),w&&w(t)}),[]);return l().createElement(s.Pagination,(0,n.__assign)({itemCount:t,perPage:m,page:C,onSetPage:N,variant:o,onPerPageSelect:g,isCompact:u},L,{titles:c}))}},69887:(e,t,a)=>{a.d(t,{w:()=>d});var n=a(70655),i=a(75418),l=a.n(i),s=a(27577),o=a(76814),r=a(75381),u=(0,i.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),c=u.Provider,L=function(e){var t,a,s,c,L=(0,i.useContext)(u),d=L.activeRow,M=L.onRowClick,w=L.rowDataTestId,m=L.loggedInUser,C=e||{},N=C.trRef,g=C.className,v=C.rowProps,T=C.row,j=(0,n.__rest)(C,["trRef","className","rowProps","row"]),E=(null===(t=null==T?void 0:T.originalData)||void 0===t?void 0:t.status)===r.Od.DEPROVISION||(null===(a=null==T?void 0:T.originalData)||void 0===a?void 0:a.status)===r.Od.DELETED,p=m===(null===(s=null==T?void 0:T.originalData)||void 0===s?void 0:s.owner),S=E||!p,D=void 0===N?void 0:N;return l().createElement("tr",(0,n.__assign)({"data-testid":w,tabIndex:S?void 0:0,ref:D,className:(0,o.css)(g,"pf-c-table-row__item",E?"pf-m-disabled":p&&"pf-m-selectable",!S&&d&&d===(null===(c=null==T?void 0:T.originalData)||void 0===c?void 0:c.name)&&"pf-m-selected"),hidden:void 0!==(null==T?void 0:T.isExpanded)&&!(null==T?void 0:T.isExpanded),onClick:function(e){return!S&&M&&M(e,null==v?void 0:v.rowIndex,T)}},j))},d=function(e){var t=e.tableProps,a=e.tableHeaderProps,i=e.tableBodyProps,r=e.children,u=e.activeRow,d=e.onRowClick,M=e.rowDataTestId,w=e.loggedInUser,m=t.cells,C=t.rows,N=t.actionResolver,g=t.onSort,v=t.sortBy,T=t["aria-label"],j=t.variant,E=t.className,p=t.hasDefaultCustomRowWrapper,S=void 0!==p&&p,D=(0,n.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return S&&(D.rowWrapper=L),l().createElement(c,{value:{activeRow:u,onRowClick:d,rowDataTestId:M,loggedInUser:w}},l().createElement(s.Table,(0,n.__assign)({className:(0,o.css)(S&&"mas--streams-table-view__table",E),cells:m,variant:j,rows:C,"aria-label":T,actionResolver:N,onSort:g,sortBy:v},D),l().createElement(s.TableHeader,(0,n.__assign)({},a)),l().createElement(s.TableBody,(0,n.__assign)({},i)),r))}},93697:(e,t,a)=>{a.d(t,{L:()=>o});var n=a(70655),i=a(75418),l=a.n(i),s=a(84669),o=function(e){var t=e.toolbarProps,a=e.toggleGroupProps,i=e.toolbarItems,o=e.toggleGroupItems,r=t.id,u=t.clearAllFilters,c=t.collapseListedFiltersBreakpoint,L=void 0===c?"md":c,d=t.inset,M=(0,n.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return l().createElement(l().Fragment,null,l().createElement(s.Toolbar,(0,n.__assign)({id:r,clearAllFilters:u,inset:d,collapseListedFiltersBreakpoint:L},M),l().createElement(s.ToolbarContent,null,a&&l().createElement(s.ToolbarToggleGroup,(0,n.__assign)({},a,{toggleIcon:a.toggleIcon}),o),null==i?void 0:i.map((function(e,t){var a=e.key,i=void 0===a?"mas":a,o=e.variant,r=e.className,u=e.id,c=e.alignment,L=e.item,d=(0,n.__rest)(e,["key","variant","className","id","alignment","item"]);return l().createElement(s.ToolbarItem,(0,n.__assign)({key:"".concat(i,"-").concat(t),variant:o,className:r,id:u,alignment:c},d),L)})))))}},78261:(e,t,a)=>{a.d(t,{S:()=>n,G:()=>i});var n,i=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.UNAUTHORIZED_USER="KAFKAS-MGMT-4",e.DUPLICATE_INSTANCE_NAME="KAFKAS-MGMT-36",e.PREVIEW_KAFKA_INSTANCE_EXIST="KAFKAS-MGMT-24",e.INSUFFICIENT_QUOTA="KAFKAS-MGMT-120",e.FAILED_TO_CHECK_QUOTA="KAFKAS-MGMT-121",e.OWNER_DOES_NOT_EXIST="KAFKAS-MGMT-21"}(n||(n={}))},75381:(e,t,a)=>{a.d(t,{Od:()=>n.Od,ik:()=>n.ik,pf:()=>n.pf,JB:()=>n.JB,md:()=>n.md,Nw:()=>n.Nw,bv:()=>n.bv,Bh:()=>n.Bh,L0:()=>n.L0,o8:()=>n.o8,wx:()=>n.wx,vK:()=>n.vK,Qw:()=>n.Qw,E7:()=>n.E7,hm:()=>n.hm,SM:()=>i.S,G6:()=>i.G});var n=a(52648),i=(a(82519),a(78261))}}]);
