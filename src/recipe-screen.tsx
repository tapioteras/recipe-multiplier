import React, { useEffect, useState } from "react";
import { List, ListItem, Text, Divider } from "@chakra-ui/core";
import { useParams, useLocation } from "react-router-dom";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";

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

interface CalculatedPortion {
  amount?: number;
  originalPortion: number;
  multipliedPortion: number;
}

const round = (value) => Math.round(value * 100) / 100;

const calculatePortion = ({
  amount = 0,
  originalPortion = 0,
  multipliedPortion = 0,
}: CalculatedPortion) => {
  const difference = Math.abs(originalPortion - multipliedPortion);
  if (originalPortion > multipliedPortion) {
    return round(amount * (1 - difference));
  } else if (originalPortion < multipliedPortion) {
    return round(amount * (1 + difference));
  } else {
    return amount;
  }
};

const IngredientRow: React.FC<IngredientRowProps> = ({
  name,
  unit,
  amount,
  ...rest
}) => {
  const calculatedAmount = calculatePortion({ ...{ amount }, ...rest });
  return (
    <>
      {amount && calculatedAmount}
      {unit && ` ${unit}`} {name.toLowerCase()}
    </>
  );
};
const RecipeScreen: React.FC<RecipeScreenProps> = () => {
  const { id } = useParams();
  const {
    state: {
      recipe: { name, description, portions = 1, ingredients, steps },
    },
  } = useLocation();
  const [finalPortions, setFinalPortions] = useState(portions);
  useEffect(() => {}, [finalPortions]);
  return (
    <>
      <Text fontSize="6xl">{name}</Text>
      <Slider
        onChange={(newPortion) => {
          setFinalPortions(newPortion);
        }}
        step={0.1}
        min={0.1}
        max={15}
        defaultValue={finalPortions}
      >
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
      {description && <Text fontSize="2xl">{description}</Text>}
      {portions && (
        <Text fontSize="2xl">{`${finalPortions} ${
          finalPortions === 1 ? "annos" : "annosta"
        }.`}</Text>
      )}
      <Divider />
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
      <Divider />
      <List as="ol" styleType="decimal">
        {[...steps].map((step, i) => (
          <ListItem key={`step-${i}`}>{step}</ListItem>
        ))}
      </List>
    </>
  );
};
export default RecipeScreen;
