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
      {/* prize 1 */}
      <h4>Rewards you can get with points</h4>
      <section className="rewards__prize">
        <div className="rewards__points">
          <p>100</p>
          <RewardsIcon />
        </div>
        <div className="rewards__description">
          <p className="body-small">Any side you’d like!</p>
        </div>
      </section>

      {/* prize 2 */}
      <section className="rewards__prize">
        <div className="rewards__points">
          <p>200</p>
          <RewardsIcon />
        </div>
        <div className="rewards__description">
          <p>A burger of your choice</p>
        </div>
      </section>

      {/* prize 1 */}
      <section className="rewards__prize">
        <div className="rewards__points">
          <p>375</p>
          <RewardsIcon />
        </div>
        <div className="rewards__description">
          <p>Double patty combo of your choice</p>
        </div>
      </section>

      {/* prize 1 */}
      <section className="rewards__prize">
        <div className="rewards__points">
          <p>500</p>
          <RewardsIcon />
        </div>
        <div className="rewards__description">
          <p>Burger Drop sweater</p>
        </div>
      </section>
    </section>
  );
}

export default RewardsDetails;
