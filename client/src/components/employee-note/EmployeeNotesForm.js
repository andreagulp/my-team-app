import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1)
    // minWidth: 300
  },
  dialog: {
    // width: 500
    width: "100%"
  }
}));

function EmployeeNotesForm({
  handleChangeField,
  handleSubmit,
  handleClose,
  note
}) {
  const classes = useStyles();

  return (
    <form>
      <DialogTitle id="form-dialog-title">Add Note</DialogTitle>
      <DialogContent>
        <TextField
          name="text"
          autoFocus
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
          rows="4"
          onChange={handleChangeField}
          value={note}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Add
        </Button>
      </DialogActions>
    </form>
  );
}

export default EmployeeNotesForm;
