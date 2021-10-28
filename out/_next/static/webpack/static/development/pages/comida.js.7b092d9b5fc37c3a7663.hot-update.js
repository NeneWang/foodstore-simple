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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29taWRhLmpzIl0sIm5hbWVzIjpbIkNvbWlkYSIsInByb2R1Y3REYXRhIiwiZmlsdGVyRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wUmVkdWNlcnMiLCJmaWx0ZXIiLCJwYWdlTGltaXQiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsInNldE9mZnNldCIsImN1cnJlbnRWaWV3Iiwic2V0Q3VycmVudFZpZXciLCJjdXJyZW50U29ydCIsInNldEN1cnJlbnRTb3J0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0ZWRQcm9kdWN0IiwiZ2V0UHJvZHVjdGJ5RmlsdGVyIiwiY2F0ZWdvcnkiLCJwcmljZVJhbmdlIiwiZnJvbSIsInRvIiwiYnJhbmQiLCJ2aWV3IiwibGVuZ3RoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFJQTtBQUVBO0FBSUE7Q0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BRUc7QUFBQTs7QUFBQSxNQUREQyxXQUNDLFFBRERBLFdBQ0M7QUFDRCxNQUFNQyxVQUFVLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsTUFBOUI7QUFBQSxHQUFELENBQTlCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQUNBLGtCQUE0QkMsc0RBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXNDRixzREFBUSxFQUE5QztBQUFBLE1BQU9HLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDSixzREFBUSxFQUE5QztBQUFBLE1BQU9LLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJJLE1BZkYsTUFQTixNQUZBLE1BRmEsTUFYTixPQTZFRCxNQUNOLG1GQURNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3RUMsQ0FBVDtBQWtGRDs7R0F2R1FoQixNO1VBR1lHLHVEOzs7S0FIWkgsTTtBQXlHTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbWlkYS5qcy43YjA5MmQ5YjVmYzM3YzNhNzY2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB1c2VTdGF0ZSxcclxuICB1c2VFZmZlY3RcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB1c2VTZWxlY3RvcixcclxuICB1c2VEaXNwYXRjaFxyXG59IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gXCJyZWFjdC1ob29rcy1wYWdpbmF0b3JcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQnJlYWRjcnVtYixcclxuICBCcmVhZGNydW1iSXRlbVxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL090aGVyL0JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IHtcclxuICBnZXRQcm9kdWN0YnlGaWx0ZXJcclxufSBmcm9tIFwiLi4vY29tbW9uL3Byb2R1Y3RTZWxlY3RcIjtcclxuaW1wb3J0IExheW91dEZvdXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dEZvdXJcIjtcclxuLy8gaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuLi9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcclxuaW1wb3J0IFNob3BQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9wL1Nob3BQcm9kdWN0c1wiO1xyXG5pbXBvcnQgU2hvcEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9wL1Nob3BIZWFkZXJcIjtcclxuaW1wb3J0IEluc3RhZ3JhbVR3byBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9ucy9JbnN0YWdyYW0vSW5zdGFncmFtVHdvXCI7XHJcbmltcG9ydCBTaG9wU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9wL1Nob3BTaWRlYmFyXCI7XHJcblxyXG5mdW5jdGlvbiBDb21pZGEoe1xyXG4gIHByb2R1Y3REYXRhXHJcbn0pIHtcclxuICBjb25zdCBmaWx0ZXJEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcnMuZmlsdGVyKTtcclxuICBjb25zdCBwYWdlTGltaXQgPSAxMjtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2N1cnJlbnRWaWV3LCBzZXRDdXJyZW50Vmlld10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjdXJyZW50U29ydCwgc2V0Q3VycmVudFNvcnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgc29ydGVkUHJvZHVjdCA9IGdldFByb2R1Y3RieUZpbHRlcihcclxuICAgICAgcHJvZHVjdERhdGEsXHJcbiAgICAgIGN1cnJlbnRTb3J0LFxyXG4gICAgICBmaWx0ZXJEYXRhLmNhdGVnb3J5LFxyXG4gICAgICBmaWx0ZXJEYXRhLnByaWNlUmFuZ2UuZnJvbSxcclxuICAgICAgZmlsdGVyRGF0YS5wcmljZVJhbmdlLnRvLFxyXG4gICAgICBmaWx0ZXJEYXRhLmJyYW5kXHJcbiAgICApO1xyXG4gICAgc2V0Q3VycmVudERhdGEoc29ydGVkUHJvZHVjdCk7XHJcbiAgfSwgW29mZnNldCwgY3VycmVudFNvcnQsIGZpbHRlckRhdGFdKTtcclxuICByZXR1cm4gKCA8XHJcbiAgICBMYXlvdXRGb3VyIHRpdGxlID0gXCJDb21pZGFcIlxyXG4gICAgY29udGFpbmVyID0gXCJ3aWRlXCIgPlxyXG4gICAgPFxyXG4gICAgQnJlYWRjcnVtYiB0aXRsZSA9IFwiTWVudSBkZSBDb21pZGFcIiA+XHJcbiAgICA8XHJcbiAgICBCcmVhZGNydW1iSXRlbSBuYW1lID0gXCJIb21lXCIgLyA+XHJcbiAgICA8XHJcbiAgICBCcmVhZGNydW1iSXRlbSBuYW1lID0gXCJDb21pZGFcIlxyXG4gICAgY3VycmVudCAvID5cclxuICAgIDxcclxuICAgIC9CcmVhZGNydW1iPiA8XHJcbiAgICBkaXYgY2xhc3NOYW1lID0gXCJzaG9wIC1maXZlLWNvbFwiID5cclxuICAgIDxcclxuICAgIGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lci1mdWxsLWhhbGZcIiA+XHJcbiAgICA8XHJcbiAgICBkaXYgY2xhc3NOYW1lID0gXCJyb3dcIiA+XHJcbiAgICA8XHJcbiAgICBkaXYgY2xhc3NOYW1lID0gXCJjb2wtMTIgY29sLW1kLTQgY29sLWxnLTMgY29sLXhsLTJcIiA+XHJcbiAgICA8XHJcbiAgICBTaG9wU2lkZWJhciAvID5cclxuICAgIDxcclxuICAgIC9kaXY+IDxcclxuICAgIGRpdiBjbGFzc05hbWUgPSBcImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctOSBjb2wteGwtMTBcIiA+XHJcbiAgICA8XHJcbiAgICBTaG9wSGVhZGVyIHZpZXcgPSB7XHJcbiAgICAgIGN1cnJlbnRWaWV3XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50U29ydCA9IHtcclxuICAgICAgc2V0Q3VycmVudFNvcnRcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRWaWV3ID0ge1xyXG4gICAgICAodmlldykgPT4gc2V0Q3VycmVudFZpZXcodmlldylcclxuICAgIH1cclxuICAgIC8+IHtcclxuICAgICAgIWN1cnJlbnREYXRhIHx8IGN1cnJlbnREYXRhLmxlbmd0aCA9PT0gMCA/ICggPFxyXG4gICAgICAgIGgxID4gTm8gcHJvZHVjdCBmb3VuZCA8IC9oMT5cclxuICAgICAgKSA6ICggPFxyXG4gICAgICAgID5cclxuICAgICAgICA8XHJcbiAgICAgICAgU2hvcFByb2R1Y3RzIGdyaWRDb2xDbGFzcyA9IFwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IGNvbC14bC0zXCJcclxuICAgICAgICBsaXN0Q29sQ2xhc3MgPSBcImNvbC0xMiBjb2wteGwtNlwiXHJcbiAgICAgICAgdmlldyA9IHtcclxuICAgICAgICAgIGN1cnJlbnRWaWV3XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICBjdXJyZW50RGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIHBhZ2VMaW1pdClcclxuICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFxyXG4gICAgICAgIFBhZ2luYXRvciBwYWdlQ29udGFpbmVyQ2xhc3MgPSBcInBhZ2luYXRvclwiXHJcbiAgICAgICAgdG90YWxSZWNvcmRzID0ge1xyXG4gICAgICAgICAgY3VycmVudERhdGEubGVuZ3RoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhZ2VMaW1pdCA9IHtcclxuICAgICAgICAgIHBhZ2VMaW1pdFxyXG4gICAgICAgIH1cclxuICAgICAgICBwYWdlTmVpZ2hib3VycyA9IHtcclxuICAgICAgICAgIDJcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T2Zmc2V0ID0ge1xyXG4gICAgICAgICAgc2V0T2Zmc2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRQYWdlID0ge1xyXG4gICAgICAgICAgY3VycmVudFBhZ2VcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UgPSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50UGFnZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvPiA8XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfSA8XHJcbiAgICAvZGl2PiA8XHJcbiAgICAvZGl2PiA8XHJcbiAgICAvZGl2PiA8XHJcbiAgICAvZGl2PiA8XHJcbiAgICBJbnN0YWdyYW1Ud28gLyA+XHJcbiAgICA8XHJcbiAgICAvTGF5b3V0Rm91cj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21pZGEiXSwic291cmNlUm9vdCI6IiJ9