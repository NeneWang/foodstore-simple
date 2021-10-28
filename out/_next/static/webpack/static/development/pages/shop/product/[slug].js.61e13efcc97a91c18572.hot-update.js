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
  })), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC9wcm9kdWN0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJTbHVnUGFnZSIsInByb2R1Y3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZm91bmRQcm9kdWN0IiwiZ2V0U3BlY2lmaWNQb3N0Iiwib25SZXZpZXdTdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJnZXRTcGVjaWZpY3Byb2R1Y3RJdGVtIiwiZmlsdGVyIiwicHJvZHVjdEl0ZW0iLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsUUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBUUMsSUFBUixHQUFpQkYsTUFBTSxDQUFDRyxLQUF4QixDQUFRRCxJQUFSO0FBQ0EsTUFBSUUsWUFBWSxHQUFHQyxlQUFlLENBQUNOLFFBQUQsRUFBV0csSUFBWCxDQUFsQzs7QUFHQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBVTtBQUMvQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDRCxHQUZELENBTjRCLENBVTVCOzs7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLFFBQVo7QUFDQSxTQUNFLEtBQUksSUFDRixNQUFDLHFFQUFEO0FBQVksU0FBSyxFQUFFSyxZQUFZLENBQUNNLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVFQUFEO0FBQVksU0FBSyxFQUFDLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyRUFBRDtBQUFnQixRQUFJLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyRUFBRDtBQUFnQixRQUFJLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQywyRUFBRDtBQUFnQixRQUFJLEVBQUVOLFlBQVksQ0FBQ00sSUFBbkM7QUFBeUMsV0FBTyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQVFFLE1BQUMsbUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBRko7QUFhRDs7R0ExQlFaLFE7VUFDUUcscUQ7OztLQURSSCxROztBQXlDVCxTQUFTTyxlQUFULENBQXlCTixRQUF6QixFQUFtQ0csSUFBbkMsRUFBd0M7QUFDcEM7QUFFQSxNQUFNUyxzQkFBc0IsR0FBR1osUUFBUSxDQUFDYSxNQUFULENBQWdCLFVBQUFDLFdBQVc7QUFBQSxXQUFJQSxXQUFXLENBQUNDLElBQVosS0FBcUJaLElBQXpCO0FBQUEsR0FBM0IsQ0FBL0I7QUFFQSxTQUFPUyxzQkFBUDtBQUNIOzs7QUFvQmNiLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaG9wXFxwcm9kdWN0XFxbc2x1Z10uanMuNjFlMTNlZmNjOTdhOTFjMTg1NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi8uLi8uLi9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5U2x1ZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJvZHVjdFNlbGVjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsL1Byb2R1Y3REZXRhaWxcIjtcclxuaW1wb3J0IEluc3RhZ3JhbVR3byBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWN0aW9ucy9JbnN0YWdyYW0vSW5zdGFncmFtVHdvXCI7XHJcbmltcG9ydCBMYXlvdXRGb3VyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRGb3VyXCI7XHJcbmltcG9ydCB7XHJcbiAgQnJlYWRjcnVtYixcclxuICBCcmVhZGNydW1iSXRlbSxcclxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9PdGhlci9CcmVhZGNydW1iXCI7XHJcbmltcG9ydCBQcm9kdWN0U2xpZGVUd28gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvZHVjdFRodW1iL1Byb2R1Y3RTbGlkZS9Qcm9kdWN0U2xpZGVUd29cIjtcclxuXHJcbmZ1bmN0aW9uIFNsdWdQYWdlKHtwcm9kdWN0c30pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICBsZXQgZm91bmRQcm9kdWN0ID0gZ2V0U3BlY2lmaWNQb3N0KHByb2R1Y3RzLCBzbHVnKTtcclxuXHJcblxyXG4gIGNvbnN0IG9uUmV2aWV3U3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGdldFNwZWNpZmljUG9zdChwcm9kdWN0cywgc2x1ZykpXHJcblxyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxyXG4gIHJldHVybiAoXHJcbiAgICB0cnVlICYmIChcclxuICAgICAgPExheW91dEZvdXIgdGl0bGU9e2ZvdW5kUHJvZHVjdC5uYW1lfT5cclxuICAgICAgICA8QnJlYWRjcnVtYiB0aXRsZT1cIlByb2R1Y3QgRGV0YWlsXCI+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gbmFtZT1cIkhvbWVcIiAvPlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJTaG9wXCIgLz5cclxuICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPXtmb3VuZFByb2R1Y3QubmFtZX0gY3VycmVudCAvPlxyXG4gICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICB7LyogPFByb2R1Y3REZXRhaWwgZGF0YT17Zm91bmRQcm9kdWN0fSBvblJldmlld1N1Ym1pdD17b25SZXZpZXdTdWJtaXR9IC8+XHJcbiAgICAgICAgPFByb2R1Y3RTbGlkZVR3byBkYXRhPXtmb3VuZFByb2R1Y3R9IC8+ICovfVxyXG4gICAgICAgIDxJbnN0YWdyYW1Ud28gLz5cclxuICAgICAgPC9MYXlvdXRGb3VyPlxyXG4gICAgKSlcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZm9vZC1hZG1pbi53YW5nbmVsc29uLnh5ei9wdWJsaWMvYXBpL3Byb2R1Y3RzJylcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3RzLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNwZWNpZmljUG9zdChwcm9kdWN0cywgc2x1Zyl7XHJcbiAgICAvLyBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKCk7XHJcbiAgXHJcbiAgICBjb25zdCBnZXRTcGVjaWZpY3Byb2R1Y3RJdGVtID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3RJdGVtID0+IHByb2R1Y3RJdGVtLmNvZGUgPT09IHNsdWcgKTtcclxuICBcclxuICAgIHJldHVybiBnZXRTcGVjaWZpY3Byb2R1Y3RJdGVtO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cclxuICAvLyBjb25zdCBwb3N0RmlsZW5hbWVzID0gZ2V0UG9zdHNGaWxlcygpO1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mb29kLWFkbWluLndhbmduZWxzb24ueHl6L3B1YmxpYy9hcGkvcHJvZHVjdHMnKVxyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuICBjb25zdCBzbHVncyA9IHByb2R1Y3RzLm1hcCh4ID0+IHtcclxuICAgIHJldHVybiB4LmNvZGU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogc2x1Z3MubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1Zzogc2x1ZyB9IH0pKSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbHVnUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=