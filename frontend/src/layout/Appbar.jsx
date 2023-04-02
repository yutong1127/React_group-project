import { AppBar, Box, Toolbar, IconButton, Typography, Menu, FormControl, InputLabel, NativeSelect } from '@mui/material';
import * as React from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function DocAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar sx={{ flexGrow: 1 }}>
                    <IconButton
                        size='large'
                        edge='start'
                        color='primary'
                        aria-label='menu'
                        sx={{ mr: 2 }}>
                        <WidgetsIcon sx={{ color: '#9ED0F9' }} />
                    </IconButton>

                    <Typography variant='h4' component='div' sx={{ flexGrow: 1, textAlign: 'left' }}>
                        Notification
                    </Typography>
                    <FormControl sx={{minWidth:120}}>
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
                        size='large'
                        aria-label='notification'
                        color='inherit'>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton
                        size='large'
                        aria-label='user'
                        color='inherit'>
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
