import { Container, Grid, styled, Avatar, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";

import Patient_detail_up from "./Patient_detail_up";
import Patient_detail_down from "./Patient_detail_down";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Patient_detail() {
  return (
    <Container maxWidth="lg">
      <h1>patient details</h1>
      <Patient_detail_up />
      <Divider />
      <Patient_detail_down />

      <Paper elevation={3}></Paper>
    </Container>
  );
}
