import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import EmployeeTodoForm from "./EmployeeTodoForm";
import { makeStyles } from "@material-ui/core/styles";
import EmployeeTodoList from "./EmployeeTodoList";
import { updateEmployeeNotes } from "../../actions/employees_action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  }
}));

function EmployeeTodos({ employee }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("buy milk");

  const handleChangeField = e => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = e => {
    e.preventDefault();
    const newTodo = {
      creationDate: Date.now(),
      text: todoText,
      isPriority: false,
      dueDate: Date.now()
    };

    const newEmployee = {
      ...employee,
      todos: [...employee.todos, newTodo]
    };
    dispatch(updateEmployeeNotes(employee._id, newEmployee));
    setTodoText("");
  };

  const handleDeleteTodo = id => {
    const updatedTodos = employee.todos.filter(n => n._id !== id);
    const updatedEmployee = { ...employee, todos: updatedTodos };
    dispatch(updateEmployeeNotes(employee._id, updatedEmployee));
  };

  return (
    <Container component="main" maxWidth="lg" className={classes.form}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <EmployeeTodoForm
            todoText={todoText}
            handleChangeField={handleChangeField}
            handleAddTodo={handleAddTodo}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <EmployeeTodoList
            todos={employee.todos}
            handleDeleteTodo={handleDeleteTodo}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EmployeeTodos;
