"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4762],{48090:(e,t,a)=>{a(85893),a(98743),a(99922),a(68199),a(3433)},3433:(e,t,a)=>{a.d(t,{pf:()=>r.p,D5:()=>p,C0:()=>d.C,jU:()=>d.j,yR:()=>v,wu:()=>_.wu,wR:()=>m.w,L5:()=>b.L,bN:()=>_.bN,h0:()=>_.h0});var i=a(85893),n=a(93264);a(52212);var s=a(9922),o=a(99922);var r=a(43277),d=a(12973),l=a(68199),c=a(98743);a(4256);class u extends n.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,i.jsx)(o.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,i.jsx)(d.C,Object.assign({emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,i.jsx)(o.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}(0,l.withRouter)((0,c.withTranslation)()(u));const v=({bullseyeProps:e,spinnerProps:t})=>(0,i.jsx)(o.Bullseye,Object.assign({},e,{children:(0,i.jsx)(o.Spinner,Object.assign({},t))}));a(85853);const p=({onClose:e,isLoading:t=!0,drawerPanelContentProps:a,drawerHeaderProps:n,isExpanded:r,children:d,panelBodyContent:l,onExpand:c,notRequiredDrawerContentBackground:u,"data-ouia-app-id":p,inlineAlertMessage:_})=>{const m=a||{},{widths:b}=m,h=(0,s.__rest)(m,["widths"]),{text:g,title:y}=n||{},x=(0,i.jsx)(o.DrawerPanelContent,Object.assign({widths:b||{default:"width_50"}},h,{children:t?(0,i.jsx)(v,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.DrawerHead,{children:[(0,i.jsxs)(o.TextContent,{children:[(null==g?void 0:g.label)&&(0,i.jsx)(o.Text,Object.assign({component:(null==g?void 0:g.component)||o.TextVariants.small,className:(null==g?void 0:g.className)||"pf-u-mb-0"},{children:null==g?void 0:g.label})),(null==y?void 0:y.value)&&(0,i.jsx)(o.Title,Object.assign({headingLevel:(null==y?void 0:y.headingLevel)||"h2",size:(null==y?void 0:y.size)||o.TitleSizes.xl,className:(null==y?void 0:y.className)||"pf-u-mt-0"},{children:null==y?void 0:y.value}))]}),(0,i.jsx)(o.DrawerActions,{children:(0,i.jsx)(o.DrawerCloseButton,{onClick:e})})]}),(0,i.jsxs)(o.DrawerPanelBody,{children:[_,l]})]})}));return(0,i.jsx)(o.Drawer,Object.assign({isExpanded:r,onExpand:c,"data-ouia-app-id":p,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,i.jsx)(o.DrawerContent,Object.assign({panelContent:x,className:u?"pf-m-no-background":""},{children:(0,i.jsxs)(o.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",d]}))}))}))};var _=a(16846),m=a(69887),b=a(93697);a(8509)},95950:(e,t,a)=>{a.d(t,{A:()=>i.A});var i=a(94622)},217:(e,t,a)=>{a.d(t,{o:()=>h});var i=a(85893),n=a(98743),s=a(9922),o=a(93264),r=a(23855),d=a(78343),l=a(75381),c=a(3433),u=a(99922),v=a(63286),p=a(37810),_=a(61617);const m=(0,o.lazy)((()=>a.e(3495).then(a.bind(a,43495)))),b=({instance:e,activeTab:t,setActiveTab:a,tokenEndPointUrl:b})=>{var h;const{t:g}=(0,n.useTranslation)(["kasTemporaryFixMe"]),y=(0,_.s9)(),[x,f]=(0,o.useState)([]);(0,o.useEffect)((()=>{(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const{marketplaceSubscriptions:e}=yield y();f(e)}))}),[y]);const w=e.status===l.Od.ACCEPTED||e.status===l.Od.PREPARING,k=null===(h=x.find((t=>t.subscriptions.find((t=>t===e.billing_cloud_account_id)))))||void 0===h?void 0:h.marketplace,j="standard"===e.billing_model?"prepaid":k?{marketplace:k,subscription:e.billing_cloud_account_id}:void 0;return(0,i.jsx)(o.Suspense,Object.assign({fallback:(0,i.jsx)(c.yR,{})},{children:(0,i.jsxs)(u.Tabs,Object.assign({activeKey:t,onSelect:(e,t)=>a(t)},{children:[(0,i.jsx)(u.Tab,Object.assign({eventKey:v.Z.DETAILS,title:(0,i.jsx)(u.TabTitleText,{children:g("details")})},{children:(0,i.jsx)(p.KafkaDetailsTab,{id:e.id,owner:e.owner,createdAt:(0,r.Z)(e.created_at),updatedAt:(0,r.Z)(e.updated_at),expiryDate:(0,d.Z)((0,r.Z)(e.created_at),48),size:e.size.display_name,ingress:(e.size.ingress_throughput_per_sec.bytes||0)/1048576,egress:(e.size.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((e.size.max_data_retention_size.bytes||0)/1073741824),maxPartitions:e.size.max_partitions,connections:e.size.total_max_connections,connectionRate:e.size.max_connection_attempts_per_sec,messageSize:(e.size.max_message_size.bytes||0)/1048576,region:g(e.region),instanceType:"standard"===e.instance_type?"standard":"eval",billing:j})})),(0,i.jsx)(u.Tab,Object.assign({eventKey:v.Z.CONNECTION.toString(),title:(0,i.jsx)(u.TabTitleText,{children:g("connection")}),"data-testid":"drawerStreams-tabConnect"},{children:(0,i.jsx)(m,{externalServer:(()=>{const{bootstrap_server_host:t}=e;return(null==t?void 0:t.endsWith(":443"))?t:`${t}:443`})(),adminServerUrl:(()=>{const{admin_api_server_url:t}=e;return t?`${t}/openapi`:void 0})(),isKafkaPending:w,tokenEndPointUrl:b,instanceId:e.id})}))]}))}))},h=({"data-ouia-app-id":e,isDrawerOpen:t,drawerInstance:a,setDrawerActiveTab:s,drawerActiveTab:o,closeDrawer:r,tokenEndPointUrl:d,children:l})=>{const{t:u}=(0,n.useTranslation)(["kasTemporaryFixMe"]);return(0,i.jsx)(c.D5,Object.assign({isExpanded:t,isLoading:void 0===a,onClose:r,panelBodyContent:a&&(0,i.jsx)(b,{tokenEndPointUrl:d,activeTab:o||v.Z.DETAILS,instance:a,setActiveTab:s}),drawerHeaderProps:{text:{label:u("instance_name")},title:{value:null==a?void 0:a.name,headingLevel:"h1"}},"data-ouia-app-id":e,notRequiredDrawerContentBackground:void 0===a},{children:l}))}},61617:(e,t,a)=>{a.d(t,{b4:()=>u,qT:()=>c,DO:()=>g.D,TM:()=>v,AU:()=>_,dt:()=>m,df:()=>b,s9:()=>l});var i=a(9922),n=a(88601),s=a(75381),o=a(52212),r=a(93264);const d="rhosak",l=()=>{const e=(0,n.c)();return(0,r.useCallback)((()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var t,a,i,n;const s=e(),o=yield s.apiAccountsMgmtV1CurrentAccountGet(),r=null===(a=null===(t=null==o?void 0:o.data)||void 0===t?void 0:t.organization)||void 0===a?void 0:a.id;if(!r)throw new Error("User has no organization id");const l=yield s.apiAccountsMgmtV1OrganizationsOrgIdQuotaCostGet(r,void 0,!0,void 0,!0);if(200!==l.status)throw new Error(l.statusText);const c=null===(i=l.data.items)||void 0===i?void 0:i.filter((e=>{var t;return null===(t=e.related_resources)||void 0===t?void 0:t.find((e=>e.resource_name===d&&"RHOSAK"===e.product))})),u=null==c?void 0:c.find((e=>{var t;return null===(t=e.related_resources)||void 0===t?void 0:t.find((e=>"standard"===e.billing_model))})),v=null==c?void 0:c.filter((e=>{var t;return null===(t=e.related_resources)||void 0===t?void 0:t.find((e=>"marketplace"===e.billing_model))})),p=(null===(n=l.data.items)||void 0===n?void 0:n.some((e=>{var t;return null===(t=e.related_resources)||void 0===t?void 0:t.find((e=>e.resource_name===d&&"RHOSAKTrial"===e.product))})))||!1,_=u?u.allowed-u.consumed:void 0,m=null==v?void 0:v.reduce(((e,t)=>t.allowed-t.consumed+e),0),b=null==v?void 0:v.filter((e=>void 0!==e.cloud_accounts)).flatMap((e=>e.cloud_accounts)),h=Array.from(new Set(null==b?void 0:b.map((e=>e.cloud_provider_id))));return{hasTrialQuota:p,remainingPrepaidQuota:_,remainingMarketplaceQuota:m,marketplaceSubscriptions:b?h.map((e=>({marketplace:e,subscriptions:b.filter((t=>t.cloud_provider_id===e)).map((e=>e.cloud_account_id))}))):[]}}))),[e])},c=()=>{const e=l();return(0,r.useCallback)((({onNoQuotaAvailable:t,onOutOfQuota:a,onQuotaAvailable:n})=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){try{const{hasTrialQuota:i,remainingPrepaidQuota:s,remainingMarketplaceQuota:o,marketplaceSubscriptions:r}=yield e();o||s?o&&0===o&&s&&0===s?a({quota:{marketplaceSubscriptions:r}}):n({quota:{remainingPrepaidQuota:s,remainingMarketplaceQuota:o,marketplaceSubscriptions:r}}):t({hasTrialQuota:i})}catch(e){t({hasTrialQuota:!1})}}))),[e])},u=()=>{const{getUsername:e}=(0,o.useAuth)(),t=(0,n.d)(),a=(0,r.useCallback)((({onAvailable:a,onUnavailable:n,onUsed:o})=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){try{const i=t(),n=`owner = ${yield e()}`,r=yield i.getKafkas("","","",n);if(r.data.items){r.data.items.some((e=>(null==e?void 0:e.instance_type)===(null===s.ik||void 0===s.ik?void 0:s.ik.eval)||(null==e?void 0:e.instance_type)===(null===s.ik||void 0===s.ik?void 0:s.ik.developer)))?o():a()}}catch(e){n()}}))),[t,e]);return a},v=()=>{const e=(0,n.d)(),t=p(),a=(0,r.useCallback)(((a,{onAvailable:n,onUnavailable:s})=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var o;try{const s=e(),r=yield s.getCloudProviders(),d=(null===(o=null==r?void 0:r.data)||void 0===o?void 0:o.items)||[],l=yield Promise.all(d.filter((e=>e.enabled)).map((e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield t(e.id,a);return{id:e.id,displayName:e.display_name,regions:i}}))))),c=l[0];n({providers:l,defaultProvider:null==c?void 0:c.id})}catch(e){s()}}))),[t,e]);return a},p=()=>{const e=(0,n.d)();return(0,r.useCallback)((function(t,a){var n;return(0,i.__awaiter)(this,void 0,void 0,(function*(){const i=e(),s=yield i.getCloudProviderRegions(t);if(!(null===(n=null==s?void 0:s.data)||void 0===n?void 0:n.items))return[];return s.data.items.filter((e=>e.enabled&&e.capacity.some((e=>e.instance_type===a)))).map((e=>{var t;const i=null===(t=e.capacity)||void 0===t?void 0:t.some((e=>{var t;return e.instance_type===a&&0===(null===(t=e.available_sizes)||void 0===t?void 0:t.length)}));return{id:e.id,displayName:e.display_name,isDisabled:i,capacity:e.capacity}}))}))}),[e])},_=e=>{const t=(0,n.d)(),a=p();return(0,r.useCallback)(((n,s)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){var i,o,r;const d=t(),l=(yield a(n,e)).find((e=>e.id===s)),c=(null==l?void 0:l.capacity.flatMap((e=>e.available_sizes.map((t=>`${e.instance_type}.${t}`)))))||[],u=yield d.getInstanceTypesByCloudProviderAndRegion(n,s);if(!(null===(i=null==u?void 0:u.data)||void 0===i?void 0:i.instance_types))throw new Error("No instance_types from backend");return((null===(r=null===(o=null==u?void 0:u.data)||void 0===o?void 0:o.instance_types.find((t=>t.id===e)))||void 0===r?void 0:r.sizes)||[]).map(h.bind(void 0,(t=>!c.includes(`${e}.${t}`))))}))),[a,t,e])},m=()=>_("standard"),b=()=>{const e=_("standard"),t=_("developer");return(0,r.useCallback)(((a,n)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){let i;try{i=yield e(a,n)}catch(e){i=[{id:"1",displayName:"1"},{id:"2",displayName:"2"}]}return{standard:i,trial:(yield t(a,n))[0]}}))),[t,e])};function h(e,t){const a=t;return{id:a.id,displayName:a.display_name,quota:a.quota_consumed,ingress:(a.ingress_throughput_per_sec.bytes||0)/1048576,egress:(a.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((a.max_data_retention_size.bytes||0)/1073741824),connections:a.total_max_connections,connectionRate:a.max_connection_attempts_per_sec,maxPartitions:a.max_partitions,messageSize:(a.max_message_size.bytes||0)/1048576,status:"stable"===a.maturity_status?"stable":"preview",trialDurationHours:a.lifespan_seconds?a.lifespan_seconds/60/60:0,isDisabled:e(a.id)}}var g=a(46163)},82519:(e,t,a)=>{a(93264)}}]);
//# sourceMappingURL=4762.0ba4252e.js.map