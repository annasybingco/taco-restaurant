import "../RewardsDetails/RewardsDetails.scss";
import RewardsIcon from "../SVG/RewardsIcon";

function RewardsDetails() {
  return (
    <section className="rewards">
      <h1>Rewards</h1>

      <section className="rewards__total">
        <div className="rewards__title">
          <RewardsIcon />
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
            <RewardsIcon />
          </div>
          <div className="rewards__description">
            <p className="body-small">Any two salsas of your choice!</p>
          </div>
        </section>

        <section className="rewards__prize">
          <div className="rewards__points">
            <p>200</p>
            <RewardsIcon />
          </div>
          <div className="rewards__description">
            <p>A free taco</p>
          </div>
        </section>

        <section className="rewards__prize">
          <div className="rewards__points">
            <p>375</p>
            <RewardsIcon />
          </div>
          <div className="rewards__description">
            <p>A full meal</p>
          </div>
        </section>

        <section className="rewards__prize">
          <div className="rewards__points">
            <p>500</p>
            <RewardsIcon />
          </div>
          <div className="rewards__description">
            <p>Taco 'Bout It Hoodie</p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default RewardsDetails;
