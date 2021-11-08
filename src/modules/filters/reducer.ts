import {createReducer} from "@reduxjs/toolkit";

import {setFilter} from "./actions";

export type Filter = {
  year: number | undefined | null;
  sort: "asc" | "desc";
};

const filtersInitialState: Filter = {
  sort: "asc",
  year: null,
};

export const filtersReducer = createReducer(filtersInitialState, builder => {
  builder.addCase(setFilter, (state, action) => ({
    ...state,
    sort: action.payload.sort,
    year: action.payload.year,
  }));
});
