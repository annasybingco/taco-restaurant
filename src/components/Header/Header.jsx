import logo from "../../assets/icons/burger-drop-logo.svg";
import cart from "../../assets/icons/cart.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="header__logo" />
      <section className="cart">
        <img src={cart} alt="" className="cart__icon" />
        <span className="cart__value">0</span>
      </section>
    </div>
  );
}

export default Header;
