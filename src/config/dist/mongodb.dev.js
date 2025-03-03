"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_DB = exports.CONNECT_DB = void 0;

var _mongodb = require("mongodb");

/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
var MONDODB_URI = 'mongodb+srv://mavoiem:248lseDE6x0oOYnW@cluster0.zzjcl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
var DATABASE_NAME = 'cap2-stock';
var stockDatabaseInstance = null;
var clientInstance = new _mongodb.MongoClient(MONDODB_URI, {
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
          stockDatabaseInstance = clientInstance.db(DATABASE_NAME);

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
};

exports.GET_DB = GET_DB;
//# sourceMappingURL=mongodb.dev.js.map
