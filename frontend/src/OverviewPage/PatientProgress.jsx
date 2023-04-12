import { Button, TextField } from '@mui/material'
import styles from "./PatientProgress.module.css"

export default function PatientProgress() {


    return (
        <div className={styles.patientProgress}>
            <TextField id="outlined-basic" label="Problems" variant="outlined" margin="dense"/>
            <TextField id="outlined-basic" label="History" variant="outlined" margin="dense"/>
            <TextField id="outlined-basic" label="Plan" variant="outlined" margin="dense"/>
            <Button variant="contained">Edit</Button>
        </div>
    )
}
