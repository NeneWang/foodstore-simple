webpackHotUpdate("static\\development\\pages\\shop\\product\\[slug].js",{

/***/ "./src/components/ProductDetail/Elements/ProductDetailInfo.js":
/*!********************************************************************!*\
  !*** ./src/components/ProductDetail/Elements/ProductDetailInfo.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _ProductDetailController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductDetailController */ "./src/components/ProductDetail/Elements/ProductDetailController.js");
/* harmony import */ var _ProductDetailInfoTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductDetailInfoTab */ "./src/components/ProductDetail/Elements/ProductDetailInfoTab.js");
/* harmony import */ var _Other_Rate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Other/Rate */ "./src/components/Other/Rate.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
var _jsxFileName = "E:\\wangn\\Assets\\ecommerce-nextjs\\Eliah-ReactNext\\eliah\\src\\components\\ProductDetail\\Elements\\ProductDetailInfo.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function ProductDetailInfo(_ref) {
  _s();

  var data = _ref.data,
      onReviewSubmit = _ref.onReviewSubmit,
      hideTab = _ref.hideTab;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.wishlistReducer;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      quantity = _useState[0],
      setQuantity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      otherColor = _useState2[0],
      setOtherColor = _useState2[1];

  var getQuantity = function getQuantity(q) {
    setQuantity(q);
  };

  var onAddToCart = function onAddToCart(e) {
    e.preventDefault();
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["addToCart"])(data, quantity, otherColor));
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Product added to cart");
  };

  var onAddToWishList = function onAddToWishList(e) {
    e.preventDefault();
    var product = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_11__["checkProductInWishList"])(wishlistState, data.id);
    dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_7__["addToWishlist"])(data));
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].dismiss();

    if (!product) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Product added to wishlist !");
    } else {
      return react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Product removed from wishlist !");
    }
  };

  return __jsx("div", {
    className: "product-detail__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail__content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, data.category), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, data.name), __jsx("div", {
    className: "product-detail__content__header__comment-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price), data.discount && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price)))), __jsx("div", {
    className: "divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "product-detail__content__footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Codigo de Producto: ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, data.code)), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Availabilidad:", data.quantity > 0 ? __jsx("span", {
    className: "in-stock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, " Disponible") : __jsx("span", {
    className: "out-stock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, " Sin Stock")))), !hideTab && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "product-detail__content__tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(_ProductDetailInfoTab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data,
    onReviewSubmit: onReviewSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }))));
}

_s(ProductDetailInfo, "sX/kO8whT4WbsVoweew5YUV0cVo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = ProductDetailInfo;

var _c;

$RefreshReg$(_c, "ProductDetailInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsL0VsZW1lbnRzL1Byb2R1Y3REZXRhaWxJbmZvLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxJbmZvIiwiZGF0YSIsIm9uUmV2aWV3U3VibWl0IiwiaGlkZVRhYiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ3aXNobGlzdFN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIndpc2hsaXN0UmVkdWNlciIsInVzZVN0YXRlIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsIm90aGVyQ29sb3IiLCJzZXRPdGhlckNvbG9yIiwiZ2V0UXVhbnRpdHkiLCJxIiwib25BZGRUb0NhcnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRUb0NhcnQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJvbkFkZFRvV2lzaExpc3QiLCJwcm9kdWN0IiwiY2hlY2tQcm9kdWN0SW5XaXNoTGlzdCIsImlkIiwiYWRkVG9XaXNobGlzdCIsImRpc21pc3MiLCJlcnJvciIsImNhdGVnb3J5IiwibmFtZSIsImRpc2NvdW50IiwiZm9ybWF0Q3VycmVuY3kiLCJwcmljZSIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsT0FBOEQ7QUFBQTs7QUFBQSxNQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsTUFBM0JDLGNBQTJCLFFBQTNCQSxjQUEyQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUMzRSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLGVBQWpCO0FBQUEsR0FBRCxDQUFqQzs7QUFDQSxrQkFB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aEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixDQUpGLENBREYsQ0FuQkYsRUF5Q0csQ0FBQ1IsT0FBRCxJQUNDLG1FQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBc0IsUUFBSSxFQUFFRixJQUE1QjtBQUFrQyxrQkFBYyxFQUFFQyxjQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQTFDSixDQURGO0FBb0REOztHQTVFdUJGLGlCO1VBQ0xLLHVELEVBQ0tFLHVEOzs7S0FGQVAsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNob3BcXHByb2R1Y3RcXFtzbHVnXS5qcy41MjI1NDkxNDQwZGE4Yjg4NzJhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGFkZFRvV2lzaGxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnNcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxDb250cm9sbGVyIGZyb20gXCIuL1Byb2R1Y3REZXRhaWxDb250cm9sbGVyXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsSW5mb1RhYiBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsSW5mb1RhYlwiO1xyXG5pbXBvcnQgUmF0ZSBmcm9tIFwiLi4vLi4vT3RoZXIvUmF0ZVwiO1xyXG5pbXBvcnQgeyBjaGVja1Byb2R1Y3RJbldpc2hMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxJbmZvKHsgZGF0YSwgb25SZXZpZXdTdWJtaXQsIGhpZGVUYWIgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB3aXNobGlzdFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aXNobGlzdFJlZHVjZXIpO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbb3RoZXJDb2xvciwgc2V0T3RoZXJDb2xvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGdldFF1YW50aXR5ID0gKHEpID0+IHtcclxuICAgIHNldFF1YW50aXR5KHEpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25BZGRUb0NhcnQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGRhdGEsIHF1YW50aXR5LCBvdGhlckNvbG9yKSk7XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0XCIpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25BZGRUb1dpc2hMaXN0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBwcm9kdWN0ID0gY2hlY2tQcm9kdWN0SW5XaXNoTGlzdCh3aXNobGlzdFN0YXRlLCBkYXRhLmlkKTtcclxuICAgIGRpc3BhdGNoKGFkZFRvV2lzaGxpc3QoZGF0YSkpO1xyXG4gICAgdG9hc3QuZGlzbWlzcygpO1xyXG4gICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgIHJldHVybiB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byB3aXNobGlzdCAhXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKFwiUHJvZHVjdCByZW1vdmVkIGZyb20gd2lzaGxpc3QgIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsX19jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxfX2NvbnRlbnRfX2hlYWRlclwiPlxyXG4gICAgICAgIDxoNT57ZGF0YS5jYXRlZ29yeX08L2g1PlxyXG4gICAgICAgIDxoMj57ZGF0YS5uYW1lfTwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbF9fY29udGVudF9faGVhZGVyX19jb21tZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICB7LyogPFJhdGUgY3VycmVudFJhdGU9e2RhdGEucmF0ZX0gLz5cclxuICAgICAgICAgIDxwPjAzIFJldmlld3M8L3A+ICovfVxyXG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxVQ19VUkwgKyBcIiNcIn0+XHJcbiAgICAgICAgICAgIDxhPldyaXRlIGEgcmV2aWV3czwvYT5cclxuICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAge2RhdGEuZGlzY291bnRcclxuICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLmRpc2NvdW50KVxyXG4gICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxyXG4gICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvc3Bhbj59XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsX19jb250ZW50X19mb290ZXJcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIENvZGlnbyBkZSBQcm9kdWN0bzogPHNwYW4+e2RhdGEuY29kZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICBBdmFpbGFiaWxpZGFkOlxyXG4gICAgICAgICAgICB7ZGF0YS5xdWFudGl0eSA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW4tc3RvY2tcIj4gRGlzcG9uaWJsZTwvc3Bhbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXQtc3RvY2tcIj4gU2luIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIHsvKiA8UHJvZHVjdERldGFpbENvbnRyb2xsZXJcclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICBnZXRRdWFudGl0eT17Z2V0UXVhbnRpdHl9XHJcbiAgICAgICAgICBvbkFkZFRvQ2FydD17b25BZGRUb0NhcnR9XHJcbiAgICAgICAgICBvbkFkZFRvV2lzaExpc3Q9e29uQWRkVG9XaXNoTGlzdH1cclxuICAgICAgICAgIGNvbG9yPXtvdGhlckNvbG9yfVxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFoaWRlVGFiICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsX19jb250ZW50X190YWJcIj5cclxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxJbmZvVGFiIGRhdGE9e2RhdGF9IG9uUmV2aWV3U3VibWl0PXtvblJldmlld1N1Ym1pdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9