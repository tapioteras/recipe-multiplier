import { Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { RecipeScreenProps } from "./recipe-screen";
import ScreenContainer from "./ScreenContainer";

export interface CategoryProps {
  id: number;
  name: string;
}

export interface RecipesScreenProps {
  recipes: RecipeScreenProps[];
  categories: CategoryProps[];
}
const RecipesScreen: React.FC<RecipesScreenProps> = ({
  recipes = [],
  categories = [],
}) => (
  <ScreenContainer>
    <List spacing={5}>
      {[...recipes].map((recipe, i) => (
        <ListItem key={`list-item-${i}`}>
          <Link to={{ pathname: `/recipe/${recipe.name}`, state: { recipe } }}>
            <Flex alignItems="center" justifyContent="space-between">
              <Heading paddingLeft={5}>{recipe.name}</Heading>
              <ListIcon fontSize={50} icon="chevron-right" />
            </Flex>
          </Link>
        </ListItem>
      ))}
    </List>
  </ScreenContainer>
);

export default RecipesScreen;
