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
const slideDefaultProps: SliderProps = {
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
  const [finalPortions, setFinalPortions] = useState(portions);
  const categoryName = [...categories].find(({ id }) => id === category)?.name;
  useEffect(() => {}, [finalPortions]);
  return (
    <ScreenContainer>
      <Link to="/recipes">
        <Flex alignItems="center" paddingBottom={5}>
          <Icon fontSize={50} name="chevron-left" />
          <Heading paddingLeft={6}>{name}</Heading>
          {categoryName && (
            <Flex flexDirection="row-reverse" flexGrow={1}>
              <Tag size="md" variantColor="gray">
                {categoryName}
              </Tag>
            </Flex>
          )}
        </Flex>
      </Link>
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
        {...slideDefaultProps}
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
      {steps && (
        <List as="ol" styleType="decimal">
          {[...steps].map((step, i) => (
            <ListItem fontSize="xl" key={`step-${i}`}>
              {step}
            </ListItem>
          ))}
        </List>
      )}
    </ScreenContainer>
  );
};
export default RecipeScreen;
