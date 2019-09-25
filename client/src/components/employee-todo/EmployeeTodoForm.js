import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  //   button: {
  //     margin: theme.spacing(1),
  //     marginTop: theme.spacing(3)
  //   },
  input: {
    display: "none"
  },
  fab: {
    margin: theme.spacing(2)
  }
}));

function EmployeeTodoForm() {
  const classes = useStyles();

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
          <TextField
            name="text"
            autoFocus
            id="outlined-with-placeholder"
            label="Add Todo"
            placeholder="What to do?"
            // className={classes.textField}
            margin="normal"
            variant="outlined"
            //   onChange={handleChangeField}
            //   value={noteText}
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.fab}
            size="large"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
}

export default EmployeeTodoForm;
