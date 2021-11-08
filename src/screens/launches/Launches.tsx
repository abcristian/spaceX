import React, {useEffect} from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {getLaunches} from "../../modules/launches/actions";
import {
  isLaunchesSelector,
  launchesSelector,
} from "../../modules/launches/selectors";
import {RootState} from "../../redux/configStore";
import {LaunchesList} from "../../components/LaunchesList/LaunchesList";
import {
  wasFulfilledSelector,
  wasRejectedSelector,
} from "../../modules/status/selectors";
import {styles} from "./Launches.styles";

export const Launches = () => {
  const dispatch = useDispatch();
  // using selectors rather than a selector hook directly as they use memoized functions,
  // ie they're not called on every re render, only if the data changes

  const isLaunches = useSelector(isLaunchesSelector);
  const isRejected = useSelector((state: RootState) =>
    wasRejectedSelector(state, getLaunches.typePrefix),
  );
  const isFulfilled = useSelector((state: RootState) =>
    wasFulfilledSelector(state, getLaunches.typePrefix),
  );

  const launches = useSelector(launchesSelector);

  useEffect(() => {
    // setTimeout(() => dispatch(getLaunches({order: "asc", year: null})), 2000);
    dispatch(getLaunches({order: "asc", year: null}));
  }, []);

  // if data is not loading and there's no launches, display no launches
  // if data is loading, display loading screen
  // if data is not loading and there's launches, display data
  if (isRejected) return <Text>rejected</Text>;
  if (isLaunches) return <LaunchesList data={launches} />;
  if (isFulfilled && !isLaunches) return <Text>No launches</Text>;
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../utils/spacex-logo.png")}
          style={styles.imageContainer}
        />
      </View>
      <View style={styles.waitingContainer}>
        <Text style={styles.text}>... loading data ...</Text>
      </View>
    </SafeAreaView>
  );
};
