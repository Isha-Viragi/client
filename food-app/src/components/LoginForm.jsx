import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import postLogin from "../hooks/postLogin";

const LoginForm = ({ onSuccess }) => {
  const [data, setData] = useState(null);
  const toast = useToast();

  const { result, error } = postLogin({ data });

  if (result) {
    toast({
      title: "Success",
      description: "Successfully logged in!",
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
      onSuccess(result.headers["x-auth-token"]);
    }
  }, [result]);

  const schema = z.object({
    email: z.string().min(4, { message: "Please enter a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" })
      .max(50, { message: "Password must be at most 50 characters long" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit((data) => setData(data))}>
        <Stack spacing={4} m={4}>
          <FormControl id="email" isInvalid={formErrors.email}>
            <FormLabel>Email Address</FormLabel>
            <Input {...register("email")} type="email" />
            {formErrors.email ? (
              <FormErrorMessage>{formErrors.email.message}</FormErrorMessage>
            ) : (
              <FormHelperText>Please enter your email</FormHelperText>
            )}
          </FormControl>
          <FormControl id="password" isInvalid={formErrors.password}>
            <FormLabel>Password</FormLabel>
            <Input {...register("password")} type="password" />
            {formErrors.password ? (
              <FormErrorMessage>{formErrors.password.message}</FormErrorMessage>
            ) : (
              <FormHelperText>Please enter your password</FormHelperText>
            )}
          </FormControl>

          <Button type="submit" mt={4}>
            Log In
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
