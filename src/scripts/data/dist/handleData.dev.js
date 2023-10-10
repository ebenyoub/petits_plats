"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Data =
/*#__PURE__*/
function () {
  function Data() {
    _classCallCheck(this, Data);

    this.ids = [];
  }

  _createClass(Data, [{
    key: "cacheData",
    set: function set(datas) {
      this.data = datas;
    }
  }, {
    key: "allData",
    get: function get() {
      return this.data;
    }
  }, {
    key: "selectedIds",
    set: function set(selected) {
      this.ids = selected;
    },
    get: function get() {
      return this.ids;
    }
  }, {
    key: "allIds",
    get: function get() {
      var ids = this.data.map(function (item) {
        return item.id;
      });
      return ids;
    }
  }]);

  return Data;
}();

var data = new Data();
var _default = data;
exports["default"] = _default;