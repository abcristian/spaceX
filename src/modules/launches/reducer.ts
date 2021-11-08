import {createReducer, Reducer} from "@reduxjs/toolkit";

import {getLaunches} from "./actions";
import {Launch} from "./typings";

const initialState: Launch[] = [];
export const launchesReducer: Reducer<Launch[] | []> = createReducer<
  Launch[] | []
>(initialState, builder => {
  builder.addCase(getLaunches.fulfilled, (state, action) => action.payload);
});
