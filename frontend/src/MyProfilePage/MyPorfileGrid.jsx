import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import styles from './MyProfileGrid.module.css';
import MyProfileMyDetails from './MyProfileMyDetails';
import MyProfileEdit from './MyProfileEdit';
import MyProfileAnalitics from './MyProfileAnalitics';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MyPorfileGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8}>
                <Grid container item spacing={3} xs={12} md={4}>

                    <Grid item xs={12} md={12}>
                        <div><MyProfileMyDetails /></div>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <div><MyProfileEdit /></div>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={8}>

                    <div ><MyProfileAnalitics /></div>

                </Grid>

            </Grid>
        </Box>
    );
}
