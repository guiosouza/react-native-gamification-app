import react from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ColorCoutner = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()}  title={`Increase ${color}`}  />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCoutner;
