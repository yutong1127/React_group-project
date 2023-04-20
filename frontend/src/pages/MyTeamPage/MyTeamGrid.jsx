import * as React from 'react';
import {Box, Paper, Grid, styled} from '@mui/material';
import PatientList from './PatientList';
import TeamPerformance from './TeamPerformance';
import Users from './Users';
import TeamDetails from './TeamDetails';

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
                <Grid container item xs={12} md={4} spacing={3} mt={10}>

                    <Grid item xs={12} md={12}>
                        <PatientList />
                    </Grid>

                </Grid>
                <Grid container item xs={12} md={8} spacing={3} mt={10}   >

                <Grid item xs={12} md={12}>
                        <TeamDetails />
                    </Grid>
        
                    <Grid item xs={12} md={12}>
                        <TeamPerformance />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Users />
                    </Grid>



                </Grid>



            </Grid>
        </Box>
    );
}