import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../SVG/HomeIcon";
import RewardsIcon from "../SVG/RewardsIcon";
import ProfileIcon from "../SVG/ProfileIcon";
import FaqIcon from "../SVG/FaqIcon";
import "../Navigation/Navigation.scss";

function Navigation() {
  const location = useLocation();

  return (
    <section className="navigation">
      <Link to="/">
        <div className={location.pathname === "/" ? "navigation__active" : ""}>
          <HomeIcon isActive={location.pathname === "/"} />
          <p>Menu</p>
        </div>
      </Link>
      <Link to="/rewards">
        <div
          className={
            location.pathname === "/rewards" ? "navigation__active" : ""
          }
        >
          <RewardsIcon isActive={location.pathname === "/rewards"} />
          <p>Rewards</p>
        </div>
      </Link>
      <Link to="/profile">
        <div
          className={
            location.pathname === "/profile" ? "navigation__active" : ""
          }
        >
          <ProfileIcon isActive={location.pathname === "/profile"} />
          <p>Profile</p>
        </div>
      </Link>
      <Link to="/faq">
        <div
          className={location.pathname === "/faq" ? "navigation__active" : ""}
        >
          <FaqIcon isActive={location.pathname === "/faq"} />
          <p>FAQ</p>
        </div>
      </Link>
    </section>
  );
}

export default Navigation;
