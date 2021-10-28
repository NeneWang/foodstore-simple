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

  console.log(data);
  return __jsx("div", {
    className: "product-detail__tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    className: "product-detail__tab__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    className: "tab__content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Descripci\xF3n"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Envio")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "tab__content__item -description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, data.description)), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "tab__content__item -ship",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Enviar a  "), "CABA"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Standard Shipping on order over 0kg - 5kg. ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 58
    }
  }, "+10.00")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Heavy Goods Shipping on oder over 5kg-10kg . ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 60
    }
  }, "+20.00"))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Delivery & returns"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "We diliver to over 100 countries around the word. For full details of the delivery options we offer, please view our Delivery information."))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsL0VsZW1lbnRzL1Byb2R1Y3REZXRhaWxJbmZvVGFiLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxJbmZvVGFiIiwiZGF0YSIsIm9uUmV2aWV3U3VibWl0IiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiY29uc29sZSIsImxvZyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0Esb0JBQVQsT0FBd0Q7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjs7QUFDckUsaUJBQTJDQywrREFBTyxFQUFsRDtBQUFBLE1BQVFDLFFBQVIsWUFBUUEsUUFBUjtBQUFBLE1BQWtCQyxZQUFsQixZQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsTUFBaEMsWUFBZ0NBLE1BQWhDOztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBTSxhQUFTLEVBQUMsOEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFDLHNCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsQ0FERixFQU9FLE1BQUMsbURBQUQ7QUFBVSxhQUFTLEVBQUMsaUNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VBLElBQUksQ0FBQ1EsV0FEUCxDQURGLENBUEYsRUFZRSxNQUFDLG1EQUFEO0FBQVUsYUFBUyxFQUFDLDBCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsU0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUM2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRDdDLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNEQUMrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRC9DLENBSkYsQ0FKRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBWkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtKQWJGLENBWkYsQ0FERixDQURGO0FBNEZEOztHQS9GdUJULG9CO1VBQ3FCRyx1RDs7O0tBRHJCSCxvQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29taWRhLmpzLjBkNTE3M2ZlOWY2NzRmN2ZmOWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSBcInJlYWN0LXRhYnNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmltcG9ydCBSZXZpZXcgZnJvbSBcIi4uLy4uL0NvbnRyb2wvUmV2aWV3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsSW5mb1RhYih7IGRhdGEsIG9uUmV2aWV3U3VibWl0IH0pIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsX190YWJcIj5cclxuICAgICAgPFRhYnMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxfX3RhYl9fY29udGVudFwiPlxyXG4gICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cInRhYl9fY29udGVudF9faGVhZGVyXCI+XHJcbiAgICAgICAgICA8VGFiPkRlc2NyaXBjacOzbjwvVGFiPlxyXG4gICAgICAgICAgPFRhYj5FbnZpbzwvVGFiPlxyXG4gICAgICAgICB7LyogIDxUYWI+UmV2aWV3cyAoIDAzICk8L1RhYj4gKi99XHJcbiAgICAgICAgPC9UYWJMaXN0PlxyXG5cclxuICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiX19jb250ZW50X19pdGVtIC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiX19jb250ZW50X19pdGVtIC1zaGlwXCI+XHJcbiAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgIDxzcGFuPkVudmlhciBhICA8L3NwYW4+Q0FCQVxyXG4gICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIFN0YW5kYXJkIFNoaXBwaW5nIG9uIG9yZGVyIG92ZXIgMGtnIC0gNWtnLiA8c3Bhbj4rMTAuMDA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICBIZWF2eSBHb29kcyBTaGlwcGluZyBvbiBvZGVyIG92ZXIgNWtnLTEwa2cgLiA8c3Bhbj4rMjAuMDA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGg1PkRlbGl2ZXJ5ICYgcmV0dXJuczwvaDU+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgV2UgZGlsaXZlciB0byBvdmVyIDEwMCBjb3VudHJpZXMgYXJvdW5kIHRoZSB3b3JkLiBGb3IgZnVsbCBkZXRhaWxzXHJcbiAgICAgICAgICAgIG9mIHRoZSBkZWxpdmVyeSBvcHRpb25zIHdlIG9mZmVyLCBwbGVhc2UgdmlldyBvdXIgRGVsaXZlcnlcclxuICAgICAgICAgICAgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgIHsvKiAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYl9fY29udGVudF9faXRlbSAtcmV2aWV3XCI+XHJcbiAgICAgICAgICA8UmV2aWV3XHJcbiAgICAgICAgICAgIGF2YXRhcj1cImh0dHBzOi8vaTEud3AuY29tL21ldHJvLmNvLnVrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL0dldHR5SW1hZ2VzLTEyMTExMjc5ODkuanBnP3F1YWxpdHk9OTAmc3RyaXA9YWxsJnpvb209MSZyZXNpemU9NjQ0JTJDNDE2JnNzbD0xXCJcclxuICAgICAgICAgICAgbmFtZT1cIlphY2hhcnkgV2FkZVwiXHJcbiAgICAgICAgICAgIHB1YmxpY0RhdGU9XCJNYXIgMTcsIDIwMjBcIlxyXG4gICAgICAgICAgICByYXRlPXs0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cclxuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlLlxyXG4gICAgICAgICAgPC9SZXZpZXc+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uUmV2aWV3U3VibWl0KX0+XHJcbiAgICAgICAgICAgIDxoNT5Xcml0ZSBhIHJldmlldzwvaDU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtdmFsaWRhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3JcIj5QbGVhc2UgcHJvdmlkZSBhIG5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC12YWxpZGF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvclwiPlBsZWFzZSBwcm92aWRlIGFuIGVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtdmFsaWRhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm1lc3NhZ2UgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3JcIj48L3NwYW4+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biAtZGFya1wiPldyaXRlIGEgcmV2aWV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+ICovfVxyXG4gICAgICA8L1RhYnM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=