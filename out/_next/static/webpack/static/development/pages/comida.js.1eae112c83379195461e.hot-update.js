webpackHotUpdate("static\\development\\pages\\comida.js",{

/***/ "./src/common/variables.js":
/*!*********************************!*\
  !*** ./src/common/variables.js ***!
  \*********************************/
/*! exports provided: product, shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shop", function() { return shop; });
/* harmony import */ var _categories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.json */ "./src/common/categories.json");
var _categories_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./categories.json */ "./src/common/categories.json", 1);
var product = {
  DEFAULT_QUANTITY: 1
};

var shop = {
  CATEGORISE: ["Todo"].concat(Object.keys(_categories_json__WEBPACK_IMPORTED_MODULE_0__.options)),
  PRICE_POINTS: [0, 25, 50, 75, 100],
  SORT_TYPES: [{
    name: "Default",
    value: "default"
  }, {
    name: "A a Z",
    value: "az"
  }, {
    name: "Z a A",
    value: "za"
  }, {
    name: "Precio de menor a mayor",
    value: "lowToHigh"
  }, {
    name: "Precio de mayor a menor",
    value: "highToLow"
  }],
  DEFAULT_VIEW: "grid"
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ZhcmlhYmxlcy5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0IiwiREVGQVVMVF9RVUFOVElUWSIsInNob3AiLCJDQVRFR09SSVNFIiwiY29uY2F0IiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJvcHRpb25zIiwiUFJJQ0VfUE9JTlRTIiwiU09SVF9UWVBFUyIsIm5hbWUiLCJ2YWx1ZSIsIkRFRkFVTFRfVklFVyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxPQUFPLEdBQUc7QUFDckJDLGtCQUFnQixFQUFFO0FBREcsQ0FBaEI7QUFHUDtBQUVPLElBQU1DLElBQUksR0FBRztBQUNsQkMsWUFBVSxFQUFFLENBQUMsTUFBRCxFQUFTQyxNQUFULENBQWdCQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsNkNBQUksQ0FBQ0MsT0FBakIsQ0FBaEIsQ0FETTtBQUVsQkMsY0FBWSxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixHQUFoQixDQUZJO0FBR2xCQyxZQUFVLEVBQUUsQ0FDVjtBQUFFQyxRQUFJLEVBQUUsU0FBUjtBQUFtQkMsU0FBSyxFQUFFO0FBQTFCLEdBRFUsRUFFVjtBQUFFRCxRQUFJLEVBQUUsT0FBUjtBQUFpQkMsU0FBSyxFQUFFO0FBQXhCLEdBRlUsRUFHVjtBQUFFRCxRQUFJLEVBQUUsT0FBUjtBQUFpQkMsU0FBSyxFQUFFO0FBQXhCLEdBSFUsRUFJVjtBQUFFRCxRQUFJLEVBQUUseUJBQVI7QUFBbUNDLFNBQUssRUFBRTtBQUExQyxHQUpVLEVBS1Y7QUFBRUQsUUFBSSxFQUFFLHlCQUFSO0FBQW1DQyxTQUFLLEVBQUU7QUFBMUMsR0FMVSxDQUhNO0FBVWxCQyxjQUFZLEVBQUU7QUFWSSxDQUFiIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb21pZGEuanMuMWVhZTExMmM4MzM3OTE5NTQ2MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0ID0ge1xyXG4gIERFRkFVTFRfUVVBTlRJVFk6IDEsXHJcbn07XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vY2F0ZWdvcmllcy5qc29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBzaG9wID0ge1xyXG4gIENBVEVHT1JJU0U6IFtcIlRvZG9cIl0uY29uY2F0KE9iamVjdC5rZXlzKGRhdGEub3B0aW9ucykpLFxyXG4gIFBSSUNFX1BPSU5UUzogWzAsIDI1LCA1MCwgNzUsIDEwMF0sXHJcbiAgU09SVF9UWVBFUzogW1xyXG4gICAgeyBuYW1lOiBcIkRlZmF1bHRcIiwgdmFsdWU6IFwiZGVmYXVsdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQSBhIFpcIiwgdmFsdWU6IFwiYXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlogYSBBXCIsIHZhbHVlOiBcInphXCIgfSxcclxuICAgIHsgbmFtZTogXCJQcmVjaW8gZGUgbWVub3IgYSBtYXlvclwiLCB2YWx1ZTogXCJsb3dUb0hpZ2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlByZWNpbyBkZSBtYXlvciBhIG1lbm9yXCIsIHZhbHVlOiBcImhpZ2hUb0xvd1wiIH0sXHJcbiAgXSxcclxuICBERUZBVUxUX1ZJRVc6IFwiZ3JpZFwiLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9