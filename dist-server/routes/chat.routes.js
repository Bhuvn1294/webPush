"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _chatController = _interopRequireDefault(require("../controllers/chatController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

/* GET users listing. */
router.route('/').get(webCtrl.chatCtrl);
var _default = router;
exports["default"] = _default;