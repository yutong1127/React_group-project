import { styled, useTheme } from '@mui/material/styles';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppContext } from '../utils/AppContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '.././layout/Appbar.module.css'



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export default function DrawerMenu() {
    const theme = useTheme();

    const { drawerOpen, handleDrawerClose } = useContext(AppContext);

    const drawerData = [
        {
            link: 'patientlist',
            text: 'Patient List'
        },
        {
            link: 'patientdetails',
            text: 'Patient Details'
        },
        {
            link: 'myteam',
            text: 'My Team'
        },
        {
            link: 'myprofile',
            text: 'My Profile'
        },
        {
            link: 'notification',
            text: 'Notifications'
        }
        
    ]
    return (
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
                {drawerData.map((data) => (
                    <ListItem key={data.text} sx={{ mt: 2 }}>
                        <ListItemButton sx={{ borderColor: '#2196F3', borderWidth: '2px', borderStyle: 'solid', borderRadius: 5 }}>
                            
                            <Link to={`${data.link}`} className={styles.link}>
                            <ListItemText sx={{ color: '#2196F3', p: '10px' }}>
                                {data.text}
                            </ListItemText>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>

    )

}

