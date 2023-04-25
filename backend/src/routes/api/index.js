// export default function dummyFunction (){
//    console.log("Testing") 
// }

import express from 'express';

const router = express.Router();

import notification from './notification'
router.use('/notification', notification);

import task from './task'
router.use('/task', task);

import analytics from './analytics'
router.use('/analytics', analytics);

import user from './user'
router.use('/user', user);

import patient from './patient'
router.use('/patient', patient);

export default router;