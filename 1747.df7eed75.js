"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1747],{27081:()=>{},88601:(e,a,n)=>{n.d(a,{c:()=>v,d:()=>u});var t=n(50834),i=n(70353),r=n(81318),o=n(22178),s=n(9669),d=n.n(s),l=n(93264);const c=(0,o.createCacheAdapter)({debug:null!==localStorage.getItem("log-axios")}),u=()=>{const e=(0,t.useAuth)(),{kas:{apiBasePath:a}}=(0,t.useConfig)();return(0,l.useCallback)((()=>new r.DefaultApi(new r.Configuration({accessToken:e.kas.getToken(),basePath:a}),void 0,d().create({adapter:c,cache:15e3}))),[e.kas,a])},v=()=>{const e=(0,t.useAuth)(),{ams:{apiBasePath:a}}=(0,t.useConfig)();return(0,l.useCallback)((()=>new i.AppServicesApi(new r.Configuration({accessToken:e.ams.getToken(),basePath:a}),void 0,d().create({adapter:c,cache:15e3}))),[a,e.ams])}},94622:(e,a,n)=>{n.d(a,{A:()=>s});var t=n(85893),i=n(93264),r=n(30645),o=n(50834);const s=()=>{const{registerModals:e}=(0,o.useModal)();return e((()=>{const{t:e}=(0,r.useTranslation)(["kasTemporaryFixMe"]);return{[o.ModalType.KasCreateInstance]:{lazyComponent:(0,i.lazy)((()=>Promise.all([n.e(8354),n.e(9669),n.e(9922),n.e(3685),n.e(1318),n.e(4447),n.e(69),n.e(4372)]).then(n.bind(n,74372)))),variant:"medium",title:e("create_a_kafka_instance")},[o.ModalType.KasDeleteInstance]:{lazyComponent:(0,i.lazy)((()=>Promise.all([n.e(8354),n.e(9669),n.e(9922),n.e(5834),n.e(3685),n.e(1318),n.e(7472),n.e(5626),n.e(4447),n.e(524)]).then(n.bind(n,78578)))),variant:"small"},[o.ModalType.KasTransferOwnership]:{lazyComponent:(0,i.lazy)((()=>Promise.all([n.e(9669),n.e(9922),n.e(5834),n.e(1318),n.e(4447),n.e(8512)]).then(n.bind(n,98512)))),variant:"medium",title:e("change_owner")},[o.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,i.lazy)((()=>Promise.all([n.e(8354),n.e(9922),n.e(5834),n.e(3685),n.e(1318),n.e(7472),n.e(5626),n.e(8752)]).then(n.bind(n,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[o.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,i.lazy)((()=>Promise.all([n.e(8354),n.e(9922),n.e(5834),n.e(3685),n.e(1318),n.e(7472),n.e(5626),n.e(645)]).then(n.bind(n,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[o.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,i.lazy)((()=>Promise.all([n.e(8354),n.e(9922),n.e(5834),n.e(3685),n.e(1318),n.e(7472),n.e(5626),n.e(4410)]).then(n.bind(n,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,t.jsx)(t.Fragment,{})}},63286:(e,a,n)=>{var t;n.d(a,{Z:()=>t}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(t||(t={}))},82185:(e,a,n)=>{n.d(a,{R:()=>T});var t=n(9922),i=n(85893),r=n(93264),o=(n(27081),n(36384)),s=n(88601),d=n(24584);function l(){const e=(0,s.d)(),{kafkaRequestToKafkaInstance:a}=function(){const e=(0,d.s9)(),a=(0,d.AU)("developer"),n=(0,d.AU)("standard");return{kafkaRequestToKafkaInstance:(0,r.useCallback)((i=>(0,t.__awaiter)(this,void 0,void 0,(function*(){var t;const r=i,{marketplaceSubscriptions:o}=yield e(),s={billing:void 0,connectionRate:0,connections:0,createdAt:r.created_at,egress:0,expiryDate:r.expires_at,id:r.id,ingress:0,maxPartitions:0,messageSize:0,name:r.name,owner:r.owner,plan:r.billing_model,provider:r.cloud_provider,region:r.region,size:"1",status:u(r.status),storage:0,updatedAt:r.updated_at,request:r};try{const e=null===(t=o.find((e=>e.subscriptions.find((e=>e===r.billing_cloud_account_id)))))||void 0===t?void 0:t.marketplace,a="standard"===r.billing_model?"prepaid":e?{marketplace:e,subscription:r.billing_cloud_account_id}:void 0;s.billing=a}catch(e){console.warn("kafkaRequestToKafkaInstance","couldn't retrieve the billing info for",r)}try{const e=("developer"===r.instance_type?yield a(r.cloud_provider,r.region):yield n(r.cloud_provider,r.region)).find((e=>e.id===r.size_id));e&&(s.size=e.displayName,s.ingress=e.ingress,s.egress=e.egress,s.storage=r.max_data_retention_size.bytes,s.connections=e.connections,s.connectionRate=e.connectionRate,s.maxPartitions=e.maxPartitions,s.messageSize=e.messageSize)}catch(e){console.warn("kafkaRequestToKafkaInstance","couldn't retrieve the limits info for",r)}return s}))),[a,e,n])}}();return(0,r.useCallback)(((n,i,r,s,d)=>(0,t.__awaiter)(this,void 0,void 0,(function*(){const t=e(),l={name:"name",owner:"owner",provider:"cloud_provider",region:"region",createdAt:"created_at"};try{const{name:e,status:u,owner:v}=r,p=[c("name",e,"%"),c("owner",v,"%"),c("status",u.flatMap((e=>o.SimplifiedStatuses[e])),"=")].filter(Boolean).map((e=>`(${e})`)).join(" and "),m=yield t.getKafkas(n.toString(10),i.toString(10),s?`${l[s]} ${d}`:void 0,p,{cache:!1}),f=m.data.items,_=m.data.total;return{instances:yield Promise.all(f.map(a)),count:_}}catch(e){return{instances:[],count:0}}}))),[e,a])}function c(e,a,n){return a.map((a=>"%"===n?`${e} like %${a.trim()}%`:`${e} = ${a.trim()}`)).join(" or ")}function u(e){return{accepted:"accepted",preparing:"preparing",provisioning:"provisioning",ready:"ready",failed:"degraded",deprovision:"deprovision",deleting:"deleting"}[e]||"degraded"}var v=n(81548),p=n(63286),m=n(13449),f=n(50834);var _=n(30645);function g(){const e=function(){const e=document;return void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":void 0}();return void 0!==e&&!document[e]}function k(){const[e,a]=(0,r.useState)(g()),n=()=>a(g());return(0,r.useEffect)((()=>{const e=function(){const e=document;return void 0!==e.hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":""}();return document.addEventListener(e,n,!1),()=>{document.removeEventListener(e,n)}}),[]),{isVisible:e,setIsVisible:a}}var b=n(75381),y=n(65834);function h(){const{t:e}=(0,_.useTranslation)(["kasTemporaryFixMe"]),{addAlert:a}=(0,f.useAlert)()||{},{isVisible:n}=k(),t=(0,r.useRef)(),o=(0,r.useRef)([]),s=(0,r.useRef)([]),d=(0,r.useCallback)((n=>{a({title:e("kafka_successfully_created"),variant:y.AlertVariant.success,description:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e("kafka_success_message",{name:n})}}),dataTestId:"toastCreateKafka-success"})}),[a,e]),l=(0,r.useCallback)((n=>{a({title:e("kafka_successfully_deleted",{name:n}),variant:y.AlertVariant.success})}),[a,e]),c=(0,r.useCallback)((n=>{a({title:e("kafka_not_created"),variant:y.AlertVariant.danger,description:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e("kafka_failed_message",{name:n})}}),dataTestId:"toastCreateKafka-failed"})}),[a,e]);return function(e,a){const n=(0,r.useRef)();(0,r.useEffect)((()=>{n.current=e}),[e]),(0,r.useEffect)((()=>{if(null!==a){const e=setInterval((function(){n.current&&n.current()}),a);return()=>{clearInterval(e)}}}),[a])}((0,r.useCallback)((function(){if(n)for(;s.current.length>0;){const e=s.current.shift();switch(e.status){case b.Od.READY:d(e.name);break;case b.Od.FAILED:c(e.name);break;case b.Od.DEPROVISION:case b.Od.DELETED:l(e.name)}}}),[n,l,c,d]),1e3),function(e){if(e){const a=void 0===t.current,n=t.current||[],i=n.map((e=>`${e.id}:${e.status}`)),r=e.map((e=>`${e.id}:${e.status}`));if(JSON.stringify(i)!==JSON.stringify(r)){const i=(e,t)=>a?[]:e.filter((e=>{const a=n.find((a=>a.id===e.id));return!!a&&(e.status===t&&a.status!==t)})),r=i(e,b.Od.READY),d=i(e,b.Od.FAILED),[l,c]=o.current.reduce((([a,n],t)=>void 0===e.find((e=>e.id===t.id))?[[...a,t],n]:[a,[...n,t]]),[[],[]]),u=e.filter((e=>[b.Od.DELETED,b.Od.DEPROVISION].includes(e.status)&&void 0===c.find((a=>a.id===e.id))));o.current=[...c,...u],s.current=[...s.current,...r.map(C),...d.map(C),...l.map(C)],t.current=e}}}}function C(e){return{name:e.name,status:e.status}}var w=n(10069);const A=({preCreateInstance:e,currentUser:a,isCurrentUserOrgAdmin:n})=>{const s=l(),{openCreateModal:d}=function(e=(()=>Promise.resolve(!0))){const{shouldOpenCreateModal:a}=(0,m.S)(),{showModal:n}=(0,f.useModal)(),{update:i,query:s}=(0,o.useURLSearchParams)(),d=(0,r.useCallback)((a=>(0,t.__awaiter)(this,void 0,void 0,(function*(){(yield e(!0))&&n(f.ModalType.KasCreateInstance,{onCreate:a})}))),[e,n]);return(0,r.useEffect)((()=>{!function(){(0,t.__awaiter)(this,void 0,void 0,(function*(){(yield a())&&(s.delete("create"),i(s),(yield e(!0))&&n(f.ModalType.KasCreateInstance,{onCreate:()=>{}}))}))}()}),[d,e,s,a,n,i]),{openCreateModal:d}}(e),{openDeleteDialog:c}=function(){const{showModal:e}=(0,f.useModal)();return{openDeleteDialog:(0,r.useCallback)(((a,n)=>{e(f.ModalType.KasDeleteInstance,{onDelete:n,kafka:a.request})}),[e])}}(),{openChangeOwnerDialog:u}=function(){const{showModal:e}=(0,f.useModal)();return{openChangeOwnerDialog:(0,r.useCallback)(((a,n)=>{e(f.ModalType.KasTransferOwnership,{kafka:a.request,refreshKafkas:n})}),[e])}}(),_=h(),{setActiveQuickStart:g}=(0,r.useContext)(w.QuickStartContext),{isDrawerOpen:k,drawerInstance:b,closeDrawer:y,openDrawer:C,setDrawerActiveTab:A,setDrawerInstance:T}=(0,v.gD)(),I=(0,r.useCallback)(((...e)=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield s(...e);if(b){const e=n.instances.find((e=>e.id===b.id));e?JSON.stringify(e)!==JSON.stringify(b)&&T(e):y()}return _(n.instances.filter((e=>e.owner==a))),n}))),[y,a,b,s,_,T]),S=e=>{T(e),A(p.Z.CONNECTION),C()},O=(0,r.useCallback)((({owner:e})=>e===a||n),[a,n]),M=(0,r.useCallback)((()=>g&&g("getting-started")),[g]);return(0,i.jsx)(o.KafkaInstances,{isRowSelected:({row:e})=>k&&e.id===(null==b?void 0:b.id),getInstances:I,getUrlForInstance:({id:e})=>`./kafkas/${e}/dashboard`,onCreate:d,onDetails:e=>{T(e),A(p.Z.DETAILS),C()},onConnection:S,onChangeOwner:u,onDelete:c,onClickConnectionTabLink:S,onClickSupportLink:()=>{window.insights.chrome.createCase()},onInstanceLinkClick:y,onQuickstartGuide:M,canChangeOwner:O,canDelete:O})},T=({preCreateInstance:e})=>{const{getUsername:a,isOrgAdmin:n}=(0,f.useAuth)(),[o,s]=(0,r.useState)(void 0);return(0,r.useEffect)((()=>{!function(){(0,t.__awaiter)(this,void 0,void 0,(function*(){const e=yield a(),t=yield n();void 0!==e&&void 0!==t&&s({currentUser:e,isCurrentUserOrgAdmin:t})}))}()}),[a,n]),(0,i.jsx)(A,{preCreateInstance:e,currentUser:null==o?void 0:o.currentUser,isCurrentUserOrgAdmin:(null==o?void 0:o.isCurrentUserOrgAdmin)||!1})}},35831:(e,a,n)=>{n.d(a,{LF:()=>d});var t=n(85893),i=n(30645),r=n(65834);n(52648);var o=n(93264),s=(n(3433),n(75381));n(10069);const d=({children:e})=>{const{t:a}=(0,i.useTranslation)(["kasTemporaryFixMe"]),[n,d]=(0,o.useState)(!1);(0,o.useEffect)((()=>{if((0,s.Qw)()){const e=window.localStorage;if(e){const a=parseInt(e.getItem("openSessions")||"0"),n=a+1;a<1&&(e.setItem("openSessions",`${n}`),d(!0))}}}),[]);const l=()=>{d(!n)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("main",Object.assign({className:"pf-c-page__main"},{children:[(0,t.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light},{children:(0,t.jsx)(r.Level,{children:(0,t.jsx)(r.LevelItem,{children:(0,t.jsx)(r.TextContent,{children:(0,t.jsx)(r.Text,Object.assign({component:"h1"},{children:a("kafka_instances")}))})})})})),e]})),(0,t.jsx)(r.Modal,Object.assign({variant:r.ModalVariant.small,title:"Mobile experience",isOpen:n,onClose:()=>l(),actions:[(0,t.jsx)(r.Button,Object.assign({variant:"primary",onClick:()=>l()},{children:"Ok"}),"confirm")]},{children:"The mobile experience isn't fully optimized yet, so some items might not appear correctly."}))]})}},24584:(e,a,n)=>{n.d(a,{b4:()=>p,qT:()=>v,DO:()=>h,TM:()=>m,AU:()=>_,dt:()=>g,df:()=>k,s9:()=>u});var t=n(9922),i=n(88601),r=n(75381),o=n(50834),s=n(93264);const d="rhosak";function l(e){var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>"standard"===e.billing_model))}function c(e){var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>"marketplace"===e.billing_model))}const u=()=>{const e=(0,i.c)();return(0,s.useCallback)((()=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){var a,n,t,i;const r=e(),o=yield r.apiAccountsMgmtV1CurrentAccountGet(),s=null===(n=null===(a=null==o?void 0:o.data)||void 0===a?void 0:a.organization)||void 0===n?void 0:n.id;if(!s)throw new Error("User has no organization id");const u=yield r.apiAccountsMgmtV1OrganizationsOrgIdQuotaCostGet(s,void 0,!0,void 0,!0);if(200!==u.status)throw new Error(u.statusText);const v=null===(t=u.data.items)||void 0===t?void 0:t.filter((e=>{var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>e.resource_name===d&&"RHOSAK"===e.product))})),p=null==v?void 0:v.find(l),m=(null==v?void 0:v.some(c))?null==v?void 0:v.filter(c):void 0,f=void 0===p&&void 0===m&&(null===(i=u.data.items)||void 0===i?void 0:i.some((e=>{var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>e.resource_name===d&&"RHOSAKTrial"===e.product))})))||!1,_=p?p.allowed-p.consumed:void 0,g=m?m.reduce(((e,a)=>a.allowed-a.consumed+e),0):void 0,k=null==m?void 0:m.filter((e=>void 0!==e.cloud_accounts)).flatMap((e=>e.cloud_accounts)),b=Array.from(new Set(null==k?void 0:k.map((e=>e.cloud_provider_id))));return{hasTrialQuota:f,remainingPrepaidQuota:_,remainingMarketplaceQuota:g,marketplaceSubscriptions:k?b.map((e=>({marketplace:e,subscriptions:k.filter((a=>a.cloud_provider_id===e)).map((e=>e.cloud_account_id))}))):[]}}))),[e])},v=()=>{const e=u();return(0,s.useCallback)((({onNoQuotaAvailable:a,onOutOfQuota:n,onQuotaAvailable:i})=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){try{const{hasTrialQuota:t,remainingPrepaidQuota:r,remainingMarketplaceQuota:o,marketplaceSubscriptions:s}=yield e();void 0!==o||void 0!==r?0===(o||0)&&0===(r||0)?n({quota:{marketplaceSubscriptions:s}}):i({quota:{remainingPrepaidQuota:r,remainingMarketplaceQuota:o,marketplaceSubscriptions:s}}):a({hasTrialQuota:t})}catch(e){a({hasTrialQuota:!1})}}))),[e])},p=()=>{const{getUsername:e}=(0,o.useAuth)(),a=(0,i.d)(),n=(0,s.useCallback)((({onAvailable:n,onUnavailable:i,onUsed:o})=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){try{const t=a(),i=`owner = ${yield e()}`,s=yield t.getKafkas("","","",i);if(s.data.items){s.data.items.some((e=>(null==e?void 0:e.instance_type)===(null===r.ik||void 0===r.ik?void 0:r.ik.eval)||(null==e?void 0:e.instance_type)===(null===r.ik||void 0===r.ik?void 0:r.ik.developer)))?o():n()}}catch(e){i()}}))),[a,e]);return n},m=()=>{const e=(0,i.d)(),a=f(),n=(0,s.useCallback)(((n,{onAvailable:i,onUnavailable:r})=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){var o;try{const r=e(),s=yield r.getCloudProviders(),d=(null===(o=null==s?void 0:s.data)||void 0===o?void 0:o.items)||[],l=yield Promise.all(d.filter((e=>e.enabled)).map((e=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield a(e.id,n);return{id:e.id,displayName:e.display_name,regions:t}}))))),c=l[0];i({providers:l,defaultProvider:null==c?void 0:c.id})}catch(e){r()}}))),[a,e]);return n},f=()=>{const e=(0,i.d)();return(0,s.useCallback)((function(a,n){var i;return(0,t.__awaiter)(this,void 0,void 0,(function*(){const t=e(),r=yield t.getCloudProviderRegions(a);if(!(null===(i=null==r?void 0:r.data)||void 0===i?void 0:i.items))return[];return r.data.items.filter((e=>e.enabled&&e.capacity.some((e=>e.instance_type===n)))).map((e=>{var a;const t=null===(a=e.capacity)||void 0===a?void 0:a.some((e=>{var a;return e.instance_type===n&&0===(null===(a=e.available_sizes)||void 0===a?void 0:a.length)}));return{id:e.id,displayName:e.display_name,isDisabled:t,capacity:e.capacity}}))}))}),[e])},_=e=>{const a=(0,i.d)(),n=f();return(0,s.useCallback)(((i,r)=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){var t,o,s;const d=a(),l=(yield n(i,e)).find((e=>e.id===r)),c=(null==l?void 0:l.capacity.flatMap((e=>e.available_sizes.map((a=>`${e.instance_type}.${a}`)))))||[],u=yield d.getInstanceTypesByCloudProviderAndRegion(i,r);if(!(null===(t=null==u?void 0:u.data)||void 0===t?void 0:t.instance_types))throw new Error("No instance_types from backend");return((null===(s=null===(o=null==u?void 0:u.data)||void 0===o?void 0:o.instance_types.find((a=>a.id===e)))||void 0===s?void 0:s.sizes)||[]).map(b.bind(void 0,(a=>!c.includes(`${e}.${a}`))))}))),[n,a,e])},g=()=>_("standard"),k=()=>{const e=_("standard"),a=_("developer");return(0,s.useCallback)(((n,i)=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){let t;try{t=yield e(n,i)}catch(e){t=[{id:"1",displayName:"1"},{id:"2",displayName:"2"}]}return{standard:t,trial:(yield a(n,i))[0]}}))),[a,e])};function b(e,a){const n=a;return{id:n.id,displayName:n.display_name,quota:n.quota_consumed,ingress:(n.ingress_throughput_per_sec.bytes||0)/1048576,egress:(n.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((n.max_data_retention_size.bytes||0)/1073741824),connections:n.total_max_connections,connectionRate:n.max_connection_attempts_per_sec,maxPartitions:n.max_partitions,messageSize:(n.max_message_size.bytes||0)/1048576,status:"stable"===n.maturity_status?"stable":"preview",trialDurationHours:n.lifespan_seconds?n.lifespan_seconds/60/60:0,isDisabled:e(n.id)}}var y=n(78261);const h=()=>{const e=(0,i.d)();return(a,n,i)=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){var t;const o=e();try{const e=(e=>{if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,cloud_provider:e.cloud_provider.value}})({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}});e.name=a.name,e.cloud_provider=a.provider,e.region=a.region,e.plan=a.plan+"."+a.sizeId,e.billing_model="prepaid"===a.billing?"standard":void 0!==a.billing?"marketplace":null,e.billing_cloud_account_id=a.billing&&"prepaid"!==a.billing?a.billing.subscription:null,yield o.createKafka(!0,e),n()}catch(e){if((0,y.G6)(e)){const{code:n}=(null===(t=null==e?void 0:e.response)||void 0===t?void 0:t.data)||{};switch(a.plan){case"developer":if(n===r.SM.DUPLICATE_INSTANCE_NAME)i("name-taken");else i("developer-unavailable");break;case"standard":switch(n){case r.SM.DUPLICATE_INSTANCE_NAME:i("name-taken");break;case r.SM.INTERNAL_CAPACITY_ERROR:i("region-unavailable");break;case r.SM.INSUFFICIENT_QUOTA:i("insufficient-quota");break;default:console.error("useAvailableProvidersAndDefault","createKafka unknown error",e),i("unknown")}}}else console.error("useAvailableProvidersAndDefault","createKafka unexpected error",e)}}))}}}]);
//# sourceMappingURL=1747.df7eed75.js.map