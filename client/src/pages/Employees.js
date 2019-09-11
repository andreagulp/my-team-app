import React, { useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../actions/employees_action";
import EmployeesList from "../components/EmployeesList";
// import { useSelector } from "react-redux";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <EmployeesList />
      <Link to="/new-employee">
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}

export default Employees;
