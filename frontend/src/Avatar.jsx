import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DummyDoctorAvart from './assets/Avatar.jpeg';


export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="DummyDoctor" src= {DummyDoctorAvart} />
    </Stack>
  );
}
