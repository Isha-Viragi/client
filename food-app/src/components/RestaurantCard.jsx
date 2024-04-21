import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";

const RestaurantCard = ({ restaurant, onRestaurantCardClick }) => {
  return (
    <>
      <Card
        onClick={onRestaurantCardClick}
        borderRadius={10}
        overflow="hidden"
        transition="transform 0.2s, box-shadow 0.2s"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Image src={restaurant?.photos[0]} maxH="200px" objectFit="cover" />
        <CardBody>
          <Heading fontSize="2xl">{restaurant?.name}</Heading>
          <Rating rating={restaurant?.rating} />
        </CardBody>
      </Card>
    </>
  );
};

export default RestaurantCard;
