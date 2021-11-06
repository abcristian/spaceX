import {combineReducers} from "@reduxjs/toolkit";

import {launchesReducer} from "../modules/launches/reducer";
import {statusReducer} from "../modules/status/reducer";

export const rootReducer = combineReducers({
  launches: launchesReducer,
  status: statusReducer,
});
