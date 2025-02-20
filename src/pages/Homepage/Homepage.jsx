import "../../styles/_typography.scss";
import "./Homepage.scss";
import "../../styles/_variables.scss";

import React from "react";
import MenuItems from "../../components/MenuItems/MenuItems.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

function Homepage() {
  return (
    <div className="page">
      <Navigation />
      <MenuItems />
    </div>
  );
}

export default Homepage;
