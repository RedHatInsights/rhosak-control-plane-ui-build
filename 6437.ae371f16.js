"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[6437],{76437:(e,a,t)=>{t.r(a),t.d(a,{CreateInstance:()=>m,default:()=>p});var n=t(223),i=t(56856),r=t(10069),o=t(75418),u=t.n(o),s=t(75381),l=t(7451),c=t(4734),d=t(78261),v=function(){var e=(0,l.useAuth)(),a=(0,l.useConfig)().kas.apiBasePath,t=new c.DefaultApi(new c.Configuration({accessToken:null==e?void 0:e.kas.getToken(),basePath:a}));return function(e,a,i){return(0,n.__awaiter)(void 0,void 0,void 0,(function(){var r,o,u;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),(r=function(e){if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,multi_az:e.multi_az.value,cloud_provider:e.cloud_provider.value}}({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}})).name=e.name,r.cloud_provider=e.provider,r.region=e.region,r.multi_az="multi"===e.az,[4,t.createKafka(!0,r)];case 1:return n.sent(),a(),[3,3];case 2:if(o=n.sent(),(0,d.G6)(o))switch(((null===(u=null==o?void 0:o.response)||void 0===u?void 0:u.data)||{}).code){case s.SM.DUPLICATE_INSTANCE_NAME:i("name-taken");break;case s.SM.INSUFFICIENT_QUOTA:i("over-quota");break;case s.SM.REACHED_MAX_LIMIT_ALLOWED_KAFKA:case s.SM.INSTANCE_TYPE_NOT_SUPPORTED:i("trial-unavailable");break;default:i("unknown")}return[3,3];case 3:return[2]}}))}))}},m=function(e){var a,t,d,m,p,f=e.hideModal,_=e.onCreate,g=(a=(0,l.useAuth)(),t=(0,l.useConfig)().kas.apiBasePath,d=(0,l.useQuota)().getQuota,m=new c.DefaultApi(new c.Configuration({accessToken:a.kas.getToken(),basePath:t})),p=function(e,a){return(0,n.__awaiter)(void 0,void 0,Promise,(function(){var t;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return t="quota"===a?s.ik.standard:s.ik.eval,[4,m.getCloudProviderRegions(e,void 0,void 0,s.ik.eval)];case 1:return[2,(n.sent().data.items||[]).filter((function(e){return e.enabled&&e.capacity.some((function(e){return e.instance_type===t}))})).map((function(e){var a,n=null===(a=e.capacity)||void 0===a?void 0:a.some((function(e){return!0===e.max_capacity_reached&&e.instance_type===t}));return{id:e.id,displayName:e.display_name,isDisabled:n}}))]}}))}))},function(){return(0,n.__awaiter)(this,void 0,Promise,(function(){var e,i,r,o,u;return(0,n.__generator)(this,(function(v){switch(v.label){case 0:return[4,(0,n.__awaiter)(void 0,void 0,Promise,(function(){return(0,n.__generator)(this,(function(e){return[2,new Promise((function(e,a){!function(){(0,n.__awaiter)(this,void 0,void 0,(function(){var t;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return[4,d()];case 1:return(t=n.sent()).isServiceDown?a():t.loading?setTimeout(d,1e3):e(t.data),[2]}}))}))}()}))]}))}))];case 1:return e=v.sent(),[4,(0,n.__awaiter)(void 0,void 0,Promise,(function(){var e,i,r,o;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.getUsername()];case 1:return e=n.sent(),[4,a.kas.getToken()];case 2:i=n.sent(),r="owner = ".concat(e),n.label=3;case 3:return n.trys.push([3,5,,6]),[4,new c.DefaultApi(new c.Configuration({accessToken:i,basePath:t})).getKafkas("","","",r)];case 4:return(o=n.sent()).data.items?[2,o.data.items.some((function(e){return(null==e?void 0:e.instance_type)===(null===s.ik||void 0===s.ik?void 0:s.ik.eval)}))]:[3,6];case 5:return n.sent(),[3,6];case 6:return[2,!1]}}))}))];case 2:return i=v.sent(),r=null==e?void 0:e.get(null===l.QuotaType||void 0===l.QuotaType?void 0:l.QuotaType.kas),o=function(){switch(!0){case void 0!==r&&r.remaining>0:return"quota";case i:return"trial-used";default:return"trial"}}(),[4,(f=o,(0,n.__awaiter)(void 0,void 0,Promise,(function(){var e,a,t;return(0,n.__generator)(this,(function(i){switch(i.label){case 0:return[4,m.getCloudProviders()];case 1:return e=i.sent(),a=(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.items)||[],[4,Promise.all(a.filter((function(e){return e.enabled})).map((function(e){return(0,n.__awaiter)(void 0,void 0,Promise,(function(){var a;return(0,n.__generator)(this,(function(t){switch(t.label){case 0:return[4,p(e.id,f)];case 1:return a=t.sent(),[2,{id:e.id,displayName:e.display_name,regions:a,AZ:{single:!1,multi:!0}}]}}))}))})))];case 2:return[2,i.sent()]}}))})))];case 3:return[2,{defaultProvider:1===(u=v.sent()).length?u[0].id:void 0,defaultAZ:"multi",availableProviders:u,instanceAvailability:o}]}var f}))}))}),w=v(),k=(0,o.useContext)(r.QuickStartContext),b=(0,o.useCallback)((function(){k.setActiveQuickStart&&k.setActiveQuickStart("getting-started")}),[]),h=(0,o.useCallback)((function(e,a,t){w(e,(function(){a(),_&&_(),f()}),t)}),[f,_,w]),E=(0,o.useCallback)((function(){return(0,n.__awaiter)(void 0,void 0,Promise,(function(){return(0,n.__generator)(this,(function(e){return[2,g()]}))}))}),[]);return u().createElement(i.CreateKafkaInstance,{isModalOpen:!0,onClickQuickStart:b,onCancel:f,getAvailableProvidersAndDefaults:E,onCreate:h,appendTo:s.wx})};const p=m},78261:(e,a,t)=>{t.d(a,{SM:()=>i,G6:()=>n.isServiceApiError});var n=t(4734),i={UNAUTHORIZED_USER:n.APIErrorCodes.ERROR_4,DUPLICATE_INSTANCE_NAME:n.APIErrorCodes.ERROR_36,REACHED_MAX_LIMIT_ALLOWED_KAFKA:n.APIErrorCodes.ERROR_24,INSUFFICIENT_QUOTA:n.APIErrorCodes.ERROR_120,FAILED_TO_CHECK_QUOTA:n.APIErrorCodes.ERROR_121,OWNER_DOES_NOT_EXIST:n.APIErrorCodes.ERROR_21,INSTANCE_TYPE_NOT_SUPPORTED:n.APIErrorCodes.ERROR_41}},75381:(e,a,t)=>{t.d(a,{Od:()=>n.Od,ik:()=>n.ik,pf:()=>n.pf,JB:()=>n.JB,md:()=>n.md,Nw:()=>n.Nw,bv:()=>n.bv,Bh:()=>n.Bh,L0:()=>n.L0,o8:()=>n.o8,wx:()=>n.wx,vK:()=>n.vK,Qw:()=>n.Qw,hm:()=>n.hm,SM:()=>i.SM,G6:()=>i.G6});var n=t(52648),i=(t(82519),t(78261))},82519:(e,a,t)=>{t.d(a,{j:()=>i});var n=t(75418);function i(e){n.useEffect((function(){var a=document.title;return document.title=e,function(){document.title=a}}),[e])}},52648:(e,a,t)=>{t.d(a,{bv:()=>o,Bh:()=>s,hm:()=>u,Od:()=>n,JB:()=>l,pf:()=>c,md:()=>v,o8:()=>m,Nw:()=>d,L0:()=>p,wx:()=>f,Qw:()=>_,vK:()=>g,ik:()=>i});var n,i,r=t(31803);!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(n||(n={})),function(e){e.eval="eval",e.standard="standard"}(i||(i={}));var o=[{value:"aws",label:"Amazon Web Services"}],u=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],s=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],l=32,c=10,d=50,v=5e3,m=function(e,a,t){var n=a;t&&t>0&&(e===(t%a!=0?Math.floor(t/a)+1:Math.floor(t/a))&&(n=t>a?t%a==0?a:t%a:t));return 0!==n?n:a},p=function(e,a){return e="string"==typeof e?new Date(e):e,(0,r.formatDistance)(e,new Date)+" "+a},f=function(){return document.getElementById("chrome-app-render-root")||document.body},_=function(){var e,a=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(a=!0),a},g=function(e){for(var a=e.loadingCount,t=e.skeleton,n=e.length,i=[],r=[],o=0;o<n;o++)r.push({title:t});for(o=0;o<a;o++)i.push({cells:r});return i}}}]);
//# sourceMappingURL=6437.ae371f16.js.map