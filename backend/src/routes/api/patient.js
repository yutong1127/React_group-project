import { addPatient,getTeamByUserId, getCliniciansByTeam  } from "../../dao/patient-dao";
import express from 'express';

const router = express.Router();

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

router.post('/add', async (req, res)=> {
    const success = await addPatient(req.body);
    const testing = await getCliniciansByTeam(1);
    res.sendStatus(success? HTTP_CREATED: HTTP_NOT_FOUND);
})

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const team = await getTeamByUserId(id);
      const clinicians = await getCliniciansByTeam(team);
      res.json(clinicians);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  
export default router;