import react from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCoutner from "./components/ColorCounter";
import { useState } from "react";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +15, -15

    switch (color) {
      case "red":
        // red + change é maior que 255 ou menor que 0? retorna nada do contrário, retorna a operação de soma
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      default:
        return;
    }
  };

  console.log("Red: " + red);
  console.log(" Green: " + green);
  console.log("Blue: " + blue);

  return (
    <View>
      <ColorCoutner
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCoutner
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", - COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCoutner
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", - COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
