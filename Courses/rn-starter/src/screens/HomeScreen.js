import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View styles={styles.viewContainer}>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <Button
        title="Go to List Components Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to  Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to  Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to  Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to  SquareScreen Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to  TextScreen Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to  BoxScreen Demo"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  viewContainer: {},
});

export default HomeScreen;
