import { combineReducers } from "redux";

import user from "./user_reducer";
import employees from "./employees_reducer";

const rootReducers = combineReducers({
  user,
  employees
});

export default rootReducers;
