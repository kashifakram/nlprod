(window.webpackJsonp=window.webpackJsonp||[]).push([[24,4,5],{483:function(t,e,n){"use strict";n.r(e);var o={props:["position","text"]},r=n(80),l=n(100),c=n.n(l),v=n(229),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"text-subtitle-2 mb-1",attrs:{block:"",text:"",depressed:""},on:{click:function(e){return t.$vuetify.goTo(t.position,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a})},489:function(t,e,n){"use strict";n.r(e);n(6),n(94);var o={props:["cat"],computed:{page:function(){return this.cat.toString()},mobile:function(){return this.$vuetify.breakpoint.md||this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.xl}}},r=n(80),l=n(100),c=n.n(l),v=n(467),m=n(470),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.mobile?n("v-col",{staticClass:"pa-2 grey lighten-4 full_height sidefixed",attrs:{cols:"12",sm:"10",md:"2"}},[n("h3",{staticClass:"text-center text-subtitle-1 font-weight-bold primary--text mb-3"},[t._v("\n    On this page\n  ")]),t._v(" "),n("v-row",{staticClass:"flex-column pa-1",attrs:{"align-content":"center",justify:"space-between",align:"space-between"}},["family"==t.page?[n("BaseGoToButton",{attrs:{text:"Divorce and Separation",position:"#divorce"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Parenting",position:"#parenting"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Financial Agreements",position:"#financial"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Property and Financial Disputes",position:"#disputes"}})]:t._e(),t._v(" "),"business"==t.page?[n("BaseGoToButton",{attrs:{text:"Selling a Property",position:"#selling"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Transferring a Property in NSW",position:"#transfer"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Option Agreements",position:"#options"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Retail and Commercial Leasing",position:"#retail_commercial"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Retail Leases",position:"#retail"}})]:t._e(),t._v(" "),"contact"==t.page?[n("BaseGoToButton",{attrs:{text:"Find us on google map",position:"#map"}})]:t._e(),t._v(" "),"notary"==t.page?[n("BaseGoToButton",{attrs:{text:"Notary Fees",position:"#fee"}})]:t._e(),t._v(" "),"client"==t.page?[n("BaseGoToButton",{attrs:{text:"Login Client Section",position:"#login"}})]:t._e(),t._v(" "),"wills"==t.page?[n("BaseGoToButton",{attrs:{text:"Wills Disputes & Estate Planning",position:"#disputes"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Succession & Estate Planning ",position:"#disputes"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Drafting a Will",position:"#draft"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Power of Attorney",position:"#poa"}})]:t._e(),t._v(" "),"about"==t.page?[n("BaseGoToButton",{attrs:{text:"Our Promise",position:"#promise"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Our Approach",position:"#approach"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Our Team",position:"#team"}})]:t._e(),t._v(" "),"evident"==t.page?[n("BaseGoToButton",{attrs:{text:"Temporary Residence",position:"#temp"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Direct Entry",position:"#direct"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Scenarios",position:"#s1"}})]:t._e()],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseGoToButton:n(483).default}),c()(component,{VCol:v.a,VRow:m.a})},601:function(t,e,n){"use strict";n.r(e);var o={layout:function(t){return"default"},data:function(){return{length:3,window:0}},mounted:function(){this.scroll()},methods:{scroll:function(){var t=this.$nuxt.$route.query.cat;t?this.$vuetify.goTo("#".concat(t),{easing:"easeInOutCubic",duration:1e3,offset:0}):this.$vuetify.goTo(0,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},r=n(80),l=n(100),c=n.n(l),v=n(480),m=n(478),d=n(467),_=n(214),f=n(505),h=n(496),x=n(479),w=n(497),y=n(470),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"flex-column",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0 mx-0",attrs:{cols:"9"}},[n("v-card",{staticClass:"d-flex justify-center align-center mt-2 flex-column",staticStyle:{background:"transparent"},attrs:{flat:""}},[n("v-card-title",{staticClass:"text-h4 primary--text my-8"},[t._v("\n        Immigration\n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\n          Nadeem Lawyers, a leading immigration law firm in Parramatta,\n          Sydney, Australia. At Nadeem Lawyers, we have been helping our\n          clients, who come from a diverse range of communities, for over a\n          decade.\n        ")]),t._v(" "),n("p",[t._v("\n          Our clients range from individuals to families, as well as from sole\n          trader businesses to corporations. We are always willing to go the\n          extra mile to help our clients in each stage of their immigration\n          matters.\n        ")]),t._v(" "),n("p",[t._v("\n          We will provide our clients with up-to-date immigration advice and\n          lead them through the complex application processes.\n        ")]),t._v(" "),n("p",[t._v("\n          Australian migration law consists of a large array of legislations;\n          rules; regulations; ministerial directions; and policies, which are\n          ever changing and developing. It is a highly complex area of the law\n          which would make the visa application process extremely daunting for\n          many.\n        ")]),t._v(" "),n("p",[t._v("\n          Our team always strives to make sure that we know the law and that\n          we are up-to-date on recent changes in legislations.\n        ")]),t._v(" "),n("p",[t._v("\n          Mr Shahid Nadeem is the leading migration lawyer at Nadeem Lawyers.\n          He is a registered member (MARN:085112) of the Migration Agents\n          Registration Authority since 2008. He is also a member of The Law\n          Society of New South Wales since 2007.\n        ")])])],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{id:"divorce",flat:""}},[n("v-card-title",{staticClass:"text-h5 mb-4 primary--text"},[t._v("\n        Our Immigration Services\n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\n          At Nadeem Lawyers, we provide a range of services to ensure our\n          clients are served in all areas of the migration law. Our areas of\n          practice include a wide variety of visa applications in all\n          following major visa categories:\n        ")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v(" Visitor Visas ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v(" Student Visas ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Refugee & Humanitarian Visas\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Skilled Migration Visas\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Employer Sponsored Migration Visas\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v(" Temporary Work Visas ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Business & Investment Visas\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Family & Partner Visas\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v(" Bridging Visas ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v(" Resident Return Visas ")])],1)],1),t._v(" "),n("p",[t._v("\n          Visa cancellations and visa application refusals can be a traumatic\n          experience for many.\n        ")]),t._v(" "),n("p",[t._v("\n          Our firm has successfully represented many clients in both the\n          administrative review applications to the Administrative Appeals\n          Tribunal (AAT Review) and the review applications to the Federal\n          Circuit Court of Australia (Judicial Review).\n        ")])],1)],1)],1),t._v(" "),n("CoreFixedScroll",{attrs:{cat:"family"}})],1)}),[],!1,null,"8bf095ca",null);e.default=component.exports;c()(component,{CoreFixedScroll:n(489).default}),c()(component,{VCard:v.a,VCardText:m.a,VCardTitle:m.b,VCol:d.a,VIcon:_.a,VList:f.a,VListItem:h.a,VListItemContent:x.a,VListItemIcon:w.a,VRow:y.a})}}]);