import { useState } from 'react';
import { Container, Typography, TextField, List, ListItem, ListItemText, Button, styled, Box, Paper, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContextProvider';


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

    const { userProfile } = useContext(AppContext);

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
                            secondary={userProfile.fname} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Password"
                            secondary={userProfile.password} />
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

    const { register,
        handleSubmit,
        formState: { errors },
        watch } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { userProfile, updateUserProfile } = useContext(AppContext);


    function onSubmit(data) {


        updateUserProfile(userProfile._id, data);


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
                        label="Password"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                            required: "password is required",
                            minLength: {
                                value: 8,
                                message: "password must be at least 8 characters"
                            },
                            maxLength: {
                                value: 30,
                                message: "Username must be atmost 30 characters long",
                            }

                        })}
                        helperText={errors.password?.message}
                    />

                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Confirm Password"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        {
                        ...register("confirm_password", {
                            required: "comfirm password is required",
                            validate: (value) => {
                                if (value !== watch("password")) {
                                    return "your password does not match";
                                }
                            }
                        })
                        }

                        helperText={errors.confirm_password?.message}
                    />


                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Save
                </Button>
            </form>
        </Container>
    );
};

