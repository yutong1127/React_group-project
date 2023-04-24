import { Notification, User, Patient } from "../patientlist-db/schema";

async function retrieveNotificationList (){
    return await Notification.find();
}

//Find the notification associated with this particualr user
async function retrieveUserOfNotification(name){

    const user = await User.findOne({ fname:name });
    // console.log(`The user with fname  '${name}' is ${user.fname} ${user.lname} ${user._id}`);

    const notificationsOfUser = await User.populate(user, 'notification');
    console.log(`The notification of this user patients: ${notificationsOfUser}`);

    const notifications = notificationsOfUser.notification;
    
    await Notification.populate(notifications,'patient');
    await Notification.populate(notifications,'sender');


    return notificationsOfUser.notification;  
}

async function deleteNotification(id){
    await Notification.deleteOne({ _id:id })
    await User.updateOne(
        {},
        { $pull:{notification:id}}
    )
}

async function findPatientOfNotification(id){
    return await Patient.findOne({_id:id});
}

export {
    retrieveNotificationList,
    retrieveUserOfNotification,
    deleteNotification
};