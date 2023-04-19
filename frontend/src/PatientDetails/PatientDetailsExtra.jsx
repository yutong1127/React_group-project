import {
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Typography,

} from "@mui/material";

import EditNoteIcon from "@mui/icons-material/EditNote";


const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    position: "relative",
    left: "300px",
};

export default function PateintDetailsExtra() {
    return (
        <Card >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Extra Information
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="Summary:" />

                        <EditNoteIcon />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Problem: goona die" />
                        <EditNoteIcon />
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Plan:" />
                        <EditNoteIcon />
                    </ListItem>
                    
                </List>

            </CardContent>
        </Card>

    )
}