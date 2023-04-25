import { Team, User } from '../patientlist-db/schema';

// retrieve team 
async function retrieveTeam(teamId) {
    const result = await Team.findOne({ id: teamId });
    return result;
}



// retrieve patient list from Team collection
async function retrievePatientList(teamId) {

    const result = await Team.findOne({ id: teamId }, { patients: 1 })
        .populate('patients');

    console.log(`result: ${await Team.findOne({ id: teamId })}`);
    return result.patients;
}

// retrieve team member list from Team collection
async function retrieveClinicianList(teamId) {


    const result = await Team.findOne({ id: teamId }, { clinicians: 1 })
        .populate('clinicians');
    return result.clinicians;
}




export {
    retrieveTeam,
    retrievePatientList,
    retrieveClinicianList
};

