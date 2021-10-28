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
  var slug = router.query.slug;
  var foundProduct = getSpecificPost(products, slug)[0];

  var onReviewSubmit = function onReviewSubmit(data) {
    console.log(data);
  };

  console.log(getSpecificPost(products, slug));
  console.log(products);
  return  true && __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: foundProduct.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["Breadcrumb"], {
    title: foundProduct.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: "Shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: foundProduct.name,
    current: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })), __jsx(_components_ProductDetail_ProductDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: foundProduct,
    onReviewSubmit: onReviewSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(_components_Sections_ProductThumb_ProductSlide_ProductSlideTwo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: foundProduct,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
    return productItem.code === slug;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC9wcm9kdWN0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJTbHVnUGFnZSIsInByb2R1Y3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZm91bmRQcm9kdWN0IiwiZ2V0U3BlY2lmaWNQb3N0Iiwib25SZXZpZXdTdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJnZXRTcGVjaWZpY3Byb2R1Y3RJdGVtIiwiZmlsdGVyIiwicHJvZHVjdEl0ZW0iLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsUUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBUUMsSUFBUixHQUFpQkYsTUFBTSxDQUFDRyxLQUF4QixDQUFRRCxJQUFSO0FBQ0EsTUFBSUUsWUFBWSxHQUFHQyxlQUFlLENBQUNOLFFBQUQsRUFBV0csSUFBWCxDQUFmLENBQWdDLENBQWhDLENBQW5COztBQUdBLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQy9CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEdBRkQ7O0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixlQUFlLENBQUNOLFFBQUQsRUFBV0csSUFBWCxDQUEzQjtBQUVBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBWjtBQUNBLFNBQ0UsS0FBSSxJQUNGLE1BQUMscUVBQUQ7QUFBWSxTQUFLLEVBQUVLLFlBQVksQ0FBQ00sSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBWSxTQUFLLEVBQUVOLFlBQVksQ0FBQ00sSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkVBQUQ7QUFBZ0IsUUFBSSxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkVBQUQ7QUFBZ0IsUUFBSSxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsMkVBQUQ7QUFBZ0IsUUFBSSxFQUFFTixZQUFZLENBQUNNLElBQW5DO0FBQXlDLFdBQU8sTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFNRSxNQUFDLCtFQUFEO0FBQWUsUUFBSSxFQUFFTixZQUFyQjtBQUFtQyxrQkFBYyxFQUFFRSxjQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLHNHQUFEO0FBQWlCLFFBQUksRUFBRUYsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyxtRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FGSjtBQWFEOztHQTFCUU4sUTtVQUNRRyxxRDs7O0tBRFJILFE7O0FBeUNULFNBQVNPLGVBQVQsQ0FBeUJOLFFBQXpCLEVBQW1DRyxJQUFuQyxFQUF3QztBQUNwQztBQUVBLE1BQU1TLHNCQUFzQixHQUFHWixRQUFRLENBQUNhLE1BQVQsQ0FBZ0IsVUFBQUMsV0FBVztBQUFBLFdBQUlBLFdBQVcsQ0FBQ0MsSUFBWixLQUFxQlosSUFBekI7QUFBQSxHQUEzQixDQUEvQjtBQUVBLFNBQU9TLHNCQUFQO0FBQ0g7OztBQW9CY2IsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNob3BcXHByb2R1Y3RcXFtzbHVnXS5qcy4yNWYwMzM4MTdiMzBkOGM4YjcxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uLy4uL2RhdGEvcHJvZHVjdHMuanNvblwiO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0QnlTbHVnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wcm9kdWN0U2VsZWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWwvUHJvZHVjdERldGFpbFwiO1xyXG5pbXBvcnQgSW5zdGFncmFtVHdvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlY3Rpb25zL0luc3RhZ3JhbS9JbnN0YWdyYW1Ud29cIjtcclxuaW1wb3J0IExheW91dEZvdXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dEZvdXJcIjtcclxuaW1wb3J0IHtcclxuICBCcmVhZGNydW1iLFxyXG4gIEJyZWFkY3J1bWJJdGVtLFxyXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL090aGVyL0JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IFByb2R1Y3RTbGlkZVR3byBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9kdWN0VGh1bWIvUHJvZHVjdFNsaWRlL1Byb2R1Y3RTbGlkZVR3b1wiO1xyXG5cclxuZnVuY3Rpb24gU2x1Z1BhZ2Uoe3Byb2R1Y3RzfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGxldCBmb3VuZFByb2R1Y3QgPSBnZXRTcGVjaWZpY1Bvc3QocHJvZHVjdHMsIHNsdWcpWzBdO1xyXG5cclxuXHJcbiAgY29uc3Qgb25SZXZpZXdTdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coZ2V0U3BlY2lmaWNQb3N0KHByb2R1Y3RzLCBzbHVnKSlcclxuXHJcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgcmV0dXJuIChcclxuICAgIHRydWUgJiYgKFxyXG4gICAgICA8TGF5b3V0Rm91ciB0aXRsZT17Zm91bmRQcm9kdWN0Lm5hbWV9PlxyXG4gICAgICAgIDxCcmVhZGNydW1iIHRpdGxlPXtmb3VuZFByb2R1Y3QubmFtZX0+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gbmFtZT1cIkhvbWVcIiAvPlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJTaG9wXCIgLz5cclxuICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPXtmb3VuZFByb2R1Y3QubmFtZX0gY3VycmVudCAvPlxyXG4gICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICA8UHJvZHVjdERldGFpbCBkYXRhPXtmb3VuZFByb2R1Y3R9IG9uUmV2aWV3U3VibWl0PXtvblJldmlld1N1Ym1pdH0gLz5cclxuICAgICAgICA8UHJvZHVjdFNsaWRlVHdvIGRhdGE9e2ZvdW5kUHJvZHVjdH0gLz5cclxuICAgICAgICA8SW5zdGFncmFtVHdvIC8+XHJcbiAgICAgIDwvTGF5b3V0Rm91cj5cclxuICAgICkpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zvb2QtYWRtaW4ud2FuZ25lbHNvbi54eXovcHVibGljL2FwaS9wcm9kdWN0cycpXHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0cyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTcGVjaWZpY1Bvc3QocHJvZHVjdHMsIHNsdWcpe1xyXG4gICAgLy8gY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cygpO1xyXG4gIFxyXG4gICAgY29uc3QgZ2V0U3BlY2lmaWNwcm9kdWN0SXRlbSA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0SXRlbSA9PiBwcm9kdWN0SXRlbS5jb2RlID09PSBzbHVnICk7XHJcbiAgXHJcbiAgICByZXR1cm4gZ2V0U3BlY2lmaWNwcm9kdWN0SXRlbTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHJcbiAgLy8gY29uc3QgcG9zdEZpbGVuYW1lcyA9IGdldFBvc3RzRmlsZXMoKTtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZm9vZC1hZG1pbi53YW5nbmVsc29uLnh5ei9wdWJsaWMvYXBpL3Byb2R1Y3RzJylcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgY29uc3Qgc2x1Z3MgPSBwcm9kdWN0cy5tYXAoeCA9PiB7XHJcbiAgICByZXR1cm4geC5jb2RlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHNsdWdzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWc6IHNsdWcgfSB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2x1Z1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9