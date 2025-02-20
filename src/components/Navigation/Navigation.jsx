import HomeLogo from "../SVG/HomeLogo";
import RewardsLogo from "../SVG/RewardsLogo";
import ProfileLogo from "../SVG/ProfileLogo";
import FaqLogo from "../SVG/FaqLogo";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.scss";

function Navigation() {
  return (
    <section className="navigation">
      <Link to="/">
        <div className="navigation__item">
          <HomeLogo />
          <p>Menu</p>
        </div>
      </Link>
      <Link to="/rewards">
        <div className="navigation__item">
          <RewardsLogo />
          <p>Rewards</p>
        </div>
      </Link>
      <Link to="/profile">
        <div className="navigation__item">
          <ProfileLogo />
          <p>Profile</p>
        </div>
      </Link>
      <Link to="/faq">
        <div className="navigation__item">
          <FaqLogo />
          <p>FAQ</p>
        </div>
      </Link>
    </section>
  );
}

export default Navigation;
