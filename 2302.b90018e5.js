"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[2302],{48090:(e,t,n)=>{n(85893),n(93049),n(99922),n(68199),n(3433)},3433:(e,t,n)=>{n.d(t,{pf:()=>o.p,D5:()=>h,C0:()=>l.C,jU:()=>l.j,yR:()=>u,wu:()=>m.wu,wR:()=>x.w,L5:()=>v.L,bN:()=>m.bN,h0:()=>m.h0});var a=n(85893),s=n(93264);n(5854);var r=n(9922),i=n(99922);var o=n(43277),l=n(12973),c=n(68199),d=n(93049);n(4256);class p extends s.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,a.jsx)(i.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,a.jsx)(l.C,Object.assign({emptyStateProps:{variant:l.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,a.jsx)(i.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,c.withRouter)((0,d.withTranslation)()(p));const u=({bullseyeProps:e,spinnerProps:t})=>(0,a.jsx)(i.Bullseye,Object.assign({},e,{children:(0,a.jsx)(i.Spinner,Object.assign({},t))}));n(85853);const h=({onClose:e,isLoading:t=!0,drawerPanelContentProps:n,drawerHeaderProps:s,isExpanded:o,children:l,panelBodyContent:c,onExpand:d,notRequiredDrawerContentBackground:p,"data-ouia-app-id":h,inlineAlertMessage:m})=>{const x=n||{},{widths:v}=x,b=(0,r.__rest)(x,["widths"]),{text:j,title:_}=s||{},g=(0,a.jsx)(i.DrawerPanelContent,Object.assign({widths:v||{default:"width_50"}},b,{children:t?(0,a.jsx)(u,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.DrawerHead,{children:[(0,a.jsxs)(i.TextContent,{children:[(null==j?void 0:j.label)&&(0,a.jsx)(i.Text,Object.assign({component:(null==j?void 0:j.component)||i.TextVariants.small,className:(null==j?void 0:j.className)||"pf-u-mb-0"},{children:null==j?void 0:j.label})),(null==_?void 0:_.value)&&(0,a.jsx)(i.Title,Object.assign({headingLevel:(null==_?void 0:_.headingLevel)||"h2",size:(null==_?void 0:_.size)||i.TitleSizes.xl,className:(null==_?void 0:_.className)||"pf-u-mt-0"},{children:null==_?void 0:_.value}))]}),(0,a.jsx)(i.DrawerActions,{children:(0,a.jsx)(i.DrawerCloseButton,{onClick:e})})]}),(0,a.jsxs)(i.DrawerPanelBody,{children:[m,c]})]})}));return(0,a.jsx)(i.Drawer,Object.assign({isExpanded:o,onExpand:d,"data-ouia-app-id":h,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,a.jsx)(i.DrawerContent,Object.assign({panelContent:g,className:p?"pf-m-no-background":""},{children:(0,a.jsxs)(i.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",l]}))}))}))};var m=n(16846),x=n(69887),v=n(93697);n(8509)},94622:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(85893),s=n(93264),r=n(93049),i=n(5854);const o=()=>{const{registerModals:e}=(0,i.useModal)();return e((()=>{const{t:e}=(0,r.useTranslation)(["kasTemporaryFixMe"]);return{[i.ModalType.KasCreateInstance]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(7196),n.e(9922),n.e(8199),n.e(7118),n.e(9835),n.e(4372)]).then(n.bind(n,74372)))),variant:"medium",title:e("create_a_kafka_instance")},[i.ModalType.KasDeleteInstance]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(7196),n.e(9922),n.e(8408),n.e(8199),n.e(7118),n.e(8251),n.e(5626),n.e(524)]).then(n.bind(n,78578)))),variant:"small"},[i.ModalType.KasTransferOwnership]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(9922),n.e(8408),n.e(7118),n.e(8512)]).then(n.bind(n,98512)))),variant:"medium",title:e("change_owner")},[i.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(7196),n.e(9922),n.e(8408),n.e(8199),n.e(7118),n.e(8251),n.e(5626),n.e(8752)]).then(n.bind(n,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[i.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(7196),n.e(9922),n.e(8408),n.e(8199),n.e(7118),n.e(8251),n.e(5626),n.e(645)]).then(n.bind(n,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[i.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,s.lazy)((()=>Promise.all([n.e(7196),n.e(9922),n.e(8408),n.e(8199),n.e(7118),n.e(8251),n.e(5626),n.e(4410)]).then(n.bind(n,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,a.jsx)(a.Fragment,{})}},95950:(e,t,n)=>{n.d(t,{A:()=>a.A});var a=n(94622)},217:(e,t,n)=>{n.d(t,{o:()=>x});var a=n(85893),s=n(93049),r=n(93264),i=n(23855),o=n(78343),l=n(75381),c=n(3433),d=n(99922),p=n(63286),u=n(1808);const h=(0,r.lazy)((()=>n.e(3495).then(n.bind(n,43495)))),m=({instance:e,activeTab:t,setActiveTab:n,tokenEndPointUrl:m})=>{const{t:x}=(0,s.useTranslation)(["kasTemporaryFixMe"]),v=e.status===l.Od.ACCEPTED||e.status===l.Od.PREPARING;return(0,a.jsx)(r.Suspense,Object.assign({fallback:(0,a.jsx)(c.yR,{})},{children:(0,a.jsxs)(d.Tabs,Object.assign({activeKey:t,onSelect:(e,t)=>n(t)},{children:[(0,a.jsx)(d.Tab,Object.assign({eventKey:p.Z.DETAILS,title:(0,a.jsx)(d.TabTitleText,{children:x("details")})},{children:(0,a.jsx)(u.KafkaDetailsTab,{id:e.id,owner:e.owner,createdAt:(0,i.Z)(e.created_at),updatedAt:(0,i.Z)(e.updated_at),expiryDate:(0,o.Z)((0,i.Z)(e.created_at),48),size:e.size.display_name,ingress:(e.size.ingress_throughput_per_sec.bytes||0)/1048576,egress:(e.size.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((e.size.max_data_retention_size.bytes||0)/1073741824),maxPartitions:e.size.max_partitions,connections:e.size.total_max_connections,connectionRate:e.size.max_connection_attempts_per_sec,messageSize:(e.size.max_message_size.bytes||0)/1048576,region:x(e.region),instanceType:"standard"===e.instance_type?"standard":"eval",isLoadingSize:!1})})),(0,a.jsx)(d.Tab,Object.assign({eventKey:p.Z.CONNECTION.toString(),title:(0,a.jsx)(d.TabTitleText,{children:x("connection")}),"data-testid":"drawerStreams-tabConnect"},{children:(0,a.jsx)(h,{externalServer:(()=>{const{bootstrap_server_host:t}=e;return(null==t?void 0:t.endsWith(":443"))?t:`${t}:443`})(),isKafkaPending:v,tokenEndPointUrl:m,instanceId:e.id})}))]}))}))},x=({"data-ouia-app-id":e,isDrawerOpen:t,drawerInstance:n,setDrawerActiveTab:r,drawerActiveTab:i,closeDrawer:o,tokenEndPointUrl:l,children:d})=>{const{t:u}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return(0,a.jsx)(c.D5,Object.assign({isExpanded:t,isLoading:void 0===n,onClose:o,panelBodyContent:n&&(0,a.jsx)(m,{tokenEndPointUrl:l,activeTab:i||p.Z.DETAILS,instance:n,setActiveTab:r}),drawerHeaderProps:{text:{label:u("instance_name")},title:{value:null==n?void 0:n.name,headingLevel:"h1"}},"data-ouia-app-id":e,notRequiredDrawerContentBackground:void 0===n},{children:d}))}},95075:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(9922),s=n(85893),r=n(217),i=n(1808),o=n(95950);const l=e=>{var{children:t}=e,n=(0,a.__rest)(e,["children"]);return(0,s.jsxs)(i.ModalProvider,{children:[(0,s.jsx)(r.o,Object.assign({},n,{children:t})),(0,s.jsx)(o.A,{})]})}},63286:(e,t,n)=>{var a;n.d(t,{Z:()=>a}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(a||(a={}))},82519:(e,t,n)=>{n(93264)}}]);
