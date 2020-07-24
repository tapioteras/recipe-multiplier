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
  Flex,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Scale,
  Stack,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RecipeScreenProps } from "./recipe-screen";
import ScreenContainer from "./ScreenContainer";
import { CATEGORY } from "../mock/categories";
import KRuokaApi from "./api/KRuokaApi";

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
  const [kRuokaFetchStatus, setKRuokaFetchStatus] = useState("init");
  const recipesWithCategories = [
    ...recipes,
  ].map(({ category = CATEGORY.OTHER, ...rest }) => ({ category, ...rest }));
  const onClose = () => setIsWhatToDoNextDialogOpen(false);
  const toast = useToast();
  const [kRuokaSearch, setKRuokaSearch] = useState("");
  return (
    <ScreenContainer>
      <Button
        variant="outline"
        onClick={() => setIsWhatToDoNextDialogOpen(true)}
      >
        Mitä ruokaa voisi tehdä seuraavaksi?
      </Button>
      <Input
        isDisabled={kRuokaFetchStatus === "loading"}
        color="black"
        placeholder="kirjoita hakusana..."
        value={kRuokaSearch}
        onChange={(e) => setKRuokaSearch(e.target.value)}
      />
      {kRuokaSearch.length > 0 && (
        <CloseButton
          onClick={() => {
            setKRuokaFetchStatus("init");
            setRecipesFromKRuoka([]);
            setKRuokaSearch("");
          }}
        />
      )}
      <Button
        variant="outline"
        isLoading={kRuokaFetchStatus === "loading"}
        onClick={() => {
          setKRuokaFetchStatus("loading");
          setRecipesFromKRuoka([]);
          KRuokaApi.searchRecipes(
            kRuokaSearch,
            (data) => {
              setKRuokaFetchStatus("loaded");
              setRecipesFromKRuoka(data.result);
            },
            (error) => {
              setKRuokaFetchStatus("error");
              toast({
                position: "top-left",
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
        Hae reseptejä K-Ruoasta
      </Button>
      {recipesFromKRuoka.length > 0 && <Heading>Reseptit K-Ruoasta</Heading>}
      {recipesFromKRuoka.length === 0 && kRuokaFetchStatus === "loaded" && (
        <Heading>Ei hakutuloksia hakusanalla "{kRuokaSearch}"</Heading>
      )}
      <List bg="red.600" spacing={3}>
        {[...recipesFromKRuoka].map(({ Name, Url }: RecipeFromKRuoka) => (
          <ListItem padding={1}>
            <Button
              color="white"
              onClick={() => {
                KRuokaApi.fetchRecipe(
                  Url,
                  (html) => {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(html, "text/html");
                    const parsedIngredients = [
                      ...doc.body.querySelectorAll(
                        ".recipe-subsection-ingredient"
                      ),
                    ].map((elem) => {
                      const amount = elem.querySelector(
                        ".recipe-subsection-ingredient .recipe-ingredient-amount-number"
                      ).innerHTML;
                      const unit = elem.querySelector(
                        ".recipe-subsection-ingredient .recipe-ingredient-amount-unit"
                      ).innerHTML;
                      const name = elem.querySelector(
                        ".recipe-subsection-ingredient .recipe-ingredient-name"
                      ).innerHTML;

                      const nameInsideA = elem.querySelector(
                        ".recipe-subsection-ingredient .recipe-ingredient-name a"
                      )?.innerHTML;

                      if (amount && unit) {
                        return {
                          amount,
                          unit: amount && unit ? unit : "kpl",
                          name: nameInsideA ? nameInsideA : name,
                        };
                      } else {
                        return {
                          amount: !amount ? 1 : amount,
                          unit: amount && unit ? unit : "kpl",
                          name: nameInsideA ? nameInsideA : name,
                        };
                      }
                    });

                    console.log("parsedIngredients", parsedIngredients)
                  },
                  (error) => {
                    console.log("failure", error);
                  }
                );
              }}
              variant="link"
            >
              {Name}
            </Button>
          </ListItem>
        ))}
      </List>
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
