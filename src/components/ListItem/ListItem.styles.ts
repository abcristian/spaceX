import {StatusBar, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  aircraft: {
    fontWeight: "bold",
  },
  date: {
    color: "grey",
  },
  innerRowContainer: {
    flex: 2,
    justifyContent: "center",
  },
  item: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20,
  },
  rightColumn: {
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight || 0,
  },
  shadowContainer: {
    borderRadius: 10,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  title: {
    fontSize: 20,
  },
});
