import React from "react";
import ReactDOM from "react-dom";
import recipes from "../mock/test-data";
import categories from "../mock/categories";
import { CSSReset, ThemeProvider, theme, ITheme } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeScreen from "./recipe-screen";
import RecipesScreen from "./recipes-screen";
import NewRecipeScreen from "./new-recipe-screen";
import HistoryScreen from "./history-screen";

const themeOverrides = {
  ...theme,
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
  colors: {
    ...theme.colors,
  },
};

ReactDOM.render(
  <ThemeProvider theme={themeOverrides}>
    <CSSReset
      config={(theme: ITheme) => ({
        light: {
          bg: theme.colors.gray[800],
        },
      })}
    />
    <Router>
      <Switch>
        <Route path="/#recipe-new">
          <NewRecipeScreen />
        </Route>
        <Route path="/#recipe-:id">
          <RecipeScreen />
        </Route>
        <Route path="/#history">
          <HistoryScreen />
        </Route>
        <Route path={["/", "/#recipe-all"]}>
          <RecipesScreen {...{ recipes, categories }} />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
