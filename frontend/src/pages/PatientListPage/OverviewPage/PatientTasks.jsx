import TasksBlood from "./TasksBlood"
import TasksHisto from "./TasksHisto"
import TasksRad from "./TasksRad"
import { Button, Grid } from '@mui/material'
import styles from './PatientTasks.module.css'
// import Grid  from '@mui/material/Unstable_Grid item';
import { useContext,useState, React, useEffect } from 'react'
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export default function PatientTasks(props) {
    const [taskBlood, setTaskBlood] = useState(false);
    const [taskRad, setTaskRad] = useState(false);
    const [taskHisto, setTaskHisto] = useState(false);

    useEffect(() => {
        async function getTasks() {
            const { data }  = await axios.get(`${API_BASE_URL}/api/task/patient/${props.patient.identifier}`);
            if(data == 'Blood Test') {
                setTaskBlood(true);
            }
            if(data == 'Radiology') {
                setTaskRad(true);
            }
        }
        getTasks();
    }, []);

    return (
        <Grid item container spacing={2} className={styles.patientTasks}>
            <Grid item xs={6}>
                {taskBlood && <TasksBlood />}
            </Grid >
            <Grid item xs={6}>
                {taskRad && <TasksRad />}
            </Grid >
            <Grid item xs={6}>
                <TasksHisto />
            </Grid >
              <Grid item xs={6}>
                <TasksHisto />
            </Grid >
              <Grid item xs={6}>
                <TasksHisto />
            </Grid >

        </Grid >
    )
}