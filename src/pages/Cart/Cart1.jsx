import { useCart, useDispatchCart } from "../../Context/CartContext";

const Cart1 = ({ item }) => {
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
      {/* Display selected add-ons */}
      {item.selectedAddOns && item.selectedAddOns.length > 0 && (
        <div>
          <h4>Add-Ons:</h4>
          <ul>
            {item.selectedAddOns.map((addOn) => (
              <li key={addOn.id}>
                {addOn.ingredient} - {addOn.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Cart1;
