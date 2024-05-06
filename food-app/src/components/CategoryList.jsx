import React from "react";
import useCategories from "../hooks/useCategories";
import { Box, List, ListItem, Text, Button, VStack } from "@chakra-ui/react";

const CategoryList = ({ onClickCategory }) => {
  const { data, error } = useCategories();
  return (
    <>
      <VStack mt={5} padding={3} alignItems="start">
        {error && <Text>{error}</Text>}
        {data.map((category) => (
          <Button
            key={data.indexOf(category)}
            variant="ghost"
            fontSize="lg"
            fontWeight="bold"
            onClick={() => onClickCategory(category)}
          >
            {category}
          </Button>
        ))}
      </VStack>
    </>
  );
};

export default CategoryList;
