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
import { AppContext } from '../AppContextProvider';
import { useContext } from 'react';


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
                {['Patient List', 'Patient Details', 'My Team', 'My Profile Page', 'Notifications'].map((text, index) => (
                    <ListItem key={text} sx={{ mt: 2 }}>
                        <ListItemButton sx={{ borderColor: '#2196F3', borderWidth: '2px', borderStyle: 'solid', borderRadius: 5 }}>
                            <ListItemText sx={{ color: '#2196F3', p: '10px' }}>{text}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>

    )

}

