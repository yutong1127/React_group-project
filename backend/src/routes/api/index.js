// export default function dummyFunction (){
//    console.log("Testing") 
// }

import express from 'express';

const router = express.Router();

import notification from './notifications'
router.use('/notification', notification);

export default router;