import React from "react";
import { Box, Button, Card, CardBody, Heading, Stack } from "@chakra-ui/react";

const UserOption = ({ onSelectUser, onSelectRestaurant }) => {
  return (
    <>
      <Box align="center" mt={5}>
        <Card maxW="lg">
          <CardBody>
            <Heading size="md" mb={4}>
              Which option best describes you?
            </Heading>
            <Stack spacing={4} padding={3} align="center" mt={5}>
              <Button
                fontWeight="bold"
                variant="solid"
                borderRadius="full"
                w="200px"
                onClick={onSelectUser}
              >
                User
              </Button>
              <Button
                fontWeight="bold"
                variant="solid"
                borderRadius="full"
                w="200px"
                onClick={onSelectRestaurant}
              >
                Restaurant
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default UserOption;
