"use strict";

var _sortEvents = require("../components/sortEvents.js");

var _searchEvent = _interopRequireDefault(require("../components/searchEvent.js"));

var _sortItem = _interopRequireDefault(require("../templates/sortItem.js"));

var _cardItem = _interopRequireDefault(require("../templates/cardItem.js"));

var _handleData = _interopRequireDefault(require("../data/handleData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchData = function fetchData() {
  var datas;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("/src/scripts/data/data.json").then(function (response) {
            return response.json();
          }));

        case 2:
          datas = _context.sent;
          return _context.abrupt("return", datas);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var init = function init() {
  var searchBox;
  return regeneratorRuntime.async(function init$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          searchBox = document.getElementById("search");
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetchData());

        case 3:
          _handleData["default"].cacheData = _context2.sent;
          _handleData["default"].selectedIds = _handleData["default"].allIds;
          (0, _sortItem["default"])();
          (0, _sortEvents.inputClick)();
          (0, _cardItem["default"])(_handleData["default"].allIds);
          searchBox.addEventListener("input", _searchEvent["default"]);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", init);