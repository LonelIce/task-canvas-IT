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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0 auto;\r\n}\r\n\r\n#canvas {\r\n    margin: 10px;\r\n    display: block;\r\n    background-color: #fde8d0;\r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,yBAAyB;AAC7B","sourcesContent":["body {\r\n    margin: 0 auto;\r\n}\r\n\r\n#canvas {\r\n    margin: 10px;\r\n    display: block;\r\n    background-color: #fde8d0;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/Rectangle.ts":
/*!*************************************!*\
  !*** ./src/components/Rectangle.ts ***!
  \*************************************/
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
        this.x = 20;
        this.y = 20;
        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__.baseColor;
    }
    Rectangle.prototype.stroke = function (borderWidth) {
        _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = borderWidth;
        _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeRect(this.x - borderWidth / 2, this.y - borderWidth / 2, this.width + borderWidth, this.height + borderWidth);
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

/***/ "./src/components/rectangles.ts":
/*!**************************************!*\
  !*** ./src/components/rectangles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rectangles": () => (/* binding */ rectangles)
/* harmony export */ });
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ "./src/components/Rectangle.ts");

var rectangles = [new _Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(100, 50), new _Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(150, 40), new _Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(100, 60), new _Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(115, 120)];


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
var borderWidth = 6;
var intervalGluing = 40;
var baseColor = '#FFFFFF';
var errorColor = '#FF0000';
var selectedColor = '#FFFFCC';


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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var calculateIntervals = function (select, rectangles) {
    var intervals = [];
    rectangles.forEach(function (rect, index) {
        if (select === rect)
            return;
        intervals[index] = {
            left: select.x - (rect.x + rect.width) - 2 * _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth,
            right: rect.x - (select.x + select.width) - 2 * _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth,
            top: select.y - (rect.y + rect.height) - 2 * _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth,
            bot: rect.y - (select.y + select.height) - 2 * _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth
        };
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
/* harmony import */ var _utils_calculateMargin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/calculateMargin */ "./src/utils/calculateMargin.ts");


var clearCanvas = function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.clearRect(0, 0, window.innerWidth - 2 * (0,_utils_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas), window.innerHeight - 2 * (0,_utils_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas));
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _relocate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relocate */ "./src/render/relocate.ts");


var isIntersections = function (rect, select, intervals, index) {
    if (intervals === void 0) { intervals = []; }
    var intersections = intervals[index].left + _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth < 0 && intervals[index].bot + _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth < 0 && intervals[index].top + _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth < 0 && intervals[index].right + _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth < 0;
    if (intersections) {
        rect.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.errorColor);
        select.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.errorColor);
        (0,_relocate__WEBPACK_IMPORTED_MODULE_1__.relocateToggle)(false);
    }
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _relocate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relocate */ "./src/render/relocate.ts");


var isStuck = function (rect, select, intervalGluing, intervals, index) {
    if (intervals === void 0) { intervals = []; }
    var stickToLeft = intervals[index].left < intervalGluing && intervals[index].left > -_constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth && intervals[index].bot < 0 && intervals[index].top < 0;
    var stickToRight = intervals[index].right < intervalGluing && intervals[index].top < 0 && intervals[index].bot < 0 && intervals[index].right > -_constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth;
    var stickToTop = intervals[index].top < intervalGluing && intervals[index].left < 0 && intervals[index].top > -_constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth && intervals[index].right < 0;
    var stickToBot = intervals[index].bot < intervalGluing && intervals[index].left < 0 && intervals[index].bot > -_constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth && intervals[index].right < 0;
    if (stickToLeft) {
        select.x = rect.x + rect.width + _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth;
    }
    else if (stickToRight) {
        select.x = rect.x - select.width - _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth;
    }
    else if (stickToTop) {
        select.y = rect.y + rect.height + _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth;
    }
    else if (stickToBot) {
        select.y = rect.y - select.height - _constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth;
    }
    if (stickToLeft || stickToRight || stickToTop || stickToBot)
        (0,_relocate__WEBPACK_IMPORTED_MODULE_1__.relocateToggle)(true);
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
var getRelocate = function () { return relocate; };


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
/* harmony import */ var _utils_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/calculateAxisOffset */ "./src/utils/calculateAxisOffset.ts");
/* harmony import */ var _calculateIntervals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculateIntervals */ "./src/render/calculateIntervals.ts");






var rendering = function (rectangles, selected, initX, initY, initMouseX, initMouseY) {
    if (initX === void 0) { initX = 0; }
    if (initY === void 0) { initY = 0; }
    if (initMouseX === void 0) { initMouseX = 0; }
    if (initMouseY === void 0) { initMouseY = 0; }
    (0,_clearCanvas__WEBPACK_IMPORTED_MODULE_3__.clearCanvas)();
    if (selected) {
        selected.x = initX + (0,_utils_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__.calculateAxisOffset)(initMouseX, _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x);
        selected.y = initY + (0,_utils_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__.calculateAxisOffset)(initMouseY, _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y);
        var intervals_1 = (0,_calculateIntervals__WEBPACK_IMPORTED_MODULE_5__.calculateIntervals)(selected, rectangles);
        rectangles.forEach(function (rect, index) {
            if (rect === selected)
                return;
            (0,_isStuck__WEBPACK_IMPORTED_MODULE_1__.isStuck)(rect, selected, _constants__WEBPACK_IMPORTED_MODULE_0__.intervalGluing, intervals_1, index);
            (0,_isIntersections__WEBPACK_IMPORTED_MODULE_2__.isIntersections)(rect, selected, intervals_1, index);
            rect.draw(rect.color);
            rect.stroke(_constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth);
            rect.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.baseColor);
        });
        selected.draw(selected.color);
        selected.stroke(_constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth);
        selected.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.selectedColor);
    }
    else {
        rectangles.forEach(function (rect) {
            rect.draw(rect.color);
            rect.stroke(_constants__WEBPACK_IMPORTED_MODULE_0__.borderWidth);
        });
    }
};


/***/ }),

/***/ "./src/utils/calculateAxisOffset.ts":
/*!******************************************!*\
  !*** ./src/utils/calculateAxisOffset.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateAxisOffset": () => (/* binding */ calculateAxisOffset)
/* harmony export */ });
var calculateAxisOffset = function (initCount, currentCount) {
    return currentCount - initCount;
};


/***/ }),

/***/ "./src/utils/calculateMargin.ts":
/*!**************************************!*\
  !*** ./src/utils/calculateMargin.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateMargin": () => (/* binding */ calculateMargin)
/* harmony export */ });
var calculateMargin = function (object) {
    return parseInt(window.getComputedStyle(object).margin);
};


/***/ }),

/***/ "./src/utils/isCursorInRect.ts":
/*!*************************************!*\
  !*** ./src/utils/isCursorInRect.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCursorInRect": () => (/* binding */ isCursorInRect)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _calculateMargin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateMargin */ "./src/utils/calculateMargin.ts");


var isCursorInRect = function (rect) {
    return _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x > rect.x + (0,_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x < rect.width + rect.x + (0,_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y > rect.y + (0,_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y < rect.y + rect.height + (0,_calculateMargin__WEBPACK_IMPORTED_MODULE_1__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
};


/***/ }),

/***/ "./src/utils/setStartPosition.ts":
/*!***************************************!*\
  !*** ./src/utils/setStartPosition.ts ***!
  \***************************************/
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
/* harmony import */ var _utils_calculateMargin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/calculateMargin */ "./src/utils/calculateMargin.ts");
/* harmony import */ var _render_rendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render/rendering */ "./src/render/rendering.ts");
/* harmony import */ var _components_rectangles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rectangles */ "./src/components/rectangles.ts");
/* harmony import */ var _utils_isCursorInRect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isCursorInRect */ "./src/utils/isCursorInRect.ts");
/* harmony import */ var _render_relocate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render/relocate */ "./src/render/relocate.ts");
/* harmony import */ var _utils_setStartPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/setStartPosition */ "./src/utils/setStartPosition.ts");








_constants__WEBPACK_IMPORTED_MODULE_0__.canvas.width = window.innerWidth - 2 * (0,_utils_calculateMargin__WEBPACK_IMPORTED_MODULE_2__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
_constants__WEBPACK_IMPORTED_MODULE_0__.canvas.height = window.innerHeight - 2 * (0,_utils_calculateMargin__WEBPACK_IMPORTED_MODULE_2__.calculateMargin)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
var selected = null;
(0,_utils_setStartPosition__WEBPACK_IMPORTED_MODULE_7__.setStartPosition)(_components_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles);
(0,_render_rendering__WEBPACK_IMPORTED_MODULE_3__.rendering)(_components_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles, selected);
window.addEventListener('mousemove', function (e) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x = e.clientX;
    _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y = e.clientY;
});
var initX, initY, initMouseX, initMouseY, interval;
window.addEventListener('mousedown', function () {
    _components_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles.forEach(function (rect) {
        if ((0,_utils_isCursorInRect__WEBPACK_IMPORTED_MODULE_5__.isCursorInRect)(rect)) {
            selected = rect;
            initY = rect.y;
            initX = rect.x;
            initMouseX = _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x;
            initMouseY = _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y;
            selected.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.selectedColor);
        }
    });
    interval = setInterval(function () {
        (0,_render_rendering__WEBPACK_IMPORTED_MODULE_3__.rendering)(_components_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles, selected, initX, initY, initMouseX, initMouseY);
    });
});
window.addEventListener('mouseup', function () {
    _components_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles.forEach(function (rect) {
        if (rect === selected) {
            if (!(0,_render_relocate__WEBPACK_IMPORTED_MODULE_6__.getRelocate)()) {
                rect.x = initX;
                rect.y = initY;
                (0,_render_relocate__WEBPACK_IMPORTED_MODULE_6__.relocateToggle)(true);
            }
        }
    });
    selected.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.baseColor);
    selected = null;
    clearInterval(interval);
    (0,_render_rendering__WEBPACK_IMPORTED_MODULE_3__.rendering)(_components_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles, selected);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zRTtBQUNsRDtBQUNzQztBQUNYO0FBQ007QUFDRztBQUNRO0FBQ0o7QUFDNUQsb0RBQVksMkJBQTJCLHVFQUFlLENBQUMsOENBQU07QUFDN0QscURBQWEsNEJBQTRCLHVFQUFlLENBQUMsOENBQU07QUFDL0Q7QUFDQSx5RUFBZ0IsQ0FBQyw4REFBVTtBQUMzQiw0REFBUyxDQUFDLDhEQUFVO0FBQ3BCO0FBQ0EsSUFBSSwrQ0FBTztBQUNYLElBQUksK0NBQU87QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksc0VBQWtCO0FBQ3RCLFlBQVkscUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFPO0FBQ2hDLHlCQUF5QiwrQ0FBTztBQUNoQyxpQ0FBaUMscURBQWE7QUFDOUM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLDREQUFTLENBQUMsOERBQVU7QUFDNUIsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLElBQUksc0VBQWtCO0FBQ3RCO0FBQ0EsaUJBQWlCLDZEQUFXO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0IsZ0VBQWM7QUFDOUI7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QkFBeUIsaURBQVM7QUFDbEM7QUFDQTtBQUNBLElBQUksNERBQVMsQ0FBQyw4REFBVTtBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2NvbXBvbmVudHMvUmVjdGFuZ2xlLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2NvbXBvbmVudHMvcmVjdGFuZ2xlcy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL2NhbGN1bGF0ZUludGVydmFscy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9yZW5kZXIvY2xlYXJDYW52YXMudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL2lzSW50ZXJzZWN0aW9ucy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9yZW5kZXIvaXNTdHVjay50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9yZW5kZXIvcmVsb2NhdGUudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL3JlbmRlcmluZy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy91dGlscy9jYWxjdWxhdGVBeGlzT2Zmc2V0LnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3V0aWxzL2NhbGN1bGF0ZU1hcmdpbi50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy91dGlscy9pc0N1cnNvckluUmVjdC50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy91dGlscy9zZXRTdGFydFBvc2l0aW9uLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FudmFzIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZThkMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NhbnZhcyB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGU4ZDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYmFzZUNvbG9yLCBjdHggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbnZhciBSZWN0YW5nbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWN0YW5nbGUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnggPSAyMDtcclxuICAgICAgICB0aGlzLnkgPSAyMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gYmFzZUNvbG9yO1xyXG4gICAgfVxyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHJva2UgPSBmdW5jdGlvbiAoYm9yZGVyV2lkdGgpIHtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy54IC0gYm9yZGVyV2lkdGggLyAyLCB0aGlzLnkgLSBib3JkZXJXaWR0aCAvIDIsIHRoaXMud2lkdGggKyBib3JkZXJXaWR0aCwgdGhpcy5oZWlnaHQgKyBib3JkZXJXaWR0aCk7XHJcbiAgICB9O1xyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuY2hhbmdlQ29sb3IgPSBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlY3RhbmdsZTtcclxufSgpKTtcclxuZXhwb3J0IHsgUmVjdGFuZ2xlIH07XHJcbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5leHBvcnQgdmFyIHJlY3RhbmdsZXMgPSBbbmV3IFJlY3RhbmdsZSgxMDAsIDUwKSwgbmV3IFJlY3RhbmdsZSgxNTAsIDQwKSwgbmV3IFJlY3RhbmdsZSgxMDAsIDYwKSwgbmV3IFJlY3RhbmdsZSgxMTUsIDEyMCldO1xyXG4iLCJleHBvcnQgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuZXhwb3J0IHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuZXhwb3J0IHZhciBNb3VzZSA9IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwXHJcbn07XHJcbmV4cG9ydCB2YXIgYm9yZGVyV2lkdGggPSA2O1xyXG5leHBvcnQgdmFyIGludGVydmFsR2x1aW5nID0gNDA7XHJcbmV4cG9ydCB2YXIgYmFzZUNvbG9yID0gJyNGRkZGRkYnO1xyXG5leHBvcnQgdmFyIGVycm9yQ29sb3IgPSAnI0ZGMDAwMCc7XHJcbmV4cG9ydCB2YXIgc2VsZWN0ZWRDb2xvciA9ICcjRkZGRkNDJztcclxuIiwiaW1wb3J0IHsgYm9yZGVyV2lkdGggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmV4cG9ydCB2YXIgY2FsY3VsYXRlSW50ZXJ2YWxzID0gZnVuY3Rpb24gKHNlbGVjdCwgcmVjdGFuZ2xlcykge1xyXG4gICAgdmFyIGludGVydmFscyA9IFtdO1xyXG4gICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0LCBpbmRleCkge1xyXG4gICAgICAgIGlmIChzZWxlY3QgPT09IHJlY3QpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpbnRlcnZhbHNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBzZWxlY3QueCAtIChyZWN0LnggKyByZWN0LndpZHRoKSAtIDIgKiBib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgcmlnaHQ6IHJlY3QueCAtIChzZWxlY3QueCArIHNlbGVjdC53aWR0aCkgLSAyICogYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgIHRvcDogc2VsZWN0LnkgLSAocmVjdC55ICsgcmVjdC5oZWlnaHQpIC0gMiAqIGJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICBib3Q6IHJlY3QueSAtIChzZWxlY3QueSArIHNlbGVjdC5oZWlnaHQpIC0gMiAqIGJvcmRlcldpZHRoXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGludGVydmFscztcclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZU1hcmdpbiB9IGZyb20gXCIuLi91dGlscy9jYWxjdWxhdGVNYXJnaW5cIjtcclxuZXhwb3J0IHZhciBjbGVhckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGggLSAyICogY2FsY3VsYXRlTWFyZ2luKGNhbnZhcyksIHdpbmRvdy5pbm5lckhlaWdodCAtIDIgKiBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGJvcmRlcldpZHRoLCBlcnJvckNvbG9yIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyByZWxvY2F0ZVRvZ2dsZSB9IGZyb20gXCIuL3JlbG9jYXRlXCI7XHJcbmV4cG9ydCB2YXIgaXNJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24gKHJlY3QsIHNlbGVjdCwgaW50ZXJ2YWxzLCBpbmRleCkge1xyXG4gICAgaWYgKGludGVydmFscyA9PT0gdm9pZCAwKSB7IGludGVydmFscyA9IFtdOyB9XHJcbiAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IGludGVydmFsc1tpbmRleF0ubGVmdCArIGJvcmRlcldpZHRoIDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLmJvdCArIGJvcmRlcldpZHRoIDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnRvcCArIGJvcmRlcldpZHRoIDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0ICsgYm9yZGVyV2lkdGggPCAwO1xyXG4gICAgaWYgKGludGVyc2VjdGlvbnMpIHtcclxuICAgICAgICByZWN0LmNoYW5nZUNvbG9yKGVycm9yQ29sb3IpO1xyXG4gICAgICAgIHNlbGVjdC5jaGFuZ2VDb2xvcihlcnJvckNvbG9yKTtcclxuICAgICAgICByZWxvY2F0ZVRvZ2dsZShmYWxzZSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGJvcmRlcldpZHRoIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyByZWxvY2F0ZVRvZ2dsZSB9IGZyb20gXCIuL3JlbG9jYXRlXCI7XHJcbmV4cG9ydCB2YXIgaXNTdHVjayA9IGZ1bmN0aW9uIChyZWN0LCBzZWxlY3QsIGludGVydmFsR2x1aW5nLCBpbnRlcnZhbHMsIGluZGV4KSB7XHJcbiAgICBpZiAoaW50ZXJ2YWxzID09PSB2b2lkIDApIHsgaW50ZXJ2YWxzID0gW107IH1cclxuICAgIHZhciBzdGlja1RvTGVmdCA9IGludGVydmFsc1tpbmRleF0ubGVmdCA8IGludGVydmFsR2x1aW5nICYmIGludGVydmFsc1tpbmRleF0ubGVmdCA+IC1ib3JkZXJXaWR0aCAmJiBpbnRlcnZhbHNbaW5kZXhdLmJvdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPCAwO1xyXG4gICAgdmFyIHN0aWNrVG9SaWdodCA9IGludGVydmFsc1tpbmRleF0ucmlnaHQgPCBpbnRlcnZhbEdsdWluZyAmJiBpbnRlcnZhbHNbaW5kZXhdLnRvcCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS5ib3QgPCAwICYmIGludGVydmFsc1tpbmRleF0ucmlnaHQgPiAtYm9yZGVyV2lkdGg7XHJcbiAgICB2YXIgc3RpY2tUb1RvcCA9IGludGVydmFsc1tpbmRleF0udG9wIDwgaW50ZXJ2YWxHbHVpbmcgJiYgaW50ZXJ2YWxzW2luZGV4XS5sZWZ0IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnRvcCA+IC1ib3JkZXJXaWR0aCAmJiBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0IDwgMDtcclxuICAgIHZhciBzdGlja1RvQm90ID0gaW50ZXJ2YWxzW2luZGV4XS5ib3QgPCBpbnRlcnZhbEdsdWluZyAmJiBpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPCAwICYmIGludGVydmFsc1tpbmRleF0uYm90ID4gLWJvcmRlcldpZHRoICYmIGludGVydmFsc1tpbmRleF0ucmlnaHQgPCAwO1xyXG4gICAgaWYgKHN0aWNrVG9MZWZ0KSB7XHJcbiAgICAgICAgc2VsZWN0LnggPSByZWN0LnggKyByZWN0LndpZHRoICsgYm9yZGVyV2lkdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGlja1RvUmlnaHQpIHtcclxuICAgICAgICBzZWxlY3QueCA9IHJlY3QueCAtIHNlbGVjdC53aWR0aCAtIGJvcmRlcldpZHRoO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RpY2tUb1RvcCkge1xyXG4gICAgICAgIHNlbGVjdC55ID0gcmVjdC55ICsgcmVjdC5oZWlnaHQgKyBib3JkZXJXaWR0aDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0aWNrVG9Cb3QpIHtcclxuICAgICAgICBzZWxlY3QueSA9IHJlY3QueSAtIHNlbGVjdC5oZWlnaHQgLSBib3JkZXJXaWR0aDtcclxuICAgIH1cclxuICAgIGlmIChzdGlja1RvTGVmdCB8fCBzdGlja1RvUmlnaHQgfHwgc3RpY2tUb1RvcCB8fCBzdGlja1RvQm90KVxyXG4gICAgICAgIHJlbG9jYXRlVG9nZ2xlKHRydWUpO1xyXG59O1xyXG4iLCJ2YXIgcmVsb2NhdGUgPSB0cnVlO1xyXG5leHBvcnQgdmFyIHJlbG9jYXRlVG9nZ2xlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICByZWxvY2F0ZSA9IHZhbHVlO1xyXG59O1xyXG5leHBvcnQgdmFyIGdldFJlbG9jYXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVsb2NhdGU7IH07XHJcbiIsImltcG9ydCB7IGJhc2VDb2xvciwgYm9yZGVyV2lkdGgsIGludGVydmFsR2x1aW5nLCBNb3VzZSwgc2VsZWN0ZWRDb2xvciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNTdHVjayB9IGZyb20gXCIuL2lzU3R1Y2tcIjtcclxuaW1wb3J0IHsgaXNJbnRlcnNlY3Rpb25zIH0gZnJvbSBcIi4vaXNJbnRlcnNlY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNsZWFyQ2FudmFzIH0gZnJvbSBcIi4vY2xlYXJDYW52YXNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlQXhpc09mZnNldCB9IGZyb20gXCIuLi91dGlscy9jYWxjdWxhdGVBeGlzT2Zmc2V0XCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVydmFscyB9IGZyb20gXCIuL2NhbGN1bGF0ZUludGVydmFsc1wiO1xyXG5leHBvcnQgdmFyIHJlbmRlcmluZyA9IGZ1bmN0aW9uIChyZWN0YW5nbGVzLCBzZWxlY3RlZCwgaW5pdFgsIGluaXRZLCBpbml0TW91c2VYLCBpbml0TW91c2VZKSB7XHJcbiAgICBpZiAoaW5pdFggPT09IHZvaWQgMCkgeyBpbml0WCA9IDA7IH1cclxuICAgIGlmIChpbml0WSA9PT0gdm9pZCAwKSB7IGluaXRZID0gMDsgfVxyXG4gICAgaWYgKGluaXRNb3VzZVggPT09IHZvaWQgMCkgeyBpbml0TW91c2VYID0gMDsgfVxyXG4gICAgaWYgKGluaXRNb3VzZVkgPT09IHZvaWQgMCkgeyBpbml0TW91c2VZID0gMDsgfVxyXG4gICAgY2xlYXJDYW52YXMoKTtcclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgIHNlbGVjdGVkLnggPSBpbml0WCArIGNhbGN1bGF0ZUF4aXNPZmZzZXQoaW5pdE1vdXNlWCwgTW91c2UueCk7XHJcbiAgICAgICAgc2VsZWN0ZWQueSA9IGluaXRZICsgY2FsY3VsYXRlQXhpc09mZnNldChpbml0TW91c2VZLCBNb3VzZS55KTtcclxuICAgICAgICB2YXIgaW50ZXJ2YWxzXzEgPSBjYWxjdWxhdGVJbnRlcnZhbHMoc2VsZWN0ZWQsIHJlY3RhbmdsZXMpO1xyXG4gICAgICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKHJlY3QgPT09IHNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpc1N0dWNrKHJlY3QsIHNlbGVjdGVkLCBpbnRlcnZhbEdsdWluZywgaW50ZXJ2YWxzXzEsIGluZGV4KTtcclxuICAgICAgICAgICAgaXNJbnRlcnNlY3Rpb25zKHJlY3QsIHNlbGVjdGVkLCBpbnRlcnZhbHNfMSwgaW5kZXgpO1xyXG4gICAgICAgICAgICByZWN0LmRyYXcocmVjdC5jb2xvcik7XHJcbiAgICAgICAgICAgIHJlY3Quc3Ryb2tlKGJvcmRlcldpZHRoKTtcclxuICAgICAgICAgICAgcmVjdC5jaGFuZ2VDb2xvcihiYXNlQ29sb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGVjdGVkLmRyYXcoc2VsZWN0ZWQuY29sb3IpO1xyXG4gICAgICAgIHNlbGVjdGVkLnN0cm9rZShib3JkZXJXaWR0aCk7XHJcbiAgICAgICAgc2VsZWN0ZWQuY2hhbmdlQ29sb3Ioc2VsZWN0ZWRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICAgICAgcmVjdC5kcmF3KHJlY3QuY29sb3IpO1xyXG4gICAgICAgICAgICByZWN0LnN0cm9rZShib3JkZXJXaWR0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImV4cG9ydCB2YXIgY2FsY3VsYXRlQXhpc09mZnNldCA9IGZ1bmN0aW9uIChpbml0Q291bnQsIGN1cnJlbnRDb3VudCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRDb3VudCAtIGluaXRDb3VudDtcclxufTtcclxuIiwiZXhwb3J0IHZhciBjYWxjdWxhdGVNYXJnaW4gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUob2JqZWN0KS5tYXJnaW4pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIE1vdXNlIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVNYXJnaW4gfSBmcm9tIFwiLi9jYWxjdWxhdGVNYXJnaW5cIjtcclxuZXhwb3J0IHZhciBpc0N1cnNvckluUmVjdCA9IGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICByZXR1cm4gTW91c2UueCA+IHJlY3QueCArIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpICYmIE1vdXNlLnggPCByZWN0LndpZHRoICsgcmVjdC54ICsgY2FsY3VsYXRlTWFyZ2luKGNhbnZhcykgJiYgTW91c2UueSA+IHJlY3QueSArIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpICYmIE1vdXNlLnkgPCByZWN0LnkgKyByZWN0LmhlaWdodCArIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBib3JkZXJXaWR0aCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuZXhwb3J0IHZhciBzZXRTdGFydFBvc2l0aW9uID0gZnVuY3Rpb24gKHJlY3RhbmdsZXMpIHtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcmVjdGFuZ2xlcy5sZW5ndGg7IGkrKylcclxuICAgICAgICByZWN0YW5nbGVzW2ldLnkgPSByZWN0YW5nbGVzW2kgLSAxXS55ICsgcmVjdGFuZ2xlc1tpIC0gMV0uaGVpZ2h0ICsgNSAqIGJvcmRlcldpZHRoO1xyXG4gICAgcmV0dXJuIHJlY3RhbmdsZXM7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBiYXNlQ29sb3IsIGNhbnZhcywgTW91c2UsIHNlbGVjdGVkQ29sb3IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVNYXJnaW4gfSBmcm9tIFwiLi91dGlscy9jYWxjdWxhdGVNYXJnaW5cIjtcclxuaW1wb3J0IHsgcmVuZGVyaW5nIH0gZnJvbSBcIi4vcmVuZGVyL3JlbmRlcmluZ1wiO1xyXG5pbXBvcnQgeyByZWN0YW5nbGVzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWN0YW5nbGVzXCI7XHJcbmltcG9ydCB7IGlzQ3Vyc29ySW5SZWN0IH0gZnJvbSBcIi4vdXRpbHMvaXNDdXJzb3JJblJlY3RcIjtcclxuaW1wb3J0IHsgZ2V0UmVsb2NhdGUsIHJlbG9jYXRlVG9nZ2xlIH0gZnJvbSBcIi4vcmVuZGVyL3JlbG9jYXRlXCI7XHJcbmltcG9ydCB7IHNldFN0YXJ0UG9zaXRpb24gfSBmcm9tIFwiLi91dGlscy9zZXRTdGFydFBvc2l0aW9uXCI7XHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpO1xyXG52YXIgc2VsZWN0ZWQgPSBudWxsO1xyXG5zZXRTdGFydFBvc2l0aW9uKHJlY3RhbmdsZXMpO1xyXG5yZW5kZXJpbmcocmVjdGFuZ2xlcywgc2VsZWN0ZWQpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIE1vdXNlLnggPSBlLmNsaWVudFg7XHJcbiAgICBNb3VzZS55ID0gZS5jbGllbnRZO1xyXG59KTtcclxudmFyIGluaXRYLCBpbml0WSwgaW5pdE1vdXNlWCwgaW5pdE1vdXNlWSwgaW50ZXJ2YWw7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICBpZiAoaXNDdXJzb3JJblJlY3QocmVjdCkpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSByZWN0O1xyXG4gICAgICAgICAgICBpbml0WSA9IHJlY3QueTtcclxuICAgICAgICAgICAgaW5pdFggPSByZWN0Lng7XHJcbiAgICAgICAgICAgIGluaXRNb3VzZVggPSBNb3VzZS54O1xyXG4gICAgICAgICAgICBpbml0TW91c2VZID0gTW91c2UueTtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuY2hhbmdlQ29sb3Ioc2VsZWN0ZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJpbmcocmVjdGFuZ2xlcywgc2VsZWN0ZWQsIGluaXRYLCBpbml0WSwgaW5pdE1vdXNlWCwgaW5pdE1vdXNlWSk7XHJcbiAgICB9KTtcclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgaWYgKHJlY3QgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2V0UmVsb2NhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVjdC54ID0gaW5pdFg7XHJcbiAgICAgICAgICAgICAgICByZWN0LnkgPSBpbml0WTtcclxuICAgICAgICAgICAgICAgIHJlbG9jYXRlVG9nZ2xlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZWxlY3RlZC5jaGFuZ2VDb2xvcihiYXNlQ29sb3IpO1xyXG4gICAgc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICByZW5kZXJpbmcocmVjdGFuZ2xlcywgc2VsZWN0ZWQpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9