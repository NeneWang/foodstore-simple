webpackHotUpdate("static\\development\\pages\\comida.js",{

/***/ "./src/components/Shop/ShopSidebar.js":
/*!********************************************!*\
  !*** ./src/components/Shop/ShopSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShopSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sections_SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections/SectionTitle/SectionTitleOne */ "./src/components/Sections/SectionTitle/SectionTitleOne.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/variables */ "./src/common/variables.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
var _jsxFileName = "E:\\wangn\\Assets\\ecommerce-nextjs\\Eliah-ReactNext\\eliah\\src\\components\\Shop\\ShopSidebar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ShopSidebar() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var filterData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.shopReducers.filter;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__["resetFilter"])());
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
  }, __jsx(_Sections_SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "-medium",
    spaceBottom: 30 / 16 + "em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Categorias"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, _common_variables__WEBPACK_IMPORTED_MODULE_5__["shop"].CATEGORISE.map(function (item, index) {
    return __jsx("li", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: item === filterData.category
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "" + "#",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("a", {
      onClick: function onClick(e) {
        e.preventDefault();
        dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__["setFilterCategory"])(item));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, item)));
  }))), __jsx("div", {
    className: "shop-sidebar__section -refine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "shop-sidebar__section__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Precio"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, _common_variables__WEBPACK_IMPORTED_MODULE_5__["shop"].PRICE_POINTS.map(function (item, index) {
    var nextVal = _common_variables__WEBPACK_IMPORTED_MODULE_5__["shop"].PRICE_POINTS[index + 1];

    if (index === _common_variables__WEBPACK_IMPORTED_MODULE_5__["shop"].PRICE_POINTS.length - 1) {
      return;
    }

    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "f".concat(item, "t").concat(nextVal),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx("input", {
      type: "checkbox",
      name: "price-filter",
      id: "f".concat(item, "t").concat(nextVal),
      value: "asdas",
      checked: filterData.priceRange.to === nextVal,
      onChange: function onChange() {
        if (filterData.priceRange.to === nextVal) {
          dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__["setFilterPriceRange"])({}));
        } else {
          dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__["setFilterPriceRange"])({
            from: item,
            to: nextVal
          }));
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 23
      }
    }), Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(item), " - ", Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(nextVal)));
  }))))));
}

_s(ShopSidebar, "aRGJmLnSBMFzHxYhowRmnGeCp+w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaG9wL1Nob3BTaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNob3BTaWRlYmFyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImZpbHRlckRhdGEiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvcFJlZHVjZXJzIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwicmVzZXRGaWx0ZXIiLCJzaG9wIiwiQ0FURUdPUklTRSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsYXNzTmFtZXMiLCJhY3RpdmUiLCJjYXRlZ29yeSIsInByb2Nlc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRGaWx0ZXJDYXRlZ29yeSIsIlBSSUNFX1BPSU5UUyIsIm5leHRWYWwiLCJsZW5ndGgiLCJwcmljZVJhbmdlIiwidG8iLCJzZXRGaWx0ZXJQcmljZVJhbmdlIiwiZnJvbSIsImZvcm1hdEN1cnJlbmN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9lLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDcEMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxNQUE5QjtBQUFBLEdBQUQsQ0FBOUI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RQLFlBQVEsQ0FBQ1EsOEVBQVcsRUFBWixDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFB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LENBQUNOLE9BQUQsQ0FqQjFDLENBREYsQ0FERjtBQXVCRCxHQTVCQSxDQURILENBRkYsQ0FGRixDQTNCRixDQURGLENBREY7QUFxRUQ7O0dBM0V1QnZCLFc7VUFDTEUsdUQsRUFDRUUsdUQ7OztLQUZHSixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb21pZGEuanMuYjhiNGY3OGZlYTAzNjU5M2FhMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBTZWN0aW9uVGl0bGVPbmUgZnJvbSBcIi4uL1NlY3Rpb25zL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGVPbmVcIjtcclxuaW1wb3J0IHsgc2hvcCB9IGZyb20gXCIuLi8uLi9jb21tb24vdmFyaWFibGVzXCI7XHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQge1xyXG4gIHNldEZpbHRlckNhdGVnb3J5LFxyXG4gIHNldEZpbHRlckJyYW5kLFxyXG4gIHNldEZpbHRlclByaWNlUmFuZ2UsXHJcbiAgcmVzZXRGaWx0ZXIsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3BTaWRlYmFyKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBmaWx0ZXJEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcnMuZmlsdGVyKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gocmVzZXRGaWx0ZXIoKSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atc2lkZWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atc2lkZWJhcl9fY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1zaWRlYmFyX19zZWN0aW9uIC1jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICA8U2VjdGlvblRpdGxlT25lIGNsYXNzTmFtZT1cIi1tZWRpdW1cIiBzcGFjZUJvdHRvbT17MzAgLyAxNiArIFwiZW1cIn0+XHJcbiAgICAgICAgICAgIENhdGVnb3JpYXNcclxuICAgICAgICAgIDwvU2VjdGlvblRpdGxlT25lPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7c2hvcC5DQVRFR09SSVNFLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmU6IGl0ZW0gPT09IGZpbHRlckRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIjXCJ9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRGaWx0ZXJDYXRlZ29yeShpdGVtKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1zaWRlYmFyX19zZWN0aW9uIC1yZWZpbmVcIj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atc2lkZWJhcl9fc2VjdGlvbl9faXRlbVwiPlxyXG4gICAgICAgICAgICA8aDU+UHJlY2lvPC9oNT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtzaG9wLlBSSUNFX1BPSU5UUy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFZhbCA9IHNob3AuUFJJQ0VfUE9JTlRTW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHNob3AuUFJJQ0VfUE9JTlRTLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZiR7aXRlbX10JHtuZXh0VmFsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZS1maWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YGYke2l0ZW19dCR7bmV4dFZhbH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YGFzZGFzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmlsdGVyRGF0YS5wcmljZVJhbmdlLnRvID09PSBuZXh0VmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJEYXRhLnByaWNlUmFuZ2UudG8gPT09IG5leHRWYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEZpbHRlclByaWNlUmFuZ2Uoe30pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbHRlclByaWNlUmFuZ2UoeyBmcm9tOiBpdGVtLCB0bzogbmV4dFZhbCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KGl0ZW0pfSAtIHtmb3JtYXRDdXJyZW5jeShuZXh0VmFsKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==