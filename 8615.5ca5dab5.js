"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8615],{4256:()=>{},10705:(e,t,a)=>{if(a.d(t,{s:()=>r}),2143==a.j)var n=a(70655);var i=a(75418),l=a.n(i),o=a(84669),r=function(e){var t=e.alerts,a=e.onCloseAlert;return l().createElement(o.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,i=e.variant,r=e.title,s=e.description,c=e.dataTestId,u=(0,n.__rest)(e,["id","variant","title","description","dataTestId"]);return l().createElement(o.Alert,(0,n.__assign)({key:t,isLiveRegion:!0,variant:o.AlertVariant[i],variantLabel:"",title:r,actionClose:l().createElement(o.AlertActionCloseButton,{title:r,onClose:function(){return a(t)}}),"data-testid":c},u),s)})))}},48090:(e,t,a)=>{a.d(t,{o:()=>c});var n=a(75418),i=a.n(n),l=a(11593),o=a(84669),r=a(98068),s=a(35946),c=function(){var e=(0,l.useTranslation)().t;return i().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(s.C0,{emptyStateProps:{variant:s.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},i().createElement((function(){var t=(0,r.useHistory)();return i().createElement(o.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},35946:(e,t,a)=>{a.d(t,{uZ:()=>n.u,pf:()=>c,sw:()=>n.s,D5:()=>N,C0:()=>g,jU:()=>w,tV:()=>v.t,yR:()=>C,wu:()=>T,wR:()=>I,L5:()=>A,bN:()=>E,h0:()=>b});var n=a(71243),i=a(70655),l=a(75418),o=a.n(l),r=a(84669),s=a(52648),c=function(e){var t=e.isModalOpen,a=e.title,n=e.modalProps,l=e.confirmButtonProps,c=e.cancelButtonProps,u=e.handleModalToggle,d=e.textProps,m=e.children,L=e.selectedItemData,p=e.textInputProps,w=n||{},M=w.variant,g=void 0===M?r.ModalVariant.small:M,v=w.titleIconVariant,C=void 0===v?"warning":v,N=w["aria-label"],y=w.showClose,b=void 0===y||y,E=(0,i.__rest)(w,["variant","titleIconVariant","aria-label","showClose"]),T=l||{},j=T.id,S=void 0===j?"confirm__button":j,x=T.key,_=void 0===x?"confirm-button":x,D=T.variant,I=void 0===D?r.ButtonVariant.danger:D,A=T.onClick,k=T.isDisabled,f=T.label,h=void 0===f?"Delete":f,z=T.isLoading,P=(0,i.__rest)(T,["id","key","variant","onClick","isDisabled","label","isLoading"]),B=c||{},O=B.id,R=void 0===O?"cancel__button":O,U=B.key,G=void 0===U?'"cancel-button':U,V=B.variant,Z=void 0===V?r.ButtonVariant.link:V,F=B.label,Q=void 0===F?"Cancel":F,K=(0,i.__rest)(B,["id","key","variant","label"]),H=d||{},W=H.className,Y=void 0===W?"delete-item__modal--text":W,J=H.description,X=(0,i.__rest)(H,["className","description"]),q=p||{},$=q.label,ee=void 0===$?"":$,te=q.value,ae=q.onChange,ne=q.onKeyPress,ie=q.showTextInput,le=(0,i.__rest)(q,["label","value","onChange","onKeyPress","showTextInput"]);return o().createElement(r.Modal,(0,i.__assign)({variant:g,isOpen:t,"aria-label":N,title:a,titleIconVariant:C,showClose:b,onClose:u,appendTo:s.wx,actions:[o().createElement(r.Button,(0,i.__assign)({id:S,key:_,variant:I,onClick:function(){return A&&A(L)},isDisabled:k,isLoading:z},P),h),o().createElement(r.Button,(0,i.__assign)({id:R,key:G,variant:Z,onClick:u},K),Q)]},E),o().createElement(r.Text,(0,i.__assign)({className:Y,dangerouslySetInnerHTML:{__html:J||""}},X)),o().createElement((function(){return ie?o().createElement(o().Fragment,null,o().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:ee}}),o().createElement(r.TextInput,(0,i.__assign)({id:"name__input",name:"mas-name-input",type:"text",value:te,onChange:ae,onKeyPress:ne,autoFocus:!0},le))):o().createElement(o().Fragment,null)}),null),m)},u=a(20777),d=a(34558),m=a(5569),L=a(71070),p=a(84564);var w,M=a(76814);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(w||(w={}));var g=function(e){var t=e.titleProps,a=e.buttonProps,n=e.emptyStateIconProps,l=e.emptyStateProps,s=e.emptyStateBodyProps,c=e.children,g=a||{},v=g.variant,C=void 0===v?r.ButtonVariant.primary:v,N=g.onClick,y=(0,i.__rest)(g,["variant","onClick"]),b=t||{},E=b.title,T=(0,i.__rest)(b,["title"]),j=s||{},S=j.body,x=(0,i.__rest)(j,["body"]),_=l||{},D=_.variant,I=void 0===D?w.GettingStarted:D,A=_.className,k=(0,i.__rest)(_,["variant","className"]),f=function(){return o().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"})},h=function(){var e={};switch(I){case w.GettingStarted:e={variant:r.EmptyStateVariant.xl,icon:d.ZP,titleSize:r.TitleSizes["4xl"],headingLevel:"h1"};break;case w.NoAccess:e={variant:r.EmptyStateVariant.large,icon:m.ZP,titleSize:r.TitleSizes.xl,headingLevel:"h2"};break;case w.NoItems:e={variant:r.EmptyStateVariant.large,icon:u.ZP,titleSize:r.TitleSizes.xl,headingLevel:"h2"};break;case w.NoResult:e={variant:r.EmptyStateVariant.large,icon:L.ZP,titleSize:r.TitleSizes.lg,headingLevel:"h2"};break;case w.UnexpectedError:e={variant:r.EmptyStateVariant.full,icon:p.ZP,titleSize:r.TitleSizes.lg,headingLevel:"h1"};break;case w.PageNotFound:e={variant:r.EmptyStateVariant.full,icon:f,titleSize:r.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:I||r.EmptyStateVariant.full,icon:null==n?void 0:n.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),z=h.variant,P=h.icon,B=h.titleSize,O=h.headingLevel;return o().createElement(r.EmptyState,(0,i.__assign)({variant:z,className:(0,M.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",A)},k),o().createElement(r.EmptyStateIcon,(0,i.__assign)({icon:P},n)),E&&o().createElement(r.Title,(0,i.__assign)({headingLevel:O,size:B},T),E),S&&o().createElement(r.EmptyStateBody,(0,i.__assign)({},x),S),(null==a?void 0:a.title)&&o().createElement(r.Button,(0,i.__assign)({variant:C,onClick:N},y),null==a?void 0:a.title),c)},v=a(85167),C=function(e){var t=e.bullseyeProps,a=e.spinnerProps;return o().createElement(r.Bullseye,(0,i.__assign)({},t),o().createElement(r.Spinner,(0,i.__assign)({},a)))},N=function(e){var t=e.onClose,a=e.isLoading,n=void 0===a||a,l=e.drawerPanelContentProps,s=e.drawerHeaderProps,c=e.isExpanded,u=e.children,d=e.panelBodyContent,m=e.onExpand,L=e.notRequiredDrawerContentBackground,p=e["data-ouia-app-id"],w=e.inlineAlertMessage,M=l||{},g=M.widths,v=(0,i.__rest)(M,["widths"]),N=s||{},y=N.text,b=N.title,E=o().createElement(r.DrawerPanelContent,(0,i.__assign)({widths:g||{default:"width_50"}},v),n?o().createElement(C,null):o().createElement(o().Fragment,null,o().createElement(r.DrawerHead,null,o().createElement(r.TextContent,null,(null==y?void 0:y.label)&&o().createElement(r.Text,{component:(null==y?void 0:y.component)||r.TextVariants.small,className:(null==y?void 0:y.className)||"pf-u-mb-0"},null==y?void 0:y.label),(null==b?void 0:b.value)&&o().createElement(r.Title,{headingLevel:(null==b?void 0:b.headingLevel)||"h2",size:(null==b?void 0:b.size)||r.TitleSizes.xl,className:(null==b?void 0:b.className)||"pf-u-mt-0"},null==b?void 0:b.value)),o().createElement(r.DrawerActions,null,o().createElement(r.DrawerCloseButton,{onClick:t}))),o().createElement(r.DrawerPanelBody,null,w,d)));return o().createElement(r.Drawer,{isExpanded:c,onExpand:m,"data-ouia-app-id":p,"data-testid":"mk--instance__drawer"},o().createElement(r.DrawerContent,{panelContent:E,className:L?"pf-m-no-background":""},o().createElement(r.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",u)))};var y=(0,l.createContext)(void 0),b=function(){return(0,l.useContext)(y)},E=function(e){var t=e.children,a=(0,l.useState)(1),n=a[0],i=a[1],r=(0,l.useState)(10),s=r[0],c=r[1];return o().createElement(y.Provider,{value:{page:n,perPage:s,setPage:i,setPerPage:c}},t)},T=function(e){var t=e.itemCount,a=e.variant,n=void 0===a?r.PaginationVariant.top:a,s=e.isCompact,c=e.titles,u=(0,i.__rest)(e,["itemCount","variant","isCompact","titles"]),d=b()||{},m=d.setPage,L=d.setPerPage,p=d.perPage,w=d.page,M=(0,l.useCallback)((function(e,t){m&&m(t)}),[]),g=(0,l.useCallback)((function(e,t){m&&m(1),L&&L(t)}),[]);return o().createElement(r.Pagination,(0,i.__assign)({itemCount:t,perPage:p,page:w,onSetPage:M,variant:n,onPerPageSelect:g,isCompact:s},u,{titles:c}))},j=a(27577),S=a(75381),x=(0,l.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),_=x.Provider,D=function(e){var t=(0,l.useContext)(x),a=t.activeRow,n=t.onRowClick,r=t.rowDataTestId,s=t.loggedInUser,c=e||{},u=c.trRef,d=c.className,m=c.rowProps,L=c.row,p=(0,i.__rest)(c,["trRef","className","rowProps","row"]),w=m.rowIndex,g=L.isExpanded,v=L.originalData,C=(null==v?void 0:v.status)===S.Od.DEPROVISION||(null==v?void 0:v.status)===S.Od.DELETED,N=s===(null==v?void 0:v.owner),y=C||!N;return o().createElement("tr",(0,i.__assign)({"data-testid":r,tabIndex:y?void 0:0,ref:u,className:(0,M.css)(d,"pf-c-table-row__item",C?"pf-m-disabled":N&&"pf-m-selectable",!y&&a&&a===(null==v?void 0:v.name)&&"pf-m-selected"),hidden:void 0!==g&&!g,onClick:function(e){return!y&&n&&n(e,w,L)}},p))},I=function(e){var t=e.tableProps,a=e.tableHeaderProps,n=e.tableBodyProps,l=e.children,r=e.activeRow,s=e.onRowClick,c=e.rowDataTestId,u=e.loggedInUser,d=t.cells,m=t.rows,L=t.actionResolver,p=t.onSort,w=t.sortBy,g=t["aria-label"],v=t.variant,C=t.className,N=t.hasDefaultCustomRowWrapper,y=void 0!==N&&N,b=(0,i.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return y&&(b.rowWrapper=D),o().createElement(_,{value:{activeRow:r,onRowClick:s,rowDataTestId:c,loggedInUser:u}},o().createElement(j.Table,(0,i.__assign)({className:(0,M.css)(y&&"mas--streams-table-view__table",C),cells:d,variant:v,rows:m,"aria-label":g,actionResolver:L,onSort:p,sortBy:w},b),o().createElement(j.TableHeader,(0,i.__assign)({},a)),o().createElement(j.TableBody,(0,i.__assign)({},n)),l))},A=function(e){var t=e.toolbarProps,a=e.toggleGroupProps,n=e.toolbarItems,l=e.toggleGroupItems,s=t.id,c=t.clearAllFilters,u=t.collapseListedFiltersBreakpoint,d=void 0===u?"md":u,m=t.inset,L=(0,i.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return o().createElement(o().Fragment,null,o().createElement(r.Toolbar,(0,i.__assign)({id:s,clearAllFilters:c,inset:m,collapseListedFiltersBreakpoint:d},L),o().createElement(r.ToolbarContent,null,a&&o().createElement(r.ToolbarToggleGroup,(0,i.__assign)({},a,{toggleIcon:a.toggleIcon}),l),null==n?void 0:n.map((function(e,t){var a=e.key,n=void 0===a?"mas":a,l=e.variant,s=e.className,c=e.id,u=e.alignment,d=e.item,m=(0,i.__rest)(e,["key","variant","className","id","alignment","item"]);return o().createElement(r.ToolbarItem,(0,i.__assign)({key:n+"-"+t,variant:l,className:s,id:c,alignment:u},m),d)})))))};a(48090)},78261:(e,t,a)=>{a.d(t,{S:()=>n,G:()=>i});var n,i=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.UNAUTHORIZED_USER="KAFKAS-MGMT-4",e.DUPLICATE_INSTANCE_NAME="KAFKAS-MGMT-36",e.PREVIEW_KAFKA_INSTANCE_EXIST="KAFKAS-MGMT-24",e.INSUFFICIENT_QUOTA="KAFKAS-MGMT-120",e.FAILED_TO_CHECK_QUOTA="KAFKAS-MGMT-121",e.OWNER_DOES_NOT_EXIST="KAFKAS-MGMT-21"}(n||(n={}))},75381:(e,t,a)=>{a.d(t,{Od:()=>n.Od,ik:()=>n.ik,pf:()=>n.pf,JB:()=>n.JB,md:()=>n.md,Nw:()=>n.Nw,bv:()=>n.bv,Bh:()=>n.Bh,L0:()=>n.L0,o8:()=>n.o8,wx:()=>n.wx,vK:()=>n.vK,Qw:()=>n.Qw,E7:()=>n.E7,hm:()=>n.hm,SM:()=>i.S,G6:()=>i.G});var n=a(52648),i=(a(82519),a(78261))},82519:(e,t,a)=>{a.d(t,{j:()=>i});var n=a(75418);function i(e){n.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},52648:(e,t,a)=>{a.d(t,{mh:()=>o,bv:()=>r,Bh:()=>c,hm:()=>s,Od:()=>n,JB:()=>u,pf:()=>d,md:()=>L,o8:()=>p,Nw:()=>m,E7:()=>w,L0:()=>M,wx:()=>g,Qw:()=>v,vK:()=>C,ik:()=>i});var n,i,l=a(72633);function o(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(n||(n={})),function(e){e.eval="eval",e.standard="standard"}(i||(i={}));var r=[{value:"aws",label:"Amazon Web Services"}],s=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],c=[{value:"us-east-1",label:"US East, N. Virginia"}],u=32,d=10,m=50,L=5e3,p=function(e,t,a){var n=t;a&&a>0&&(e===(a%t!=0?Math.floor(a/t)+1:Math.floor(a/t))&&(n=a>t?a%t==0?t:a%t:a));return 0!==n?n:t},w=function(e,t,a){void 0===a&&(a="asc");return null==e?void 0:e.sort((function(e,n){if(!Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(n,t))return 0;var i="string"==typeof e[t]?e[t].toUpperCase():e[t],l="string"==typeof n[t]?n[t].toUpperCase():n[t],o=0;return i>l?o=1:i<l&&(o=-1),"desc"===a?-1*o:o}))},M=function(e,t){return e="string"==typeof e?new Date(e):e,(0,l.formatDistance)(e,new Date)+" "+t},g=function(){return document.getElementById("chrome-app-render-root")||document.body},v=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},C=function(e){for(var t=e.loadingCount,a=e.skeleton,n=e.length,i=[],l=[],o=0;o<n;o++)l.push({title:a});for(o=0;o<t;o++)i.push({cells:l});return i}}}]);
