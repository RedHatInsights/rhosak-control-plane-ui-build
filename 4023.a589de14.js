/*! For license information please see 4023.a589de14.js.LICENSE.txt */
(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4023,8296,5893],{35183:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(223),s=r.__importStar(n(45052));var a;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case a.sm:return"1em";case a.md:return"1.5em";case a.lg:return"2em";case a.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:o=0,width:c,height:l,svgPath:d}){var u;return u=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:a,color:i,title:u,noVerticalAlign:h}=e,p=r.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(u),v=t.getSize(a),f=-.125*Number.parseFloat(v),g=h?null:{verticalAlign:`${f}em`},y=[n,o,c,l].join(" ");return s.createElement("svg",Object.assign({style:g,fill:i,height:v,width:v,viewBox:y,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},p),m&&s.createElement("title",{id:this.id},u),s.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:a.sm,noVerticalAlign:!1},u}},84564:(e,t,n)=>{"use strict";t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},5569:(e,t,n)=>{"use strict";t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{"use strict";t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},34558:(e,t,n)=>{"use strict";t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},38296:(e,t,n)=>{"use strict";function r(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const s=typeof e;if("string"===s||"number"===s)t.push(e);else if(Array.isArray(e)&&e.length){const n=r(...e);n&&t.push(n)}else if("object"===s)for(const r in e)n.call(e,r)&&e[r]&&t.push(r)})),t.join(" ")}n.d(t,{i:()=>r})},56176:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,r){var s=n.prototype,a=s.format;r.en.formats=e,s.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,s){var a=s&&s.toUpperCase();return r||n[s]||e[s]||n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))}(t,void 0===n?{}:n);return a.call(this,r)}}}()},71958:()=>{},77903:()=>{},75251:(e,t,n)=>{"use strict";n(27418);var r=n(13400),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{"use strict";e.exports=n(75251)},48090:(e,t,n)=>{"use strict";n(85893),n(8898),n(99421),n(68199),n(28962)},28962:(e,t,n)=>{"use strict";n.d(t,{pf:()=>i.p,D5:()=>h.D,C0:()=>o.C,jU:()=>o.j,yR:()=>u,wu:()=>p.wu,wR:()=>m.w,L5:()=>v.L,bN:()=>p.bN,h0:()=>p.h0});var r=n(85893),s=n(75418);n(7451);n(223);var a=n(99421);var i=n(43277),o=n(12973),c=n(68199),l=n(8898);n(4256);class d extends s.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,r.jsx)(a.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,r.jsx)(o.C,Object.assign({emptyStateProps:{variant:o.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,r.jsx)(a.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,c.withRouter)((0,l.withTranslation)()(d));const u=({bullseyeProps:e,spinnerProps:t})=>(0,r.jsx)(a.Bullseye,Object.assign({},e,{children:(0,r.jsx)(a.Spinner,Object.assign({},t))}));var h=n(87842),p=n(16846),m=n(69887),v=n(93697);n(8509)},94622:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(85893),s=n(75418),a=n(8898),i=n(7451);const o=()=>{const{registerModals:e}=(0,i.useModal)();return e((()=>{const{t:e}=(0,a.useTranslation)(["kasTemporaryFixMe"]);return{[i.ModalType.KasCreateInstance]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(223),n.e(1803),n.e(4734),n.e(69),n.e(6437)]).then(n.bind(n,76437)))),variant:"medium",title:e("create_a_kafka_instance")},[i.ModalType.KasDeleteInstance]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(223),n.e(5052),n.e(9421),n.e(1803),n.e(8199),n.e(4734),n.e(8827),n.e(524)]).then(n.bind(n,78578)))),variant:"small"},[i.ModalType.KasTransferOwnership]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(223),n.e(9421),n.e(4734),n.e(8512)]).then(n.bind(n,98512)))),variant:"medium",title:e("change_owner")},[i.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(223),n.e(5052),n.e(9421),n.e(1803),n.e(8199),n.e(4734),n.e(8827),n.e(8752)]).then(n.bind(n,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[i.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(223),n.e(5052),n.e(9421),n.e(1803),n.e(8199),n.e(4734),n.e(8827),n.e(645)]).then(n.bind(n,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[i.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(223),n.e(5052),n.e(9421),n.e(1803),n.e(8199),n.e(4734),n.e(8827),n.e(4410)]).then(n.bind(n,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,r.jsx)(r.Fragment,{})}},95950:(e,t,n)=>{"use strict";n.d(t,{A:()=>r.A});var r=n(94622)},217:(e,t,n)=>{"use strict";n.d(t,{o:()=>y});var r=n(85893),s=n(75418),a=n(8898),i=n(86369),o=n.n(i),c=n(56176),l=n.n(c),d=(n(77903),n(71958),n(28962)),u=n(75381),h=n(99421),p=n(81548),m=n(63286);const v=(0,s.lazy)((()=>n.e(3495).then(n.bind(n,43495)))),f=(0,s.lazy)((()=>n.e(4988).then(n.bind(n,44988)))),g=({tokenEndPointUrl:e})=>{const{t}=(0,a.useTranslation)(["kasTemporaryFixMe"]),{instanceDrawerTab:n,setInstanceDrawerTab:i,instanceDrawerInstance:o}=(0,p.gD)(),c=(null==o?void 0:o.status)===u.Od.ACCEPTED||(null==o?void 0:o.status)===u.Od.PREPARING;return(0,r.jsx)(s.Suspense,Object.assign({fallback:(0,r.jsx)(d.yR,{})},{children:(0,r.jsxs)(h.Tabs,Object.assign({activeKey:n.toString(),onSelect:(e,t)=>(e=>{e===m.Z.CONNECTION?i(m.Z.CONNECTION):i(m.Z.DETAILS)})(t)},{children:[(0,r.jsx)(h.Tab,Object.assign({eventKey:m.Z.DETAILS.toString(),title:(0,r.jsx)(h.TabTitleText,{children:t("details")})},{children:(0,r.jsx)(f,{})})),(0,r.jsx)(h.Tab,Object.assign({eventKey:m.Z.CONNECTION.toString(),title:(0,r.jsx)(h.TabTitleText,{children:t("connection")}),"data-testid":"drawerStreams-tabConnect"},{children:(0,r.jsx)(v,{externalServer:(()=>{const{bootstrap_server_host:e}=o||{};return(null==e?void 0:e.endsWith(":443"))?e:`${e}:443`})(),isKafkaPending:c,tokenEndPointUrl:e,instanceId:null==o?void 0:o.id})}))]}))}))},y=({renderContent:e,"data-ouia-app-id":t,tokenEndPointUrl:n})=>{o().extend(l());const{t:i}=(0,a.useTranslation)(["kasTemporaryFixMe"]),{isInstanceDrawerOpen:c,instanceDrawerInstance:u,openInstanceDrawer:h,closeInstanceDrawer:m,setInstanceDrawerInstance:v,noInstances:f}=(0,p.gD)(),y=(0,s.useMemo)((()=>e({closeDrawer:m,openDrawer:h,setInstance:v})),[m,h,e,v]);return(0,r.jsx)(d.D5,Object.assign({isExpanded:c,isLoading:void 0===u,onClose:m,panelBodyContent:(0,r.jsx)(g,{tokenEndPointUrl:n}),drawerHeaderProps:{text:{label:i("instance_name")},title:{value:null==u?void 0:u.name,headingLevel:"h1"}},"data-ouia-app-id":t,notRequiredDrawerContentBackground:f},{children:y}))}},3946:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(85893),s=n(217),a=n(14313),i=n(95950),o=n(81548);const c=({"data-ouia-app-id":e,tokenEndPointUrl:t,renderContent:n,initialInstance:c,initialNoInstances:l,initialTab:d})=>(0,r.jsxs)(a.ModalProvider,{children:[(0,r.jsx)(o.e0,Object.assign({initialInstance:c,initialNoInstances:l,initialTab:d},{children:(0,r.jsx)(s.o,{"data-ouia-app-id":e,tokenEndPointUrl:t,renderContent:n})})),(0,r.jsx)(i.A,{})]})},81548:(e,t,n)=>{"use strict";n.d(t,{gD:()=>o,e0:()=>c});var r=n(85893),s=n(75418),a=n(63286);const i=(0,s.createContext)(void 0),o=()=>{const e=(0,s.useContext)(i);if(void 0===e)throw new Error("must be used inside a InstanceDrawerContext provider");return e},c=({initialTab:e,initialInstance:t,initialNoInstances:n=!1,children:o})=>{const c=a.Z.DETAILS,[l,d]=(0,s.useState)(e),[u,h]=(0,s.useState)(t),[p,m]=(0,s.useState)(n);return(0,r.jsx)(i.Provider,Object.assign({value:{isInstanceDrawerOpen:void 0!==l,instanceDrawerTab:void 0===l?c:l,setInstanceDrawerTab:d,instanceDrawerInstance:u,setInstanceDrawerInstance:h,setNoInstances:m,noInstances:p,openInstanceDrawer:e=>{d(e||c)},closeInstanceDrawer:()=>{d(void 0),h(void 0)}}},{children:o}))}},63286:(e,t,n)=>{"use strict";var r;n.d(t,{Z:()=>r}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(r||(r={}))},82519:(e,t,n)=>{"use strict";n(75418)}}]);
//# sourceMappingURL=4023.a589de14.js.map