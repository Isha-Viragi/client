import {
  Grid,
  GridItem,
  Stack,
  Card,
  CardBody,
  Link,
  Text,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import PlainNavBar from "../components/PlainNavBar";
import { NavLink, useNavigate } from "react-router-dom";
import postRegister from "../hooks/postRegister";
import { useEffect, useState } from "react";
import RegisterStepper from "../components/RegisterStepper";
import UserOption from "../components/UserOption";
import PersonalInfoCard from "../components/PersonalInfoCard";
import RegisterInfoCard from "../components/RegisterInfoCard";
import RegisterAddressCard from "../components/RegisterAddressCard";

const RegisterPage = () => {
  const toast = useToast();
  const [registerStatus, setRegisterStatus] = useState(false);

  const [nextStep, setNextStep] = useState(false);
  const [formData, setFormData] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (nextStep) {
      setNextStep(false);
    }
  }, [nextStep]);

  useEffect(() => {
    if (registerStatus) {
      const { confirmPassword, ...data } = formData;
      setData(data);
    }
  }, [registerStatus]);

  const { result, error } = postRegister({ data });

  if (result) {
    toast({
      title: "Success",
      description: "Welcome to our family",
      status: "success",
      duration: 7000,
      isClosable: true,
    });
  }

  if (error) {
    toast({
      title: "Error",
      description: error.response.data,
      status: "error",
      duration: 7000,
      isClosable: true,
    });
  }

  useEffect(() => {
    if (result) {
      const token = result.headers["x-auth-token"];
      sessionStorage.setItem("x-auth-token", token);
      navigate("/");
    }
  }, [result]);

  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem area="nav">
          <PlainNavBar />
        </GridItem>
        <GridItem area="main">
          <Stack align="stretch" m={10}>
            <RegisterStepper
              onNextClick={nextStep}
              stepOne={
                <UserOption
                  onSelectRestaurant={() => {
                    setNextStep(true);
                    setFormData({ role: "restaurantUser" });
                  }}
                  onSelectUser={() => {
                    setNextStep(true);
                    setFormData({ role: "user" });
                  }}
                />
              }
              stepTwo={
                <PersonalInfoCard
                  onNextStep={(data) => {
                    setFormData((prevData) => ({ ...prevData, ...data }));
                    setNextStep(true);
                  }}
                />
              }
              stepThree={
                <RegisterInfoCard
                  onNextStep={(data) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      ...data,
                    }));
                    setNextStep(true);
                  }}
                />
              }
              stepFour={
                <RegisterAddressCard
                  onSubmit={(data) => {
                    setFormData((prevData) => ({ ...prevData, ...data }));
                    setRegisterStatus(true);
                  }}
                />
              }
            />

            <Stack mt={4} align="center">
              <NavLink to="/login">
                Already have an account?{" "}
                <Link color="blue" as="span">
                  Log In!
                </Link>
              </NavLink>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default RegisterPage;
