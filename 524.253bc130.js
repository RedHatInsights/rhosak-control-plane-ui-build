"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[524],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const s=n(9922),a=s.__importStar(n(93264));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:r=0,width:l,height:c,svgPath:d}){var u;return u=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:o,color:i,title:u,noVerticalAlign:h}=e,p=s.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(u),g=t.getSize(o),f=-.125*Number.parseFloat(g),v=h?null:{verticalAlign:`${f}em`},x=[n,r,l,c].join(" ");return a.createElement("svg",Object.assign({style:v,fill:i,height:g,width:g,viewBox:x,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},p),m&&a.createElement("title",{id:this.id},u),a.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},u}},84564:(e,t,n)=>{t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},5569:(e,t,n)=>{t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},34558:(e,t,n)=>{t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},38296:(e,t,n)=>{function s(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)&&e.length){const n=s(...e);n&&t.push(n)}else if("object"===a)for(const s in e)n.call(e,s)&&e[s]&&t.push(s)})),t.join(" ")}n.d(t,{i:()=>s})},88601:(e,t,n)=>{n.d(t,{c:()=>h,d:()=>u});var s=n(50834),a=n(70353),o=n(81318),i=n(22178),r=n(9669),l=n.n(r),c=n(93264);const d=(0,i.createCacheAdapter)({debug:null!==localStorage.getItem("log-axios")}),u=()=>{const e=(0,s.useAuth)(),{kas:{apiBasePath:t}}=(0,s.useConfig)();return(0,c.useCallback)((()=>new o.DefaultApi(new o.Configuration({accessToken:e.kas.getToken(),basePath:t}),void 0,l().create({adapter:d,cache:15e3}))),[e.kas,t])},h=()=>{const e=(0,s.useAuth)(),{ams:{apiBasePath:t}}=(0,s.useConfig)();return(0,c.useCallback)((()=>new a.AppServicesApi(new o.Configuration({accessToken:e.ams.getToken(),basePath:t}),void 0,l().create({adapter:d,cache:15e3}))),[t,e.ams])}},48090:(e,t,n)=>{n.d(t,{o:()=>l});var s=n(85893),a=n(30645),o=n(28188),i=n(73685),r=n(3433);const l=()=>{const{t:e}=(0,a.useTranslation)(["kasTemporaryFixMe"]);return(0,s.jsx)(o.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,s.jsx)(r.C0,Object.assign({emptyStateProps:{variant:r.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},{children:(0,s.jsx)((function(){const t=(0,i.useHistory)();return(0,s.jsx)(o.Button,Object.assign({onClick:function(){t.push("/")}},{children:e("return_to_home_page")}))}),{})}))}))}},3433:(e,t,n)=>{n.d(t,{uZ:()=>i,pf:()=>d.p,sw:()=>c,D5:()=>v,C0:()=>u.C,jU:()=>u.j,tV:()=>g,yR:()=>f,wu:()=>x.wu,wR:()=>b.w,L5:()=>j.L,bN:()=>x.bN,h0:()=>x.h0});var s=n(85893),a=n(93264),o=n(50834);const i=({children:e})=>{const[t,n]=(0,a.useState)([]),[i,r]=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=i.map((e=>e.key)),n=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,n=setTimeout((()=>l(t)),8e3);return{key:e.id,timeOut:n}}));return r([...i,...n]),()=>i.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,i]);const l=e=>{n((t=>[...t.filter((t=>t.id!==e))])),r((t=>[...t.filter((t=>t.key===e))]))};return(0,s.jsxs)(o.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const s=(new Date).getTime().toString();n([...t,Object.assign(Object.assign({},e),{id:s})])}}},{children:[(0,s.jsx)(c,{alerts:t,onCloseAlert:l}),e]}))};var r=n(9922),l=n(28188);const c=({alerts:e,onCloseAlert:t})=>(0,s.jsx)(l.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:n,variant:a,title:o,description:i,dataTestId:c}=e,d=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,s.jsx)(l.Alert,Object.assign({isLiveRegion:!0,variant:l.AlertVariant[a],variantLabel:"",title:o,actionClose:(0,s.jsx)(l.AlertActionCloseButton,{title:o,onClose:()=>t(n)}),"data-testid":c},d,{children:i}),n)}))}));var d=n(43277),u=n(12973),h=n(73685),p=n(30645);n(4256);class m extends a.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,s.jsx)(l.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,s.jsx)(u.C,Object.assign({emptyStateProps:{variant:u.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,s.jsx)(l.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}const g=(0,h.withRouter)((0,p.withTranslation)()(m)),f=({bullseyeProps:e,spinnerProps:t})=>(0,s.jsx)(l.Bullseye,Object.assign({},e,{children:(0,s.jsx)(l.Spinner,Object.assign({},t))}));n(85853);const v=({onClose:e,isLoading:t=!0,drawerPanelContentProps:n,drawerHeaderProps:a,isExpanded:o,children:i,panelBodyContent:c,onExpand:d,notRequiredDrawerContentBackground:u,"data-ouia-app-id":h,inlineAlertMessage:p})=>{const m=n||{},{widths:g}=m,v=(0,r.__rest)(m,["widths"]),{text:x,title:b}=a||{},j=(0,s.jsx)(l.DrawerPanelContent,Object.assign({widths:g||{default:"width_50"}},v,{children:t?(0,s.jsx)(f,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.DrawerHead,{children:[(0,s.jsxs)(l.TextContent,{children:[(null==x?void 0:x.label)&&(0,s.jsx)(l.Text,Object.assign({component:(null==x?void 0:x.component)||l.TextVariants.small,className:(null==x?void 0:x.className)||"pf-u-mb-0"},{children:null==x?void 0:x.label})),(null==b?void 0:b.value)&&(0,s.jsx)(l.Title,Object.assign({headingLevel:(null==b?void 0:b.headingLevel)||"h2",size:(null==b?void 0:b.size)||l.TitleSizes.xl,className:(null==b?void 0:b.className)||"pf-u-mt-0"},{children:null==b?void 0:b.value}))]}),(0,s.jsx)(l.DrawerActions,{children:(0,s.jsx)(l.DrawerCloseButton,{onClick:e})})]}),(0,s.jsxs)(l.DrawerPanelBody,{children:[p,c]})]})}));return(0,s.jsx)(l.Drawer,Object.assign({isExpanded:o,onExpand:d,"data-ouia-app-id":h,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,s.jsx)(l.DrawerContent,Object.assign({panelContent:j,className:u?"pf-m-no-background":""},{children:(0,s.jsxs)(l.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",i]}))}))}))};var x=n(16846),b=n(69887),j=n(93697);n(8509)},78578:(e,t,n)=>{n.r(t),n.d(t,{DeleteInstanceConnected:()=>p,default:()=>m});var s=n(9922),a=n(85893),o=n(88601),i=n(75381),r=n(28188),l=n(50834),c=n(93264),d=n(30645),u=n(3433);const h=({kafka:e,onClose:t,hideModal:n,onDelete:s,isLoading:o})=>{const{t:r}=(0,d.useTranslation)(["kasTemporaryFixMe"]),l=null==e?void 0:e.name,[h,p]=(0,c.useState)(),m=e=>{p(e)},g=()=>e.status===i.Od.READY&&(null==h?void 0:h.toLowerCase())!==(null==l?void 0:l.toLowerCase()),f=e=>{"Enter"!==e.key||g()||v()},v=()=>{s&&s()},x=()=>{p(""),n(),t&&t()};return e.status===i.Od.READY?(0,a.jsx)(u.pf,{isModalOpen:!0,title:`${r("delete_instance")}?`,confirmButtonProps:{isDisabled:g(),"data-testid":"modalDeleteKafka-buttonDelete",label:r("delete"),onClick:v,isLoading:o},handleModalToggle:x,textProps:{description:r("delete_instance_status_complete",{instanceName:e.name})},selectedItemData:e,textInputProps:{showTextInput:e.status===i.Od.READY,label:r("instance_name_label",{name:l}),value:h,onChange:m,onKeyPress:f,autoFocus:!0}}):e.status===i.Od.ACCEPTED||e.status===i.Od.PROVISIONING||e.status===i.Od.PREPARING?(0,a.jsx)(u.pf,{isModalOpen:!0,title:`${r("delete_instance")}?`,confirmButtonProps:{isDisabled:g(),"data-testid":"modalDeleteKafka-buttonDelete",label:r("delete"),onClick:v,isLoading:o},handleModalToggle:x,textProps:{description:r("delete_instance_status_accepted_or_provisioning",{instanceName:e.name})},selectedItemData:e,textInputProps:{showTextInput:!1,label:r("instance_name_label",{name:l}),value:h,onChange:m,onKeyPress:f,autoFocus:!0}}):(0,a.jsx)(u.pf,{isModalOpen:!0,title:"",confirmButtonProps:{isDisabled:g(),"data-testid":"modalDeleteKafka-buttonDelete",label:r("delete"),onClick:v,isLoading:o},handleModalToggle:x,selectedItemData:e,textInputProps:{showTextInput:e.status===i.Od.READY,label:r("instance_name_label",{name:l}),value:h,onChange:m,onKeyPress:f,autoFocus:!0}})},p=({kafka:e,onDelete:t,hideModal:n})=>{const{addAlert:u}=(0,l.useAlert)()||{},{t:p}=(0,d.useTranslation)(["kasTemporaryFixMe"]),m=(0,o.d)(),[g,f]=(0,c.useState)(!1),v=()=>{n()},x=e=>{var t;let n;(0,i.G6)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.reason),u&&u({title:p("something_went_wrong"),variant:r.AlertVariant.danger,description:n})};return(0,a.jsx)(h,{hideModal:n,onClose:v,kafka:e,onDelete:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){if(e.id)try{f(!0);const n=m();yield n.deleteKafkaById(e.id,!0).then((()=>{f(!1)})),v(),t&&t()}catch(e){f(!1),x(e)}})),isLoading:g})},m=p},82519:(e,t,n)=>{n.d(t,{j:()=>a});var s=n(93264);function a(e){(0,s.useEffect)((()=>{const t=document.title;return document.title=e,()=>{document.title=t}}),[e])}}}]);
//# sourceMappingURL=524.253bc130.js.map