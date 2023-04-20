import { TextField, Grid } from '@mui/material'
import styles from './PatientProgress.module.css'

export default function PatientProgress() {


    return (
        <Grid item container spacing={0} className={styles.patientProgress}>
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='Problems' variant='outlined' margin='dense' />
            </Grid >
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='History' variant='outlined' margin='dense' />
            </Grid >
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='Plan' variant='outlined' margin='dense' />
            </Grid >
           
        </Grid >
    )
}
