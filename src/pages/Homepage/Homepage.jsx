import "../../styles/_typography.scss";
import "../Homepage/Homepage.scss";
import Burger from "../../assets/images/original.png";
import useTheme from "../../../components/Theme/theme.jsx";
import "../../styles/_variables.scss";

import React from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

function Homepage() {
  return (
    <div>
      <ThemeToggle />
      <h1>Burger Drops</h1>
    </div>
  );
}

export default Homepage;
