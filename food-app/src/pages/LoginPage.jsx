import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const schema = z.object({
    email: z.string().min(4, { message: "Please enter a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 chracters" })
      .max(50, { message: "Password must be at most 50 characters long" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} m={4}>
          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel mt={2}>Email Address</FormLabel>
            <Input {...register("email")} type="email" />
            {errors.email ? (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            ) : (
              <FormHelperText>Please enter your email</FormHelperText>
            )}
          </FormControl>
          <FormControl id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input {...register("password")} type="password" />
            {errors.password ? (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            ) : (
              <FormHelperText>Please enter your password</FormHelperText>
            )}
          </FormControl>
          <Button type="submit" mt={4}>
            Log In
          </Button>

          <Stack align="center" mb={4}>
            <NavLink to="/register">
              Don't have an account?{" "}
              <Link color="blue" as="span">
                Sign Up!
              </Link>
            </NavLink>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default LoginPage;
