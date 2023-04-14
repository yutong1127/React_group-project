import { Divider, Box, List, ListItem, ListItemText } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";

// const style = {
//   width: "100%",
//   maxWidth: 360,
//   bgcolor: "background.paper",
// };
export default function Patient_detail_down() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1030,
        bgcolor: "background.paper",
        margin: 0,
      }}
    >
      <Box sx={{ my: 3, mx: 2 }}>
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
            <ListItemText primary="??看不清" />
            <EditNoteIcon />
          </ListItem>
        </List>
      </Box>
      <Divider orientation="horizontal" flexItem />
      <Box sx={{ m: 2 }}>
        <List>
          <ListItem>
            <ListItemText primary="Plan:" />
            <EditNoteIcon />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
