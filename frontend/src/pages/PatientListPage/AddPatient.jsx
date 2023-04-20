import * as React from 'react';
import { 
  FormControl, 
  FormGroup, 
  FormLabel,
  FormControlLabel,
  Checkbox,
  Radio, 
  RadioGroup, 
  Switch, 
  Button,
  TextField,
  Box } from '@mui/material';


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

export default function AddPatient(){

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),
      location: formData.get('location'),
      responsibleClinicians: {
        mrX: formData.get('mrX'),
        mrY: formData.get('mrY'),
      }, 
      quickAdd: formData.get('quickAdd'),
      notification: formData.get('notification'),
    };
    console.log(data);
  }
    return(
        <Box sx={{'& .MuiTextField-root': { m: 1}}}>
          <form onSubmit={handleSubmit}>
          <TextField multiline fullWidth label="Name" name="name"/>
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
            <FormGroup >
                <FormControlLabel control={<Checkbox/>} label="Mr X" name="mrX"/>
                <FormControlLabel control={<Checkbox/>} label="Mr Y" name="mrY" />
            </FormGroup>
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