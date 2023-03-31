import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreens = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreens;
