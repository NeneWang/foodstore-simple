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
    src: "/assets/images/circled-logo.png",
    alt: "background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/assets/images/qr.png",
    alt: "background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "introduction-one__image__background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "background__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, __jsx("div", {
    ref: bg1,
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("img", {
    "data-depth": "0.5",
    src: "/assets/images/introduction/IntroductionOne/bg1.png",
    alt: "background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "background__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, __jsx("div", {
    ref: bg2,
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 23
    }
  }))))))), __jsx("div", {
    className: "col-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "introduction-one__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, data.subTitle.main, " ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 38
    }
  }, data.subTitle.span)), __jsx(_SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spaceBottom: "1.875em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), "Buenos Aires"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, data.description), __jsx(_Control_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: data.btn.color,
    content: data.btn.content,
    action: "/productos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lLmpzIl0sIm5hbWVzIjpbIkludHJvZHVjdGlvbk9uZSIsImRhdGEiLCJiZzEiLCJ1c2VSZWYiLCJiZzIiLCJ1c2VFZmZlY3QiLCJwYXJhbGxheDEiLCJQYXJhbGxheCIsImN1cnJlbnQiLCJwYXJhbGxheDIiLCJkaXNhYmxlIiwic3ViVGl0bGUiLCJtYWluIiwic3BhbiIsImRlc2NyaXB0aW9uIiwiYnRuIiwiY29sb3IiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxlQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hELE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsU0FBUyxHQUFHLElBQUlDLGtEQUFKLENBQWFMLEdBQUcsQ0FBQ00sT0FBakIsQ0FBaEI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsSUFBSUYsa0RBQUosQ0FBYUgsR0FBRyxDQUFDSSxPQUFqQixDQUFoQjtBQUNBLFdBQU8sWUFBTTtBQUNYRixlQUFTLENBQUNJLE9BQVY7QUFDQUQsZUFBUyxDQUFDQyxPQUFWO0FBQ0QsS0FIRDtBQUlELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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NWEzYTY4YzQyMGNlNDllYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwicGFyYWxsYXgtanNcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL0NvbnRyb2wvQnV0dG9uXCI7XHJcbmltcG9ydCBTZWN0aW9uVGl0bGVPbmUgZnJvbSBcIi4uL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGVPbmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbk9uZSh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGJnMSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBiZzIgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBwYXJhbGxheDEgPSBuZXcgUGFyYWxsYXgoYmcxLmN1cnJlbnQpO1xyXG4gICAgbGV0IHBhcmFsbGF4MiA9IG5ldyBQYXJhbGxheChiZzIuY3VycmVudCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwYXJhbGxheDEuZGlzYWJsZSgpO1xyXG4gICAgICBwYXJhbGxheDIuZGlzYWJsZSgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLW9uZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tb25lX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLW9uZV9faW1hZ2VfX2RldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lL2ltZzEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25PbmUvaW1nMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jaXJjbGVkLWxvZ28ucG5nXCIgYWx0PVwiYmFja2dyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcXIucG5nXCIgYWx0PVwiYmFja2dyb3VuZFwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLW9uZV9faW1hZ2VfX2JhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2JnMX0gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlcHRoPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbk9uZS9iZzEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2JnMn0gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlcHRoPVwiMC4zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnZlcnQteFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludmVydC15XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25PbmUvYmcyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLW9uZV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnN1YlRpdGxlLm1haW59IDxzcGFuPntkYXRhLnN1YlRpdGxlLnNwYW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZU9uZSBzcGFjZUJvdHRvbT1cIjEuODc1ZW1cIj5cclxuICAgICAgICAgICAgICAgIHsvKiB7ZGF0YS50aXRsZS5tYWlufSAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgQnVlbm9zIEFpcmVzXHJcbiAgICAgICAgICAgICAgICB7Lyoge2RhdGEudGl0bGUuc3Bhbn0gKi99XHJcbiAgICAgICAgICAgICAgPC9TZWN0aW9uVGl0bGVPbmU+XHJcbiAgICAgICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtkYXRhLmJ0bi5jb2xvcn1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2RhdGEuYnRuLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb249XCIvcHJvZHVjdG9zXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==