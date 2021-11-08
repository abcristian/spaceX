import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./ListItem.styles";
import {getActualDate} from "../../utils/date";

export const ListItem: React.FC<any> = ({item, onPress, selectedId}) => {
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
