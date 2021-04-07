(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[195],{9995:(e,t,a)=>{"use strict";a.d(t,{G:()=>r});var n=a(48121),r=a.n(n)().createContext({basePath:void 0})},42603:(e,t,a)=>{"use strict";a.d(t,{V:()=>r});var n=a(48121),r=a.n(n)().createContext(void 0)},99229:(e,t,a)=>{"use strict";a.d(t,{wP:()=>s,Z7:()=>c,uZ:()=>u});var n=a(70655),r=a(48121),i=a.n(r),l=a(10705),o=a(25399),s=(0,r.createContext)({addAlert:function(){}}),c=function(){return(0,r.useContext)(s)},u=function(e){var t=e.children,a=(0,r.useState)([]),c=a[0],u=a[1],d=(0,r.useState)([]),p=d[0],m=d[1];(0,r.useEffect)((function(){var e=p.map((function(e){return e.key})),t=c.filter((function(t){return!e.includes(t.key)})).map((function(e){var t=setTimeout((function(){return v(e.key)}),8e3);return{key:e.key,timeOut:t}}));return m((0,n.__spreadArray)((0,n.__spreadArray)([],p),t)),function(){return p.forEach((function(e){return clearTimeout(e.timeOut)}))}}),[c]);var v=function(e){u((function(t){return(0,n.__spreadArray)([],t.filter((function(t){return t.key!==e})))})),m((function(t){return(0,n.__spreadArray)([],t.filter((function(t){return t.key===e})))}))};return i().createElement(s.Provider,{value:{addAlert:function(e,t,a,r){void 0===t&&(t=o.AlertVariant.default),u((0,n.__spreadArray)((0,n.__spreadArray)([],c),[{key:(new Date).getTime(),title:e,variant:t,body:a,dataTestId:r}]))}}},i().createElement(l.s,{alerts:c,onCloseAlert:v}),t)}},93564:(e,t,a)=>{"use strict";a.d(t,{wP:()=>n.wP,uZ:()=>n.uZ,Z7:()=>n.Z7});var n=a(99229);a(10705)},57972:(e,t,a)=>{"use strict";a.d(t,{L:()=>c});var n=a(48121),r=a.n(n),i=a(25399),l=a(690),o=(a(46795),a(96888),a(28764),a(13006)),s=a(48784),c=(a(57706),function(e){var t=e.isOpen,a=e.setIsOpen,c=e.credential,u=e.setCredential,d=e.isLoading,p=e.title,m=(0,o.useTranslation)().t,v=(0,n.useState)(!1),_=v[0],f=v[1],g=(0,n.useState)(!1),y=g[0],S=g[1],E=(0,n.useState)(""),h=(E[0],E[1],function(){a(!1),f(!_),u(void 0),S(!1)}),P=r().createElement(r().Fragment,null,r().createElement(s.C0,{emptyStateProps:{variant:i.EmptyStateVariant.large},emptyStateIconProps:{icon:l.ZP},titleProps:{title:m("credentials_successfully_generated"),headingLevel:"h2",size:i.TitleSizes.lg}},r().createElement(i.TextContent,null,r().createElement(i.Text,{component:i.TextVariants.small,className:"pf-u-mt-lg"},m("connect_to_the_kafka_instance_using_this_clientID_and_secret"))),r().createElement(i.InputGroup,{className:"pf-u-mt-lg"},r().createElement(i.InputGroupText,{className:"mk--generate-credential__empty-state--input-group"},m("client_id")),r().createElement(i.ClipboardCopy,{isReadOnly:!0,className:"pf-u-w-100","data-testid":"modalCredentials-copyClientID",textAriaLabel:m("client_id")},null==c?void 0:c.clientID)),r().createElement(i.InputGroup,{className:"pf-u-mt-md"},r().createElement(i.InputGroupText,{className:"mk--generate-credential__empty-state--input-group"},m("common.client_secret")),r().createElement(i.ClipboardCopy,{isReadOnly:!0,className:"pf-u-w-100","data-testid":"modalCredentials-copyClientSecret",textAriaLabel:m("common.client_secret")},null==c?void 0:c.clientSecret)),r().createElement(i.TextContent,null,r().createElement(i.Text,{component:i.TextVariants.small,className:"pf-u-mt-lg"},m("create_service_account_credentials_warning_message"))),r().createElement(i.Bullseye,{className:"pf-u-mt-lg"},r().createElement(i.Checkbox,{label:m("client_id_confirmation_checkbox_label"),isChecked:y,onChange:function(e){S(e)},id:"check-1",name:"check1"})),r().createElement(i.Button,{variant:"primary",isDisabled:!y,onClick:h,"data-testid":"modalCredentials-buttonClose"},m("close"))));return r().createElement(i.Modal,{variant:i.ModalVariant.medium,title:p||m("serviceAccount.create_a_service_account"),isOpen:t,onClose:h,showClose:!1},d?r().createElement(s.yR,null):P)})},48090:(e,t,a)=>{"use strict";a(48121),a(13006),a(25399),a(48784)},48784:(e,t,a)=>{"use strict";a.d(t,{uZ:()=>r.uZ,AX:()=>i.A,D5:()=>E.D,C0:()=>g,jU:()=>n,nW:()=>b,yR:()=>S.y,wu:()=>h.w,wR:()=>P.w,L5:()=>C.L,Z7:()=>r.Z7});var n,r=a(93564),i=a(53803),l=a(70655),o=a(48121),s=a.n(o),c=a(25399),u=a(20777),d=a(34558),p=a(5569),m=a(71070),v=a(84564),_=a(19694),f=a(26378);a(64514);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(n||(n={}));var g=function(e){var t=e.titleProps,a=e.buttonProps,r=e.emptyStateIconProps,i=e.emptyStateProps,o=e.emptyStateBodyProps,g=e.children,y=a||{},S=y.variant,E=void 0===S?c.ButtonVariant.primary:S,h=y.onClick,P=(0,l.__rest)(y,["variant","onClick"]),C=t||{},b=C.title,k=(0,l.__rest)(C,["title"]),N=o||{},x=N.body,I=(0,l.__rest)(N,["body"]),A=i||{},T=A.variant,w=void 0===T?n.GettingStarted:T,z=A.className,L=(0,l.__rest)(A,["variant","className"]),V=function(){var e={};switch(w){case n.GettingStarted:e={variant:c.EmptyStateVariant.xl,icon:d.ZP,titleSize:c.TitleSizes["4xl"],headingLevel:"h1"};break;case n.NoAccess:e={variant:c.EmptyStateVariant.large,icon:p.ZP,titleSize:c.TitleSizes.xl,headingLevel:"h2"};break;case n.NoItems:e={variant:c.EmptyStateVariant.large,icon:u.ZP,titleSize:c.TitleSizes.xl,headingLevel:"h2"};break;case n.NoResult:e={variant:c.EmptyStateVariant.large,icon:m.ZP,titleSize:c.TitleSizes.lg,headingLevel:"h2"};break;case n.UnexpectedError:e={variant:c.EmptyStateVariant.full,icon:v.ZP,titleSize:c.TitleSizes.lg,headingLevel:"h1"};break;case n.PageNotFound:e={variant:c.EmptyStateVariant.full,icon:_.ZP,titleSize:c.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:w||c.EmptyStateVariant.full,icon:null==r?void 0:r.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),Z=V.variant,D=V.icon,O=V.titleSize,R=V.headingLevel;return s().createElement(s().Fragment,null,s().createElement(c.EmptyState,(0,l.__assign)({variant:Z,className:(0,f.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",z)},L),s().createElement(c.EmptyStateIcon,(0,l.__assign)({icon:D},r)),b&&s().createElement(c.Title,(0,l.__assign)({headingLevel:R,size:O},k),b),x&&s().createElement(c.EmptyStateBody,(0,l.__assign)({},I),x),(null==a?void 0:a.title)&&s().createElement(c.Button,(0,l.__assign)({variant:E,onClick:h},P),null==a?void 0:a.title),g))},y=a(34747),S=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.updateState=function(e){t.setState({hasError:e})},t}(0,l.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){return this.state.hasError?s().createElement(y.S,{updateState:this.updateState}):this.props.children}}(o.Component),a(63477)),E=a(98034),h=a(16846),P=a(69887),C=a(93697),b=function(e){var t=e.pageSection,a=e.titleProps,n=e.emptyStateProps,r=e.emptyStateIconProps,i=e.emptyStateBodyProps,o=e.buttonProps,u=t||{},d=u.variant,m=void 0===d?c.PageSectionVariants.default:d,v=u.padding,_=(0,l.__rest)(u,["variant","padding"]);return s().createElement(c.PageSection,(0,l.__assign)({variant:m},_,{padding:v||{default:"noPadding"},isFilled:!0}),s().createElement(g,{titleProps:a,emptyStateProps:n,emptyStateIconProps:(0,l.__assign)({icon:(null==r?void 0:r.icon)||p.ZP},r),emptyStateBodyProps:i,buttonProps:o}))};a(8509),a(94179)},82519:(e,t,a)=>{"use strict";a(48121)},52648:(e,t,a)=>{"use strict";var n;a.d(t,{bv:()=>r,Bh:()=>l,hm:()=>i,Od:()=>n,JB:()=>o,wu:()=>p,pf:()=>s,md:()=>d,o8:()=>m,Nw:()=>c,lt:()=>u,E7:()=>v}),function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision"}(n||(n={}));var r=[{value:"aws",label:"Amazon Web Services"}],i=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"}],l=[{value:"us-east-1",label:"US East, N. Virginia"}],o=32,s=10,c=50,u=255,d=5e3,p=function(e){return void 0!==e&&""!==e},m=function(e,t,a){var n=t;a&&a>0&&(e===(a%t!=0?Math.floor(a/t)+1:Math.floor(a/t))&&(n=a>t?a%t==0?t:a%t:a));return 0!==n?n:t},v=function(e,t,a){void 0===a&&(a="asc");return null==e?void 0:e.sort((function(e,n){if(!e.hasOwnProperty(t)||!n.hasOwnProperty(t))return 0;var r="string"==typeof e[t]?e[t].toUpperCase():e[t],i="string"==typeof n[t]?n[t].toUpperCase():n[t],l=0;return r>i?l=1:r<i&&(l=-1),"desc"===a?-1*l:l}))}}}]);
//# sourceMappingURL=195.2fee25a4.js.map