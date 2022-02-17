import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import {
  API_POSTER_IMAGE_URL,
  API_POSTER_SIZES,
  GENRE,
} from "../utils/constants";

export default function DetailScreen() {
  return (
    <View style={styles.container}>{/* <Text>{props.title}</Text> */}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
