/*! For license information please see 9157.ba163ab2.js.LICENSE.txt */
"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[9157,5893],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const s=n(223),a=s.__importStar(n(75418));var r;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:o=0,width:c,height:l,svgPath:d}){var h;return h=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:r,color:i,title:h,noVerticalAlign:u}=e,p=s.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(h),v=t.getSize(r),g=-.125*Number.parseFloat(v),x=u?null:{verticalAlign:`${g}em`},f=[n,o,c,l].join(" ");return a.createElement("svg",Object.assign({style:x,fill:i,height:v,width:v,viewBox:f,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},p),m&&a.createElement("title",{id:this.id},h),a.createElement("path",{d}))}},h.displayName=e,h.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},h}},84564:(e,t,n)=>{t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},5569:(e,t,n)=>{t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},34558:(e,t,n)=>{t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},38296:(e,t,n)=>{function s(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)&&e.length){const n=s(...e);n&&t.push(n)}else if("object"===a)for(const s in e)n.call(e,s)&&e[s]&&t.push(s)})),t.join(" ")}n.d(t,{i:()=>s})},75251:(e,t,n)=>{n(27418);var s=n(75418),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;a=r("react.element"),t.Fragment=r("react.fragment")}var i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,r={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:d,props:r,_owner:i.current}}t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},48090:(e,t,n)=>{n(85893),n(4716),n(99922),n(68199),n(3433)},3433:(e,t,n)=>{n.d(t,{pf:()=>o.p,D5:()=>p,C0:()=>c.C,jU:()=>c.j,yR:()=>u,wu:()=>m.wu,wR:()=>v.w,L5:()=>g.L,bN:()=>m.bN,h0:()=>m.h0});var s=n(85893),a=n(75418);n(5854);var r=n(223),i=n(99922);var o=n(43277),c=n(12973),l=n(68199),d=n(4716);n(4256);class h extends a.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,s.jsx)(i.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,s.jsx)(c.C,Object.assign({emptyStateProps:{variant:c.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,s.jsx)(i.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,l.withRouter)((0,d.withTranslation)()(h));const u=({bullseyeProps:e,spinnerProps:t})=>(0,s.jsx)(i.Bullseye,Object.assign({},e,{children:(0,s.jsx)(i.Spinner,Object.assign({},t))}));n(85853);const p=({onClose:e,isLoading:t=!0,drawerPanelContentProps:n,drawerHeaderProps:a,isExpanded:o,children:c,panelBodyContent:l,onExpand:d,notRequiredDrawerContentBackground:h,"data-ouia-app-id":p,inlineAlertMessage:m})=>{const v=n||{},{widths:g}=v,x=(0,r.__rest)(v,["widths"]),{text:f,title:_}=a||{},b=(0,s.jsx)(i.DrawerPanelContent,Object.assign({widths:g||{default:"width_50"}},x,{children:t?(0,s.jsx)(u,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.DrawerHead,{children:[(0,s.jsxs)(i.TextContent,{children:[(null==f?void 0:f.label)&&(0,s.jsx)(i.Text,Object.assign({component:(null==f?void 0:f.component)||i.TextVariants.small,className:(null==f?void 0:f.className)||"pf-u-mb-0"},{children:null==f?void 0:f.label})),(null==_?void 0:_.value)&&(0,s.jsx)(i.Title,Object.assign({headingLevel:(null==_?void 0:_.headingLevel)||"h2",size:(null==_?void 0:_.size)||i.TitleSizes.xl,className:(null==_?void 0:_.className)||"pf-u-mt-0"},{children:null==_?void 0:_.value}))]}),(0,s.jsx)(i.DrawerActions,{children:(0,s.jsx)(i.DrawerCloseButton,{onClick:e})})]}),(0,s.jsxs)(i.DrawerPanelBody,{children:[m,l]})]})}));return(0,s.jsx)(i.Drawer,Object.assign({isExpanded:o,onExpand:d,"data-ouia-app-id":p,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,s.jsx)(i.DrawerContent,Object.assign({panelContent:b,className:h?"pf-m-no-background":""},{children:(0,s.jsxs)(i.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",c]}))}))}))};var m=n(16846),v=n(69887),g=n(93697);n(8509)},95950:(e,t,n)=>{n.d(t,{A:()=>s.A});var s=n(94622)},217:(e,t,n)=>{n.d(t,{o:()=>m});var s=n(85893),a=n(4716),r=n(75418),i=n(31803),o=n(75381),c=n(3433),l=n(99922),d=n(63286),h=n(70445);const u=(0,r.lazy)((()=>n.e(3495).then(n.bind(n,43495)))),p=({instance:e,activeTab:t,setActiveTab:n,tokenEndPointUrl:p})=>{const{t:m}=(0,a.useTranslation)(["kasTemporaryFixMe"]),v=e.status===o.Od.ACCEPTED||e.status===o.Od.PREPARING;return(0,s.jsx)(r.Suspense,Object.assign({fallback:(0,s.jsx)(c.yR,{})},{children:(0,s.jsxs)(l.Tabs,Object.assign({activeKey:t,onSelect:(e,t)=>n(t)},{children:[(0,s.jsx)(l.Tab,Object.assign({eventKey:d.Z.DETAILS,title:(0,s.jsx)(l.TabTitleText,{children:m("details")})},{children:(0,s.jsx)(h.KafkaDetailsTab,{id:e.id,owner:e.owner,createdAt:(0,i.parseISO)(e.created_at),updatedAt:(0,i.parseISO)(e.updated_at),expiryDate:(0,i.addHours)((0,i.parseISO)(e.created_at),48),size:e.size.display_name,ingress:(e.size.ingress_throughput_per_sec.bytes||0)/1048576,egress:(e.size.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((e.size.max_data_retention_size.bytes||0)/1073741824),maxPartitions:e.size.max_partitions,connections:e.size.total_max_connections,connectionRate:e.size.max_connection_attempts_per_sec,messageSize:(e.size.max_message_size.bytes||0)/1048576,region:m(e.region),instanceType:"standard"===e.instance_type?"standard":"eval",isLoadingSize:!1})})),(0,s.jsx)(l.Tab,Object.assign({eventKey:d.Z.CONNECTION.toString(),title:(0,s.jsx)(l.TabTitleText,{children:m("connection")}),"data-testid":"drawerStreams-tabConnect"},{children:(0,s.jsx)(u,{externalServer:(()=>{const{bootstrap_server_host:t}=e;return(null==t?void 0:t.endsWith(":443"))?t:`${t}:443`})(),isKafkaPending:v,tokenEndPointUrl:p,instanceId:e.id})}))]}))}))},m=({"data-ouia-app-id":e,isDrawerOpen:t,drawerInstance:n,setDrawerActiveTab:r,drawerActiveTab:i,closeDrawer:o,tokenEndPointUrl:l,children:h})=>{const{t:u}=(0,a.useTranslation)(["kasTemporaryFixMe"]);return(0,s.jsx)(c.D5,Object.assign({isExpanded:t,isLoading:void 0===n,onClose:o,panelBodyContent:n&&(0,s.jsx)(p,{tokenEndPointUrl:l,activeTab:i||d.Z.DETAILS,instance:n,setActiveTab:r}),drawerHeaderProps:{text:{label:u("instance_name")},title:{value:null==n?void 0:n.name,headingLevel:"h1"}},"data-ouia-app-id":e,notRequiredDrawerContentBackground:void 0===n},{children:h}))}},82519:(e,t,n)=>{n(75418)}}]);
