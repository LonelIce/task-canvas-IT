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
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    margin: 0 auto;\r\n}\r\n#canvas{\r\n    margin: 10px;\r\n    display: block;\r\n    background-color: white;\r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB;AACA;IACI,YAAY;IACZ,cAAc;IACd,uBAAuB;AAC3B","sourcesContent":["body{\r\n    margin: 0 auto;\r\n}\r\n#canvas{\r\n    margin: 10px;\r\n    display: block;\r\n    background-color: white;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/Auxiliary/MarginCalculate.ts":
/*!******************************************!*\
  !*** ./src/Auxiliary/MarginCalculate.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarginCalculate": () => (/* binding */ MarginCalculate)
/* harmony export */ });
var MarginCalculate = function (object) {
    return parseInt(window.getComputedStyle(object).margin);
};


/***/ }),

/***/ "./src/Auxiliary/SetStartPosition.ts":
/*!*******************************************!*\
  !*** ./src/Auxiliary/SetStartPosition.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetStartPosition": () => (/* binding */ SetStartPosition)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var SetStartPosition = function (rectangles) {
    for (var i = 1; i < rectangles.length; i++)
        rectangles[i].y = rectangles[i - 1].y + rectangles[i - 1].height + 5 * _constants__WEBPACK_IMPORTED_MODULE_0__.borderHeight;
    return rectangles;
};


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

/***/ "./src/Auxiliary/isCursorInRect.ts":
/*!*****************************************!*\
  !*** ./src/Auxiliary/isCursorInRect.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCursorInRect": () => (/* binding */ isCursorInRect)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _MarginCalculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarginCalculate */ "./src/Auxiliary/MarginCalculate.ts");


var isCursorInRect = function (rect) {
    return _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x > rect.x + (0,_MarginCalculate__WEBPACK_IMPORTED_MODULE_1__.MarginCalculate)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x < rect.width + rect.x + (0,_MarginCalculate__WEBPACK_IMPORTED_MODULE_1__.MarginCalculate)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y > rect.y + (0,_MarginCalculate__WEBPACK_IMPORTED_MODULE_1__.MarginCalculate)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas) && _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y < rect.y + rect.height + (0,_MarginCalculate__WEBPACK_IMPORTED_MODULE_1__.MarginCalculate)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
};


/***/ }),

/***/ "./src/Rectangles.ts":
/*!***************************!*\
  !*** ./src/Rectangles.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rectangles": () => (/* binding */ rectangles)
/* harmony export */ });
/* harmony import */ var _lasses_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Сlasses/Rectangle */ "./src/Сlasses/Rectangle.ts");

var rectangles = [new _lasses_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(100, 50), new _lasses_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(150, 40), new _lasses_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(100, 60), new _lasses_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(115, 120)];


/***/ }),

/***/ "./src/Render/CalculateIntervals.ts":
/*!******************************************!*\
  !*** ./src/Render/CalculateIntervals.ts ***!
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

/***/ "./src/Render/ClearCanvas.ts":
/*!***********************************!*\
  !*** ./src/Render/ClearCanvas.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClearCanvas": () => (/* binding */ ClearCanvas)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _Auxiliary_MarginCalculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Auxiliary/MarginCalculate */ "./src/Auxiliary/MarginCalculate.ts");


var ClearCanvas = function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.clearRect(0, 0, window.innerWidth - 2 * (0,_Auxiliary_MarginCalculate__WEBPACK_IMPORTED_MODULE_1__.MarginCalculate)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas), window.innerHeight - 2 * (0,_Auxiliary_MarginCalculate__WEBPACK_IMPORTED_MODULE_1__.MarginCalculate)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas));
};


/***/ }),

/***/ "./src/Render/Relocate.ts":
/*!********************************!*\
  !*** ./src/Render/Relocate.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelocateToggle": () => (/* binding */ RelocateToggle),
/* harmony export */   "GetRelocate": () => (/* binding */ GetRelocate)
/* harmony export */ });
var relocate = true;
var RelocateToggle = function (value) {
    relocate = value;
};
var GetRelocate = function () {
    return relocate;
};


/***/ }),

/***/ "./src/Render/Render.ts":
/*!******************************!*\
  !*** ./src/Render/Render.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rendering": () => (/* binding */ Rendering)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _isStuck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isStuck */ "./src/Render/isStuck.ts");
/* harmony import */ var _isIntersections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isIntersections */ "./src/Render/isIntersections.ts");
/* harmony import */ var _ClearCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClearCanvas */ "./src/Render/ClearCanvas.ts");
/* harmony import */ var _Auxiliary_calculateAxisOffset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Auxiliary/calculateAxisOffset */ "./src/Auxiliary/calculateAxisOffset.ts");





var Rendering = function (rectangles, selected, initX, initY, initMouseX, initMouseY) {
    (0,_ClearCanvas__WEBPACK_IMPORTED_MODULE_3__.ClearCanvas)();
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


/***/ }),

/***/ "./src/Render/isIntersections.ts":
/*!***************************************!*\
  !*** ./src/Render/isIntersections.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIntersections": () => (/* binding */ isIntersections)
/* harmony export */ });
/* harmony import */ var _CalculateIntervals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculateIntervals */ "./src/Render/CalculateIntervals.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _Relocate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Relocate */ "./src/Render/Relocate.ts");



var isIntersections = function (rectangles, select) {
    var intervals = (0,_CalculateIntervals__WEBPACK_IMPORTED_MODULE_0__.calculateIntervals)(select, rectangles);
    rectangles.forEach(function (rect, index) {
        if (select !== rect) {
            if (intervals[index].left < 0 && intervals[index].bot < 0 && intervals[index].top < 0 && intervals[index].right < 0) {
                rect.changeColor(_constants__WEBPACK_IMPORTED_MODULE_1__.errorColor);
                select.changeColor(_constants__WEBPACK_IMPORTED_MODULE_1__.errorColor);
                (0,_Relocate__WEBPACK_IMPORTED_MODULE_2__.RelocateToggle)(false);
            }
        }
    });
};


/***/ }),

/***/ "./src/Render/isStuck.ts":
/*!*******************************!*\
  !*** ./src/Render/isStuck.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isStuck": () => (/* binding */ isStuck)
/* harmony export */ });
/* harmony import */ var _CalculateIntervals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculateIntervals */ "./src/Render/CalculateIntervals.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _Relocate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Relocate */ "./src/Render/Relocate.ts");



var isStuck = function (rectangles, select, intervalGluing) {
    var intervals = (0,_CalculateIntervals__WEBPACK_IMPORTED_MODULE_0__.calculateIntervals)(select, rectangles);
    rectangles.forEach(function (rect, index) {
        if (select !== rect) {
            if (intervals[index].left < intervalGluing && intervals[index].left > 0 && intervals[index].bot < 0 && intervals[index].top < 0) {
                select.x = rect.x + rect.width + _constants__WEBPACK_IMPORTED_MODULE_1__.borderHeight / 2;
                (0,_Relocate__WEBPACK_IMPORTED_MODULE_2__.RelocateToggle)(true);
            }
            else if (intervals[index].right < intervalGluing && intervals[index].top < 0 && intervals[index].bot < 0 && intervals[index].right > 0) {
                select.x = rect.x - select.width - _constants__WEBPACK_IMPORTED_MODULE_1__.borderHeight / 2;
                (0,_Relocate__WEBPACK_IMPORTED_MODULE_2__.RelocateToggle)(true);
            }
            else if (intervals[index].top < intervalGluing && intervals[index].left < 0 && intervals[index].top > 0 && intervals[index].right < 0) {
                select.y = rect.y + rect.height + _constants__WEBPACK_IMPORTED_MODULE_1__.borderHeight / 2;
            }
            else if (intervals[index].bot < intervalGluing && intervals[index].left < 0 && intervals[index].bot > 0 && intervals[index].right < 0) {
                select.y = rect.y - select.height - _constants__WEBPACK_IMPORTED_MODULE_1__.borderHeight / 2;
                (0,_Relocate__WEBPACK_IMPORTED_MODULE_2__.RelocateToggle)(true);
            }
        }
    });
};


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
/* harmony export */   "borderHeight": () => (/* binding */ borderHeight),
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
var borderHeight = 5;
var intervalGluing = 20;
var baseColor = 'white';
var errorColor = '#FF0000';
var selectedColor = '#FFFFCC';


/***/ }),

/***/ "./src/Сlasses/Rectangle.ts":
/*!**********************************!*\
  !*** ./src/Сlasses/Rectangle.ts ***!
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
        _constants__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = _constants__WEBPACK_IMPORTED_MODULE_0__.borderHeight;
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
/* harmony import */ var _Auxiliary_MarginCalculate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auxiliary/MarginCalculate */ "./src/Auxiliary/MarginCalculate.ts");
/* harmony import */ var _Render_Render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Render/Render */ "./src/Render/Render.ts");
/* harmony import */ var _Rectangles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rectangles */ "./src/Rectangles.ts");
/* harmony import */ var _Auxiliary_isCursorInRect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Auxiliary/isCursorInRect */ "./src/Auxiliary/isCursorInRect.ts");
/* harmony import */ var _Render_Relocate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Render/Relocate */ "./src/Render/Relocate.ts");
/* harmony import */ var _Auxiliary_SetStartPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Auxiliary/SetStartPosition */ "./src/Auxiliary/SetStartPosition.ts");








_constants__WEBPACK_IMPORTED_MODULE_0__.canvas.width = window.innerWidth - 2 * (0,_Auxiliary_MarginCalculate__WEBPACK_IMPORTED_MODULE_2__.MarginCalculate)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
_constants__WEBPACK_IMPORTED_MODULE_0__.canvas.height = window.innerHeight - 2 * (0,_Auxiliary_MarginCalculate__WEBPACK_IMPORTED_MODULE_2__.MarginCalculate)(_constants__WEBPACK_IMPORTED_MODULE_0__.canvas);
var selected = null;
(0,_Auxiliary_SetStartPosition__WEBPACK_IMPORTED_MODULE_7__.SetStartPosition)(_Rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles);
setInterval(function () {
    (0,_Render_Render__WEBPACK_IMPORTED_MODULE_3__.Rendering)(_Rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles, selected, initX, initY, initMouseX, initMouseY);
}, 30);
window.addEventListener('mousemove', function (e) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.x = e.clientX;
    _constants__WEBPACK_IMPORTED_MODULE_0__.Mouse.y = e.clientY;
});
var initX, initY, initMouseX, initMouseY;
window.addEventListener('mousedown', function () {
    _Rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles.forEach(function (rect) {
        if ((0,_Auxiliary_isCursorInRect__WEBPACK_IMPORTED_MODULE_5__.isCursorInRect)(rect)) {
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
    _Rectangles__WEBPACK_IMPORTED_MODULE_4__.rectangles.forEach(function (rect) {
        if (rect === selected) {
            if (!(0,_Render_Relocate__WEBPACK_IMPORTED_MODULE_6__.GetRelocate)()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDTnNFO0FBQ2xEO0FBQzBDO0FBQ2xCO0FBQ0Y7QUFDa0I7QUFDWjtBQUNnQjtBQUNoRSxvREFBWSwyQkFBMkIsMkVBQWUsQ0FBQyw4Q0FBTTtBQUM3RCxxREFBYSw0QkFBNEIsMkVBQWUsQ0FBQyw4Q0FBTTtBQUMvRDtBQUNBLDZFQUFnQixDQUFDLG1EQUFVO0FBQzNCO0FBQ0EsSUFBSSx5REFBUyxDQUFDLG1EQUFVO0FBQ3hCLENBQUM7QUFDRDtBQUNBLElBQUksK0NBQU87QUFDWCxJQUFJLCtDQUFPO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLDJEQUFrQjtBQUN0QixZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQ0FBTztBQUNoQyx5QkFBeUIsK0NBQU87QUFDaEMsaUNBQWlDLHFEQUFhO0FBQzlDO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLElBQUksMkRBQWtCO0FBQ3RCO0FBQ0EsaUJBQWlCLDZEQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHlCQUF5QixpREFBUztBQUNsQztBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvQXV4aWxpYXJ5L01hcmdpbkNhbGN1bGF0ZS50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9BdXhpbGlhcnkvU2V0U3RhcnRQb3NpdGlvbi50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9BdXhpbGlhcnkvY2FsY3VsYXRlQXhpc09mZnNldC50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9BdXhpbGlhcnkvaXNDdXJzb3JJblJlY3QudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvUmVjdGFuZ2xlcy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9SZW5kZXIvQ2FsY3VsYXRlSW50ZXJ2YWxzLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL1JlbmRlci9DbGVhckNhbnZhcy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9SZW5kZXIvUmVsb2NhdGUudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvLi9zcmMvUmVuZGVyL1JlbmRlci50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9SZW5kZXIvaXNJbnRlcnNlY3Rpb25zLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL1JlbmRlci9pc1N0dWNrLnRzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy/QoWxhc3Nlcy9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stY2FudmFzLWl0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFzay1jYW52YXMtaXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLWNhbnZhcy1pdC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuI2NhbnZhc3tcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4jY2FudmFze1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgdmFyIE1hcmdpbkNhbGN1bGF0ZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvYmplY3QpLm1hcmdpbik7XHJcbn07XHJcbiIsImltcG9ydCB7IGJvcmRlckhlaWdodCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuZXhwb3J0IHZhciBTZXRTdGFydFBvc2l0aW9uID0gZnVuY3Rpb24gKHJlY3RhbmdsZXMpIHtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcmVjdGFuZ2xlcy5sZW5ndGg7IGkrKylcclxuICAgICAgICByZWN0YW5nbGVzW2ldLnkgPSByZWN0YW5nbGVzW2kgLSAxXS55ICsgcmVjdGFuZ2xlc1tpIC0gMV0uaGVpZ2h0ICsgNSAqIGJvcmRlckhlaWdodDtcclxuICAgIHJldHVybiByZWN0YW5nbGVzO1xyXG59O1xyXG4iLCJleHBvcnQgdmFyIGNhbGN1bGF0ZUF4aXNPZmZzZXQgPSBmdW5jdGlvbiAoaW5pdENvdW50LCBjdXJyZW50Q291bnQpIHtcclxuICAgIHJldHVybiBjdXJyZW50Q291bnQgLSBpbml0Q291bnQ7XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbnZhcywgTW91c2UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE1hcmdpbkNhbGN1bGF0ZSB9IGZyb20gXCIuL01hcmdpbkNhbGN1bGF0ZVwiO1xyXG5leHBvcnQgdmFyIGlzQ3Vyc29ySW5SZWN0ID0gZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgIHJldHVybiBNb3VzZS54ID4gcmVjdC54ICsgTWFyZ2luQ2FsY3VsYXRlKGNhbnZhcykgJiYgTW91c2UueCA8IHJlY3Qud2lkdGggKyByZWN0LnggKyBNYXJnaW5DYWxjdWxhdGUoY2FudmFzKSAmJiBNb3VzZS55ID4gcmVjdC55ICsgTWFyZ2luQ2FsY3VsYXRlKGNhbnZhcykgJiYgTW91c2UueSA8IHJlY3QueSArIHJlY3QuaGVpZ2h0ICsgTWFyZ2luQ2FsY3VsYXRlKGNhbnZhcyk7XHJcbn07XHJcbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gXCIuL9ChbGFzc2VzL1JlY3RhbmdsZVwiO1xyXG5leHBvcnQgdmFyIHJlY3RhbmdsZXMgPSBbbmV3IFJlY3RhbmdsZSgxMDAsIDUwKSwgbmV3IFJlY3RhbmdsZSgxNTAsIDQwKSwgbmV3IFJlY3RhbmdsZSgxMDAsIDYwKSwgbmV3IFJlY3RhbmdsZSgxMTUsIDEyMCldO1xyXG4iLCJleHBvcnQgdmFyIGNhbGN1bGF0ZUludGVydmFscyA9IGZ1bmN0aW9uIChzZWxlY3QsIHJlY3RhbmdsZXMpIHtcclxuICAgIHZhciBpbnRlcnZhbExlZnQsIGludGVydmFsUmlnaHQsIGludGVydmFsVG9wLCBpbnRlcnZhbEJvdCwgaW50ZXJ2YWxzID0gW107XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdCAhPT0gcmVjdCkge1xyXG4gICAgICAgICAgICBpbnRlcnZhbExlZnQgPSBzZWxlY3QueCAtIChyZWN0LnggKyByZWN0LndpZHRoKTtcclxuICAgICAgICAgICAgaW50ZXJ2YWxSaWdodCA9IHJlY3QueCAtIChzZWxlY3QueCArIHNlbGVjdC53aWR0aCk7XHJcbiAgICAgICAgICAgIGludGVydmFsVG9wID0gc2VsZWN0LnkgLSAocmVjdC55ICsgcmVjdC5oZWlnaHQpO1xyXG4gICAgICAgICAgICBpbnRlcnZhbEJvdCA9IHJlY3QueSAtIChzZWxlY3QueSArIHNlbGVjdC5oZWlnaHQpO1xyXG4gICAgICAgICAgICBpbnRlcnZhbHNbaW5kZXhdID0geyBsZWZ0OiBpbnRlcnZhbExlZnQsIHJpZ2h0OiBpbnRlcnZhbFJpZ2h0LCB0b3A6IGludGVydmFsVG9wLCBib3Q6IGludGVydmFsQm90IH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW50ZXJ2YWxzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgTWFyZ2luQ2FsY3VsYXRlIH0gZnJvbSBcIi4uL0F1eGlsaWFyeS9NYXJnaW5DYWxjdWxhdGVcIjtcclxuZXhwb3J0IHZhciBDbGVhckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGggLSAyICogTWFyZ2luQ2FsY3VsYXRlKGNhbnZhcyksIHdpbmRvdy5pbm5lckhlaWdodCAtIDIgKiBNYXJnaW5DYWxjdWxhdGUoY2FudmFzKSk7XHJcbn07XHJcbiIsInZhciByZWxvY2F0ZSA9IHRydWU7XHJcbmV4cG9ydCB2YXIgUmVsb2NhdGVUb2dnbGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHJlbG9jYXRlID0gdmFsdWU7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0UmVsb2NhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gcmVsb2NhdGU7XHJcbn07XHJcbiIsImltcG9ydCB7IGJhc2VDb2xvciwgaW50ZXJ2YWxHbHVpbmcsIE1vdXNlLCBzZWxlY3RlZENvbG9yIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpc1N0dWNrIH0gZnJvbSBcIi4vaXNTdHVja1wiO1xyXG5pbXBvcnQgeyBpc0ludGVyc2VjdGlvbnMgfSBmcm9tIFwiLi9pc0ludGVyc2VjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2xlYXJDYW52YXMgfSBmcm9tIFwiLi9DbGVhckNhbnZhc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVBeGlzT2Zmc2V0IH0gZnJvbSBcIi4uL0F1eGlsaWFyeS9jYWxjdWxhdGVBeGlzT2Zmc2V0XCI7XHJcbmV4cG9ydCB2YXIgUmVuZGVyaW5nID0gZnVuY3Rpb24gKHJlY3RhbmdsZXMsIHNlbGVjdGVkLCBpbml0WCwgaW5pdFksIGluaXRNb3VzZVgsIGluaXRNb3VzZVkpIHtcclxuICAgIENsZWFyQ2FudmFzKCk7XHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICBzZWxlY3RlZC54ID0gaW5pdFggKyBjYWxjdWxhdGVBeGlzT2Zmc2V0KGluaXRNb3VzZVgsIE1vdXNlLngpO1xyXG4gICAgICAgIHNlbGVjdGVkLnkgPSBpbml0WSArIGNhbGN1bGF0ZUF4aXNPZmZzZXQoaW5pdE1vdXNlWSwgTW91c2UueSk7XHJcbiAgICAgICAgaXNTdHVjayhyZWN0YW5nbGVzLCBzZWxlY3RlZCwgaW50ZXJ2YWxHbHVpbmcpO1xyXG4gICAgICAgIGlzSW50ZXJzZWN0aW9ucyhyZWN0YW5nbGVzLCBzZWxlY3RlZCk7XHJcbiAgICAgICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZWN0ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgcmVjdC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIHJlY3QuZHJhdyhyZWN0LmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHJlY3QuY2hhbmdlQ29sb3IoYmFzZUNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGVjdGVkLnN0cm9rZSgpO1xyXG4gICAgICAgIHNlbGVjdGVkLmRyYXcoc2VsZWN0ZWQuY29sb3IpO1xyXG4gICAgICAgIHNlbGVjdGVkLmNoYW5nZUNvbG9yKHNlbGVjdGVkQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgICAgIHJlY3Quc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIHJlY3QuZHJhdyhyZWN0LmNvbG9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJ2YWxzIH0gZnJvbSBcIi4vQ2FsY3VsYXRlSW50ZXJ2YWxzXCI7XHJcbmltcG9ydCB7IGVycm9yQ29sb3IgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFJlbG9jYXRlVG9nZ2xlIH0gZnJvbSBcIi4vUmVsb2NhdGVcIjtcclxuZXhwb3J0IHZhciBpc0ludGVyc2VjdGlvbnMgPSBmdW5jdGlvbiAocmVjdGFuZ2xlcywgc2VsZWN0KSB7XHJcbiAgICB2YXIgaW50ZXJ2YWxzID0gY2FsY3VsYXRlSW50ZXJ2YWxzKHNlbGVjdCwgcmVjdGFuZ2xlcyk7XHJcbiAgICByZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3QsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdCAhPT0gcmVjdCkge1xyXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWxzW2luZGV4XS5sZWZ0IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLmJvdCA8IDAgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPCAwICYmIGludGVydmFsc1tpbmRleF0ucmlnaHQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWN0LmNoYW5nZUNvbG9yKGVycm9yQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmNoYW5nZUNvbG9yKGVycm9yQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgUmVsb2NhdGVUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbGN1bGF0ZUludGVydmFscyB9IGZyb20gXCIuL0NhbGN1bGF0ZUludGVydmFsc1wiO1xyXG5pbXBvcnQgeyBib3JkZXJIZWlnaHQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFJlbG9jYXRlVG9nZ2xlIH0gZnJvbSBcIi4vUmVsb2NhdGVcIjtcclxuZXhwb3J0IHZhciBpc1N0dWNrID0gZnVuY3Rpb24gKHJlY3RhbmdsZXMsIHNlbGVjdCwgaW50ZXJ2YWxHbHVpbmcpIHtcclxuICAgIHZhciBpbnRlcnZhbHMgPSBjYWxjdWxhdGVJbnRlcnZhbHMoc2VsZWN0LCByZWN0YW5nbGVzKTtcclxuICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCwgaW5kZXgpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ICE9PSByZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPCBpbnRlcnZhbEdsdWluZyAmJiBpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPiAwICYmIGludGVydmFsc1tpbmRleF0uYm90IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnRvcCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdC54ID0gcmVjdC54ICsgcmVjdC53aWR0aCArIGJvcmRlckhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICBSZWxvY2F0ZVRvZ2dsZSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0IDwgaW50ZXJ2YWxHbHVpbmcgJiYgaW50ZXJ2YWxzW2luZGV4XS50b3AgPCAwICYmIGludGVydmFsc1tpbmRleF0uYm90IDwgMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnggPSByZWN0LnggLSBzZWxlY3Qud2lkdGggLSBib3JkZXJIZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgUmVsb2NhdGVUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW50ZXJ2YWxzW2luZGV4XS50b3AgPCBpbnRlcnZhbEdsdWluZyAmJiBpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPCAwICYmIGludGVydmFsc1tpbmRleF0udG9wID4gMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnkgPSByZWN0LnkgKyByZWN0LmhlaWdodCArIGJvcmRlckhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW50ZXJ2YWxzW2luZGV4XS5ib3QgPCBpbnRlcnZhbEdsdWluZyAmJiBpbnRlcnZhbHNbaW5kZXhdLmxlZnQgPCAwICYmIGludGVydmFsc1tpbmRleF0uYm90ID4gMCAmJiBpbnRlcnZhbHNbaW5kZXhdLnJpZ2h0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnkgPSByZWN0LnkgLSBzZWxlY3QuaGVpZ2h0IC0gYm9yZGVySGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIFJlbG9jYXRlVG9nZ2xlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG5leHBvcnQgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5leHBvcnQgdmFyIE1vdXNlID0ge1xyXG4gICAgeDogMCxcclxuICAgIHk6IDBcclxufTtcclxuZXhwb3J0IHZhciBib3JkZXJIZWlnaHQgPSA1O1xyXG5leHBvcnQgdmFyIGludGVydmFsR2x1aW5nID0gMjA7XHJcbmV4cG9ydCB2YXIgYmFzZUNvbG9yID0gJ3doaXRlJztcclxuZXhwb3J0IHZhciBlcnJvckNvbG9yID0gJyNGRjAwMDAnO1xyXG5leHBvcnQgdmFyIHNlbGVjdGVkQ29sb3IgPSAnI0ZGRkZDQyc7XHJcbiIsImltcG9ydCB7IGJhc2VDb2xvciwgYm9yZGVySGVpZ2h0LCBjdHggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbnZhciBSZWN0YW5nbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWN0YW5nbGUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnggPSA1O1xyXG4gICAgICAgIHRoaXMueSA9IDU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGJhc2VDb2xvcjtcclxuICAgIH1cclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuc3Ryb2tlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJIZWlnaHQ7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5jaGFuZ2VDb2xvciA9IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVjdGFuZ2xlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBSZWN0YW5nbGUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGJhc2VDb2xvciwgY2FudmFzLCBNb3VzZSwgc2VsZWN0ZWRDb2xvciB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgXCIuL21haW4uY3NzXCI7XHJcbmltcG9ydCB7IE1hcmdpbkNhbGN1bGF0ZSB9IGZyb20gXCIuL0F1eGlsaWFyeS9NYXJnaW5DYWxjdWxhdGVcIjtcclxuaW1wb3J0IHsgUmVuZGVyaW5nIH0gZnJvbSBcIi4vUmVuZGVyL1JlbmRlclwiO1xyXG5pbXBvcnQgeyByZWN0YW5nbGVzIH0gZnJvbSBcIi4vUmVjdGFuZ2xlc1wiO1xyXG5pbXBvcnQgeyBpc0N1cnNvckluUmVjdCB9IGZyb20gXCIuL0F1eGlsaWFyeS9pc0N1cnNvckluUmVjdFwiO1xyXG5pbXBvcnQgeyBHZXRSZWxvY2F0ZSB9IGZyb20gXCIuL1JlbmRlci9SZWxvY2F0ZVwiO1xyXG5pbXBvcnQgeyBTZXRTdGFydFBvc2l0aW9uIH0gZnJvbSBcIi4vQXV4aWxpYXJ5L1NldFN0YXJ0UG9zaXRpb25cIjtcclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAyICogTWFyZ2luQ2FsY3VsYXRlKGNhbnZhcyk7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyICogTWFyZ2luQ2FsY3VsYXRlKGNhbnZhcyk7XHJcbnZhciBzZWxlY3RlZCA9IG51bGw7XHJcblNldFN0YXJ0UG9zaXRpb24ocmVjdGFuZ2xlcyk7XHJcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIFJlbmRlcmluZyhyZWN0YW5nbGVzLCBzZWxlY3RlZCwgaW5pdFgsIGluaXRZLCBpbml0TW91c2VYLCBpbml0TW91c2VZKTtcclxufSwgMzApO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIE1vdXNlLnggPSBlLmNsaWVudFg7XHJcbiAgICBNb3VzZS55ID0gZS5jbGllbnRZO1xyXG59KTtcclxudmFyIGluaXRYLCBpbml0WSwgaW5pdE1vdXNlWCwgaW5pdE1vdXNlWTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIGlmIChpc0N1cnNvckluUmVjdChyZWN0KSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZCA9IHJlY3Q7XHJcbiAgICAgICAgICAgIGluaXRZID0gcmVjdC55O1xyXG4gICAgICAgICAgICBpbml0WCA9IHJlY3QueDtcclxuICAgICAgICAgICAgaW5pdE1vdXNlWCA9IE1vdXNlLng7XHJcbiAgICAgICAgICAgIGluaXRNb3VzZVkgPSBNb3VzZS55O1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5jaGFuZ2VDb2xvcihzZWxlY3RlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgaWYgKHJlY3QgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghR2V0UmVsb2NhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVjdC54ID0gaW5pdFg7XHJcbiAgICAgICAgICAgICAgICByZWN0LnkgPSBpbml0WTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2VsZWN0ZWQuY2hhbmdlQ29sb3IoYmFzZUNvbG9yKTtcclxuICAgIHNlbGVjdGVkID0gbnVsbDtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==