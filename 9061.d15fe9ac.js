(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[9061],{10141:(e,t,a)=>{"use strict";t.Fg={name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0},t.TI=a(35183).createIcon(t.Fg),t.ZP=t.TI},34046:(e,t,a)=>{"use strict";t.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},t.by=a(35183).createIcon(t.MU),t.ZP=t.by},69061:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ConnectionTab:()=>u,default:()=>_});var n=a(48121),c=a.n(n),o=a(38936),r=a(58788),s=a(76007),l=a(34046),m=a(45024),i=function(e){var t=e.mainToggle,a=e.externalServer,n=e.instance,i=void 0===n?{}:n,d=e.isKafkaPending,p=e.onConnectToRoute,u=e.getConnectToRoutePath,_=e.tokenEndPointUrl,E=(0,o.useTranslation)().t,T=(0,m.QK)().showModal;return c().createElement("div",{className:"mas--details__drawer--tab-content"},c().createElement(r.TextContent,{className:"pf-u-pb-sm"},c().createElement(r.Text,{component:r.TextVariants.small},E("drawer_resource_tab_body_description_1")),c().createElement(r.Text,{component:r.TextVariants.h3,className:"pf-u-mt-lg"},E("bootstrap_server")),c().createElement(r.Text,{component:r.TextVariants.small},E("bootstrap_server_description"))),d?c().createElement(r.Skeleton,{fontSize:"2xl"}):c().createElement(r.ClipboardCopy,{"data-testid":"drawerStreams-copyBootstrapURL",textAriaLabel:E("bootstrap_server")},a),c().createElement(r.TextContent,{className:"pf-u-pb-sm"},c().createElement(r.Text,{component:r.TextVariants.h3,className:"pf-u-mt-xl"},E("serviceAccount.service_accounts_small")),c().createElement(r.Text,{component:r.TextVariants.small},E("serviceAccount.create_service_account_to_generate_credentials")," ",c().createElement(s.Link,{to:function(){return u(i,"service-accounts")},onClick:function(e){e.preventDefault(),p(i,"service-accounts")},"data-testid":"tableStreams-linkKafka"},E("serviceAccount.service_accounts"))," ",E("common.page"),".")),c().createElement(r.Button,{variant:"secondary",onClick:function(){T(m.Ny.CREATE_SERVICE_ACCOUNT)},"data-testid":"drawerStreams-buttonCreateServiceAccount",isInline:!0},E("serviceAccount.create_service_account")),c().createElement(r.TextContent,{className:"pf-u-pb-sm"},c().createElement(r.Text,{component:r.TextVariants.h3,className:"pf-u-mt-xl"},E("common.authentication_method")),c().createElement(r.Text,{component:r.TextVariants.h4,className:"pf-u-mt-md"},E("common.sasl_oauthbearer")," ",c().createElement(r.Label,{color:"green"},E("common.recommended")),c().createElement(r.Popover,{"aria-label":E("common.sasl_oauthbearer"),bodyContent:c().createElement("div",null,E("serviceAccount.sasl_oauthbearer_popover_content"))},c().createElement(r.Button,{variant:r.ButtonVariant.plain,"aria-label":E("more_info_about_sasl_oauthbearer")},c().createElement(l.ZP,null)))),c().createElement(r.Text,{component:r.TextVariants.small},E("serviceAccount.sasl_oauthbearer_description")),c().createElement(r.Text,{component:r.TextVariants.h6,className:"pf-u-mt-md"},E("common.token_endpoint_url")),d?c().createElement(r.Skeleton,{fontSize:"2xl"}):c().createElement(r.ClipboardCopy,null,_)),c().createElement(r.TextContent,{className:"pf-u-pb-sm"},c().createElement(r.Text,{component:r.TextVariants.h4,className:"pf-u-mt-md"},E("common.sasl_plain")),c().createElement(r.Text,{component:r.TextVariants.small},E("serviceAccount.sasl_plain_description"))),t&&c().createElement(c().Fragment,null,c().createElement(r.TextContent,{className:"pf-u-pb-sm pf-u-pt-lg"},c().createElement(r.Text,{component:r.TextVariants.h5},"Producer endpoint and credentials"),c().createElement(r.Text,{component:r.TextVariants.small},E("drawer_resource_tab_body_description_3"))),c().createElement(r.ClipboardCopy,null,"https://:30123")))},d=a(10141),p=function(){var e=(0,o.useTranslation)().t;return c().createElement("div",{className:"mas--details__drawer--tab-content"},c().createElement(r.TextContent,{className:"pf-u-pb-sm"},c().createElement(r.Text,{component:r.TextVariants.h5},e("sample_connection_code")),c().createElement(r.Text,{component:r.TextVariants.small},e("drawer_code_section_tab_body_description_1"),"<",e("brackets"),">.")),c().createElement("div",{className:"pf-c-code-editor pf-m-read-only"},c().createElement("div",{className:"pf-c-code-editor__header"},c().createElement("div",{className:"pf-c-code-editor__controls"},c().createElement(r.Button,{variant:"control","aria-label":"Action"},c().createElement(d.ZP,null))),c().createElement("div",{className:"pf-c-code-editor__tab"},c().createElement("span",{className:"pf-c-code-editor__tab-text"},"Java"))),c().createElement("div",{className:"pf-c-code-editor__main"},c().createElement("div",{className:"pf-c-code-editor__code"},c().createElement("pre",{className:"pf-c-code-editor__code-pre"},"import java.util.Properties;")))),c().createElement(r.TextContent,{className:"pf-u-pb-sm pf-u-pt-lg"},c().createElement(r.Text,{component:r.TextVariants.h5},e("sample_connection_code")),c().createElement(r.Text,{component:r.TextVariants.small},e("drawer_code_section_tab_body_description_1"),"<",e("brackets"),">.")),c().createElement("div",{className:"pf-c-code-editor pf-m-read-only"},c().createElement("div",{className:"pf-c-code-editor__header"},c().createElement("div",{className:"pf-c-code-editor__controls"},c().createElement(r.Button,{variant:"control","aria-label":"Action"},c().createElement(d.ZP,null)))),c().createElement("div",{className:"pf-c-code-editor__main"},c().createElement("div",{className:"pf-c-code-editor__code"},c().createElement("pre",{className:"pf-c-code-editor__code-pre"},"bootstrap.servers=es-1-4-0-ibm-es-proxy-route-bootstrap-es.apps.2019-4-1-demo-icp-mst.fyre.ibm.com:44 sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username=“token")))))},u=function(e){var t=e.onSelect,a=e.externalServer,n=e.instance,s=e.mainToggle,l=e.activeKey,m=e.isKafkaPending,d=e.onConnectToRoute,u=e.getConnectToRoutePath,_=e.tokenEndPointUrl,E=(0,o.useTranslation)().t;return s?c().createElement("div",{className:"mas--details__drawer--tab-content pf-m-secondary"},c().createElement(r.Tabs,{activeKey:l,isSecondary:!0,onSelect:t},c().createElement(r.Tab,{eventKey:0,title:c().createElement(r.TabTitleText,null,E("resources"))},c().createElement(i,{externalServer:a,instance:n,mainToggle:s,isKafkaPending:m,getConnectToRoutePath:u,onConnectToRoute:d,tokenEndPointUrl:_})),c().createElement(r.Tab,{eventKey:1,title:c().createElement(r.TabTitleText,null,E("sample_code"))},c().createElement(p,null)))):c().createElement(i,{externalServer:a,instance:n,mainToggle:s,isKafkaPending:m,getConnectToRoutePath:u,onConnectToRoute:d,tokenEndPointUrl:_})};const _=u}}]);
//# sourceMappingURL=9061.d15fe9ac.js.map