import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const RegisterInfoCard = ({ onNextStep }) => {
  const registerSchema = z.object({
    email: z.string().min(4, { message: "Please enter a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 chracters" })
      .max(50, { message: "Password must be at most 50 characters long" }),

    confirmPassword: z.string().refine((value) => value === password, {
      message: "Passwords do not match",
    }),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const password = watch("password");

  return (
    <>
      <form onSubmit={handleSubmit((data) => onNextStep(data))}>
        <Stack spacing={4}></Stack>

        <FormControl id="email" isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email")} type="email" />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          <FormControl id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input {...register("password")} type="password" />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="confirmPassword" isInvalid={errors.confirmPassword}>
            <FormLabel>Confirm Password</FormLabel>
            <Input {...register("confirmPassword")} type="password" />
            <FormErrorMessage>Passwords do not match</FormErrorMessage>
          </FormControl>
        </FormControl>
        <Stack />
        <HStack spacing={4} mt={4}>
          <Button type="submit" mt={4} flex={1}>
            Next
          </Button>
          <Button type="submit" mt={4} flex={1}>
            Back
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default RegisterInfoCard;
