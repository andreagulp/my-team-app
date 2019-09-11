import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";
import Avatar5 from "../assets/avatar5.png";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

const avatarConfig = [
  {
    id: 1,
    name: "Avatar 1",
    src: Avatar1
  },
  {
    id: 2,
    name: "Avatar 2",
    src: Avatar2
  },
  {
    id: 3,
    name: "Avatar 3",
    src: Avatar3
  },
  {
    id: 4,
    name: "Avatar 4",
    src: Avatar4
  },
  {
    id: 5,
    name: "Avatar 5",
    src: Avatar5
  }
];

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    // border: "1px solid",
    lineHeight: 1.5,
    // backgroundColor: "#007bff",
    // borderColor: "#007bff",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      // backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      // backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  }
})(Button);

function AvatarDialog({ handleClose, handleChangeAvatar }) {
  const classes = useStyles();

  return (
    <>
      <DialogTitle id="form-dialog-title">Select Employee Avatar</DialogTitle>
      <DialogContent>
        <Grid container justify="center" alignItems="center">
          {avatarConfig.map(avatar => {
            return (
              // <IconButton>

              <BootstrapButton
                name="iconsUrl"
                onClick={() => handleChangeAvatar(avatar.src)}
                // variant="contained"
                // color="primary"
                disableRipple
                key={avatar.id}
              >
                <Avatar
                  alt={avatar.name}
                  src={avatar.src}
                  className={classes.bigAvatar}
                />
              </BootstrapButton>
              // </IconButton>
            );
          })}
          <BootstrapButton
            name="iconsUrl"
            onClick={() => handleChangeAvatar("")}
            // variant="contained"
            // color="primary"
            disableRipple
          >
            <Avatar className={classes.avatar}>
              <AddAPhotoIcon />
            </Avatar>
          </BootstrapButton>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          SELECT
        </Button>
      </DialogActions>
    </>
  );
}

export default AvatarDialog;
