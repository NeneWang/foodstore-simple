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
  }, __jsx(_components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, __jsx(_components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "No product found") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  })))))), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29taWRhLmpzIl0sIm5hbWVzIjpbIkNvbWlkYSIsInByb2R1Y3REYXRhIiwiZmlsdGVyRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wUmVkdWNlcnMiLCJmaWx0ZXIiLCJwYWdlTGltaXQiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImN1cnJlbnRWaWV3Iiwic2V0Q3VycmVudFZpZXciLCJjdXJyZW50U29ydCIsInNldEN1cnJlbnRTb3J0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0ZWRQcm9kdWN0IiwiZ2V0UHJvZHVjdGJ5RmlsdGVyIiwiY2F0ZWdvcnkiLCJwcmljZVJhbmdlIiwiZnJvbSIsInRvIiwiYnJhbmQiLCJ2aWV3IiwibGVuZ3RoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYztBQUM3QixNQUFNQyxVQUFVLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsTUFBOUI7QUFBQSxHQUFELENBQTlCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQUNBLGtCQUE0QkMsc0RBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXNDRixzREFBUSxFQUE5QztBQUFBLE1BQU9HLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDSixzREFBUSxFQUE5QztBQUFBLE1BQU9LLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7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LGNBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQVRKLENBSkYsQ0FERixDQURGLENBTEYsRUEyQ0UsTUFBQyxtRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0NGLENBREY7QUErQ0Q7O0dBbEVRaEIsTTtVQUNZRyx1RDs7O0tBRFpILE07O0FBaUZNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29taWRhLmpzLjQ4MTExMmFjYzQ4NDAxNWJhMzhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gXCJyZWFjdC1ob29rcy1wYWdpbmF0b3JcIjtcclxuXHJcbmltcG9ydCB7IEJyZWFkY3J1bWIsIEJyZWFkY3J1bWJJdGVtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvT3RoZXIvQnJlYWRjcnVtYlwiO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0YnlGaWx0ZXIgfSBmcm9tIFwiLi4vY29tbW9uL3Byb2R1Y3RTZWxlY3RcIjtcclxuaW1wb3J0IExheW91dEZvdXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dEZvdXJcIjtcclxuLy8gaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuLi9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcclxuaW1wb3J0IFNob3BQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9wL1Nob3BQcm9kdWN0c1wiO1xyXG5pbXBvcnQgU2hvcEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9wL1Nob3BIZWFkZXJcIjtcclxuaW1wb3J0IEluc3RhZ3JhbVR3byBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9ucy9JbnN0YWdyYW0vSW5zdGFncmFtVHdvXCI7XHJcbmltcG9ydCBTaG9wU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9wL1Nob3BTaWRlYmFyXCI7XHJcblxyXG5mdW5jdGlvbiBDb21pZGEoe3Byb2R1Y3REYXRhfSkge1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2Vycy5maWx0ZXIpO1xyXG4gIGNvbnN0IHBhZ2VMaW1pdCA9IDEyO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY3VycmVudFZpZXcsIHNldEN1cnJlbnRWaWV3XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1cnJlbnRTb3J0LCBzZXRDdXJyZW50U29ydF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBzb3J0ZWRQcm9kdWN0ID0gZ2V0UHJvZHVjdGJ5RmlsdGVyKFxyXG4gICAgICBwcm9kdWN0RGF0YSxcclxuICAgICAgY3VycmVudFNvcnQsXHJcbiAgICAgIGZpbHRlckRhdGEuY2F0ZWdvcnksXHJcbiAgICAgIGZpbHRlckRhdGEucHJpY2VSYW5nZS5mcm9tLFxyXG4gICAgICBmaWx0ZXJEYXRhLnByaWNlUmFuZ2UudG8sXHJcbiAgICAgIGZpbHRlckRhdGEuYnJhbmRcclxuICAgICk7XHJcbiAgICBzZXRDdXJyZW50RGF0YShzb3J0ZWRQcm9kdWN0KTtcclxuICB9LCBbb2Zmc2V0LCBjdXJyZW50U29ydCwgZmlsdGVyRGF0YV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0Rm91ciB0aXRsZT1cIkNvbWlkYVwiIGNvbnRhaW5lcj1cIndpZGVcIj5cclxuICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9XCJNZW51IGRlIENvbWlkYVwiPlxyXG4gICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiSG9tZVwiIC8+XHJcbiAgICAgICAgPEJyZWFkY3J1bWJJdGVtIG5hbWU9XCJDb21pZGFcIiBjdXJyZW50IC8+XHJcbiAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wIC1maXZlLWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZ1bGwtaGFsZlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTQgY29sLWxnLTMgY29sLXhsLTJcIj5cclxuICAgICAgICAgICAgICA8U2hvcFNpZGViYXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC04IGNvbC1sZy05IGNvbC14bC0xMFwiPlxyXG4gICAgICAgICAgICAgIDxTaG9wSGVhZGVyXHJcbiAgICAgICAgICAgICAgICB2aWV3PXtjdXJyZW50Vmlld31cclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRTb3J0PXtzZXRDdXJyZW50U29ydH1cclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRWaWV3PXsodmlldykgPT4gc2V0Q3VycmVudFZpZXcodmlldyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7IWN1cnJlbnREYXRhIHx8IGN1cnJlbnREYXRhLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgIDxoMT5ObyBwcm9kdWN0IGZvdW5kPC9oMT5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPFNob3BQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRDb2xDbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBjb2wteGwtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdENvbENsYXNzPVwiY29sLTEyIGNvbC14bC02XCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3PXtjdXJyZW50Vmlld31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtjdXJyZW50RGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIHBhZ2VMaW1pdCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8UGFnaW5hdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvbnRhaW5lckNsYXNzPVwicGFnaW5hdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFJlY29yZHM9e2N1cnJlbnREYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlTGltaXQ9e3BhZ2VMaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmVpZ2hib3Vycz17Mn1cclxuICAgICAgICAgICAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxJbnN0YWdyYW1Ud28gLz5cclxuICAgIDwvTGF5b3V0Rm91cj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zvb2QtYWRtaW4ud2FuZ25lbHNvbi54eXovcHVibGljL2FwaS9wcm9kdWN0cycpXHJcbiAgY29uc3QgcHJvZHVjID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21pZGFcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==