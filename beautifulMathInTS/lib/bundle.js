/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"build\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var Hello_1 = __webpack_require__(4);
	ReactDOM.render(React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello(props) {
	        _super.call(this, props);
	        this.state = { slices: 10, table: 2 };
	        this.modifyState = this.modifyState.bind(this); // oh, this is so silly
	    }
	    Hello.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", null, 
	            React.createElement("h1", null, 
	                "Beautiful Math with ", 
	                this.props.compiler, 
	                " and ", 
	                this.props.framework), 
	            React.createElement("p", null, 
	                "See also implementations in", 
	                React.createElement("a", {href: "https://gist.github.com/Dierk/221e2991955578f196b5ae81ab0b9956"}, " Elm "), 
	                "and", 
	                React.createElement("a", {href: "https://gist.github.com/Dierk/c820c4a9dd6f60ecb4e78fe90709bd6c"}, " Purescript/Pux ")), 
	            React.createElement("div", null, 
	                React.createElement("button", {onClick: function () { return _this.modifyState(1, 0); }}, " Slices + "), 
	                this.state.slices, 
	                React.createElement("button", {onClick: function () { return _this.modifyState(-1, 0); }}, " Slices - ")), 
	            React.createElement("div", null, 
	                React.createElement("button", {onClick: function () { return _this.modifyState(0, 1); }}, " Table + "), 
	                this.state.table, 
	                React.createElement("button", {onClick: function () { return _this.modifyState(0, -1); }}, " Table - ")), 
	            React.createElement("div", null, 
	                React.createElement("svg", {viewBox: "0 0 100 100", width: "400px"}, 
	                    React.createElement("circle", {cx: "50", cy: "50", r: "49", fill: "transparent", stroke: "papayawhip"}), 
	                    this.lines(this.state))
	            ));
	    };
	    Hello.prototype.lines = function (state) {
	        var xpos = function (angle) { return 50.0 + 50.0 * Math.cos(angle); };
	        var ypos = function (angle) { return 50.0 + 50.0 * Math.sin(angle); };
	        var sliceAngle = function (slice) { return slice * 2.0 * Math.PI / state.slices; };
	        var origin = function (slice) { return sliceAngle(slice); };
	        var target = function (slice) { return sliceAngle(slice * state.table); };
	        var numbers = new Array(state.slices);
	        for (var i = 1; i <= state.slices; i++) {
	            numbers.push(React.createElement("line", {key: "line" + i, x1: xpos(origin(i)), y1: ypos(origin(i)), x2: xpos(target(i)), y2: ypos(target(i)), stroke: "#A0A0F080"}));
	        }
	        return numbers;
	    };
	    Hello.prototype.modifyState = function (sliceDelta, tableDelta) {
	        this.setState({
	            slices: this.state.slices + sliceDelta,
	            table: this.state.table + tableDelta
	        });
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map