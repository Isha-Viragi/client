import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import "../styles.css";

const NavBar = () => {
  return (
    <Box bg="yellow.400" p={4}>
      <Grid templateColumns="1fr auto" gap={4} alignItems="center">
        {/* Grid for "Foodie" */}
        <Grid templateColumns="1fr" alignItems="center">
          <Heading color="orange.500" fontWeight="bold" size="lg">
            <NavLink to="/">Foodie</NavLink>
          </Heading>
        </Grid>
        {/* Grid for links */}
        <Grid
          templateColumns="repeat(3, auto)"
          gap={4}
          alignItems="center"
          justifyItems="end"
        >
          <Heading mr={2} fontWeight="bold" color="white" size="md">
            <NavLink to="/">Home</NavLink>
          </Heading>
          <Heading mr={2} fontWeight="bold" color="white" size="md">
            <NavLink to="/cart">Cart</NavLink>
          </Heading>
          <Heading fontWeight="bold" color="white" size="md">
            <NavLink to="/login">Profile</NavLink>
          </Heading>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavBar;
