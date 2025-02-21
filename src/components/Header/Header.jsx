// import logo from "../../assets/icons/burger-drop-logo.svg";
import CartLogo from "../SVG/CartLogo";
import "./Header.scss";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import BurgerLogo from "../SVG/BurgerLogo";

function Header() {
  const items = useCart();
  return (
    <div className="header">
      <Link to="/">
        <BurgerLogo />
      </Link>
      <section className="cart">
        <Link to="/cart">
          <CartLogo />({items.length})
        </Link>
      </section>
    </div>
  );
}

export default Header;
