import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Weather Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/event-planner">Event Planner</Link>
          </li>
          <li>
            <Link to="/farmer">Farmer</Link>
          </li>
          <li>
            <Link to="/traveler">Traveler</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
