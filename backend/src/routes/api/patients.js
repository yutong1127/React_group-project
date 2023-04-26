import express from 'express';

import { retrievePatientList } from '../../dao/myTeam-dao'

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

router.get('/', async(req,res)=>{
    
    res.json(await retrievePatientList(1));

});

export default router;