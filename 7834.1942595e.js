"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[7834],{35047:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorCode=t.isServiceApiError=void 0;t.isServiceApiError=e=>{var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};t.getErrorCode=e=>{var t,r;return null===(r=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===r?void 0:r.code}},60653:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.APIErrorCodes=void 0,t.APIErrorCodes={ERROR_4:"KAFKAS-MGMT-4",ERROR_5:"KAFKAS-MGMT-5",ERROR_6:"KAFKAS-MGMT-6",ERROR_7:"KAFKAS-MGMT-7",ERROR_8:"KAFKAS-MGMT-8",ERROR_9:"KAFKAS-MGMT-9",ERROR_10:"KAFKAS-MGMT-10",ERROR_11:"KAFKAS-MGMT-11",ERROR_12:"KAFKAS-MGMT-12",ERROR_15:"KAFKAS-MGMT-15",ERROR_17:"KAFKAS-MGMT-17",ERROR_21:"KAFKAS-MGMT-21",ERROR_23:"KAFKAS-MGMT-23",ERROR_24:"KAFKAS-MGMT-24",ERROR_25:"KAFKAS-MGMT-25",ERROR_30:"KAFKAS-MGMT-30",ERROR_31:"KAFKAS-MGMT-31",ERROR_32:"KAFKAS-MGMT-32",ERROR_33:"KAFKAS-MGMT-33",ERROR_34:"KAFKAS-MGMT-34",ERROR_35:"KAFKAS-MGMT-35",ERROR_36:"KAFKAS-MGMT-36",ERROR_37:"KAFKAS-MGMT-37",ERROR_38:"KAFKAS-MGMT-38",ERROR_39:"KAFKAS-MGMT-39",ERROR_40:"KAFKAS-MGMT-40",ERROR_41:"KAFKAS-MGMT-41",ERROR_103:"KAFKAS-MGMT-103",ERROR_106:"KAFKAS-MGMT-106",ERROR_107:"KAFKAS-MGMT-107",ERROR_108:"KAFKAS-MGMT-108",ERROR_109:"KAFKAS-MGMT-109",ERROR_110:"KAFKAS-MGMT-110",ERROR_111:"KAFKAS-MGMT-111",ERROR_112:"KAFKAS-MGMT-112",ERROR_113:"KAFKAS-MGMT-113",ERROR_115:"KAFKAS-MGMT-115",ERROR_120:"KAFKAS-MGMT-120",ERROR_121:"KAFKAS-MGMT-121",ERROR_429:"KAFKAS-MGMT-429",ERROR_1000:"KAFKAS-MGMT-1000"}},28011:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,s,i)}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||s(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(37475),t),i(r(25952),t),i(r(17765),t)},37475:function(e,t,r){var s=this&&this.__awaiter||function(e,t,r,s){return new(r||(r=Promise))((function(i,a){function n(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultApi=t.DefaultApiFactory=t.DefaultApiFp=t.DefaultApiAxiosParamCreator=void 0;const i=r(41961),a=r(64754),n=r(67056);t.DefaultApiAxiosParamCreator=function(e){return{createKafka:(t,r,i={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("createKafka","async",t),(0,a.assertParamExists)("createKafka","kafkaRequestPayload",r);const s=new URL("/api/kafkas_mgmt/v1/kafkas",a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"POST"},n),i),c={},d={};yield(0,a.setBearerAuthToObject)(c,e),void 0!==t&&(d.async=t),c["Content-Type"]="application/json",(0,a.setSearchParams)(s,d);let u=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),u),i.headers),o.data=(0,a.serializeDataIfNeeded)(r,o,e),{url:(0,a.toPathString)(s),options:o}})),deleteKafkaById:(t,r,i={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("deleteKafkaById","id",t),(0,a.assertParamExists)("deleteKafkaById","async",r);const s="/api/kafkas_mgmt/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(t))),n=new URL(s,a.DUMMY_BASE_URL);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"DELETE"},o),i),d={},u={};yield(0,a.setBearerAuthToObject)(d,e),void 0!==r&&(u.async=r),(0,a.setSearchParams)(n,u);let h=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},d),h),i.headers),{url:(0,a.toPathString)(n),options:c}})),federateMetrics:(t,r={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("federateMetrics","id",t);const s="/api/kafkas_mgmt/v1/kafkas/{id}/metrics/federate".replace("{id}",encodeURIComponent(String(t))),i=new URL(s,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),r),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{});let d=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),d),r.headers),{url:(0,a.toPathString)(i),options:o}})),getCloudProviderRegions:(t,r,i,n,o={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getCloudProviderRegions","id",t);const s="/api/kafkas_mgmt/v1/cloud_providers/{id}/regions".replace("{id}",encodeURIComponent(String(t))),c=new URL(s,a.DUMMY_BASE_URL);let d;e&&(d=e.baseOptions);const u=Object.assign(Object.assign({method:"GET"},d),o),h={},l={};yield(0,a.setBearerAuthToObject)(h,e),void 0!==r&&(l.page=r),void 0!==i&&(l.size=i),void 0!==n&&(l.instance_type=n),(0,a.setSearchParams)(c,l);let f=d&&d.headers?d.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},h),f),o.headers),{url:(0,a.toPathString)(c),options:u}})),getCloudProviders:(t,r,i={})=>s(this,void 0,void 0,(function*(){const s=new URL("/api/kafkas_mgmt/v1/cloud_providers",a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),i),c={},d={};yield(0,a.setBearerAuthToObject)(c,e),void 0!==t&&(d.page=t),void 0!==r&&(d.size=r),(0,a.setSearchParams)(s,d);let u=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),u),i.headers),{url:(0,a.toPathString)(s),options:o}})),getKafkaById:(t,r={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getKafkaById","id",t);const s="/api/kafkas_mgmt/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(t))),i=new URL(s,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),r),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{});let d=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),d),r.headers),{url:(0,a.toPathString)(i),options:o}})),getKafkas:(t,r,i,n,o={})=>s(this,void 0,void 0,(function*(){const s=new URL("/api/kafkas_mgmt/v1/kafkas",a.DUMMY_BASE_URL);let c;e&&(c=e.baseOptions);const d=Object.assign(Object.assign({method:"GET"},c),o),u={},h={};yield(0,a.setBearerAuthToObject)(u,e),void 0!==t&&(h.page=t),void 0!==r&&(h.size=r),void 0!==i&&(h.orderBy=i),void 0!==n&&(h.search=n),(0,a.setSearchParams)(s,h);let l=c&&c.headers?c.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},u),l),o.headers),{url:(0,a.toPathString)(s),options:d}})),getMetricsByInstantQuery:(t,r,i={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getMetricsByInstantQuery","id",t);const s="/api/kafkas_mgmt/v1/kafkas/{id}/metrics/query".replace("{id}",encodeURIComponent(String(t))),n=new URL(s,a.DUMMY_BASE_URL);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"GET"},o),i),d={},u={};yield(0,a.setBearerAuthToObject)(d,e),r&&(u.filters=r),(0,a.setSearchParams)(n,u);let h=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},d),h),i.headers),{url:(0,a.toPathString)(n),options:c}})),getMetricsByRangeQuery:(t,r,i,n,o={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getMetricsByRangeQuery","id",t),(0,a.assertParamExists)("getMetricsByRangeQuery","duration",r),(0,a.assertParamExists)("getMetricsByRangeQuery","interval",i);const s="/api/kafkas_mgmt/v1/kafkas/{id}/metrics/query_range".replace("{id}",encodeURIComponent(String(t))),c=new URL(s,a.DUMMY_BASE_URL);let d;e&&(d=e.baseOptions);const u=Object.assign(Object.assign({method:"GET"},d),o),h={},l={};yield(0,a.setBearerAuthToObject)(h,e),void 0!==r&&(l.duration=r),void 0!==i&&(l.interval=i),n&&(l.filters=n),(0,a.setSearchParams)(c,l);let f=d&&d.headers?d.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},h),f),o.headers),{url:(0,a.toPathString)(c),options:u}})),getVersionMetadata:(t={})=>s(this,void 0,void 0,(function*(){const r=new URL("/api/kafkas_mgmt/v1",a.DUMMY_BASE_URL);let s;e&&(s=e.baseOptions);const i=Object.assign(Object.assign({method:"GET"},s),t);(0,a.setSearchParams)(r,{});let n=s&&s.headers?s.headers:{};return i.headers=Object.assign(Object.assign(Object.assign({},{}),n),t.headers),{url:(0,a.toPathString)(r),options:i}})),updateKafkaById:(t,r,i={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("updateKafkaById","id",t),(0,a.assertParamExists)("updateKafkaById","kafkaUpdateRequest",r);const s="/api/kafkas_mgmt/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(t))),n=new URL(s,a.DUMMY_BASE_URL);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"PATCH"},o),i),d={};yield(0,a.setBearerAuthToObject)(d,e),d["Content-Type"]="application/json",(0,a.setSearchParams)(n,{});let u=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},d),u),i.headers),c.data=(0,a.serializeDataIfNeeded)(r,c,e),{url:(0,a.toPathString)(n),options:c}}))}};t.DefaultApiFp=function(e){const r=(0,t.DefaultApiAxiosParamCreator)(e);return{createKafka(t,o,c){return s(this,void 0,void 0,(function*(){const s=yield r.createKafka(t,o,c);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},deleteKafkaById(t,o,c){return s(this,void 0,void 0,(function*(){const s=yield r.deleteKafkaById(t,o,c);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},federateMetrics(t,o){return s(this,void 0,void 0,(function*(){const s=yield r.federateMetrics(t,o);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getCloudProviderRegions(t,o,c,d,u){return s(this,void 0,void 0,(function*(){const s=yield r.getCloudProviderRegions(t,o,c,d,u);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getCloudProviders(t,o,c){return s(this,void 0,void 0,(function*(){const s=yield r.getCloudProviders(t,o,c);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getKafkaById(t,o){return s(this,void 0,void 0,(function*(){const s=yield r.getKafkaById(t,o);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getKafkas(t,o,c,d,u){return s(this,void 0,void 0,(function*(){const s=yield r.getKafkas(t,o,c,d,u);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getMetricsByInstantQuery(t,o,c){return s(this,void 0,void 0,(function*(){const s=yield r.getMetricsByInstantQuery(t,o,c);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getMetricsByRangeQuery(t,o,c,d,u){return s(this,void 0,void 0,(function*(){const s=yield r.getMetricsByRangeQuery(t,o,c,d,u);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getVersionMetadata(t){return s(this,void 0,void 0,(function*(){const s=yield r.getVersionMetadata(t);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},updateKafkaById(t,o,c){return s(this,void 0,void 0,(function*(){const s=yield r.updateKafkaById(t,o,c);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))}}};t.DefaultApiFactory=function(e,r,s){const i=(0,t.DefaultApiFp)(e);return{createKafka:(e,t,a)=>i.createKafka(e,t,a).then((e=>e(s,r))),deleteKafkaById:(e,t,a)=>i.deleteKafkaById(e,t,a).then((e=>e(s,r))),federateMetrics:(e,t)=>i.federateMetrics(e,t).then((e=>e(s,r))),getCloudProviderRegions:(e,t,a,n,o)=>i.getCloudProviderRegions(e,t,a,n,o).then((e=>e(s,r))),getCloudProviders:(e,t,a)=>i.getCloudProviders(e,t,a).then((e=>e(s,r))),getKafkaById:(e,t)=>i.getKafkaById(e,t).then((e=>e(s,r))),getKafkas:(e,t,a,n,o)=>i.getKafkas(e,t,a,n,o).then((e=>e(s,r))),getMetricsByInstantQuery:(e,t,a)=>i.getMetricsByInstantQuery(e,t,a).then((e=>e(s,r))),getMetricsByRangeQuery:(e,t,a,n,o)=>i.getMetricsByRangeQuery(e,t,a,n,o).then((e=>e(s,r))),getVersionMetadata:e=>i.getVersionMetadata(e).then((e=>e(s,r))),updateKafkaById:(e,t,a)=>i.updateKafkaById(e,t,a).then((e=>e(s,r)))}};class o extends n.BaseAPI{createKafka(e,r,s){return(0,t.DefaultApiFp)(this.configuration).createKafka(e,r,s).then((e=>e(this.axios,this.basePath)))}deleteKafkaById(e,r,s){return(0,t.DefaultApiFp)(this.configuration).deleteKafkaById(e,r,s).then((e=>e(this.axios,this.basePath)))}federateMetrics(e,r){return(0,t.DefaultApiFp)(this.configuration).federateMetrics(e,r).then((e=>e(this.axios,this.basePath)))}getCloudProviderRegions(e,r,s,i,a){return(0,t.DefaultApiFp)(this.configuration).getCloudProviderRegions(e,r,s,i,a).then((e=>e(this.axios,this.basePath)))}getCloudProviders(e,r,s){return(0,t.DefaultApiFp)(this.configuration).getCloudProviders(e,r,s).then((e=>e(this.axios,this.basePath)))}getKafkaById(e,r){return(0,t.DefaultApiFp)(this.configuration).getKafkaById(e,r).then((e=>e(this.axios,this.basePath)))}getKafkas(e,r,s,i,a){return(0,t.DefaultApiFp)(this.configuration).getKafkas(e,r,s,i,a).then((e=>e(this.axios,this.basePath)))}getMetricsByInstantQuery(e,r,s){return(0,t.DefaultApiFp)(this.configuration).getMetricsByInstantQuery(e,r,s).then((e=>e(this.axios,this.basePath)))}getMetricsByRangeQuery(e,r,s,i,a){return(0,t.DefaultApiFp)(this.configuration).getMetricsByRangeQuery(e,r,s,i,a).then((e=>e(this.axios,this.basePath)))}getVersionMetadata(e){return(0,t.DefaultApiFp)(this.configuration).getVersionMetadata(e).then((e=>e(this.axios,this.basePath)))}updateKafkaById(e,r,s){return(0,t.DefaultApiFp)(this.configuration).updateKafkaById(e,r,s).then((e=>e(this.axios,this.basePath)))}}t.DefaultApi=o},25952:function(e,t,r){var s=this&&this.__awaiter||function(e,t,r,s){return new(r||(r=Promise))((function(i,a){function n(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorsApi=t.ErrorsApiFactory=t.ErrorsApiFp=t.ErrorsApiAxiosParamCreator=void 0;const i=r(41961),a=r(64754),n=r(67056);t.ErrorsApiAxiosParamCreator=function(e){return{getErrorById:(t,r={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getErrorById","id",t);const s="/api/kafkas_mgmt/v1/errors/{id}".replace("{id}",encodeURIComponent(String(t))),i=new URL(s,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),r);(0,a.setSearchParams)(i,{});let c=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},{}),c),r.headers),{url:(0,a.toPathString)(i),options:o}})),getErrors:(t={})=>s(this,void 0,void 0,(function*(){const r=new URL("/api/kafkas_mgmt/v1/errors",a.DUMMY_BASE_URL);let s;e&&(s=e.baseOptions);const i=Object.assign(Object.assign({method:"GET"},s),t);(0,a.setSearchParams)(r,{});let n=s&&s.headers?s.headers:{};return i.headers=Object.assign(Object.assign(Object.assign({},{}),n),t.headers),{url:(0,a.toPathString)(r),options:i}}))}};t.ErrorsApiFp=function(e){const r=(0,t.ErrorsApiAxiosParamCreator)(e);return{getErrorById(t,o){return s(this,void 0,void 0,(function*(){const s=yield r.getErrorById(t,o);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getErrors(t){return s(this,void 0,void 0,(function*(){const s=yield r.getErrors(t);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))}}};t.ErrorsApiFactory=function(e,r,s){const i=(0,t.ErrorsApiFp)(e);return{getErrorById:(e,t)=>i.getErrorById(e,t).then((e=>e(s,r))),getErrors:e=>i.getErrors(e).then((e=>e(s,r)))}};class o extends n.BaseAPI{getErrorById(e,r){return(0,t.ErrorsApiFp)(this.configuration).getErrorById(e,r).then((e=>e(this.axios,this.basePath)))}getErrors(e){return(0,t.ErrorsApiFp)(this.configuration).getErrors(e).then((e=>e(this.axios,this.basePath)))}}t.ErrorsApi=o},17765:function(e,t,r){var s=this&&this.__awaiter||function(e,t,r,s){return new(r||(r=Promise))((function(i,a){function n(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SecurityApi=t.SecurityApiFactory=t.SecurityApiFp=t.SecurityApiAxiosParamCreator=void 0;const i=r(41961),a=r(64754),n=r(67056);t.SecurityApiAxiosParamCreator=function(e){return{createServiceAccount:(t,r={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("createServiceAccount","serviceAccountRequest",t);const s=new URL("/api/kafkas_mgmt/v1/service_accounts",a.DUMMY_BASE_URL);let i;e&&(i=e.baseOptions);const n=Object.assign(Object.assign({method:"POST"},i),r),o={};yield(0,a.setBearerAuthToObject)(o,e),o["Content-Type"]="application/json",(0,a.setSearchParams)(s,{});let c=i&&i.headers?i.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},o),c),r.headers),n.data=(0,a.serializeDataIfNeeded)(t,n,e),{url:(0,a.toPathString)(s),options:n}})),deleteServiceAccountById:(t,r={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("deleteServiceAccountById","id",t);const s="/api/kafkas_mgmt/v1/service_accounts/{id}".replace("{id}",encodeURIComponent(String(t))),i=new URL(s,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"DELETE"},n),r),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{});let d=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),d),r.headers),{url:(0,a.toPathString)(i),options:o}})),getServiceAccountById:(t,r={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getServiceAccountById","id",t);const s="/api/kafkas_mgmt/v1/service_accounts/{id}".replace("{id}",encodeURIComponent(String(t))),i=new URL(s,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),r),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{});let d=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),d),r.headers),{url:(0,a.toPathString)(i),options:o}})),getServiceAccounts:(t,r={})=>s(this,void 0,void 0,(function*(){const s=new URL("/api/kafkas_mgmt/v1/service_accounts",a.DUMMY_BASE_URL);let i;e&&(i=e.baseOptions);const n=Object.assign(Object.assign({method:"GET"},i),r),o={},c={};yield(0,a.setBearerAuthToObject)(o,e),void 0!==t&&(c.client_id=t),(0,a.setSearchParams)(s,c);let d=i&&i.headers?i.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},o),d),r.headers),{url:(0,a.toPathString)(s),options:n}})),getSsoProviders:(t={})=>s(this,void 0,void 0,(function*(){const r=new URL("/api/kafkas_mgmt/v1/sso_providers",a.DUMMY_BASE_URL);let s;e&&(s=e.baseOptions);const i=Object.assign(Object.assign({method:"GET"},s),t),n={};yield(0,a.setBearerAuthToObject)(n,e),(0,a.setSearchParams)(r,{});let o=s&&s.headers?s.headers:{};return i.headers=Object.assign(Object.assign(Object.assign({},n),o),t.headers),{url:(0,a.toPathString)(r),options:i}})),resetServiceAccountCreds:(t,r={})=>s(this,void 0,void 0,(function*(){(0,a.assertParamExists)("resetServiceAccountCreds","id",t);const s="/api/kafkas_mgmt/v1/service_accounts/{id}/reset_credentials".replace("{id}",encodeURIComponent(String(t))),i=new URL(s,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"POST"},n),r),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{});let d=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),d),r.headers),{url:(0,a.toPathString)(i),options:o}}))}};t.SecurityApiFp=function(e){const r=(0,t.SecurityApiAxiosParamCreator)(e);return{createServiceAccount(t,o){return s(this,void 0,void 0,(function*(){const s=yield r.createServiceAccount(t,o);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},deleteServiceAccountById(t,o){return s(this,void 0,void 0,(function*(){const s=yield r.deleteServiceAccountById(t,o);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getServiceAccountById(t,o){return s(this,void 0,void 0,(function*(){const s=yield r.getServiceAccountById(t,o);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getServiceAccounts(t,o){return s(this,void 0,void 0,(function*(){const s=yield r.getServiceAccounts(t,o);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},getSsoProviders(t){return s(this,void 0,void 0,(function*(){const s=yield r.getSsoProviders(t);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))},resetServiceAccountCreds(t,o){return s(this,void 0,void 0,(function*(){const s=yield r.resetServiceAccountCreds(t,o);return(0,a.createRequestFunction)(s,i.default,n.BASE_PATH,e)}))}}};t.SecurityApiFactory=function(e,r,s){const i=(0,t.SecurityApiFp)(e);return{createServiceAccount:(e,t)=>i.createServiceAccount(e,t).then((e=>e(s,r))),deleteServiceAccountById:(e,t)=>i.deleteServiceAccountById(e,t).then((e=>e(s,r))),getServiceAccountById:(e,t)=>i.getServiceAccountById(e,t).then((e=>e(s,r))),getServiceAccounts:(e,t)=>i.getServiceAccounts(e,t).then((e=>e(s,r))),getSsoProviders:e=>i.getSsoProviders(e).then((e=>e(s,r))),resetServiceAccountCreds:(e,t)=>i.resetServiceAccountCreds(e,t).then((e=>e(s,r)))}};class o extends n.BaseAPI{createServiceAccount(e,r){return(0,t.SecurityApiFp)(this.configuration).createServiceAccount(e,r).then((e=>e(this.axios,this.basePath)))}deleteServiceAccountById(e,r){return(0,t.SecurityApiFp)(this.configuration).deleteServiceAccountById(e,r).then((e=>e(this.axios,this.basePath)))}getServiceAccountById(e,r){return(0,t.SecurityApiFp)(this.configuration).getServiceAccountById(e,r).then((e=>e(this.axios,this.basePath)))}getServiceAccounts(e,r){return(0,t.SecurityApiFp)(this.configuration).getServiceAccounts(e,r).then((e=>e(this.axios,this.basePath)))}getSsoProviders(e){return(0,t.SecurityApiFp)(this.configuration).getSsoProviders(e).then((e=>e(this.axios,this.basePath)))}resetServiceAccountCreds(e,r){return(0,t.SecurityApiFp)(this.configuration).resetServiceAccountCreds(e,r).then((e=>e(this.axios,this.basePath)))}}t.SecurityApi=o},67056:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RequiredError=t.BaseAPI=t.COLLECTION_FORMATS=t.BASE_PATH=void 0;const s=r(41961);t.BASE_PATH="https://api.openshift.com".replace(/\/+$/,""),t.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"\t",pipes:"|"};t.BaseAPI=class{constructor(e,r=t.BASE_PATH,i=s.default){this.basePath=r,this.axios=i,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)}};class i extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}}t.RequiredError=i},64754:function(e,t,r){var s=this&&this.__awaiter||function(e,t,r,s){return new(r||(r=Promise))((function(i,a){function n(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.createRequestFunction=t.toPathString=t.serializeDataIfNeeded=t.setSearchParams=t.setOAuthToObject=t.setBearerAuthToObject=t.setBasicAuthToObject=t.setApiKeyToObject=t.assertParamExists=t.DUMMY_BASE_URL=void 0;const i=r(67056);t.DUMMY_BASE_URL="https://example.com";t.assertParamExists=function(e,t,r){if(null==r)throw new i.RequiredError(t,`Required parameter ${t} was null or undefined when calling ${e}.`)};t.setApiKeyToObject=function(e,t,r){return s(this,void 0,void 0,(function*(){if(r&&r.apiKey){const s="function"==typeof r.apiKey?yield r.apiKey(t):yield r.apiKey;e[t]=s}}))};t.setBasicAuthToObject=function(e,t){t&&(t.username||t.password)&&(e.auth={username:t.username,password:t.password})};t.setBearerAuthToObject=function(e,t){return s(this,void 0,void 0,(function*(){if(t&&t.accessToken){const r="function"==typeof t.accessToken?yield t.accessToken():yield t.accessToken;e.Authorization="Bearer "+r}}))};t.setOAuthToObject=function(e,t,r,i){return s(this,void 0,void 0,(function*(){if(i&&i.accessToken){const s="function"==typeof i.accessToken?yield i.accessToken(t,r):yield i.accessToken;e.Authorization="Bearer "+s}}))};t.setSearchParams=function(e,...t){const r=new URLSearchParams(e.search);for(const e of t)for(const t in e)if(Array.isArray(e[t])){r.delete(t);for(const s of e[t])r.append(t,s)}else r.set(t,e[t]);e.search=r.toString()};t.serializeDataIfNeeded=function(e,t,r){const s="string"!=typeof e;return(s&&r&&r.isJsonMime?r.isJsonMime(t.headers["Content-Type"]):s)?JSON.stringify(void 0!==e?e:{}):e||""};t.toPathString=function(e){return e.pathname+e.search+e.hash};t.createRequestFunction=function(e,t,r,s){return(i=t,a=r)=>{const n=Object.assign(Object.assign({},e.options),{url:((null==s?void 0:s.basePath)||a)+e.url});return i.request(n)}}},97899:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=void 0;t.Configuration=class{constructor(e={}){this.apiKey=e.apiKey,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor}isJsonMime(e){const t=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==e&&(t.test(e)||"application/json-patch+json"===e.toLowerCase())}}},33438:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,s,i)}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||s(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(28011),t),i(r(97899),t),i(r(65306),t)},81557:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2971:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},52095:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},51430:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},53512:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},62879:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},90961:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},25137:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},18949:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},65306:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,s,i)}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||s(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(52095),t),i(r(2971),t),i(r(81557),t),i(r(62879),t),i(r(53512),t),i(r(51430),t),i(r(90961),t),i(r(18949),t),i(r(25137),t),i(r(84881),t),i(r(61089),t),i(r(26791),t),i(r(73758),t),i(r(32278),t),i(r(80199),t),i(r(77432),t),i(r(69996),t),i(r(3428),t),i(r(98196),t),i(r(75503),t),i(r(3623),t),i(r(48430),t),i(r(59246),t),i(r(32292),t),i(r(40367),t),i(r(87591),t),i(r(33125),t),i(r(86171),t),i(r(69983),t),i(r(40411),t),i(r(1766),t),i(r(20494),t),i(r(21965),t),i(r(86397),t),i(r(38444),t),i(r(31066),t),i(r(40924),t)},84881:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},26791:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},32278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},73758:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},80199:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},61089:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},77432:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},69996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},98196:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3428:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3623:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},75503:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},48430:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},59246:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},32292:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},40367:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},33125:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},69983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},40411:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},86171:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},20494:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},87591:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},86397:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},21965:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},38444:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},40924:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},31066:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},77834:function(e,t,r){var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,s,i)}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||s(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(33438),t),i(r(60653),t),i(r(35047),t)}}]);
//# sourceMappingURL=7834.1942595e.js.map