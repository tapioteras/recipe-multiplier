import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Scale,
  Text,
} from "@chakra-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecipeScreenProps } from "./recipe-screen";
import ScreenContainer from "./ScreenContainer";
import { CATEGORY } from "../mock/categories";

export interface CategoryProps {
  id: number;
  name: string;
}

export interface RecipesScreenProps {
  recipes: RecipeScreenProps[];
  categories: CategoryProps[];
}

const getOldestRecipe = (recipes = []) => {
  const sortedRecipes = [...recipes].sort((a, b) =>
    moment(a.madeAt).diff(moment(b.madeAt))
  );
  return sortedRecipes?.length ? sortedRecipes[0] : null;
};

const getRandomRecipe = (recipes = []) =>
  recipes[Math.floor(Math.random() * recipes.length)];

const getDialogTextContents = (recipes = []) => {
  const oldestRecipe = getOldestRecipe(recipes);
  if (oldestRecipe) {
    const daysSinceLastCreation = moment(oldestRecipe.madeAt).diff(
      moment(),
      "days"
    );
    return (
      <Box>
        <Text>
          Teit viimeksi ruoan
          <Link
            to={{
              pathname: `/recipe/${oldestRecipe.name}`,
              state: { recipe: oldestRecipe },
            }}
          >
            {` ${oldestRecipe.name}`}
          </Link>
          <Text>{`${
            daysSinceLastCreation > 0
              ? `${moment(oldestRecipe.madeAt).format("D.M.Y")}`
              : "tänään"
          }${
            daysSinceLastCreation > 0
              ? ` (${daysSinceLastCreation} päivää sitten)`
              : ""
          }. Kokeilepa tehdä tätä!`}</Text>
        </Text>
      </Box>
    );
  } else {
    const randomRecipe = getRandomRecipe(recipes);
    if (randomRecipe) {
      return (
        <Box>
          <Text>Mikset kokeilisi</Text>
          <Link
            to={{
              pathname: `/recipe/${randomRecipe.name}`,
              state: { recipe: randomRecipe },
            }}
          >
            {` ${randomRecipe.name}`}
          </Link>
          <Text>?</Text>
        </Box>
      );
    } else {
      return (
        <Box>
          <Text>"Ei ehdotuksia tällä kertaa..."</Text>
        </Box>
      );
    }
  }
};

const RecipesScreen: React.FC<RecipesScreenProps> = ({
  recipes = [],
  categories = [],
}) => {
  const [isWhatToDoNextDialogOpen, setIsWhatToDoNextDialogOpen] = useState(
    false
  );
  const btnRef = React.useRef();
  const cancelRef = React.useRef();
  const recipesWithCategories = [
    ...recipes,
  ].map(({ category = CATEGORY.OTHER, ...rest }) => ({ category, ...rest }));
  const onClose = () => setIsWhatToDoNextDialogOpen(false);
  return (
    <ScreenContainer>
      <Button
        variantColor="tomato"
        variant="outline"
        onClick={() => setIsWhatToDoNextDialogOpen(true)}
      >
        Mitä ruokaa voisi tehdä seuraavaksi?
      </Button>
      <Scale in={isWhatToDoNextDialogOpen}>
        {(styles) => (
          <AlertDialog
            leastDestructiveRef={cancelRef}
            finalFocusRef={btnRef}
            {...{ onClose }}
            isOpen={isWhatToDoNextDialogOpen}
          >
            <AlertDialogOverlay opacity={styles.opacity} />
            <AlertDialogContent {...styles}>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                {getDialogTextContents(recipes)}
              </AlertDialogBody>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </Scale>
      {[...categories].map(({ id, name }) => (
        <Box paddingBottom={5}>
          <Heading>{name}</Heading>
          <List spacing={5}>
            {[...recipesWithCategories]
              .filter((r) => r.category === id)
              .map((recipe, i) => (
                <ListItem key={`list-item-${i}`}>
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.name}`,
                      state: { recipe },
                    }}
                  >
                    <Flex w="100%" alignItems="center">
                      <Heading size="lg" paddingLeft={5}>
                        {recipe.name}
                      </Heading>
                      <Flex flexGrow={2} flexDirection="row-reverse">
                        <ListIcon fontSize={50} icon="chevron-right" />
                      </Flex>
                    </Flex>
                  </Link>
                </ListItem>
              ))}
          </List>
        </Box>
      ))}
    </ScreenContainer>
  );
};

export default RecipesScreen;
