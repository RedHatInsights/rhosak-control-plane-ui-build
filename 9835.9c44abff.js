"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[9835],{81847:(e,i,a)=>{a.d(i,{Eq:()=>u,DO:()=>c,sF:()=>_});var o=a(223),n=a(5854),t=a(28929),r=a(75381),d=a(11483);const s=()=>{const e=(0,n.useConfig)(),i=(0,n.useAuth)(),a="rhosak";return()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var o,t,r,s,l,u;const v=yield null==i?void 0:i.ams.getToken(),c=new d.AppServicesApi({accessToken:v,basePath:(null==e?void 0:e.ams.apiBasePath)||""}),_=yield c.apiAccountsMgmtV1CurrentAccountGet(),p=null===(t=null===(o=null==_?void 0:_.data)||void 0===o?void 0:o.organization)||void 0===t?void 0:t.id,m=new Map,f={loading:!0,isServiceDown:!1,data:void 0};if(!p)return console.error("useQuota","orgId is not defined"),f.loading=!1,f.isServiceDown=!0,f;try{const e=yield c.apiAccountsMgmtV1OrganizationsOrgIdQuotaCostGet(p,void 0,!0),i=null===(s=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.items)||void 0===s?void 0:s.find((e=>{var i;return null===(i=e.related_resources)||void 0===i?void 0:i.find((e=>e.resource_name===a&&"RHOSAK"===e.product))})),o=null===(u=null===(l=null==e?void 0:e.data)||void 0===l?void 0:l.items)||void 0===u?void 0:u.find((e=>{var i;return null===(i=e.related_resources)||void 0===i?void 0:i.find((e=>e.resource_name===a&&"RHOSAKTrial"===e.product))}));if(i&&i.allowed>0){const e=(null==i?void 0:i.allowed)-(null==i?void 0:i.consumed);null==m||m.set(n.QuotaType.kas,{allowed:null==i?void 0:i.allowed,consumed:null==i?void 0:i.consumed,remaining:e<0?0:e})}o&&(null==m||m.set(n.QuotaType.kasTrial,{allowed:null==o?void 0:o.allowed,consumed:null==o?void 0:o.consumed,remaining:(null==o?void 0:o.allowed)-(null==o?void 0:o.consumed)})),f.loading=!1,f.data=m}catch(e){f.loading=!1,f.isServiceDown=!0,console.error(e)}return f}))};function l(e){let i;try{i=null==e?void 0:e.get(null===n.QuotaType||void 0===n.QuotaType?void 0:n.QuotaType.kas)}catch(e){console.error("useAvailableProvidersAndDefault","quota?.get exception",e)}return void 0!==i&&i.remaining>=0?r.ik.standard:r.ik.developer}const u=()=>{const{kas:e,getUsername:i}=(0,n.useAuth)(),{kas:{apiBasePath:a}}=(0,n.useConfig)(),d=s();function u(){return new t.DefaultApi(new t.Configuration({accessToken:e.getToken(),basePath:a}))}const v=e=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var i;try{const a=u(),n=yield a.getCloudProviders(),t=(null===(i=null==n?void 0:n.data)||void 0===i?void 0:i.items)||[];return yield Promise.all(t.filter((e=>e.enabled)).map((i=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield((e,i)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var a;const o=u(),n=yield o.getCloudProviderRegions(e);return(null===(a=null==n?void 0:n.data)||void 0===a?void 0:a.items)?n.data.items.filter((e=>e.enabled&&e.capacity.some((e=>e.instance_type===i)))).map((e=>{var i;const a=null===(i=e.capacity)||void 0===i?void 0:i.some((e=>{var i;return 0===(null===(i=e.available_sizes)||void 0===i?void 0:i.length)}));return{id:e.id,displayName:e.display_name,isDisabled:a,capacity:e.capacity}})):[]})))(i.id,e);return{id:i.id,displayName:i.display_name,regions:a}})))))}catch(e){return console.error("useAvailableProvidersAndDefault","fetchProvider",e),Promise.reject(e)}}));return function(){var e;return(0,o.__awaiter)(this,void 0,void 0,(function*(){try{const a=yield d(),t=function(e){let i;try{i=null==e?void 0:e.get(null===n.QuotaType||void 0===n.QuotaType?void 0:n.QuotaType.kas)}catch(e){console.error("useAvailableProvidersAndDefault","quota?.get exception",e)}return void 0!==i&&i.remaining>=0?"standard":"trial"}(a.data),s=l(a.data),c=null===(e=null==a?void 0:a.data)||void 0===e?void 0:e.get(null===n.QuotaType||void 0===n.QuotaType?void 0:n.QuotaType.kas),_=yield(0,o.__awaiter)(void 0,void 0,void 0,(function*(){try{const e=`owner = ${yield i()}`,a=u(),o=yield a.getKafkas("","","",e);if(o.data.items)return o.data.items.some((e=>(null==e?void 0:e.instance_type)===(null===r.ik||void 0===r.ik?void 0:r.ik.eval)||(null==e?void 0:e.instance_type)===(null===r.ik||void 0===r.ik?void 0:r.ik.developer)))}catch(e){console.error("useAvailableProvidersAndDefault","fetchUserHasTrialInstance",e)}return!1})),p=yield v(s);let m;try{m=1===p.length?p[0].id:void 0}catch(e){console.error("useAvailableProvidersAndDefault","defaultProvider error",e)}return{defaultProvider:m,availableProviders:p,instanceAvailability:(()=>{switch(!0){case void 0!==c&&c.remaining>0:return"standard-available";case void 0!==c&&0===c.remaining:return"over-quota";case _:return"trial-used";default:return"trial-available"}})(),maxStreamingUnits:(null==c?void 0:c.allowed)||0,remainingQuota:(null==c?void 0:c.remaining)||0,plan:t}}catch(e){return console.error("useAvailableProvidersAndDefault",e),Promise.reject(e)}}))}};var v=a(78261);const c=()=>{const e=(0,n.useAuth)(),i=s(),{kas:{apiBasePath:a}}=(0,n.useConfig)();return(n,d,s)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var o;const u=new t.DefaultApi(new t.Configuration({accessToken:null==e?void 0:e.kas.getToken(),basePath:a})),c=l((yield i()).data);try{const e=(e=>{if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,multi_az:e.multi_az.value,cloud_provider:e.cloud_provider.value}})({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}});e.name=n.name,e.cloud_provider=n.provider,e.region=n.region,e.plan=c+"."+n.sizeId,yield u.createKafka(!0,e),d()}catch(e){if((0,v.G6)(e)){const{code:i}=(null===(o=null==e?void 0:e.response)||void 0===o?void 0:o.data)||{};switch(c){case"developer":if(i===r.SM.DUPLICATE_INSTANCE_NAME)s("name-taken");else s("trial-unavailable");break;case"standard":switch(i){case r.SM.DUPLICATE_INSTANCE_NAME:s("name-taken");break;case r.SM.INTERNAL_CAPACITY_ERROR:s("region-unavailable");break;case r.SM.INSUFFICIENT_QUOTA:s("over-quota");break;default:console.error("useAvailableProvidersAndDefault","createKafka unknown error",e),s("unknown")}}}else console.error("useAvailableProvidersAndDefault","createKafka unexpected error",e)}}))};function _(){const{kas:e}=(0,n.useAuth)(),{kas:{apiBasePath:i}}=(0,n.useConfig)();return(a,n,d)=>(0,o.__awaiter)(this,void 0,void 0,(function*(){var o,s,l,u,v;const c=new t.DefaultApi(new t.Configuration({accessToken:e.getToken(),basePath:i})),_=yield c.getInstanceTypesByCloudProviderAndRegion(a,n);if(!(null===(o=null==_?void 0:_.data)||void 0===o?void 0:o.instance_types))throw new Error("No instance_types from backend");const p=null===(l=null===(s=null==_?void 0:_.data)||void 0===s?void 0:s.instance_types.find((e=>e.id===r.ik.standard)))||void 0===l?void 0:l.sizes,m=(null===(v=null===(u=null==_?void 0:_.data)||void 0===u?void 0:u.instance_types.find((e=>e.id===r.ik.developer)))||void 0===v?void 0:v.sizes)||[],f=m.length>0?m[m.length-1]:void 0;if(!p||!f)throw new Error(`No standard sizes or trial size: ${p} ${f}`);return{standard:p.map((e=>{const i=e;return{id:i.id,displayName:i.display_name,quota:i.quota_consumed,ingress:(i.ingress_throughput_per_sec.bytes||0)/1048576,egress:(i.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((i.max_data_retention_size.bytes||0)/1073741824),connections:i.total_max_connections,connectionRate:i.max_connection_attempts_per_sec,maxPartitions:i.max_partitions,messageSize:(i.max_message_size.bytes||0)/1048576,status:"stable"===i.maturity_status?"stable":"preview",trialDurationHours:void 0,isDisabled:!d.includes(`standard.${i.id}`)}})),trial:{id:f.id,displayName:f.display_name,quota:0,ingress:(f.ingress_throughput_per_sec.bytes||0)/1048576,egress:(f.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((f.max_data_retention_size.bytes||0)/1073741824),connections:f.total_max_connections,connectionRate:f.max_connection_attempts_per_sec,maxPartitions:f.max_partitions,messageSize:(f.max_message_size.bytes||0)/1048576,status:"stable"===f.maturity_status?"stable":"preview",trialDurationHours:f.lifespan_seconds?f.lifespan_seconds/60/60:void 0,isDisabled:!d.includes(`developer.${f.id}`)}}}))}}}]);
//# sourceMappingURL=9835.9c44abff.js.map