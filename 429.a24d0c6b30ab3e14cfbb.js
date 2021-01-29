(self.webpackChunkmk_ui_frontend=self.webpackChunkmk_ui_frontend||[]).push([[429,727],{73727:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MemoryRouter:()=>n.VA,Prompt:()=>n.NL,Redirect:()=>n.l_,Route:()=>n.AW,Router:()=>n.F0,StaticRouter:()=>n.gx,Switch:()=>n.rs,generatePath:()=>n.Gn,matchPath:()=>n.LX,useHistory:()=>n.k6,useLocation:()=>n.TH,useParams:()=>n.UO,useRouteMatch:()=>n.$B,withRouter:()=>n.EN,BrowserRouter:()=>f,HashRouter:()=>v,Link:()=>g,NavLink:()=>k});var n=r(5977),a=r(41788),i=r(15691),o=r.n(i),u=r(90071),c=(r(45697),r(22122)),l=r(19756),s=r(2177),f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=(0,u.createBrowserHistory)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return o().createElement(n.F0,{history:this.history,children:this.props.children})},t}(o().Component);var v=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=(0,u.createHashHistory)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return o().createElement(n.F0,{history:this.history,children:this.props.children})},t}(o().Component);var d=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?(0,u.createLocation)(e,null,null,t):e},h=function(e){return e},y=o().forwardRef;void 0===y&&(y=h);var m=y((function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,i=(0,l.Z)(e,["innerRef","navigate","onClick"]),u=i.target,s=(0,c.Z)({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||u&&"_self"!==u||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return s.ref=h!==y&&t||r,o().createElement("a",s)}));var g=y((function(e,t){var r=e.component,a=void 0===r?m:r,i=e.replace,u=e.to,f=e.innerRef,v=(0,l.Z)(e,["component","replace","to","innerRef"]);return o().createElement(n.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var r=e.history,n=p(d(u,e.location),e.location),l=n?r.createHref(n):"",m=(0,c.Z)({},v,{href:l,navigate:function(){var t=d(u,e.location);(i?r.replace:r.push)(t)}});return h!==y?m.ref=t||f:m.innerRef=f,o().createElement(a,m)}))})),R=function(e){return e},E=o().forwardRef;void 0===E&&(E=R);var k=E((function(e,t){var r=e["aria-current"],a=void 0===r?"page":r,i=e.activeClassName,u=void 0===i?"active":i,f=e.activeStyle,v=e.className,h=e.exact,y=e.isActive,m=e.location,k=e.sensitive,A=e.strict,C=e.style,w=e.to,P=e.innerRef,b=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o().createElement(n.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var r=m||e.location,i=p(d(w,r),r),l=i.pathname,_=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),Z=_?(0,n.LX)(r.pathname,{path:_,exact:h,sensitive:k,strict:A}):null,N=!!(y?y(Z,r):Z),L=N?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(v,u):v,S=N?(0,c.Z)({},C,{},f):C,T=(0,c.Z)({"aria-current":N&&a||null,className:L,style:S,to:i},b);return R!==E?T.ref=t||P:T.innerRef=P,o().createElement(g,T)}))}))},35764:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(15691),a=r.n(n),i=r(50117),o=r(42603),u=r(94956),c=r(9995),l=r(73727);r(78800);const s=function(e){var t=e.getUsername,r=e.getToken,n=e.onConnectToInstance,s=e.addAlert,f=e.basePath,v={getToken:r,getUsername:t},d={addAlert:s};return a().createElement(l.BrowserRouter,null,a().createElement(c.G.Provider,{value:{basePath:f}},a().createElement(u.wP.Provider,{value:d},a().createElement(o.V.Provider,{value:v},a().createElement(i.L,{onConnectToInstance:n})))))}},94956:(e,t,r)=>{"use strict";r.d(t,{wP:()=>c,Z7:()=>l,uZ:()=>s});var n=r(70655),a=r(15691),i=r.n(a),o=r(62219),u=r(91995),c=(0,a.createContext)({addAlert:function(){}}),l=function(){return(0,a.useContext)(c)},s=function(e){var t=e.children,r=(0,a.useState)([]),l=r[0],s=r[1],f=(0,a.useState)([]),v=f[0],d=f[1];(0,a.useEffect)((function(){var e=v.map((function(e){return e.key})),t=l.filter((function(t){return!e.includes(t.key)})).map((function(e){var t=setTimeout((function(){return p(e.key)}),8e3);return{key:e.key,timeOut:t}}));return d((0,n.__spreadArrays)(v,t)),function(){return v.forEach((function(e){return clearTimeout(e.timeOut)}))}}),[l]);var p=function(e){s((function(t){return(0,n.__spreadArrays)(t.filter((function(t){return t.key!==e})))})),d((function(t){return(0,n.__spreadArrays)(t.filter((function(t){return t.key===e})))}))};return i().createElement(c.Provider,{value:{addAlert:function(e,t,r){void 0===t&&(t=u.AlertVariant.default),s((0,n.__spreadArrays)(l,[{key:(new Date).getTime(),title:e,variant:t,body:r}]))}}},i().createElement(o.z,{alerts:l,onCloseAlert:p}),t)}},82519:(e,t,r)=>{"use strict";r(15691)},52648:(e,t,r)=>{"use strict";var n;r.d(t,{bv:()=>a,Bh:()=>o,hm:()=>i,Od:()=>n}),function(e){e.READY="ready",e.ACCEPTED="accepted",e.PREPARING="preparing",e.PROVISIONING="provisioning",e.FAILED="failed"}(n||(n={}));var a=[{value:"aws",label:"Amazon Web Services"}],i=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"}],o=[{value:"us-east-1",label:"US East, N. Virginia"}]}}]);
//# sourceMappingURL=429.a24d0c6b30ab3e14cfbb.js.map