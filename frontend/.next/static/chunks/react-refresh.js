/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js ***!
  \********************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\n/**\n * MIT License\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// This file is copied from the Metro JavaScript bundler, with minor tweaks for\n// webpack 4 compatibility.\n//\n// https://github.com/facebook/metro/blob/d6b9685c730d0d63577db40f41369157f28dfa3a/packages/metro/src/lib/polyfills/require.js\nconst runtime_1 = __importDefault(__webpack_require__(/*! next/dist/compiled/react-refresh/runtime */ \"./node_modules/next/dist/compiled/react-refresh/runtime.js\"));\nfunction isSafeExport(key) {\n    return (key === '__esModule' ||\n        key === '__N_SSG' ||\n        key === '__N_SSP' ||\n        // TODO: remove this key from page config instead of allow listing it\n        key === 'config');\n}\nfunction registerExportsForReactRefresh(moduleExports, moduleID) {\n    runtime_1.default.register(moduleExports, moduleID + ' %exports%');\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        // (This is important for legacy environments.)\n        return;\n    }\n    for (var key in moduleExports) {\n        if (isSafeExport(key)) {\n            continue;\n        }\n        try {\n            var exportValue = moduleExports[key];\n        }\n        catch (_a) {\n            // This might fail due to circular dependencies\n            continue;\n        }\n        var typeID = moduleID + ' %exports% ' + key;\n        runtime_1.default.register(exportValue, typeID);\n    }\n}\nfunction getRefreshBoundarySignature(moduleExports) {\n    var signature = [];\n    signature.push(runtime_1.default.getFamilyByType(moduleExports));\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        // (This is important for legacy environments.)\n        return signature;\n    }\n    for (var key in moduleExports) {\n        if (isSafeExport(key)) {\n            continue;\n        }\n        try {\n            var exportValue = moduleExports[key];\n        }\n        catch (_a) {\n            // This might fail due to circular dependencies\n            continue;\n        }\n        signature.push(key);\n        signature.push(runtime_1.default.getFamilyByType(exportValue));\n    }\n    return signature;\n}\nfunction isReactRefreshBoundary(moduleExports) {\n    if (runtime_1.default.isLikelyComponentType(moduleExports)) {\n        return true;\n    }\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        return false;\n    }\n    var hasExports = false;\n    var areAllExportsComponents = true;\n    for (var key in moduleExports) {\n        hasExports = true;\n        if (isSafeExport(key)) {\n            continue;\n        }\n        try {\n            var exportValue = moduleExports[key];\n        }\n        catch (_a) {\n            // This might fail due to circular dependencies\n            return false;\n        }\n        if (!runtime_1.default.isLikelyComponentType(exportValue)) {\n            areAllExportsComponents = false;\n        }\n    }\n    return hasExports && areAllExportsComponents;\n}\nfunction shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {\n    if (prevSignature.length !== nextSignature.length) {\n        return true;\n    }\n    for (var i = 0; i < nextSignature.length; i++) {\n        if (prevSignature[i] !== nextSignature[i]) {\n            return true;\n        }\n    }\n    return false;\n}\nvar isUpdateScheduled = false;\n// This function aggregates updates from multiple modules into a single React Refresh call.\nfunction scheduleUpdate() {\n    if (isUpdateScheduled) {\n        return;\n    }\n    isUpdateScheduled = true;\n    function canApplyUpdate(status) {\n        return status === 'idle';\n    }\n    function applyUpdate() {\n        isUpdateScheduled = false;\n        try {\n            runtime_1.default.performReactRefresh();\n        }\n        catch (err) {\n            console.warn('Warning: Failed to re-render. We will retry on the next Fast Refresh event.\\n' +\n                err);\n        }\n    }\n    if (canApplyUpdate(module.hot.status())) {\n        // Apply update on the next tick.\n        Promise.resolve().then(() => {\n            applyUpdate();\n        });\n        return;\n    }\n    const statusHandler = (status) => {\n        if (canApplyUpdate(status)) {\n            module.hot.removeStatusHandler(statusHandler);\n            applyUpdate();\n        }\n    };\n    // Apply update once the HMR runtime's status is idle.\n    module.hot.addStatusHandler(statusHandler);\n}\n// Needs to be compatible with IE11\nexports[\"default\"] = {\n    registerExportsForReactRefresh: registerExportsForReactRefresh,\n    isReactRefreshBoundary: isReactRefreshBoundary,\n    shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,\n    getRefreshBoundarySignature: getRefreshBoundarySignature,\n    scheduleUpdate: scheduleUpdate,\n};\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvZGlzdC9pbnRlcm5hbC9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNEdBQTBDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxVQUFVO0FBQ2Q7QUFDQTtBQUNBLGtCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9AbmV4dC9yZWFjdC1yZWZyZXNoLXV0aWxzL2Rpc3QvaW50ZXJuYWwvaGVscGVycy5qcz80MDNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIFRoaXMgZmlsZSBpcyBjb3BpZWQgZnJvbSB0aGUgTWV0cm8gSmF2YVNjcmlwdCBidW5kbGVyLCB3aXRoIG1pbm9yIHR3ZWFrcyBmb3Jcbi8vIHdlYnBhY2sgNCBjb21wYXRpYmlsaXR5LlxuLy9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9tZXRyby9ibG9iL2Q2Yjk2ODVjNzMwZDBkNjM1NzdkYjQwZjQxMzY5MTU3ZjI4ZGZhM2EvcGFja2FnZXMvbWV0cm8vc3JjL2xpYi9wb2x5ZmlsbHMvcmVxdWlyZS5qc1xuY29uc3QgcnVudGltZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTtcbmZ1bmN0aW9uIGlzU2FmZUV4cG9ydChrZXkpIHtcbiAgICByZXR1cm4gKGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICAgIGtleSA9PT0gJ19fTl9TU0cnIHx8XG4gICAgICAgIGtleSA9PT0gJ19fTl9TU1AnIHx8XG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGtleSBmcm9tIHBhZ2UgY29uZmlnIGluc3RlYWQgb2YgYWxsb3cgbGlzdGluZyBpdFxuICAgICAgICBrZXkgPT09ICdjb25maWcnKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChtb2R1bGVFeHBvcnRzLCBtb2R1bGVJRCkge1xuICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnJlZ2lzdGVyKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlEICsgJyAlZXhwb3J0cyUnKTtcbiAgICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgICAgICAvLyAoVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGxlZ2FjeSBlbnZpcm9ubWVudHMuKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbWlnaHQgZmFpbCBkdWUgdG8gY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZUlEID0gbW9kdWxlSUQgKyAnICVleHBvcnRzJSAnICsga2V5O1xuICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3RlcihleHBvcnRWYWx1ZSwgdHlwZUlEKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobW9kdWxlRXhwb3J0cykge1xuICAgIHZhciBzaWduYXR1cmUgPSBbXTtcbiAgICBzaWduYXR1cmUucHVzaChydW50aW1lXzEuZGVmYXVsdC5nZXRGYW1pbHlCeVR5cGUobW9kdWxlRXhwb3J0cykpO1xuICAgIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgICAgIC8vIChUaGlzIGlzIGltcG9ydGFudCBmb3IgbGVnYWN5IGVudmlyb25tZW50cy4pXG4gICAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbWlnaHQgZmFpbCBkdWUgdG8gY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzaWduYXR1cmUucHVzaChrZXkpO1xuICAgICAgICBzaWduYXR1cmUucHVzaChydW50aW1lXzEuZGVmYXVsdC5nZXRGYW1pbHlCeVR5cGUoZXhwb3J0VmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cbmZ1bmN0aW9uIGlzUmVhY3RSZWZyZXNoQm91bmRhcnkobW9kdWxlRXhwb3J0cykge1xuICAgIGlmIChydW50aW1lXzEuZGVmYXVsdC5pc0xpa2VseUNvbXBvbmVudFR5cGUobW9kdWxlRXhwb3J0cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGhhc0V4cG9ydHMgPSBmYWxzZTtcbiAgICB2YXIgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSB0cnVlO1xuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGhhc0V4cG9ydHMgPSB0cnVlO1xuICAgICAgICBpZiAoaXNTYWZlRXhwb3J0KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBUaGlzIG1pZ2h0IGZhaWwgZHVlIHRvIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVudGltZV8xLmRlZmF1bHQuaXNMaWtlbHlDb21wb25lbnRUeXBlKGV4cG9ydFZhbHVlKSkge1xuICAgICAgICAgICAgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzRXhwb3J0cyAmJiBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cztcbn1cbmZ1bmN0aW9uIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShwcmV2U2lnbmF0dXJlLCBuZXh0U2lnbmF0dXJlKSB7XG4gICAgaWYgKHByZXZTaWduYXR1cmUubGVuZ3RoICE9PSBuZXh0U2lnbmF0dXJlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0U2lnbmF0dXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcmV2U2lnbmF0dXJlW2ldICE9PSBuZXh0U2lnbmF0dXJlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG52YXIgaXNVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbi8vIFRoaXMgZnVuY3Rpb24gYWdncmVnYXRlcyB1cGRhdGVzIGZyb20gbXVsdGlwbGUgbW9kdWxlcyBpbnRvIGEgc2luZ2xlIFJlYWN0IFJlZnJlc2ggY2FsbC5cbmZ1bmN0aW9uIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgIGlmIChpc1VwZGF0ZVNjaGVkdWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzVXBkYXRlU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBmdW5jdGlvbiBjYW5BcHBseVVwZGF0ZShzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gJ2lkbGUnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBseVVwZGF0ZSgpIHtcbiAgICAgICAgaXNVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnBlcmZvcm1SZWFjdFJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IEZhaWxlZCB0byByZS1yZW5kZXIuIFdlIHdpbGwgcmV0cnkgb24gdGhlIG5leHQgRmFzdCBSZWZyZXNoIGV2ZW50LlxcbicgK1xuICAgICAgICAgICAgICAgIGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNhbkFwcGx5VXBkYXRlKG1vZHVsZS5ob3Quc3RhdHVzKCkpKSB7XG4gICAgICAgIC8vIEFwcGx5IHVwZGF0ZSBvbiB0aGUgbmV4dCB0aWNrLlxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGFwcGx5VXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0YXR1c0hhbmRsZXIgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgIGlmIChjYW5BcHBseVVwZGF0ZShzdGF0dXMpKSB7XG4gICAgICAgICAgICBtb2R1bGUuaG90LnJlbW92ZVN0YXR1c0hhbmRsZXIoc3RhdHVzSGFuZGxlcik7XG4gICAgICAgICAgICBhcHBseVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBBcHBseSB1cGRhdGUgb25jZSB0aGUgSE1SIHJ1bnRpbWUncyBzdGF0dXMgaXMgaWRsZS5cbiAgICBtb2R1bGUuaG90LmFkZFN0YXR1c0hhbmRsZXIoc3RhdHVzSGFuZGxlcik7XG59XG4vLyBOZWVkcyB0byBiZSBjb21wYXRpYmxlIHdpdGggSUUxMVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaDogcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoLFxuICAgIGlzUmVhY3RSZWZyZXNoQm91bmRhcnk6IGlzUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gICAgc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5OiBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gICAgZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlOiBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUsXG4gICAgc2NoZWR1bGVVcGRhdGU6IHNjaGVkdWxlVXBkYXRlLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst runtime_1 = __importDefault(__webpack_require__(/*! next/dist/compiled/react-refresh/runtime */ \"./node_modules/next/dist/compiled/react-refresh/runtime.js\"));\nconst helpers_1 = __importDefault(__webpack_require__(/*! ./internal/helpers */ \"./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js\"));\n// Hook into ReactDOM initialization\nruntime_1.default.injectIntoGlobalHook(self);\n// Register global helpers\nself.$RefreshHelpers$ = helpers_1.default;\n// Register a helper for module execution interception\nself.$RefreshInterceptModuleExecution$ = function (webpackModuleId) {\n    var prevRefreshReg = self.$RefreshReg$;\n    var prevRefreshSig = self.$RefreshSig$;\n    self.$RefreshReg$ = function (type, id) {\n        runtime_1.default.register(type, webpackModuleId + ' ' + id);\n    };\n    self.$RefreshSig$ = runtime_1.default.createSignatureFunctionForTransform;\n    // Modeled after `useEffect` cleanup pattern:\n    // https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed\n    return function () {\n        self.$RefreshReg$ = prevRefreshReg;\n        self.$RefreshSig$ = prevRefreshSig;\n    };\n};\n//# sourceMappingURL=runtime.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvZGlzdC9ydW50aW1lLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0NBQWtDLG1CQUFPLENBQUMsNEdBQTBDO0FBQ3BGLGtDQUFrQyxtQkFBTyxDQUFDLGdIQUFvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvQG5leHQvcmVhY3QtcmVmcmVzaC11dGlscy9kaXN0L3J1bnRpbWUuanM/OGFiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJ1bnRpbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2NvbXBpbGVkL3JlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7XG5jb25zdCBoZWxwZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW50ZXJuYWwvaGVscGVyc1wiKSk7XG4vLyBIb29rIGludG8gUmVhY3RET00gaW5pdGlhbGl6YXRpb25cbnJ1bnRpbWVfMS5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHNlbGYpO1xuLy8gUmVnaXN0ZXIgZ2xvYmFsIGhlbHBlcnNcbnNlbGYuJFJlZnJlc2hIZWxwZXJzJCA9IGhlbHBlcnNfMS5kZWZhdWx0O1xuLy8gUmVnaXN0ZXIgYSBoZWxwZXIgZm9yIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0aW9uXG5zZWxmLiRSZWZyZXNoSW50ZXJjZXB0TW9kdWxlRXhlY3V0aW9uJCA9IGZ1bmN0aW9uICh3ZWJwYWNrTW9kdWxlSWQpIHtcbiAgICB2YXIgcHJldlJlZnJlc2hSZWcgPSBzZWxmLiRSZWZyZXNoUmVnJDtcbiAgICB2YXIgcHJldlJlZnJlc2hTaWcgPSBzZWxmLiRSZWZyZXNoU2lnJDtcbiAgICBzZWxmLiRSZWZyZXNoUmVnJCA9IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xuICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3Rlcih0eXBlLCB3ZWJwYWNrTW9kdWxlSWQgKyAnICcgKyBpZCk7XG4gICAgfTtcbiAgICBzZWxmLiRSZWZyZXNoU2lnJCA9IHJ1bnRpbWVfMS5kZWZhdWx0LmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtO1xuICAgIC8vIE1vZGVsZWQgYWZ0ZXIgYHVzZUVmZmVjdGAgY2xlYW51cCBwYXR0ZXJuOlxuICAgIC8vIGh0dHBzOi8vcmVhY3QuZGV2L2xlYXJuL3N5bmNocm9uaXppbmctd2l0aC1lZmZlY3RzI3N0ZXAtMy1hZGQtY2xlYW51cC1pZi1uZWVkZWRcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLiRSZWZyZXNoUmVnJCA9IHByZXZSZWZyZXNoUmVnO1xuICAgICAgICBzZWxmLiRSZWZyZXNoU2lnJCA9IHByZXZSZWZyZXNoU2lnO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnVudGltZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("/**\n * @license React\n * react-refresh-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// ATTENTION\nvar REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');\nvar REACT_MEMO_TYPE = Symbol.for('react.memo');\n\nvar PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.\n// It's OK to reference families, but use WeakMap/Set for types.\n\nvar allFamiliesByID = new Map();\nvar allFamiliesByType = new PossiblyWeakMap();\nvar allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families\n// that have actually been edited here. This keeps checks fast.\n// $FlowIssue\n\nvar updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.\n// It is an array of [Family, NextType] tuples.\n\nvar pendingUpdates = []; // This is injected by the renderer via DevTools global hook.\n\nvar helpersByRendererID = new Map();\nvar helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.\n\nvar mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.\n\nvar failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.\n// It needs to be weak because we do this even for roots that failed to mount.\n// If there is no WeakMap, we won't attempt to do retrying.\n// $FlowIssue\n\nvar rootElements = // $FlowIssue\ntypeof WeakMap === 'function' ? new WeakMap() : null;\nvar isPerformingRefresh = false;\n\nfunction computeFullKey(signature) {\n  if (signature.fullKey !== null) {\n    return signature.fullKey;\n  }\n\n  var fullKey = signature.ownKey;\n  var hooks;\n\n  try {\n    hooks = signature.getCustomHooks();\n  } catch (err) {\n    // This can happen in an edge case, e.g. if expression like Foo.useSomething\n    // depends on Foo which is lazily initialized during rendering.\n    // In that case just assume we'll have to remount.\n    signature.forceReset = true;\n    signature.fullKey = fullKey;\n    return fullKey;\n  }\n\n  for (var i = 0; i < hooks.length; i++) {\n    var hook = hooks[i];\n\n    if (typeof hook !== 'function') {\n      // Something's wrong. Assume we need to remount.\n      signature.forceReset = true;\n      signature.fullKey = fullKey;\n      return fullKey;\n    }\n\n    var nestedHookSignature = allSignaturesByType.get(hook);\n\n    if (nestedHookSignature === undefined) {\n      // No signature means Hook wasn't in the source code, e.g. in a library.\n      // We'll skip it because we can assume it won't change during this session.\n      continue;\n    }\n\n    var nestedHookKey = computeFullKey(nestedHookSignature);\n\n    if (nestedHookSignature.forceReset) {\n      signature.forceReset = true;\n    }\n\n    fullKey += '\\n---\\n' + nestedHookKey;\n  }\n\n  signature.fullKey = fullKey;\n  return fullKey;\n}\n\nfunction haveEqualSignatures(prevType, nextType) {\n  var prevSignature = allSignaturesByType.get(prevType);\n  var nextSignature = allSignaturesByType.get(nextType);\n\n  if (prevSignature === undefined && nextSignature === undefined) {\n    return true;\n  }\n\n  if (prevSignature === undefined || nextSignature === undefined) {\n    return false;\n  }\n\n  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {\n    return false;\n  }\n\n  if (nextSignature.forceReset) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction isReactClass(type) {\n  return type.prototype && type.prototype.isReactComponent;\n}\n\nfunction canPreserveStateBetween(prevType, nextType) {\n  if (isReactClass(prevType) || isReactClass(nextType)) {\n    return false;\n  }\n\n  if (haveEqualSignatures(prevType, nextType)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction resolveFamily(type) {\n  // Only check updated types to keep lookups fast.\n  return updatedFamiliesByType.get(type);\n} // If we didn't care about IE11, we could use new Map/Set(iterable).\n\n\nfunction cloneMap(map) {\n  var clone = new Map();\n  map.forEach(function (value, key) {\n    clone.set(key, value);\n  });\n  return clone;\n}\n\nfunction cloneSet(set) {\n  var clone = new Set();\n  set.forEach(function (value) {\n    clone.add(value);\n  });\n  return clone;\n} // This is a safety mechanism to protect against rogue getters and Proxies.\n\n\nfunction getProperty(object, property) {\n  try {\n    return object[property];\n  } catch (err) {\n    // Intentionally ignore.\n    return undefined;\n  }\n}\n\nfunction performReactRefresh() {\n\n  if (pendingUpdates.length === 0) {\n    return null;\n  }\n\n  if (isPerformingRefresh) {\n    return null;\n  }\n\n  isPerformingRefresh = true;\n\n  try {\n    var staleFamilies = new Set();\n    var updatedFamilies = new Set();\n    var updates = pendingUpdates;\n    pendingUpdates = [];\n    updates.forEach(function (_ref) {\n      var family = _ref[0],\n          nextType = _ref[1];\n      // Now that we got a real edit, we can create associations\n      // that will be read by the React reconciler.\n      var prevType = family.current;\n      updatedFamiliesByType.set(prevType, family);\n      updatedFamiliesByType.set(nextType, family);\n      family.current = nextType; // Determine whether this should be a re-render or a re-mount.\n\n      if (canPreserveStateBetween(prevType, nextType)) {\n        updatedFamilies.add(family);\n      } else {\n        staleFamilies.add(family);\n      }\n    }); // TODO: rename these fields to something more meaningful.\n\n    var update = {\n      updatedFamilies: updatedFamilies,\n      // Families that will re-render preserving state\n      staleFamilies: staleFamilies // Families that will be remounted\n\n    };\n    helpersByRendererID.forEach(function (helpers) {\n      // Even if there are no roots, set the handler on first update.\n      // This ensures that if *new* roots are mounted, they'll use the resolve handler.\n      helpers.setRefreshHandler(resolveFamily);\n    });\n    var didError = false;\n    var firstError = null; // We snapshot maps and sets that are mutated during commits.\n    // If we don't do this, there is a risk they will be mutated while\n    // we iterate over them. For example, trying to recover a failed root\n    // may cause another root to be added to the failed list -- an infinite loop.\n\n    var failedRootsSnapshot = cloneSet(failedRoots);\n    var mountedRootsSnapshot = cloneSet(mountedRoots);\n    var helpersByRootSnapshot = cloneMap(helpersByRoot);\n    failedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!failedRoots.has(root)) {// No longer failed.\n      }\n\n      if (rootElements === null) {\n        return;\n      }\n\n      if (!rootElements.has(root)) {\n        return;\n      }\n\n      var element = rootElements.get(root);\n\n      try {\n        helpers.scheduleRoot(root, element);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n    mountedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!mountedRoots.has(root)) {// No longer mounted.\n      }\n\n      try {\n        helpers.scheduleRefresh(root, update);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n\n    if (didError) {\n      throw firstError;\n    }\n\n    return update;\n  } finally {\n    isPerformingRefresh = false;\n  }\n}\nfunction register(type, id) {\n  {\n    if (type === null) {\n      return;\n    }\n\n    if (typeof type !== 'function' && typeof type !== 'object') {\n      return;\n    } // This can happen in an edge case, e.g. if we register\n    // return value of a HOC but it returns a cached component.\n    // Ignore anything but the first registration for each type.\n\n\n    if (allFamiliesByType.has(type)) {\n      return;\n    } // Create family or remember to update it.\n    // None of this bookkeeping affects reconciliation\n    // until the first performReactRefresh() call above.\n\n\n    var family = allFamiliesByID.get(id);\n\n    if (family === undefined) {\n      family = {\n        current: type\n      };\n      allFamiliesByID.set(id, family);\n    } else {\n      pendingUpdates.push([family, type]);\n    }\n\n    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          register(type.render, id + '$render');\n          break;\n\n        case REACT_MEMO_TYPE:\n          register(type.type, id + '$type');\n          break;\n      }\n    }\n  }\n}\nfunction setSignature(type, key) {\n  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;\n\n  {\n    if (!allSignaturesByType.has(type)) {\n      allSignaturesByType.set(type, {\n        forceReset: forceReset,\n        ownKey: key,\n        fullKey: null,\n        getCustomHooks: getCustomHooks || function () {\n          return [];\n        }\n      });\n    } // Visit inner types because we might not have signed them.\n\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          setSignature(type.render, key, forceReset, getCustomHooks);\n          break;\n\n        case REACT_MEMO_TYPE:\n          setSignature(type.type, key, forceReset, getCustomHooks);\n          break;\n      }\n    }\n  }\n} // This is lazily called during first render for a type.\n// It captures Hook list at that time so inline requires don't break comparisons.\n\nfunction collectCustomHooksForSignature(type) {\n  {\n    var signature = allSignaturesByType.get(type);\n\n    if (signature !== undefined) {\n      computeFullKey(signature);\n    }\n  }\n}\nfunction getFamilyByID(id) {\n  {\n    return allFamiliesByID.get(id);\n  }\n}\nfunction getFamilyByType(type) {\n  {\n    return allFamiliesByType.get(type);\n  }\n}\nfunction findAffectedHostInstances(families) {\n  {\n    var affectedInstances = new Set();\n    mountedRoots.forEach(function (root) {\n      var helpers = helpersByRoot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);\n      instancesForRoot.forEach(function (inst) {\n        affectedInstances.add(inst);\n      });\n    });\n    return affectedInstances;\n  }\n}\nfunction injectIntoGlobalHook(globalObject) {\n  {\n    // For React Native, the global hook will be set up by require('react-devtools-core').\n    // That code will run before us. So we need to monkeypatch functions on existing hook.\n    // For React Web, the global hook will be set up by the extension.\n    // This will also run before us.\n    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n    if (hook === undefined) {\n      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.\n      // Note that in this case it's important that renderer code runs *after* this method call.\n      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.\n      var nextID = 0;\n      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {\n        renderers: new Map(),\n        supportsFiber: true,\n        inject: function (injected) {\n          return nextID++;\n        },\n        onScheduleFiberRoot: function (id, root, children) {},\n        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},\n        onCommitFiberUnmount: function () {}\n      };\n    }\n\n    if (hook.isDisabled) {\n      // This isn't a real property on the hook, but it can be set to opt out\n      // of DevTools integration and associated warnings and logs.\n      // Using console['warn'] to evade Babel and ESLint\n      console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');\n      return;\n    } // Here, we just want to get a reference to scheduleRefresh.\n\n\n    var oldInject = hook.inject;\n\n    hook.inject = function (injected) {\n      var id = oldInject.apply(this, arguments);\n\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n\n      return id;\n    }; // Do the same for any already injected roots.\n    // This is useful if ReactDOM has already been initialized.\n    // https://github.com/facebook/react/issues/17626\n\n\n    hook.renderers.forEach(function (injected, id) {\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n    }); // We also want to track currently mounted roots.\n\n    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;\n\n    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};\n\n    hook.onScheduleFiberRoot = function (id, root, children) {\n      if (!isPerformingRefresh) {\n        // If it was intentionally scheduled, don't attempt to restore.\n        // This includes intentionally scheduled unmounts.\n        failedRoots.delete(root);\n\n        if (rootElements !== null) {\n          rootElements.set(root, children);\n        }\n      }\n\n      return oldOnScheduleFiberRoot.apply(this, arguments);\n    };\n\n    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {\n      var helpers = helpersByRendererID.get(id);\n\n      if (helpers !== undefined) {\n        helpersByRoot.set(root, helpers);\n        var current = root.current;\n        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.\n        // This logic is copy-pasted from similar logic in the DevTools backend.\n        // If this breaks with some refactoring, you'll want to update DevTools too.\n\n        if (alternate !== null) {\n          var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && mountedRoots.has(root);\n          var isMounted = current.memoizedState != null && current.memoizedState.element != null;\n\n          if (!wasMounted && isMounted) {\n            // Mount a new root.\n            mountedRoots.add(root);\n            failedRoots.delete(root);\n          } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {\n            // Unmount an existing root.\n            mountedRoots.delete(root);\n\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            } else {\n              helpersByRoot.delete(root);\n            }\n          } else if (!wasMounted && !isMounted) {\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            }\n          }\n        } else {\n          // Mount a new root.\n          mountedRoots.add(root);\n        }\n      } // Always call the decorated DevTools hook.\n\n\n      return oldOnCommitFiberRoot.apply(this, arguments);\n    };\n  }\n}\nfunction hasUnrecoverableErrors() {\n  // TODO: delete this after removing dependency in RN.\n  return false;\n} // Exposed for testing.\n\nfunction _getMountedRootCount() {\n  {\n    return mountedRoots.size;\n  }\n} // This is a wrapper over more primitive functions for setting signature.\n// Signatures let us decide whether the Hook order has changed on refresh.\n//\n// This function is intended to be used as a transform target, e.g.:\n// var _s = createSignatureFunctionForTransform()\n//\n// function Hello() {\n//   const [foo, setFoo] = useState(0);\n//   const value = useCustomHook();\n//   _s(); /* Call without arguments triggers collecting the custom Hook list.\n//          * This doesn't happen during the module evaluation because we\n//          * don't want to change the module order with inline requires.\n//          * Next calls are noops. */\n//   return <h1>Hi</h1>;\n// }\n//\n// /* Call with arguments attaches the signature to the type: */\n// _s(\n//   Hello,\n//   'useState{[foo, setFoo]}(0)',\n//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */\n// );\n\nfunction createSignatureFunctionForTransform() {\n  {\n    var savedType;\n    var hasCustomHooks;\n    var didCollectHooks = false;\n    return function (type, key, forceReset, getCustomHooks) {\n      if (typeof key === 'string') {\n        // We're in the initial phase that associates signatures\n        // with the functions. Note this may be called multiple times\n        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).\n        if (!savedType) {\n          // We're in the innermost call, so this is the actual type.\n          savedType = type;\n          hasCustomHooks = typeof getCustomHooks === 'function';\n        } // Set the signature for all types (even wrappers!) in case\n        // they have no signatures of their own. This is to prevent\n        // problems like https://github.com/facebook/react/issues/20417.\n\n\n        if (type != null && (typeof type === 'function' || typeof type === 'object')) {\n          setSignature(type, key, forceReset, getCustomHooks);\n        }\n\n        return type;\n      } else {\n        // We're in the _s() call without arguments, which means\n        // this is the time to collect custom Hook signatures.\n        // Only do this once. This path is hot and runs *inside* every render!\n        if (!didCollectHooks && hasCustomHooks) {\n          didCollectHooks = true;\n          collectCustomHooksForSignature(savedType);\n        }\n      }\n    };\n  }\n}\nfunction isLikelyComponentType(type) {\n  {\n    switch (typeof type) {\n      case 'function':\n        {\n          // First, deal with classes.\n          if (type.prototype != null) {\n            if (type.prototype.isReactComponent) {\n              // React class.\n              return true;\n            }\n\n            var ownNames = Object.getOwnPropertyNames(type.prototype);\n\n            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {\n              // This looks like a class.\n              return false;\n            } // eslint-disable-next-line no-proto\n\n\n            if (type.prototype.__proto__ !== Object.prototype) {\n              // It has a superclass.\n              return false;\n            } // Pass through.\n            // This looks like a regular function with empty prototype.\n\n          } // For plain functions and arrows, use name as a heuristic.\n\n\n          var name = type.name || type.displayName;\n          return typeof name === 'string' && /^[A-Z]/.test(name);\n        }\n\n      case 'object':\n        {\n          if (type != null) {\n            switch (getProperty(type, '$$typeof')) {\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_MEMO_TYPE:\n                // Definitely React components.\n                return true;\n\n              default:\n                return false;\n            }\n          }\n\n          return false;\n        }\n\n      default:\n        {\n          return false;\n        }\n    }\n  }\n}\n\nexports._getMountedRootCount = _getMountedRootCount;\nexports.collectCustomHooksForSignature = collectCustomHooksForSignature;\nexports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;\nexports.findAffectedHostInstances = findAffectedHostInstances;\nexports.getFamilyByID = getFamilyByID;\nexports.getFamilyByType = getFamilyByType;\nexports.hasUnrecoverableErrors = hasUnrecoverableErrors;\nexports.injectIntoGlobalHook = injectIntoGlobalHook;\nexports.isLikelyComponentType = isLikelyComponentType;\nexports.performReactRefresh = performReactRefresh;\nexports.register = register;\nexports.setSignature = setSignature;\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3JlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7QUFDckU7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDs7QUFFQSx5QkFBeUI7O0FBRXpCO0FBQ0EsK0JBQStCOztBQUUvQiw4QkFBOEI7O0FBRTlCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNkRBQTZEO0FBQzdELCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0NBQW9DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7QUFHZDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsWUFBWTs7O0FBR1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUIsc0NBQXNDO0FBQ3RDLDJDQUEyQztBQUMzQyxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM/N2U4NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG5cbnZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7IC8vIFdlIG5ldmVyIHJlbW92ZSB0aGVzZSBhc3NvY2lhdGlvbnMuXG4vLyBJdCdzIE9LIHRvIHJlZmVyZW5jZSBmYW1pbGllcywgYnV0IHVzZSBXZWFrTWFwL1NldCBmb3IgdHlwZXMuXG5cbnZhciBhbGxGYW1pbGllc0J5SUQgPSBuZXcgTWFwKCk7XG52YXIgYWxsRmFtaWxpZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG52YXIgYWxsU2lnbmF0dXJlc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTsgLy8gVGhpcyBXZWFrTWFwIGlzIHJlYWQgYnkgUmVhY3QsIHNvIHdlIG9ubHkgcHV0IGZhbWlsaWVzXG4vLyB0aGF0IGhhdmUgYWN0dWFsbHkgYmVlbiBlZGl0ZWQgaGVyZS4gVGhpcyBrZWVwcyBjaGVja3MgZmFzdC5cbi8vICRGbG93SXNzdWVcblxudmFyIHVwZGF0ZWRGYW1pbGllc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTsgLy8gVGhpcyBpcyBjbGVhcmVkIG9uIGV2ZXJ5IHBlcmZvcm1SZWFjdFJlZnJlc2goKSBjYWxsLlxuLy8gSXQgaXMgYW4gYXJyYXkgb2YgW0ZhbWlseSwgTmV4dFR5cGVdIHR1cGxlcy5cblxudmFyIHBlbmRpbmdVcGRhdGVzID0gW107IC8vIFRoaXMgaXMgaW5qZWN0ZWQgYnkgdGhlIHJlbmRlcmVyIHZpYSBEZXZUb29scyBnbG9iYWwgaG9vay5cblxudmFyIGhlbHBlcnNCeVJlbmRlcmVySUQgPSBuZXcgTWFwKCk7XG52YXIgaGVscGVyc0J5Um9vdCA9IG5ldyBNYXAoKTsgLy8gV2Uga2VlcCB0cmFjayBvZiBtb3VudGVkIHJvb3RzIHNvIHdlIGNhbiBzY2hlZHVsZSB1cGRhdGVzLlxuXG52YXIgbW91bnRlZFJvb3RzID0gbmV3IFNldCgpOyAvLyBJZiBhIHJvb3QgY2FwdHVyZXMgYW4gZXJyb3IsIHdlIHJlbWVtYmVyIGl0IHNvIHdlIGNhbiByZXRyeSBvbiBlZGl0LlxuXG52YXIgZmFpbGVkUm9vdHMgPSBuZXcgU2V0KCk7IC8vIEluIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgV2Vha01hcCwgd2UgYWxzbyByZW1lbWJlciB0aGUgbGFzdCBlbGVtZW50IGZvciBldmVyeSByb290LlxuLy8gSXQgbmVlZHMgdG8gYmUgd2VhayBiZWNhdXNlIHdlIGRvIHRoaXMgZXZlbiBmb3Igcm9vdHMgdGhhdCBmYWlsZWQgdG8gbW91bnQuXG4vLyBJZiB0aGVyZSBpcyBubyBXZWFrTWFwLCB3ZSB3b24ndCBhdHRlbXB0IHRvIGRvIHJldHJ5aW5nLlxuLy8gJEZsb3dJc3N1ZVxuXG52YXIgcm9vdEVsZW1lbnRzID0gLy8gJEZsb3dJc3N1ZVxudHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBuZXcgV2Vha01hcCgpIDogbnVsbDtcbnZhciBpc1BlcmZvcm1pbmdSZWZyZXNoID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNvbXB1dGVGdWxsS2V5KHNpZ25hdHVyZSkge1xuICBpZiAoc2lnbmF0dXJlLmZ1bGxLZXkgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlLmZ1bGxLZXk7XG4gIH1cblxuICB2YXIgZnVsbEtleSA9IHNpZ25hdHVyZS5vd25LZXk7XG4gIHZhciBob29rcztcblxuICB0cnkge1xuICAgIGhvb2tzID0gc2lnbmF0dXJlLmdldEN1c3RvbUhvb2tzKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBhbiBlZGdlIGNhc2UsIGUuZy4gaWYgZXhwcmVzc2lvbiBsaWtlIEZvby51c2VTb21ldGhpbmdcbiAgICAvLyBkZXBlbmRzIG9uIEZvbyB3aGljaCBpcyBsYXppbHkgaW5pdGlhbGl6ZWQgZHVyaW5nIHJlbmRlcmluZy5cbiAgICAvLyBJbiB0aGF0IGNhc2UganVzdCBhc3N1bWUgd2UnbGwgaGF2ZSB0byByZW1vdW50LlxuICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcbiAgICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gICAgcmV0dXJuIGZ1bGxLZXk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGhvb2sgPSBob29rc1tpXTtcblxuICAgIGlmICh0eXBlb2YgaG9vayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gU29tZXRoaW5nJ3Mgd3JvbmcuIEFzc3VtZSB3ZSBuZWVkIHRvIHJlbW91bnQuXG4gICAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gICAgICByZXR1cm4gZnVsbEtleTtcbiAgICB9XG5cbiAgICB2YXIgbmVzdGVkSG9va1NpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KGhvb2spO1xuXG4gICAgaWYgKG5lc3RlZEhvb2tTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTm8gc2lnbmF0dXJlIG1lYW5zIEhvb2sgd2Fzbid0IGluIHRoZSBzb3VyY2UgY29kZSwgZS5nLiBpbiBhIGxpYnJhcnkuXG4gICAgICAvLyBXZSdsbCBza2lwIGl0IGJlY2F1c2Ugd2UgY2FuIGFzc3VtZSBpdCB3b24ndCBjaGFuZ2UgZHVyaW5nIHRoaXMgc2Vzc2lvbi5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBuZXN0ZWRIb29rS2V5ID0gY29tcHV0ZUZ1bGxLZXkobmVzdGVkSG9va1NpZ25hdHVyZSk7XG5cbiAgICBpZiAobmVzdGVkSG9va1NpZ25hdHVyZS5mb3JjZVJlc2V0KSB7XG4gICAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVsbEtleSArPSAnXFxuLS0tXFxuJyArIG5lc3RlZEhvb2tLZXk7XG4gIH1cblxuICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gIHJldHVybiBmdWxsS2V5O1xufVxuXG5mdW5jdGlvbiBoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkge1xuICB2YXIgcHJldlNpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KHByZXZUeXBlKTtcbiAgdmFyIG5leHRTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChuZXh0VHlwZSk7XG5cbiAgaWYgKHByZXZTaWduYXR1cmUgPT09IHVuZGVmaW5lZCAmJiBuZXh0U2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwcmV2U2lnbmF0dXJlID09PSB1bmRlZmluZWQgfHwgbmV4dFNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVGdWxsS2V5KHByZXZTaWduYXR1cmUpICE9PSBjb21wdXRlRnVsbEtleShuZXh0U2lnbmF0dXJlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuZXh0U2lnbmF0dXJlLmZvcmNlUmVzZXQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNSZWFjdENsYXNzKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUucHJvdG90eXBlICYmIHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGNhblByZXNlcnZlU3RhdGVCZXR3ZWVuKHByZXZUeXBlLCBuZXh0VHlwZSkge1xuICBpZiAoaXNSZWFjdENsYXNzKHByZXZUeXBlKSB8fCBpc1JlYWN0Q2xhc3MobmV4dFR5cGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGhhdmVFcXVhbFNpZ25hdHVyZXMocHJldlR5cGUsIG5leHRUeXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRmFtaWx5KHR5cGUpIHtcbiAgLy8gT25seSBjaGVjayB1cGRhdGVkIHR5cGVzIHRvIGtlZXAgbG9va3VwcyBmYXN0LlxuICByZXR1cm4gdXBkYXRlZEZhbWlsaWVzQnlUeXBlLmdldCh0eXBlKTtcbn0gLy8gSWYgd2UgZGlkbid0IGNhcmUgYWJvdXQgSUUxMSwgd2UgY291bGQgdXNlIG5ldyBNYXAvU2V0KGl0ZXJhYmxlKS5cblxuXG5mdW5jdGlvbiBjbG9uZU1hcChtYXApIHtcbiAgdmFyIGNsb25lID0gbmV3IE1hcCgpO1xuICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGNsb25lLnNldChrZXksIHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gY2xvbmVTZXQoc2V0KSB7XG4gIHZhciBjbG9uZSA9IG5ldyBTZXQoKTtcbiAgc2V0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY2xvbmUuYWRkKHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn0gLy8gVGhpcyBpcyBhIHNhZmV0eSBtZWNoYW5pc20gdG8gcHJvdGVjdCBhZ2FpbnN0IHJvZ3VlIGdldHRlcnMgYW5kIFByb3hpZXMuXG5cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB0cnkge1xuICAgIHJldHVybiBvYmplY3RbcHJvcGVydHldO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJbnRlbnRpb25hbGx5IGlnbm9yZS5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm1SZWFjdFJlZnJlc2goKSB7XG5cbiAgaWYgKHBlbmRpbmdVcGRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSB0cnVlO1xuXG4gIHRyeSB7XG4gICAgdmFyIHN0YWxlRmFtaWxpZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHVwZGF0ZWRGYW1pbGllcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgdXBkYXRlcyA9IHBlbmRpbmdVcGRhdGVzO1xuICAgIHBlbmRpbmdVcGRhdGVzID0gW107XG4gICAgdXBkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZmFtaWx5ID0gX3JlZlswXSxcbiAgICAgICAgICBuZXh0VHlwZSA9IF9yZWZbMV07XG4gICAgICAvLyBOb3cgdGhhdCB3ZSBnb3QgYSByZWFsIGVkaXQsIHdlIGNhbiBjcmVhdGUgYXNzb2NpYXRpb25zXG4gICAgICAvLyB0aGF0IHdpbGwgYmUgcmVhZCBieSB0aGUgUmVhY3QgcmVjb25jaWxlci5cbiAgICAgIHZhciBwcmV2VHlwZSA9IGZhbWlseS5jdXJyZW50O1xuICAgICAgdXBkYXRlZEZhbWlsaWVzQnlUeXBlLnNldChwcmV2VHlwZSwgZmFtaWx5KTtcbiAgICAgIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5zZXQobmV4dFR5cGUsIGZhbWlseSk7XG4gICAgICBmYW1pbHkuY3VycmVudCA9IG5leHRUeXBlOyAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGlzIHNob3VsZCBiZSBhIHJlLXJlbmRlciBvciBhIHJlLW1vdW50LlxuXG4gICAgICBpZiAoY2FuUHJlc2VydmVTdGF0ZUJldHdlZW4ocHJldlR5cGUsIG5leHRUeXBlKSkge1xuICAgICAgICB1cGRhdGVkRmFtaWxpZXMuYWRkKGZhbWlseSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFsZUZhbWlsaWVzLmFkZChmYW1pbHkpO1xuICAgICAgfVxuICAgIH0pOyAvLyBUT0RPOiByZW5hbWUgdGhlc2UgZmllbGRzIHRvIHNvbWV0aGluZyBtb3JlIG1lYW5pbmdmdWwuXG5cbiAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgdXBkYXRlZEZhbWlsaWVzOiB1cGRhdGVkRmFtaWxpZXMsXG4gICAgICAvLyBGYW1pbGllcyB0aGF0IHdpbGwgcmUtcmVuZGVyIHByZXNlcnZpbmcgc3RhdGVcbiAgICAgIHN0YWxlRmFtaWxpZXM6IHN0YWxlRmFtaWxpZXMgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIGJlIHJlbW91bnRlZFxuXG4gICAgfTtcbiAgICBoZWxwZXJzQnlSZW5kZXJlcklELmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcnMpIHtcbiAgICAgIC8vIEV2ZW4gaWYgdGhlcmUgYXJlIG5vIHJvb3RzLCBzZXQgdGhlIGhhbmRsZXIgb24gZmlyc3QgdXBkYXRlLlxuICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgaWYgKm5ldyogcm9vdHMgYXJlIG1vdW50ZWQsIHRoZXknbGwgdXNlIHRoZSByZXNvbHZlIGhhbmRsZXIuXG4gICAgICBoZWxwZXJzLnNldFJlZnJlc2hIYW5kbGVyKHJlc29sdmVGYW1pbHkpO1xuICAgIH0pO1xuICAgIHZhciBkaWRFcnJvciA9IGZhbHNlO1xuICAgIHZhciBmaXJzdEVycm9yID0gbnVsbDsgLy8gV2Ugc25hcHNob3QgbWFwcyBhbmQgc2V0cyB0aGF0IGFyZSBtdXRhdGVkIGR1cmluZyBjb21taXRzLlxuICAgIC8vIElmIHdlIGRvbid0IGRvIHRoaXMsIHRoZXJlIGlzIGEgcmlzayB0aGV5IHdpbGwgYmUgbXV0YXRlZCB3aGlsZVxuICAgIC8vIHdlIGl0ZXJhdGUgb3ZlciB0aGVtLiBGb3IgZXhhbXBsZSwgdHJ5aW5nIHRvIHJlY292ZXIgYSBmYWlsZWQgcm9vdFxuICAgIC8vIG1heSBjYXVzZSBhbm90aGVyIHJvb3QgdG8gYmUgYWRkZWQgdG8gdGhlIGZhaWxlZCBsaXN0IC0tIGFuIGluZmluaXRlIGxvb3AuXG5cbiAgICB2YXIgZmFpbGVkUm9vdHNTbmFwc2hvdCA9IGNsb25lU2V0KGZhaWxlZFJvb3RzKTtcbiAgICB2YXIgbW91bnRlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChtb3VudGVkUm9vdHMpO1xuICAgIHZhciBoZWxwZXJzQnlSb290U25hcHNob3QgPSBjbG9uZU1hcChoZWxwZXJzQnlSb290KTtcbiAgICBmYWlsZWRSb290c1NuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZhaWxlZFJvb3RzLmhhcyhyb290KSkgey8vIE5vIGxvbmdlciBmYWlsZWQuXG4gICAgICB9XG5cbiAgICAgIGlmIChyb290RWxlbWVudHMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJvb3RFbGVtZW50cy5oYXMocm9vdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudCA9IHJvb3RFbGVtZW50cy5nZXQocm9vdCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGhlbHBlcnMuc2NoZWR1bGVSb290KHJvb3QsIGVsZW1lbnQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghZGlkRXJyb3IpIHtcbiAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgZmlyc3RFcnJvciA9IGVycjtcbiAgICAgICAgfSAvLyBLZWVwIHRyeWluZyBvdGhlciByb290cy5cblxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vdW50ZWRSb290c1NuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1vdW50ZWRSb290cy5oYXMocm9vdCkpIHsvLyBObyBsb25nZXIgbW91bnRlZC5cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaGVscGVycy5zY2hlZHVsZVJlZnJlc2gocm9vdCwgdXBkYXRlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoIWRpZEVycm9yKSB7XG4gICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGZpcnN0RXJyb3IgPSBlcnI7XG4gICAgICAgIH0gLy8gS2VlcCB0cnlpbmcgb3RoZXIgcm9vdHMuXG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgdGhyb3cgZmlyc3RFcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlO1xuICB9IGZpbmFsbHkge1xuICAgIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gcmVnaXN0ZXIodHlwZSwgaWQpIHtcbiAge1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVGhpcyBjYW4gaGFwcGVuIGluIGFuIGVkZ2UgY2FzZSwgZS5nLiBpZiB3ZSByZWdpc3RlclxuICAgIC8vIHJldHVybiB2YWx1ZSBvZiBhIEhPQyBidXQgaXQgcmV0dXJucyBhIGNhY2hlZCBjb21wb25lbnQuXG4gICAgLy8gSWdub3JlIGFueXRoaW5nIGJ1dCB0aGUgZmlyc3QgcmVnaXN0cmF0aW9uIGZvciBlYWNoIHR5cGUuXG5cblxuICAgIGlmIChhbGxGYW1pbGllc0J5VHlwZS5oYXModHlwZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENyZWF0ZSBmYW1pbHkgb3IgcmVtZW1iZXIgdG8gdXBkYXRlIGl0LlxuICAgIC8vIE5vbmUgb2YgdGhpcyBib29ra2VlcGluZyBhZmZlY3RzIHJlY29uY2lsaWF0aW9uXG4gICAgLy8gdW50aWwgdGhlIGZpcnN0IHBlcmZvcm1SZWFjdFJlZnJlc2goKSBjYWxsIGFib3ZlLlxuXG5cbiAgICB2YXIgZmFtaWx5ID0gYWxsRmFtaWxpZXNCeUlELmdldChpZCk7XG5cbiAgICBpZiAoZmFtaWx5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZhbWlseSA9IHtcbiAgICAgICAgY3VycmVudDogdHlwZVxuICAgICAgfTtcbiAgICAgIGFsbEZhbWlsaWVzQnlJRC5zZXQoaWQsIGZhbWlseSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdVcGRhdGVzLnB1c2goW2ZhbWlseSwgdHlwZV0pO1xuICAgIH1cblxuICAgIGFsbEZhbWlsaWVzQnlUeXBlLnNldCh0eXBlLCBmYW1pbHkpOyAvLyBWaXNpdCBpbm5lciB0eXBlcyBiZWNhdXNlIHdlIG1pZ2h0IG5vdCBoYXZlIHJlZ2lzdGVyZWQgdGhlbS5cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChnZXRQcm9wZXJ0eSh0eXBlLCAnJCR0eXBlb2YnKSkge1xuICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgcmVnaXN0ZXIodHlwZS5yZW5kZXIsIGlkICsgJyRyZW5kZXInKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICByZWdpc3Rlcih0eXBlLnR5cGUsIGlkICsgJyR0eXBlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBzZXRTaWduYXR1cmUodHlwZSwga2V5KSB7XG4gIHZhciBmb3JjZVJlc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgdmFyIGdldEN1c3RvbUhvb2tzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XG5cbiAge1xuICAgIGlmICghYWxsU2lnbmF0dXJlc0J5VHlwZS5oYXModHlwZSkpIHtcbiAgICAgIGFsbFNpZ25hdHVyZXNCeVR5cGUuc2V0KHR5cGUsIHtcbiAgICAgICAgZm9yY2VSZXNldDogZm9yY2VSZXNldCxcbiAgICAgICAgb3duS2V5OiBrZXksXG4gICAgICAgIGZ1bGxLZXk6IG51bGwsXG4gICAgICAgIGdldEN1c3RvbUhvb2tzOiBnZXRDdXN0b21Ib29rcyB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIFZpc2l0IGlubmVyIHR5cGVzIGJlY2F1c2Ugd2UgbWlnaHQgbm90IGhhdmUgc2lnbmVkIHRoZW0uXG5cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChnZXRQcm9wZXJ0eSh0eXBlLCAnJCR0eXBlb2YnKSkge1xuICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgc2V0U2lnbmF0dXJlKHR5cGUucmVuZGVyLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICBzZXRTaWduYXR1cmUodHlwZS50eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gLy8gVGhpcyBpcyBsYXppbHkgY2FsbGVkIGR1cmluZyBmaXJzdCByZW5kZXIgZm9yIGEgdHlwZS5cbi8vIEl0IGNhcHR1cmVzIEhvb2sgbGlzdCBhdCB0aGF0IHRpbWUgc28gaW5saW5lIHJlcXVpcmVzIGRvbid0IGJyZWFrIGNvbXBhcmlzb25zLlxuXG5mdW5jdGlvbiBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUodHlwZSkge1xuICB7XG4gICAgdmFyIHNpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KHR5cGUpO1xuXG4gICAgaWYgKHNpZ25hdHVyZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb21wdXRlRnVsbEtleShzaWduYXR1cmUpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2V0RmFtaWx5QnlJRChpZCkge1xuICB7XG4gICAgcmV0dXJuIGFsbEZhbWlsaWVzQnlJRC5nZXQoaWQpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRGYW1pbHlCeVR5cGUodHlwZSkge1xuICB7XG4gICAgcmV0dXJuIGFsbEZhbWlsaWVzQnlUeXBlLmdldCh0eXBlKTtcbiAgfVxufVxuZnVuY3Rpb24gZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcyhmYW1pbGllcykge1xuICB7XG4gICAgdmFyIGFmZmVjdGVkSW5zdGFuY2VzID0gbmV3IFNldCgpO1xuICAgIG1vdW50ZWRSb290cy5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJvb3QuZ2V0KHJvb3QpO1xuXG4gICAgICBpZiAoaGVscGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnN0YW5jZXNGb3JSb290ID0gaGVscGVycy5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gocm9vdCwgZmFtaWxpZXMpO1xuICAgICAgaW5zdGFuY2VzRm9yUm9vdC5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgICAgIGFmZmVjdGVkSW5zdGFuY2VzLmFkZChpbnN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhZmZlY3RlZEluc3RhbmNlcztcbiAgfVxufVxuZnVuY3Rpb24gaW5qZWN0SW50b0dsb2JhbEhvb2soZ2xvYmFsT2JqZWN0KSB7XG4gIHtcbiAgICAvLyBGb3IgUmVhY3QgTmF0aXZlLCB0aGUgZ2xvYmFsIGhvb2sgd2lsbCBiZSBzZXQgdXAgYnkgcmVxdWlyZSgncmVhY3QtZGV2dG9vbHMtY29yZScpLlxuICAgIC8vIFRoYXQgY29kZSB3aWxsIHJ1biBiZWZvcmUgdXMuIFNvIHdlIG5lZWQgdG8gbW9ua2V5cGF0Y2ggZnVuY3Rpb25zIG9uIGV4aXN0aW5nIGhvb2suXG4gICAgLy8gRm9yIFJlYWN0IFdlYiwgdGhlIGdsb2JhbCBob29rIHdpbGwgYmUgc2V0IHVwIGJ5IHRoZSBleHRlbnNpb24uXG4gICAgLy8gVGhpcyB3aWxsIGFsc28gcnVuIGJlZm9yZSB1cy5cbiAgICB2YXIgaG9vayA9IGdsb2JhbE9iamVjdC5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbiAgICBpZiAoaG9vayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBIb3dldmVyLCBpZiB0aGVyZSBpcyBubyBEZXZUb29scyBleHRlbnNpb24sIHdlJ2xsIG5lZWQgdG8gc2V0IHVwIHRoZSBnbG9iYWwgaG9vayBvdXJzZWx2ZXMuXG4gICAgICAvLyBOb3RlIHRoYXQgaW4gdGhpcyBjYXNlIGl0J3MgaW1wb3J0YW50IHRoYXQgcmVuZGVyZXIgY29kZSBydW5zICphZnRlciogdGhpcyBtZXRob2QgY2FsbC5cbiAgICAgIC8vIE90aGVyd2lzZSwgdGhlIHJlbmRlcmVyIHdpbGwgdGhpbmsgdGhhdCB0aGVyZSBpcyBubyBnbG9iYWwgaG9vaywgYW5kIHdvbid0IGRvIHRoZSBpbmplY3Rpb24uXG4gICAgICB2YXIgbmV4dElEID0gMDtcbiAgICAgIGdsb2JhbE9iamVjdC5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPSBob29rID0ge1xuICAgICAgICByZW5kZXJlcnM6IG5ldyBNYXAoKSxcbiAgICAgICAgc3VwcG9ydHNGaWJlcjogdHJ1ZSxcbiAgICAgICAgaW5qZWN0OiBmdW5jdGlvbiAoaW5qZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dElEKys7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2NoZWR1bGVGaWJlclJvb3Q6IGZ1bmN0aW9uIChpZCwgcm9vdCwgY2hpbGRyZW4pIHt9LFxuICAgICAgICBvbkNvbW1pdEZpYmVyUm9vdDogZnVuY3Rpb24gKGlkLCByb290LCBtYXliZVByaW9yaXR5TGV2ZWwsIGRpZEVycm9yKSB7fSxcbiAgICAgICAgb25Db21taXRGaWJlclVubW91bnQ6IGZ1bmN0aW9uICgpIHt9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChob29rLmlzRGlzYWJsZWQpIHtcbiAgICAgIC8vIFRoaXMgaXNuJ3QgYSByZWFsIHByb3BlcnR5IG9uIHRoZSBob29rLCBidXQgaXQgY2FuIGJlIHNldCB0byBvcHQgb3V0XG4gICAgICAvLyBvZiBEZXZUb29scyBpbnRlZ3JhdGlvbiBhbmQgYXNzb2NpYXRlZCB3YXJuaW5ncyBhbmQgbG9ncy5cbiAgICAgIC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1NvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuICcgKyAnRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSGVyZSwgd2UganVzdCB3YW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byBzY2hlZHVsZVJlZnJlc2guXG5cblxuICAgIHZhciBvbGRJbmplY3QgPSBob29rLmluamVjdDtcblxuICAgIGhvb2suaW5qZWN0ID0gZnVuY3Rpb24gKGluamVjdGVkKSB7XG4gICAgICB2YXIgaWQgPSBvbGRJbmplY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHR5cGVvZiBpbmplY3RlZC5zY2hlZHVsZVJlZnJlc2ggPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGluamVjdGVkLnNldFJlZnJlc2hIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFRoaXMgdmVyc2lvbiBzdXBwb3J0cyBSZWFjdCBSZWZyZXNoLlxuICAgICAgICBoZWxwZXJzQnlSZW5kZXJlcklELnNldChpZCwgaW5qZWN0ZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTsgLy8gRG8gdGhlIHNhbWUgZm9yIGFueSBhbHJlYWR5IGluamVjdGVkIHJvb3RzLlxuICAgIC8vIFRoaXMgaXMgdXNlZnVsIGlmIFJlYWN0RE9NIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNzYyNlxuXG5cbiAgICBob29rLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmplY3RlZCwgaWQpIHtcbiAgICAgIGlmICh0eXBlb2YgaW5qZWN0ZWQuc2NoZWR1bGVSZWZyZXNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBpbmplY3RlZC5zZXRSZWZyZXNoSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIHZlcnNpb24gc3VwcG9ydHMgUmVhY3QgUmVmcmVzaC5cbiAgICAgICAgaGVscGVyc0J5UmVuZGVyZXJJRC5zZXQoaWQsIGluamVjdGVkKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gV2UgYWxzbyB3YW50IHRvIHRyYWNrIGN1cnJlbnRseSBtb3VudGVkIHJvb3RzLlxuXG4gICAgdmFyIG9sZE9uQ29tbWl0RmliZXJSb290ID0gaG9vay5vbkNvbW1pdEZpYmVyUm9vdDtcblxuICAgIHZhciBvbGRPblNjaGVkdWxlRmliZXJSb290ID0gaG9vay5vblNjaGVkdWxlRmliZXJSb290IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgaG9vay5vblNjaGVkdWxlRmliZXJSb290ID0gZnVuY3Rpb24gKGlkLCByb290LCBjaGlsZHJlbikge1xuICAgICAgaWYgKCFpc1BlcmZvcm1pbmdSZWZyZXNoKSB7XG4gICAgICAgIC8vIElmIGl0IHdhcyBpbnRlbnRpb25hbGx5IHNjaGVkdWxlZCwgZG9uJ3QgYXR0ZW1wdCB0byByZXN0b3JlLlxuICAgICAgICAvLyBUaGlzIGluY2x1ZGVzIGludGVudGlvbmFsbHkgc2NoZWR1bGVkIHVubW91bnRzLlxuICAgICAgICBmYWlsZWRSb290cy5kZWxldGUocm9vdCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgIHJvb3RFbGVtZW50cy5zZXQocm9vdCwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvbGRPblNjaGVkdWxlRmliZXJSb290LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGhvb2sub25Db21taXRGaWJlclJvb3QgPSBmdW5jdGlvbiAoaWQsIHJvb3QsIG1heWJlUHJpb3JpdHlMZXZlbCwgZGlkRXJyb3IpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5UmVuZGVyZXJJRC5nZXQoaWQpO1xuXG4gICAgICBpZiAoaGVscGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGhlbHBlcnNCeVJvb3Quc2V0KHJvb3QsIGhlbHBlcnMpO1xuICAgICAgICB2YXIgY3VycmVudCA9IHJvb3QuY3VycmVudDtcbiAgICAgICAgdmFyIGFsdGVybmF0ZSA9IGN1cnJlbnQuYWx0ZXJuYXRlOyAvLyBXZSBuZWVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoaXMgcm9vdCBoYXMganVzdCAodW4pbW91bnRlZC5cbiAgICAgICAgLy8gVGhpcyBsb2dpYyBpcyBjb3B5LXBhc3RlZCBmcm9tIHNpbWlsYXIgbG9naWMgaW4gdGhlIERldlRvb2xzIGJhY2tlbmQuXG4gICAgICAgIC8vIElmIHRoaXMgYnJlYWtzIHdpdGggc29tZSByZWZhY3RvcmluZywgeW91J2xsIHdhbnQgdG8gdXBkYXRlIERldlRvb2xzIHRvby5cblxuICAgICAgICBpZiAoYWx0ZXJuYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIHdhc01vdW50ZWQgPSBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZSAhPSBudWxsICYmIGFsdGVybmF0ZS5tZW1vaXplZFN0YXRlLmVsZW1lbnQgIT0gbnVsbCAmJiBtb3VudGVkUm9vdHMuaGFzKHJvb3QpO1xuICAgICAgICAgIHZhciBpc01vdW50ZWQgPSBjdXJyZW50Lm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBjdXJyZW50Lm1lbW9pemVkU3RhdGUuZWxlbWVudCAhPSBudWxsO1xuXG4gICAgICAgICAgaWYgKCF3YXNNb3VudGVkICYmIGlzTW91bnRlZCkge1xuICAgICAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cbiAgICAgICAgICAgIG1vdW50ZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgICBmYWlsZWRSb290cy5kZWxldGUocm9vdCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh3YXNNb3VudGVkICYmIGlzTW91bnRlZCkgOyBlbHNlIGlmICh3YXNNb3VudGVkICYmICFpc01vdW50ZWQpIHtcbiAgICAgICAgICAgIC8vIFVubW91bnQgYW4gZXhpc3Rpbmcgcm9vdC5cbiAgICAgICAgICAgIG1vdW50ZWRSb290cy5kZWxldGUocm9vdCk7XG5cbiAgICAgICAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAgICAgICAvLyBXZSdsbCByZW1vdW50IGl0IG9uIGZ1dHVyZSBlZGl0cy5cbiAgICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVscGVyc0J5Um9vdC5kZWxldGUocm9vdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghd2FzTW91bnRlZCAmJiAhaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgICAgLy8gV2UnbGwgcmVtb3VudCBpdCBvbiBmdXR1cmUgZWRpdHMuXG4gICAgICAgICAgICAgIGZhaWxlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cbiAgICAgICAgICBtb3VudGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICB9XG4gICAgICB9IC8vIEFsd2F5cyBjYWxsIHRoZSBkZWNvcmF0ZWQgRGV2VG9vbHMgaG9vay5cblxuXG4gICAgICByZXR1cm4gb2xkT25Db21taXRGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBoYXNVbnJlY292ZXJhYmxlRXJyb3JzKCkge1xuICAvLyBUT0RPOiBkZWxldGUgdGhpcyBhZnRlciByZW1vdmluZyBkZXBlbmRlbmN5IGluIFJOLlxuICByZXR1cm4gZmFsc2U7XG59IC8vIEV4cG9zZWQgZm9yIHRlc3RpbmcuXG5cbmZ1bmN0aW9uIF9nZXRNb3VudGVkUm9vdENvdW50KCkge1xuICB7XG4gICAgcmV0dXJuIG1vdW50ZWRSb290cy5zaXplO1xuICB9XG59IC8vIFRoaXMgaXMgYSB3cmFwcGVyIG92ZXIgbW9yZSBwcmltaXRpdmUgZnVuY3Rpb25zIGZvciBzZXR0aW5nIHNpZ25hdHVyZS5cbi8vIFNpZ25hdHVyZXMgbGV0IHVzIGRlY2lkZSB3aGV0aGVyIHRoZSBIb29rIG9yZGVyIGhhcyBjaGFuZ2VkIG9uIHJlZnJlc2guXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgdHJhbnNmb3JtIHRhcmdldCwgZS5nLjpcbi8vIHZhciBfcyA9IGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKClcbi8vXG4vLyBmdW5jdGlvbiBIZWxsbygpIHtcbi8vICAgY29uc3QgW2Zvbywgc2V0Rm9vXSA9IHVzZVN0YXRlKDApO1xuLy8gICBjb25zdCB2YWx1ZSA9IHVzZUN1c3RvbUhvb2soKTtcbi8vICAgX3MoKTsgLyogQ2FsbCB3aXRob3V0IGFyZ3VtZW50cyB0cmlnZ2VycyBjb2xsZWN0aW5nIHRoZSBjdXN0b20gSG9vayBsaXN0LlxuLy8gICAgICAgICAgKiBUaGlzIGRvZXNuJ3QgaGFwcGVuIGR1cmluZyB0aGUgbW9kdWxlIGV2YWx1YXRpb24gYmVjYXVzZSB3ZVxuLy8gICAgICAgICAgKiBkb24ndCB3YW50IHRvIGNoYW5nZSB0aGUgbW9kdWxlIG9yZGVyIHdpdGggaW5saW5lIHJlcXVpcmVzLlxuLy8gICAgICAgICAgKiBOZXh0IGNhbGxzIGFyZSBub29wcy4gKi9cbi8vICAgcmV0dXJuIDxoMT5IaTwvaDE+O1xuLy8gfVxuLy9cbi8vIC8qIENhbGwgd2l0aCBhcmd1bWVudHMgYXR0YWNoZXMgdGhlIHNpZ25hdHVyZSB0byB0aGUgdHlwZTogKi9cbi8vIF9zKFxuLy8gICBIZWxsbyxcbi8vICAgJ3VzZVN0YXRle1tmb28sIHNldEZvb119KDApJyxcbi8vICAgKCkgPT4gW3VzZUN1c3RvbUhvb2tdLCAvKiBMYXp5IHRvIGF2b2lkIHRyaWdnZXJpbmcgaW5saW5lIHJlcXVpcmVzICovXG4vLyApO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpIHtcbiAge1xuICAgIHZhciBzYXZlZFR5cGU7XG4gICAgdmFyIGhhc0N1c3RvbUhvb2tzO1xuICAgIHZhciBkaWRDb2xsZWN0SG9va3MgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBXZSdyZSBpbiB0aGUgaW5pdGlhbCBwaGFzZSB0aGF0IGFzc29jaWF0ZXMgc2lnbmF0dXJlc1xuICAgICAgICAvLyB3aXRoIHRoZSBmdW5jdGlvbnMuIE5vdGUgdGhpcyBtYXkgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIC8vIGluIEhPQyBjaGFpbnMgbGlrZSBfcyhob2MxKF9zKGhvYzIoX3MoYWN0dWFsRnVuY3Rpb24pKSkpKS5cbiAgICAgICAgaWYgKCFzYXZlZFR5cGUpIHtcbiAgICAgICAgICAvLyBXZSdyZSBpbiB0aGUgaW5uZXJtb3N0IGNhbGwsIHNvIHRoaXMgaXMgdGhlIGFjdHVhbCB0eXBlLlxuICAgICAgICAgIHNhdmVkVHlwZSA9IHR5cGU7XG4gICAgICAgICAgaGFzQ3VzdG9tSG9va3MgPSB0eXBlb2YgZ2V0Q3VzdG9tSG9va3MgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIH0gLy8gU2V0IHRoZSBzaWduYXR1cmUgZm9yIGFsbCB0eXBlcyAoZXZlbiB3cmFwcGVycyEpIGluIGNhc2VcbiAgICAgICAgLy8gdGhleSBoYXZlIG5vIHNpZ25hdHVyZXMgb2YgdGhlaXIgb3duLiBUaGlzIGlzIHRvIHByZXZlbnRcbiAgICAgICAgLy8gcHJvYmxlbXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzIwNDE3LlxuXG5cbiAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCAmJiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSkge1xuICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2UncmUgaW4gdGhlIF9zKCkgY2FsbCB3aXRob3V0IGFyZ3VtZW50cywgd2hpY2ggbWVhbnNcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdGltZSB0byBjb2xsZWN0IGN1c3RvbSBIb29rIHNpZ25hdHVyZXMuXG4gICAgICAgIC8vIE9ubHkgZG8gdGhpcyBvbmNlLiBUaGlzIHBhdGggaXMgaG90IGFuZCBydW5zICppbnNpZGUqIGV2ZXJ5IHJlbmRlciFcbiAgICAgICAgaWYgKCFkaWRDb2xsZWN0SG9va3MgJiYgaGFzQ3VzdG9tSG9va3MpIHtcbiAgICAgICAgICBkaWRDb2xsZWN0SG9va3MgPSB0cnVlO1xuICAgICAgICAgIGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZShzYXZlZFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gaXNMaWtlbHlDb21wb25lbnRUeXBlKHR5cGUpIHtcbiAge1xuICAgIHN3aXRjaCAodHlwZW9mIHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAge1xuICAgICAgICAgIC8vIEZpcnN0LCBkZWFsIHdpdGggY2xhc3Nlcy5cbiAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgLy8gUmVhY3QgY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgb3duTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0eXBlLnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChvd25OYW1lcy5sZW5ndGggPiAxIHx8IG93bk5hbWVzWzBdICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgbG9va3MgbGlrZSBhIGNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuXG5cbiAgICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5fX3Byb3RvX18gIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgLy8gSXQgaGFzIGEgc3VwZXJjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyBQYXNzIHRocm91Z2guXG4gICAgICAgICAgICAvLyBUaGlzIGxvb2tzIGxpa2UgYSByZWd1bGFyIGZ1bmN0aW9uIHdpdGggZW1wdHkgcHJvdG90eXBlLlxuXG4gICAgICAgICAgfSAvLyBGb3IgcGxhaW4gZnVuY3Rpb25zIGFuZCBhcnJvd3MsIHVzZSBuYW1lIGFzIGEgaGV1cmlzdGljLlxuXG5cbiAgICAgICAgICB2YXIgbmFtZSA9IHR5cGUubmFtZSB8fCB0eXBlLmRpc3BsYXlOYW1lO1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgL15bQS1aXS8udGVzdChuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3dpdGNoIChnZXRQcm9wZXJ0eSh0eXBlLCAnJCR0eXBlb2YnKSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICAgIC8vIERlZmluaXRlbHkgUmVhY3QgY29tcG9uZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLl9nZXRNb3VudGVkUm9vdENvdW50ID0gX2dldE1vdW50ZWRSb290Q291bnQ7XG5leHBvcnRzLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSA9IGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZTtcbmV4cG9ydHMuY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0gPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybTtcbmV4cG9ydHMuZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcyA9IGZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM7XG5leHBvcnRzLmdldEZhbWlseUJ5SUQgPSBnZXRGYW1pbHlCeUlEO1xuZXhwb3J0cy5nZXRGYW1pbHlCeVR5cGUgPSBnZXRGYW1pbHlCeVR5cGU7XG5leHBvcnRzLmhhc1VucmVjb3ZlcmFibGVFcnJvcnMgPSBoYXNVbnJlY292ZXJhYmxlRXJyb3JzO1xuZXhwb3J0cy5pbmplY3RJbnRvR2xvYmFsSG9vayA9IGluamVjdEludG9HbG9iYWxIb29rO1xuZXhwb3J0cy5pc0xpa2VseUNvbXBvbmVudFR5cGUgPSBpc0xpa2VseUNvbXBvbmVudFR5cGU7XG5leHBvcnRzLnBlcmZvcm1SZWFjdFJlZnJlc2ggPSBwZXJmb3JtUmVhY3RSZWZyZXNoO1xuZXhwb3J0cy5yZWdpc3RlciA9IHJlZ2lzdGVyO1xuZXhwb3J0cy5zZXRTaWduYXR1cmUgPSBzZXRTaWduYXR1cmU7XG4gIH0pKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/react-refresh/runtime.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/compiled/react-refresh/runtime.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ \"./node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsa0xBQXNFO0FBQ3hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzPzljNmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/react-refresh/runtime.js\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/webpack/" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "static/webpack/" + __webpack_require__.h() + ".react-refresh.hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "ce4ef0de89a7e8aa"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "_N_E:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = __webpack_require__.tu(url);
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; },
/******/ 					createScriptURL: function(url) { return url; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	!function() {
/******/ 		__webpack_require__.tu = function(url) { return __webpack_require__.tt().createScriptURL(url); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"react-refresh": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate_N_E"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js");
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;