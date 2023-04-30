// export default function dummyFunction (){
//    console.log("Testing") 
// }

import express from 'express';

const router = express.Router();

import notification from './notification.js'
router.use('/notification', notification);

import task from './task.js'
router.use('/task', task);

import analytics from './analytics.js'
router.use('/analytics', analytics);

import user from './user.js'
router.use('/user', user);

export default router;