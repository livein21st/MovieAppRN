import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, FlatList, StyleSheet } from "react-native";
import MCard from "../components/mCard/MCard";
import { API_URL, API_KEY, GENRE } from "../utils/constants";

export default function HomeScreen({ navigation }) {
  //Data Hook
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //Fetching Data Function
  const FetchMovieData = async () => {
    try {
      const response = await fetch(API_URL + API_KEY);
      const data = await response.json();
      setData(data["results"]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchMovieData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ paddingBottom: 10 }}>
      <MCard
        title={item.title}
        release={item.release_date}
        cover={item.backdrop_path}
        genre={item.genre_ids}
        poster={item.poster_path}
        overview={item.overview}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20, alignContent: "space-between" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
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
