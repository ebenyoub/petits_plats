"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _handleData = _interopRequireDefault(require("../data/handleData.js"));

var _cardItem = _interopRequireDefault(require("../templates/cardItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isValueInTitle = function isValueInTitle(title, value) {
  if (title.toLowerCase().includes(value.toLowerCase())) {
    return true;
  }

  return false;
};

var isValueInDescription = function isValueInDescription(description, value) {
  if (description.toLowerCase().includes(value.toLowerCase())) {
    return true;
  }

  return false;
};

var isValueInIngredients = function isValueInIngredients(ingredients, value) {
  for (var ingredient in ingredients) {
    if (ingredient.toLocaleLowerCase().includes(value.toLowerCase())) {
      console.log(ingredients[ingredient]);
      return true;
    }
  }

  return false;
};

var isEnableCard = function isEnableCard(card, value) {
  var valid = false;
  isValueInTitle(card.name, value) && (valid = true);
  isValueInDescription(card.description, value) && (valid = true);
  isValueInIngredients(card.ingredients, value) && (valid = true);
  return valid;
};

var updateCardSection = function updateCardSection() {
  var cardSection = document.querySelector(".card");
  var count = document.querySelector(".count");
  cardSection.innerHTML = null;
  count.textContent = "".concat(_handleData["default"].selectedIds.length, " recettes");
  (0, _cardItem["default"])();
};

var searchBoxSort = function searchBoxSort(e) {
  var newIds, allData;
  return regeneratorRuntime.async(function searchBoxSort$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newIds = [];
          _context.next = 3;
          return regeneratorRuntime.awrap(_handleData["default"].allData);

        case 3:
          allData = _context.sent;
          e.preventDefault();

          if (e.target.value.length >= 3) {
            allData.forEach(function (card) {
              isEnableCard(card, e.target.value) && newIds.push(card.id);
            });
          }

          _handleData["default"].selectedIds = newIds;
          updateCardSection();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = searchBoxSort;
exports["default"] = _default;