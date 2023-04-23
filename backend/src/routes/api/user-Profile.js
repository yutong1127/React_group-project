import express from 'express';
import {
    getUserById,
    updateUserProfile
} from '../../dao/user-dao.js'

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

router.get('/:userId', async(req,res)=>{
    const { userId } = req.params;


    const user =await getUserById(userId);

    if(user) {
        return res.json(user);
    }
        return res.sendStatus(HTTP_NOT_FOUND);

});

router.put('/:userId', async(req,res)=>{
    const { userId } = req.params;
  
    const userProfile = req.body;

    userProfile._id = userId;

    const succcess = await updateUserProfile(userProfile);

    res.sendStatus(succcess ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);

});





export default router;