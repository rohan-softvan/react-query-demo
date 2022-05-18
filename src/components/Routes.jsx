import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UsersTraditionalPage from "./pages/UsersTraditional.page";
import UsersRQPage from "./pages/UsersRQ.page";
import HomePage from "./pages/Home.page";
import UserRqHookPage from "./pages/UserRQHook.page";
import UserRQPage from "./pages/UserRQ.page";
import Header from "./Header";
import DynamicParallelQueriesPage from "./pages/DynamicParallelQueries.page";
import DependentQueriesPage from "./pages/DependentQueries.page";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/users">
          <UsersTraditionalPage />
        </Route>
        <Route path="/rq-users">
          <UsersRQPage />
        </Route>
        <Route path="/rq-users-hook">
          <UserRqHookPage />
        </Route>
        <Route path="/rq-user/:userId">
          <UserRQPage />
        </Route>
        <Route path="/rq-dynamic-parallel">
          <DynamicParallelQueriesPage userIds={[1, 3, 2, 4, 5]} />
        </Route>
        <Route path="/rq-dependent">
          <DependentQueriesPage userId={5} />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
