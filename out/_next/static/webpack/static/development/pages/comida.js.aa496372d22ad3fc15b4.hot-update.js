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
  console.log(productData);
  return __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Comida",
    container: "wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], {
    title: "Menu de Comida",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
    name: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
    name: "Comida",
    current: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "shop -five-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-full-half",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-12 col-md-4 col-lg-3 col-xl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-12 col-md-8 col-lg-9 col-xl-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
      columnNumber: 15
    }
  }), !currentData || currentData.length === 0 ? __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 58,
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
      lineNumber: 65,
      columnNumber: 19
    }
  })))))), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29taWRhLmpzIl0sIm5hbWVzIjpbIkNvbWlkYSIsInByb2R1Y3REYXRhIiwiZmlsdGVyRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wUmVkdWNlcnMiLCJmaWx0ZXIiLCJwYWdlTGltaXQiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImN1cnJlbnRWaWV3Iiwic2V0Q3VycmVudFZpZXciLCJjdXJyZW50U29ydCIsInNldEN1cnJlbnRTb3J0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0ZWRQcm9kdWN0IiwiZ2V0UHJvZHVjdGJ5RmlsdGVyIiwiY2F0ZWdvcnkiLCJwcmljZVJhbmdlIiwiZnJvbSIsInRvIiwiYnJhbmQiLCJjb25zb2xlIiwibG9nIiwidmlldyIsImxlbmd0aCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7QUFDN0IsTUFBTUMsVUFBVSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLE1BQTlCO0FBQUEsR0FBRCxDQUE5QjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFDQSxrQkFBNEJDLHNEQUFRLENBQUMsQ0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFzQ0Ysc0RBQVEsRUFBOUM7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ0osc0RBQVEsRUFBOUM7QUFBQSxNQUFPSyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ04sc0RBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT08sV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBc0NSLHNEQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBLE1BQU9TLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGFBQWEsR0FBR0MsZ0ZBQWtCLENBQ3BDcEIsV0FEb0MsRUFFcENZLFdBRm9DLEVBR3BDWCxVQUFVLENBQUNvQixRQUh5QixFQUlwQ3BCLFVBQVUsQ0FBQ3FCLFVBQVgsQ0FBc0JDLElBSmMsRUFLcEN0QixVQUFVLENBQUNxQixVQUFYLENBQXNCRSxFQUxjLEVBTXBDdkIsVUFBVSxDQUFDd0IsS0FOeUIsQ0FBdEM7QUFRQVIsa0JBQWMsQ0FBQ0UsYUFBRCxDQUFkO0FBQ0QsR0FWUSxFQVVOLENBQUNYLE1BQUQsRUFBU0ksV0FBVCxFQUFzQlgsVUFBdEIsQ0FWTSxDQUFUO0FBYUF5QixTQUFPLENBQUNDLEdBQVIsQ0FBWTNCLFdBQVo7QUFDQSxTQUNFLE1BQUMscUVBQUQ7QUFBWSxTQUFLLEVBQUMsUUFBbEI7QUFBMkIsYUFBUyxFQUFDLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVFQUFEO0FBQVksU0FBSyxFQUFDLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyRUFBRDtBQUFnQixRQUFJLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyRUFBRDtBQUFnQixRQUFJLEVBQUMsUUFBckI7QUFBOEIsV0FBTyxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUNFLFFBQUksRUFBRVUsV0FEUjtBQUVFLGtCQUFjLEVBQUVHLGNBRmxCO0FBR0Usa0JBQWMsRUFBRSx3QkFBQ2UsSUFBRDtBQUFBLGFBQVVqQixjQUFjLENBQUNpQixJQUFELENBQXhCO0FBQUEsS0FIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUcsQ0FBQ1osV0FBRCxJQUFnQkEsV0FBVyxDQUFDYSxNQUFaLEtBQXVCLENBQXZDLEdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxHQUdDLG1FQUNFLE1BQUMscUVBQUQ7QUFDRSxnQkFBWSxFQUFDLG1DQURmO0FBRUUsZ0JBQVksRUFBQyxpQkFGZjtBQUdFLFFBQUksRUFBRW5CLFdBSFI7QUFJRSxRQUFJLEVBQUVNLFdBQVcsQ0FBQ2MsS0FBWixDQUFrQnRCLE1BQWxCLEVBQTBCQSxNQUFNLEdBQUdGLFNBQW5DLENBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBUUUsTUFBQyw2REFBRDtBQUNFLHNCQUFrQixFQUFDLFdBRHJCO0FBRUUsZ0JBQVksRUFBRVUsV0FBVyxDQUFDYSxNQUY1QjtBQUdFLGFBQVMsRUFBRXZCLFNBSGI7QUFJRSxrQkFBYyxFQUFFLENBSmxCO0FBS0UsYUFBUyxFQUFFRyxTQUxiO0FBTUUsZUFBVyxFQUFFSyxXQU5mO0FBT0Usa0JBQWMsRUFBRUMsY0FQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBVEosQ0FKRixDQURGLENBREYsQ0FMRixFQTJDRSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0YsQ0FERjtBQStDRDs7R0FyRVFoQixNO1VBQ1lHLHVEOzs7S0FEWkgsTTs7QUFtRk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb21pZGEuanMuYWE0OTYzNzJkMjJhZDNmYzE1YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSBcInJlYWN0LWhvb2tzLXBhZ2luYXRvclwiO1xyXG5cclxuaW1wb3J0IHsgQnJlYWRjcnVtYiwgQnJlYWRjcnVtYkl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9PdGhlci9CcmVhZGNydW1iXCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RieUZpbHRlciB9IGZyb20gXCIuLi9jb21tb24vcHJvZHVjdFNlbGVjdFwiO1xyXG5pbXBvcnQgTGF5b3V0Rm91ciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Rm91clwiO1xyXG4vLyBpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4uL2RhdGEvcHJvZHVjdHMuanNvblwiO1xyXG5pbXBvcnQgU2hvcFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcFByb2R1Y3RzXCI7XHJcbmltcG9ydCBTaG9wSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcEhlYWRlclwiO1xyXG5pbXBvcnQgSW5zdGFncmFtVHdvIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25zL0luc3RhZ3JhbS9JbnN0YWdyYW1Ud29cIjtcclxuaW1wb3J0IFNob3BTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3AvU2hvcFNpZGViYXJcIjtcclxuXHJcbmZ1bmN0aW9uIENvbWlkYSh7cHJvZHVjdERhdGF9KSB7XHJcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcFJlZHVjZXJzLmZpbHRlcik7XHJcbiAgY29uc3QgcGFnZUxpbWl0ID0gMTI7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Q3VycmVudFZpZXddID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3VycmVudFNvcnQsIHNldEN1cnJlbnRTb3J0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHNvcnRlZFByb2R1Y3QgPSBnZXRQcm9kdWN0YnlGaWx0ZXIoXHJcbiAgICAgIHByb2R1Y3REYXRhLFxyXG4gICAgICBjdXJyZW50U29ydCxcclxuICAgICAgZmlsdGVyRGF0YS5jYXRlZ29yeSxcclxuICAgICAgZmlsdGVyRGF0YS5wcmljZVJhbmdlLmZyb20sXHJcbiAgICAgIGZpbHRlckRhdGEucHJpY2VSYW5nZS50byxcclxuICAgICAgZmlsdGVyRGF0YS5icmFuZFxyXG4gICAgKTtcclxuICAgIHNldEN1cnJlbnREYXRhKHNvcnRlZFByb2R1Y3QpO1xyXG4gIH0sIFtvZmZzZXQsIGN1cnJlbnRTb3J0LCBmaWx0ZXJEYXRhXSk7XHJcblxyXG4gIFxyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3REYXRhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0Rm91ciB0aXRsZT1cIkNvbWlkYVwiIGNvbnRhaW5lcj1cIndpZGVcIj5cclxuICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9XCJNZW51IGRlIENvbWlkYVwiPlxyXG4gICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiSG9tZVwiIC8+XHJcbiAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJDb21pZGFcIiBjdXJyZW50IC8+XHJcbiAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wIC1maXZlLWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZ1bGwtaGFsZlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTQgY29sLWxnLTMgY29sLXhsLTJcIj5cclxuICAgICAgICAgICAgICA8U2hvcFNpZGViYXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC04IGNvbC1sZy05IGNvbC14bC0xMFwiPlxyXG4gICAgICAgICAgICAgIDxTaG9wSGVhZGVyXHJcbiAgICAgICAgICAgICAgICB2aWV3PXtjdXJyZW50Vmlld31cclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRTb3J0PXtzZXRDdXJyZW50U29ydH1cclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRWaWV3PXsodmlldykgPT4gc2V0Q3VycmVudFZpZXcodmlldyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7IWN1cnJlbnREYXRhIHx8IGN1cnJlbnREYXRhLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgIDxoMT5ObyBwcm9kdWN0IGZvdW5kPC9oMT5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPFNob3BQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRDb2xDbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBjb2wteGwtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdENvbENsYXNzPVwiY29sLTEyIGNvbC14bC02XCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3PXtjdXJyZW50Vmlld31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtjdXJyZW50RGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIHBhZ2VMaW1pdCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8UGFnaW5hdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvbnRhaW5lckNsYXNzPVwicGFnaW5hdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFJlY29yZHM9e2N1cnJlbnREYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlTGltaXQ9e3BhZ2VMaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmVpZ2hib3Vycz17Mn1cclxuICAgICAgICAgICAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxJbnN0YWdyYW1Ud28gLz5cclxuICAgIDwvTGF5b3V0Rm91cj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zvb2QtYWRtaW4ud2FuZ25lbHNvbi54eXovcHVibGljL2FwaS9wcm9kdWN0cycpXHJcbiAgY29uc3QgcHJvZHVjdERhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3REYXRhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21pZGFcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==