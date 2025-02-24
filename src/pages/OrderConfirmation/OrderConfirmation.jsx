import { Link } from "react-router-dom";
import "../OrderConfirmation/OrderConfirmation.scss";

function Order() {
  return (
    <section>
      <div className="order__text">
        <h4>Your order is placed</h4>
        <p className="body-small">Your order number is #2137</p>
      </div>
      <Link to="/">
        <button>Back to Menu</button>
      </Link>
    </section>
  );
}

export default Order;
