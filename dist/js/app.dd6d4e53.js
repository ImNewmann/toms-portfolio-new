(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02c5":function(t,e,n){},"0667":function(t,e,n){},1:function(t,e){},"1af4":function(t,e,n){"use strict";var a=n("99a0"),s=n.n(a);s.a},"1cb7":function(t,e,n){},2120:function(t,e,n){"use strict";var a=n("5d30"),s=n.n(a);s.a},2227:function(t,e,n){},3325:function(t,e,n){"use strict";var a=n("3cdf"),s=n.n(a);s.a},"3cdf":function(t,e,n){},"4f76":function(t,e,n){},"53cb":function(t,e,n){"use strict";var a=n("02c5"),s=n.n(a);s.a},"565a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.posts.length?n("Navbar",{attrs:{posts:t.posts}}):t._e(),n("transition",{attrs:{name:"page",appear:""}},[t.posts.length?n("router-view",{attrs:{posts:t.posts}}):t._e()],1)],1)},r=[],o=n("5530"),i=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("div",{staticClass:"nav__inner"},[n("router-link",{staticClass:"nav__logo",attrs:{to:"/"}},[n("Logo")],1),n("HamburgerIcon",{attrs:{"menu-open":t.showMenu},on:{iconClicked:t.handleMenu}}),n("CloseIcon",{attrs:{"menu-open":t.showMenu},on:{iconClicked:t.handleMenu}}),n("NavOverlay",{attrs:{open:t.showMenu,"promo-posts":t.promoPosts,"narrative-posts":t.narrativePosts},on:{linkClicked:t.handleMenu}})],1)])},l=[],u=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"icon",appear:""}},[t.menuOpen?t._e():n("div",{staticClass:"hamburger-icon",on:{click:t.iconClicked}},[n("span",{staticClass:"hamburger-icon__line"}),n("span",{staticClass:"hamburger-icon__line"}),n("span",{staticClass:"hamburger-icon__line"})])])}),p=[],d={name:"HamburgerIcon",props:{menuOpen:{type:Boolean,default:!1}},methods:{iconClicked:function(){this.$emit("iconClicked",!0)}}},f=d,v=(n("53cb"),n("2877")),m=Object(v["a"])(f,u,p,!1,null,null,null),_=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"close-icon",appear:""}},[t.menuOpen?n("div",{staticClass:"close-icon",on:{click:t.iconClicked}},[n("span",{staticClass:"close-icon__line"}),n("span",{staticClass:"close-icon__line"})]):t._e()])},b=[],g={name:"CloseIcon",props:{menuOpen:{type:Boolean,default:!1}},methods:{iconClicked:function(){this.$emit("iconClicked",!1)}}},w=g,y=(n("6d37"),Object(v["a"])(w,h,b,!1,null,null,null)),C=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"nav-overlay"}},[t.open?n("div",{staticClass:"nav-overlay"},[n("div",{staticClass:"nav-overlay__dropdown"},[n("div",{staticClass:"nav-overlay__dropdown-label",on:{click:function(e){t.showNarrative=!t.showNarrative}}},[t._v(" Narrative ")]),n("div",{staticClass:"nav-overlay__dropdown-links"},[n("ul",t._l(t.narrativePosts,(function(e,a){return n("li",{key:a,on:{click:t.linkClicked}},[n("router-link",{attrs:{to:"/"+e.slug}},[t._v(" "+t._s(e.title.rendered)+" ")])],1)})),0)])]),n("div",{staticClass:"nav-overlay__dropdown"},[n("div",{staticClass:"nav-overlay__dropdown-label",on:{click:function(e){t.showPromo=!t.showPromo}}},[t._v(" Promo ")]),n("div",{staticClass:"nav-overlay__dropdown-links"},[n("ul",t._l(t.promoPosts,(function(e,a){return n("li",{key:a,on:{click:t.linkClicked}},[n("router-link",{attrs:{to:"/"+e.slug}},[t._v(" "+t._s(e.title.rendered)+" ")])],1)})),0)])]),n("div",{staticClass:"nav-overlay__dropdown"},[n("div",{staticClass:"nav-overlay__dropdown-label",on:{click:t.linkClicked}},[n("router-link",{attrs:{to:"/about-me"}},[t._v(" Info ")])],1)])]):t._e()])},x=[],O={name:"NavOverlay",props:{open:{type:Boolean,default:!1},narrativePosts:{type:Array,required:!0},promoPosts:{type:Array,required:!0}},methods:{linkClicked:function(){this.$emit("linkClicked",!1)}}},P=O,j=(n("2120"),Object(v["a"])(P,k,x,!1,null,null,null)),T=j.exports,S=n("e8f2"),$=n.n(S),M={name:"Navbar",props:{posts:{type:Array,required:!0}},components:{HamburgerIcon:_,CloseIcon:C,NavOverlay:T,Logo:$.a},data:function(){return{promoPosts:[],narrativePosts:[],showMenu:!1}},created:function(){this.promoPosts=this.posts.filter((function(t){return 2===t.categories[0]})),this.narrativePosts=this.posts.filter((function(t){return 3===t.categories[0]}))},methods:{handleMenu:function(t){this.showMenu=t}}},E=M,z=(n("5dfb"),Object(v["a"])(E,c,l,!1,null,null,null)),A=z.exports,N=(n("c1c3"),{name:"App",components:{Navbar:A},computed:Object(o["a"])({},Object(i["b"])({posts:function(t){return t.posts}})),created:function(){this.$store.dispatch("loadPosts")}}),q=N,B=(n("e65e"),Object(v["a"])(q,s,r,!1,null,"35dc3864",null)),I=B.exports,L=n("28dd"),R=(n("d3b7"),n("96cf"),n("1da1")),D="http://admin.bnewman.co.uk/wp-json/wp/v2";a["default"].use(i["a"]);var H=new i["a"].Store({state:{posts:[]},actions:{loadPosts:function(t){return Object(R["a"])(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("".concat(D,"/posts"));case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,n("SET_POSTS",s);case 8:case"end":return e.stop()}}),e)})))()}},mutations:{SET_POSTS:function(t,e){t.posts=e}}}),V=(n("a15b"),n("fb6a"),n("ac1f"),n("1276"),n("8c4f")),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"posts"},t._l(t.posts,(function(t,e){return n("PostThumbnail",{key:e,attrs:{postData:t}})})),1)},J=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-thumbnail"},[n("router-link",{attrs:{to:"/"+t.postData.slug}},[n("img",{attrs:{src:t.postData.acf.featured_image.url,alt:t.postData.acf.featured_image}})])],1)},W=[],G={name:"PostThumbnail",props:{postData:{type:Object,required:!0}}},K=G,Q=(n("3325"),Object(v["a"])(K,U,W,!1,null,null,null)),X=Q.exports,Y={name:"FrontPage",props:{posts:{type:Array,required:!0}},components:{PostThumbnail:X}},Z=Y,tt=(n("f2ed"),Object(v["a"])(Z,F,J,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"post-page"},[n("h1",{staticClass:"post-page__title"},[t._v(t._s(t.post.title.rendered))]),n("Video",{attrs:{html:t.post.acf.video}}),n("div",{staticClass:"post-details"},[n("Carousel",{attrs:{images:t.post.acf.carousel_images}}),n("div",{staticClass:"post-details__text"},[n("p",{staticClass:"post-details__text-title"},[t._v(t._s(t.post.acf.title))]),n("div",{staticClass:"post-details__text-credits"},[n("p",[t._v(t._s(t.post.acf.director))]),n("p",[t._v(t._s(t.post.acf.editor))]),n("p",[t._v(t._s(t.post.acf.producer))])]),n("p",{staticClass:"post-details__text-title"},[n("i",[t._v(t._s(t.post.acf.description))])])])],1)],1)},at=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video",domProps:{innerHTML:t._s(t.html)}})},rt=[],ot={name:"Video",props:{html:{type:String,required:!0}}},it=ot,ct=(n("b835"),Object(v["a"])(it,st,rt,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel"},[n("swiper",{ref:"swiperTop",staticClass:"swiper gallery-top",attrs:{options:t.swiperOptionTop}},[t._l(t.images,(function(t,e){return n("swiper-slide",{key:e,staticClass:"slide-1",style:"background-image: url('"+t.image.url+"');"})})),n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}),n("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"})],2),n("swiper",{ref:"swiperThumbs",staticClass:"swiper gallery-thumbs",attrs:{options:t.swiperOptionThumbs}},t._l(t.images,(function(t,e){return n("swiper-slide",{key:e,staticClass:"slide-1",style:"background-image: url('"+t.image.url+"');"})})),1)],1)},pt=[],dt=n("7212"),ft=(n("a7a3"),{name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",components:{Swiper:dt["Swiper"],SwiperSlide:dt["SwiperSlide"]},props:{images:{type:Array,required:!0}},data:function(){return{swiperOptionTop:{loop:!0,loopedSlides:5,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{loop:!0,loopedSlides:5,spaceBetween:10,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0}}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.swiperTop.$swiper,n=t.$refs.swiperThumbs.$swiper;e.controller.control=n,n.controller.control=e}))}}),vt=ft,mt=(n("8cf1"),Object(v["a"])(vt,ut,pt,!1,null,null,null)),_t=mt.exports,ht={props:{posts:{type:Array,required:!0}},data:function(){return{post:[]}},components:{Video:lt,Carousel:_t},created:function(){var t=this.$router.currentRoute.params.postSlug;this.post=this.posts.filter((function(e){return e.slug===t}))[0]}},bt=ht,gt=(n("c2e5"),Object(v["a"])(bt,nt,at,!1,null,null,null)),wt=gt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page.length?n("main",{staticClass:"about-page"},[n("h1",{staticClass:"about-page__title"},[t._v("TOM NEWMAN")]),n("div",{staticClass:"about-page__image"},[n("img",{attrs:{src:t.page[0].acf.image.url,alt:t.page[0].acf.image.alt}})]),t._l(t.page[0].acf.title_and_text,(function(t,e){return n("TitleAndText",{key:e,attrs:{title:t.title,text:t.text}})}))],2):t._e()},Ct=[],kt=(n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-and-text"},[n("h2",{staticClass:"title"},[t._v(" "+t._s(t.title))]),n("div",{staticClass:"text",domProps:{innerHTML:t._s(t.text)}})])}),xt=[],Ot={name:"TitleAndText",props:{title:{type:String,default:null},text:{type:String,default:null}}},Pt=Ot,jt=(n("c550"),Object(v["a"])(Pt,kt,xt,!1,null,null,null)),Tt=jt.exports,St={components:{TitleAndText:Tt},data:function(){return{page:[]}},created:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$router.currentRoute.path.slice(1),e.next=3,fetch("".concat(D,"/pages?slug=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,t.page=s;case 8:case"end":return e.stop()}}),e)})))()}},$t=St,Mt=(n("1af4"),Object(v["a"])($t,yt,Ct,!1,null,null,null)),Et=Mt.exports;a["default"].use(V["a"]);var zt=new V["a"]({routes:[{path:"/",name:"FrontPage",component:et},{path:"/about-me",name:"Contact",component:Et},{path:"/:postSlug",name:"Post",component:wt}],mode:"history",base:"",scrollBehavior:function(t,e,n){return n||{x:0,y:0}}});zt.afterEach((function(t){var e="/"===t.path?"Creative Director":t.path;"/"!==t.path?(document.body.classList.add("page"),e=e.slice(1).charAt(0).toUpperCase()+e.slice(2).split("-").join(" ")):document.body.classList.remove("page"),document.title="Tom Newman - ".concat(e)}));var At=zt;a["default"].use(L["a"]),a["default"].http.options.root="http://localhost:8888/wp-json/wp/v2/",a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(I)},store:H,router:At}).$mount("#app")},"5d30":function(t,e,n){},"5dfb":function(t,e,n){"use strict";var a=n("4f76"),s=n.n(a);s.a},"6d37":function(t,e,n){"use strict";var a=n("0667"),s=n.n(a);s.a},"8cf1":function(t,e,n){"use strict";var a=n("ba52"),s=n.n(a);s.a},"96bc":function(t,e,n){},"99a0":function(t,e,n){},b835:function(t,e,n){"use strict";var a=n("2227"),s=n.n(a);s.a},ba52:function(t,e,n){},c1c3:function(t,e,n){},c2d3:function(t,e,n){},c2e5:function(t,e,n){"use strict";var a=n("565a"),s=n.n(a);s.a},c550:function(t,e,n){"use strict";var a=n("1cb7"),s=n.n(a);s.a},e65e:function(t,e,n){"use strict";var a=n("96bc"),s=n.n(a);s.a},e8f2:function(t,e,n){n("99af");var a=n("ded3"),s=n("4082");t.exports={functional:!0,render:function(t,e){var n=e._c,r=(e._v,e.data),o=e.children,i=void 0===o?[]:o,c=r.class,l=r.staticClass,u=r.style,p=r.staticStyle,d=r.attrs,f=void 0===d?{}:d,v=s(r,["class","staticClass","style","staticStyle","attrs"]);return n("svg",a({class:[c,l],style:[{width:"100%"},u,p],attrs:Object.assign({"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 768 170.25",style:"width:100%"},f)},v),i.concat([n("path",{staticClass:"main-logo_svg__cls-2",attrs:{d:"M38.24 76.15c-5.82 1-11.61 2.53-17.47 2.91-8.46.55-15.38-3.12-20.77-9.62v-3.73c5.79-2 11.59-3.27 17.68-1a6.17 6.17 0 003.6-.28c20.53-6.28 39.31-15.89 55.08-30.48 6.21-5.75 11-13 16.56-19.48a111.52 111.52 0 018.8-9.13 7.39 7.39 0 019.61 0c2.44 2.27 2.75 5.46.22 8.68-7.66 9.77-15.09 19.75-23.41 28.93C83.19 48.37 76.7 52.42 71 57.21a27.43 27.43 0 00-4.15 4.59c-1.57 2.08-3 4.28-4.34 6.49-6.85 11.07-14.2 21.88-20.36 33.32-8.29 15.41-15.74 31.28-23.36 47-1.6 3.32-2.43 7-3.49 10.58-.92 3.08-5.26 6.16-8.38 5.71a2.1 2.1 0 01-1.48-.82c-1.87-4.53-4.25-8.79-2.56-14.2 6-19.11 15.56-36.51 24.93-54 3.51-6.56 7-13.14 10.45-19.71a.85.85 0 00.25-.13v-.19zM768 145.61c-1 4.79-2.29 9.55-2.85 14.4-.32 2.79-1.28 3.46-3.9 3.58-7.64.36-9.21-1.83-10.21-5.27-.6-2.06-.07-4.43-.16-6.66-.1-2.86-.31-5.72-.47-8.59a59.47 59.47 0 00-7.71 1.74c-10.68 3.94-20.84 8.86-29.88 15.91-3.26 2.55-8.56 1.88-12.11-2.13-3-3.36-5-7.59-7.27-11.55-.45-.8-.18-2.17.09-3.19 2.08-7.66 4.1-15.34 6.46-22.91.68-2.15 2-5.06 3.8-5.69 3.28-1.17 5.72 1.39 7.59 4.09a12.24 12.24 0 012 10.9c-1.29 4.61-2 9.36-3.22 14.9 5.44-3.22 10-6.27 14.93-8.77 7.75-4 15.46-8.2 23.61-11.11 8.66-3.09 14.33-2.18 19.3 4.67zM316.62 94c-1.28 5.25-2.49 10.51-3.87 15.73-1.76 6.69-3.78 13.32-5.45 20-.56 2.24-.23 4.68-.58 7-.69 4.5-1 9.17-2.48 13.41-3.29 9.28-5.54 8.52-13.46 7.19a7.78 7.78 0 01-3.77-1.51c-.88-.78-1.84-2.43-1.59-3.38 7-26 14.22-51.87 21.22-77.83 3.65-13.52 7-27.12 10.35-40.7a18.29 18.29 0 00.25-4.45c0-6.17 2.18-8.62 8.4-9.31s10.72 1.81 11.07 6.18a44.17 44.17 0 010 7.09c-.37 4.42-1.1 8.82-1.39 13.24-.4 6.3-.48 12.63-.8 18.94q-1.08 21.31-2.29 42.63c-.15 2.59-.54 5.17-.83 7.76l1.35.23c.84-3.12 1.7-6.24 2.52-9.36 7.34-27.8 14.19-55.74 22.34-83.3 2.22-7.53 8.29-13.95 12.74-20.78 1.5-2.31 3.81-2.75 6.22-1.27 2.59 1.59 4.64 3.57 3.46 7-1.83 5.28-3.67 10.55-5.66 15.78s-4.43 10.54-6.3 15.93c-1.12 3.24-1 7-2.35 10-5.31 12.05-6.13 25.15-9.42 37.67-5.48 20.83-10.53 41.78-15.89 62.65a52.36 52.36 0 01-3.46 8.63c-2.49 5.37-6.62 7-12.22 5.14a16.41 16.41 0 01-11.11-16.08c.36-11.48 1.32-23 2.1-34.42.45-6.59 1-13.17 1.55-19.76zm-158.37 44.54c4.91-3.39 9.45-6.85 14.3-9.78 6.54-3.95 13.32-7.5 20-11.19a2.69 2.69 0 011.44-.22c8 .45 15.22 7.64 16.05 15.67.75 7.22 2.3 14.39 2.59 21.62.11 2.59-1.93 5.73-3.87 7.81s-4.69.89-7.06-.76c-5.83-4-8.71-9.46-8.17-16.48.29-3.76-.61-6.81-4.44-9.48-7.68 4.88-16.23 9.22-23.45 15.17-11.25 9.27-21.06 2.15-25.56-7.24-.63-1.3-1.16-2.66-1.89-4.32a40.82 40.82 0 00-13.54 11.29c-3 3.64-5.63 7.56-8.4 11.38-1.34 1.83-7.43 4.22-9.3 2.79a11.68 11.68 0 01-4.06-6.49c-1.37-7 1.75-12.66 6.65-17.58 4-4.05 7.66-8.52 11.83-12.43 5.92-5.57 13.29-8 21.32-8.87 3.65-.38 5.9 1.19 7.51 4.22 2.56 4.8 5.18 9.57 8.05 14.89zm374.11.66c-7.31 3.89-12.49 10.08-17.57 16.37a17.14 17.14 0 00-3 4.27c-1.55 4.05-4.95 4.7-8.55 5.14-3.27.4-6.59-2.78-6.71-6.93-.15-4.79 0-9.55 3.78-13.4 5.64-5.76 10.9-11.9 16.66-17.52 5.92-5.78 13.89-7 21.64-8.18 1.28-.19 3.41 1.49 4.26 2.86 2.87 4.63 5.34 9.51 8 14.28.36.64.81 1.22 1.54 2.29 4.76-3.07 9.34-6.19 14.08-9 6.48-3.89 13.06-7.6 19.64-11.31a4.5 4.5 0 012.77-.55c9.16 1.61 15.13 8.87 15.69 18.17a172.69 172.69 0 002.29 18.67c.65 3.85-1.49 6.2-3.83 8.25s-4.89 1-7.17-.75c-5.6-4.2-9.06-9.48-8.65-16.76a26.75 26.75 0 000-3.35c-.3-4.43-3-6.15-6.69-3.95-7.28 4.31-14.76 8.42-21.48 13.5-10.28 7.79-16.81 3.47-22.52-3.83-1.77-2.32-2.69-5.26-4.18-8.27zm133.34-4.73c12.75 6.45 14.84 17.51 14.62 29.78-.06 3.33-1.65 4.5-4.52 4.51-6.36 0-10.75-3.31-14-8.43a43.54 43.54 0 01-2-4.26c-4.17 2.31-8.59 4.1-12.17 6.92-4.38 3.46-8.62 3.6-13.11 1.18a47 47 0 01-8.56-5.9c-4-3.54-3.87-7.82-.16-11.84 7-7.58 13.81-15.31 20.87-22.83a58.46 58.46 0 018.14-7.08c4.64-3.38 12-1.88 15.31 2.85 5.95 8.63 5.88 8.83-4.42 15.1zm-6.23 8.53c-1.29-1.67-2.53-3.26-4.1-5.27-4.44 3.71-8.57 7-12.52 10.58-.89.8-1.13 2.33-1.67 3.52l.93.33zm-567.16-9.24c.26 11.92-5.16 19.32-14.5 24.24-4.63 2.43-9.25 4.95-14.09 6.93-9.48 3.88-16.22 1.68-19.92-7.73a95.14 95.14 0 01-4.31-12.28c-1.54-6.33.48-12.08 4.64-16.9 4.77-5.52 10.32-10.17 18-10.7 4.5-.31 7.15 2.37 7.6 6.85.18 1.71.72 3.47.44 5.09a3.64 3.64 0 01-2.65 2.08c-7 .77-11.57 6.48-10.56 13.52.35 2.46 1.33 3.37 4 2.58C72.81 144 80.62 134.23 81 122c.06-2 0-4.16 2.41-4.28a5.71 5.71 0 014.16 2.16c3.16 4.39 5.43 9.2 4.74 13.88zm403.41-5.27c0 3.92.13 7.18-.07 10.42a5.14 5.14 0 01-1.46 3.15c-7.55 7.22-15.23 14.29-22.79 21.49-3.68 3.5-5.85 3.25-8.47-1.08a38.67 38.67 0 00-4.48-6.38c-4.07-4.39-9.37-3.54-14.32-2.36-6.63 1.59-13.07 4-19.69 5.69-7.72 1.95-12.08-2.43-10.05-10 2.85-10.59 8.77-19.71 14.92-28.58 1.14-1.64 4.72-2.61 6.9-2.26 2.41.39 3.18 3.1 3.41 5.91.51 6-3.14 10-5.93 14.47-.61 1-1.24 1.92-1.87 2.88.19.27.38.53.56.8 1.5-.32 3-.68 4.49-1 6.45-1.19 12.89-2.39 19.35-3.52 4.21-.74 7.19 1 9.31 4.63.86 1.47 2 2.8 3.39 4.76 4.51-3.77 8.66-7.68 13.27-10.94 4.31-3.01 7.21-8.81 13.53-8.08zm-110.16 21.3c2.2.1 4.09-.15 5.74.36 1.87.58 3.53 1.85 5.28 2.82-1.14 1.62-2 3.65-3.5 4.77a19.72 19.72 0 01-7.33 3.61c-3.54.73-7.63 1.59-10.83.5a84.23 84.23 0 01-16.62-8.28c-7-4.31-9.92-19.72-2-26.36s16.05-11.81 26.7-11.38a33.57 33.57 0 018.4 1.57c10.08 3.08 12.15 15.84 5.46 22.34-3.41 3.35-7.16 6.4-11.3 10.05zm-2.42-17.53c-1.19-.61-2.36-1.74-3.12-1.5-3.72 1.14-7.62 2.18-10.9 4.17-3.1 1.88-2.79 4.05-.58 6.86s4.43 2.55 6.77.15c2.06-2.12 4.25-4.12 6.25-6.28.62-.66.83-1.73 1.58-3.4z"}}),n("path",{staticClass:"main-logo_svg__cls-1",attrs:{d:"M38.24 76.15l.31-.3v.19a.85.85 0 01-.25.13z"}})]))}}},f2ed:function(t,e,n){"use strict";var a=n("c2d3"),s=n.n(a);s.a}});
//# sourceMappingURL=app.dd6d4e53.js.map