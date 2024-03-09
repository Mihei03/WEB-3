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

/***/ "./src/scripts/Swiper.js":
/*!*******************************!*\
  !*** ./src/scripts/Swiper.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function() {\r\n    // Динамическая загрузка библиотеки Swiper\r\n    var script = document.createElement('script');\r\n    script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';\r\n    script.onload = function() {\r\n    // Инициализация слайдера Swiper\r\n        var swiper = new Swiper('.swiper-container', {\r\n            // Опции слайдера\r\n            loop: true, // Бесконечный цикл\r\n            navigation: {\r\n                nextEl: '.swiper-button-next', // Кнопка \"Next\"\r\n                prevEl: '.swiper-button-prev', // Кнопка \"Prev\"\r\n            },\r\n        });\r\n    }\r\n    document.head.appendChild(script);\r\n});\n\n//# sourceURL=webpack://web-3.1/./src/scripts/Swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/Swiper.js"]();
/******/ 	
/******/ })()
;