import { TextField, Grid } from '@mui/material'
import styles from './PatientProgress.module.css'
import { useContext,useState, React, useEffect } from 'react'
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export default function PatientProgress(props) {
    const [ problems, setProblems ] =  useState(" ");
    const [history, setHistory] = useState('');
    const [plan, setPlan] = useState('');


    useEffect(() => {
        async function getProgress() {
            const {data} = await axios.get(`${API_BASE_URL}/api/patient/${props.patient.identifier}`);
            const progress = data.progress;

            setProblems(progress.problems);
            setHistory(progress.history);
            setPlan(progress.plan);
        }
        getProgress();  
    },[]);

    const handleProblemsChange = (event) => {
        setProblems(event.target.value);
      };
    
      const handleHistoryChange = (event) => {
        setHistory(event.target.value);
      };
    
      const handlePlanChange = (event) => {
        setPlan(event.target.value);
      };

    return (
        <Grid item container spacing={0} className={styles.patientProgress}>
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='Problems' variant='outlined' margin='dense' value={problems} onChange={handleProblemsChange}/>
            </Grid >
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='History' variant='outlined' margin='dense' value={history} onChange={handleHistoryChange}/>
            </Grid >
            <Grid item xs={12}>
                <TextField id='outlined-basic' label='Plan' variant='outlined' margin='dense' value={plan} onChange={handlePlanChange}/>
            </Grid >
           
        </Grid >
    )
}
