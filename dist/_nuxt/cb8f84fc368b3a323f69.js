(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{277:function(t,e,r){t.exports=r.p+"img/0689baa.png"},285:function(t,e,r){var content=r(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("4a67908e",content,!0,{sourceMap:!1})},347:function(t,e,r){"use strict";var n=r(285);r.n(n).a},348:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,"#styled-input[data-v-26e2c33e],.styled-input label[for][data-v-26e2c33e]{height:48px}",""])},358:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{privateKey:"",isMounted:!1}},mounted:function(){this.isMounted=!0},methods:{toWallet:function(){this.privateKey.length<60?this.$toast.error("Seems that the private key is invalid. Are you sure you have the correct one ?"):(localStorage.setItem("privateKey",this.privateKey.trim()),this.$router.push("wallet"))},gotoCreate:function(){this.$router.push("create")}}},o=(r(347),r(49)),l=r(66),c=r.n(l),v=r(269),y=r(353),d=r(264),f=r(290),h=r(354),x=r(265),m=r(314),w=r(349),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{staticStyle:{"max-width":"800px"}},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("img",{staticClass:"text-xs-center",staticStyle:{"text-align":"center",width:"200px"},attrs:{src:r(277)}})]),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("p",{staticClass:"display-3 text-xs-center"},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("OAS")]),t._v(" "),n("span",{staticStyle:{color:"cyan"}},[t._v("CHAIN")])])]),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("p",{staticClass:"headline text-xs-center",staticStyle:{color:"#eee"}},[t._v("web wallet")])]),t._v(" "),n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"7",sm:"6"}},[n("v-btn",{staticClass:"styled-input",attrs:{id:"styled-input",color:"green",block:""},on:{click:t.gotoCreate}},[t._v("CREATE NEW WALLET")])],1)],1),t._v(" "),n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("p",{staticClass:"text-xs-center",staticStyle:{color:"#78909c"}},[t._v("or access existing")])]),t._v(" "),n("v-form",{on:{submit:function(e){return e.preventDefault(),t.toWallet(e)}}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"7",sm:"6"}},[n("v-text-field",{staticStyle:{"max-width":"800px"},attrs:{solo:"",type:"text",label:"Private Key"},model:{value:t.privateKey,callback:function(e){t.privateKey=e},expression:"privateKey"}}),t._v(" "),n("v-btn",{staticClass:"styled-input",attrs:{id:"styled-input",block:"",color:"green",type:"submit"}},[t._v("Continue")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"26e2c33e",null);e.default=component.exports;c()(component,{VBtn:v.a,VCol:y.a,VContainer:d.a,VFlex:f.a,VForm:h.a,VLayout:x.a,VRow:m.a,VTextField:w.a})}}]);