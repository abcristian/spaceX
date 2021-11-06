import React, {useEffect} from "react";
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {getLaunches} from "../../modules/launches/actions";
import {RootState} from "../../redux/configStore";
import {isPendingSelector} from "../../modules/status/selectors";
import {
  isFulfilledSelector,
  isLaunchesSelector,
  isRejectedSelector,
} from "../../modules/launches/selectors";

export const Launches = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(getLaunches());
  }, []);

  // if data is not loading and there's no launches, display no launches
  // if data is loading, display loading screen
  // if data is not loading and there's launches, display data

  if (isPending) return <Text>is loading spinner</Text>;
  if (isRejected) return <Text>rejected</Text>;
  if (isFulfilled) return <Text>YAS data is here</Text>;
  return <View />;
};
