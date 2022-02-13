import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import GetData from "../api/GetData";
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
