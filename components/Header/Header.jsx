import logo from "../../src/assets/icons/burger-drop-logo.svg";
import cart from "../../src/assets/icons/cart.svg";
import "../Header/Header.scss";

function Header() {
  return (
    <div>
      <section className="header">
        <img src={logo} alt="" className="header__logo" />
        <img src={cart} alt="" />
        <span>0</span>
      </section>
      <section className="cart">
        <img src={cart} alt="" className="cart__icon" />
        <span className="cart__value">0</span>
      </section>
    </div>
  );
}

export default Header;
