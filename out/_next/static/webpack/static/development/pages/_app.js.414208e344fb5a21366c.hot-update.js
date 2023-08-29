webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/integration/react */ "./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_scroll_to_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll-to-top */ "./node_modules/react-scroll-to-top/dist/index.js");
/* harmony import */ var react_scroll_to_top__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to_top__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Other_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Other/Loading */ "./src/components/Other/Loading.js");
/* harmony import */ var _common_with_redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/with-redux-store */ "./src/common/with-redux-store.js");


var _this = undefined,
    _jsxFileName = "C:\\github\\foodstore\\foodstore-simple\\src\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      reduxStore = _ref.reduxStore;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: reduxStore,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_3__["PersistGate"], {
    loading: __jsx(_components_Other_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }),
    persistor: _redux_store__WEBPACK_IMPORTED_MODULE_4__["persistor"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
    position: "bottom-left",
    autoClose: 3000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(react_scroll_to_top__WEBPACK_IMPORTED_MODULE_6___default.a, {
    smooth: true,
    component: __jsx("i", {
      className: "fal fa-arrow-to-top",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 22
      }
    }),
    style: {
      backgroundColor: "#8c5555",
      color: "#FFFFF",
      borderRadius: "999px",
      height: "50px",
      width: "50px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })));
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_common_with_redux_store__WEBPACK_IMPORTED_MODULE_9__["default"])(App));

var _c, _c2;

$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZWR1eFN0b3JlIiwicGVyc2lzdG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ3aWR0aCIsIndpdGhSZWR1eFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBMEM7QUFBQSxNQUF2Q0MsU0FBdUMsUUFBdkNBLFNBQXVDO0FBQUEsTUFBNUJDLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDcEQsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQSxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrRUFBRDtBQUFhLFdBQU8sRUFBRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBdEI7QUFBbUMsYUFBUyxFQUFFQyxzREFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFRSxNQUFDLDZEQUFEO0FBQWdCLFlBQVEsRUFBQyxhQUF6QjtBQUF1QyxhQUFTLEVBQUUsSUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQywwREFBRDtBQUNFLFVBQU0sTUFEUjtBQUVFLGFBQVMsRUFBRTtBQUFHLGVBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRmI7QUFHRSxTQUFLLEVBQUU7QUFDTEcscUJBQWUsRUFBRSxTQURaO0FBRUxDLFdBQUssRUFBQyxRQUZEO0FBR0xDLGtCQUFZLEVBQUUsT0FIVDtBQUlMQyxZQUFNLEVBQUUsTUFKSDtBQUtMQyxXQUFLLEVBQUU7QUFMRixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLENBREY7QUFtQkQsQ0FwQkQ7O0tBQU1ULEc7QUFzQlMscUVBQUFVLHdFQUFjLENBQUNWLEdBQUQsQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDE0MjA4ZTM0NGZiNWEyMTM2NmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL2ludGVncmF0aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IHBlcnNpc3Rvciwgc3RvcmUgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFNjcm9sbFRvVG9wIGZyb20gXCJyZWFjdC1zY3JvbGwtdG8tdG9wXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvT3RoZXIvTG9hZGluZ1wiO1xyXG5pbXBvcnQgd2l0aFJlZHV4U3RvcmUgZnJvbSBcIi4uL2NvbW1vbi93aXRoLXJlZHV4LXN0b3JlXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XHJcbiAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXs8TG9hZGluZyAvPn0gcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJib3R0b20tbGVmdFwiIGF1dG9DbG9zZT17MzAwMH0gLz5cclxuICAgICAgICA8U2Nyb2xsVG9Ub3BcclxuICAgICAgICAgIHNtb290aFxyXG4gICAgICAgICAgY29tcG9uZW50PXs8aSBjbGFzc05hbWU9XCJmYWwgZmEtYXJyb3ctdG8tdG9wXCIgLz59XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzhjNTU1NVwiLFxyXG4gICAgICAgICAgICBjb2xvcjpcIiNGRkZGRlwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOTk5cHhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiNTBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==