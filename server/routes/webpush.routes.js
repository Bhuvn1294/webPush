import express from 'express';
import webCtrl from '../controllers/webPush.controller.js'





var router = express.Router();


/* GET users listing. */
router.route('/sendNotification')
  .post(webCtrl.sendNotification)

router.route('/subscription')//
  .post(webCtrl.pushInFakeDb)


router.route('/createKeys')//subscription
  .post(webCtrl.generateVAPIDKeys)





export default router;
