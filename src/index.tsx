import React from "react";
import ReactDOM from "react-dom";
import items from "../mock/test-data.json";
import { CSSReset, ThemeProvider, theme } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeScreen from "./recipe-screen";
import RecipesScreen from "./recipes-screen";

const themeOverrides = {
  ...theme,
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
