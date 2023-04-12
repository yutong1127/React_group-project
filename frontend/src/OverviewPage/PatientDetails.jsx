import styles from "./PatientDetails.module.css"
import { List, ListItem, ListItemText, Divider } from '@mui/material'

export default function PatientDetails(props) {

    return (
        <div className={styles.patientDetails}>
            <List>
                <ListItem >
                    <ListItemText primary={props.patient.name} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary={props.patient.identifier} />
                </ListItem>
                <Divider />
                <ListItem >
                    <ListItemText primary={props.patient.location} />
                </ListItem>
            </List>
        </div>
    )

};