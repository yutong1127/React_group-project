import express from 'express';
import {
    retrieveNotificationList,
    retrieveUserOfNotification,
    deleteNotification,
    retrieveUnreadNotification
} from '../../dao/notification-dao';

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();


router.get('/', async(req,res)=>{

    res.json(await retrieveUserOfNotification('Jant'));

});

router.get('/unread', async(req,res)=>{

    res.json(await retrieveUnreadNotification('Jant'));

});


router.delete('/:id', (req, res) => {

    const { id } = req.params;
    deleteNotification(id);
    res.status(HTTP_NO_CONTENT).end();
    
});


export default router;