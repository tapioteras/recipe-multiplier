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
  Stack,
  Tag,
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
            {" "}
            {oldestRecipe.name}.
          </Link>
          <Text>{`${
            daysSinceLastCreation > 0
              ? `${moment(oldestRecipe.madeAt).format("D.M.Y")}`
              : ""
          }${
            daysSinceLastCreation > 0
              ? ` (${daysSinceLastCreation} päivää sitten).`
              : ""
          }Kokeilepa tehdä tätä!`}</Text>
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
  const [filters, setFilters] = useState([]);
  const recipesWithCategories = [
    ...recipes,
  ].map(({ category = CATEGORY.OTHER, ...rest }) => ({ category, ...rest }));
  const onClose = () => setIsWhatToDoNextDialogOpen(false);
  return (
    <ScreenContainer>
      <Button
        variant="outline"
        onClick={() => setIsWhatToDoNextDialogOpen(true)}
      >
        Mitä ruokaa voisi tehdä seuraavaksi?
      </Button>
      <Stack spacing={4} isInline>
        {[...recipes]
          .flatMap(({ tags = [] }) => tags)
          .filter((value, index, self) => self.indexOf(value) === index)
          .reduce((a, b) => [...a, b], [])
          .map((tag, i) => (
            <Tag size="md" key={`filter-${i}`}>
              <Button
                variantColor={
                  filters.find((f) => f === tag) ? "black" : undefined
                }
                variant="link"
                onClick={() => {
                  setFilters(
                    !![...filters].find((f) => f === tag)
                      ? [...filters].filter((f) => f !== tag)
                      : [...filters, tag]
                  );
                }}
              >
                {tag}
              </Button>
            </Tag>
          ))}
        {filters.length > 0 && (
          <Tag size="md" key={`filter-reset`}>
            <Button
              variant="link"
              variantColor="red"
              onClick={() => {
                setFilters([]);
              }}
            >
              reset
            </Button>
          </Tag>
        )}
      </Stack>
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
      {[...categories].map(({ id, name }, i) => (
        <Box paddingBottom={5} key={`category-${i}`}>
          <Heading>{name}</Heading>
          <List spacing={5}>
            {[...recipesWithCategories]
              .filter((recipe) =>
                filters.length > 0
                  ? [...(recipe?.tags || [])].find((t) =>
                      filters.find((f) => f === t)
                    )
                  : true
              )
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
