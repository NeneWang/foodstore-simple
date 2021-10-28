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
  var foundProduct = getSpecificPost(products, slug); // const onReviewSubmit = (data) => {
  //   console.log(data);
  // };
  // console.log(getSpecificPost(products, slug))

  console.log(products);
  return  true && __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: foundProduct.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["Breadcrumb"], {
    title: "Product Detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: "Shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    name: foundProduct.name,
    current: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  })), " ", __jsx(_components_ProductDetail_ProductDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: foundProduct,
    onReviewSubmit: onReviewSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 20
    }
  }), " ", __jsx(_components_Sections_ProductThumb_ProductSlide_ProductSlideTwo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: foundProduct,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 10
    }
  }), " ", __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC9wcm9kdWN0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJTbHVnUGFnZSIsInByb2R1Y3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZm91bmRQcm9kdWN0IiwiZ2V0U3BlY2lmaWNQb3N0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJvblJldmlld1N1Ym1pdCIsImdldFNwZWNpZmljcHJvZHVjdEl0ZW0iLCJmaWx0ZXIiLCJwcm9kdWN0SXRlbSIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUlBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQSxTQUFTQSxRQUFULE9BRUc7QUFBQTs7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFDRUMsSUFERixHQUVJRixNQUFNLENBQUNHLEtBRlgsQ0FDRUQsSUFERjtBQUdBLE1BQUlFLFlBQVksR0FBR0MsZUFBZSxDQUFDTixRQUFELEVBQVdHLElBQVgsQ0FBbEMsQ0FMQyxDQVFEO0FBQ0E7QUFDQTtBQUVBOztBQUVBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWjtBQUNBLFNBQ0UsS0FBSSxJQUFNLE1BQ1IscUVBRFE7QUFDRyxTQUFLLEVBQ2RLLFlBQVksQ0FBQ0ksSUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSVIsTUFDQSx1RUFEQTtBQUNXLFNBQUssRUFBRyxnQkFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBLE1BQ0EsMkVBREE7QUFDZSxRQUFJLEVBQUcsTUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLEVBSUEsTUFDQSwyRUFEQTtBQUNlLFFBQUksRUFBRyxNQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkEsRUFNQSxNQUNBLDJFQURBO0FBQ2UsUUFBSSxFQUNqQkosWUFBWSxDQUFDSSxJQUZmO0FBSUEsV0FBTyxNQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOQSxDQUpRLE9BZ0JLLE1BQ2IsK0VBRGE7QUFDQyxRQUFJLEVBQ2hCSixZQUZXO0FBSWIsa0JBQWMsRUFDWkssY0FMVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJMLE9BdUJMLE1BQ0gsc0dBREc7QUFDYSxRQUFJLEVBQ2xCTCxZQUZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkssT0EyQkwsTUFDSCxtRkFERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JLLENBRFo7QUFpQ0Q7O0dBbERRTixRO1VBR1FHLHFEOzs7S0FIUkgsUTs7QUFpRVQsU0FBU08sZUFBVCxDQUF5Qk4sUUFBekIsRUFBbUNHLElBQW5DLEVBQXlDO0FBQ3ZDO0FBRUEsTUFBTVEsc0JBQXNCLEdBQUdYLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixVQUFBQyxXQUFXO0FBQUEsV0FBSUEsV0FBVyxDQUFDQyxJQUFaLEtBQXFCWCxJQUF6QjtBQUFBLEdBQTNCLENBQS9CO0FBRUEsU0FBT1Esc0JBQVA7QUFDRDs7O0FBd0JjWix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxccHJvZHVjdFxcW3NsdWddLmpzLmFjZjllOTA1NjVjYzU3Y2UwOTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZVJvdXRlclxyXG59IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi8uLi8uLi9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcclxuaW1wb3J0IHtcclxuICBnZXRQcm9kdWN0QnlTbHVnXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wcm9kdWN0U2VsZWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWwvUHJvZHVjdERldGFpbFwiO1xyXG5pbXBvcnQgSW5zdGFncmFtVHdvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlY3Rpb25zL0luc3RhZ3JhbS9JbnN0YWdyYW1Ud29cIjtcclxuaW1wb3J0IExheW91dEZvdXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dEZvdXJcIjtcclxuaW1wb3J0IHtcclxuICBCcmVhZGNydW1iLFxyXG4gIEJyZWFkY3J1bWJJdGVtLFxyXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL090aGVyL0JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IFByb2R1Y3RTbGlkZVR3byBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9kdWN0VGh1bWIvUHJvZHVjdFNsaWRlL1Byb2R1Y3RTbGlkZVR3b1wiO1xyXG5cclxuZnVuY3Rpb24gU2x1Z1BhZ2Uoe1xyXG4gIHByb2R1Y3RzXHJcbn0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7XHJcbiAgICBzbHVnXHJcbiAgfSA9IHJvdXRlci5xdWVyeTtcclxuICBsZXQgZm91bmRQcm9kdWN0ID0gZ2V0U3BlY2lmaWNQb3N0KHByb2R1Y3RzLCBzbHVnKTtcclxuXHJcblxyXG4gIC8vIGNvbnN0IG9uUmV2aWV3U3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGdldFNwZWNpZmljUG9zdChwcm9kdWN0cywgc2x1ZykpXHJcblxyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxyXG4gIHJldHVybiAoXHJcbiAgICB0cnVlICYmICggPFxyXG4gICAgICBMYXlvdXRGb3VyIHRpdGxlID0ge1xyXG4gICAgICAgIGZvdW5kUHJvZHVjdC5uYW1lXHJcbiAgICAgIH0gPlxyXG4gICAgICA8XHJcbiAgICAgIEJyZWFkY3J1bWIgdGl0bGUgPSBcIlByb2R1Y3QgRGV0YWlsXCIgPlxyXG4gICAgICA8XHJcbiAgICAgIEJyZWFkY3J1bWJJdGVtIG5hbWUgPSBcIkhvbWVcIiAvID5cclxuICAgICAgPFxyXG4gICAgICBCcmVhZGNydW1iSXRlbSBuYW1lID0gXCJTaG9wXCIgLyA+XHJcbiAgICAgIDxcclxuICAgICAgQnJlYWRjcnVtYkl0ZW0gbmFtZSA9IHtcclxuICAgICAgICBmb3VuZFByb2R1Y3QubmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgLyA+XHJcbiAgICAgIDxcclxuICAgICAgL0JyZWFkY3J1bWI+IDxcclxuICAgICAgUHJvZHVjdERldGFpbCBkYXRhID0ge1xyXG4gICAgICAgIGZvdW5kUHJvZHVjdFxyXG4gICAgICB9XHJcbiAgICAgIG9uUmV2aWV3U3VibWl0ID0ge1xyXG4gICAgICAgIG9uUmV2aWV3U3VibWl0XHJcbiAgICAgIH1cclxuICAgICAgLz4gPFxyXG4gICAgICBQcm9kdWN0U2xpZGVUd28gZGF0YSA9IHtcclxuICAgICAgICBmb3VuZFByb2R1Y3RcclxuICAgICAgfVxyXG4gICAgICAvPiA8XHJcbiAgICAgIEluc3RhZ3JhbVR3byAvID5cclxuICAgICAgPFxyXG4gICAgICAvTGF5b3V0Rm91cj5cclxuICAgICkpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zvb2QtYWRtaW4ud2FuZ25lbHNvbi54eXovcHVibGljL2FwaS9wcm9kdWN0cycpXHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0cyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTcGVjaWZpY1Bvc3QocHJvZHVjdHMsIHNsdWcpIHtcclxuICAvLyBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKCk7XHJcblxyXG4gIGNvbnN0IGdldFNwZWNpZmljcHJvZHVjdEl0ZW0gPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdEl0ZW0gPT4gcHJvZHVjdEl0ZW0uY29kZSA9PT0gc2x1Zyk7XHJcblxyXG4gIHJldHVybiBnZXRTcGVjaWZpY3Byb2R1Y3RJdGVtO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cclxuICAvLyBjb25zdCBwb3N0RmlsZW5hbWVzID0gZ2V0UG9zdHNGaWxlcygpO1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mb29kLWFkbWluLndhbmduZWxzb24ueHl6L3B1YmxpYy9hcGkvcHJvZHVjdHMnKVxyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuICBjb25zdCBzbHVncyA9IHByb2R1Y3RzLm1hcCh4ID0+IHtcclxuICAgIHJldHVybiB4LmNvZGU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogc2x1Z3MubWFwKChzbHVnKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBzbHVnXHJcbiAgICAgIH1cclxuICAgIH0pKSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbHVnUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=