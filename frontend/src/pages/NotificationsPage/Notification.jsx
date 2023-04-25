import {
    Card,
    Box,
    Container,
    Typography,
    CardContent,
    CardActions,
    Button,

} from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContextProvider';
import styles from './Notification.module.css';
import {  Link } from 'react-router-dom'


export default function Notifications() {


    const { notification, deleteNotification } = useContext(AppContext);

    console.log(notification);
    return (
        <Container className={styles.container}>
            <Box className={styles.cardContainer}>
                {notification.map((item, index) => (
                    <Card key={index}
                        variant='outlined'
                        sx={{ margin: '20px' }}>
                        <CardContent className={styles.cardContent} id={`${item.id}`}>
                            <Typography sx={{ textAlign: 'left', fontSize: 22, paddingBottom: '5px', color:'white', fontWeight:'bold' }} >New {item.type} Message</Typography>
                           
                            <Typography sx={{ textAlign: 'left', fontSize:18, paddingBottom: '10px', color:'white'}}>Send from: {item.sender.fname}</Typography>

                            <Typography sx={{ textAlign: 'left', fontSize:18, paddingBottom: '10px', color:'white'}}>Time: {item.created_at}</Typography>

                            <Typography sx={{ textAlign: 'left', bgcolor: '#9ED0F9', padding: '30px' }}>{item.entity} {item.patient.fname} {item.patient.lname}</Typography>


                        </CardContent>
                        <CardActions>
                            <Link to='/patientdetails' className={styles.link}>
                                <Button size='small' variant='outlined'>
                                    View
                                </Button>
                            </Link>

                            <Button size='small' variant='outlined' onClick={() => deleteNotification(item._id)}>Delete</Button>

                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>

    );
}