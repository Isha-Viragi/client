import React from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const RegisterAddressCard = ({ onSubmit }) => {
  const registerSchema = z.object({
    address: z.object({
      street: z
        .string()
        .min(3, { message: "Please enter a valid street name" }),
      suite: z.string().min(0).default(""),
      city: z.string().min(3, { message: "Please enter a valid city" }),
      province: z.string().min(2, { message: "Please enter a valid province" }),
      zipcode: z
        .string()
        .min(6, { message: "Please enter a valid zipcode" })
        .max(10),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  return (
    <>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Stack spacing={4} m={4}>
          <Heading mt={2} as="h1" size="md" mx={4} align="center">
            Address
          </Heading>
          <FormControl id="street" isInvalid={errors.address?.street}>
            <FormLabel>Street</FormLabel>
            <Input {...register("address.street")} type="text" />
            <FormErrorMessage>
              {errors.address?.street?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="suite" isInvalid={errors.address?.suite}>
            <FormLabel>Suite</FormLabel>
            <Input {...register("address.suite")} type="text" />
            <FormErrorMessage>
              {errors.address?.suite?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="city" isInvalid={errors.address?.city}>
            <FormLabel>City</FormLabel>
            <Input {...register("address.city")} type="text" />
            <FormErrorMessage>{errors.address?.city?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="province" isInvalid={errors.address?.province}>
            <FormLabel>Province</FormLabel>
            <Input {...register("address.province")} type="text" />
            <FormErrorMessage>
              {errors.address?.province?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="zipcode" isInvalid={errors.address?.zipcode}>
            <FormLabel>Zipcode</FormLabel>
            <Input {...register("address.zipcode")} type="text" />
            <FormErrorMessage>
              {errors.address?.zipcode?.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" mt={4}>
            Sign Up
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default RegisterAddressCard;
