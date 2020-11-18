/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/_resource.scss":
/*!***********************************!*\
  !*** ./src/styles/_resource.scss ***!
  \***********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/_resource.scss?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_resource_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/_resource.scss */ \"./src/styles/_resource.scss\");\nlet selectedItem = null;\nlet selectedCounterId = null;\n\n\n\nconsole.log(_styles_resource_scss__WEBPACK_IMPORTED_MODULE_0__.resource);\n\nfunction getCounterValue(name) {\n    const counter = document.getElementById(name);\n    return parseInt(counter.value.toString());\n}\n\nfunction setCounterValue(name, value) {\n    const element = document.getElementById(name);\n    if (element) {\n        element.value = value;\n        localStorage.setItem(name, value);\n    }\n}\n\nfunction addCounterValue(resource, value) {\n    const stateValue = getCounterValue(`state_${resource}`);\n    setCounterValue(`state_${resource}`, stateValue + value);\n}\n\nfunction increaseStateByProduction(resource) {\n    const productionValue = getCounterValue(`production_${resource}`);\n    addCounterValue(resource, productionValue)\n}\n\nfunction restoreState(resource) {\n    setCounterValue(`state_${resource}`, 0);\n    setCounterValue(`production_${resource}`, 0);\n}\n\nconst resources = {\n    points: {\n        restoreState(resource) {\n            setCounterValue(`state_${resource}`, 20);\n        },\n        increaseStateByProduction() {\n        },\n    },\n    gold: {\n        restoreState,\n        increaseStateByProduction(resource) {\n            const productionValue = getCounterValue(`production_${resource}`);\n            const pointsValue = getCounterValue(`state_points`);\n            addCounterValue(resource, productionValue + pointsValue);\n        }\n    },\n    steel: {\n        restoreState,\n        increaseStateByProduction\n    },\n    titan: {\n        restoreState,\n        increaseStateByProduction\n    },\n    plant: {\n        restoreState,\n        increaseStateByProduction\n    },\n    energy: {\n        restoreState,\n        increaseStateByProduction(resource) {\n            const stateValue = getCounterValue(`state_${resource}`);\n            setCounterValue(`state_${resource}`, -stateValue);\n            increaseStateByProduction(resource)\n            addCounterValue('heat', stateValue);\n        }\n    },\n    heat: {\n        restoreState,\n        increaseStateByProduction\n    },\n}\n\nwindow.setSelected = function setSelected(event, type, resource) {\n    if (selectedItem !== null) {\n        selectedItem.classList.remove('resource--item__outline');\n    }\n    selectedItem = this;\n    selectedItem.classList.add('resource--item__outline');\n    selectedCounterId = `${type}_${resource}`;\n}\n\nwindow.setValue = function (event, value) {\n    if (selectedCounterId === null) {\n        return;\n    }\n\n    const stateValue = getCounterValue(selectedCounterId);\n    setCounterValue(selectedCounterId, stateValue + value);\n}\n\nwindow.produce = function (event) {\n    for (const [name, resource] of Object.entries(resources)) {\n        resource.increaseStateByProduction(name);\n    }\n}\n\nwindow.resetStates = function (event) {\n    for (const [name, resource] of Object.entries(resources)) {\n        resource.restoreState(name);\n    }\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    for (const [name] of Object.entries(resources)) {\n        setCounterValue(`state_${name}`, localStorage.getItem(`state_${name}`));\n        setCounterValue(`production_${name}`, localStorage.getItem(`production_${name}`));\n    }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/styles/main.scss");
/******/ })()
;