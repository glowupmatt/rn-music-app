import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { AlbumsType } from "../../utils/types/AlbumTypes";
import AlbumCoverCarousel from "../AlbumCoverCarousel";

type Props = {
  topThreeAlbums: AlbumsType[];
};

const AlbumCarousel = (props: Props) => {
  const { topThreeAlbums } = props;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={topThreeAlbums}
          renderItem={({ item }) => <AlbumCoverCarousel item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

export default AlbumCarousel;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  sliderContent: {
    width: "100%",
    height: 400,
    flexDirection: "row",
  },
});
