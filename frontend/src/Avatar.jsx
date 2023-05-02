import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DoctorAvartar from './assets/DoctorAvatar.jpeg';

import PatientAvatar1 from './assets/PatientAvatar1.jpeg';
import PatientAvatar2 from './assets/PatientAvatar2.png';
import PatientAvatar3 from './assets/PatientAvatar3.png';
import PatientAvatar4 from './assets/PatientAvatar4.png';
import PatientAvatar5 from './assets/PatientAvatar5.png';


export default function ImageAvatars(props) {

  if (props.id === 'DoctorAvartar') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar
          alt="DoctorAvatar"
          src={DoctorAvartar}
        // sx={{ bgcolor: deepOrange[500] }}
        />
      </Stack>
    )
  } else if (props.id === 'PatientAvatar1') {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="PatientAvatar1"
          src={PatientAvatar1}
          sx={{ mr: 1 }}
        />
      </Stack>
    )
  } else if (props.id === 'PatientAvatar2') {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="PatientAvatar2"
          src={PatientAvatar2}
          sx={{ mr: 1 }} />
      </Stack>
    )
  } else if (props.id === 'PatientAvatar3') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar
          alt="PatientAvatar3"
          src={PatientAvatar3}
          sx={{ mr: 1 }} />
      </Stack>
    )
  } else if (props.id === 'PatientAvatar4') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar
          alt="PatientAvatar4"
          src={PatientAvatar4}
          sx={{ mr: 1 }} />
      </Stack>
    )
  } else if (props.id === 'PatientAvatar5') {
    return (

      <Stack direction="row" spacing={2}>
        <Avatar
          alt="PatientAvatar5"
          src={PatientAvatar5}
          sx={{ mr: 1 }} />
      </Stack>
    )
  } else {
    console.log('Error: No Avatar Found')
  }

}
