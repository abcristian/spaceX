import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../../redux/configStore";

const launchesState = (state: RootState) => state.launches;
export const launchesSelector = createSelector(
  launchesState,
  launches => launches,
);
export const isLaunchesSelector = createSelector(
  launchesSelector,
  launches => launches.length > 0,
);
