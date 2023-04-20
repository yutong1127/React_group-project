import {
    AppBar,
    Box,
    Toolbar,
    IconButton, 
} from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '.././layout/Appbar.module.css'
import NotificationHeading from './AppbarHeading'
import SortForm from './AppbarSort';
import MessageMenu from './AppbarMessages';
import UserIcon from './AppbarUser';
import DrawerMenu from './AppbarDrawer';
import { AppContext } from '../utils/AppContextProvider'
import { useContext } from 'react';


export default function DocAppBar() {


    const { handleDrawerOpen }= useContext(AppContext);
    
    return (
        <Box className={styles.appBarContainer}>
            <AppBar position='static'
                // open={drawerOpen}
                >
                <Toolbar className={styles.toolbar}>
                    <IconButton
                        size='large'
                        edge='start'
                        color='primary'
                        aria-label='menu'
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2 }}>
                        <MenuIcon sx={{ color: '#9ED0F9' }} />
                    </IconButton>

                    <NotificationHeading />
                    
                    {/* <SortForm /> */}

                    <MessageMenu />

                    <UserIcon />
                </Toolbar>
            </AppBar>
            
            <DrawerMenu />
            
        </Box>
    )
}

// const AppBarM = styled(AppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, drawerOpen }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(drawerOpen && {
//         width: `calc(100% - 240px)`,
//         marginLeft: `240px`,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));
