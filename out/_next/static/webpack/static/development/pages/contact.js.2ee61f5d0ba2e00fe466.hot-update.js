webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./src/components/Header/Elements/MobileNavSidebar.js":
/*!************************************************************!*\
  !*** ./src/components/Header/Elements/MobileNavSidebar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileNavSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _common_ClientOnlyPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ClientOnlyPortal */ "./src/common/ClientOnlyPortal.js");
/* harmony import */ var _NavigatorMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigatorMobile */ "./src/components/Header/Elements/NavigatorMobile.js");
/* harmony import */ var _Other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Other/SocialIcons */ "./src/components/Other/SocialIcons.js");
/* harmony import */ var _Control_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Control/Select */ "./src/components/Control/Select.js");
var _jsxFileName = "C:\\github\\foodstore\\foodstore-simple\\src\\components\\Header\\Elements\\MobileNavSidebar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MobileNavSidebar(_ref) {
  _s();

  var showMobileNav = _ref.showMobileNav,
      setShowMobileNav = _ref.setShowMobileNav;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USD"),
      currency = _useState2[0],
      setCurrency = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("ENG"),
      language = _useState3[0],
      setLanguage = _useState3[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_common_ClientOnlyPortal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selector: "#nav-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], {
    "in": showMobileNav,
    unmountOnExit: true,
    timeout: 200,
    classNames: "cart-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navigation-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "search-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx(_NavigatorMobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "navigation-sidebar__footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })))), showMobileNav && __jsx(_common_ClientOnlyPortal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selector: "#overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "overlay",
    onClick: function onClick() {
      return setShowMobileNav(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })));
}

_s(MobileNavSidebar, "JRsyHaEK1dijbRgj6uU/dw/fOpU=");

_c = MobileNavSidebar;

var _c;

$RefreshReg$(_c, "MobileNavSidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvRWxlbWVudHMvTW9iaWxlTmF2U2lkZWJhci5qcyJdLCJuYW1lcyI6WyJNb2JpbGVOYXZTaWRlYmFyIiwic2hvd01vYmlsZU5hdiIsInNldFNob3dNb2JpbGVOYXYiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxPQUErRDtBQUFBOztBQUFBLE1BQW5DQyxhQUFtQyxRQUFuQ0EsYUFBbUM7QUFBQSxNQUFwQkMsZ0JBQW9CLFFBQXBCQSxnQkFBb0I7O0FBQzVFLGtCQUFzQ0Msc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT0MsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBZ0NGLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWdDSixzREFBUSxDQUFDLEtBQUQsQ0FBeEM7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLFNBQ0UsbUVBQ0UsTUFBQyxnRUFBRDtBQUFrQixZQUFRLEVBQUMsY0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxVQUFJUixhQUROO0FBRUUsaUJBQWEsTUFGZjtBQUdFLFdBQU8sRUFBRSxHQUhYO0FBSUUsY0FBVSxFQUFDLGNBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBTkYsQ0FERixDQURGLEVBaUJHQSxhQUFhLElBQ1osTUFBQyxnRUFBRDtBQUFrQixZQUFRLEVBQUMsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLFNBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxnQkFBZ0IsQ0FBQyxLQUFELENBQXRCO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FsQkosQ0FERjtBQTRCRDs7R0FoQ3VCRixnQjs7S0FBQUEsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbnRhY3QuanMuMmVlNjFmNWQwYmEyZTAwZmU0NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuXHJcbmltcG9ydCBDbGllbnRPbmx5UG9ydGFsIGZyb20gXCIuLi8uLi8uLi9jb21tb24vQ2xpZW50T25seVBvcnRhbFwiO1xyXG5pbXBvcnQgTmF2aWdhdG9yTW9iaWxlIGZyb20gXCIuL05hdmlnYXRvck1vYmlsZVwiO1xyXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uL090aGVyL1NvY2lhbEljb25zXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uLy4uL0NvbnRyb2wvU2VsZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVOYXZTaWRlYmFyKHsgc2hvd01vYmlsZU5hdiwgc2V0U2hvd01vYmlsZU5hdiB9KSB7XHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoXCJFTkdcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDbGllbnRPbmx5UG9ydGFsIHNlbGVjdG9yPVwiI25hdi1zaWRlYmFyXCI+XHJcbiAgICAgICAgPENTU1RyYW5zaXRpb25cclxuICAgICAgICAgIGluPXtzaG93TW9iaWxlTmF2fVxyXG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxyXG4gICAgICAgICAgdGltZW91dD17MjAwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImNhcnQtc2lkZWJhclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLXNpZGViYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm94XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TmF2aWdhdG9yTW9iaWxlIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1zaWRlYmFyX19mb290ZXJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICAgIDwvQ2xpZW50T25seVBvcnRhbD5cclxuICAgICAge3Nob3dNb2JpbGVOYXYgJiYgKFxyXG4gICAgICAgIDxDbGllbnRPbmx5UG9ydGFsIHNlbGVjdG9yPVwiI292ZXJsYXlcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxheVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVOYXYoZmFsc2UpfVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvQ2xpZW50T25seVBvcnRhbD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==