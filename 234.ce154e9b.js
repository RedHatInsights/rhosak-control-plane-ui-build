(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[234],{64514:()=>{},10705:(e,n,t)=>{"use strict";t.d(n,{s:()=>s});var a=t(48121),r=t.n(a),i=t(25399);function s(e){var n=e.alerts,t=e.onCloseAlert;return r().createElement(i.AlertGroup,{isToast:!0},n.map((function(e){var n=e.key,a=e.variant,s=e.title,o=e.body,c=e.dataTestId;return r().createElement(i.Alert,{key:n,isLiveRegion:!0,variant:i.AlertVariant[a],variantLabel:"",title:s,actionClose:r().createElement(i.AlertActionCloseButton,{title:s,onClose:function(){return t(n)}}),"data-testid":c},o)})))}},56777:(e,n,t)=>{"use strict";t.d(n,{a:()=>o});var a=t(48121),r=t.n(a),i=t(25399),s=t(13006),o=function(e){var n=e.isModalOpen,t=e.children,a=e.title,o=e.handleModalToggle,c=e.onCreate,u=e.isFormValid,l=e.isCreationInProgress,d=e.primaryButtonTitle,_=e.dataTestIdSubmit,g=e.dataTestIdCancel,v=(0,s.useTranslation)().t;return r().createElement(i.Modal,{id:"modalCreateKafka",variant:i.ModalVariant.medium,title:a,isOpen:n,onClose:o,actions:[r().createElement(i.Button,{key:"create",variant:"primary",type:"submit",onClick:c,isDisabled:!u||l,spinnerAriaValueText:v("submitting_request"),isLoading:l,"data-testid":_&&_},d),r().createElement(i.Button,{key:"cancel",variant:"link",onClick:o,"data-testid":g},v("cancel"))]},t)}},7562:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var a=t(70655),r=t(48121),i=t.n(r),s=t(25399),o=function(e){var n=e.isModalOpen,t=e.title,r=e.modalProps,o=e.confirmButtonProps,c=e.cancelButtonProps,u=e.handleModalToggle,l=e.textProps,d=e.children,_=e.selectedItemData,g=void 0===_?"":_,v=r||{},f=v.variant,p=void 0===f?s.ModalVariant.small:f,h=v.titleIconVariant,m=void 0===h?"warning":h,y=v["aria-label"],w=v.showClose,k=void 0===w||w,b=(0,a.__rest)(v,["variant","titleIconVariant","aria-label","showClose"]),P=o||{},T=P.id,C=void 0===T?"mas--confirm__button":T,S=P.key,q=void 0===S?"confirm-button":S,B=P.variant,E=void 0===B?s.ButtonVariant.danger:B,R=P.onClick,A=P.isDisabled,I=P.label,x=void 0===I?"Delete":I,D=(0,a.__rest)(P,["id","key","variant","onClick","isDisabled","label"]),N=c||{},M=N.id,O=void 0===M?"mas--cancel__button":M,K=N.key,Q=void 0===K?'"cancel-button':K,U=N.variant,z=void 0===U?s.ButtonVariant.link:U,L=(N.onClick,N.isDisabled,N.label),W=void 0===L?"Cancel":L,G=(0,a.__rest)(N,["id","key","variant","onClick","isDisabled","label"]),V=l||{},F=V.className,H=void 0===F?"mas--delete-item__modal--text":F,j=V.description,J=(0,a.__rest)(V,["className","description"]);return i().createElement(s.Modal,(0,a.__assign)({variant:p,isOpen:n,"aria-label":y,title:t,titleIconVariant:m,showClose:k,onClose:u,actions:[i().createElement(s.Button,(0,a.__assign)({id:C,key:q,variant:E,onClick:function(){return R&&R(g)},isDisabled:A},D),x),i().createElement(s.Button,(0,a.__assign)({id:O,key:Q,variant:z,onClick:u},G),W)]},b),j&&i().createElement(s.Text,(0,a.__assign)({className:H,dangerouslySetInnerHTML:{__html:j||""}},J)),d)}},53803:(e,n,t)=>{"use strict";t.d(n,{A:()=>a.A});var a=t(7562)},98034:(e,n,t)=>{"use strict";t.d(n,{D:()=>c});var a=t(70655),r=t(48121),i=t.n(r),s=t(25399),o=t(48784),c=function(e){var n=e.onClose,t=e.isLoading,r=void 0===t||t,c=e.drawerPanelContentProps,u=e.drawerHeaderProps,l=e.isExpanded,d=e.children,_=e.panelBodyContent,g=e.onExpand,v=e.notRequiredDrawerContentBackground,f=e["data-ouia-app-id"],p=c||{},h=p.widths,m=(0,a.__rest)(p,["widths"]),y=u||{},w=y.text,k=y.title,b=i().createElement(s.DrawerPanelContent,(0,a.__assign)({widths:h||{default:"width_50"}},m),r?i().createElement(o.yR,null):i().createElement(i().Fragment,null,i().createElement(s.DrawerHead,null,i().createElement(s.TextContent,null,(null==w?void 0:w.label)&&i().createElement(s.Text,{component:(null==w?void 0:w.component)||s.TextVariants.small,className:(null==w?void 0:w.className)||"pf-u-mb-0"},null==w?void 0:w.label),(null==k?void 0:k.value)&&i().createElement(s.Title,{headingLevel:(null==k?void 0:k.headingLevel)||"h2",size:(null==k?void 0:k.size)||s.TitleSizes.xl,className:(null==k?void 0:k.className)||"pf-u-mt-0"},null==k?void 0:k.value)),i().createElement(s.DrawerActions,null,i().createElement(s.DrawerCloseButton,{onClick:n}))),i().createElement(s.DrawerPanelBody,null,_)));return i().createElement(s.Drawer,{isExpanded:l,onExpand:g,"data-ouia-app-id":f},i().createElement(s.DrawerContent,{panelContent:b,className:v?"pf-m-no-background":""},i().createElement(s.DrawerContentBody,null," ",d)))}},34747:(e,n,t)=>{"use strict";t.d(n,{S:()=>l});var a=t(48121),r=t.n(a),i=t(5977),s=t(13006),o=t(25399),c=t(84564),u=t(48784),l=function(e){var n=e.updateState,t=(0,s.useTranslation)().t;return r().createElement(o.PageSection,{padding:{default:"noPadding"}},r().createElement(u.C0,{emptyStateProps:{variant:o.EmptyStateVariant.full},emptyStateIconProps:{icon:c.ZP,className:"icon-color"},titleProps:{title:t("common.something_went_wrong"),headingLevel:"h1",size:o.TitleSizes.lg},emptyStateBodyProps:{body:t("unexpected_error")}},r().createElement((function(){var e=(0,i.k6)();return r().createElement(o.Button,{onClick:function(){n(!1),e.push("/")}},t("go_to_openshift_streams"))}),null)))}},63477:(e,n,t)=>{"use strict";t.d(n,{y:()=>o});var a=t(70655),r=t(48121),i=t.n(r),s=t(25399),o=function(e){var n=e.bullseyeProps,t=e.spinnerProps;return i().createElement(s.Bullseye,(0,a.__assign)({},n),i().createElement(s.Spinner,(0,a.__assign)({},t)))}},8509:(e,n,t)=>{"use strict";t(48090)},16846:(e,n,t)=>{"use strict";t.d(n,{w:()=>c});var a=t(70655),r=t(48121),i=t.n(r),s=t(5977),o=t(25399),c=function(e){var n=e.page,t=e.perPage,c=void 0===t?10:t,u=e.itemCount,l=e.variant,d=void 0===l?o.PaginationVariant.top:l,_=e.isCompact,g=e.titles,v=(0,a.__rest)(e,["page","perPage","itemCount","variant","isCompact","titles"]),f=(0,s.k6)(),p=(0,s.TH)(),h=new URLSearchParams(p.search),m=(0,r.useCallback)((function(e,n){h.set(e,n.toString())}),[h]),y=(0,r.useCallback)((function(e,n){m("page",n.toString()),f.push({search:h.toString()})}),[m,f,h]),w=(0,r.useCallback)((function(e,n){m("page","1"),m("perPage",n.toString()),f.push({search:h.toString()})}),[m,f,h]);return i().createElement(o.Pagination,(0,a.__assign)({itemCount:u,perPage:c,page:n,onSetPage:y,variant:d,onPerPageSelect:w,isCompact:_},v,{titles:g}))}},69887:(e,n,t)=>{"use strict";t.d(n,{w:()=>_});var a=t(70655),r=t(48121),i=t.n(r),s=t(70726),o=t(26378),c=t(75381),u=(0,r.createContext)({activeRow:"",onRowClick:function(){}}),l=u.Provider,d=function(e){var n=(0,r.useContext)(u),t=n.activeRow,s=n.onRowClick,l=n.rowDataTestId,d=e||{},_=d.trRef,g=d.className,v=d.rowProps,f=d.row,p=(0,a.__rest)(d,["trRef","className","rowProps","row"]),h=v.rowIndex,m=f.isExpanded,y=f.originalData,w=(null==y?void 0:y.status)===c.Od.DEPROVISION;return i().createElement("tr",(0,a.__assign)({"data-testid":l,tabIndex:0,ref:_,className:(0,o.css)(g,"pf-c-table-row__item",w?"pf-m-disabled":"pf-m-selectable",t&&t===(null==y?void 0:y.name)&&"pf-m-selected"),hidden:void 0!==m&&!m,onClick:function(e){return!w&&s&&s(e,h,f)}},p))},_=function(e){var n=e.tableProps,t=e.tableHeaderProps,r=e.tableBodyProps,c=e.children,u=e.activeRow,_=e.onRowClick,g=e.rowDataTestId,v=n.cells,f=n.rows,p=n.actionResolver,h=n.onSort,m=n.sortBy,y=n["aria-label"],w=n.variant,k=n.className,b=(n.rowWrapper,n.hasDefaultCustomRowWrapper),P=void 0!==b&&b,T=(0,a.__rest)(n,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","rowWrapper","hasDefaultCustomRowWrapper"]);return P&&(T.rowWrapper=d),i().createElement(l,{value:{activeRow:u,onRowClick:_,rowDataTestId:g}},i().createElement(s.Table,(0,a.__assign)({className:(0,o.css)("mas--streams-table-view__table",k),cells:v,variant:w,rows:f,"aria-label":y,actionResolver:p,onSort:h,sortBy:m},T),i().createElement(s.TableHeader,(0,a.__assign)({},t)),i().createElement(s.TableBody,(0,a.__assign)({},r)),c))}},93697:(e,n,t)=>{"use strict";t.d(n,{L:()=>o});var a=t(70655),r=t(48121),i=t.n(r),s=t(25399),o=function(e){var n=e.toolbarProps,t=e.toggleGroupProps,r=e.toolbarItems,o=e.toggleGroupItems,c=n.id,u=n.clearAllFilters,l=n.collapseListedFiltersBreakpoint,d=void 0===l?"md":l,_=n.inset,g=(0,a.__rest)(n,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]),v=t.toggleIcon,f=t.breakpoint,p=void 0===f?"md":f,h=(0,a.__rest)(t,["toggleIcon","breakpoint"]);return i().createElement(i().Fragment,null,i().createElement(s.Toolbar,(0,a.__assign)({id:c,clearAllFilters:u,inset:_,collapseListedFiltersBreakpoint:d},g),i().createElement(s.ToolbarContent,null,i().createElement(s.ToolbarToggleGroup,(0,a.__assign)({toggleIcon:v,breakpoint:p},h),o),null==r?void 0:r.map((function(e,n){var t=e.key,r=void 0===t?"mas":t,o=e.variant,c=e.className,u=e.id,l=e.alignment,d=e.item,_=(0,a.__rest)(e,["key","variant","className","id","alignment","item"]);return i().createElement(s.ToolbarItem,(0,a.__assign)({key:r+"-"+n,variant:o,className:c,id:u,alignment:l},_),d)})))))}},68908:(e,n,t)=>{"use strict";t.d(n,{t:()=>a,N:()=>r});var a=function(){this.cloud_provider="",this.multi_az=!1,this.region="",this.name=""},r=function(){this.name="",this.description=""}},78261:(e,n,t)=>{"use strict";t.d(n,{S:()=>a,G:()=>r});var a,r=function(e){var n;return void 0!==(null===(n=e.response)||void 0===n?void 0:n.data.code)};!function(e){e.UNAUTHORIZED_USER="MGD-SERV-API-4",e.DUPLICATE_INSTANCE_NAME="MGD-SERV-API-36"}(a||(a={}))},75381:(e,n,t)=>{"use strict";t.d(n,{Od:()=>a.Od,pf:()=>a.pf,md:()=>a.md,bv:()=>a.bv,Bh:()=>a.Bh,o8:()=>a.o8,wu:()=>a.wu,hm:()=>a.hm,SM:()=>r.S,G6:()=>r.G});var a=t(52648),r=(t(82519),t(78261))},78800:(e,n,t)=>{"use strict";var a=t(51550),r=t.n(a),i=t(13006),s=t(13096),o=t.n(s),c=t(76130),u=t.n(c),l=t(72300),d=t.n(l),_=t(82420),g=t.n(_),v=(t(76831),"true"===new URLSearchParams(window.location.search).get("pseudolocalization"));r().use(new(d())({enabled:v,wrapped:!0})).use(u()).use(o()).use(i.initReactI18next).init({backend:{loadPath:t.p+"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,n,t,a){return a=a||{},"number"===n?new Intl.NumberFormat(t).format(e):e instanceof Date?"fromNow"===n?g()(e).fromNow(!0===a.omitSuffix):g()(e).format(n):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,n,t){}},(function(){g().locale(r().language)})),r().on("languageChanged",(function(e){g().locale(e)}))},23141:(e,n,t)=>{"use strict";t.d(n,{M2:()=>_});var a=t(70655),r=t(8575),i=t(78991),s=t.n(i),o="https://api.openshift.com".replace(/\/+$/,""),c=function(e,n,t){void 0===n&&(n=o),void 0===t&&(t=s()),this.basePath=n,this.axios=t,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)},u=function(e){function n(n,t){var a=e.call(this,t)||this;return a.field=n,a.name="RequiredError",a}return(0,a.__extends)(n,e),n}(Error),l=function(e){var n=this;return{createKafka:function(t,i,s){return void 0===s&&(s={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,o,c,l,d,_,g,v;return(0,a.__generator)(this,(function(f){if(null==t)throw new u("async","Required parameter async was null or undefined when calling createKafka.");if(null==i)throw new u("kafkaRequestPayload","Required parameter kafkaRequestPayload was null or undefined when calling createKafka.");return"/api/managed-services-api/v1/kafkas",n=r.Qc("/api/managed-services-api/v1/kafkas",!0),e&&(o=e.baseOptions),c=(0,a.__assign)((0,a.__assign)({method:"POST"},o),s),l={},d={},e&&e.accessToken&&(_="function"==typeof e.accessToken?e.accessToken():e.accessToken,l.Authorization="Bearer "+_),void 0!==t&&(d.async=t),l["Content-Type"]="application/json",n.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},n.query),d),s.query),delete n.search,g=o&&o.headers?o.headers:{},c.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},l),g),s.headers),v="string"!=typeof i||"application/json"===c.headers["Content-Type"],c.data=v?JSON.stringify(void 0!==i?i:{}):i||"",[2,{url:r.WU(n),options:c}]}))}))},createServiceAccount:function(t,i){return void 0===i&&(i={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,s,o,c,l,d,_,g;return(0,a.__generator)(this,(function(v){if(null==t)throw new u("serviceAccountRequest","Required parameter serviceAccountRequest was null or undefined when calling createServiceAccount.");return"/api/managed-services-api/v1/serviceaccounts",n=r.Qc("/api/managed-services-api/v1/serviceaccounts",!0),e&&(s=e.baseOptions),o=(0,a.__assign)((0,a.__assign)({method:"POST"},s),i),c={},l={},e&&e.accessToken&&(d="function"==typeof e.accessToken?e.accessToken():e.accessToken,c.Authorization="Bearer "+d),c["Content-Type"]="application/json",n.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},n.query),l),i.query),delete n.search,_=s&&s.headers?s.headers:{},o.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},c),_),i.headers),g="string"!=typeof t||"application/json"===o.headers["Content-Type"],o.data=g?JSON.stringify(void 0!==t?t:{}):t||"",[2,{url:r.WU(n),options:o}]}))}))},deleteKafkaById:function(t,i,s){return void 0===s&&(s={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,o,c,l,d,_,g,v;return(0,a.__generator)(this,(function(f){if(null==t)throw new u("id","Required parameter id was null or undefined when calling deleteKafkaById.");if(null==i)throw new u("async","Required parameter async was null or undefined when calling deleteKafkaById.");return n="/api/managed-services-api/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(t))),o=r.Qc(n,!0),e&&(c=e.baseOptions),l=(0,a.__assign)((0,a.__assign)({method:"DELETE"},c),s),d={},_={},e&&e.accessToken&&(g="function"==typeof e.accessToken?e.accessToken():e.accessToken,d.Authorization="Bearer "+g),void 0!==i&&(_.async=i),o.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},o.query),_),s.query),delete o.search,v=c&&c.headers?c.headers:{},l.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},d),v),s.headers),[2,{url:r.WU(o),options:l}]}))}))},deleteServiceAccount:function(t,i){return void 0===i&&(i={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,s,o,c,l,d,_,g;return(0,a.__generator)(this,(function(v){if(null==t)throw new u("id","Required parameter id was null or undefined when calling deleteServiceAccount.");return n="/api/managed-services-api/v1/serviceaccounts/{id}".replace("{id}",encodeURIComponent(String(t))),s=r.Qc(n,!0),e&&(o=e.baseOptions),c=(0,a.__assign)((0,a.__assign)({method:"DELETE"},o),i),l={},d={},e&&e.accessToken&&(_="function"==typeof e.accessToken?e.accessToken():e.accessToken,l.Authorization="Bearer "+_),s.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},s.query),d),i.query),delete s.search,g=o&&o.headers?o.headers:{},c.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},l),g),i.headers),[2,{url:r.WU(s),options:c}]}))}))},getKafkaById:function(t,i){return void 0===i&&(i={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,s,o,c,l,d,_,g;return(0,a.__generator)(this,(function(v){if(null==t)throw new u("id","Required parameter id was null or undefined when calling getKafkaById.");return n="/api/managed-services-api/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(t))),s=r.Qc(n,!0),e&&(o=e.baseOptions),c=(0,a.__assign)((0,a.__assign)({method:"GET"},o),i),l={},d={},e&&e.accessToken&&(_="function"==typeof e.accessToken?e.accessToken():e.accessToken,l.Authorization="Bearer "+_),s.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},s.query),d),i.query),delete s.search,g=o&&o.headers?o.headers:{},c.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},l),g),i.headers),[2,{url:r.WU(s),options:c}]}))}))},getMetricsByInstantQuery:function(t,i,s){return void 0===s&&(s={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,o,c,l,d,_,g,v;return(0,a.__generator)(this,(function(f){if(null==t)throw new u("id","Required parameter id was null or undefined when calling getMetricsByInstantQuery.");return n="/api/managed-services-api/v1/kafkas/{id}/metrics/query".replace("{id}",encodeURIComponent(String(t))),o=r.Qc(n,!0),e&&(c=e.baseOptions),l=(0,a.__assign)((0,a.__assign)({method:"GET"},c),s),d={},_={},e&&e.accessToken&&(g="function"==typeof e.accessToken?e.accessToken():e.accessToken,d.Authorization="Bearer "+g),i&&(_.filters=i),o.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},o.query),_),s.query),delete o.search,v=c&&c.headers?c.headers:{},l.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},d),v),s.headers),[2,{url:r.WU(o),options:l}]}))}))},getMetricsByRangeQuery:function(t,i,s,o,c){return void 0===c&&(c={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,l,d,_,g,v,f,p;return(0,a.__generator)(this,(function(h){if(null==t)throw new u("id","Required parameter id was null or undefined when calling getMetricsByRangeQuery.");if(null==i)throw new u("duration","Required parameter duration was null or undefined when calling getMetricsByRangeQuery.");if(null==s)throw new u("interval","Required parameter interval was null or undefined when calling getMetricsByRangeQuery.");return n="/api/managed-services-api/v1/kafkas/{id}/metrics/query_range".replace("{id}",encodeURIComponent(String(t))),l=r.Qc(n,!0),e&&(d=e.baseOptions),_=(0,a.__assign)((0,a.__assign)({method:"GET"},d),c),g={},v={},e&&e.accessToken&&(f="function"==typeof e.accessToken?e.accessToken():e.accessToken,g.Authorization="Bearer "+f),void 0!==i&&(v.duration=i),void 0!==s&&(v.interval=s),o&&(v.filters=o),l.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},l.query),v),c.query),delete l.search,p=d&&d.headers?d.headers:{},_.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},g),p),c.headers),[2,{url:r.WU(l),options:_}]}))}))},getServiceAccountById:function(t,i){return void 0===i&&(i={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,s,o,c,l,d,_,g;return(0,a.__generator)(this,(function(v){if(null==t)throw new u("id","Required parameter id was null or undefined when calling getServiceAccountById.");return n="/api/managed-services-api/v1/serviceaccounts/{id}".replace("{id}",encodeURIComponent(String(t))),s=r.Qc(n,!0),e&&(o=e.baseOptions),c=(0,a.__assign)((0,a.__assign)({method:"GET"},o),i),l={},d={},e&&e.accessToken&&(_="function"==typeof e.accessToken?e.accessToken():e.accessToken,l.Authorization="Bearer "+_),s.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},s.query),d),i.query),delete s.search,g=o&&o.headers?o.headers:{},c.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},l),g),i.headers),[2,{url:r.WU(s),options:c}]}))}))},listCloudProviderRegions:function(t,i,s,o){return void 0===o&&(o={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,c,l,d,_,g,v,f;return(0,a.__generator)(this,(function(p){if(null==t)throw new u("id","Required parameter id was null or undefined when calling listCloudProviderRegions.");return n="/api/managed-services-api/v1/cloud_providers/{id}/regions".replace("{id}",encodeURIComponent(String(t))),c=r.Qc(n,!0),e&&(l=e.baseOptions),d=(0,a.__assign)((0,a.__assign)({method:"GET"},l),o),_={},g={},e&&e.accessToken&&(v="function"==typeof e.accessToken?e.accessToken():e.accessToken,_.Authorization="Bearer "+v),void 0!==i&&(g.page=i),void 0!==s&&(g.size=s),c.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},c.query),g),o.query),delete c.search,f=l&&l.headers?l.headers:{},d.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},_),f),o.headers),[2,{url:r.WU(c),options:d}]}))}))},listCloudProviders:function(t,i,s){return void 0===s&&(s={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,o,c,u,l,d,_;return(0,a.__generator)(this,(function(g){return"/api/managed-services-api/v1/cloud_providers",n=r.Qc("/api/managed-services-api/v1/cloud_providers",!0),e&&(o=e.baseOptions),c=(0,a.__assign)((0,a.__assign)({method:"GET"},o),s),u={},l={},e&&e.accessToken&&(d="function"==typeof e.accessToken?e.accessToken():e.accessToken,u.Authorization="Bearer "+d),void 0!==t&&(l.page=t),void 0!==i&&(l.size=i),n.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},n.query),l),s.query),delete n.search,_=o&&o.headers?o.headers:{},c.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},u),_),s.headers),[2,{url:r.WU(n),options:c}]}))}))},listKafkas:function(t,i,s,o,c){return void 0===c&&(c={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,u,l,d,_,g,v;return(0,a.__generator)(this,(function(f){return"/api/managed-services-api/v1/kafkas",n=r.Qc("/api/managed-services-api/v1/kafkas",!0),e&&(u=e.baseOptions),l=(0,a.__assign)((0,a.__assign)({method:"GET"},u),c),d={},_={},e&&e.accessToken&&(g="function"==typeof e.accessToken?e.accessToken():e.accessToken,d.Authorization="Bearer "+g),void 0!==t&&(_.page=t),void 0!==i&&(_.size=i),void 0!==s&&(_.orderBy=s),void 0!==o&&(_.search=o),n.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},n.query),_),c.query),delete n.search,v=u&&u.headers?u.headers:{},l.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},d),v),c.headers),[2,{url:r.WU(n),options:l}]}))}))},listServiceAccounts:function(t){return void 0===t&&(t={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,i,s,o,c,u,l;return(0,a.__generator)(this,(function(d){return"/api/managed-services-api/v1/serviceaccounts",n=r.Qc("/api/managed-services-api/v1/serviceaccounts",!0),e&&(i=e.baseOptions),s=(0,a.__assign)((0,a.__assign)({method:"GET"},i),t),o={},c={},e&&e.accessToken&&(u="function"==typeof e.accessToken?e.accessToken():e.accessToken,o.Authorization="Bearer "+u),n.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},n.query),c),t.query),delete n.search,l=i&&i.headers?i.headers:{},s.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},o),l),t.headers),[2,{url:r.WU(n),options:s}]}))}))},resetServiceAccountCreds:function(t,i){return void 0===i&&(i={}),(0,a.__awaiter)(n,void 0,Promise,(function(){var n,s,o,c,l,d,_,g;return(0,a.__generator)(this,(function(v){if(null==t)throw new u("id","Required parameter id was null or undefined when calling resetServiceAccountCreds.");return n="/api/managed-services-api/v1/serviceaccounts/{id}/reset-credentials".replace("{id}",encodeURIComponent(String(t))),s=r.Qc(n,!0),e&&(o=e.baseOptions),c=(0,a.__assign)((0,a.__assign)({method:"POST"},o),i),l={},d={},e&&e.accessToken&&(_="function"==typeof e.accessToken?e.accessToken():e.accessToken,l.Authorization="Bearer "+_),s.query=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},s.query),d),i.query),delete s.search,g=o&&o.headers?o.headers:{},c.headers=(0,a.__assign)((0,a.__assign)((0,a.__assign)({},l),g),i.headers),[2,{url:r.WU(s),options:c}]}))}))}}},d=function(e){return{createKafka:function(n,t,r){return(0,a.__awaiter)(this,void 0,Promise,(function(){var i;return(0,a.__generator)(this,(function(c){switch(c.label){case 0:return[4,l(e).createKafka(n,t,r)];case 1:return i=c.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},i.options),{url:n+i.url});return e.request(t)}]}}))}))},createServiceAccount:function(n,t){return(0,a.__awaiter)(this,void 0,Promise,(function(){var r;return(0,a.__generator)(this,(function(i){switch(i.label){case 0:return[4,l(e).createServiceAccount(n,t)];case 1:return r=i.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},r.options),{url:n+r.url});return e.request(t)}]}}))}))},deleteKafkaById:function(n,t,r){return(0,a.__awaiter)(this,void 0,Promise,(function(){var i;return(0,a.__generator)(this,(function(c){switch(c.label){case 0:return[4,l(e).deleteKafkaById(n,t,r)];case 1:return i=c.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},i.options),{url:n+i.url});return e.request(t)}]}}))}))},deleteServiceAccount:function(n,t){return(0,a.__awaiter)(this,void 0,Promise,(function(){var r;return(0,a.__generator)(this,(function(i){switch(i.label){case 0:return[4,l(e).deleteServiceAccount(n,t)];case 1:return r=i.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},r.options),{url:n+r.url});return e.request(t)}]}}))}))},getKafkaById:function(n,t){return(0,a.__awaiter)(this,void 0,Promise,(function(){var r;return(0,a.__generator)(this,(function(i){switch(i.label){case 0:return[4,l(e).getKafkaById(n,t)];case 1:return r=i.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},r.options),{url:n+r.url});return e.request(t)}]}}))}))},getMetricsByInstantQuery:function(n,t,r){return(0,a.__awaiter)(this,void 0,Promise,(function(){var i;return(0,a.__generator)(this,(function(c){switch(c.label){case 0:return[4,l(e).getMetricsByInstantQuery(n,t,r)];case 1:return i=c.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},i.options),{url:n+i.url});return e.request(t)}]}}))}))},getMetricsByRangeQuery:function(n,t,r,i,c){return(0,a.__awaiter)(this,void 0,Promise,(function(){var u;return(0,a.__generator)(this,(function(d){switch(d.label){case 0:return[4,l(e).getMetricsByRangeQuery(n,t,r,i,c)];case 1:return u=d.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},u.options),{url:n+u.url});return e.request(t)}]}}))}))},getServiceAccountById:function(n,t){return(0,a.__awaiter)(this,void 0,Promise,(function(){var r;return(0,a.__generator)(this,(function(i){switch(i.label){case 0:return[4,l(e).getServiceAccountById(n,t)];case 1:return r=i.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},r.options),{url:n+r.url});return e.request(t)}]}}))}))},listCloudProviderRegions:function(n,t,r,i){return(0,a.__awaiter)(this,void 0,Promise,(function(){var c;return(0,a.__generator)(this,(function(u){switch(u.label){case 0:return[4,l(e).listCloudProviderRegions(n,t,r,i)];case 1:return c=u.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},c.options),{url:n+c.url});return e.request(t)}]}}))}))},listCloudProviders:function(n,t,r){return(0,a.__awaiter)(this,void 0,Promise,(function(){var i;return(0,a.__generator)(this,(function(c){switch(c.label){case 0:return[4,l(e).listCloudProviders(n,t,r)];case 1:return i=c.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},i.options),{url:n+i.url});return e.request(t)}]}}))}))},listKafkas:function(n,t,r,i,c){return(0,a.__awaiter)(this,void 0,Promise,(function(){var u;return(0,a.__generator)(this,(function(d){switch(d.label){case 0:return[4,l(e).listKafkas(n,t,r,i,c)];case 1:return u=d.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},u.options),{url:n+u.url});return e.request(t)}]}}))}))},listServiceAccounts:function(n){return(0,a.__awaiter)(this,void 0,Promise,(function(){var t;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return[4,l(e).listServiceAccounts(n)];case 1:return t=r.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var r=(0,a.__assign)((0,a.__assign)({},t.options),{url:n+t.url});return e.request(r)}]}}))}))},resetServiceAccountCreds:function(n,t){return(0,a.__awaiter)(this,void 0,Promise,(function(){var r;return(0,a.__generator)(this,(function(i){switch(i.label){case 0:return[4,l(e).resetServiceAccountCreds(n,t)];case 1:return r=i.sent(),[2,function(e,n){void 0===e&&(e=s()),void 0===n&&(n=o);var t=(0,a.__assign)((0,a.__assign)({},r.options),{url:n+r.url});return e.request(t)}]}}))}))}}},_=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return(0,a.__extends)(n,e),n.prototype.createKafka=function(e,n,t){var a=this;return d(this.configuration).createKafka(e,n,t).then((function(e){return e(a.axios,a.basePath)}))},n.prototype.createServiceAccount=function(e,n){var t=this;return d(this.configuration).createServiceAccount(e,n).then((function(e){return e(t.axios,t.basePath)}))},n.prototype.deleteKafkaById=function(e,n,t){var a=this;return d(this.configuration).deleteKafkaById(e,n,t).then((function(e){return e(a.axios,a.basePath)}))},n.prototype.deleteServiceAccount=function(e,n){var t=this;return d(this.configuration).deleteServiceAccount(e,n).then((function(e){return e(t.axios,t.basePath)}))},n.prototype.getKafkaById=function(e,n){var t=this;return d(this.configuration).getKafkaById(e,n).then((function(e){return e(t.axios,t.basePath)}))},n.prototype.getMetricsByInstantQuery=function(e,n,t){var a=this;return d(this.configuration).getMetricsByInstantQuery(e,n,t).then((function(e){return e(a.axios,a.basePath)}))},n.prototype.getMetricsByRangeQuery=function(e,n,t,a,r){var i=this;return d(this.configuration).getMetricsByRangeQuery(e,n,t,a,r).then((function(e){return e(i.axios,i.basePath)}))},n.prototype.getServiceAccountById=function(e,n){var t=this;return d(this.configuration).getServiceAccountById(e,n).then((function(e){return e(t.axios,t.basePath)}))},n.prototype.listCloudProviderRegions=function(e,n,t,a){var r=this;return d(this.configuration).listCloudProviderRegions(e,n,t,a).then((function(e){return e(r.axios,r.basePath)}))},n.prototype.listCloudProviders=function(e,n,t){var a=this;return d(this.configuration).listCloudProviders(e,n,t).then((function(e){return e(a.axios,a.basePath)}))},n.prototype.listKafkas=function(e,n,t,a,r){var i=this;return d(this.configuration).listKafkas(e,n,t,a,r).then((function(e){return e(i.axios,i.basePath)}))},n.prototype.listServiceAccounts=function(e){var n=this;return d(this.configuration).listServiceAccounts(e).then((function(e){return e(n.axios,n.basePath)}))},n.prototype.resetServiceAccountCreds=function(e,n){var t=this;return d(this.configuration).resetServiceAccountCreds(e,n).then((function(e){return e(t.axios,t.basePath)}))},n}(c)}}]);
//# sourceMappingURL=234.ce154e9b.js.map