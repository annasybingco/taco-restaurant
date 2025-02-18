import { useState } from "react";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import cart from "../../assets/icons/cart.svg";
import logo from "../../assets/icons/burger-drop-logo.svg";
import back from "../../assets/icons/back.svg";
import "./Cart.scss";
import Order from "../../components/Order/Order";

const CartPage = () => {
  const [cartQuantity, setCartQuantity] = useState(1); // Initial quantity

  return (
    <div>
      <div className="cart">
        <img src={back} alt="back-icon" />
        <img src={logo} alt="logo" />
        <div className="cart-qty">
          <img src={cart} alt="cart-icon" className="cart-icon" />{" "}
          <span className="qty-bg">{cartQuantity}</span>
        </div>
      </div>
      <QuantitySelector
        count={cartQuantity}
        setCount={setCartQuantity}
        minValue={1}
        maxValue={100}
      />
      <Order />
    </div>
  );
};

export default CartPage;
