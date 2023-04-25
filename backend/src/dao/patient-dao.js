import { Patient, User, Team } from "../patientlist-db/schema";
import { findUserById } from "./myProfile-dao";

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

// Jant: temporary hardcode for testing
async function getUserById(userId) {
    const user = await User.findOne({id: userId}).exec();
    return user;
}

async function getTeamByUserId(userId) {
    // Jant: temporary hardcode for testing
    const user = await getUserById(userId);
    const team = user.team;
    return team;
}

async function getCliniciansByTeam(teamId) {
    let data = [];
    const team = await Team.findOne({id: teamId}).exec();
    const clinicians = team.clinicians;
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
    addPatient,getTeamByUserId, getCliniciansByTeam 
}