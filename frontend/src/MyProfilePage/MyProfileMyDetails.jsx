import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import styles from './MyProfileMyDetails.module.css';
import ImageAvatars from './Avatar.jsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function MyProfileMyDetails() {
    return (
        <div >
            {/* <Card sx={{ maxWidth: 345 }}> */}
            <Card sx={{ maxWidth: 345  }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        My Details
                    </Typography>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>

                            <ImageAvatars />
                            <Typography gutterBottom variant="h6" component="div">
                                Dr. Dummy
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Role: Surgeon" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Contact Number: 0201000000" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Email: dummyemail@gmail.com" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Team: XY" />
                        </ListItem>
                    </List>
                </CardContent>

            </Card>
        </div>
    );
}
