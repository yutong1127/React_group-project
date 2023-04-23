import express from 'express';
import {
    getUserById
} from '../../dao/user-dao.js'

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

router.get('/:userId', async(req,res)=>{
    const { userId } = req.params;
    console.log("user id is");
    console.log(userId);

    const user =await getUserById(userId);

    if(user) {
        return res.json(user);
    }
        return res.sendStatus(HTTP_NOT_FOUND);

});






export default router;