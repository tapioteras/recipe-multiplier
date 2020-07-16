import React from "react";
import ReactDOM from "react-dom";
import items from "../mock/test-data.json";
import { CSSReset, ThemeProvider, theme } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeScreen from "./recipe-screen";
import RecipesScreen from "./recipes-screen";

const themeOverrides = {
  ...theme,
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

ReactDOM.render(
  <ThemeProvider theme={themeOverrides}>
    <CSSReset />
    <Router>
      <Switch>
        <Route path="/recipe/:id">
          <RecipeScreen />
        </Route>
        <Route path="/">
          <RecipesScreen recipes={items} />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
