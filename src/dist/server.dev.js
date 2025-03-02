"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var hostname = 'localhost';
var port = 8017;
app.get('/', function (req, res) {
  res.send('Hello world');
});
app.listen(port, hostname, function () {
  console.log("hello hung, I am running at ".concat(hostname, ":").concat(port, "/ "));
});
//# sourceMappingURL=server.dev.js.map
