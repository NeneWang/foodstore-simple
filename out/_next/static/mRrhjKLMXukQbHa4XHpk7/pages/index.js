(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/j0s":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),i=n.n(a),o=n("TSYQ"),s=n.n(o),r=i.a.createElement;function c(e){var t=e.subTitle,n=e.className,a=e.description,i=e.align,o=e.spaceBottom,c=e.showSubTitle,l=e.children,u=e.hideDecoration,d=e.titleSize;return r("div",{className:"section-title -style1 ".concat(s()(n)),style:{textAlign:i,marginBottom:o||"3.125rem"}},c&&r("h5",null,t),r("h2",{style:{fontSize:d}},l),a&&r("p",null,a),!u&&r("img",{src:"/assets/images/introduction/IntroductionOne/content-deco.png",alt:"decoration"}))}},"6QH/":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),i=n.n(a),o=n("8Kt/"),s=n.n(o),r=n("PmzM"),c=n("zlC1"),l=n("8fh6"),u=i.a.createElement;var d=i.a.createElement,m=Object(r.a)((function(e){return u(i.a.Fragment,null,u(l.a,e))}));function p(e){return d(i.a.Fragment,null,d(s.a,null,d("title",null,e.title||"Tienda del Chen")),d(m,{container:e.container}),e.children,d(c.a,null))}},"At+n":function(e){e.exports=JSON.parse('{"subTitle":{"main":"El resutaurante de","span":"Chensito"},"title":{"main":"Precio Cuidado","span":""},"description":"Distribuimos comida en todo Buenos Aires","btn":{"content":"Comprar","color":"white"}}')},JMG1:function(e){e.exports=JSON.parse('[{"title":{"main":"Mejor Comida Buenos Aires"},"subTitle":"La mejor carne argentina","image":"/assets/images/slider/SliderOne/1.png","btn":{"content":"Ver Comida","color":"red"},"animationClass":{"title":"slider-one-title","subtitle":"slider-one-subtitle","button":"slider-one-button"}},{"title":{"main":"Comprar en Monto"},"subTitle":"vendemos en monto","image":"/assets/images/slider/SliderOne/2.png","btn":{"content":"Ver Comida","color":"red"},"animationClass":{"title":"slider-one-title","subtitle":"slider-one-subtitle","button":"slider-one-button"}}]')},"JRj/":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n("wx14"),i=n("zLVn");function o(e,t){if(null==e)return{};var n,a,o=Object(i.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=n("q1tI"),r=["currentSlide","slideCount"],c=["currentSlide","slideCount"],l=n.n(s).a.createElement,u=function(e){e.currentSlide,e.slideCount;var t=o(e,r);return l("a",Object(a.a)({},t,{href:"#"}),l("i",{className:"far fa-angle-left"}))},d=function(e){e.currentSlide,e.slideCount;var t=o(e,c);return l("a",Object(a.a)({},t,{href:"#"}),l("i",{className:"far fa-angle-right"}))}},N9oT:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),i=n.n(a),o=n("TSYQ"),s=n.n(o),r=n("6EID"),c=n("bMKh"),l=i.a.createElement;function u(e){var t=Object(a.useState)(!1),n=t[0],o=t[1],u=e.poster,d=e.height,m=e.width,p=e.src,g=e.className;return d=d||1080,l(i.a.Fragment,null,l("div",{className:"video-frame ".concat(s()(g)),style:{height:d,width:m||16*d/9}},l("div",{className:"video-frame__poster"},l("img",{src:u,alt:"Video poster"})),l(r.a,{action:"#",color:"white",height:"50px",width:"50px",className:"-round",onClick:function(e){e.preventDefault(),o(!0)},content:l("i",{className:"fas fa-play"})}),l("a",null)),l(c.a,{showModal:n,setShowModal:o,height:400,width:700},l("iframe",{src:p,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}var d=i.a.createElement;function m(e){var t=e.data,n=e.style,i=Object(a.useState)(t[0].name),o=i[0],s=i[1],r=Object(a.useState)(t[0].videoPoster),c=r[0],l=r[1],m=Object(a.useState)(t[0].videoSrc),p=m[0],g=m[1];return d("div",{className:"introduction-two",style:n},d(u,{poster:c,height:500,src:p}),d("div",{className:"introduction-two__content"},d("div",{className:"container"},t.map((function(e,t){return d("div",{onMouseOver:function(){s(e.name),l(e.videoPoster),g(e.videoSrc)},key:t,className:"introduction-two__content__item ".concat(o===e.name?"active":"")},!e.description&&d("span",null,"0",t+1,"."),d("a",{href:"#",onClick:function(e){return e.preventDefault()}},e.name),d("p",null,e.description&&e.description))})))))}},PPzZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),i=n.n(a).a.createElement;function o(e){var t=e.singleRow;return i("div",{className:"instagram-one"},i("div",{className:"instagram-one__background"},Array.from(Array(t?7:14),(function(e,t){return i("a",{href:"https://instagram.com/",className:"instagram-one__background__item",key:t},i("img",{src:""+"/assets/images/instagram/InstagramOne/".concat(t+1,".png"),alt:"Instagram image"}))}))),i("a",{href:"https://www.instagram.com/",className:"instagram-one__content"},i("i",{className:"fab fa-instagram"}),i("h5",null,"Follow us on instagram"),i("p",null,"@Teliahshop")))}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n("q1tI"),i=n.n(a),o=n("6QH/"),s=n("Wm66"),r=n("JMG1"),c=n("YFk/"),l=n("At+n"),u=n("N9oT"),d=n("UvCg"),m=n("PPzZ"),p=i.a.createElement;function g(){return p(o.a,{title:"Homepage 1",data:r,className:"-style-1"},p(s.a,{data:r,className:"-style-1",showDots:!0}),p(c.a,{data:l}),p(u.a,{data:d}),p(m.a,null))}},UvCg:function(e){e.exports=JSON.parse('[{"name":"Sucursales en Buenos Aires","videoPoster":"/assets/images/introduction/IntroductionTwo/1.png","videoSrc":"https://www.youtube.com/embed/80e0QHPYRG4"},{"name":"Pedidio Facil Y Rapido","videoPoster":"/assets/images/introduction/IntroductionTwo/2.png","videoSrc":"https://www.youtube.com/embed/xn7jfVWWSio"},{"name":"Comida de la mejor calidad","videoPoster":"/assets/images/introduction/IntroductionTwo/3.png","videoSrc":"https://www.youtube.com/embed/K3M-czGNUCg"},{"name":"Comida China Tradicional","videoPoster":"/assets/images/introduction/IntroductionTwo/4.png","videoSrc":"https://www.youtube.com/embed/hoPiGLf0ICA"}]')},Wm66:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),i=n.n(a),o=n("pQ8y"),s=n("TSYQ"),r=n.n(s),c=n("OS56"),l=n.n(c),u=n("6EID"),d=n("JRj/"),m=i.a.createElement;function p(e){var t=e.className,n=e.data,s=e.showArrows,c=e.showDots,p=Object(a.useState)(),g=p[0],f=p[1],v=Object(a.useState)(),b=v[0],w=v[1];Object(a.useEffect)((function(){f(0)}),[]);var h={dots:c,arrows:s,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,fade:!0,prevArrow:m(d.b,null),nextArrow:m(d.a,null),dotsClass:"slider-dots container",customPaging:function(e){return m("div",{className:"slider-dot"})},onInit:function(){w(!0)},beforeChange:function(e,t){setTimeout((function(){w(!1)}),10)},afterChange:function(e){f(e),w(!0)}};return m("div",{className:"slider ".concat(r()(t))},m("div",{className:"slider__carousel"},m(l.a,h,n.map((function(e,t){return m("div",{className:"slider__carousel__item "+"slider-".concat(t+1),key:t},m("div",{className:"container"},m("div",{className:"slider-background"},m(o.a,{in:g===t&&b,timeout:2e3,classNames:"slider-zoom-in",unmountOnExit:!0},m("img",{src:""+e.image,alt:"Slider image"}))),m("div",{className:"slider-content"},e.subTitle&&m("div",{className:"slider-animation-wrapper"},m(o.a,{in:g===t&&b,timeout:2e3,classNames:r()(e.animationClass.subtitle),unmountOnExit:!0},m("h5",{className:"slider-content__subtitle"},e.subTitle))),m("div",{className:"slider-animation-wrapper"},m(o.a,{in:g===t&&b,timeout:2e3,classNames:r()(e.animationClass.title),unmountOnExit:!0},m("h1",{className:"slider-content__title"},e.title.span&&m(i.a.Fragment,null,m("span",null,e.title.span," "),m("br",null)),e.title.main))),e.description&&m("div",{className:"slider-animation-wrapper"},m(o.a,{in:g===t&&b,timeout:2e3,classNames:r()(e.animationClass.description),unmountOnExit:!0},m("p",{className:"slider-content__description"},e.description))),m("div",{className:"slider-animation-wrapper"},m(o.a,{in:g===t&&b,timeout:2e3,classNames:r()(e.animationClass.button),unmountOnExit:!0},m("div",null,m(u.a,{action:"#",content:e.btn.content,color:e.btn.color})))))))})))))}},"YFk/":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),i=n.n(a),o=n("patp"),s=n.n(o),r=n("6EID"),c=n("/j0s"),l=i.a.createElement;function u(e){var t=e.data,n=Object(a.useRef)(null),i=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=new s.a(n.current),t=new s.a(i.current);return function(){e.disable(),t.disable()}}),[]),l("div",{className:"introduction-one"},l("div",{className:"container"},l("div",{className:"row align-items-center"},l("div",{className:"col-12 col-md-6"},l("div",{className:"introduction-one__image"},l("div",{className:"introduction-one__image__detail"},l("img",{src:"/assets/images/introduction/IntroductionOne/img1.png",alt:"background"}),l("img",{src:"/assets/images/introduction/IntroductionOne/img2.png",alt:"background"})),l("div",{className:"wrapper"},l("div",{className:"introduction-one__image__background"},l("div",{className:"background__item"},l("div",{ref:n,className:"wrapper"},l("img",{"data-depth":"0.5",src:"/assets/images/introduction/IntroductionOne/bg1.png",alt:"background"}))),l("div",{className:"background__item"},l("div",{ref:i,className:"wrapper"},l("img",{"data-depth":"0.3","data-invert-x":!0,"data-invert-y":!0,src:"/assets/images/introduction/IntroductionOne/bg2.png",alt:"background"}))))))),l("div",{className:"col-12 col-md-6"},l("div",{className:"introduction-one__content"},l("h5",null,t.subTitle.main," ",l("span",null,t.subTitle.span)),l(c.a,{spaceBottom:"1.875em"},t.title.main,l("br",null),t.title.span),l("p",null,t.description),l(r.a,{color:t.btn.color,content:t.btn.content,action:""}))))))}},bMKh:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),i=n.n(a),o=n("pQ8y"),s=n("A2gu"),r=i.a.createElement;function c(e){var t=e.showModal,n=e.setShowModal,a=e.height,c=e.width;return r(i.a.Fragment,null,r(s.a,{selector:"#modal"},r(o.a,{in:t,unmountOnExit:!0,timeout:200,classNames:"cart-sidebar"},r("div",{className:"modal",style:{height:a,width:c}},r("div",{className:"modal__wrapper"},e.children)))),t&&r(s.a,{selector:"#overlay"},r("div",{className:"overlay",onClick:function(e){n(!1)}})))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,2,1,3,4,5,6,8,7,10]]]);