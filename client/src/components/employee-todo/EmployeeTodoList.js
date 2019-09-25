import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Loader from "../Loader";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function EmployeeTodoList({ todos, handleDeleteTodo }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  if (!todos) {
    return <Loader />;
  }

  return (
    <List className={classes.root}>
      {todos.map(todo => {
        const labelId = `checkbox-list-label-${todo}`;

        return (
          <ListItem
            key={todo._id}
            role={undefined}
            dense
            button
            onClick={handleToggle(todo)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(todo) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <DeleteForeverIcon onClick={() => handleDeleteTodo(todo._id)} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default EmployeeTodoList;
