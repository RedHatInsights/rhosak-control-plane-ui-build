(self.webpackChunkmk_ui_frontend=self.webpackChunkmk_ui_frontend||[]).push([[873],{3873:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>a});var n={a:"α",b:"ḅ",c:"ͼ",d:"ḍ",e:"ḛ",f:"ϝ",g:"ḡ",h:"ḥ",i:"ḭ",j:"ĵ",k:"ḳ",l:"ḽ",m:"ṃ",n:"ṇ",o:"ṓ",p:"ṗ",q:"ʠ",r:"ṛ",s:"ṡ",t:"ţ",u:"ṵ",v:"ṽ",w:"ẁ",x:"ẋ",y:"ẏ",z:"ẓ",A:"À",B:"β",C:"Ḉ",D:"Ḍ",E:"Ḛ",F:"Ḟ",G:"Ḡ",H:"Ḥ",I:"Ḭ",J:"Ĵ",K:"Ḱ",L:"Ḻ",M:"Ṁ",N:"Ṅ",O:"Ṏ",P:"Ṕ",Q:"Ǫ",R:"Ṛ",S:"Ṣ",T:"Ṫ",U:"Ṳ",V:"Ṿ",W:"Ŵ",X:"Ẋ",Y:"Ŷ",Z:"Ż"},r=["a","e","i","o","u","y","A","E","I","O","U","Y"],i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.languageToPseudo,i=void 0===o?"en":o,a=t.letterMultiplier,p=void 0===a?2:a,u=t.repeatedLetters,l=void 0===u?r:u,d=t.uglifedLetterObject,c=void 0===d?n:d,f=t.wrapped,h=void 0!==f&&f,g=t.enabled,v=void 0===g||g;s(this,e),this.name="pseudo",this.type="postProcessor",this.options={languageToPseudo:i,letterMultiplier:p,wrapped:h,repeatedLetters:l,letters:c,enabled:v}}return e.prototype.configurePseudo=function(e){this.options=i({},this.options,e)},e.prototype.process=function(e,t,o,n){var r=this;if(n.language&&this.options.languageToPseudo!==n.language||!this.options.enabled)return e;var i,s,a,p=0,u=e.split("").map((function(e){return"}"===e?(p=0,e):"{"===e?(p++,e):2===p?e:-1!==r.options.repeatedLetters.indexOf(e)?r.options.letters[e].repeat(r.options.letterMultiplier):r.options.letters[e]||e})).join("");return i={shouldWrap:this.options.wrapped,string:u},s=i.shouldWrap,a=i.string,s?"["+a+"]":a},e}()}}]);
//# sourceMappingURL=873.1584c95b1479447a735d.js.map