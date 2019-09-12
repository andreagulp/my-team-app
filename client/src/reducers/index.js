import { combineReducers } from "redux";

import user from "./user_reducer";
import employees from "./employees_reducer";
import singleEmployee from "./singleEmployee_reducer";

const rootReducers = combineReducers({
  user,
  employees,
  singleEmployee
});

export default rootReducers;
