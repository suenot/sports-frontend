"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.mjs\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deep_foundation_store_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deep-foundation/store/query */ \"./node_modules/@deep-foundation/store/query.js\");\n/* harmony import */ var _deep_foundation_store_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deep_foundation_store_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deep_foundation_store_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deep-foundation/store/cookies */ \"./node_modules/@deep-foundation/store/cookies.js\");\n/* harmony import */ var _deep_foundation_store_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deep_foundation_store_cookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _deep_foundation_store_local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deep-foundation/store/local */ \"./node_modules/@deep-foundation/store/local.js\");\n/* harmony import */ var _deep_foundation_store_local__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deep_foundation_store_local__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme */ \"./src/theme.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ColorModeToggle = ()=>{\n    _s();\n    const [colorMode, setColorMode] = (0,_deep_foundation_store_query__WEBPACK_IMPORTED_MODULE_3__.useQueryStore)(\"theme\", \"light\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.IconButton, {\n        \"aria-label\": \"Toggle color mode\",\n        icon: colorMode === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.MoonIcon, {}, void 0, false, {\n            fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n            lineNumber: 24,\n            columnNumber: 37\n        }, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.SunIcon, {}, void 0, false, {\n            fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n            lineNumber: 24,\n            columnNumber: 52\n        }, void 0),\n        onClick: ()=>setColorMode(colorMode === \"light\" ? \"dark\" : \"light\"),\n        size: \"sm\",\n        bg: colorMode === \"dark\" ? \"gray.700\" : \"white\",\n        color: colorMode === \"dark\" ? \"white\" : \"gray.800\"\n    }, void 0, false, {\n        fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ColorModeToggle, \"UNAxtPV3J/p7J9r/sKDkfAAUyV0=\", false, function() {\n    return [\n        _deep_foundation_store_query__WEBPACK_IMPORTED_MODULE_3__.useQueryStore\n    ];\n});\n_c = ColorModeToggle;\nconst LanguageSwitcher = ()=>{\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { i18n } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();\n    const switchLanguage = (locale)=>{\n        router.push(router.pathname, router.asPath, {\n            locale\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n        spacing: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                size: \"sm\",\n                colorScheme: i18n.language === \"ru\" ? \"blue\" : \"gray\",\n                onClick: ()=>switchLanguage(\"ru\"),\n                children: \"RU\"\n            }, void 0, false, {\n                fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                size: \"sm\",\n                colorScheme: i18n.language === \"en\" ? \"blue\" : \"gray\",\n                onClick: ()=>switchLanguage(\"en\"),\n                children: \"EN\"\n            }, void 0, false, {\n                fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(LanguageSwitcher, \"i/NqFT9VI9e96Zohmo1lkO3rehI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c1 = LanguageSwitcher;\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s2();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isApp = router.pathname.startsWith(\"/app\");\n    const [colorMode] = (0,_deep_foundation_store_query__WEBPACK_IMPORTED_MODULE_3__.useQueryStore)(\"theme\", \"light\");\n    // Создаем стили для темной/светлой темы\n    const styles = {\n        light: {\n            bg: \"white\",\n            color: \"gray.800\"\n        },\n        dark: {\n            bg: \"gray.800\",\n            color: \"white\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deep_foundation_store_query__WEBPACK_IMPORTED_MODULE_3__.QueryStoreProvider, {\n        useRouter: next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deep_foundation_store_cookies__WEBPACK_IMPORTED_MODULE_4__.CookiesStoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deep_foundation_store_local__WEBPACK_IMPORTED_MODULE_5__.LocalStoreProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ChakraProvider, {\n                    theme: _theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        position: \"relative\",\n                        minH: \"100vh\",\n                        ...styles[colorMode],\n                        children: [\n                            isApp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                                position: \"fixed\",\n                                top: 4,\n                                right: 4,\n                                zIndex: 1000,\n                                gap: 4,\n                                p: 2,\n                                borderRadius: \"md\",\n                                boxShadow: \"sm\",\n                                bg: colorMode === \"dark\" ? \"gray.700\" : \"white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeToggle, {}, void 0, false, {\n                                        fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageSwitcher, {}, void 0, false, {\n                                        fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/suenot/work_dev_2/sport/frontend/src/pages/_app.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s2(App, \"BlSKcClTr6xhorzD6b1R/+/+sFA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _deep_foundation_store_query__WEBPACK_IMPORTED_MODULE_3__.useQueryStore\n    ];\n});\n_c2 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c3 = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(App));\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ColorModeToggle\");\n$RefreshReg$(_c1, \"LanguageSwitcher\");\n$RefreshReg$(_c2, \"App\");\n$RefreshReg$(_c3, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXG4gIENoYWtyYVByb3ZpZGVyLCBcbiAgQm94LCBcbiAgQnV0dG9uLCBcbiAgSFN0YWNrLFxuICBJY29uQnV0dG9uLFxuICBGbGV4XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24sIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFF1ZXJ5U3RvcmVQcm92aWRlciwgdXNlUXVlcnlTdG9yZSB9IGZyb20gJ0BkZWVwLWZvdW5kYXRpb24vc3RvcmUvcXVlcnknO1xuaW1wb3J0IHsgQ29va2llc1N0b3JlUHJvdmlkZXIgfSBmcm9tICdAZGVlcC1mb3VuZGF0aW9uL3N0b3JlL2Nvb2tpZXMnO1xuaW1wb3J0IHsgTG9jYWxTdG9yZVByb3ZpZGVyIH0gZnJvbSAnQGRlZXAtZm91bmRhdGlvbi9zdG9yZS9sb2NhbCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWUnO1xuXG5jb25zdCBDb2xvck1vZGVUb2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb2xvck1vZGUsIHNldENvbG9yTW9kZV0gPSB1c2VRdWVyeVN0b3JlPCdsaWdodCcgfCAnZGFyayc+KCd0aGVtZScsICdsaWdodCcpO1xuXG4gIHJldHVybiAoXG4gICAgPEljb25CdXR0b25cbiAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgY29sb3IgbW9kZVwiXG4gICAgICBpY29uPXtjb2xvck1vZGUgPT09ICdsaWdodCcgPyA8TW9vbkljb24gLz4gOiA8U3VuSWNvbiAvPn1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbG9yTW9kZShjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKX1cbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBiZz17Y29sb3JNb2RlID09PSAnZGFyaycgPyAnZ3JheS43MDAnIDogJ3doaXRlJ31cbiAgICAgIGNvbG9yPXtjb2xvck1vZGUgPT09ICdkYXJrJyA/ICd3aGl0ZScgOiAnZ3JheS44MDAnfVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBMYW5ndWFnZVN3aXRjaGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IHN3aXRjaExhbmd1YWdlID0gKGxvY2FsZTogc3RyaW5nKSA9PiB7XG4gICAgcm91dGVyLnB1c2gocm91dGVyLnBhdGhuYW1lLCByb3V0ZXIuYXNQYXRoLCB7IGxvY2FsZSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxIU3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIGNvbG9yU2NoZW1lPXtpMThuLmxhbmd1YWdlID09PSAncnUnID8gJ2JsdWUnIDogJ2dyYXknfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hMYW5ndWFnZSgncnUnKX1cbiAgICAgID5cbiAgICAgICAgUlVcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICBjb2xvclNjaGVtZT17aTE4bi5sYW5ndWFnZSA9PT0gJ2VuJyA/ICdibHVlJyA6ICdncmF5J31cbiAgICAgICAgb25DbGljaz17KCkgPT4gc3dpdGNoTGFuZ3VhZ2UoJ2VuJyl9XG4gICAgICA+XG4gICAgICAgIEVOXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0hTdGFjaz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0FwcCA9IHJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKCcvYXBwJyk7XG4gIGNvbnN0IFtjb2xvck1vZGVdID0gdXNlUXVlcnlTdG9yZTwnbGlnaHQnIHwgJ2RhcmsnPigndGhlbWUnLCAnbGlnaHQnKTtcblxuICAvLyDQodC+0LfQtNCw0LXQvCDRgdGC0LjQu9C4INC00LvRjyDRgtC10LzQvdC+0Lkv0YHQstC10YLQu9C+0Lkg0YLQtdC80YtcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICBiZzogJ3doaXRlJyxcbiAgICAgIGNvbG9yOiAnZ3JheS44MDAnXG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICBiZzogJ2dyYXkuODAwJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5U3RvcmVQcm92aWRlciB1c2VSb3V0ZXI9e3VzZVJvdXRlcn0+XG4gICAgICA8Q29va2llc1N0b3JlUHJvdmlkZXI+XG4gICAgICAgIDxMb2NhbFN0b3JlUHJvdmlkZXI+XG4gICAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCIgXG4gICAgICAgICAgICAgIG1pbkg9XCIxMDB2aFwiXG4gICAgICAgICAgICAgIHsuLi5zdHlsZXNbY29sb3JNb2RlXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzQXBwICYmIChcbiAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIiBcbiAgICAgICAgICAgICAgICAgIHRvcD17NH0gXG4gICAgICAgICAgICAgICAgICByaWdodD17NH0gXG4gICAgICAgICAgICAgICAgICB6SW5kZXg9ezEwMDB9XG4gICAgICAgICAgICAgICAgICBnYXA9ezR9XG4gICAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93PVwic21cIlxuICAgICAgICAgICAgICAgICAgYmc9e2NvbG9yTW9kZSA9PT0gJ2RhcmsnID8gJ2dyYXkuNzAwJyA6ICd3aGl0ZSd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvbG9yTW9kZVRvZ2dsZSAvPlxuICAgICAgICAgICAgICAgICAgPExhbmd1YWdlU3dpdGNoZXIgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDwvTG9jYWxTdG9yZVByb3ZpZGVyPlxuICAgICAgPC9Db29raWVzU3RvcmVQcm92aWRlcj5cbiAgICA8L1F1ZXJ5U3RvcmVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKEFwcCk7XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJCb3giLCJCdXR0b24iLCJIU3RhY2siLCJJY29uQnV0dG9uIiwiRmxleCIsIlN1bkljb24iLCJNb29uSWNvbiIsImFwcFdpdGhUcmFuc2xhdGlvbiIsInVzZVRyYW5zbGF0aW9uIiwidXNlUm91dGVyIiwiUXVlcnlTdG9yZVByb3ZpZGVyIiwidXNlUXVlcnlTdG9yZSIsIkNvb2tpZXNTdG9yZVByb3ZpZGVyIiwiTG9jYWxTdG9yZVByb3ZpZGVyIiwidGhlbWUiLCJDb2xvck1vZGVUb2dnbGUiLCJjb2xvck1vZGUiLCJzZXRDb2xvck1vZGUiLCJhcmlhLWxhYmVsIiwiaWNvbiIsIm9uQ2xpY2siLCJzaXplIiwiYmciLCJjb2xvciIsIkxhbmd1YWdlU3dpdGNoZXIiLCJyb3V0ZXIiLCJpMThuIiwic3dpdGNoTGFuZ3VhZ2UiLCJsb2NhbGUiLCJwdXNoIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJzcGFjaW5nIiwiY29sb3JTY2hlbWUiLCJsYW5ndWFnZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzQXBwIiwic3RhcnRzV2l0aCIsInN0eWxlcyIsImxpZ2h0IiwiZGFyayIsInBvc2l0aW9uIiwibWluSCIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiZ2FwIiwicCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});