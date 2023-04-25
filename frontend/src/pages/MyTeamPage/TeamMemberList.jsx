
import * as React from 'react';
import { Card, CardContent, Typography,List,ListItem } from '@mui/material';
import ImageAvatars from '../Avatar.jsx';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function TeamMemberList() {
    return (
        <div >
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Team Members
                    </Typography>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>

                            <ImageAvatars id="DoctorAvatar1" />
                            <Typography gutterBottom variant="h6" component="div">
                                Doctor 1
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ImageAvatars id="DoctorAvatar2" />
                            <Typography gutterBottom variant="h6" component="div">
                                Doctor 2
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ImageAvatars id="DoctorAvatar3" />
                            <Typography gutterBottom variant="h6" component="div">
                                Doctor 3
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ImageAvatars id="DoctorAvatar4" />
                            <Typography gutterBottom variant="h6" component="div">
                                Doctor 4
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ImageAvatars id="DoctorAvatar5" />
                            <Typography gutterBottom variant="h6" component="div">
                                Doctor 5
                            </Typography>
                        </ListItem>

                    </List>
                </CardContent>

            </Card>
        </div>
    );
}
