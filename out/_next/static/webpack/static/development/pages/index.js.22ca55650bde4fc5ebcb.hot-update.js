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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lLmpzIl0sIm5hbWVzIjpbIkludHJvZHVjdGlvbk9uZSIsImRhdGEiLCJiZzEiLCJ1c2VSZWYiLCJiZzIiLCJ1c2VFZmZlY3QiLCJwYXJhbGxheDEiLCJQYXJhbGxheCIsImN1cnJlbnQiLCJwYXJhbGxheDIiLCJkaXNhYmxlIiwic3ViVGl0bGUiLCJtYWluIiwic3BhbiIsImRlc2NyaXB0aW9uIiwiYnRuIiwiY29sb3IiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxlQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hELE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsU0FBUyxHQUFHLElBQUlDLGtEQUFKLENBQWFMLEdBQUcsQ0FBQ00sT0FBakIsQ0FBaEI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsSUFBSUYsa0RBQUosQ0FBYUgsR0FBRyxDQUFDSSxPQUFqQixDQUFoQjtBQUNBLFdBQU8sWUFBTTtBQUNYRixlQUFTLENBQUNJLE9BQVY7QUFDQUQsZUFBUyxDQUFDQyxPQUFWO0FBQ0QsS0FIRDtBQUlELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxPQUFHLEVBQUMsdUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFUixHQUFWO0FBQWUsYUFBUyxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGtCQUFXLEtBRGI7QUFFRSxPQUFHLEVBQUMscURBRk47QUFHRSxPQUFHLEVBQUMsWUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBVUU7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFRSxHQUFWO0FBQWUsYUFBUyxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGtCQUFXLEtBRGI7QUFFRSx5QkFGRjtBQUdFLHlCQUhGO0FBSUUsT0FBRyxFQUFDLHFEQUpOO0FBS0UsT0FBRyxFQUFDLFlBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FWRixDQURGLENBYkYsQ0FERixDQURGLEVBeUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxJQUFJLENBQUNVLFFBQUwsQ0FBY0MsSUFEakIsT0FDdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPWCxJQUFJLENBQUNVLFFBQUwsQ0FBY0UsSUFBckIsQ0FEdkIsQ0FERixFQUlFLE1BQUMscUVBQUQ7QUFBaUIsZUFBVyxFQUFDLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsaUJBSkYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlaLElBQUksQ0FBQ2EsV0FBVCxDQVZGLEVBV0UsTUFBQyx1REFBRDtBQUNFLFNBQUssRUFBRWIsSUFBSSxDQUFDYyxHQUFMLENBQVNDLEtBRGxCO0FBRUUsV0FBTyxFQUFFZixJQUFJLENBQUNjLEdBQUwsQ0FBU0UsT0FGcEI7QUFHRSxVQUFNLEVBQUMsWUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERixDQXpDRixDQURGLENBREYsQ0FERjtBQW1FRDs7R0E5RXVCakIsZTs7S0FBQUEsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMjJjYTU1NjUwYmRlNGZjNWViY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSBcInBhcmFsbGF4LWpzXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9Db250cm9sL0J1dHRvblwiO1xyXG5pbXBvcnQgU2VjdGlvblRpdGxlT25lIGZyb20gXCIuLi9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlT25lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb25PbmUoeyBkYXRhIH0pIHtcclxuICBjb25zdCBiZzEgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgYmcyID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcGFyYWxsYXgxID0gbmV3IFBhcmFsbGF4KGJnMS5jdXJyZW50KTtcclxuICAgIGxldCBwYXJhbGxheDIgPSBuZXcgUGFyYWxsYXgoYmcyLmN1cnJlbnQpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcGFyYWxsYXgxLmRpc2FibGUoKTtcclxuICAgICAgcGFyYWxsYXgyLmRpc2FibGUoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi1vbmVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLW9uZV9faW1hZ2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi1vbmVfX2ltYWdlX19kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9xci5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbk9uZS9pbWcxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbk9uZS9pbWcyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi1vbmVfX2ltYWdlX19iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtiZzF9IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZXB0aD1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25PbmUvYmcxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtiZzJ9IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZXB0aD1cIjAuM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW52ZXJ0LXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnZlcnQteVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lL2JnMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJiYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi1vbmVfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5zdWJUaXRsZS5tYWlufSA8c3Bhbj57ZGF0YS5zdWJUaXRsZS5zcGFufTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGVPbmUgc3BhY2VCb3R0b209XCIxLjg3NWVtXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyoge2RhdGEudGl0bGUubWFpbn0gKi99XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIEJ1ZW5vcyBBaXJlc1xyXG4gICAgICAgICAgICAgICAgey8qIHtkYXRhLnRpdGxlLnNwYW59ICovfVxyXG4gICAgICAgICAgICAgIDwvU2VjdGlvblRpdGxlT25lPlxyXG4gICAgICAgICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17ZGF0YS5idG4uY29sb3J9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtkYXRhLmJ0bi5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiL3Byb2R1Y3Rvc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=