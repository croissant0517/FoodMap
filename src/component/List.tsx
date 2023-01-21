import { StyleSheet, Text, View } from "react-native";

export default function List() {
  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
