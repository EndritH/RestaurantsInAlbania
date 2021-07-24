import React from "react";
import styled from "styled-components";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled (Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
    padding: 16px;
    color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Garden",
    icon,
    photos = [
      "https://lh3.googleusercontent.com/p/AF1QipMI0PqDanOx-VmUbRtaBOeNEIxIZUoKrRqsuGE=w573-h573-p-no",
    ],
    address = "Hamdi Sina Liqeni i thate Tirane, 1044",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
