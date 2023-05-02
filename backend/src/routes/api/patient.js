import {
    retrievePatient,
    updatePatient,
    deletePatient,
    addPatient, 
    getCliniciansByUserId,
    
} from '../../dao/patient-dao';
import { retrievePatientList } from '../../dao/myTeam-dao'

import express from 'express';
const router = express.Router();

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

router.get('/', async(req,res)=>{
    
    res.json(await retrievePatientList(1));

});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await retrievePatient(id);
    // console.log(result);
    if (result) {
        res.json(result);
    } else {
        res.status(404).send('Not found');
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await updatePatient(id, data);
    if (result) {
        res.json(result);
    } else {
        res.status(404).send('Not found');
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await deletePatient(id);
    res.json(result);
});


router.post('/add', async (req, res) => {
    const success = await addPatient(req.body);
    res.sendStatus(success ? HTTP_CREATED : HTTP_NOT_FOUND);
})

router.get('/supervisors/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const clinicians = await getCliniciansByUserId(id);
        res.json(clinicians);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


export default router;