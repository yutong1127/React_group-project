import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer,TableHead,TableRow,Paper,Box} from '@mui/material';
import ImageAvatars from '../Avatar.jsx';
import { users } from "./DummyData.js"

function createData(profilePhoto, name, role, isSuperVisor  ) {
  return { profilePhoto, name, role, isSuperVisor};
}


// map users to rows
let rows = [];
users.map((user) => {
  rows.push(createData(user.avatar, "Dr. " + user.fname + " " + user.lname, user.role, user.isSupervisor? "Yes" : "No"));
});


export default function BasicTable() {
  console.log(users[0].isSupervisor);
  return (
    <Box>

    
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Photo </TableCell>
          <TableCell align="left">Name</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Is Supervisor</TableCell>
     
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.profilePhoto}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <ImageAvatars id={row.profilePhoto}  />
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.isSuperVisor}</TableCell>
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}