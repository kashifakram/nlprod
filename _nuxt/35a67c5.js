(window.webpackJsonp=window.webpackJsonp||[]).push([[28,4,5],{427:function(t,e,n){"use strict";n.r(e);var o={props:["position","text"]},r=n(77),l=n(93),c=n.n(l),v=n(204),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"text-subtitle-2 mb-8",attrs:{block:"",text:"",depressed:""},on:{click:function(e){return t.$vuetify.goTo(t.position,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a})},428:function(t,e,n){"use strict";n.r(e);n(18),n(78);var o={props:["cat"],computed:{page:function(){return this.cat.toString()}}},r=n(77),l=n(93),c=n.n(l),v=n(404),m=n(408),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"pa-5 grey lighten-4 full_height sidefixed",attrs:{cols:"12",sm:"10",md:"3"}},[n("h3",{staticClass:"text-center text-subtitle-1 font-weight-bold primary--text mb-4"},[t._v("On this page")]),t._v(" "),n("v-row",{staticClass:"flex-column pa-2",attrs:{"align-content":"center",justify:"space-between",align:"space-between"}},["family"==t.page?[n("BaseGoToButton",{attrs:{text:"Divorce and Separation",position:"#divorce"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Parenting",position:"#parenting"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Financial Agreements",position:"#financial"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Property and Financial Disputes",position:"#disputes"}})]:t._e(),t._v(" "),"business"==t.page?[n("BaseGoToButton",{attrs:{text:"Selling a Property",position:"#selling"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Transferring a Property in NSW",position:"#transfer"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Option Agreements",position:"#options"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Retail and Commercial Leasing",position:"#retail_commercial"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Retail Leases",position:"#retail"}})]:t._e(),t._v(" "),"contact"==t.page?[n("BaseGoToButton",{attrs:{text:"Find us on google map",position:"#map"}})]:t._e(),t._v(" "),"notary"==t.page?[n("BaseGoToButton",{attrs:{text:"Notary Fees",position:"#fee"}})]:t._e(),t._v(" "),"client"==t.page?[n("BaseGoToButton",{attrs:{text:"Login Client Section",position:"#login"}})]:t._e(),t._v(" "),"wills"==t.page?[n("BaseGoToButton",{attrs:{text:"Wills Disputes & Estate Planning",position:"#disputes"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Succession & Estate Planning ",position:"#disputes"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Drafting a Will",position:"#draft"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Power of Attorney",position:"#poa"}})]:t._e(),t._v(" "),"about"==t.page?[n("BaseGoToButton",{attrs:{text:"Our Promise",position:"#promise"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Our Approach",position:"#approach"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Our Team",position:"#team"}})]:t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseGoToButton:n(427).default}),c()(component,{VCol:v.a,VRow:m.a})},542:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{}},layout:function(t){return"default"},methods:{scroll:function(){var t=this.$nuxt.$route.query.cat;t?this.$vuetify.goTo("#".concat(t),{easing:"easeInOutCubic",duration:1e3,offset:0}):this.$vuetify.goTo(0,{easing:"easeInOutCubic",duration:1e3,offset:0})}},mounted:function(){this.scroll()}},r=n(77),l=n(93),c=n.n(l),v=n(417),m=n(416),d=n(404),_=n(191),f=n(442),h=n(433),y=n(426),x=n(434),w=n(408),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"flex-column",staticStyle:{width:"80vw","max-width":"80vw"},attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0 mx-0",attrs:{cols:"9"}},[n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",staticStyle:{background:"transparent"},attrs:{flat:""}},[n("v-card-title",{staticClass:"text-h4 primary--text my-8"},[t._v("Wills & Estate")]),t._v(" "),n("v-card-text",[n("p",[t._v("\nWe assist you with the preparation of Wills to ensure your assets will be distributed in the way you desire.\n\nIt’s never easy building up your assets. People spend their whole life trying to save something for their family. ")]),t._v(" "),n("p",[t._v("That is why we advise having your will professionally drafted by experienced lawyers.")])])],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{flat:"",id:"disputes"}},[n("v-card-title",{staticClass:"text-h5 mb-4 primary--text"},[t._v("\n    Wills Disputes and Estate Planning\n  ")]),t._v(" "),n("v-card-text",[n("p",[t._v("It is essential to make and have a valid Will if you are concerned about who will receive your assets and belongings after your death. It is particularly important to make a Will if you have a family or other dependents. Making a valid Will is the only way you can ensure your assets will be distributed according to your wishes when you die. ")]),t._v(" "),n("p",[t._v("Nadeem Lawyers have extensive experience in Will drafting to ensure all the needs and requirements of the Will maker and their beneficiaries are met in an efficient manner.")])])],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{flat:"",id:"succession"}},[n("v-card-title",{staticClass:"text-h5 mb-4 primary--text"},[t._v("\n                Succession and Estate Planning\n              ")]),t._v(" "),n("v-card-text",[n("p",[t._v("It is very important to have a succession plan in place that makes the transition easy not only for yourself but also for your family or employees and minimizes the chances of the business or farm having to be sold up when you leave.\n                ")]),t._v(" "),n("h4",[t._v("\n                  Estate planning goes beyond drafting a Will – it includes:\n                ")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   The assessment of assets\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   The assessment of likely taxation\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   Advice regarding the possibility of claims against the estate by third parties\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   The protection of assets\n    ")])],1)],1),t._v(" "),n("h4",[t._v("\n                       \n\nEstate planning is an active process of re-evaluating the estate when circumstances in life change, such as:\n                ")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   Newly married couples or those divorcing\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   A change to the family’s asset pool\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   A change in working conditions such as the buying or selling of a business\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   Changes to superannuation, insurance policies or taxation levels\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   The establishment of discretionary trusts\n    ")])],1)],1),t._v(" "),n("p",{staticClass:"font-weight-bold"},[t._v("A successful estate plan is made involving all family members as it will take into account not only provisions for your retirement income but also the plans, aptitudes and existing assets of younger generations.")])],1)],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{flat:"",id:"draft"}},[n("v-card-title",{staticClass:"text-h5 mb-4 primary--text"},[t._v("\n    Drafting a Will\n  ")]),t._v(" "),n("v-card-text",[n("p",[t._v("A lot of people prefer working on their will themselves. This is cost friendly, however, it’s not an advisable solution as the laws relating to Wills and Succession law can be complex. If a Will is not prepared well, or executed poorly, it can lead to a Will being challenged. ")]),t._v(" "),n("p",[t._v("This adds more stress to lives of people who are grieving a loved one. Not to mention the financial cost of defending such claims in court. ")]),t._v(" "),n("p",[t._v("Don’t let your hard earned assets wash away just for saving costs. ")]),t._v(" "),n("h3",{staticClass:"text-subtitle-1 font-weight-bold primary--text"},[t._v("Who will receive my assets after my death?")]),t._v(" "),n("p",[t._v("This depends on how you draft your will.")]),t._v(" "),n("p",{staticClass:"mt-4"},[t._v("We have extensive experience in Will drafting to ensure all the needs and requirements are met.")])])],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{flat:"",id:"poa"}},[n("v-card-title",{staticClass:"text-h5 mb-4 primary--text"},[t._v("\n                Power of Attorney\n              ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\nA Power of Attorney is a document used to appoint a trusted individual who can make important financial decisions and handle your financial affairs when you are unable to do so. A Power of Attorney provides your appointed attorney with the legal authority to look after your financial affairs.\n                ")]),t._v(" "),n("h3",[t._v("\n                  How can a Power of Attorney be used?\n                ")]),t._v(" "),n("h4",[t._v("A Power of Attorney can be used in a variety of circumstances. Some common examples include:")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   If you were taking an extended trip interstate or overseas\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   If you need to sell your property but you are unable to sign the legal documents\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   If you are no longer be able to manage your own financial affairs\n    ")])],1)],1),t._v(" "),n("h3",[t._v("\nWhat types of Powers of Attorney are there?\n                ")]),t._v(" "),n("h4",[t._v("There are two types of Powers of Attorney:")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   General Power of Attorney\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   Enduring Power of Attorney\n    ")])],1)],1),t._v(" "),n("h3",[t._v("\nHow can we help?\n                ")]),t._v(" "),n("h4",[t._v("Our lawyers can prepare both enduring and normal Power of Attorney documents, and can advise you further on:")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   When the appointment is to operate\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   Limiting or provide unrestricted powers to the attorney appointed\n    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{attrs:{medium:""}},[t._v("\n      mdi-check-decagram-outline\n    ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n   Whether attorneys appointed (if more than one) must act jointly or whether they can independently exercise the powers\n    ")])],1)],1)],1)],1)],1),t._v(" "),n("CoreFixedScroll",{attrs:{cat:"wills"}})],1)}),[],!1,null,"59045070",null);e.default=component.exports;c()(component,{CoreFixedScroll:n(428).default}),c()(component,{VCard:v.a,VCardText:m.a,VCardTitle:m.b,VCol:d.a,VIcon:_.a,VList:f.a,VListItem:h.a,VListItemContent:y.a,VListItemIcon:x.a,VRow:w.a})}}]);