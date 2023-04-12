import TasksBlood from "./TasksBlood"
import TasksHisto from "./TasksHisto"
import TasksRad from "./TasksRad"
import { Button } from '@mui/material'
import styles from './PatientTasks.module.css'

export default function PatientTasks() {

    return (
        <div className={styles.patientTasks}>
            <TasksBlood />
            <TasksRad/>
            <TasksHisto/>
            <Button variant="contained">Edit</Button>
        </div>
    )
}