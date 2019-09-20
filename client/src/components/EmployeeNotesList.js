import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import EmployeeNotesCard from "./EmployeeNotesCard";
import Loader from "./Loader";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  }
}));

function EmployeeNotesList({ notes, employee }) {
  const classes = useStyles();

  if (!notes) {
    return <Loader />;
  }

  return (
    <Container component="main" maxWidth="lg" className={classes.form}>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note._id} xs={12} sm={4}>
            <EmployeeNotesCard note={note} employee={employee} notes={notes} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EmployeeNotesList;
