import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import "../styles.css";

const NavBar = ({ onClickHome }) => {
  const token = sessionStorage.getItem("x-auth-token");
  return (
    <Box bg="yellow.400" p={4}>
      <Grid templateColumns="1fr auto" gap={4} alignItems="center">
        {/* Grid for "Foodie" */}
        <Grid templateColumns="1fr" alignItems="center">
          <Heading color="orange.500" fontWeight="bold" size="lg">
            <NavLink onClick={onClickHome} to="/">
              Foodie
            </NavLink>
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
            <NavLink onClick={onClickHome} to="/">
              Home
            </NavLink>
          </Heading>
          <Heading mr={2} fontWeight="bold" color="white" size="md">
            <NavLink to="/cart">Cart</NavLink>
          </Heading>
          <Heading fontWeight="bold" color="white" size="md">
            {token && <NavLink to="/profile">Profile</NavLink>}
            {!token && <NavLink to="/login">Profile</NavLink>}
          </Heading>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavBar;
