import { FETCH_SINGLE_EMPLOYEE } from "../actions/types";

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
    case FETCH_SINGLE_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
}
