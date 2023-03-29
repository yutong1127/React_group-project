import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormGroup, FormLabel,FormControlLabel,Checkbox,Radio, RadioGroup, Switch } from '@mui/material';


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
    return(
        <Box sx={{'& .MuiTextField-root': { m: 1}}}>
          <TextField multiline fullWidth label="Name"/>
          <TextField multiline fullWidth label="Description" rows={4} />
          <TextField select fullWidth  label="Location" defaultValue="Auckland"  SelectProps={{
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
                <FormControlLabel control={<Checkbox/>} label="Mr X" />
                <FormControlLabel control={<Checkbox/>} label="Mr Y" />
            </FormGroup>
          </FormControl>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <FormLabel style={{textAlign: "left"}} component="label">Quick add</FormLabel>
            <RadioGroup>
            <FormControlLabel value="blood-test" control={<Radio />} label="Blood Test" />
            <FormControlLabel value="radiology" control={<Radio />} label="Radiology" />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Notification" />
         </FormGroup>
        </Box>
    )
    
}