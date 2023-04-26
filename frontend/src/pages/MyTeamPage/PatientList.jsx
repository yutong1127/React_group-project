
import Typography from '@mui/material/Typography';
import { Box, Divider, ListItemText, ListItem, List } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContextProvider';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function PatientList() {
    const { patientList } = useContext(AppContext);
    return (
        <div >
            <Box sx={{ mx: 'auto', px: 5 }}>
                <Typography gutterBottom variant="h5" component="div">
                    Patients
                </Typography>
                <Divider />

                <List sx={style} component="nav" aria-label="mailbox folders">

                    {patientList.map((patient, index) => (
                        <ListItem button
                            key={index}
                        >
                            <ListItemText
                                primary={patient.fname + " " + patient.lname}

                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    );
}
