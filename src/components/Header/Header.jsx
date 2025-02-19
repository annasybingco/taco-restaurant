import logo from "../../assets/icons/burger-drop-logo.svg";
import cart from "../../assets/icons/cart.svg";
import "./Header.scss";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function Header() {
  const items = useCart();
  return (
    <div className="header">
      <img src={logo} alt="" className="header__logo" />
      <section className="cart">
        <Link to="/cart">
          <img src={cart} alt="" className="cart__icon" />({items.length})
          {/* <span className="cart__value">0</span> */}
        </Link>
      </section>
    </div>
  );
}

export default Header;
