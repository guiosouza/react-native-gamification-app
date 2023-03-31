import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "./components/imageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={7}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={4}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
