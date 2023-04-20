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
                        <CardContent className={styles.cardContent}>
                            <Typography sx={{ textAlign: 'left', fontSize: 20 }} >{item.type}</Typography>

                            <Typography sx={{ textAlign: 'left', variant: 'body2', paddingBottom: '30px' }}>{item.created_at}</Typography>

                            <Typography sx={{ textAlign: 'left', bgcolor: '#9ED0F9', padding: '30px' }}>{item.entity}</Typography>


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