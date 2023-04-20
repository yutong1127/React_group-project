import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import DoctorAvartar from '../assets/DoctorAvatar.jpeg';
import DoctorAvatar1 from '../assets/DoctorAvatar1.jpg';
import DoctorAvatar2 from '../assets/DoctorAvatar2.jpg';
import DoctorAvatar3 from '../assets/DoctorAvatar3.jpg';
import DoctorAvatar4 from '../assets/DoctorAvatar4.jpg';
import DoctorAvatar5 from '../assets/DoctorAvatar5.jpg';


export default function ImageAvatars(props) {

  if (props.id === 'DoctorAvartar') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar 
        alt="DoctorAvatar" 
        src={DoctorAvartar} 
        sx={{ width: 100, height: 100, mx: 'auto'}}
        // sx={{ bgcolor: deepOrange[500] }}
        />
      </Stack>
    )
  } else if (props.id === 'DoctorAvatar1') {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar 
        alt="DoctorAvatar1" 
        src={DoctorAvatar1} 
        sx={{ mr: 1 }}
        />
      </Stack>
    )
  } else if (props.id === 'DoctorAvatar2') {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar 
        alt="DoctorAvatar2" 
        src={DoctorAvatar2} 
        sx={{ mr: 1 }}/>
      </Stack>
    )
  } else if (props.id === 'DoctorAvatar3') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar 
        alt="DoctorAvatar3" 
        src={DoctorAvatar3} 
        sx={{ mr: 1 }}/>
      </Stack>
    )
  } else if (props.id === 'DoctorAvatar4') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar 
        alt="DoctorAvatar4" 
        src={DoctorAvatar4} 
        sx={{ mr: 1 }}/>
      </Stack>
    )
  } else if (props.id === 'DoctorAvatar5') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar 
        alt="DoctorAvatar5" 
        src={DoctorAvatar5} 
        sx={{ mr: 1 }}/>
      </Stack>
    )
  } else if (props.id === 'DoctorAvatar6') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar 
        alt="DoctorAvatar6" 
        src={DoctorAvatar5} 
        sx={{ mr: 1 }}/>
      </Stack>
    )
  } else {
    console.log('Error: No Avatar Found')
  }

}
