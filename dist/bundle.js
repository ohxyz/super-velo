/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/background-dev.png":
/*!***********************************!*\
  !*** ./assets/background-dev.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3870ea4e5f7fd3d05f0bc4cb19710576.png";

/***/ }),

/***/ "./assets/idle.png":
/*!*************************!*\
  !*** ./assets/idle.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/b9c086b8cbc4bf4b831e39247d9b8b5f.png";

/***/ }),

/***/ "./assets/walk.png":
/*!*************************!*\
  !*** ./assets/walk.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/491f0c964bfcc8d693ed38e58d9564f4.png";

/***/ }),

/***/ "./src/animation/animation.js":
/*!************************************!*\
  !*** ./src/animation/animation.js ***!
  \************************************/
/*! exports provided: Animation, SpriteAnimation, AnimationQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteAnimation", function() { return SpriteAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationQueue", function() { return AnimationQueue; });
/* harmony import */ var _sprite_sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprite/sprite.js */ "./src/sprite/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Animation =
/*#__PURE__*/
function () {
  function Animation() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$layer = _ref.layer,
        layer = _ref$layer === void 0 ? null : _ref$layer,
        _ref$interval = _ref.interval,
        interval = _ref$interval === void 0 ? 50 : _ref$interval;

    _classCallCheck(this, Animation);

    this.layer = layer;
    this.animationInterval = interval;
    this.timerId = 0;
    this.isStarted = false;
  } // Todo: create basic functionality for simple animation


  _createClass(Animation, [{
    key: "animate",
    value: function animate() {}
  }, {
    key: "start",
    value: function start() {
      if (this.isStarted) {
        return;
      }

      this.isStarted = true;
      this.animate();
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timerId);
      clearTimeout(this.timerId);
      this.isStarted = false;
    }
  }]);

  return Animation;
}();

var SpriteAnimation =
/*#__PURE__*/
function (_Animation) {
  _inherits(SpriteAnimation, _Animation);

  function SpriteAnimation(_ref2) {
    var _this;

    var _ref2$repeat = _ref2.repeat,
        repeat = _ref2$repeat === void 0 ? true : _ref2$repeat,
        _ref2$spriteImage = _ref2.spriteImage,
        spriteImage = _ref2$spriteImage === void 0 ? null : _ref2$spriteImage,
        _ref2$flip = _ref2.flip,
        flip = _ref2$flip === void 0 ? false : _ref2$flip,
        object = _objectWithoutProperties(_ref2, ["repeat", "spriteImage", "flip"]);

    _classCallCheck(this, SpriteAnimation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SpriteAnimation).call(this, object));
    _this.sliceCount = 0;
    _this.imageSlices = [];
    _this.shouldRepeat = repeat;
    _this.spriteImage = spriteImage;
    _this.shouldFlipImage = flip;

    _this.getImageSlices();

    return _this;
  }

  _createClass(SpriteAnimation, [{
    key: "getImageSlices",
    value: function getImageSlices() {
      if (this.spriteImage === null || this.spriteImage instanceof _sprite_sprite_js__WEBPACK_IMPORTED_MODULE_0__["SpriteImage"] === false) {
        throw new Error('[Velo] SpriteImage not found or not valid.\n');
      }

      this.imageSlices = this.spriteImage.slice();
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      this.layer.shouldFlipImage = this.shouldFlipImage;
      this.timerId = setInterval(function () {
        _this2.layer.imageSlice = _this2.imageSlices[_this2.sliceCount];

        if (_this2.sliceCount < _this2.imageSlices.length - 1) {
          _this2.sliceCount++;
        } else {
          if (_this2.shouldRepeat === false) {
            _this2.stop();
          } else {
            _this2.sliceCount = 0;
          }
        }
      }, this.animationInterval);
    }
  }]);

  return SpriteAnimation;
}(Animation);

var AnimationQueue =
/*#__PURE__*/
function () {
  function AnimationQueue(_ref3) {
    var id = _ref3.id,
        _ref3$priority = _ref3.priority,
        priority = _ref3$priority === void 0 ? 0 : _ref3$priority,
        _ref3$animations = _ref3.animations,
        animations = _ref3$animations === void 0 ? [] : _ref3$animations;

    _classCallCheck(this, AnimationQueue);

    this.id = id;
    this.priority = priority;
    this.animations = animations;
    this.isAllStarted = false;
  }

  _createClass(AnimationQueue, [{
    key: "add",
    value: function add() {
      var _this3 = this;

      for (var _len = arguments.length, animations = new Array(_len), _key = 0; _key < _len; _key++) {
        animations[_key] = arguments[_key];
      }

      animations.forEach(function (animation) {
        _this3.animations.push(animation);
      });
    }
  }, {
    key: "startAll",
    value: function startAll() {
      this.animations.forEach(function (animation) {
        animation.start();
      });
      this.isAllStarted = false;
    }
  }, {
    key: "stopAll",
    value: function stopAll() {
      this.animations.forEach(function (animation) {
        animation.stop();
      });
      this.isAllStarted = false;
    }
  }]);

  return AnimationQueue;
}();
/**
 * 
 * Example of animations collection
 *
 *   this.animations = [
 *
 *       { id: 'anime-1', priority: 2, animation: walkAnimation },
 *       { id: 'anime-2', priority: 0, animation: jumpAnimation }
 *   ]
 */


var AnimationManager =
/*#__PURE__*/
function () {
  function AnimationManager() {
    _classCallCheck(this, AnimationManager);

    this.animationQueue = [];
    this.currentAnimationQueue = null;
    this.currentAnimationId = '';
    this.currentAnimation = null;
  }

  _createClass(AnimationManager, [{
    key: "addQueue",
    value: function addQueue(_ref4) {
      var id = _ref4.id,
          _ref4$priority = _ref4.priority,
          priority = _ref4$priority === void 0 ? 1 : _ref4$priority,
          animation = _ref4.animation;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.animationQueue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _queue = _step.value;

          if (_queue.id === id) {
            throw new Error("[Velo] Animation already exists. Animation ID: ".concat(id, "\n"));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var queue = new AnimationQueue({
        id: id,
        animations: [animation],
        priority: priority
      });
      this.animationQueue.push(queue);
    }
  }, {
    key: "get",
    value: function get(id) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.animationQueue[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var queue = _step2.value;

          if (queue.id === id) {
            return queue;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
    /**
     * Run only one animation in the animations array. When the method is called, the current 
     * running animation must be stopped, unless it has a higher priority.
     *
     */

  }, {
    key: "runOne",
    value: function runOne(_ref5) {
      var id = _ref5.id,
          _ref5$onFinish = _ref5.onFinish,
          onFinish = _ref5$onFinish === void 0 ? function () {} : _ref5$onFinish;
      var newAnimationQueue = this.get(id);

      if (newAnimationQueue === null) {
        throw new Error("[Velo] Animation (ID: ".concat(id, ") not found.\n"));
      }

      if (this.currentAnimationQueue !== null && this.currentAnimationQueue.id !== id && this.currentAnimationQueue.isAllStarted) {
        // When new animation queue's priority is lower(>) than the current one.
        if (newAnimationQueue.priority > this.currentAnimationQueue.priority) {
          return;
        } else {
          this.currentAnimationQueue.stopAll();
        }
      }

      newAnimationQueue.animation.start(onFinish);
      this.currentAnimationQueue = newAnimationQueue;
      return newAnimationQueue;
    }
    /**
     * Stop current animation and start a new animation.
     * When the method called, it will do nothing if the current animation is still running.
     *
     */

  }, {
    key: "runOnlyFinish",
    value: function runOnlyFinish(id, onFinish) {
      var newAnimationQueue = this.get(id);

      if (newAnimationQueue === null) {
        throw new Error("[Velo] Animation (ID: ".concat(id, ") not found.\n"));
      }

      if (this.currentAnimationQueue !== null && this.currentAnimationQueue.id !== id) {
        if (this.currentAnimationQueue.isAllStarted && newAnimationQueue.priority < this.currentAnimationQueue.priority) {
          this.currentAnimationQueue.stopAll();
        }
      }

      if (this.currentAnimationQueue.isAllStarted) {
        return this.currentAnimationQueue;
      } else {
        newAnimationQueue.startAll(onFinish);
        this.currentAnimationQueue = newAnimationQueue;
        return this.currentAnimationQueue;
      }
    }
  }]);

  return AnimationManager;
}();



/***/ }),

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/*! exports provided: UP, RIGHT, DOWN, LEFT, REFRESH_RATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_RATE", function() { return REFRESH_RATE; });
var UP = 0;
var RIGHT = 1;
var DOWN = 2;
var LEFT = 3;
var REFRESH_RATE = 60;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ "./src/global.js");
/* harmony import */ var _layer_layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer/layer.js */ "./src/layer/layer.js");
/* harmony import */ var _sprite_sprite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprite/sprite.js */ "./src/sprite/sprite.js");
/* harmony import */ var _animation_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation/animation.js */ "./src/animation/animation.js");
/* harmony import */ var _assets_background_dev_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/background-dev.png */ "./assets/background-dev.png");
/* harmony import */ var _assets_background_dev_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_background_dev_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_walk_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/walk.png */ "./assets/walk.png");
/* harmony import */ var _assets_walk_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_walk_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_idle_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/idle.png */ "./assets/idle.png");
/* harmony import */ var _assets_idle_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_idle_png__WEBPACK_IMPORTED_MODULE_6__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var gameElement = document.getElementById('game');
gameElement.width = 960;
gameElement.height = 480;
var gameContext = gameElement.getContext('2d');
var backgroundImage = new Image();
backgroundImage.src = _assets_background_dev_png__WEBPACK_IMPORTED_MODULE_4___default.a;

var BackgroundLayer =
/*#__PURE__*/
function (_Layer) {
  _inherits(BackgroundLayer, _Layer);

  function BackgroundLayer() {
    _classCallCheck(this, BackgroundLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(BackgroundLayer).apply(this, arguments));
  }

  _createClass(BackgroundLayer, [{
    key: "draw",
    value: function draw(context) {
      var pattern = context.createPattern(backgroundImage, 'repeat');
      context.fillStyle = pattern;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return BackgroundLayer;
}(_layer_layer_js__WEBPACK_IMPORTED_MODULE_1__["Layer"]);

var backgroundLayer = new BackgroundLayer({
  id: 'background',
  x: 0,
  y: 0,
  zIndex: 0,
  width: 960,
  height: 480,
  context: gameContext
});
var walkImage = new Image();
walkImage.src = _assets_walk_png__WEBPACK_IMPORTED_MODULE_5___default.a;
var idleImage = new Image();
idleImage.src = _assets_idle_png__WEBPACK_IMPORTED_MODULE_6___default.a;
var walkSpriteImage = new _sprite_sprite_js__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]({
  image: walkImage,
  sliceWidth: 196,
  sliceHeight: 197.5,
  matrix: [4, 4]
});
var idleSpriteImage = new _sprite_sprite_js__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]({
  image: idleImage,
  sliceWidth: 196,
  sliceHeight: 197.5,
  matrix: [4, 5]
});
var veloLayer = new _layer_layer_js__WEBPACK_IMPORTED_MODULE_1__["ImageLayer"]({
  id: 'velo',
  x: 64,
  y: 64,
  zIndex: 2,
  width: 196,
  height: 197.5,
  context: gameContext
});

var MoveAnimation =
/*#__PURE__*/
function (_Animation) {
  _inherits(MoveAnimation, _Animation);

  function MoveAnimation(_ref) {
    var _this;

    var _ref$direction = _ref.direction,
        direction = _ref$direction === void 0 ? _global_js__WEBPACK_IMPORTED_MODULE_0__["LEFT"] : _ref$direction,
        object = _objectWithoutProperties(_ref, ["direction"]);

    _classCallCheck(this, MoveAnimation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoveAnimation).call(this, object));
    _this.direction = direction;
    return _this;
  }

  _createClass(MoveAnimation, [{
    key: "animate",
    value: function animate() {
      if (this.direction === _global_js__WEBPACK_IMPORTED_MODULE_0__["LEFT"]) {
        this.layer.x -= 5;
      } else if (this.direction === _global_js__WEBPACK_IMPORTED_MODULE_0__["RIGHT"]) {
        this.layer.x += 5;
      }

      this.isStarted = false;
    }
  }]);

  return MoveAnimation;
}(_animation_animation_js__WEBPACK_IMPORTED_MODULE_3__["Animation"]);

var aq = new _animation_animation_js__WEBPACK_IMPORTED_MODULE_3__["AnimationQueue"]({
  id: 'walk-left'
});
var a1 = new _animation_animation_js__WEBPACK_IMPORTED_MODULE_3__["SpriteAnimation"]({
  layer: veloLayer,
  spriteImage: walkSpriteImage
});
var a2 = new MoveAnimation({
  layer: veloLayer,
  direction: _global_js__WEBPACK_IMPORTED_MODULE_0__["LEFT"]
});
aq.add(a1, a2);
var aq2 = new _animation_animation_js__WEBPACK_IMPORTED_MODULE_3__["AnimationQueue"]({
  id: 'walk-right'
});
var a3 = new _animation_animation_js__WEBPACK_IMPORTED_MODULE_3__["SpriteAnimation"]({
  layer: veloLayer,
  flip: true,
  spriteImage: walkSpriteImage
});
var a4 = new MoveAnimation({
  layer: veloLayer,
  direction: _global_js__WEBPACK_IMPORTED_MODULE_0__["RIGHT"]
});
aq2.add(a3, a4);
var lm = new _layer_layer_js__WEBPACK_IMPORTED_MODULE_1__["LayerManager"](gameContext);
lm.add(backgroundLayer);
lm.add(veloLayer);
lm.init();
document.body.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'a') {
    aq2.stopAll();
    aq.startAll();
  } else if (event.key === 'd') {
    aq.stopAll();
    aq2.startAll();
  }
});

/***/ }),

/***/ "./src/layer/layer.js":
/*!****************************!*\
  !*** ./src/layer/layer.js ***!
  \****************************/
/*! exports provided: Layer, ImageLayer, LayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLayer", function() { return ImageLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerManager", function() { return LayerManager; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Layer module
 */
var Layer =
/*#__PURE__*/
function () {
  function Layer(_ref) {
    var id = _ref.id,
        x = _ref.x,
        y = _ref.y,
        zIndex = _ref.zIndex,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Layer);

    this.id = id;
    this.x = x;
    this.y = y;
    this.zIndex = zIndex;
    this.width = width;
    this.height = height;
  }

  _createClass(Layer, [{
    key: "moveTo",
    value: function moveTo(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "draw",
    value: function draw(context) {}
  }]);

  return Layer;
}();

var ImageLayer =
/*#__PURE__*/
function (_Layer) {
  _inherits(ImageLayer, _Layer);

  function ImageLayer(_ref2) {
    var _this;

    var _ref2$imageSlice = _ref2.imageSlice,
        imageSlice = _ref2$imageSlice === void 0 ? null : _ref2$imageSlice,
        _ref2$flip = _ref2.flip,
        flip = _ref2$flip === void 0 ? false : _ref2$flip,
        object = _objectWithoutProperties(_ref2, ["imageSlice", "flip"]);

    _classCallCheck(this, ImageLayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageLayer).call(this, object));
    _this.imageSlice = imageSlice;
    _this.shouldFlipImage = flip;
    return _this;
  }

  _createClass(ImageLayer, [{
    key: "draw",
    value: function draw(context) {
      if (this.imageSlice === null) {
        return;
      }

      if (this.shouldFlipImage === true) {
        context.translate(this.width + this.x * 2, 0);
        context.scale(-1, 1);
      } else {
        context.translate(0, 0);
        context.scale(1, 1);
      } // context.fillStyle = 'green';
      // context.fillRect( this.x, this.y, this.width, this.height );


      context.drawImage(this.imageSlice.image, this.imageSlice.x, this.imageSlice.y, this.imageSlice.width, this.imageSlice.height, this.x, this.y, this.width, this.height);
    }
  }]);

  return ImageLayer;
}(Layer);

var LayerManager =
/*#__PURE__*/
function () {
  function LayerManager(context) {
    var refreshRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;

    _classCallCheck(this, LayerManager);

    this.context = context;
    this.refreshRate = refreshRate;
    this.layers = [];
    this.timer = 0;
  }
  /**
   * Get a layer by ID
   */


  _createClass(LayerManager, [{
    key: "get",
    value: function get(id) {
      for (var i = 0; i < this.layers.length; i++) {
        if (this.layers[i].id === id) {
          return this.layers[i];
        }
      }

      return null;
    }
  }, {
    key: "sortLayers",
    value: function sortLayers() {
      this.layers.sort(function (a, b) {
        return a.zIndex - b.zIndex;
      });
    }
    /**
     * Add a new layer
     *
     * @returns Newly added layer
     */

  }, {
    key: "add",
    value: function add(layer) {
      this.layers.push(layer);
      this.sortLayers();
      return layer;
    }
  }, {
    key: "paint",
    value: function paint() {
      for (var i = 0; i < this.layers.length; i++) {
        var currentLayer = this.layers[i];
        this.drawLayer(currentLayer);
      }
    }
  }, {
    key: "drawLayer",
    value: function drawLayer(layer) {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      layer.draw(this.context);
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      var INTERVAL = Math.floor(1000 / this.refreshRate);
      var count = 0;
      this.timer = setInterval(function () {
        count++;

        _this2.paint();
      }, INTERVAL);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timer);
    }
  }]);

  return LayerManager;
}();



/***/ }),

/***/ "./src/sprite/sprite.js":
/*!******************************!*\
  !*** ./src/sprite/sprite.js ***!
  \******************************/
/*! exports provided: SpriteImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteImage", function() { return SpriteImage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Sprite
 */
var SpriteImage =
/*#__PURE__*/
function () {
  function SpriteImage(_ref) {
    var image = _ref.image,
        sliceWidth = _ref.sliceWidth,
        sliceHeight = _ref.sliceHeight,
        matrix = _ref.matrix,
        range = _ref.range,
        multiple = _ref.multiple;

    _classCallCheck(this, SpriteImage);

    this.image = image;
    this.sliceWidth = sliceWidth;
    this.sliceHeight = sliceHeight;
    this.countInRows = matrix[0];
    this.countInCols = matrix[1];
    this.startIndex = range === undefined ? 0 : range[0];
    this.endIndex = range === undefined ? this.countInRows * this.countInCols - 1 : range[1];
    this.multiple = multiple === undefined ? 1 : multiple;
    this.spriteItems = [];
  }

  _createClass(SpriteImage, [{
    key: "slice",
    value: function slice() {
      for (var i = this.startIndex; i <= this.endIndex; i++) {
        var indexInRow = i % this.countInRows;
        var indexInCol = Math.floor(i / this.countInRows);
        var item = new ImageSlice({
          image: this.image,
          x: this.sliceWidth * indexInRow,
          y: this.sliceHeight * indexInCol,
          width: this.sliceWidth,
          height: this.sliceHeight
        });

        for (var j = 0; j < this.multiple; j++) {
          this.spriteItems.push(item);
        }
      }

      return this.spriteItems;
    }
  }]);

  return SpriteImage;
}();

var ImageSlice = function ImageSlice(_ref2) {
  var image = _ref2.image,
      x = _ref2.x,
      y = _ref2.y,
      width = _ref2.width,
      height = _ref2.height;

  _classCallCheck(this, ImageSlice);

  this.image = image;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2tncm91bmQtZGV2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWRsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dhbGsucG5nIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXllci9sYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlL3Nwcml0ZS5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJsYXllciIsImludGVydmFsIiwiYW5pbWF0aW9uSW50ZXJ2YWwiLCJ0aW1lcklkIiwiaXNTdGFydGVkIiwiYW5pbWF0ZSIsImNsZWFySW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJTcHJpdGVBbmltYXRpb24iLCJyZXBlYXQiLCJzcHJpdGVJbWFnZSIsImZsaXAiLCJvYmplY3QiLCJzbGljZUNvdW50IiwiaW1hZ2VTbGljZXMiLCJzaG91bGRSZXBlYXQiLCJzaG91bGRGbGlwSW1hZ2UiLCJnZXRJbWFnZVNsaWNlcyIsIlNwcml0ZUltYWdlIiwiRXJyb3IiLCJzbGljZSIsInNldEludGVydmFsIiwiaW1hZ2VTbGljZSIsImxlbmd0aCIsInN0b3AiLCJBbmltYXRpb25RdWV1ZSIsImlkIiwicHJpb3JpdHkiLCJhbmltYXRpb25zIiwiaXNBbGxTdGFydGVkIiwiZm9yRWFjaCIsImFuaW1hdGlvbiIsInB1c2giLCJzdGFydCIsIkFuaW1hdGlvbk1hbmFnZXIiLCJhbmltYXRpb25RdWV1ZSIsImN1cnJlbnRBbmltYXRpb25RdWV1ZSIsImN1cnJlbnRBbmltYXRpb25JZCIsImN1cnJlbnRBbmltYXRpb24iLCJxdWV1ZSIsIm9uRmluaXNoIiwibmV3QW5pbWF0aW9uUXVldWUiLCJnZXQiLCJzdG9wQWxsIiwic3RhcnRBbGwiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIkxFRlQiLCJSRUZSRVNIX1JBVEUiLCJnYW1lRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWVDb250ZXh0IiwiZ2V0Q29udGV4dCIsImJhY2tncm91bmRJbWFnZSIsIkltYWdlIiwic3JjIiwiYmFja2dyb3VuZEltYWdlU291cmNlIiwiQmFja2dyb3VuZExheWVyIiwiY29udGV4dCIsInBhdHRlcm4iLCJjcmVhdGVQYXR0ZXJuIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4IiwieSIsIkxheWVyIiwiYmFja2dyb3VuZExheWVyIiwiekluZGV4Iiwid2Fsa0ltYWdlIiwid2Fsa0ltYWdlU291cmNlIiwiaWRsZUltYWdlIiwiaWRsZUltYWdlU291cmNlIiwid2Fsa1Nwcml0ZUltYWdlIiwiaW1hZ2UiLCJzbGljZVdpZHRoIiwic2xpY2VIZWlnaHQiLCJtYXRyaXgiLCJpZGxlU3ByaXRlSW1hZ2UiLCJ2ZWxvTGF5ZXIiLCJJbWFnZUxheWVyIiwiTW92ZUFuaW1hdGlvbiIsImRpcmVjdGlvbiIsImFxIiwiYTEiLCJhMiIsImFkZCIsImFxMiIsImEzIiwiYTQiLCJsbSIsIkxheWVyTWFuYWdlciIsImluaXQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleSIsInRyYW5zbGF0ZSIsInNjYWxlIiwiZHJhd0ltYWdlIiwicmVmcmVzaFJhdGUiLCJsYXllcnMiLCJ0aW1lciIsImkiLCJzb3J0IiwiYSIsImIiLCJzb3J0TGF5ZXJzIiwiY3VycmVudExheWVyIiwiZHJhd0xheWVyIiwic2V0VHJhbnNmb3JtIiwiZHJhdyIsIklOVEVSVkFMIiwiTWF0aCIsImZsb29yIiwiY291bnQiLCJwYWludCIsInJhbmdlIiwibXVsdGlwbGUiLCJjb3VudEluUm93cyIsImNvdW50SW5Db2xzIiwic3RhcnRJbmRleCIsInVuZGVmaW5lZCIsImVuZEluZGV4Iiwic3ByaXRlSXRlbXMiLCJpbmRleEluUm93IiwiaW5kZXhJbkNvbCIsIml0ZW0iLCJJbWFnZVNsaWNlIiwiaiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixxQkFBdUIsaUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsaUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4Qzs7SUFFTUEsUzs7O0FBRUYsdUJBQW9EO0FBQUEsbUZBQUwsRUFBSztBQUFBLDBCQUFyQ0MsS0FBcUM7QUFBQSxRQUFyQ0EsS0FBcUMsMkJBQTdCLElBQTZCO0FBQUEsNkJBQXZCQyxRQUF1QjtBQUFBLFFBQXZCQSxRQUF1Qiw4QkFBWixFQUFZOztBQUFBOztBQUVoRCxTQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRSxpQkFBTCxHQUF5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QixLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLVixDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLZixLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzM4NzBlYTRlNWY3ZmQzZDA1ZjBiYzRjYjE5NzEwNTc2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9iOWMwODZiOGNiYzRiZjRiODMxZTM5MjQ3ZDliOGI1Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNDkxZjBjOTY0YmZjYzhkNjkzZWQzOGU1OGQ5NTY0ZjQucG5nXCI7IiwiaW1wb3J0IHsgU3ByaXRlSW1hZ2UgfSBmcm9tICcuLi9zcHJpdGUvc3ByaXRlLmpzJztcclxuXHJcbmNsYXNzIEFuaW1hdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHsgbGF5ZXIgPSBudWxsLCBpbnRlcnZhbCA9IDUwIH0gPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lcklkID0gMDtcclxuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvZG86IGNyZWF0ZSBiYXNpYyBmdW5jdGlvbmFsaXR5IGZvciBzaW1wbGUgYW5pbWF0aW9uXHJcbiAgICBhbmltYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuIFxyXG4gICAgICAgIGlmICggdGhpcy5pc1N0YXJ0ZWQgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCggdGhpcy50aW1lcklkICk7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLnRpbWVySWQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3ByaXRlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoIHsgcmVwZWF0ID0gdHJ1ZSwgc3ByaXRlSW1hZ2UgPSBudWxsLCBmbGlwID0gZmFsc2UsIC4uLm9iamVjdCB9ICkge1xyXG5cclxuICAgICAgICBzdXBlciggb2JqZWN0ICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpY2VDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNsaWNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvdWxkUmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgICAgICB0aGlzLnNob3VsZEZsaXBJbWFnZSA9IGZsaXA7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0SW1hZ2VTbGljZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVNsaWNlcygpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnNwcml0ZUltYWdlID09PSBudWxsIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUltYWdlIGluc3RhbmNlb2YgU3ByaXRlSW1hZ2UgPT09IGZhbHNlICkge1xyXG5cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCAnW1ZlbG9dIFNwcml0ZUltYWdlIG5vdCBmb3VuZCBvciBub3QgdmFsaWQuXFxuJyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZVNsaWNlcyA9IHRoaXMuc3ByaXRlSW1hZ2Uuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCkge1xyXG5cclxuICAgICAgICB0aGlzLmxheWVyLnNob3VsZEZsaXBJbWFnZSA9IHRoaXMuc2hvdWxkRmxpcEltYWdlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXllci5pbWFnZVNsaWNlID0gdGhpcy5pbWFnZVNsaWNlc1sgdGhpcy5zbGljZUNvdW50IF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2xpY2VDb3VudCA8IHRoaXMuaW1hZ2VTbGljZXMubGVuZ3RoIC0gMSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWNlQ291bnQgKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZFJlcGVhdCA9PT0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpY2VDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcy5hbmltYXRpb25JbnRlcnZhbCApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQW5pbWF0aW9uUXVldWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB7IGlkLCBwcmlvcml0eSA9IDAsIGFuaW1hdGlvbnMgPSBbXSB9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XHJcbiAgICAgICAgdGhpcy5pc0FsbFN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoIC4uLmFuaW1hdGlvbnMgKSB7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaCggYW5pbWF0aW9uID0+IHsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCggYW5pbWF0aW9uICk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRBbGwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKCBhbmltYXRpb24gPT4ge1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KCk7XHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB0aGlzLmlzQWxsU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BBbGwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKCBhbmltYXRpb24gPT4ge1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNBbGxTdGFydGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEV4YW1wbGUgb2YgYW5pbWF0aW9ucyBjb2xsZWN0aW9uXHJcbiAqXHJcbiAqICAgdGhpcy5hbmltYXRpb25zID0gW1xyXG4gKlxyXG4gKiAgICAgICB7IGlkOiAnYW5pbWUtMScsIHByaW9yaXR5OiAyLCBhbmltYXRpb246IHdhbGtBbmltYXRpb24gfSxcclxuICogICAgICAgeyBpZDogJ2FuaW1lLTInLCBwcmlvcml0eTogMCwgYW5pbWF0aW9uOiBqdW1wQW5pbWF0aW9uIH1cclxuICogICBdXHJcbiAqL1xyXG5jbGFzcyBBbmltYXRpb25NYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25RdWV1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvblF1ZXVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uSWQgPSAnJztcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFF1ZXVlKCB7IGlkLCBwcmlvcml0eSA9IDEsIGFuaW1hdGlvbiB9ICkge1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgcXVldWUgb2YgdGhpcy5hbmltYXRpb25RdWV1ZSApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggcXVldWUuaWQgPT09IGlkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggYFtWZWxvXSBBbmltYXRpb24gYWxyZWFkeSBleGlzdHMuIEFuaW1hdGlvbiBJRDogJHtpZH1cXG5gICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBxdWV1ZSA9IG5ldyBBbmltYXRpb25RdWV1ZSgge1xyXG5cclxuICAgICAgICAgICAgaWQ6IGlkLCBcclxuICAgICAgICAgICAgYW5pbWF0aW9uczogWyBhbmltYXRpb24gXSwgXHJcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSBcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUXVldWUucHVzaCggcXVldWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoIGlkICkge1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgcXVldWUgb2YgdGhpcy5hbmltYXRpb25RdWV1ZSApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggcXVldWUuaWQgPT09IGlkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBxdWV1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW4gb25seSBvbmUgYW5pbWF0aW9uIGluIHRoZSBhbmltYXRpb25zIGFycmF5LiBXaGVuIHRoZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgY3VycmVudCBcclxuICAgICAqIHJ1bm5pbmcgYW5pbWF0aW9uIG11c3QgYmUgc3RvcHBlZCwgdW5sZXNzIGl0IGhhcyBhIGhpZ2hlciBwcmlvcml0eS5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHJ1bk9uZSggeyBpZCwgb25GaW5pc2ggPSAoKSA9PiB7fSB9ICkge1xyXG5cclxuICAgICAgICBsZXQgbmV3QW5pbWF0aW9uUXVldWUgPSB0aGlzLmdldCggaWQgKTtcclxuXHJcbiAgICAgICAgaWYgKCBuZXdBbmltYXRpb25RdWV1ZSA9PT0gbnVsbCApIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggYFtWZWxvXSBBbmltYXRpb24gKElEOiAke2lkfSkgbm90IGZvdW5kLlxcbmAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5jdXJyZW50QW5pbWF0aW9uUXVldWUgIT09IG51bGwgXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb25RdWV1ZS5pZCAhPT0gaWQgXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb25RdWV1ZS5pc0FsbFN0YXJ0ZWQgKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gV2hlbiBuZXcgYW5pbWF0aW9uIHF1ZXVlJ3MgcHJpb3JpdHkgaXMgbG93ZXIoPikgdGhhbiB0aGUgY3VycmVudCBvbmUuXHJcbiAgICAgICAgICAgIGlmICggbmV3QW5pbWF0aW9uUXVldWUucHJpb3JpdHkgPiB0aGlzLmN1cnJlbnRBbmltYXRpb25RdWV1ZS5wcmlvcml0eSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uUXVldWUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdBbmltYXRpb25RdWV1ZS5hbmltYXRpb24uc3RhcnQoIG9uRmluaXNoICk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uUXVldWUgPSBuZXdBbmltYXRpb25RdWV1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0FuaW1hdGlvblF1ZXVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcCBjdXJyZW50IGFuaW1hdGlvbiBhbmQgc3RhcnQgYSBuZXcgYW5pbWF0aW9uLlxyXG4gICAgICogV2hlbiB0aGUgbWV0aG9kIGNhbGxlZCwgaXQgd2lsbCBkbyBub3RoaW5nIGlmIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBpcyBzdGlsbCBydW5uaW5nLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcnVuT25seUZpbmlzaCggaWQsIG9uRmluaXNoICkge1xyXG5cclxuICAgICAgICBsZXQgbmV3QW5pbWF0aW9uUXVldWUgPSB0aGlzLmdldCggaWQgKTtcclxuXHJcbiAgICAgICAgaWYgKCBuZXdBbmltYXRpb25RdWV1ZSA9PT0gbnVsbCApIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggYFtWZWxvXSBBbmltYXRpb24gKElEOiAke2lkfSkgbm90IGZvdW5kLlxcbmAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5jdXJyZW50QW5pbWF0aW9uUXVldWUgIT09IG51bGwgXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb25RdWV1ZS5pZCAhPT0gaWQgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuY3VycmVudEFuaW1hdGlvblF1ZXVlLmlzQWxsU3RhcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICYmIG5ld0FuaW1hdGlvblF1ZXVlLnByaW9yaXR5IDwgdGhpcy5jdXJyZW50QW5pbWF0aW9uUXVldWUucHJpb3JpdHkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uUXVldWUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHRoaXMuY3VycmVudEFuaW1hdGlvblF1ZXVlLmlzQWxsU3RhcnRlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBbmltYXRpb25RdWV1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBuZXdBbmltYXRpb25RdWV1ZS5zdGFydEFsbCggb25GaW5pc2ggKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uUXVldWUgPSBuZXdBbmltYXRpb25RdWV1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBbmltYXRpb25RdWV1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblxyXG4gICAgQW5pbWF0aW9uLFxyXG4gICAgU3ByaXRlQW5pbWF0aW9uLFxyXG4gICAgQW5pbWF0aW9uUXVldWVcclxufSIsImNvbnN0IFVQID0gMDtcclxuY29uc3QgUklHSFQgPSAxO1xyXG5jb25zdCBET1dOID0gMjtcclxuY29uc3QgTEVGVCA9IDM7XHJcblxyXG5jb25zdCBSRUZSRVNIX1JBVEUgPSA2MDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBVUCwgXHJcbiAgICBSSUdIVCwgXHJcbiAgICBET1dOLCBcclxuICAgIExFRlQsIFxyXG4gICAgUkVGUkVTSF9SQVRFLFxyXG59IiwiaW1wb3J0IHsgVVAsIFJJR0hULCBET1dOLCBMRUZULCBSRUZSRVNIX1JBVEUgfSBmcm9tICcuL2dsb2JhbC5qcyc7XHJcbmltcG9ydCB7IExheWVyLCBJbWFnZUxheWVyLCBMYXllck1hbmFnZXIgfSBmcm9tICcuL2xheWVyL2xheWVyLmpzJztcclxuaW1wb3J0IHsgU3ByaXRlSW1hZ2UgfSBmcm9tICcuL3Nwcml0ZS9zcHJpdGUuanMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvblF1ZXVlLCBTcHJpdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi9hbmltYXRpb24uanMnO1xyXG5cclxuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNvdXJjZSBmcm9tICcuLi9hc3NldHMvYmFja2dyb3VuZC1kZXYucG5nJztcclxuaW1wb3J0IHdhbGtJbWFnZVNvdXJjZSBmcm9tICcuLi9hc3NldHMvd2Fsay5wbmcnO1xyXG5pbXBvcnQgaWRsZUltYWdlU291cmNlIGZyb20gJy4uL2Fzc2V0cy9pZGxlLnBuZyc7XHJcblxyXG5sZXQgZ2FtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2dhbWUnICk7XHJcbmdhbWVFbGVtZW50LndpZHRoID0gOTYwO1xyXG5nYW1lRWxlbWVudC5oZWlnaHQgPSA0ODA7XHJcblxyXG5sZXQgZ2FtZUNvbnRleHQgPSBnYW1lRWxlbWVudC5nZXRDb250ZXh0KCAnMmQnICk7XHJcblxyXG5sZXQgYmFja2dyb3VuZEltYWdlID0gbmV3IEltYWdlKCk7XHJcbmJhY2tncm91bmRJbWFnZS5zcmMgPSBiYWNrZ3JvdW5kSW1hZ2VTb3VyY2U7XHJcblxyXG5jbGFzcyBCYWNrZ3JvdW5kTGF5ZXIgZXh0ZW5kcyBMYXllciB7XHJcblxyXG4gICAgZHJhdyggY29udGV4dCApIHtcclxuXHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oIGJhY2tncm91bmRJbWFnZSwgJ3JlcGVhdCcgKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCApO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgYmFja2dyb3VuZExheWVyID0gbmV3IEJhY2tncm91bmRMYXllciggeyBcclxuXHJcbiAgICBpZDogJ2JhY2tncm91bmQnLFxyXG4gICAgeDogMCxcclxuICAgIHk6IDAsXHJcbiAgICB6SW5kZXg6IDAsXHJcbiAgICB3aWR0aDogOTYwLFxyXG4gICAgaGVpZ2h0OiA0ODAsXHJcbiAgICBjb250ZXh0OiBnYW1lQ29udGV4dFxyXG59ICk7XHJcblxyXG5cclxubGV0IHdhbGtJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG53YWxrSW1hZ2Uuc3JjID0gd2Fsa0ltYWdlU291cmNlO1xyXG5cclxubGV0IGlkbGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5pZGxlSW1hZ2Uuc3JjID0gaWRsZUltYWdlU291cmNlO1xyXG5cclxubGV0IHdhbGtTcHJpdGVJbWFnZSA9IG5ldyBTcHJpdGVJbWFnZSggeyBcclxuXHJcbiAgICBpbWFnZTogd2Fsa0ltYWdlLFxyXG4gICAgc2xpY2VXaWR0aDogMTk2LFxyXG4gICAgc2xpY2VIZWlnaHQ6IDE5Ny41LFxyXG4gICAgbWF0cml4OiBbIDQsIDQgXVxyXG59ICk7XHJcblxyXG5sZXQgaWRsZVNwcml0ZUltYWdlID0gbmV3IFNwcml0ZUltYWdlKCB7IFxyXG5cclxuICAgIGltYWdlOiBpZGxlSW1hZ2UsXHJcbiAgICBzbGljZVdpZHRoOiAxOTYsXHJcbiAgICBzbGljZUhlaWdodDogMTk3LjUsXHJcbiAgICBtYXRyaXg6IFsgNCwgNSBdXHJcbn0gKTtcclxuXHJcblxyXG5sZXQgdmVsb0xheWVyID0gbmV3IEltYWdlTGF5ZXIoIHtcclxuXHJcbiAgICBpZDogJ3ZlbG8nLFxyXG4gICAgeDogNjQsXHJcbiAgICB5OiA2NCxcclxuICAgIHpJbmRleDogMixcclxuICAgIHdpZHRoOiAxOTYsXHJcbiAgICBoZWlnaHQ6IDE5Ny41LFxyXG4gICAgY29udGV4dDogZ2FtZUNvbnRleHQsXHJcbn0gKTtcclxuXHJcblxyXG5jbGFzcyBNb3ZlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggeyBkaXJlY3Rpb24gPSBMRUZULCAuLi5vYmplY3QgfSApIHtcclxuXHJcbiAgICAgICAgc3VwZXIoIG9iamVjdCApO1xyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZGlyZWN0aW9uID09PSBMRUZUICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXllci54IC09IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCB0aGlzLmRpcmVjdGlvbiA9PT0gUklHSFQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxheWVyLnggKz0gNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBhcSA9IG5ldyBBbmltYXRpb25RdWV1ZSggIHsgaWQ6ICd3YWxrLWxlZnQnIH0gKTtcclxubGV0IGExID0gbmV3IFNwcml0ZUFuaW1hdGlvbiggeyBsYXllcjogdmVsb0xheWVyLCBzcHJpdGVJbWFnZTogd2Fsa1Nwcml0ZUltYWdlIH0gKTtcclxubGV0IGEyID0gbmV3IE1vdmVBbmltYXRpb24oIHsgbGF5ZXI6IHZlbG9MYXllciwgZGlyZWN0aW9uOiBMRUZUIH0gKVxyXG5cclxuYXEuYWRkKCBhMSwgYTIgKTtcclxuXHJcbmxldCBhcTIgPSBuZXcgQW5pbWF0aW9uUXVldWUoICB7IGlkOiAnd2Fsay1yaWdodCcgfSApO1xyXG5sZXQgYTMgPSBuZXcgU3ByaXRlQW5pbWF0aW9uKCB7IGxheWVyOiB2ZWxvTGF5ZXIsIGZsaXA6IHRydWUsIHNwcml0ZUltYWdlOiB3YWxrU3ByaXRlSW1hZ2UgfSApO1xyXG5sZXQgYTQgPSBuZXcgTW92ZUFuaW1hdGlvbiggeyBsYXllcjogdmVsb0xheWVyLCBkaXJlY3Rpb246IFJJR0hUIH0gKVxyXG5cclxuYXEyLmFkZCggYTMsIGE0ICk7XHJcblxyXG5sZXQgbG0gPSBuZXcgTGF5ZXJNYW5hZ2VyKCBnYW1lQ29udGV4dCApO1xyXG5cclxubG0uYWRkKCBiYWNrZ3JvdW5kTGF5ZXIgKTtcclxubG0uYWRkKCB2ZWxvTGF5ZXIgKTtcclxuXHJcbmxtLmluaXQoKTtcclxuXHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBldmVudC5rZXkgKTtcclxuXHJcbiAgICBpZiAoIGV2ZW50LmtleSA9PT0gJ2EnICkge1xyXG5cclxuICAgICAgICBhcTIuc3RvcEFsbCgpO1xyXG4gICAgICAgIGFxLnN0YXJ0QWxsKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggZXZlbnQua2V5ID09PSAnZCcgKSB7XHJcblxyXG4gICAgICAgIGFxLnN0b3BBbGwoKTtcclxuICAgICAgICBhcTIuc3RhcnRBbGwoKTtcclxuICAgIH1cclxufSApOyIsIi8qKlxyXG4gKiBMYXllciBtb2R1bGVcclxuICovXHJcblxyXG5jbGFzcyBMYXllciB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCB7IGlkLCB4LCB5LCB6SW5kZXgsIHdpZHRoLCBoZWlnaHQgfSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IHpJbmRleDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvKCB4LCB5ICkge1xyXG5cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyggY29udGV4dCApIHtcclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJbWFnZUxheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB7IGltYWdlU2xpY2UgPSBudWxsLCBmbGlwID0gZmFsc2UsIC4uLm9iamVjdCB9ICkge1xyXG5cclxuICAgICAgICBzdXBlciggb2JqZWN0ICk7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VTbGljZSA9IGltYWdlU2xpY2U7XHJcbiAgICAgICAgdGhpcy5zaG91bGRGbGlwSW1hZ2UgPSBmbGlwO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoIGNvbnRleHQgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5pbWFnZVNsaWNlID09PSBudWxsICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnNob3VsZEZsaXBJbWFnZSA9PT0gdHJ1ZSApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKCB0aGlzLndpZHRoICsgdGhpcy54ICogMiwgMCApO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNjYWxlKCAtMSwgMSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKCAwLCAwICk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoIDEsIDEgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnRleHQuZmlsbFN0eWxlID0gJ2dyZWVuJztcclxuICAgICAgICAvLyBjb250ZXh0LmZpbGxSZWN0KCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcblxyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2xpY2UuaW1hZ2UsIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2xpY2UueCxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNsaWNlLnksXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTbGljZS53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNsaWNlLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTGF5ZXJNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggY29udGV4dCwgcmVmcmVzaFJhdGUgPSA2MCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnJlZnJlc2hSYXRlID0gcmVmcmVzaFJhdGU7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIGxheWVyIGJ5IElEXHJcbiAgICAgKi9cclxuICAgIGdldCggaWQgKSB7XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaSArKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5sYXllcnNbIGkgXS5pZCA9PT0gaWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzWyBpIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRMYXllcnMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzLnNvcnQoICggYSwgYiApID0+IGEuekluZGV4IC0gYi56SW5kZXggKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIG5ldyBsYXllclxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIE5ld2x5IGFkZGVkIGxheWVyXHJcbiAgICAgKi9cclxuICAgIGFkZCggbGF5ZXIgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2goIGxheWVyICk7XHJcbiAgICAgICAgdGhpcy5zb3J0TGF5ZXJzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwYWludCgpIHtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpICsrICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRMYXllciA9IHRoaXMubGF5ZXJzWyBpIF07XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0xheWVyKCBjdXJyZW50TGF5ZXIgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0xheWVyKCBsYXllciApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSggMSwgMCwgMCwgMSwgMCwgMCApO1xyXG4gICAgICAgIGxheWVyLmRyYXcoIHRoaXMuY29udGV4dCApO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IElOVEVSVkFMID0gTWF0aC5mbG9vciggMTAwMCAvIHRoaXMucmVmcmVzaFJhdGUgKTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCAoKSA9PiB7IFxyXG5cclxuICAgICAgICAgICAgY291bnQgKys7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBhaW50KCk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9LCBJTlRFUlZBTCApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHRoaXMudGltZXIgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHJcbiAgICBMYXllcixcclxuICAgIEltYWdlTGF5ZXIsXHJcbiAgICBMYXllck1hbmFnZXJcclxufTsiLCIvKipcclxuICogU3ByaXRlXHJcbiAqL1xyXG5cclxuY2xhc3MgU3ByaXRlSW1hZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB7IGltYWdlLCBzbGljZVdpZHRoLCBzbGljZUhlaWdodCwgbWF0cml4LCByYW5nZSwgbXVsdGlwbGUgfSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2xpY2VXaWR0aCA9IHNsaWNlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zbGljZUhlaWdodCA9IHNsaWNlSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY291bnRJblJvd3MgPSBtYXRyaXhbIDAgXTtcclxuICAgICAgICB0aGlzLmNvdW50SW5Db2xzID0gbWF0cml4WyAxIF07XHJcbiAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gcmFuZ2UgPT09IHVuZGVmaW5lZCA/IDAgOiByYW5nZVsgMCBdO1xyXG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSByYW5nZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jb3VudEluUm93cyAqIHRoaXMuY291bnRJbkNvbHMgLSAxIDogcmFuZ2VbIDEgXTtcclxuICAgICAgICB0aGlzLm11bHRpcGxlID0gbXVsdGlwbGUgPT09IHVuZGVmaW5lZCA/IDEgOiBtdWx0aXBsZTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVJdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNsaWNlKCkge1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IHRoaXMuc3RhcnRJbmRleDsgaSA8PSB0aGlzLmVuZEluZGV4OyBpICsrICApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbmRleEluUm93ID0gaSAlIHRoaXMuY291bnRJblJvd3M7XHJcbiAgICAgICAgICAgIGxldCBpbmRleEluQ29sID0gTWF0aC5mbG9vciggaSAvIHRoaXMuY291bnRJblJvd3MgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gbmV3IEltYWdlU2xpY2UoIHsgXHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnNsaWNlV2lkdGggKiBpbmRleEluUm93LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5zbGljZUhlaWdodCAqIGluZGV4SW5Db2wsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zbGljZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNsaWNlSGVpZ2h0XHJcbiAgICAgICAgICAgIH0gKVxyXG5cclxuICAgICAgICAgICAgZm9yICggbGV0IGogPSAwOyBqIDwgdGhpcy5tdWx0aXBsZTsgaiArKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUl0ZW1zLnB1c2goIGl0ZW0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlSXRlbXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEltYWdlU2xpY2UgeyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggeyBpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCB9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHJcbiAgICBTcHJpdGVJbWFnZVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=