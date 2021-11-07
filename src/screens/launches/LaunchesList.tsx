import React, {useState} from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {Launch} from "../../modules/launches/typings";
// TODO move getActualDate in utils/date.ts
const getActualDate = timestamp => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const date = dateObject.getDate();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();
  return `${date}/${month}/${year}`;
};
const Item = ({item, onPress, selectedId}) => {
  const backgroundColor = item._id === selectedId ? "#103665" : "#ffffff";
  const color = item._id === selectedId ? "white" : "black";
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}, styles.shadowContainer]}
    >
      <View style={styles.rowContainer}>
        <View style={styles.innerRowContainer}>
          <Text numberOfLines={1} style={[styles.title, {color}]}>
            #{item.flight_number} {item.mission_name}
          </Text>
        </View>
        <View style={styles.rightColumn}>
          <Text numberOfLines={1} style={styles.date}>
            {getActualDate(item.launch_date_unix)}
          </Text>
          <Text numberOfLines={1} style={[styles.aircraft, {color}]}>
            {item.rocket.rocket_name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const LaunchesList: React.FC<any> = (props: Launch[]) => {
  const [selectedId, setSelectedId] = useState(null);
  const [order, setOrder] = useState("desc");
  const [year, setYear] = useState(null);

  const renderItem = ({item}) => {
    // TODO move Item into separate component as ListItem
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
        selectedId={selectedId}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
