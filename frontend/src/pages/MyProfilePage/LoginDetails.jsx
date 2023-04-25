import { useState } from 'react';
import {Container,Typography,TextField,List,ListItem, ListItemText,Button,styled, Box, Paper, Grid } from '@mui/material';
import { useForm } from "react-hook-form";


const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function LoginDetails() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        isEditing ?
            <LoginDetailsForm setEditOff={() => setIsEditing(false)} />
            : <LoginDetailsList setEditOn={() => setIsEditing(true)} />

    );
}



function LoginDetailsList({ setEditOn }) {
    function hancleEditClick() {
        setEditOn();


    }

    return (
        <div >

            <Box sx={{ mx: 'auto', px: 5 }}>


                <List sx={style} component="nav" aria-label="mailbox folders">




                    <ListItem button>
                        <ListItemText
                            primary="Username"
                            secondary={DoctorDummyData.username} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Password"
                            secondary={DoctorDummyData.password} />
                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    onClick={hancleEditClick}
                    fullWidth
                >Edit Login Details</Button>
            </Box>
        </div>
    )

}

function LoginDetailsForm({ setEditOff }) {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit(data) {


        for (let key in data) {
            DoctorDummyData[key] = data[key];

        }



        setEditOff();
    }


    return (
        <Container>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
                Edit Login Details
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>

                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Username"
                        fullWidth
                        defaultValue={DoctorDummyData.username}
                        disabled

                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Password"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                            required: "Required field"
                        })}
                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Confirm Password"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                 
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
    avatar: "DoctorAvartar",
    username: "donalquackquack",
    password: "123456789"

}