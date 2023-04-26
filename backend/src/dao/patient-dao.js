import mongoose from 'mongoose';

import { Patient, User, Team } from "../patientlist-db/schema";
import { getUserById } from "./user-dao";

async function retrievePatient(id) {
    return await Patient.findById(id);
}

async function updatePatient(id, data) {
    return await Patient.findByIdAndUpdate(id, data, { new: false });
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
    return await patient.save();
}

async function getRandomUser() {
    const user = await User.find();
    const randomNum = Math.floor(Math.random() * user.length);
    return user[randomNum];
}

async function getCliniciansByUserId(user) {
    //temporary
    const random = await getRandomUser();
    let data = [];
    const team = await Team.findOne({ clinicians: random._id });
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
    addPatient, getCliniciansByUserId, updatePatient,retrievePatient, deletePatient
}