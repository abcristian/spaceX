import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../../redux/configStore";

const launches = (state: RootState) => state.launches;
const launchesStatus = (state: RootState, action: string): string | undefined =>
  state.status[action].status;

export const launchesSelector = createSelector(launches, state => state);
export const launchesStatusSelector = createSelector(
  launchesStatus,
  status => status,
);
export const isPendingSelector = createSelector(
  launchesStatusSelector,
  launchStatus => launchStatus === "PENDING",
);
export const isRejectedSelector = createSelector(
  launchesStatusSelector,
  launchStatus => launchStatus === "REJECTED",
);
export const isFulfilledSelector = createSelector(
  launchesStatusSelector,
  launchStatus => launchStatus === "FULFILLED",
);

export const isLaunchesSelector = createSelector(
  launchesSelector,
  launches => launches.length > 0,
);
