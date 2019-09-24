import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import useDialog from "../useDialog";
import EmployeeNotesList from "./EmployeeNotesList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateEmployeeNotes } from "../../actions/employees_action";
import EmployeeNotesForm from "./EmployeeNotesForm";
import useNoteForm from "./useNoteForm";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20
  },
  dialog: {
    width: "100%"
  }
}));

function EmployeeNotes() {
  const classes = useStyles();

  const employee = useSelector(state => state.singleEmployee);
  const dispatch = useDispatch();

  const handleAddNote = e => {
    const newNote = {
      text: noteField,
      creationDate: Date.now(),
      isStarred: false
    };
    const newItem = {
      ...employee,
      notes: [...employee.notes, newNote]
    };

    dispatch(updateEmployeeNotes(employee._id, newItem));
    setNoteField("");
    handleClose();
  };

  const { open, handleOpen, handleClose } = useDialog();
  const { handleChangeField, noteField, setNoteField } = useNoteForm(
    { text: "" },
    handleAddNote
  );

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
          handleSubmit={handleAddNote}
          handleClose={handleClose}
          noteField={noteField}
          handleChangeField={handleChangeField}
          mode="CREATE"
        />
      </Dialog>
    </div>
  );
}

export default EmployeeNotes;
