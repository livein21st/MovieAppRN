import React from "react";
import { StyleSheet, View } from "react-native";
import GetData from "../services/api";
import MCard from "../components/mCard/MCard";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <MCard navigation={navigation}></MCard>
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
