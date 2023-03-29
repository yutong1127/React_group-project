import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import styles from './MyProfileEdit.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function MyProfileEdit() {
    return (
        <div >
            {/* <Card sx={{ minWidth: 275 }}> */}
            <Card sx={{ maxWidth: 345  }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Edit
                    </Typography>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="username: dummyDoctor123" />
                            <Button size="small">Change</Button>
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="password: ********" />
                            <Button size="small">Change</Button>
                        </ListItem>
                    </List>

                </CardContent>

            </Card>
        </div>
    );
}
