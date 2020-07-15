import React from "react";
import { Text } from "@chakra-ui/core";
import { RecipeProps } from "./recipes-screen";

interface RecipeScreenProps extends RecipeProps {}

const RecipeScreen: React.FC<RecipeScreenProps> = ({ recipe }) => (
  <Text fontSize="6xl">Recipe screen</Text>
);
export default RecipeScreen;
