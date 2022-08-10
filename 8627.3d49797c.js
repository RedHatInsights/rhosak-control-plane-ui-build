"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8627],{88601:(e,a,n)=>{n.d(a,{c:()=>v,d:()=>u});var r=n(52212),t=n(8764),i=n(18423),o=n(22178),l=n(9669),s=n.n(l),c=n(93264);const d=(0,o.createCacheAdapter)({debug:null!==localStorage.getItem("log-axios")}),u=()=>{const e=(0,r.useAuth)(),{kas:{apiBasePath:a}}=(0,r.useConfig)();return(0,c.useCallback)((()=>new i.DefaultApi(new i.Configuration({accessToken:e.kas.getToken(),basePath:a}),void 0,s().create({adapter:d,cache:15e3}))),[e.kas,a])},v=()=>{const e=(0,r.useAuth)(),{ams:{apiBasePath:a}}=(0,r.useConfig)();return(0,c.useCallback)((()=>new t.AppServicesApi(new i.Configuration({accessToken:e.ams.getToken(),basePath:a}),void 0,s().create({adapter:d,cache:15e3}))),[a,e.ams])}},94622:(e,a,n)=>{n.d(a,{A:()=>l});var r=n(85893),t=n(93264),i=n(98743),o=n(52212);const l=()=>{const{registerModals:e}=(0,o.useModal)();return e((()=>{const{t:e}=(0,i.useTranslation)(["kasTemporaryFixMe"]);return{[o.ModalType.KasCreateInstance]:{lazyComponent:(0,t.lazy)((()=>Promise.all([n.e(7196),n.e(9669),n.e(9922),n.e(8199),n.e(8423),n.e(2557),n.e(69),n.e(4372)]).then(n.bind(n,74372)))),variant:"medium",title:e("create_a_kafka_instance")},[o.ModalType.KasDeleteInstance]:{lazyComponent:(0,t.lazy)((()=>Promise.all([n.e(7196),n.e(9669),n.e(9922),n.e(8408),n.e(8199),n.e(8423),n.e(8251),n.e(5626),n.e(2557),n.e(524)]).then(n.bind(n,78578)))),variant:"small"},[o.ModalType.KasTransferOwnership]:{lazyComponent:(0,t.lazy)((()=>Promise.all([n.e(9669),n.e(9922),n.e(8408),n.e(8423),n.e(2557),n.e(8512)]).then(n.bind(n,98512)))),variant:"medium",title:e("change_owner")},[o.ModalType.KasCreateServiceAccount]:{lazyComponent:(0,t.lazy)((()=>Promise.all([n.e(7196),n.e(9922),n.e(8408),n.e(8199),n.e(8423),n.e(8251),n.e(5626),n.e(8752)]).then(n.bind(n,45587)))),variant:"medium",title:e("serviceAccount.create_a_service_account")},[o.ModalType.KasDeleteServiceAccount]:{lazyComponent:(0,t.lazy)((()=>Promise.all([n.e(7196),n.e(9922),n.e(8408),n.e(8199),n.e(8423),n.e(8251),n.e(5626),n.e(645)]).then(n.bind(n,88372)))),title:e("serviceAccount.delete_service_account")+"?",variant:"small"},[o.ModalType.KasResetServiceAccountCredentials]:{lazyComponent:(0,t.lazy)((()=>Promise.all([n.e(7196),n.e(9922),n.e(8408),n.e(8199),n.e(8423),n.e(8251),n.e(5626),n.e(4410)]).then(n.bind(n,99240)))),title:`${e("serviceAccount.reset_service_account_credentials")}?`,variant:"medium"}}})()),(0,r.jsx)(r.Fragment,{})}},95075:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});var r=n(9922),t=n(85893),i=n(217),o=n(37810),l=n(95950);const s=e=>{var{children:a}=e,n=(0,r.__rest)(e,["children"]);return(0,t.jsxs)(o.ModalProvider,{children:[(0,t.jsx)(i.o,Object.assign({},n,{children:a})),(0,t.jsx)(l.A,{})]})}},63286:(e,a,n)=>{var r;n.d(a,{Z:()=>r}),function(e){e.DETAILS="details",e.CONNECTION="connection"}(r||(r={}))},46163:(e,a,n)=>{n.d(a,{D:()=>l});var r=n(9922);var t=n(78261),i=n(75381),o=n(88601);const l=()=>{const e=(0,o.d)();return(a,n,o)=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){var r;const l=e();try{const e=(e=>{if(void 0===e.name.value)throw new Error("kafkaRequest.name must not be undefined");if(void 0===e.region.value)throw new Error("kafkaRequest.region must not be undefined");if(void 0===e.multi_az.value)throw new Error("kafkaRequest.multi_az must not be undefined");if(void 0===e.cloud_provider.value)throw new Error("kafkaRequest.cloud_provider must not be undefined");return{name:e.name.value,region:e.region.value,cloud_provider:e.cloud_provider.value}})({cloud_provider:{value:""},multi_az:{value:!0},region:{value:""},name:{value:""}});e.name=a.name,e.cloud_provider=a.provider,e.region=a.region,e.plan=a.plan+"."+a.sizeId,e.billing_model="prepaid"===a.billing?"standard":void 0!==a.billing?"marketplace":null,e.billing_cloud_account_id=a.billing&&"prepaid"!==a.billing?a.billing.subscription:null,yield l.createKafka(!0,e),n()}catch(e){if((0,t.G6)(e)){const{code:n}=(null===(r=null==e?void 0:e.response)||void 0===r?void 0:r.data)||{};switch(a.plan){case"developer":if(n===i.SM.DUPLICATE_INSTANCE_NAME)o("name-taken");else o("developer-unavailable");break;case"standard":switch(n){case i.SM.DUPLICATE_INSTANCE_NAME:o("name-taken");break;case i.SM.INTERNAL_CAPACITY_ERROR:o("region-unavailable");break;case i.SM.INSUFFICIENT_QUOTA:o("insufficient-quota");break;default:console.error("useAvailableProvidersAndDefault","createKafka unknown error",e),o("unknown")}}}else console.error("useAvailableProvidersAndDefault","createKafka unexpected error",e)}}))}}}]);
