import mongoose from 'mongoose';

import { Patient, User, Team, Notification } from "../patientlist-db/schema";
import { getUserById } from "./user-dao";

async function retrievePatient(id) {
    return await Patient.findById(id);
}

async function updatePatient(id, data) {
    const updatedPatient = await Patient.findByIdAndUpdate(id, data, { new: false });
    
    return updatedPatient !== undefined;
}

async function deletePatient(id) {
    return await Patient.deleteOne({ _id: mongoose.Types.ObjectId(id) });
}



async function addPatient(data) {
    const patient = new Patient({
        fname: data.fname,
        lname: data.lname,
        location: data.location,
        description: data.description,
        responsibleClinicians: data.responsibleClinicians,
        quickAdd: data.quickAdd,
        birth_date: data.birth_date,
        gender: data.gender,
    })

    await patient.save();

    const team = await Team.findOne({supervisors:data.responsibleClinicians}).populate();
    // console.log(`recipient: ${team.clinicians}`)

    const clinicians = team.clinicians;
    console.log(`clinicians: ${clinicians}`)
     
    const notification = new Notification({
        type:'Admin',
        patient:patient,
        entity:'You have a new patient, ',
        isRead:false
    });

    await notification.save();
    for (const clinician of clinicians){
        notification.recipient.push(clinician);
        const user = await User.findOne({_id:clinician._id})
        user.notification.push(notification);
        await notification.save();
        await user.save();
    }
    return true;
}

async function getCliniciansByUserId(id) {
    let data = [];
    const team = await Team.findOne({ clinicians: id });
    const clinicians = team.supervisors;
    await Promise.all(clinicians.map(async (c) => {
        const user = await getUserById(c);
        data.push({
            id: user.id,
            fname: user.fname,
            lname: user.lname,
        });
    }));
    return data;
}

export {
    addPatient, getCliniciansByUserId, updatePatient, retrievePatient, deletePatient
}