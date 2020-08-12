import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListIcon,
  ListItem,
  Scale,
  Spinner,
  Stack,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getSavedRecipes, IngredientRowProps } from "./recipe-screen";
import ScreenContainer from "./ScreenContainer";
import { CATEGORY } from "../mock/categories";
import KRuokaApi from "./api/KRuokaApi";
import { convertAmount } from "./utils";
import { RecipeScreenProps } from "./recipe-screen.props";

export interface CategoryProps {
  id: number;
  name: string;
}

export interface KRuokaCategory {
  MainName: string; // sesonki
  MainId: number; // 1
  SubId: string; // grillaus
  subId: number; // 5
}

export interface RecipeFromKRuoka {
  Name: string;
  Id: number;
  Url: string;
  Categories: KRuokaCategory[];
}

export enum LOADING_STATUS {
  INIT = "init",
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}

export interface RecipesScreenProps {
  recipes: RecipeScreenProps[];
  categories: CategoryProps[];
}

const parseIngredient = (elem: HTMLElement): IngredientRowProps => {
  let amount = elem.querySelector(
    ".recipe-subsection-ingredient .recipe-ingredient-amount-number"
  ).innerHTML;

  amount = convertAmount(amount);

  const unit =
    elem.querySelector(
      ".recipe-subsection-ingredient .recipe-ingredient-amount-unit"
    ).innerHTML ||
    elem.querySelector(
      ".alternative-ingredients .recipe-ingredient-amount-unit"
    ).innerHTML;
  const name =
    elem.querySelector(".recipe-subsection-ingredient .recipe-ingredient-name")
      .innerHTML ||
    elem.querySelector(".alternative-ingredients .recipe-ingredient-name")
      .innerHTML;

  const nameInsideA =
    elem.querySelector(
      ".recipe-subsection-ingredient .recipe-ingredient-name a"
    )?.innerHTML ||
    elem.querySelector(".alternative-ingredients .recipe-ingredient-name a")
      ?.innerHTML;

  if (amount && unit) {
    return {
      amount,
      unit,
      name: nameInsideA ? nameInsideA : name,
    };
  } else {
    return {
      amount: !amount ? null : amount,
      unit,
      name: nameInsideA ? nameInsideA : name,
    };
  }
};

export const parseKRuokaRecipe = (
  html: string,
  name: string
): RecipeScreenProps => {
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, "text/html");
  const originalPortions = doc.body
    .querySelector(".recipe-subsection-info span")
    ?.innerHTML.toString();
  const portionParts = ("" + originalPortions).split(" ");
  let portions = portionParts.length > 0 ? portionParts[0] : 1;

  if (isNaN(portions)) {
    portions = portionParts.map((p) => p.trim()).find((p) => !isNaN(p.trim()));
    if (isNaN(portions)) {
      portions = 1;
    }
  }

  let parsedIngredients = [];
  let ingredientsCategories = [];
  const rawIngredientCategories = doc.body.querySelectorAll(
    ".recipe-ingredients-section"
  );
  if (rawIngredientCategories.length > 1) {
    [...rawIngredientCategories].forEach((rawCategory, id) => {
      const categoryHeader = rawCategory.querySelector("h3")?.innerHTML;
      if (categoryHeader) {
        ingredientsCategories.push({ id, name: categoryHeader });
        parsedIngredients = parsedIngredients.concat(
          [...rawCategory.querySelectorAll(".recipe-subsection-ingredient")]
            .map(parseIngredient)
            .map((r) => ({ ...r, category: id }))
        );
      } else {
        parsedIngredients = parsedIngredients.concat(
          [
            ...rawCategory.querySelectorAll(".recipe-subsection-ingredient"),
          ].map(parseIngredient)
        );
      }
    });
  } else {
    parsedIngredients = parsedIngredients.concat(
      [...doc.body.querySelectorAll(".recipe-subsection-ingredient")].map(
        parseIngredient
      )
    );
  }

  const parsedSteps = [
    ...doc.body.querySelectorAll(".recipe-instructions__steps li"),
  ].map((step) => step?.innerHTML.trim());

  const recipe = {
    name,
    portions,
    ingredientsCategories:
      ingredientsCategories.length === 0 ? null : ingredientsCategories,
    ingredients: parsedIngredients,
    steps: parsedSteps,
    tags: ["K-Ruoka"],
    category: CATEGORY.IMPORTED,
  };
  return recipe;
};

const getOldestRecipe = (recipes = []) => {
  const sortedRecipes = [...recipes].sort((a, b) =>
    moment(a.madeAt).diff(moment(b.madeAt))
  );
  return sortedRecipes?.length ? sortedRecipes[0] : null;
};

const getRandomRecipe = (recipes = []) =>
  recipes[Math.floor(Math.random() * recipes.length)];

const getDialogTextContents = (recipes = [], forceRandom = false) => {
  const oldestRecipe = getOldestRecipe(recipes);
  if (oldestRecipe && !forceRandom) {
    const daysSinceLastCreation = moment(oldestRecipe.madeAt).diff(
      moment(),
      "days"
    );
    return (
      <Box>
        <Text paddingBottom={3}>
          Siitä on kauan, kun teit viimeksi tämän ruoan:
        </Text>
        <Button>
          <Link
            to={{
              pathname: `/recipe/${oldestRecipe.name}`,
              state: { recipe: oldestRecipe },
            }}
          >
            {" "}
            {oldestRecipe.name}
          </Link>
        </Button>
        <Text paddingTop={3}>{`${
          daysSinceLastCreation > 0
            ? `${moment(oldestRecipe.madeAt).format("D.M.Y")}`
            : ""
        }${
          daysSinceLastCreation > 0
            ? ` (${daysSinceLastCreation} päivää sitten).`
            : ""
        }Kokeilepa tehdä tätä!`}</Text>
      </Box>
    );
  } else {
    const randomRecipe = getRandomRecipe(recipes);
    if (randomRecipe) {
      return (
        <Box>
          <Text paddingBottom={3}>Mikset kokeilisi tehdä ruokaa?</Text>
          <Button marginBottom={4}>
            <Link
              to={{
                pathname: `/recipe/${randomRecipe.name}`,
                state: { recipe: randomRecipe },
              }}
            >
              {` ${randomRecipe.name}`}
            </Link>
          </Button>
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
  let history = useHistory();
  const btnRef = React.useRef();
  const cancelRef = React.useRef();
  const [recipesFromKRuoka, setRecipesFromKRuoka] = useState([]);
  const [dialogToggleCount, setDialogToggleCount] = useState(0);
  useEffect(() => {
    if (isWhatToDoNextDialogOpen) {
      setDialogToggleCount(dialogToggleCount + 1);
    }
  }, [isWhatToDoNextDialogOpen]);
  const [filters, setFilters] = useState([]);
  const [kRuokaRecipeLoadingStatus, setKRuokaRecipeLoadingStatus] = useState(
    LOADING_STATUS.INIT
  );
  const [kRuokaFetchStatus, setKRuokaFetchStatus] = useState(
    LOADING_STATUS.INIT
  );
  const recipesWithCategories = [
    ...recipes,
    ...getSavedRecipes(),
  ].map(({ category = CATEGORY.OTHER, ...rest }) => ({ category, ...rest }));
  const onClose = () => setIsWhatToDoNextDialogOpen(false);
  const toast = useToast();
  const [kRuokaSearch, setKRuokaSearch] = useState("");
  return (
    <ScreenContainer>
      <Stack spacing={5} maxWidth={["100%", "100%", 500, 500]}>
        <Button color="black" onClick={() => setIsWhatToDoNextDialogOpen(true)}>
          Mitä ruokaa voisi tehdä seuraavaksi?
        </Button>
        <Stack spacing={4} padding={4} bg="gray.600">
          <Heading>Hae K-Ruoasta</Heading>
          <InputGroup>
            <Input
              isDisabled={kRuokaFetchStatus === LOADING_STATUS.LOADING}
              color="black"
              placeholder="kirjoita hakusana..."
              value={kRuokaSearch}
              onChange={(e) => setKRuokaSearch(e.target.value)}
            />
            <InputRightElement
              children={
                <CloseButton
                  visibility={kRuokaSearch.length === 0 && "hidden"}
                  color="gray.600"
                  onClick={() => {
                    setKRuokaFetchStatus(LOADING_STATUS.INIT);
                    setRecipesFromKRuoka([]);
                    setKRuokaSearch("");
                  }}
                />
              }
            />
          </InputGroup>
          <Button
            loadingText="Haetaan reseptejä..."
            color="gray.700"
            isLoading={kRuokaFetchStatus === LOADING_STATUS.LOADING}
            onClick={() => {
              setKRuokaFetchStatus(LOADING_STATUS.LOADING);
              setRecipesFromKRuoka([]);
              KRuokaApi.searchRecipes(
                kRuokaSearch,
                (data) => {
                  setKRuokaFetchStatus(LOADING_STATUS.LOADED);
                  setRecipesFromKRuoka(data.result);
                },
                (error) => {
                  setKRuokaFetchStatus(LOADING_STATUS.ERROR);
                  toast({
                    position: "top-left",
                    duration: 3000,
                    isClosable: true,
                    render: () => (
                      <Box m={3} color="white" p={3} bg="red.500">
                        Virhe haettaessa reseptejä K-Ruoasta
                      </Box>
                    ),
                  });
                }
              );
            }}
          >
            Hae reseptejä
          </Button>
          {recipesFromKRuoka.length > 0 && <Divider />}
          {recipesFromKRuoka.length > 0 && (
            <Flex alignItems="center" justifyContent="space-between">
              <Heading as="h3" size="md">
                Haulla löytyi seuraa:
              </Heading>
              <Flex flexGrow={2} flexDirection="row-reverse">
                <CloseButton
                  color="white"
                  onClick={() => {
                    setKRuokaFetchStatus(LOADING_STATUS.INIT);
                    setKRuokaRecipeLoadingStatus(LOADING_STATUS.INIT);
                    setRecipesFromKRuoka([]);
                    setKRuokaSearch("");
                  }}
                />
              </Flex>
            </Flex>
          )}
          {kRuokaRecipeLoadingStatus === LOADING_STATUS.LOADING && (
            <Spinner marginLeft={5} color="white" />
          )}
          {recipesFromKRuoka.length > 0 && (
            <List spacing={3}>
              {[...recipesFromKRuoka].map(
                ({ Name: name, Url }: RecipeFromKRuoka) => (
                  <ListItem padding={3}>
                    <Button
                      color="black"
                      width="100%"
                      onClick={() => {
                        setKRuokaRecipeLoadingStatus(LOADING_STATUS.LOADING);
                        KRuokaApi.fetchRecipe(
                          Url,
                          (html) => {
                            const recipe = parseKRuokaRecipe(html, name);
                            history.push({
                              pathname: `/recipe/${recipe.name}`,
                              state: { recipe },
                            });
                          },
                          (error) => {
                            toast({
                              position: "top-left",
                              duration: 3000,
                              isClosable: true,
                              render: () => (
                                <Box m={3} color="white" p={3} bg="red.500">
                                  Virhe reseptin käsittelyssä
                                </Box>
                              ),
                            });
                          }
                        );
                      }}
                    >
                      {name}
                    </Button>
                  </ListItem>
                )
              )}
            </List>
          )}
          {recipesFromKRuoka.length > 0 && <Divider />}
        </Stack>
      </Stack>
      {recipesFromKRuoka.length > 0 && <Heading>Reseptit K-Ruoasta</Heading>}
      {recipesFromKRuoka.length === 0 &&
        kRuokaFetchStatus === LOADING_STATUS.LOADED && (
          <Heading>Ei hakutuloksia hakusanalla "{kRuokaSearch}"</Heading>
        )}
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
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Mitä tekisi seuraavaksi?
              </AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                {getDialogTextContents(
                  recipes,
                  Math.floor(Math.random() * dialogToggleCount) % 2 === 0
                )}
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
              .sort((a, b) => a.name?.localeCompare(b.name))
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
