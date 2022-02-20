import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, FlatList, Alert } from "react-native";
import MCard from "../../components/mCard/MCard";
import { API_URL, API_KEY } from "../../utils/constants";
import { styles } from "./styles";

let TOTAL_PAGE = 0;
let CURR_PAGE = 1;
let stopFetchMore = true;

export default function HomeScreen() {
  //Data Hook
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const uri = API_URL + API_KEY + "&page=";

  //Fetching Data Function
  const FetchMovieData = async () => {
    try {
      const response = await fetch(uri + CURR_PAGE);
      const data = await response.json();
      setData([...data["results"]]);
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
    <View>
      <MCard
        title={item.title}
        release={item.release_date}
        cover={item.backdrop_path}
        genre={item.genre_ids}
        poster={item.poster_path}
        overview={item.overview}
        key={item.id}
      />
    </View>
  );

  const handleOnEndReached = async () => {
    CURR_PAGE += 1;
    console.log("New CUR " + CURR_PAGE);
    if (!stopFetchMore) {
      const response = await fetch(uri + CURR_PAGE);
      const resdata = await response.json();
      if (resdata["total_pages"] === TOTAL_PAGE) return;
      setData([...data, ...resdata["results"]]);
    }
  };

  const handOnScrollTop = async () => {
    CURR_PAGE -= 1;
    console.log("New CUR " + CURR_PAGE);
    if (!stopFetchMore) {
      const response = await fetch(uri + CURR_PAGE);
      const resdata = await response.json();
      if (resdata["total_pages"] === 1) return;
      setData([...data, ...resdata["results"]]);
    }
  };

  return (
    <View style={styles.cardList}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id, index }) => id}
          renderItem={renderItem}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.01}
          onScrollBeginDrag={() => {
            stopFetchMore = false;
          }}
          onScrollToTop={handOnScrollTop}
        />
      )}
    </View>
  );
}
