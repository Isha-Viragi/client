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
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const RegisterPage = () => {
  const registerSchema = z.object({
    firstName: z
      .string()
      .min(2, { message: "Please enter a valid name" })
      .max(30, { message: "Please don't enter more than 30 characters" }),

    lastName: z
      .string()
      .min(3, { message: "Please enter a valid last name" })
      .max(30, { message: "Please don't enter more than 30 characters" }),

    phoneNumber: z.string().regex(/^[0-9]{10,20}$/, {
      message: "Please enter a valid phone number",
    }),

    address: z.object({
      street: z
        .string()
        .min(3, { message: "Please enter a valid street name" }),
      suite: z.string(),
      city: z.string().min(3, { message: "Please enter a valid city" }),
      province: z.string().min(2, { message: "Please enter a valid province" }),
      zipcode: z
        .string()
        .min(6, { message: "Please enter a valid zipcode" })
        .max(10),
    }),

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
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} m={4}>
          <Heading mt={2} as="h1" size="md" mx={4} align="center">
            Personal Details
          </Heading>
          <FormControl id="firstName" isInvalid={errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input {...register("firstName")} type="text" />
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="lastName" isInvalid={errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input {...register("lastName")} type="text" />
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="phoneNumber" isInvalid={errors.phoneNumber}>
            <FormLabel>Phone Number</FormLabel>
            <Input {...register("phoneNumber")} type="tel" />
            <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...register("email")} type="email" />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input {...register("password")} type="password" />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </FormControl>

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
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default RegisterPage;
