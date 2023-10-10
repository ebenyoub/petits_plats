"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var cardEvent = function cardEvent(card) {
  var more = card.querySelector(".more");
  var description = card.querySelector(".description");
  var ingredients = card.querySelector(".ingredients");
  more.addEventListener("click", function () {
    if (!description.classList.contains("grow")) {
      ingredients.style.display = "none";
      description.classList.add("grow");
      more.textContent = "Retour";
    } else {
      ingredients.style.display = "block";
      description.classList.remove("grow");
      more.textContent = "Afficher tout";
    }
  });
};

var _default = cardEvent;
exports["default"] = _default;