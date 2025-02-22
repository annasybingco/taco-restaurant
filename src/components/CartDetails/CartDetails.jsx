import { useCart, useDispatchCart } from "../../Context/CartContext";
import "../../pages/Cart/Cart.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

function CartDetails() {
  const items = useCart(); // This will return the entire cart
  const dispatch = useDispatchCart();

  if (items.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }

  return (
    <>
      <main className="order">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="order__section">
              <h4>{item.title}</h4>
              <p>{item.price}</p>
              <img
                src={item.photo}
                alt={item.description}
                className="order__image"
              />
              {/* Display selected add-ons for each item */}
              {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                <div>
                  <ul>
                    {item.selectedAddOns.map((addOn) => (
                      <li key={addOn.id}>
                        {addOn.ingredient} {addOn.price}
                      </li>
                    ))}
                  </ul>
                  <QuantitySelector />
                </div>
              )}
              <button onClick={() => dispatch({ type: "REMOVE", index })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
      <button>Place Order</button>
    </>
  );
}

export default CartDetails;
