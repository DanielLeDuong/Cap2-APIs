"use strict";

var _express = _interopRequireDefault(require("express"));

var _sorts = require("~/utils/sorts.js");

var _mongodb = require("~/config/mongodb");

var _asyncExitHook = _interopRequireDefault(require("async-exit-hook"));

require("dotenv/config");

var _environment = require("~/config/environment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
var START_SERVER = function START_SERVER() {
  var app = (0, _express["default"])();
  var hostname = _environment.env.APP_HOST;
  var port = _environment.env.APP_PORT;
  app.get('/', function (req, res) {
    res.end('<h1>Hello World!</h1><hr>');
  });
  app.listen(port, hostname, function () {
    // eslint-disable-next-line no-console
    console.log("Hello ".concat(_environment.env.AUTHOR, ", I am running at ").concat(hostname, ":").concat(port, "/"));
  });
  (0, _asyncExitHook["default"])(function (signal) {
    (0, _mongodb.CLOSE_DB)();
  });
}; //()() la viet mot ham roi goi lai ham do luon


(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Connecting....');
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _mongodb.CONNECT_DB)());

        case 4:
          console.log('Connected');
          START_SERVER();
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0), process.exit(0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
})(); // CONNECT_DB()
//   .then(() => console.log('Connecting....'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error),
//     process.exit(0)
//   })
//# sourceMappingURL=server.dev.js.map
