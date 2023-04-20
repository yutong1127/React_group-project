import { Button, TextField } from '@mui/material'
import styles from "./PatientProgress.module.css"
import Grid2 from '@mui/material/Unstable_Grid2';

export default function PatientProgress() {


    return (
        <Grid2 container spacing={0} className={styles.patientProgress}>
            <Grid2 xs={12}>
                <TextField id="outlined-basic" label="Problems" variant="outlined" margin="dense" />
            </Grid2>
            <Grid2 xs={12}>
                <TextField id="outlined-basic" label="History" variant="outlined" margin="dense" />
            </Grid2>
            <Grid2 xs={12}>
                <TextField id="outlined-basic" label="Plan" variant="outlined" margin="dense" />
            </Grid2>
            <Grid2 xs={12}>
                <Button variant="contained">Edit</Button>
            </Grid2>
        </Grid2>
    )
}
