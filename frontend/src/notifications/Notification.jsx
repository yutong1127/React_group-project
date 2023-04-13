import * as React from 'react';
import { Card, Box, Container, Typography, CardContent, CardActions, Button } from '@mui/material';
import { useContext } from 'react';
import DocAppBar from '../layout/Appbar';
import { AppContext } from '../AppContextProvider';


export default function Notifications() {


    const {notifications, handleClick}=useContext(AppContext);

    return (
        <Container sx={{width:'1280px'}}>
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
                            <Button size='small' variant='outlined' onClick={()=>handleClick(index)}>Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>

    );
}