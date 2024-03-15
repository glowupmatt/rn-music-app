import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React, { useContext } from "react";
import { DataContext } from "../appContext/SongContext";
import AlbumCarousel from "../components/homeComponents/AlbumCarousel";
import ButtonControls from "../components/homeComponents/ButtonControls";

type Props = {};

const HomeScreen = (props: Props) => {
  const { albums } = useContext(DataContext);
  const topThreeAlbums = albums.slice(0, 3);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>
        <AlbumCarousel topThreeAlbums={topThreeAlbums} />
        <ButtonControls />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
});
