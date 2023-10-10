"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputClick = void 0;

var inputClick = function inputClick() {
  var wrappers = document.querySelector(".inputs").children;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var input = _step.value;
      var selectBtn = input.querySelector(".select-btn");
      var content = input.querySelector(".content");
      selectBtn.addEventListener("click", function (e) {
        input.classList.toggle("active");
        content.style.display = input.classList.contains("active") ? "block" : "none";
      });
    };

    for (var _iterator = wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

  document.addEventListener("click", function (e) {
    var inputs = document.querySelector(".inputs").children;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var input = _step2.value;

        if (!input.contains(e.target)) {
          input.classList.remove("active");
          input.querySelector(".content").style.display = "none";
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
};

exports.inputClick = inputClick;

var selectTag = function selectTag(tag) {};