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
      value: "f".concat(item, "t").concat(nextVal),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaG9wL1Nob3BTaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNob3BTaWRlYmFyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImZpbHRlckRhdGEiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvcFJlZHVjZXJzIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwicmVzZXRGaWx0ZXIiLCJzaG9wIiwiQ0FURUdPUklTRSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsYXNzTmFtZXMiLCJhY3RpdmUiLCJjYXRlZ29yeSIsInByb2Nlc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRGaWx0ZXJDYXRlZ29yeSIsIlBSSUNFX1BPSU5UUyIsIm5leHRWYWwiLCJsZW5ndGgiLCJwcmljZVJhbmdlIiwidG8iLCJzZXRGaWx0ZXJQcmljZVJhbmdlIiwiZnJvbSIsImZvcm1hdEN1cnJlbmN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9lLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDcEMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxNQUE5QjtBQUFBLEdBQUQsQ0FBOUI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RQLFlBQVEsQ0FBQ1EsOEVBQVcsRUFBWixDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFB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LENBakJqQixTQWlCNEJnQixvRUFBYyxDQUFDTixPQUFELENBakIxQyxDQURGLENBREY7QUF1QkQsR0E1QkEsQ0FESCxDQUZGLENBRkYsQ0EzQkYsQ0FERixDQURGO0FBcUVEOztHQTNFdUJ2QixXO1VBQ0xFLHVELEVBQ0VFLHVEOzs7S0FGR0osVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29taWRhLmpzLmE0YWZjZjBjOGM1OGE4ODNlM2I3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgU2VjdGlvblRpdGxlT25lIGZyb20gXCIuLi9TZWN0aW9ucy9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlT25lXCI7XHJcbmltcG9ydCB7IHNob3AgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3ZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICBzZXRGaWx0ZXJDYXRlZ29yeSxcclxuICBzZXRGaWx0ZXJCcmFuZCxcclxuICBzZXRGaWx0ZXJQcmljZVJhbmdlLFxyXG4gIHJlc2V0RmlsdGVyLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG9wU2lkZWJhcigpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcFJlZHVjZXJzLmZpbHRlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHJlc2V0RmlsdGVyKCkpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXNpZGViYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXNpZGViYXJfX2NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atc2lkZWJhcl9fc2VjdGlvbiAtY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgPFNlY3Rpb25UaXRsZU9uZSBjbGFzc05hbWU9XCItbWVkaXVtXCIgc3BhY2VCb3R0b209ezMwIC8gMTYgKyBcImVtXCJ9PlxyXG4gICAgICAgICAgICBDYXRlZ29yaWFzXHJcbiAgICAgICAgICA8L1NlY3Rpb25UaXRsZU9uZT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3Nob3AuQ0FURUdPUklTRS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlOiBpdGVtID09PSBmaWx0ZXJEYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiI1wifSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0RmlsdGVyQ2F0ZWdvcnkoaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atc2lkZWJhcl9fc2VjdGlvbiAtcmVmaW5lXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXNpZGViYXJfX3NlY3Rpb25fX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGg1PlByZWNpbzwvaDU+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7c2hvcC5QUklDRV9QT0lOVFMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRWYWwgPSBzaG9wLlBSSUNFX1BPSU5UU1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBzaG9wLlBSSUNFX1BPSU5UUy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGYke2l0ZW19dCR7bmV4dFZhbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2UtZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BmJHtpdGVtfXQke25leHRWYWx9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2BmJHtpdGVtfXQke25leHRWYWx9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmlsdGVyRGF0YS5wcmljZVJhbmdlLnRvID09PSBuZXh0VmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJEYXRhLnByaWNlUmFuZ2UudG8gPT09IG5leHRWYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEZpbHRlclByaWNlUmFuZ2Uoe30pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbHRlclByaWNlUmFuZ2UoeyBmcm9tOiBpdGVtLCB0bzogbmV4dFZhbCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KGl0ZW0pfSAtIHtmb3JtYXRDdXJyZW5jeShuZXh0VmFsKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==