/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/logo-filled.png":
/*!********************************!*\
  !*** ./assets/logo-filled.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/logo-filled.png";

/***/ }),

/***/ "./src/taskpane/taskpane.css":
/*!***********************************!*\
  !*** ./src/taskpane/taskpane.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "1fda685b81e1123773f6.css";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"taskpane": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./src/taskpane/taskpane.js ***!
  \**********************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

Office.onReady(function (info) {
  if (info.host === Office.HostType.Excel) {
    // Assign event handlers and other initialization logic.
    document.getElementById("create-table").onclick = function () {
      return tryCatch(createTable);
    };
    document.getElementById("filter-table").onclick = function () {
      return tryCatch(filterTable);
    };
    document.getElementById("sort-table").onclick = function () {
      return tryCatch(sortTable);
    };
    document.getElementById("create-chart").onclick = function () {
      return tryCatch(createChart);
    };
    document.getElementById("freeze-headers").onclick = function () {
      return tryCatch(freezeHeaders);
    };
    document.getElementById("unfreeze-headers").onclick = function () {
      return tryCatch(unFreezeHeaders);
    };
    document.getElementById("open-dialog").onclick = function () {
      return openDialog();
    };
    document.getElementById("fill-cell").onclick = function () {
      return tryCatch(fillCell);
    };
    document.getElementById("add-sheet").onclick = function () {
      return tryCatch(addSheet);
    };
    document.getElementById("reset-table").onclick = function () {
      return tryCatch(resetTable);
    };
  }
});
var dialog = null;

//get active wookrsheet method
var getActiveWorksheet = function getActiveWorksheet(xlxsContext) {
  return xlxsContext.workbook.worksheets.getActiveWorksheet();
};
var createTable = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
              var currentWorksheet, expensesTable;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    //get the active worksheet
                    currentWorksheet = getActiveWorksheet(context); //add a new table by definig its size in columns
                    //important is that the generated table is of type OBJECT
                    expensesTable = currentWorksheet.tables.add("A1:D1", true); // bool param which defines if there are headers or not
                    //set the name of the table
                    expensesTable.name = "ExpensesTable";

                    //getHeaderRowsRange -> gets the header row and the sets the values of each column
                    expensesTable.getHeaderRowRange().values = [["Date", "Merchant", "Category", "Amount"]];
                    expensesTable.rows.add(null, [["1/1/2017", "The Phone Company", "Communications", "120"], ["1/2/2017", "Northwind Electric Cars", "Transportation", "142.33"], ["1/5/2017", "Best For You Organics Company", "Groceries", "27.9"], ["1/10/2017", "Coho Vineyard", "Restaurant", "33"], ["1/11/2017", "Bellows College", "Education", "350.1"], ["1/15/2017", "Trey Research", "Other", "135"], ["1/15/2017", "Best For You Organics Company", "Groceries", "97.88"]]);
                    expensesTable.columns.getItemAt(3).getRange().numberFormat = [["\u20AC#,##0.00"]];

                    //automatically define cells for the columns and the rows
                    expensesTable.getRange().format.autofitColumns();
                    expensesTable.getRange().format.autofitRows();
                    _context.next = 10;
                    return context.sync();
                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createTable() {
    return _ref.apply(this, arguments);
  };
}();
function filterTable() {
  return _filterTable.apply(this, arguments);
}
function _filterTable() {
  _filterTable = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(context) {
              var currentWorksheet, expensesTable, categoryFilter;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    currentWorksheet = getActiveWorksheet(context);
                    expensesTable = currentWorksheet.tables.getItem('ExpensesTable');
                    categoryFilter = expensesTable.columns.getItem('Category').filter;
                    categoryFilter.applyValuesFilter(['Education', 'Groceries']);
                    _context7.next = 6;
                    return context.sync();
                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x5) {
              return _ref7.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _filterTable.apply(this, arguments);
}
function resetTable() {
  return _resetTable.apply(this, arguments);
}
function _resetTable() {
  _resetTable = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(context) {
              var currentWorksheet, expensesTable;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    currentWorksheet = getActiveWorksheet(context);
                    expensesTable = currentWorksheet.tables.getItem('ExpensesTable');
                    expensesTable.columns.getItem('Category').filter.clear();
                    _context9.next = 5;
                    return context.sync();
                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9);
            }));
            return function (_x6) {
              return _ref8.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _resetTable.apply(this, arguments);
}
function sortTable() {
  return _sortTable.apply(this, arguments);
}
function _sortTable() {
  _sortTable = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(context) {
              var currentWorksheet, expensesTable, sortFields;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    currentWorksheet = getActiveWorksheet(context);
                    expensesTable = currentWorksheet.tables.getItem("ExpensesTable");
                    sortFields = [{
                      //get the index of the column we want to sort -> in this case it is "Amount"
                      key: 3,
                      ascending: false
                    }];
                    expensesTable.sort.apply(sortFields);
                    _context11.next = 6;
                    return context.sync();
                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }));
            return function (_x7) {
              return _ref9.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _sortTable.apply(this, arguments);
}
debugger;
function createChart() {
  return _createChart.apply(this, arguments);
}
function _createChart() {
  _createChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(context) {
              var currentWorksheet, expensesTable, dataRange, chart;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    //get the active worksheet
                    currentWorksheet = getActiveWorksheet(context);
                    expensesTable = currentWorksheet.tables.getItem('ExpensesTable');
                    dataRange = expensesTable.getDataBodyRange(); //add a chart to the active sheet (param1: type of chart, param2: data to be used, param3: eries of data points from the table should be charted row-wise or column-wise. )
                    chart = currentWorksheet.charts.add('ColumnClustered', dataRange, 'Auto'); //determine the position of the chart (give top left and bottom right cell)
                    chart.setPosition("B15", "G30");
                    chart.title.text = "Expenses";
                    //where the legend will be placed
                    chart.legend.position = "Right";
                    //colors the background of the given series name cell
                    chart.legend.format.fill.setSolidColor("magenta");
                    chart.dataLabels.format.font.size = 15;
                    chart.dataLabels.format.font.color = "black";
                    chart.series.getItemAt(0).name = "Value in \u20AC";
                    _context13.next = 13;
                    return context.sync();
                  case 13:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13);
            }));
            return function (_x8) {
              return _ref10.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _createChart.apply(this, arguments);
}
function freezeHeaders() {
  return _freezeHeaders.apply(this, arguments);
}
function _freezeHeaders() {
  _freezeHeaders = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(context) {
              var currentWorksheet;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    //get the current worksheet and freeze the top(first) row
                    currentWorksheet = getActiveWorksheet(context);
                    currentWorksheet.freezePanes.freezeRows(1);
                    _context15.next = 4;
                    return context.sync();
                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15);
            }));
            return function (_x9) {
              return _ref11.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _freezeHeaders.apply(this, arguments);
}
function unFreezeHeaders() {
  return _unFreezeHeaders.apply(this, arguments);
}
function _unFreezeHeaders() {
  _unFreezeHeaders = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(context) {
              var currentWorksheet;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    currentWorksheet = getActiveWorksheet(context);
                    currentWorksheet.freezePanes.unfreeze();
                    _context17.next = 4;
                    return context.sync();
                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17);
            }));
            return function (_x10) {
              return _ref12.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return _unFreezeHeaders.apply(this, arguments);
}
var openDialog = function openDialog() {
  Office.context.ui.displayDialogAsync(
  //pass the html dialog view we want to show
  "https://localhost:3000/popup.html", {
    height: 45,
    width: 55
  }, function (result) {
    dialog = result.value;
    dialog.addEventHandler(Office.EventType.DialogMessageReceived, processMessage);
  });
};
var processMessage = function processMessage(args) {
  document.getElementById("user-name").innerHTML = args.message;
  dialog.close();
};
var fillCell = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
              var currentWorksheet, range;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    currentWorksheet = getActiveWorksheet(context);
                    range = currentWorksheet.getRange("A1:H1");
                    range.set({
                      format: {
                        fill: {
                          color: '#4472C4'
                        },
                        font: {
                          name: "Verdana",
                          color: "magenta",
                          size: 25
                        }
                      }
                    });
                    _context3.next = 5;
                    return context.sync();
                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x2) {
              return _ref4.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function fillCell() {
    return _ref3.apply(this, arguments);
  };
}();
var addSheet = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(context) {
              var currentWorkBook, sheet;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    currentWorkBook = context.workbook.worksheets;
                    sheet = currentWorkBook.add("Trial Sheet");
                    sheet.load("name", "position");
                    _context5.next = 5;
                    return context.sync();
                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x3) {
              return _ref6.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function addSheet() {
    return _ref5.apply(this, arguments);
  };
}();
function tryCatch(_x4) {
  return _tryCatch.apply(this, arguments);
}
function _tryCatch() {
  _tryCatch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(callback) {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return callback();
        case 3:
          _context19.next = 8;
          break;
        case 5:
          _context19.prev = 5;
          _context19.t0 = _context19["catch"](0);
          // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
          console.error(_context19.t0);
        case 8:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 5]]);
  }));
  return _tryCatch.apply(this, arguments);
}
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./src/taskpane/taskpane.html ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./taskpane.css */ "./src/taskpane/taskpane.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/logo-filled.png */ "./assets/logo-filled.png"), __webpack_require__.b);
// Module
var code = "<!-- Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License. -->\n<!-- This file shows how to design a first-run page that provides a welcome screen to the user about the features of the add-in. -->\n\n<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Contoso Task Pane Add-in</title>\n\n    <!-- Office JavaScript API -->\n    <" + "script type=\"text/javascript\" src=\"https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js\"><" + "/script>\n\n    <!-- For more information on Fluent UI, visit https://developer.microsoft.com/fluentui#/. -->\n    <link rel=\"stylesheet\" href=\"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css\"/>\n\n    <!-- Template styles -->\n    <link href=\"" + ___HTML_LOADER_IMPORT_0___ + "\" rel=\"stylesheet\" type=\"text/css\" />\n</head>\n\n<body class=\"ms-font-m ms-welcome ms-Fabric\">\n    <header class=\"ms-welcome__header ms-bgColor-neutralLighter\">\n        <img width=\"90\" height=\"90\" src=\"" + ___HTML_LOADER_IMPORT_1___ + "\" alt=\"Contoso\" title=\"Contoso\" />\n        <h1 class=\"ms-font-su\">Welcome</h1>\n    </header>\n    <section id=\"sideload-msg\" class=\"ms-welcome__main\">\n        <h2 class=\"ms-font-xl\">Please <a target=\"_blank\" href=\"https://learn.microsoft.com/office/dev/add-ins/testing/test-debug-office-add-ins#sideload-an-office-add-in-for-testing\">sideload</a> your add-in to see app body.</h2>\n    </section>\n    <main id=\"app-body\" class=\"ms-welcome__main\" style=\"display: flex;\">\n        <button class=\"ms-Button\" id=\"create-table\">Create Table</button><br/><br/>\n        <button class=\"ms-Button\" id=\"filter-table\">Filter Table</button><br/><br/>\n        <button class=\"ms-Button\" id=\"sort-table\">Sort Table</button><br/><br/>\n        <button class=\"ms-Button\" id=\"create-chart\">Create Chart</button><br/><br/>\n        <button class=\"ms-Button\" id=\"freeze-headers\">Freeze Header</button><br/><br/>\n        <button class=\"ms-Button\" id=\"unfreeze-headers\">Unfreeze Header</button><br/><br/>\n        <button class=\"ms-Button\" id=\"open-dialog\">Open Dialog</button><br/><br/>\n        <button class=\"ms-Button\" id=\"fill-cell\">Fill cell</button><br/><br/>\n        <button class=\"ms-Button\" id=\"add-sheet\">Add sheet</button><br/><br/>\n        <label id=\"user-name\"></label><br></br>\n\n        <button class=\"ms-Button\" id=\"reset-table\">Reset Table</button><br/><br/>\n    </main>\n</body>\n\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=taskpane.js.map