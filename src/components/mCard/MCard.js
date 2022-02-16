import React from "react";
import { Button, Card, Paragraph, Text } from "react-native-paper";
import styles from "./styles";
import {
  API_POSTER_IMAGE_URL,
  API_POSTER_SIZES,
  GENRE,
} from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";

export default function MCard({ title, release, image, genre_ids }) {
  const navigation = useNavigation();

  function parseGenreID(_genre_ids) {
    console.log("id " + _genre_ids);
    let genres = [];
    for (let j in _genre_ids) {
      for (let i in GENRE) {
        if (j == GENRE[i]["id"]) {
          console.log(GENRE[i]["name"]);
          genres += GENRE[i]["name"];
        } else console.log("No Genre Found");
      }
    }
    // console.log(genres);
    return genres;
  }

  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.poster}
        source={{ uri: API_POSTER_IMAGE_URL + API_POSTER_SIZES[5] + image }}
      />
      <Card.Title title={title} />
      <Card.Content>
        <Paragraph style={styles.release_date}>Release on: {release}</Paragraph>
        <Paragraph style={styles.genre}>{parseGenreID(genre_ids)}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          style={styles.details_btn}
          onPress={() => navigation.navigate("Details")}
        >
          More Details
        </Button>
      </Card.Actions>
    </Card>
  );
}
