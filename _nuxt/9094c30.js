(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4,5,6],{483:function(t,e,r){"use strict";r.r(e);var n={props:["position","text"]},o=r(80),c=r(100),l=r.n(c),m=r(229),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"text-subtitle-2 mb-1",attrs:{block:"",text:"",depressed:""},on:{click:function(e){return t.$vuetify.goTo(t.position,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a})},489:function(t,e,r){"use strict";r.r(e);r(6),r(94);var n={props:["cat"],computed:{page:function(){return this.cat.toString()},mobile:function(){return this.$vuetify.breakpoint.md||this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.xl}}},o=r(80),c=r(100),l=r.n(c),m=r(467),v=r(470),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.mobile?r("v-col",{staticClass:"pa-2 grey lighten-4 full_height sidefixed",attrs:{cols:"12",sm:"10",md:"2"}},[r("h3",{staticClass:"text-center text-subtitle-1 font-weight-bold primary--text mb-3"},[t._v("\n    On this page\n  ")]),t._v(" "),r("v-row",{staticClass:"flex-column pa-1",attrs:{"align-content":"center",justify:"space-between",align:"space-between"}},["family"==t.page?[r("BaseGoToButton",{attrs:{text:"Divorce and Separation",position:"#divorce"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Parenting",position:"#parenting"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Financial Agreements",position:"#financial"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Property and Financial Disputes",position:"#disputes"}})]:t._e(),t._v(" "),"business"==t.page?[r("BaseGoToButton",{attrs:{text:"Selling a Property",position:"#selling"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Transferring a Property in NSW",position:"#transfer"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Option Agreements",position:"#options"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Retail and Commercial Leasing",position:"#retail_commercial"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Retail Leases",position:"#retail"}})]:t._e(),t._v(" "),"contact"==t.page?[r("BaseGoToButton",{attrs:{text:"Find us on google map",position:"#map"}})]:t._e(),t._v(" "),"notary"==t.page?[r("BaseGoToButton",{attrs:{text:"Notary Fees",position:"#fee"}})]:t._e(),t._v(" "),"client"==t.page?[r("BaseGoToButton",{attrs:{text:"Login Client Section",position:"#login"}})]:t._e(),t._v(" "),"wills"==t.page?[r("BaseGoToButton",{attrs:{text:"Wills Disputes & Estate Planning",position:"#disputes"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Succession & Estate Planning ",position:"#disputes"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Drafting a Will",position:"#draft"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Power of Attorney",position:"#poa"}})]:t._e(),t._v(" "),"about"==t.page?[r("BaseGoToButton",{attrs:{text:"Our Promise",position:"#promise"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Our Approach",position:"#approach"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Our Team",position:"#team"}})]:t._e(),t._v(" "),"evident"==t.page?[r("BaseGoToButton",{attrs:{text:"Temporary Residence",position:"#temp"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Direct Entry",position:"#direct"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Scenarios",position:"#s1"}})]:t._e()],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;l()(component,{BaseGoToButton:r(483).default}),l()(component,{VCol:m.a,VRow:v.a})},512:function(t,e,r){"use strict";r.r(e);var n={},o=r(80),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.880450328878!2d151.00129571482796!3d-33.81539808067097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31f7628f3ab%3A0xc1f8a4f2ed3f2f28!2sSuite+3%2C+Level+1%2F186-190+Church+St%2C+Parramatta+NSW+2150%2C+Australia!5e0!3m2!1sen!2s!4v1536227873630",width:"100%",height:"450",frameborder:"0",allowfullscreen:""}})}),[],!1,null,null,null);e.default=component.exports},600:function(t,e,r){"use strict";r.r(e);r(39);var n=r(532),o=r(534),c={mixins:[n.validationMixin],validations:{name:{required:o.required,maxLength:Object(o.maxLength)(100)},email:{required:o.required,email:o.email},company:{required:o.required,maxLength:Object(o.maxLength)(100)},message:{required:o.required,maxLength:Object(o.maxLength)(500)},checkbox:{checked:function(t){return t}}},data:function(){return{name:"",email:"",company:"",message:"",checkbox:!1}},computed:{checkboxErrors:function(){var t=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&t.push("You must agree to continue!"),t):t},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&t.push("Name must be at most 100 characters long"),!this.$v.name.required&&t.push("Name is required."),t):t},companyErrors:function(){var t=[];return this.$v.company.$dirty?(!this.$v.company.maxLength&&t.push("Company must be at most 100 characters long"),!this.$v.company.required&&t.push("Company is required."),t):t},emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Must be valid e-mail"),!this.$v.email.required&&t.push("E-mail is required"),t):t},messageErrors:function(){var t=[];return this.$v.message.$dirty?(!this.$v.message.maxLength&&t.push("Message must be at most 500 characters long"),!this.$v.message.required&&t.push("Message is required."),t):t}},mounted:function(){this.scroll()},methods:{scroll:function(){var t=this.$nuxt.$route.query.cat;t&&this.$vuetify.goTo("#".concat(t),{easing:"easeInOutCubic",duration:1e3,offset:0})},submit:function(){this.$v.$touch()},clear:function(){this.$v.$reset(),this.name="",this.email="",this.company="",this.checkbox=!1}}},l=r(80),m=r(100),v=r.n(m),d=r(229),h=r(480),f=r(478),x=r(627),_=r(467),y=r(470),$=r(74),B=r(589),C=r(593),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"flex-column",attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"pa-0 mx-0 mb-8",attrs:{cols:"9"}},[r("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",staticStyle:{background:"transparent"},attrs:{flat:""}},[r("v-card-title",{staticClass:"text-h4 primary--text my-8"},[t._v("\n        Contact Us\n      ")])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"5"}},[r("v-card",{staticClass:"d-flex justify-start align-start flex-column pa-0",attrs:{id:"selling",flat:""}},[r("v-card-title",{staticClass:"text-h6 primary--text"},[t._v("\n            Call us now\n          ")]),t._v(" "),r("v-card-text",[r("h3",[t._v("\n              02 9635 7903\n            ")]),t._v(" "),r("p",[r("span",{staticClass:"font-weight-bold"},[t._v(" Our friendly consultants are available to talk")]),t._v(" "),r("br"),t._v("\n              Monday to Thursday 8:15am to 10:00pm AEST"),r("br"),t._v("\n              Friday 8:15am to 6:00pm AEST "),r("br"),t._v("\n              Saturday 8:00am to 4:15pm AEST.\n            ")])])],1),t._v(" "),r("v-card",{staticClass:"d-flex justify-start align-start flex-column pa-0",attrs:{id:"selling",flat:""}},[r("v-card-title",{staticClass:"text-h6 primary--text"},[t._v("\n            Fax us\n          ")]),t._v(" "),r("v-card-text",[r("h3",[t._v("\n              02 9635 7906\n            ")])])],1),t._v(" "),r("v-card",{staticClass:"d-flex justify-start align-start flex-column pa-0",attrs:{id:"selling",flat:""}},[r("v-card-title",{staticClass:"text-h6 primary--text"},[t._v("\n            Email us\n          ")]),t._v(" "),r("v-card-text",[r("h3",[t._v("\n              info@nadeemlawyers.com.au\n            ")])])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"7"}},[r("form",[r("v-card-title",{staticClass:"px-0 text-h6 primary--text"},[t._v("\n            Send us your enquiry\n          ")]),t._v(" "),r("v-text-field",{attrs:{"error-messages":t.nameErrors,counter:100,label:"Name",required:""},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-text-field",{attrs:{"error-messages":t.emailErrors,label:"E-mail",required:""},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"error-messages":t.companyErrors,label:"Company",counter:100,required:""},on:{input:function(e){return t.$v.company.$touch()},blur:function(e){return t.$v.company.$touch()}},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}),t._v(" "),r("v-textarea",{attrs:{"error-messages":t.messageErrors,counter:500,required:"",clearable:"","clear-icon":"mdi-close-circle",label:"Message"},on:{input:function(e){return t.$v.message.$touch()},blur:function(e){return t.$v.message.$touch()}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),r("v-checkbox",{attrs:{"error-messages":t.checkboxErrors,label:"Do you agree?",required:""},on:{change:function(e){return t.$v.checkbox.$touch()},blur:function(e){return t.$v.checkbox.$touch()}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{color:"primary",rounded:"",width:"40%"},on:{click:t.submit}},[t._v("\n            submit\n          ")]),t._v(" "),r("v-btn",{attrs:{color:"primary",rounded:""},on:{click:t.clear}},[t._v("\n            clear\n          ")])],1)])],1),t._v(" "),r("v-sheet",{staticClass:"text-center mt-12",attrs:{id:"map"}},[r("v-card-title",{staticClass:"px-0 text-h6 primary--text"},[t._v("\n        Find us on Google Map\n      ")]),t._v(" "),r("CoreMap")],1)],1),t._v(" "),r("CoreFixedScroll",{attrs:{cat:"contact"}})],1)}),[],!1,null,"614e64f6",null);e.default=component.exports;v()(component,{CoreMap:r(512).default,CoreFixedScroll:r(489).default}),v()(component,{VBtn:d.a,VCard:h.a,VCardText:f.a,VCardTitle:f.b,VCheckbox:x.a,VCol:_.a,VRow:y.a,VSheet:$.a,VTextField:B.a,VTextarea:C.a})}}]);