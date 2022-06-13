"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[4372],{74372:(e,a,i)=>{i.r(a),i.d(a,{CreateInstanceWithSizes:()=>p,default:()=>u});var o=i(9922),t=i(85893),r=i(68199),n=i(1808),s=i(10069),l=i(75381),d=i(93264),c=i(81847);const p=({hideModal:e,onCreate:a})=>{const i=(0,r.useHistory)(),p=(0,c.Eq)(),u=(0,c.sF)(),m=(0,c.DO)(),v=(0,d.useContext)(s.QuickStartContext),b=(0,d.useRef)(),g=()=>{i.push("overview")},w=(0,d.useCallback)((()=>{v.setActiveQuickStart&&v.setActiveQuickStart("getting-started")}),[v]),k=(0,d.useCallback)((function(i,o,t){m(i,(()=>{o(),a&&a(),e()}),t)}),[e,a,m]),E=(0,d.useCallback)((()=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield p();return b.current=e,e}))),[p]),h=(0,d.useCallback)(((e,a)=>new Promise(((i,o)=>{const t=b.current;if(t){const o=t.availableProviders.find((a=>a.id===e)),r=null==o?void 0:o.regions.find((e=>e.id===a)),n=(null==r?void 0:r.capacity.flatMap((e=>e.available_sizes.map((a=>`${e.instance_type}.${a}`)))))||[];i(u(e,a,n))}else o("Unexpected error, missing provider data")}))),[u]);return(0,t.jsx)(n.CreateKafkaInstanceWithSizes,{isModalOpen:!0,onClickQuickStart:w,onCancel:e,getAvailableProvidersAndDefaults:E,onCreate:k,onClickContactUs:g,onClickLearnMoreAboutRegions:g,onLearnHowToAddStreamingUnits:g,onLearnMoreAboutSizes:g,onClickKafkaOverview:g,getSizes:h,appendTo:l.wx})},u=p},78261:(e,a,i)=>{i.d(a,{G6:()=>o.isServiceApiError,SM:()=>t});var o=i(17118);const t={UNAUTHORIZED_USER:o.APIErrorCodes.ERROR_4,DUPLICATE_INSTANCE_NAME:o.APIErrorCodes.ERROR_36,INTERNAL_CAPACITY_ERROR:o.APIErrorCodes.ERROR_24,INSUFFICIENT_QUOTA:o.APIErrorCodes.ERROR_120,TRIAL_USED:o.APIErrorCodes.ERROR_5,FAILED_TO_CHECK_QUOTA:o.APIErrorCodes.ERROR_121,OWNER_DOES_NOT_EXIST:o.APIErrorCodes.ERROR_21}},75381:(e,a,i)=>{i.d(a,{Bh:()=>o.Bh,G6:()=>t.G6,JB:()=>o.JB,L0:()=>o.L0,Nw:()=>o.Nw,Od:()=>o.Od,Qw:()=>o.Qw,SM:()=>t.SM,bv:()=>o.bv,hm:()=>o.hm,ik:()=>o.ik,md:()=>o.md,o8:()=>o.o8,pf:()=>o.pf,vK:()=>o.vK,wx:()=>o.wx});var o=i(52648),t=(i(82519),i(78261))},82519:(e,a,i)=>{i.d(a,{j:()=>t});var o=i(93264);function t(e){(0,o.useEffect)((()=>{const a=document.title;return document.title=e,()=>{document.title=a}}),[e])}},52648:(e,a,i)=>{i.d(a,{Bh:()=>l,JB:()=>d,L0:()=>v,Nw:()=>p,Od:()=>o,Qw:()=>g,bv:()=>n,hm:()=>s,ik:()=>t,md:()=>u,o8:()=>m,pf:()=>c,vK:()=>w,wx:()=>b});var o,t,r=i(47196);!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(o||(o={})),function(e){e.eval="eval",e.standard="standard",e.developer="developer"}(t||(t={}));const n=[{value:"aws",label:"Amazon Web Services"}],s=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],l=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],d=32,c=10,p=50,u=5e3,m=(e,a,i)=>{let o=a;if(i&&i>0){e===(i%a!=0?Math.floor(i/a)+1:Math.floor(i/a))&&(o=i>a?i%a==0?a:i%a:i)}return 0!==o?o:a},v=(e,a)=>(e="string"==typeof e?new Date(e):e,(0,r.Z)(e,new Date)+" "+a),b=()=>document.getElementById("chrome-app-render-root")||document.body,g=()=>{let e=!1;var a;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e=!0),e},w=({loadingCount:e,skeleton:a,length:i})=>{const o=[],t=[];for(let e=0;e<i;e++)t.push({title:a});for(let a=0;a<e;a++)o.push({cells:t});return o}}}]);
