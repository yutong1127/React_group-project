import { useState, React, useContext, memo } from "react"
import FreetextArea from "./FreetextArea"
import PatientDetails from "./PatientDetails"
import PatientProgress from "./PatientProgress"
import PatientTasks from "./PatientTasks"
import UploadArea from "./UploadArea"
import {
    Grid,
    Box,
    Paper,
    Button,
    Modal
} from '@mui/material/';
import { AppContext } from "../../../utils/AppContextProvider"
import { useNavigate } from "react-router"


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function RadiologyTestModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleXR = async () => {
        const newTask = {
            name: "XR",
            type: "Radiology",
            patient: props.patient._id,
            clinician: null,
            priority: 1,
            status: 0
        };
        await props.createTask(newTask)
    };
    const handleUSS = async () => {
        const newTask = {
            name: "USS",
            type: "Radiology",
            patient: props.patient._id,
            clinician: null,
            priority: 2,
            status: 0
        };
        await props.createTask(newTask)
    };
    const handleCT = async () => {
        const newTask = {
            name: "CT",
            type: "Radiology",
            patient: props.patient._id,
            clinician: null,
            priority: 3,
            status: 0
        };
        await props.createTask(newTask)
    };

    return (
        < >
            <Button onClick={handleOpen}>Radiology</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Radiology</h2>
                    <p id="child-modal-description">
                        Select radiologic test
                    </p>
                    <Button onClick={handleXR}>XR</Button>
                    <Button onClick={handleUSS}>USS</Button>
                    <Button onClick={handleCT}>CT</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </ >
    );
}
function BloodTestModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleFBC = async () => {
        const newTask = {
            name: "FBC",
            type: "Blood-test",
            patient: props.patient._id,
            clinician: null,
            priority: 1,
            status: 0
        };
        await props.createTask(newTask)
    };
    const handleUE = async () => {
        const newTask = {
            name: "UE",
            type: "Blood-test",
            patient: props.patient._id,
            clinician: null,
            priority: 1,
            status: 0
        };
        await props.createTask(newTask)
    };
    const handleCOAG = async () => {
        const newTask = {
            name: "COAG",
            type: "Blood-test",
            patient: props.patient._id,
            clinician: null,
            priority: 1,
            status: 0
        };
        await props.createTask(newTask)
    };

    return (
        < >
            <Button onClick={handleOpen}>Blood Test</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Blood Test</h2>
                    <p id="child-modal-description">
                        Select blood test
                    </p>
                    <Button onClick={handleFBC}>FBC</Button>
                    <Button onClick={handleUE}>UE</Button>
                    <Button onClick={handleCOAG}>COAG</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </ >
    );
}

function ReviewModal(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateTask = async () => {
        const task = {
            name: 'Review',
            type: 'Review',
            patient: props.patient._id,
            clinician: '6441045875c54d273abff405',
            priority: 0,
            status: 0
        }
        await props.createTask(task)
    }

    return (
        < >
            <Button onClick={handleOpen}>Review</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Review</h2>
                    <p id="child-modal-description">
                        Review patient
                    </p>
                    <Button onClick={handleCreateTask}>Create</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </ >
    );
}
export default function PatientCard(props) {
    const { createTask } = useContext(AppContext)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Paper elevation={3} style={{
            padding: 8,
            margin: 5
        }}>
            <Box sx={{ flexGrow: 1, maxHeight: 300 }}>
                <Grid item container spacing={2}>
                    <Grid item xs={1}>
                        <Button onClick={() => navigate(`/patientdetails/${props.patient._id}`)}>
                            <PatientDetails patient={props.patient} />
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Box component="div" sx={{ overflowY: "scroll", maxHeight: 200 }}>
                            <PatientProgress patient={props.patient} />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box component="div" sx={{ overflowY: "scroll", maxHeight: 200 }}>
                            <PatientTasks patient={props.patient} />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <FreetextArea container={props.patient.container} patient_id={props.patient._id} />
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained">Edit</Button>

                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" onClick={handleOpen}>Add</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 400 }}>
                                <h2 id="parent-modal-title">Type of Task to Add</h2>
                                <p id="parent-modal-description">
                                    Select from options below
                                </p>
                                <BloodTestModal patient={props.patient} createTask={createTask} />
                                <RadiologyTestModal patient={props.patient} createTask={createTask} />
                                <ReviewModal patient={props.patient} createTask={createTask} />
                            </Box>
                        </Modal>
                    </Grid>
                    <Grid item xs={3}>
                        <UploadArea />
                    </Grid>
                </Grid>
            </Box>
        </Paper>

    )

};