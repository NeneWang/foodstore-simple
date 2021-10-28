webpackHotUpdate("static\\development\\pages\\comida.js",{

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
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsL0VsZW1lbnRzL1Byb2R1Y3REZXRhaWxJbmZvVGFiLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxJbmZvVGFiIiwiZGF0YSIsIm9uUmV2aWV3U3VibWl0IiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwicmVxdWlyZWQiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0Esb0JBQVQsT0FBd0Q7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjs7QUFDckUsaUJBQTJDQywrREFBTyxFQUFsRDtBQUFBLE1BQVFDLFFBQVIsWUFBUUEsUUFBUjtBQUFBLE1BQWtCQyxZQUFsQixZQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsTUFBaEMsWUFBZ0NBLE1BQWhDOztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBTSxhQUFTLEVBQUMsOEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFDLHNCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLEVBR0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLENBREYsRUFPRSxNQUFDLG1EQUFE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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsZUFBVyxFQUFDLFNBRmQ7QUFHRSxRQUFJLEVBQUMsR0FIUDtBQUlFLE9BQUcsRUFBRUwsUUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVNHRSxNQUFNLENBQUNJLE9BQVAsSUFBa0I7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRyQixDQTNCRixFQXNDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBdENGLENBRkYsQ0FWRixDQS9CRixDQURGLENBREY7QUE0RkQ7O0dBOUZ1QlYsb0I7VUFDcUJHLHVEOzs7S0FEckJILG9CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb21pZGEuanMuODZmM2JlZjA4NjE3NzNkMjhkY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tIFwicmVhY3QtdGFic1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW1wb3J0IFJldmlldyBmcm9tIFwiLi4vLi4vQ29udHJvbC9SZXZpZXdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxJbmZvVGFiKHsgZGF0YSwgb25SZXZpZXdTdWJtaXQgfSkge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxfX3RhYlwiPlxyXG4gICAgICA8VGFicyBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbF9fdGFiX19jb250ZW50XCI+XHJcbiAgICAgICAgPFRhYkxpc3QgY2xhc3NOYW1lPVwidGFiX19jb250ZW50X19oZWFkZXJcIj5cclxuICAgICAgICAgIDxUYWI+RGVzY3JpcHRpb248L1RhYj5cclxuICAgICAgICAgIDxUYWI+U2hpcHBpbmcgJiBSZXR1cm5zPC9UYWI+XHJcbiAgICAgICAgICA8VGFiPlJldmlld3MgKCAwMyApPC9UYWI+XHJcbiAgICAgICAgPC9UYWJMaXN0PlxyXG5cclxuICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiX19jb250ZW50X19pdGVtIC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgey8qIHtkYXRhWzBdLm5hbWV9ICovfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYl9fY29udGVudF9faXRlbSAtc2hpcFwiPlxyXG4gICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICA8c3Bhbj5TaGlwIHRvIDwvc3Bhbj5OZXcgWW9ya1xyXG4gICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIFN0YW5kYXJkIFNoaXBwaW5nIG9uIG9yZGVyIG92ZXIgMGtnIC0gNWtnLiA8c3Bhbj4rMTAuMDA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICBIZWF2eSBHb29kcyBTaGlwcGluZyBvbiBvZGVyIG92ZXIgNWtnLTEwa2cgLiA8c3Bhbj4rMjAuMDA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGg1PkRlbGl2ZXJ5ICYgcmV0dXJuczwvaDU+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgV2UgZGlsaXZlciB0byBvdmVyIDEwMCBjb3VudHJpZXMgYXJvdW5kIHRoZSB3b3JkLiBGb3IgZnVsbCBkZXRhaWxzXHJcbiAgICAgICAgICAgIG9mIHRoZSBkZWxpdmVyeSBvcHRpb25zIHdlIG9mZmVyLCBwbGVhc2UgdmlldyBvdXIgRGVsaXZlcnlcclxuICAgICAgICAgICAgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiX19jb250ZW50X19pdGVtIC1yZXZpZXdcIj5cclxuICAgICAgICAgIDxSZXZpZXdcclxuICAgICAgICAgICAgYXZhdGFyPVwiaHR0cHM6Ly9pMS53cC5jb20vbWV0cm8uY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvR2V0dHlJbWFnZXMtMTIxMTEyNzk4OS5qcGc/cXVhbGl0eT05MCZzdHJpcD1hbGwmem9vbT0xJnJlc2l6ZT02NDQlMkM0MTYmc3NsPTFcIlxyXG4gICAgICAgICAgICBuYW1lPVwiWmFjaGFyeSBXYWRlXCJcclxuICAgICAgICAgICAgcHVibGljRGF0ZT1cIk1hciAxNywgMjAyMFwiXHJcbiAgICAgICAgICAgIHJhdGU9ezR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUuXHJcbiAgICAgICAgICA8L1Jldmlldz5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25SZXZpZXdTdWJtaXQpfT5cclxuICAgICAgICAgICAgPGg1PldyaXRlIGEgcmV2aWV3PC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC12YWxpZGF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvclwiPlBsZWFzZSBwcm92aWRlIGEgbmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXZhbGlkYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yXCI+UGxlYXNlIHByb3ZpZGUgYW4gZW1haWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC12YWxpZGF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMubWVzc2FnZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvclwiPjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIC1kYXJrXCI+V3JpdGUgYSByZXZpZXc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPC9UYWJzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9