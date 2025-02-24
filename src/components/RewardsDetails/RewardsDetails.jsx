import "../RewardsDetails/RewardsDetails.scss";
import RewardsIcon from "../../assets/icons/rewards.svg";

function RewardsDetails() {
  return (
    <section className="rewards">
      <h1>Total Rewards</h1>

      <section className="rewards__total">
        <div className="rewards__title">
          <img src={RewardsIcon} alt="rewards-icon" className="rewards__icon" />
          <p>Drop points</p>
        </div>
        <div className="rewards__total-points">
          <p>300</p>
          <p>Equals 50$</p>
        </div>
      </section>

      <section className="rewards__prize-list">
        <p className="rewards__paragraph">Redeem & Enjoy</p>
        <section className="rewards__prize">
          <div className="rewards__points">
            <p>100</p>
            <img
              src={RewardsIcon}
              alt="rewards-icon"
              className="rewards__icon"
            />
          </div>
          <div className="rewards__description">
            <p className="body-small">Any side you’d like!</p>
          </div>
        </section>

        <section className="rewards__prize">
          <div className="rewards__points">
            <p>200</p>
            <img
              src={RewardsIcon}
              alt="rewards-icon"
              className="rewards__icon"
            />
          </div>
          <div className="rewards__description">
            <p>A burger of your choice</p>
          </div>
        </section>

        <section className="rewards__prize">
          <div className="rewards__points">
            <p>375</p>
            <img
              src={RewardsIcon}
              alt="rewards-icon"
              className="rewards__icon"
            />
          </div>
          <div className="rewards__description">
            <p>Double patty combo of your choice</p>
          </div>
        </section>

        <section className="rewards__prize">
          <div className="rewards__points">
            <p>500</p>
            <img
              src={RewardsIcon}
              alt="rewards-icon"
              className="rewards__icon"
            />
          </div>
          <div className="rewards__description">
            <p>Burger Drop sweater</p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default RewardsDetails;
