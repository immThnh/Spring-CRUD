import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, Container, Paper, Snackbar } from "@mui/material";
import instance from "../api/InstanceApi";

export default function AddUserPage() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [toastMess, setToastMess] = React.useState(false);
  let mess = "";
  let severity = "info";

  const handleClose = () => {
    setToastMess(false);
    mess = "";
  };

  const handleClick = (e) => {
    e.preventDefault();
    instance
      .post("/add", {
        lastName,
        firstName,
        email,
        password,
      })
      .then(function (res) {
        console.log("New User added!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        mess = res;
        severity = "success";
      })
      .catch(function (err) {
        mess = err;
        console.log(err);
        severity = "error";
      });
    setToastMess(true);
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>ADD STUDENT</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          // noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            type="text"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Last name"
            type="text"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} variant="contained" color="secondary">
            Submit
          </Button>
        </Box>
      </Paper>
      {toastMess && (
        <Snackbar
          open={toastMess}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={severity}>
            {mess}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
}
