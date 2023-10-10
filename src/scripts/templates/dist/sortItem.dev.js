"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _handleData = _interopRequireDefault(require("../data/handleData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getInput = function getInput(object) {
  return "\n            <div class=\"wrapper\">\n                <div class=\"select-btn\">\n                    <span>".concat(object, "</span>\n                    <i class=\"fa-solid fa-chevron-down\"></i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"search\">\n                        <input type=\"text\" name=\"search-").concat(object, "\" id=\"search-").concat(object, "\" />\n                        <i class=\"fa-solid fa-magnifying-glass\"></i>\n                    </div>\n                    <div className=\"select-tag\"></div>\n                    <ul class=\"options\">\n                        <li>Australia</li>\n                        <li>Belgium</li>\n                        <li>Britain</li>\n                        <li>America</li>\n                        <li>China</li>\n                        <li>India</li>\n                    </ul>\n                </div>\n            </div>\n        ");
};

var setSortInputs = function setSortInputs() {
  var inputs = document.querySelector(".inputs");
  var count = document.querySelector(".count");
  inputs.insertAdjacentHTML("beforeend", getInput("Ingrédients"));
  inputs.insertAdjacentHTML("beforeend", getInput("Appareils"));
  inputs.insertAdjacentHTML("beforeend", getInput("Ustensiles"));
  count.textContent = "".concat(_handleData["default"].allIds.length, " recettes");
};

var _default = setSortInputs;
exports["default"] = _default;