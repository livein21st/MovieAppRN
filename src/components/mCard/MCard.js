import React from "react";
import { Button, Card, Paragraph } from "react-native-paper";
import styles from "./styles";
import {
  API_POSTER_IMAGE_URL,
  API_POSTER_SIZES,
  GENRE,
} from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";

export default function MCard({
  title,
  release,
  cover,
  genre,
  poster,
  overview,
}) {
  const navigation = useNavigation();

  function parseGenreID(genre_ids) {
    let genresHash = {};
    for (let i in GENRE) {
      genresHash[GENRE[i]["id"]] = GENRE[i]["name"];
    }
    let genres = "";
    for (let i in genre_ids) {
      genres += genresHash[genre_ids[i]] + " ";
    }
    // this.dataNow.genres = genres;
    console.log(genres);
    return genres;
  }

  return (
    <Card
      style={styles.card}
      onPress={() =>
        navigation.navigate("Details", {
          title: title,
          poster,
          genre_ids,
          overview,
          release,
        })
      }
    >
      <Card.Cover
        style={styles.cover}
        source={{ uri: API_POSTER_IMAGE_URL + API_POSTER_SIZES[5] + cover }}
      />
      <Card.Title title={title} />
      <Card.Content>
        <Paragraph style={styles.release_date}>Release on: {release}</Paragraph>
        <Paragraph style={styles.genre}>Genre: {parseGenreID(genre)}</Paragraph>
      </Card.Content>
    </Card>
  );
}
