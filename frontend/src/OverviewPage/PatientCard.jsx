import FreetextArea from "./FreetextArea"
import PatientDetails from "./PatientDetails"
import PatientProgress from "./PatientProgress"
import PatientTasks from "./PatientTasks"
import UploadArea from "./UploadArea"
import styles from "./PatientCard.module.css"
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

export default function PatientCard(props) {

    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid2 container spacing={2} className={styles.patientCard}>
                <Grid2 xs={1}>
                    <PatientDetails patient={props.patient} />
                </Grid2>
                <Grid2 xs={4}>
                    <PatientProgress />
                </Grid2>
                <Grid2 xs={4}>
                    <PatientTasks />
                </Grid2>
                <Grid2 xs={3}>
                    <div>
                        <FreetextArea />
                        <UploadArea />
                    </div>

                </Grid2>
            </Grid2>
        </Box>

    )

};