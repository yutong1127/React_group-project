import { TextField, Grid } from '@mui/material'
import styles from './PatientProgress.module.css'
import { useContext, useState, React, useEffect } from 'react'
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

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

    return (
        <Grid item container spacing={0} className={styles.patientProgress}>
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='Problems' variant='outlined' margin='dense' value={props.patient.progress} onChange={handleProblemsChange} />
            </Grid >
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='History' variant='outlined' margin='dense' value={props.patient.progress} onChange={handleHistoryChange} />
            </Grid >
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='Plan' variant='outlined' margin='dense' value={props.patient.progress} onChange={handlePlanChange} />
            </Grid >

        </Grid >
    )
}
