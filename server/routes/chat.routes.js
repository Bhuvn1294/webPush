import express from 'express';
var router = express.Router();
import chatCtrl from '../controllers/chatController.js'
/* GET users listing. */
router.route('/')
    .get(webCtrl.chatCtrl);



export default router;
