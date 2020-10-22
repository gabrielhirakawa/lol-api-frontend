import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Summoner from "../pages/Summoner";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/summoner/:id" component={Summoner} />
      </Switch>
    </BrowserRouter>
  );
}
