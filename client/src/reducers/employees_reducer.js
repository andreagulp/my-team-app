import { ADD_EMPLOYEE, FETCH_EMPLOYEES } from "../actions/types";

const initialState = [
  {
    name: "",
    lastName: "",
    iconsUrl: "",
    jobRole: "",
    creationDate: ""
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return state;
    case FETCH_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
}
