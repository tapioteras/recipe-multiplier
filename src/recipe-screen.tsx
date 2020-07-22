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
} from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";
import { calculatePortion } from "./utils";
import ScreenContainer from "./ScreenContainer";
import categories from "../mock/categories";
import moment from "moment";

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

const RecipeScreen: React.FC = () => {
  const {
    state: {
      recipe: {
        name,
        description,
        portions = 1,
        ingredients,
        ingredientsCategories,
        steps,
        category,
      },
    },
  } = useLocation();
  const itemsMadeToday = JSON.parse(
    localStorage.getItem("itemsMadeToday") || "[]"
  );
  const maybeIsMadeToday = itemsMadeToday.find(
    ({ name: nameToFind }) => name === nameToFind
  )?.madeAt;
  const [finalPortions, setFinalPortions] = useState(portions);
  const [isMadeToday, setIsMadeToday] = useState(
    maybeIsMadeToday ? moment().isSame(maybeIsMadeToday, "day") : false
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
        "itemsMadeToday",
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
        "itemsMadeToday",
        JSON.stringify([...itemsButNotTheCurrentOne])
      );
    }
  }, [isMadeToday]);
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
        {categoryName && (
          <Flex
            alignContent="center"
            flexDirection={[
              "row-reverse",
              "row-reverse",
              "row-reverse",
              "row-reverse",
            ]}
            flexGrow={2}
          >
            <Tag size="md" variantColor="gray">
              {categoryName}
            </Tag>
          </Flex>
        )}
      </Flex>
      <Box>
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
      {description && (
        <ContentBox>
          <Text fontSize="xl">{description}</Text>
        </ContentBox>
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
