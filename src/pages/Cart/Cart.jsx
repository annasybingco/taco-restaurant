import { useState } from "react";
import { useLocation } from "react-router-dom";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import cart from "../../assets/icons/cart.svg";
import logo from "../../assets/icons/burger-drop-logo.svg";
import back from "../../assets/icons/back.svg";
import "./Cart.scss";

const CartPage = () => {
  const [cartQuantity, setCartQuantity] = useState(1);
  const location = useLocation();
  console.log(location);
  const { item } = location;
  console.log(item);

  return (
    <>
      <div>
        <div className="cart">
          <img src={back} alt="back-icon" />
          <img src={logo} alt="logo" />
          <div className="cart-qty">
            <img src={cart} alt="cart-icon" className="cart-icon" />
            <span className="qty-bg">{cartQuantity}</span>
          </div>
        </div>
        <QuantitySelector
          count={cartQuantity}
          setCount={setCartQuantity}
          minValue={1}
          maxValue={100}
        />
      </div>
      <div>
        <h1>Cart</h1>
        {item && (
          <div>
            <img src={item.photo} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
