import HomeLogo from "../SVG/HomeLogo";
import RewardsLogo from "../SVG/RewardsLogo";
import ProfileLogo from "../SVG/ProfileLogo";
import FaqLogo from "../SVG/FaqLogo";
import "../Navigation/Navigation.scss";

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__item">
        <HomeLogo />
        <p>Menu</p>
      </div>
      <div className="navigation__item">
        <RewardsLogo />
        <p>Rewards</p>
      </div>
      <div className="navigation__item">
        <ProfileLogo />
        <p>Profile</p>
      </div>
      <div className="navigation__item">
        <FaqLogo />
        <p>FAQ</p>
      </div>
    </section>
  );
}

export default Navigation;
