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
  return __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Comida",
    container: "wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], {
    title: "Menu de Comida",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
    name: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
    name: "Comida",
    current: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  })), " ", __jsx("div", {
    className: "shop -five-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 18
    }
  }, __jsx("div", {
    className: "container-full-half",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-12 col-md-4 col-lg-3 col-xl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  })), " ", __jsx("div", {
    className: "col-12 col-md-8 col-lg-9 col-xl-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
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
      lineNumber: 70,
      columnNumber: 5
    }
  }), " ", !currentData || currentData.length === 0 ? __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 52
    }
  }, " No product found ") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gridColClass: "col-12 col-sm-6 col-lg-4 col-xl-3",
    listColClass: "col-12 col-xl-6",
    view: currentView,
    data: currentData.slice(offset, offset + pageLimit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
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
      lineNumber: 96,
      columnNumber: 9
    }
  }), " "), " "), " "), " "), " "), " ", __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29taWRhLmpzIl0sIm5hbWVzIjpbIkNvbWlkYSIsInByb2R1Y3REYXRhIiwiZmlsdGVyRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wUmVkdWNlcnMiLCJmaWx0ZXIiLCJwYWdlTGltaXQiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImN1cnJlbnRWaWV3Iiwic2V0Q3VycmVudFZpZXciLCJjdXJyZW50U29ydCIsInNldEN1cnJlbnRTb3J0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0ZWRQcm9kdWN0IiwiZ2V0UHJvZHVjdGJ5RmlsdGVyIiwiY2F0ZWdvcnkiLCJwcmljZVJhbmdlIiwiZnJvbSIsInRvIiwiYnJhbmQiLCJ2aWV3IiwibGVuZ3RoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBSUE7QUFFQTtBQUlBO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUVHO0FBQUE7O0FBQUEsTUFEREMsV0FDQyxRQUREQSxXQUNDO0FBQ0QsTUFBTUMsVUFBVSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLE1BQTlCO0FBQUEsR0FBRCxDQUE5QjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFDQSxrQkFBNEJDLHNEQUFRLENBQUMsQ0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFzQ0Ysc0RBQVEsRUFBOUM7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ0osc0RBQVEsRUFBOUM7QUFBQSxNQUFPSyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSSxNQWZGLE1BUE4sTUFGQSxNQUZhLE1BWE4sT0E2RUQsTUFDTixtRkFETTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0VDLENBQVQ7QUFrRkQ7O0dBdkdRaEIsTTtVQUdZRyx1RDs7O0tBSFpILE07O0FBc0hNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29taWRhLmpzLmU4YzNhMjc2NzUyMjI0YWI1ZjQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUVmZmVjdFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVNlbGVjdG9yLFxyXG4gIHVzZURpc3BhdGNoXHJcbn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSBcInJlYWN0LWhvb2tzLXBhZ2luYXRvclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBCcmVhZGNydW1iLFxyXG4gIEJyZWFkY3J1bWJJdGVtXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvT3RoZXIvQnJlYWRjcnVtYlwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFByb2R1Y3RieUZpbHRlclxyXG59IGZyb20gXCIuLi9jb21tb24vcHJvZHVjdFNlbGVjdFwiO1xyXG5pbXBvcnQgTGF5b3V0Rm91ciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Rm91clwiO1xyXG4vLyBpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4uL2RhdGEvcHJvZHVjdHMuanNvblwiO1xyXG5pbXBvcnQgU2hvcFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcFByb2R1Y3RzXCI7XHJcbmltcG9ydCBTaG9wSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcEhlYWRlclwiO1xyXG5pbXBvcnQgSW5zdGFncmFtVHdvIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25zL0luc3RhZ3JhbS9JbnN0YWdyYW1Ud29cIjtcclxuaW1wb3J0IFNob3BTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcFNpZGViYXJcIjtcclxuXHJcbmZ1bmN0aW9uIENvbWlkYSh7XHJcbiAgcHJvZHVjdERhdGFcclxufSkge1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2Vycy5maWx0ZXIpO1xyXG4gIGNvbnN0IHBhZ2VMaW1pdCA9IDEyO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY3VycmVudFZpZXcsIHNldEN1cnJlbnRWaWV3XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1cnJlbnRTb3J0LCBzZXRDdXJyZW50U29ydF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBzb3J0ZWRQcm9kdWN0ID0gZ2V0UHJvZHVjdGJ5RmlsdGVyKFxyXG4gICAgICBwcm9kdWN0RGF0YSxcclxuICAgICAgY3VycmVudFNvcnQsXHJcbiAgICAgIGZpbHRlckRhdGEuY2F0ZWdvcnksXHJcbiAgICAgIGZpbHRlckRhdGEucHJpY2VSYW5nZS5mcm9tLFxyXG4gICAgICBmaWx0ZXJEYXRhLnByaWNlUmFuZ2UudG8sXHJcbiAgICAgIGZpbHRlckRhdGEuYnJhbmRcclxuICAgICk7XHJcbiAgICBzZXRDdXJyZW50RGF0YShzb3J0ZWRQcm9kdWN0KTtcclxuICB9LCBbb2Zmc2V0LCBjdXJyZW50U29ydCwgZmlsdGVyRGF0YV0pO1xyXG4gIHJldHVybiAoIDxcclxuICAgIExheW91dEZvdXIgdGl0bGUgPSBcIkNvbWlkYVwiXHJcbiAgICBjb250YWluZXIgPSBcIndpZGVcIiA+XHJcbiAgICA8XHJcbiAgICBCcmVhZGNydW1iIHRpdGxlID0gXCJNZW51IGRlIENvbWlkYVwiID5cclxuICAgIDxcclxuICAgIEJyZWFkY3J1bWJJdGVtIG5hbWUgPSBcIkhvbWVcIiAvID5cclxuICAgIDxcclxuICAgIEJyZWFkY3J1bWJJdGVtIG5hbWUgPSBcIkNvbWlkYVwiXHJcbiAgICBjdXJyZW50IC8gPlxyXG4gICAgPFxyXG4gICAgL0JyZWFkY3J1bWI+IDxcclxuICAgIGRpdiBjbGFzc05hbWUgPSBcInNob3AgLWZpdmUtY29sXCIgPlxyXG4gICAgPFxyXG4gICAgZGl2IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyLWZ1bGwtaGFsZlwiID5cclxuICAgIDxcclxuICAgIGRpdiBjbGFzc05hbWUgPSBcInJvd1wiID5cclxuICAgIDxcclxuICAgIGRpdiBjbGFzc05hbWUgPSBcImNvbC0xMiBjb2wtbWQtNCBjb2wtbGctMyBjb2wteGwtMlwiID5cclxuICAgIDxcclxuICAgIFNob3BTaWRlYmFyIC8gPlxyXG4gICAgPFxyXG4gICAgL2Rpdj4gPFxyXG4gICAgZGl2IGNsYXNzTmFtZSA9IFwiY29sLTEyIGNvbC1tZC04IGNvbC1sZy05IGNvbC14bC0xMFwiID5cclxuICAgIDxcclxuICAgIFNob3BIZWFkZXIgdmlldyA9IHtcclxuICAgICAgY3VycmVudFZpZXdcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRTb3J0ID0ge1xyXG4gICAgICBzZXRDdXJyZW50U29ydFxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFZpZXcgPSB7XHJcbiAgICAgICh2aWV3KSA9PiBzZXRDdXJyZW50Vmlldyh2aWV3KVxyXG4gICAgfVxyXG4gICAgLz4ge1xyXG4gICAgICAhY3VycmVudERhdGEgfHwgY3VycmVudERhdGEubGVuZ3RoID09PSAwID8gKCA8XHJcbiAgICAgICAgaDEgPiBObyBwcm9kdWN0IGZvdW5kIDwgL2gxPlxyXG4gICAgICApIDogKCA8XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxcclxuICAgICAgICBTaG9wUHJvZHVjdHMgZ3JpZENvbENsYXNzID0gXCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgY29sLXhsLTNcIlxyXG4gICAgICAgIGxpc3RDb2xDbGFzcyA9IFwiY29sLTEyIGNvbC14bC02XCJcclxuICAgICAgICB2aWV3ID0ge1xyXG4gICAgICAgICAgY3VycmVudFZpZXdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgIGN1cnJlbnREYXRhLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcGFnZUxpbWl0KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8XHJcbiAgICAgICAgUGFnaW5hdG9yIHBhZ2VDb250YWluZXJDbGFzcyA9IFwicGFnaW5hdG9yXCJcclxuICAgICAgICB0b3RhbFJlY29yZHMgPSB7XHJcbiAgICAgICAgICBjdXJyZW50RGF0YS5sZW5ndGhcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFnZUxpbWl0ID0ge1xyXG4gICAgICAgICAgcGFnZUxpbWl0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhZ2VOZWlnaGJvdXJzID0ge1xyXG4gICAgICAgICAgMlxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRPZmZzZXQgPSB7XHJcbiAgICAgICAgICBzZXRPZmZzZXRcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSB7XHJcbiAgICAgICAgICBjdXJyZW50UGFnZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50UGFnZSA9IHtcclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8+IDxcclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9IDxcclxuICAgIC9kaXY+IDxcclxuICAgIC9kaXY+IDxcclxuICAgIC9kaXY+IDxcclxuICAgIC9kaXY+IDxcclxuICAgIEluc3RhZ3JhbVR3byAvID5cclxuICAgIDxcclxuICAgIC9MYXlvdXRGb3VyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly8uLi4vcG9zdHMnKVxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAvLyBCeSByZXR1cm5pbmcgeyBwcm9wczogeyBwb3N0cyB9IH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbWlkYSJdLCJzb3VyY2VSb290IjoiIn0=