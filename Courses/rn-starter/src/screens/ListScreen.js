import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "55" },
    { name: "Friend #3", age: "17"},
    { name: "Friend #4", age: "55" },
    { name: "Friend #2", age: "22" },
    { name: "Friend #5", age: "33" },
    { name: "Friend #6", age: "55" },
    { name: "Friend #7", age: "55" },
    { name: "Friend #8",age: "55" },
    { name: "Friend #9",age: "29" },
    { name: "Friend #10",age: "56"},
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // DESCRIPTION OF RENDERITEM PROP:
        // element === {item: {name: "Friend #1"}, index: 0}

        return <Text style={styles.textStyle} >{item.name + " - age: " + item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
