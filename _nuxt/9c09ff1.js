(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{235:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7388ab72",content,!0,{sourceMap:!1})},237:function(t,e,n){t.exports=n.p+"img/nl_logo.8908231.png"},238:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("f3a89ecc",content,!0,{sourceMap:!1})},249:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6b7290c6",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n(9);var o={data:function(){return{second:!1,third:!1,clipped:!1,drawer:!1,fixed:!1,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],items:[{id:1,icon:"mdi-apps",name:"Welcome",title:"Welcome",link:"/",sl:!0,children:[{id:2,name:"Family",title:"Family",link:"/famiy"},{id:3,name:"Inspire",title:"Inspire",link:"/inspire"},{id:4,name:"Inspire",title:"Inspire",link:"/inspire"}]},{id:5,icon:"mdi-chart-bubble",name:"Inspire",title:"Inspire",link:"/inspire"},{id:6,name:"Click Me",title:"Click Me",link:"/inspire"},{id:7,name:"Click Me",title:"Click Me",link:"/inspire"},{id:8,name:"Click Me",title:"Click Me",link:"/inspire"},{id:9,name:"Click Me 2",title:"Click Me 2",link:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},computed:{isHomePge:function(){return"/"!=this.$nuxt.$route.path}},methods:{logged:function(){console.log("mouse overed")},showSubMenu:function(t){var e="";return t.sl&&t.children.forEach((function(sub){e+="kashif akram"})),console.log(e),e},subMenuArray:function(t){return t.sl?t.children:[]}}},l=(n(311),n(77)),r=n(93),c=n.n(r),v=n(402),m=n(412),d=n(403),f=n(204),h=n(404),_=n(415),x=n(405),w=n(191),k=n(145),y=n(406),C=n(411),V=n(413),S=n(408),L=n(409),M=n(410),I=n(414),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[t.$vuetify.breakpoint.mdAndDown?o("v-navigation-drawer",{attrs:{width:"80vw",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-treeview",{attrs:{"open-all":"",items:t.items},scopedSlots:t._u([{key:"label",fn:function(e){return[e.item.link?o("nuxt-link",{attrs:{to:e.item.link}},[t._v(t._s(e.item.name))]):o("span",[t._v(t._s(e.item.name))])]}}],null,!1,71070740)})],1):t._e(),t._v(" "),o("v-system-bar",{staticClass:"white--text ma-0",attrs:{app:"",fixed:"",color:"secondary"}},[t._l(t.icons,(function(e){return o("v-btn",{key:e,staticClass:"white--text",attrs:{icon:""}},[o("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n      "+t._s(e)+"\n    ")])],1)})),t._v(" "),o("v-spacer"),t._v(" "),o("div",{staticClass:"mr-4"},[o("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n  mdi-email\n    ")]),t._v("\n  info@nadeemlawyers.com.au \n  ")],1),t._v(" "),o("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n  mdi-phone\n    ")]),t._v("\n  02 9635 7903\n\n  ")],2),t._v(" "),o("v-app-bar",{staticClass:"appbar pa-0",attrs:{app:"",flat:"",height:"100%",fixed:""}},[t.$vuetify.breakpoint.mdAndDown?o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),t._v(" "),o("v-row",{attrs:{align:"center",justify:"start","align-content":"center"}},[o("v-menu",{attrs:{bottom:"","min-width":"100vw","nudge-bottom":"2","open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("div",t._g(t._b({staticClass:"pa-8 elevation-3 secondary white--text"},"div",l,!1),n),[o("h5",[t._v(" LEGAL ")])])]}}])},[t._v(" "),o("v-row",{staticClass:"pa-4 elevation-0 secondary",attrs:{align:"center",justify:"start"}},[o("v-col",{attrs:{cols:"4"}},t._l(t.items,(function(e,i){return o("div",{key:i},[o("nuxt-link",{attrs:{to:e.link}},[o("h3",{staticClass:"pa-4",on:{mouseover:function(n){return t.showSubMenu(e)}}},[t._v("\n              "+t._s(e.title)+"\n            ")])])],1)})),0),t._v(" "),o("v-col",{ref:"second",attrs:{cols:"4"}},[t.second?o("div",t._l(t.items,(function(e,i){return o("h3",{key:i},[t._v("\n              "+t._s(e.title)+"\n            ")])})),0):o("h3",[t._v("No Submenu")])]),t._v(" "),o("v-col",{ref:"third",attrs:{cols:"4"}},[t.second?o("div",t._l(t.items,(function(e,i){return o("h3",{key:i},[t._v("\n            "+t._s(e.title)+"\n            ")])})),0):o("h3",[t._v("No Submenu")])])],1)],1)],1),t._v(" "),o("v-spacer"),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[o("v-img",{staticStyle:{"z-index":"10"},attrs:{alt:"nadeem lawyers logo",src:n(237),"max-height":"70","max-width":"170"}})],1)],1),t._v(" "),o("v-main",[o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("nuxt")],1)],1),t._v(" "),o("v-footer",{staticClass:"white--text",attrs:{app:"",height:"35vh","max-height":"35vh",color:"secondary"}},[t.isHomePge?o("v-btn",{staticClass:"pa-2 border-pill",staticStyle:{position:"fixed",bottom:"5vh",right:"5vh"},attrs:{outlined:"",rounded:"",text:"",height:"5vh",width:"15vh"},on:{click:function(e){return t.$vuetify.goTo(0,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},[o("v-icon",{attrs:{size:"36px",color:"primary"}},[t._v("\n    mdi-arrow-up-drop-circle\n  ")]),t._v(" "),o("span",{staticClass:"text-caption primary--text"},[t._v(" Back to top")])],1):t._e(),t._v(" "),o("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n    mdi-map\n  ")]),t._v("\n    Suite 3, Level 1, 186-190 Church Street Parramatta, NSW 2150\n    "),o("v-spacer"),t._v(" "),o("span",[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)}),[],!1,null,"40baa661",null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:m.a,VAppBarNavIcon:d.a,VBtn:f.a,VCol:h.a,VContainer:_.a,VFooter:x.a,VIcon:w.a,VImg:k.a,VMain:y.a,VMenu:C.a,VNavigationDrawer:V.a,VRow:S.a,VSpacer:L.a,VSystemBar:M.a,VTreeview:I.a})},265:function(t,e,n){"use strict";n(9);var o={data:function(){return{second:!1,third:!1,clipped:!1,drawer:!1,fixed:!1,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],items:[{id:1,icon:"mdi-apps",name:"Welcome",title:"Welcome",link:"/",sl:!0,children:[{id:2,name:"Family",title:"Family",link:"/famiy"},{id:3,name:"Inspire",title:"Inspire",link:"/inspire"},{id:4,name:"Inspire",title:"Inspire",link:"/inspire"}]},{id:5,icon:"mdi-chart-bubble",name:"Inspire",title:"Inspire",link:"/inspire"},{id:6,name:"Click Me",title:"Click Me",link:"/inspire"},{id:7,name:"Click Me",title:"Click Me",link:"/inspire"},{id:8,name:"Click Me",title:"Click Me",link:"/inspire"},{id:9,name:"Click Me 2",title:"Click Me 2",link:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},computed:{isHomePge:function(){return"/"!=this.$nuxt.$route.path}},methods:{logged:function(){console.log("mouse overed")},showSubMenu:function(t){var e="";return t.sl&&t.children.forEach((function(sub){e+="kashif akram"})),console.log(e),e},subMenuArray:function(t){return t.sl?t.children:[]}}},l=(n(379),n(77)),r=n(93),c=n.n(r),v=n(402),m=n(412),d=n(403),f=n(204),h=n(404),_=n(415),x=n(405),w=n(191),k=n(145),y=n(406),C=n(411),V=n(413),S=n(408),L=n(409),M=n(410),I=n(414),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[t.$vuetify.breakpoint.mdAndDown?o("v-navigation-drawer",{attrs:{width:"80vw",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-treeview",{attrs:{"open-all":"",items:t.items},scopedSlots:t._u([{key:"label",fn:function(e){return[e.item.link?o("nuxt-link",{attrs:{to:e.item.link}},[t._v(t._s(e.item.name))]):o("span",[t._v(t._s(e.item.name))])]}}],null,!1,71070740)})],1):t._e(),t._v(" "),o("v-system-bar",{staticClass:"white--text ma-0",attrs:{app:"",fixed:"",color:"secondary"}},[t._l(t.icons,(function(e){return o("v-btn",{key:e,staticClass:"white--text",attrs:{icon:""}},[o("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n      "+t._s(e)+"\n    ")])],1)})),t._v(" "),o("v-spacer"),t._v(" "),o("div",{staticClass:"mr-4"},[o("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n  mdi-email\n    ")]),t._v("\n  info@nadeemlawyers.com.au \n  ")],1),t._v(" "),o("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n  mdi-phone\n    ")]),t._v("\n  02 9635 7903\n\n  ")],2),t._v(" "),o("v-app-bar",{staticClass:"appbar pa-0",attrs:{app:"",flat:"",height:"100%",fixed:""}},[t.$vuetify.breakpoint.mdAndDown?o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),t._v(" "),o("v-row",{attrs:{align:"center",justify:"space-evenly","align-content":"center"}},[o("v-menu",{attrs:{bottom:"","min-width":"100vw","nudge-bottom":"2","open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("div",t._g(t._b({staticClass:"pa-6 font-weight-bold menutitle"},"div",l,!1),n),[o("h4",[t._v(" LEGAL ")])])]}}])},[t._v(" "),o("v-row",{staticClass:"pa-4 elevation-0 secondary",attrs:{align:"start",justify:"start"}},[o("v-col",{attrs:{cols:"4"}},[o("nuxt-link",{attrs:{to:"/legal/family-law"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Family Law\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/legal/family-law?cat=divorce"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Divorce & Separation\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/family-law?cat=parenting"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Parenting\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/family-law?cat=financial"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Financial Agreements\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/family-law?cat=disputes"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Property & Financial Disputes\n                  ")])])]],2),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("nuxt-link",{attrs:{to:"/legal/wills-and-estate"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Wills & Estate\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/legal/wills-and-estate?cat=disputes"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Wills Disputes & Estate Planning\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/wills-and-estate?cat=succession"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Succession & Estate Planning\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/wills-and-estate?cat=draft"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Drafting a Will\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/wills-and-estate?cat=poa"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Power of Attorney\n                  ")])])]],2),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("nuxt-link",{attrs:{to:"/legal/business-and-property-conveyancing"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Business & Property Conveyancing\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/legal/business-and-property-conveyancing?cat=selling"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Selling a Property\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/business-and-property-conveyancing?cat=transfer"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Transferring a Property in NSW\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/business-and-property-conveyancing?cat=options"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Option Agreements\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/business-and-property-conveyancing?cat=retail_commercial"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Retail and Commercial Leasing\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/legal/business-and-property-conveyancing?cat=retail"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Retail Leases\n                  ")])])]],2)],1)],1),t._v(" "),o("v-menu",{attrs:{bottom:"","min-width":"100vw","nudge-bottom":"2","open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("div",t._g(t._b({staticClass:"pa-6 menutitle font-weight-bold"},"div",l,!1),n),[o("h4",[t._v(" IMMIGRATION ")])])]}}])},[t._v(" "),o("div",[o("v-row",{staticClass:"pa-4 elevation-0 secondary",attrs:{align:"start",justify:"start"}},[o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/visitor-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Visitor Visas\n              ")])])],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/student-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Student-Visas\n              ")])])],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/refugee-and-humanitarian-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Refugee & Humanitarian Visas\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/immigration/refugee-and-humanitarian-visas/protection-visa-subclass-866"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Protection Visa Subclass 866\n                  ")])])]],2),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/skilled-migration-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Skilled Migration Visas\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/legal/skilled-migration-visas/skilled-work-regional-provisional-visa-subclass-491"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Skilled Work Regional Provisional Visa Subclass 491\n                  ")])])]],2),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/employer-sponsored-migration-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Employer Sponsored Migration Visas\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/immigration/employer-sponsored-migration-visas/skilled-employer-sponsored-regional-provisional-visa-subclass-494"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Skilled Employer Sponsored Regional Provisional Visa Subclass 494\n                  ")])])]],2),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/temporary-work-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Temporary Work Visas\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/immigration/temporary-work-visas/skilled-regional-provisional-visa-subclass-489"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Skilled Regional Provisional Visa Subclass 489\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/immigration/temporary-work-visas/temporary-skill-shortage-visa-subclass-482"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Temporary Skill Shortage Visa Subclass 482\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/immigration/temporary-work-visas/training-visa-subclass-407"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Training Visa Subclass 407\n                  ")])])]],2)],1),t._v(" "),o("v-row",{staticClass:"pa-4 elevation-0 secondary",attrs:{align:"start",justify:"start"}},[o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/business-and-investment-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Business And Investment Visas\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/immigration/business-and-investment-visas/distinguished-talent-visa-subclass-124"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Distinguished Talent Visa Subclass 124\n                  ")])])]],2),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/family-and-partner-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Family And Partner Visas\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/immigration/family-and-partner-visas/partner-visas"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Partner Visas\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/immigration/family-and-partner-visas/parent-visas"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Parent Visas\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/immigration/family-and-partner-visas/child-visas"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Child Visas\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/immigration/family-and-partner-visas/other-family-visas"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Other Family Visas\n                  ")])])]],2),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/bridging-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Bridging Visas\n              ")])])],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/resident-return-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Resident Return Visas\n              ")])])],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("nuxt-link",{attrs:{to:"/immigration/other-visas"}},[o("h5",{staticClass:"pa-2 mb-2 text-subtitle-1 font-weight-bold text-uppercase"},[t._v("\n                Other Visas\n              ")])]),t._v(" "),[o("nuxt-link",{attrs:{to:"/immigration/other-visas"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Selling a Property\n                  ")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/immigration/other-visas/medical-treatment-visa-subclass-602"}},[o("p",{staticClass:"ml-5 text-subtitle-2 font-weight-bold smallLine"},[t._v("\n                    Medical Treatment Visa Subclass 602\n                  ")])])]],2)],1)],1)]),t._v(" "),o("v-menu",{attrs:{bottom:"","min-width":"100vw","nudge-bottom":"2","open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("nuxt-link",{attrs:{to:"/public-notary"}},[o("div",t._g(t._b({staticClass:"pa-6 menutitle font-weight-bold"},"div",l,!1),n),[o("h4",[t._v(" PUBLIC NOTARY ")])])])]}}])}),t._v(" "),o("v-menu",{attrs:{bottom:"","min-width":"100vw","nudge-bottom":"2","open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("nuxt-link",{attrs:{to:"/about-us"}},[o("div",t._g(t._b({staticClass:"pa-6 menutitle font-weight-bold"},"div",l,!1),n),[o("h4",[t._v(" ABOUT US ")])])])]}}])}),t._v(" "),o("v-menu",{attrs:{bottom:"","min-width":"100vw","nudge-bottom":"2","open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("nuxt-link",{attrs:{to:"/contact-us"}},[o("div",t._g(t._b({staticClass:"pa-6 menutitle font-weight-bold"},"div",l,!1),n),[o("h4",[t._v(" CONTACT US ")])])])]}}])}),t._v(" "),o("v-menu",{attrs:{bottom:"","min-width":"100vw","nudge-bottom":"2","open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("nuxt-link",{attrs:{to:"/client-section"}},[o("div",t._g(t._b({staticClass:"pa-6 menutitle font-weight-bold"},"div",l,!1),n),[o("h4",[t._v(" CLIENT SECTION ")])])])]}}])})],1),t._v(" "),o("v-spacer"),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[o("v-img",{staticStyle:{"z-index":"10"},attrs:{alt:"nadeem lawyers logo",src:n(237),"max-height":"70","max-width":"170"}})],1)],1),t._v(" "),o("v-main",[o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("nuxt")],1)],1),t._v(" "),o("v-footer",{staticClass:"white--text",attrs:{app:"",height:"35vh","max-height":"35vh",color:"secondary"}},[t.isHomePge?o("v-btn",{staticClass:"pa-2 border-pill",staticStyle:{position:"fixed",bottom:"5vh",right:"5vh"},attrs:{outlined:"",rounded:"",text:"",height:"5vh",width:"15vh"},on:{click:function(e){return t.$vuetify.goTo(0,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},[o("v-icon",{attrs:{size:"36px",color:"primary"}},[t._v("\n    mdi-arrow-up-drop-circle\n  ")]),t._v(" "),o("span",{staticClass:"text-caption primary--text"},[t._v(" Back to top")])],1):t._e(),t._v(" "),o("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n    mdi-map\n  ")]),t._v("\n    Suite 3, Level 1, 186-190 Church Street Parramatta, NSW 2150\n    "),o("v-spacer"),t._v(" "),o("span",[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)}),[],!1,null,"e64aba90",null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:m.a,VAppBarNavIcon:d.a,VBtn:f.a,VCol:h.a,VContainer:_.a,VFooter:x.a,VIcon:w.a,VImg:k.a,VMain:y.a,VMenu:C.a,VNavigationDrawer:V.a,VRow:S.a,VSpacer:L.a,VSystemBar:M.a,VTreeview:I.a})},27:function(t,e,n){t.exports=n.p+"fonts/NotoSans-Bold.66ab297.ttf"},277:function(t,e,n){n(278),t.exports=n(279)},28:function(t,e,n){t.exports=n.p+"fonts/Ubuntu-Regular.fbdecfc.ttf"},303:function(t,e,n){"use strict";n(235)},304:function(t,e,n){var o=n(21)(!1);o.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=o},309:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("70f48cac",content,!0,{sourceMap:!1})},310:function(t,e,n){var o=n(21),l=n(26),r=n(27),c=n(28),v=o(!1),m=l(r),d=l(c);v.push([t.i,'@font-face{font-family:"heading";src:url('+m+') format("truetype")}@font-face{font-family:"regular";src:url('+d+') format("truetype")}p{line-height:2.1}.sidefixed{position:fixed;top:25vh;right:5vh}',""]),t.exports=v},311:function(t,e,n){"use strict";n(238)},312:function(t,e,n){var o=n(21),l=n(26),r=n(27),c=n(28),v=o(!1),m=l(r),d=l(c);v.push([t.i,'@font-face{font-family:"heading";src:url('+m+') format("truetype")}@font-face{font-family:"regular";src:url('+d+') format("truetype")}.appbar[data-v-40baa661]{background:linear-gradient(90deg,#90d1f7,transparent 70%,transparent)}.menuitem[data-v-40baa661]{background:transparent}.menuitem h3[data-v-40baa661]:hover{color:#fff}a[data-v-40baa661]{text-decoration:none;color:#f0f8ff}a[data-v-40baa661]:hover{color:#90d1f7}',""]),t.exports=v},379:function(t,e,n){"use strict";n(249)},380:function(t,e,n){var o=n(21),l=n(26),r=n(27),c=n(28),v=o(!1),m=l(r),d=l(c);v.push([t.i,'@font-face{font-family:"heading";src:url('+m+') format("truetype")}@font-face{font-family:"regular";src:url('+d+') format("truetype")}.appbar[data-v-e64aba90]{background:linear-gradient(90deg,#90d1f7,transparent 70%,transparent)}.menuitem[data-v-e64aba90]{background:transparent}a[data-v-e64aba90]{text-decoration:none;color:#f0f8ff}a[data-v-e64aba90]:hover{color:#90d1f7}.smallLine[data-v-e64aba90]{line-height:1.5}.menutitle[data-v-e64aba90]:hover{background-color:#258dab;color:#fff}.menutitle[data-v-e64aba90]{color:#033441}',""]),t.exports=v},84:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},l=(n(303),n(77)),r=n(93),c=n.n(r),v=n(402),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[277,32,3,33]]]);