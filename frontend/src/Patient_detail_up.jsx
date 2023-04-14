import {
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Grid,
} from "@mui/material";
import styles from "./Patient_detail_up.module.css";
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
export default function Patient_detail_up() {
  return (
    <Box sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}>
      <Grid container space="3">
        <Grid item md={6}>
          <Box x={style} component="nav" aria-label="mailbox folders">
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
          </Box>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item md={5}>
          <Box sx={{ m: 2 }}>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <h2 className={styles.h3}>Tasks</h2>
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
