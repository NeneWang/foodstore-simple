(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"6QH/":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),l=t.n(n),r=t("8Kt/"),o=t.n(r),s=t("PmzM"),c=t("zlC1"),i=t("8fh6"),u=l.a.createElement;var m=l.a.createElement,d=Object(s.a)((function(e){return u(l.a.Fragment,null,u(i.a,e))}));function p(e){return m(l.a.Fragment,null,m(o.a,null,m("title",null,e.title||"Tienda del Chen")),m(d,{container:e.container}),e.children,m(c.a,null))}},"8fh6":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("q1tI"),l=t.n(n),r=t("YFqc"),o=t.n(r),s=t("VOjt"),c=t("brf1"),i=t("kLkQ"),u=l.a.createElement;function m(e){var a=e.hide,t=e.container;return u("div",{className:"menu -style-3"},u("div",{className:Object(i.d)(t)},u("div",{className:"menu__wrapper"},u(o.a,{href:"/index"},u("a",{className:"menu__wrapper__logo"},u("img",{src:"/assets/images/logo-white.png",alt:"Logo"}))),u(s.a,{className:"-white"}),u(c.a,{hide:a,white:!0,className:"-white"}))))}},Lxou:function(e,a,t){"use strict";t.r(a);var n=t("rePB"),l=t("q1tI"),r=t.n(l),o=t("YFqc"),s=t.n(o),c=t("/MKj"),i=t("MHX4"),u=t("6QH/"),m=t("m9Y6"),d=t("Npp4"),p=t("kLkQ"),v=t("TVAx"),b=r.a.createElement;a.default=function(){var e,a,t=Object(c.c)((function(e){return e.cartReducer})),l=Object(i.a)(),r=l.register,o=l.handleSubmit,h=l.errors,N=Object(i.a)(),f=N.register,y=N.handleSubmit,_=N.errors;return b(u.a,{title:"Checkout"},b(m.a,{title:"Checkout"},b(m.b,{name:"Home"}),b(m.b,{name:"Shop"}),b(m.b,{name:"Checkout",current:!0})),b("div",{className:"checkout"},b("div",{className:"container"},b("div",{className:"row"},b("div",{className:"col-12  col-lg-8"},b("form",null,b("div",{className:"checkout__form"},b("div",{className:"checkout__form__contact"},b("div",{className:"checkout__form__contact__title"},b("h5",{className:"checkout-title"},"Informacion de contactormation"),b("p",null,"Already have an account?",b(s.a,{href:"#"},b("a",null,"Login")))),b("div",{className:"input-validator"},b("input",{type:"text",name:"contact",ref:r({required:!0}),placeholder:"Email or mobile Tel\xe9fono number"}),h.contact&&b("span",{className:"input-error"},"Please provide a name or email")),b("label",{className:"checkbox-label",htmlFor:"subcribe-news"},b("input",{type:"checkbox",id:"subcribe-news",name:"subcribeNews",ref:r}),"Keep me up to dateon news and exclusive offers")),b("div",{className:"checkout__form__shipping"},b("h5",{className:"checkout-title"},"Shipping address"),b("div",{className:"row"},b("div",{className:"col-12 col-md-6"},b("div",{className:"input-validator"},b("label",null,"First name ",b("span",null,"*"),b("input",{type:"text",name:"firstName",ref:r({required:!0})})),h.firstName&&b("span",{className:"input-error"},"Please provide your first name"))),b("div",{className:"col-12 col-md-6"},b("div",{className:"input-validator"},b("label",null,"Last name ",b("span",null,"*"),b("input",{type:"text",name:"lastName",ref:r({required:!0})})),h.lastName&&b("span",{className:"input-error"},"Please provide your last name"))),b("div",{className:"col-12"},b("div",{className:"input-validator"},b("label",null,"Country ",b("span",null,"*"),b("input",{type:"text",name:"country",ref:r({required:!0})})),h.country&&b("span",{className:"input-error"},"Please provide your country"))),b("div",{className:"col-12"},b("div",{className:"input-validator"},b("label",null,"Address ",b("span",null,"*"),b("input",{type:"text",name:"streetAddress",ref:r({required:!0}),placeholder:"Steet address"}),b("input",{type:"text",name:"apartment",ref:r({required:!0}),placeholder:"Apartment, suite, unite ect ( optinal )"})),h.streetAddress||h.apartment?b("span",{className:"input-error"},"Please provide your address"):null)),b("div",{className:"col-12"},b("div",{className:"input-validator"},b("label",null,"Town/City ",b("span",null,"*"),b("input",{type:"text",name:"town",ref:r({required:!0})})),h.town&&b("span",{className:"input-error"},"Please provide your town/city"))),b("div",{className:"col-12"},b("div",{className:"input-validator"},b("label",null,"Country/State ",b("span",null,"*"),b("input",{type:"text",name:"state",ref:r({required:!0})})),h.state&&b("span",{className:"input-error"},"Please provide your country/State"))),b("div",{className:"col-12"},b("div",{className:"input-validator"},b("label",null,"Postcode/ZIP ",b("span",null,"*"),b("input",{type:"text",name:"zip",ref:r({required:!0})})),h.zip&&b("span",{className:"input-error"},"Please provide your postcode/ZIP"))),b("div",{className:"col-12"},b("div",{className:"input-validator"},b("label",null,"Order note",b("input",{type:"text",name:"note",placeholder:"Note about your order, e.g, special noe for delivery",ref:r()}))))),b("label",{className:"checkbox-label",htmlFor:"save"},b("input",{type:"checkbox",id:"save",name:"saveInfo",ref:r()}),"Save this infomation for next time"))))),b("div",{className:"col-12 col-lg-4"},b("div",{className:"row"},b("div",{className:"col-12 col-md-6 col-lg-12 ml-auto"},b("div",{className:"checkout__total"},b("h5",{className:"checkout-title"},"Your order"),b("form",{className:"checkout__total__coupon",onSubmit:y((function(e){return console.log(e)}))},b("h5",null,"Coupon Code"),b("div",{className:"input-validator"},b("input",{type:"text",placeholder:"Your code here",name:"coupon",ref:f({required:!0})}),_.coupon&&b("span",{className:"input-error"},"Please provide a coupon code")),b("button",{className:"btn -dark"},"Apply")),b("div",{className:"checkout__total__price"},b("h5",null,"Product"),b("table",null,b("colgroup",null,b("col",{style:{width:"70%"}}),b("col",{style:{width:"30%"}})),b("tbody",null,t.map((function(e){return b("tr",{key:e.cartId},b("td",null,b("span",null,Object(p.c)(e.cartQuantity))," ","x ",e.name),b("td",null,Object(p.b)(e.price*e.cartQuantity)))})))),b("div",{className:"checkout__total__price__total-count"},b("table",null,b("tbody",null,b("tr",null,b("td",null,"Subtotal"),b("td",null,Object(v.a)(t,!0))),b("tr",null,b("td",null,"Total"),b("td",null,Object(v.a)(t,!0)))))),b("div",{className:"checkout__total__price__payment"},b("label",{className:"checkbox-label",htmlFor:"payment"},b("input",(e={type:"checkbox",id:"payment",name:"payment"},Object(n.a)(e,"name","payment"),Object(n.a)(e,"ref",r),e)),"Cheque payment"),b("label",{className:"checkbox-label",htmlFor:"paypal"},b("input",(a={type:"checkbox",id:"paypal",name:"paypal"},Object(n.a)(a,"name","paypal"),Object(n.a)(a,"ref",r),a)),"PayPal"))),b("button",{className:"btn -red",onClick:o((function(e){return console.log(e)}))},"Place order")))))))),b(d.a,null))}},Npp4:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),l=t.n(n),r=t("OS56"),o=t.n(r),s=l.a.createElement;function c(){return s("div",{className:"instagram-two"},s(o.a,{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]},Array.from(Array(6),(function(e,a){return s("a",{key:a,href:"https://www.instagram.com/",className:"slider-item"},s("img",{src:""+"/assets/images/instagram/InstagramTwo/".concat(a+1,".png"),alt:"Instagram image"}))}))))}},Z1mD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/checkout",function(){return t("Lxou")}])},m9Y6:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n).a.createElement,r=function(e){var a=e.name,t=e.current;return l("li",{className:t&&"active"},a)},o=function(e){var a=e.title,t=e.children;return l("div",{className:"breadcrumb"},l("div",{className:"container"},l("h2",null,a),l("ul",null,t)))}},rePB:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))}},[["Z1mD",0,2,1,4,3,6,5,8,7]]]);