/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("var root = document.querySelector(\"#root\");\r\nvar navList = [\"/pages/alphabet\", \"/pages/flex_panel\", \"/pages/clock\", \"/pages/search\", \"/pages/canvas\", \"/pages/checkbox\"];\r\nvar navbar = document.createElement(\"div\");\r\nvar homeNav = document.createElement(\"a\");\r\nhomeNav.textContent = \"Home\";\r\nhomeNav.href = \"/dist/\";\r\nhomeNav.style.textDecoration = \"none\";\r\nhomeNav.style.marginLeft = \"50px\";\r\nhomeNav.style.color = \"white\";\r\nnavbar.append(homeNav);\r\nvar navs = document.createElement(\"div\");\r\nnavList.map(function (navLink) {\r\n    var nav = document.createElement(\"a\");\r\n    nav.href = \"/dist\".concat(navLink, \".html\");\r\n    var link = navLink.lastIndexOf(\"/\") ? navLink.slice(navLink.lastIndexOf(\"/\") + 1) : navLink;\r\n    nav.textContent = link[0].toUpperCase() + link.slice(1);\r\n    nav.style.textDecoration = \"none\";\r\n    nav.style.margin = \"0 10px\";\r\n    nav.style.color = \"white\";\r\n    navs.append(nav);\r\n});\r\nnavs.style.padding = \"0 50px\";\r\nnavbar.append(navs);\r\nnavbar.classList.add(\"navbar\");\r\nroot.append(navbar);\r\n\n\n//# sourceURL=webpack://projects/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;