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

const PersonalInfoCard = ({ onNextStep }) => {
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  return (
    <>
      <form onSubmit={handleSubmit((data) => onNextStep(data))}>
        <Stack spacing={4} m={4}>
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
        </Stack>
        <HStack spacing={4} mt={4}>
          <Button type="submit" mt={4} flex={1}>
            Next
          </Button>
          <Button mt={4} flex={1}>
            Back
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default PersonalInfoCard;
