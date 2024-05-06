import React, { useState, useEffect } from "react";
import {
  Stack,
  Link,
  Card,
  GridItem,
  Grid,
  CardBody,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import PlainNavBar from "../components/PlainNavBar";
import postLogin from "../hooks/postLogin";

const LoginPage = () => {
  const [token, setToken] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === true) {
      sessionStorage.setItem("x-auth-token", token);
      navigate("/");
    }
  }, [loginStatus]);
  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem area="nav">
          <PlainNavBar />
        </GridItem>
        <GridItem area="main">
          <Stack align="center" mt={10}>
            <Card w="400px" borderRadius="lg">
              <CardBody>
                <LoginForm
                  onSuccess={(token) => {
                    setLoginStatus(true);
                    setToken(token);
                  }}
                />
              </CardBody>
            </Card>
            <Stack mt={2}>
              <NavLink to="/register">
                Don't have an account?{" "}
                <Link color="blue" as="span">
                  Sign Up!
                </Link>
              </NavLink>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default LoginPage;
