import { List, ListItem } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/core";

export interface RecipeProps {}

export interface RecipesScreenProps {
  recipes: RecipeProps[];
}
const RecipesScreen: React.FC<RecipesScreenProps> = ({ recipes = [] }) => (
  <List styleType="disc">
    <Text fontSize="6xl">This is recipes screen</Text>
    {[...recipes].map((recipe, i) => (
      <ListItem key={`list-item-${i}`}>
        <Link to={{ pathname: `/recipe/${recipe.name}`, state: { recipe } }}>
          {recipe.name}
        </Link>
      </ListItem>
    ))}
  </List>
);

export default RecipesScreen;
