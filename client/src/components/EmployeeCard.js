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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minHeight: 180
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  buttons: {},
  link: {
    textDecoration: "none"
  }
}));

function EmployeeCard({ employee }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={`/employees/${employee._id}`} className={classes.link}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
                alt={employee.name}
                src={employee.iconsUrl}
              />
            }
            title={`${employee.name} ${employee.lastName}`}
            subheader={employee.jobRole}
          />
        </CardActionArea>
      </Link>
      <CardActions disableSpacing className={classes.buttons}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Link to={`/employees/${employee._id}`} className={classes.link}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}

export default EmployeeCard;
