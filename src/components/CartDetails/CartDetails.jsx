import { useCart, useDispatchCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "../CartDetails/CartDetails.scss";

function CartDetails() {
  const items = useCart();
  const dispatch = useDispatchCart();

  if (items.length === 0) {
    return (
      <main>
        <h4>Cart is empty</h4>
      </main>
    );
  }

  return (
    <section className="order">
      <h1>Cart</h1>
      <main className="order__details">
        <ul className="order__list">
          {items.map((item, index) => (
            <li key={index} className="order__section">
              <div className="order__information">
                <div className="order__title">
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                </div>
                <img
                  src={item.photo}
                  alt={item.description}
                  className="order__image"
                />
              </div>
              {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                <div>
                  <ul>
                    {item.selectedAddOns.map((addOn) => (
                      <li key={addOn.id}>
                        {addOn.ingredient} {addOn.price}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={() => dispatch({ type: "REMOVE", index })}
                className="order__remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
      <Link to="/confirmation" className="order__btn">
        <button>Order Now</button>
      </Link>
    </section>
  );
}

export default CartDetails;
