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

export interface RecipeScreenProps {
  name: string;
  description?: string;
  portions?: string;
  ingredients: IngredientRowProps[];
  steps?: string[];
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
      recipe: { name, description, portions = 1, ingredients, steps },
    },
  } = useLocation();
  const [finalPortions, setFinalPortions] = useState(portions);
  useEffect(() => {}, [finalPortions]);
  return (
    <ScreenContainer>
      <Flex alignItems="center">
        <Link to="/recipes">
          <Icon fontSize={50} name="chevron-left" />
        </Link>
        <Heading>{name}</Heading>
      </Flex>
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
      {ingredients && (
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
