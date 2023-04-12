
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ImageAvatars from '../Avatar.jsx';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function PatientList() {
    return (
        <div >
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Patients
                    </Typography>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>

                            <ImageAvatars id="PatientAvatar1" />
                            <Typography gutterBottom variant="h6" component="div">
                                Patient 1
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ImageAvatars id="PatientAvatar2" />
                            <Typography gutterBottom variant="h6" component="div">
                                Patient 2
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ImageAvatars id="PatientAvatar3" />
                            <Typography gutterBottom variant="h6" component="div">
                                Patient 3
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ImageAvatars id="PatientAvatar4" />
                            <Typography gutterBottom variant="h6" component="div">
                                Patient 4
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ImageAvatars id="PatientAvatar5" />
                            <Typography gutterBottom variant="h6" component="div">
                                Patient 5
                            </Typography>
                        </ListItem>

                    </List>
                </CardContent>

            </Card>
        </div>
    );
}
