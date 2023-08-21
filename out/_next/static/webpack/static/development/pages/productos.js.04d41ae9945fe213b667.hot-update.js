webpackHotUpdate("static\\development\\pages\\productos.js",{

/***/ "./src/components/Shop/ShopHeader.js":
/*!*******************************************!*\
  !*** ./src/components/Shop/ShopHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShopHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Control_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Control/Select */ "./src/components/Control/Select.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/variables */ "./src/common/variables.js");
var _jsxFileName = "C:\\github\\foodstore\\foodstore-simple\\src\\components\\Shop\\ShopHeader.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ShopHeader(_ref) {
  _s();

  var curentView = _ref.curentView,
      getCurrentView = _ref.getCurrentView,
      getCurrentSort = _ref.getCurrentSort;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(curentView ? curentView : _common_variables__WEBPACK_IMPORTED_MODULE_2__["shop"].DEFAULT_VIEW),
      view = _useState[0],
      setView = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCurrentView && getCurrentView(view);
  }, [view]);
  return __jsx("div", {
    className: "shop-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "shop-header__view",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shop-header__view__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "" + "#",
    className: view === "grid" ? "active" : "",
    onClick: function onClick(e) {
      e.preventDefault();
      setView("grid");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-th",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "" + "#",
    className: view === "list" ? "active" : "",
    onClick: function onClick(e) {
      e.preventDefault();
      setView("list");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), view === "grid" && __jsx("h5", {
    className: "shop-header__page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Nuestro Cat\xE1logo")), __jsx(_Control_Select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: _common_variables__WEBPACK_IMPORTED_MODULE_2__["shop"].SORT_TYPES,
    getValue: getCurrentSort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }));
}

_s(ShopHeader, "vQ+S07T4h9xypvrAPGDXwEPfkqg=");

_c = ShopHeader;

var _c;

$RefreshReg$(_c, "ShopHeader");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaG9wL1Nob3BIZWFkZXIuanMiXSwibmFtZXMiOlsiU2hvcEhlYWRlciIsImN1cmVudFZpZXciLCJnZXRDdXJyZW50VmlldyIsImdldEN1cnJlbnRTb3J0IiwidXNlU3RhdGUiLCJzaG9wIiwiREVGQVVMVF9WSUVXIiwidmlldyIsInNldFZpZXciLCJ1c2VFZmZlY3QiLCJwcm9jZXNzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiU09SVF9UWVBFUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxPQUlaO0FBQUE7O0FBQUEsTUFIREMsVUFHQyxRQUhEQSxVQUdDO0FBQUEsTUFGREMsY0FFQyxRQUZEQSxjQUVDO0FBQUEsTUFEREMsY0FDQyxRQUREQSxjQUNDOztBQUNELGtCQUF3QkMsc0RBQVEsQ0FBQ0gsVUFBVSxHQUFHQSxVQUFILEdBQWdCSSxzREFBSSxDQUFDQyxZQUFoQyxDQUFoQztBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZFAsa0JBQWMsSUFBSUEsY0FBYyxDQUFDSyxJQUFELENBQWhDO0FBQ0QsR0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFFRyxFQUFBLEdBQXlCLEdBRGpDO0FBRUUsYUFBUyxFQUFFSCxJQUFJLEtBQUssTUFBVCxHQUFrQixRQUFsQixHQUE2QixFQUYxQztBQUdFLFdBQU8sRUFBRSxpQkFBQ0ksQ0FBRCxFQUFPO0FBQ2RBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBSixhQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixFQVdFO0FBQ0UsUUFBSSxFQUFFRSxFQUFBLEdBQXlCLEdBRGpDO0FBRUUsYUFBUyxFQUFFSCxJQUFJLEtBQUssTUFBVCxHQUFrQixRQUFsQixHQUE2QixFQUYxQztBQUdFLFdBQU8sRUFBRSxpQkFBQ0ksQ0FBRCxFQUFPO0FBQ2RBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBSixhQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERixFQXVCR0QsSUFBSSxLQUFLLE1BQVQsSUFDQztBQUFJLGFBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXhCSixDQURGLEVBNEJFLE1BQUMsdURBQUQ7QUFBUSxXQUFPLEVBQUVGLHNEQUFJLENBQUNRLFVBQXRCO0FBQWtDLFlBQVEsRUFBRVYsY0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixDQURGO0FBZ0NEOztHQTFDdUJILFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2R1Y3Rvcy5qcy4wNGQ0MWFlOTk0NWZlMjEzYjY2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9Db250cm9sL1NlbGVjdFwiO1xyXG5pbXBvcnQgeyBzaG9wIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi92YXJpYWJsZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3BIZWFkZXIoe1xyXG4gIGN1cmVudFZpZXcsXHJcbiAgZ2V0Q3VycmVudFZpZXcsXHJcbiAgZ2V0Q3VycmVudFNvcnQsXHJcbn0pIHtcclxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShjdXJlbnRWaWV3ID8gY3VyZW50VmlldyA6IHNob3AuREVGQVVMVF9WSUVXKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q3VycmVudFZpZXcgJiYgZ2V0Q3VycmVudFZpZXcodmlldyk7XHJcbiAgfSwgW3ZpZXddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWhlYWRlcl9fdmlld1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1oZWFkZXJfX3ZpZXdfX2ljb25cIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIiNcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXt2aWV3ID09PSBcImdyaWRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRWaWV3KFwiZ3JpZFwiKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRoXCI+PC9pPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiI1wifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3ZpZXcgPT09IFwibGlzdFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldFZpZXcoXCJsaXN0XCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+ICovfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt2aWV3ID09PSBcImdyaWRcIiAmJiAoXHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic2hvcC1oZWFkZXJfX3BhZ2VcIj5OdWVzdHJvIENhdMOhbG9nbzwvaDU+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTZWxlY3Qgb3B0aW9ucz17c2hvcC5TT1JUX1RZUEVTfSBnZXRWYWx1ZT17Z2V0Q3VycmVudFNvcnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=