(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[1305],{76831:function(e,n,t){e.exports=function(e){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),a={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return t.default.locale(a,null,!0),a}(t(86369))},94622:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var a=t(75418),r=t.n(a),l=t(11593),o=t(46332),i=function(){var e,n;return(0,(0,o.useModal)().registerModals)((n=(0,l.useTranslation)().t,(e={})[o.ModalType.KasCreateInstance]={lazyComponent:r().lazy((function(){return Promise.all([t.e(4669),t.e(2633),t.e(542),t.e(69),t.e(4360)]).then(t.bind(t,54360))})),variant:"medium",title:n("create_a_kafka_instance")},e[o.ModalType.KasDeleteInstance]={lazyComponent:r().lazy((function(){return Promise.all([t.e(6814),t.e(4669),t.e(2633),t.e(542),t.e(8068),t.e(7577),t.e(8615),t.e(9620),t.e(1956)]).then(t.bind(t,78578))})),variant:"small"},e[o.ModalType.KasTransferOwnership]={lazyComponent:r().lazy((function(){return Promise.all([t.e(4669),t.e(542),t.e(2785)]).then(t.bind(t,42785))})),variant:"small"},e[o.ModalType.KasCreateServiceAccount]={lazyComponent:r().lazy((function(){return Promise.all([t.e(6814),t.e(4669),t.e(2633),t.e(542),t.e(8068),t.e(7577),t.e(8615),t.e(9620),t.e(5362)]).then(t.bind(t,45587))})),variant:"medium",title:n("serviceAccount.create_a_service_account")},e[o.ModalType.KasDeleteServiceAccount]={lazyComponent:r().lazy((function(){return Promise.all([t.e(6814),t.e(4669),t.e(2633),t.e(542),t.e(8068),t.e(7577),t.e(8615),t.e(9620),t.e(4227)]).then(t.bind(t,88372))})),title:n("serviceAccount.delete_service_account")+"?",variant:"small"},e[o.ModalType.KasResetServiceAccountCredentials]={lazyComponent:r().lazy((function(){return Promise.all([t.e(6814),t.e(4669),t.e(2633),t.e(542),t.e(8068),t.e(7577),t.e(8615),t.e(9620),t.e(1645)]).then(t.bind(t,99240))})),title:n("serviceAccount.reset_service_account_credentials")+"?",variant:"medium"},e)),r().createElement(r().Fragment,null)}},51305:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var a=t(75418),r=t.n(a),l=t(11593),o=t(44498),i=t(78800),s=t(94622);const c=function(e){var n=e.children;return r().createElement(l.I18nextProvider,{i18n:(0,i.Y)()},r().createElement(o.ModalProvider,null,n,r().createElement(s.A,null)))}},78800:(e,n,t)=>{"use strict";t.d(n,{Y:()=>f});var a=t(93991),r=t.n(a),l=t(11593),o=t(16486),i=t.n(o),s=t(73337),c=t.n(s),u=t(32578),d=t.n(u),m=t(86369),_=t.n(m),f=(t(76831),function(){var e="true"===new URLSearchParams(window.location.search).get("pseudolocalization"),n=r().createInstance();return n.use(new(d())({enabled:e,wrapped:!0})).use(c()).use(i()).use(l.initReactI18next).init({backend:{loadPath:t.p+"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,n,t,a){return a=a||{},"number"===n?new Intl.NumberFormat(t).format(e):e instanceof Date?"fromNow"===n?_()(e).fromNow(!0===a.omitSuffix):_()(e).format(n):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0},(function(){_().locale(r().language)})),n.on("languageChanged",(function(e){_().locale(e)})),n})}}]);
//# sourceMappingURL=1305.afa10ab8.js.map