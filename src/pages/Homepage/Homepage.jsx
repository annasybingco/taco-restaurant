import Navigation from "../../components/Navigation/Navigation.jsx";
import MenuItems from "../../components/MenuItems/MenuItems.jsx";
import "./Homepage.scss";

function Homepage() {
  return (
    <div className="page">
      <Navigation />
      <MenuItems />
    </div>
  );
}

export default Homepage;
