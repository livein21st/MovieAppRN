import React, { Component, useState, useContext, sta } from "react";
import { Button, Card, Paragraph } from "react-native-paper";
import styles from "./styles";

export default function MCard({ navigation, props }) {
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
