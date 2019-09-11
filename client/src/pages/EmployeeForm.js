import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import AvatarDialog from "../components/AvatarDialog";

import { useDispatch } from "react-redux";
import { addEmployee } from "../actions/employees_action";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 10,
    width: 80,
    height: 80
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  button: {
    // margin: theme.spacing(1)
  }
}));

function EmployeeForm({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    lastName: "",
    iconsUrl: "",
    jobRole: ""
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeField = e => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
  const handleChangeAvatar = iconSrc => {
    setNewEmployee({ ...newEmployee, iconsUrl: iconSrc });
  };

  const handleAddEmployee = () => {
    dispatch(addEmployee(newEmployee));
    history.push("/employees");
  };

  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.paper}>
        <IconButton className={classes.button} onClick={handleOpen}>
          {newEmployee.iconsUrl === "" ? (
            <Avatar className={classes.avatar}>
              <AddAPhotoIcon fontSize="large" />
            </Avatar>
          ) : (
            <Avatar
              className={classes.avatar}
              alt={newEmployee.name}
              src={newEmployee.iconsUrl}
            />
          )}
        </IconButton>
      </div>
      <form className={classes.form} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="First Name"
              autoFocus
              value={newEmployee.name}
              onChange={handleChangeField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              value={newEmployee.lastName}
              onChange={handleChangeField}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="jobRole"
              label="Job Role"
              name="jobRole"
              autoComplete="organization-title"
              value={newEmployee.jobRole}
              onChange={handleChangeField}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              onClick={handleAddEmployee}
              variant="outlined"
              className={classes.button}
            >
              ADD EMPLOYEE
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <AvatarDialog
          handleClose={handleClose}
          handleChangeAvatar={handleChangeAvatar}
        />
      </Dialog>
    </Container>
  );
}

export default EmployeeForm;
