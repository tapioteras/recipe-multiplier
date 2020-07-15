import React from "react";
import { List, ListItem, Text, Divider } from "@chakra-ui/core";
import { RecipeProps } from "./recipes-screen";
import { useParams, useLocation } from "react-router-dom";

export interface RecipeScreenProps extends RecipeProps {
  name: string;
  description?: string;
  portions?: string;
  ingredients: IngredientRowProps[];
  steps?: string[];
}

export interface IngredientRowProps {
  name: string;
  unit?: string;
  amount?: number;
}

const IngredientRow: React.FC<IngredientRowProps> = ({
  name,
  unit,
  amount,
}) => (
  <>
    {amount && amount}
    {unit && ` ${unit}`} {name.toLowerCase()}
  </>
);

const RecipeScreen: React.FC<RecipeScreenProps> = () => {
  const { id } = useParams();
  const {
    state: {
      recipe: { name, description, portions, ingredients, steps },
    },
  } = useLocation();
  return (
    <>
      <Text fontSize="6xl">{name}</Text>
      {description && <Text fontSize="2xl">{description}</Text>}
      {portions && (
        <Text fontSize="2xl">{`${portions} ${
          portions == 1 ? "annos" : "annosta"
        }.`}</Text>
      )}
      <Divider />
      <List styleType="disc">
        {[...ingredients].map((ingredient) => (
          <ListItem fontSize="xl">
            <IngredientRow {...ingredient} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List as="ol" styleType="decimal">
        {[...steps].map((step, i) => (
          <ListItem key={`step-${i}`}>{step}</ListItem>
        ))}
      </List>
    </>
  );
};
export default RecipeScreen;
