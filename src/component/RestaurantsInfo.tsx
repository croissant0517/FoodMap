import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Container = styled.View`
  height: 100%;
  background-color: blue;
  padding: 16px;
`;

const restaurant = {
  name: "Some Restaurant",
  icon: null,
  photos: [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
  address: "100 some random street",
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: false,
};

export default function RestaurantsInfo() {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Container>
      <Card>
        <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
        <Card.Content>
          <Text>{name}</Text>
        </Card.Content>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
  cover: {
    margin: 16,
  },
});
