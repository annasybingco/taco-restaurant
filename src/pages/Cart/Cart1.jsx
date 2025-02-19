import { useCart, useDispatchCart } from "../../Context/CartContext";

const Cart1 = () => {
  const items = useCart();
  const dispatch = useDispatchCart();

  if (items.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }

  return (
    <main>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={() => dispatch({ type: "REMOVE", index })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Cart1;
