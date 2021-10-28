webpackHotUpdate("static\\development\\pages\\comida.js",{

/***/ "./src/pages/comida.js":
/*!*****************************!*\
  !*** ./src/pages/comida.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hooks_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hooks-paginator */ "./node_modules/react-hooks-paginator/dist/index.esm.js");
/* harmony import */ var _components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Other/Breadcrumb */ "./src/components/Other/Breadcrumb.js");
/* harmony import */ var _common_productSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/productSelect */ "./src/common/productSelect.js");
/* harmony import */ var _components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/LayoutFour */ "./src/components/Layout/LayoutFour.js");
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/products.json */ "./src/data/products.json");
var _data_products_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/products.json */ "./src/data/products.json", 1);
/* harmony import */ var _components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Shop/ShopProducts */ "./src/components/Shop/ShopProducts.js");
/* harmony import */ var _components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Shop/ShopHeader */ "./src/components/Shop/ShopHeader.js");
/* harmony import */ var _components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Sections/Instagram/InstagramTwo */ "./src/components/Sections/Instagram/InstagramTwo.js");
/* harmony import */ var _components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Shop/ShopSidebar */ "./src/components/Shop/ShopSidebar.js");
var _jsxFileName = "E:\\wangn\\Assets\\ecommerce-nextjs\\Eliah-ReactNext\\eliah\\src\\pages\\comida.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Comida(_ref) {
  _s();

  var productData = _ref.productData;
  var filterData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.shopReducers.filter;
  });
  var pageLimit = 12;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      offset = _useState[0],
      setOffset = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      currentView = _useState2[0],
      setCurrentView = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      currentSort = _useState3[0],
      setCurrentSort = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      currentData = _useState5[0],
      setCurrentData = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var sortedProduct = Object(_common_productSelect__WEBPACK_IMPORTED_MODULE_4__["getProductbyFilter"])(productData, currentSort, filterData.category, filterData.priceRange.from, filterData.priceRange.to, filterData.brand);
    setCurrentData(sortedProduct);
  }, [offset, currentSort, filterData]);
  return __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Comida",
    container: "wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], {
    title: "Menu de Comida",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
    name: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
    name: "Comida",
    current: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "shop -five-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-full-half",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-12 col-md-4 col-lg-3 col-xl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-12 col-md-8 col-lg-9 col-xl-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    view: currentView,
    getCurrentSort: setCurrentSort,
    getCurrentView: function getCurrentView(view) {
      return setCurrentView(view);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), !currentData || currentData.length === 0 ? __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "No product found") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_7__["default"], {
    gridColClass: "col-12 col-sm-6 col-lg-4 col-xl-3",
    listColClass: "col-12 col-xl-6",
    view: currentView,
    data: currentData.slice(offset, offset + pageLimit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }), __jsx(react_hooks_paginator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageContainerClass: "paginator",
    totalRecords: currentData.length,
    pageLimit: pageLimit,
    pageNeighbours: 2,
    setOffset: setOffset,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  })))))), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }));
}

_s(Comida, "qPY2CfDtslG7/3OzrqaX5VaTypU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Comida;
/* harmony default export */ __webpack_exports__["default"] = (Comida);

var _c;

$RefreshReg$(_c, "Comida");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29taWRhLmpzIl0sIm5hbWVzIjpbIkNvbWlkYSIsInByb2R1Y3REYXRhIiwiZmlsdGVyRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wUmVkdWNlcnMiLCJmaWx0ZXIiLCJwYWdlTGltaXQiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImN1cnJlbnRWaWV3Iiwic2V0Q3VycmVudFZpZXciLCJjdXJyZW50U29ydCIsInNldEN1cnJlbnRTb3J0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0ZWRQcm9kdWN0IiwiZ2V0UHJvZHVjdGJ5RmlsdGVyIiwiY2F0ZWdvcnkiLCJwcmljZVJhbmdlIiwiZnJvbSIsInRvIiwiYnJhbmQiLCJ2aWV3IiwibGVuZ3RoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjO0FBQzdCLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxNQUE5QjtBQUFBLEdBQUQsQ0FBOUI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsRUFBbEI7O0FBQ0Esa0JBQTRCQyxzREFBUSxDQUFDLENBQUQsQ0FBcEM7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBc0NGLHNEQUFRLEVBQTlDO0FBQUEsTUFBT0csV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBc0NKLHNEQUFRLEVBQTlDO0FBQUEsTUFBT0ssV0FBUDtBQUFBLE1BQW9CQyxj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RUFBRUMsY0FQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBVEosQ0FKRixDQURGLENBREYsQ0FMRixFQTJDRSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0YsQ0FERjtBQStDRDs7R0FsRVFoQixNO1VBQ1lHLHVEOzs7S0FEWkgsTTtBQXFFTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbWlkYS5qcy4xNTFlNzY4NDJmNWRlZjVmOTQ2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2luYXRvciBmcm9tIFwicmVhY3QtaG9va3MtcGFnaW5hdG9yXCI7XHJcblxyXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbSB9IGZyb20gXCIuLi9jb21wb25lbnRzL090aGVyL0JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdGJ5RmlsdGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9wcm9kdWN0U2VsZWN0XCI7XHJcbmltcG9ydCBMYXlvdXRGb3VyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRGb3VyXCI7XHJcbmltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi4vZGF0YS9wcm9kdWN0cy5qc29uXCI7XHJcbmltcG9ydCBTaG9wUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hvcC9TaG9wUHJvZHVjdHNcIjtcclxuaW1wb3J0IFNob3BIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hvcC9TaG9wSGVhZGVyXCI7XHJcbmltcG9ydCBJbnN0YWdyYW1Ud28gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5zdGFncmFtL0luc3RhZ3JhbVR3b1wiO1xyXG5pbXBvcnQgU2hvcFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hvcC9TaG9wU2lkZWJhclwiO1xyXG5cclxuZnVuY3Rpb24gQ29taWRhKHtwcm9kdWN0RGF0YX0pIHtcclxuICBjb25zdCBmaWx0ZXJEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcnMuZmlsdGVyKTtcclxuICBjb25zdCBwYWdlTGltaXQgPSAxMjtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2N1cnJlbnRWaWV3LCBzZXRDdXJyZW50Vmlld10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjdXJyZW50U29ydCwgc2V0Q3VycmVudFNvcnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgc29ydGVkUHJvZHVjdCA9IGdldFByb2R1Y3RieUZpbHRlcihcclxuICAgICAgcHJvZHVjdERhdGEsXHJcbiAgICAgIGN1cnJlbnRTb3J0LFxyXG4gICAgICBmaWx0ZXJEYXRhLmNhdGVnb3J5LFxyXG4gICAgICBmaWx0ZXJEYXRhLnByaWNlUmFuZ2UuZnJvbSxcclxuICAgICAgZmlsdGVyRGF0YS5wcmljZVJhbmdlLnRvLFxyXG4gICAgICBmaWx0ZXJEYXRhLmJyYW5kXHJcbiAgICApO1xyXG4gICAgc2V0Q3VycmVudERhdGEoc29ydGVkUHJvZHVjdCk7XHJcbiAgfSwgW29mZnNldCwgY3VycmVudFNvcnQsIGZpbHRlckRhdGFdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dEZvdXIgdGl0bGU9XCJDb21pZGFcIiBjb250YWluZXI9XCJ3aWRlXCI+XHJcbiAgICAgIDxCcmVhZGNydW1iIHRpdGxlPVwiTWVudSBkZSBDb21pZGFcIj5cclxuICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gbmFtZT1cIkhvbWVcIiAvPlxyXG4gICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiQ29taWRhXCIgY3VycmVudCAvPlxyXG4gICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcCAtZml2ZS1jb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mdWxsLWhhbGZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IGNvbC1sZy0zIGNvbC14bC0yXCI+XHJcbiAgICAgICAgICAgICAgPFNob3BTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctOSBjb2wteGwtMTBcIj5cclxuICAgICAgICAgICAgICA8U2hvcEhlYWRlclxyXG4gICAgICAgICAgICAgICAgdmlldz17Y3VycmVudFZpZXd9XHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50U29ydD17c2V0Q3VycmVudFNvcnR9XHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50Vmlldz17KHZpZXcpID0+IHNldEN1cnJlbnRWaWV3KHZpZXcpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgeyFjdXJyZW50RGF0YSB8fCBjdXJyZW50RGF0YS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDE+Tm8gcHJvZHVjdCBmb3VuZDwvaDE+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxTaG9wUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICBncmlkQ29sQ2xhc3M9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgY29sLXhsLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RDb2xDbGFzcz1cImNvbC0xMiBjb2wteGwtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlldz17Y3VycmVudFZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y3VycmVudERhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwYWdlTGltaXQpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFBhZ2luYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb250YWluZXJDbGFzcz1cInBhZ2luYXRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSZWNvcmRzPXtjdXJyZW50RGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUxpbWl0PXtwYWdlTGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU5laWdoYm91cnM9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW5zdGFncmFtVHdvIC8+XHJcbiAgICA8L0xheW91dEZvdXI+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbWlkYVxyXG4iXSwic291cmNlUm9vdCI6IiJ9