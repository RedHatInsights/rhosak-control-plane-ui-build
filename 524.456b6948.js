"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[524],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const s=n(9922),a=s.__importStar(n(93264));var i;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(i=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case i.sm:return"1em";case i.md:return"1.5em";case i.lg:return"2em";case i.xl:return"3em";default:return"1em"}};let o=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:l=0,width:r,height:c,svgPath:d}){var u;return u=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:i,color:o,title:u,noVerticalAlign:h}=e,p=s.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(u),g=t.getSize(i),f=-.125*Number.parseFloat(g),v=h?null:{verticalAlign:`${f}em`},x=[n,l,r,c].join(" ");return a.createElement("svg",Object.assign({style:v,fill:o,height:g,width:g,viewBox:x,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},p),m&&a.createElement("title",{id:this.id},u),a.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:i.sm,noVerticalAlign:!1},u}},84564:(e,t,n)=>{t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},5569:(e,t,n)=>{t.Qo={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},t.mB=n(35183).createIcon(t.Qo),t.ZP=t.mB},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},34558:(e,t,n)=>{t.Eu={name:"SpaceShuttleIcon",height:512,width:640,svgPath:"M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z",yOffset:0,xOffset:0},t.ae=n(35183).createIcon(t.Eu),t.ZP=t.ae},38296:(e,t,n)=>{function s(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)&&e.length){const n=s(...e);n&&t.push(n)}else if("object"===a)for(const s in e)n.call(e,s)&&e[s]&&t.push(s)})),t.join(" ")}n.d(t,{i:()=>s})},48090:(e,t,n)=>{n.d(t,{o:()=>r});var s=n(85893),a=n(53518),i=n(99922),o=n(68199),l=n(3433);const r=()=>{const{t:e}=(0,a.useTranslation)(["kasTemporaryFixMe"]);return(0,s.jsx)(i.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,s.jsx)(l.C0,Object.assign({emptyStateProps:{variant:l.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},{children:(0,s.jsx)((function(){const t=(0,o.useHistory)();return(0,s.jsx)(i.Button,Object.assign({onClick:function(){t.push("/")}},{children:e("return_to_home_page")}))}),{})}))}))}},3433:(e,t,n)=>{n.d(t,{uZ:()=>o,pf:()=>d.p,sw:()=>c,D5:()=>v,C0:()=>u.C,jU:()=>u.j,tV:()=>g,yR:()=>f,wu:()=>x.wu,wR:()=>j.w,L5:()=>b.L,bN:()=>x.bN,h0:()=>x.h0});var s=n(85893),a=n(93264),i=n(5854);const o=({children:e})=>{const[t,n]=(0,a.useState)([]),[o,l]=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=o.map((e=>e.key)),n=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,n=setTimeout((()=>r(t)),8e3);return{key:e.id,timeOut:n}}));return l([...o,...n]),()=>o.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,o]);const r=e=>{n((t=>[...t.filter((t=>t.id!==e))])),l((t=>[...t.filter((t=>t.key===e))]))};return(0,s.jsxs)(i.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const s=(new Date).getTime().toString();n([...t,Object.assign(Object.assign({},e),{id:s})])}}},{children:[(0,s.jsx)(c,{alerts:t,onCloseAlert:r}),e]}))};var l=n(9922),r=n(99922);const c=({alerts:e,onCloseAlert:t})=>(0,s.jsx)(r.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:n,variant:a,title:i,description:o,dataTestId:c}=e,d=(0,l.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,s.jsx)(r.Alert,Object.assign({isLiveRegion:!0,variant:r.AlertVariant[a],variantLabel:"",title:i,actionClose:(0,s.jsx)(r.AlertActionCloseButton,{title:i,onClose:()=>t(n)}),"data-testid":c},d,{children:o}),n)}))}));var d=n(43277),u=n(12973),h=n(68199),p=n(53518);n(4256);class m extends a.Component{constructor(){super(...arguments),this.state={hasError:!1},this.onClickButton=()=>{const{history:e}=this.props;this.setState({hasError:!1}),e&&e.push("/")}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("error:",e,t)}render(){const{t:e}=this.props,{hasError:t}=this.state;return t?(0,s.jsx)(r.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,s.jsx)(u.C,Object.assign({emptyStateProps:{variant:u.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},{children:(0,s.jsx)(r.Button,Object.assign({onClick:this.onClickButton},{children:e("go_to_kafka_instances")}))}))})):this.props.children}}const g=(0,h.withRouter)((0,p.withTranslation)()(m)),f=({bullseyeProps:e,spinnerProps:t})=>(0,s.jsx)(r.Bullseye,Object.assign({},e,{children:(0,s.jsx)(r.Spinner,Object.assign({},t))}));n(85853);const v=({onClose:e,isLoading:t=!0,drawerPanelContentProps:n,drawerHeaderProps:a,isExpanded:i,children:o,panelBodyContent:c,onExpand:d,notRequiredDrawerContentBackground:u,"data-ouia-app-id":h,inlineAlertMessage:p})=>{const m=n||{},{widths:g}=m,v=(0,l.__rest)(m,["widths"]),{text:x,title:j}=a||{},b=(0,s.jsx)(r.DrawerPanelContent,Object.assign({widths:g||{default:"width_50"}},v,{children:t?(0,s.jsx)(f,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.DrawerHead,{children:[(0,s.jsxs)(r.TextContent,{children:[(null==x?void 0:x.label)&&(0,s.jsx)(r.Text,Object.assign({component:(null==x?void 0:x.component)||r.TextVariants.small,className:(null==x?void 0:x.className)||"pf-u-mb-0"},{children:null==x?void 0:x.label})),(null==j?void 0:j.value)&&(0,s.jsx)(r.Title,Object.assign({headingLevel:(null==j?void 0:j.headingLevel)||"h2",size:(null==j?void 0:j.size)||r.TitleSizes.xl,className:(null==j?void 0:j.className)||"pf-u-mt-0"},{children:null==j?void 0:j.value}))]}),(0,s.jsx)(r.DrawerActions,{children:(0,s.jsx)(r.DrawerCloseButton,{onClick:e})})]}),(0,s.jsxs)(r.DrawerPanelBody,{children:[p,c]})]})}));return(0,s.jsx)(r.Drawer,Object.assign({isExpanded:i,onExpand:d,"data-ouia-app-id":h,"data-testid":"mk--instance__drawer",className:"kas-drawer"},{children:(0,s.jsx)(r.DrawerContent,Object.assign({panelContent:b,className:u?"pf-m-no-background":""},{children:(0,s.jsxs)(r.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",o]}))}))}))};var x=n(16846),j=n(69887),b=n(93697);n(8509)},78578:(e,t,n)=>{n.r(t),n.d(t,{DeleteInstanceConnected:()=>p,default:()=>m});var s=n(9922),a=n(85893),i=n(93264),o=n(53518),l=n(99922),r=n(5854),c=n(28929),d=n(3433),u=n(75381);const h=({kafka:e,onClose:t,hideModal:n,onDelete:s,isLoading:l})=>{const{t:r}=(0,o.useTranslation)(["kasTemporaryFixMe"]),c=null==e?void 0:e.name,[h,p]=(0,i.useState)(),m=e=>{p(e)},g=()=>e.status===u.Od.READY&&(null==h?void 0:h.toLowerCase())!==(null==c?void 0:c.toLowerCase()),f=e=>{"Enter"!==e.key||g()||v()},v=()=>{s&&s()},x=()=>{p(""),n(),t&&t()};return e.status===u.Od.READY?(0,a.jsx)(d.pf,{isModalOpen:!0,title:`${r("delete_instance")}?`,confirmButtonProps:{isDisabled:g(),"data-testid":"modalDeleteKafka-buttonDelete",label:r("delete"),onClick:v,isLoading:l},handleModalToggle:x,textProps:{description:r("delete_instance_status_complete",{instanceName:e.name})},selectedItemData:e,textInputProps:{showTextInput:e.status===u.Od.READY,label:r("instance_name_label",{name:c}),value:h,onChange:m,onKeyPress:f,autoFocus:!0}}):e.status===u.Od.ACCEPTED||e.status===u.Od.PROVISIONING||e.status===u.Od.PREPARING?(0,a.jsx)(d.pf,{isModalOpen:!0,title:`${r("delete_instance")}?`,confirmButtonProps:{isDisabled:g(),"data-testid":"modalDeleteKafka-buttonDelete",label:r("delete"),onClick:v,isLoading:l},handleModalToggle:x,textProps:{description:r("delete_instance_status_accepted_or_provisioning",{instanceName:e.name})},selectedItemData:e,textInputProps:{showTextInput:!1,label:r("instance_name_label",{name:c}),value:h,onChange:m,onKeyPress:f,autoFocus:!0}}):(0,a.jsx)(d.pf,{isModalOpen:!0,title:"",confirmButtonProps:{isDisabled:g(),"data-testid":"modalDeleteKafka-buttonDelete",label:r("delete"),onClick:v,isLoading:l},handleModalToggle:x,selectedItemData:e,textInputProps:{showTextInput:e.status===u.Od.READY,label:r("instance_name_label",{name:c}),value:h,onChange:m,onKeyPress:f,autoFocus:!0}})},p=({kafka:e,onDelete:t,hideModal:n})=>{const{addAlert:d}=(0,r.useAlert)()||{},{t:p}=(0,o.useTranslation)(["kasTemporaryFixMe"]),m=(0,r.useAuth)(),{kas:g}=(0,r.useConfig)()||{},{apiBasePath:f}=g||{},[v,x]=(0,i.useState)(!1),j=()=>{n()},b=e=>{var t;let n;(0,u.G6)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.reason),d&&d({title:p("something_went_wrong"),variant:l.AlertVariant.danger,description:n})};return(0,a.jsx)(h,{hideModal:n,onClose:j,kafka:e,onDelete:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==m?void 0:m.kas.getToken();if(n&&e.id)try{x(!0);const s=new c.DefaultApi(new c.Configuration({accessToken:n,basePath:f}));yield s.deleteKafkaById(e.id,!0).then((()=>{x(!1)})),j(),t&&t()}catch(e){x(!1),b(e)}})),isLoading:v})},m=p},82519:(e,t,n)=>{n.d(t,{j:()=>a});var s=n(93264);function a(e){(0,s.useEffect)((()=>{const t=document.title;return document.title=e,()=>{document.title=t}}),[e])}}}]);
//# sourceMappingURL=524.456b6948.js.map