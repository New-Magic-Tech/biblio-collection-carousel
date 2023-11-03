/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BiblioCarouselApp.js":
/*!**********************************!*\
  !*** ./src/BiblioCarouselApp.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BiblioCarouselApp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);



const BiblioCard = ({
  bookData
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "result-link",
    href: bookData.link
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "result-card-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "result-img",
    src: bookData.img_url,
    alt: bookData.title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
    className: "result-title"
  }, bookData.title)));
};
function BiblioCarouselApp() {
  const [bookDetails, setBookDetails] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [collection, setCollection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [resultStart, setResultStart] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [resultsToDisplay, setResultsToDisplay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const trimArrayToFiveItems = array => {
    return array.slice(resultStart, resultStart + 5);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const carouselBlock = document.querySelector('.biblio_carousel_block');
    if (carouselBlock) {
      setCollection(carouselBlock.dataset.collection);
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (collection) {
      const queryParams = new URLSearchParams({
        collection: collection
      });
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: `/biblio-carousel/v1/book-details?${queryParams.toString()}`
      }).then(data => {
        setBookDetails(data);
      }).catch(error => {
        console.error('Error fetching book details', error);
      });
    }
  }, [collection]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setResultsToDisplay(trimArrayToFiveItems(bookDetails));
  }, [bookDetails]);
  const carouselLeft = () => {
    if (resultStart !== 0) {
      setResultStart(prev => prev - 1);
      setResultsToDisplay(trimArrayToFiveItems(bookDetails));
    }
  };
  const carouselRight = () => {
    if (resultStart < bookDetails.length - 5) {
      setResultStart(prev => prev + 1);
      console.log(resultStart);
      setResultsToDisplay(trimArrayToFiveItems(bookDetails));
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "carousel-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "carousel-button",
    onClick: carouselLeft
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      'font-size': '100px'
    }
  }, "\u21E6")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "results-container"
  }, resultsToDisplay.map((book, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BiblioCard, {
    key: index,
    bookData: book
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "carousel-button",
    onClick: carouselRight
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      'font-size': '100px'
    }
  }, "\u21E8")));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BiblioCarouselApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BiblioCarouselApp */ "./src/BiblioCarouselApp.js");




document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.biblio_carousel_block');
  elements.forEach(element => {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default().render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BiblioCarouselApp__WEBPACK_IMPORTED_MODULE_2__["default"], null), element);
  });
});
}();
/******/ })()
;
//# sourceMappingURL=view.js.map