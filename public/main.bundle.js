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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./src/index.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ \"./src/components/SideBar.js\");\n/* harmony import */ var _TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextEditor */ \"./src/components/TextEditor.js\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_4__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  *,\\n  *::before,\\n  *::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: inherit;\\n  }\\n  \\n\\n  html {\\n    box-sizing: border-box;\\n  }\\n\\n  body {\\n    color: white;\\n    background-color: #333;\\n  }\\n'], ['\\n  *,\\n  *::before,\\n  *::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: inherit;\\n  }\\n  \\n\\n  html {\\n    box-sizing: border-box;\\n  }\\n\\n  body {\\n    color: white;\\n    background-color: #333;\\n  }\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\n  display: flex;\\n  width: 100vw;\\n  height: 100vh;\\n'], ['\\n  display: flex;\\n  width: 100vw;\\n  height: 100vh;\\n']);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar fs = electron__WEBPACK_IMPORTED_MODULE_4__[\"remote\"].require('fs');\n\nObject(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"injectGlobal\"])(_templateObject);\n\nvar TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2);\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      fileList: [],\n      currentFile: '',\n      currentKey: 0,\n      value: '',\n      nameFile: false,\n      inputValue: ''\n    }, _this.handleBeforeChange = function (editor, data, value) {\n      return _this.setState({ value: value });\n    }, _this.handleInput = function (e) {\n      return _this.setState({ inputValue: e.target.value });\n    }, _this.handleInputOpen = function () {\n      return _this.setState(function (preStat) {\n        return { nameFile: !preStat.nameFile };\n      });\n    }, _this.handleFileSave = function () {\n      var _this$state = _this.state,\n          currentFile = _this$state.currentFile,\n          currentKey = _this$state.currentKey,\n          value = _this$state.value;\n\n      var lastFile = { currentFile: currentFile, currentKey: currentKey, value: value };\n\n      fs.writeFile('markdown/' + currentFile + '.md', value, function (err) {\n        return err && console.log(err);\n      });\n\n      fs.writeFile('lastFile.json', JSON.stringify(lastFile), function (err) {\n        return err && console.log(err);\n      });\n    }, _this.handleFileSelection = function (e) {\n      var currentFile = e.currentTarget.firstElementChild.outerText;\n      var currentKey = parseInt(e.currentTarget.id);\n      var value = fs.readFileSync('markdown/' + currentFile + '.md', 'utf8').toString();\n\n      _this.setState({ currentFile: currentFile, currentKey: currentKey, value: value });\n\n      var lastFile = { currentFile: currentFile, currentKey: currentKey, value: value };\n\n      fs.writeFile('lastFile.json', JSON.stringify(lastFile), function (err) {\n        return err && console.log(err);\n      });\n    }, _this.handleSubmit = function (e) {\n      e.preventDefault();\n\n      var date = new Date();\n      var dateFormat = date.toLocaleDateString('en-US', {\n        month: 'short',\n        day: 'numeric',\n        year: 'numeric'\n      });\n\n      _this.setState({\n        nameFile: false,\n        fileList: _this.state.fileList.concat({\n          name: _this.state.inputValue,\n          date: dateFormat\n        })\n      });\n\n      electron__WEBPACK_IMPORTED_MODULE_4__[\"ipcRenderer\"].send('handle:createFile', _this.state.inputValue);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      global.fetch('../markdown.json').then(function (resp) {\n        return resp.json();\n      }).then(function (data) {\n        return _this2.setState({\n          fileList: data.files\n        });\n      }).catch(function (err) {\n        return console.log(err);\n      });\n\n      fs.readFile('lastFile.json', function (err, data) {\n        if (err) console.log(err);\n\n        var _JSON$parse = JSON.parse(data),\n            currentFile = _JSON$parse.currentFile,\n            currentKey = _JSON$parse.currentKey,\n            value = _JSON$parse.value;\n\n        _this2.setState({ currentFile: currentFile, currentKey: currentKey, value: value });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        TextWrapper,\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          selected: this.state.currentKey,\n          currentFile: this.handleFileSelection,\n          handleSubmit: this.handleSubmit,\n          handleInput: this.handleInput,\n          handleInputOpen: this.handleInputOpen,\n          fileList: this.state.fileList,\n          nameFile: this.state.nameFile,\n          currentKey: this.state.currentKey\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextEditor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          text: this.state.value,\n          save: this.handleFileSave,\n          change: this.handleChange,\n          beforeChange: this.handleBeforeChange\n        })\n      );\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _templateObject = _taggedTemplateLiteral(['\\n    flex-grow: 1;\\n    button {\\n      display: flex;\\n      justify-content: center;\\n      padding: 0.3rem 0.8rem;\\n      background-color: #333;\\n      color: ', ';\\n      border: none;\\n      border-right: 1px solid #287878;\\n      width: 100%;\\n      word-wrap: none;\\n      outline: none;\\n\\n      &:hover {\\n        background-color: #414141;\\n      }\\n    }\\n    i {\\n      font-size: 1.1rem;\\n      margin-right: ', ';\\n    }\\n  '], ['\\n    flex-grow: 1;\\n    button {\\n      display: flex;\\n      justify-content: center;\\n      padding: 0.3rem 0.8rem;\\n      background-color: #333;\\n      color: ', ';\\n      border: none;\\n      border-right: 1px solid #287878;\\n      width: 100%;\\n      word-wrap: none;\\n      outline: none;\\n\\n      &:hover {\\n        background-color: #414141;\\n      }\\n    }\\n    i {\\n      font-size: 1.1rem;\\n      margin-right: ', ';\\n    }\\n  ']);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar Button = function Button(props) {\n  var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject, props.color || '#6e6e6e', props.space ? '.4rem' : 0);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    ButtonWrapper,\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'button',\n      { onClick: props.onClick },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: props.icon }),\n      props.text\n    )\n  );\n};\n\nButton.propTypes = {\n  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  space: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/Button.js?");

/***/ }),

/***/ "./src/components/Editor.js":
/*!**********************************!*\
  !*** ./src/components/Editor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-codemirror2 */ \"./node_modules/react-codemirror2/index.js\");\n/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ \"./node_modules/codemirror/lib/codemirror.css\");\n/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/markdown/markdown */ \"./node_modules/codemirror/mode/markdown/markdown.js\");\n/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var codemirror_theme_rubyblue_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/theme/rubyblue.css */ \"./node_modules/codemirror/theme/rubyblue.css\");\n/* harmony import */ var codemirror_theme_rubyblue_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_rubyblue_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _templateObject = _taggedTemplateLiteral(['\\n  height: 100%;\\n\\n  .CodeMirror {\\n    height: 100%;\\n  }\\n'], ['\\n  height: 100%;\\n\\n  .CodeMirror {\\n    height: 100%;\\n  }\\n']);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\nvar CodeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject);\n\nvar Editor = function Editor(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    CodeWrapper,\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_codemirror2__WEBPACK_IMPORTED_MODULE_3__[\"Controlled\"], {\n      className: 'CodeMirror',\n      value: props.text,\n      options: {\n        mode: 'markdown',\n        theme: 'rubyblue',\n        lineNumbers: true\n      },\n      onBeforeChange: props.beforeChange\n    })\n  );\n};\n\nEditor.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  beforeChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\n\n//# sourceURL=webpack:///./src/components/Editor.js?");

/***/ }),

/***/ "./src/components/MarkdownTools.js":
/*!*****************************************!*\
  !*** ./src/components/MarkdownTools.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nvar _templateObject = _taggedTemplateLiteral(['\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-content: flex-start;\\n  width: 100%;\\n'], ['\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-content: flex-start;\\n  width: 100%;\\n']);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject);\n\nvar MarkdownTools = function MarkdownTools(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    Wrapper,\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-header' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-bold' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-italic' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-link' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-picture-o' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-list-ol' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-list-ul' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-list-ul' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-code' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-quote-right' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-arrows-h' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-strikethrough' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-table' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { icon: 'fa fa-check-square-o' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      space: true,\n      color: '#1ad063',\n      icon: 'fa fa-floppy-o',\n      text: 'Save',\n      onClick: props.save\n    })\n  );\n};\n\nMarkdownTools.propTypes = {\n  save: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MarkdownTools);\n\n//# sourceURL=webpack:///./src/components/MarkdownTools.js?");

/***/ }),

/***/ "./src/components/MarkdownView.js":
/*!****************************************!*\
  !*** ./src/components/MarkdownView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var github_markdown_css_github_markdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! github-markdown-css/github-markdown.css */ \"./node_modules/github-markdown-css/github-markdown.css\");\n/* harmony import */ var github_markdown_css_github_markdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(github_markdown_css_github_markdown_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _templateObject = _taggedTemplateLiteral(['\\n  width: 50%;\\n  height: 100vh;\\n  border-left: 3px solid #06e8dc;\\n  background-color: white;\\n'], ['\\n  width: 50%;\\n  height: 100vh;\\n  border-left: 3px solid #06e8dc;\\n  background-color: white;\\n']);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject);\n\nvar MarkdownView = function MarkdownView(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    Wrapper,\n    { className: 'markdown-body' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, { source: props.mark })\n  );\n};\n\nMarkdownView.propTypes = {\n  mark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MarkdownView);\n\n//# sourceURL=webpack:///./src/components/MarkdownView.js?");

/***/ }),

/***/ "./src/components/SideBar.js":
/*!***********************************!*\
  !*** ./src/components/SideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _templateObject = _taggedTemplateLiteral(['\\n  border-bottom: 2px solid grey;\\n  padding: 1rem 0 1rem 0;\\n  cursor: pointer;\\n  transition: transform 0.3s, border-bottom-color 0.5s, border-left 0.4s,\\n    padding-left, 0.4s;\\n\\n  &:hover {\\n    transform: scale(1.05);\\n    border-bottom-color: #06e8dc;\\n  }\\n\\n  h3 {\\n    margin-bottom: 0.9rem;\\n    margin-left: 0.3rem;\\n  }\\n\\n  p {\\n    margin-left: 0.3rem;\\n  }\\n\\n  &.current {\\n    border-left: 3px solid #06e8dc;\\n    padding-left: 10px;\\n\\n    &:hover {\\n      transform: none;\\n      border-bottom-color: grey;\\n    }\\n  }\\n'], ['\\n  border-bottom: 2px solid grey;\\n  padding: 1rem 0 1rem 0;\\n  cursor: pointer;\\n  transition: transform 0.3s, border-bottom-color 0.5s, border-left 0.4s,\\n    padding-left, 0.4s;\\n\\n  &:hover {\\n    transform: scale(1.05);\\n    border-bottom-color: #06e8dc;\\n  }\\n\\n  h3 {\\n    margin-bottom: 0.9rem;\\n    margin-left: 0.3rem;\\n  }\\n\\n  p {\\n    margin-left: 0.3rem;\\n  }\\n\\n  &.current {\\n    border-left: 3px solid #06e8dc;\\n    padding-left: 10px;\\n\\n    &:hover {\\n      transform: none;\\n      border-bottom-color: grey;\\n    }\\n  }\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\n  height: 100vh;\\n  min-width: 200px;\\n  max-width: 250px;\\n  display: flex;\\n  flex-direction: column;\\n  border-right: 1px solid #06e8dc;\\n  color: white;\\n\\n  button {\\n    margin: 15px auto;\\n    width: 150px;\\n    height: 40px;\\n    color: white;\\n    background-color: #333;\\n    border: 1.4px solid #06e8dc;\\n    border-radius: 5px;\\n    outline: none;\\n  }\\n\\n  input {\\n    width: 100%;\\n    border: none;\\n    border-bottom: 1px solid #06e8dc;\\n    height: 30px;\\n    background-color: #333;\\n    color: white;\\n    outline: none;\\n  }\\n'], ['\\n  height: 100vh;\\n  min-width: 200px;\\n  max-width: 250px;\\n  display: flex;\\n  flex-direction: column;\\n  border-right: 1px solid #06e8dc;\\n  color: white;\\n\\n  button {\\n    margin: 15px auto;\\n    width: 150px;\\n    height: 40px;\\n    color: white;\\n    background-color: #333;\\n    border: 1.4px solid #06e8dc;\\n    border-radius: 5px;\\n    outline: none;\\n  }\\n\\n  input {\\n    width: 100%;\\n    border: none;\\n    border-bottom: 1px solid #06e8dc;\\n    height: 30px;\\n    background-color: #333;\\n    color: white;\\n    outline: none;\\n  }\\n']);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2);\n\nvar SideBar = function SideBar(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    Wrapper,\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'button',\n      { onClick: props.handleInputOpen },\n      '+ New Entry'\n    ),\n    props.nameFile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'form',\n      { onSubmit: props.handleSubmit },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {\n        onChange: props.handleInput,\n        placeholder: 'File Name',\n        autoFocus: true\n      })\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      props.fileList.map(function (file, key) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          Item,\n          {\n            key: key,\n            id: key,\n            onClick: props.currentFile,\n            className: props.currentKey === key && 'current'\n          },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'h3',\n            null,\n            file.name\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'p',\n            null,\n            file.date\n          )\n        );\n      })\n    )\n  );\n};\n\nSideBar.propTypes = {\n  currentFile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  fileList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  handleInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  handleInputOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  nameFile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  currentKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\n\n//# sourceURL=webpack:///./src/components/SideBar.js?");

/***/ }),

/***/ "./src/components/TextEditor.js":
/*!**************************************!*\
  !*** ./src/components/TextEditor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MarkdownView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownView */ \"./src/components/MarkdownView.js\");\n/* harmony import */ var _MarkdownTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownTools */ \"./src/components/MarkdownTools.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Editor */ \"./src/components/Editor.js\");\nvar _templateObject = _taggedTemplateLiteral(['\\n  display: flex;\\n  width: 100vw;\\n  height: 100vh;\\n'], ['\\n  display: flex;\\n  width: 100vw;\\n  height: 100vh;\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\n  display: flex;\\n  flex-direction: column;\\n'], ['\\n  display: flex;\\n  flex-direction: column;\\n']);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject);\nvar EditorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2);\n\nvar TextEditor = function TextEditor(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    Wrapper,\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      EditorWrapper,\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarkdownTools__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { save: props.save }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Editor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { text: props.text, beforeChange: props.beforeChange })\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarkdownView__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { mark: props.text })\n  );\n};\n\nTextEditor.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  beforeChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextEditor);\n\n//# sourceURL=webpack:///./src/components/TextEditor.js?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ })

/******/ });