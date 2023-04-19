import {
    List,
    ListItem,
    ListItemText,
    Avatar,
    Card,
    CardContent,
    Typography,

} from "@mui/material";

const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    position: "relative",
    left: "300px",
};

export default function PateintDetailsInfo() {
    return (
        <Card >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Basic Information
                </Typography>
                <List>
                    <ListItem>
                        <Avatar alt="patient01" src="" sx={{ width: 56, height: 56 }} />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Patient ID:001" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Patient Name:Bingren" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Age:55" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Gender: Male" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Patient ID:001" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Location: Auckland" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Email: dummyemail@gmail.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Team: XY" />
                    </ListItem>
                </List>

            </CardContent>

        </Card>

    )
}