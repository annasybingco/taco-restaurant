import { Link, useLocation } from "react-router-dom";
import RewardsIcon from "../SVG/RewardsIcon";
import ProfileIcon from "../SVG/ProfileIcon";
import FaqIcon from "../SVG/FaqIcon";
import HomeIcon from "../SVG/HomeIcon";
import "../Navigation/Navigation.scss";

function Navigation() {
  const location = useLocation();

  return (
    <section className="navigation">
      <Link to="/">
        <div className={location.pathname === "/" ? "active" : ""}>
          <HomeIcon isActive={location.pathname === "/"} />
          <p>Menu</p>
        </div>
      </Link>
      <Link to="/rewards">
        <div className={location.pathname === "/rewards" ? "active" : ""}>
          <RewardsIcon isActive={location.pathname === "/rewards"} />
          <p>Rewards</p>
        </div>
      </Link>
      <Link to="/profile">
        <div className={location.pathname === "/profile" ? "active" : ""}>
          <ProfileIcon isActive={location.pathname === "/profile"} />
          <p>Profile</p>
        </div>
      </Link>
      <Link to="/faq">
        <div className={location.pathname === "/faq" ? "active" : ""}>
          <FaqIcon isActive={location.pathname === "/faq"} />
          <p>Faq</p>
        </div>
      </Link>
    </section>
  );
}

export default Navigation;
