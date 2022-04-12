"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[6437],{76437:(e,a,i)=>{i.r(a),i.d(a,{CreateInstance:()=>p,default:()=>g});var t=i(223),o=i(85893),n=i(4077),r=i(10069),d=i(75418),l=i(75381);var s=i(7451),u=i(79468),c=i(78261);const v=()=>{const e=(0,s.useAuth)(),{kas:{apiBasePath:a}}=(0,s.useConfig)(),{getQuota:i}=(0,s.useQuota)(),o=new u.DefaultApi(new u.Configuration({accessToken:e.kas.getToken(),basePath:a})),n=()=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){return new Promise(((e,a)=>{!function(){(0,t.__awaiter)(this,void 0,void 0,(function*(){const t=yield i();t.isServiceDown?a():t.loading?setTimeout(i,1e3):e(t.data)}))}()}))})),r=e=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){var a;const i=yield o.getCloudProviders(),n=(null===(a=null==i?void 0:i.data)||void 0===a?void 0:a.items)||[];return yield Promise.all(n.filter((e=>e.enabled)).map((a=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield((e,a)=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){const i="quota"===a?l.ik.standard:l.ik.eval;return((yield o.getCloudProviderRegions(e,void 0,void 0,l.ik.eval)).data.items||[]).filter((e=>e.enabled&&e.capacity.some((e=>e.instance_type===i)))).map((e=>{var a;const t=null===(a=e.capacity)||void 0===a?void 0:a.some((e=>!0===e.max_capacity_reached&&e.instance_type===i));return{id:e.id,displayName:e.display_name,isDisabled:t}}))})))(a.id,e);return{id:a.id,displayName:a.display_name,regions:i,AZ:{single:!1,multi:!0}}})))))}));return function(){return(0,t.__awaiter)(this,void 0,void 0,(function*(){const i=yield n(),o=yield(0,t.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield e.getUsername(),t=yield e.kas.getToken(),o=`owner = ${i}`;try{const e=new u.DefaultApi(new u.Configuration({accessToken:t,basePath:a})),i=yield e.getKafkas("","","",o);if(i.data.items)return i.data.items.some((e=>(null==e?void 0:e.instance_type)===(null===l.ik||void 0===l.ik?void 0:l.ik.eval)))}catch(e){}return!1})),d=null==i?void 0:i.get(null===s.QuotaType||void 0===s.QuotaType?void 0:s.QuotaType.kas),c=(()=>{switch(!0){case void 0!==d&&d.remaining>0:return"quota";case o:return"trial-used";default:return"trial"}})(),v=yield r(c);return{defaultProvider:1===v.length?v[0].id:void 0,defaultAZ:"multi",availableProviders:v,instanceAvailability:c}}))}},m=()=>{const e=(0,s.useAuth)(),{kas:{apiBasePath:a}}=(0,s.useConfig)(),i=new u.DefaultApi(new u.Configuration({accessToken:null==e?void 0:e.kas.getToken(),basePath:a}));return(e,a,o)=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){var t;try{const t=(e=>{if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,multi_az:e.multi_az.value,cloud_provider:e.cloud_provider.value}})({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}});t.name=e.name,t.cloud_provider=e.provider,t.region=e.region,t.multi_az="multi"===e.az,yield i.createKafka(!0,t),a()}catch(e){if((0,c.G6)(e)){const{code:a}=(null===(t=null==e?void 0:e.response)||void 0===t?void 0:t.data)||{};switch(a){case l.SM.DUPLICATE_INSTANCE_NAME:o("name-taken");break;case l.SM.INSUFFICIENT_QUOTA:o("over-quota");break;case l.SM.REACHED_MAX_LIMIT_ALLOWED_KAFKA:case l.SM.INSTANCE_TYPE_NOT_SUPPORTED:o("trial-unavailable");break;default:o("unknown")}}}}))},p=({hideModal:e,onCreate:a})=>{const i=v(),s=m(),u=(0,d.useContext)(r.QuickStartContext),c=(0,d.useCallback)((()=>{u.setActiveQuickStart&&u.setActiveQuickStart("getting-started")}),[u]),p=(0,d.useCallback)((function(i,t,o){s(i,(()=>{t(),a&&a(),e()}),o)}),[e,a,s]),g=(0,d.useCallback)((()=>(0,t.__awaiter)(void 0,void 0,void 0,(function*(){return i()}))),[i]);return(0,o.jsx)(n.CreateKafkaInstance,{isModalOpen:!0,onClickQuickStart:c,onCancel:e,getAvailableProvidersAndDefaults:g,onCreate:p,appendTo:l.wx})},g=p},78261:(e,a,i)=>{i.d(a,{G6:()=>t.isServiceApiError,SM:()=>o});var t=i(79468);const o={UNAUTHORIZED_USER:t.APIErrorCodes.ERROR_4,DUPLICATE_INSTANCE_NAME:t.APIErrorCodes.ERROR_36,REACHED_MAX_LIMIT_ALLOWED_KAFKA:t.APIErrorCodes.ERROR_24,INSUFFICIENT_QUOTA:t.APIErrorCodes.ERROR_120,FAILED_TO_CHECK_QUOTA:t.APIErrorCodes.ERROR_121,OWNER_DOES_NOT_EXIST:t.APIErrorCodes.ERROR_21,INSTANCE_TYPE_NOT_SUPPORTED:t.APIErrorCodes.ERROR_41}},75381:(e,a,i)=>{i.d(a,{Bh:()=>t.Bh,G6:()=>o.G6,JB:()=>t.JB,L0:()=>t.L0,Nw:()=>t.Nw,Od:()=>t.Od,Qw:()=>t.Qw,SM:()=>o.SM,bv:()=>t.bv,hm:()=>t.hm,ik:()=>t.ik,md:()=>t.md,o8:()=>t.o8,pf:()=>t.pf,vK:()=>t.vK,wx:()=>t.wx});var t=i(52648),o=(i(82519),i(78261))},82519:(e,a,i)=>{i.d(a,{j:()=>o});var t=i(75418);function o(e){(0,t.useEffect)((()=>{const a=document.title;return document.title=e,()=>{document.title=a}}),[e])}},52648:(e,a,i)=>{i.d(a,{Bh:()=>l,JB:()=>s,L0:()=>p,Nw:()=>c,Od:()=>t,Qw:()=>k,bv:()=>r,hm:()=>d,ik:()=>o,md:()=>v,o8:()=>m,pf:()=>u,vK:()=>w,wx:()=>g});var t,o,n=i(31803);!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(t||(t={})),function(e){e.eval="eval",e.standard="standard"}(o||(o={}));const r=[{value:"aws",label:"Amazon Web Services"}],d=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],l=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],s=32,u=10,c=50,v=5e3,m=(e,a,i)=>{let t=a;if(i&&i>0){e===(i%a!=0?Math.floor(i/a)+1:Math.floor(i/a))&&(t=i>a?i%a==0?a:i%a:i)}return 0!==t?t:a},p=(e,a)=>(e="string"==typeof e?new Date(e):e,(0,n.formatDistance)(e,new Date)+" "+a),g=()=>document.getElementById("chrome-app-render-root")||document.body,k=()=>{let e=!1;var a;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e=!0),e},w=({loadingCount:e,skeleton:a,length:i})=>{const t=[],o=[];for(let e=0;e<i;e++)o.push({title:a});for(let a=0;a<e;a++)t.push({cells:o});return t}}}]);
