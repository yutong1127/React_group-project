import express from "express";
import { Patient } from "../patients-data/schema";
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/', async(req,res) => {
    res.json({here});
})
router.post('/addPatient', async(req,res) => {
    const newPatient = new Patient({
        id: uuid(),
        fname: req.body.fname,
        lname: req.body.lname,
        description: req.body.description,
        location: req.body.location,
        responsibleClinicians: req.body.responsibleClinicians,
        quickAdd: req.body.quickAdd,
        notification: req.body.notification,
    })

    await newPatient.save();
    res.sendStatus(201)
})

