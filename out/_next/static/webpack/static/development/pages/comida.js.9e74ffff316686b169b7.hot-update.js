webpackHotUpdate("static\\development\\pages\\comida.js",{

/***/ "./src/components/Product/index.js":
/*!*****************************************!*\
  !*** ./src/components/Product/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Other_Rate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Other/Rate */ "./src/components/Other/Rate.js");
/* harmony import */ var _Control_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Control/Button */ "./src/components/Control/Button.js");
/* harmony import */ var _Control_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Control/Modal */ "./src/components/Control/Modal.js");
/* harmony import */ var _ProductDetail_ProductQuickView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ProductDetail/ProductQuickView */ "./src/components/ProductDetail/ProductQuickView.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _Control_AddToCart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Control/AddToCart */ "./src/components/Control/AddToCart.js");
var _jsxFileName = "E:\\wangn\\Assets\\ecommerce-nextjs\\Eliah-ReactNext\\eliah\\src\\components\\Product\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Product(_ref) {
  _s();

  var _this = this;

  var data = _ref.data,
      type = _ref.type,
      className = _ref.className;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.cartReducer;
  });
  var wishlistData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.wishlistReducer;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showQuickView = _useState[0],
      setShowQuickView = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      otherColor = _useState2[0],
      setOtherColor = _useState2[1];

  var percentDiscount = data.discount ? Math.ceil(100 - 100 * data.discount / data.price) : null;

  function renderType() {
    if (data["new"]) {
      return __jsx("h5", {
        className: "-new",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 14
        }
      }, "New");
    }

    if (data.discount && typeof data.discount === "number") {
      return __jsx("h5", {
        className: "-sale",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      }, "-", percentDiscount, "%");
    }

    return null;
  }

  var addToCartHandle = function addToCartHandle(e) {
    e.preventDefault();
    var productItem = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_11__["checkProductInCart"])(cartState, data.id);

    if (!productItem && data.quantity > 0) {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__["addToCart"])(data, 1, otherColor && otherColor.color));
      return react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Product added to cart !");
    }
  };

  var addToWishlistHandle = function addToWishlistHandle(e) {
    e.preventDefault();
    var wishlistItem = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_11__["checkProductInWishList"])(wishlistData, data.id);
    dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_13__["addToWishlist"])(data));
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].dismiss();

    if (!wishlistItem) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Product added to wishlist !");
    } else {
      return react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Product removed from wishlist !");
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !type || type === "grid" ? __jsx("div", {
    className: "product ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, renderType()), __jsx("div", {
    className: "product__thumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat("", "/shop/product/[slug]"),
    as: "".concat("", "/shop/product/").concat(data.code),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "product__thumb__image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, data.thumbImage.map(function (img, index) {
    return __jsx("img", {
      key: index,
      src: "" + img,
      alt: "Product image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    });
  }), otherColor && __jsx("img", {
    src: otherColor.image,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "product__thumb__actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-btn",
    "data-tip": true,
    "data-for": "qvIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx(_Control_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    height: 50 / 14 + "em",
    width: 50 / 14 + "em",
    color: "white",
    className: "product__actions__item -round",
    action: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setShowQuickView(true);
    },
    content: __jsx("i", {
      className: "fas fa-eye",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 28
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  })), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "qvIcon",
    type: "dark",
    effect: "solid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "Quick view")))), __jsx("div", {
    className: "product__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product__content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "product-category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, data.category)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat("", "/shop/product/[slug]"),
    as: "".concat("", "/shop/product/").concat(data.code),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, data.name)), __jsx("div", {
    className: "product__content__footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "product-price--main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_10__["formatCurrency"])(data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_10__["formatCurrency"])(data.price)), data.discount && __jsx("h5", {
    className: "product-price--discount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_10__["formatCurrency"])(data.price))))) : __jsx("div", {
    className: "product-list ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-list__thumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, renderType()), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat("", "/shop/product/[slug]"),
    as: "".concat("", "/shop/product/").concat(data.code),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "product-list__thumb__image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, data.thumbImage.map(function (img, index) {
    return __jsx("img", {
      key: index,
      src: "" + img,
      alt: "Product image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 19
      }
    });
  }), otherColor && __jsx("img", {
    src: otherColor.image,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "product-list__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-list__content__top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-category__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, __jsx("h5", {
    className: "product-category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, data.category), __jsx(_Other_Rate__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentRate: data.rate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat("", "/shop/product/[slug]"),
    as: "".concat("", "/shop/product/").concat(data.code),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, data.name)), __jsx("div", {
    className: "product__price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "product__price__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "product-price--main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_10__["formatCurrency"])(data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_10__["formatCurrency"])(data.price)), data.discount && __jsx("h5", {
    className: "product-price--discount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_10__["formatCurrency"])(data.price))))), __jsx("div", {
    className: "product-list__content__bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "product-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa fugiat accusantium reiciendis rem doloribus iste doloremque"), __jsx("div", {
    className: "product__actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "product-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, __jsx(_Control_AddToCart__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: addToCartHandle,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      "-disable": Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_11__["checkProductInCart"])(cartState, data.id) || data.quantity < 1
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "product-btn",
    "data-tip": true,
    "data-for": "l-qvIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, __jsx(_Control_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    height: 50 / 14 + "em",
    width: 50 / 14 + "em",
    color: "white",
    className: "product__actions__item -round",
    action: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setShowQuickView(true);
    },
    content: __jsx("i", {
      className: "fas fa-eye",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 30
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  })), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "l-qvIcon",
    type: "dark",
    effect: "solid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  }, "Quick view")), __jsx("div", {
    className: "product-btn",
    "data-tip": true,
    "data-for": "l-wlIcon",
    style: {
      marginRight: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx(_Control_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    height: 50 / 14 + "em",
    width: 50 / 14 + "em",
    color: "white",
    className: "product__actions__item -round ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      active: Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_11__["checkProductInWishList"])(wishlistData, data.id)
    })),
    action: "#",
    onClick: addToWishlistHandle,
    content: __jsx("i", {
      className: "fas fa-heart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 30
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 19
    }
  })), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "l-wlIcon",
    type: "dark",
    effect: "solid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 19
    }
  }, "Add to Wishlist")))))), __jsx(_Control_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    showModal: showQuickView,
    setShowModal: setShowQuickView,
    width: 1170,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, __jsx(_ProductDetail_ProductQuickView__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  })));
}

_s(Product, "1cl8Oht8ssBaiV5FB+peNNMwS/E=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJkYXRhIiwidHlwZSIsImNsYXNzTmFtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydFJlZHVjZXIiLCJ3aXNobGlzdERhdGEiLCJ3aXNobGlzdFJlZHVjZXIiLCJ1c2VTdGF0ZSIsInNob3dRdWlja1ZpZXciLCJzZXRTaG93UXVpY2tWaWV3Iiwib3RoZXJDb2xvciIsInNldE90aGVyQ29sb3IiLCJwZXJjZW50RGlzY291bnQiLCJkaXNjb3VudCIsIk1hdGgiLCJjZWlsIiwicHJpY2UiLCJyZW5kZXJUeXBlIiwiYWRkVG9DYXJ0SGFuZGxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdEl0ZW0iLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJpZCIsInF1YW50aXR5IiwiYWRkVG9DYXJ0IiwiY29sb3IiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhZGRUb1dpc2hsaXN0SGFuZGxlIiwid2lzaGxpc3RJdGVtIiwiY2hlY2tQcm9kdWN0SW5XaXNoTGlzdCIsImFkZFRvV2lzaGxpc3QiLCJkaXNtaXNzIiwiZXJyb3IiLCJjbGFzc05hbWVzIiwicHJvY2VzcyIsImNvZGUiLCJ0aHVtYkltYWdlIiwibWFwIiwiaW1nIiwiaW5kZXgiLCJpbWFnZSIsImNhdGVnb3J5IiwibmFtZSIsImZvcm1hdEN1cnJlbmN5IiwicmF0ZSIsIm1hcmdpblJpZ2h0IiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsT0FBVCxPQUE0QztBQUFBOztBQUFBOztBQUFBLE1BQXpCQyxJQUF5QixRQUF6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QUFRRSxXQUFPLEVBQUVNLG1CQVJYO0FBU0UsV0FBTyxFQUFFO0FBQUcsZUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQTVCRixFQThDRSxNQUFDLHFEQUFEO0FBQWMsTUFBRSxFQUFDLFVBQWpCO0FBQTRCLFFBQUksRUFBQyxNQUFqQztBQUF3QyxVQUFNLEVBQUMsT0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0E5Q0YsQ0FMRixDQTNCRixDQXJCRixDQXhHSixFQW1ORSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxFQUFFckIsYUFEYjtBQUVFLGdCQUFZLEVBQUVDLGdCQUZoQjtBQUdFLFNBQUssRUFBRSxJQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHVFQUFEO0FBQWtCLFFBQUksRUFBRWIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBbk5GLENBREY7QUE2TkQ7O0dBblFRRCxPO1VBQ1VLLHVELEVBQ0NFLHVELEVBQ0dBLHVEOzs7S0FIZFAsTztBQXFRTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbWlkYS5qcy45ZTc0ZmZmZjMxNjY4NmIxNjliNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IFJhdGUgZnJvbSBcIi4uL090aGVyL1JhdGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQ29udHJvbC9CdXR0b25cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9Db250cm9sL01vZGFsXCI7XHJcbmltcG9ydCBQcm9kdWN0UXVpY2tWaWV3IGZyb20gXCIuLi9Qcm9kdWN0RGV0YWlsL1Byb2R1Y3RRdWlja1ZpZXdcIjtcclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7XHJcbiAgY2hlY2tQcm9kdWN0SW5XaXNoTGlzdCxcclxuICBjaGVja1Byb2R1Y3RJbkNhcnQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBhZGRUb1dpc2hsaXN0LFxyXG4gIHJlbW92ZUZyb21XaXNobGlzdCxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnNcIjtcclxuaW1wb3J0IEFkZFRvQ2FydCBmcm9tIFwiLi4vQ29udHJvbC9BZGRUb0NhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBkYXRhLCB0eXBlLCBjbGFzc05hbWUgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICBjb25zdCB3aXNobGlzdERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndpc2hsaXN0UmVkdWNlcik7XHJcbiAgY29uc3QgW3Nob3dRdWlja1ZpZXcsIHNldFNob3dRdWlja1ZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvdGhlckNvbG9yLCBzZXRPdGhlckNvbG9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgcGVyY2VudERpc2NvdW50ID0gZGF0YS5kaXNjb3VudFxyXG4gICAgPyBNYXRoLmNlaWwoMTAwIC0gKDEwMCAqIGRhdGEuZGlzY291bnQpIC8gZGF0YS5wcmljZSlcclxuICAgIDogbnVsbDtcclxuICBmdW5jdGlvbiByZW5kZXJUeXBlKCkge1xyXG4gICAgaWYgKGRhdGEubmV3KSB7XHJcbiAgICAgIHJldHVybiA8aDUgY2xhc3NOYW1lPVwiLW5ld1wiPk5ldzwvaDU+O1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuZGlzY291bnQgJiYgdHlwZW9mIGRhdGEuZGlzY291bnQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgcmV0dXJuIDxoNSBjbGFzc05hbWU9XCItc2FsZVwiPi17cGVyY2VudERpc2NvdW50fSU8L2g1PjtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBjb25zdCBhZGRUb0NhcnRIYW5kbGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2R1Y3RJdGVtID0gY2hlY2tQcm9kdWN0SW5DYXJ0KGNhcnRTdGF0ZSwgZGF0YS5pZCk7XHJcbiAgICBpZiAoIXByb2R1Y3RJdGVtICYmIGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgIGRpc3BhdGNoKGFkZFRvQ2FydChkYXRhLCAxLCBvdGhlckNvbG9yICYmIG90aGVyQ29sb3IuY29sb3IpKTtcclxuICAgICAgcmV0dXJuIHRvYXN0LnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnQgIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFkZFRvV2lzaGxpc3RIYW5kbGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgd2lzaGxpc3RJdGVtID0gY2hlY2tQcm9kdWN0SW5XaXNoTGlzdCh3aXNobGlzdERhdGEsIGRhdGEuaWQpO1xyXG4gICAgZGlzcGF0Y2goYWRkVG9XaXNobGlzdChkYXRhKSk7XHJcbiAgICB0b2FzdC5kaXNtaXNzKCk7XHJcbiAgICBpZiAoIXdpc2hsaXN0SXRlbSkge1xyXG4gICAgICByZXR1cm4gdG9hc3Quc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gd2lzaGxpc3QgIVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0b2FzdC5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIHdpc2hsaXN0ICFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshdHlwZSB8fCB0eXBlID09PSBcImdyaWRcIiA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZVwiPntyZW5kZXJUeXBlKCl9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3RodW1iXCI+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vc2hvcC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgICAgYXM9e2Ake3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3Nob3AvcHJvZHVjdC8ke2RhdGEuY29kZX1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdF9fdGh1bWJfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS50aHVtYkltYWdlLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZHVjdCBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtvdGhlckNvbG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e290aGVyQ29sb3IuaW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X190aHVtYl9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCIgZGF0YS10aXAgZGF0YS1mb3I9XCJjYXJ0SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3RfX2FjdGlvbnNfX2l0ZW0gLXJvdW5kICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUgLWRpc2FibGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrUHJvZHVjdEluQ2FydChjYXJ0U3RhdGUsIGRhdGEuaWQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLnF1YW50aXR5IDwgMSxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRUb0NhcnRIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1iYWdcIiAvPn1cclxuICAgICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UmVhY3RUb29sdGlwIGlkPVwiY2FydEljb25cIiB0eXBlPVwiZGFya1wiIGVmZmVjdD1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgdG8gQ2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1JlYWN0VG9vbHRpcD4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJ0blwiIGRhdGEtdGlwIGRhdGEtZm9yPVwicXZJY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAgLyAxNCArIFwiZW1cIn1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwIC8gMTQgKyBcImVtXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0X19hY3Rpb25zX19pdGVtIC1yb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93UXVpY2tWaWV3KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXs8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXllXCIgLz59XHJcbiAgICAgICAgICAgICAgICA+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFJlYWN0VG9vbHRpcCBpZD1cInF2SWNvblwiIHR5cGU9XCJkYXJrXCIgZWZmZWN0PVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlF1aWNrIHZpZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1idG5cIiBkYXRhLXRpcCBkYXRhLWZvcj1cIndsSWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwIC8gMTQgKyBcImVtXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MCAvIDE0ICsgXCJlbVwifVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdF9fYWN0aW9uc19faXRlbSAtcm91bmQgJHtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGNoZWNrUHJvZHVjdEluV2lzaExpc3Qod2lzaGxpc3REYXRhLCBkYXRhLmlkKSxcclxuICAgICAgICAgICAgICAgICAgfSl9YH1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFRvV2lzaGxpc3RIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxpIGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxSZWFjdFRvb2x0aXAgaWQ9XCJ3bEljb25cIiB0eXBlPVwiZGFya1wiIGVmZmVjdD1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgdG8gV2lzaGxpc3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdFRvb2x0aXA+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fY29udGVudF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtY2F0ZWdvcnlcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxyXG4gICAgICAgICAgICAgIHsvKiA8UmF0ZSBjdXJyZW50UmF0ZT17ZGF0YS5yYXRlfSAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vc2hvcC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgICAgYXM9e2Ake3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3Nob3AvcHJvZHVjdC8ke2RhdGEuY29kZX1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e2RhdGEubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19jb250ZW50X19mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZS0tbWFpblwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcclxuICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLmRpc2NvdW50KVxyXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2UtLWRpc2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC1saXN0ICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RfX3RodW1iXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e3JlbmRlclR5cGUoKX08L2Rpdj5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zaG9wL3Byb2R1Y3QvW3NsdWddYH1cclxuICAgICAgICAgICAgICBhcz17YCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vc2hvcC9wcm9kdWN0LyR7ZGF0YS5jb2RlfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RfX3RodW1iX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEudGh1bWJJbWFnZS5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7b3RoZXJDb2xvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtvdGhlckNvbG9yLmltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0X19jb250ZW50X190b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2F0ZWdvcnlfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdGVnb3J5XCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxSYXRlIGN1cnJlbnRSYXRlPXtkYXRhLnJhdGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3Nob3AvcHJvZHVjdC9bc2x1Z11gfVxyXG4gICAgICAgICAgICAgICAgYXM9e2Ake3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3Nob3AvcHJvZHVjdC8ke2RhdGEuY29kZX1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPntkYXRhLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3ByaWNlX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlLS1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5kaXNjb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZS0tZGlzY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdF9fY29udGVudF9fYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWFxdWVcclxuICAgICAgICAgICAgICAgIGlwc2EgZnVnaWF0IGFjY3VzYW50aXVtIHJlaWNpZW5kaXMgcmVtIGRvbG9yaWJ1cyBpc3RlIGRvbG9yZW1xdWVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBZGRUb0NhcnRcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRUb0NhcnRIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiLWRpc2FibGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tQcm9kdWN0SW5DYXJ0KGNhcnRTdGF0ZSwgZGF0YS5pZCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5xdWFudGl0eSA8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1idG5cIiBkYXRhLXRpcCBkYXRhLWZvcj1cImwtcXZJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwIC8gMTQgKyBcImVtXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwIC8gMTQgKyBcImVtXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdF9fYWN0aW9uc19faXRlbSAtcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UXVpY2tWaWV3KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV5ZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdFRvb2x0aXAgaWQ9XCJsLXF2SWNvblwiIHR5cGU9XCJkYXJrXCIgZWZmZWN0PVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+UXVpY2sgdmlldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3RUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGlwXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9yPVwibC13bEljb25cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MCAvIDE0ICsgXCJlbVwifVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MCAvIDE0ICsgXCJlbVwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3RfX2FjdGlvbnNfX2l0ZW0gLXJvdW5kICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGNoZWNrUHJvZHVjdEluV2lzaExpc3Qod2lzaGxpc3REYXRhLCBkYXRhLmlkKSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFRvV2lzaGxpc3RIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0XCIgLz59XHJcbiAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0VG9vbHRpcCBpZD1cImwtd2xJY29uXCIgdHlwZT1cImRhcmtcIiBlZmZlY3Q9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgdG8gV2lzaGxpc3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0VG9vbHRpcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2hvd01vZGFsPXtzaG93UXVpY2tWaWV3fVxyXG4gICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd1F1aWNrVmlld31cclxuICAgICAgICB3aWR0aD17MTE3MH1cclxuICAgICAgPlxyXG4gICAgICAgIDxQcm9kdWN0UXVpY2tWaWV3IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9