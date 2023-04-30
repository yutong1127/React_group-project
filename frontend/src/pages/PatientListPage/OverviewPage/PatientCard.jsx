import { useState, React } from "react"
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

function RadiologyTestModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </ >
    );
}

function BloodTestModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </ >
    );
}

function ReviewModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </ >
    );
}

function DischargeModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        < >
            <Button onClick={handleOpen}>Discharge</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Discharge</h2>
                    <p id="child-modal-description">
                        Discharge patient
                    </p>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </ >
    );
}

function OtherModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        < >
            <Button onClick={handleOpen}>Other</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Other</h2>
                    <p id="child-modal-description">
                        Create custom task
                    </p>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </ >
    );
}

export default function PatientCard(props) {
    const [open, setOpen] = useState(false);
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
            <Box sx={{ flexGrow: 1 }}>
                <Grid item container spacing={2}>
                    <Grid item xs={1}>
                        <PatientDetails patient={props.patient} />
                    </Grid>
                    <Grid item xs={4}>
                        <PatientProgress patient={props.patient}/>
                    </Grid>
                    <Grid item xs={4}>
                        <PatientTasks patient={props.patient}/>
                    </Grid>
                    <Grid item xs={3}>
                        <FreetextArea />
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
                                <BloodTestModal />
                                <RadiologyTestModal />
                                <ReviewModal />
                                <DischargeModal />
                                <OtherModal />
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