import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import useDialog from "../components/useDialog";
import EmployeeNotesList from "./EmployeeNotesList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateEmployeeNotes } from "../actions/employees_action";
import EmployeeNotesForm from "./EmployeeNotesForm";

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

function EmployeeNotes() {
  const classes = useStyles();
  const { open, handleOpen, handleClose } = useDialog();
  const [note, setNote] = useState("");

  const employee = useSelector(state => state.singleEmployee);
  const dispatch = useDispatch();

  const handleChangeField = e => {
    setNote(e.target.value);
  };

  const handleAddNote = e => {
    const newNote = {
      text: note,
      creationDate: Date.now(),
      isStarred: false
    };
    const newItem = {
      ...employee,
      notes: [...employee.notes, newNote]
    };
    console.log(newNote, newItem);

    dispatch(updateEmployeeNotes(employee._id, newItem));
    setNote("");
    handleClose();
  };

  return (
    <div className={classes.root}>
      <EmployeeNotesList notes={employee.notes} employee={employee} />

      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <EmployeeNotesForm
          handleAddNote={handleAddNote}
          handleClose={handleClose}
          note={note}
          handleChangeField={handleChangeField}
        />
      </Dialog>
    </div>
  );
}

export default EmployeeNotes;
