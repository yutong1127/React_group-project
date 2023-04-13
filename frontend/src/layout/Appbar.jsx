import { AppBar, Box, Toolbar, IconButton, Typography, FormControl, InputLabel, NativeSelect, List, ListItem, ListItemText, ListItemButton, Button } from '@mui/material';
import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';

import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContextProvider';

const AppBarM = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, drawerOpen }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(drawerOpen && {
        width: `calc(100% - 240px)`,
        marginLeft: `240px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DocAppBar() {

    const { notifications } = useContext(AppContext);

    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorElNotification, setAnchorElNotification] = useState(null);

    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    }
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    }
    const handleNotificationsOpen = (event) => {
        setAnchorElNotification(event.currentTarget);
    }
    const handleNotificationsClose = () => {
        setAnchorElNotification(null);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBarM position='static'
                open={drawerOpen}
                
            // sx={{mr:2, ...(drawerOpen && {marginLeft:'240px'})}}
            >
                <Toolbar sx={{ flexGrow: 1 }}>
                    <IconButton
                        size='large'
                        edge='start'
                        color='primary'
                        aria-label='menu'
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2 }}>
                        <MenuIcon sx={{ color: '#9ED0F9' }} />
                    </IconButton>

                    <Typography variant='h4' component='div' sx={{ flexGrow: 1, textAlign: 'left' }}>
                        Notification
                    </Typography>
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Filter By
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'filter',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={30}>None</option>
                            <option value={20}>Time</option>
                            <option value={10}>Name</option>
                        </NativeSelect>
                    </FormControl>
                    
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
                            <MenuItem key={index} onClick={handleNotificationsClose} sx={{ m: 2, p: 2,flexDirection:'column', alignItems:'flex-start', borderColor:'#9ED0F9', borderWidth:'2px', borderStyle:'solid', borderRadius:'5px'}}>
                                <Typography >{notification.details}</Typography>
                                <Box>
                                    <Button size='medium'>CHECK IT OUT</Button>
                                    <Button size='medium'>DISMISS</Button>
                                </Box>
                            </MenuItem>
                        ))}
                    </Menu>
                    <IconButton
                        size='large'
                        aria-label='user'
                        color='inherit'>
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBarM>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={drawerOpen}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List >
                    {['Patient List', 'Patient Details', 'My Team', 'My Profile Page', 'Notifications'].map((text, index) => (
                        <ListItem key={text} sx={{mt:2}}>
                            <ListItemButton sx={{ borderColor:'#2196F3',borderWidth:'2px',borderStyle:'solid',borderRadius: 5 }}>
                                <ListItemText sx={{ color: '#2196F3',p:'10px' }}>{text}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}
