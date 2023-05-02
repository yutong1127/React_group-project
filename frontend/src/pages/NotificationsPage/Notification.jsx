import {
    Card,
    Box,
    Container,
    Typography,
    CardContent,
    CardActions,
    Button,
    Select,
    FormControl,
    InputLabel,
    MenuItem

} from '@mui/material';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../utils/AppContextProvider';
import styles from './Notification.module.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Notifications() {


    const { notification, deleteNotification, readNotification } = useContext(AppContext);

    // console.log(notification);

    const [sortNotification, setSortNotification] = useState([]);
    useEffect(() => {
        setSortNotification(notification);
    }, [notification]);


    const handleSortNotifictaion = (event) => {
        console.log(event.target.value);
        if (event.target.value == 10) {
            setSortNotification(notification)
        }
        else if (event.target.value == 20) {
            const sortedTime = [...notification].sort((a, b) =>
                a.created_at > b.created_at ? 1 : -1);
            //    console.log(sortedTime);
            setSortNotification(sortedTime)
        }
        else if (event.target.value == 30) {
            const sortedName = [...notification].sort((a, b) =>
                a.patient.lname > b.patient.lname ? 1 : -1);
            //    console.log(sortedName);
            setSortNotification(sortedName)
        }
        else if (event.target.value == 40) {
            const sortedType = [...notification].sort((a, b) =>
                a.type > b.type ? 1 : -1);
            //    console.log(sortedType);
            setSortNotification(sortedType)
        }
        else if (event.target.value == 50) {
            const sortedRead = [...notification].sort((a, b) =>
                a.isRead > b.isRead ? 1 : -1);
            //    console.log(sortedRead);
            setSortNotification(sortedRead)
        }

    }


    return (
        <Container className={styles.container}>

            <Box className={styles.cardContainer}>
                <FormControl variant='standard' sx={{ minWidth: 120, maxWidth: 200, mt: 1, ml: 'auto' }}>
                    <InputLabel id='notification-lable'>
                        Sort By
                    </InputLabel>
                    <Select
                        labelId='notification-lable'
                        defaultValue={10}
                        lable='Sort by'
                        onChange={handleSortNotifictaion}
                    >
                        <MenuItem value={10}>None</MenuItem>
                        <MenuItem value={20}>Time</MenuItem>
                        <MenuItem value={30}>Patient Name</MenuItem>
                        <MenuItem value={40}>Type</MenuItem>
                        <MenuItem value={50}>Unread</MenuItem>

                    </Select>
                </FormControl>
                {sortNotification.map((item, index) => (
                    <Card key={index}
                        variant='outlined'
                        sx={{ margin: '20px' }}>
                        <CardContent className={item.isRead ? styles.cardContentRead : styles.cardContent} id={`${item.id}`}>
                            <Typography sx={{ textAlign: 'left', fontSize: 22, paddingBottom: '5px', color: 'white', fontWeight: 'bold' }} >New {item.type} Message</Typography>

                            <Typography sx={{ textAlign: 'left', fontSize: 18, paddingBottom: '10px', color: 'white' }}>Time: {item.created_at}</Typography>

                            <Typography sx={{ textAlign: 'left', bgcolor: item.isRead ? 'grey' : '#9ED0F9', padding: '30px' }}>{item.entity} {item.patient.fname} {item.patient.lname}</Typography>


                        </CardContent>
                        <CardActions>
                            <Link to='/patientdetails' className={styles.link}>
                                <Button size='small' variant='outlined' onClick={() => readNotification(item._id)}>
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