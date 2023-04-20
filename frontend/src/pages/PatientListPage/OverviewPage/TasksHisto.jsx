import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
export default function TasksHisto() {

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Histo" />
            </FormGroup>
        </div>
    )
}