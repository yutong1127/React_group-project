import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import PatientDetailsInfo from './PatientDetailsInfo';
import PatientDetailsTasks from './PatientDetailsTasks';
import PatientDetailsExtra from './PatientDetailsExtra';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PatientListGrid() {
    return (
        <Box sx={{ flexGrow: 1, mt:3 }}>
            <Grid container spacing={8}>
                <Grid container item spacing={3} xs={12} md={12}>

                    <Grid item xs={12} md={6}>
                        <div><PatientDetailsInfo /></div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div><PatientDetailsTasks /></div>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12}>

                    <div ><PatientDetailsExtra /></div>

                </Grid>

            </Grid>
        </Box>
    );
}
