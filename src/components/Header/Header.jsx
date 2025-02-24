import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import BurgerLogo from "../SVG/BurgerLogo";
import CartIcon from "../SVG/CartIcon";
import "./Header.scss";

function Header() {
  const items = useCart();
  return (
    <div className="header">
      <Link to="/">
        <BurgerLogo />
      </Link>
      <Link to="/cart">
        <CartIcon />({items.length})
      </Link>
    </div>
  );
}

export default Header;
