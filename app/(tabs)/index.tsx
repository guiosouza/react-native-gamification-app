import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

export default function Profile() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Perfil</ThemedText>
        
        {/* Conteúdo do perfil aqui */}
        <ThemedText>Esta é a página principal</ThemedText>
        
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0D0D0', // Light mode
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
});