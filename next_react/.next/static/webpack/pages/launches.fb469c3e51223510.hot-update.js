"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/launches",{

/***/ "./pages/launches.jsx":
/*!****************************!*\
  !*** ./pages/launches.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_bancow_khy_fast_react_prac_next_react_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bancow_khy_fast_react_prac_next_react_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bancow_khy_fast_react_prac_next_react_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Launches = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), data1 = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchLaunches = function() {\n            var _ref = _asyncToGenerator(_Users_bancow_khy_fast_react_prac_next_react_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, data;\n                return _Users_bancow_khy_fast_react_prac_next_react_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"https://api.spacexdata.com/v3/launches\");\n                        case 2:\n                            res = _ctx.sent;\n                            _ctx.next = 5;\n                            return res.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setData(data);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchLaunches() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchLaunches();\n    }, []);\n    if (data1 == null) {\n        return null;\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: data1.map(function(launch, index) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: launch.mission_name\n                }, index, false, {\n                    fileName: \"/Users/bancow-khy/fast_react_prac/next_react/pages/launches.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/bancow-khy/fast_react_prac/next_react/pages/launches.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bancow-khy/fast_react_prac/next_react/pages/launches.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this));\n};\n_s(Launches, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Launches;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Launches);\nvar _c;\n$RefreshReg$(_c, \"Launches\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXVuY2hlcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsR0FBSyxDQUFDRyxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQzs7O0lBQ3BCLEdBQUssQ0FBbUJELEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlCRSxLQUFJLEdBQWFGLEdBQWMsS0FBekJHLE9BQU8sR0FBSUgsR0FBYztJQUV0Q0QsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYixHQUFLLENBQUNLLGFBQWE7aU1BQUcsUUFBUSxXQUFJLENBQUM7b0JBQ3pCQyxHQUFHLEVBQ0hILElBQUk7Ozs7O21DQURRSSxLQUFLLENBQUMsQ0FBd0M7OzRCQUExREQsR0FBRzs7bUNBQ1VBLEdBQUcsQ0FBQ0UsSUFBSTs7NEJBQXJCTCxJQUFJOzRCQUVWQyxPQUFPLENBQUNELElBQUk7Ozs7OztZQUNoQixDQUFDOzRCQUxLRSxhQUFhOzs7O1FBTW5CQSxhQUFhO0lBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxFQUFFLEVBQUNGLEtBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxJQUFJO0lBQ2YsQ0FBQztJQUNELE1BQU0sNkVBQ0RNLENBQUc7OEZBQ0NDLENBQUU7c0JBQ0VQLEtBQUksQ0FBQ1EsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFFQyxLQUFLOzhCQUNwQixNQUFNLCtEQUFMQyxDQUFFOzhCQUFjRixNQUFNLENBQUNHLFlBQVk7bUJBQTNCRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUM7R0F6QktYLFFBQVE7S0FBUkEsUUFBUTtBQTJCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xhdW5jaGVzLmpzeD8xNzg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMYXVuY2hlcyA9ICgpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoTGF1bmNoZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzXCIpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoTGF1bmNoZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBpZihkYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChsYXVuY2gsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57bGF1bmNoLm1pc3Npb25fbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhdW5jaGVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF1bmNoZXMiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoTGF1bmNoZXMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJ1bCIsIm1hcCIsImxhdW5jaCIsImluZGV4IiwibGkiLCJtaXNzaW9uX25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/launches.jsx\n");

/***/ })

});