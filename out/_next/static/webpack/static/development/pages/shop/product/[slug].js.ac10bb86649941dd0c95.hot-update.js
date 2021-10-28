webpackHotUpdate("static\\development\\pages\\shop\\product\\[slug].js",{

/***/ "./src/pages/shop/product/[slug].js":
/*!******************************************!*\
  !*** ./src/pages/shop/product/[slug].js ***!
  \******************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_productSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/productSelect */ "./src/common/productSelect.js");
/* harmony import */ var _components_ProductDetail_ProductDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ProductDetail/ProductDetail */ "./src/components/ProductDetail/ProductDetail.js");
/* harmony import */ var _components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Sections/Instagram/InstagramTwo */ "./src/components/Sections/Instagram/InstagramTwo.js");
/* harmony import */ var _components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Layout/LayoutFour */ "./src/components/Layout/LayoutFour.js");
/* harmony import */ var _components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Other/Breadcrumb */ "./src/components/Other/Breadcrumb.js");
/* harmony import */ var _components_Sections_ProductThumb_ProductSlide_ProductSlideTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Sections/ProductThumb/ProductSlide/ProductSlideTwo */ "./src/components/Sections/ProductThumb/ProductSlide/ProductSlideTwo.js");
var _jsxFileName = "E:\\wangn\\Assets\\ecommerce-nextjs\\Eliah-ReactNext\\eliah\\src\\pages\\shop\\product\\[slug].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import products from "../../../data/products.json";








function SlugPage(_ref) {
  _s();

  var products = _ref.products;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var slug = router.query.slug; // let foundProduct = getProductBySlug(products, slug);
  // const onReviewSubmit = (data) => {
  //   console.log(data);
  // };

  console.log(getSpecificPost(products, slug));
  console.log(products);
  return  true && __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["Breadcrumb"], {
    title: "Product Detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: "Shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: slug,
    current: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }));
}

_s(SlugPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = SlugPage;

function getSpecificPost(products, slug) {
  // const allPosts = getAllPosts();
  var getSpecificproductItem = products.filter(function (productItem) {
    return productItem.slug === slug;
  });
  return getSpecificproductItem;
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (SlugPage);

var _c;

$RefreshReg$(_c, "SlugPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC9wcm9kdWN0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJTbHVnUGFnZSIsInByb2R1Y3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImdldFNwZWNpZmljUG9zdCIsImdldFNwZWNpZmljcHJvZHVjdEl0ZW0iLCJmaWx0ZXIiLCJwcm9kdWN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBLFNBQVNBLFFBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQVFDLElBQVIsR0FBaUJGLE1BQU0sQ0FBQ0csS0FBeEIsQ0FBUUQsSUFBUixDQUY0QixDQUc1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQWUsQ0FBQ1AsUUFBRCxFQUFXRyxJQUFYLENBQTNCO0FBRUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaO0FBQ0EsU0FDRSxLQUFJLElBQ0YsTUFBQyxxRUFBRDtBQUFZLFNBQUssRUFBRUcsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBWSxTQUFLLEVBQUMsZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJFQUFEO0FBQWdCLFFBQUksRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJFQUFEO0FBQWdCLFFBQUksRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDJFQUFEO0FBQWdCLFFBQUksRUFBRUEsSUFBdEI7QUFBNEIsV0FBTyxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQVFFLE1BQUMsbUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBRko7QUFjRDs7R0F6QlFKLFE7VUFDUUcscUQ7OztLQURSSCxROztBQXdDVCxTQUFTUSxlQUFULENBQXlCUCxRQUF6QixFQUFtQ0csSUFBbkMsRUFBd0M7QUFDcEM7QUFFQSxNQUFNSyxzQkFBc0IsR0FBR1IsUUFBUSxDQUFDUyxNQUFULENBQWdCLFVBQUFDLFdBQVc7QUFBQSxXQUFJQSxXQUFXLENBQUNQLElBQVosS0FBcUJBLElBQXpCO0FBQUEsR0FBM0IsQ0FBL0I7QUFFQSxTQUFPSyxzQkFBUDtBQUNIOzs7QUFvQmNULHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaG9wXFxwcm9kdWN0XFxbc2x1Z10uanMuYWMxMGJiODY2NDk5NDFkZDBjOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi8uLi8uLi9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5U2x1ZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJvZHVjdFNlbGVjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsL1Byb2R1Y3REZXRhaWxcIjtcclxuaW1wb3J0IEluc3RhZ3JhbVR3byBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWN0aW9ucy9JbnN0YWdyYW0vSW5zdGFncmFtVHdvXCI7XHJcbmltcG9ydCBMYXlvdXRGb3VyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRGb3VyXCI7XHJcbmltcG9ydCB7XHJcbiAgQnJlYWRjcnVtYixcclxuICBCcmVhZGNydW1iSXRlbSxcclxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9PdGhlci9CcmVhZGNydW1iXCI7XHJcbmltcG9ydCBQcm9kdWN0U2xpZGVUd28gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvZHVjdFRodW1iL1Byb2R1Y3RTbGlkZS9Qcm9kdWN0U2xpZGVUd29cIjtcclxuXHJcbmZ1bmN0aW9uIFNsdWdQYWdlKHtwcm9kdWN0c30pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICAvLyBsZXQgZm91bmRQcm9kdWN0ID0gZ2V0UHJvZHVjdEJ5U2x1Zyhwcm9kdWN0cywgc2x1Zyk7XHJcbiAgLy8gY29uc3Qgb25SZXZpZXdTdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc29sZS5sb2coZ2V0U3BlY2lmaWNQb3N0KHByb2R1Y3RzLCBzbHVnKSlcclxuXHJcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgcmV0dXJuIChcclxuICAgIHRydWUgJiYgKFxyXG4gICAgICA8TGF5b3V0Rm91ciB0aXRsZT17c2x1Z30+XHJcbiAgICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9XCJQcm9kdWN0IERldGFpbFwiPlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJIb21lXCIgLz5cclxuICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiU2hvcFwiIC8+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gbmFtZT17c2x1Z30gY3VycmVudCAvPlxyXG4gICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICB7LyogPFByb2R1Y3REZXRhaWwgZGF0YT17Zm91bmRQcm9kdWN0fSBvblJldmlld1N1Ym1pdD17b25SZXZpZXdTdWJtaXR9IC8+ICovfVxyXG4gICAgICAgIHsvKiA8UHJvZHVjdFNsaWRlVHdvIGRhdGE9e3NsdWd9IC8+ICovfVxyXG4gICAgICAgIDxJbnN0YWdyYW1Ud28gLz5cclxuICAgICAgPC9MYXlvdXRGb3VyPlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zvb2QtYWRtaW4ud2FuZ25lbHNvbi54eXovcHVibGljL2FwaS9wcm9kdWN0cycpXHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0cyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTcGVjaWZpY1Bvc3QocHJvZHVjdHMsIHNsdWcpe1xyXG4gICAgLy8gY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cygpO1xyXG4gIFxyXG4gICAgY29uc3QgZ2V0U3BlY2lmaWNwcm9kdWN0SXRlbSA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0SXRlbSA9PiBwcm9kdWN0SXRlbS5zbHVnID09PSBzbHVnICk7XHJcbiAgXHJcbiAgICByZXR1cm4gZ2V0U3BlY2lmaWNwcm9kdWN0SXRlbTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHJcbiAgLy8gY29uc3QgcG9zdEZpbGVuYW1lcyA9IGdldFBvc3RzRmlsZXMoKTtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZm9vZC1hZG1pbi53YW5nbmVsc29uLnh5ei9wdWJsaWMvYXBpL3Byb2R1Y3RzJylcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgY29uc3Qgc2x1Z3MgPSBwcm9kdWN0cy5tYXAoeCA9PiB7XHJcbiAgICByZXR1cm4geC5jb2RlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHNsdWdzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWc6IHNsdWcgfSB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2x1Z1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9