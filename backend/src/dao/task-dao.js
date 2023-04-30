import { Task } from "../patientlist-db/schema";
import dayjs from 'dayjs';
import mongoose from 'mongoose';

async function retrieveTasks() {
    return await Task.find().populate('patient').populate('clinician');
}

async function retrieveTask(id) {
    return await Task.findById(id);
}

async function retrieveTasksByPatientId(id) {
    return await Task.find({ patient: mongoose.Types.ObjectId(id) });
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

// retrieve tasks that have already been completed within the last 7 days
async function retrieveCompletedTasks(clinicianId) {
    const tasks = await Task.find({clinician: clinicianId});
    const completedTasks = tasks.filter(task => dayjs(task.completedAt).isAfter(dayjs().subtract(7, 'day')));
    return completedTasks;
}

export {
    retrieveTasks,
    retrieveTask,
    updateTask,
    deleteTask,
    retrieveCompletedTasks,
    retrieveTasksByPatientId
};
