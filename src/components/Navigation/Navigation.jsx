import homeIcon from "../../assets/icons/home.svg";
import rewardsIcon from "../../assets/icons/rewards.svg";
import profileIcon from "../../assets/icons/profile.svg";
import faqIcon from "../../assets/icons/faq.svg";
import "../Navigation/Navigation.scss";

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__item">
        <img src={homeIcon} alt="home-icon" className="navigation__icon" />
        <p>Menu</p>
      </div>
      <div className="navigation__item">
        <img
          src={rewardsIcon}
          alt="rewards-icon"
          className="navigation__icon"
        />
        <p>Rewards</p>
      </div>
      <div className="navigation__item">
        <img
          src={profileIcon}
          alt="profile-icon"
          className="navigation__icon"
        />
        <p>Profile</p>
      </div>
      <div className="navigation__item">
        <img src={faqIcon} alt="faq-icon" className="navigation__icon" />
        <p>FAQ</p>
      </div>
    </section>
  );
}

export default Navigation;
