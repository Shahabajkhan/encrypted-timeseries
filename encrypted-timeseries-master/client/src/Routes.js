import React from "react";
import { Route, Switch } from "react-router-dom";
import TimeseriesContainer from "./app/modules/timeseries/containers/TimeseriesContainer";
import NotFound from "./app/modules/timeseries/containers/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={TimeseriesContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
