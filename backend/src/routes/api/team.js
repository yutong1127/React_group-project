import express from 'express';
import {
    retrieveTeam,
    retrievePatientList,
    retrieveClinicianList
} from '../../dao/team-dao.js'

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

router.get('/:teamId', async(req,res)=>{
    const { teamId } = req.params;

    const team =await retrieveTeam(teamId);

    if(team) {
        return res.json(team);
    }
        return res.sendStatus(HTTP_NOT_FOUND);

});


router.get('/:teamId/patient_list', async(req,res)=>{
    const { teamId } = req.params;

    // console.log(`teamId: ${teamId}`);
    const patientList =await retrievePatientList(teamId);
    // console.log(`patientList: ${patientList}`);
    if(patientList) {
        return res.json(patientList);
        
    }
        return res.sendStatus(HTTP_NOT_FOUND);

});

router.get('/:teamId/clinician_list', async(req,res)=>{
    const { teamId } = req.params;


    const clinicianList =await retrieveClinicianList(teamId);

    if(clinicianList) {
        return res.json(clinicianList);
    }
        return res.sendStatus(HTTP_NOT_FOUND);

});



export default router;