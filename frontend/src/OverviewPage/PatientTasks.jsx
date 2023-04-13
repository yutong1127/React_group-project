import TasksBlood from "./TasksBlood"
import TasksHisto from "./TasksHisto"
import TasksRad from "./TasksRad"
import { Button } from '@mui/material'
import styles from './PatientTasks.module.css'
import Grid2 from '@mui/material/Unstable_Grid2';

export default function PatientTasks() {

    return (
        <Grid2 container spacing={2} className={styles.patientTasks}>
            <Grid2 xs={6}>
                <TasksBlood />
            </Grid2>
            <Grid2 xs={6}>
                <TasksRad />
            </Grid2>
            <Grid2 xs={6}>
                <TasksHisto />
            </Grid2>
              <Grid2 xs={6}>
                <TasksHisto />
            </Grid2>
              <Grid2 xs={6}>
                <TasksHisto />
            </Grid2>
            <Grid2 xs={12}>
                <Button variant="contained">Edit</Button>
            </Grid2>
        </Grid2>
    )
}