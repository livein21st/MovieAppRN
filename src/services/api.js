import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../utils/constants";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function GetData() {
  //Data Hook
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //Fetching Data Function
  const getMovieList = async () => {
    try {
      const response = await fetch(API_URL + API_KEY);
      const data = await response.json();
      setData(data["results"]);
      return data["results"];
      // console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.release_date}
            </Text>
          )}
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
  list: {
    backgroundColor: "red",
  },
});
