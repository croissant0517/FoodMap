import { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeSearch = (query: string) => setSearchValue(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        value={searchValue}
        onChangeText={onChangeSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
