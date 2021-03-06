import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  Text,
  Heading,
  SliderProps,
  Box,
  Flex,
  Icon,
  Button,
  Tag,
  VisuallyHidden,
  ControlBox,
  Stack,
  Code,
  CloseButton,
  useClipboard,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb, Textarea, IconButton,
} from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";
import { calculatePortion } from "./utils";
import ScreenContainer from "./ScreenContainer";
import categories, { CATEGORY } from "../mock/categories";
import moment from "moment";

export enum LOCAL_STORAGE_KEY {
  RECIPE_MADE_TODAY = "itemsMadeToday",
  IMPORTED_RECIPES = "importedRecipes",
  CREATED_RECIPES = "createdRecipes",
  RECIPE_OVERRIDES = "recipeOverrides"
}

export const INGREDIENT_CATEGORY_OTHER = 999;

export interface IngredientCategoryProps {
  id: number;
  name: string;
}

export interface IngredientRowProps {
  name: string;
  unit?: string;
  amount?: number;
  originalPortion: number;
  multipliedPortion: number;
  isToggleCheckbox?: boolean;
}

const ContentBox: React.FC = ({ children }) => (
  <Box p={5} shadow="lg" bg="white" color="black" borderWidth="1px">
    {children}
  </Box>
);

export const IngredientRow: React.FC<IngredientRowProps> = ({
  name,
  unit,
  amount,
  isToggleCheckbox = false,
  ...rest
}) => {
  const calculatedAmount = calculatePortion({ ...{ amount }, ...rest });
  const [isChecked, setIsChecked] = useState(false);
  return (
    <React.Fragment>
      {isToggleCheckbox && (
        <label>
          <VisuallyHidden
            onChange={() => setIsChecked(!isChecked)}
            as="input"
            type="checkbox"
            defaultChecked={isChecked}
          />
          <ControlBox
            marginY={2}
            marginRight={3}
            borderWidth="2px"
            size="30px"
            rounded="sm"
            _checked={{
              bg: "red.700",
              color: "white",
              borderColor: "red.700",
            }}
            _focus={{ borderColor: "red.600", boxShadow: "outline" }}
          >
            <Icon name="check" size="16px" />
          </ControlBox>
        </label>
      )}
      {amount && calculatedAmount}
      {unit && ` ${unit}`} {name.toLowerCase()}
    </React.Fragment>
  );
};
const sliderDefaultProps: SliderProps = {
  step: 0.1,
  min: 0.1,
  max: 15,
};

export const getOwnRecipes = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.CREATED_RECIPES) || "[]");

export const getSavedRecipes = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.IMPORTED_RECIPES) || "[]");

const RecipeScreen: React.FC = () => {
  const {
    state: {
      recipe,
      recipe: {
        name,
        description = "",
        portions = 1,
        ingredients,
        ingredientsCategories,
        steps,
        category = INGREDIENT_CATEGORY_OTHER,
        tags = [],
      },
    },
  } = useLocation();
  const [isToggleCheckbox, setToggleCheckbox] = useState(false);
  const [exportedJson, setExportedJson] = useState(null);
  const itemsMadeToday = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY.RECIPE_MADE_TODAY) || "[]"
  );
  const maybeIsMadeToday = itemsMadeToday.find(
    ({ name: nameToFind }) => name === nameToFind
  )?.madeAt;
  const [finalPortions, setFinalPortions] = useState(portions);
  const [isMadeToday, setIsMadeToday] = useState(
    maybeIsMadeToday ? moment().isSame(maybeIsMadeToday, "day") : false
  );
  const getLatestSaveStatus = () =>
    !!getSavedRecipes().find(({ name: nameToFind }) => nameToFind === name)
      ?.name;

  const [isSaved, setIsSaved] = useState(getLatestSaveStatus());
  const isOwnRecipe = category === CATEGORY.CREATED;
  useEffect(() => {
    setIsSaved(getLatestSaveStatus());
  }, [isSaved]);
  const [madeLatest] = useState(
    !isMadeToday && (maybeIsMadeToday?.madeAt || false)
      ? maybeIsMadeToday.madeAt
      : null
  );
  const categoryName = [...categories].find(({ id }) => id === category)?.name;
  useEffect(() => {}, [finalPortions]);
  useEffect(() => {
    const itemsButNotTheCurrentOne = itemsMadeToday.filter(
      ({ name: nameToFind }) => {
        return nameToFind !== name;
      }
    );
    if (isMadeToday) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.RECIPE_MADE_TODAY,
        JSON.stringify([
          ...itemsButNotTheCurrentOne,
          {
            name,
            madeAt: moment().format(),
          },
        ])
      );
    } else {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.RECIPE_MADE_TODAY,
        JSON.stringify([...itemsButNotTheCurrentOne])
      );
    }
  }, [isMadeToday]);
  const { onCopy, hasCopied } = useClipboard(exportedJson);
  const isFromKRuoka = tags.find((t) => t === "K-Ruoka");
  const [isEdit, setIsEdit] = useState(false)
  const getMaybeOverrideField = (name, field) =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.RECIPE_OVERRIDES) || "[]")
      ?.find((recipe) => recipe?.name === name)
      ?.[field];
  const [descriptionOverride, setDescriptionOverride] = useState(null)
  const saveDescriptionOverride = () => {
    const oldOverrides = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.RECIPE_OVERRIDES) || "[]");
    const existingOverride = oldOverrides.find(override => override.name === name)
    if (existingOverride) {
      localStorage.setItem(LOCAL_STORAGE_KEY.RECIPE_OVERRIDES, JSON.stringify([...oldOverrides.map(o => {
        if (o.name === name) {
          return {...o, description: descriptionOverride}
        } else {
          return o
        }
      })]))
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY.RECIPE_OVERRIDES, JSON.stringify([...oldOverrides, { name, description: descriptionOverride}]))
    }
    setDescriptionOverride(null)
  }
  const finalDescription = descriptionOverride !== null || descriptionOverride === "" ? descriptionOverride : getMaybeOverrideField(name, "description") || description
  return (
    <ScreenContainer>
      <Flex alignItems="center" flexWrap="wrap" paddingBottom={5}>
        <Link to="/#recipe-all">
          <Flex alignItems="center">
            <Icon fontSize={50} name="chevron-left" />
            <Heading fontSize={["md", "2xl", "2xl", "2xl"]} paddingX={5}>
              {name}
            </Heading>
          </Flex>
        </Link>
        {(categoryName || (tags && tags.length > 0)) && (
          <Flex
            marginY={[2, 0, 0, 0]}
            marginLeft={[0, 5, 5, 5]}
            flexDirection={[
              "column",
              "row-reverse",
              "row-reverse",
              "row-reverse",
            ]}
            flexGrow={2}
          >
            <Stack spacing={4} isInline>
              {[...tags, categoryName]
                .filter((t) => !!t)
                .map((tag) => (
                  <Tag size="md" variantColor="gray">
                    {tag}
                  </Tag>
                ))}
            </Stack>
          </Flex>
        )}
      </Flex>
      <Flex flexDirection={["column", "row", "row", "row"]}>
        {(isFromKRuoka || isOwnRecipe) && (
          <Button
            marginY={[2, 0, 0, 0]}
            marginLeft={[0, 5, 5, 5]}
            whiteSpace="normal"
            color="black"
            onClick={() => {
              if (isOwnRecipe || isSaved) {
                const recipesKey = isOwnRecipe
                  ? LOCAL_STORAGE_KEY.CREATED_RECIPES
                  : LOCAL_STORAGE_KEY.IMPORTED_RECIPES;
                const recipes = isOwnRecipe
                  ? getOwnRecipes()
                  : getSavedRecipes();
                localStorage.setItem(
                  recipesKey,
                  JSON.stringify([
                    ...recipes.filter(
                      ({ name: nameToFind }) => nameToFind !== name
                    ),
                  ])
                );
                setIsSaved(false);
              } else {
                const recipesKey = isOwnRecipe
                  ? LOCAL_STORAGE_KEY.CREATED_RECIPES
                  : LOCAL_STORAGE_KEY.IMPORTED_RECIPES;
                const recipes = isOwnRecipe
                  ? getOwnRecipes()
                  : getSavedRecipes();
                localStorage.setItem(
                  recipesKey,
                  JSON.stringify([
                    ...recipes.filter(
                      ({ name: nameToFind }) => nameToFind !== name
                    ),
                    recipe,
                  ])
                );
                setIsSaved(true);
              }
            }}
          >
            {isSaved || isOwnRecipe
              ? "Poista tallennettu resepti"
              : "Tallenna resepti"}
          </Button>
        )}
        {(isSaved || isOwnRecipe) && (
          <Button
            marginY={[2, 0, 0, 0]}
            marginLeft={[0, 5, 5, 5]}
            outline="link"
            color="black"
            onClick={() => {
              const source = isOwnRecipe ? getOwnRecipes() : getSavedRecipes();
              setExportedJson(
                JSON.stringify(
                  source.find(({ name: nameToFind }) => name === nameToFind)
                )
              );
            }}
          >
            Export JSON
          </Button>
        )}
        <Box marginY={[2, 0, 0, 0]} marginLeft={[0, 5, 5, 5]}>
          <label>
            <VisuallyHidden
              onChange={() => setIsMadeToday(!isMadeToday)}
              as="input"
              type="checkbox"
              defaultChecked={isMadeToday}
            />
            <ControlBox
              borderWidth="2px"
              size="30px"
              rounded="sm"
              _checked={{
                bg: "red.700",
                color: "white",
                borderColor: "red.700",
              }}
              _focus={{ borderColor: "red.600", boxShadow: "outline" }}
            >
              <Icon name="check" size="16px" />
            </ControlBox>
            <Box as="span" verticalAlign="top" ml={3}>
              Tehty tänään
            </Box>
          </label>
        </Box>
        <Button
          marginY={[2, 0, 0, 0]}
          marginLeft={[0, 5, 5, 5]}
          whiteSpace="normal"
          color="black"
          onClick={() => window.print()}
        >
          Tulosta
        </Button>
        <Button
          marginY={[2, 0, 0, 0]}
          marginLeft={[0, 5, 5, 5]}
          whiteSpace="normal"
          color="black"
          onClick={() => setToggleCheckbox(!isToggleCheckbox)}
        >
          {!isToggleCheckbox ? "Ostoslista" : "Resepti"}
        </Button>
        <Button marginY={[2, 0, 0, 0]}
                marginLeft={[0, 5, 5, 5]}
                whiteSpace="normal"
                color="black"
                onClick={() => {
                  if (isEdit) {
                    saveDescriptionOverride()
                  }
                  setIsEdit(!isEdit)
                }}>{isEdit ? "Tallenna" : "Muokkaa"}</Button>
      </Flex>
      {madeLatest && (
        <Box>
          {`Tehty viimeksi ${moment(madeLatest).format("DD.MM.YYYY")} (${moment(
            madeLatest
          ).diff(moment(), "days")} päivää sitten)`}
        </Box>
      )}
      {(
        isEdit ? <Flex><Textarea color="black"
                           borderColor="white" placeholder="Lisää kuvaus..."
                           onChange={(event) => setDescriptionOverride(event.target.value)}
                                 value={finalDescription}/><IconButton variantColor="grey"
                                                                          aria-label="Add new step"
                                                                          size="md" icon="close" onClick={() => setDescriptionOverride("")} /></Flex> :
          finalDescription && <ContentBox>
          <Text whiteSpace="pre-line" fontSize="xl">{finalDescription}</Text>
        </ContentBox>
      )}
      {exportedJson && (
        <Box padding={2}>
          <CloseButton onClick={() => setExportedJson(null)} />
          <Button color="white" variant="link" onClick={onCopy}>
            {hasCopied ? "Kopioitu leikepöydälle" : "Kopioi leikepöydälle"}
          </Button>
          <Code padding={2}>{exportedJson}</Code>
        </Box>
      )}
      {description && portions && <Box paddingTop={2} />}
      <Flex justifyContent="space-between" alignSelf="flext-start">
        {portions && (
          <Text fontSize="2xl">{`${finalPortions} ${
            finalPortions === 1 ? "annos" : "annosta"
          }`}</Text>
        )}
        {finalPortions !== portions && (
          <Button
            variant="link"
            onClick={() => setFinalPortions(portions)}
            color="white"
          >
            Reset
          </Button>
        )}
      </Flex>
      <Slider
        {...sliderDefaultProps}
        max={
          portions >= sliderDefaultProps.max
            ? portions * 2
            : sliderDefaultProps.max
        }
        onChange={(newPortion) => {
          setFinalPortions(newPortion);
        }}
        defaultValue={finalPortions}
        value={finalPortions}
      >
        <SliderTrack bg="white" />
        <SliderFilledTrack bg="white" />
        <SliderThumb size={6} />
      </Slider>
      {ingredients && (
        <Heading paddingTop={4} fontSize="2xl">
          Ainekset
        </Heading>
      )}
      {ingredientsCategories &&
        ingredientsCategories?.length &&
        [
          ...ingredientsCategories,
          { id: INGREDIENT_CATEGORY_OTHER, name: "Muut" },
        ].map(({ id, name }) => (
          <Box>
            <Heading paddingTop={4} fontSize="2xl">
              {name}
            </Heading>
            <List styleType={!isToggleCheckbox ? "disc" : "none"}>
              {[...ingredients]
                .filter(
                  ({ category = INGREDIENT_CATEGORY_OTHER }) => category === id
                )
                .map((ingredient) => (
                  <ListItem fontSize="xl">
                    <IngredientRow
                      {...{ isToggleCheckbox }}
                      originalPortion={portions}
                      multipliedPortion={finalPortions}
                      {...ingredient}
                    />
                  </ListItem>
                ))}
            </List>
          </Box>
        ))}
      {!ingredientsCategories && ingredients && (
        <List styleType="disc">
          {[...ingredients].map((ingredient) => (
            <ListItem fontSize="xl">
              <IngredientRow
                {...{ isToggleCheckbox }}
                originalPortion={portions}
                multipliedPortion={finalPortions}
                {...ingredient}
              />
            </ListItem>
          ))}
        </List>
      )}
      {steps && (
        <Heading paddingTop={4} fontSize="2xl">
          Valmistus
        </Heading>
      )}
      {steps?.length > 1 && (
        <List spacing={5} as={"ol"} styleType="decimal">
          {[...steps].map((step, i) => (
            <ListItem fontSize="xl" key={`step-${i}`}>
              {step}
            </ListItem>
          ))}
        </List>
      )}
      {steps?.length === 1 && <Text fontSize="xl">{steps[0]}</Text>}
    </ScreenContainer>
  );
};
export default RecipeScreen;
