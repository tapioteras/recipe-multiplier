import React, { useState } from "react";
import {
  Alert,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Stack,
  Textarea,
} from "@chakra-ui/core";
import ScreenContainer from "./ScreenContainer";
import { IngredientRow } from "./recipe-screen";

const IngredientInputRow = ({ onAdd = (ingredient) => {} }) => {
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [name, setName] = useState("");
  return (
    <Flex flexDirection="column">
      <Stack spacing={3} direction="row">
        <Input
          errorBorderColor="red.600"
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
        <IconButton
          onClick={() => {
            name && onAdd({ amount, unit, name });
            setName("");
            setAmount("");
            setUnit("");
          }}
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
      </Stack>
    </Flex>
  );
};

const StepInputRow = ({ onAdd = (step) => {} }) => {
  const [step, setStep] = useState("");
  return (
    <Stack marginTop={3} spacing={3} direction="row">
      <Textarea
        color="black"
        borderColor="white"
        value={step}
        onChange={(event) => setStep(event.target.value)}
        placeholder="Valmistusvaiheen kuvaus"
      />
      <Stack>
        <IconButton
          onClick={() => {
            step && onAdd(step);
            setStep("");
          }}
          variantColor="grey"
          aria-label="Add new step"
          size="md"
          icon="add"
        />
        <IconButton
          onClick={() => {
            setStep("");
          }}
          variantColor="grey"
          aria-label="Reset step"
          size="md"
          icon="minus"
        />
      </Stack>
    </Stack>
  );
};

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  return (
    <ScreenContainer>
      <Stack spacing={6}>
        <IngredientInputRow
          onAdd={(ingredient) => {
            setIngredients([...ingredients, ingredient]);
          }}
        />
        <StepInputRow onAdd={(step) => setSteps([...steps, step])} />
      </Stack>
      <Heading paddingTop={4} fontSize="2xl">
        Ainekset
      </Heading>
      <Stack spacing={3}>
        <List styleType="disc">
          {[...ingredients].map((ingredient) => (
            <ListItem fontSize="xl">
              <IngredientRow {...ingredient} />
            </ListItem>
          ))}
        </List>
      </Stack>

      <Heading paddingTop={4} fontSize="2xl">
        Valmistus
      </Heading>
      <List spacing={5} as={"ol"} styleType="decimal">
        {[...steps].map((step, i) => (
          <ListItem fontSize="xl" key={`step-${i}`}>
            {step}
          </ListItem>
        ))}
      </List>
    </ScreenContainer>
  );
};

export default NewRecipeScreen;
