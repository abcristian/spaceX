import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../../redux/configStore";
import {Filter} from "./reducer";

const filtersState = (state: RootState) => state.filters;

export const yearSelector = createSelector(filtersState, (filters: Filter) => {
  return filters.year;
});

export const sortingSelector = createSelector(
  filtersState,
  (filters: Filter) => filters.sort,
);
