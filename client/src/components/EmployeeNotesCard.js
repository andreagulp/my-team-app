import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardActionArea from "@material-ui/core/CardActionArea";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../actions/employees_action";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minHeight: 150,
    position: "relative"
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  actions: {
    position: "absolute",
    bottom: 0,
    left: 0
  },
  link: {
    textDecoration: "none"
  }
}));

function EmployeeNotesCard({ note, employee }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const handleUpdateIsFavourite = () => {
  //     const newItem = { ...employee, notes: [...employee.notes, isStarred: !note.isStarred] };
  //     dispatch(updateEmployee(employee._id, newItem));
  //   };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" component="p">
            well meaning and kindly.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing className={classes.actions}>
        <IconButton
          aria-label="add to favorites"
          //   onClick={handleUpdateIsFavourite}
        >
          <StarBorderIcon color={note.isStarred ? "secondary" : "default"} />
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default EmployeeNotesCard;
