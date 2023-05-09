import { Notification, User, Patient } from "../patientlist-db/schema.js";

async function retrieveNotificationList() {

    const notifications= await Notification.find();
    return notifications;
}

//Find the notification associated with this particualr user
async function retrieveUserOfNotification(id) {

    const user = await User.findOne({ _id:id });
    // console.log(`The user with id  '${id}' is ${user.fname} ${user.lname} ${user._id}`);

    const notificationsOfUser = await User.populate(user, 'notification');
    // console.log(`The notification of this user patients: ${notificationsOfUser}`);

    const notifications = notificationsOfUser.notification;

    await Notification.populate(notifications, 'patient');

    return notificationsOfUser.notification;
}

async function retrieveUnreadNotification(id) {
    const user = await User.findOne({ _id: id });
    const unReadNotification = await Notification.find({ isRead: false, recipient: user._id }).populate('patient').populate('entity');

    return unReadNotification;

}

async function deleteNotification(id) {
    await Notification.deleteOne({ _id: id })
    await User.updateOne(
        {},
        { $pull: { notification: id } }
    )
    await Patient.updateOne(
        {},
        { $pull: { notification: id } }
    )
}
async function updateNotificationSatus(id) {
    console.log(id)

    const notification = await Notification.findOne({ _id: id });

    if (notification) {
        notification.isRead = true;
        await notification.save();

        return true;
    }
    return false;

}

async function findPatientOfNotification(id) {
    return await Patient.findOne({ _id: id });
}

export {
    retrieveNotificationList,
    retrieveUserOfNotification,
    retrieveUnreadNotification,
    deleteNotification,
    updateNotificationSatus
};