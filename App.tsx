import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Search from "./src/component/Search";
import List from "./src/component/List";

export default function App() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Search />
        <List />
      </View>
      <StatusBar />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
