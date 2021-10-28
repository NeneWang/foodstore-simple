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
var _jsxFileName = "E:\\wangn\\Assets\\ecommerce-nextjs\\Eliah-ReactNext\\eliah\\src\\pages\\shop\\product\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import products from "../../../data/products.json";








function SlugPage(_ref) {
  var products = _ref.products;
  // const router = useRouter();
  // const { slug } = router.query;
  // let foundProduct = getProductBySlug(products, slug);
  // const onReviewSubmit = (data) => {
  //   console.log(data);
  // };
  return  true && __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: foundProduct.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["Breadcrumb"], {
    title: "Product Detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: "Shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: foundProduct.name,
    current: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), __jsx(_components_ProductDetail_ProductDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: foundProduct,
    onReviewSubmit: onReviewSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_components_Sections_ProductThumb_ProductSlide_ProductSlideTwo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: products,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }));
}

_c = SlugPage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC9wcm9kdWN0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJTbHVnUGFnZSIsInByb2R1Y3RzIiwiZm91bmRQcm9kdWN0IiwibmFtZSIsIm9uUmV2aWV3U3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBLFNBQVNBLFFBQVQsT0FBOEI7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FDRSxLQUFJLElBQ0YsTUFBQyxxRUFBRDtBQUFZLFNBQUssRUFBRUMsWUFBWSxDQUFDQyxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUFZLFNBQUssRUFBQyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkVBQUQ7QUFBZ0IsUUFBSSxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkVBQUQ7QUFBZ0IsUUFBSSxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsMkVBQUQ7QUFBZ0IsUUFBSSxFQUFFRCxZQUFZLENBQUNDLElBQW5DO0FBQXlDLFdBQU8sTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFNRSxNQUFDLCtFQUFEO0FBQWUsUUFBSSxFQUFFRCxZQUFyQjtBQUFtQyxrQkFBYyxFQUFFRSxjQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLHNHQUFEO0FBQWlCLFFBQUksRUFBRUgsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyxtRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FGSjtBQWNEOztLQXJCUUQsUTs7QUFzRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaG9wXFxwcm9kdWN0XFxbc2x1Z10uanMuM2U4OTE2MzIyY2ViZjY1MDViMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi8uLi8uLi9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5U2x1ZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJvZHVjdFNlbGVjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsL1Byb2R1Y3REZXRhaWxcIjtcclxuaW1wb3J0IEluc3RhZ3JhbVR3byBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWN0aW9ucy9JbnN0YWdyYW0vSW5zdGFncmFtVHdvXCI7XHJcbmltcG9ydCBMYXlvdXRGb3VyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRGb3VyXCI7XHJcbmltcG9ydCB7XHJcbiAgQnJlYWRjcnVtYixcclxuICBCcmVhZGNydW1iSXRlbSxcclxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9PdGhlci9CcmVhZGNydW1iXCI7XHJcbmltcG9ydCBQcm9kdWN0U2xpZGVUd28gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvZHVjdFRodW1iL1Byb2R1Y3RTbGlkZS9Qcm9kdWN0U2xpZGVUd29cIjtcclxuXHJcbmZ1bmN0aW9uIFNsdWdQYWdlKHtwcm9kdWN0c30pIHtcclxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICAvLyBsZXQgZm91bmRQcm9kdWN0ID0gZ2V0UHJvZHVjdEJ5U2x1Zyhwcm9kdWN0cywgc2x1Zyk7XHJcbiAgLy8gY29uc3Qgb25SZXZpZXdTdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gfTtcclxuICByZXR1cm4gKFxyXG4gICAgdHJ1ZSAmJiAoXHJcbiAgICAgIDxMYXlvdXRGb3VyIHRpdGxlPXtmb3VuZFByb2R1Y3QubmFtZX0+XHJcbiAgICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9XCJQcm9kdWN0IERldGFpbFwiPlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJIb21lXCIgLz5cclxuICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiU2hvcFwiIC8+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gbmFtZT17Zm91bmRQcm9kdWN0Lm5hbWV9IGN1cnJlbnQgLz5cclxuICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgPFByb2R1Y3REZXRhaWwgZGF0YT17Zm91bmRQcm9kdWN0fSBvblJldmlld1N1Ym1pdD17b25SZXZpZXdTdWJtaXR9IC8+XHJcbiAgICAgICAgPFByb2R1Y3RTbGlkZVR3byBkYXRhPXtwcm9kdWN0c30gLz5cclxuICAgICAgICA8SW5zdGFncmFtVHdvIC8+XHJcbiAgICAgIDwvTGF5b3V0Rm91cj5cclxuICAgIClcclxuICApO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mb29kLWFkbWluLndhbmduZWxzb24ueHl6L3B1YmxpYy9hcGkvcHJvZHVjdHMnKVxyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHJcbiAgLy8gY29uc3QgcG9zdEZpbGVuYW1lcyA9IGdldFBvc3RzRmlsZXMoKTtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZm9vZC1hZG1pbi53YW5nbmVsc29uLnh5ei9wdWJsaWMvYXBpL3Byb2R1Y3RzJylcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgY29uc3Qgc2x1Z3MgPSBwcm9kdWN0cy5tYXAoeCA9PiB7XHJcbiAgICByZXR1cm4geC5jb2RlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHNsdWdzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWc6IHNsdWcgfSB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2x1Z1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9