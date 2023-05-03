import express from 'express';
import {
    getUserById,
    updateUserProfile
} from '../../dao/user-dao'
import { authenticate } from '../../middleware/authMiddleware';

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

router.get('/:clinicianId', authenticate, async (req, res) => {
    const { clinicianId } = req.params;

    console.log(`userId: ${clinicianId}`);
    const user = await getUserById(clinicianId);
    console.log(`user: ${user}`);
    if (user) {
        return res.json(user);
    }
    return res.sendStatus(HTTP_NOT_FOUND);

});

router.put('/:userId', authenticate, async (req, res) => {
    const { userId } = req.params;

    const userProfile = req.body;

    userProfile._id = userId;

    const succcess = await updateUserProfile(userProfile);

    res.sendStatus(succcess ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);

});

export default router;

// router.get('/:userId', async(req,res)=>{
//     const { userId } = req.params;

// console.log(`userId: ${userId}`);
//     const user =await getUserById(userId);
//     console.log(`user: ${user}`);
//     if(user) {
//         return res.json(user);
//     }
//         return res.sendStatus(HTTP_NOT_FOUND);

// });

// router.put('/:userId', async(req,res)=>{
//     const { userId } = req.params;

//     const userProfile = req.body;

//     userProfile._id = userId;

//     const succcess = await updateUserProfile(userProfile);

//     res.sendStatus(succcess ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);

// });

// export default router;