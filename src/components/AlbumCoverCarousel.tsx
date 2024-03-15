import { StyleSheet, Text, View, Image } from "react-native";
import { AlbumsType } from "../utils/types/AlbumTypes";
import React, { useState } from "react";

const AlbumCoverCarousel = ({ item }: { item: AlbumsType }) => {
  const { id, title, artist, image } = item;
  const [albumDisplayed, setAlbumDisplayed] = useState(0);
  return (
    <View key={id} style={styles.albumDataContainer}>
      <View style={styles.albumDetailsContainer}>
        <Text>{title}</Text>
        <Text>{artist}</Text>
      </View>
      <Image style={styles.albumImage} source={{ uri: image }} />
    </View>
  );
};

export default AlbumCoverCarousel;

const styles = StyleSheet.create({
  albumDataContainer: {
    width: 350,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  albumDetailsContainer: {
    zIndex: 10,
  },
  albumImage: {
    position: "absolute",
    width: "100%",
    height: 500,
  },
});
