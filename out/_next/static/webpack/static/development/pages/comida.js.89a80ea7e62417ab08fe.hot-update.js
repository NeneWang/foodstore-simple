webpackHotUpdate("static\\development\\pages\\comida.js",{

/***/ "./src/pages/comida.js":
/*!*****************************!*\
  !*** ./src/pages/comida.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hooks_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hooks-paginator */ "./node_modules/react-hooks-paginator/dist/index.esm.js");
/* harmony import */ var _components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Other/Breadcrumb */ "./src/components/Other/Breadcrumb.js");
/* harmony import */ var _common_productSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/productSelect */ "./src/common/productSelect.js");
/* harmony import */ var _components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/LayoutFour */ "./src/components/Layout/LayoutFour.js");
/* harmony import */ var _components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Shop/ShopProducts */ "./src/components/Shop/ShopProducts.js");
/* harmony import */ var _components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Shop/ShopHeader */ "./src/components/Shop/ShopHeader.js");
/* harmony import */ var _components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sections/Instagram/InstagramTwo */ "./src/components/Sections/Instagram/InstagramTwo.js");
/* harmony import */ var _components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Shop/ShopSidebar */ "./src/components/Shop/ShopSidebar.js");
var _jsxFileName = "E:\\wangn\\Assets\\ecommerce-nextjs\\Eliah-ReactNext\\eliah\\src\\pages\\comida.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import productData from "../data/products.json";






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
  console.log(productData.map(function (x) {
    return x.slug;
  }));
  return __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Comida",
    container: "wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], {
    title: "Menu de Comida",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
    name: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
    name: "Comida",
    current: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "shop -five-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-full-half",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-12 col-md-4 col-lg-3 col-xl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-12 col-md-8 col-lg-9 col-xl-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    view: currentView,
    getCurrentSort: setCurrentSort,
    getCurrentView: function getCurrentView(view) {
      return setCurrentView(view);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), !currentData || currentData.length === 0 ? __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "No product found") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gridColClass: "col-12 col-sm-6 col-lg-4 col-xl-3",
    listColClass: "col-12 col-xl-6",
    view: currentView,
    data: currentData.slice(offset, offset + pageLimit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 67,
      columnNumber: 19
    }
  })))))), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }));
}

_s(Comida, "qPY2CfDtslG7/3OzrqaX5VaTypU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Comida;
var __N_SSG = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29taWRhLmpzIl0sIm5hbWVzIjpbIkNvbWlkYSIsInByb2R1Y3REYXRhIiwiZmlsdGVyRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wUmVkdWNlcnMiLCJmaWx0ZXIiLCJwYWdlTGltaXQiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImN1cnJlbnRWaWV3Iiwic2V0Q3VycmVudFZpZXciLCJjdXJyZW50U29ydCIsInNldEN1cnJlbnRTb3J0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0ZWRQcm9kdWN0IiwiZ2V0UHJvZHVjdGJ5RmlsdGVyIiwiY2F0ZWdvcnkiLCJwcmljZVJhbmdlIiwiZnJvbSIsInRvIiwiYnJhbmQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwieCIsInNsdWciLCJ2aWV3IiwibGVuZ3RoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYztBQUM3QixNQUFNQyxVQUFVLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsTUFBOUI7QUFBQSxHQUFELENBQTlCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQUNBLGtCQUE0QkMsc0RBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXNDRixzREFBUSxFQUE5QztBQUFBLE1BQU9HLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDSixzREFBUSxFQUE5QztB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QWtCLEVBQUMsV0FEckI7QUFFRSxnQkFBWSxFQUFFVSxXQUFXLENBQUNnQixNQUY1QjtBQUdFLGFBQVMsRUFBRTFCLFNBSGI7QUFJRSxrQkFBYyxFQUFFLENBSmxCO0FBS0UsYUFBUyxFQUFFRyxTQUxiO0FBTUUsZUFBVyxFQUFFSyxXQU5mO0FBT0Usa0JBQWMsRUFBRUMsY0FQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBVEosQ0FKRixDQURGLENBREYsQ0FMRixFQTJDRSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0YsQ0FERjtBQStDRDs7R0F2RVFoQixNO1VBQ1lHLHVEOzs7S0FEWkgsTTs7QUFxRk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb21pZGEuanMuODlhODBlYTdlNjI0MTdhYjA4ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSBcInJlYWN0LWhvb2tzLXBhZ2luYXRvclwiO1xyXG5cclxuaW1wb3J0IHsgQnJlYWRjcnVtYiwgQnJlYWRjcnVtYkl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9PdGhlci9CcmVhZGNydW1iXCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RieUZpbHRlciB9IGZyb20gXCIuLi9jb21tb24vcHJvZHVjdFNlbGVjdFwiO1xyXG5pbXBvcnQgTGF5b3V0Rm91ciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Rm91clwiO1xyXG4vLyBpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4uL2RhdGEvcHJvZHVjdHMuanNvblwiO1xyXG5pbXBvcnQgU2hvcFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcFByb2R1Y3RzXCI7XHJcbmltcG9ydCBTaG9wSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcEhlYWRlclwiO1xyXG5pbXBvcnQgSW5zdGFncmFtVHdvIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25zL0luc3RhZ3JhbS9JbnN0YWdyYW1Ud29cIjtcclxuaW1wb3J0IFNob3BTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcFNpZGViYXJcIjtcclxuXHJcbmZ1bmN0aW9uIENvbWlkYSh7cHJvZHVjdERhdGF9KSB7XHJcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcFJlZHVjZXJzLmZpbHRlcik7XHJcbiAgY29uc3QgcGFnZUxpbWl0ID0gMTI7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Q3VycmVudFZpZXddID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3VycmVudFNvcnQsIHNldEN1cnJlbnRTb3J0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHNvcnRlZFByb2R1Y3QgPSBnZXRQcm9kdWN0YnlGaWx0ZXIoXHJcbiAgICAgIHByb2R1Y3REYXRhLFxyXG4gICAgICBjdXJyZW50U29ydCxcclxuICAgICAgZmlsdGVyRGF0YS5jYXRlZ29yeSxcclxuICAgICAgZmlsdGVyRGF0YS5wcmljZVJhbmdlLmZyb20sXHJcbiAgICAgIGZpbHRlckRhdGEucHJpY2VSYW5nZS50byxcclxuICAgICAgZmlsdGVyRGF0YS5icmFuZFxyXG4gICAgKTtcclxuICAgIHNldEN1cnJlbnREYXRhKHNvcnRlZFByb2R1Y3QpO1xyXG4gIH0sIFtvZmZzZXQsIGN1cnJlbnRTb3J0LCBmaWx0ZXJEYXRhXSk7XHJcblxyXG4gIFxyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3REYXRhLm1hcCh4ID0+IHtcclxuICAgIHJldHVybiB4LnNsdWc7XHJcbiAgfSkpXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRGb3VyIHRpdGxlPVwiQ29taWRhXCIgY29udGFpbmVyPVwid2lkZVwiPlxyXG4gICAgICA8QnJlYWRjcnVtYiB0aXRsZT1cIk1lbnUgZGUgQ29taWRhXCI+XHJcbiAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJIb21lXCIgLz5cclxuICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gbmFtZT1cIkNvbWlkYVwiIGN1cnJlbnQgLz5cclxuICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AgLWZpdmUtY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZnVsbC1oYWxmXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBjb2wtbGctMyBjb2wteGwtMlwiPlxyXG4gICAgICAgICAgICAgIDxTaG9wU2lkZWJhciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTggY29sLWxnLTkgY29sLXhsLTEwXCI+XHJcbiAgICAgICAgICAgICAgPFNob3BIZWFkZXJcclxuICAgICAgICAgICAgICAgIHZpZXc9e2N1cnJlbnRWaWV3fVxyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFNvcnQ9e3NldEN1cnJlbnRTb3J0fVxyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFZpZXc9eyh2aWV3KSA9PiBzZXRDdXJyZW50Vmlldyh2aWV3KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHshY3VycmVudERhdGEgfHwgY3VycmVudERhdGEubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgPGgxPk5vIHByb2R1Y3QgZm91bmQ8L2gxPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8U2hvcFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbENsYXNzPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IGNvbC14bC0zXCJcclxuICAgICAgICAgICAgICAgICAgICBsaXN0Q29sQ2xhc3M9XCJjb2wtMTIgY29sLXhsLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXc9e2N1cnJlbnRWaWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2N1cnJlbnREYXRhLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcGFnZUxpbWl0KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxQYWdpbmF0b3JcclxuICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGFpbmVyQ2xhc3M9XCJwYWdpbmF0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUmVjb3Jkcz17Y3VycmVudERhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VMaW1pdD17cGFnZUxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOZWlnaGJvdXJzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEluc3RhZ3JhbVR3byAvPlxyXG4gICAgPC9MYXlvdXRGb3VyPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZm9vZC1hZG1pbi53YW5nbmVsc29uLnh5ei9wdWJsaWMvYXBpL3Byb2R1Y3RzJylcclxuICBjb25zdCBwcm9kdWN0RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdERhdGEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbWlkYVxyXG4iXSwic291cmNlUm9vdCI6IiJ9