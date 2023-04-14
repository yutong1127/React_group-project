import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PatientList from './PatientList';
import TeamPerformance from './TeamPerformance';
import Users from './Users';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MyTeamGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8}>
                <Grid container item xs={12} md={4} spacing={3}>

                    <Grid item xs={12} md={12}>
                        <PatientList />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Users />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={8}>
                    <TeamPerformance />
                </Grid>
            </Grid>
        </Box>
    );
}