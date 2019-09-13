import { FETCH_USER } from "../actions/types";
import { initialAppUser } from "../utils/interfaces";

const initialState = initialAppUser;

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
