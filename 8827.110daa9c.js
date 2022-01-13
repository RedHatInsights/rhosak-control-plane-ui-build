"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8827],{4256:()=>{},43277:(e,t,a)=>{a.d(t,{p:()=>s});var n=a(223),i=a(75418),l=a.n(i),o=a(99421),r=a(52648),s=function(e){var t=e.isModalOpen,a=e.title,i=e.modalProps,s=e.confirmButtonProps,c=e.cancelButtonProps,u=e.handleModalToggle,d=e.textProps,L=e.children,m=e.selectedItemData,M=e.textInputProps,w=i||{},g=w.variant,v=void 0===g?o.ModalVariant.small:g,p=w.titleIconVariant,C=void 0===p?"warning":p,N=w["aria-label"],b=w.showClose,T=void 0===b||b,j=(0,n.__rest)(w,["variant","titleIconVariant","aria-label","showClose"]),y=s||{},E=y.id,x=void 0===E?"confirm__button":E,S=y.key,D=void 0===S?"confirm-button":S,I=y.variant,k=void 0===I?o.ButtonVariant.danger:I,A=y.onClick,_=y.isDisabled,h=y.label,z=void 0===h?"Delete":h,f=y.isLoading,P=(0,n.__rest)(y,["id","key","variant","onClick","isDisabled","label","isLoading"]),B=c||{},O=B.id,R=void 0===O?"cancel__button":O,U=B.key,G=void 0===U?'"cancel-button':U,Q=B.variant,V=void 0===Q?o.ButtonVariant.link:Q,Z=B.label,F=void 0===Z?"Cancel":Z,K=(0,n.__rest)(B,["id","key","variant","label"]),W=d||{},H=W.className,Y=void 0===H?"delete-item__modal--text":H,J=W.description,X=(0,n.__rest)(W,["className","description"]),q=M||{},$=q.label,ee=void 0===$?"":$,te=q.value,ae=q.onChange,ne=q.onKeyPress,ie=q.showTextInput,le=(0,n.__rest)(q,["label","value","onChange","onKeyPress","showTextInput"]);return l().createElement(o.Modal,(0,n.__assign)({variant:v,isOpen:t,"aria-label":N,title:a,titleIconVariant:C,showClose:T,onClose:u,appendTo:r.wx,actions:[l().createElement(o.Button,(0,n.__assign)({id:x,key:D,variant:k,onClick:function(){return A&&A(m)},isDisabled:_,isLoading:f},P),z),l().createElement(o.Button,(0,n.__assign)({id:R,key:G,variant:V,onClick:u},K),F)]},j),l().createElement(o.Text,(0,n.__assign)({className:Y,dangerouslySetInnerHTML:{__html:J||""}},X)),l().createElement((function(){return ie?l().createElement(l().Fragment,null,l().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:ee}}),l().createElement(o.TextInput,(0,n.__assign)({id:"name__input",name:"mas-name-input",type:"text",value:te,onChange:ae,onKeyPress:ne,autoFocus:!0},le))):l().createElement(l().Fragment,null)}),null),L)}},87842:(e,t,a)=>{a.d(t,{D:()=>s});var n=a(223),i=a(75418),l=a.n(i),o=a(99421),r=a(28962),s=function(e){var t=e.onClose,a=e.isLoading,i=void 0===a||a,s=e.drawerPanelContentProps,c=e.drawerHeaderProps,u=e.isExpanded,d=e.children,L=e.panelBodyContent,m=e.onExpand,M=e.notRequiredDrawerContentBackground,w=e["data-ouia-app-id"],g=e.inlineAlertMessage,v=s||{},p=v.widths,C=(0,n.__rest)(v,["widths"]),N=c||{},b=N.text,T=N.title,j=l().createElement(o.DrawerPanelContent,(0,n.__assign)({widths:p||{default:"width_50"}},C),i?l().createElement(r.yR,null):l().createElement(l().Fragment,null,l().createElement(o.DrawerHead,null,l().createElement(o.TextContent,null,(null==b?void 0:b.label)&&l().createElement(o.Text,{component:(null==b?void 0:b.component)||o.TextVariants.small,className:(null==b?void 0:b.className)||"pf-u-mb-0"},null==b?void 0:b.label),(null==T?void 0:T.value)&&l().createElement(o.Title,{headingLevel:(null==T?void 0:T.headingLevel)||"h2",size:(null==T?void 0:T.size)||o.TitleSizes.xl,className:(null==T?void 0:T.className)||"pf-u-mt-0"},null==T?void 0:T.value)),l().createElement(o.DrawerActions,null,l().createElement(o.DrawerCloseButton,{onClick:t}))),l().createElement(o.DrawerPanelBody,null,g,L)));return l().createElement(o.Drawer,{isExpanded:u,onExpand:m,"data-ouia-app-id":w,"data-testid":"mk--instance__drawer",className:"kas-drawer"},l().createElement(o.DrawerContent,{panelContent:j,className:M?"pf-m-no-background":""},l().createElement(o.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",d)))}},12973:(e,t,a)=>{a.d(t,{C:()=>M,j:()=>L});var n=a(223),i=a(75418),l=a.n(i),o=a(99421),r=a(20777),s=a(34558),c=a(5569),u=a(71070),d=a(84564);var L,m=a(38296);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(L||(L={}));var M=function(e){var t=e.titleProps,a=e.buttonProps,i=e.emptyStateIconProps,M=e.emptyStateProps,w=e.emptyStateBodyProps,g=e.children,v=a||{},p=v.variant,C=void 0===p?o.ButtonVariant.primary:p,N=v.onClick,b=(0,n.__rest)(v,["variant","onClick"]),T=t||{},j=T.title,y=(0,n.__rest)(T,["title"]),E=w||{},x=E.body,S=(0,n.__rest)(E,["body"]),D=M||{},I=D.variant,k=void 0===I?L.GettingStarted:I,A=D.className,_=(0,n.__rest)(D,["variant","className"]),h=function(){return l().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"})},z=function(){var e={};switch(k){case L.GettingStarted:e={variant:o.EmptyStateVariant.xl,icon:s.ZP,titleSize:o.TitleSizes["4xl"],headingLevel:"h1"};break;case L.NoAccess:e={variant:o.EmptyStateVariant.large,icon:c.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case L.NoItems:e={variant:o.EmptyStateVariant.large,icon:r.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case L.NoResult:e={variant:o.EmptyStateVariant.large,icon:u.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h2"};break;case L.UnexpectedError:e={variant:o.EmptyStateVariant.full,icon:d.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;case L.PageNotFound:e={variant:o.EmptyStateVariant.full,icon:h,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:k||o.EmptyStateVariant.full,icon:null==i?void 0:i.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),f=z.variant,P=z.icon,B=z.titleSize,O=z.headingLevel;return l().createElement(o.EmptyState,(0,n.__assign)({variant:f,className:(0,m.i)("pf-u-pt-2xl pf-u-pt-3xl-on-md",A)},_),l().createElement(o.EmptyStateIcon,(0,n.__assign)({icon:P},i)),j&&l().createElement(o.Title,(0,n.__assign)({headingLevel:O,size:B},y),j),x&&l().createElement(o.EmptyStateBody,(0,n.__assign)({},S),x),(null==a?void 0:a.title)&&l().createElement(o.Button,(0,n.__assign)({variant:C,onClick:N},b),null==a?void 0:a.title),g)}},8509:(e,t,a)=>{a(48090)},16846:(e,t,a)=>{a.d(t,{wu:()=>u,bN:()=>c,h0:()=>s});var n=a(223),i=a(75418),l=a.n(i),o=a(99421),r=(0,i.createContext)(void 0),s=function(){return(0,i.useContext)(r)},c=function(e){var t=e.children,a=(0,i.useState)(1),n=a[0],o=a[1],s=(0,i.useState)(10),c=s[0],u=s[1];return l().createElement(r.Provider,{value:{page:n,perPage:c,setPage:o,setPerPage:u}},t)},u=function(e){var t=e.itemCount,a=e.variant,r=void 0===a?o.PaginationVariant.top:a,c=e.isCompact,u=e.titles,d=(0,n.__rest)(e,["itemCount","variant","isCompact","titles"]),L=s()||{},m=L.setPage,M=L.setPerPage,w=L.perPage,g=L.page,v=(0,i.useCallback)((function(e,t){m&&m(t)}),[]),p=(0,i.useCallback)((function(e,t){m&&m(1),M&&M(t)}),[]);return l().createElement(o.Pagination,(0,n.__assign)({itemCount:t,perPage:w,page:g,onSetPage:v,variant:r,onPerPageSelect:p,isCompact:c},d,{titles:u}))}},69887:(e,t,a)=>{a.d(t,{w:()=>L});var n=a(223),i=a(75418),l=a.n(i),o=a(57294),r=a(38296),s=a(75381),c=(0,i.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),u=c.Provider,d=function(e){var t,a,o,u,d=(0,i.useContext)(c),L=d.activeRow,m=d.onRowClick,M=d.rowDataTestId,w=d.loggedInUser,g=e||{},v=g.trRef,p=g.className,C=g.rowProps,N=g.row,b=g.onClick,T=(0,n.__rest)(g,["trRef","className","rowProps","row","onClick"]),j=(null===(t=null==N?void 0:N.originalData)||void 0===t?void 0:t.status)===s.Od.DEPROVISION||(null===(a=null==N?void 0:N.originalData)||void 0===a?void 0:a.status)===s.Od.DELETED,y=w===(null===(o=null==N?void 0:N.originalData)||void 0===o?void 0:o.owner),E=j||!y,x=void 0===v?void 0:v;return l().createElement("tr",(0,n.__assign)({"data-testid":M,tabIndex:E?void 0:0,ref:x,className:(0,r.i)(p,"pf-c-table-row__item",j?"pf-m-disabled":y&&"pf-m-selectable",!E&&L&&L===(null===(u=null==N?void 0:N.originalData)||void 0===u?void 0:u.name)&&"pf-m-selected"),hidden:void 0!==(null==N?void 0:N.isExpanded)&&!(null==N?void 0:N.isExpanded),onClick:function(e){j||(b&&b(e),m&&m(e,null==C?void 0:C.rowIndex,N))}},T))},L=function(e){var t=e.tableProps,a=e.tableHeaderProps,i=e.tableBodyProps,s=e.children,c=e.activeRow,L=e.onRowClick,m=e.rowDataTestId,M=e.loggedInUser,w=t.cells,g=t.rows,v=t.actionResolver,p=t.onSort,C=t.sortBy,N=t["aria-label"],b=t.variant,T=t.className,j=t.hasDefaultCustomRowWrapper,y=void 0!==j&&j,E=(0,n.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return y&&(E.rowWrapper=d),l().createElement(u,{value:{activeRow:c,onRowClick:L,rowDataTestId:m,loggedInUser:M}},l().createElement(o.Table,(0,n.__assign)({className:(0,r.i)(y&&"mas--streams-table-view__table",T),cells:w,variant:b,rows:g,"aria-label":N,actionResolver:v,onSort:p,sortBy:C},E),l().createElement(o.TableHeader,(0,n.__assign)({},a)),l().createElement(o.TableBody,(0,n.__assign)({},i)),s))}},93697:(e,t,a)=>{a.d(t,{L:()=>r});var n=a(223),i=a(75418),l=a.n(i),o=a(99421),r=function(e){var t=e.toolbarProps,a=e.toggleGroupProps,i=e.toolbarItems,r=e.toggleGroupItems,s=t.id,c=t.clearAllFilters,u=t.collapseListedFiltersBreakpoint,d=void 0===u?"md":u,L=t.inset,m=(0,n.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return l().createElement(l().Fragment,null,l().createElement(o.Toolbar,(0,n.__assign)({id:s,clearAllFilters:c,inset:L,collapseListedFiltersBreakpoint:d,ouiaId:"toolbar"},m),l().createElement(o.ToolbarContent,null,a&&l().createElement(o.ToolbarToggleGroup,(0,n.__assign)({},a,{toggleIcon:a.toggleIcon}),r),null==i?void 0:i.map((function(e,t){var a=e.key,i=void 0===a?"mas":a,r=e.variant,s=e.className,c=e.id,u=e.alignment,d=e.item,L=(0,n.__rest)(e,["key","variant","className","id","alignment","item"]);return l().createElement(o.ToolbarItem,(0,n.__assign)({key:"".concat(i,"-").concat(t),variant:r,className:s,id:c,alignment:u},L),d)})))))}},78261:(e,t,a)=>{a.d(t,{S:()=>n,G:()=>i});var n,i=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.UNAUTHORIZED_USER="KAFKAS-MGMT-4",e.DUPLICATE_INSTANCE_NAME="KAFKAS-MGMT-36",e.PREVIEW_KAFKA_INSTANCE_EXIST="KAFKAS-MGMT-24",e.INSUFFICIENT_QUOTA="KAFKAS-MGMT-120",e.FAILED_TO_CHECK_QUOTA="KAFKAS-MGMT-121",e.OWNER_DOES_NOT_EXIST="KAFKAS-MGMT-21"}(n||(n={}))},75381:(e,t,a)=>{a.d(t,{Od:()=>n.Od,ik:()=>n.ik,pf:()=>n.pf,JB:()=>n.JB,md:()=>n.md,Nw:()=>n.Nw,bv:()=>n.bv,Bh:()=>n.Bh,L0:()=>n.L0,o8:()=>n.o8,wx:()=>n.wx,vK:()=>n.vK,Qw:()=>n.Qw,hm:()=>n.hm,SM:()=>i.S,G6:()=>i.G});var n=a(52648),i=(a(82519),a(78261))},52648:(e,t,a)=>{a.d(t,{bv:()=>o,Bh:()=>s,hm:()=>r,Od:()=>n,JB:()=>c,pf:()=>u,md:()=>L,o8:()=>m,Nw:()=>d,L0:()=>M,wx:()=>w,Qw:()=>g,vK:()=>v,ik:()=>i});var n,i,l=a(59093);!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(n||(n={})),function(e){e.eval="eval",e.standard="standard"}(i||(i={}));var o=[{value:"aws",label:"Amazon Web Services"}],r=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],s=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],c=32,u=10,d=50,L=5e3,m=function(e,t,a){var n=t;a&&a>0&&(e===(a%t!=0?Math.floor(a/t)+1:Math.floor(a/t))&&(n=a>t?a%t==0?t:a%t:a));return 0!==n?n:t},M=function(e,t){return e="string"==typeof e?new Date(e):e,(0,l.formatDistance)(e,new Date)+" "+t},w=function(){return document.getElementById("chrome-app-render-root")||document.body},g=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},v=function(e){for(var t=e.loadingCount,a=e.skeleton,n=e.length,i=[],l=[],o=0;o<n;o++)l.push({title:a});for(o=0;o<t;o++)i.push({cells:l});return i}}}]);
