/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/cardEvents.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/cardEvents.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardEvent = (card) => {\n    console.log(card)\n    const more = card.querySelector(\".more\");\n    const description = card.querySelector(\".description\");\n    const ingredients = card.querySelector(\".ingredients\");\n\n    more.addEventListener(\"click\", () => {\n        if (!description.classList.contains(\"grow\")) {\n            ingredients.style.display = \"none\";\n            description.classList.add(\"grow\");\n            more.textContent = \"Moins\";\n        } else {\n            ingredients.style.display = \"block\";\n            description.classList.remove(\"grow\");\n            more.textContent = \"Afficher\";\n\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardEvent);\n\n//# sourceURL=webpack://petits_plats/./src/scripts/components/cardEvents.js?");

/***/ }),

/***/ "./src/scripts/components/sortEvents.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/sortEvents.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sortEvents = () => {\n    const inputClick = () => {\n        const wrappers = document.querySelector(\".inputs\").children;\n\n        for (let input of wrappers) {\n            const selectBtn = input.querySelector(\".select-btn\");\n            const content = input.querySelector(\".content\");\n\n            selectBtn.addEventListener(\"click\", (e) => {\n                input.classList.toggle(\"active\");\n                content.style.display = input.classList.contains(\"active\") ? \"block\" : \"none\";\n            });\n        }\n\n        document.addEventListener(\"click\", (e) => {\n            const inputs = document.querySelector(\".inputs\").children;\n\n            for (let input of inputs) {\n                if (!input.contains(e.target)) {\n                    input.classList.remove(\"active\");\n                    input.querySelector(\".content\").style.display = \"none\";\n                }\n            }\n        });\n    }\n\n    const selectTag = (tag) => {\n        \n    }\n    \n    return {\n        inputClick\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortEvents);\n\n//# sourceURL=webpack://petits_plats/./src/scripts/components/sortEvents.js?");

/***/ }),

/***/ "./src/scripts/pages/index.js":
/*!************************************!*\
  !*** ./src/scripts/pages/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_cardEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cardEvents.js */ \"./src/scripts/components/cardEvents.js\");\n/* harmony import */ var _components_sortEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sortEvents.js */ \"./src/scripts/components/sortEvents.js\");\n/* harmony import */ var _templates_cardItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/cardItem.js */ \"./src/scripts/templates/cardItem.js\");\n/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functions.js */ \"./src/scripts/utils/functions.js\");\n\n\n\n\n\nconst init = () => {\n    const events = (0,_components_sortEvents_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__.setSortInputs)();\n    events.inputClick();\n    (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__.setDataInCache)();\n    (0,_templates_cardItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", init);\n\n\n//# sourceURL=webpack://petits_plats/./src/scripts/pages/index.js?");

/***/ }),

/***/ "./src/scripts/templates/cardItem.js":
/*!*******************************************!*\
  !*** ./src/scripts/templates/cardItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_cardEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cardEvents.js */ \"./src/scripts/components/cardEvents.js\");\n\n\nconst cardItem = (card) => {\n    const imageName = card.image.replace(\"jpg\", \"webp\");\n    const imageSrc = `/src/assets/images/recepes/${imageName}`;\n    const ingredientList = card.ingredients.map(item => `\n        <div class=\"ingredient\">\n            <p>${item.ingredient}</p>\n            <span>${item.quantity ? item.quantity : ''} ${item.unit ? item.unit : ''}</span>\n        </div>\n    `).join('');\n\n    return `\n        <article class=\"card__wrapper card${card.id}\" data-id=\"${card.id}\">\n            <img src=\"${imageSrc}\" alt=\"${card.name}\" />\n            <div class=\"card__content\">\n                <h2>${card.name}</h2>\n                <div class=\"description\">\n                    <h3>Recette</h3>\n                    <p>${card.description}</p>\n                    <span class=\"more\">Afficher ></span>\n                </div>\n                <div class=\"ingredients\">\n                    <h3>Ingrédients</h3>\n                    <div class=\"ingredients__list\">\n                        ${ingredientList}\n                    </div>\n                </div>\n            </div>\n        </article>\n    `\n}\n\nconst setCardItems = (ids) => {\n    ids = [1, 2, 3]\n    const cardSection = document.querySelector(\".card\");\n    const data = JSON.parse(sessionStorage.getItem('data'));\n    console.log(data)\n\n    for (let id of ids) {\n        const card = data.find(item => item.id === id);\n        cardSection.insertAdjacentHTML(\"beforeend\", cardItem(card));\n        (0,_components_cardEvents_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector(`.card${id}`));\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCardItems);\n\n//# sourceURL=webpack://petits_plats/./src/scripts/templates/cardItem.js?");

/***/ }),

/***/ "./src/scripts/templates/sortItem.js":
/*!*******************************************!*\
  !*** ./src/scripts/templates/sortItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sortItem = () => {\n\n    const getInput = (object) => {\n        return `\n            <div class=\"wrapper\">\n                <div class=\"select-btn\">\n                    <span>${object}</span>\n                    <i class=\"fa-solid fa-chevron-down\"></i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"search\">\n                        <input type=\"text\" name=\"search-${object}\" id=\"search-${object}\" />\n                        <i class=\"fa-solid fa-magnifying-glass\"></i>\n                    </div>\n                    <div className=\"select-tag\"></div>\n                    <ul class=\"options\">\n                        <li>Australia</li>\n                        <li>Belgium</li>\n                        <li>Britain</li>\n                        <li>America</li>\n                        <li>China</li>\n                        <li>India</li>\n                    </ul>\n                </div>\n            </div>\n        `\n    }\n\n    return {\n        getInput\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortItem);\n\n//# sourceURL=webpack://petits_plats/./src/scripts/templates/sortItem.js?");

/***/ }),

/***/ "./src/scripts/utils/functions.js":
/*!****************************************!*\
  !*** ./src/scripts/utils/functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setDataInCache: () => (/* binding */ setDataInCache),\n/* harmony export */   setSortInputs: () => (/* binding */ setSortInputs)\n/* harmony export */ });\n/* harmony import */ var _templates_sortItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/sortItem.js */ \"./src/scripts/templates/sortItem.js\");\n\n\nconst setSortInputs = () => {\n    const createInput = (0,_templates_sortItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const inputs = document.querySelector(\".inputs\");\n    const count = document.querySelector(\".count\");\n\n    inputs.insertAdjacentHTML(\"beforeend\", createInput.getInput(\"Ingrédients\"));\n    inputs.insertAdjacentHTML(\"beforeend\", createInput.getInput(\"Appareils\"));\n    inputs.insertAdjacentHTML(\"beforeend\", createInput.getInput(\"Ustensiles\"));\n    count.textContent = \"1500 recettes\";\n}\n\nconst setDataInCache = async () => {\n    if (!sessionStorage.getItem(\"data\")) {\n        const data = await fetch(\"/src/scripts/data/data.json\")\n            .then(response => response.json())\n        console.log(data)\n        sessionStorage.setItem('data', JSON.stringify(data));\n    }\n}\n\n//# sourceURL=webpack://petits_plats/./src/scripts/utils/functions.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pages/index.js");
/******/ 	
/******/ })()
;