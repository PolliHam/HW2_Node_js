"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// parent class
var User =
/*#__PURE__*/
function () {
  function User(name, age, gender, email) {
    _classCallCheck(this, User);

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  _createClass(User, [{
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }, {
    key: "Age",
    get: function get() {
      return this.age;
    },
    set: function set(age) {
      this.age = age;
    }
  }, {
    key: "Gender",
    get: function get() {
      return this.gender;
    },
    set: function set(gender) {
      this.gender = gender;
    }
  }, {
    key: "Email",
    get: function get() {
      return this.gender;
    },
    set: function set(email) {
      this.email = email;
    }
  }]);

  return User;
}(); // subclass


var Worker =
/*#__PURE__*/
function (_User) {
  _inherits(Worker, _User);

  function Worker(name, age, gender, email, position) {
    var _this;

    _classCallCheck(this, Worker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Worker).call(this, name, age, gender, email));
    _this.position = position;
    return _this;
  }

  _createClass(Worker, [{
    key: "Position",
    get: function get() {
      return this.position;
    },
    set: function set(position) {
      this.position = position;
    }
  }]);

  return Worker;
}(User);

module.exports.User = User;
module.exports.Worker = Worker;
var user = new User("Polina", 20, "Female", "ps@mail.com");
var worker = new Worker("Pasha", 20, "Male", "pd@mail.com", "Developer");
console.log(user.toString());
console.log(worker.toString());
//# sourceMappingURL=es5.js.map
