import express from 'express';
import {
    retrieveNotificationList,
    retrieveUserOfNotification,
    deleteNotification,
    retrieveUnreadNotification,
    updateNotificationSatus
} from '../../dao/notification-dao';
import { authenticate } from '../../middleware/authMiddleware';
import { Notification } from '../../patientlist-db/schema';

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

// Get notifications for logged in user
router.get('/:clinicianId',authenticate, async(req,res)=>{

    const { clinicianId } = req.params;

    const notifications = await retrieveUserOfNotification(clinicianId);

    if (notifications){
        return res.json(notifications)
    } else{
        return sendStatus(HTTP_NOT_FOUND)
    }
});

// Get unread notifications for logged in user
router.get('/unread/:clinicianId',authenticate,async(req,res)=>{

    const { clinicianId } = req.params;
    
    const unReadNotifications = await retrieveUnreadNotification(clinicianId);

    if (unReadNotifications){
        return res.json(unReadNotifications)
    } else{
        return sendStatus(HTTP_NOT_FOUND)
    }

});

// Delete notification
router.delete('/:id', async(req, res) => {

    const { id } = req.params;
    deleteNotification(id);
    res.status(HTTP_NO_CONTENT).end();
    
});

// Update unread status to isRead
router.put('/unread/:id', async (req, res) => {

    const { id } = req.params;
    const success = await updateNotificationSatus(id);
    res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND )    
    
});

// Find all notifications
router.get('/', async (req, res)=> {

    const notifications = await Notification.find();
    res.json(notifications);
})

export default router;