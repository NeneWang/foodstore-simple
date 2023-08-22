webpackHotUpdate("static\\development\\pages\\productos.js",{

/***/ "./src/components/Shop/ShopSidebar.js":
/*!********************************************!*\
  !*** ./src/components/Shop/ShopSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShopSidebar; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Sections_SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sections/SectionTitle/SectionTitleOne */ "./src/components/Sections/SectionTitle/SectionTitleOne.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/variables */ "./src/common/variables.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");


var _jsxFileName = "C:\\github\\foodstore\\foodstore-simple\\src\\components\\Shop\\ShopSidebar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function ShopSidebar() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var filterData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.shopReducers.filter;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_8__["resetFilter"])());
  }, []);
  return __jsx("div", {
    className: "shop-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "shop-sidebar__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shop-sidebar__section -categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_Sections_SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "-medium",
    spaceBottom: 30 / 16 + "em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Categorias"), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(2)).map(function (_, divisionIndex) {
    return __jsx("div", {
      key: divisionIndex,
      className: "col-6 col-lg-12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, _common_variables__WEBPACK_IMPORTED_MODULE_6__["shop"].CATEGORISE.slice(divisionIndex * Math.ceil(_common_variables__WEBPACK_IMPORTED_MODULE_6__["shop"].CATEGORISE.length / 2), (divisionIndex + 1) * Math.ceil(_common_variables__WEBPACK_IMPORTED_MODULE_6__["shop"].CATEGORISE.length / 2)).map(function (item, index) {
      return __jsx("li", {
        key: index,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
          active: item === filterData.category
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "" + "#",
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 27
        }
      }, __jsx("a", {
        onClick: function onClick(e) {
          e.preventDefault();
          dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_8__["setFilterCategory"])(item));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }
      }, item)));
    })));
  })))), __jsx("div", {
    className: "shop-sidebar__section -refine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })));
}

_s(ShopSidebar, "aRGJmLnSBMFzHxYhowRmnGeCp+w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = ShopSidebar;

var _c;

$RefreshReg$(_c, "ShopSidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaG9wL1Nob3BTaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNob3BTaWRlYmFyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImZpbHRlckRhdGEiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvcFJlZHVjZXJzIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwicmVzZXRGaWx0ZXIiLCJBcnJheSIsIm1hcCIsIl8iLCJkaXZpc2lvbkluZGV4Iiwic2hvcCIsIkNBVEVHT1JJU0UiLCJzbGljZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiaXRlbSIsImluZGV4IiwiY2xhc3NOYW1lcyIsImFjdGl2ZSIsImNhdGVnb3J5IiwicHJvY2VzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEZpbHRlckNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9lLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDcEMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxNQUE5QjtBQUFBLEdBQUQsQ0FBOUI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RQLFlBQVEsQ0FBQ1EsOEVBQVcsRUFBWixDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFxQyxlQUFXLEVBQUUsS0FBSyxFQUFMLEdBQVUsSUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUlFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLDZGQUFJQyxLQUFLLENBQUMsQ0FBRCxDQUFULEVBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxhQUFKO0FBQUEsV0FDakI7QUFBSyxTQUFHLEVBQUVBLGFBQVY7QUFBeUIsZUFBUyxFQUFDLGlCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyxzREFBSSxDQUFDQyxVQUFMLENBQ0VDLEtBREYsQ0FFR0gsYUFBYSxHQUFHSSxJQUFJLENBQUNDLElBQUwsQ0FBVUosc0RBQUksQ0FBQ0MsVUFBTCxDQUFnQkksTUFBaEIsR0FBeUIsQ0FBbkMsQ0FGbkIsRUFHRyxDQUFDTixhQUFhLEdBQUcsQ0FBakIsSUFBc0JJLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixzREFBSSxDQUFDQyxVQUFMLENBQWdCSSxNQUFoQixHQUF5QixDQUFuQyxDQUh6QixFQUtFUixHQUxGLENBS00sVUFBQ1MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsYUFDSDtBQUNFLFdBQUcsRUFBRUEsS0FEUDtBQUVFLGlCQUFTLEVBQUVDLGlEQUFVLENBQUM7QUFDcEJDLGdCQUFNLEVBQUVILElBQUksS0FBS2pCLFVBQVUsQ0FBQ3FCO0FBRFIsU0FBRCxDQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUUsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRUMsRUFBQSxHQUF5QixHQUFyQztBQUEwQyxXQUFHLEVBQUVKLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGVBQU8sRUFBRSxpQkFBQ0ssQ0FBRCxFQUFPO0FBQ2RBLFdBQUMsQ0FBQ0MsY0FBRjtBQUNBMUIsa0JBQVEsQ0FBQzJCLG9GQUFpQixDQUFDUixJQUFELENBQWxCLENBQVI7QUFDRCxTQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNR0EsSUFOSCxDQURGLENBTkYsQ0FERztBQUFBLEtBTE4sQ0FESCxDQURGLENBRGlCO0FBQUEsR0FBbEIsQ0FESCxDQURGLENBSkYsQ0FERixFQTBDRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUNGLENBREYsQ0FERjtBQWtERDs7R0F4RHVCcEIsVztVQUNMRSx1RCxFQUNFRSx1RDs7O0tBRkdKLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2R1Y3Rvcy5qcy5lYzVjYjgzZjg1ZjgxZTVkOTY1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IFNlY3Rpb25UaXRsZU9uZSBmcm9tIFwiLi4vU2VjdGlvbnMvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZU9uZVwiO1xyXG5pbXBvcnQgeyBzaG9wIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi92YXJpYWJsZXNcIjtcclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7XHJcbiAgc2V0RmlsdGVyQ2F0ZWdvcnksXHJcbiAgc2V0RmlsdGVyQnJhbmQsXHJcbiAgc2V0RmlsdGVyUHJpY2VSYW5nZSxcclxuICByZXNldEZpbHRlcixcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvcFNpZGViYXIoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2Vycy5maWx0ZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChyZXNldEZpbHRlcigpKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1zaWRlYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1zaWRlYmFyX19jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXNpZGViYXJfX3NlY3Rpb24gLWNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgIDxTZWN0aW9uVGl0bGVPbmUgY2xhc3NOYW1lPVwiLW1lZGl1bVwiIHNwYWNlQm90dG9tPXszMCAvIDE2ICsgXCJlbVwifT5cclxuICAgICAgICAgICAgQ2F0ZWdvcmlhc1xyXG4gICAgICAgICAgPC9TZWN0aW9uVGl0bGVPbmU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkoMildLm1hcCgoXywgZGl2aXNpb25JbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RpdmlzaW9uSW5kZXh9IGNsYXNzTmFtZT1cImNvbC02IGNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3AuQ0FURUdPUklTRVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbkluZGV4ICogTWF0aC5jZWlsKHNob3AuQ0FURUdPUklTRS5sZW5ndGggLyAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGRpdmlzaW9uSW5kZXggKyAxKSAqIE1hdGguY2VpbChzaG9wLkNBVEVHT1JJU0UubGVuZ3RoIC8gMilcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogaXRlbSA9PT0gZmlsdGVyRGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIiNcIn0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRGaWx0ZXJDYXRlZ29yeShpdGVtKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atc2lkZWJhcl9fc2VjdGlvbiAtcmVmaW5lXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==