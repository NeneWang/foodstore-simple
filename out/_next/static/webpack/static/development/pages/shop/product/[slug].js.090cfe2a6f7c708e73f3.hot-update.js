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
  var foundProduct = getSpecificPost(products, slug);

  var onReviewSubmit = function onReviewSubmit(data) {
    console.log(data);
  }; // console.log(getSpecificPost(products, slug))


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
    title: "Product Detail",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC9wcm9kdWN0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJTbHVnUGFnZSIsInByb2R1Y3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZm91bmRQcm9kdWN0IiwiZ2V0U3BlY2lmaWNQb3N0Iiwib25SZXZpZXdTdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJnZXRTcGVjaWZpY3Byb2R1Y3RJdGVtIiwiZmlsdGVyIiwicHJvZHVjdEl0ZW0iLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsUUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBUUMsSUFBUixHQUFpQkYsTUFBTSxDQUFDRyxLQUF4QixDQUFRRCxJQUFSO0FBQ0EsTUFBSUUsWUFBWSxHQUFHQyxlQUFlLENBQUNOLFFBQUQsRUFBV0csSUFBWCxDQUFsQzs7QUFHQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBVTtBQUMvQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDRCxHQUZELENBTjRCLENBVTVCOzs7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLFFBQVo7QUFDQSxTQUNFLEtBQUksSUFDRixNQUFDLHFFQUFEO0FBQVksU0FBSyxFQUFFSyxZQUFZLENBQUNNLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVFQUFEO0FBQVksU0FBSyxFQUFDLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyRUFBRDtBQUFnQixRQUFJLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyRUFBRDtBQUFnQixRQUFJLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQywyRUFBRDtBQUFnQixRQUFJLEVBQUVOLFlBQVksQ0FBQ00sSUFBbkM7QUFBeUMsV0FBTyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU1FLE1BQUMsK0VBQUQ7QUFBZSxRQUFJLEVBQUVOLFlBQXJCO0FBQW1DLGtCQUFjLEVBQUVFLGNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FLE1BQUMsc0dBQUQ7QUFBaUIsUUFBSSxFQUFFRixZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQUZKO0FBYUQ7O0dBMUJRTixRO1VBQ1FHLHFEOzs7S0FEUkgsUTs7QUF5Q1QsU0FBU08sZUFBVCxDQUF5Qk4sUUFBekIsRUFBbUNHLElBQW5DLEVBQXdDO0FBQ3BDO0FBRUEsTUFBTVMsc0JBQXNCLEdBQUdaLFFBQVEsQ0FBQ2EsTUFBVCxDQUFnQixVQUFBQyxXQUFXO0FBQUEsV0FBSUEsV0FBVyxDQUFDQyxJQUFaLEtBQXFCWixJQUF6QjtBQUFBLEdBQTNCLENBQS9CO0FBRUEsU0FBT1Msc0JBQVA7QUFDSDs7O0FBb0JjYix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxccHJvZHVjdFxcW3NsdWddLmpzLjA5MGNmZTJhNmY3YzcwOGU3M2YzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9wcm9kdWN0cy5qc29uXCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RCeVNsdWcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Byb2R1Y3RTZWxlY3RcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbC9Qcm9kdWN0RGV0YWlsXCI7XHJcbmltcG9ydCBJbnN0YWdyYW1Ud28gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5zdGFncmFtL0luc3RhZ3JhbVR3b1wiO1xyXG5pbXBvcnQgTGF5b3V0Rm91ciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Rm91clwiO1xyXG5pbXBvcnQge1xyXG4gIEJyZWFkY3J1bWIsXHJcbiAgQnJlYWRjcnVtYkl0ZW0sXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvT3RoZXIvQnJlYWRjcnVtYlwiO1xyXG5pbXBvcnQgUHJvZHVjdFNsaWRlVHdvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlY3Rpb25zL1Byb2R1Y3RUaHVtYi9Qcm9kdWN0U2xpZGUvUHJvZHVjdFNsaWRlVHdvXCI7XHJcblxyXG5mdW5jdGlvbiBTbHVnUGFnZSh7cHJvZHVjdHN9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgbGV0IGZvdW5kUHJvZHVjdCA9IGdldFNwZWNpZmljUG9zdChwcm9kdWN0cywgc2x1Zyk7XHJcblxyXG5cclxuICBjb25zdCBvblJldmlld1N1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhnZXRTcGVjaWZpY1Bvc3QocHJvZHVjdHMsIHNsdWcpKVxyXG5cclxuICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICByZXR1cm4gKFxyXG4gICAgdHJ1ZSAmJiAoXHJcbiAgICAgIDxMYXlvdXRGb3VyIHRpdGxlPXtmb3VuZFByb2R1Y3QubmFtZX0+XHJcbiAgICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9XCJQcm9kdWN0IERldGFpbFwiPlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJIb21lXCIgLz5cclxuICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiU2hvcFwiIC8+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gbmFtZT17Zm91bmRQcm9kdWN0Lm5hbWV9IGN1cnJlbnQgLz5cclxuICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgPFByb2R1Y3REZXRhaWwgZGF0YT17Zm91bmRQcm9kdWN0fSBvblJldmlld1N1Ym1pdD17b25SZXZpZXdTdWJtaXR9IC8+XHJcbiAgICAgICAgPFByb2R1Y3RTbGlkZVR3byBkYXRhPXtmb3VuZFByb2R1Y3R9IC8+XHJcbiAgICAgICAgPEluc3RhZ3JhbVR3byAvPlxyXG4gICAgICA8L0xheW91dEZvdXI+XHJcbiAgICApKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mb29kLWFkbWluLndhbmduZWxzb24ueHl6L3B1YmxpYy9hcGkvcHJvZHVjdHMnKVxyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3BlY2lmaWNQb3N0KHByb2R1Y3RzLCBzbHVnKXtcclxuICAgIC8vIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoKTtcclxuICBcclxuICAgIGNvbnN0IGdldFNwZWNpZmljcHJvZHVjdEl0ZW0gPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdEl0ZW0gPT4gcHJvZHVjdEl0ZW0uY29kZSA9PT0gc2x1ZyApO1xyXG4gIFxyXG4gICAgcmV0dXJuIGdldFNwZWNpZmljcHJvZHVjdEl0ZW07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblxyXG4gIC8vIGNvbnN0IHBvc3RGaWxlbmFtZXMgPSBnZXRQb3N0c0ZpbGVzKCk7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zvb2QtYWRtaW4ud2FuZ25lbHNvbi54eXovcHVibGljL2FwaS9wcm9kdWN0cycpXHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gIGNvbnN0IHNsdWdzID0gcHJvZHVjdHMubWFwKHggPT4ge1xyXG4gICAgcmV0dXJuIHguY29kZTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBzbHVncy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnOiBzbHVnIH0gfSkpLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsdWdQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==