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
var borderWidth = 5;
var intervalGluing = 20;
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
var calculateIntervals = function (select, rectangles) {
    var intervals = [];
    rectangles.forEach(function (rect, index) {
        if (select === rect)
            return;
        intervals[index] = {
            left: select.x - (rect.x + rect.width),
            right: rect.x - (select.x + select.width),
            top: select.y - (rect.y + rect.height),
            bot: rect.y - (select.y + select.height)
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
/* harmony import */ var _calculateIntervals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateIntervals */ "./src/render/calculateIntervals.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _relocate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relocate */ "./src/render/relocate.ts");



var isIntersections = function (rectangles, select) {
    var intervals = (0,_calculateIntervals__WEBPACK_IMPORTED_MODULE_0__.calculateIntervals)(select, rectangles);
    rectangles.forEach(function (rect, index) {
        if (select === rect)
            return;
        var intersections = intervals[index].left < 0 && intervals[index].bot < 0 && intervals[index].top < 0 && intervals[index].right < 0;
        if (intersections) {
            rect.changeColor(_constants__WEBPACK_IMPORTED_MODULE_1__.errorColor);
            select.changeColor(_constants__WEBPACK_IMPORTED_MODULE_1__.errorColor);
            (0,_relocate__WEBPACK_IMPORTED_MODULE_2__.relocateToggle)(false);
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
        if (select === rect)
            return;
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





var rendering = function (rectangles, selected, initX, initY, initMouseX, initMouseY) {
    (0,_clearCanvas__WEBPACK_IMPORTED_MODULE_3__.clearCanvas)();
    if (selected) {
        selected.x = initX + (0,_utils_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__.calculateAxisOffset)(initMouseX, _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x);
        selected.y = initY + (0,_utils_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__.calculateAxisOffset)(initMouseY, _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y);
        (0,_isStuck__WEBPACK_IMPORTED_MODULE_1__.isStuck)(rectangles, selected, _constants__WEBPACK_IMPORTED_MODULE_0__.intervalGluing);
        (0,_isIntersections__WEBPACK_IMPORTED_MODULE_2__.isIntersections)(rectangles, selected);
        rectangles.forEach(function (rect) {
            if (rect === selected)
                return;
            rect.stroke();
            rect.draw(rect.color);
            rect.changeColor(_constants__WEBPACK_IMPORTED_MODULE_0__.baseColor);
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
setInterval(function () {
    (0,_render_rendering__WEBPACK_IMPORTED_MODULE_3__.rendering)(_components_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles, selected, initX, initY, initMouseX, initMouseY);
}, 30);
window.addEventListener('mousemove', function (e) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x = e.clientX;
    _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y = e.clientY;
});
var initX, initY, initMouseX, initMouseY;
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
});
window.addEventListener('mouseup', function () {
    _components_rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles.forEach(function (rect) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0U7QUFDbEQ7QUFDc0M7QUFDWDtBQUNNO0FBQ0c7QUFDUjtBQUNZO0FBQzVELG9EQUFZLDJCQUEyQix1RUFBZSxDQUFDLDhDQUFNO0FBQzdELHFEQUFhLDRCQUE0Qix1RUFBZSxDQUFDLDhDQUFNO0FBQy9EO0FBQ0EseUVBQWdCLENBQUMsOERBQVU7QUFDM0I7QUFDQSxJQUFJLDREQUFTLENBQUMsOERBQVU7QUFDeEIsQ0FBQztBQUNEO0FBQ0EsSUFBSSwrQ0FBTztBQUNYLElBQUksK0NBQU87QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksc0VBQWtCO0FBQ3RCLFlBQVkscUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFPO0FBQ2hDLHlCQUF5QiwrQ0FBTztBQUNoQyxpQ0FBaUMscURBQWE7QUFDOUM7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsSUFBSSxzRUFBa0I7QUFDdEI7QUFDQSxpQkFBaUIsNkRBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLGlEQUFTO0FBQ2xDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9jb21wb25lbnRzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9jb21wb25lbnRzL3JlY3RhbmdsZXMudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9jYWxjdWxhdGVJbnRlcnZhbHMudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL2NsZWFyQ2FudmFzLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9pc0ludGVyc2VjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL2lzU3R1Y2sudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvcmVuZGVyL3JlbG9jYXRlLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL3JlbmRlci9yZW5kZXJpbmcudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvdXRpbHMvY2FsY3VsYXRlQXhpc09mZnNldC50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy91dGlscy9jYWxjdWxhdGVNYXJnaW4udHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvdXRpbHMvaXNDdXJzb3JJblJlY3QudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvdXRpbHMvc2V0U3RhcnRQb3NpdGlvbi50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NhbnZhcyB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjYW52YXMge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJhc2VDb2xvciwgYm9yZGVyV2lkdGgsIGN0eCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxudmFyIFJlY3RhbmdsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlY3RhbmdsZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMueCA9IDU7XHJcbiAgICAgICAgdGhpcy55ID0gNTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gYmFzZUNvbG9yO1xyXG4gICAgfVxyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHJva2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xyXG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuY2hhbmdlQ29sb3IgPSBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlY3RhbmdsZTtcclxufSgpKTtcclxuZXhwb3J0IHsgUmVjdGFuZ2xlIH07XHJcbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5leHBvcnQgdmFyIHJlY3RhbmdsZXMgPSBbbmV3IFJlY3RhbmdsZSgxMDAsIDUwKSwgbmV3IFJlY3RhbmdsZSgxNTAsIDQwKSwgbmV3IFJlY3RhbmdsZSgxMDAsIDYwKSwgbmV3IFJlY3RhbmdsZSgxMTUsIDEyMCldO1xyXG4iLCJleHBvcnQgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuZXhwb3J0IHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuZXhwb3J0IHZhciBNb3VzZSA9IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwXHJcbn07XHJcbmV4cG9ydCB2YXIgYm9yZGVyV2lkdGggPSA1O1xyXG5leHBvcnQgdmFyIGludGVydmFsR2x1aW5nID0gMjA7XHJcbmV4cG9ydCB2YXIgYmFzZUNvbG9yID0gJyNGRkZGRkYnO1xyXG5leHBvcnQgdmFyIGVycm9yQ29sb3IgPSAnI0ZGMDAwMCc7XHJcbmV4cG9ydCB2YXIgc2VsZWN0ZWRDb2xvciA9ICcjRkZGRkNDJztcclxuIiwiZXhwb3J0IHZhciBjYWxjdWxhdGVJbnRlcnZhbHMgPSBmdW5jdGlvbiAoc2VsZWN0LCByZWN0YW5nbGVzKSB7XHJcbiAgICB2YXIgaW50ZXJ2YWxzID0gW107XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gcmVjdClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGludGVydmFsc1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IHNlbGVjdC54IC0gKHJlY3QueCArIHJlY3Qud2lkdGgpLFxyXG4gICAgICAgICAgICByaWdodDogcmVjdC54IC0gKHNlbGVjdC54ICsgc2VsZWN0LndpZHRoKSxcclxuICAgICAgICAgICAgdG9wOiBzZWxlY3QueSAtIChyZWN0LnkgKyByZWN0LmhlaWdodCksXHJcbiAgICAgICAgICAgIGJvdDogcmVjdC55IC0gKHNlbGVjdC55ICsgc2VsZWN0LmhlaWdodClcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW50ZXJ2YWxzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlTWFyZ2luIH0gZnJvbSBcIi4uL3V0aWxzL2NhbGN1bGF0ZU1hcmdpblwiO1xyXG5leHBvcnQgdmFyIGNsZWFyQ2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIDIgKiBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKSwgd2luZG93LmlubmVySGVpZ2h0IC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJ2YWxzIH0gZnJvbSBcIi4vY2FsY3VsYXRlSW50ZXJ2YWxzXCI7XHJcbmltcG9ydCB7IGVycm9yQ29sb3IgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHJlbG9jYXRlVG9nZ2xlIH0gZnJvbSBcIi4vcmVsb2NhdGVcIjtcclxuZXhwb3J0IHZhciBpc0ludGVyc2VjdGlvbnMgPSBmdW5jdGlvbiAocmVjdGFuZ2xlcywgc2VsZWN0KSB7XHJcbiAgICB2YXIgaW50ZXJ2YWxzID0gY2FsY3VsYXRlSW50ZXJ2YWxzKHNlbGVjdCwgcmVjdGFuZ2xlcyk7XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gcmVjdClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb25zID0gaW50ZXJ2YWxzW2luZGV4XS5sZWZ0IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLmJvdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPCAwICYmIGludGVydmFsc1tpbmRleF0ucmlnaHQgPCAwO1xyXG4gICAgICAgIGlmIChpbnRlcnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHJlY3QuY2hhbmdlQ29sb3IoZXJyb3JDb2xvcik7XHJcbiAgICAgICAgICAgIHNlbGVjdC5jaGFuZ2VDb2xvcihlcnJvckNvbG9yKTtcclxuICAgICAgICAgICAgcmVsb2NhdGVUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVJbnRlcnZhbHMgfSBmcm9tIFwiLi9jYWxjdWxhdGVJbnRlcnZhbHNcIjtcclxuaW1wb3J0IHsgYm9yZGVyV2lkdGggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHJlbG9jYXRlVG9nZ2xlIH0gZnJvbSBcIi4vcmVsb2NhdGVcIjtcclxuZXhwb3J0IHZhciBpc1N0dWNrID0gZnVuY3Rpb24gKHJlY3RhbmdsZXMsIHNlbGVjdCwgaW50ZXJ2YWxHbHVpbmcpIHtcclxuICAgIHZhciBpbnRlcnZhbHMgPSBjYWxjdWxhdGVJbnRlcnZhbHMoc2VsZWN0LCByZWN0YW5nbGVzKTtcclxuICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCwgaW5kZXgpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ID09PSByZWN0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIHN0aWNrVG9MZWZ0ID0gaW50ZXJ2YWxzW2luZGV4XS5sZWZ0IDwgaW50ZXJ2YWxHbHVpbmcgJiYgaW50ZXJ2YWxzW2luZGV4XS5sZWZ0ID4gMCAmJiBpbnRlcnZhbHNbaW5kZXhdLmJvdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPCAwO1xyXG4gICAgICAgIHZhciBzdGlja1RvUmlnaHQgPSBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0IDwgaW50ZXJ2YWxHbHVpbmcgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPCAwICYmIGludGVydmFsc1tpbmRleF0uYm90IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0ID4gMDtcclxuICAgICAgICB2YXIgc3RpY2tUb1RvcCA9IGludGVydmFsc1tpbmRleF0udG9wIDwgaW50ZXJ2YWxHbHVpbmcgJiYgaW50ZXJ2YWxzW2luZGV4XS5sZWZ0IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnRvcCA+IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS5yaWdodCA8IDA7XHJcbiAgICAgICAgdmFyIHN0aWNrVG9Cb3QgPSBpbnRlcnZhbHNbaW5kZXhdLmJvdCA8IGludGVydmFsR2x1aW5nICYmIGludGVydmFsc1tpbmRleF0ubGVmdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS5ib3QgPiAwICYmIGludGVydmFsc1tpbmRleF0ucmlnaHQgPCAwO1xyXG4gICAgICAgIGlmIChzdGlja1RvTGVmdCkge1xyXG4gICAgICAgICAgICBzZWxlY3QueCA9IHJlY3QueCArIHJlY3Qud2lkdGggKyBib3JkZXJXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHJlbG9jYXRlVG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGlja1RvUmlnaHQpIHtcclxuICAgICAgICAgICAgc2VsZWN0LnggPSByZWN0LnggLSBzZWxlY3Qud2lkdGggLSBib3JkZXJXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHJlbG9jYXRlVG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGlja1RvVG9wKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC55ID0gcmVjdC55ICsgcmVjdC5oZWlnaHQgKyBib3JkZXJXaWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0aWNrVG9Cb3QpIHtcclxuICAgICAgICAgICAgc2VsZWN0LnkgPSByZWN0LnkgLSBzZWxlY3QuaGVpZ2h0IC0gYm9yZGVyV2lkdGggLyAyO1xyXG4gICAgICAgICAgICByZWxvY2F0ZVRvZ2dsZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwidmFyIHJlbG9jYXRlID0gdHJ1ZTtcclxuZXhwb3J0IHZhciByZWxvY2F0ZVRvZ2dsZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgcmVsb2NhdGUgPSB2YWx1ZTtcclxufTtcclxuZXhwb3J0IHZhciBnZXRSZWxvY2F0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbG9jYXRlOyB9O1xyXG4iLCJpbXBvcnQgeyBiYXNlQ29sb3IsIGludGVydmFsR2x1aW5nLCBNb3VzZSwgc2VsZWN0ZWRDb2xvciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNTdHVjayB9IGZyb20gXCIuL2lzU3R1Y2tcIjtcclxuaW1wb3J0IHsgaXNJbnRlcnNlY3Rpb25zIH0gZnJvbSBcIi4vaXNJbnRlcnNlY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNsZWFyQ2FudmFzIH0gZnJvbSBcIi4vY2xlYXJDYW52YXNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlQXhpc09mZnNldCB9IGZyb20gXCIuLi91dGlscy9jYWxjdWxhdGVBeGlzT2Zmc2V0XCI7XHJcbmV4cG9ydCB2YXIgcmVuZGVyaW5nID0gZnVuY3Rpb24gKHJlY3RhbmdsZXMsIHNlbGVjdGVkLCBpbml0WCwgaW5pdFksIGluaXRNb3VzZVgsIGluaXRNb3VzZVkpIHtcclxuICAgIGNsZWFyQ2FudmFzKCk7XHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICBzZWxlY3RlZC54ID0gaW5pdFggKyBjYWxjdWxhdGVBeGlzT2Zmc2V0KGluaXRNb3VzZVgsIE1vdXNlLngpO1xyXG4gICAgICAgIHNlbGVjdGVkLnkgPSBpbml0WSArIGNhbGN1bGF0ZUF4aXNPZmZzZXQoaW5pdE1vdXNlWSwgTW91c2UueSk7XHJcbiAgICAgICAgaXNTdHVjayhyZWN0YW5nbGVzLCBzZWxlY3RlZCwgaW50ZXJ2YWxHbHVpbmcpO1xyXG4gICAgICAgIGlzSW50ZXJzZWN0aW9ucyhyZWN0YW5nbGVzLCBzZWxlY3RlZCk7XHJcbiAgICAgICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZWN0ID09PSBzZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgcmVjdC5zdHJva2UoKTtcclxuICAgICAgICAgICAgcmVjdC5kcmF3KHJlY3QuY29sb3IpO1xyXG4gICAgICAgICAgICByZWN0LmNoYW5nZUNvbG9yKGJhc2VDb2xvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZWN0ZWQuc3Ryb2tlKCk7XHJcbiAgICAgICAgc2VsZWN0ZWQuZHJhdyhzZWxlY3RlZC5jb2xvcik7XHJcbiAgICAgICAgc2VsZWN0ZWQuY2hhbmdlQ29sb3Ioc2VsZWN0ZWRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICAgICAgcmVjdC5zdHJva2UoKTtcclxuICAgICAgICAgICAgcmVjdC5kcmF3KHJlY3QuY29sb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCJleHBvcnQgdmFyIGNhbGN1bGF0ZUF4aXNPZmZzZXQgPSBmdW5jdGlvbiAoaW5pdENvdW50LCBjdXJyZW50Q291bnQpIHtcclxuICAgIHJldHVybiBjdXJyZW50Q291bnQgLSBpbml0Q291bnQ7XHJcbn07XHJcbiIsImV4cG9ydCB2YXIgY2FsY3VsYXRlTWFyZ2luID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9iamVjdCkubWFyZ2luKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBNb3VzZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlTWFyZ2luIH0gZnJvbSBcIi4vY2FsY3VsYXRlTWFyZ2luXCI7XHJcbmV4cG9ydCB2YXIgaXNDdXJzb3JJblJlY3QgPSBmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgcmV0dXJuIE1vdXNlLnggPiByZWN0LnggKyBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKSAmJiBNb3VzZS54IDwgcmVjdC53aWR0aCArIHJlY3QueCArIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpICYmIE1vdXNlLnkgPiByZWN0LnkgKyBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKSAmJiBNb3VzZS55IDwgcmVjdC55ICsgcmVjdC5oZWlnaHQgKyBjYWxjdWxhdGVNYXJnaW4oY2FudmFzKTtcclxufTtcclxuIiwiaW1wb3J0IHsgYm9yZGVyV2lkdGggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmV4cG9ydCB2YXIgc2V0U3RhcnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChyZWN0YW5nbGVzKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHJlY3RhbmdsZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgcmVjdGFuZ2xlc1tpXS55ID0gcmVjdGFuZ2xlc1tpIC0gMV0ueSArIHJlY3RhbmdsZXNbaSAtIDFdLmhlaWdodCArIDUgKiBib3JkZXJXaWR0aDtcclxuICAgIHJldHVybiByZWN0YW5nbGVzO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYmFzZUNvbG9yLCBjYW52YXMsIE1vdXNlLCBzZWxlY3RlZENvbG9yIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlTWFyZ2luIH0gZnJvbSBcIi4vdXRpbHMvY2FsY3VsYXRlTWFyZ2luXCI7XHJcbmltcG9ydCB7IHJlbmRlcmluZyB9IGZyb20gXCIuL3JlbmRlci9yZW5kZXJpbmdcIjtcclxuaW1wb3J0IHsgcmVjdGFuZ2xlcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVjdGFuZ2xlc1wiO1xyXG5pbXBvcnQgeyBpc0N1cnNvckluUmVjdCB9IGZyb20gXCIuL3V0aWxzL2lzQ3Vyc29ySW5SZWN0XCI7XHJcbmltcG9ydCB7IGdldFJlbG9jYXRlIH0gZnJvbSBcIi4vcmVuZGVyL3JlbG9jYXRlXCI7XHJcbmltcG9ydCB7IHNldFN0YXJ0UG9zaXRpb24gfSBmcm9tIFwiLi91dGlscy9zZXRTdGFydFBvc2l0aW9uXCI7XHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMiAqIGNhbGN1bGF0ZU1hcmdpbihjYW52YXMpO1xyXG52YXIgc2VsZWN0ZWQgPSBudWxsO1xyXG5zZXRTdGFydFBvc2l0aW9uKHJlY3RhbmdsZXMpO1xyXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICByZW5kZXJpbmcocmVjdGFuZ2xlcywgc2VsZWN0ZWQsIGluaXRYLCBpbml0WSwgaW5pdE1vdXNlWCwgaW5pdE1vdXNlWSk7XHJcbn0sIDMwKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBNb3VzZS54ID0gZS5jbGllbnRYO1xyXG4gICAgTW91c2UueSA9IGUuY2xpZW50WTtcclxufSk7XHJcbnZhciBpbml0WCwgaW5pdFksIGluaXRNb3VzZVgsIGluaXRNb3VzZVk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICBpZiAoaXNDdXJzb3JJblJlY3QocmVjdCkpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSByZWN0O1xyXG4gICAgICAgICAgICBpbml0WSA9IHJlY3QueTtcclxuICAgICAgICAgICAgaW5pdFggPSByZWN0Lng7XHJcbiAgICAgICAgICAgIGluaXRNb3VzZVggPSBNb3VzZS54O1xyXG4gICAgICAgICAgICBpbml0TW91c2VZID0gTW91c2UueTtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuY2hhbmdlQ29sb3Ioc2VsZWN0ZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIGlmIChyZWN0ID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWdldFJlbG9jYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJlY3QueCA9IGluaXRYO1xyXG4gICAgICAgICAgICAgICAgcmVjdC55ID0gaW5pdFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdGVkLmNoYW5nZUNvbG9yKGJhc2VDb2xvcik7XHJcbiAgICBzZWxlY3RlZCA9IG51bGw7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=