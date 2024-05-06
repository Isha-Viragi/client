import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RestaurantGrid from "../components/RestaurantGrid";
import CategoryList from "../components/CategoryList";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");

  useEffect(() => {
    if (selectedRestaurant) {
      navigate(`/restaurant/${selectedRestaurant._id}`);
    }
  }, [selectedRestaurant]);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav" "aside main" "footer footer"`,
        }}
      >
        <GridItem area="nav">
          <NavBar onClickHome={() => setSelectedCategory(null)} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="#ff884d">
            <CategoryList
              onClickCategory={(category) => {
                setSelectedCategory(category);
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main" bg="tomato">
          <RestaurantGrid
            selectedCategory={selectedCategory}
            onRestaurantCardClick={(restaurant) =>
              setSelectedRestaurant(restaurant)
            }
          />
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
