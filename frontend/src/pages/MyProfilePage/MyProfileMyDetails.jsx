
import { useState } from 'react';
import { Button, Typography, List,ListItem,ListItemText,Divider,TextField,Container, Box } from '@mui/material';
import ImageAvatars from '../../utils/Avatar.jsx';
import { useForm } from "react-hook-form";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function MyProfileMyDetails() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        isEditing ?
            <MyDetailsForm setEditOff={() => setIsEditing(false)} />
            : <MyDetails setEditOn={() => setIsEditing(true)} />

    );
}



function MyDetails({ setEditOn }) {
    function hancleEditClick() {
        setEditOn();


    }

    return (
        <div >

            <Box sx={{ mx: 'auto', px: 5 }}>

                <ImageAvatars id="DoctorAvartar" sx={{ width: 56, height: 56 }} />
                <List sx={style} component="nav" aria-label="mailbox folders">

                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Dr. {DoctorDummyData.firstName} {DoctorDummyData.lastName}
                    </Typography>
                    <Divider />

                    <ListItem button>
                        <ListItemText
                            primary="Role"
                            secondary={DoctorDummyData.role} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="Contact Number"
                            secondary={DoctorDummyData.phone} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="Email"
                            secondary={DoctorDummyData.email} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Team"
                            secondary={DoctorDummyData.team} />
                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    onClick={hancleEditClick}
                    fullWidth
                >Edit My Details</Button>
            </Box>
        </div>
    )

}

function MyDetailsForm({ setEditOff }) {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    function onSubmit(data) {


        for (let key in data) {
            
            DoctorDummyData[key] = data[key];

        }



        setEditOff();
    }


    return (
        <Container>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
                Edit My Details
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="First Name"
                        fullWidth
                        defaultValue={DoctorDummyData.firstName}
                        {...register("firstName", {
                            required: "Required field"
                        })}

                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Last Name"
                        fullWidth
                        defaultValue={DoctorDummyData.lastName}
                        {...register("lastName", {
                            required: "Required field"
                        })}
                    />

                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Phone Number"
                        fullWidth
                        defaultValue={DoctorDummyData.phone}
                        {...register("phone", {
                            required: "Required field"
                        })}
                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Email"
                        fullWidth
                        defaultValue={DoctorDummyData.email}
                        {...register("email", {
                            required: "Required field",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Role"
                        fullWidth
                        defaultValue={DoctorDummyData.role}
                        disabled

                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Team"
                        fullWidth
                        defaultValue={DoctorDummyData.team}
                        disabled

                    />
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Save
                </Button>
            </form>
        </Container>
    );
};

let DoctorDummyData = {

    firstName: "Donald",
    lastName: "Duck",
    phone: "0101011010",
    email: "donaldduck@gmail.com",
    role: "Surgeon",
    team: "XY",
    avatar: "DoctorAvartar"

}