import axios from "axios";

import { ADD_EMPLOYEE } from "./types";

export const addEmployee = employee => async dispatch => {
  const res = await axios.post("/api/new_employee", employee);
  dispatch({ type: ADD_EMPLOYEE, payload: res });
};
