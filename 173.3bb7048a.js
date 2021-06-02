(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[173],{73727:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MemoryRouter:()=>r.VA,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN,BrowserRouter:()=>d,HashRouter:()=>m,Link:()=>E,NavLink:()=>b});var r=n(5977),a=n(41788),o=n(48121),i=n.n(o),l=n(90071),c=(n(45697),n(22122)),s=n(19756),u=n(2177),d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,l.createBrowserHistory)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return i().createElement(r.F0,{history:this.history,children:this.props.children})},t}(i().Component);var m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,l.createHashHistory)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return i().createElement(r.F0,{history:this.history,children:this.props.children})},t}(i().Component);var p=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?(0,l.createLocation)(e,null,null,t):e},f=function(e){return e},g=i().forwardRef;void 0===g&&(g=f);var _=g((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,o=(0,s.Z)(e,["innerRef","navigate","onClick"]),l=o.target,u=(0,c.Z)({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=f!==g&&t||n,i().createElement("a",u)}));var E=g((function(e,t){var n=e.component,a=void 0===n?_:n,o=e.replace,l=e.to,d=e.innerRef,m=(0,s.Z)(e,["component","replace","to","innerRef"]);return i().createElement(r.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=e.history,r=v(p(l,e.location),e.location),s=r?n.createHref(r):"",_=(0,c.Z)({},m,{href:s,navigate:function(){var t=p(l,e.location);(o?n.replace:n.push)(t)}});return f!==g?_.ref=t||d:_.innerRef=d,i().createElement(a,_)}))})),y=function(e){return e},h=i().forwardRef;void 0===h&&(h=y);var b=h((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,o=e.activeClassName,l=void 0===o?"active":o,d=e.activeStyle,m=e.className,f=e.exact,g=e.isActive,_=e.location,b=e.sensitive,S=e.strict,k=e.style,C=e.to,w=e.innerRef,A=(0,s.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(r.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=_||e.location,o=v(p(C,n),n),s=o.pathname,T=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=T?(0,r.LX)(n.pathname,{path:T,exact:f,sensitive:b,strict:S}):null,N=!!(g?g(P,n):P),R=N?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(m,l):m,x=N?(0,c.Z)({},k,{},d):k,L=(0,c.Z)({"aria-current":N&&a||null,className:R,style:x,to:o},A);return y!==h?L.ref=t||w:L.innerRef=w,i().createElement(E,L)}))}))},99229:(e,t,n)=>{"use strict";n.d(t,{u:()=>s});var r=n(70655),a=n(48121),o=n.n(a),i=n(10705),l=n(90847),c=n(44650),s=function(e){var t=e.children,n=(0,a.useState)([]),s=n[0],u=n[1],d=(0,a.useState)([]),m=d[0],p=d[1];(0,a.useEffect)((function(){var e=m.map((function(e){return e.key})),t=s.filter((function(t){return!e.includes(t.key)})).map((function(e){var t=(null==e?void 0:e.skipAutoClose)?void 0:setTimeout((function(){return v(e.key)}),8e3);return{key:e.key,timeOut:t}}));return p((0,r.__spreadArray)((0,r.__spreadArray)([],m),t)),function(){return m.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[s]);var v=function(e){u((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key!==e})))})),p((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})))}))};return o().createElement(c.AlertContext.Provider,{value:{addAlert:function(e,t,n,a,o){void 0===t&&(t=l.AlertVariant.default),u((0,r.__spreadArray)((0,r.__spreadArray)([],s),[{key:(new Date).getTime(),title:e,variant:t,body:n,dataTestId:a,skipAutoClose:o}]))}}},o().createElement(i.s,{alerts:s,onCloseAlert:v}),t)}},48090:(e,t,n)=>{"use strict";n.d(t,{o:()=>s});var r=n(48121),a=n.n(r),o=n(98183),i=n(90847),l=n(5977),c=n(77435),s=function(){var e=(0,o.useTranslation)().t;return a().createElement(i.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(c.C0,{emptyStateProps:{variant:c.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},a().createElement((function(){var t=(0,l.k6)();return a().createElement(i.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},33753:(e,t,n)=>{"use strict";n.d(t,{Ny:()=>u,OU:()=>v,QK:()=>p});var r,a=n(70655),o=n(48121),i=n.n(o),l=n(1560),c=n(89420),s=n(77435),u={CREATE_KAFKA_INSTANCE:"CREATE_KAFKA_INSTANCE",DELETE_KAFKA_INSTANCE:"DELETE_KAFKA_INSTANCE",CREATE_SERVICE_ACCOUNT:"CREATE_SERVICE_ACCOUNT",DELETE_SERVICE_ACCOUNT:"DELETE_SERVICE_ACCOUNT",RESET_CREDENTIALS:"RESET_CREDENTIALS",GENERATE_CREDENTIALS:"GENERATE_CREDENTIALS",DELETE_KAFKA_EXTERNALLY:"DELETE_KAFKA_EXTERNALLY"},d=((r={})[u.CREATE_KAFKA_INSTANCE]=l.ux,r[u.DELETE_KAFKA_INSTANCE]=l.MF,r[u.CREATE_SERVICE_ACCOUNT]=c.jw,r[u.DELETE_SERVICE_ACCOUNT]=c.xu,r[u.RESET_CREDENTIALS]=c.$Y,r[u.GENERATE_CREDENTIALS]=s.LW,r[u.DELETE_KAFKA_EXTERNALLY]=l.Nn,r),m=(0,o.createContext)({showModal:function(){},hideModal:function(){},store:{}}),p=function(){return(0,o.useContext)(m)},v=function(e){var t,n=e.children,r=(0,o.useState)(),l=r[0],c=r[1],s=l||{},u=s.modalType,p=s.modalProps;return i().createElement(m.Provider,{value:{store:l,showModal:function(e,t){void 0===t&&(t={}),c((0,a.__assign)((0,a.__assign)({},l),{modalType:e,modalProps:t}))},hideModal:function(){c((0,a.__assign)((0,a.__assign)({},l),{modalType:null,modalProps:{}}))}}},(t=d[u],u&&t?i().createElement(t,(0,a.__assign)({id:"global-modal"},p)):null),n)}},77435:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>a.u,a$:()=>P.a,AX:()=>o.A,D5:()=>k.D,C0:()=>_,jU:()=>r,tV:()=>b,LW:()=>T.L,yR:()=>S.y,wu:()=>C.w,wR:()=>w.w,L5:()=>A.L,Ny:()=>N.Ny,OU:()=>N.OU,QK:()=>N.QK});var r,a=n(99229),o=(n(10705),n(71322)),i=n(70655),l=n(48121),c=n.n(l),s=n(90847),u=n(20777),d=n(34558),m=n(5569),p=n(71070),v=n(84564),f=n(65131),g=n(87215);n(64514);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(r||(r={}));var _=function(e){var t=e.titleProps,n=e.buttonProps,a=e.emptyStateIconProps,o=e.emptyStateProps,l=e.emptyStateBodyProps,_=e.children,E=n||{},y=E.variant,h=void 0===y?s.ButtonVariant.primary:y,b=E.onClick,S=(0,i.__rest)(E,["variant","onClick"]),k=t||{},C=k.title,w=(0,i.__rest)(k,["title"]),A=l||{},T=A.body,P=(0,i.__rest)(A,["body"]),N=o||{},R=N.variant,x=void 0===R?r.GettingStarted:R,L=N.className,I=(0,i.__rest)(N,["variant","className"]),D=function(){return c().createElement("img",{src:f.Z,alt:"Not found page",width:"128px"})},V=function(){var e={};switch(x){case r.GettingStarted:e={variant:s.EmptyStateVariant.xl,icon:d.ZP,titleSize:s.TitleSizes["4xl"],headingLevel:"h1"};break;case r.NoAccess:e={variant:s.EmptyStateVariant.large,icon:m.ZP,titleSize:s.TitleSizes.xl,headingLevel:"h2"};break;case r.NoItems:e={variant:s.EmptyStateVariant.large,icon:u.ZP,titleSize:s.TitleSizes.xl,headingLevel:"h2"};break;case r.NoResult:e={variant:s.EmptyStateVariant.large,icon:p.ZP,titleSize:s.TitleSizes.lg,headingLevel:"h2"};break;case r.UnexpectedError:e={variant:s.EmptyStateVariant.full,icon:v.ZP,titleSize:s.TitleSizes.lg,headingLevel:"h1"};break;case r.PageNotFound:e={variant:s.EmptyStateVariant.full,icon:D,titleSize:s.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:x||s.EmptyStateVariant.full,icon:null==a?void 0:a.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),B=V.variant,F=V.icon,O=V.titleSize,K=V.headingLevel;return c().createElement(s.EmptyState,(0,i.__assign)({variant:B,className:(0,g.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",L)},I),c().createElement(s.EmptyStateIcon,(0,i.__assign)({icon:F},a)),C&&c().createElement(s.Title,(0,i.__assign)({headingLevel:K,size:O},w),C),T&&c().createElement(s.EmptyStateBody,(0,i.__assign)({},P),T),(null==n?void 0:n.title)&&c().createElement(s.Button,(0,i.__assign)({variant:h,onClick:b},S),null==n?void 0:n.title),_)},E=n(5977),y=n(98183),h=(n(4256),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,i.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?c().createElement(s.PageSection,{padding:{default:"noPadding"},isFilled:!0},c().createElement(_,{emptyStateProps:{variant:r.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},c().createElement(s.Button,{onClick:this.onClickButton},e("go_to_kafka_instances")))):this.props.children},t}(l.Component)),b=(0,E.EN)((0,y.withTranslation)()(h)),S=n(63477),k=n(98034),C=n(16846),w=n(69887),A=n(93697),T=(n(8509),n(96034)),P=n(47394),N=n(33753)},82519:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(48121);function a(e){r.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},52648:(e,t,n)=>{"use strict";n.d(t,{mh:()=>o,bv:()=>i,Bh:()=>c,hm:()=>l,Od:()=>r,JB:()=>s,pf:()=>u,md:()=>p,o8:()=>v,Nw:()=>d,lt:()=>m,E7:()=>f,L0:()=>g,wx:()=>_,Qw:()=>E,vK:()=>y});var r,a=n(88289);function o(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(r||(r={}));var i=[{value:"aws",label:"Amazon Web Services"}],l=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],c=[{value:"us-east-1",label:"US East, N. Virginia"}],s=32,u=10,d=50,m=255,p=5e3,v=function(e,t,n){var r=t;n&&n>0&&(e===(n%t!=0?Math.floor(n/t)+1:Math.floor(n/t))&&(r=n>t?n%t==0?t:n%t:n));return 0!==r?r:t},f=function(e,t,n){void 0===n&&(n="asc");return null==e?void 0:e.sort((function(e,r){if(!Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(r,t))return 0;var a="string"==typeof e[t]?e[t].toUpperCase():e[t],o="string"==typeof r[t]?r[t].toUpperCase():r[t],i=0;return a>o?i=1:a<o&&(i=-1),"desc"===n?-1*i:i}))},g=function(e,t){return e="string"==typeof e?new Date(e):e,(0,a.formatDistance)(e,new Date)+" "+t},_=function(){return document.querySelector("#qs-content")||document.body},E=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},y=function(e){for(var t=e.loadingCount,n=e.skeleton,r=e.length,a=[],o=[],i=0;i<r;i++)o.push({title:n});for(i=0;i<t;i++)a.push({cells:o});return a}},19258:(e,t,n)=>{"use strict";n.r(t);var r=n(48121),a=n.n(r),o=n(61568),i=n.n(o),l=n(70655),c=n(98183),s=n(73727),u=n(5977),d=n(90847),m=n(52648),p=n(48090),v=n(82519),f=n(19581),g=n(51540),_=n(99229),E=n(33753),y=n(44650),h=n(77435),b=function(e){var t=e.name,n=e.onConnectToRegistry,o=e.onDeleteRegistry,i=(0,c.useTranslation)().t,l=(0,r.useState)(),s=l[0],u=l[1],m=[a().createElement(d.DropdownItem,{key:"connect-registry",onClick:function(){return n(t)}},i("serviceRegistry.connect_to_registry")),a().createElement(d.DropdownItem,{key:"delete-registry",onClick:function(){return o(t)}},i("serviceRegistry.delete_registry"))];return a().createElement(d.Level,null,a().createElement(d.LevelItem,null,a().createElement(d.TextContent,null,a().createElement(d.Text,{component:"h1"}," ",i("serviceRegistry.service_registry")))),a().createElement(d.LevelItem,null,a().createElement(d.Dropdown,{onSelect:function(){u(!s)},toggle:a().createElement(d.KebabToggle,{onToggle:function(e){u(e)},id:"toggle-service-registry"}),isOpen:s,isPlain:!0,dropdownItems:m,position:d.DropdownPosition.right})))},S=function(){var e=(0,c.useTranslation)().t,t=[{title:e("serviceRegistry.tab_resources_content_1"),code:"https://registry.my-domain.com/api"},{title:e("serviceRegistry.tab_resources_content_2"),code:"https://mass-sso.url"},{title:e("common.client_key"),code:"srvc-reg-7f7f8f7f87f-3634-c2e-879877988787"},{title:e("common.client_secret"),code:"2d668686876-8768786-8766686-8787jhjh88"}];return a().createElement("div",{className:"mas--details__drawer--tab-content"},a().createElement(d.TextContent,{className:"pf-u-pb-sm"},a().createElement(d.Text,{component:d.TextVariants.small},e("serviceRegistry.tab_resources_title_info"))),a().createElement(d.Form,null,null==t?void 0:t.map((function(t,n){var r=t.title,o=t.code;return a().createElement(d.FormGroup,{label:r,fieldId:"copy-clipboard-"+n,key:o+"'-'"+n},a().createElement(d.ClipboardCopy,{id:"copy-clipboard-"+n,hoverTip:e("common.copy_clipboard"),clickTip:e("common.copy_clipboard_successfully"),textAriaLabel:r,isReadOnly:!0},o))}))))},k=n(93179),C=function(){var e=(0,c.useTranslation)().t,t=[{type:e("common.java"),code:"code goes here"},{type:e("common.mvn"),code:"code goes here"},{type:e("common.cli"),code:"code goes here"},{type:e("common.curl"),code:"code goes here"}];return a().createElement(a().Fragment,null,a().createElement("div",{className:"mas--details__drawer--tab-content"},a().createElement(d.TextContent,{className:"pf-u-pb-sm"},a().createElement(d.Text,{component:d.TextVariants.small},e("serviceRegistry.tab_sample_code_title_info"))),null==t?void 0:t.map((function(e){var t=e.type,n=e.code;return a().createElement("div",{className:"pf-c-code-editor pf-m-read-only",key:t},a().createElement("div",{className:"pf-c-code-editor__header pf-u-pt-lg"},a().createElement("div",{className:"pf-c-code-editor__controls"},a().createElement(d.Button,{variant:"control","aria-label":"Action"},a().createElement(k.CopyIcon,null))),a().createElement("div",{className:"pf-c-code-editor__tab"},a().createElement("span",{className:"pf-c-code-editor__tab-text"},t))),a().createElement("div",{className:"pf-c-code-editor__main"},a().createElement("div",{className:"pf-c-code-editor__code"},a().createElement("pre",{className:"pf-c-code-editor__code-pre"},n))))}))))},w=function(e){var t=e.isExpanded,n=e.isLoading,o=e.onClose,i=e["data-ouia-app-id"],l=e.children,s=e.notRequiredDrawerContentBackground,u=(0,c.useTranslation)().t,m=(0,r.useState)(0),p=m[0],v=m[1],f=a().createElement(d.Tabs,{activeKey:p,onSelect:function(e,t){v(t)}},a().createElement(d.Tab,{eventKey:0,title:a().createElement(d.TabTitleText,null,u("common.resources")),"data-testid":"serviceRegustry-tabResources"},a().createElement(S,null)),a().createElement(d.Tab,{eventKey:1,title:a().createElement(d.TabTitleText,null,u("common.sample_code")),"data-testid":"serviceRegistry-tabSampleCode"},a().createElement(C,null)));return a().createElement(h.D5,{isExpanded:t,isLoading:n,onClose:o,panelBodyContent:f,drawerHeaderProps:{text:{label:u("serviceRegistry.connection_details")},title:{value:name,headingLevel:"h1"}},"data-ouia-app-id":i,notRequiredDrawerContentBackground:s},l)},A=function(){var e=(0,c.useTranslation)().t,t=(0,r.useState)(!1),n=t[0],o=t[1],i=(0,r.useState)(!1),l=i[0],s=(i[1],(0,r.useState)(void 0)),u=s[0],m=s[1],p=(0,r.useState)(!1),v=p[0],f=(p[1],(0,r.useState)(!1)),g=f[0],_=(f[1],function(){}),E=function(){};return a().createElement(a().Fragment,null,u?a().createElement(w,{isExpanded:n,isLoading:void 0===u,notRequiredDrawerContentBackground:v,onClose:function(){o(!1)}},a().createElement(d.PageSection,{variant:d.PageSectionVariants.light},a().createElement(b,{name:"",onConnectToRegistry:function(){o(!0),m("test-data")},onDeleteRegistry:function(){}})),g&&a().createElement(d.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(h.C0,{emptyStateProps:{variant:h.jU.NoAccess},titleProps:{title:e("serviceRegistry.unauthorized_empty_state_title")},emptyStateBodyProps:{body:e("serviceRegistry.unauthorized_empty_state_body")},buttonProps:{title:e("serviceRegistry.get_access_to_service_registry"),variant:d.ButtonVariant.primary,onClick:E}}))):a().createElement(d.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(h.C0,{emptyStateProps:{variant:h.jU.GettingStarted},titleProps:{title:e("serviceRegistry.welcome_to_service_registry")},emptyStateBodyProps:{body:e("serviceRegistry.welcome_empty_state_body")},buttonProps:{title:e("serviceRegistry.create_service_registry"),variant:d.ButtonVariant.primary,onClick:_,isLoading:l,spinnerAriaValueText:l?e("common.loading"):void 0}})))},T=n(97375),P=n.n(T),N=n(52407),R=n.n(N),x=n(61686),L=n.n(x),I=n(32578),D=n.n(I),V=n(53974),B=n.n(V),F=(n(76831),P().createInstance()),O="true"===new URLSearchParams(window.location.search).get("pseudolocalization");F.use(new(D())({enabled:O,wrapped:!0})).use(L()).use(R()).use(c.initReactI18next).init({backend:{loadPath:n.p+"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,n,r){return r=r||{},"number"===t?new Intl.NumberFormat(n).format(e):e instanceof Date?"fromNow"===t?B()(e).fromNow(!0===r.omitSuffix):B()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,t,n){}},(function(){B().locale(P().language)})),F.on("languageChanged",(function(e){B().locale(e)}));const K=F;var z=n(75381),U=n(3250),j=n(74057),Z=n(71070),G=function(e){var t=e.filterSelected,n=e.setFilterSelected,o=e.filteredValue,i=e.setFilteredValue,l=e.handleCreateModal,s=(0,c.useTranslation)().t,u=(0,r.useRef)(),m=(0,r.useRef)(),p=(0,r.useState)(!1),v=p[0],f=p[1],g=(0,r.useState)(!0),_=g[0],E=g[1],y=(0,r.useState)(!0),b=y[0],S=y[1],k=(0,r.useState)(!1),C=k[0],w=(k[1],(0,r.useState)()),A=w[0],T=w[1],P=(0,r.useState)(),N=P[0],R=P[1],x=[{label:s("name"),value:"name",disabled:!1},{label:s("owner"),value:"owner",disabled:!1}],L=function(e){return!e||/^([a-zA-Z0-9-_%]*[a-zA-Z0-9-_%])?$/.test(e.trim())},I=function(e,t,n){var r=Object.assign([],o),a=r.findIndex((function(t){return t.filterKey===e}));if(a>-1){var l=r[a];if(l.filterValue&&l.filterValue.length>0){var c=l.filterValue.findIndex((function(e){return e.value===t.value}));if(c>-1){if(!n)return;l.filterValue.splice(c,1)}else r[a].filterValue.push(t)}else r[a].filterValue=[t]}else r.push({filterKey:e,filterValue:[t]});i(r)},D=function(e){"name"===e&&A&&""!=A.trim()?L(A)?(I("name",{value:A,isExact:!1},!1),T("")):E(!1):"owner"===e&&N&&""!=N.trim()&&(L(N)?(I("owner",{value:N,isExact:!1},!1),R("")):S(!1))},V=function(e){var t;if("Enter"===e.key&&!C){var n=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.name;D(n)}},B=function(e){return C?a().createElement("div",null,s("max_filter_message")):a().createElement("div",null,s("input_field_invalid_message",{name:e}))},F=function(e){var t=o.filter((function(t){return t.filterKey===e}));return t.length>0?t[0].filterValue.map((function(e){return e.value})):[]},O=function(e,t,n){var r,a,l=Object.assign([],o),c=l.findIndex((function(t){return t.filterKey===e})),s=Object.assign([],null===(r=l[c])||void 0===r?void 0:r.filterValue),u=t.toString();n&&(null==n?void 0:n.length)>0&&(u=null===(a=null==n?void 0:n.find((function(e){return e.label===t.toString()})))||void 0===a?void 0:a.value);var d=s.findIndex((function(e){return e.value===u}));d>=0&&(l[c].filterValue.splice(d,1),i(l))},K=function(e){var t=Object.assign([],o),n=t.findIndex((function(t){return t.filterKey===e}));n>=0&&(t.splice(n,1),i(t))},z=(a().createElement(a().Fragment,null,a().createElement(d.ToolbarGroup,{variant:"filter-group"},a().createElement(d.ToolbarItem,null,a().createElement(d.Select,{variant:d.SelectVariant.single,"aria-label":"Select filter",onToggle:function(){f(!v)},selections:t,isOpen:v,onSelect:function(e,t){f(!v),n(null==t?void 0:t.toString())}},x.map((function(e,t){return a().createElement(d.SelectOption,{isDisabled:e.disabled,key:t,value:e.value},e.label)})))),a().createElement(d.ToolbarFilter,{chips:F("name"),deleteChip:function(e,t){return O("name",t)},deleteChipGroup:function(){return K("name")},categoryName:s("name")},"name"===(null==t?void 0:t.toLowerCase())&&a().createElement(d.ToolbarItem,null,a().createElement(d.InputGroup,{className:"mk--filter-instances__toolbar--text-input"},a().createElement(d.TextInput,{name:"name",id:"name-input",type:"search","aria-label":s("filter_by_name_lower"),validated:!_||C?d.ValidatedOptions.error:d.ValidatedOptions.default,placeholder:s("filter_by_name_lower"),onChange:function(e){T(e),!_&&E(!0)},onKeyPress:V,value:A,ref:u}),a().createElement(d.Button,{variant:d.ButtonVariant.control,isDisabled:!_||C,onClick:function(){return D("name")},"aria-label":s("filter_by_name_lower")},a().createElement(Z.ZP,null)),(!_||C)&&a().createElement(d.Tooltip,{isVisible:C||!_,content:B("name"),reference:u})))),a().createElement(d.ToolbarFilter,{chips:F("owner"),deleteChip:function(e,t){return O("owner",t)},deleteChipGroup:function(){return K("owner")},categoryName:s("owner")},"owner"===(null==t?void 0:t.toLowerCase())&&a().createElement(d.ToolbarItem,null,a().createElement(d.InputGroup,{className:"mk--filter-instances__toolbar--text-input"},a().createElement(d.TextInput,{name:"owner",id:"owner-input",type:"search","aria-label":s("filter_by_owner"),placeholder:s("filter_by_owner"),validated:!b||C?d.ValidatedOptions.error:d.ValidatedOptions.default,onChange:function(e){R(e),!b&&S(!0)},onKeyPress:V,value:N,ref:m}),a().createElement(d.Button,{isDisabled:!b||C,variant:d.ButtonVariant.control,onClick:function(){return D("owner")},"aria-label":s("filter_by_owner")},a().createElement(Z.ZP,null)),(!b||C)&&a().createElement(d.Tooltip,{isVisible:C||!b,content:B("owner"),reference:m})))))),[{item:a().createElement(d.Button,{variant:"primary",onClick:l,"data-testid":"tableServiceAccounts-buttonCreateServiceAccount"},s("serviceAccount.create_service_account"))}]);return a().createElement(h.L5,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){i([])},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:z})},H=function(e){var t=e.page,n=e.perPage,o=e.expectedTotal,i=e.total,s=e.serviceAccountsDataLoaded,u=e.serviceAccountItems,m=e.onResetCredentials,p=e.onDeleteServiceAccount,v=e.orderBy,f=e.setOrderBy,g=e.filteredValue,_=e.setFilteredValue,E=e.filterSelected,b=e.setFilterSelected,S=e.handleCreateModal,k=e.mainToggle,C=(0,c.useTranslation)().t,w=(0,y.useAuth)(),A=(0,r.useState)(void 0),T=A[0],P=A[1];(0,r.useEffect)((function(){null==w||w.getUsername().then((function(e){return P(e)}))}),[]);var N,R,x=[{title:C("common.name")},{title:C("common.clientID")},{title:C("common.owner"),transforms:[(0,j.cellWidth)(20)]},{title:C("common.description")},{title:C("time_created")}],L=function(e,t,n){var r,a,o,i;"reset-credentials"===n?m&&m(t):"delete-account"===n&&p&&p(t),null===(i=null===(o=null===(a=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.parentElement)||void 0===a?void 0:a.parentElement)||void 0===o?void 0:o.previousSibling)||void 0===i||i.focus()},I=function(e){switch(e.toLowerCase()){case"name":return 0;case"clientID":return 1;case"owner":return 2;case"description":return 3;case"created_at":return 4;default:return}};return a().createElement(a().Fragment,null,a().createElement(G,{filterSelected:E,setFilterSelected:b,total:i,page:t,perPage:n,filteredValue:g,setFilteredValue:_,handleCreateModal:S,mainToggle:k}),a().createElement(h.wR,{tableProps:{cells:x,rows:(N=[],R=(0,z.o8)(t,n,o),s?(null==u||u.forEach((function(e){var t=e.name,n=e.owner,r=e.description,a=e.clientID,o=e.created_at;N.push({cells:[t,a,n,r,{title:(0,z.L0)(o,C("ago"))}],originalData:e})})),N):(0,z.vK)({loadingCount:R,skeleton:a().createElement(d.Skeleton,null),length:x.length})),"aria-label":C("serviceAccount.service_account_list"),actionResolver:function(e,t){return function(e){var t,n;if(!s)return[];var r,a=e.originalData,o=a.owner===T;return o||(r={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}}),[(0,l.__assign)((0,l.__assign)((t={title:C("common.reset_credentials"),id:"reset-credentials"},t["data-testid"]="tableServiceAccounts-actionResetCredentials",t.onClick=function(e){return o&&L(e,a,"reset-credentials")},t),r),{tooltipProps:{position:"left",content:C("serviceAccount.no_permission_to_reset_service_account")}}),(0,l.__assign)((0,l.__assign)((n={title:C("serviceAccount.delete_service_account"),id:"delete-account"},n["data-testid"]="tableServiceAccounts-actionDeleteAccount",n.onClick=function(e){return o&&L(e,a,"delete-account")},n),r),{tooltipProps:{position:"left",content:C("serviceAccount.no_permission_to_delete_service_account")}})]}(e)},onSort:function(e,t,n){f&&f(function(e){switch(e){case 0:return"name";case 1:return"clientID";case 2:return"owner";case 3:return"description";case 4:return"created_at";default:return""}}(t)+" "+n)},sortBy:function(){var e=(null==v?void 0:v.split(" "))||[];if(e.length>1)return{index:I(e[0]),direction:e[1]===j.SortByDirection.asc?j.SortByDirection.asc:j.SortByDirection.desc}}()}}),u&&(null==u?void 0:u.length)<1&&s&&a().createElement(h.C0,{emptyStateProps:{variant:h.jU.NoResult},titleProps:{title:C("no_results_found")},emptyStateBodyProps:{body:C("adjust_your_filters_and_try_again")}}))},M=function(){var e=(0,c.useTranslation)().t,t=(0,y.useAlert)().addAlert,n=(0,h.QK)().showModal,o=(0,u.TH)(),i=new URLSearchParams(o.search),s=parseInt(i.get("page")||"",10)||1,m=parseInt(i.get("perPage")||"",10)||10,p=i.has("user-testing"),v=(0,y.useAuth)(),f=(0,y.useConfig)().kas.apiBasePath,g=(0,r.useState)(),_=g[0],E=g[1],b=(0,r.useState)(),S=b[0],k=b[1],C=(0,r.useState)(!1),w=C[0],A=C[1],T=(0,r.useState)("name asc"),P=T[0],N=T[1],R=(0,r.useState)("name"),x=R[0],L=R[1],I=(0,r.useState)([]),D=I[0],V=I[1],B=(0,r.useState)(!1),F=B[0],O=B[1],K=function(){return(0,l.__awaiter)(void 0,void 0,void 0,(function(){var n;return(0,l.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==v?void 0:v.kas.getToken()];case 1:if(!(n=r.sent()))return[3,5];r.label=2;case 2:return r.trys.push([2,4,,5]),[4,new U.SecurityApi(new U.Configuration({accessToken:n,basePath:f})).get().then((function(e){var t=null==e?void 0:e.data,n=(null==t?void 0:t.items)||[],r=null==n?void 0:n.length;E(t);var a=(0,z.E7)(n,"name","asc");k(a),O(!r||r<1)}))];case 3:return r.sent(),[3,5];case 4:return function(n){var r,a,o,i,l;(0,z.G6)(n)&&(i=null===(r=n.response)||void 0===r?void 0:r.data.reason,l=null===(o=null===(a=n.response)||void 0===a?void 0:a.data)||void 0===o?void 0:o.code),l===z.SM.UNAUTHORIZED_USER?A(!0):t(e("common.something_went_wrong"),d.AlertVariant.danger,i)}(r.sent()),[3,5];case 5:return[2]}}))}))};(0,r.useEffect)((function(){K()}),[]);var j=function(e){n(h.Ny.RESET_CREDENTIALS,{serviceAccountToReset:e})},Z=function(){n(h.Ny.CREATE_SERVICE_ACCOUNT,{fetchServiceAccounts:K})},G=function(e){n(h.Ny.DELETE_SERVICE_ACCOUNT,{serviceAccountToDelete:e,fetchServiceAccounts:K})};return w?a().createElement(h.MASFullPageError,{titleProps:{title:e("serviceAccount.unauthorized_access_to_service_accounts_title"),headingLevel:"h2"},emptyStateBodyProps:{body:e("serviceAccount.unauthorized_access_to_service_accounts_info")}}):a().createElement(a().Fragment,null,a().createElement(d.PageSection,{variant:d.PageSectionVariants.light},a().createElement(d.TextContent,null,a().createElement(d.Text,{component:"h1"}," ",e("serviceAccount.service_accounts")),a().createElement(d.Text,{component:"p"},e("serviceAccount.service_accounts_title_header_info")))),function(){var t;return void 0===S?a().createElement(d.PageSection,{variant:d.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(h.yR,null)):F?a().createElement(d.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(h.C0,{emptyStateProps:{variant:h.jU.NoItems},titleProps:{title:e("serviceAccount.you_do_not_have_any_service_accounts_yet")},emptyStateBodyProps:{body:e("serviceAccount.create_service_account_to_get_started")},buttonProps:(t={title:e("serviceAccount.create_service_account"),onClick:Z},t["data-testid"]="emptyStateStreams-buttonCreateServiceAccount",t)})):a().createElement(d.PageSection,{className:"mk--main-page__page-section--table pf-m-padding-on-xl",variant:d.PageSectionVariants.default,padding:{default:"noPadding"}},a().createElement(d.Card,null,a().createElement(H,{page:s,perPage:m,total:(null==_?void 0:_.total)||1,expectedTotal:0,serviceAccountsDataLoaded:!0,serviceAccountItems:S,orderBy:P,setOrderBy:N,filterSelected:x,setFilterSelected:L,filteredValue:D,setFilteredValue:V,onResetCredentials:j,onDeleteServiceAccount:G,handleCreateModal:Z,mainToggle:p})))}())};var q,W=[{component:function(){var e=(0,u.k6)();return a().createElement(y.ConfigContext.Provider,{value:{kas:{apiBasePath:__BASE_PATH__}}},a().createElement(_.u,null,a().createElement(E.OU,null,a().createElement(g.L,{onConnectToRoute:function(t,n){e.push("/"+n)},getConnectToRoutePath:function(t,n){return e.createHref({pathname:"/"+n})},preCreateInstance:function(e){return Promise.resolve(e)},createDialogOpen:function(){return!1},tokenEndPointUrl:"fake-token-url"}))))},exact:!0,label:"Kafka Instances",path:"/",title:"Kafka Instances"},{component:function(){return a().createElement(y.ConfigContext.Provider,{value:{kas:{apiBasePath:__BASE_PATH__}}},a().createElement(_.u,null,a().createElement(A,null)))},exact:!0,label:"Service Registry",path:"/service-registry",title:"Service Registry"},{component:function(){return a().createElement(y.ConfigContext.Provider,{value:{kas:{apiBasePath:__BASE_PATH__}}},a().createElement(h.uZ,null,a().createElement(h.OU,null,a().createElement(M,null))))},exact:!0,label:"Service Accounts",path:"/service-accounts",title:"Service Accounts"}],X=function(e){var t=e.component,n=e.isAsync,a=void 0!==n&&n,o=e.title,i=(0,l.__rest)(e,["component","isAsync","title"]);return function(e){var t=(0,f.useLastLocation)();r.useEffect((function(){return e||null===t||(q=(0,m.mh)()),function(){window.clearTimeout(q)}}),[e,t])}(a),(0,v.j)(o),r.createElement(u.AW,{render:function(e){return r.createElement(t,(0,l.__assign)({},i,e))}})},$=function(e){var t=e.title;return(0,v.j)(t),r.createElement(u.AW,{component:p.o})},Q=W.reduce((function(e,t){return(0,l.__spreadArray)((0,l.__spreadArray)([],e),t.routes?t.routes:[t])}),[]),Y=function(){var e=(0,c.useTranslation)().t;return r.createElement(f.LastLocationProvider,null,r.createElement(u.rs,null,Q.map((function(e,t){var n=e.path,a=e.exact,o=e.component,i=e.title,l=e.isAsync;return r.createElement(X,{path:n,exact:a,component:o,key:t,title:i,isAsync:l})})),r.createElement($,{title:e("404_page_does_not_exist")})))};const J=n.p+"f940137c.svg";var ee,te,ne=n(86235),re=n.n(ne),ae=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return ee?[3,2]:[4,oe()];case 1:e.sent(),e.label=2;case 2:return[2,ee]}}))}))},oe=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(ee=re()())?[4,ee.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),ee=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},ie=function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==ee?void 0:ee.updateToken(50)];case 1:return e.sent(),(null==ee?void 0:ee.token)?[2,ee.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},le=a().createContext({keycloak:void 0}),ce=function(e){var t={kas:{getToken:ie},getUsername:function(){return(0,l.__awaiter)(void 0,void 0,Promise,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==ee?void 0:ee.updateToken(50)];case 1:return e.sent(),(null==ee?void 0:ee.tokenParsed)?[2,ee.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))})).then((function(e){return e.username}))}};return a().createElement(y.AuthContext.Provider,{value:t},e.children)},se=function(e){var t,n=e.children,a=r.useState(!0),o=a[0],i=a[1],l=r.useState(!0),m=l[0],p=l[1],v=r.useState(!1),f=v[0],g=v[1],_=r.useContext(le),E=(0,u.TH)(),y=(0,c.useTranslation)().t;if(!_.keycloak)return r.createElement("div",null,"403 Unauthorized");if(!_.keycloak.authenticated)return null===(t=_.keycloak)||void 0===t?void 0:t.login();var h=_.keycloak.tokenParsed&&_.keycloak.tokenParsed.email,b=r.createElement(d.PageHeaderTools,null,h),S=r.createElement(d.PageHeader,{logo:r.createElement((function(){var e=(0,u.k6)();return r.createElement("img",{src:J,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:o,headerTools:b,onNavToggle:m?function(){g(!f)}:function(){i(!o)},"aria-label":y("global_navigation")}),k=function(e,t){return r.createElement(d.NavItem,{key:e.label+"-"+t,id:e.label+"-"+t},r.createElement(s.NavLink,{exact:!0,to:e.path,activeClassName:"pf-m-current"},(null==e?void 0:e.label)&&y(e.label)))},C=r.createElement(d.Nav,{id:"nav-primary-simple",role:"navigation",theme:"dark","aria-label":y("global")},r.createElement(d.NavList,{id:"nav-list-simple"},W.map((function(e,t){return e.label&&(e.routes?(n=e,a=t,r.createElement(d.NavExpandable,{key:n.label+"-"+a,id:n.label+"-"+a,title:n.label,isActive:n.routes.some((function(e){return e.path===E.pathname}))},n.routes.map((function(e,t){return e.label&&k(e,t)})))):k(e,t));var n,a})))),w=r.createElement(d.PageSidebar,{theme:"dark",nav:C,isNavOpen:m?f:o}),A=r.createElement(d.SkipToContent,{href:"#primary-app-container"},y("skip_to_content"));return r.createElement(d.Page,{mainContainerId:"primary-app-container",role:"main",header:S,sidebar:w,onPageResize:function(e){p(e.mobileView)},skipToContent:A},n)};i().render(a().createElement((function(){var e=a().useState(!1),t=e[0],n=e[1];return a().useEffect((function(){(0,l.__awaiter)(void 0,void 0,void 0,(function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,ae()];case 1:return te=e.sent(),n(!0),[2]}}))}))}),[]),t?a().createElement(c.I18nextProvider,{i18n:K},a().createElement(le.Provider,{value:{keycloak:te,profile:null==te?void 0:te.profile}},a().createElement(ce,null,a().createElement(s.BrowserRouter,null,a().createElement(a().Suspense,{fallback:a().createElement(h.yR,null)},a().createElement(h.tV,null,a().createElement(se,null,a().createElement(Y,null)))))))):a().createElement(h.yR,null)}),null),document.getElementById("root"))}}]);
//# sourceMappingURL=173.3bb7048a.js.map