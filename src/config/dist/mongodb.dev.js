"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLOSE_DB = exports.GET_DB = exports.CONNECT_DB = void 0;

var _mongodb = require("mongodb");

var _environment = require("~/config/environment");

/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
var stockDatabaseInstance = null;
var clientInstance = new _mongodb.MongoClient(_environment.env.MONDODB_URI, {
  serverApi: {
    version: _mongodb.ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
}); //ket noi database

var CONNECT_DB = function CONNECT_DB() {
  return regeneratorRuntime.async(function CONNECT_DB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(clientInstance.connect());

        case 2:
          //ket noi thanh cong thi lay database name
          stockDatabaseInstance = clientInstance.db(_environment.env.DATABASE_NAME);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}; // khi ket noi xong thi lay ham nay dung o nhung noi khac


exports.CONNECT_DB = CONNECT_DB;

var GET_DB = function GET_DB() {
  if (!stockDatabaseInstance) throw new Error('Connect first!');
  return stockDatabaseInstance;
}; //dong ket noi


exports.GET_DB = GET_DB;

var CLOSE_DB = function CLOSE_DB() {
  return regeneratorRuntime.async(function CLOSE_DB$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(stockDatabaseInstance.close());

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.CLOSE_DB = CLOSE_DB;
//# sourceMappingURL=mongodb.dev.js.map
