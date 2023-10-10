"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cardEvents = _interopRequireDefault(require("../components/cardEvents.js"));

var _handleData = _interopRequireDefault(require("../data/handleData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardItem = function cardItem(card) {
  var imageName = card.image.replace("jpg", "webp");
  var imageSrc = "/src/assets/images/recepes/".concat(imageName);
  var ingredientList = card.ingredients.map(function (item) {
    return "\n        <div class=\"ingredient\">\n            <p>".concat(item.ingredient, "</p>\n            <span>").concat(item.quantity ? item.quantity : '', " ").concat(item.unit ? item.unit : '', "</span>\n        </div>\n    ");
  }).join('');
  return "\n        <article class=\"card__wrapper card".concat(card.id, "\" data-id=\"").concat(card.id, "\">\n            <img src=\"").concat(imageSrc, "\" alt=\"").concat(card.name, "\" />\n            <span class=\"timer\">").concat(card.time, "min</span>\n            <div class=\"card__content\">\n                <h2>").concat(card.name, "</h2>\n                <div class=\"description\">\n                    <h3>Recette</h3>\n                    <p>").concat(card.description, "</p>\n                    <span class=\"more\">Afficher tout</span>\n                </div>\n                <div class=\"ingredients\">\n                    <h3>Ingr\xE9dients</h3>\n                    <div class=\"ingredients__list\">\n                        ").concat(ingredientList, "\n                    </div>\n                </div>\n            </div>\n        </article>\n    ");
};

var setCardItems = function setCardItems() {
  var cardSection = document.querySelector(".card");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var id = _step.value;

      var card = _handleData["default"].allData.find(function (item) {
        return item.id === id;
      });

      cardSection.insertAdjacentHTML("beforeend", cardItem(card));
      (0, _cardEvents["default"])(document.querySelector(".card".concat(id)));
    };

    for (var _iterator = _handleData["default"].selectedIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var _default = setCardItems;
exports["default"] = _default;