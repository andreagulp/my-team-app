import React from "react";
// import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20
  }
}));

function Employees() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Hello Employees</h4>
      <Link to="/new-employee">
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}

export default Employees;
