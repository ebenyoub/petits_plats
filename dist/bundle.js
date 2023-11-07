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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardEvent = (card) => {\n    const more = card.querySelector(\".more\");\n    const description = card.querySelector(\".description\");\n    const ingredients = card.querySelector(\".ingredients\");\n\n    more.addEventListener(\"click\", () => {\n        if (!description.classList.contains(\"grow\")) {\n            ingredients.style.display = \"none\";\n            description.classList.add(\"grow\");\n            more.textContent = \"Retour\";\n        } else {\n            ingredients.style.display = \"block\";\n            description.classList.remove(\"grow\");\n            more.textContent = \"Afficher tout\";\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardEvent);\n\n//# sourceURL=webpack://petits_plats/./src/scripts/components/cardEvents.js?");

/***/ }),

/***/ "./src/scripts/components/searchEvent.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/searchEvent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_handleData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/handleData.js */ \"./src/scripts/data/handleData.js\");\n/* harmony import */ var _data_handleTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/handleTag.js */ \"./src/scripts/data/handleTag.js\");\n/* harmony import */ var _templates_cardItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/cardItem.js */ \"./src/scripts/templates/cardItem.js\");\n/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functions.js */ \"./src/scripts/utils/functions.js\");\n\n\n\n\n\nconst updateCardSection = (value) => {\n    const cardSection = document.querySelector(\".card\");\n    const count = document.querySelector(\".count\");\n    cardSection.innerHTML = null;\n    _data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initIndex();\n    count.textContent = `${_data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexes.length} recettes`;\n    if (_data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexes.length) {\n        (0,_templates_cardItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else {\n        cardSection.innerHTML = `<p class=\"error-message\">Aucune recette ne contient '${value}'.</p>`;\n    }\n}\n\nconst searchBoxSort = e => {\n    let newIds = [];\n    e.preventDefault();\n    if (e.target.value.length >= 3) {\n        _data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexes.forEach((index) => {\n            if ((0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__.isEnableCard)(_data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].data[index], e.target.value)) {\n                newIds.push(index);\n            }\n        })\n        _data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexes = newIds;\n    } else {\n        _data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexes = _data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ids;\n    }\n    console.log(_data_handleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexes)\n    updateCardSection(e.target.value);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchBoxSort);\n\n\n//# sourceURL=webpack://petits_plats/./src/scripts/components/searchEvent.js?");

/***/ }),

/***/ "./src/scripts/components/sortEvents.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/sortEvents.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputClick: () => (/* binding */ inputClick)\n/* harmony export */ });\nconst inputClick = () => {\n    const wrappers = document.querySelector(\".inputs\").children;\n\n    for (let input of wrappers) {\n        const selectBtn = input.querySelector(\".select-btn\");\n        const content = input.querySelector(\".content\");\n\n        selectBtn.addEventListener(\"click\", (e) => {\n            input.classList.toggle(\"active\");\n            content.style.display = input.classList.contains(\"active\") ? \"block\" : \"none\";\n        });\n    }\n\n    document.addEventListener(\"click\", (e) => {\n        const inputs = document.querySelector(\".inputs\").children;\n\n        for (let input of inputs) {\n            if (!input.contains(e.target)) {\n                // Vérifier si l'élément cliqué possède la classe .close-tag\n                const isCloseTag = e.target.classList.contains(\"close-tag\");\n\n                // Ne fermer que si l'élément cliqué n'est pas .close-tag\n                if (!isCloseTag) {\n                    input.classList.remove(\"active\");\n                    input.querySelector(\".content\").style.display = \"none\";\n                }\n            }\n        }\n    });\n}\n\n\n//# sourceURL=webpack://petits_plats/./src/scripts/components/sortEvents.js?");

/***/ }),

/***/ "./src/scripts/components/tagEvent.js":
/*!********************************************!*\
  !*** ./src/scripts/components/tagEvent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_handleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/handleTag.js */ \"./src/scripts/data/handleTag.js\");\n/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions.js */ \"./src/scripts/utils/functions.js\");\n\n\n\nconst sortWithTag = () => {\n    const options = Array.from(document.querySelector(\".inputs\").children);\n    options.forEach(option => {\n        const input = option.querySelector('input[id^=\"search-\"');\n        const nameList = input.getAttribute(\"name\").split(\"-\")[1];\n        input.addEventListener('input', e => {\n            const newList = _data_handleTag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][nameList].filter(item => {\n                if ((0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_1__.isValueInItem)(item, e.target.value)) {\n                    return true;\n                }\n                return false;\n            })\n            _data_handleTag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]._updateTags(nameList, newList);\n        })\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortWithTag);\n\n//# sourceURL=webpack://petits_plats/./src/scripts/components/tagEvent.js?");

/***/ }),

/***/ "./src/scripts/data/handleData.js":
/*!****************************************!*\
  !*** ./src/scripts/data/handleData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: () => (/* binding */ Card),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Card {\n    constructor() {\n        this._data = [];\n        this._ids = [];\n        this._currentIndex = 0;\n    }\n\n    set data(datas) {\n        this._data = datas;\n    }\n\n    set indexes(selected) {\n        this._ids = selected;\n    }\n\n    get data() {\n        return this._data;\n    }\n\n    get indexes() {\n        return this._ids;\n    }\n\n    get ids() {\n        let allIds = [];\n        for (let i = 0; i < this.data.length; i++) {\n            allIds.push(i);\n        }\n        return allIds;\n    }\n\n    initIndex() {\n        this._currentIndex = 0;\n    }\n\n    getNextCard() {\n        if (this._currentIndex < this.ids.length) {\n            const nextCard = this.data[this.indexes[this._currentIndex]];\n            this._currentIndex += 1;\n            return nextCard;\n        }\n    }\n}\n\nconst card = new Card();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);\n\n\n\n//# sourceURL=webpack://petits_plats/./src/scripts/data/handleData.js?");

/***/ }),

/***/ "./src/scripts/data/handleTag.js":
/*!***************************************!*\
  !*** ./src/scripts/data/handleTag.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_cardItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/cardItem.js */ \"./src/scripts/templates/cardItem.js\");\n/* harmony import */ var _templates_tagItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/tagItem.js */ \"./src/scripts/templates/tagItem.js\");\n/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions.js */ \"./src/scripts/utils/functions.js\");\n/* harmony import */ var _handleData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleData.js */ \"./src/scripts/data/handleData.js\");\n\n\n\n\n\nclass Tag {\n    constructor() {\n        this._ingredients = [];\n        this._appliances = [];\n        this._ustensils = [];\n        this._cachedIngredients = [];\n        this._cachedAppliances = [];\n        this._cachedUstensils = [];\n    }\n\n    get ingredients() {\n        return this._ingredients;\n    }\n\n    get appliances() {\n        return this._appliances;\n    }\n\n    get ustensils() {\n        return this._ustensils;\n    }\n\n    _updateIndexes(nameList) {\n        const newIndexes = [];\n        _handleData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ids.forEach(index => {\n            this[`_cached${(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(nameList)}`].forEach(item => {\n                if (nameList !== \"appliances\") {\n                    if (_handleData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].data[index][`${nameList}`].some(ingredient => ingredient === item)) {\n                        console.log(\"tag = \", item)\n                        newIndexes.push(index);\n                    }\n                } else {\n                    if (_handleData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].data[index][`${nameList}`] === item) {\n                        console.log(\"tag = \", item)\n                        newIndexes.push(index);\n                    }\n                }\n            })\n        })\n        console.log(newIndexes)\n        _handleData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].indexes = newIndexes;\n        (0,_templates_cardItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n\n    _saveTag(nameList, tag) {\n        const tagSection = document.querySelector(`.options-${nameList}`).previousElementSibling;\n        const listArray = this[`_cached${(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(nameList)}`];\n        if (!listArray.some(item => item === tag)) {\n            listArray.push(tag);\n            (0,_templates_tagItem_js__WEBPACK_IMPORTED_MODULE_1__.buildTag)(tag, tagSection);\n            this._updateIndexes(nameList)\n        }\n        console.log(this[`_cached${(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(nameList)}`])\n    }\n\n    _createList(nameList, ul, list) {\n        ul.innerHTML = null;\n        for (let i = 0; i < list.length; i++) {\n            const li = document.createElement(\"li\");\n            li.setAttribute(\"class\", \"tag-list\")\n            li.textContent = list[i];\n            li.addEventListener(\"click\", e => this._saveTag(nameList, list[i]));\n            ul.appendChild(li);\n        }\n    }\n\n    _updateAllTags() {\n        const options = document.querySelectorAll(\".options\");\n        options.forEach(option => {\n            const nameList = option.classList[1].split('-')[1];\n            this._createList(nameList, option, tag[nameList]);\n        })\n    }\n\n    _updateTagList(indexes) {\n        for (let i = 0; i < indexes.length; i++) {\n            const currentCard = _handleData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].data[indexes[i]];\n            for (let j = 0; j < currentCard.ingredients.length; j++) {\n                if (!(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_2__.isValueInList)(this._ingredients, currentCard.ingredients[j].ingredient)) {\n                    this._ingredients.push(currentCard.ingredients[j].ingredient);\n                }\n            }\n            for (let j = 0; j < currentCard.ustensils.length; j++) {\n                if (!(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_2__.isValueInList)(this._ustensils, currentCard.ustensils[j])) {\n                    this._ustensils.push(currentCard.ustensils[j]);\n                }\n            }\n            for (let j = 0; j < currentCard.appliance.length; j++) {\n                if (!(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_2__.isValueInList)(this._appliances, currentCard.appliance)) {\n                    this._appliances.push(currentCard.appliance);\n                }\n            }\n        }\n    }\n\n    init() {\n        this._updateTagList(_handleData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ids)\n        this._updateAllTags();\n    }\n}\n\nconst tag = new Tag();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tag);\n\n//# sourceURL=webpack://petits_plats/./src/scripts/data/handleTag.js?");

/***/ }),

/***/ "./src/scripts/pages/index.js":
/*!************************************!*\
  !*** ./src/scripts/pages/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_sortEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/sortEvents.js */ \"./src/scripts/components/sortEvents.js\");\n/* harmony import */ var _components_searchEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/searchEvent.js */ \"./src/scripts/components/searchEvent.js\");\n/* harmony import */ var _components_tagEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tagEvent.js */ \"./src/scripts/components/tagEvent.js\");\n/* harmony import */ var _templates_sortItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/sortItem.js */ \"./src/scripts/templates/sortItem.js\");\n/* harmony import */ var _templates_cardItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/cardItem.js */ \"./src/scripts/templates/cardItem.js\");\n/* harmony import */ var _data_handleData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/handleData.js */ \"./src/scripts/data/handleData.js\");\n/* harmony import */ var _data_handleTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/handleTag.js */ \"./src/scripts/data/handleTag.js\");\n\n\n\n\n\n\n\n\nconst fetchData = async () => {\n    try {\n        const response = await fetch(\"/src/scripts/data/data.json\");\n        if (!response.ok) {\n            throw new Error(`HTTP error! Status: ${response.status}`);\n        }\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error(\"Une erreur s'est produite lors de la récupération des données : \", error);\n        throw error;\n    }\n}\n\nconst init = async () => {\n    const searchBox = document.getElementById(\"search-main\");\n\n    // initialisation des données des recettes\n    _data_handleData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].data = await fetchData();\n    _data_handleData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].indexes = _data_handleData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ids;\n\n    // création des inputs de recherche avancé\n    (0,_templates_sortItem_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    // initialisation des tags\n    _data_handleTag_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init();\n    (0,_components_sortEvents_js__WEBPACK_IMPORTED_MODULE_0__.inputClick)();\n\n    // génération des cartes\n    (0,_templates_cardItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_components_tagEvent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    searchBox.addEventListener(\"input\", _components_searchEvent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", init);\n\n\n//# sourceURL=webpack://petits_plats/./src/scripts/pages/index.js?");

/***/ }),

/***/ "./src/scripts/templates/cardItem.js":
/*!*******************************************!*\
  !*** ./src/scripts/templates/cardItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_cardEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cardEvents.js */ \"./src/scripts/components/cardEvents.js\");\n/* harmony import */ var _data_handleData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/handleData.js */ \"./src/scripts/data/handleData.js\");\n\n\n\nconst cardSection = document.querySelector(\".card\");\nconst watcher = document.querySelector(\".watcher\");\n\nconst cardItem = (card) => {\n    const imageName = card.image.replace(\"jpg\", \"webp\");\n    const imageSrc = `/src/assets/images/recepes/${imageName}`;\n    const ingredientList = card.ingredients.map(item => `\n        <div class=\"ingredient\">\n            <p>${item.ingredient}</p>\n            <span>${item.quantity ? item.quantity : ''} ${item.unit ? item.unit : ''}</span>\n        </div>\n    `).join('');\n\n    return `\n        <article class=\"card__wrapper card${card.id}\" data-id=\"${card.id}\">\n            <img src=\"${imageSrc}\" width=\"380\" height=\"253\" alt=\"${card.name}\" />\n            <span class=\"timer\">${card.time}min</span>\n            <div class=\"card__content\">\n                <h2>${card.name}</h2>\n                <div class=\"description\">\n                    <h3>Recette</h3>\n                    <p>${card.description}</p>\n                    <span class=\"more\">Afficher tout</span>\n                </div>\n                <div class=\"ingredients\">\n                    <h3>Ingrédients</h3>\n                    <div class=\"ingredients__list\">\n                        ${ingredientList}\n                    </div>\n                </div>\n            </div>\n        </article>\n    `\n}\n\nconst insertCard = (card) => {\n    cardSection.insertAdjacentHTML(\"beforeend\", cardItem(card));\n    (0,_components_cardEvents_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector(`.card${card.id}`));\n}\n\nconst handleIntersect = entries => {\n    if (entries[0].isIntersecting) {\n        const cardToLoad = 10;\n        for (let i = 0; i < cardToLoad; i++) {\n            const nextCard = _data_handleData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getNextCard();\n            nextCard && insertCard(nextCard);\n        }\n    }\n}\n\nconst lazyLoad = () => new IntersectionObserver(handleIntersect).observe(watcher);\n\nconst setCardItems = () => {\n    lazyLoad();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCardItems);\n\n//# sourceURL=webpack://petits_plats/./src/scripts/templates/cardItem.js?");

/***/ }),

/***/ "./src/scripts/templates/sortItem.js":
/*!*******************************************!*\
  !*** ./src/scripts/templates/sortItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_tagEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tagEvent.js */ \"./src/scripts/components/tagEvent.js\");\n/* harmony import */ var _data_handleData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/handleData.js */ \"./src/scripts/data/handleData.js\");\n\n\n\nconst getInput = (object) => {\n    let listName;\n\n    switch (object) {\n        case \"ingredients\":\n            listName = \"Ingrédients\";\n            break;\n        case \"appliances\":\n            listName = \"Appareils\"\n            break;\n        default:\n            listName= \"Ustensiles\";\n            break;\n    }\n\n    return `\n            <div class=\"wrapper\">\n                <div class=\"select-btn\">\n                    <span>${listName}</span>\n                    <i class=\"fa-solid fa-chevron-down\"></i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"search\">\n                        <input type=\"text\" name=\"search-${object}\" id=\"search-${object}\" />\n                        <i class=\"fa-solid fa-magnifying-glass\"></i>\n                    </div>\n                    <ul class=\"select-tag\"></ul>\n                    <ul class=\"options options-${object}\"></ul>\n                </div>\n            </div>\n        `\n}\n\nconst setSortInputs = () => {\n    const inputs = document.querySelector(\".inputs\");\n    const count = document.querySelector(\".count\");\n    const objects = [\"ingredients\", \"appliances\", \"ustensils\"];\n\n    // objects.forEach(object => inputs.insertAdjacentHTML(\"beforeend\", getInput(object)));\n    inputs.insertAdjacentHTML(\"beforeend\", getInput(\"ingredients\"));\n    inputs.insertAdjacentHTML(\"beforeend\", getInput(\"appliances\"));\n    inputs.insertAdjacentHTML(\"beforeend\", getInput(\"ustensils\"));\n    count.textContent = `${_data_handleData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ids.length} recettes`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setSortInputs);\n\n\n//# sourceURL=webpack://petits_plats/./src/scripts/templates/sortItem.js?");

/***/ }),

/***/ "./src/scripts/templates/tagItem.js":
/*!******************************************!*\
  !*** ./src/scripts/templates/tagItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildTag: () => (/* binding */ buildTag)\n/* harmony export */ });\nfunction buildTag(tag, node) {\n    const li = document.createElement(\"li\");\n    const liContent = document.createElement(\"span\");\n    const removeTag = new Image(17, 17);\n    removeTag.src = \"/src/assets/images/icons/close_tag.svg\";\n    removeTag.setAttribute(\"class\", \"close-tag\");\n    removeTag.setAttribute(\"alt\", \"remove tag\");\n    removeTag.addEventListener(\"click\", e => {\n        e.preventDefault();\n        li.remove();\n    })\n    li.setAttribute(\"class\", \"tag-element\");\n    li.setAttribute(\"title\", tag);\n    liContent.textContent = tag;\n    li.appendChild(liContent);\n    li.appendChild(removeTag);\n    node.appendChild(li);\n}\n\n\n//# sourceURL=webpack://petits_plats/./src/scripts/templates/tagItem.js?");

/***/ }),

/***/ "./src/scripts/utils/functions.js":
/*!****************************************!*\
  !*** ./src/scripts/utils/functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),\n/* harmony export */   isEnableCard: () => (/* binding */ isEnableCard),\n/* harmony export */   isValueInItem: () => (/* binding */ isValueInItem),\n/* harmony export */   isValueInList: () => (/* binding */ isValueInList)\n/* harmony export */ });\nfunction removeAccents(str) {\n    return str.normalize(\"NFD\")\n        .replace(/[\\u0300-\\u036f]/g, \"\")\n        .replace(/[ÀÁÂÃÄÅ]/g, \"A\")\n        .replace(/[àáâãäå]/g, \"a\")\n        .replace(/[Ç]/g, \"C\")\n        .replace(/[ç]/g, \"c\")\n        .replace(/[ÈÉÊË]/g, \"E\")\n        .replace(/[èéêë]/g, \"e\")\n        .replace(/[ÌÍÎÏ]/g, \"I\")\n        .replace(/[ìíîï]/g, \"i\")\n        .replace(/[Ñ]/g, \"N\")\n        .replace(/[ñ]/g, \"n\")\n        .replace(/[ÒÓÔÕÖØ]/g, \"O\")\n        .replace(/[òóôõöø]/g, \"o\")\n        .replace(/[ÙÚÛÜ]/g, \"U\")\n        .replace(/[ùúûü]/g, \"u\")\n        .replace(/[Ý]/g, \"Y\")\n        .replace(/[ýÿ]/g, \"y\");\n}\n\nconst isValueInList = (list, value) => {\n    for (let i = 0; i < list.length; i++) {\n        if (value === list[i]) {\n            return true;\n        }\n    }\n    return false;\n}\n\nconst isValueInItem = (item, value) => {\n    if (removeAccents(item).toLowerCase().includes(removeAccents(value).toLowerCase())\n        || item.toLowerCase().includes(value.toLowerCase())) {\n        return true;\n    }\n    return false;\n}\n\nconst isEnableCard = (card, value) => {\n    const words = value.split(' ')\n        .map(word => word.trim())\n        .filter(word => word);\n    console.log(words)\n\n    return words.every(word => {\n        return (\n            isValueInItem(card.name, word) ||\n            isValueInItem(card.description, word) ||\n            card.ingredients.some(ingredient => isValueInItem(ingredient.ingredient, word))\n        )\n    })\n}\n\nfunction capitalizeFirstLetter(word) {\n    return word.charAt(0).toUpperCase() + word.slice(1);\n}\n\n\n//# sourceURL=webpack://petits_plats/./src/scripts/utils/functions.js?");

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