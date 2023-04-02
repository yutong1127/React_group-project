import * as React from 'react';
import { Card, Box, Container, Typography, CardContent, CardActions, Button } from '@mui/material';
import { Directions } from '@mui/icons-material';
import { bgcolor, display } from '@mui/system';
import { useState, useEffect } from 'react';
import DocAppBar from '../layout/Appbar';
// import notificationList from './DummyData'; 
// This cross-out b/c do it in this way is not working... don't know why

const notificationList = [
    {
        id: 1,
        category: 'Admin',
        title: 'New Patient',
        details: 'You have a new patient Alexander.',
        time: '2023-03-21 16:00:00'
    },
    {
        id: 2,
        category: 'Task',
        title: 'Blood Test Needed',
        details: 'Alice needs a blood test.',
        time: '2023-03-21 18:00:00'
    },
    {
        id: 3,
        category: 'Task',
        title: 'Blood Test Done',
        details: `Bob's test has done by Kelvin.`,
        time: '2023-03-21 20:00:00'
    },
    {
        id: 4,
        category: 'Admin',
        title: 'Patient Removed',
        details: 'Cecilia has been transfer to Team 2.',
        time: '2023-03-22 10:00:00'
    }
];

export default function Notifications() {
    const [notifications, setNotifications] = useState(notificationList);

    console.log(notifications);
    
    function handleClick(index){
        const newList = [...notifications];
        newList.splice(index,1);
        setNotifications(newList);
    }

    return (
        <Container>
            <DocAppBar />
            <Box sx={{
                marginLeft: 0,
                width: '80%'
            }}>
                {notifications.map((item, index) => (
                    <Card key={index}
                        variant='outlined'
                        sx={{margin: '20px'}}>
                        <CardContent sx={{
                            marginLeft: 0,
                            bgcolor: '#2196F3',

                        }}>
                            <Typography sx={{ textAlign: 'left', fontSize: '20px', component: 'div' }}>{item.title}</Typography>
                            <Typography sx={{ textAlign: 'left', variant: 'body2', paddingBottom: '30px' }}>{item.time}</Typography>
                            <Typography sx={{ textAlign: 'left', bgcolor: '#9ED0F9', padding: '30px' }}>{item.details}</Typography>

                        </CardContent>
                        <CardActions>
                            <Button size='small' variant='outlined'>View</Button>
                            <Button size='small' variant='outlined'>Done</Button>
                            <Button size='small' variant='outlined' onClick={()=>handleClick(index)}>Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>

    );
}