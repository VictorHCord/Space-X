import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPages from "../pages/DashboardPages";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path={["/", "/dashboard"]} exact component={DashboardPages} />
      </Switch>
    </>
  );
};

export default Routes;
