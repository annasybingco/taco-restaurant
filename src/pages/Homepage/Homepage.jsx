import "../../styles/_typography.scss";
import "./Homepage.scss";
import useTheme from "../../components/Theme/Theme.jsx";
import "../../styles/_variables.scss";
import Header from "../../components/Header/Header.jsx";

import React from "react";
import MenuItems from "../../components/MenuItems/MenuItems.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

//needs to move to profile page
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

function Homepage() {
  return (
    <div className="page">
      <Header />
      <Navigation />
      <ThemeToggle />
      <MenuItems />
    </div>
  );
}

export default Homepage;
