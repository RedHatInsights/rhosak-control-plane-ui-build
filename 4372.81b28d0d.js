"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4372],{88601:(e,a,i)=>{i.d(a,{c:()=>v,d:()=>u});var o=i(50834),t=i(70353),n=i(81318),r=i(22178),l=i(9669),d=i.n(l),s=i(93264);const c=(0,r.createCacheAdapter)({debug:null!==localStorage.getItem("log-axios")}),u=()=>{const e=(0,o.useAuth)(),{kas:{apiBasePath:a}}=(0,o.useConfig)();return(0,s.useCallback)((()=>new n.DefaultApi(new n.Configuration({accessToken:e.kas.getToken(),basePath:a}),void 0,d().create({adapter:c,cache:15e3}))),[e.kas,a])},v=()=>{const e=(0,o.useAuth)(),{ams:{apiBasePath:a}}=(0,o.useConfig)();return(0,s.useCallback)((()=>new t.AppServicesApi(new n.Configuration({accessToken:e.ams.getToken(),basePath:a}),void 0,d().create({adapter:c,cache:15e3}))),[a,e.ams])}},74372:(e,a,i)=>{i.r(a),i.d(a,{CreateInstance:()=>c,default:()=>u});var o=i(85893),t=i(75381),n=i(10069),r=i(70792),l=i(93264),d=i(73685),s=i(61617);const c=({hideModal:e,onCreate:a})=>{const i=(0,d.useHistory)(),c=(0,s.b4)(),u=(0,s.qT)(),v=(0,s.TM)(),p=(0,s.dt)(),m=(0,s.df)(),b=(0,s.DO)(),g=(0,l.useContext)(n.QuickStartContext),_=()=>{i.push("overview")},k=(0,l.useCallback)((()=>{g.setActiveQuickStart&&g.setActiveQuickStart("getting-started")}),[g]),f=(0,l.useCallback)((function(i,o,t){b(i,(()=>{o(),a&&a(),e()}),t)}),[e,a,b]);return(0,o.jsx)(r.CreateKafkaInstance,{checkDeveloperAvailability:c,checkStandardQuota:u,fetchProvidersWithRegions:v,getStandardSizes:p,getTrialSizes:m,isModalOpen:!0,onCancel:e,onClickContactUs:_,onClickKafkaOverview:_,onClickQuickStart:k,onCreate:f,onLearnHowToAddStreamingUnits:_,onLearnMoreAboutSizes:_,subscriptionOptionsHref:document.location.href+"/../overview",appendTo:t.wx})},u=c},61617:(e,a,i)=>{i.d(a,{b4:()=>u,qT:()=>c,DO:()=>k.D,TM:()=>v,AU:()=>m,dt:()=>b,df:()=>g,s9:()=>s});var o=i(9922),t=i(88601),n=i(75381),r=i(50834),l=i(93264);const d="rhosak",s=()=>{const e=(0,t.c)();return(0,l.useCallback)((()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var a,i,o,t;const n=e(),r=yield n.apiAccountsMgmtV1CurrentAccountGet(),l=null===(i=null===(a=null==r?void 0:r.data)||void 0===a?void 0:a.organization)||void 0===i?void 0:i.id;if(!l)throw new Error("User has no organization id");const s=yield n.apiAccountsMgmtV1OrganizationsOrgIdQuotaCostGet(l,void 0,!0,void 0,!0);if(200!==s.status)throw new Error(s.statusText);const c=null===(o=s.data.items)||void 0===o?void 0:o.filter((e=>{var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>e.resource_name===d&&"RHOSAK"===e.product))})),u=null==c?void 0:c.find((e=>{var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>"standard"===e.billing_model))})),v=null==c?void 0:c.filter((e=>{var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>"marketplace"===e.billing_model))})),p=(null===(t=s.data.items)||void 0===t?void 0:t.some((e=>{var a;return null===(a=e.related_resources)||void 0===a?void 0:a.find((e=>e.resource_name===d&&"RHOSAKTrial"===e.product))})))||!1,m=u?u.allowed-u.consumed:void 0,b=null==v?void 0:v.reduce(((e,a)=>a.allowed-a.consumed+e),0),g=null==v?void 0:v.filter((e=>void 0!==e.cloud_accounts)).flatMap((e=>e.cloud_accounts)),_=Array.from(new Set(null==g?void 0:g.map((e=>e.cloud_provider_id))));return{hasTrialQuota:p,remainingPrepaidQuota:m,remainingMarketplaceQuota:b,marketplaceSubscriptions:g?_.map((e=>({marketplace:e,subscriptions:g.filter((a=>a.cloud_provider_id===e)).map((e=>e.cloud_account_id))}))):[]}}))),[e])},c=()=>{const e=s();return(0,l.useCallback)((({onNoQuotaAvailable:a,onOutOfQuota:i,onQuotaAvailable:t})=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){try{const{hasTrialQuota:o,remainingPrepaidQuota:n,remainingMarketplaceQuota:r,marketplaceSubscriptions:l}=yield e();r||n?r&&0===r&&n&&0===n?i({quota:{marketplaceSubscriptions:l}}):t({quota:{remainingPrepaidQuota:n,remainingMarketplaceQuota:r,marketplaceSubscriptions:l}}):a({hasTrialQuota:o})}catch(e){a({hasTrialQuota:!1})}}))),[e])},u=()=>{const{getUsername:e}=(0,r.useAuth)(),a=(0,t.d)(),i=(0,l.useCallback)((({onAvailable:i,onUnavailable:t,onUsed:r})=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){try{const o=a(),t=`owner = ${yield e()}`,l=yield o.getKafkas("","","",t);if(l.data.items){l.data.items.some((e=>(null==e?void 0:e.instance_type)===(null===n.ik||void 0===n.ik?void 0:n.ik.eval)||(null==e?void 0:e.instance_type)===(null===n.ik||void 0===n.ik?void 0:n.ik.developer)))?r():i()}}catch(e){t()}}))),[a,e]);return i},v=()=>{const e=(0,t.d)(),a=p(),i=(0,l.useCallback)(((i,{onAvailable:t,onUnavailable:n})=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var r;try{const n=e(),l=yield n.getCloudProviders(),d=(null===(r=null==l?void 0:l.data)||void 0===r?void 0:r.items)||[],s=yield Promise.all(d.filter((e=>e.enabled)).map((e=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const o=yield a(e.id,i);return{id:e.id,displayName:e.display_name,regions:o}}))))),c=s[0];t({providers:s,defaultProvider:null==c?void 0:c.id})}catch(e){n()}}))),[a,e]);return i},p=()=>{const e=(0,t.d)();return(0,l.useCallback)((function(a,i){var t;return(0,o.__awaiter)(this,void 0,void 0,(function*(){const o=e(),n=yield o.getCloudProviderRegions(a);if(!(null===(t=null==n?void 0:n.data)||void 0===t?void 0:t.items))return[];return n.data.items.filter((e=>e.enabled&&e.capacity.some((e=>e.instance_type===i)))).map((e=>{var a;const o=null===(a=e.capacity)||void 0===a?void 0:a.some((e=>{var a;return e.instance_type===i&&0===(null===(a=e.available_sizes)||void 0===a?void 0:a.length)}));return{id:e.id,displayName:e.display_name,isDisabled:o,capacity:e.capacity}}))}))}),[e])},m=e=>{const a=(0,t.d)(),i=p();return(0,l.useCallback)(((t,n)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var o,r,l;const d=a(),s=(yield i(t,e)).find((e=>e.id===n)),c=(null==s?void 0:s.capacity.flatMap((e=>e.available_sizes.map((a=>`${e.instance_type}.${a}`)))))||[],u=yield d.getInstanceTypesByCloudProviderAndRegion(t,n);if(!(null===(o=null==u?void 0:u.data)||void 0===o?void 0:o.instance_types))throw new Error("No instance_types from backend");return((null===(l=null===(r=null==u?void 0:u.data)||void 0===r?void 0:r.instance_types.find((a=>a.id===e)))||void 0===l?void 0:l.sizes)||[]).map(_.bind(void 0,(a=>!c.includes(`${e}.${a}`))))}))),[i,a,e])},b=()=>m("standard"),g=()=>{const e=m("standard"),a=m("developer");return(0,l.useCallback)(((i,t)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){let o;try{o=yield e(i,t)}catch(e){o=[{id:"1",displayName:"1"},{id:"2",displayName:"2"}]}return{standard:o,trial:(yield a(i,t))[0]}}))),[a,e])};function _(e,a){const i=a;return{id:i.id,displayName:i.display_name,quota:i.quota_consumed,ingress:(i.ingress_throughput_per_sec.bytes||0)/1048576,egress:(i.egress_throughput_per_sec.bytes||0)/1048576,storage:Math.round((i.max_data_retention_size.bytes||0)/1073741824),connections:i.total_max_connections,connectionRate:i.max_connection_attempts_per_sec,maxPartitions:i.max_partitions,messageSize:(i.max_message_size.bytes||0)/1048576,status:"stable"===i.maturity_status?"stable":"preview",trialDurationHours:i.lifespan_seconds?i.lifespan_seconds/60/60:0,isDisabled:e(i.id)}}var k=i(46163)},46163:(e,a,i)=>{i.d(a,{D:()=>l});var o=i(9922);var t=i(78261),n=i(75381),r=i(88601);const l=()=>{const e=(0,r.d)();return(a,i,r)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){var o;const l=e();try{const e=(e=>{if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,cloud_provider:e.cloud_provider.value}})({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}});e.name=a.name,e.cloud_provider=a.provider,e.region=a.region,e.plan=a.plan+"."+a.sizeId,e.billing_model="prepaid"===a.billing?"standard":void 0!==a.billing?"marketplace":null,e.billing_cloud_account_id=a.billing&&"prepaid"!==a.billing?a.billing.subscription:null,yield l.createKafka(!0,e),i()}catch(e){if((0,t.G6)(e)){const{code:i}=(null===(o=null==e?void 0:e.response)||void 0===o?void 0:o.data)||{};switch(a.plan){case"developer":if(i===n.SM.DUPLICATE_INSTANCE_NAME)r("name-taken");else r("developer-unavailable");break;case"standard":switch(i){case n.SM.DUPLICATE_INSTANCE_NAME:r("name-taken");break;case n.SM.INTERNAL_CAPACITY_ERROR:r("region-unavailable");break;case n.SM.INSUFFICIENT_QUOTA:r("insufficient-quota");break;default:console.error("useAvailableProvidersAndDefault","createKafka unknown error",e),r("unknown")}}}else console.error("useAvailableProvidersAndDefault","createKafka unexpected error",e)}}))}},78261:(e,a,i)=>{i.d(a,{G6:()=>o.isServiceApiError,SM:()=>t});var o=i(81318);const t={UNAUTHORIZED_USER:o.APIErrorCodes.ERROR_4,DUPLICATE_INSTANCE_NAME:o.APIErrorCodes.ERROR_36,INTERNAL_CAPACITY_ERROR:o.APIErrorCodes.ERROR_24,INSUFFICIENT_QUOTA:o.APIErrorCodes.ERROR_120,TRIAL_USED:o.APIErrorCodes.ERROR_5,FAILED_TO_CHECK_QUOTA:o.APIErrorCodes.ERROR_121,OWNER_DOES_NOT_EXIST:o.APIErrorCodes.ERROR_21}},75381:(e,a,i)=>{i.d(a,{Bh:()=>o.Bh,G6:()=>t.G6,JB:()=>o.JB,L0:()=>o.L0,Nw:()=>o.Nw,Od:()=>o.Od,Qw:()=>o.Qw,SM:()=>t.SM,bv:()=>o.bv,hm:()=>o.hm,ik:()=>o.ik,md:()=>o.md,o8:()=>o.o8,pf:()=>o.pf,vK:()=>o.vK,wx:()=>o.wx});var o=i(52648),t=(i(82519),i(78261))},82519:(e,a,i)=>{i.d(a,{j:()=>t});var o=i(93264);function t(e){(0,o.useEffect)((()=>{const a=document.title;return document.title=e,()=>{document.title=a}}),[e])}},52648:(e,a,i)=>{i.d(a,{Bh:()=>d,JB:()=>s,L0:()=>m,Nw:()=>u,Od:()=>o,Qw:()=>g,bv:()=>r,hm:()=>l,ik:()=>t,md:()=>v,o8:()=>p,pf:()=>c,vK:()=>_,wx:()=>b});var o,t,n=i(82135);!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(o||(o={})),function(e){e.eval="eval",e.standard="standard",e.developer="developer"}(t||(t={}));const r=[{value:"aws",label:"Amazon Web Services"}],l=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],d=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],s=32,c=10,u=50,v=5e3,p=(e,a,i)=>{let o=a;if(i&&i>0){e===(i%a!=0?Math.floor(i/a)+1:Math.floor(i/a))&&(o=i>a?i%a==0?a:i%a:i)}return 0!==o?o:a},m=(e,a)=>(e="string"==typeof e?new Date(e):e,(0,n.Z)(e,new Date)+" "+a),b=()=>document.getElementById("chrome-app-render-root")||document.body,g=()=>{let e=!1;var a;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e=!0),e},_=({loadingCount:e,skeleton:a,length:i})=>{const o=[],t=[];for(let e=0;e<i;e++)t.push({title:a});for(let a=0;a<e;a++)o.push({cells:t});return o}}}]);
