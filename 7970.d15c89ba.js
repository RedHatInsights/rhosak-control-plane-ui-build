"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[7970],{67970:(e,a,i)=>{i.r(a),i.d(a,{CreateInstanceWithSizes:()=>b,default:()=>k});var o=i(223),t=i(85893),n=i(68199),r=i(79905),s=i(10069),l=i(75381),d=i(75418),u=i(5854),c=i(28929),v=i(11483);const p=()=>{const e=(0,u.useConfig)(),a=(0,u.useAuth)(),i="rhosak";return()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var o,t,n,r,s,l;const d=yield null==a?void 0:a.ams.getToken(),c=new v.AppServicesApi({accessToken:d,basePath:(null==e?void 0:e.ams.apiBasePath)||""}),p=yield c.apiAccountsMgmtV1CurrentAccountGet(),m=null===(t=null===(o=null==p?void 0:p.data)||void 0===o?void 0:o.organization)||void 0===t?void 0:t.id,g=new Map,_={loading:!0,isServiceDown:!1,data:void 0};if(!m)return console.error("useQuota","orgId is not defined"),_.loading=!1,_.isServiceDown=!0,_;try{const e=yield c.apiAccountsMgmtV1OrganizationsOrgIdQuotaCostGet(m,void 0,!0),a=null===(r=null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.items)||void 0===r?void 0:r.find((e=>{var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>e.resource_name===i&&"RHOSAK"===e.product))})),o=null===(l=null===(s=null==e?void 0:e.data)||void 0===s?void 0:s.items)||void 0===l?void 0:l.find((e=>{var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>e.resource_name===i&&"RHOSAKTrial"===e.product))}));if(a&&a.allowed>0){const e=(null==a?void 0:a.allowed)-(null==a?void 0:a.consumed);null==g||g.set(u.QuotaType.kas,{allowed:null==a?void 0:a.allowed,consumed:null==a?void 0:a.consumed,remaining:e<0?0:e})}o&&(null==g||g.set(u.QuotaType.kasTrial,{allowed:null==o?void 0:o.allowed,consumed:null==o?void 0:o.consumed,remaining:(null==o?void 0:o.allowed)-(null==o?void 0:o.consumed)})),_.loading=!1,_.data=g}catch(e){_.loading=!1,_.isServiceDown=!0,console.error(e)}return _}))};function m(e){let a;try{a=null==e?void 0:e.get(null===u.QuotaType||void 0===u.QuotaType?void 0:u.QuotaType.kas)}catch(e){console.error("useAvailableProvidersAndDefault","quota?.get exception",e)}return void 0!==a&&a.remaining>=0?l.ik.standard:l.ik.developer}const g=()=>{const{kas:e,getUsername:a}=(0,u.useAuth)(),{kas:{apiBasePath:i}}=(0,u.useConfig)(),t=p();function n(){return new c.DefaultApi(new c.Configuration({accessToken:e.getToken(),basePath:i}))}const r=e=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var a;try{const i=n(),t=yield i.getCloudProviders(),r=(null===(a=null==t?void 0:t.data)||void 0===a?void 0:a.items)||[];return yield Promise.all(r.filter((e=>e.enabled)).map((a=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield((e,a)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var i;const o=n(),t=yield o.getCloudProviderRegions(e);return(null===(i=null==t?void 0:t.data)||void 0===i?void 0:i.items)?t.data.items.filter((e=>e.enabled&&e.capacity.some((e=>e.instance_type===a)))).map((e=>{var a;const i=null===(a=e.capacity)||void 0===a?void 0:a.some((e=>{var a;return 0===(null===(a=e.available_sizes)||void 0===a?void 0:a.length)}));return{id:e.id,displayName:e.display_name,isDisabled:i,capacity:e.capacity}})):[]})))(a.id,e);return{id:a.id,displayName:a.display_name,regions:i}})))))}catch(e){return console.error("useAvailableProvidersAndDefault","fetchProvider",e),Promise.reject(e)}}));return function(){var e;return(0,o.__awaiter)(this,void 0,void 0,(function*(){try{const i=yield t(),s=function(e){let a;try{a=null==e?void 0:e.get(null===u.QuotaType||void 0===u.QuotaType?void 0:u.QuotaType.kas)}catch(e){console.error("useAvailableProvidersAndDefault","quota?.get exception",e)}return void 0!==a&&a.remaining>=0?"standard":"trial"}(i.data),d=m(i.data),c=null===(e=null==i?void 0:i.data)||void 0===e?void 0:e.get(null===u.QuotaType||void 0===u.QuotaType?void 0:u.QuotaType.kas),v=yield(0,o.__awaiter)(void 0,void 0,void 0,(function*(){try{const e=`owner = ${yield a()}`,i=n(),o=yield i.getKafkas("","","",e);if(o.data.items)return o.data.items.some((e=>(null==e?void 0:e.instance_type)===(null===l.ik||void 0===l.ik?void 0:l.ik.eval)||(null==e?void 0:e.instance_type)===(null===l.ik||void 0===l.ik?void 0:l.ik.developer)))}catch(e){console.error("useAvailableProvidersAndDefault","fetchUserHasTrialInstance",e)}return!1})),p=yield r(d);let g;try{g=1===p.length?p[0].id:void 0}catch(e){console.error("useAvailableProvidersAndDefault","defaultProvider error",e)}return{defaultProvider:g,availableProviders:p,instanceAvailability:(()=>{switch(!0){case void 0!==c&&c.remaining>0:return"standard-available";case void 0!==c&&0===c.remaining:return"over-quota";case v:return"trial-used";default:return"trial-available"}})(),maxStreamingUnits:(null==c?void 0:c.allowed)||0,remainingQuota:(null==c?void 0:c.remaining)||0,plan:s}}catch(e){return console.error("useAvailableProvidersAndDefault",e),Promise.reject(e)}}))}};var _=i(78261);const f=()=>{const e=(0,u.useAuth)(),a=p(),{kas:{apiBasePath:i}}=(0,u.useConfig)();return(t,n,r)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var o;const s=new c.DefaultApi(new c.Configuration({accessToken:null==e?void 0:e.kas.getToken(),basePath:i})),d=m((yield a()).data);try{const e=(e=>{if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,multi_az:e.multi_az.value,cloud_provider:e.cloud_provider.value}})({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}});e.name=t.name,e.cloud_provider=t.provider,e.region=t.region,e.plan=d+"."+t.sizeId,yield s.createKafka(!0,e),n()}catch(e){if((0,_.G6)(e)){const{code:a}=(null===(o=null==e?void 0:e.response)||void 0===o?void 0:o.data)||{};switch(d){case"developer":if(a===l.SM.DUPLICATE_INSTANCE_NAME)r("name-taken");else r("trial-unavailable");break;case"standard":switch(a){case l.SM.DUPLICATE_INSTANCE_NAME:r("name-taken");break;case l.SM.INTERNAL_CAPACITY_ERROR:r("region-unavailable");break;case l.SM.INSUFFICIENT_QUOTA:r("over-quota");break;default:console.error("useAvailableProvidersAndDefault","createKafka unknown error",e),r("unknown")}}}else console.error("useAvailableProvidersAndDefault","createKafka unexpected error",e)}}))};const b=({hideModal:e,onCreate:a})=>{const i=(0,n.useHistory)(),v=g(),p=function(){const{kas:e}=(0,u.useAuth)(),{kas:{apiBasePath:a}}=(0,u.useConfig)();return(i,t,n)=>(0,o.__awaiter)(this,void 0,void 0,(function*(){var o,r,s,d,u;const v=new c.DefaultApi(new c.Configuration({accessToken:e.getToken(),basePath:a})),p=yield v.getInstanceTypesByCloudProviderAndRegion(i,t);if(!(null===(o=null==p?void 0:p.data)||void 0===o?void 0:o.instance_types))throw new Error("No instance_types from backend");const m=null===(s=null===(r=null==p?void 0:p.data)||void 0===r?void 0:r.instance_types.find((e=>e.id===l.ik.standard)))||void 0===s?void 0:s.sizes,g=(null===(u=null===(d=null==p?void 0:p.data)||void 0===d?void 0:d.instance_types.find((e=>e.id===l.ik.developer)))||void 0===u?void 0:u.sizes)||[],_=g.length>0?g[g.length-1]:void 0;if(!m||!_)throw new Error(`No standard sizes or trial size: ${m} ${_}`);return{standard:m.map((e=>{const a=e;return{id:a.id,displayName:a.display_name,quota:a.quota_consumed,ingress:(a.ingress_throughput_per_sec.bytes||0)/1048576,egress:(a.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((a.max_data_retention_size.bytes||0)/1073741824),connections:a.total_max_connections,connectionRate:a.max_connection_attempts_per_sec,maxPartitions:a.max_partitions,messageSize:(a.max_message_size.bytes||0)/1048576,status:"stable"===a.maturity_status?"stable":"preview",trialDurationHours:void 0,isDisabled:!n.includes(`standard.${a.id}`)}})),trial:{id:_.id,displayName:_.display_name,quota:0,ingress:(_.ingress_throughput_per_sec.bytes||0)/1048576,egress:(_.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((_.max_data_retention_size.bytes||0)/1073741824),connections:_.total_max_connections,connectionRate:_.max_connection_attempts_per_sec,maxPartitions:_.max_partitions,messageSize:(_.max_message_size.bytes||0)/1048576,status:"stable"===_.maturity_status?"stable":"preview",trialDurationHours:_.lifespan_seconds?_.lifespan_seconds/60/60:void 0,isDisabled:!n.includes(`developer.${_.id}`)}}}))}(),m=f(),_=(0,d.useContext)(s.QuickStartContext),b=(0,d.useRef)(),k=()=>{i.push("overview")},w=(0,d.useCallback)((()=>{_.setActiveQuickStart&&_.setActiveQuickStart("getting-started")}),[_]),y=(0,d.useCallback)((function(i,o,t){m(i,(()=>{o(),a&&a(),e()}),t)}),[e,a,m]),h=(0,d.useCallback)((()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield v();return b.current=e,e}))),[v]),A=(0,d.useCallback)(((e,a)=>new Promise(((i,o)=>{const t=b.current;if(t){const o=t.availableProviders.find((a=>a.id===e)),n=null==o?void 0:o.regions.find((e=>e.id===a)),r=(null==n?void 0:n.capacity.flatMap((e=>e.available_sizes.map((a=>`${e.instance_type}.${a}`)))))||[];i(p(e,a,r))}else o("Unexpected error, missing provider data")}))),[p]);return(0,t.jsx)(r.CreateKafkaInstanceWithSizes,{isModalOpen:!0,onClickQuickStart:w,onCancel:e,getAvailableProvidersAndDefaults:h,onCreate:y,onClickContactUs:k,onClickLearnMoreAboutRegions:k,onLearnHowToAddStreamingUnits:k,onLearnMoreAboutSizes:k,onClickKafkaOverview:k,getSizes:A,appendTo:l.wx})},k=b},78261:(e,a,i)=>{i.d(a,{G6:()=>o.isServiceApiError,SM:()=>t});var o=i(28929);const t={UNAUTHORIZED_USER:o.APIErrorCodes.ERROR_4,DUPLICATE_INSTANCE_NAME:o.APIErrorCodes.ERROR_36,INTERNAL_CAPACITY_ERROR:o.APIErrorCodes.ERROR_24,INSUFFICIENT_QUOTA:o.APIErrorCodes.ERROR_120,TRIAL_USED:o.APIErrorCodes.ERROR_5,FAILED_TO_CHECK_QUOTA:o.APIErrorCodes.ERROR_121,OWNER_DOES_NOT_EXIST:o.APIErrorCodes.ERROR_21}},75381:(e,a,i)=>{i.d(a,{Bh:()=>o.Bh,G6:()=>t.G6,JB:()=>o.JB,L0:()=>o.L0,Nw:()=>o.Nw,Od:()=>o.Od,Qw:()=>o.Qw,SM:()=>t.SM,bv:()=>o.bv,hm:()=>o.hm,ik:()=>o.ik,md:()=>o.md,o8:()=>o.o8,pf:()=>o.pf,vK:()=>o.vK,wx:()=>o.wx});var o=i(52648),t=(i(82519),i(78261))},82519:(e,a,i)=>{i.d(a,{j:()=>t});var o=i(75418);function t(e){(0,o.useEffect)((()=>{const a=document.title;return document.title=e,()=>{document.title=a}}),[e])}},52648:(e,a,i)=>{i.d(a,{Bh:()=>l,JB:()=>d,L0:()=>m,Nw:()=>c,Od:()=>o,Qw:()=>_,bv:()=>r,hm:()=>s,ik:()=>t,md:()=>v,o8:()=>p,pf:()=>u,vK:()=>f,wx:()=>g});var o,t,n=i(31803);!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(o||(o={})),function(e){e.eval="eval",e.standard="standard",e.developer="developer"}(t||(t={}));const r=[{value:"aws",label:"Amazon Web Services"}],s=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],l=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],d=32,u=10,c=50,v=5e3,p=(e,a,i)=>{let o=a;if(i&&i>0){e===(i%a!=0?Math.floor(i/a)+1:Math.floor(i/a))&&(o=i>a?i%a==0?a:i%a:i)}return 0!==o?o:a},m=(e,a)=>(e="string"==typeof e?new Date(e):e,(0,n.formatDistance)(e,new Date)+" "+a),g=()=>document.getElementById("chrome-app-render-root")||document.body,_=()=>{let e=!1;var a;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e=!0),e},f=({loadingCount:e,skeleton:a,length:i})=>{const o=[],t=[];for(let e=0;e<i;e++)t.push({title:a});for(let a=0;a<e;a++)o.push({cells:t});return o}}}]);
//# sourceMappingURL=7970.d15c89ba.js.map