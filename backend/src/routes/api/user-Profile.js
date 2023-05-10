import express from 'express';
import {
    getUserById,
    updateUserProfile,
    updateUserPassword
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

    try {
        const success = await updateUserProfile(userProfile);
        if (success) {
            const updatedUser = await getUserById(userId);
            if (!res.headersSent) {
                req.session.user = updatedUser;
                req.session.save();
                return res.json(updatedUser);
            }
        } else {
            if (!res.headersSent) {
                return res.sendStatus(HTTP_NOT_FOUND);
            }
        }
    } catch (err) {
        console.error(err);
        if (!res.headersSent) {
            return res.sendStatus(500);
        }
    }
});

router.put("/password/:userId", authenticate, async (req, res) => {
    const { userId } = req.params;
    const { newPassword } = req.body;
  
    try {
      const success = await updateUserPassword(userId, newPassword);
      if (success) {
        return res.sendStatus(HTTP_NO_CONTENT);
      } else {
        return res.sendStatus(HTTP_NOT_FOUND);
      }
    } catch (err) {
      console.error(err);
      if (!res.headersSent) {
        return res.sendStatus(500);
      }
    }
  });
  

export default router;