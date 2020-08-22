import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  NumberInput,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/core";
import ScreenContainer from "./ScreenContainer";
import { IngredientRow, LOCAL_STORAGE_KEY } from "./recipe-screen";

const IngredientInputRow = ({ onAdd = (ingredient) => {} }) => {
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [name, setName] = useState("");
  return (
    <Flex marginTop={3} flexDirection="column">
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

const PortionsInputRow = ({ onChange = (portions) => {} }) => {
  const [portions, setPortions] = useState(4);
  useEffect(() => {
    onChange(portions);
  }, [portions]);
  return (
    <Stack spacing={3}>
      <NumberInput
        color="black"
        borderColor="white"
        placeholder="annoksia"
        value={portions}
        min={0}
        onChange={(value: number) => setPortions(value)}
      />
    </Stack>
  );
};

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [portions, setPortions] = useState(4);
  return (
    <ScreenContainer>
      <Stack spacing={6}>
        <PortionsInputRow onChange={(value) => setPortions(value)} />
        <IngredientInputRow
          onAdd={(ingredient) => {
            setIngredients([...ingredients, ingredient]);
          }}
        />
        <StepInputRow onAdd={(step) => setSteps([...steps, step])} />
      </Stack>
      {portions && (
        <Text fontSize="2xl">{`${portions} ${
          portions === 1 ? "annos" : "annosta"
        }`}</Text>
      )}
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
      <Button
        onClick={() => {
          // todo
        }}
        color="black"
      >
        Luo resepti
      </Button>
    </ScreenContainer>
  );
};

export default NewRecipeScreen;
