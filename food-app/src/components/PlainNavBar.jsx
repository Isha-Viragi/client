import { Flex, Grid, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const plainNavBar = () => {
  return (
    <Flex bg="#212121" color="white" p="4" justify="start">
      <NavLink to="/">
        <Link
          fontSize="xl"
          fontWeight="bold"
          textDecoration="none"
          color="white"
        >
          <Heading ml={6} size="lg">
            Foodie
          </Heading>
        </Link>
      </NavLink>
    </Flex>
  );
};

export default plainNavBar;
