/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var first = [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'], ['&', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], 'Backspace'];\nvar second = [['Tab'], ['Q', 'q'], ['W', 'w'], ['E', 'e'], ['R', 'r'], ['T', 't'], ['Y', 'y'], ['U', 'u'], ['I', 'i'], ['O', 'o'], ['P', 'p'], ['{', '['], ['}', ']'], ['|', '\\\\\\\\']];\nvar third = [['CapsLock'], ['A', 'a'], ['S', 's'], ['D', 'd'], ['F', 'f'], ['G', 'g'], ['H', 'h'], ['J', 'j'], ['K', 'k'], ['L', 'l'], [':', ';'], ['\"', \"'\"], ['Enter']];\nvar fourth = [['Shift'], ['Z', 'z'], ['X', 'x'], ['C', 'c'], ['V', 'v'], ['B', 'b'], ['N', 'n'], ['M', 'm'], ['<', ','], ['>', '.'], ['?', '/'], ['&#8593;'], ['Shift']];\nvar fifth = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'];\nvar ru1 = [['ё', 'Ё'], ['1', '!'], ['2', '\"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['\\\\', '/'], ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ['э', 'Э'], ['я', 'Я'], ['ч', 'Ч'], ['с', 'С'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ',']];\nvar en1 = [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'], ['&', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], ['Q', 'q'], ['W', 'w'], ['E', 'e'], ['R', 'r'], ['T', 't'], ['Y', 'y'], ['U', 'u'], ['I', 'i'], ['O', 'o'], ['P', 'p'], ['{', '['], ['}', ']'], ['|', '\\\\'], ['A', 'a'], ['S', 's'], ['D', 'd'], ['F', 'f'], ['G', 'g'], ['H', 'h'], ['J', 'j'], ['K', 'k'], ['L', 'l'], [':', ';'], ['\"', \"'\"], ['Z', 'z'], ['X', 'x'], ['C', 'c'], ['V', 'v'], ['B', 'b'], ['N', 'n'], ['M', 'm'], ['<', ','], ['>', '.'], ['?', '/']];\nvar row1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];\nvar row2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];\nvar row3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];\nvar row4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];\nvar row5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];\nmodule.exports = {\n  first: first,\n  second: second,\n  third: third,\n  fourth: fourth,\n  fifth: fifth,\n  ru1: ru1,\n  en1: en1,\n  row1: row1,\n  row2: row2,\n  row3: row3,\n  row4: row4,\n  row5: row5\n};\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/module.js":
/*!**************************!*\
  !*** ./src/js/module.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function create(elem, clname) {\n  var n = document.createElement(elem);\n  n.classList.add(clname);\n  return n;\n}\n\nfunction drawRow(row, position, attach) {\n  for (var i = 0; i < position.length; i += 1) {\n    var dbutt = create('div', 'button');\n    dbutt.classList.add(\"\".concat(row[i]));\n    attach.append(dbutt);\n\n    if (row[i] === 'Backspace' || row[i] === 'Tab' || row[i] === 'CapsLock' || row[i] === 'Enter' || row[i] === 'ShiftLeft' || row[i] === 'ShiftRight' || row[i] === 'ArrowUp' || row[i] === 'ControlLeft' || row[i] === 'MetaLeft' || row[i] === 'AltLeft' || row[i] === 'Space' || row[i] === 'AltRight' || row[i] === 'ArrowLeft' || row[i] === 'ArrowDown' || row[i] === 'ArrowRight' || row[i] === 'ControlRight') {\n      var span = create('span', 'word');\n\n      if (position[i] === ' ') {\n        span.classList.add('\\\\');\n      } else {\n        span.classList.add(\"\".concat(position[i]));\n      }\n\n      span.innerHTML = position[i];\n\n      if (row[i] === 'MetaLeft') {\n        span.textContent = '';\n        span.style.backgroundImage = 'url(\"./src/img/lang.png\")';\n        span.style.backgroundSize = '24px';\n        span.style.backgroundPosition = 'center';\n        span.style.backgroundRepeat = 'no-repeat';\n        span.style.fontSize = '12px';\n        span.style.textShadow = 'white 0.1vw 0.1vw 1px, white -0.1vw -0.1vw 1px, white 0.1vw -0.1vw 1px, white -0.1vw 0.1vw 1px';\n      }\n\n      dbutt.append(span);\n    } else {\n      for (var j = 0; j < position[i].length; j += 1) {\n        var _span = create('span', \"\".concat(position[i][j]));\n\n        if (j === 0) {\n          _span.classList.add('up');\n\n          _span.classList.add('hidden');\n        } else {\n          _span.classList.add('down');\n        }\n\n        _span.innerHTML = position[i][j];\n        dbutt.append(_span);\n      }\n    }\n  }\n}\n\nfunction runRow(row, num, main) {\n  var div = create('div', 'row');\n  main.append(div);\n  drawRow(row, num, div);\n}\n\nmodule.exports = {\n  drawRow: drawRow,\n  create: create,\n  runRow: runRow\n};\n\n//# sourceURL=webpack:///./src/js/module.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./js/data */ \"./src/js/data.js\"),\n    first = _require.first,\n    second = _require.second,\n    third = _require.third,\n    fourth = _require.fourth,\n    fifth = _require.fifth,\n    ru1 = _require.ru1,\n    en1 = _require.en1,\n    row1 = _require.row1,\n    row2 = _require.row2,\n    row3 = _require.row3,\n    row4 = _require.row4,\n    row5 = _require.row5;\n\nvar audioClickRu = new Audio('./src/audio/click-ru.mp3');\nvar audioClickEn = new Audio('./src/audio/click-en.mp3');\nvar audioShift = new Audio('./src/audio/shift.mp3');\nvar audioBackspace = new Audio('./src/audio/backspace.mp3');\nvar audioCapsLock = new Audio('./src/audio/capsLock.mp3');\nvar audioEnter = new Audio('./src/audio/enter.mp3');\n\nvar _require2 = __webpack_require__(/*! ./js/module */ \"./src/js/module.js\"),\n    create = _require2.create,\n    runRow = _require2.runRow;\n\nvar wr = document.body.appendChild(create('div', 'wrapper'));\nwr.append(create('span', 'visible'));\nwr.append(create('button', 'audioClick'));\nwr.append(create('textarea', 'input'));\nvar main = create('main', 'keyboard');\nwr.append(main);\nrunRow(row1, first, main);\nrunRow(row2, second, main);\nrunRow(row3, third, main);\nrunRow(row4, fourth, main);\nrunRow(row5, fifth, main);\nvar upperCharts = document.querySelectorAll('.up');\nvar downCharts = document.querySelectorAll('.down');\nvar textarea = document.querySelector('textarea');\nvar capsLock = document.querySelector('.CapsLock');\nvar win = document.querySelector('.Win');\nvar lang = localStorage.getItem('lang');\nvar audioSwitch = document.querySelector('.audioClick');\naudioSwitch.classList.add('op01'); // localstorage ------------------------------------------\n\nif (lang === 'ru') {\n  win.textContent = 'ru';\n\n  for (var i = 0; i < upperCharts.length; i += 1) {\n    upperCharts[i].innerHTML = \"\".concat(ru1[i][1]);\n    downCharts[i].innerHTML = \"\".concat(ru1[i][0]);\n  }\n} else {\n  win.textContent = 'en';\n\n  for (var _i = 0; _i < upperCharts.length; _i += 1) {\n    upperCharts[_i].innerHTML = \"\".concat(en1[_i][0]);\n    downCharts[_i].innerHTML = \"\".concat(en1[_i][1]);\n  }\n}\n\ndocument.addEventListener('keydown', function (event) {\n  textarea.focus();\n\n  if (event.key === 'Tab') {\n    event.preventDefault();\n    textarea.setRangeText('  ', [textarea.selectionStart], [textarea.selectionEnd], ['end']);\n  }\n\n  if (event.key === 'Alt' || event.key === 'Meta') {\n    event.preventDefault();\n  }\n\n  if (event.key === 'Shift') {\n    if (capsLock.classList.contains('active-capslock')) {\n      upperCharts.forEach(function (node) {\n        return node.classList.add('hidden');\n      });\n      downCharts.forEach(function (node) {\n        return node.classList.remove('hidden');\n      });\n    } else {\n      upperCharts.forEach(function (node) {\n        return node.classList.remove('hidden');\n      });\n      downCharts.forEach(function (node) {\n        return node.classList.add('hidden');\n      });\n    }\n  }\n\n  if (event.key === 'CapsLock') {\n    if (!event.getModifierState('CapsLock')) {\n      // event.getModifierState(\"CapsLock\") | capsLock.classList.contains('active-capslock')\n      capsLock.classList.remove('active-capslock');\n      upperCharts.forEach(function (node) {\n        return node.classList.add('hidden');\n      });\n      downCharts.forEach(function (node) {\n        return node.classList.remove('hidden');\n      });\n    } else {\n      upperCharts.forEach(function (node) {\n        return node.classList.remove('hidden');\n      });\n      downCharts.forEach(function (node) {\n        return node.classList.add('hidden');\n      });\n      capsLock.classList.add('active-capslock');\n    }\n  }\n\n  var code = document.querySelector(\".\".concat(event.code));\n\n  if (code) {\n    code.classList.add('keyboard-code-active');\n  }\n\n  if (event.altKey && event.shiftKey) {\n    if (upperCharts[0].innerHTML === 'Ё') {\n      for (var _i2 = 0; _i2 < upperCharts.length; _i2 += 1) {\n        upperCharts[_i2].innerHTML = \"\".concat(en1[_i2][0]);\n        downCharts[_i2].innerHTML = \"\".concat(en1[_i2][1]);\n      }\n\n      win.textContent = 'en';\n      localStorage.setItem('lang', 'en');\n    } else {\n      for (var _i3 = 0; _i3 < upperCharts.length; _i3 += 1) {\n        upperCharts[_i3].innerHTML = \"\".concat(ru1[_i3][1]);\n        downCharts[_i3].innerHTML = \"\".concat(ru1[_i3][0]);\n      }\n\n      win.textContent = 'ru';\n      localStorage.setItem('lang', 'ru');\n    }\n  }\n});\ndocument.addEventListener('keyup', function (event) {\n  var code = document.querySelector(\".\".concat(event.code));\n\n  if (code) {\n    code.classList.remove('keyboard-code-active');\n  }\n\n  if (event.key === 'Shift') {\n    if (capsLock.classList.contains('active-capslock')) {\n      upperCharts.forEach(function (node) {\n        return node.classList.remove('hidden');\n      });\n      downCharts.forEach(function (node) {\n        return node.classList.add('hidden');\n      });\n    } else {\n      upperCharts.forEach(function (node) {\n        return node.classList.add('hidden');\n      });\n      downCharts.forEach(function (node) {\n        return node.classList.remove('hidden');\n      });\n    }\n  }\n});\nvar currentButton;\ndocument.querySelector('.keyboard').addEventListener('mousedown', function (event) {\n  event.preventDefault();\n  var target = event.target;\n\n  if (target.parentNode.classList.contains('button')) {\n    currentButton = document.querySelector(\".\".concat(target.parentNode.classList[1]));\n    currentButton.classList.add('keyboard-code-active');\n    textarea.focus();\n\n    switch (target.innerHTML) {\n      case 'Backspace':\n        if (textarea.selectionStart !== textarea.selectionEnd) {\n          textarea.setRangeText('', [textarea.selectionStart], [textarea.selectionEnd], ['end']);\n        } else {\n          var num = textarea.selectionStart - 1;\n          textarea.setRangeText('', [textarea.selectionStart - 1 < 0 ? 0 : num], [textarea.selectionEnd], ['end']);\n        }\n\n        break;\n\n      case ' ':\n      case 'Tab':\n        textarea.setRangeText(' ', [textarea.selectionStart], [textarea.selectionEnd], ['end']);\n        break;\n\n      case 'CapsLock':\n        if (capsLock.classList.contains('active-capslock')) {\n          capsLock.classList.remove('active-capslock');\n          upperCharts.forEach(function (node) {\n            return node.classList.add('hidden');\n          });\n          downCharts.forEach(function (node) {\n            return node.classList.remove('hidden');\n          });\n        } else {\n          upperCharts.forEach(function (node) {\n            return node.classList.remove('hidden');\n          });\n          downCharts.forEach(function (node) {\n            return node.classList.add('hidden');\n          });\n          capsLock.classList.add('active-capslock');\n        }\n\n        break;\n\n      case '↑':\n        textarea.select();\n        textarea.selectionEnd = textarea.selectionStart;\n        break;\n\n      case '↓':\n        textarea.select();\n        textarea.selectionStart = textarea.selectionEnd;\n        break;\n\n      case '←':\n        if (textarea.selectionStart === textarea.selectionEnd && textarea.selectionStart > 0) {\n          textarea.selectionStart -= 1;\n          textarea.selectionEnd -= 1;\n        } else {\n          textarea.selectionEnd = textarea.selectionStart;\n        }\n\n        break;\n\n      case '→':\n        if (textarea.selectionStart === textarea.selectionEnd) {\n          textarea.selectionEnd += 1;\n          textarea.selectionStart += 1;\n        } else {\n          textarea.selectionStart = textarea.selectionEnd;\n        }\n\n        break;\n\n      case 'ru':\n        for (var _i4 = 0; _i4 < upperCharts.length; _i4 += 1) {\n          upperCharts[_i4].innerHTML = \"\".concat(en1[_i4][0]);\n          downCharts[_i4].innerHTML = \"\".concat(en1[_i4][1]);\n        }\n\n        win.textContent = 'en';\n        localStorage.setItem('lang', 'en');\n        break;\n\n      case 'en':\n        for (var _i5 = 0; _i5 < upperCharts.length; _i5 += 1) {\n          upperCharts[_i5].innerHTML = \"\".concat(ru1[_i5][1]);\n          downCharts[_i5].innerHTML = \"\".concat(ru1[_i5][0]);\n        }\n\n        win.textContent = 'ru';\n        localStorage.setItem('lang', 'ru');\n        break;\n\n      case 'Enter':\n        textarea.setRangeText('\\n', [textarea.selectionStart], [textarea.selectionEnd], ['end']);\n        break;\n\n      case 'Shift':\n        if (capsLock.classList.contains('active-capslock')) {\n          upperCharts.forEach(function (node) {\n            return node.classList.add('hidden');\n          });\n          downCharts.forEach(function (node) {\n            return node.classList.remove('hidden');\n          });\n        } else {\n          upperCharts.forEach(function (node) {\n            return node.classList.remove('hidden');\n          });\n          downCharts.forEach(function (node) {\n            return node.classList.add('hidden');\n          });\n        }\n\n        break;\n\n      case 'Ctrl':\n      case 'Alt':\n      case 'Win':\n        break;\n\n      default:\n        textarea.setRangeText(target.textContent, [textarea.selectionStart], [textarea.selectionEnd], ['end']);\n    }\n  }\n});\ndocument.querySelector('.keyboard').addEventListener('mouseup', function (event) {\n  var target = event.target;\n\n  switch (target.innerHTML) {\n    case 'Shift':\n      if (capsLock.classList.contains('active-capslock')) {\n        upperCharts.forEach(function (node) {\n          return node.classList.remove('hidden');\n        });\n        downCharts.forEach(function (node) {\n          return node.classList.add('hidden');\n        });\n      } else {\n        upperCharts.forEach(function (node) {\n          return node.classList.add('hidden');\n        });\n        downCharts.forEach(function (node) {\n          return node.classList.remove('hidden');\n        });\n      }\n\n      break;\n\n    default:\n  }\n\n  if (currentButton) currentButton.classList.remove('keyboard-code-active');\n});\n\nfunction handleAudioClick(_ref) {\n  var target = _ref.target;\n\n  if (target.parentNode.classList.contains('button')) {\n    switch (target.innerHTML) {\n      case 'Backspace':\n        audioBackspace.play();\n        break;\n\n      case 'CapsLock':\n        audioCapsLock.play();\n        break;\n\n      case 'Enter':\n        audioEnter.play();\n        break;\n\n      case 'Shift':\n        audioShift.play();\n        break;\n\n      default:\n        if (win.textContent === 'ru') {\n          audioClickRu.play();\n        }\n\n        if (win.textContent === 'en') {\n          audioClickEn.play();\n        }\n\n    }\n  }\n}\n\ndocument.querySelector('.audioClick').addEventListener('click', function () {\n  if (audioSwitch.classList.contains('op01')) {\n    document.querySelector('.keyboard').addEventListener('click', handleAudioClick);\n    audioSwitch.classList.remove('op01');\n  } else {\n    document.querySelector('.keyboard').removeEventListener('click', handleAudioClick);\n    audioSwitch.classList.add('op01');\n  }\n});\ndocument.querySelector('.visible').addEventListener('click', function () {\n  if (main.classList.contains('op')) {\n    main.classList.remove('hidden');\n    setTimeout(function () {\n      main.classList.remove('op');\n    });\n  } else {\n    main.classList.add('op');\n    setTimeout(function () {\n      main.classList.add('hidden');\n    }, 400);\n  }\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/main.js ./src/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/main.js */\"./src/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/style.scss */\"./src/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js_./src/style.scss?");

/***/ })

/******/ });