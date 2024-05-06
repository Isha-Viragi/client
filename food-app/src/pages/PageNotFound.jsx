import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        404 - Page Not Found
      </Text>
      <Text fontSize="xl" mb={4}>
        The page you are looking for does not exist.
      </Text>
      <Text fontSize="xl">
        Go back to{" "}
        <Link to="/" color="blue.500">
          Home
        </Link>
      </Text>
    </Box>
  );
};

export default NotFoundPage;
