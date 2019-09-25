import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import EmployeeTodoForm from "./EmployeeTodoForm";
import { makeStyles } from "@material-ui/core/styles";
import EmployeeTodoList from "./EmployeeTodoList";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  }
}));

function EmployeeTodos() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg" className={classes.form}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <EmployeeTodoForm />
        </Grid>
        <Grid item xs={12} sm={12}>
          <EmployeeTodoList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EmployeeTodos;
