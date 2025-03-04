"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;

require("dotenv/config");

/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
var env = {
  MONDODB_URI: process.env.MONDODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  AUTHOR: process.env.AUTHOR
};
exports.env = env;
//# sourceMappingURL=environment.dev.js.map
