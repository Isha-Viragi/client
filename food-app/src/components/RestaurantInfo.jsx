import React, { useState } from "react";
import { FaClock, FaPhone } from "react-icons/fa";

import {
  Text,
  Divider,
  Heading,
  Image,
  Stack,
  HStack,
  Icon,
  Button,
} from "@chakra-ui/react";

const RestaurantInfo = ({ restaurant }) => {
  console.log("restaurant", restaurant);
  return (
    <Stack display="flex" alignItems="center" justifyContent="center" p={4}>
      <HStack>
        <Image
          m={4}
          src={restaurant?.photos[0]}
          borderRadius="lg" // Rounded corners
          boxShadow="md" // Add shadow for depth
          objectFit="cover" // Ensure the image covers the container
          overflow="hidden"
          maxH="450"
        />

        <Stack m={5}>
          <Heading as="h2" size="lg" mb={2}>
            {restaurant?.name}
          </Heading>
          <Text fontSize="md" mb={2}>
            {restaurant?.description}
          </Text>
          <Divider />
          <Heading as="h3" size="md" mb={2}>
            Contact Number
          </Heading>

          <Text>
            {" "}
            <Icon as={FaPhone} color="green.500" mr={2} />
            {restaurant?.contactInformation?.phoneNumber}
          </Text>

          <Divider />
          <Heading as="h3" size="md" mb={2}>
            Operating Hours
          </Heading>
          <Text>
            <Icon as={FaClock} color="green.500" mr={2} />
            {restaurant?.operatingHours}
          </Text>
          <Divider />
          <Button mt={2}>
            <Heading as="h3" size="md" mb={2}>
              Menu
            </Heading>
          </Button>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default RestaurantInfo;
