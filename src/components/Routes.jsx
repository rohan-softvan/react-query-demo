import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import UsersTraditionalPage from "./UsersTraditional.page";
import UsersRQPage from "./UsersRQ.page";
import HomePage from "./Home.page";
import UserRqHookPage from "./UserRQHook.page";

function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Traditional User Page</Link>
            </li>
            <li>
              <Link to="/rq-users">RQ User Page</Link>
            </li>
            <li>
              <Link to="/rq-users-hook">RQ User Page (Hook)</Link>
            </li>
          </ul>
        </nav>
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
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
