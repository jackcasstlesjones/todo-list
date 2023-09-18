/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* \nColors:\n#f72585\n#7209b7\n#3a0ca3\n#4361ee\n#4cc9f0\n*/\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* //////////////////////////////////////////////////////////////// */\n\nbody {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  height: 100vh;\n}\n\nheader {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 52px;\n  padding: 40px;\n}\n\nmain {\n  display: flex;\n  width: 100%;\n  background-color: whitesmoke;\n  height: calc(100% - 80px);\n}\n\nh2 {\n  position: absolute;\n  top: 100px;\n  right: 20px;\n}\n\nnav {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  gap: 52px;\n  padding: 32px;\n  box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.1);\n\n  /* ********************* */\n  background: hsla(333, 93%, 56%, 1);\n\n  background: linear-gradient(\n    135deg,\n    hsla(333, 93%, 56%, 1) 0%,\n    hsla(258, 86%, 34%, 1) 100%\n  );\n\n  background: -moz-linear-gradient(\n    135deg,\n    hsla(333, 93%, 56%, 1) 0%,\n    hsla(258, 86%, 34%, 1) 100%\n  );\n\n  background: -webkit-linear-gradient(\n    135deg,\n    hsla(333, 93%, 56%, 1) 0%,\n    hsla(258, 86%, 34%, 1) 100%\n  );\n\n  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr=\"#F72585\", endColorstr=\"#3A0CA3\", GradientType=1 );\n}\n\n.project-buttons-container {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.project-buttons-container button {\n  width: 60%;\n}\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-button {\n  background-color: #4361ee;\n  color: white;\n  cursor: pointer;\n}\n\n.content {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  padding: 100px 150px;\n  gap: 32px;\n}\n\nform {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n}\n\nlabel {\n  font-size: 1.2rem;\n  color: white;\n}\n\n.form-element {\n  width: 80%;\n  border-radius: 10px;\n  box-shadow: none;\n  border: none;\n}\n\n.text-input {\n  font-size: 1.2rem;\n  padding: 8px;\n}\n\n.due-date-field {\n  padding: 10px;\n  width: 80%;\n  border-radius: 10px;\n  border: none;\n}\n\nselect {\n  font-size: 1.2rem;\n  padding: 8px;\n}\n\nbutton {\n  font-size: 1.2rem;\n  background-color: white;\n  border: none;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.to-do-card {\n  background-color: #4361ee;\n  padding: 20px;\n  width: 100%;\n  gap: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.15);\n}\n\n.title-div {\n  width: 100%;\n  display: flex;\n}\n\n.title-div button {\n  font-size: 16px;\n  margin-left: auto;\n}\n\n.detail-div {\n  width: 100%;\n  background-color: white;\n  color: black;\n  padding: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\nul {\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.edit-button {\n  font-size: 16px;\n  margin-left: auto;\n  background-color: #3a0ca3;\n  color: white;\n}\n\n.remove-button {\n  border: none;\n  font-size: 16px;\n  padding: 10px;\n  background-color: #3a0ca3;\n  color: white;\n\n  margin-left: auto;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/application-module.js":
/*!***********************************!*\
  !*** ./src/application-module.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateProject: () => (/* binding */ CreateProject),\n/* harmony export */   addButtonEventListener: () => (/* binding */ addButtonEventListener),\n/* harmony export */   addCreateProjectFunction: () => (/* binding */ addCreateProjectFunction),\n/* harmony export */   addRemoveFunction: () => (/* binding */ addRemoveFunction),\n/* harmony export */   bigProjectsArray: () => (/* binding */ bigProjectsArray),\n/* harmony export */   createObject: () => (/* binding */ createObject),\n/* harmony export */   currentProject: () => (/* binding */ currentProject),\n/* harmony export */   defaultArray: () => (/* binding */ defaultArray),\n/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),\n/* harmony export */   getLocalStorageBigProj: () => (/* binding */ getLocalStorageBigProj),\n/* harmony export */   pushToProject: () => (/* binding */ pushToProject),\n/* harmony export */   saveLocalStorageBigProj: () => (/* binding */ saveLocalStorageBigProj),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _dom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-module */ \"./src/dom-module.js\");\n\n\nconst bigProjectsArray = [];\n\nlet currentProject = \"coding\";\n\nclass ToDoCreate {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.showOrHide = \"hide\";\n  }\n}\n\nclass CreateProject {\n  constructor(name) {\n    this.name = name;\n    this.projectArray = [];\n  }\n\n  pushToBigProjectsArray() {\n    bigProjectsArray.push(this);\n  }\n\n  pushToOwnArray(whatever) {\n    this.projectArray.push(whatever);\n  }\n\n  returnProject() {\n    return this.projectArray;\n  }\n\n  returnProjectName() {\n    return this.name;\n  }\n}\n\nconst defaultProject = new CreateProject(\"Coding\");\ndefaultProject.pushToBigProjectsArray();\nconst defaultArray = defaultProject.returnProject();\n\nfunction createObject() {\n  const title = (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.getUserTitle)();\n  const description = (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.getUserDescription)();\n  const dueDate = (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.getUserDueDate)();\n  const priority = (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.getUserPriority)();\n  const newObj = new ToDoCreate(title, description, dueDate, priority);\n  return newObj;\n}\n\nfunction pushToProject(projectArray) {\n  const newObj = createObject();\n  projectArray.push(newObj);\n  return newObj;\n}\n\n///////////////////////////// EVENT LISTENERS ///////////////////////\n\nfunction addButtonEventListener(array, element) {\n  element.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    pushToProject(array);\n    (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.renderProject)(array, \"hide\");\n  });\n}\n\n// Functionality for the remove button to splice from the project index\nfunction addRemoveFunction(element, index, projectArray) {\n  element.addEventListener(\"click\", function () {\n    projectArray.splice(index, 1);\n    (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.renderProject)(projectArray);\n  });\n}\n\nfunction addCreateProjectFunction(element) {\n  element.addEventListener(\"click\", function () {\n    const projectName = prompt(\n      \"What would you like your project to be called?\"\n    );\n    const newProjectObj = new CreateProject(projectName);\n    newProjectObj.pushToBigProjectsArray();\n    saveLocalStorageBigProj(bigProjectsArray);\n    (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.renderBigProjectsArray)();\n  });\n}\n\n///////////////////////////////////////////// LOCAL STORAGE\n\nfunction saveToLocalStorage(myVal) {\n  localStorage.setItem(\"value\", JSON.stringify(myVal));\n}\n\nfunction getLocalStorage() {\n  const ourStorage = JSON.parse(localStorage.getItem(\"value\"));\n  return ourStorage;\n}\n\nfunction saveLocalStorageBigProj(myVal) {\n  localStorage.setItem(\"bigProj\", JSON.stringify(myVal));\n}\n\nfunction getLocalStorageBigProj() {\n  const ourStorage = JSON.parse(localStorage.getItem(\"bigProj\"));\n  console.log(ourStorage);\n  return ourStorage;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/application-module.js?");

/***/ }),

/***/ "./src/dom-module.js":
/*!***************************!*\
  !*** ./src/dom-module.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDoElement: () => (/* binding */ createToDoElement),\n/* harmony export */   getUserDescription: () => (/* binding */ getUserDescription),\n/* harmony export */   getUserDueDate: () => (/* binding */ getUserDueDate),\n/* harmony export */   getUserPriority: () => (/* binding */ getUserPriority),\n/* harmony export */   getUserTitle: () => (/* binding */ getUserTitle),\n/* harmony export */   renderBigProjectsArray: () => (/* binding */ renderBigProjectsArray),\n/* harmony export */   renderProject: () => (/* binding */ renderProject)\n/* harmony export */ });\n/* harmony import */ var _application_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-module */ \"./src/application-module.js\");\n\n\n// HTML input elements\nconst userTitle = document.getElementById(\"title\");\nconst userDescription = document.getElementById(\"description\");\nconst userDueDate = document.getElementById(\"due-date\");\nconst userPriority = document.getElementById(\"priority\");\nconst contentDiv = document.getElementById(\"content\");\n\nconst bigProjectsContainer = document.getElementById(\"projects-container\");\n\nconst createProjectBtn = document.getElementById(\"create-project\");\n\nconst projectHeader = document.getElementById(\"project-header\");\n\n///////// Get user inputs /////////\nfunction getUserTitle() {\n  return userTitle.value;\n}\nfunction getUserDescription() {\n  return userDescription.value;\n}\nfunction getUserDueDate() {\n  return userDueDate.value;\n}\nfunction getUserPriority() {\n  return userPriority.value;\n}\n////////////////////////////////////\n\n// RENDERING INDIVIDUAL PROJECTS INSIDE CONTENT DIV\n\nfunction renderProjectHeader(projectName) {\n  const projectHeader = document.createElement(\"h2\");\n  projectHeader.textContent = projectName;\n  contentDiv.prepend(projectHeader);\n}\n\n// Create a ToDo Element\nfunction createToDoElement() {\n  const newTodo = document.createElement(\"p\");\n  content.appendChild(newTodo);\n  return newTodo;\n}\n\nfunction createDiv(element) {\n  const newDiv = document.createElement(\"div\");\n  element.appendChild(newDiv);\n  return newDiv;\n}\n\nfunction renderProjectAddBtn() {\n  const addButton = document.createElement(\"button\");\n  addButton.textContent = \"Add To Do Item\";\n  contentDiv.appendChild(addButton);\n  return addButton;\n}\n\nfunction showButtonFunction(button, element, arrayElement, className) {\n  button.addEventListener(\"click\", function () {\n    if (arrayElement.showOrHide === \"hide\") {\n      element.classList.remove(arrayElement.showOrHide);\n      arrayElement.showOrHide = \"show\";\n    } else if (arrayElement.showOrHide === \"show\") {\n      element.classList.remove(arrayElement.showOrHide);\n      arrayElement.showOrHide = \"hide\";\n    }\n    console.log(arrayElement.showOrHide);\n    element.classList.add(arrayElement.showOrHide);\n  });\n}\n\n// Render individual project inside content Div\n\nfunction renderProject(projectArray) {\n  (0,_application_module__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projectArray);\n  (0,_application_module__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorageBigProj)(_application_module__WEBPACK_IMPORTED_MODULE_0__.bigProjectsArray);\n\n  // Reset content div innerHTMl\n  contentDiv.innerHTML = \"\";\n\n  // Create a new add button\n  const newAddButton = renderProjectAddBtn();\n  (0,_application_module__WEBPACK_IMPORTED_MODULE_0__.addButtonEventListener)(projectArray, newAddButton);\n\n  // For each element in the project array, create an element with the information and a remove button\n  projectArray.forEach(function (arrayElement) {\n    const newToDoElement = createToDoElement();\n    newToDoElement.classList.add(\"to-do-card\");\n\n    // Create separate divs in each to do card\n    const topDiv = createDiv(newToDoElement);\n    const bottomDiv = createDiv(newToDoElement);\n\n    // Create show button function\n    const showButton = document.createElement(\"button\");\n    showButton.textContent = \"Show more\";\n    showButtonFunction(showButton, bottomDiv, arrayElement);\n    topDiv.textContent = `Title: ${arrayElement.title} Due Date: ${arrayElement.dueDate}`;\n    topDiv.classList.add(\"title-div\");\n    topDiv.appendChild(showButton);\n\n    bottomDiv.textContent = `Description: ${arrayElement.description} Priority: ${arrayElement.priority}`;\n\n    const showOrHide = arrayElement.showOrHide;\n\n    newToDoElement.style.opacity = arrayElement.opacity;\n\n    bottomDiv.classList.add(showOrHide, \"detail-div\");\n\n    // Remove button\n    const removeBtn = createRemoveButton(newToDoElement);\n    newToDoElement.dataset.index = projectArray.indexOf(arrayElement);\n    (0,_application_module__WEBPACK_IMPORTED_MODULE_0__.addRemoveFunction)(removeBtn, newToDoElement.dataset.index, projectArray);\n\n    // Edit button\n    const editBtn = createEditButton(bottomDiv);\n    editBtnFunction(editBtn, arrayElement, projectArray, bottomDiv);\n\n    // Priority dropdown with ability to edit\n    const priorityDropdown = createPriorityDropdown(bottomDiv, arrayElement);\n    priorityDropdownFunction(priorityDropdown, arrayElement, projectArray);\n\n    // Complete To Do button\n    const completedBtn = createCompleteToDoButton(topDiv);\n    toDoCompleteFunction(\n      completedBtn,\n      newToDoElement,\n      arrayElement,\n      projectArray\n    );\n  });\n}\n\n// Create a HTML remove button\nfunction createRemoveButton(element) {\n  const newBtn = document.createElement(\"button\");\n  newBtn.textContent = \"Remove\";\n  newBtn.classList.add(\"remove-button\");\n  element.appendChild(newBtn);\n  return newBtn;\n}\n\n// Create a HTML edit button\nfunction createEditButton(element) {\n  const editBtn = document.createElement(\"button\");\n  editBtn.textContent = \"Edit\";\n  editBtn.classList.add(\"edit-button\");\n  element.appendChild(editBtn);\n  return editBtn;\n}\n\n// Edit button function\nfunction editBtnFunction(button, arrayElement, projectArray, div) {\n  button.addEventListener(\"click\", function () {\n    const newDetails = prompt(\"What do you want the new details to be?\");\n\n    arrayElement.description = newDetails;\n\n    renderProject(projectArray);\n  });\n}\n\nfunction createPriorityDropdown(element, arrayElement) {\n  const priorityDropdown = document.createElement(\"select\");\n  const optionOne = document.createElement(\"option\");\n  optionOne.textContent = \"High\";\n  optionOne.value = \"High\";\n  const optionTwo = document.createElement(\"option\");\n  optionTwo.textContent = \"Medium\";\n  optionTwo.value = \"Medium\";\n  const optionThree = document.createElement(\"option\");\n  optionThree.textContent = \"Low\";\n  optionThree.value = \"Low\";\n\n  if (arrayElement.priority === \"High\") {\n    optionOne.setAttribute(\"selected\", true);\n  } else if (arrayElement.priority === \"Medium\") {\n    optionTwo.setAttribute(\"selected\", true);\n  } else if (arrayElement.priority === \"Low\") {\n    optionThree.setAttribute(\"selected\", true);\n  }\n  priorityDropdown.appendChild(optionOne);\n  priorityDropdown.appendChild(optionTwo);\n  priorityDropdown.appendChild(optionThree);\n  element.appendChild(priorityDropdown);\n  return priorityDropdown;\n}\n\nfunction priorityDropdownFunction(button, arrayElement, projectArray) {\n  button.addEventListener(\"change\", function () {\n    arrayElement.priority = button.value;\n\n    renderProject(projectArray);\n  });\n}\n\nfunction createCompleteToDoButton(element) {\n  const button = document.createElement(\"button\");\n  button.textContent = \"Complete\";\n  element.appendChild(button);\n\n  return button;\n}\n\nfunction toDoCompleteFunction(button, element, arrayElement, projectArray) {\n  button.addEventListener(\"click\", function () {\n    arrayElement.opacity = 0.5;\n    renderProject(projectArray);\n  });\n}\n\n///////////////////////// BIG PROJECT ARRAY & PROJECTS //////////////////////////////////////////////////////////\n\n(0,_application_module__WEBPACK_IMPORTED_MODULE_0__.addCreateProjectFunction)(createProjectBtn);\n\n// Create project  elements\nfunction createProjectElement() {\n  const projectButton = document.createElement(\"button\");\n  bigProjectsContainer.appendChild(projectButton);\n  return projectButton;\n}\n\n// Render the projects array inside the projects container\nfunction renderBigProjectsArray() {\n  // Reset the innerHTML of the projects div\n  bigProjectsContainer.innerHTML = \"\";\n\n  _application_module__WEBPACK_IMPORTED_MODULE_0__.bigProjectsArray.forEach(function (arrayElement) {\n    // Create project element and add classes + display the name of the project element (which is inside the big project)\n    const newProjectElement = createProjectElement();\n    newProjectElement.classList.add(\"project-button\");\n    newProjectElement.textContent = arrayElement.name;\n\n    // Add an event listener to each project element to render that project inside the big project array\n    newProjectElement.addEventListener(\"click\", function () {\n      // Render the current array elements project array\n      renderProject(arrayElement.projectArray);\n\n      projectHeader.textContent = arrayElement.name;\n    });\n\n    // Add each project element to the big projects container\n    bigProjectsContainer.appendChild(newProjectElement);\n  });\n}\n\n\n\n/*\n\n\n*/\n\n\n//# sourceURL=webpack://todo-list/./src/dom-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-module */ \"./src/application-module.js\");\n/* harmony import */ var _dom_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-module */ \"./src/dom-module.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst savedBigProj = (0,_application_module__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageBigProj)();\nconsole.log(savedBigProj);\n(0,_dom_module__WEBPACK_IMPORTED_MODULE_1__.renderBigProjectsArray)(savedBigProj);\n\nconst savedData = (0,_application_module__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n(0,_dom_module__WEBPACK_IMPORTED_MODULE_1__.renderProject)(savedData);\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;