import express from 'express';
import webPushRouter from './webpush.routes.js'
var router = express.Router();

router.use('/webPush', webPushRouter);


export default router;
