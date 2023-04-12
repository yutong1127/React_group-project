import FreetextArea from "./FreetextArea"
import PatientDetails from "./PatientDetails"
import PatientProgress from "./PatientProgress"
import PatientTasks from "./PatientTasks"
import UploadArea from "./UploadArea"
import styles from "./PatientCard.module.css"

export default function PatientCard(props) {

    return (
        <div className={styles.patientCard}>
            <PatientDetails patient={props.patient}/>
            <PatientProgress />
            <PatientTasks/>
            <div>
                <FreetextArea/>
                <UploadArea/>
            </div>
        </div>
    )

};