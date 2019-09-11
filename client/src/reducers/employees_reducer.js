import { ADD_EMPLOYEE } from "../actions/types";

export default function(state, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return state;
    default:
      return state;
  }
}
