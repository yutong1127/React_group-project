import { Notification, User, Patient } from "../patientlist-db/schema";

async function retrieveNotificationList (){
    return await Notification.find();
}

async function retrieveUserOfNotification(name){
    // const notificationOfUser = await Notification.findOne({})
    const user = await User.findOne({ fname:name });
    console.log(`The user with fname  '${name}' is ${user.fname} ${user.lname} ${user._id}`);

    // const recipient = await Notification.populate(user, 'recipient');
    // console.log(`The recipient: ${recipient}`);
    // return recipient;
    const notificationsOfUser = await User.populate(user, 'notification');
    console.log(`The notification of this user: ${notificationsOfUser}`);
    return notificationsOfUser.notification;
    
}

async function deleteNotification(id){
    await Notification.deleteOne({ _id:id });
}


export {
    retrieveNotificationList,
    retrieveUserOfNotification,
    deleteNotification
};