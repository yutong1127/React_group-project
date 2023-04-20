import TasksBlood from "./TasksBlood"
import TasksHisto from "./TasksHisto"
import TasksRad from "./TasksRad"
import { Button, Grid } from '@mui/material'
import styles from './PatientTasks.module.css'
// import Grid  from '@mui/material/Unstable_Grid item';

export default function PatientTasks() {

    return (
        <Grid item container spacing={2} className={styles.patientTasks}>
            <Grid item xs={6}>
                <TasksBlood />
            </Grid >
            <Grid item xs={6}>
                <TasksRad />
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