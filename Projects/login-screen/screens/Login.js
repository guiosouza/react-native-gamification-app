import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Input
          placeholder="E-mail"
          leftIcon={{
            type: "font-awesome",
            name: "envelope-o",
            color: "white",
            marginRight: 15,
          }}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "white",
            marginRight: 15,
          }}
        />
        <Button title="Entrar" buttonStyle={styles.loginButton} />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordLink}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1c1c1e",
    padding: 20,
  },
  loginButton: {
    backgroundColor: "#1db954",
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  forgotPasswordLink: {
    color: "#1db954",
    marginTop: 20,
    fontSize: 16,
  },
});

export default LoginScreen;
