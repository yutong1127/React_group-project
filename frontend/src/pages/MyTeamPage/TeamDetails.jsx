
import * as React from 'react';
import TeamMemgerTable from './TeamMemberTable.jsx';
import { Divider, Box, Typography } from '@mui/material';
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function TeamDetails() {
    return (
        <Box >

            <Typography gutterBottom variant="h5" component="div">
                Pink Pandas Team Details
            </Typography>
            <Divider />

            <TeamMemgerTable />

        </Box>
    );
}
