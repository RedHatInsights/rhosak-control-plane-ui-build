(self.webpackChunkmk_ui_frontend=self.webpackChunkmk_ui_frontend||[]).push([[122],{21122:(e,t,n)=>{"use strict";n.d(t,{L:()=>K});var a,r=n(70655),i=n(15691),o=n.n(i),s=n(91995),c=n(17751),l=n(55459),u=function(e){var t=e.createStreamsInstance,n=e.setCreateStreamsInstance,a=(e.mainToggle,(0,c.useTranslation)().t);return o().createElement(o().Fragment,null,o().createElement(s.EmptyState,null,o().createElement(s.EmptyStateIcon,{icon:l.PlusCircleIcon}),o().createElement(s.Title,{headingLevel:"h4",size:"lg"},a("You don't have any Streams instances yet")),o().createElement(s.EmptyStateBody,null,a("Create a Streams instance to get started")),o().createElement(s.Button,{variant:"primary",onClick:function(){return n(!t)}},a("Create a Streams Instance"))))},d=n(42953),m=n(8575),f=n(69104),p=n.n(f),h="http://localhost:8000".replace(/\/+$/,""),v=function(e,t,n){void 0===t&&(t=h),void 0===n&&(n=p()),this.basePath=t,this.axios=n,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)},g=function(e){function t(t,n){var a=e.call(this,n)||this;return a.field=t,a.name="RequiredError",a}return(0,r.ZT)(t,e),t}(Error),k=function(e){var t=this;return{createKafka:function(n,a,i){return void 0===i&&(i={}),(0,r.mG)(t,void 0,Promise,(function(){var t,o,s,c,l,u,d,f;return(0,r.Jh)(this,(function(p){if(null==n)throw new g("async","Required parameter async was null or undefined when calling createKafka.");if(null==a)throw new g("kafkaRequest","Required parameter kafkaRequest was null or undefined when calling createKafka.");return"/api/managed-services-api/v1/kafkas",t=m.Qc("/api/managed-services-api/v1/kafkas",!0),e&&(o=e.baseOptions),s=(0,r.pi)((0,r.pi)({method:"POST"},o),i),c={},l={},e&&e.accessToken&&(u="function"==typeof e.accessToken?e.accessToken():e.accessToken,c.Authorization="Bearer "+u),void 0!==n&&(l.async=n),c["Content-Type"]="application/json",t.query=(0,r.pi)((0,r.pi)((0,r.pi)({},t.query),l),i.query),delete t.search,d=o&&o.headers?o.headers:{},s.headers=(0,r.pi)((0,r.pi)((0,r.pi)({},c),d),i.headers),f="string"!=typeof a||"application/json"===s.headers["Content-Type"],s.data=f?JSON.stringify(void 0!==a?a:{}):a||"",[2,{url:m.WU(t),options:s}]}))}))},createServiceAccount:function(n){return void 0===n&&(n={}),(0,r.mG)(t,void 0,Promise,(function(){var t,a,i,o,s,c,l;return(0,r.Jh)(this,(function(u){return"/api/managed-services-api/v1/serviceAccount",t=m.Qc("/api/managed-services-api/v1/serviceAccount",!0),e&&(a=e.baseOptions),i=(0,r.pi)((0,r.pi)({method:"GET"},a),n),o={},s={},e&&e.accessToken&&(c="function"==typeof e.accessToken?e.accessToken():e.accessToken,o.Authorization="Bearer "+c),t.query=(0,r.pi)((0,r.pi)((0,r.pi)({},t.query),s),n.query),delete t.search,l=a&&a.headers?a.headers:{},i.headers=(0,r.pi)((0,r.pi)((0,r.pi)({},o),l),n.headers),[2,{url:m.WU(t),options:i}]}))}))},deleteKafkaById:function(n,a){return void 0===a&&(a={}),(0,r.mG)(t,void 0,Promise,(function(){var t,i,o,s,c,l,u,d;return(0,r.Jh)(this,(function(f){if(null==n)throw new g("id","Required parameter id was null or undefined when calling deleteKafkaById.");return t="/api/managed-services-api/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(n))),i=m.Qc(t,!0),e&&(o=e.baseOptions),s=(0,r.pi)((0,r.pi)({method:"DELETE"},o),a),c={},l={},e&&e.accessToken&&(u="function"==typeof e.accessToken?e.accessToken():e.accessToken,c.Authorization="Bearer "+u),i.query=(0,r.pi)((0,r.pi)((0,r.pi)({},i.query),l),a.query),delete i.search,d=o&&o.headers?o.headers:{},s.headers=(0,r.pi)((0,r.pi)((0,r.pi)({},c),d),a.headers),[2,{url:m.WU(i),options:s}]}))}))},getKafkaById:function(n,a){return void 0===a&&(a={}),(0,r.mG)(t,void 0,Promise,(function(){var t,i,o,s,c,l,u,d;return(0,r.Jh)(this,(function(f){if(null==n)throw new g("id","Required parameter id was null or undefined when calling getKafkaById.");return t="/api/managed-services-api/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(n))),i=m.Qc(t,!0),e&&(o=e.baseOptions),s=(0,r.pi)((0,r.pi)({method:"GET"},o),a),c={},l={},e&&e.accessToken&&(u="function"==typeof e.accessToken?e.accessToken():e.accessToken,c.Authorization="Bearer "+u),i.query=(0,r.pi)((0,r.pi)((0,r.pi)({},i.query),l),a.query),delete i.search,d=o&&o.headers?o.headers:{},s.headers=(0,r.pi)((0,r.pi)((0,r.pi)({},c),d),a.headers),[2,{url:m.WU(i),options:s}]}))}))},listKafkas:function(n,a,i){return void 0===i&&(i={}),(0,r.mG)(t,void 0,Promise,(function(){var t,o,s,c,l,u,d;return(0,r.Jh)(this,(function(f){return"/api/managed-services-api/v1/kafkas",t=m.Qc("/api/managed-services-api/v1/kafkas",!0),e&&(o=e.baseOptions),s=(0,r.pi)((0,r.pi)({method:"GET"},o),i),c={},l={},e&&e.accessToken&&(u="function"==typeof e.accessToken?e.accessToken():e.accessToken,c.Authorization="Bearer "+u),void 0!==n&&(l.page=n),void 0!==a&&(l.size=a),t.query=(0,r.pi)((0,r.pi)((0,r.pi)({},t.query),l),i.query),delete t.search,d=o&&o.headers?o.headers:{},s.headers=(0,r.pi)((0,r.pi)((0,r.pi)({},c),d),i.headers),[2,{url:m.WU(t),options:s}]}))}))}}},E=function(e){return{createKafka:function(t,n,a){return(0,r.mG)(this,void 0,Promise,(function(){var i;return(0,r.Jh)(this,(function(o){switch(o.label){case 0:return[4,k(e).createKafka(t,n,a)];case 1:return i=o.sent(),[2,function(e,t){void 0===e&&(e=p()),void 0===t&&(t=h);var n=(0,r.pi)((0,r.pi)({},i.options),{url:t+i.url});return e.request(n)}]}}))}))},createServiceAccount:function(t){return(0,r.mG)(this,void 0,Promise,(function(){var n;return(0,r.Jh)(this,(function(a){switch(a.label){case 0:return[4,k(e).createServiceAccount(t)];case 1:return n=a.sent(),[2,function(e,t){void 0===e&&(e=p()),void 0===t&&(t=h);var a=(0,r.pi)((0,r.pi)({},n.options),{url:t+n.url});return e.request(a)}]}}))}))},deleteKafkaById:function(t,n){return(0,r.mG)(this,void 0,Promise,(function(){var a;return(0,r.Jh)(this,(function(i){switch(i.label){case 0:return[4,k(e).deleteKafkaById(t,n)];case 1:return a=i.sent(),[2,function(e,t){void 0===e&&(e=p()),void 0===t&&(t=h);var n=(0,r.pi)((0,r.pi)({},a.options),{url:t+a.url});return e.request(n)}]}}))}))},getKafkaById:function(t,n){return(0,r.mG)(this,void 0,Promise,(function(){var a;return(0,r.Jh)(this,(function(i){switch(i.label){case 0:return[4,k(e).getKafkaById(t,n)];case 1:return a=i.sent(),[2,function(e,t){void 0===e&&(e=p()),void 0===t&&(t=h);var n=(0,r.pi)((0,r.pi)({},a.options),{url:t+a.url});return e.request(n)}]}}))}))},listKafkas:function(t,n,a){return(0,r.mG)(this,void 0,Promise,(function(){var i;return(0,r.Jh)(this,(function(o){switch(o.label){case 0:return[4,k(e).listKafkas(t,n,a)];case 1:return i=o.sent(),[2,function(e,t){void 0===e&&(e=p()),void 0===t&&(t=h);var n=(0,r.pi)((0,r.pi)({},i.options),{url:t+i.url});return e.request(n)}]}}))}))}}},S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,r.ZT)(t,e),t.prototype.createKafka=function(e,t,n){var a=this;return E(this.configuration).createKafka(e,t,n).then((function(e){return e(a.axios,a.basePath)}))},t.prototype.createServiceAccount=function(e){var t=this;return E(this.configuration).createServiceAccount(e).then((function(e){return e(t.axios,t.basePath)}))},t.prototype.deleteKafkaById=function(e,t){var n=this;return E(this.configuration).deleteKafkaById(e,t).then((function(e){return e(n.axios,n.basePath)}))},t.prototype.getKafkaById=function(e,t){var n=this;return E(this.configuration).getKafkaById(e,t).then((function(e){return e(n.axios,n.basePath)}))},t.prototype.listKafkas=function(e,t,n){var a=this;return E(this.configuration).listKafkas(e,t,n).then((function(e){return e(a.axios,a.basePath)}))},t}(v);!function(e){e.COMPLETED="complete",e.ACCEPTED="accepted",e.PROVISIONING="provisioning",e.FAILED="failed"}(a||(a={}));var I=n(52648),T=(n(82519),function(e){var t=e.status,n=t===a.ACCEPTED?"pending case":t;return o().createElement(s.Flex,null,o().createElement(s.FlexItem,{spacer:{default:"spacerSm"}},function(){switch(null==t?void 0:t.toLowerCase()){case a.COMPLETED:return o().createElement(l.CheckCircleIcon,{className:"check-circle-icon-color"});case a.FAILED:return o().createElement(l.ExclamationCircleIcon,{className:"exclamation-circle-icon-color"});case a.PROVISIONING:return o().createElement(s.Spinner,{size:l.IconSize.md});case a.ACCEPTED:default:return o().createElement(l.PendingIcon,null)}}()),o().createElement(s.FlexItem,null,(0,I.kC)(n)))}),b="https://api.stage.openshift.com",y=(function(){function e(){this.apiService=new S}e.getInstance=function(){return void 0===e.singleton&&(e.singleton=new e),e.singleton}}(),function(e){var t=e.createStreamsInstance,n=e.setCreateStreamsInstance,a=e.filterSelected,c=e.namesSelected,u=e.setNamesSelected,d=(0,i.useState)(!1),m=d[0],f=d[1],p=(0,i.useState)(),h=p[0],v=p[1],g=o().createElement(o().Fragment,null,o().createElement(s.ToolbarGroup,{variant:"filter-group"},o().createElement(s.ToolbarFilter,{chips:c,deleteChip:function(e,t){if("name"===e.toString().toLowerCase()){var n=c.findIndex((function(e){return e===t.toString().toLowerCase()}));if(n>=0){var a=Object.assign([],c);a.splice(n,1),u(a)}}},deleteChipGroup:function(e){"name"===e.toString().toLowerCase()&&u([])},categoryName:"Name"},o().createElement(s.Select,{variant:s.SelectVariant.single,"aria-label":"Select filter",onToggle:function(){f(!m)},selections:a,isOpen:m},[{value:"Name",disabled:!1}].map((function(e,t){return o().createElement(s.SelectOption,{isDisabled:e.disabled,key:t,value:e.value})}))),o().createElement(s.InputGroup,{className:"filter-text-input"},o().createElement(s.TextInput,{name:"filter text input",id:"filterText",type:"search","aria-label":"Search filter input",placeholder:"Filter by "+(null==a?void 0:a.toLowerCase()),onChange:function(e){v(e)},value:h}),o().createElement(s.Button,{variant:s.ButtonVariant.control,onClick:function(){h&&""!==h.trim()&&(c.findIndex((function(e){return e===h.trim().toLowerCase()}))<0&&(u((0,r.pr)(c,[h.trim()])),v("")))},"aria-label":"Search instances"},o().createElement(l.SearchIcon,null)))))),k=o().createElement(o().Fragment,null,o().createElement(s.ToolbarToggleGroup,{toggleIcon:o().createElement(l.FilterIcon,null),breakpoint:"lg"},g),o().createElement(s.ToolbarItem,null,o().createElement(s.Button,{variant:"primary",onClick:function(){return n(!t)}},"Create Streams instance")));return o().createElement(s.Toolbar,{id:"instance-toolbar",collapseListedFiltersBreakpoint:"lg",clearAllFilters:function(){u([])}},o().createElement(s.ToolbarContent,null,k))}),C=n(42603),w=function(e){var t,n=e.mainToggle,c=e.createStreamsInstance,l=e.setCreateStreamsInstance,u=e.kafkaInstanceItems,m=e.onConnectToInstance,f=(0,i.useState)("Name"),p=f[0],h=(f[1],(0,i.useState)([])),v=h[0],g=h[1],k=(0,i.useContext)(C.V).token,E=new S({accessToken:k,basePath:b}),w=function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(n){switch(n.label){case 0:if(void 0===e.id)throw new Error("kafka id is not set");n.label=1;case 1:return n.trys.push([1,3,,4]),[4,E.deleteKafkaById(e.id).then((function(e){console.info("Kafka successfully deleted")}))];case 2:return n.sent(),[3,4];case 3:return t=n.sent(),console.log(t),[3,4];case 4:return[2]}}))}))};return o().createElement(s.Card,null,o().createElement(y,{mainToggle:n,createStreamsInstance:c,setCreateStreamsInstance:l,filterSelected:p,namesSelected:v,setNamesSelected:g}),o().createElement(d.Table,{cells:["Name","Cloud provider","Region","Status"],rows:(t=[],u.forEach((function(e){var n=e.name,a=e.cloud_provider,r=e.region,i=e.status,s=(0,I.Or)(a),c=(0,I.KD)(r);t.push({cells:[n,s,c,{title:o().createElement(T,{status:i})}],originalData:e})})),t),"aria-label":"cluster instance list",actionResolver:function(e){return function(e,t,n){var r=e.originalData;return[{title:(null==r?void 0:r.status)===a.ACCEPTED?"Cancel instance":"Delete instance",id:"delete-instance",onClick:function(){return t(r)}},{title:"Connect to instance",id:"connect-instance",onClick:function(){return n(r)}}]}(e,w,m)}},o().createElement(d.TableHeader,null),o().createElement(d.TableBody,null)))},P=function(){this.cloud_provider="",this.multi_az=!1,this.region="",this.name=""},q=n(18324),x=(0,r.pr)([{value:"",label:"Please select ",disabled:!1}],I.Bh),A=function(e){var t=e.createStreamsInstance,n=e.setCreateStreamsInstance,a=new P;a.name="",a.cloud_provider="aws",a.region="us-east-1",a.multi_az=!0;var c=(0,i.useState)(a),u=c[0],d=c[1],m=(0,i.useState)({fieldState:"default"}),f=m[0],p=m[1],h=(0,i.useState)({fieldState:"default"}),v=h[0],g=h[1],k=(0,i.useContext)(C.V).token,E=new S({accessToken:k,basePath:b}),T=(0,q.Z7)().addAlert,y=function(){n(!t)},w="error"!==f.fieldState&&"error"!==v.fieldState,A=function(e){switch(e.toLowerCase()){case"aws":default:return o().createElement(l.AwsIcon,{size:"lg",color:"black",className:"cloud-region-icon"})}};return o().createElement(o().Fragment,null,o().createElement(s.Modal,{variant:s.ModalVariant.medium,title:"Create a Streams instance",isOpen:t,onClose:y,actions:[o().createElement(s.Button,{key:"create",variant:"primary",onClick:function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){var e,t;return(0,r.Jh)(this,(function(n){switch(n.label){case 0:if(e=!0,void 0===u.name||""===u.name.trim()?(e=!1,p({fieldState:"error",message:"This is a required field"})):/^[a-zA-Z0-9][a-zA-Z0-9 ]*$/.test(u.name.trim())||(e=!1,p({fieldState:"error",message:"Valid characters for instance name are letters from a to z and numbers from 0 to 9."})),void 0!==u.region&&""!==u.region.trim()||(e=!1,g({fieldState:"error",message:"This is a required field"})),!e)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,E.createKafka(!0,u).then((function(e){T("Kafka successfully created",s.AlertVariant.success),y()}))];case 2:return n.sent(),[3,4];case 3:return t=n.sent(),T(t,s.AlertVariant.danger),[3,4];case 4:return[2]}}))}))},isDisabled:!w},"Create instance"),o().createElement(s.Button,{key:"cancel",variant:"link",onClick:y},"Cancel")]},o().createElement(s.Form,null,("error"===f.fieldState||"error"===v.fieldState)&&o().createElement(s.FormAlert,null,o().createElement(s.Alert,{variant:"danger",title:"You must fill out all required fields before you can proceed.","aria-live":"polite",isInline:!0})),o().createElement(s.FormGroup,{label:"Instance name",helperTextInvalid:f.message,helperTextInvalidIcon:o().createElement(l.ExclamationCircleIcon,null),isRequired:!0,validated:f.fieldState,fieldId:"form-instance-name"},o().createElement(s.TextInput,{isRequired:!0,validated:f.fieldState,type:"text",id:"form-instance-name",name:"instance-name",value:null==u?void 0:u.name,onChange:function(e){d((0,r.pi)((0,r.pi)({},u),{name:e||""})),p(void 0===e||""===e.trim()?{fieldState:"error",message:"This is a required field"}:/^[a-zA-Z0-9][a-zA-Z0-9 ]*$/.test(e.trim())?{fieldState:"success",message:""}:{fieldState:"error",message:"Valid characters for instance name are letters from a to z and numbers from 0 to 9."})}})),o().createElement(s.FormGroup,{label:"Cloud provider",fieldId:"form-cloud-provider-name"},I.bv.map((function(e){return o().createElement(s.Tile,{key:"tile-"+e.value,title:e.label,icon:A(e.value),isSelected:u.cloud_provider===e.value,onClick:function(){return d((0,r.pi)((0,r.pi)({},u),{cloud_provider:e.value}))}})}))),o().createElement(s.FormGroup,{label:"Cloud region",helperTextInvalid:v.message,helperTextInvalidIcon:o().createElement(l.ExclamationCircleIcon,null),validated:v.fieldState,fieldId:"form-cloud-region-option"},o().createElement(s.FormSelect,{validated:v.fieldState,value:u.region,onChange:function(e){g(void 0===e||""===e?{fieldState:"error",message:"This is a required field"}:{fieldState:"default",message:""}),d((0,r.pi)((0,r.pi)({},u),{region:e}))},id:"cloud-region-select",name:"cloud-region","aria-label":"Cloud region"},x.map((function(e,t){return o().createElement(s.FormSelectOption,{key:t,value:e.value,label:e.label})})))),o().createElement(s.FormGroup,{label:"Availabilty zones",fieldId:"availability-zones"},o().createElement(s.ToggleGroup,{"aria-label":"Availability zone selection"},o().createElement(s.ToggleGroupItem,{text:"Single",buttonId:"single",isDisabled:!0,isSelected:!1===u.multi_az}),o().createElement(s.ToggleGroupItem,{text:"Multi",buttonId:"multi",isSelected:!0===u.multi_az})))),o().createElement("br",null),o().createElement("br",null)))},K=function(e){var t=e.onConnectToInstance,n=(0,i.useContext)(C.V).token,a=new S({accessToken:n,basePath:b}),l=(0,c.useTranslation)().t,d=(0,i.useState)(!1),m=d[0],f=d[1],p=(0,i.useState)([]),h=p[0],v=p[1],g=(0,i.useState)(!1),k=g[0],E=g[1],I=(0,i.useState)({}),T=(I[0],I[1],(0,i.useState)(!1)),y=T[0],P=T[1],q=function(){return(0,r.mG)(void 0,void 0,void 0,(function(){var e;return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,a.listKafkas().then((function(e){var t=e.data;console.log("what is res"+JSON.stringify(t)),v(t.items)})).then((function(){return setTimeout(q,2e3)}))];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),console.log(e),[3,3];case 3:return[2]}}))}))};if((0,i.useEffect)((function(){""!==n&&(E(!1),q().then((function(){return E(!0)})))}),[n]),""===n)return o().createElement(s.Spinner,null);if(!k)return o().createElement(s.Spinner,null);return o().createElement(o().Fragment,null,o().createElement(s.PageSection,{variant:s.PageSectionVariants.light},o().createElement(s.Level,null,o().createElement(s.LevelItem,null,o().createElement(s.Title,{headingLevel:"h1",size:"lg"},l("OpenshiftStreams"))),o().createElement(s.LevelItem,null,o().createElement(s.Switch,{id:"simple-switch",label:l("Mock UI"),labelOff:l("Currently supported UI"),isChecked:y,onChange:function(){P(!y)}})))),o().createElement(s.PageSection,null,h.length>0?o().createElement(w,{kafkaInstanceItems:h,mainToggle:y,onConnectToInstance:t,createStreamsInstance:m,setCreateStreamsInstance:f}):o().createElement(u,{createStreamsInstance:m,setCreateStreamsInstance:f,mainToggle:y}),m&&o().createElement(A,{createStreamsInstance:m,setCreateStreamsInstance:f,mainToggle:y})))}},42603:(e,t,n)=>{"use strict";n.d(t,{V:()=>r});var a=n(15691),r=n.n(a)().createContext({token:void 0})}}]);
//# sourceMappingURL=122.72a31e712267b7f25800.js.map