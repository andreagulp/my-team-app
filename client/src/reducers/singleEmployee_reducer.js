import { FETCH_SINGLE_EMPLOYEE } from "../actions/types";
import { initialEmployee } from "../utils/interfaces";

const initialState = [initialEmployee];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SINGLE_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
}
