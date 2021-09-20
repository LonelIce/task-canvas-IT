/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0 auto;\r\n}\r\n\r\n#canvas {\r\n    margin: 10px;\r\n    display: block;\r\n    background-color: #FFFFFF;\r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,yBAAyB;AAC7B","sourcesContent":["body {\r\n    margin: 0 auto;\r\n}\r\n\r\n#canvas {\r\n    margin: 10px;\r\n    display: block;\r\n    background-color: #FFFFFF;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Auxiliary/calculateAxisOffset.ts":
/*!**********************************************!*\
  !*** ./src/Auxiliary/calculateAxisOffset.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateAxisOffset": () => (/* binding */ calculateAxisOffset)
/* harmony export */ });
var calculateAxisOffset = function (initCount, currentCount) {
    return currentCount - initCount;
};


/***/ }),

/***/ "./src/auxiliary/calculateMargin.ts":
/*!******************************************!*\
  !*** ./src/auxiliary/calculateMargin.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateMargin": () => (/* binding */ calculateMargin)
/* harmony export */ });
var calculateMargin = function (object) {
    return parseInt(window.getComputedStyle(object).margin);
};


/***/ }),

/***/ "./src/auxiliary/isCursorInRect.ts":
/*!*****************************************!*\
  !*** ./src/auxiliary/isCursorInRect.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCursorInRect": () => (/* binding */ isCursorInRect)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _calculateMargin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateMargin */ "./src/auxiliary/calculateMargin.ts");


var isCursorInRect = function (rect) {
    return _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x > rect.x + (0,_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x < rect.width + rect.x + (0,_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y > rect.y + (0,_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y < rect.y + rect.height + (0,_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
};


/***/ }),

/***/ "./src/auxiliary/setStartPosition.ts":
/*!*******************************************!*\
  !*** ./src/auxiliary/setStartPosition.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStartPosition": () => (/* binding */ setStartPosition)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var setStartPosition = function (rectangles) {
    for (var i = 1; i < rectangles.length; i++)
        rectangles[i].y = rectangles[i - 1].y + rectangles[i - 1].height + 5 * _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth;
    return rectangles;
};


/***/ }),

/***/ "./src/classes/Rectangle.ts":
/*!**********************************!*\
  !*** ./src/classes/Rectangle.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.x = 5;
        this.y = 5;
        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__.baseColor;
    }
    Rectangle.prototype.stroke = function () {
        _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth;
        _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeRect(this.x, this.y, this.width, this.height);
    };
    Rectangle.prototype.draw = function (color) {
        _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = color;
        _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    Rectangle.prototype.changeColor = function (color) {
        this.color = color;
    };
    return Rectangle;
}());



/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "ctx": () => (/* binding */ ctx),
/* harmony export */   "Mouse": () => (/* binding */ Mouse),
/* harmony export */   "borderWidth": () => (/* binding */ borderWidth),
/* harmony export */   "intervalGluing": () => (/* binding */ intervalGluing),
/* harmony export */   "baseColor": () => (/* binding */ baseColor),
/* harmony export */   "errorColor": () => (/* binding */ errorColor),
/* harmony export */   "selectedColor": () => (/* binding */ selectedColor)
/* harmony export */ });
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var Mouse = {
    x: 0,
    y: 0
};
var borderWidth = 5;
var intervalGluing = 20;
var baseColor = '#FFFFFF';
var errorColor = '#FF0000';
var selectedColor = '#FFFFCC';


/***/ }),

/***/ "./src/rectangles.ts":
/*!***************************!*\
  !*** ./src/rectangles.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rectangles": () => (/* binding */ rectangles)
/* harmony export */ });
/* harmony import */ var _classes_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Rectangle */ "./src/classes/Rectangle.ts");

var rectangles = [new _classes_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(100, 50), new _classes_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(150, 40), new _classes_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(100, 60), new _classes_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(115, 120)];


/***/ }),

/***/ "./src/render/calculateIntervals.ts":
/*!******************************************!*\
  !*** ./src/render/calculateIntervals.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateIntervals": () => (/* binding */ calculateIntervals)
/* harmony export */ });
var calculateIntervals = function (select, rectangles) {
    var intervalLeft, intervalRight, intervalTop, intervalBot, intervals = [];
    rectangles.forEach(function (rect, index) {
        if (select !== rect) {
            intervalLeft = select.x - (rect.x + rect.width);
            intervalRight = rect.x - (select.x + select.width);
            intervalTop = select.y - (rect.y + rect.height);
            intervalBot = rect.y - (select.y + select.height);
            intervals[index] = { left: intervalLeft, right: intervalRight, top: intervalTop, bot: intervalBot };
        }
    });
    return intervals;
};


/***/ }),

/***/ "./src/render/clearCanvas.ts":
/*!***********************************!*\
  !*** ./src/render/clearCanvas.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCanvas": () => (/* binding */ clearCanvas)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _auxiliary_calculateMargin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auxiliary/calculateMargin */ "./src/auxiliary/calculateMargin.ts");


var clearCanvas = function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.clearRect(0, 0, window.innerWidth - 2 * (0,_auxiliary_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas), window.innerHeight - 2 * (0,_auxiliary_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas));
};


/***/ }),

/***/ "./src/render/isIntersections.ts":
/*!***************************************!*\
  !*** ./src/render/isIntersections.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIntersections": () => (/* binding */ isIntersections)
/* harmony export */ });
/* harmony import */ var _calculateIntervals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateIntervals */ "./src/render/calculateIntervals.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _relocate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relocate */ "./src/render/relocate.ts");



var isIntersections = function (rectangles, select) {
    var intervals = (0,_calculateIntervals__WEBPACK_IMPORTED_MODULE_0__.calculateIntervals)(select, rectangles);
    rectangles.forEach(function (rect, index) {
        if (select !== rect) {
            if (intervals[index].left < 0 && intervals[index].bot < 0 && intervals[index].top < 0 && intervals[index].right < 0) {
                rect.changeColor(_constants__WEBPACK_IMPORTED_MODULE_1__.errorColor);
                select.changeColor(_constants__WEBPACK_IMPORTED_MODULE_1__.errorColor);
                (0,_relocate__WEBPACK_IMPORTED_MODULE_2__.relocateToggle)(false);
            }
        }
    });
};


/***/ }),

/***/ "./src/render/isStuck.ts":
/*!*******************************!*\
  !*** ./src/render/isStuck.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isStuck": () => (/* binding */ isStuck)
/* harmony export */ });
/* harmony import */ var _calculateIntervals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateIntervals */ "./src/render/calculateIntervals.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _relocate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relocate */ "./src/render/relocate.ts");



var isStuck = function (rectangles, select, intervalGluing) {
    var intervals = (0,_calculateIntervals__WEBPACK_IMPORTED_MODULE_0__.calculateIntervals)(select, rectangles);
    rectangles.forEach(function (rect, index) {
        if (select !== rect) {
            if (intervals[index].left < intervalGluing && intervals[index].left > 0 && intervals[index].bot < 0 && intervals[index].top < 0) {
                select.x = rect.x + rect.width + _constants__WEBPACK_IMPORTED_MODULE_1__.borderWidth / 2;
                (0,_relocate__WEBPACK_IMPORTED_MODULE_2__.relocateToggle)(true);
            }
            else if (intervals[index].right < intervalGluing && intervals[index].top < 0 && intervals[index].bot < 0 && intervals[index].right > 0) {
                select.x = rect.x - select.width - _constants__WEBPACK_IMPORTED_MODULE_1__.borderWidth / 2;
                (0,_relocate__WEBPACK_IMPORTED_MODULE_2__.relocateToggle)(true);
            }
            else if (intervals[index].top < intervalGluing && intervals[index].left < 0 && intervals[index].top > 0 && intervals[index].right < 0) {
                select.y = rect.y + rect.height + _constants__WEBPACK_IMPORTED_MODULE_1__.borderWidth / 2;
            }
            else if (intervals[index].bot < intervalGluing && intervals[index].left < 0 && intervals[index].bot > 0 && intervals[index].right < 0) {
                select.y = rect.y - select.height - _constants__WEBPACK_IMPORTED_MODULE_1__.borderWidth / 2;
                (0,_relocate__WEBPACK_IMPORTED_MODULE_2__.relocateToggle)(true);
            }
        }
    });
};


/***/ }),

/***/ "./src/render/relocate.ts":
/*!********************************!*\
  !*** ./src/render/relocate.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "relocateToggle": () => (/* binding */ relocateToggle),
/* harmony export */   "getRelocate": () => (/* binding */ getRelocate)
/* harmony export */ });
var relocate = true;
var relocateToggle = function (value) {
    relocate = value;
};
var getRelocate = function () {
    return relocate;
};


/***/ }),

/***/ "./src/render/rendering.ts":
/*!*********************************!*\
  !*** ./src/render/rendering.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rendering": () => (/* binding */ rendering)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _isStuck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isStuck */ "./src/render/isStuck.ts");
/* harmony import */ var _isIntersections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isIntersections */ "./src/render/isIntersections.ts");
/* harmony import */ var _clearCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearCanvas */ "./src/render/clearCanvas.ts");
/* harmony import */ var _Auxiliary_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Auxiliary/calculateAxisOffset */ "./src/Auxiliary/calculateAxisOffset.ts");





var rendering = function (rectangles, selected, initX, initY, initMouseX, initMouseY) {
    (0,_clearCanvas__WEBPACK_IMPORTED_MODULE_3__.clearCanvas)();
    if (selected) {
        selected.x = initX + (0,_Auxiliary_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__.calculateAxisOffset)(initMouseX, _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x);
        selected.y = initY + (0,_Auxiliary_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__.calculateAxisOffset)(initMouseY, _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y);
        (0,_isStuck__WEBPACK_IMPORTED_MODULE_1__.isStuck)(rectangles, selected, _constants__WEBPACK_IMPORTED_MODULE_0__.intervalGluing);
        (0,_isIntersections__WEBPACK_IMPORTED_MODULE_2__.isIntersections)(rectangles, selected);
        rectangles.forEach(function (rect) {
            if (rect !== selected) {
                rect.stroke();
                rect.draw(rect.color);
                rect.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.baseColor);
            }
        });
        selected.stroke();
        selected.draw(selected.color);
        selected.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.selectedColor);
    }
    else {
        rectangles.forEach(function (rect) {
            rect.stroke();
            rect.draw(rect.color);
        });
    }
};


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _auxiliary_calculateMargin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auxiliary/calculateMargin */ "./src/auxiliary/calculateMargin.ts");
/* harmony import */ var _render_rendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render/rendering */ "./src/render/rendering.ts");
/* harmony import */ var _rectangles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectangles */ "./src/rectangles.ts");
/* harmony import */ var _auxiliary_isCursorInRect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auxiliary/isCursorInRect */ "./src/auxiliary/isCursorInRect.ts");
/* harmony import */ var _render_relocate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render/relocate */ "./src/render/relocate.ts");
/* harmony import */ var _auxiliary_setStartPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auxiliary/setStartPosition */ "./src/auxiliary/setStartPosition.ts");








_constants__WEBPACK_IMPORTED_MODULE_0__.canvas.width = window.innerWidth - 2 * (0,_auxiliary_calculateMargin__WEBPACK_IMPORTED_MODULE_2__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
_constants__WEBPACK_IMPORTED_MODULE_0__.canvas.height = window.innerHeight - 2 * (0,_auxiliary_calculateMargin__WEBPACK_IMPORTED_MODULE_2__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
var selected = null;
(0,_auxiliary_setStartPosition__WEBPACK_IMPORTED_MODULE_7__.setStartPosition)(_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles);
setInterval(function () {
    (0,_render_rendering__WEBPACK_IMPORTED_MODULE_3__.rendering)(_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles, selected, initX, initY, initMouseX, initMouseY);
}, 30);
window.addEventListener('mousemove', function (e) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x = e.clientX;
    _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y = e.clientY;
});
var initX, initY, initMouseX, initMouseY;
window.addEventListener('mousedown', function () {
    _rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles.forEach(function (rect) {
        if ((0,_auxiliary_isCursorInRect__WEBPACK_IMPORTED_MODULE_5__.isCursorInRect)(rect)) {
            selected = rect;
            initY = rect.y;
            initX = rect.x;
            initMouseX = _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x;
            initMouseY = _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y;
            selected.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.selectedColor);
        }
    });
});
window.addEventListener('mouseup', function () {
    _rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles.forEach(function (rect) {
        if (rect === selected) {
            if (!(0,_render_relocate__WEBPACK_IMPORTED_MODULE_6__.getRelocate)()) {
                rect.x = initX;
                rect.y = initY;
            }
        }
    });
    selected.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.baseColor);
    selected = null;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDTnNFO0FBQ2xEO0FBQzBDO0FBQ2Y7QUFDTDtBQUNrQjtBQUNaO0FBQ2dCO0FBQ2hFLG9EQUFZLDJCQUEyQiwyRUFBZSxDQUFDLDhDQUFNO0FBQzdELHFEQUFhLDRCQUE0QiwyRUFBZSxDQUFDLDhDQUFNO0FBQy9EO0FBQ0EsNkVBQWdCLENBQUMsbURBQVU7QUFDM0I7QUFDQSxJQUFJLDREQUFTLENBQUMsbURBQVU7QUFDeEIsQ0FBQztBQUNEO0FBQ0EsSUFBSSwrQ0FBTztBQUNYLElBQUksK0NBQU87QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksMkRBQWtCO0FBQ3RCLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFPO0FBQ2hDLHlCQUF5QiwrQ0FBTztBQUNoQyxpQ0FBaUMscURBQWE7QUFDOUM7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEI7QUFDQSxpQkFBaUIsNkRBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLGlEQUFTO0FBQ2xDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9BdXhpbGlhcnkvY2FsY3VsYXRlQXhpc09mZnNldC50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9hdXhpbGlhcnkvY2FsY3VsYXRlTWFyZ2luLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2F1eGlsaWFyeS9pc0N1cnNvckluUmVjdC50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9hdXhpbGlhcnkvc2V0U3RhcnRQb3NpdGlvbi50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9jbGFzc2VzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVjdGFuZ2xlcy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9yZW5kZXIvY2FsY3VsYXRlSW50ZXJ2YWxzLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9jbGVhckNhbnZhcy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9yZW5kZXIvaXNJbnRlcnNlY3Rpb25zLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9pc1N0dWNrLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9yZWxvY2F0ZS50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9yZW5kZXIvcmVuZGVyaW5nLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FudmFzIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NhbnZhcyB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHZhciBjYWxjdWxhdGVBeGlzT2Zmc2V0ID0gZnVuY3Rpb24gKGluaXRDb3VudCwgY3VycmVudENvdW50KSB7XHJcbiAgICByZXR1cm4gY3VycmVudENvdW50IC0gaW5pdENvdW50O1xyXG59O1xyXG4iLCJleHBvcnQgdmFyIGNhbGN1bGF0ZU1hcmdpbiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvYmplY3QpLm1hcmdpbik7XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbnZhcywgTW91c2UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZU1hcmdpbiB9IGZyb20gXCIuL2NhbGN1bGF0ZU1hcmdpblwiO1xyXG5leHBvcnQgdmFyIGlzQ3Vyc29ySW5SZWN0ID0gZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgIHJldHVybiBNb3VzZS54ID4gcmVjdC54ICsgY2FsY3VsYXRlTWFyZ2luKGNhbnZhcykgJiYgTW91c2UueCA8IHJlY3Qud2lkdGggKyByZWN0LnggKyBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKSAmJiBNb3VzZS55ID4gcmVjdC55ICsgY2FsY3VsYXRlTWFyZ2luKGNhbnZhcykgJiYgTW91c2UueSA8IHJlY3QueSArIHJlY3QuaGVpZ2h0ICsgY2FsY3VsYXRlTWFyZ2luKGNhbnZhcyk7XHJcbn07XHJcbiIsImltcG9ydCB7IGJvcmRlcldpZHRoIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5leHBvcnQgdmFyIHNldFN0YXJ0UG9zaXRpb24gPSBmdW5jdGlvbiAocmVjdGFuZ2xlcykge1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCByZWN0YW5nbGVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHJlY3RhbmdsZXNbaV0ueSA9IHJlY3RhbmdsZXNbaSAtIDFdLnkgKyByZWN0YW5nbGVzW2kgLSAxXS5oZWlnaHQgKyA1ICogYm9yZGVyV2lkdGg7XHJcbiAgICByZXR1cm4gcmVjdGFuZ2xlcztcclxufTtcclxuIiwiaW1wb3J0IHsgYmFzZUNvbG9yLCBib3JkZXJXaWR0aCwgY3R4IH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG52YXIgUmVjdGFuZ2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVjdGFuZ2xlKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy54ID0gNTtcclxuICAgICAgICB0aGlzLnkgPSA1O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBiYXNlQ29sb3I7XHJcbiAgICB9XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLnN0cm9rZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5jaGFuZ2VDb2xvciA9IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVjdGFuZ2xlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBSZWN0YW5nbGUgfTtcclxuIiwiZXhwb3J0IHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbmV4cG9ydCB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmV4cG9ydCB2YXIgTW91c2UgPSB7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogMFxyXG59O1xyXG5leHBvcnQgdmFyIGJvcmRlcldpZHRoID0gNTtcclxuZXhwb3J0IHZhciBpbnRlcnZhbEdsdWluZyA9IDIwO1xyXG5leHBvcnQgdmFyIGJhc2VDb2xvciA9ICcjRkZGRkZGJztcclxuZXhwb3J0IHZhciBlcnJvckNvbG9yID0gJyNGRjAwMDAnO1xyXG5leHBvcnQgdmFyIHNlbGVjdGVkQ29sb3IgPSAnI0ZGRkZDQyc7XHJcbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gXCIuL2NsYXNzZXMvUmVjdGFuZ2xlXCI7XHJcbmV4cG9ydCB2YXIgcmVjdGFuZ2xlcyA9IFtuZXcgUmVjdGFuZ2xlKDEwMCwgNTApLCBuZXcgUmVjdGFuZ2xlKDE1MCwgNDApLCBuZXcgUmVjdGFuZ2xlKDEwMCwgNjApLCBuZXcgUmVjdGFuZ2xlKDExNSwgMTIwKV07XHJcbiIsImV4cG9ydCB2YXIgY2FsY3VsYXRlSW50ZXJ2YWxzID0gZnVuY3Rpb24gKHNlbGVjdCwgcmVjdGFuZ2xlcykge1xyXG4gICAgdmFyIGludGVydmFsTGVmdCwgaW50ZXJ2YWxSaWdodCwgaW50ZXJ2YWxUb3AsIGludGVydmFsQm90LCBpbnRlcnZhbHMgPSBbXTtcclxuICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCwgaW5kZXgpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ICE9PSByZWN0KSB7XHJcbiAgICAgICAgICAgIGludGVydmFsTGVmdCA9IHNlbGVjdC54IC0gKHJlY3QueCArIHJlY3Qud2lkdGgpO1xyXG4gICAgICAgICAgICBpbnRlcnZhbFJpZ2h0ID0gcmVjdC54IC0gKHNlbGVjdC54ICsgc2VsZWN0LndpZHRoKTtcclxuICAgICAgICAgICAgaW50ZXJ2YWxUb3AgPSBzZWxlY3QueSAtIChyZWN0LnkgKyByZWN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIGludGVydmFsQm90ID0gcmVjdC55IC0gKHNlbGVjdC55ICsgc2VsZWN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIGludGVydmFsc1tpbmRleF0gPSB7IGxlZnQ6IGludGVydmFsTGVmdCwgcmlnaHQ6IGludGVydmFsUmlnaHQsIHRvcDogaW50ZXJ2YWxUb3AsIGJvdDogaW50ZXJ2YWxCb3QgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnRlcnZhbHM7XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVNYXJnaW4gfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L2NhbGN1bGF0ZU1hcmdpblwiO1xyXG5leHBvcnQgdmFyIGNsZWFyQ2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIDIgKiBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKSwgd2luZG93LmlubmVySGVpZ2h0IC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJ2YWxzIH0gZnJvbSBcIi4vY2FsY3VsYXRlSW50ZXJ2YWxzXCI7XHJcbmltcG9ydCB7IGVycm9yQ29sb3IgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHJlbG9jYXRlVG9nZ2xlIH0gZnJvbSBcIi4vcmVsb2NhdGVcIjtcclxuZXhwb3J0IHZhciBpc0ludGVyc2VjdGlvbnMgPSBmdW5jdGlvbiAocmVjdGFuZ2xlcywgc2VsZWN0KSB7XHJcbiAgICB2YXIgaW50ZXJ2YWxzID0gY2FsY3VsYXRlSW50ZXJ2YWxzKHNlbGVjdCwgcmVjdGFuZ2xlcyk7XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdCAhPT0gcmVjdCkge1xyXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWxzW2luZGV4XS5sZWZ0IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLmJvdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPCAwICYmIGludGVydmFsc1tpbmRleF0ucmlnaHQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWN0LmNoYW5nZUNvbG9yKGVycm9yQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNoYW5nZUNvbG9yKGVycm9yQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVsb2NhdGVUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbGN1bGF0ZUludGVydmFscyB9IGZyb20gXCIuL2NhbGN1bGF0ZUludGVydmFsc1wiO1xyXG5pbXBvcnQgeyBib3JkZXJXaWR0aCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgcmVsb2NhdGVUb2dnbGUgfSBmcm9tIFwiLi9yZWxvY2F0ZVwiO1xyXG5leHBvcnQgdmFyIGlzU3R1Y2sgPSBmdW5jdGlvbiAocmVjdGFuZ2xlcywgc2VsZWN0LCBpbnRlcnZhbEdsdWluZykge1xyXG4gICAgdmFyIGludGVydmFscyA9IGNhbGN1bGF0ZUludGVydmFscyhzZWxlY3QsIHJlY3RhbmdsZXMpO1xyXG4gICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0LCBpbmRleCkge1xyXG4gICAgICAgIGlmIChzZWxlY3QgIT09IHJlY3QpIHtcclxuICAgICAgICAgICAgaWYgKGludGVydmFsc1tpbmRleF0ubGVmdCA8IGludGVydmFsR2x1aW5nICYmIGludGVydmFsc1tpbmRleF0ubGVmdCA+IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS5ib3QgPCAwICYmIGludGVydmFsc1tpbmRleF0udG9wIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnggPSByZWN0LnggKyByZWN0LndpZHRoICsgYm9yZGVyV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgcmVsb2NhdGVUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW50ZXJ2YWxzW2luZGV4XS5yaWdodCA8IGludGVydmFsR2x1aW5nICYmIGludGVydmFsc1tpbmRleF0udG9wIDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLmJvdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS5yaWdodCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdC54ID0gcmVjdC54IC0gc2VsZWN0LndpZHRoIC0gYm9yZGVyV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgcmVsb2NhdGVUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW50ZXJ2YWxzW2luZGV4XS50b3AgPCBpbnRlcnZhbEdsdWluZyAmJiBpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPCAwICYmIGludGVydmFsc1tpbmRleF0udG9wID4gMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnkgPSByZWN0LnkgKyByZWN0LmhlaWdodCArIGJvcmRlcldpZHRoIC8gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpbnRlcnZhbHNbaW5kZXhdLmJvdCA8IGludGVydmFsR2x1aW5nICYmIGludGVydmFsc1tpbmRleF0ubGVmdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS5ib3QgPiAwICYmIGludGVydmFsc1tpbmRleF0ucmlnaHQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QueSA9IHJlY3QueSAtIHNlbGVjdC5oZWlnaHQgLSBib3JkZXJXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICByZWxvY2F0ZVRvZ2dsZSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG4iLCJ2YXIgcmVsb2NhdGUgPSB0cnVlO1xyXG5leHBvcnQgdmFyIHJlbG9jYXRlVG9nZ2xlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICByZWxvY2F0ZSA9IHZhbHVlO1xyXG59O1xyXG5leHBvcnQgdmFyIGdldFJlbG9jYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHJlbG9jYXRlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBiYXNlQ29sb3IsIGludGVydmFsR2x1aW5nLCBNb3VzZSwgc2VsZWN0ZWRDb2xvciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNTdHVjayB9IGZyb20gXCIuL2lzU3R1Y2tcIjtcclxuaW1wb3J0IHsgaXNJbnRlcnNlY3Rpb25zIH0gZnJvbSBcIi4vaXNJbnRlcnNlY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNsZWFyQ2FudmFzIH0gZnJvbSBcIi4vY2xlYXJDYW52YXNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlQXhpc09mZnNldCB9IGZyb20gXCIuLi9BdXhpbGlhcnkvY2FsY3VsYXRlQXhpc09mZnNldFwiO1xyXG5leHBvcnQgdmFyIHJlbmRlcmluZyA9IGZ1bmN0aW9uIChyZWN0YW5nbGVzLCBzZWxlY3RlZCwgaW5pdFgsIGluaXRZLCBpbml0TW91c2VYLCBpbml0TW91c2VZKSB7XHJcbiAgICBjbGVhckNhbnZhcygpO1xyXG4gICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgc2VsZWN0ZWQueCA9IGluaXRYICsgY2FsY3VsYXRlQXhpc09mZnNldChpbml0TW91c2VYLCBNb3VzZS54KTtcclxuICAgICAgICBzZWxlY3RlZC55ID0gaW5pdFkgKyBjYWxjdWxhdGVBeGlzT2Zmc2V0KGluaXRNb3VzZVksIE1vdXNlLnkpO1xyXG4gICAgICAgIGlzU3R1Y2socmVjdGFuZ2xlcywgc2VsZWN0ZWQsIGludGVydmFsR2x1aW5nKTtcclxuICAgICAgICBpc0ludGVyc2VjdGlvbnMocmVjdGFuZ2xlcywgc2VsZWN0ZWQpO1xyXG4gICAgICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgICAgICBpZiAocmVjdCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlY3Quc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICByZWN0LmRyYXcocmVjdC5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICByZWN0LmNoYW5nZUNvbG9yKGJhc2VDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxlY3RlZC5zdHJva2UoKTtcclxuICAgICAgICBzZWxlY3RlZC5kcmF3KHNlbGVjdGVkLmNvbG9yKTtcclxuICAgICAgICBzZWxlY3RlZC5jaGFuZ2VDb2xvcihzZWxlY3RlZENvbG9yKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgICAgICByZWN0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICByZWN0LmRyYXcocmVjdC5jb2xvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBiYXNlQ29sb3IsIGNhbnZhcywgTW91c2UsIHNlbGVjdGVkQ29sb3IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVNYXJnaW4gfSBmcm9tIFwiLi9hdXhpbGlhcnkvY2FsY3VsYXRlTWFyZ2luXCI7XHJcbmltcG9ydCB7IHJlbmRlcmluZyB9IGZyb20gXCIuL3JlbmRlci9yZW5kZXJpbmdcIjtcclxuaW1wb3J0IHsgcmVjdGFuZ2xlcyB9IGZyb20gXCIuL3JlY3RhbmdsZXNcIjtcclxuaW1wb3J0IHsgaXNDdXJzb3JJblJlY3QgfSBmcm9tIFwiLi9hdXhpbGlhcnkvaXNDdXJzb3JJblJlY3RcIjtcclxuaW1wb3J0IHsgZ2V0UmVsb2NhdGUgfSBmcm9tIFwiLi9yZW5kZXIvcmVsb2NhdGVcIjtcclxuaW1wb3J0IHsgc2V0U3RhcnRQb3NpdGlvbiB9IGZyb20gXCIuL2F1eGlsaWFyeS9zZXRTdGFydFBvc2l0aW9uXCI7XHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpO1xyXG52YXIgc2VsZWN0ZWQgPSBudWxsO1xyXG5zZXRTdGFydFBvc2l0aW9uKHJlY3RhbmdsZXMpO1xyXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICByZW5kZXJpbmcocmVjdGFuZ2xlcywgc2VsZWN0ZWQsIGluaXRYLCBpbml0WSwgaW5pdE1vdXNlWCwgaW5pdE1vdXNlWSk7XHJcbn0sIDMwKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBNb3VzZS54ID0gZS5jbGllbnRYO1xyXG4gICAgTW91c2UueSA9IGUuY2xpZW50WTtcclxufSk7XHJcbnZhciBpbml0WCwgaW5pdFksIGluaXRNb3VzZVgsIGluaXRNb3VzZVk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICBpZiAoaXNDdXJzb3JJblJlY3QocmVjdCkpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSByZWN0O1xyXG4gICAgICAgICAgICBpbml0WSA9IHJlY3QueTtcclxuICAgICAgICAgICAgaW5pdFggPSByZWN0Lng7XHJcbiAgICAgICAgICAgIGluaXRNb3VzZVggPSBNb3VzZS54O1xyXG4gICAgICAgICAgICBpbml0TW91c2VZID0gTW91c2UueTtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuY2hhbmdlQ29sb3Ioc2VsZWN0ZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIGlmIChyZWN0ID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWdldFJlbG9jYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJlY3QueCA9IGluaXRYO1xyXG4gICAgICAgICAgICAgICAgcmVjdC55ID0gaW5pdFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdGVkLmNoYW5nZUNvbG9yKGJhc2VDb2xvcik7XHJcbiAgICBzZWxlY3RlZCA9IG51bGw7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=