import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, FlatList } from "react-native";
import MCard from "../../components/mCard/MCard";
import { API_URL, API_KEY } from "../../utils/constants";
import styles from "./styles";
// import FetchMovieData from "../../services/api";
export default function HomeScreen() {
  //Data Hook
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //Fetching Data Function
  const FetchMovieData = async (uri) => {
    try {
      const response = await fetch(uri);
      const data = await response.json();
      setData(data["results"]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchMovieData(API_URL + API_KEY);
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
    <View style={styles.cardList}>
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
