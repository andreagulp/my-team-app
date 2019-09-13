import React from "react";
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

function EmployeeForm({
  open,
  handleOpen,
  handleClose,
  item,
  handleChangeField,
  handleChangeAvatar,
  handleSubmit,
  mode
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.paper}>
        <IconButton className={classes.button} onClick={handleOpen}>
          {item.iconsUrl === "" ? (
            <Avatar className={classes.avatar}>
              <AddAPhotoIcon fontSize="large" />
            </Avatar>
          ) : (
            <Avatar
              className={classes.avatar}
              alt={item.name}
              src={item.iconsUrl}
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
              value={item.name}
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
              value={item.lastName}
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
              value={item.jobRole}
              onChange={handleChangeField}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              onClick={handleSubmit}
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
