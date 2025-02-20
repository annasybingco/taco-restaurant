import { Link, useLocation } from "react-router-dom";
import RewardsLogo from "../SVG/RewardsLogo";
import ProfileLogo from "../SVG/ProfileLogo";
import FaqLogo from "../SVG/FaqLogo";
import HomeLogo from "../SVG/HomeLogo";
import "../Navigation/Navigation.scss";

function Navigation() {
  const location = useLocation();

  return (
    <section className="navigation">
      <Link to="/">
        <div className={location.pathname === "/" ? "active" : ""}>
          <HomeLogo />
          <p>Menu</p>
        </div>
      </Link>
      <Link to="/rewards">
        <div className={location.pathname === "/rewards" ? "active" : ""}>
          <RewardsLogo />
          <p>Rewards</p>
        </div>
      </Link>
      <Link to="/profile">
        <div className={location.pathname === "/profile" ? "active" : ""}>
          <ProfileLogo />
          <p>Profile</p>
        </div>
      </Link>
      <Link to="/faq">
        <div className={location.pathname === "/faq" ? "active" : ""}>
          <FaqLogo />
          <p>FAQ</p>
        </div>
      </Link>
    </section>
  );
}

export default Navigation;
