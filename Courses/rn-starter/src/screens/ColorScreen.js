import React from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import { useState } from "react";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          // desestrutura o colors, pegue todos elementos e coloque em um novo array
          // depois coloque dentro uma nova cor (randomRgb())
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList 
      keyExtractor={(item) => item}
        // data recebe um array de colors
        data={colors}
        /*
        - pega a propriedade item do flat list e tira dela a string que tá dentro de cada item da lista de array
        - também poderia ser:
        
          renderItem= (item) => {
            <View
              style={{ height: 100, width: 100, backgroundColor: item.item }}
            / >
            ...
          }
        
        */ 
        renderItem={({ item }) => {
          // algo do tipo: item === 'rgb(0,0,0,)
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
