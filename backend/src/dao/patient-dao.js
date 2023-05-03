import mongoose from 'mongoose';

import { Patient, User, Team } from "../patientlist-db/schema";
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
    addPatientToTeam(patient._id, patient.responsibleClinicians);
    return;
}

async function addPatientToTeam(patientId, supervisorId) {
    const team = await Team.findOne({supervisors: supervisorId});
    team.patients.push(patientId);
    await team.save();
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