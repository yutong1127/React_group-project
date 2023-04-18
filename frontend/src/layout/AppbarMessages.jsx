import { 
    IconButton, 
    Badge, 
    Menu, 
    MenuItem, 
    Typography, 
    Box, 
    Button } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import { useState, useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import { NavLink } from 'react-router-dom';
import styles from '.././layout/Appbar.module.css'

export default function MessageMenu() {

    const { notifications } = useContext(AppContext);

    const [anchorElNotification, setAnchorElNotification] = useState(null);
    
    const handleNotificationsOpen = (event) => {
        setAnchorElNotification(event.currentTarget);
    }
    const handleNotificationsClose = () => {
        setAnchorElNotification(null);
    }


    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }
    return (
        <>
            <IconButton
                aria-label={notificationsLabel(notifications.length)}
                size='large'
                color='inherit'
                onClick={handleNotificationsOpen}>
                <Badge badgeContent={notifications.length} color="secondary">
                    <MailIcon />
                </Badge>
            </IconButton>
            <Menu sx={{ mt: '45px' }}

                anchorEl={anchorElNotification}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElNotification)}
                onClose={handleNotificationsClose}
            >
                {notifications.map((notification, index) => (
                    <MenuItem
                        key={index}
                        onClick={handleNotificationsClose}
                        sx={{ 
                            m: 2, 
                            p: 2, 
                            flexDirection: 'column', 
                            alignItems: 'flex-start', 
                            borderColor: '#9ED0F9', 
                            borderWidth: '2px', 
                            borderStyle: 'solid', 
                            borderRadius: '5px' }}
                            >
                        <Typography >{notification.details}</Typography>
                        <Box>
                            <NavLink to='/notification' className={styles.link}>
                            <Button size='medium'>CHECK IT OUT</Button>
                            </NavLink>
                            <Button size='medium'>DISMISS</Button>
                        </Box>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}