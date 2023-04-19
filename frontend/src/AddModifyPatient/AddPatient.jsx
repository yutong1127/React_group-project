import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormGroup, FormLabel,FormControlLabel,Checkbox,Radio, RadioGroup, Switch, Button } from '@mui/material';
import axios from 'axios';


const locations = [
    {
      value: 'Auckland',
      label: 'Auckland',
    },
    {
      value: 'Wellington',
      label: 'Wellington',
    },
    {
      value: 'Queenstown',
      label: 'Queenstown',
    },
    {
      value: 'Christchurch',
      label: 'Christchurch',
    },
  ];

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export default function AddPatient(){

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      fname: formData.get('fname'),
      lname: formData.get('lname'),
      description: formData.get('description'),
      location: formData.get('location'),
      responsibleClinicians: formData.get('responsibleClinicians'), 
      quickAdd: formData.get('quickAdd'),
      notification: formData.get('notification'),
    };
    axios.post(`${API_BASE_URL}/api/addPatient`, data)
      .then(() => {
        alert('Patient added!');
      })
      .catch()
    console.log(data);
  }
    return(
        <Box sx={{'& .MuiTextField-root': { my: 1}}}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextField multiline fullWidth sx={{mr:1}} label="First name" name="fname"/>
            <TextField multiline fullWidth sx={{ml:1}} label="Last name" name="lname"/>
            </Box>
          
          <TextField multiline fullWidth label="Description" rows={4} name="description"/>
          <TextField select fullWidth  label="Location" defaultValue="Auckland"  name="location" SelectProps={{
            native: true,
          }}>
            {locations.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
             ))}
          </TextField>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <FormLabel style={{textAlign: "left"}} component="label">Responsible Clinician</FormLabel>
            <RadioGroup >
                <FormControlLabel value="Mr X" control={<Radio />} label="Mr X" name="responsibleClinicians"/>
                <FormControlLabel value="Mr Y"  control={<Radio />} label="Mr Y" name="responsibleClinicians" />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <FormLabel style={{textAlign: "left"}} component="label">Quick add</FormLabel>
            <RadioGroup>
            <FormControlLabel value="blood-test" control={<Radio />} label="Blood Test" name="quickAdd"/>
            <FormControlLabel value="radiology" control={<Radio />} label="Radiology" name="quickAdd"/>
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Notification" name="notification" />
         </FormGroup>
         <Button style={{display: 'flex'}} variant="contained" type="submit">Add</Button>
         </form>
      </Box>
    )
    
}