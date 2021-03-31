/*! For license information please see 233.b9b35757.js.LICENSE.txt */
(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[233,655,230,512],{35183:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(70655),a=r.__importStar(n(48121));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={})),t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:l=0,width:c,height:s,svgPath:u}){var d;return(d=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:o,color:i,title:d,noVerticalAlign:m}=e,p=r.__rest(e,["size","color","title","noVerticalAlign"]),f=Boolean(d),v=t.getSize(o),_=-.125*Number.parseFloat(v),g=m?null:{verticalAlign:`${_}em`},y=[n,l,c,s].join(" ");return a.createElement("svg",Object.assign({style:g,fill:i,height:v,width:v,viewBox:y,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},p),f&&a.createElement("title",{id:this.id},d),a.createElement("path",{d:u}))}}).displayName=e,d.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},d}},84564:(e,t,n)=>{"use strict";t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},690:(e,t,n)=>{"use strict";t.zS={name:"KeyIcon",height:1024,width:1024,svgPath:"M802,320 C748.980664,320 706,277.019336 706,224 C706,170.980664 748.980664,128 802,128 C855.019336,128 898,170.980664 898,224 C898,277.019336 855.019336,320 802,320 M704,0 C527.3,0 384,143.3 384,320 C383.937788,357.490503 390.505571,394.696657 403.4,429.9 L0,824.1 L0,1024 L192,1024 L192,896 L320,896 L320,768 L448,768 L597,622 C596.906403,621.881923 596.838304,621.745723 596.8,621.6 C631.220126,633.811107 667.47802,640.034477 704,640 C880.7,640 1024,496.7 1024,320 C1024,143.3 880.7,0 704,0",yOffset:0,xOffset:0},t._m=n(35183).createIcon(t.zS),t.ZP=t._m},5569:(e,t,n)=>{"use strict";t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},34558:(e,t,n)=>{"use strict";t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},76831:function(e,t,n){e.exports=function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var t={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return e.locale(t,null,!0),t}(n(82420))},96888:()=>{},28764:()=>{},46795:()=>{},64514:()=>{},57706:()=>{},9995:(e,t,n)=>{"use strict";n.d(t,{G:()=>a});var r=n(48121),a=n.n(r)().createContext({basePath:void 0})},42603:(e,t,n)=>{"use strict";n.d(t,{V:()=>a});var r=n(48121),a=n.n(r)().createContext(void 0)},10705:(e,t,n)=>{"use strict";n.d(t,{s:()=>i});var r=n(48121),a=n.n(r),o=n(25399);function i(e){var t=e.alerts,n=e.onCloseAlert;return a().createElement(o.AlertGroup,{isToast:!0},t.map((function(e){var t=e.key,r=e.variant,i=e.title,l=e.body,c=e.dataTestId;return a().createElement(o.Alert,{key:t,isLiveRegion:!0,variant:o.AlertVariant[r],variantLabel:"",title:i,actionClose:a().createElement(o.AlertActionCloseButton,{title:i,onClose:function(){return n(t)}}),"data-testid":c},l)})))}},99229:(e,t,n)=>{"use strict";n.d(t,{wP:()=>c,Z7:()=>s,uZ:()=>u});var r=n(70655),a=n(48121),o=n.n(a),i=n(10705),l=n(25399),c=(0,a.createContext)({addAlert:function(){}}),s=function(){return(0,a.useContext)(c)},u=function(e){var t=e.children,n=(0,a.useState)([]),s=n[0],u=n[1],d=(0,a.useState)([]),m=d[0],p=d[1];(0,a.useEffect)((function(){var e=m.map((function(e){return e.key})),t=s.filter((function(t){return!e.includes(t.key)})).map((function(e){var t=setTimeout((function(){return f(e.key)}),8e3);return{key:e.key,timeOut:t}}));return p((0,r.__spreadArray)((0,r.__spreadArray)([],m),t)),function(){return m.forEach((function(e){return clearTimeout(e.timeOut)}))}}),[s]);var f=function(e){u((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key!==e})))})),p((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})))}))};return o().createElement(c.Provider,{value:{addAlert:function(e,t,n,a){void 0===t&&(t=l.AlertVariant.default),u((0,r.__spreadArray)((0,r.__spreadArray)([],s),[{key:(new Date).getTime(),title:e,variant:t,body:n,dataTestId:a}]))}}},o().createElement(i.s,{alerts:s,onCloseAlert:f}),t)}},93564:(e,t,n)=>{"use strict";n.d(t,{wP:()=>r.wP,uZ:()=>r.uZ,Z7:()=>r.Z7});var r=n(99229);n(10705)},7562:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(70655),a=n(48121),o=n.n(a),i=n(25399),l=function(e){var t=e.isModalOpen,n=e.title,a=e.modalProps,l=e.confirmButtonProps,c=e.cancelButtonProps,s=e.handleModalToggle,u=e.textProps,d=e.children,m=e.selectedItemData,p=void 0===m?"":m,f=a||{},v=f.variant,_=void 0===v?i.ModalVariant.small:v,g=f.titleIconVariant,y=void 0===g?"warning":g,h=f["aria-label"],b=f.showClose,E=void 0===b||b,w=(0,r.__rest)(f,["variant","titleIconVariant","aria-label","showClose"]),C=l||{},P=C.id,S=void 0===P?"mas--confirm__button":P,k=C.key,T=void 0===k?"confirm-button":k,x=C.variant,I=void 0===x?i.ButtonVariant.danger:x,O=C.onClick,D=C.isDisabled,R=C.label,N=void 0===R?"Delete":R,L=(0,r.__rest)(C,["id","key","variant","onClick","isDisabled","label"]),A=c||{},B=A.id,M=void 0===B?"mas--cancel__button":B,V=A.key,z=void 0===V?'"cancel-button':V,Y=A.variant,j=void 0===Y?i.ButtonVariant.link:Y,H=(A.onClick,A.isDisabled,A.label),Z=void 0===H?"Cancel":H,F=(0,r.__rest)(A,["id","key","variant","onClick","isDisabled","label"]),G=u||{},U=G.className,W=void 0===U?"mas--delete-item__modal--text":U,q=G.description,K=(0,r.__rest)(G,["className","description"]);return o().createElement(i.Modal,(0,r.__assign)({variant:_,isOpen:t,"aria-label":h,title:n,titleIconVariant:y,showClose:E,onClose:s,actions:[o().createElement(i.Button,(0,r.__assign)({id:S,key:T,variant:I,onClick:function(){return O&&O(p)},isDisabled:D},L),N),o().createElement(i.Button,(0,r.__assign)({id:M,key:z,variant:j,onClick:s},F),Z)]},w),q&&o().createElement(i.Text,(0,r.__assign)({className:W,dangerouslySetInnerHTML:{__html:q||""}},K)),d)}},53803:(e,t,n)=>{"use strict";n.d(t,{A:()=>r.A});var r=n(7562)},98034:(e,t,n)=>{"use strict";n.d(t,{D:()=>c});var r=n(70655),a=n(48121),o=n.n(a),i=n(25399),l=n(48784),c=function(e){var t=e.onClose,n=e.isLoading,a=void 0===n||n,c=e.drawerPanelContentProps,s=e.drawerHeaderProps,u=e.isExpanded,d=e.children,m=e.panelBodyContent,p=e.onExpand,f=e.notRequiredDrawerContentBackground,v=e["data-ouia-app-id"],_=c||{},g=_.widths,y=(0,r.__rest)(_,["widths"]),h=s||{},b=h.text,E=h.title,w=o().createElement(i.DrawerPanelContent,(0,r.__assign)({widths:g||{default:"width_50"}},y),a?o().createElement(l.yR,null):o().createElement(o().Fragment,null,o().createElement(i.DrawerHead,null,o().createElement(i.TextContent,null,(null==b?void 0:b.label)&&o().createElement(i.Text,{component:(null==b?void 0:b.component)||i.TextVariants.small,className:(null==b?void 0:b.className)||"pf-u-mb-0"},null==b?void 0:b.label),(null==E?void 0:E.value)&&o().createElement(i.Title,{headingLevel:(null==E?void 0:E.headingLevel)||"h2",size:(null==E?void 0:E.size)||i.TitleSizes.xl,className:(null==E?void 0:E.className)||"pf-u-mt-0"},null==E?void 0:E.value)),o().createElement(i.DrawerActions,null,o().createElement(i.DrawerCloseButton,{onClick:t}))),o().createElement(i.DrawerPanelBody,null,m)));return o().createElement(i.Drawer,{isExpanded:u,onExpand:p,"data-ouia-app-id":v},o().createElement(i.DrawerContent,{panelContent:w,className:f?"pf-m-no-background":""},o().createElement(i.DrawerContentBody,null," ",d)))}},34747:(e,t,n)=>{"use strict";n.d(t,{S:()=>u});var r=n(48121),a=n.n(r),o=n(5977),i=n(13006),l=n(25399),c=n(84564),s=n(48784),u=function(e){var t=e.updateState,n=(0,i.useTranslation)().t;return a().createElement(l.PageSection,{padding:{default:"noPadding"}},a().createElement(s.C0,{emptyStateProps:{variant:l.EmptyStateVariant.full},emptyStateIconProps:{icon:c.ZP,className:"icon-color"},titleProps:{title:n("common.something_went_wrong"),headingLevel:"h1",size:l.TitleSizes.lg},emptyStateBodyProps:{body:n("unexpected_error")}},a().createElement((function(){var e=(0,o.k6)();return a().createElement(l.Button,{onClick:function(){t(!1),e.push("/")}},n("go_to_kafka_instances"))}),null)))}},57972:(e,t,n)=>{"use strict";n.d(t,{L:()=>s});var r=n(48121),a=n.n(r),o=n(25399),i=n(690),l=(n(46795),n(96888),n(28764),n(13006)),c=n(48784),s=(n(57706),function(e){var t=e.isOpen,n=e.setIsOpen,s=e.credential,u=e.setCredential,d=e.isLoading,m=e.title,p=(0,l.useTranslation)().t,f=(0,r.useState)(!1),v=f[0],_=f[1],g=(0,r.useState)(!1),y=g[0],h=g[1],b=(0,r.useState)(""),E=(b[0],b[1],function(){n(!1),_(!v),u(void 0),h(!1)}),w=a().createElement(a().Fragment,null,a().createElement(c.C0,{emptyStateProps:{variant:o.EmptyStateVariant.large},emptyStateIconProps:{icon:i.ZP},titleProps:{title:p("credentials_successfully_generated"),headingLevel:"h2",size:o.TitleSizes.lg}},a().createElement(o.TextContent,null,a().createElement(o.Text,{component:o.TextVariants.small,className:"pf-u-mt-lg"},p("connect_to_the_kafka_instance_using_this_clientID_and_secret"))),a().createElement(o.InputGroup,{className:"pf-u-mt-lg"},a().createElement(o.InputGroupText,{className:"mk--generate-credential__empty-state--input-group"},p("client_id")),a().createElement(o.ClipboardCopy,{isReadOnly:!0,className:"pf-u-w-100","data-testid":"modalCredentials-copyClientID",textAriaLabel:p("client_id")},null==s?void 0:s.clientID)),a().createElement(o.InputGroup,{className:"pf-u-mt-md"},a().createElement(o.InputGroupText,{className:"mk--generate-credential__empty-state--input-group"},p("common.client_secret")),a().createElement(o.ClipboardCopy,{isReadOnly:!0,className:"pf-u-w-100","data-testid":"modalCredentials-copyClientSecret",textAriaLabel:p("common.client_secret")},null==s?void 0:s.clientSecret)),a().createElement(o.TextContent,null,a().createElement(o.Text,{component:o.TextVariants.small,className:"pf-u-mt-lg"},p("create_service_account_credentials_warning_message"))),a().createElement(o.Bullseye,{className:"pf-u-mt-lg"},a().createElement(o.Checkbox,{label:p("client_id_confirmation_checkbox_label"),isChecked:y,onChange:function(e){h(e)},id:"check-1",name:"check1"})),a().createElement(o.Button,{variant:"primary",isDisabled:!y,onClick:E,"data-testid":"modalCredentials-buttonClose"},p("close"))));return a().createElement(o.Modal,{variant:o.ModalVariant.medium,title:m||p("serviceAccount.create_a_service_account"),isOpen:t,onClose:E,showClose:!1},d?a().createElement(c.yR,null):w)})},94179:(e,t,n)=>{"use strict";n.d(t,{L:()=>r.L});var r=n(57972)},63477:(e,t,n)=>{"use strict";n.d(t,{y:()=>l});var r=n(70655),a=n(48121),o=n.n(a),i=n(25399),l=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return o().createElement(i.Bullseye,(0,r.__assign)({},t),o().createElement(i.Spinner,(0,r.__assign)({},n)))}},48090:(e,t,n)=>{"use strict";n(48121),n(13006),n(25399),n(48784)},8509:(e,t,n)=>{"use strict";n(48090)},16846:(e,t,n)=>{"use strict";n.d(t,{w:()=>c});var r=n(70655),a=n(48121),o=n.n(a),i=n(5977),l=n(25399),c=function(e){var t=e.page,n=e.perPage,c=void 0===n?10:n,s=e.itemCount,u=e.variant,d=void 0===u?l.PaginationVariant.top:u,m=e.isCompact,p=e.titles,f=(0,r.__rest)(e,["page","perPage","itemCount","variant","isCompact","titles"]),v=(0,i.k6)(),_=(0,i.TH)(),g=new URLSearchParams(_.search),y=(0,a.useCallback)((function(e,t){g.set(e,t.toString())}),[g]),h=(0,a.useCallback)((function(e,t){y("page",t.toString()),v.push({search:g.toString()})}),[y,v,g]),b=(0,a.useCallback)((function(e,t){y("page","1"),y("perPage",t.toString()),v.push({search:g.toString()})}),[y,v,g]);return o().createElement(l.Pagination,(0,r.__assign)({itemCount:s,perPage:c,page:t,onSetPage:h,variant:d,onPerPageSelect:b,isCompact:m},f,{titles:p}))}},69887:(e,t,n)=>{"use strict";n.d(t,{w:()=>m});var r=n(70655),a=n(48121),o=n.n(a),i=n(70726),l=n(26378),c=n(75381),s=(0,a.createContext)({activeRow:"",onRowClick:function(){}}),u=s.Provider,d=function(e){var t=(0,a.useContext)(s),n=t.activeRow,i=t.onRowClick,u=t.rowDataTestId,d=e||{},m=d.trRef,p=d.className,f=d.rowProps,v=d.row,_=(0,r.__rest)(d,["trRef","className","rowProps","row"]),g=f.rowIndex,y=v.isExpanded,h=v.originalData,b=(null==h?void 0:h.status)===c.Od.DEPROVISION;return o().createElement("tr",(0,r.__assign)({"data-testid":u,tabIndex:0,ref:m,className:(0,l.css)(p,"pf-c-table-row__item",b?"pf-m-disabled":"pf-m-selectable",n&&n===(null==h?void 0:h.name)&&"pf-m-selected"),hidden:void 0!==y&&!y,onClick:function(e){return!b&&i&&i(e,g,v)}},_))},m=function(e){var t=e.tableProps,n=e.tableHeaderProps,a=e.tableBodyProps,c=e.children,s=e.activeRow,m=e.onRowClick,p=e.rowDataTestId,f=t.cells,v=t.rows,_=t.actionResolver,g=t.onSort,y=t.sortBy,h=t["aria-label"],b=t.variant,E=t.className,w=(t.rowWrapper,t.hasDefaultCustomRowWrapper),C=void 0!==w&&w,P=(0,r.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","rowWrapper","hasDefaultCustomRowWrapper"]);return C&&(P.rowWrapper=d),o().createElement(u,{value:{activeRow:s,onRowClick:m,rowDataTestId:p}},o().createElement(i.Table,(0,r.__assign)({className:(0,l.css)("mas--streams-table-view__table",E),cells:f,variant:b,rows:v,"aria-label":h,actionResolver:_,onSort:g,sortBy:y},P),o().createElement(i.TableHeader,(0,r.__assign)({},n)),o().createElement(i.TableBody,(0,r.__assign)({},a)),c))}},93697:(e,t,n)=>{"use strict";n.d(t,{L:()=>l});var r=n(70655),a=n(48121),o=n.n(a),i=n(25399),l=function(e){var t=e.toolbarProps,n=e.toggleGroupProps,a=e.toolbarItems,l=e.toggleGroupItems,c=t.id,s=t.clearAllFilters,u=t.collapseListedFiltersBreakpoint,d=void 0===u?"md":u,m=t.inset,p=(0,r.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]),f=n.toggleIcon,v=n.breakpoint,_=void 0===v?"md":v,g=(0,r.__rest)(n,["toggleIcon","breakpoint"]);return o().createElement(o().Fragment,null,o().createElement(i.Toolbar,(0,r.__assign)({id:c,clearAllFilters:s,inset:m,collapseListedFiltersBreakpoint:d},p),o().createElement(i.ToolbarContent,null,o().createElement(i.ToolbarToggleGroup,(0,r.__assign)({toggleIcon:f,breakpoint:_},g),l),null==a?void 0:a.map((function(e,t){var n=e.key,a=void 0===n?"mas":n,l=e.variant,c=e.className,s=e.id,u=e.alignment,d=e.item,m=(0,r.__rest)(e,["key","variant","className","id","alignment","item"]);return o().createElement(i.ToolbarItem,(0,r.__assign)({key:a+"-"+t,variant:l,className:c,id:s,alignment:u},m),d)})))))}},48784:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>r.uZ,AX:()=>a.A,D5:()=>f.D,C0:()=>d,nW:()=>h,yR:()=>p.y,wu:()=>v.w,wR:()=>_.w,L5:()=>g.L,Z7:()=>r.Z7});var r=n(93564),a=n(53803),o=n(70655),i=n(48121),l=n.n(i),c=n(25399),s=n(20777),u=n(26378),d=(n(64514),function(e){var t=e.titleProps,n=e.buttonProps,r=e.emptyStateIconProps,a=e.emptyStateProps,i=e.emptyStateBodyProps,d=e.children,m=n||{},p=m.variant,f=void 0===p?c.ButtonVariant.primary:p,v=m.onClick,_=(0,o.__rest)(m,["variant","onClick"]),g=r||{},y=g.icon,h=void 0===y?s.ZP:y,b=(0,o.__rest)(g,["icon"]),E=t||{},w=E.title,C=E.size,P=void 0===C?c.TitleSizes.lg:C,S=E.headingLevel,k=void 0===S?"h1":S,T=(0,o.__rest)(E,["title","size","headingLevel"]),x=i||{},I=x.body,O=(0,o.__rest)(x,["body"]),D=a||{},R=D.className,N=(0,o.__rest)(D,["className"]);return l().createElement(l().Fragment,null,l().createElement(c.EmptyState,(0,o.__assign)({className:(0,u.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",R)},N),l().createElement(c.EmptyStateIcon,(0,o.__assign)({icon:h},b)),w&&l().createElement(c.Title,(0,o.__assign)({headingLevel:k,size:P},T),w),I&&l().createElement(c.EmptyStateBody,(0,o.__assign)({},O),I),(null==n?void 0:n.title)&&l().createElement(c.Button,(0,o.__assign)({variant:f,onClick:v},_),null==n?void 0:n.title),d))}),m=n(34747),p=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.updateState=function(e){t.setState({hasError:e})},t}(0,o.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){return this.state.hasError?l().createElement(m.S,{updateState:this.updateState}):this.props.children}}(i.Component),n(63477)),f=n(98034),v=n(16846),_=n(69887),g=n(93697),y=n(5569),h=function(e){var t=e.pageSection,n=e.titleProps,r=e.emptyStateProps,a=e.emptyStateIconProps,i=e.emptyStateBodyProps,s=e.buttonProps,u=t||{},m=u.variant,p=void 0===m?c.PageSectionVariants.default:m,f=u.padding,v=(0,o.__rest)(u,["variant","padding"]);return l().createElement(c.PageSection,(0,o.__assign)({variant:p},v,{padding:f||{default:"noPadding"}}),l().createElement(d,{titleProps:n,emptyStateProps:r,emptyStateIconProps:(0,o.__assign)({icon:(null==a?void 0:a.icon)||y.ZP},a),emptyStateBodyProps:i,buttonProps:s}))};n(8509),n(94179)},14207:(e,t,n)=>{"use strict";n.d(t,{R:()=>c});var r=n(48121),a=n.n(r),o=n(13006),i=n(25399),l=(n(34558),n(5569),n(48784),n(55406)),c=function(e){e.getConnectToInstancePath,(0,o.useTranslation)().t;var t=(0,r.useState)(!1),n=t[0],c=t[1],s=(0,r.useState)(!1),u=(s[0],s[1],(0,r.useState)(void 0)),d=u[0],m=u[1],p=(0,r.useState)(!1),f=p[0];p[1];return a().createElement(a().Fragment,null,a().createElement(l.O,{isExpanded:n,isLoading:void 0===d,notRequiredDrawerContentBackground:f,onClose:function(){c(!1)}},a().createElement(i.PageSection,{variant:i.PageSectionVariants.light},a().createElement(l.m,{name:"",onConnectToRegistry:function(){c(!0),m("test-data")},onDeleteRegistry:function(){}}))))}},61233:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(48121),a=n.n(r),o=n(14207),i=n(42603),l=n(93564),c=n(9995),s=n(78800),u=n(13006);const d=function(e){var t=e.getUsername,n=e.getToken,r=e.addAlert,d=e.basePath,m=e.getConnectToInstancePath,p={getToken:n,getUsername:t},f={addAlert:r};return a().createElement(u.I18nextProvider,{i18n:s.Z},a().createElement(c.G.Provider,{value:{basePath:d}},a().createElement(l.wP.Provider,{value:f},a().createElement(i.V.Provider,{value:p},a().createElement(o.R,{getConnectToInstancePath:m})))))}},1913:(e,t,n)=>{"use strict";n.d(t,{q:()=>l});var r=n(48121),a=n.n(r),o=n(25399),i=n(13006),l=function(e){e.mainToggle;var t=(0,i.useTranslation)().t,n=[{title:t("serviceRegistry.tab_resources_content_1"),code:"https://registry.my-domain.com/api"},{title:t("serviceRegistry.tab_resources_content_2"),code:"https://mass-sso.url"},{title:t("common.client_key"),code:"srvc-reg-7f7f8f7f87f-3634-c2e-879877988787"},{title:t("common.client_secret"),code:"2d668686876-8768786-8766686-8787jhjh88"}];return a().createElement("div",{className:"mas--details__drawer--tab-content"},a().createElement(o.TextContent,{className:"pf-u-pb-sm"},a().createElement(o.Text,{component:o.TextVariants.small},t("serviceRegistry.tab_resources_title_info"))),a().createElement(o.Form,null,null==n?void 0:n.map((function(e,n){var r=e.title,i=e.code;return a().createElement(o.FormGroup,{label:r,fieldId:"copy-clipboard-"+n},a().createElement(o.ClipboardCopy,{id:"copy-clipboard-"+n,hoverTip:t("common.copy_clipboard"),clickTip:t("common.copy_clipboard_successfully"),textAriaLabel:r,isReadOnly:!0},i))}))))}},67904:(e,t,n)=>{"use strict";n.d(t,{n:()=>c});var r=n(48121),a=n.n(r),o=n(25399),i=n(89247),l=n(13006),c=function(){var e=(0,l.useTranslation)().t,t=[{type:e("common.java"),code:"code goes here"},{type:e("common.mvn"),code:"code goes here"},{type:e("common.cli"),code:"code goes here"},{type:e("common.curl"),code:"code goes here"}];return a().createElement(a().Fragment,null,a().createElement("div",{className:"mas--details__drawer--tab-content"},a().createElement(o.TextContent,{className:"pf-u-pb-sm"},a().createElement(o.Text,{component:o.TextVariants.small},e("serviceRegistry.tab_sample_code_title_info"))),null==t?void 0:t.map((function(e){var t=e.type,n=e.code;return a().createElement("div",{className:"pf-c-code-editor pf-m-read-only"},a().createElement("div",{className:"pf-c-code-editor__header pf-u-pt-lg"},a().createElement("div",{className:"pf-c-code-editor__controls"},a().createElement(o.Button,{variant:"control","aria-label":"Action"},a().createElement(i.CopyIcon,null))),a().createElement("div",{className:"pf-c-code-editor__tab"},a().createElement("span",{className:"pf-c-code-editor__tab-text"},t))),a().createElement("div",{className:"pf-c-code-editor__main"},a().createElement("div",{className:"pf-c-code-editor__code"},a().createElement("pre",{className:"pf-c-code-editor__code-pre"},n))))}))))}},7671:(e,t,n)=>{"use strict";n.d(t,{O:()=>u});var r=n(48121),a=n.n(r),o=n(13006),i=n(25399),l=n(48784),c=n(1913),s=n(67904),u=function(e){var t=e.isExpanded,n=e.isLoading,u=e.onClose,d=e["data-ouia-app-id"],m=e.children,p=e.notRequiredDrawerContentBackground,f=(0,o.useTranslation)().t,v=(0,r.useState)(0),_=v[0],g=v[1],y=a().createElement(i.Tabs,{activeKey:_,onSelect:function(e,t){g(t)}},a().createElement(i.Tab,{eventKey:0,title:a().createElement(i.TabTitleText,null,f("common.resources")),"data-testid":"serviceRegustry-tabResources"},a().createElement(c.q,null)),a().createElement(i.Tab,{eventKey:1,title:a().createElement(i.TabTitleText,null,f("common.sample_code")),"data-testid":"serviceRegistry-tabSampleCode"},a().createElement(s.n,null)));return a().createElement(l.D5,{isExpanded:t,isLoading:n,onClose:u,panelBodyContent:y,drawerHeaderProps:{text:{label:f("serviceRegistry.connection_details")},title:{value:name,headingLevel:"h1"}},"data-ouia-app-id":d,notRequiredDrawerContentBackground:p},m)}},86646:(e,t,n)=>{"use strict";n.d(t,{O:()=>r.O});var r=n(7671)},6446:(e,t,n)=>{"use strict";n.d(t,{m:()=>l});var r=n(48121),a=n.n(r),o=n(13006),i=n(25399),l=function(e){var t=e.name,n=e.onConnectToRegistry,l=e.onDeleteRegistry,c=(0,o.useTranslation)().t,s=(0,r.useState)(),u=s[0],d=s[1],m=[a().createElement(i.DropdownItem,{key:"connect-registry",onClick:function(){return n(t)}},c("serviceRegistry.connect_to_registry")),a().createElement(i.DropdownItem,{key:"delete-registry",onClick:function(){return l(t)}},c("serviceRegistry.delete_registry"))];return a().createElement(i.Level,null,a().createElement(i.LevelItem,null,a().createElement(i.TextContent,null,a().createElement(i.Text,{component:"h1"}," ",c("serviceRegistry.service_registry")))),a().createElement(i.LevelItem,null,a().createElement(i.Dropdown,{onSelect:function(){d(!u)},toggle:a().createElement(i.KebabToggle,{onToggle:function(e){d(e)},id:"toggle-service-registry"}),isOpen:u,isPlain:!0,dropdownItems:m,position:i.DropdownPosition.right})))}},5862:(e,t,n)=>{"use strict";n.d(t,{m:()=>r.m});var r=n(6446)},55406:(e,t,n)=>{"use strict";n.d(t,{m:()=>r.m,O:()=>a.O});var r=n(5862),a=n(86646)},78261:(e,t,n)=>{"use strict";n.d(t,{S:()=>r,G:()=>a});var r,a=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.UNAUTHORIZED_USER="MGD-SERV-API-4",e.DUPLICATE_INSTANCE_NAME="MGD-SERV-API-36"}(r||(r={}))},75381:(e,t,n)=>{"use strict";n.d(t,{Od:()=>r.Od,pf:()=>r.pf,md:()=>r.md,lt:()=>r.lt,Nw:()=>r.Nw,bv:()=>r.bv,Bh:()=>r.Bh,o8:()=>r.o8,wu:()=>r.wu,hm:()=>r.hm,SM:()=>a.S,G6:()=>a.G});var r=n(52648),a=(n(82519),n(78261))},82519:(e,t,n)=>{"use strict";n(48121)},52648:(e,t,n)=>{"use strict";var r;n.d(t,{bv:()=>a,Bh:()=>i,hm:()=>o,Od:()=>r,JB:()=>l,wu:()=>m,pf:()=>c,md:()=>d,o8:()=>p,Nw:()=>s,lt:()=>u}),function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision"}(r||(r={}));var a=[{value:"aws",label:"Amazon Web Services"}],o=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"}],i=[{value:"us-east-1",label:"US East, N. Virginia"}],l=32,c=10,s=50,u=255,d=5e3,m=function(e){return void 0!==e&&""!==e},p=function(e,t,n){var r=t;n&&n>0&&(e===(n%t!=0?Math.floor(n/t)+1:Math.floor(n/t))&&(r=n>t?n%t==0?t:n%t:n));return 0!==r?r:t}},78800:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(51550),a=n.n(r),o=n(13006),i=n(13096),l=n.n(i),c=n(76130),s=n.n(c),u=n(72300),d=n.n(u),m=n(82420),p=n.n(m),f=(n(76831),a().createInstance()),v="true"===new URLSearchParams(window.location.search).get("pseudolocalization");f.use(new(d())({enabled:v,wrapped:!0})).use(s()).use(l()).use(o.initReactI18next).init({backend:{loadPath:n.p+"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,n,r){return r=r||{},"number"===t?new Intl.NumberFormat(n).format(e):e instanceof Date?"fromNow"===t?p()(e).fromNow(!0===r.omitSuffix):p()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,t,n){}},(function(){p().locale(a().language)})),f.on("languageChanged",(function(e){p().locale(e)}));const _=f},70655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__extends:()=>a,__assign:()=>o,__rest:()=>i,__decorate:()=>l,__param:()=>c,__metadata:()=>s,__awaiter:()=>u,__generator:()=>d,__createBinding:()=>m,__exportStar:()=>p,__values:()=>f,__read:()=>v,__spread:()=>_,__spreadArrays:()=>g,__spreadArray:()=>y,__await:()=>h,__asyncGenerator:()=>b,__asyncDelegator:()=>E,__asyncValues:()=>w,__makeTemplateObject:()=>C,__importStar:()=>S,__importDefault:()=>k,__classPrivateFieldGet:()=>T,__classPrivateFieldSet:()=>x});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function l(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}var m=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||m(t,e,n)}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function _(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,a++)r[a]=o[i];return r}function y(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e}function h(e){return this instanceof h?(this.v=e,this):new h(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,a=n.apply(e,t||[]),o=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){a[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||l(e,t)}))})}function l(e,t){try{(n=a[e](t)).value instanceof h?Promise.resolve(n.value.v).then(c,s):u(o[0][2],n)}catch(e){u(o[0][3],e)}var n}function c(e){l("next",e)}function s(e){l("throw",e)}function u(e,t){e(t),o.shift(),o.length&&l(o[0][0],o[0][1])}}function E(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,a){t[r]=e[r]?function(t){return(n=!n)?{value:h(e[r](t)),done:"return"===r}:a?a(t):t}:a}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,a){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,a,(t=e[n](t)).done,t.value)}))}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&m(t,e,n);return P(t,e),t}function k(e){return e&&e.__esModule?e:{default:e}}function T(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function x(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}}}]);
//# sourceMappingURL=233.b9b35757.js.map