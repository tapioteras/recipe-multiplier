import React from "react";
import { Text } from "@chakra-ui/core";
import { RecipeProps } from "./recipes-screen";
import { useParams, useLocation } from "react-router-dom";

interface RecipeScreenProps extends RecipeProps {}

const RecipeScreen: React.FC<RecipeScreenProps> = () => {
  const { id } = useParams();
  const { state } = useLocation();
  return (
    <>
      <Text fontSize="6xl">{`Selected recipe ${id}`}</Text>
      <Text fontSize="4xl">{JSON.stringify(state)}</Text>
    </>
  );
};
export default RecipeScreen;
