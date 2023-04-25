const time = new Date();
const localTime = time.toISOString().replace('T', ' ');

const notification = [
    {
        id:1,
        type: 'Admin',
        entity: 'You have a new patient,',
        status: 0
    },
    {
        id:2,
        type: 'Task',
        entity: 'Blood test needed for ',
        status: 0,
    },
    {
        id:3,
        type: 'Admin',
        entity: 'Your patient has been removed, ',
        status: 2
    },
    {
        id:4,
        type: 'Task',
        entity: 'Blood test done for ',
        status: 2
    },
    {
        id:5,
        type: 'Admin',
        entity: 'You have a new patient,',
        status: 0
    },
    {
        id:6,
        type: 'Admin',
        entity: 'Your patient has been removed, ',
        status: 2
    },
    {
        id:7,
        type: 'Task',
        entity: 'Radiology test done for ',
        status: 2,
    },
]

export { notification };