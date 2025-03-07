/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"maps/highlighted-region/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Samples/maps/highlighted-region/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/highlighted-region/App.vue":
/*!*************************************************!*\
  !*** ./Samples/maps/highlighted-region/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0618bc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0618bc54& */ \"./Samples/maps/highlighted-region/App.vue?vue&type=template&id=0618bc54&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/highlighted-region/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0618bc54___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0618bc54___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/highlighted-region/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/App.vue?");

/***/ }),

/***/ "./Samples/maps/highlighted-region/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/maps/highlighted-region/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/App.vue?");

/***/ }),

/***/ "./Samples/maps/highlighted-region/App.vue?vue&type=template&id=0618bc54&":
/*!********************************************************************************!*\
  !*** ./Samples/maps/highlighted-region/App.vue?vue&type=template&id=0618bc54& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0618bc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0618bc54& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/App.vue?vue&type=template&id=0618bc54&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0618bc54___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0618bc54___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/App.vue?");

/***/ }),

/***/ "./Samples/maps/highlighted-region/earthquake-temp.vue":
/*!*************************************************************!*\
  !*** ./Samples/maps/highlighted-region/earthquake-temp.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _earthquake_temp_vue_vue_type_template_id_d986b1b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./earthquake-temp.vue?vue&type=template&id=d986b1b2&scoped=true& */ \"./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=template&id=d986b1b2&scoped=true&\");\n/* harmony import */ var _earthquake_temp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./earthquake-temp.vue?vue&type=script&lang=js& */ \"./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _earthquake_temp_vue_vue_type_style_index_0_id_d986b1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css& */ \"./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _earthquake_temp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _earthquake_temp_vue_vue_type_template_id_d986b1b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _earthquake_temp_vue_vue_type_template_id_d986b1b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d986b1b2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/highlighted-region/earthquake-temp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/earthquake-temp.vue?");

/***/ }),

/***/ "./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./earthquake-temp.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/earthquake-temp.vue?");

/***/ }),

/***/ "./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_style_index_0_id_d986b1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_style_index_0_id_d986b1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_style_index_0_id_d986b1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_style_index_0_id_d986b1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_style_index_0_id_d986b1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_style_index_0_id_d986b1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/earthquake-temp.vue?");

/***/ }),

/***/ "./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=template&id=d986b1b2&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=template&id=d986b1b2&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_template_id_d986b1b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./earthquake-temp.vue?vue&type=template&id=d986b1b2&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=template&id=d986b1b2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_template_id_d986b1b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_earthquake_temp_vue_vue_type_template_id_d986b1b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/earthquake-temp.vue?");

/***/ }),

/***/ "./Samples/maps/highlighted-region/main.js":
/*!*************************************************!*\
  !*** ./Samples/maps/highlighted-region/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/highlighted-region/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.pulse-css[data-v-d986b1b2] {\\nwidth: 20px;\\nheight: 20px;\\n-webkit-border-radius: 20px;\\n-moz-border-radius: 20px;\\nborder-radius: 20px;\\nbackground:#E94430;\\nposition: relative;\\n}\\n.pulse-css[data-v-d986b1b2]:before, .pulse-css[data-v-d986b1b2]:after {\\ncontent: '';\\nwidth: 20px;\\nheight: 20px;\\n-webkit-border-radius: 20px;\\n-moz-border-radius: 20px;\\nborder-radius: 20px;\\nbackground-color: #E94430;\\nposition: absolute;\\ntop: 0;\\nright: 0;\\nbottom: 0;\\nleft: 0;\\nmargin: auto;\\ntransform: scale(0.5);\\ntransform-origin: center center;\\nanimation: pulse-me-data-v-d986b1b2 3s linear infinite;\\n}\\n.pulse-css[data-v-d986b1b2]:after {\\nanimation-delay: 2s;\\n}\\n@keyframes pulse-me-data-v-d986b1b2 {\\n0% {\\n    transform: scale(0.5);\\n    opacity: 0;\\n}\\n50% {\\n    opacity: 0.3;\\n}\\n70% {\\n    opacity: 0.1;\\n}\\n100% {\\n    transform: scale(5);\\n    opacity: 0;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;AACA,YAAY;AACZ,aAAa;AACb,4BAA4B;AAC5B,yBAAyB;AACzB,oBAAoB;AACpB,mBAAmB;AACnB,mBAAmB;CAClB;AACD;AACA,YAAY;AACZ,YAAY;AACZ,aAAa;AACb,4BAA4B;AAC5B,yBAAyB;AACzB,oBAAoB;AACpB,0BAA0B;AAC1B,mBAAmB;AACnB,OAAO;AACP,SAAS;AACT,UAAU;AACV,QAAQ;AACR,aAAa;AACb,sBAAsB;AACtB,gCAAgC;AAChC,uDAAuD;CACtD;AACD;AACA,oBAAoB;CACnB;AACD;AACA;IACI,sBAAsB;IACtB,WAAW;CACd;AACD;IACI,aAAa;CAChB;AACD;IACI,aAAa;CAChB;AACD;IACI,oBAAoB;IACpB,WAAW;CACd;CACA\",\"file\":\"earthquake-temp.vue?vue&type=style&index=0&id=d986b1b2&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.pulse-css[data-v-d986b1b2] {\\nwidth: 20px;\\nheight: 20px;\\n-webkit-border-radius: 20px;\\n-moz-border-radius: 20px;\\nborder-radius: 20px;\\nbackground:#E94430;\\nposition: relative;\\n}\\n.pulse-css[data-v-d986b1b2]:before, .pulse-css[data-v-d986b1b2]:after {\\ncontent: '';\\nwidth: 20px;\\nheight: 20px;\\n-webkit-border-radius: 20px;\\n-moz-border-radius: 20px;\\nborder-radius: 20px;\\nbackground-color: #E94430;\\nposition: absolute;\\ntop: 0;\\nright: 0;\\nbottom: 0;\\nleft: 0;\\nmargin: auto;\\ntransform: scale(0.5);\\ntransform-origin: center center;\\nanimation: pulse-me-data-v-d986b1b2 3s linear infinite;\\n}\\n.pulse-css[data-v-d986b1b2]:after {\\nanimation-delay: 2s;\\n}\\n@keyframes pulse-me-data-v-d986b1b2 {\\n0% {\\n    transform: scale(0.5);\\n    opacity: 0;\\n}\\n50% {\\n    opacity: 0.3;\\n}\\n70% {\\n    opacity: 0.1;\\n}\\n100% {\\n    transform: scale(5);\\n    opacity: 0;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/earthquake-temp.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/highlighted-region/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/highlighted'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _earthquake_temp_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earthquake-temp.vue */ \"./Samples/maps/highlighted-region/earthquake-temp.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            centerPosition: {\n                latitude: 35.65,\n                longitude: -97.3\n            },\n            zoomSettings: {\n                enable: false,\n                toolbars: [],\n                mouseWheelZoom: false,\n                zoomFactor: 1.75\n            },\n            animationDuration: 1000,\n            shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/oklahoma.json'),\n            shapeSettings: {\n                fill: '#F5F5F5',\n                border: {\n                    color: '#EEDA97',\n                    width: 1\n                }\n            },\n            markerSettings: [{\n                    width: 20,\n                    height: 20,\n                    animationDuration: 0,\n                    visible: true,\n                    shape: 'Image',\n                    imageUrl: './../../source/maps/images/ballon.png',\n                    fill: '#000080',\n                    border: {\n                        color: 'transparent'\n                    },\n                    dataSource: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/highlighted'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\n                },\n                {\n                    animationDuration: 0,\n                    visible: true,\n                    shape: 'Circle',\n                    width: 130,\n                    height: 130,\n                    fill: 'rgba(70,130,180,0.3)',\n                    dataSource: [{\n                        latitude: 35.5112516,\n                        longitude: -97.5843,\n                        text: '10/18 ATMs'\n                    }],\n                    border: {\n                        color: 'transparent'\n                    },\n                    tooltipSettings: {\n                        visible: true,\n                        valuePath: 'text'\n                    }\n                },\n                {\n                    animationDuration: 0,\n                    visible: true,\n                    shape: 'Circle',\n                    width: 100,\n                    height: 100,\n                    fill: 'rgba(70,130,180,0.3)',\n                    dataSource: [{\n                        latitude: 36.0808845,\n                        longitude: -96.0205078,\n                        text: '5/18 ATMs'\n                    }],\n                    tooltipSettings: {\n                        visible: true,\n                        valuePath: 'text'\n                    },\n                    border: {\n                        color: 'transparent'\n                    }\n                },\n                {\n                    visible: true,\n                    template: '<div style=\"color: black;\">{{:name}}</div>',\n                    dataSource: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/highlighted'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\n                }\n            ]\n        }\n    },\n    provide: {\n        maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Zoom\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsTooltip\"]]\n    },\n    /* custom code start */\n    methods: {\n        load: function (args) {\n            let selectedTheme = location.hash.split(\"/\")[1];\n            selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n            args.maps.theme =\n                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        }\n    }\n    /* custom code end */\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n        data: {}\n    }\n  },\n});\n\n\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/earthquake-temp.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/App.vue?vue&type=template&id=0618bc54&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/highlighted-region/App.vue?vue&type=template&id=0618bc54& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\n          \"ejs-maps\",\n          {\n            attrs: {\n              id: \"container\",\n              load: _vm.load,\n              centerPosition: _vm.centerPosition,\n              zoomSettings: _vm.zoomSettings\n            }\n          },\n          [\n            _c(\n              \"e-layers\",\n              [\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData,\n                    shapeSettings: _vm.shapeSettings,\n                    animationDuration: _vm.animationDuration,\n                    markerSettings: _vm.markerSettings\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._m(1)\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticStyle: {\n          width: \"300px\",\n          margin: \"0 auto\",\n          \"padding-bottom\": \"10px\"\n        }\n      },\n      [\n        _c(\"img\", {\n          staticStyle: { width: \"25px\", height: \"25px\", float: \"left\" },\n          attrs: {\n            src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../source/maps/images/atm.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n            alt: \"ATM indication\"\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticStyle: {\n              \"padding-left\": \"30px\",\n              \"font-size\": \"18px\",\n              \"font-weight\": \"400\"\n            }\n          },\n          [_vm._v(\"ATM locations in Oklahoma, USA\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n            \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://www.google.co.in/maps/search/atm+in+oklahoma/@35.3864432,-98.2888719,8z/data=!3m1!4b1\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"www.google.co.in/maps\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample depicts the ATM populated areas in Oklahoma by highlighting the regions.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            In this example, you can see how to highlight some specific region by rendering circles. Any custom HTML element can be used as a marker.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            Maps component features are segregated into individual feature-wise modules. To use marker template, you need to inject \"\n        ),\n        _c(\"code\", [_vm._v(\"Marker\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"Maps.Inject(Marker)\")]),\n        _vm._v(\" method.\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=template&id=d986b1b2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/highlighted-region/earthquake-temp.vue?vue&type=template&id=d986b1b2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"template\" } }, [\n      _c(\"div\", { staticClass: \"pulse-container\" }, [\n        _c(\"div\", { staticClass: \"pulse-box\" }, [\n          _c(\"div\", { staticClass: \"pulse-css\" })\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/highlighted-region/earthquake-temp.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });