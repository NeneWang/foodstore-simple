(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1O8I":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/homepages/homepage2",function(){return t("GvR7")}])},"5lgo":function(e){e.exports=JSON.parse('[{"title":{"span":"Better","main":"than before"},"btn":{"content":"Shop now","color":"white","href":"#"},"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","image":"/assets/images/slider/SliderTwo/1.png","animationClass":{"title":"slider-one-title","description":"slider-one-subtitle","button":"slider-one-button"}},{"subTitle":"Outstanding Beauty","title":{"main":"For your nail"},"btn":{"content":"Shop now","color":"dark","href":"#"},"description":"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ","image":"/assets/images/slider/SliderTwo/2.png","animationClass":{"title":"slider-one-title","subtitle":"slider-one-subtitle","description":"slider-one-subtitle","button":"slider-one-button"}},{"subTitle":"Fragrances that make moments","title":{"main":"Unforgettable"},"btn":{"content":"Shop now","color":"white","href":"#"},"image":"/assets/images/slider/SliderTwo/3.png","animationClass":{"title":"slider-one-title","subtitle":"slider-one-subtitle","button":"slider-one-button"}}]')},A26B:function(e){e.exports=JSON.parse('[{"image":"/assets/images/category/CategoryOne/1.png","category":"Cheek & Coutour","quantity":120},{"image":"/assets/images/category/CategoryOne/2.png","category":"Eyes","quantity":86},{"image":"/assets/images/category/CategoryOne/3.png","category":"Palettes","quantity":216}]')},GvR7:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ee}));var n=t("q1tI"),s=t.n(n),o=t("8Kt/"),l=t.n(o),i=t("PmzM"),r=t("YFqc"),c=t.n(r),u=(t("VOjt"),t("brf1")),m=t("kLkQ"),d=s.a.createElement,p=[{title:"Palettes",to:"/shop/fullwidth-4col"},{title:"Eyes",to:"/shop/fullwidth-4col"},{title:"Face",to:"/shop/fullwidth-4col"},{title:"Lips",to:"/shop/fullwidth-4col"},{title:"Cheek",to:"/shop/fullwidth-4col"},{title:"Sets",to:"/shop/fullwidth-4col"},{title:"Nails",to:"/shop/fullwidth-4col"}];function g(e){var a=e.container;return d("div",{className:"menu -style-2"},d("div",{className:Object(m.d)(a)},d("div",{className:"menu__wrapper"},d(u.a,{hide:"cart"}),d("div",{className:"navigator"},d("ul",{className:"navigator_part -left"},p.slice(0,4).map((function(e,a){return d("li",{key:a},d(c.a,{href:""+e.to},d("a",null,e.title)))}))),d(c.a,{href:"/index"},d("a",{className:"menu__wrapper__logo"},d("img",{src:"/assets/images/logo.png",alt:"Logo"}))),d("ul",{className:"navigator_part -right"},p.slice(4,7).map((function(e,a){return d("li",{key:a},d(c.a,{href:""+e.to},d("a",null,e.title)))})))),d(u.a,{hide:"search"}))))}var _=t("lmm/"),v=s.a.createElement,h=[{name:"About us",to:"/about"},{name:"Blog",to:"/blog"},{name:"Contact",to:"/contact"}];function N(e){var a=e.container,t=Object(n.useState)("USD"),s=(t[0],t[1]),o=Object(n.useState)("ENG"),l=(o[0],o[1]);return v("div",{className:"top-nav -style-2"},v("div",{className:Object(m.d)(a)},v("div",{className:"top-nav__wrapper"},v("div",{className:"top-nav__wrapper__quick-links"},v("ul",null,h.map((function(e,a){return v("li",{key:a},v("a",{href:""+e.to},e.name))})))),v("p",{className:"top-nav__wrapper__promo"},"Free shipping on international orders of $120+"),v("div",{className:"top-nav__wrapper__selectors"},v(_.a,{options:["USD","VND","YEN"],getValue:function(e){return s(e)},className:"-borderless"}),v(_.a,{options:["ENG","VI","JP"],getValue:function(e){return l(e)},className:"-borderless"}),v(c.a,{href:"#"},v("a",{className:"top-nav__auth"},"Login/Register"))))))}var f=s.a.createElement;var b=t("zlC1"),w=s.a.createElement,y=Object(i.a)((function(e){return f(s.a.Fragment,null,f(N,e),f(g,e))}));function k(e){return w(s.a.Fragment,null,w(l.a,null,w("title",null,e.title||"Eliah | React")),w(y,{container:e.container}),e.children,w(b.a,null))}var O=t("Wm66"),E=t("5lgo"),S=s.a.createElement;function j(e){var a=e.data;return S(c.a,{href:"/shop/fullwidth-4col"},S("a",{className:"category-card"},S("div",{className:"category-card__background"},S("img",{src:""+a.image,alt:a.category})),S("div",{className:"category-card__content"},S("h3",null,a.category),S("h5",null,a.quantity," items"))))}var C=s.a.createElement;function T(e){var a=e.data;return C("div",{className:"category-one"},C("div",{className:"container-fluid"},C("div",{className:"row"},a.map((function(e,a){return C("div",{key:a,className:"col-12 col-md-4"},C(j,{data:e}))})))))}var D=t("A26B"),F=t("TSYQ"),I=t.n(F),P=t("/j0s"),B=t("/LDh"),q=t("6EID"),A=t("mK+b"),R=s.a.createElement;function L(e){var a=e.data,t=e.categories,o=Object(n.useState)(t?t[0]:"Todo"),l=o[0],i=o[1],r=Object(A.b)(a,l,null,8);return R("div",{className:"product-tab -style-1"},R("div",{className:"container"},R(P.a,{align:"center"},"New arrivals"),R("div",{className:"product-tab__header"},R("ul",null,t.map((function(e,a){return R("li",{className:I()({active:l===e}),key:a},R(c.a,{href:"#"},R("a",{onClick:function(a){a.preventDefault(),i(e)}},e)))})))),R("div",{className:"product-tab__content"},r&&0!==r.length?R(s.a.Fragment,null,R("div",{className:"product-tab__content__wrapper"},R("div",{className:"row"},r.map((function(e,a){return R("div",{key:a,className:"col-12 col-sm-6 col-md-4 col-lg-3"},R(B.a,{data:e}))})))),R("div",{className:"text-center"},R(q.a,{action:"/shop/fullwidth-4col",color:"transparent",className:"-underline",content:"View all product"}))):R("div",{className:"product-tab__content__empty"},R("h3",null,"No product found")))))}var x=t("iagI"),J=t("6Moy"),V=s.a.createElement;function G(e){var a=e.subTitle,t=e.title,n=e.last;return V("div",{className:"dow-one"},V("div",{className:"dow-one__image"},V("img",{src:"/assets/images/deal_of_week/DOWOne/1.png",alt:"Dale of the week image"})),V("div",{className:"dow-one__content"},V("h5",null,a),V("h3",null,t),V(J.a,{date:Date.now()+n,renderer:function(e){var a=e.days,t=e.hours,n=e.minutes,s=e.seconds;return V("div",{className:"dow-one__content__countdown"},V("div",{className:"countdown__item"},V("h6",null,Object(J.b)(a))," ",V("span",null,"days")),V("div",{className:"countdown__item"},V("h6",null,Object(J.b)(t))," ",V("span",null,"hours")),V("div",{className:"countdown__item"},V("h6",null,Object(J.b)(n)," "),V("span",null,"minutes")),V("div",{className:"countdown__item"},V("h6",null,Object(J.b)(s))," ",V("span",null,"sec")))}}),V(q.a,{action:"#",color:"dark",content:"Shop now"})))}var z=s.a.createElement;function Q(e){var a=e.data;return z("div",{className:"post-card-one"},z("div",{className:"post-card-one__date"},z("h5",null,"05"),z("p",null,"Feb")),z("div",{className:"post-card-one__content"},z("div",{className:"post-card-one__content__info"},z("p",null,"by ",z("span",null,a.author)),z(c.a,{href:"/blog/category/"+Object(m.a)(a.category)},z("a",null,a.category))),z(c.a,{href:"/blog/post/[slug]",as:"/blog/post/"+a.slug},z("a",{className:"post-card-one__content__title"},a.title))))}var U=s.a.createElement;function Y(e){var a=e.data;return U("div",{className:"blog-one"},U("div",{className:"container"},U(P.a,{align:"center"},"Beautilicious blog"),U("div",{className:"blog-one__content"},a.map((function(e,a){return U("div",{key:a,className:"blog-one__content__item"},U(Q,{data:e}))})))))}var Z=t("BRZx"),K=s.a.createElement;function M(){return K("div",{className:"brand-one"},K("div",{className:"container"},K("div",{className:"brand-one__wrapper"},K("div",{className:"row align-items-center"},K("div",{className:"col-12 col-md-4"},K(P.a,{spaceBottom:"0px",description:"Discover products with brands"},"Our brands")),K("div",{className:"col-12 col-md-8"},K("div",{className:"brand-one__logos"},Array.from(Array(6),(function(e,a){return K("div",{key:a,className:"brand-one__logos__item"},K("img",{src:""+"/assets/images/brands/BrandsOne/".concat(a+1,".png"),alt:"logo"}))}))))))))}var W=t("+poQ"),X=t("PPzZ"),H=t("J+Fc"),$=s.a.createElement;function ee(){return $(k,{title:"Homepage 2"},$(O.a,{className:"-style-2",data:E,showDots:!0}),$(T,{data:D}),$(L,{data:x,categories:H.b.CATEGORISE}),$(G,{subTitle:"Deal of the week",title:"Lip and liner duo",last:1e8}),$(Y,{data:Z.slice(0,4)}),$(M,null),$(W.a,null),$(X.a,null))}},PPzZ:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),s=t.n(n).a.createElement;function o(e){var a=e.singleRow;return s("div",{className:"instagram-one"},s("div",{className:"instagram-one__background"},Array.from(Array(a?7:14),(function(e,a){return s("a",{href:"https://instagram.com/",className:"instagram-one__background__item",key:a},s("img",{src:""+"/assets/images/instagram/InstagramOne/".concat(a+1,".png"),alt:"Instagram image"}))}))),s("a",{href:"https://www.instagram.com/",className:"instagram-one__content"},s("i",{className:"fab fa-instagram"}),s("h5",null,"Follow us on instagram"),s("p",null,"@Teliahshop")))}}},[["1O8I",0,2,1,3,4,6,5,8,7,9,12]]]);