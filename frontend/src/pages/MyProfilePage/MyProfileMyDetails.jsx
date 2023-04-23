
import { useState } from 'react';
import { Button, Typography, List,ListItem,ListItemText,Divider,TextField,Container, Box } from '@mui/material';
import ImageAvatars from '../../utils/Avatar.jsx';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContextProvider';

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
    const { userProfile } = useContext(AppContext);

    function hancleEditClick() {
        setEditOn();


    }

    return (
        <div >

            <Box sx={{ mx: 'auto', px: 5 }}>

                <ImageAvatars id="DoctorAvartar" sx={{ width: 56, height: 56 }} />
                <List sx={style} component="nav" aria-label="mailbox folders">

                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Dr. {userProfile.fname} {userProfile.lname}
                    </Typography>
                    <Divider />

                    <ListItem button>
                        <ListItemText
                            primary="Role"
                            secondary={userProfile.role} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="Contact Number"
                            secondary={userProfile.phone} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="Email"
                            secondary={userProfile.email} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Team"
                            secondary="Pink Panda" />
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
    const { userProfile, updateUserProfile} = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {


        updateUserProfile(userProfile._id,data);
        

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
                        defaultValue={userProfile.fname}
                        {...register("fname", {
                            required: "Required field"
                        })}
                        error={!!errors?.fname}
                        helperText={errors.fname?.message}

                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Last Name"
                        fullWidth
                        defaultValue={userProfile.lname}
                        {...register("lname", {
                            required: "Required field"
                        })}
                        error={!!errors?.lname}
                        helperText={errors.lname?.message}
                    />

                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Phone Number"
                        fullWidth
                        defaultValue={userProfile.phone}
                        {...register("phone", {
                            required: "Required field"
                        })}
                        error={!!errors?.phone}
                        helperText={errors.phone?.message}
                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="email"
                        fullWidth
                        defaultValue={userProfile.email}
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
                        defaultValue={userProfile.role}
                        disabled

                    />
                    <TextField
                        margin='dense'
                        varient="outlined"
                        label="Team"
                        fullWidth
                        defaultValue={userProfile.team}
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

