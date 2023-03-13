import React from "react";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";

const App = () => {
  // setting entered goal
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // list of goals - change dynamically
  const [courseGoals, setCourseGoals] = useState([]);

  // whenever text chance - new text is set to the const
  const goalInputHandler = (exteredText) => {
    setEnteredGoalText(exteredText);
  };

  // take a list of goals and add a new one
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem />
          }}
          keyExtractor={(item, index) =>  {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  }
});

export default App;
