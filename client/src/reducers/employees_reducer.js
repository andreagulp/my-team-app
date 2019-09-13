import { ADD_EMPLOYEE, FETCH_EMPLOYEES } from "../actions/types";
import { initialEmployee } from "../utils/interfaces";

const initialState = [initialEmployee];

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
