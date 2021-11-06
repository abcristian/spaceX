import React from "react";
import {StyleSheet} from "react-native";
import {Provider} from "react-redux";

import {store} from "./redux/configStore";
import {Launches} from "./screens/launches";

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <Launches />
    </Provider>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: "700",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default App;
