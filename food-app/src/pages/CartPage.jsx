import NavBar from "../components/NavBar";
import {
  Stack,
  Link,
  Card,
  GridItem,
  Grid,
  CardBody,
  useToast,
} from "@chakra-ui/react";

const CartPage = () => {
  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Stack align="center" mt={10}>
            <Card w="400px" borderRadius="lg">
              <CardBody>Cart Page</CardBody>
            </Card>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default CartPage;
