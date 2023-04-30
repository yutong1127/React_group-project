import { Notification, User, Patient } from "../patientlist-db/schema";

async function retrieveNotificationList (){
    return await Notification.find();
}

//Find the notification associated with this particualr user
async function retrieveUserOfNotification(name){

    const user = await User.findOne({ fname:name });
    // console.log(`The user with fname  '${name}' is ${user.fname} ${user.lname} ${user._id}`);

    const notificationsOfUser = await User.populate(user, 'notification');
    // console.log(`The notification of this user patients: ${notificationsOfUser}`);

    const notifications = notificationsOfUser.notification;
    
    await Notification.populate(notifications,'patient');
    await Notification.populate(notifications,'sender');

    return notificationsOfUser.notification;  
}

async function retrieveUnreadNotification(name){
    const user = await User.findOne({ fname:name });
    // console.log(`The user with fname  '${name}' is ${user.fname} ${user.lname} ${user._id}`);

    const unReadNotification = await Notification.find( {isRead:false, recipient:user._id} ).populate('patient').populate('entity');
    // await unReadNotification.populate()

    // console.log(`The unread notifications of this user patients: ${unReadNotification}`);

    return unReadNotification;

}

async function deleteNotification(id){
    await Notification.deleteOne({ _id:id })
    await User.updateOne(
        {},
        { $pull:{notification:id}}
    )
    await Patient.updateOne(
        {},
        { $pull:{notification:id}}
    )
}
async function updateNotificationSatus(id){

   const notification = await Notification.findOne({ _id:id });
   
    if (notification){
        notification.isRead = true;
        await notification.save();

        return true;
    }
    return false;
    
}

async function findPatientOfNotification(id){
    return await Patient.findOne({_id:id});
}

export {
    retrieveNotificationList,
    retrieveUserOfNotification,
    retrieveUnreadNotification,
    deleteNotification,
    updateNotificationSatus
};