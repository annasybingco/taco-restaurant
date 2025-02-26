import { useDispatchCart } from "../../Context/CartContext";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../SVG/CloseIcon";
import "../MenuItemDetails/MenuItemDetails.scss";

const MenuItemDetails = ({ item, ingredient }) => {
  const dispatch = useDispatchCart();
  const [selectedAddOns, setSelectedAddons] = useState([]);
  const [cart, setCart] = useState([]);

  const notify = () => {
    toast.success(`item added to cart`);
  };

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(existingCart);
  }, []);

  const handleAddOnChange = (selectedId) => {
    setSelectedAddons((prev) => {
      const isAlreadySelected = prev.some(
        (ingredient) => ingredient.id === selectedId
      );

      const updatedAddOns = isAlreadySelected
        ? prev.filter((ingredient) => ingredient.id !== selectedId)
        : [...prev, ingredient.find((i) => i.id === selectedId)];
      console.log("Updated Add-Ons:", updatedAddOns);
      return updatedAddOns;
    });
  };

  const addtoCart = () => {
    const updatedItem = {
      ...item,
      selectedAddOns,
    };

    const updatedCart = [...cart, updatedItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Selected Add-Ons before dispatch:", selectedAddOns);
    dispatch({ type: "ADD", item: updatedItem });
  };

  return (
    <>
      <div className="details__img">
        <img src={item.photo} alt={item.title} className="details__photo" />
        <Link to="/">
          <CloseIcon />
        </Link>
      </div>
      <section className="details__info">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </section>
      <ul className="details__ingredients">
        <h4>Add Ons</h4>
        {ingredient.map((item) => (
          <li className="details__item" key={item.id}>
            <div className="details__add-ons">
              <p className="body">{item.ingredient}</p>
              <p>{item.price}</p>
            </div>
            <input
              type="checkbox"
              className="details__checkbox"
              checked={selectedAddOns.some((addOn) => addOn.id === item.id)}
              onChange={() => handleAddOnChange(item.id)}
            />
          </li>
        ))}
      </ul>
      <div className="details__remove">
        <h4>Remove</h4>
        <div className="details__list">
          {item?.ingredients?.map((ingredient, index) => (
            <label key={index} className="details__list-item">
              {ingredient}
              <input
                type="checkbox"
                value={ingredient}
                className="details__checkbox"
              />
            </label>
          ))}
        </div>
      </div>
      <div className="details__textarea">
        <label htmlFor="text-area">
          <h4>Order Notes</h4>
        </label>
        <textarea
          className="details__textbox"
          id="story"
          name="story"
          rows="5"
          cols="33"
          placeholder="Add a note (Extra drop sauce, no onions, etc)"
        ></textarea>
      </div>
      <button
        onClick={() => {
          notify();
          addtoCart(item);
        }}
      >
        Add to Cart
      </button>
    </>
  );
};

export default MenuItemDetails;
