import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import "../OrderConfirmation/OrderConfirmation.scss";

function Order() {
  return (
    <section className="order">
      <div className="order__text">
        <h4>Order is placed</h4>
        <p className="body-small">Your order number is #2137</p>
      </div>
      <Link to="/" className="order__btn">
        <button>Back to Menu</button>
      </Link>
      <Navigation />
    </section>
  );
}

export default Order;
