import {combineReducers} from "@reduxjs/toolkit";

import {launchesReducer} from "../modules/launches/reducer";
import {statusReducer} from "../modules/status/reducer";
import {filtersReducer} from "../modules/filters/reducer";

export const rootReducer = combineReducers({
  filters: filtersReducer,
  launches: launchesReducer,
  status: statusReducer,
});
