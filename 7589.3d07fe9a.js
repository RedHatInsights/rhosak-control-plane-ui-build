"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[7589],{48090:(e,t,a)=>{a(75418),a(75205),a(84669),a(98068),a(28962)},28962:(e,t,a)=>{a.d(t,{pf:()=>i.p,D5:()=>d.D,C0:()=>s.C,jU:()=>s.j,yR:()=>m,wu:()=>v.wu,wR:()=>f.w,L5:()=>g.L,bN:()=>v.bN,h0:()=>v.h0});var n=a(75418),r=a.n(n),o=(a(46332),a(84669)),i=a(43277),s=a(12973),c=a(70655),l=a(98068),u=a(75205),p=(a(4256),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,c.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?r().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},r().createElement(s.C,{emptyStateProps:{variant:s.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},r().createElement(o.Button,{onClick:this.onClickButton},e("go_to_kafka_instances")))):this.props.children},t}(n.Component)),m=((0,l.withRouter)((0,u.withTranslation)()(p)),function(e){var t=e.bullseyeProps,a=e.spinnerProps;return r().createElement(o.Bullseye,(0,c.__assign)({},t),r().createElement(o.Spinner,(0,c.__assign)({},a)))}),d=a(98034),v=a(16846),f=a(69887),g=a(93697);a(8509)},36953:(e,t,a)=>{a.d(t,{GX:()=>i,cW:()=>s});var n=a(70655),r=a(66660),o=a(30681),i=function(e){var t=e.kafkaId,a=e.timeDuration,r=e.timeInterval,i=e.accessToken,s=e.basePath;return(0,n.__awaiter)(void 0,void 0,void 0,(function(){var e,c,l;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return[4,new o.DefaultApi(new o.Configuration({accessToken:i,basePath:s})).getMetricsByRangeQuery(t,a,r,["kubelet_volume_stats_used_bytes"])];case 1:return e=n.sent(),c=(e.data.items||[]).filter((function(e){return!(e.values&&e.metric&&e.metric.topic&&e.metric.name&&e.metric.persistentvolumeclaim&&e.metric.persistentvolumeclaim.includes("zookeeper"))})),l={},c.forEach((function(e){e.values.forEach((function(e){var t=e.value,a=e.timestamp;return l[a]=t+(l[a]||0)}))})),[2,l]}}))}))},s=function(e){return(0,n.__awaiter)(void 0,void 0,void 0,(function(){var t,a,r,o,i,s,u;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return[4,Promise.all([c(e),l(e)])];case 1:return t=n.sent(),a=t[0],r=t[1],o=r.topics,i=r.bytesIncoming,s=r.bytesOutgoing,u=r.bytesPerPartition,[2,{kafkaTopics:a,metricsTopics:o,bytesIncoming:i,bytesOutgoing:s,bytesPerPartition:u}]}}))}))},c=function(e){var t=e.accessToken,a=e.basePath;return(0,n.__awaiter)(void 0,void 0,Promise,(function(){return(0,n.__generator)(this,(function(e){switch(e.label){case 0:return[4,new r.TopicsApi(new o.Configuration({accessToken:t,basePath:a})).getTopics(void 0,100,100,void 0,void 0,void 0,void 0)];case 1:return[2,(e.sent().data.items||[]).map((function(e){return e.name}))]}}))}))};function l(e){var t=e.accessToken,a=e.basePath,r=e.kafkaId,i=e.timeDuration,s=e.timeInterval,c=e.selectedTopic;return(0,n.__awaiter)(this,void 0,Promise,(function(){var e,l,u,p,m,d,v,f;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return e=["__consumer_offsets","__strimzi_canary"],[4,new o.DefaultApi(new o.Configuration({accessToken:t,basePath:a})).getMetricsByRangeQuery(r,i,s,["kafka_server_brokertopicmetrics_bytes_in_total","kafka_server_brokertopicmetrics_bytes_out_total","kafka_topic:kafka_log_log_size:sum"])];case 1:return l=n.sent(),u=(l.data.items||[]).filter((function(t){var a;return!(t.values&&t.metric&&t.metric.topic&&t.metric.name||e.includes((null===(a=t.metric)||void 0===a?void 0:a.topic)||""))})),p=u.filter((function(e){var t;return void 0===c||(null===(t=e.metric)||void 0===t?void 0:t.topic)===c})),m=Array.from(new Set(u.map((function(e){return e.metric.topic})))),d={},v={},f={},p.forEach((function(e){var t,a=e.metric,n=a.__name__,r=a.topic;function o(t){e.values.forEach((function(e){var a=e.value,n=e.timestamp;return t[n]=a+(t[n]||0)}))}switch(n){case"kafka_server_brokertopicmetrics_bytes_in_total":o(d);break;case"kafka_server_brokertopicmetrics_bytes_out_total":o(v);break;case"kafka_topic:kafka_log_log_size:sum":t=f[r]||{},e.values.forEach((function(e){var a=e.value,n=e.timestamp;return t[n]=a+(t[n]||0)})),f[r]=t}})),[2,{topics:m,bytesOutgoing:v,bytesIncoming:d,bytesPerPartition:f}]}}))}))}},98597:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(75418),r=a.n(n),o=a(53832),i=a(78800),s=a(75205);const c=function(e){var t=e.kafkaId,a=e.onCreateTopic;return r().createElement(s.I18nextProvider,{i18n:(0,i.Y)()},r().createElement(o.C,{kafkaId:t,onCreateTopic:a}))}},82519:(e,t,a)=>{a(75418)},52648:(e,t,a)=>{a.d(t,{bv:()=>i,Bh:()=>c,hm:()=>s,Od:()=>n,JB:()=>l,pf:()=>u,md:()=>m,o8:()=>d,Nw:()=>p,E7:()=>v,L0:()=>f,wx:()=>g,Qw:()=>b,vK:()=>k,ik:()=>r});var n,r,o=a(59093);!function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed",e.DEPROVISION="deprovision",e.DELETED="deleting"}(n||(n={})),function(e){e.eval="eval",e.standard="standard"}(r||(r={}));var i=[{value:"aws",label:"Amazon Web Services"}],s=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],c=[{value:"us-east-1",label:"US East, N. Virginia"},{value:"eu-west-1",label:"EU, Ireland"}],l=32,u=10,p=50,m=5e3,d=function(e,t,a){var n=t;a&&a>0&&(e===(a%t!=0?Math.floor(a/t)+1:Math.floor(a/t))&&(n=a>t?a%t==0?t:a%t:a));return 0!==n?n:t},v=function(e,t,a){void 0===a&&(a="asc");return null==e?void 0:e.sort((function(e,n){if(!Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(n,t))return 0;var r="string"==typeof e[t]?e[t].toUpperCase():e[t],o="string"==typeof n[t]?n[t].toUpperCase():n[t],i=0;return r>o?i=1:r<o&&(i=-1),"desc"===a?-1*i:i}))},f=function(e,t){return e="string"==typeof e?new Date(e):e,(0,o.formatDistance)(e,new Date)+" "+t},g=function(){return document.getElementById("chrome-app-render-root")||document.body},b=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},k=function(e){for(var t=e.loadingCount,a=e.skeleton,n=e.length,r=[],o=[],i=0;i<n;i++)o.push({title:a});for(i=0;i<t;i++)r.push({cells:o});return r}},78800:(e,t,a)=>{a.d(t,{Y:()=>v});var n=a(91575),r=a.n(n),o=a(75205),i=a(16486),s=a.n(i),c=a(73337),l=a.n(c),u=a(32578),p=a.n(u),m=a(86369),d=a.n(m),v=(a(76831),function(){var e="true"===new URLSearchParams(window.location.search).get("pseudolocalization"),t=r().createInstance();return t.use(new(p())({enabled:e,wrapped:!0})).use(l()).use(s()).use(o.initReactI18next).init({backend:{loadPath:"".concat(a.p,"locales/{{lng}}/{{ns}}.json")},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,a,n){return n=n||{},"number"===t?new Intl.NumberFormat(a).format(e):e instanceof Date?"fromNow"===t?d()(e).fromNow(!0===n.omitSuffix):d()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0},(function(){d().locale(r().language)})),t.on("languageChanged",(function(e){d().locale(e)})),t})}}]);
//# sourceMappingURL=7589.3d07fe9a.js.map