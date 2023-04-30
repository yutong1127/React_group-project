import * as React from 'react';
import { styled, Box, Paper, Grid } from '@mui/material';
import MyProfileMyDetails from './MyProfileMyDetails';
import MyProfileAnalitics from './MyProfileAnalitics';
import LoginDetails from './LoginDetails';



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
            <Grid container spacing={8}  mt={10}>
                <Grid container item spacing={3} xs={12} md={4}>

                    <Grid item xs={12} md={12}>
                        <div><MyProfileMyDetails /></div>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <LoginDetails />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={8}>

                    <div ><MyProfileAnalitics /></div>

                </Grid>

            </Grid>
        </Box>
    );
}
