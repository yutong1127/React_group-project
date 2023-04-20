import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
export default function TasksRad() {

    return (
        <div>
             <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Rads" />
            </FormGroup>
        </div>
    )
}