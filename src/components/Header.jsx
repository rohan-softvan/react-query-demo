import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
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
        <li>
          <Link to="/rq-dynamic-parallel">Dynamic Parallel Queries</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
