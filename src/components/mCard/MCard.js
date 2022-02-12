import { StyleSheet } from "react-native";
import React, { Component, useState, useContext, sta } from "react";
import { Button, Card, Paragraph } from "react-native-paper";

export default function MCard({ navigation }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Title title="Movie Title" />
      <Card.Content>
        <Paragraph style={styles.release_date}>Release on: {}</Paragraph>
        <Paragraph style={styles.genre}>{["Genre1", "Genre2"]}</Paragraph>
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

const styles = StyleSheet.create({
  card: { margin: 5 },
  release_date: {},
  genre: { backgroundColor: "grey", alignContent: "space-between" },
  details_btn: {
    flex: 1,
    alignItems: "center",
  },
});
