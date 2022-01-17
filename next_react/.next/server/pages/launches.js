"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/launches";
exports.ids = ["pages/launches"];
exports.modules = {

/***/ "./pages/launches.jsx":
/*!****************************!*\
  !*** ./pages/launches.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Launches = ({ data  })=>{\n    // const [data, setData] = useState(null);\n    // useEffect(() => {\n    //     const fetchLaunches = async () => {\n    //         const res = await fetch(\"https://api.spacexdata.com/v3/launches\");\n    //         const data = await res.json();\n    //         setData(data);\n    //     };\n    //     fetchLaunches();\n    // }, []);\n    if (data == null) {\n        return null;\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: data.map((launch, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: launch.mission_name\n                }, index, false, {\n                    fileName: \"/Users/bancow-khy/fast_react_prac/next_react/pages/launches.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, undefined)\n            )\n        }, void 0, false, {\n            fileName: \"/Users/bancow-khy/fast_react_prac/next_react/pages/launches.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bancow-khy/fast_react_prac/next_react/pages/launches.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Launches);\nasync function getStaticProps(context) {\n    const res = await fetch(\"https://api.spacexdata.com/v3/launches\");\n    const data = await res.json();\n    console.log(\"getStaticProps\");\n    return {\n        props: {\n            data\n        }\n    };\n} // export async function getServerSideProps(context) {\n //     const res = await fetch(\"https://api.spacexdata.com/v3/launches\");\n //     const data = await res.json();\n //     return {\n //         props: {data} \n //     };\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXVuY2hlcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUVsRCxLQUFLLENBQUNHLFFBQVEsSUFBSSxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM1QixFQUEwQztJQUUxQyxFQUFvQjtJQUNwQixFQUEwQztJQUMxQyxFQUE2RTtJQUM3RSxFQUF5QztJQUV6QyxFQUF5QjtJQUN6QixFQUFTO0lBQ1QsRUFBdUI7SUFDdkIsRUFBVTtJQUVWLEVBQUUsRUFBQ0EsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLElBQUk7SUFDZixDQUFDO0lBQ0QsTUFBTSw2RUFDREMsQ0FBRzs4RkFDQ0MsQ0FBRTtzQkFDRUYsSUFBSSxDQUFDRyxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsS0FBSywrRUFDbkJDLENBQUU7OEJBQWNGLE1BQU0sQ0FBQ0csWUFBWTttQkFBM0JGLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQztBQUVELGlFQUFlTixRQUFRLEVBQUM7QUFFakIsZUFBZVMsY0FBYyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUMzQyxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUF3QztJQUNoRSxLQUFLLENBQUNYLElBQUksR0FBRyxLQUFLLENBQUNVLEdBQUcsQ0FBQ0UsSUFBSTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0I7SUFDNUIsTUFBTSxDQUFDLENBQUM7UUFDSkMsS0FBSyxFQUFFLENBQUNmO1lBQUFBLElBQUk7UUFBQSxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBR21EO0FBQ3RELENBQXlFO0FBQ3pFLENBQXFDO0FBQ3JDLENBQWU7QUFDZixDQUF5QjtBQUN6QixDQUFTO0FBQ1QsQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfcmVhY3QvLi9wYWdlcy9sYXVuY2hlcy5qc3g/MTc4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTGF1bmNoZXMgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGZldGNoTGF1bmNoZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzXCIpO1xuICAgIC8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAvLyAgICAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgLy8gICAgIH07XG4gICAgLy8gICAgIGZldGNoTGF1bmNoZXMoKTtcbiAgICAvLyB9LCBbXSk7XG5cbiAgICBpZihkYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChsYXVuY2gsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57bGF1bmNoLm1pc3Npb25fbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhdW5jaGVzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXNcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJnZXRTdGF0aWNQcm9wc1wiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge2RhdGF9IFxuICAgIH07XG4gIH1cbiAgXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXNcIik7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvcHM6IHtkYXRhfSBcbi8vICAgICB9O1xuLy8gfVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXVuY2hlcyIsImRhdGEiLCJkaXYiLCJ1bCIsIm1hcCIsImxhdW5jaCIsImluZGV4IiwibGkiLCJtaXNzaW9uX25hbWUiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/launches.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/launches.jsx"));
module.exports = __webpack_exports__;

})();