import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import useRestaurantById from "../hooks/useRestaurantById";
import {
  Box,
  Text,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import RestaurantInfo from "../components/RestaurantInfo";
import { useEffect, useState } from "react";

const RestaurantPage = () => {
  const { id } = useParams();
  const { data, error } = useRestaurantById(id);
  console.log("DATA", data);
  console.log("ERR", error);

  return (
    <>
      <Grid templateAreas={`"nav " "main" "footer"`}>
        <GridItem area="nav">
          <NavBar onClickHome={() => setSelectedCategory(null)} />
        </GridItem>
        <GridItem area="main">
          {error && <Text>error.data</Text>}
          <RestaurantInfo restaurant={data} />
        </GridItem>
        <GridItem area="footer" position="fixed" width="100%" bottom="0">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default RestaurantPage;
