import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Search from "../component/Search";
import RestaurantsInfo from "../component/RestaurantsInfo";

export default function RestaurantsScreen() {
  return (
    <View style={styles.container}>
      <Search />
      <RestaurantsInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
