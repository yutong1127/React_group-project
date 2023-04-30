import { Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'

export default function Task(props) {

    return (
        <Grid item xs={6}>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label={props.task.type} />
            </FormGroup>
        </Grid>
    )
}