(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("56b15182",content,!0,{sourceMap:!1})},213:function(t,e,n){"use strict";var r={mounted:function(){this.$store.dispatch("likes/getLikes")}},o=(n(280),n(34)),l=n(35),c=n.n(l),d=n(354),f=n(358),v=n(355),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navbar"),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{Navbar:n(333).default,Footer:n(335).default}),c()(component,{VApp:d.a,VContainer:f.a,VMain:v.a})},220:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(70),n(146),{data:function(){return{searchQuery:"",articles:[],isFocused:!1}},watch:{searchQuery:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return e.articles=[],n.abrupt("return");case 3:return n.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=n.sent;case 6:case"end":return n.stop()}}),n)})))()}}}),l=n(34),c=n(35),d=n.n(c),f=n(149),v=n(101),m=n(151),h=n(100),x=n(349),_=n(340),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mr-n1"},[n("v-menu",{attrs:{"offset-y":"",bottom:"","nudge-bottom":"0","open-on-click":!1,"close-on-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles",solo:"","background-color":"grey lighten-4",flat:"",dense:"","prepend-inner-icon":"mdi-text-box-search-outline","hide-details":"true"},on:{focus:function(e){t.isFocused=!0},blur:function(e){t.isFocused=!1}},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}},r))]}}]),model:{value:t.isFocused,callback:function(e){t.isFocused=e},expression:"isFocused"}},[t._v(" "),t.articles.length?n("v-list",{attrs:{dense:""}},[n("v-list-item-group",t._l(t.articles,(function(article){return n("v-list-item",{key:article.slug,on:{mousedown:function(e){return t.$router.push({name:"blog-slug",params:{slug:article.slug}})}}},[n("v-list-item-title",{staticClass:"text-body-2"},[t._v("\n              "+t._s(article.title)+"\n            ")])],1)})),1)],1):n("v-list",{attrs:{dense:"",disabled:""}},[n("v-list-item",[n("v-list-item-title",{staticClass:"grey--text text-body-2"},[t._v("No Articles Found")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VList:f.a,VListItem:v.a,VListItemGroup:m.a,VListItemTitle:h.a,VMenu:x.a,VTextField:_.a})},221:function(t,e,n){n(222),t.exports=n(223)},280:function(t,e,n){"use strict";n(193)},281:function(t,e,n){var r=n(11)(!1);r.push([t.i,"html{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}",""]),t.exports=r},326:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return c}));var r=n(29),o=(n(44),n(27),function(){return{likes:null}}),l={updateLikes:function(t,e){t.likes=e}},c={getLikes:function(t){(0,t.commit)("updateLikes",JSON.parse(localStorage.getItem("likes")))},likeArticle:function(t,e){var n=t.commit,o=t.state,l=e.articleSlug,c=Object(r.a)(o.likes);if(console.log(c),null==c)c=[l];else if(c.includes(l)){var d=c.indexOf(l);d>-1&&c.splice(d,1)}else c.push(l);localStorage.setItem("likes",JSON.stringify(c)),n("updateLikes",c)}}},333:function(t,e,n){"use strict";n.r(e);var r={},o=n(34),l=n(35),c=n.n(l),d=n(356),f=n(351),v=n(352),m=n(350),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"white",attrs:{flat:""}},[n("NavMenu"),t._v(" "),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("nuxt-link",{staticClass:"mx-3 text-decoration-none",attrs:{to:"/"}},[n("div",{staticClass:"font-weight-bold black--text text-overline",class:{"text-decoration-underline":r}},[t._v("\n                    Health Style\n                ")])])]}}])}),t._v(" "),n("v-spacer"),t._v(" "),n("AppSearchInput")],1),t._v(" "),n("v-divider")],1)}),[],!1,null,"77684929",null);e.default=component.exports;c()(component,{NavMenu:n(334).default,AppSearchInput:n(220).default}),c()(component,{VAppBar:d.a,VDivider:f.a,VHover:v.a,VSpacer:m.a})},334:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{links:[{name:"Home",route:"/",icon:"home"},{name:"About",route:"/about",icon:"text-box"},{name:"Contact",route:"/contact",icon:"forum"}]}}},o=n(34),l=n(35),c=n.n(l),d=n(357),f=n(348),v=n(148),m=n(349),h=n(350),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":"",bottom:"","nudge-bottom":9},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{depressed:"",fab:"",small:"",color:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("\n                    mdi-menu\n                ")])],1)]}}])},[t._v(" "),n("v-card",{staticClass:"pa-3 pb-1 d-flex flex-column",attrs:{flat:"",width:"200",color:"secondary"}},t._l(t.links,(function(link){return n("v-btn",{key:link.name,staticClass:"mb-2",attrs:{to:link.route,small:"",depressed:"",color:""}},[t._v("\n\n            "+t._s(link.name)+"\n\n            "),n("v-spacer"),t._v(" "),n("v-icon",{attrs:{right:"",dense:""}},[t._v("\n                mdi-"+t._s(link.icon)+"\n            ")])],1)})),1)],1)}),[],!1,null,"5e9464e0",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VIcon:v.a,VMenu:m.a,VSpacer:h.a})},335:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{links:[{text:"Home",link:"/"},{text:"About",link:"/about"},{text:"Contact",link:"/contact"}]}}},o=n(34),l=n(35),c=n.n(l),d=n(353),f=n(352),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"d-flex pa-3 justify-center",attrs:{color:"grey lighten-4"}},t._l(t.links,(function(link,e){return n("span",{key:link.text},[n("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:link.link}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("span",{staticClass:"text-body-2 grey--text text--darken-1",class:{"text-decoration-underline":r}},[t._v(t._s(link.text))])]}}],null,!0)})],1),t._v(" "),e<t.links.length-1?n("span",{staticClass:"grey--text text--lighten-2"},[t._v("\n             |  \n        ")]):t._e()],1)})),0)}),[],!1,null,"11dabec4",null);e.default=component.exports;c()(component,{VFooter:d.a,VHover:f.a})},68:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An Error Occurred",imageSrc:"error.jpg"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=n(34),l=n(35),c=n.n(l),d=n(357),f=n(348),v=n(148),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"d-flex flex-column justify-center align-center",attrs:{flat:"",height:"calc(80vh - 48px)"}},[n("div",{staticClass:"text-body-1 font-weight-medium"},[t._v("\n            "+t._s(404===this.error.statusCode?this.pageNotFound:this.otherError)+"\n        ")]),t._v(" "),n("v-btn",{staticClass:"mt-3 font-weight-bold",attrs:{depressed:"",to:"/",color:"grey lighten-3",small:""}},[t._v("\n    \n            Home\n            \n            "),n("v-icon",{attrs:{right:"",small:""}},[t._v("\n                mdi-home\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VIcon:v.a})}},[[221,30,3,31]]]);