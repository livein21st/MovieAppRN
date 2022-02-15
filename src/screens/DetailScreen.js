import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GetData from "../services/api";

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <GetData></GetData>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
