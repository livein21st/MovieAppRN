import { View } from "react-native";
import React from "react";
import { API_POSTER_IMAGE_URL, API_POSTER_SIZES } from "../../utils/constants";
import parseGenreID from "../../utils/parseGenre";
import { Card, Paragraph } from "react-native-paper";
import styles from "../home/styles";

export default function DetailScreen({ route }) {
  const { title, release, cover, genre, poster, overview } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover
          source={{ uri: API_POSTER_IMAGE_URL + API_POSTER_SIZES[4] + poster }}
        />
      </Card>
      <Card.Title title={title} subtitle={parseGenreID(genre)} />
      <Card.Content>
        <Paragraph>{release}</Paragraph>
        <Paragraph>{overview}</Paragraph>
      </Card.Content>
    </View>
  );
}
