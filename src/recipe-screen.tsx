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
  SliderThumb,
} from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";
import { calculatePortion } from "./utils";
import ScreenContainer from "./ScreenContainer";
import categories from "../mock/categories";
import moment from "moment";

export enum LOCAL_STORAGE_KEY {
  RECIPE_MADE_TODAY = "itemsMadeToday",
  IMPORTED_RECIPES = "importedRecipes",
}

export const INGREDIENT_CATEGORY_OTHER = 999;

export interface IngredientCategoryProps {
  id: number;
  name: string;
}

export interface RecipeScreenProps {
  name: string;
  description?: string;
  portions?: string;
  ingredients: IngredientRowProps[];
  ingredientsCategories?: IngredientCategoryProps[];
  steps?: string[];
  category?: number;
  tags?: string[];
}

export interface IngredientRowProps {
  name: string;
  unit?: string;
  amount?: number;
  originalPortion: number;
  multipliedPortion: number;
}

const ContentBox: React.FC = ({ children }) => (
  <Box p={5} shadow="lg" bg="white" color="black" borderWidth="1px">
    {children}
  </Box>
);

const IngredientRow: React.FC<IngredientRowProps> = ({
  name,
  unit,
  amount,
  ...rest
}) => {
  const calculatedAmount = calculatePortion({ ...{ amount }, ...rest });
  return (
    <React.Fragment>
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

export const getSavedRecipes = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.IMPORTED_RECIPES) || "[]");

const RecipeScreen: React.FC = () => {
  const {
    state: {
      recipe,
      recipe: {
        name,
        description,
        portions = 1,
        ingredients,
        ingredientsCategories,
        steps,
        category = INGREDIENT_CATEGORY_OTHER,
        tags = [],
      },
    },
  } = useLocation();
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
  return (
    <ScreenContainer>
      <Flex alignItems="center" flexWrap="wrap" paddingBottom={5}>
        <Link to="/recipes">
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
        {isFromKRuoka && (
          <Button
            marginY={[2, 0, 0, 0]}
            marginLeft={[0, 5, 5, 5]}
            whiteSpace="normal"
            color="black"
            onClick={() => {
              if (isSaved) {
                localStorage.setItem(
                  LOCAL_STORAGE_KEY.IMPORTED_RECIPES,
                  JSON.stringify([
                    ...getSavedRecipes().filter(
                      ({ name: nameToFind }) => nameToFind !== name
                    ),
                  ])
                );
                setIsSaved(false);
              } else {
                localStorage.setItem(
                  LOCAL_STORAGE_KEY.IMPORTED_RECIPES,
                  JSON.stringify([
                    ...getSavedRecipes().filter(
                      ({ name: nameToFind }) => nameToFind !== name
                    ),
                    recipe,
                  ])
                );
                setIsSaved(true);
              }
            }}
          >
            {isSaved ? "Poista tallennettu resepti" : "Tallenna resepti"}
          </Button>
        )}
        {isSaved && (
          <Button
            marginY={[2, 0, 0, 0]}
            marginLeft={[0, 5, 5, 5]}
            outline="link"
            color="black"
            onClick={() => {
              setExportedJson(
                JSON.stringify(
                  getSavedRecipes().find(
                    ({ name: nameToFind }) => name === nameToFind
                  )
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
      </Flex>
      {madeLatest && (
        <Box>
          {`Tehty viimeksi ${moment(madeLatest).format("DD.MM.YYYY")} (${moment(
            madeLatest
          ).diff(moment(), "days")} päivää sitten)`}
        </Box>
      )}
      {description && (
        <ContentBox>
          <Text fontSize="xl">{description}</Text>
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
            <List styleType="disc">
              {[...ingredients]
                .filter(
                  ({ category = INGREDIENT_CATEGORY_OTHER }) => category === id
                )
                .map((ingredient) => (
                  <ListItem fontSize="xl">
                    <IngredientRow
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
