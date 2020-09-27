"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _webPushController = _interopRequireDefault(require("../controllers/webPush.controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET users listing. */


router.route('/sendNotification').post(_webPushController["default"].sendNotification);
router.route('/subscription') //
.post(_webPushController["default"].pushInFakeDb);
router.route('/createKeys') //subscription
.post(_webPushController["default"].generateVAPIDKeys);
var _default = router;
exports["default"] = _default;