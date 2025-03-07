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
/******/ 		"heatmap/cell-selection/main": 0
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
/******/ 	deferredModules.push(["./Samples/heatmap/cell-selection/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/heatmap/cell-selection/App.vue":
/*!************************************************!*\
  !*** ./Samples/heatmap/cell-selection/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1a73a56c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1a73a56c& */ \"./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1a73a56c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1a73a56c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/heatmap/cell-selection/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-selection/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/heatmap/cell-selection/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c&":
/*!*******************************************************************************!*\
  !*** ./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1a73a56c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1a73a56c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1a73a56c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1a73a56c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-selection/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/cell-selection/cell-seletion-data.json":
/*!****************************************************************!*\
  !*** ./Samples/heatmap/cell-selection/cell-seletion-data.json ***!
  \****************************************************************/
/*! exports provided: cellSeletionData, chartData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"cellSeletionData\\\":[[2.9,5.2,3.4,5.6,4.4],[6.6,4.8,8,3.9,6.5],[5.1,4.6,5.4,3.9,4.3],[5.2,4.3,3.9,6.2,6.4],[7,3,1.9,5.9,3.5],[7.8,5.9,3.9,4.3,4.3],[6.5,4.3,3.9,5.2,3.9]],\\\"chartData\\\":[{\\\"type\\\":\\\"Column\\\",\\\"xName\\\":\\\"x\\\",\\\"width\\\":2,\\\"yName\\\":\\\"y\\\",\\\"name\\\":\\\"Cereals\\\",\\\"dataSource\\\":[{\\\"x\\\":\\\"2014\\\",\\\"y\\\":2.9},{\\\"x\\\":\\\"2015\\\",\\\"y\\\":5.2},{\\\"x\\\":\\\"2016\\\",\\\"y\\\":3.4},{\\\"x\\\":\\\"2017\\\",\\\"y\\\":5.6},{\\\"x\\\":\\\"2018\\\",\\\"y\\\":4.4}],\\\"marker\\\":{\\\"dataLabel\\\":{\\\"visible\\\":false}}},{\\\"type\\\":\\\"Column\\\",\\\"xName\\\":\\\"x\\\",\\\"width\\\":2,\\\"yName\\\":\\\"y\\\",\\\"name\\\":\\\"Meat\\\",\\\"dataSource\\\":[{\\\"x\\\":\\\"2014\\\",\\\"y\\\":6.6},{\\\"x\\\":\\\"2015\\\",\\\"y\\\":4.8},{\\\"x\\\":\\\"2016\\\",\\\"y\\\":8},{\\\"x\\\":\\\"2017\\\",\\\"y\\\":3.9},{\\\"x\\\":\\\"2018\\\",\\\"y\\\":6.5}],\\\"marker\\\":{\\\"dataLabel\\\":{\\\"visible\\\":false}}},{\\\"type\\\":\\\"Column\\\",\\\"xName\\\":\\\"x\\\",\\\"width\\\":2,\\\"yName\\\":\\\"y\\\",\\\"name\\\":\\\"Spices\\\",\\\"dataSource\\\":[{\\\"x\\\":\\\"2014\\\",\\\"y\\\":5.1},{\\\"x\\\":\\\"2015\\\",\\\"y\\\":4.6},{\\\"x\\\":\\\"2016\\\",\\\"y\\\":5.4},{\\\"x\\\":\\\"2017\\\",\\\"y\\\":3.9},{\\\"x\\\":\\\"2018\\\",\\\"y\\\":4.3}],\\\"marker\\\":{\\\"dataLabel\\\":{\\\"visible\\\":false}}},{\\\"type\\\":\\\"Column\\\",\\\"xName\\\":\\\"x\\\",\\\"width\\\":2,\\\"yName\\\":\\\"y\\\",\\\"name\\\":\\\"Tea\\\",\\\"dataSource\\\":[{\\\"x\\\":\\\"2014\\\",\\\"y\\\":5.2},{\\\"x\\\":\\\"2015\\\",\\\"y\\\":4.3},{\\\"x\\\":\\\"2016\\\",\\\"y\\\":3.9},{\\\"x\\\":\\\"2017\\\",\\\"y\\\":6.2},{\\\"x\\\":\\\"2018\\\",\\\"y\\\":6.4}],\\\"marker\\\":{\\\"dataLabel\\\":{\\\"visible\\\":false}}},{\\\"type\\\":\\\"Column\\\",\\\"xName\\\":\\\"x\\\",\\\"width\\\":2,\\\"yName\\\":\\\"y\\\",\\\"name\\\":\\\"Edible Oil\\\",\\\"dataSource\\\":[{\\\"x\\\":\\\"2014\\\",\\\"y\\\":7},{\\\"x\\\":\\\"2015\\\",\\\"y\\\":3},{\\\"x\\\":\\\"2016\\\",\\\"y\\\":1.9},{\\\"x\\\":\\\"2017\\\",\\\"y\\\":5.9},{\\\"x\\\":\\\"2018\\\",\\\"y\\\":3.5}],\\\"marker\\\":{\\\"dataLabel\\\":{\\\"visible\\\":false}}},{\\\"type\\\":\\\"Column\\\",\\\"xName\\\":\\\"x\\\",\\\"width\\\":2,\\\"yName\\\":\\\"y\\\",\\\"name\\\":\\\"Dairy Products\\\",\\\"dataSource\\\":[{\\\"x\\\":\\\"2014\\\",\\\"y\\\":7.8},{\\\"x\\\":\\\"2015\\\",\\\"y\\\":5.9},{\\\"x\\\":\\\"2016\\\",\\\"y\\\":3.9},{\\\"x\\\":\\\"2017\\\",\\\"y\\\":4.3},{\\\"x\\\":\\\"2018\\\",\\\"y\\\":4.5}],\\\"marker\\\":{\\\"dataLabel\\\":{\\\"visible\\\":false}}},{\\\"type\\\":\\\"Column\\\",\\\"xName\\\":\\\"x\\\",\\\"width\\\":2,\\\"yName\\\":\\\"y\\\",\\\"name\\\":\\\"Wheat\\\",\\\"dataSource\\\":[{\\\"x\\\":\\\"2014\\\",\\\"y\\\":6.5},{\\\"x\\\":\\\"2015\\\",\\\"y\\\":4.3},{\\\"x\\\":\\\"2016\\\",\\\"y\\\":3.9},{\\\"x\\\":\\\"2017\\\",\\\"y\\\":5.2},{\\\"x\\\":\\\"2018\\\",\\\"y\\\":3.9}],\\\"marker\\\":{\\\"dataLabel\\\":{\\\"visible\\\":false}}}]}\");\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-selection/cell-seletion-data.json?");

/***/ }),

/***/ "./Samples/heatmap/cell-selection/main.js":
/*!************************************************!*\
  !*** ./Samples/heatmap/cell-selection/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/cell-selection/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-selection/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell-seletion-data.json */ \"./Samples/heatmap/cell-selection/cell-seletion-data.json\");\nvar _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./cell-seletion-data.json */ \"./Samples/heatmap/cell-selection/cell-seletion-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"HeatMapPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        titleSettings: {\n            text:'Top export products 2014-2018, Value in USD million'\n        },\n         xAxis: {\n            labels: ['Cereals', 'Meat', 'Spices', 'Tea', 'Edible Oil', 'Dairy Products', 'Wheat']\n        },\n        yAxis: {\n            labels:['2014','2015','2016','2017','2018']\n        },\n        allowSelection:true,\n        dataSource: _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_4__[\"cellSeletionData\"],\n        paletteSettings: {\n             palette: [\n                {color: '#3C5E62 '},\n                {color: '#86C843 '}\n            ]\n        },\n        legendSettings: {\n            visible: false\n        },\n        primaryXAxis: {\n        valueType: 'Category', interval: 1, majorGridLines: { width: 0 }\n    },\n    chartArea: { border: { width: 0 } },\n    primaryYAxis:\n    {\n        majorGridLines: { width: 0 },\n        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }\n    },\n    series: _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_4__[\"chartData\"],\n    tooltip: {\n        enable: true\n    }\n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"]],\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DataLabel\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"]]\n},\nmethods: {\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    chartLoad: function(args)\n    {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.chart.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    cellSelected: function(args)\n    {\n        let data = args.data\n            let length = data.length;\n            let xAxis = [];\n            let flag = [];\n            let series = [];\n             for (let i= 0; i < length; i++) {\n                 if (xAxis.indexOf(data[i].xLabel) === -1) {\n                     xAxis.push(data[i].xLabel);\n                     flag.push(false);\n                 }\n             }\n             for (var i = 0; i < length; i++) {\n                 var index = xAxis.indexOf(data[i].xLabel);\n                 if (!flag[index]) {\n                     flag[index] = true;\n                     var column = {};\n                     column.type = 'Column';\n                     column.xName = 'x';\n                     column.yName = 'y';\n                     column.width = 2;\n                     column.name = data[i].xLabel;\n                     column.marker = { dataLabel: { visible: false } };\n                     column.dataSource = [];\n                     var columnData = {};\n                     columnData.x = data[i].yLabel;\n                     columnData.y = data[i].value;\n                     column.dataSource.push(columnData);\n                     series.push(column);\n                 }\n                 else {\n                     var columnData = {};\n                     columnData.x = data[i].yLabel;\n                     columnData.y = data[i].value;\n                     series[index].dataSource.push(columnData);\n                 }\n             }\n             this.$refs.chart.ej2Instances.series = series;\n             this.$refs.chart.ej2Instances.refresh();\n    },\n    onClick: function(){\n        this.$refs.heatmap.ej2Instances.clearSelection();\n        this.$refs.chart.ej2Instances.series = _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_4__[\"chartData\"];\n        this.$refs.chart.ej2Instances.refresh();\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-selection/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section col-lg-9\" }, [\n      _c(\"div\", [\n        _c(\n          \"div\",\n          { staticClass: \"content-wrapper\", staticStyle: { width: \"99%\" } },\n          [\n            _c(\"ejs-heatmap\", {\n              ref: \"heatmap\",\n              staticStyle: { height: \"300px\" },\n              attrs: {\n                id: \"container\",\n                titleSettings: _vm.titleSettings,\n                xAxis: _vm.xAxis,\n                yAxis: _vm.yAxis,\n                dataSource: _vm.dataSource,\n                paletteSettings: _vm.paletteSettings,\n                legendSettings: _vm.legendSettings,\n                allowSelection: _vm.allowSelection,\n                load: _vm.load,\n                cellSelected: _vm.cellSelected\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"ejs-chart\", {\n              ref: \"chart\",\n              staticStyle: { display: \"block\", height: \"300px\" },\n              attrs: {\n                id: \"chartcontainer\",\n                primaryXAxis: _vm.primaryXAxis,\n                primaryYAxis: _vm.primaryYAxis,\n                chartArea: _vm.chartArea,\n                tooltip: _vm.tooltip,\n                series: _vm.series,\n                load: _vm.chartLoad\n              }\n            })\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _c(\n                \"td\",\n                { staticStyle: { width: \"40%\" } },\n                [\n                  _c(\n                    \"ejs-button\",\n                    {\n                      attrs: { id: \"clearSelection\" },\n                      nativeOn: {\n                        click: function($event) {\n                          return _vm.onClick($event)\n                        }\n                      }\n                    },\n                    [_vm._v(\"Clear Selection\")]\n                  )\n                ],\n                1\n              )\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the revenue from the top exported products between the year 2014 and 2018, valued in USD million.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to selected the cell in heat map and render the column chart based on selected data.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Tooltip \")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Heatmap.Inject(Tooltip) \")]),\n        _vm._v(\" method.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-selection/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });