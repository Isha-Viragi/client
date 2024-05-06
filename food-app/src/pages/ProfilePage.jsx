import React, { useState, useEffect } from "react";
import {
  Stack,
  Link,
  Card,
  GridItem,
  Grid,
  CardBody,
  useToast,
  HStack,
  Button,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import PlainNavBar from "../components/PlainNavBar";
import postLogin from "../hooks/postLogin";
import Profile from "../components/Profile";
import useData from "../hooks/useData";
import useProfile from "../hooks/useProfile";

const ProfilePage = () => {
  const toast = useToast();
  const [user, setUser] = useState("");

  const { data, error } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  if (error) {
    toast({
      title: "Error",
      description: error.response.data,
      status: "error",
      duration: 7000,
      isClosable: true,
    });
  }

  const handleLogout = () => {
    sessionStorage.removeItem("x-auth-token");
    navigate("/login");
  };

  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem area="nav">
          <PlainNavBar />
        </GridItem>
        <GridItem area="main">
          <Stack align="center" mt={10}>
            {user && <Profile user={user} />}
            <HStack>
              <Button onClick={() => handleLogout()} mt={4}>
                Logout
              </Button>
              <Button onClick={() => navigate("/")} mt={4}>
                Back
              </Button>
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default ProfilePage;
