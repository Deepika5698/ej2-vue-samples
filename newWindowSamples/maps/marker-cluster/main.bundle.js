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
/******/ 		"maps/marker-cluster/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/marker-cluster/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/marker-cluster/App.vue":
/*!*********************************************!*\
  !*** ./Samples/maps/marker-cluster/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_34006f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=34006f0d&scoped=true& */ \"./Samples/maps/marker-cluster/App.vue?vue&type=template&id=34006f0d&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/marker-cluster/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_34006f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css& */ \"./Samples/maps/marker-cluster/App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_34006f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_34006f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"34006f0d\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/marker-cluster/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/marker-cluster/App.vue?");

/***/ }),

/***/ "./Samples/maps/marker-cluster/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/maps/marker-cluster/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/marker-cluster/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/marker-cluster/App.vue?");

/***/ }),

/***/ "./Samples/maps/marker-cluster/App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/maps/marker-cluster/App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34006f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/marker-cluster/App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34006f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34006f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34006f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34006f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34006f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/marker-cluster/App.vue?");

/***/ }),

/***/ "./Samples/maps/marker-cluster/App.vue?vue&type=template&id=34006f0d&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/maps/marker-cluster/App.vue?vue&type=template&id=34006f0d&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34006f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=34006f0d&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/marker-cluster/App.vue?vue&type=template&id=34006f0d&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34006f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34006f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/marker-cluster/App.vue?");

/***/ }),

/***/ "./Samples/maps/marker-cluster/main.js":
/*!*********************************************!*\
  !*** ./Samples/maps/marker-cluster/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/marker-cluster/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/marker-cluster/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/marker-cluster/App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/marker-cluster/App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.toolback[data-v-34006f0d] {\\n    border-radius: 4px;\\n    border: 1px #abb9c6;\\n    opacity: 90%;\\n    background: rgba(53, 63, 76, 0.90);\\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);\\n    padding-bottom: 10px;\\n    padding-top: 10px;\\n    padding-left: 10px;\\n    padding-right: 10px;\\n    width: 140px;\\n}\\n.listing1[data-v-34006f0d] {\\n     font-size:13px;\\n     color:#cccccc\\n}\\n.listing2[data-v-34006f0d] {\\n     font-size:13px;\\n     color:#ffffff;\\n     font-weight: 500;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/marker-cluster/App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,aAAa;IACb,mCAAmC;IACnC,4CAA4C;IAC5C,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,aAAa;CAChB;AACD;KACK,eAAe;KACf,aAAa;CACjB;AACD;KACK,eAAe;KACf,cAAc;KACd,iBAAiB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=34006f0d&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.toolback[data-v-34006f0d] {\\n    border-radius: 4px;\\n    border: 1px #abb9c6;\\n    opacity: 90%;\\n    background: rgba(53, 63, 76, 0.90);\\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);\\n    padding-bottom: 10px;\\n    padding-top: 10px;\\n    padding-left: 10px;\\n    padding-right: 10px;\\n    width: 140px;\\n}\\n.listing1[data-v-34006f0d] {\\n     font-size:13px;\\n     color:#cccccc\\n}\\n.listing2[data-v-34006f0d] {\\n     font-size:13px;\\n     color:#ffffff;\\n     font-weight: 500;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/marker-cluster/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/marker-cluster/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/marker-cluster/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/marker-location'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/marker-cluster'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n        useGroupingSeparator: true,\n        zoomSettings: {\n            enable: true\n        },\n        titleSettings: {\n            text: 'Top 50 largest cities in the World',\n            textStyle: {\n                size: '16px'\n            }\n        },\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/world-map.json'),\n        shapeSettings: {\n                    fill: '#C1DFF5'\n        },\n        markerClusterSettings: {\n             allowClustering: true,\n             shape: 'Image',\n             height: 40,\n             width: 40,\n             labelStyle : { color: 'white'},\n             imageUrl: './../../source/maps/images/cluster.svg'\n        },\n        markerSettings: [\n                    {\n                        dataSource: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/marker-cluster'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n                        visible: true,\n                        shape: 'Image',\n                        imageUrl: './../../source/maps/images/ballon.png',\n                        height:20,\n                        width:20,\n                        animationDuration:0,\n                        tooltipSettings: {\n                            visible: true,\n                            valuePath: 'area',\n                            template:'#template'\n                        }\n                    },\n        ]\n    }\n},\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsTooltip\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Zoom\"]]\n},\n/* custom code start */\nmethods:{\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    } \n}\n/* custom code end */\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/marker-cluster/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/marker-cluster/App.vue?vue&type=template&id=34006f0d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/marker-cluster/App.vue?vue&type=template&id=34006f0d&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-maps\",\n          {\n            attrs: {\n              id: \"container\",\n              load: _vm.load,\n              titleSettings: _vm.titleSettings,\n              zoomSettings: _vm.zoomSettings,\n              useGroupingSeparator: _vm.useGroupingSeparator,\n              format: \"n\"\n            }\n          },\n          [\n            _c(\n              \"e-layers\",\n              [\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData,\n                    shapeSettings: _vm.shapeSettings,\n                    markerClusterSettings: _vm.markerClusterSettings,\n                    markerSettings: _vm.markerSettings\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._m(0)\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticStyle: { display: \"none\" }, attrs: { id: \"template\" } }, [\n      _c(\"div\", { staticClass: \"toolback\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"listing2\" },\n          [\n            _c(\"center\", [\n              _vm._v(\n                \"\\n                        ${city}                                            \\n                    \"\n              )\n            ])\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"hr\", {\n          staticStyle: {\n            \"margin-top\": \"2px\",\n            \"margin-bottom\": \"5px\",\n            border: \"0.5px solid #DDDDDD\"\n          }\n        }),\n        _vm._v(\" \"),\n        _vm._m(1),\n        _vm._v(\" \"),\n        _vm._m(2)\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(3),\n    _vm._v(\" \"),\n    _vm._m(4)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n           \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"http://www.citymayors.com/statistics/largest-cities-area-125.html\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"www.citymayors.com\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", [\n      _c(\"span\", { staticClass: \"listing1\" }, [_vm._v(\"Rank : \")]),\n      _c(\"span\", { staticClass: \"listing2\" }, [_vm._v(\"${Rank}\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", [\n      _c(\"span\", { staticClass: \"listing1\" }, [_vm._v(\"Area : \")]),\n      _c(\"span\", { staticClass: \"listing2\" }, [_vm._v(\"${area} sq kms\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample illustrates the world's top 50 cities by showing the markers in their locations and clustering the markers to avoid intersecting.\\n       \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          '\\n          In this example, you can see how to display multiple markers in the same region without intersecting each other. If a marker intersects, \\n          it will be clustered and the total number of markers will be displayed over the cluster. \\n          When zooming in, the number of clusters will be decreased, and the individual marker will be displayed. \\n          When zooming out, markers that intersect will again be clustered. You can use the \"clusterSettings\" property \\n          in \"layer\" to enable marker clustering.\\n    \\n        '\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Maps component features are segregated into individual feature-wise modules. To use a marker and cluster, inject the Marker module using the Maps.Inject(Marker) method.\\n        \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/marker-cluster/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });