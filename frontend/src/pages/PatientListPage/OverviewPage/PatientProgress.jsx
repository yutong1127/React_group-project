import { TextField, Grid } from '@mui/material'
import styles from './PatientProgress.module.css'
import { useContext, useState, React, useEffect } from 'react'
import axios from 'axios';


export default function PatientProgress(props) {

    const handleProblemsChange = (event) => {
        console.log(event.target.value);
    };

    const handleHistoryChange = (event) => {
        console.log(event.target.value);
    };

    const handlePlanChange = (event) => {
        console.log(event.target.value);
    };
    if (props.patient.progress) {
        return (

            <Grid item container spacing={0} className={styles.patientProgress}>

                <Grid item xs={12}>
                    <TextField id='outlined-basic' label='Problems' variant='outlined' margin='dense' value={props.patient.progress.problems} onChange={handleProblemsChange} />
                </Grid >
                <Grid item xs={12}>
                    <TextField id='outlined-basic' label='History' variant='outlined' margin='dense' value={props.patient.progress.history} onChange={handleHistoryChange} />
                </Grid >
                <Grid item xs={12}>
                    <TextField id='outlined-basic' label='Plan' variant='outlined' margin='dense' value={props.patient.progress.plan} onChange={handlePlanChange} />
                </Grid >

            </Grid >
        )
    } else {
        return ("Loading")
    }
}
