import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CommentIcon from "@material-ui/icons/Comment";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AssessmentIcon from "@material-ui/icons/Assessment";
import NetworkCheckIcon from "@material-ui/icons/NetworkCheck";

import {
  fetchSingleEmployee,
  updateEmployee,
  deleteEmployee
} from "../actions/employees_action";
import Loader from "../components/Loader";
import useForm from "../components/useForm";
import useDialog from "../components/useDialog";
import { initialEmployee } from "../utils/interfaces";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeNotes from "../components/employee-note/EmployeeNotes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
    marginTop: 20
  }
}));

function EmployeeViewUpdate(props) {
  const dispatch = useDispatch();
  const employee = useSelector(state => state.singleEmployee);
  const { open, handleOpen, handleClose } = useDialog();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleUpdateEmployee = () => {
    dispatch(updateEmployee(item._id, item));
    props.history.push("/employees");
  };

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployee(item._id));
    props.history.push("/employees");
  };

  function handleTabChange(event, newValue) {
    setValue(newValue);
  }

  const { item, handleChangeField, handleChangeAvatar, setItem } = useForm(
    initialEmployee,
    handleUpdateEmployee
  );

  useEffect(() => {
    dispatch(fetchSingleEmployee(props.match.params.employeeid));
    return () => setItem(null);
  }, [dispatch, props.match.params.employeeid, setItem]);

  useEffect(() => {
    setItem(employee);
    return () => setItem(null);
  }, [employee, setItem]);

  if (!item) {
    return <Loader />;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          // centered
          // variant="fullWidth"
          value={value}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Profile" icon={<PersonPinIcon />} {...a11yProps(0)} />
          <Tab label="Note" icon={<CommentIcon />} {...a11yProps(1)} />
          <Tab label="Todos" icon={<ListAltIcon />} {...a11yProps(2)} />
          <Tab
            label="Performance"
            icon={<AssessmentIcon />}
            {...a11yProps(3)}
          />
          <Tab label="Career" icon={<NetworkCheckIcon />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EmployeeForm
          mode="UPDATE"
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          item={item}
          handleChangeField={handleChangeField}
          handleChangeAvatar={handleChangeAvatar}
          handleSubmit={handleUpdateEmployee}
          handleDelete={handleDeleteEmployee}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EmployeeNotes />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
}

export default EmployeeViewUpdate;
