import {
  ADD_EMPLOYEE,
  FETCH_EMPLOYEES,
  UPDATE_EMPLOYEE
} from "../actions/types";
import { initialEmployee } from "../utils/interfaces";

const initialState = [initialEmployee];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return state;
    case FETCH_EMPLOYEES:
      return action.payload;
    case UPDATE_EMPLOYEE:
      return state;
    default:
      return state;
  }
}
