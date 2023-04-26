const time = new Date();
const localTime = time.toISOString().replace('T', ' ');

const notification = [
    {
        id:1,
        type: 'Admin',
        entity: 'You have a new patient,',
        isRead: 0,
    },
    {
        id:2,
        type: 'Task',
        entity: 'Blood test needed for ',
        isRead: 0,
    },
    {
        id:3,
        type: 'Admin',
        entity: 'Your patient has been removed, ',
        isRead: 1,
    },
    {
        id:4,
        type: 'Task',
        entity: 'Blood test done for ',
        isRead: 1,
    },
    {
        id:5,
        type: 'Admin',
        entity: 'You have a new patient,',
        isRead: 0,
    },
    {
        id:6,
        type: 'Admin',
        entity: 'Your patient has been removed, ',
        isRead: 1,
    },
    {
        id:7,
        type: 'Task',
        entity: 'Radiology test done for ',
        isRead: 0,
    },
]

export { notification };