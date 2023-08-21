webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Sections/Introduction/IntroductionOne.js":
/*!*****************************************************************!*\
  !*** ./src/components/Sections/Introduction/IntroductionOne.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntroductionOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Control_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Control/Button */ "./src/components/Control/Button.js");
/* harmony import */ var _SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SectionTitle/SectionTitleOne */ "./src/components/Sections/SectionTitle/SectionTitleOne.js");
var _jsxFileName = "C:\\github\\foodstore\\foodstore-simple\\src\\components\\Sections\\Introduction\\IntroductionOne.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function IntroductionOne(_ref) {
  _s();

  var data = _ref.data;
  var bg1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var bg2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var parallax1 = new parallax_js__WEBPACK_IMPORTED_MODULE_1___default.a(bg1.current);
    var parallax2 = new parallax_js__WEBPACK_IMPORTED_MODULE_1___default.a(bg2.current);
    return function () {
      parallax1.disable();
      parallax2.disable();
    };
  }, []);
  return __jsx("div", {
    className: "introduction-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "introduction-one__image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "introduction-one__image__detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/assets/images/qr.png",
    alt: "",
    width: "200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "introduction-one__image__background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "background__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, __jsx("div", {
    ref: bg1,
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("img", {
    "data-depth": "0.5",
    src: "/assets/images/introduction/IntroductionOne/bg1.png",
    alt: "background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "background__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, __jsx("div", {
    ref: bg2,
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("img", {
    "data-depth": "0.3",
    "data-invert-x": true,
    "data-invert-y": true,
    src: "/assets/images/introduction/IntroductionOne/bg2.png",
    alt: "background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }))))))), __jsx("div", {
    className: "col-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "introduction-one__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, data.subTitle.main, " ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 38
    }
  }, data.subTitle.span)), __jsx(_SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spaceBottom: "1.875em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), "Buenos Aires"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, data.description), __jsx(_Control_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: data.btn.color,
    content: data.btn.content,
    action: "/productos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }))))));
}

_s(IntroductionOne, "ZVhAIjm6vO1cm78hWfEfozzG1yM=");

_c = IntroductionOne;

var _c;

$RefreshReg$(_c, "IntroductionOne");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lLmpzIl0sIm5hbWVzIjpbIkludHJvZHVjdGlvbk9uZSIsImRhdGEiLCJiZzEiLCJ1c2VSZWYiLCJiZzIiLCJ1c2VFZmZlY3QiLCJwYXJhbGxheDEiLCJQYXJhbGxheCIsImN1cnJlbnQiLCJwYXJhbGxheDIiLCJkaXNhYmxlIiwic3ViVGl0bGUiLCJtYWluIiwic3BhbiIsImRlc2NyaXB0aW9uIiwiYnRuIiwiY29sb3IiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxlQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hELE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsU0FBUyxHQUFHLElBQUlDLGtEQUFKLENBQWFMLEdBQUcsQ0FBQ00sT0FBakIsQ0FBaEI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsSUFBSUYsa0RBQUosQ0FBYUgsR0FBRyxDQUFDSSxPQUFqQixDQUFoQjtBQUNBLFdBQU8sWUFBTTtBQUNYRixlQUFTLENBQUNJLE9BQVY7QUFDQUQsZUFBUyxDQUFDQyxPQUFWO0FBQ0QsS0FIRDtBQUlELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxPQUFHLEVBQUMsdUJBQVQ7QUFBaUMsT0FBRyxFQUFDLEVBQXJDO0FBQXdDLFNBQUssRUFBQyxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVSLEdBQVY7QUFBZSxhQUFTLEVBQUMsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0Usa0JBQVcsS0FEYjtBQUVFLE9BQUcsRUFBQyxxREFGTjtBQUdFLE9BQUcsRUFBQyxZQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVFLEdBQVY7QUFBZSxhQUFTLEVBQUMsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0Usa0JBQVcsS0FEYjtBQUVFLHlCQUZGO0FBR0UseUJBSEY7QUFJRSxPQUFHLEVBQUMscURBSk47QUFLRSxPQUFHLEVBQUMsWUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVZGLENBREYsQ0FiRixDQURGLENBREYsRUF5Q0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILElBQUksQ0FBQ1UsUUFBTCxDQUFjQyxJQURqQixPQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9YLElBQUksQ0FBQ1UsUUFBTCxDQUFjRSxJQUFyQixDQUR2QixDQURGLEVBSUUsTUFBQyxxRUFBRDtBQUFpQixlQUFXLEVBQUMsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixpQkFKRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVosSUFBSSxDQUFDYSxXQUFULENBVkYsRUFXRSxNQUFDLHVEQUFEO0FBQ0UsU0FBSyxFQUFFYixJQUFJLENBQUNjLEdBQUwsQ0FBU0MsS0FEbEI7QUFFRSxXQUFPLEVBQUVmLElBQUksQ0FBQ2MsR0FBTCxDQUFTRSxPQUZwQjtBQUdFLFVBQU0sRUFBQyxZQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGLENBekNGLENBREYsQ0FERixDQURGO0FBbUVEOztHQTlFdUJqQixlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jNmY0YzE0MjA5OGM5ZTMyOWEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwicGFyYWxsYXgtanNcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL0NvbnRyb2wvQnV0dG9uXCI7XHJcbmltcG9ydCBTZWN0aW9uVGl0bGVPbmUgZnJvbSBcIi4uL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGVPbmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbk9uZSh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGJnMSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBiZzIgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBwYXJhbGxheDEgPSBuZXcgUGFyYWxsYXgoYmcxLmN1cnJlbnQpO1xyXG4gICAgbGV0IHBhcmFsbGF4MiA9IG5ldyBQYXJhbGxheChiZzIuY3VycmVudCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwYXJhbGxheDEuZGlzYWJsZSgpO1xyXG4gICAgICBwYXJhbGxheDIuZGlzYWJsZSgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLW9uZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tb25lX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLW9uZV9faW1hZ2VfX2RldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3FyLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMjAwXCIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25PbmUvaW1nMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25PbmUvaW1nMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tb25lX19pbWFnZV9fYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17YmcxfSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVwdGg9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lL2JnMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17YmcyfSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVwdGg9XCIwLjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludmVydC14XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW52ZXJ0LXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbk9uZS9iZzIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tb25lX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuc3ViVGl0bGUubWFpbn0gPHNwYW4+e2RhdGEuc3ViVGl0bGUuc3Bhbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlT25lIHNwYWNlQm90dG9tPVwiMS44NzVlbVwiPlxyXG4gICAgICAgICAgICAgICAgey8qIHtkYXRhLnRpdGxlLm1haW59ICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBCdWVub3MgQWlyZXNcclxuICAgICAgICAgICAgICAgIHsvKiB7ZGF0YS50aXRsZS5zcGFufSAqL31cclxuICAgICAgICAgICAgICA8L1NlY3Rpb25UaXRsZU9uZT5cclxuICAgICAgICAgICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2RhdGEuYnRuLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17ZGF0YS5idG4uY29udGVudH1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj1cIi9wcm9kdWN0b3NcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9