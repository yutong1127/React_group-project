import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export default function TasksBlood() {

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Blood Test" />
            </FormGroup>
        </div>
    )
}