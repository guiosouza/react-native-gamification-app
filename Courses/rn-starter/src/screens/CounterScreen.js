import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase counter" onPress={() => setCounter(counter + 1)}/>
      <Button title="Decrease counter" onPress={() => setCounter(counter -1)} />
      <Text>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
