import React from "react";
import {GestureResponderEvent, Text, TouchableOpacity} from "react-native";

import {styles} from "./Button.styles";

export const Button: React.FC<{
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
}> = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
