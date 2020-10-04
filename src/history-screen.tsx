import ScreenContainer from "./ScreenContainer";
import React from "react";
import {Text, Flex, Heading, List, ListItem, Stack} from "@chakra-ui/core";
import {LOCAL_STORAGE_KEY} from "./recipe-screen";
import moment from "moment"

const HistoryScreen: React.FC = () => {
  const recipeHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.RECIPE_MADE_TODAY) || "[]");
  return (<ScreenContainer>
    <Stack spacing={5} maxWidth={["100%", "100%", 500, 500]}>
      <Heading fontSize={["md", "2xl", "2xl", "2xl"]} paddingX={5}>Aiemmin tekemäni reseptit</Heading>
      <List spacing={5}>
        {[...recipeHistory]
          .sort((left, right) => moment.utc(left.timeStamp).diff(moment.utc(right.timeStemp)))
          .reverse()
          .map(({ name, madeAt }, i) => {
          const today = moment()
          const diff = moment.duration(today.diff(madeAt))
          const months = diff.months()
          const days = diff.days()
          return <ListItem key={`history-item-${i}`} paddingLeft={5}>
            <Text fontSize="2xl">{name}</Text>
            <Text>Tehty {months && `${months} kk`} {days} pv sitten</Text>
          </ListItem>
        })}
      </List>
    </Stack>
  </ScreenContainer>)
}

export default HistoryScreen