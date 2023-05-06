import {
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import props from 'prop-types';
import TextField from '@mui/material/TextField';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    position: 'relative',
    left: '300px',
};

const calculateAge = (patient) => {
    const birthDate = new Date(patient.birth_date);
    const today = new Date();
    const diff = today - birthDate;
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return age;
};

const transferPatientTeam = async (
    patientId,
    supervisorId,
    API_BASE_URL
) => {
    try {
        const response = await fetch(
            `${API_BASE_URL}/api/team/transferTeam`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    patientId: patientId,
                    supervisorId: supervisorId
                }),
            }
        );
        if (!response.ok) {
            throw new Error('Error updating patient data');
        }
    } catch (error) {
        console.error('Error updating patient data:', error);
    }
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export default function PatientDetailsInfo(props) {
    const { patientId } = useParams();
    const { patientData } = props;
    const [patient, setPatient] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [team, setTeam] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [supervisorList, setSupervisorList] = useState('');
    
    useEffect(() => {
        const getPatientData = async () => {
            if (patientData.data) {
                setPatient(patientData.data);
                getTeam();
                getSupervisorList();
            }
        };
        getPatientData();
    }, [patientData]);

    useEffect(() => {
        if (!openDialog) {
            setSearchValue("");
            getTeam();
        }
    }, [openDialog]);

    const patientAge = calculateAge(patient);

    const getTeam = async () => {
        
        const response = await fetch(
            `${API_BASE_URL}/api/team/retrieveTeamByPatientId/${patientId}`
        );
        const data = await response.json();
        setTeam(data);
    };

    const handletransferPatientTeam = async (value) => {
        await transferPatientTeam(patientId, value, API_BASE_URL);
        setOpenDialog(false);
    };

    const getSupervisorList = async () => {
        const response = await fetch(
            `${API_BASE_URL}/api/user/retrieveAllSupervisors`
        );
        const data = await response.json();
        setSupervisorList(data);
    };
    
    useEffect(() => {
        const fetchSupervisors = async () => {
          try {
            const response = await fetch(
                `${API_BASE_URL}/api/user/retrieveAllSupervisors`
            );
            const data = await response.json();

            const filteredData = data.filter(
                (item) =>
                  (item.fname + ' ' + item.lname).toLowerCase().includes(searchValue.toLowerCase())
              );
            setSupervisorList(filteredData);
          } catch (error) {
            console.error(error);
          }
        };
        fetchSupervisors();
    }, [searchValue]);

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    Basic Information
                </Typography>
                <List>
                    <ListItem divider>
                        <ListItemText
                            primary={'Patient ID: ' + `${patient.identifier}`}
                        />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText
                            primary={
                                'Patient Name: ' +
                                `${patient.fname}` +
                                ' ' +
                                `${patient.lname}`
                            }
                        />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary={'Age: ' + `${patientAge}`} />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText
                            primary={'Gender: ' + `${patient.gender}`}
                        />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText
                            primary={'Location: ' + `${patient.location}`}
                        />
                    </ListItem>
                    <ListItem divider button onClick={() => setOpenDialog(true)}>
                        <ListItemText 
                            primary={'Team: ' + `${team.name}`} 
                        />
                    </ListItem>
                </List>
            </CardContent>
            <Dialog open={openDialog} 
                    onClose={() => setOpenDialog(false)}                     
                    sx={{
                        "& .MuiDialog-container": {
                            "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "500px",  
                            },
                        },
                    }}>
                <DialogTitle>Select supervisor</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    {supervisorList.length > 0 ? (
                        <DialogContentText>
                            {supervisorList.map((supervisor) => (
                                <ListItem key={supervisor._id}>
                                    <Button onClick={() => handletransferPatientTeam(supervisor._id)}
                                            onClose={() => setOpenDialog(false)}>
                                        <ListItemText primary={supervisor.fname + ' ' + supervisor.lname} />
                                    </Button>
                                </ListItem>
                            ))}
                        </DialogContentText>
                    ) : (
                        <DialogContentText>
                            No supervisor found.
                        </DialogContentText>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}
