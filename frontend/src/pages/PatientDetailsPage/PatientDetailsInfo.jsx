import {
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import props from 'prop-types';

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

export default function PatientDetailsInfo(props) {
    const { patientId } = useParams();
    const { patientData } = props;
    const [patient, setPatient] = useState('');

    useEffect(() => {
        const getPatientData = async () => {
            if (patientData.data) {
                setPatient(patientData.data);
            }
        };
        getPatientData();
    }, [patientData]);
    const patientAge = calculateAge(patient);

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

                    <ListItem>
                        <ListItemText primary='Team: XY' />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}
