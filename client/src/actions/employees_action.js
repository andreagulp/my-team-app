import axios from "axios";

import { ADD_EMPLOYEE } from "./types";

export const addEmployee = employee => async dispatch => {
  const newEmployee = {
    name: "Andrea",
    lastName: "Riccetti",
    iconsUrl:
      "https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900008/85425363-user-icon-male-with-beard-icon-hipster-flat-icon-avatar-of-man-with-beard-flat-internet-icon-in-roun.jpg",
    jobRole: "Manager"
  };
  const res = await axios.post("/api/new_employee", newEmployee);
  dispatch({ type: ADD_EMPLOYEE, payload: res });
};
