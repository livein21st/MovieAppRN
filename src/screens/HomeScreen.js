import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import MCard from "../components/mCard/MCard";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <MCard navigation={navigation}></MCard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
