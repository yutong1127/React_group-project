import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Typography,

} from "@mui/material";

import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

import HourglassFullIcon from "@mui/icons-material/HourglassFull";

import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    position: "relative",
    left: "300px",
};

export default function PateintDetailsTasks() {
    return (
        <Card >
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Tasks
                    </Typography>

            <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="blood" />
                    <HourglassEmptyIcon />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="X-ray" />
                    <HourglassFullIcon />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="xindiantu" />
                    <HourglassEmptyIcon />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Bchao" />
                    <HourglassTopIcon />
                </ListItem>
            </List>
            </CardContent>
        </Card>

    )
}