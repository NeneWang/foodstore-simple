(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"2P/V":function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),l=a("/MKj"),c=a("YFqc"),o=a.n(c),i=a("MHX4"),u=a("FGyW"),s=a("6QH/"),d=a("Pz/r"),m=a("6EID"),p=a("m9Y6"),h=a("kLkQ"),f=a("TVAx"),b=a("wQtD"),v=a("Npp4"),_=r.a.createElement;e.default=function(){var t=Object(l.b)(),e=Object(i.a)(),a=e.register,n=e.handleSubmit,c=(e.watch,e.errors),N=Object(l.c)((function(t){return t.cartReducer}));return _(s.a,{title:"Cart"},_(p.a,{title:"Shopping cart"},_(p.b,{name:"Home"}),_(p.b,{name:"Shop"}),_(p.b,{name:"Shopping cart",current:!0})),_("div",{className:"cart"},_("div",{className:"container"},N&&0!==N.length?_(r.a.Fragment,null,_("div",{className:"cart__table"},_("div",{className:"cart__table__wrapper"},_("table",null,_("colgroup",null,_("col",{style:{width:"40%"}}),_("col",{style:{width:"17%"}}),_("col",{style:{width:"17%"}}),_("col",{style:{width:"17%"}}),_("col",{style:{width:"9%"}})),_("thead",null,_("tr",null,_("th",null,"Product"),_("th",null,"Price"),_("th",null,"Quantity"),_("th",null,"Total"),_("th",null))),_("tbody",null,N.map((function(e,a){return _("tr",{key:a},_("td",null,_("div",{className:"cart-product"},_("div",{className:"cart-product__image"},_("img",{src:e.thumbImage[0],alt:e.name})),_("div",{className:"cart-product__content"},_("h5",null,e.category),_(o.a,{href:"/shop/product/[slug]",as:"/shop/product/"+e.slug},_("a",null,e.name))))),_("td",null,Object(h.b)(e.price)),_("td",null,_(d.a,{defaultQuantity:e.cartQuantity,onIncrease:function(){return t(Object(b.c)(e.cartId))},onDecrease:function(){return t(Object(b.b)(e.cartId))}})),_("td",null,Object(h.b)(e.price*e.cartQuantity)),_("td",null,_("a",{href:"#",onClick:function(a){return function(e,a){return e.preventDefault(),t(Object(b.e)(a)),u.b.error("Product removed from cart")}(a,e.cartId)}},_("i",{className:"fal fa-times"}))))}))))),_("div",{className:"cart__table__footer"},_(o.a,{href:"/shop/fullwidth-4col"},_("a",null,_("i",{className:"fal fa-long-arrow-left"}),"Continue Shopping")),_(o.a,{href:"#"},_("a",{onClick:function(e){return function(e){return e.preventDefault(),t(Object(b.d)()),u.b.error("All product removed from cart")}(e)}},_("i",{className:"fal fa-trash"}),"Clear Shopping Cart")))),_("div",{className:"cart__total"},_("div",{className:"row"},_("div",{className:"col-12 col-md-8"},_("div",{className:"cart__total__discount"},_("p",null,"Enter coupon code. It will be applied at checkout."),_("div",{className:"input-validator"},_("form",{onSubmit:n((function(t){return console.log(t)}))},_("input",{type:"text",name:"discountCode",placeholder:"Your code here",ref:a({required:!0})}),_("button",{className:"btn -dark"},"Apply")),c.discountCode&&_("span",{className:"input-error"},"Please provide a discount code")))),_("div",{className:"col-12 col-md-4"},_("div",{className:"cart__total__content"},_("h3",null,"Cart Total"),_("table",null,_("tbody",null,_("tr",null,_("th",null,"Subtotal"),_("td",null,Object(f.a)(N,!0))),_("tr",null,_("th",null,"Total"),_("td",{className:"final-price"},Object(f.a)(N,!0))))),_(m.a,{height:45/14+"em",width:"100%",action:"/shop/checkout",color:"dark",content:"Proceed to checkout"})))))):_("div",{className:"cart__empty"},_("h3",null,"No product in cart"),_(m.a,{color:"dark",action:"/shop/fullwidth-4col",content:"Shopping now"})))),_(v.a,null))}},"31yp":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/cart",function(){return a("2P/V")}])},"6QH/":function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a("q1tI"),r=a.n(n),l=a("8Kt/"),c=a.n(l),o=a("PmzM"),i=a("zlC1"),u=a("8fh6"),s=r.a.createElement;var d=r.a.createElement,m=Object(o.a)((function(t){return s(r.a.Fragment,null,s(u.a,t))}));function p(t){return d(r.a.Fragment,null,d(c.a,null,d("title",null,t.title||"Tienda del Chen")),d(m,{container:t.container}),t.children,d(i.a,null))}},"8fh6":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("YFqc"),c=a.n(l),o=a("VOjt"),i=a("brf1"),u=a("kLkQ"),s=r.a.createElement;function d(t){var e=t.hide,a=t.container;return s("div",{className:"menu -style-3"},s("div",{className:Object(u.d)(a)},s("div",{className:"menu__wrapper"},s(c.a,{href:"/index"},s("a",{className:"menu__wrapper__logo"},s("img",{src:"/assets/images/logo-white.png",alt:"Logo"}))),s(o.a,{className:"-white"}),s(i.a,{hide:e,white:!0,className:"-white"}))))}},"J+Fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n={DEFAULT_QUANTITY:1},r={CATEGORISE:["Todo","Jamon","Fiambre","Salame","Quesos","Barra","Extra","Cremoso","Dulces","Aceitunas","Picados"],PRICE_POINTS:[0,25,50,75,100],SORT_TYPES:[{name:"Default",value:"default"},{name:"A a Z",value:"az"},{name:"Z a A",value:"za"},{name:"Precio de menor a mayor",value:"lowToHigh"},{name:"Precio de mayor a menor",value:"highToLow"}],DEFAULT_VIEW:"grid"}},Npp4:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("OS56"),c=a.n(l),o=r.a.createElement;function i(){return o("div",{className:"instagram-two"},o(c.a,{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]},Array.from(Array(6),(function(t,e){return o("a",{key:e,href:"https://www.instagram.com/",className:"slider-item"},o("img",{src:""+"/assets/images/instagram/InstagramTwo/".concat(e+1,".png"),alt:"Instagram image"}))}))))}},"Pz/r":function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),c=a.n(l),o=a("J+Fc"),i=r.a.createElement;function u(t){var e=t.className,a=t.defaultQuantity,r=t.getQuantity,l=t.onDecrease,u=t.onIncrease,s=t.maxValue,d=Object(n.useState)(a||o.a.DEFAULT_QUANTITY),m=d[0],p=d[1];return Object(n.useEffect)((function(){r&&r(m)}),[m]),i("div",{className:"quantity-controller ".concat(c()(e))},i("div",{className:"quantity-controller__btn -descrease",onClick:function(){m<2||(p(m-1),l&&l())}},"-"),i("h5",{className:"quantity-controller__number"},m),i("div",{className:"quantity-controller__btn -increase",onClick:function(){m>=s||(p(m+1),u&&u())}},"+"))}},m9Y6:function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n).a.createElement,l=function(t){var e=t.name,a=t.current;return r("li",{className:a&&"active"},e)},c=function(t){var e=t.title,a=t.children;return r("div",{className:"breadcrumb"},r("div",{className:"container"},r("h2",null,e),r("ul",null,a)))}}},[["31yp",0,2,1,4,3,6,5,8,7]]]);