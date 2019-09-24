import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { updateEmployeeNotes } from "../../actions/employees_action";
import useDialog from "../useDialog";
import Dialog from "@material-ui/core/Dialog";
import EmployeeNotesForm from "./EmployeeNotesForm";
import useNoteForm from "./useNoteForm";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minHeight: 150,
    position: "relative"
  },

  actions: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // paddingTop: 100
  },
  link: {
    textDecoration: "none"
  },
  title: {
    fontSize: 14
  }
}));

function EmployeeNotesCard({ note, notes, employee }) {
  console.log("note", note);
  console.log("notes", notes);
  console.log("employee", employee);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { open, handleOpen, handleClose } = useDialog();

  const handleUpdateNote = id => {
    const updatedNotes = notes.map(note =>
      note._id === id ? { ...note, text: noteField } : note
    );
    const updatedEmployee = { ...employee, notes: updatedNotes };
    dispatch(updateEmployeeNotes(employee._id, updatedEmployee));
  };

  const {
    handleChangeField,
    noteField,
    setNoteField
    // handleSubmit
  } = useNoteForm({ text: note.text }, handleUpdateNote);

  useEffect(() => {
    setNoteField(note.text);
    return () => setNoteField(null);
  }, [note, setNoteField]);

  const handleUpdateIsFavourite = id => {
    const newNotes = notes.map(note =>
      note._id === id ? { ...note, isStarred: !note.isStarred } : note
    );
    const newItem = { ...employee, notes: newNotes };
    dispatch(updateEmployeeNotes(employee._id, newItem));
  };

  return (
    <>
      <Card className={classes.card}>
        <CardActions className={classes.actions}>
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleUpdateIsFavourite(note._id)}
          >
            <StarBorderIcon color={note.isStarred ? "secondary" : "default"} />
          </IconButton>
          <IconButton aria-label="edit">
            <EditIcon onClick={handleOpen} />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {note.creationDate}
          </Typography>
          {note.text}
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <EmployeeNotesForm
          note={noteField}
          handleClose={handleClose}
          handleSubmit={handleUpdateNote}
          handleChangeField={handleChangeField}
        />
      </Dialog>
    </>
  );
}

export default EmployeeNotesCard;
