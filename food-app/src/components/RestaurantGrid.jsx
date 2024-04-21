import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantCard from "./RestaurantCard";

const RestaurantGrid = ({ selectedCategory, onRestaurantCardClick }) => {
  const { data, error } = useRestaurants(selectedCategory);
  console.log(data[0]);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {data.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            restaurant={restaurant}
            onRestaurantCardClick={() => onRestaurantCardClick(restaurant)}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default RestaurantGrid;
