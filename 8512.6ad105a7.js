"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[8512],{88601:(e,n,t)=>{t.d(n,{c:()=>_,d:()=>u});var a=t(97644),s=t(44342),r=t(5171),i=t(31683),o=t(9669),l=t.n(o),c=t(93264);const d=(0,i.createCacheAdapter)({debug:null!==localStorage.getItem("log-axios")}),u=()=>{const e=(0,a.useAuth)(),{kas:{apiBasePath:n}}=(0,a.useConfig)();return(0,c.useCallback)((()=>new r.DefaultApi(new r.Configuration({accessToken:e.kas.getToken(),basePath:n}),void 0,l().create({adapter:d,cache:15e3}))),[e.kas,n])},_=()=>{const e=(0,a.useAuth)(),{ams:{apiBasePath:n}}=(0,a.useConfig)();return(0,c.useCallback)((()=>new s.AppServicesApi(new r.Configuration({accessToken:e.ams.getToken(),basePath:n}),void 0,l().create({adapter:d,cache:15e3}))),[n,e.ams])}},13449:(e,n,t)=>{t.d(n,{J:()=>s,S:()=>r});var a=t(93264);const s=(0,a.createContext)(null),r=()=>(0,a.useContext)(s)},98512:(e,n,t)=>{t.r(n),t.d(n,{TransferOwnership:()=>m,default:()=>g});var a=t(42695),s=t(85893),r=t(88601),i=t(78261),o=t(54653),l=t(97644),c=t(93264),d=t(15847),u=t(13449);const _=()=>{const{getAllUserAccounts:e}=(0,u.S)()||{getAllUserAccounts:()=>[]},n=e&&e();return null==n?void 0:n.map((e=>{const{id:n,displayName:t}=e;return{id:n,displayName:t}}))},p=({selection:e,setSelection:n,allUsers:t})=>{const{t:a}=(0,d.useTranslation)(["kasTemporaryFixMe"]),[r,i]=(0,c.useState)(!1),l=(t||[]).map((e=>{const{id:n,displayName:t}=e;return(0,s.jsx)(o.SelectOption,Object.assign({value:n,description:t},{children:n}),n)})),u=()=>{n(void 0),i(!1)};return(0,s.jsx)(o.Select,Object.assign({id:"manage-permissions-owner-select",variant:o.SelectVariant.typeahead,onToggle:e=>{i(e)},isOpen:r,placeholderText:a("select_user_account"),createText:a("common.use"),menuAppendTo:"parent",maxHeight:400,onSelect:(e,t,a)=>{a&&u(),n(t.toString()),i(!1)},selections:e,isCreatable:!0,onFilter:(e,n)=>((e,n)=>{if(!e)return n;const t=new RegExp(e,"i");return null==n?void 0:n.filter((e=>t.test(e.props.value)||t.test(e.props.description)))})(n,l)},{children:l}))},m=({kafka:e,onClose:n,hideModal:t,refreshKafkas:u,variant:m,title:g})=>{const{t:A}=(0,d.useTranslation)(["kasTemporaryFixMe"]),v=(0,r.d)(),{addAlert:h}=(0,l.useAlert)()||{addAlert:()=>""},[E,O]=(0,c.useState)(),[w,C]=(0,c.useState)(),[R,S]=(0,c.useState)(),T=()=>{t(),n&&n()};return(0,s.jsx)(o.Modal,Object.assign({id:"manage-permissions-modal",title:g,isOpen:!0,onClose:T,variant:m,position:"top",actions:[(0,s.jsx)(o.Button,Object.assign({id:"confirm__button",variant:"primary",onClick:()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){var n;if((null==E?void 0:E.trim())&&(null==e?void 0:e.id)){C(!0);const t={owner:E},a=v();try{yield a.updateKafkaById(e.id,t).then((()=>{u&&u(),h({title:A("owner_change_sucess_title"),variant:o.AlertVariant.success,description:A("owner_change_sucess_message",{newOwner:E,name:null==e?void 0:e.name})}),C(!1),T()}))}catch(e){let t;(0,i.G6)(e)&&(t=null===(n=e.response)||void 0===n?void 0:n.data.code),S(t),C(!1)}}})),isLoading:w,isDisabled:!(null==E?void 0:E.trim())||w},{children:A("common.change_owner")}),"changeowner"),(0,s.jsx)(o.Button,Object.assign({id:"cancel__button",variant:"link",onClick:T},{children:A("cancel")}),"cancel")]},{children:(0,s.jsxs)(o.Form,Object.assign({onSubmit:e=>null==e?void 0:e.preventDefault()},{children:[(()=>{let n,t;return R===i.SM.OWNER_DOES_NOT_EXIST?(n=A("new_owner_does_not_exist_title"),t=A("new_owner_does_not_exist_message",{newOwner:E})):R&&(n=A("can_not_change_owner_title"),t=A("onwer_transfer_failed_message",{name:null==e?void 0:e.name})),n&&t?(0,s.jsx)(o.Alert,Object.assign({variant:o.AlertVariant.danger,"aria-live":"polite",isInline:!0,title:n},{children:t})):(0,s.jsx)(s.Fragment,{})})(),(0,s.jsx)(o.FormGroup,Object.assign({fieldId:"Current-owner-name",label:A("current_owner_name")},{children:null==e?void 0:e.owner})),(0,s.jsx)(o.FormGroup,Object.assign({fieldId:"New-owner-name",label:A("new_owner_name")},{children:(0,s.jsx)(p,{selection:E,setSelection:O,allUsers:_()})}))]}))}))},g=m},78261:(e,n,t)=>{t.d(n,{G6:()=>a.isServiceApiError,SM:()=>s});var a=t(5171);const s={UNAUTHORIZED_USER:a.APIErrorCodes.ERROR_4,DUPLICATE_INSTANCE_NAME:a.APIErrorCodes.ERROR_36,INTERNAL_CAPACITY_ERROR:a.APIErrorCodes.ERROR_24,INSUFFICIENT_QUOTA:a.APIErrorCodes.ERROR_120,TRIAL_USED:a.APIErrorCodes.ERROR_5,FAILED_TO_CHECK_QUOTA:a.APIErrorCodes.ERROR_121,OWNER_DOES_NOT_EXIST:a.APIErrorCodes.ERROR_21}}}]);
//# sourceMappingURL=8512.6ad105a7.js.map