import { addPatient, getCliniciansByUserId  } from "../../dao/patient-dao";
import express from 'express';

const router = express.Router();

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

router.post('/add', async (req, res)=> {
    const success = await addPatient(req.body);
    res.sendStatus(success? HTTP_CREATED: HTTP_NOT_FOUND);
})

router.get('/', async (req, res) => {
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