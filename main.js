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

/***/ "./src/create-todo-elements.js":
/*!*************************************!*\
  !*** ./src/create-todo-elements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoCards: () => (/* binding */ createTodoCards)\n/* harmony export */ });\nfunction createTodoCards(title, description, dueDate, priority) {\n  const content = document.getElementById(\"content\");\n  const newTodo = document.createElement(\"ul\");\n  const titleField = document.createElement(\"li\");\n  const descriptionField = document.createElement(\"li\");\n  const dueDateField = document.createElement(\"li\");\n  const priorityField = document.createElement(\"li\");\n\n  content.appendChild(newTodo);\n  newTodo.appendChild(titleField);\n  newTodo.appendChild(descriptionField);\n  newTodo.appendChild(dueDateField);\n  newTodo.appendChild(priorityField);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/create-todo-elements.js?");

/***/ }),

/***/ "./src/createtodo.js":
/*!***************************!*\
  !*** ./src/createtodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDoCreate: () => (/* binding */ ToDoCreate)\n/* harmony export */ });\nclass ToDoCreate {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  returnToDo() {\n    return console.log(\n      this.title,\n      this.description,\n      this.dueDate,\n      this.priority\n    );\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/createtodo.js?");

/***/ }),

/***/ "./src/getuserValues.js":
/*!******************************!*\
  !*** ./src/getuserValues.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo)\n/* harmony export */ });\nconst userTitle = document.getElementById(\"title\");\nconst userDescription = document.getElementById(\"description\");\nconst userDueDate = document.getElementById(\"due-date\");\nconst userPriority = document.getElementById(\"priority\");\n\nfunction getUserTitle() {\n  console.log(userTitle.value);\n}\nfunction getUserDescription() {\n  console.log(userDescription.value);\n}\nfunction getUserDueDate() {\n  console.log(userDueDate.value);\n}\nfunction getUserPriority() {\n  console.log(userPriority.value);\n}\n\nfunction getUserInfo() {\n  getUserTitle();\n  getUserDescription();\n  getUserDueDate();\n  getUserPriority();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/getuserValues.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createtodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtodo */ \"./src/createtodo.js\");\n/* harmony import */ var _create_todo_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-todo-elements */ \"./src/create-todo-elements.js\");\n/* harmony import */ var _getuserValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getuserValues */ \"./src/getuserValues.js\");\n\n\n\n\nconst submitBtn = document.getElementById(\"submit\");\n\nsubmitBtn.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  console.log(new _createtodo__WEBPACK_IMPORTED_MODULE_0__.ToDoCreate((0,_getuserValues__WEBPACK_IMPORTED_MODULE_2__.getUserInfo)()));\n});\n\nlet projectOne = [];\n\nconst title = \"take bin out\";\nconst description = \"separate recycling and landfill\";\nconst dueDate = \"21/4/23\";\nconst priority = \"high\";\n\nconst newToDoItem = function () {\n  projectOne.push(new _createtodo__WEBPACK_IMPORTED_MODULE_0__.ToDoCreate(title, description, dueDate, priority));\n  console.log(projectOne);\n};\n\nnewToDoItem();\nnewToDoItem();\nnewToDoItem();\n\n(0,_create_todo_elements__WEBPACK_IMPORTED_MODULE_1__.createTodoCards)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;