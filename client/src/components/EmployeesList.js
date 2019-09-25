import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import EmployeeCard from "./EmployeeCard";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  }
}));

function EmployeesList() {
  const classes = useStyles();
  const employees = useSelector(state => state.employees);

  return (
    <>
      <Container component="main" maxWidth="lg" className={classes.form}>
        <Grid container spacing={3}>
          {employees.map(employee => (
            <Grid item key={employee._id} xs={12} sm={4}>
              <EmployeeCard employee={employee} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default EmployeesList;
