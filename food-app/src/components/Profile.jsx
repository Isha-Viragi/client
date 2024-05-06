import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const Profile = ({ user }) => {
  return (
    <>
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading size="md" mb={4}>
          Profile
        </Heading>
        <Text>First Name: {user.firstName} </Text>
        <Text>Last Name: {user.lastName} </Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone Number: {user.phoneNumber}</Text>
        <Box mt={4}>
          <Heading size="md" mb={4}>
            Address
          </Heading>
          <Text>Street: {user.address.street}</Text>
          <Text>Suite: {user.address.suite}</Text>
          <Text>City: {user.address.city}</Text>
          <Text>Province: {user.address.province}</Text>
          <Text>Zipcode: {user.address.zipcode}</Text>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
