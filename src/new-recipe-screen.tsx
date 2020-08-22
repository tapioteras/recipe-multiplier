import React, { useState } from "react";
import { Flex, IconButton, Input, Stack } from "@chakra-ui/core";
import ScreenContainer from "./ScreenContainer";

const IngredientInputRow = ({ onAdd = (ingredient) => {} }) => {
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [name, setName] = useState("");
  return (
    <Stack spacing={3} direction="row">
      <IconButton
        onClick={() => onAdd({ amount, unit, name })}
        variantColor="grey"
        aria-label="Edit new ingredient row"
        size="md"
        icon="add"
      />
      <IconButton
        onClick={() => {
          setName("");
          setAmount("");
          setUnit("");
        }}
        variantColor="grey"
        aria-label="Reset ingredient values"
        size="md"
        icon="minus"
      />
      <Input
        borderColor="white"
        color="black"
        placeholder="määrä"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <Input
        borderColor="white"
        color="black"
        placeholder="yksikkö"
        value={unit}
        onChange={(event) => setUnit(event.target.value)}
      />
      <Input
        borderColor="white"
        color="black"
        placeholder="nimi"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </Stack>
  );
};

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  return (
    <ScreenContainer>
      <Stack spacing={3}>
        <IngredientInputRow onAdd={(data) => console.log(data)} />
      </Stack>
    </ScreenContainer>
  );
};

export default NewRecipeScreen;
