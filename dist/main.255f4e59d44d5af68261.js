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
            var stickToLeft = intervals[index].left < intervalGluing && intervals[index].left > 0 && intervals[index].bot < 0 && intervals[index].top < 0;
            var stickToRight = intervals[index].right < intervalGluing && intervals[index].top < 0 && intervals[index].bot < 0 && intervals[index].right > 0;
            var stickToTop = intervals[index].top < intervalGluing && intervals[index].left < 0 && intervals[index].top > 0 && intervals[index].right < 0;
            var stickToBot = intervals[index].bot < intervalGluing && intervals[index].left < 0 && intervals[index].bot > 0 && intervals[index].right < 0;
            if (stickToLeft) {
                select.x = rect.x + rect.width + _constants__WEBPACK_IMPORTED_MODULE_1__.borderWidth / 2;
                (0,_relocate__WEBPACK_IMPORTED_MODULE_2__.relocateToggle)(true);
            }
            else if (stickToRight) {
                select.x = rect.x - select.width - _constants__WEBPACK_IMPORTED_MODULE_1__.borderWidth / 2;
                (0,_relocate__WEBPACK_IMPORTED_MODULE_2__.relocateToggle)(true);
            }
            else if (stickToTop) {
                select.y = rect.y + rect.height + _constants__WEBPACK_IMPORTED_MODULE_1__.borderWidth / 2;
            }
            else if (stickToBot) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0U7QUFDbEQ7QUFDMEM7QUFDZjtBQUNMO0FBQ2tCO0FBQ1o7QUFDZ0I7QUFDaEUsb0RBQVksMkJBQTJCLDJFQUFlLENBQUMsOENBQU07QUFDN0QscURBQWEsNEJBQTRCLDJFQUFlLENBQUMsOENBQU07QUFDL0Q7QUFDQSw2RUFBZ0IsQ0FBQyxtREFBVTtBQUMzQjtBQUNBLElBQUksNERBQVMsQ0FBQyxtREFBVTtBQUN4QixDQUFDO0FBQ0Q7QUFDQSxJQUFJLCtDQUFPO0FBQ1gsSUFBSSwrQ0FBTztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEIsWUFBWSx5RUFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQU87QUFDaEMseUJBQXlCLCtDQUFPO0FBQ2hDLGlDQUFpQyxxREFBYTtBQUM5QztBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxJQUFJLDJEQUFrQjtBQUN0QjtBQUNBLGlCQUFpQiw2REFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QkFBeUIsaURBQVM7QUFDbEM7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL0F1eGlsaWFyeS9jYWxjdWxhdGVBeGlzT2Zmc2V0LnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2F1eGlsaWFyeS9jYWxjdWxhdGVNYXJnaW4udHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvYXV4aWxpYXJ5L2lzQ3Vyc29ySW5SZWN0LnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2F1eGlsaWFyeS9zZXRTdGFydFBvc2l0aW9uLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2NsYXNzZXMvUmVjdGFuZ2xlLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9yZWN0YW5nbGVzLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9jYWxjdWxhdGVJbnRlcnZhbHMudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL2NsZWFyQ2FudmFzLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9pc0ludGVyc2VjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL2lzU3R1Y2sudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL3JlbG9jYXRlLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9yZW5kZXJpbmcudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjYW52YXMge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FudmFzIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgdmFyIGNhbGN1bGF0ZUF4aXNPZmZzZXQgPSBmdW5jdGlvbiAoaW5pdENvdW50LCBjdXJyZW50Q291bnQpIHtcclxuICAgIHJldHVybiBjdXJyZW50Q291bnQgLSBpbml0Q291bnQ7XHJcbn07XHJcbiIsImV4cG9ydCB2YXIgY2FsY3VsYXRlTWFyZ2luID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9iamVjdCkubWFyZ2luKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBNb3VzZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlTWFyZ2luIH0gZnJvbSBcIi4vY2FsY3VsYXRlTWFyZ2luXCI7XHJcbmV4cG9ydCB2YXIgaXNDdXJzb3JJblJlY3QgPSBmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgcmV0dXJuIE1vdXNlLnggPiByZWN0LnggKyBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKSAmJiBNb3VzZS54IDwgcmVjdC53aWR0aCArIHJlY3QueCArIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpICYmIE1vdXNlLnkgPiByZWN0LnkgKyBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKSAmJiBNb3VzZS55IDwgcmVjdC55ICsgcmVjdC5oZWlnaHQgKyBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKTtcclxufTtcclxuIiwiaW1wb3J0IHsgYm9yZGVyV2lkdGggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmV4cG9ydCB2YXIgc2V0U3RhcnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChyZWN0YW5nbGVzKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHJlY3RhbmdsZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgcmVjdGFuZ2xlc1tpXS55ID0gcmVjdGFuZ2xlc1tpIC0gMV0ueSArIHJlY3RhbmdsZXNbaSAtIDFdLmhlaWdodCArIDUgKiBib3JkZXJXaWR0aDtcclxuICAgIHJldHVybiByZWN0YW5nbGVzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBiYXNlQ29sb3IsIGJvcmRlcldpZHRoLCBjdHggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbnZhciBSZWN0YW5nbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWN0YW5nbGUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnggPSA1O1xyXG4gICAgICAgIHRoaXMueSA9IDU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGJhc2VDb2xvcjtcclxuICAgIH1cclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuc3Ryb2tlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcclxuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmNoYW5nZUNvbG9yID0gZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWN0YW5nbGU7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFJlY3RhbmdsZSB9O1xyXG4iLCJleHBvcnQgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuZXhwb3J0IHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuZXhwb3J0IHZhciBNb3VzZSA9IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwXHJcbn07XHJcbmV4cG9ydCB2YXIgYm9yZGVyV2lkdGggPSA1O1xyXG5leHBvcnQgdmFyIGludGVydmFsR2x1aW5nID0gMjA7XHJcbmV4cG9ydCB2YXIgYmFzZUNvbG9yID0gJyNGRkZGRkYnO1xyXG5leHBvcnQgdmFyIGVycm9yQ29sb3IgPSAnI0ZGMDAwMCc7XHJcbmV4cG9ydCB2YXIgc2VsZWN0ZWRDb2xvciA9ICcjRkZGRkNDJztcclxuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSBcIi4vY2xhc3Nlcy9SZWN0YW5nbGVcIjtcclxuZXhwb3J0IHZhciByZWN0YW5nbGVzID0gW25ldyBSZWN0YW5nbGUoMTAwLCA1MCksIG5ldyBSZWN0YW5nbGUoMTUwLCA0MCksIG5ldyBSZWN0YW5nbGUoMTAwLCA2MCksIG5ldyBSZWN0YW5nbGUoMTE1LCAxMjApXTtcclxuIiwiZXhwb3J0IHZhciBjYWxjdWxhdGVJbnRlcnZhbHMgPSBmdW5jdGlvbiAoc2VsZWN0LCByZWN0YW5nbGVzKSB7XHJcbiAgICB2YXIgaW50ZXJ2YWxMZWZ0LCBpbnRlcnZhbFJpZ2h0LCBpbnRlcnZhbFRvcCwgaW50ZXJ2YWxCb3QsIGludGVydmFscyA9IFtdO1xyXG4gICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0LCBpbmRleCkge1xyXG4gICAgICAgIGlmIChzZWxlY3QgIT09IHJlY3QpIHtcclxuICAgICAgICAgICAgaW50ZXJ2YWxMZWZ0ID0gc2VsZWN0LnggLSAocmVjdC54ICsgcmVjdC53aWR0aCk7XHJcbiAgICAgICAgICAgIGludGVydmFsUmlnaHQgPSByZWN0LnggLSAoc2VsZWN0LnggKyBzZWxlY3Qud2lkdGgpO1xyXG4gICAgICAgICAgICBpbnRlcnZhbFRvcCA9IHNlbGVjdC55IC0gKHJlY3QueSArIHJlY3QuaGVpZ2h0KTtcclxuICAgICAgICAgICAgaW50ZXJ2YWxCb3QgPSByZWN0LnkgLSAoc2VsZWN0LnkgKyBzZWxlY3QuaGVpZ2h0KTtcclxuICAgICAgICAgICAgaW50ZXJ2YWxzW2luZGV4XSA9IHsgbGVmdDogaW50ZXJ2YWxMZWZ0LCByaWdodDogaW50ZXJ2YWxSaWdodCwgdG9wOiBpbnRlcnZhbFRvcCwgYm90OiBpbnRlcnZhbEJvdCB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGludGVydmFscztcclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZU1hcmdpbiB9IGZyb20gXCIuLi9hdXhpbGlhcnkvY2FsY3VsYXRlTWFyZ2luXCI7XHJcbmV4cG9ydCB2YXIgY2xlYXJDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoIC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyICogY2FsY3VsYXRlTWFyZ2luKGNhbnZhcykpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVJbnRlcnZhbHMgfSBmcm9tIFwiLi9jYWxjdWxhdGVJbnRlcnZhbHNcIjtcclxuaW1wb3J0IHsgZXJyb3JDb2xvciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgcmVsb2NhdGVUb2dnbGUgfSBmcm9tIFwiLi9yZWxvY2F0ZVwiO1xyXG5leHBvcnQgdmFyIGlzSW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uIChyZWN0YW5nbGVzLCBzZWxlY3QpIHtcclxuICAgIHZhciBpbnRlcnZhbHMgPSBjYWxjdWxhdGVJbnRlcnZhbHMoc2VsZWN0LCByZWN0YW5nbGVzKTtcclxuICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCwgaW5kZXgpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ICE9PSByZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPCAwICYmIGludGVydmFsc1tpbmRleF0uYm90IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnRvcCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS5yaWdodCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJlY3QuY2hhbmdlQ29sb3IoZXJyb3JDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2hhbmdlQ29sb3IoZXJyb3JDb2xvcik7XHJcbiAgICAgICAgICAgICAgICByZWxvY2F0ZVRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJ2YWxzIH0gZnJvbSBcIi4vY2FsY3VsYXRlSW50ZXJ2YWxzXCI7XHJcbmltcG9ydCB7IGJvcmRlcldpZHRoIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyByZWxvY2F0ZVRvZ2dsZSB9IGZyb20gXCIuL3JlbG9jYXRlXCI7XHJcbmV4cG9ydCB2YXIgaXNTdHVjayA9IGZ1bmN0aW9uIChyZWN0YW5nbGVzLCBzZWxlY3QsIGludGVydmFsR2x1aW5nKSB7XHJcbiAgICB2YXIgaW50ZXJ2YWxzID0gY2FsY3VsYXRlSW50ZXJ2YWxzKHNlbGVjdCwgcmVjdGFuZ2xlcyk7XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdCAhPT0gcmVjdCkge1xyXG4gICAgICAgICAgICB2YXIgc3RpY2tUb0xlZnQgPSBpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPCBpbnRlcnZhbEdsdWluZyAmJiBpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPiAwICYmIGludGVydmFsc1tpbmRleF0uYm90IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnRvcCA8IDA7XHJcbiAgICAgICAgICAgIHZhciBzdGlja1RvUmlnaHQgPSBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0IDwgaW50ZXJ2YWxHbHVpbmcgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPCAwICYmIGludGVydmFsc1tpbmRleF0uYm90IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0ID4gMDtcclxuICAgICAgICAgICAgdmFyIHN0aWNrVG9Ub3AgPSBpbnRlcnZhbHNbaW5kZXhdLnRvcCA8IGludGVydmFsR2x1aW5nICYmIGludGVydmFsc1tpbmRleF0ubGVmdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPiAwICYmIGludGVydmFsc1tpbmRleF0ucmlnaHQgPCAwO1xyXG4gICAgICAgICAgICB2YXIgc3RpY2tUb0JvdCA9IGludGVydmFsc1tpbmRleF0uYm90IDwgaW50ZXJ2YWxHbHVpbmcgJiYgaW50ZXJ2YWxzW2luZGV4XS5sZWZ0IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLmJvdCA+IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS5yaWdodCA8IDA7XHJcbiAgICAgICAgICAgIGlmIChzdGlja1RvTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnggPSByZWN0LnggKyByZWN0LndpZHRoICsgYm9yZGVyV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgcmVsb2NhdGVUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RpY2tUb1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QueCA9IHJlY3QueCAtIHNlbGVjdC53aWR0aCAtIGJvcmRlcldpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIHJlbG9jYXRlVG9nZ2xlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0aWNrVG9Ub3ApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdC55ID0gcmVjdC55ICsgcmVjdC5oZWlnaHQgKyBib3JkZXJXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RpY2tUb0JvdCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnkgPSByZWN0LnkgLSBzZWxlY3QuaGVpZ2h0IC0gYm9yZGVyV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgcmVsb2NhdGVUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwidmFyIHJlbG9jYXRlID0gdHJ1ZTtcclxuZXhwb3J0IHZhciByZWxvY2F0ZVRvZ2dsZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgcmVsb2NhdGUgPSB2YWx1ZTtcclxufTtcclxuZXhwb3J0IHZhciBnZXRSZWxvY2F0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiByZWxvY2F0ZTtcclxufTtcclxuIiwiaW1wb3J0IHsgYmFzZUNvbG9yLCBpbnRlcnZhbEdsdWluZywgTW91c2UsIHNlbGVjdGVkQ29sb3IgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGlzU3R1Y2sgfSBmcm9tIFwiLi9pc1N0dWNrXCI7XHJcbmltcG9ydCB7IGlzSW50ZXJzZWN0aW9ucyB9IGZyb20gXCIuL2lzSW50ZXJzZWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjbGVhckNhbnZhcyB9IGZyb20gXCIuL2NsZWFyQ2FudmFzXCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUF4aXNPZmZzZXQgfSBmcm9tIFwiLi4vQXV4aWxpYXJ5L2NhbGN1bGF0ZUF4aXNPZmZzZXRcIjtcclxuZXhwb3J0IHZhciByZW5kZXJpbmcgPSBmdW5jdGlvbiAocmVjdGFuZ2xlcywgc2VsZWN0ZWQsIGluaXRYLCBpbml0WSwgaW5pdE1vdXNlWCwgaW5pdE1vdXNlWSkge1xyXG4gICAgY2xlYXJDYW52YXMoKTtcclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgIHNlbGVjdGVkLnggPSBpbml0WCArIGNhbGN1bGF0ZUF4aXNPZmZzZXQoaW5pdE1vdXNlWCwgTW91c2UueCk7XHJcbiAgICAgICAgc2VsZWN0ZWQueSA9IGluaXRZICsgY2FsY3VsYXRlQXhpc09mZnNldChpbml0TW91c2VZLCBNb3VzZS55KTtcclxuICAgICAgICBpc1N0dWNrKHJlY3RhbmdsZXMsIHNlbGVjdGVkLCBpbnRlcnZhbEdsdWluZyk7XHJcbiAgICAgICAgaXNJbnRlcnNlY3Rpb25zKHJlY3RhbmdsZXMsIHNlbGVjdGVkKTtcclxuICAgICAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICAgICAgaWYgKHJlY3QgIT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZWN0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5kcmF3KHJlY3QuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVjdC5jaGFuZ2VDb2xvcihiYXNlQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZWN0ZWQuc3Ryb2tlKCk7XHJcbiAgICAgICAgc2VsZWN0ZWQuZHJhdyhzZWxlY3RlZC5jb2xvcik7XHJcbiAgICAgICAgc2VsZWN0ZWQuY2hhbmdlQ29sb3Ioc2VsZWN0ZWRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICAgICAgcmVjdC5zdHJva2UoKTtcclxuICAgICAgICAgICAgcmVjdC5kcmF3KHJlY3QuY29sb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYmFzZUNvbG9yLCBjYW52YXMsIE1vdXNlLCBzZWxlY3RlZENvbG9yIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlTWFyZ2luIH0gZnJvbSBcIi4vYXV4aWxpYXJ5L2NhbGN1bGF0ZU1hcmdpblwiO1xyXG5pbXBvcnQgeyByZW5kZXJpbmcgfSBmcm9tIFwiLi9yZW5kZXIvcmVuZGVyaW5nXCI7XHJcbmltcG9ydCB7IHJlY3RhbmdsZXMgfSBmcm9tIFwiLi9yZWN0YW5nbGVzXCI7XHJcbmltcG9ydCB7IGlzQ3Vyc29ySW5SZWN0IH0gZnJvbSBcIi4vYXV4aWxpYXJ5L2lzQ3Vyc29ySW5SZWN0XCI7XHJcbmltcG9ydCB7IGdldFJlbG9jYXRlIH0gZnJvbSBcIi4vcmVuZGVyL3JlbG9jYXRlXCI7XHJcbmltcG9ydCB7IHNldFN0YXJ0UG9zaXRpb24gfSBmcm9tIFwiLi9hdXhpbGlhcnkvc2V0U3RhcnRQb3NpdGlvblwiO1xyXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDIgKiBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKTtcclxuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIgKiBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKTtcclxudmFyIHNlbGVjdGVkID0gbnVsbDtcclxuc2V0U3RhcnRQb3NpdGlvbihyZWN0YW5nbGVzKTtcclxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgcmVuZGVyaW5nKHJlY3RhbmdsZXMsIHNlbGVjdGVkLCBpbml0WCwgaW5pdFksIGluaXRNb3VzZVgsIGluaXRNb3VzZVkpO1xyXG59LCAzMCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgTW91c2UueCA9IGUuY2xpZW50WDtcclxuICAgIE1vdXNlLnkgPSBlLmNsaWVudFk7XHJcbn0pO1xyXG52YXIgaW5pdFgsIGluaXRZLCBpbml0TW91c2VYLCBpbml0TW91c2VZO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgaWYgKGlzQ3Vyc29ySW5SZWN0KHJlY3QpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkID0gcmVjdDtcclxuICAgICAgICAgICAgaW5pdFkgPSByZWN0Lnk7XHJcbiAgICAgICAgICAgIGluaXRYID0gcmVjdC54O1xyXG4gICAgICAgICAgICBpbml0TW91c2VYID0gTW91c2UueDtcclxuICAgICAgICAgICAgaW5pdE1vdXNlWSA9IE1vdXNlLnk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmNoYW5nZUNvbG9yKHNlbGVjdGVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICBpZiAocmVjdCA9PT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFnZXRSZWxvY2F0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZWN0LnggPSBpbml0WDtcclxuICAgICAgICAgICAgICAgIHJlY3QueSA9IGluaXRZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZWxlY3RlZC5jaGFuZ2VDb2xvcihiYXNlQ29sb3IpO1xyXG4gICAgc2VsZWN0ZWQgPSBudWxsO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9