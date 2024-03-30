import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.700" p={4} mt={4} textAlign="center">
      <Text color="white">
        © All rights reserved to The Cabinet {new Date().getFullYear()}
      </Text>
    </Box>
  );
};

export default Footer;
