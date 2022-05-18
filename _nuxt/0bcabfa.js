(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,5],{483:function(t,e,n){"use strict";n.r(e);var o={props:["position","text"]},r=n(80),c=n(100),l=n.n(c),v=n(229),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"text-subtitle-2 mb-1",attrs:{block:"",text:"",depressed:""},on:{click:function(e){return t.$vuetify.goTo(t.position,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a})},489:function(t,e,n){"use strict";n.r(e);n(6),n(94);var o={props:["cat"],computed:{page:function(){return this.cat.toString()},mobile:function(){return this.$vuetify.breakpoint.md||this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.xl}}},r=n(80),c=n(100),l=n.n(c),v=n(467),d=n(470),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.mobile?n("v-col",{staticClass:"pa-2 grey lighten-4 full_height sidefixed",attrs:{cols:"12",sm:"10",md:"2"}},[n("h3",{staticClass:"text-center text-subtitle-1 font-weight-bold primary--text mb-3"},[t._v("\n    On this page\n  ")]),t._v(" "),n("v-row",{staticClass:"flex-column pa-1",attrs:{"align-content":"center",justify:"space-between",align:"space-between"}},["family"==t.page?[n("BaseGoToButton",{attrs:{text:"Divorce and Separation",position:"#divorce"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Parenting",position:"#parenting"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Financial Agreements",position:"#financial"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Property and Financial Disputes",position:"#disputes"}})]:t._e(),t._v(" "),"business"==t.page?[n("BaseGoToButton",{attrs:{text:"Selling a Property",position:"#selling"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Transferring a Property in NSW",position:"#transfer"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Option Agreements",position:"#options"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Retail and Commercial Leasing",position:"#retail_commercial"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Retail Leases",position:"#retail"}})]:t._e(),t._v(" "),"contact"==t.page?[n("BaseGoToButton",{attrs:{text:"Find us on google map",position:"#map"}})]:t._e(),t._v(" "),"notary"==t.page?[n("BaseGoToButton",{attrs:{text:"Notary Fees",position:"#fee"}})]:t._e(),t._v(" "),"client"==t.page?[n("BaseGoToButton",{attrs:{text:"Login Client Section",position:"#login"}})]:t._e(),t._v(" "),"wills"==t.page?[n("BaseGoToButton",{attrs:{text:"Wills Disputes & Estate Planning",position:"#disputes"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Succession & Estate Planning ",position:"#disputes"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Drafting a Will",position:"#draft"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Power of Attorney",position:"#poa"}})]:t._e(),t._v(" "),"about"==t.page?[n("BaseGoToButton",{attrs:{text:"Our Promise",position:"#promise"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Our Approach",position:"#approach"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Our Team",position:"#team"}})]:t._e(),t._v(" "),"evident"==t.page?[n("BaseGoToButton",{attrs:{text:"Temporary Residence",position:"#temp"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Direct Entry",position:"#direct"}}),t._v(" "),n("BaseGoToButton",{attrs:{text:"Scenarios",position:"#s1"}})]:t._e()],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;l()(component,{BaseGoToButton:n(483).default}),l()(component,{VCol:v.a,VRow:d.a})},607:function(t,e,n){"use strict";n.r(e);var o={layout:function(t){return"default"},data:function(){return{}},mounted:function(){this.scroll()},methods:{scroll:function(){var t=this.$nuxt.$route.query.cat;t?this.$vuetify.goTo("#".concat(t),{easing:"easeInOutCubic",duration:1e3,offset:0}):this.$vuetify.goTo(0,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},r=n(80),c=n(100),l=n.n(c),v=n(480),d=n(478),m=n(467),h=n(214),f=n(505),_=n(496),y=n(479),x=n(497),k=n(470),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"flex-column",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0 mx-0",attrs:{cols:"9"}},[n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",staticStyle:{background:"transparent"},attrs:{flat:""}},[n("v-card-title",{staticClass:"text-h4 primary--text my-8"},[t._v("\n        Evidencing “Genuine Need” for an Employee When Sponsoring for\n        Permanent Residence\n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\n          Employers who wish to nominate a foreign employee for ENS Subclass\n          186 visa (permanent residence) will be required to evidence that\n          there is a genuine need for an employee to occupy certain position\n          on a permanent and ongoing basis.\n        ")]),t._v(" "),n("p",[t._v("\n          This criterion is applicable to Temporary Residence Transition\n          Stream as well as Direct Entry Stream respectively. The appears to\n          be a level of misunderstanding regarding this requirement,\n          particularly, that such evidence needs to come in a form of Labour\n          Market Testing (similar to the process of sponsoring a TSS\n          employee).\n        ")]),t._v(" "),n("p",[t._v("\n          The purpose of this article is to clarify this\n          requirement and provide suggestions in terms of evidence could be\n          provided by an employer for the Department to consider.\n        ")])])],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{id:"temp",flat:""}},[n("v-card-title",{staticClass:"text-h5 primary--text mb-4"},[t._v("\n        Temporary Residence Transition Stream (TRTS)\n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\n          Looking at the Policy extract for TRTS, paragraph 5.19(5)(k)\n          requires the nominator to have a genuine need to employ the person\n          to work in the position under their direct control.\n        ")]),t._v(" "),n("p",[t._v("\n          Since implementation of the TSS visa, there is no longer an\n          assumption, or “automatic right” to a pathway to permanent\n          residence, there is a specified genuine need for the nominee to\n          remain employed in the nominated position.\n        ")]),t._v(" "),n("strong",[t._v("When assessing ‘genuine need’, Home Affairs will take into account\n          the following:")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Establish that there indeed exists a vacancy for the nominated\n              position\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Verify claims made in the subclass 457/TSS nomination pertaining\n              to genuine need where concerns about their validity exist\n            ")])],1),t._v(" "),n("p",{staticStyle:{"margin-top":"5px"}},[t._v("\n            Note – This is not the same as having to provide evidence of\n            Labour Market Testing for TSS visa.\n          ")])],1)],1)],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{id:"direct",flat:""}},[n("v-card-title",{staticClass:"text-h5 primary--text mb-4"},[t._v("\n        Direct Entry Applications (DE)\n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\n          Threshold for Direct Entry applications is somewhat higher given that an employee (in the eyes of the Department) is largely considered to be untested in the Australian Labour Market by the Department. Specific Direct Entry Requirements are outlined below:\n        ")]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{id:"promise",flat:""}},[n("v-card-title",{staticClass:"text-subtitle-1 primary--text mb-0",staticStyle:{"word-break":"break-word"}},[t._v("\n                Scenario 1 – perform activities to lead or assist with the diversification\n              ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\n                  An example would be where a business that is currently involved in running a restaurant nominates the position of business development manager on the premise that they wish to start up or purchase a number of restaurants.\n                ")]),t._v(" "),n("p",[t._v("\n                  In this instance, a case officer would need to be satisfied that the business has the intention and the financial capacity to support such business expansion, taking into account any evidence provided, including:\n                ")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                        mdi-checkbox-marked-circle-outline\n                      ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n                      Evidence of appropriate market research.\n                    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                        mdi-checkbox-marked-circle-outline\n                      ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n                      Business plans detailing proposed expansion and timelines.\n                    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                        mdi-checkbox-marked-circle-outline\n                      ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n                      Financial budgets covering expenditure and anticipated revenue.\n                    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                        mdi-checkbox-marked-circle-outline\n                      ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n                      Evidence of availability of funding (such as own funds or bank loans).\n                    ")])],1),t._v(" "),n("p",[t._v("\n                    It is strongly advised that Genuine Need for DE applications are supported by submission on behalf of the employer to ensure that all supporting documentation is considered appropriately by the case officer.\n                  ")])],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{id:"s1",flat:""}},[n("v-card-title",{staticClass:"text-subtitle-1 primary--text mb-0",staticStyle:{"word-break":"break-word"}},[t._v("\n                Scenario 2 – work within the diversified (new) environment\n              ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\n                  An example would be a business that is currently involved in running fitness centre and decide to nominate a Chiropractor on the basis that they intend to diversify their business operations.\n                ")]),t._v(" "),n("p",[t._v("\n                  Decision-makers would need to be satisfied that the business has the capacity and intention to diversify their business activity, taking into account any evidence provided, including:\n                ")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                        mdi-checkbox-marked-circle-outline\n                      ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n                      Business plans including financial budgets covering expenses and anticipated revenue.\n                    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                        mdi-checkbox-marked-circle-outline\n                      ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n                      Availability of business premises (evidence of lease or purchase of proposed location).\n                    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                        mdi-checkbox-marked-circle-outline\n                      ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n                      Evidence of lease or purchase of equipment.\n                    ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                        mdi-checkbox-marked-circle-outline\n                      ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n                      Evidence of availability of funding (such as own funds or bank loans).\n                    ")])],1)],1)],1)],1)],1)],1),t._v(" "),n("p",[t._v("\n          Information that may be considered adverse information should also be addressed in order to ensure that full context of the situation is adequately presented.\n          Any of the following actions by the nominating employer regarding other employees, including Australian workers, in the nominated occupation or similar occupations may be indicative of the nominated position not being genuinely needed:\n        ")]),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Retrenchment in the previous 12 months.\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Reduction of hours worked during the previous 12 months.\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Employment of a temporary visa holder on conditions less favourable than those for Australian employees.\n            ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-icon",{attrs:{medium:""}},[t._v("\n                mdi-checkbox-marked-circle-outline\n              ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n              Recruitment of temporary visa holders beyond the ordinary scope of the operation of the business.\n            ")])],1),t._v(" "),n("p",[t._v("\n            Each case will be different, and it is important to ensure that the nature of the business, details pertaining the position are sufficiently presented to Home Affairs, particularly in relation to Direct Entry applications. Other factors including size of the business, whether the business has previously nominated an employee for permanent residence under ENS will also be considered by the Department.\n          ")]),t._v(" "),n("p",[t._v("If you require any assistance "),n("span",{staticStyle:{color:"#22a7f0"}},[n("a",{staticStyle:{color:"#22a7f0"},attrs:{href:"tel:0296357903"}},[t._v("Call Nadeem Lawyers")])]),t._v(" at 02 9635 7903")]),t._v(" "),n("p",{staticClass:"disclaimer"},[n("strong",[t._v("DISCLAIMER:")]),t._v(" The information provided here is only for general understanding and does not constitute legal advice.\n          ")])],1)],1)],1)],1),t._v(" "),n("CoreFixedScroll",{attrs:{cat:"evident"}})],1)}),[],!1,null,"377df0ee",null);e.default=component.exports;l()(component,{CoreFixedScroll:n(489).default}),l()(component,{VCard:v.a,VCardText:d.a,VCardTitle:d.b,VCol:m.a,VIcon:h.a,VList:f.a,VListItem:_.a,VListItemContent:y.a,VListItemIcon:x.a,VRow:k.a})}}]);