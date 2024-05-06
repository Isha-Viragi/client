import { Badge } from "@chakra-ui/react";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <>
      <Badge color="grey" fontSize="14px">
        {rating} ★
      </Badge>
    </>
  );
};

export default Rating;
