import React, {useEffect, useState} from "react";
import {Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {getLaunches} from "../../modules/launches/actions";
import {
  isFulfilledSelector,
  isLaunchesSelector,
  isRejectedSelector,
  launchesSelector,
} from "../../modules/launches/selectors";
import {isPendingSelector} from "../../modules/status/selectors";
import {RootState} from "../../redux/configStore";
import {LaunchesList} from "./LaunchesList";

export const Launches = () => {
  const [order, setOrder] = useState("desc");
  const [year, setYear] = useState(undefined);
  const dispatch = useDispatch();
  // using selectors rather than a selector hook directly as they use memoized functions,
  // ie they're not called on every re render, only if the data changes

  const isLaunches = useSelector((state: RootState) =>
    isLaunchesSelector(state),
  );
  const isPending = useSelector((state: RootState) =>
    isPendingSelector(state, getLaunches.typePrefix),
  );
  const isRejected = useSelector((state: RootState) =>
    isRejectedSelector(state, getLaunches.typePrefix),
  );
  const isFulfilled = useSelector((state: RootState) =>
    isFulfilledSelector(state, getLaunches.typePrefix),
  );

  const launches = useSelector((state: RootState) => launchesSelector(state));

  useEffect(() => {
    dispatch(getLaunches({order: order, year: year}));
  }, []);

  // if data is not loading and there's no launches, display no launches
  // if data is loading, display loading screen
  // if data is not loading and there's launches, display data
  if (isRejected) return <Text>rejected</Text>;
  if (isFulfilled && isLaunches) return <LaunchesList data={launches} />;
  if (isFulfilled && !isLaunches) return <Text>No launches</Text>;
  return <Text>is loading spinner</Text>;
};
