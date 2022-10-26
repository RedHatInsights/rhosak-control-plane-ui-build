"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8613],{48090:(e,t,n)=>{n(85893),n(30645),n(65834),n(73685),n(3433)},3433:(e,t,n)=>{n.d(t,{pf:()=>o.p,D5:()=>h,C0:()=>d.C,jU:()=>d.j,yR:()=>p,wR:()=>j.w,L5:()=>v.L,bN:()=>x.bN,h0:()=>x.h0});var s=n(85893),a=n(93264);n(50834);var r=n(9922),i=n(65834);var o=n(43277),d=n(12973),l=n(73685),c=n(30645);n(4256);class u extends a.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,s.jsx)(i.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,s.jsx)(d.C,Object.assign({emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,s.jsx)(i.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,l.withRouter)((0,c.withTranslation)()(u));const p=({bullseyeProps:e,spinnerProps:t})=>(0,s.jsx)(i.Bullseye,Object.assign({},e,{children:(0,s.jsx)(i.Spinner,Object.assign({},t))}));n(85853);const h=({onClose:e,isLoading:t=!0,drawerPanelContentProps:n,drawerHeaderProps:a,isExpanded:o,children:d,panelBodyContent:l,onExpand:c,notRequiredDrawerContentBackground:u,"data-ouia-app-id":h,inlineAlertMessage:x})=>{const j=n||{},{widths:v}=j,g=(0,r.__rest)(j,["widths"]),{text:b,title:C}=a||{},m=(0,s.jsx)(i.DrawerPanelContent,Object.assign({widths:v||{default:"width_50"}},g,{children:t?(0,s.jsx)(p,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.DrawerHead,{children:[(0,s.jsxs)(i.TextContent,{children:[(null==b?void 0:b.label)&&(0,s.jsx)(i.Text,Object.assign({component:(null==b?void 0:b.component)||i.TextVariants.small,className:(null==b?void 0:b.className)||"pf-u-mb-0"},{children:null==b?void 0:b.label})),(null==C?void 0:C.value)&&(0,s.jsx)(i.Title,Object.assign({headingLevel:(null==C?void 0:C.headingLevel)||"h2",size:(null==C?void 0:C.size)||i.TitleSizes.xl,className:(null==C?void 0:C.className)||"pf-u-mt-0"},{children:null==C?void 0:C.value}))]}),(0,s.jsx)(i.DrawerActions,{children:(0,s.jsx)(i.DrawerCloseButton,{onClick:e})})]}),(0,s.jsxs)(i.DrawerPanelBody,{children:[x,l]})]})}));return(0,s.jsx)(i.Drawer,Object.assign({isExpanded:o,onExpand:c,"data-ouia-app-id":h,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,s.jsx)(i.DrawerContent,Object.assign({panelContent:m,className:u?"pf-m-no-background":""},{children:(0,s.jsxs)(i.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",d]}))}))}))};var x=n(16846),j=n(69887),v=n(93697);n(8509)},13449:(e,t,n)=>{n.d(t,{J:()=>a,S:()=>r});var s=n(93264);const a=(0,s.createContext)(null),r=()=>(0,s.useContext)(a)},95950:(e,t,n)=>{n.d(t,{A:()=>s.A});var s=n(94622)},217:(e,t,n)=>{n.d(t,{o:()=>x});var s=n(85893),a=n(30645),r=n(93264),i=n(4220),o=n(75381),d=n(3433),l=n(65834),c=n(63286),u=n(36384);const p=(0,r.lazy)((()=>n.e(3495).then(n.bind(n,43495)))),h=({instance:e,activeTab:t,setActiveTab:n,tokenEndPointUrl:h})=>{const{t:x}=(0,a.useTranslation)(["kasTemporaryFixMe"]),j=e.status===o.Od.ACCEPTED||e.status===o.Od.PREPARING;return(0,s.jsx)(r.Suspense,Object.assign({fallback:(0,s.jsx)(d.yR,{})},{children:(0,s.jsxs)(l.Tabs,Object.assign({activeKey:t,onSelect:(e,t)=>n(t)},{children:[(0,s.jsx)(l.Tab,Object.assign({eventKey:c.Z.DETAILS,title:(0,s.jsx)(l.TabTitleText,{children:x("details")})},{children:(0,s.jsx)(u.KafkaDetailsTab,{id:e.id,owner:e.owner,createdAt:(0,i.Z)(e.createdAt),updatedAt:(0,i.Z)(e.updatedAt),expiryDate:e.expiryDate?(0,i.Z)(e.expiryDate):void 0,size:e.size,ingress:e.ingress,egress:e.egress,storage:e.storage,maxPartitions:e.maxPartitions,connections:e.connections,connectionRate:e.connectionRate,messageSize:e.messageSize,region:x(e.region),instanceType:"standard"===e.plan?"standard":"eval",billing:e.billing,kafkaVersion:e.request.version||""})})),(0,s.jsx)(l.Tab,Object.assign({eventKey:c.Z.CONNECTION.toString(),title:(0,s.jsx)(l.TabTitleText,{children:x("connection")}),"data-testid":"drawerStreams-tabConnect"},{children:(0,s.jsx)(p,{externalServer:(()=>{const{bootstrap_server_host:t}=e.request;return(null==t?void 0:t.endsWith(":443"))?t:`${t}:443`})(),adminServerUrl:(()=>{const{admin_api_server_url:t}=e.request;return t?`${t}/openapi`:void 0})(),isKafkaPending:j,tokenEndPointUrl:h,instanceId:e.id})}))]}))}))},x=({"data-ouia-app-id":e,isDrawerOpen:t,drawerInstance:n,setDrawerActiveTab:r,drawerActiveTab:i,closeDrawer:o,tokenEndPointUrl:l,children:u})=>{const{t:p}=(0,a.useTranslation)(["kasTemporaryFixMe"]);return(0,s.jsx)(d.D5,Object.assign({isExpanded:t,isLoading:void 0===n,onClose:o,panelBodyContent:n&&(0,s.jsx)(h,{tokenEndPointUrl:l,activeTab:i||c.Z.DETAILS,instance:n,setActiveTab:r}),drawerHeaderProps:{text:{label:p("instance_name")},title:{value:null==n?void 0:n.name,headingLevel:"h1"}},"data-ouia-app-id":e,notRequiredDrawerContentBackground:void 0===n},{children:u}))}},81548:(e,t,n)=>{n.d(t,{e0:()=>d,gD:()=>o});var s=n(9922),a=n(85893),r=n(93264);const i=(0,r.createContext)(void 0),o=()=>{const e=(0,r.useContext)(i);if(void 0===e)throw new Error("must be used inside a InstanceDrawerContext provider");return e},d=e=>{var{children:t}=e,n=(0,s.__rest)(e,["children"]);return(0,a.jsx)(i.Provider,Object.assign({value:n},{children:t}))}},38462:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(9922),a=n(85893),r=n(3433),i=n(13449),o=n(36384),d=n(95950),l=n(35831),c=n(217),u=n(81548),p=n(82185);const h=e=>{var{preCreateInstance:t,shouldOpenCreateModal:n,getAllUserAccounts:h}=e,x=(0,s.__rest)(e,["preCreateInstance","shouldOpenCreateModal","getAllUserAccounts"]);return(0,a.jsx)(i.J.Provider,Object.assign({value:{preCreateInstance:t,shouldOpenCreateModal:n,getAllUserAccounts:h}},{children:(0,a.jsxs)(o.ModalProvider,{children:[(0,a.jsx)(r.bN,{children:(0,a.jsx)(u.e0,Object.assign({},x,{children:(0,a.jsx)(c.o,Object.assign({"data-ouia-app-id":"dataPlane-streams"},x,{children:(0,a.jsx)(l.LF,Object.assign({"data-ouia-app-id":"TODO"},{children:(0,a.jsx)(p.R,{preCreateInstance:t})}))}))}))}),(0,a.jsx)(d.A,{})]})}))}},82519:(e,t,n)=>{n(93264)}}]);
