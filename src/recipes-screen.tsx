import { Box, Flex, Heading, Icon, List, ListItem } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { RecipeScreenProps } from "./recipe-screen";
import ScreenContainer from "./ScreenContainer";

export interface RecipesScreenProps {
  recipes: RecipeScreenProps[];
}
const RecipesScreen: React.FC<RecipesScreenProps> = ({ recipes = [] }) => (
  <ScreenContainer>
    <List>
      {[...recipes].map((recipe, i) => (
        <ListItem key={`list-item-${i}`}>
          <Link to={{ pathname: `/recipe/${recipe.name}`, state: { recipe } }}>
            <Flex alignItems="center" justifyContent="space-between">
              <Heading paddingLeft={5}>{recipe.name}</Heading>
              <Icon fontSize={50} name="chevron-right" />
            </Flex>
          </Link>
        </ListItem>
      ))}
    </List>
  </ScreenContainer>
);

export default RecipesScreen;
