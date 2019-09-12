import axios from "axios";

import { ADD_EMPLOYEE, FETCH_EMPLOYEES, FETCH_SINGLE_EMPLOYEE } from "./types";

export const addEmployee = employee => async dispatch => {
  const res = await axios.post("/api/new_employee", employee);
  dispatch({ type: ADD_EMPLOYEE, payload: res });
};

export const fetchEmployees = () => {
  const request = axios
    .get(`/api/employees`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return {
    type: FETCH_EMPLOYEES,
    payload: request
  };
};

export const fetchSingleEmployee = employeeId => {
  const request = axios
    .get(`/api/employees/${employeeId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return {
    type: FETCH_SINGLE_EMPLOYEE,
    payload: request
  };
};
