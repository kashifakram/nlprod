(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5,6],{480:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return h}));var n=r(483),o=r(0),l=Object(o.j)("v-card__actions"),c=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),h=Object(o.j)("v-card__title");n.a},481:function(t,e,r){var content=r(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("3ab46b16",content,!0,{sourceMap:!1})},483:function(t,e,r){"use strict";r(14),r(15),r(16),r(6),r(20),r(13),r(21);var n=r(2),o=(r(27),r(300),r(301),r(490),r(222)),l=r(487),c=r(173),d=r(12);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},484:function(t,e,r){"use strict";var n=r(2),o=r(1);var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.a.extend({name:"proxyable",model:{prop:t,event:e},props:Object(n.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=l},485:function(t,e,r){"use strict";r(481)},486:function(t,e,r){var n=r(25)(!1);n.push([t.i,".txt[data-v-57efcb4b]{text-transform:none}",""]),t.exports=n},487:function(t,e,r){"use strict";r(27);var n=r(1),o=r(489);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},488:function(t,e,r){"use strict";r.r(e);var n={props:["position","text"]},o=(r(485),r(80)),l=r(100),c=r.n(l),d=r(229),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{staticClass:"text-subtitle-1 mb-1 pa-2 txt",on:{click:function(e){return t.$vuetify.goTo(t.position,{easing:"easeInOutCubic",duration:1e3,offset:0})}}},[r("small",[t._v(t._s(t.text))])])}),[],!1,null,"57efcb4b",null);e.default=component.exports;c()(component,{VBtn:d.a})},489:function(t,e,r){"use strict";r(14),r(15),r(16),r(6),r(20),r(13),r(21);var n=r(2),o=(r(27),r(115),r(492),r(223)),l=r(139),c=r(52),d=r(101),h=r(484),f=r(34),v=r(0),m=r(12);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(m.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,f.a).extend({name:"v-progress-linear",directives:{intersect:l.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v.h)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v.h)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(v.h)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(v.h)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.b:o.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(v.h)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(v.o)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(v.h)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=y},490:function(t,e,r){var content=r(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("e23b7040",content,!0,{sourceMap:!1})},491:function(t,e,r){var n=r(25),o=r(28),l=r(29),c=r(30),d=n(!1),h=o(l),f=o(c);d.push([t.i,'@font-face{font-family:"heading";src:url('+h+') format("truetype")}@font-face{font-family:"regular";src:url('+f+') format("truetype")}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=d},492:function(t,e,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("cf87dc84",content,!0,{sourceMap:!1})},493:function(t,e,r){var n=r(25),o=r(28),l=r(29),c=r(30),d=n(!1),h=o(l),f=o(c);d.push([t.i,'@font-face{font-family:"heading";src:url('+h+') format("truetype")}@font-face{font-family:"regular";src:url('+f+') format("truetype")}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}',""]),t.exports=d},494:function(t,e,r){"use strict";r.r(e);r(6),r(94);var n={props:["cat"],computed:{page:function(){return this.cat.toString()},mobile:function(){return this.$vuetify.breakpoint.md||this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.xl}}},o=r(80),l=r(100),c=r.n(l),d=r(469),h=r(472),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.mobile?r("v-col",{staticClass:"pa-2 full_height sidefixed",attrs:{cols:"12",sm:"10",md:"2"}},[r("h3",{staticClass:"text-center text-subtitle-1 font-weight-bold primary--text mb-3"},[t._v("\n    On this page\n  ")]),t._v(" "),r("v-row",{staticClass:"flex-column pa-1",attrs:{"align-content":"center",justify:"space-between",align:"space-between"}},["family"==t.page?[r("BaseGoToButton",{attrs:{text:"Divorce and Separation",position:"#divorce"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Parenting",position:"#parenting"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Financial Agreements",position:"#financial"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Property and Financial Disputes",position:"#disputes"}})]:t._e(),t._v(" "),"business"==t.page?[r("BaseGoToButton",{attrs:{text:"Selling a Property",position:"#selling"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Transferring a Property in NSW",position:"#transfer"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Option Agreements",position:"#options"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Retail and Commercial Leasing",position:"#retail_commercial"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Retail Leases",position:"#retail"}})]:t._e(),t._v(" "),"contact"==t.page?[r("BaseGoToButton",{attrs:{text:"Find us on google map",position:"#map"}})]:t._e(),t._v(" "),"notary"==t.page?[r("BaseGoToButton",{attrs:{text:"Notary Fees",position:"#fee"}})]:t._e(),t._v(" "),"client"==t.page?[r("BaseGoToButton",{attrs:{text:"Login Client Section",position:"#login"}})]:t._e(),t._v(" "),"wills"==t.page?[r("BaseGoToButton",{attrs:{text:"Wills Disputes & Estate Planning",position:"#disputes"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Succession & Estate Planning ",position:"#disputes"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Drafting a Will",position:"#draft"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Power of Attorney",position:"#poa"}})]:t._e(),t._v(" "),"about"==t.page?[r("BaseGoToButton",{attrs:{text:"Our Promise",position:"#promise"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Our Approach",position:"#approach"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Our Team",position:"#team"}})]:t._e(),t._v(" "),"evident"==t.page?[r("BaseGoToButton",{attrs:{text:"Temporary Residence",position:"#temp"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Direct Entry",position:"#direct"}}),t._v(" "),r("BaseGoToButton",{attrs:{text:"Scenarios",position:"#s1"}})]:t._e()],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseGoToButton:r(488).default}),c()(component,{VCol:d.a,VRow:h.a})},535:function(t,e,r){t.exports=r.p+"img/lawconnect-login-button.6e0f273.png"},611:function(t,e,r){"use strict";r.r(e);var n={layout:function(t){return"default"},data:function(){return{length:3,window:0,fees:[{mainTitle:"Affidavits, Affirmations, Declarations",subCats:[{subtitle:"Administering an oath or affirmation or taking a declaration and signing jurat",fee:"$125.00",fee_gst:"$137.50"},{subtitle:"Each additional deponent etc at the same time",fee:"$65.00",fee_gst:"$71.50"}]},{mainTitle:"Deeds or other Unsworn Documents",subCats:[{subtitle:"Witnessing and attesting execution or signing of a deed or other document",fee:"$125.00",fee_gst:"$137.50"},{subtitle:"Each additional individual etc at the same time",fee:"$65.00",fee_gst:"$71.50"}]},{mainTitle:"Verification of copy documents",subCats:[{subtitle:"Examining copies (photographic or otherwise) with original for verification - per 6 minute time unit, or part thereof",fee:"$60.00",fee_gst:"$66.50"},{subtitle:"Notarial Certificate verifying copy document  *",fee:"$200.00",fee_gst:"$220.50"}]},{mainTitle:"Notarial Certificates",subCats:[{subtitle:"Examining copies (photographic or otherwise) with original for verification - per 6 minute time unit, or part thereof",fee:"$60.00",fee_gst:"$66.50"},{subtitle:"Notarial Certificate verifying copy document  *",fee:"$200.00",fee_gst:"$220.50"}]}]}},mounted:function(){this.scroll()},methods:{scroll:function(){var t=this.$nuxt.$route.query.cat;t&&this.$vuetify.goTo("#".concat(t),{easing:"easeInOutCubic",duration:1e3,offset:0})}}},o=r(80),l=r(100),c=r.n(l),d=r(483),h=r(480),f=r(469),v=r(171),m=r(472),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"flex-column",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0 mx-0",attrs:{cols:"9"}},[n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",staticStyle:{background:"transparent"},attrs:{flat:""}},[n("v-card-title",{staticClass:"text-h4 primary--text my-8"},[t._v("\n        Client Section\n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v("\n          LawConnect is the secure cloud based document management system that our firm uses that enables you to access your legal documents. You will find that the documents we share with you are organised logically into each matter we are handling for you.\n        ")]),t._v(" "),n("p",[t._v("You can also comment on a document by clicking the Comment icon and highlighting the text you wish to comment on. This is easier than using email to comment. LawConnect will automatically send us an email notification when you have finished commenting.")]),t._v(" "),n("p",{staticClass:"font-weight-bold"},[t._v("\n          We will reply in the document or may reply by email depending on circumstances.\n        ")]),t._v(" "),n("p",[t._v("LawConnect enables us to share documents with you without exposing them to the risks of email, keeping them safe at all times and making them really easy for you to find whenever you want to view them.")]),t._v(" "),n("p",[t._v("You are also able to upload your own documents (e.g. a copy of your Drivers Licence or Passport perhaps) into LawConnect for sharing with us or safe-keeping.")]),t._v(" "),n("p",[t._v("Our firm provides LawConnect for you at no charge and you can access LawConnect from anywhere in the world with an internet connection.")]),t._v(" "),n("h5")])],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center flex-column pa-0 px-8",attrs:{id:"login",flat:""}},[n("v-card-title",{staticClass:"text-subtitle-1 font-weight-bold mb-4"},[t._v("\n        If you already have a LawConnect instance you can login here.\n      ")]),t._v(" "),n("a",{staticClass:"text-center tablink",attrs:{href:"https://lawconnect.com.au/login",target:"_blank",rel:"noopener"}},[n("v-img",{attrs:{src:r(535),alt:"lawconnect button","data-no-retina":"",width:"285",height:"140"}})],1),t._v(" "),n("v-card-text",[n("p",[t._v("\n          If you are a client of ours and would like us to share documents with you on LawConnect, please contact the lawyer dealing with your matter or "),n("nuxt-link",{staticClass:"tablink",attrs:{to:"/contact-us"}},[n("span",{staticClass:"tablink"},[t._v("click here to contact us.")])])],1),t._v(" "),n("p",[t._v("If you have questions about how to use LawConnect, please see this guide: "),n("a",{attrs:{href:"https://community.leap.com.au/s/article/Getting-started-with-LawConnect",target:"_blank",rel:"noopener"}},[n("span",{staticClass:"tablink"},[t._v("Getting Started with LawConnect.")])])])])],1)],1),t._v(" "),n("CoreFixedScroll",{attrs:{cat:"client"}})],1)}),[],!1,null,"3bd51cb0",null);e.default=component.exports;c()(component,{CoreFixedScroll:r(494).default}),c()(component,{VCard:d.a,VCardText:h.b,VCardTitle:h.c,VCol:f.a,VImg:v.a,VRow:m.a})}}]);