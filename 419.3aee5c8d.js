"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[419],{58773:(e,t,a)=>{t.wP={name:"TachometerAltIcon",height:512,width:576,svgPath:"M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z",yOffset:0,xOffset:0},t.Le=a(35183).createIcon(t.wP),t.ZP=t.Le},2112:(e,t,a)=>{t.MS={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0},t.R0=a(35183).createIcon(t.MS),t.ZP=t.R0},9914:(e,t)=>{t.VQ={name:"--pf-chart-color-black-500",value:"#6a6e73",var:"var(--pf-chart-color-black-500)"},t.ZP=t.VQ},84076:(e,t)=>{t.iY={name:"--pf-chart-color-blue-300",value:"#06c",var:"var(--pf-chart-color-blue-300)"},t.ZP=t.iY},72021:(e,t)=>{t.R0={name:"--pf-chart-color-green-300",value:"#4cb140",var:"var(--pf-chart-color-green-300)"},t.ZP=t.R0},82874:(e,t)=>{t.g9={name:"--pf-chart-color-orange-300",value:"#ec7a08",var:"var(--pf-chart-color-orange-300)"},t.ZP=t.g9},49075:(e,t,a)=>{a.d(t,{g:()=>c});var n=a(75418),r=a.n(n),i=a(54804),o=a(58773),l=a(2112),s=a(14708),c=function(e){var t=e.title,a=e.body,n=e.noData,c=e.noTopics,u=e.noFilter,m=e.onCreateTopic;return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.xs},r().createElement(i.EmptyStateIcon,{icon:n?o.ZP:c?l.ZP:u?s.FilterIcon:void 0}),r().createElement(i.Title,{headingLevel:"h3",size:"lg"},t),r().createElement(i.EmptyStateBody,null,a,r().createElement("br",null),r().createElement("br",null),c&&r().createElement(i.Button,{variant:"primary",onClick:m},"Create Topic")))}},30419:(e,t,a)=>{a.d(t,{g2:()=>n.g,n9:()=>g,vB:()=>x,jo:()=>T,fo:()=>D,iG:()=>k});var n=a(49075),r=a(70655),i=a(75418),o=a.n(i),l=a(54532),s=a(92717),c=a(54254),u=a(75381),m=a(54804),d=a(91530),p=a(84076),f=a(9914),h=a(23535),v=a.n(h),E=function(e,t){var a="B";return e=e&&(e.sortedData?e.sortedData:e.data),t=t&&(t.sortedData?t.sortedData:t.data),e&&e.map((function(e){e.bytes.forEach((function(e){var t=v()(e).unit;"kiB"===t&&"B"===a&&(a="kiB"),"MiB"===t&&("B"!==a&&"kiB"!==a||(a="MiB")),"GiB"===t&&("B"!==a&&"kiB"!==a&&"MiB"!==a||(a="GiB"))}))})),t&&t.map((function(e){e.bytes.forEach((function(e){var t=v()(e).unit;"kiB"===t&&"B"===a&&(a="kiB"),"MiB"===t&&("B"!==a&&"kiB"!==a||(a="MiB")),"GiB"===t&&("B"!==a&&"kiB"!==a&&"MiB"!==a||(a="GiB"))}))})),a},_=function(e,t){return"B"===t?Math.round(10*e)/10:"kiB"===t?Math.round(e/1024*10)/10:"MiB"===t?Math.round(e/1024/1024*10)/10:"GiB"===t?Math.round(e/1024/1024/1024*10)/10:void 0},b=function(e){var t=6,a=60;switch(e){case"Last 5 minutes":t=5/60,a=1;break;case"Last 15 minutes":t=.25,a=3;break;case"Last 30 minutes":t=.5,a=5;break;case"Last 1 hour":t=1,a=10;break;case"Last 3 hours":t=3,a=30;break;case"Last 6 hours":t=6,a=60;break;case"Last 12 hours":t=12,a=120;break;case"Last 24 hours":t=24,a=240;break;case"Last 2 days":t=48,a=480;break;case"Last 7 days":t=168,a=1440}return{timeDuration:t,timeInterval:a}},y=a(14708),g=function(e){var t=e.title,a=e.description;return o().createElement(m.Popover,{"aria-label":"Basic popover",headerContent:o().createElement("div",null,t),bodyContent:o().createElement("div",null,a)},o().createElement(y.OutlinedQuestionCircleIcon,null))},k=function(e){var t=e.kafkaID,a=e.metricsDataUnavailable,h=e.setMetricsDataUnavailable,v=(0,i.useRef)(),E=(0,l.useTranslation)().t,b=(0,c.useAuth)(),y=(0,c.useConfig)().kas.apiBasePath,k=(0,c.useAlert)().addAlert,C=(0,i.useState)(),T=C[0],w=C[1],D=(0,i.useState)(),S=D[0],B=D[1],A=(0,i.useState)(),L=A[0],M=A[1],P=(0,i.useState)(!0),I=P[0],z=P[1],G=(0,i.useState)(),F=G[0],O=G[1],R=(0,i.useState)(6),Z=R[0],V=R[1],H=(0,i.useState)(60),U=H[0],W=H[1],Q=function(){return v.current&&w(v.current.clientWidth)},K=T&&T>650?6:3,N=function(){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var e,a,n,i,o,l,c,d;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==b?void 0:b.kas.getToken()];case 1:if(void 0===(e=r.sent())||""===e)return[3,5];r.label=2;case 2:return r.trys.push([2,4,,5]),a=new s.DefaultApi(new s.Configuration({accessToken:e,basePath:y})),t?[4,a.getMetricsByRangeQuery(t,60*Z,60*U,["kubelet_volume_stats_used_bytes"])]:[2];case 3:return n=r.sent(),i={name:"Used disk space",data:[]},n.data.items?(h(!1),null===(c=n.data.items)||void 0===c||c.forEach((function(e,t){var a,n=e.metric;if(void 0===n)throw new Error("item.metric cannot be undefined");if(void 0===e.values)throw new Error("item.values cannot be undefined");"kubelet_volume_stats_used_bytes"===n.__name__&&(n.persistentvolumeclaim.includes("zookeeper")||null===(a=e.values)||void 0===a||a.forEach((function(e,a){if(null==e.timestamp)throw new Error("timestamp cannot be undefined");if(t>0){var n=i.data[a].usedSpaceAvg.concat(e.value);i.data[a].usedSpaceAvg=n}else i.data.push({timestamp:e.timestamp,usedSpaceAvg:[e.value]})})));X(i)}))):(h(!0),z(!1)),[3,5];case 4:return o=r.sent(),l=void 0,(0,u.G6)(o)&&(l=null===(d=o.response)||void 0===d?void 0:d.data.reason),k({variant:m.AlertVariant.danger,title:E("common.something_went_wrong"),description:l}),[3,5];case 5:return[2]}}))}))};(0,i.useEffect)((function(){N(),Q()}),[Z,U]),(0,i.useEffect)((function(){Q(),window.addEventListener("resize",Q)}),[T]);var X=function(e){var t=[{name:"Limit",symbol:{fill:f.ZP.value,type:"threshold"}},{name:e.name,symbol:{fill:p.ZP.value}}],a=p.ZP.value,n=f.ZP.value,r=[],i=[],o=[],l=function(){return(e.data[e.data.length-1].timestamp-e.data[0].timestamp)/1e3/60},s=360-l(),c=(360-l())/5;if(s<=360&&Z>=6)for(var u=0;u<c;u+=1){var m=e.data[0].timestamp-3e5*(c-u),d=new Date(m),h=d.getHours()+":"+d.getMinutes();i.push({name:e.name,x:h,y:0}),o.push({name:"Limit",x:h,y:60})}e.data.map((function(t){var a=new Date(t.timestamp),n=a.getHours()+":"+a.getMinutes(),r=t.usedSpaceAvg.reduce((function(e,t){return e+t}),0),l=_(r,"GiB");i.push({name:e.name,x:n,y:l}),o.push({name:"Limit",x:n,y:60})})),r.push({areaColor:a,softLimitColor:n,area:i,softLimit:o}),B(t),M(r),O("GiB"),z(!1)};return o().createElement(m.Card,null,o().createElement(x,{showTopicFilter:!1,title:E("metrics.kafka_instance_metrics"),setTimeDuration:V,setTimeInterval:W,showKafkaToolbar:!a,onRefreshKafkaToolbar:function(){N()}}),o().createElement(m.CardTitle,{component:"h2"},E("metrics.used_disk_space")," ",o().createElement(g,{title:E("metrics.used_disk_space"),description:"chart description"})),o().createElement(m.CardBody,null,o().createElement("div",{ref:v},I?o().createElement(m.Bullseye,null,o().createElement(m.Spinner,{isSVG:!0})):a?o().createElement(n.g,{title:E("metrics.empty_state_no_data_title"),body:E("metrics.empty_state_no_data_body"),noData:!0}):L&&S&&F&&o().createElement(d.Chart,{ariaDesc:E("metrics.used_disk_space"),ariaTitle:"Disk Space",containerComponent:o().createElement(d.ChartVoronoiContainer,{labels:function(e){var t=e.datum;return t.name+": "+t.y},constrainToVisibleArea:!0}),legendPosition:"bottom-left",legendComponent:o().createElement(d.ChartLegend,{orientation:"horizontal",data:S,itemsPerRow:K}),height:350,padding:{bottom:110,left:90,right:60,top:25},themeColor:d.ChartThemeColor.multiUnordered,width:T,minDomain:{y:0},legendAllowWrap:!0},o().createElement(d.ChartAxis,{label:"Time",tickCount:6}),o().createElement(d.ChartAxis,{dependentAxis:!0,tickFormat:function(e){return Math.round(e)+" "+F},tickCount:4}),o().createElement(d.ChartGroup,null,L.map((function(e,t){return o().createElement(d.ChartArea,{key:"chart-area-"+t,data:e.area,interpolation:"monotoneX",style:{data:{stroke:e.color}}})}))),o().createElement(d.ChartThreshold,{key:"chart-softlimit",data:L[0].softLimit,style:{data:{stroke:L[0].softLimitColor}}})))))},C=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}(0,r.__extends)(t,e),t.prototype.render=function(){var e=(0,d.createContainer)("voronoi","cursor"),t=[],a=[];return this.props.topics.forEach((function(e){t.push({name:e.name});var n=e.data.map((function(t){var a=new Date(t.timestamp);return{x:a.getHours()+":"+a.getMinutes(),y:t.count,name:e.name}}));a.push(n)})),o().createElement("div",{style:{height:"300x",width:"450px"}},o().createElement(d.Chart,{ariaDesc:"Messages in to a topic",ariaTitle:"Messages in",containerComponent:o().createElement(e,{cursorDimension:"x",labels:function(e){return""+e.datum.y},labelComponent:o().createElement(d.ChartLegendTooltip,{legendData:t,title:function(e){return e.x}}),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:50}),legendData:t,legendPosition:"bottom",height:300,maxDomain:{y:10},minDomain:{y:0},padding:{bottom:100,left:70,right:50,top:50},themeColor:d.ChartThemeColor.green,width:450},o().createElement(d.ChartAxis,{label:"time",tickCount:6}),o().createElement(d.ChartAxis,{dependentAxis:!0,showGrid:!0,label:"messages"}),o().createElement(d.ChartGroup,null,a.map((function(e,t){return o().createElement(d.ChartLine,{data:e,key:"chart-messages-"+t})})))))}}(o().Component),a(82874)),T=function(e){var t=e.kafkaID,a=e.metricsDataUnavailable,f=e.setMetricsDataUnavailable,h=e.onCreateTopic,v=(0,l.useTranslation)().t,b=(0,c.useAuth)(),y=(0,c.useConfig)().kas.apiBasePath,k=(0,c.useAlert)().addAlert,T=(0,i.useRef)(),w=(0,i.useState)(),S=w[0],B=w[1],A=(0,i.useState)(6),L=A[0],M=A[1],P=(0,i.useState)(60),I=P[0],z=P[1],G=(0,i.useState)(!1),F=G[0],O=G[1],R=(0,i.useState)(!1),Z=R[0],V=R[1],H=function(){return T.current&&B(T.current.clientWidth)},U=S&&S>650?6:3;(0,i.useEffect)((function(){H(),window.addEventListener("resize",H)}),[S]);var W=(0,i.useState)(),Q=W[0],K=W[1],N=(0,i.useState)(),X=N[0],Y=N[1],j=(0,i.useState)(),q=j[0],J=j[1],$=(0,i.useState)(),ee=$[0],te=$[1],ae=(0,i.useState)(!0),ne=ae[0],re=ae[1],ie=(0,i.useState)([]),oe=ie[0],le=ie[1],se=function(){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var e,a,n,i,o,l,c,d,p,h,E;return(0,r.__generator)(this,(function(_){switch(_.label){case 0:return[4,null==b?void 0:b.kas.getToken()];case 1:if(void 0===(e=_.sent())||""===e)return[3,5];_.label=2;case 2:return _.trys.push([2,4,,5]),a=new s.DefaultApi(new s.Configuration({accessToken:e,basePath:y})),t?[4,a.getMetricsByRangeQuery(t,60*L,60*I,["kafka_server_brokertopicmetrics_bytes_in_total","kafka_server_brokertopicmetrics_bytes_out_total"])]:[2];case 3:return n=_.sent(),i={name:"Total incoming bytes",rawData:new Map},o={name:"Total outgoing bytes",rawData:new Map},n.data.items?(f(!1),null===(h=n.data.items)||void 0===h||h.forEach((function(e,t){var a,n,l=e.metric;if(void 0===l)throw new Error("item.metric cannot be undefined");if(void 0===e.values)throw new Error("item.values cannot be undefined");"__strimzi_canary"!==l.topic&&"__consumer_offsets"!==l.topic&&oe&&l.topic&&-1===oe.indexOf(l.topic)&&le((0,r.__spreadArray)((0,r.__spreadArray)([],oe),[l.topic])),(Z?"__strimzi_canary"!==l.topic&&"__consumer_offsets"!==l.topic&&F===l.topic:"__strimzi_canary"!==l.topic&&"__consumer_offsets"!==l.topic)&&("kafka_server_brokertopicmetrics_bytes_in_total"===l.__name__&&(null===(a=e.values)||void 0===a||a.forEach((function(e,t){var a;if(null==e.timestamp)throw new Error("timestamp cannot be undefined");i.rawData.has(e.timestamp)?null===(a=i.rawData.get(e.timestamp))||void 0===a||a.push(e.value):i.rawData.set(e.timestamp,[e.value])}))),"kafka_server_brokertopicmetrics_bytes_out_total"===l.__name__&&(null===(n=e.values)||void 0===n||n.forEach((function(e,t){var a;if(null==e.timestamp)throw new Error("timestamp cannot be undefined");o.rawData.has(e.timestamp)?null===(a=o.rawData.get(e.timestamp))||void 0===a||a.push(e.value):o.rawData.set(e.timestamp,[e.value])}))))})),i.rawData.size<1&&o.rawData.size<1?(te(!0),re(!1)):(l=[],i.rawData.forEach((function(e,t){return l.push({timestamp:t,bytes:e})})),i.sortedData=l.sort((function(e,t){return e.timestamp-t.timestamp})),c=[],o.rawData.forEach((function(e,t){return c.push({timestamp:t,bytes:e})})),o.sortedData=c.sort((function(e,t){return e.timestamp-t.timestamp})),ce(i,o))):(f(!0),re(!1)),[3,5];case 4:return d=_.sent(),p=void 0,(0,u.G6)(d)&&(p=null===(E=d.response)||void 0===E?void 0:E.data.reason),k({variant:m.AlertVariant.danger,title:v("common.something_went_wrong"),description:p}),[3,5];case 5:return[2]}}))}))};(0,i.useEffect)((function(){se()}),[L,I]);var ce=function(e,t){var a=[],n=[],r=E(e,t);if(e){var i=[],o=p.ZP.value,l=360-(d=function(){return(e.sortedData[e.sortedData.length-1].timestamp-e.sortedData[0].timestamp)/1e3/60})(),s=(360-d())/5;if(l<=360&&L>=6)for(var c=0;c<s;c+=1){var u=e.sortedData[0].timestamp-3e5*(s-c),m=(h=new Date(u)).getHours()+":"+h.getMinutes();i.push({name:e.name,x:m,y:0})}e.sortedData.map((function(t){var a=new Date(t.timestamp),n=a.getHours()+":"+a.getMinutes(),o=t.bytes.reduce((function(e,t){return e+t}),0),l=_(o,r);i.push({name:e.name,x:n,y:l})})),n.push({color:o,line:i}),a.push({name:e.name,symbol:{fill:p.ZP.value}})}if(t){var d,f=[];o=C.ZP.value,l=360-(d=function(){return(t.sortedData[t.sortedData.length-1].timestamp-t.sortedData[0].timestamp)/1e3/60})(),s=(360-d())/5;if(l<=360&&L>=6)for(c=0;c<s;c+=1){var h;u=t.sortedData[0].timestamp-3e5*(s-c),m=(h=new Date(u)).getHours()+":"+h.getMinutes();f.push({name:t.name,x:m,y:0})}t.sortedData.map((function(e){var a=new Date(e.timestamp),n=a.getHours()+":"+a.getMinutes(),i=e.bytes.reduce((function(e,t){return e+t}),0),o=_(i,r);f.push({name:t.name,x:n,y:o})})),n.push({color:o,line:f}),a.push({name:t.name,symbol:{fill:C.ZP.value}})}Y(a),K(n),J(r),re(!1)};return o().createElement(m.Card,null,o().createElement(x,{showTopicFilter:!0,title:v("metrics.topic_metrics"),setTimeDuration:M,setTimeInterval:z,showTopicToolbar:!ee&&!a,selectedTopic:F,setSelectedTopic:O,onRefreshTopicToolbar:function(){se()},topicList:oe,setIsFilterApplied:V}),o().createElement(m.CardTitle,{component:"h2"},v("metrics.total_bytes")," ",o().createElement(g,{title:v("metrics.total_bytes"),description:"chart description"})),o().createElement(m.CardBody,null,o().createElement("div",{ref:T},o().createElement("div",null,ne?o().createElement(m.Bullseye,null,o().createElement(m.Spinner,{isSVG:!0})):a?o().createElement(n.g,{title:v("metrics.empty_state_no_data_title"),body:v("metrics.empty_state_no_data_body"),noData:!0}):ee?o().createElement(n.g,{title:v("metrics.empty_state_no_topics_title"),body:v("metrics.empty_state_no_topics_body"),noTopics:!0,onCreateTopic:h}):Q&&X&&q&&o().createElement(o().Fragment,null,o().createElement(d.Chart,{ariaDesc:v("metrics.total_bytes"),ariaTitle:"Total Bytes",containerComponent:o().createElement(d.ChartVoronoiContainer,{labels:function(e){var t=e.datum;return t.name+": "+t.y},constrainToVisibleArea:!0}),legendAllowWrap:!0,legendPosition:"bottom-left",legendComponent:o().createElement(d.ChartLegend,{data:X,itemsPerRow:U}),height:300,padding:{bottom:110,left:90,right:30,top:25},themeColor:d.ChartThemeColor.multiUnordered,width:S},o().createElement(d.ChartAxis,{label:"Time",tickCount:6}),o().createElement(d.ChartAxis,{dependentAxis:!0,tickFormat:function(e){return Math.round(e)+" "+q},tickCount:4,minDomain:{y:0}}),o().createElement(d.ChartGroup,null,Q.map((function(e,t){return o().createElement(d.ChartLine,{key:"chart-line-"+t,data:e.line,style:{data:{stroke:e.color}}})})))),o().createElement(m.Divider,null),F?o().createElement(D,{kafkaID:t,timeDuration:L,timeInterval:I}):o().createElement(m.Card,null,o().createElement(m.CardTitle,{component:"h2"},v("metrics.topic_partition_size")),o().createElement(m.CardBody,null,o().createElement(n.g,{title:v("metrics.empty_state_no_filter_title"),body:v("metrics.empty_state_no_filter_body"),noFilter:!0})," ")))))))},w=a(72021),D=function(e){var t=e.kafkaID,a=e.timeDuration,f=e.timeInterval,h=(0,i.useRef)(),b=(0,l.useTranslation)().t,y=(0,c.useAuth)(),k=(0,c.useConfig)().kas.apiBasePath,C=(0,c.useAlert)().addAlert,T=(0,i.useState)(),D=T[0],S=T[1],B=(0,i.useState)(),x=B[0],A=B[1],L=(0,i.useState)(),M=L[0],P=L[1],I=(0,i.useState)(),z=I[0],G=I[1],F=(0,i.useState)(!1),O=F[0],R=F[1],Z=(0,i.useState)(!0),V=Z[0],H=Z[1],U=(0,i.useState)(),W=U[0],Q=U[1],K=[w.ZP.value,p.ZP.value],N=function(){return h.current&&S(h.current.clientWidth)},X=D&&D>650?6:3;(0,i.useEffect)((function(){(0,r.__awaiter)(void 0,void 0,void 0,(function(){var e,n,i,o,l,c,d,p,h;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==y?void 0:y.kas.getToken()];case 1:if(void 0===(e=r.sent())||""===e)return[3,5];r.label=2;case 2:return r.trys.push([2,4,,5]),n=new s.DefaultApi(new s.Configuration({accessToken:e,basePath:k})),t?[4,n.getMetricsByRangeQuery(t,60*a,60*f,["kafka_log_log_size"])]:[2];case 3:return i=r.sent(),o=[],i.data.items?(R(!1),null===(p=i.data.items)||void 0===p||p.forEach((function(e,t){var a,n,r=null===(a=null==e?void 0:e.metric)||void 0===a?void 0:a.topic,i={name:r,data:[]},l=o.some((function(e){return e.name===r}));null===(n=e.values)||void 0===n||n.forEach((function(e){if(null==e.timestamp)throw new Error("timestamp cannot be undefined");l?o.map((function(t){t.name===r&&t.data.forEach((function(t){t.bytes=t.bytes+e.value}))})):i.data.push({name:r||"",timestamp:e.timestamp,bytes:e.value})})),l||o.push(i)})),(l=o.filter((function(e){return"__strimzi_canary"!==e.name&&"__consumer_offsets"!==e.name}))).length<1&&Q(!0),Y(l)):(R(!0),H(!1)),[3,5];case 4:return c=r.sent(),d=void 0,(0,u.G6)(c)&&(d=null===(h=c.response)||void 0===h?void 0:h.data.reason),C({variant:m.AlertVariant.danger,title:b("common.something_went_wrong"),description:d}),[3,5];case 5:return[2]}}))})),N()}),[f,a]),(0,i.useEffect)((function(){N(),window.addEventListener("resize",N)}),[D]);var Y=function(e){var t=[],n=[],r=E(e,void 0);e.map((function(e,i){var o=K[i];t.push({name:e.name});var l=[],s=function(){return(e.data[e.data.length-1].timestamp-e.data[0].timestamp)/1e3/60},c=360-s(),u=(360-s())/5;if(c<=360&&a>=6)for(var m=0;m<u;m+=1){var d=e.data[0].timestamp-3e5*(u-m),p=new Date(d),f=p.getHours()+":"+p.getMinutes();l.push({name:e.name,x:f,y:0})}e.data.map((function(e){var t=new Date(e.timestamp),a=t.getHours()+":"+t.getMinutes(),n=_(e.bytes,r);l.push({name:e.name,x:a,y:n})})),n.push({color:o,area:l})})),A(t),P(n),G(r),H(!1)};return o().createElement(m.Card,null,o().createElement(m.CardTitle,{component:"h2"},b("metrics.log_size_per_partition")," ",o().createElement(g,{title:b("metrics.log_size_per_partition"),description:"chart description"})),o().createElement(m.CardBody,null,o().createElement("div",{ref:h},V?o().createElement(m.Bullseye,null,o().createElement(m.Spinner,{isSVG:!0})):O?o().createElement(n.g,{title:"No data",body:"We’re creating your Kafka instance, so some details aren’t yet available.",noData:!0}):W?o().createElement(n.g,{title:"No topics yet",body:"Data will show when topics exist and are in use.",noTopics:!0}):M&&x&&v()&&o().createElement(d.Chart,{ariaDesc:b("metrics.log_size_per_partition"),ariaTitle:"Log Size",containerComponent:o().createElement(d.ChartVoronoiContainer,{labels:function(e){var t=e.datum;return t.name+": "+t.y},constrainToVisibleArea:!0}),legendPosition:"bottom-left",legendComponent:o().createElement(d.ChartLegend,{data:x,itemsPerRow:X}),height:350,padding:{bottom:110,left:90,right:30,top:25},themeColor:d.ChartThemeColor.multiUnordered,width:D,legendAllowWrap:!0},o().createElement(d.ChartAxis,{label:"Time",tickCount:6}),o().createElement(d.ChartAxis,{dependentAxis:!0,tickFormat:function(e){return Math.round(e)+" "+z}}),o().createElement(d.ChartGroup,null,M.map((function(e,t){return o().createElement(d.ChartArea,{key:"chart-area-"+t,data:e.area,interpolation:"monotoneX"})})))))))},S=function(e){var t=e.selectedTopic,a=e.setSelectedTopic,n=e.topicList,r=e.setIsFilterApplied,l=e.disableToolbar,s=(0,i.useState)(!1),c=s[0],u=s[1],d=(0,i.useState)(),p=d[0],f=d[1];(0,i.useEffect)((function(){n&&f(n)}),[n]);var h=function(e){return[o().createElement(m.SelectOption,{key:"topic-filter-0",value:"All topics"}),o().createElement(m.SelectGroup,{label:"Filter by topic",key:"topic-filter-group"},null==e?void 0:e.map((function(e,t){return o().createElement(m.SelectOption,{key:"topic-filter-"+(t+1),value:e})})))]};return o().createElement(m.ToolbarItem,{widths:{default:"100px",sm:"80px",md:"150px",lg:"200px",xl:"250px","2xl":"300px"}},o().createElement(m.Select,{variant:m.SelectVariant.single,onToggle:function(e){u(e)},onSelect:function(e,t){a&&a(t),r&&r("All topics"!==t),u(!1)},selections:t,isOpen:c,placeholderText:o().createElement(o().Fragment,null,o().createElement(y.FilterIcon,null)," All topics"),"aria-labelledby":"titleId",onFilter:function(e,t){var a=(null==p?void 0:p.filter((function(e){return-1!=e.indexOf(t)})))||[];return h(a)},isGrouped:!0,hasInlineFilter:!0,isDisabled:l,style:{width:"100%"}},h(p)))},B=function(e){var t=e.setTimeDuration,a=e.setTimeInterval,n=e.keyText,r=e.disableToolbar,l=(0,i.useState)(!1),s=l[0],c=l[1],u=(0,i.useState)(!1),d=u[0],p=u[1];return o().createElement(m.ToolbarItem,null,o().createElement(m.Select,{variant:m.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){p(e)},onSelect:function(e,n){t(b(n).timeDuration),a(b(n).timeInterval),c(n),p(!1)},selections:s,isOpen:d,isDisabled:r,placeholderText:"Last 6 hours"},function(e){return[o().createElement(m.SelectGroup,{label:"Relative time ranges",key:e+"-group"},o().createElement(m.SelectOption,{key:e+"-0",value:"Last 5 minutes"}),o().createElement(m.SelectOption,{key:e+"-1",value:"Last 15 minutes"}),o().createElement(m.SelectOption,{key:e+"-2",value:"Last 30 minutes"}),o().createElement(m.SelectOption,{key:e+"-3",value:"Last 1 hour"}),o().createElement(m.SelectOption,{key:e+"-4",value:"Last 3 hours"}),o().createElement(m.SelectOption,{key:e+"-5",value:"Last 6 hours"}),o().createElement(m.SelectOption,{key:e+"-6",value:"Last 12 hours"}),o().createElement(m.SelectOption,{key:e+"-7",value:"Last 24 hours"}),o().createElement(m.SelectOption,{key:e+"-8",value:"Last 2 days"}),o().createElement(m.SelectOption,{key:e+"-9",value:"Last 7 days"}))]}(n)))},x=function(e){var t=e.title,a=e.showTopicFilter,n=e.setTimeDuration,r=e.setTimeInterval,i=e.showKafkaToolbar,l=void 0===i||i,s=e.showTopicToolbar,c=void 0===s||s,u=e.setSelectedTopic,d=e.selectedTopic,p=e.onRefreshKafkaToolbar,f=e.onRefreshTopicToolbar,h=e.topicList,v=e.setIsFilterApplied;return o().createElement(o().Fragment,null,o().createElement(m.Level,null,o().createElement(m.LevelItem,null,o().createElement(m.CardTitle,{component:"h2"},t)),o().createElement(m.LevelItem,null,a?o().createElement(m.Toolbar,null,o().createElement(m.ToolbarContent,null,o().createElement(S,{selectedTopic:d,setSelectedTopic:u,topicList:h,setIsFilterApplied:v,disableToolbar:!c}),o().createElement(B,{setTimeDuration:n,setTimeInterval:r,disableToolbar:!c,keyText:"topic-metrics-time-filter"}),o().createElement(m.Button,{variant:"plain","aria-label":"sync",onClick:f},o().createElement(y.SyncIcon,null)))):o().createElement(m.Toolbar,null,o().createElement(m.ToolbarContent,null,o().createElement(B,{setTimeDuration:n,setTimeInterval:r,keyText:"kafka-metrics-time-filter",disableToolbar:!l}),o().createElement(m.Button,{variant:"plain","aria-label":"sync",onClick:p},o().createElement(y.SyncIcon,null)))))),o().createElement(m.Divider,null))}}}]);
//# sourceMappingURL=419.3aee5c8d.js.map