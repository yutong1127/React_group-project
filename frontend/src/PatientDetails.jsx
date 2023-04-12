import styles from "./PatientDetails.module.css"
import { List, ListItem, ListItemText, Divider } from '@mui/material'

export default function PatientDetails() {

    return (
        <div className={styles.patientDetails}>
            <List>
                <ListItem >
                    <ListItemText primary="Name" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Indentifier" />
                </ListItem>
                <Divider />
                <ListItem >
                    <ListItemText primary="Location" />
                </ListItem>
            </List>
        </div>
    )

};