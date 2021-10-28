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

  console.log(data);
  return __jsx("div", {
    className: "product-detail__tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    className: "product-detail__tab__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    className: "tab__content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, " Description "), " ", " "), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "tab__content__item -description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, " ", data.description, " "), " "), " ", __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "tab__content__item -ship",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 16
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, " Ship to "), "New York "), " ", __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 10
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Standard Shipping on order over 0 kg - 5 kg. ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 50
    }
  }, " +10.00 "), " "), " ", __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }, "Heavy Goods Shipping on oder over 5 kg - 10 kg. ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 53
    }
  }, " +20.00 "), " "), " "), " ", __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }, " Delivery & returns "), " ", __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 36
    }
  }, "We diliver to over 100 countries around the word.For full details of the delivery options we offer, please view our Delivery information. "), " "), " ", " "), " ");
}

_s(ProductDetailInfoTab, "uTsJO2OSwEX2abvKMddyS5KZSyA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsL0VsZW1lbnRzL1Byb2R1Y3REZXRhaWxJbmZvVGFiLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxJbmZvVGFiIiwiZGF0YSIsIm9uUmV2aWV3U3VibWl0IiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiY29uc29sZSIsImxvZyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUlBO0FBRWUsU0FBU0Esb0JBQVQsT0FHWjtBQUFBOztBQUFBLE1BRkRDLElBRUMsUUFGREEsSUFFQztBQUFBLE1BRERDLGNBQ0MsUUFEREEsY0FDQzs7QUFDRCxpQkFJSUMsK0RBQU8sRUFKWDtBQUFBLE1BQ0VDLFFBREYsWUFDRUEsUUFERjtBQUFBLE1BRUVDLFlBRkYsWUFFRUEsWUFGRjtBQUFBLE1BR0VDLE1BSEYsWUFHRUEsTUFIRjs7QUFLQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlQLElBQVo7QUFDQSxTQUFTO0FBQ0gsYUFBUyxFQUFHLHFCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUCxNQUNBLCtDQURBO0FBQ0ssYUFBUyxFQUFHLDhCQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUEsTUFDQSxrREFEQTtBQUNRLGFBQVMsRUFBRyxzQkFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBLE1BQ0EsOENBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxXQUZBLEVBV0EsTUFDQSxtREFEQTtBQUNTLGFBQVMsRUFBRyxpQ0FEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFRUEsSUFBSSxDQUFDUSxXQUZQLE1BRkEsTUFYQSxPQWtCVyxNQUNYLG1EQURXO0FBQ0YsYUFBUyxFQUFHLDBCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxjQUZXLE9BTU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBRTZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRjdDLE1BRkssT0FLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUUyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUYzQyxNQUxBLE1BTk0sT0FlTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWZNLE9BZ0JvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtKQWhCcEIsTUFsQlgsV0FGTyxNQUFUO0FBcUdEOztHQS9HdUJULG9CO1VBUWxCRyx1RDs7O0tBUmtCSCxvQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxccHJvZHVjdFxcW3NsdWddLmpzLjc3MmYyN2EyMWZhYTBmNjIxZDQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFRhYixcclxuICBUYWJzLFxyXG4gIFRhYkxpc3QsXHJcbiAgVGFiUGFuZWxcclxufSBmcm9tIFwicmVhY3QtdGFic1wiO1xyXG5pbXBvcnQge1xyXG4gIHVzZUZvcm1cclxufSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5pbXBvcnQgUmV2aWV3IGZyb20gXCIuLi8uLi9Db250cm9sL1Jldmlld1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdERldGFpbEluZm9UYWIoe1xyXG4gIGRhdGEsXHJcbiAgb25SZXZpZXdTdWJtaXRcclxufSkge1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZXJyb3JzXHJcbiAgfSA9IHVzZUZvcm0oKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKCA8XHJcbiAgICBkaXYgY2xhc3NOYW1lID0gXCJwcm9kdWN0LWRldGFpbF9fdGFiXCIgPlxyXG4gICAgPFxyXG4gICAgVGFicyBjbGFzc05hbWUgPSBcInByb2R1Y3QtZGV0YWlsX190YWJfX2NvbnRlbnRcIiA+XHJcbiAgICA8XHJcbiAgICBUYWJMaXN0IGNsYXNzTmFtZSA9IFwidGFiX19jb250ZW50X19oZWFkZXJcIiA+XHJcbiAgICA8XHJcbiAgICBUYWIgPiBEZXNjcmlwdGlvbiA8IC9UYWI+IHtcclxuICAgICAgLyogPFRhYj5TaGlwcGluZyAmIFJldHVybnM8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWI+UmV2aWV3cyAoIDAzICk8L1RhYj4gKi9cclxuICAgIH0gPFxyXG4gICAgL1RhYkxpc3Q+XHJcblxyXG4gICAgPFxyXG4gICAgVGFiUGFuZWwgY2xhc3NOYW1lID0gXCJ0YWJfX2NvbnRlbnRfX2l0ZW0gLWRlc2NyaXB0aW9uXCIgPlxyXG4gICAgPFxyXG4gICAgcCA+IHtcclxuICAgICAgZGF0YS5kZXNjcmlwdGlvblxyXG4gICAgfSA8XHJcbiAgICAvcD4gPFxyXG4gICAgL1RhYlBhbmVsPiA8XHJcbiAgICBUYWJQYW5lbCBjbGFzc05hbWUgPSBcInRhYl9fY29udGVudF9faXRlbSAtc2hpcFwiID5cclxuICAgIDxcclxuICAgIGg1ID5cclxuICAgIDxcclxuICAgIHNwYW4gPiBTaGlwIHRvIDwgL3NwYW4+TmV3IFlvcmsgPFxyXG4gICAgL2g1PiA8XHJcbiAgICB1bCA+XHJcbiAgICA8XHJcbiAgICBsaSA+XHJcbiAgICBTdGFuZGFyZCBTaGlwcGluZyBvbiBvcmRlciBvdmVyIDAga2cgLSA1IGtnLiA8IHNwYW4gPiArMTAuMDAgPCAvc3Bhbj4gPFxyXG4gICAgL2xpPiA8XHJcbiAgICBsaSA+XHJcbiAgICBIZWF2eSBHb29kcyBTaGlwcGluZyBvbiBvZGVyIG92ZXIgNSBrZyAtIDEwIGtnLiA8IHNwYW4gPiArMjAuMDAgPCAvc3Bhbj4gPFxyXG4gICAgL2xpPiA8XHJcbiAgICAvdWw+IDxcclxuICAgIGg1ID4gRGVsaXZlcnkgJiByZXR1cm5zIDwgL2g1PiA8XHJcbiAgICBwID5cclxuICAgIFdlIGRpbGl2ZXIgdG8gb3ZlciAxMDAgY291bnRyaWVzIGFyb3VuZCB0aGUgd29yZC5Gb3IgZnVsbCBkZXRhaWxzIG9mIHRoZSBkZWxpdmVyeSBvcHRpb25zIHdlIG9mZmVyLCBwbGVhc2UgdmlldyBvdXIgRGVsaXZlcnkgaW5mb3JtYXRpb24uIDxcclxuICAgIC9wPiA8XHJcbiAgICAvVGFiUGFuZWw+IHtcclxuICAgICAgLyogIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWJfX2NvbnRlbnRfX2l0ZW0gLXJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPFJldmlld1xyXG4gICAgICAgICAgICAgICAgICBhdmF0YXI9XCJodHRwczovL2kxLndwLmNvbS9tZXRyby5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9HZXR0eUltYWdlcy0xMjExMTI3OTg5LmpwZz9xdWFsaXR5PTkwJnN0cmlwPWFsbCZ6b29tPTEmcmVzaXplPTY0NCUyQzQxNiZzc2w9MVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJaYWNoYXJ5IFdhZGVcIlxyXG4gICAgICAgICAgICAgICAgICBwdWJsaWNEYXRlPVwiTWFyIDE3LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgcmF0ZT17NH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZS5cclxuICAgICAgICAgICAgICAgIDwvUmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblJldmlld1N1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+V3JpdGUgYSByZXZpZXc8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXZhbGlkYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yXCI+UGxlYXNlIHByb3ZpZGUgYSBuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtdmFsaWRhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3JcIj5QbGVhc2UgcHJvdmlkZSBhbiBlbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXZhbGlkYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5tZXNzYWdlICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yXCI+PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gLWRhcmtcIj5Xcml0ZSBhIHJldmlldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPiAqL1xyXG4gICAgfSA8XHJcbiAgICAvVGFicz4gPFxyXG4gICAgL2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==