import { Task } from "../patientlist-db/schema";
import dayjs from 'dayjs';

async function retrieveTasks() {
    return await Task.find().populate('patient').populate('clinician');
}

async function retrieveTask(id) {
    return await Task.findById(id);
}

async function updateTask(task) {

    const dbTask = await Task.findById(task._id);
    if (dbTask) {

        dbTask.name = task.name;
        dbTask.type = task.type;
        dbTask.patient = task.patient;
        dbTask.clinician = task.clinician;
        dbTask.priority = task.priority;
        dbTask.status = task.status;
   
        await dbTask.save();
        return true;
    }

    return false;
}

async function deleteTask(id) {
    await Task.deleteOne({ _id: id });
}

export {
    retrieveTasks,
    retrieveTask,
    updateTask,
    deleteTask
}