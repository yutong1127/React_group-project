import { useState } from 'react';
import { Container, Typography, TextField, List, ListItem, ListItemText, Button, styled, Box, Paper, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContextProvider';

//hide or reveal the password.
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
                    {/* <ListItem button>
                        <ListItemText
                            primary="Username"
                            secondary={userProfile.fname} />
                    </ListItem> */}

                    <ListItem button>
                        <ListItemText
                            primary="Password"
                            secondary="********" />

                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    onClick={hancleEditClick}
                    fullWidth
                > Change Password</Button>
            </Box>
        </div>
    )

}

function LoginDetailsForm({ setEditOff }) {

    const { register,
        handleSubmit,
        formState: { errors },
        watch } = useForm();



    const { userProfile, updateUserProfile } = useContext(AppContext);

    function onSubmit(data) {
        updateUserProfile(userProfile._id, data);
        setEditOff();
    }


    const [showPassword, setShowPassword] = useState(false);

    //hide or reveal the password.
    // const handleClickShowPassword = () => setShowPassword((show) => !show);
    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };

    return (
        <Container>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
                Change Password
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>


                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Password"
                        fullWidth
                        type={showPassword ? "text" : "password"}


                        //hide or reveal the password.

                        // endAdornment={
                        //     <InputAdornment position="end">
                        //       <IconButton
                        //         aria-label="toggle password visibility"
                        //         onClick={handleClickShowPassword}
                        //         onMouseDown={handleMouseDownPassword}
                        //         edge="end"
                        //       >
                        //         {showPassword ? <VisibilityOff /> : <Visibility />}
                        //       </IconButton>
                        //     </InputAdornment>
                        //   }



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
                        error={!!errors?.password}
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
                        error={!!errors?.confirm_password}
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

