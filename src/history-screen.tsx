import ScreenContainer from "./ScreenContainer";
import React from "react";
import {Text, Flex, Heading, List, ListItem, Stack} from "@chakra-ui/core";
import {LOCAL_STORAGE_KEY} from "./recipe-screen";
import moment from "moment"
import {resolveDay} from "./utils";
import { Link } from "react-router-dom";

const HistoryScreen: React.FC = ({ recipes }) => {
  const recipeHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.RECIPE_MADE_TODAY) || "[]");
  return (<ScreenContainer>
    <Stack spacing={5} maxWidth={["100%", "100%", 500, 500]}>
      <Heading fontSize={["md", "2xl", "2xl", "2xl"]} paddingX={5}>Aiemmin tekemäni reseptit</Heading>
      <List spacing={5}>
        {[...recipeHistory]
          .sort((left, right) => moment.utc(left.timeStamp).diff(moment.utc(right.timeStemp)))
          .reverse()
          .map((recipe, i) => {
          const { name, madeAt } = recipe
          const today = moment()
          const diff = moment.duration(today.diff(madeAt))
          const months = diff.months()
          const days = diff.days()
            const resolvedDays = resolveDay(months, days)
          return <ListItem key={`history-item-${i}`} paddingLeft={5}>
            <Link
              to={{
                pathname: `/#recipe-${recipe.name}`,
                state: { recipe: recipes.find(r => r.name === name) },
              }}
            ><Text fontSize="2xl">{name}</Text></Link>
            <Text>Tehty {months ? `${months} kk` : ""} {resolvedDays}</Text>
          </ListItem>
        })}
      </List>
    </Stack>
  </ScreenContainer>)
}

export default HistoryScreen