"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4762],{48090:(e,n,t)=>{t(85893),t(15847),t(54785),t(73685),t(3433)},3433:(e,n,t)=>{t.d(n,{pf:()=>o.p,D5:()=>g,C0:()=>d.C,jU:()=>d.j,yR:()=>p,wR:()=>h.w,L5:()=>m.L,bN:()=>v.bN,h0:()=>v.h0});var a=t(85893),s=t(93264);t(97644);var i=t(42695),r=t(54785);var o=t(43277),d=t(12973),c=t(73685),l=t(15847);t(4256);class u extends s.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,n){console.error("error:",e,n)}render(){const{t:e}=this.props,{hasError:n}=this.state;return n?(0,a.jsx)(r.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,a.jsx)(d.C,Object.assign({emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,a.jsx)(r.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,c.withRouter)((0,l.withTranslation)()(u));const p=({bullseyeProps:e,spinnerProps:n})=>(0,a.jsx)(r.Bullseye,Object.assign({},e,{children:(0,a.jsx)(r.Spinner,Object.assign({},n))}));t(85853);const g=({onClose:e,isLoading:n=!0,drawerPanelContentProps:t,drawerHeaderProps:s,isExpanded:o,children:d,panelBodyContent:c,onExpand:l,notRequiredDrawerContentBackground:u,"data-ouia-app-id":g,inlineAlertMessage:v})=>{const h=t||{},{widths:m}=h,x=(0,i.__rest)(h,["widths"]),{text:b,title:j}=s||{},k=(0,a.jsx)(r.DrawerPanelContent,Object.assign({widths:m||{default:"width_50"}},x,{children:n?(0,a.jsx)(p,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.DrawerHead,{children:[(0,a.jsxs)(r.TextContent,{children:[(null==b?void 0:b.label)&&(0,a.jsx)(r.Text,Object.assign({component:(null==b?void 0:b.component)||r.TextVariants.small,className:(null==b?void 0:b.className)||"pf-u-mb-0"},{children:null==b?void 0:b.label})),(null==j?void 0:j.value)&&(0,a.jsx)(r.Title,Object.assign({headingLevel:(null==j?void 0:j.headingLevel)||"h2",size:(null==j?void 0:j.size)||r.TitleSizes.xl,className:(null==j?void 0:j.className)||"pf-u-mt-0"},{children:null==j?void 0:j.value}))]}),(0,a.jsx)(r.DrawerActions,{children:(0,a.jsx)(r.DrawerCloseButton,{onClick:e})})]}),(0,a.jsxs)(r.DrawerPanelBody,{children:[v,c]})]})}));return(0,a.jsx)(r.Drawer,Object.assign({isExpanded:o,onExpand:l,"data-ouia-app-id":g,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,a.jsx)(r.DrawerContent,Object.assign({panelContent:k,className:u?"pf-m-no-background":""},{children:(0,a.jsxs)(r.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",d]}))}))}))};var v=t(16846),h=t(69887),m=t(93697);t(8509)},95950:(e,n,t)=>{t.d(n,{A:()=>a.A});var a=t(94622)},217:(e,n,t)=>{t.d(n,{o:()=>x});var a=t(85893),s=t(15847),i=t(42695),r=t(93264),o=t(12902),d=t(75381),c=t(3433),l=t(54785),u=t(63286),p=t(79852),g=t(49626);const v=(0,r.lazy)((()=>t.e(3495).then(t.bind(t,43495)))),h=e=>{var{instance:n}=e,t=(0,i.__rest)(e,["instance"]);const{kafkaRequestToKafkaInstance:s}=(0,g.D)(),[o,d]=(0,r.useState)(n.request?n:void 0);return(0,r.useEffect)((()=>{o||function(){(0,i.__awaiter)(this,void 0,void 0,(function*(){const e=yield s(n);d(e)}))}()}),[o,n,s]),o?(0,a.jsx)(m,Object.assign({instance:o},t)):(0,a.jsx)(c.yR,{})},m=({instance:e,activeTab:n,setActiveTab:t,tokenEndPointUrl:i})=>{const{t:g}=(0,s.useTranslation)(["kasTemporaryFixMe"]),h=e.status===d.Od.ACCEPTED||e.status===d.Od.PREPARING,m=e.status===d.Od.SUSPENDED;return(0,a.jsx)(r.Suspense,Object.assign({fallback:(0,a.jsx)(c.yR,{})},{children:(0,a.jsxs)(l.Tabs,Object.assign({activeKey:n,onSelect:(e,n)=>t(n)},{children:[(0,a.jsx)(l.Tab,Object.assign({eventKey:u.Z.DETAILS,title:(0,a.jsx)(l.TabTitleText,{children:g("details")})},{children:(0,a.jsx)(p.KafkaDetailsTab,{id:e.id,owner:e.owner,createdAt:(0,o.Z)(e.createdAt),updatedAt:(0,o.Z)(e.updatedAt),expiryDate:e.expiryDate?(0,o.Z)(e.expiryDate):void 0,size:e.size,ingress:e.ingress,egress:e.egress,storage:e.storage,maxPartitions:e.maxPartitions,connections:e.connections,connectionRate:e.connectionRate,messageSize:e.messageSize,region:g(e.region),instanceType:"standard"===e.plan?"standard":"eval",billing:e.billing,kafkaVersion:e.request.version||"",cloudProvider:e.provider})})),(0,a.jsx)(l.Tab,Object.assign({eventKey:u.Z.CONNECTION.toString(),title:(0,a.jsx)(l.TabTitleText,{children:g("connection")}),"data-testid":"drawerStreams-tabConnect"},{children:(0,a.jsx)(v,{externalServer:(()=>{const{bootstrap_server_host:n}=e.request;return(null==n?void 0:n.endsWith(":443"))?n:`${n}:443`})(),adminServerUrl:(()=>{const{admin_api_server_url:n}=e.request;return n?`${n}/openapi`:void 0})(),isKafkaPending:h,tokenEndPointUrl:i,instanceId:e.id,isKafkaSuspended:m})}))]}))}))},x=({"data-ouia-app-id":e,isDrawerOpen:n,drawerInstance:t,setDrawerActiveTab:i,drawerActiveTab:r,closeDrawer:o,tokenEndPointUrl:d,children:l})=>{const{t:p}=(0,s.useTranslation)(["kasTemporaryFixMe"]);return(0,a.jsx)(c.D5,Object.assign({isExpanded:n,isLoading:void 0===t,onClose:o,panelBodyContent:t&&(0,a.jsx)(h,{tokenEndPointUrl:d,activeTab:r||u.Z.DETAILS,instance:t,setActiveTab:i}),drawerHeaderProps:{text:{label:p("instance_name")},title:{value:null==t?void 0:t.name,headingLevel:"h1"}},"data-ouia-app-id":e,notRequiredDrawerContentBackground:void 0===t},{children:l}))}},49626:(e,n,t)=>{t.d(n,{D:()=>c,a:()=>d});var a=t(42695),s=t(88601),i=t(93264),r=t(79852),o=t(24584);function d(){const e=(0,s.d)(),{kafkaRequestToKafkaInstance:n}=c();return(0,i.useCallback)(((t,s,i,o,d)=>(0,a.__awaiter)(this,void 0,void 0,(function*(){const a=e(),c={name:"name",owner:"owner",provider:"cloud_provider",region:"region",createdAt:"created_at"};try{const{name:e,status:u,owner:p}=i,g=[l("name",e,"%"),l("owner",p,"%"),l("status",u.flatMap((e=>r.SimplifiedStatuses[e])),"=")].filter(Boolean).map((e=>`(${e})`)).join(" and "),v=yield a.getKafkas(t.toString(10),s.toString(10),o?`${c[o]} ${d}`:void 0,g,{cache:!1}),h=v.data.items,m=v.data.total;return{instances:yield Promise.all(h.map(n)),count:m}}catch(e){return{instances:[],count:0}}}))),[e,n])}function c(){const e=(0,o.s9)(),n=(0,o.AU)("developer"),t=(0,o.AU)("standard");return{kafkaRequestToKafkaInstance:(0,i.useCallback)((s=>(0,a.__awaiter)(this,void 0,void 0,(function*(){var a;const i=s,{marketplaceSubscriptions:r}=yield e(),o={billing:void 0,connectionRate:0,connections:0,createdAt:i.created_at,egress:0,expiryDate:i.expires_at,id:i.id,ingress:0,maxPartitions:0,messageSize:0,name:i.name,owner:i.owner,plan:i.billing_model,provider:i.cloud_provider,region:i.region,size:"1",status:u(i.status),storage:0,updatedAt:i.updated_at,request:i};try{const e=null===(a=r.find((e=>e.subscriptions.find((e=>e===i.billing_cloud_account_id)))))||void 0===a?void 0:a.marketplace,n="standard"===i.billing_model?"prepaid":e?{marketplace:e,subscription:i.billing_cloud_account_id}:void 0;o.billing=n}catch(e){console.warn("kafkaRequestToKafkaInstance","couldn't retrieve the billing info for",i)}try{const e=("developer"===i.instance_type?yield n(i.cloud_provider,i.region):yield t(i.cloud_provider,i.region)).find((e=>e.id===i.size_id));e&&(o.size=e.displayName,o.ingress=e.ingress,o.egress=e.egress,o.storage=i.max_data_retention_size.bytes,o.connections=e.connections,o.connectionRate=e.connectionRate,o.maxPartitions=e.maxPartitions,o.messageSize=e.messageSize)}catch(e){console.warn("kafkaRequestToKafkaInstance","couldn't retrieve the limits info for",i)}return o}))),[n,e,t])}}function l(e,n,t){return n.map((n=>"%"===t?`${e} like %${n.trim()}%`:`${e} = ${n.trim()}`)).join(" or ")}function u(e){return{accepted:"accepted",preparing:"preparing",provisioning:"provisioning",ready:"ready",failed:"degraded",deprovision:"deprovision",deleting:"deleting",suspended:"suspended",suspending:"suspending",resuming:"resuming"}[e]||"degraded"}},82519:(e,n,t)=>{t(93264)}}]);
//# sourceMappingURL=4762.865e28c6.js.map