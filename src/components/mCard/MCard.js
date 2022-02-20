import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { styles } from "./styles";
import { API_POSTER_IMAGE_URL, API_POSTER_SIZES } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import parseGenreID from "../../utils/parseGenre";

export default function MCard({
  title,
  release,
  cover,
  genre,
  poster,
  overview,
}) {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.card}
      onPress={() =>
        navigation.navigate("Details", {
          title: title,
          poster,
          genre,
          overview,
          release,
          cover,
        })
      }
    >
      <Card.Cover
        style={styles.cover}
        source={{ uri: API_POSTER_IMAGE_URL + API_POSTER_SIZES[5] + poster }}
      />
      <Card.Title title={title} />
      <Card.Content>
        <Paragraph style={styles.release_date}>Release on: {release}</Paragraph>
        <Paragraph style={styles.genre}>Genre: {parseGenreID(genre)}</Paragraph>
      </Card.Content>
    </Card>
  );
}
