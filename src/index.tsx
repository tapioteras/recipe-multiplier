import React from "react";
import ReactDOM from "react-dom";
import recipes from "../mock/test-data";
import categories from "../mock/categories";
import { CSSReset, ThemeProvider, theme, ITheme } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeScreen from "./recipe-screen";
import RecipesScreen from "./recipes-screen";

const themeOverrides = {
  ...theme,
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
  },
};

ReactDOM.render(
  <ThemeProvider theme={themeOverrides}>
    <CSSReset
      config={(theme: ITheme) => ({
        light: {
          bg: theme.colors.red[400],
        },
      })}
    />
    <Router>
      <Switch>
        <Route path="/recipe/:id">
          <RecipeScreen />
        </Route>
        <Route path="/">
          <RecipesScreen {...{ recipes, categories }} />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
