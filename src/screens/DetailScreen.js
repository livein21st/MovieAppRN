import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { API_POSTER_IMAGE_URL, API_POSTER_SIZES } from "../utils/constants";
import parseGenreID from "../utils/parseGenre";

export default function DetailScreen({ route, navigation }) {
  const { title, release, cover, genre, poster, overview } = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: API_POSTER_IMAGE_URL + API_POSTER_SIZES[5] + poster }}
      ></Image>
      <Text>{title}</Text>
      <Text>{release}</Text>
      <Text>{parseGenreID(genre)}</Text>
      <Text>{overview}</Text>
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
