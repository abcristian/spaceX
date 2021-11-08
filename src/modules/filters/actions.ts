import {Filter} from "./reducer";
import {createAction} from "@reduxjs/toolkit";

export const setFilter = createAction(
  "filters/set_filter",
  (filter: Filter) => ({payload: filter}),
);
