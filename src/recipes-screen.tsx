import { Box, List, ListItem } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { RecipeScreenProps } from "./recipe-screen";
import ScreenContainer from "./ScreenContainer";

export interface RecipesScreenProps {
  recipes: RecipeScreenProps[];
}
const RecipesScreen: React.FC<RecipesScreenProps> = ({ recipes = [] }) => (
  <ScreenContainer>
    <List styleType="disc">
      {[...recipes].map((recipe, i) => (
        <ListItem key={`list-item-${i}`}>
          <Link to={{ pathname: `/recipe/${recipe.name}`, state: { recipe } }}>
            {recipe.name}
          </Link>
        </ListItem>
      ))}
    </List>
  </ScreenContainer>
);

export default RecipesScreen;
