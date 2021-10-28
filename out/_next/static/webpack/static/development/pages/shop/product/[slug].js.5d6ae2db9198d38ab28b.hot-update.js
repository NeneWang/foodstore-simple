webpackHotUpdate("static\\development\\pages\\shop\\product\\[slug].js",{

/***/ "./src/components/ProductDetail/Elements/ProductDetailInfoTab.js":
/*!***********************************************************************!*\
  !*** ./src/components/ProductDetail/Elements/ProductDetailInfoTab.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailInfoTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _Control_Review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Control/Review */ "./src/components/Control/Review.js");
var _jsxFileName = "E:\\wangn\\Assets\\ecommerce-nextjs\\Eliah-ReactNext\\eliah\\src\\components\\ProductDetail\\Elements\\ProductDetailInfoTab.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProductDetailInfoTab(_ref) {
  _s();

  var data = _ref.data,
      onReviewSubmit = _ref.onReviewSubmit;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  return __jsx("div", {
    className: "product-detail__tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    className: "product-detail__tab__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    className: "tab__content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Description"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Shipping & Returns"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Reviews ( 03 )")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "tab__content__item -description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, data[0].name)), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "tab__content__item -ship",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Ship to "), "New York"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Standard Shipping on order over 0kg - 5kg. ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 58
    }
  }, "+10.00")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Heavy Goods Shipping on oder over 5kg-10kg . ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 60
    }
  }, "+20.00"))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Delivery & returns"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "We diliver to over 100 countries around the word. For full details of the delivery options we offer, please view our Delivery information.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "tab__content__item -review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_Control_Review__WEBPACK_IMPORTED_MODULE_3__["default"], {
    avatar: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211127989.jpg?quality=90&strip=all&zoom=1&resize=644%2C416&ssl=1",
    name: "Zachary Wade",
    publicDate: "Mar 17, 2020",
    rate: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."), __jsx("form", {
    onSubmit: handleSubmit(onReviewSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Write a review"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-validator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    ref: register({
      required: true
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }), errors.name && __jsx("span", {
    className: "input-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Please provide a name"))), __jsx("div", {
    className: "col-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-validator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    name: "email",
    placeholder: "Email",
    ref: register({
      required: true
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }), errors.email && __jsx("span", {
    className: "input-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "Please provide an email"))), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-validator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("textarea", {
    name: "message",
    placeholder: "Message",
    rows: "5",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  })), errors.message && __jsx("span", {
    className: "input-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 36
    }
  })), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "btn -dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Write a review")))))));
}

_s(ProductDetailInfoTab, "iyH731LTjAbxnbpM16EGorBPneQ=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"]];
});

_c = ProductDetailInfoTab;

var _c;

$RefreshReg$(_c, "ProductDetailInfoTab");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsL0VsZW1lbnRzL1Byb2R1Y3REZXRhaWxJbmZvVGFiLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxJbmZvVGFiIiwiZGF0YSIsIm9uUmV2aWV3U3VibWl0IiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwibmFtZSIsInJlcXVpcmVkIiwiZW1haWwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0Esb0JBQVQsT0FBd0Q7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjs7QUFDckUsaUJBQTJDQywrREFBTyxFQUFsRDtBQUFBLE1BQVFDLFFBQVIsWUFBUUEsUUFBUjtBQUFBLE1BQWtCQyxZQUFsQixZQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsTUFBaEMsWUFBZ0NBLE1BQWhDOztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBTSxhQUFTLEVBQUMsOEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFDLHNCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLEVBR0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLENBREYsRUFPRSxNQUFDLG1EQUFE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QTJCRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLGVBQVcsRUFBQyxTQUZkO0FBR0UsUUFBSSxFQUFDLEdBSFA7QUFJRSxPQUFHLEVBQUVMLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFTR0UsTUFBTSxDQUFDSSxPQUFQLElBQWtCO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUckIsQ0EzQkYsRUFzQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQXRDRixDQUZGLENBVkYsQ0EvQkYsQ0FERixDQURGO0FBNEZEOztHQTlGdUJWLG9CO1VBQ3FCRyx1RDs7O0tBRHJCSCxvQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxccHJvZHVjdFxcW3NsdWddLmpzLjVkNmFlMmRiOTE5OGQzOGFiMjhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSBcInJlYWN0LXRhYnNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmltcG9ydCBSZXZpZXcgZnJvbSBcIi4uLy4uL0NvbnRyb2wvUmV2aWV3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsSW5mb1RhYih7IGRhdGEsIG9uUmV2aWV3U3VibWl0IH0pIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsX190YWJcIj5cclxuICAgICAgPFRhYnMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxfX3RhYl9fY29udGVudFwiPlxyXG4gICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cInRhYl9fY29udGVudF9faGVhZGVyXCI+XHJcbiAgICAgICAgICA8VGFiPkRlc2NyaXB0aW9uPC9UYWI+XHJcbiAgICAgICAgICA8VGFiPlNoaXBwaW5nICYgUmV0dXJuczwvVGFiPlxyXG4gICAgICAgICAgPFRhYj5SZXZpZXdzICggMDMgKTwvVGFiPlxyXG4gICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYl9fY29udGVudF9faXRlbSAtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgIHtkYXRhWzBdLm5hbWV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiX19jb250ZW50X19pdGVtIC1zaGlwXCI+XHJcbiAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgIDxzcGFuPlNoaXAgdG8gPC9zcGFuPk5ldyBZb3JrXHJcbiAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgU3RhbmRhcmQgU2hpcHBpbmcgb24gb3JkZXIgb3ZlciAwa2cgLSA1a2cuIDxzcGFuPisxMC4wMDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIEhlYXZ5IEdvb2RzIFNoaXBwaW5nIG9uIG9kZXIgb3ZlciA1a2ctMTBrZyAuIDxzcGFuPisyMC4wMDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8aDU+RGVsaXZlcnkgJiByZXR1cm5zPC9oNT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBXZSBkaWxpdmVyIHRvIG92ZXIgMTAwIGNvdW50cmllcyBhcm91bmQgdGhlIHdvcmQuIEZvciBmdWxsIGRldGFpbHNcclxuICAgICAgICAgICAgb2YgdGhlIGRlbGl2ZXJ5IG9wdGlvbnMgd2Ugb2ZmZXIsIHBsZWFzZSB2aWV3IG91ciBEZWxpdmVyeVxyXG4gICAgICAgICAgICBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWJfX2NvbnRlbnRfX2l0ZW0gLXJldmlld1wiPlxyXG4gICAgICAgICAgPFJldmlld1xyXG4gICAgICAgICAgICBhdmF0YXI9XCJodHRwczovL2kxLndwLmNvbS9tZXRyby5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9HZXR0eUltYWdlcy0xMjExMTI3OTg5LmpwZz9xdWFsaXR5PTkwJnN0cmlwPWFsbCZ6b29tPTEmcmVzaXplPTY0NCUyQzQxNiZzc2w9MVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJaYWNoYXJ5IFdhZGVcIlxyXG4gICAgICAgICAgICBwdWJsaWNEYXRlPVwiTWFyIDE3LCAyMDIwXCJcclxuICAgICAgICAgICAgcmF0ZT17NH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZS5cclxuICAgICAgICAgIDwvUmV2aWV3PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblJldmlld1N1Ym1pdCl9PlxyXG4gICAgICAgICAgICA8aDU+V3JpdGUgYSByZXZpZXc8L2g1PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXZhbGlkYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yXCI+UGxlYXNlIHByb3ZpZGUgYSBuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtdmFsaWRhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3JcIj5QbGVhc2UgcHJvdmlkZSBhbiBlbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXZhbGlkYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5tZXNzYWdlICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yXCI+PC9zcGFuPn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gLWRhcmtcIj5Xcml0ZSBhIHJldmlldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8L1RhYnM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=