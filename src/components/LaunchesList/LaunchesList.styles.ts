import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  buttonLeftContainerView: {flex: 1, marginBottom: 16, paddingRight: 8},
  buttonRightContainerView: {flex: 1, paddingLeft: 8},
  buttonsContainerView: {
    flexDirection: "row",
    height: 65,
    paddingHorizontal: 16,
    width: "100%",
  },
  flatListContainerView: {height: "100%", width: "100%"},
  pickerContainerView: {
    bottom: 100,
    height: 150,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    zIndex: 1000,
  },
});
