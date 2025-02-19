import close from "../../assets/icons/close.svg";
import "../MenuId/MenuId.scss";
import { Link } from "react-router-dom";

const MenuItemDetails = ({ item, ingredient }) => {
  console.log(item);
  return (
    <>
      <div>
        <h2>{item.title}</h2>
        <Link to={{ pathname: "/cart", state: { item, ingredient } }}>
          Go to Cart
        </Link>
      </div>
      {/* -----------------------image---------------------- */}
      <div className="details__img">
        <img src={item.photo} alt={item.title} className="details__photo" />
        <img src={close} alt="close-icon" className="details__close" />
      </div>
      {/* -----------------------description---------------------- */}
      <section className="details__info">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </section>
      {/* -----------------------addons---------------------- */}
      <ul className="details__ingredients">
        <h4>Add Ons</h4>
        {ingredient.map((item) => (
          <li className="details__item" key={item.id}>
            <div className="details__add-ons">
              <p className="body">{item.ingredient}</p>
              <p>{item.price}</p>
            </div>
            <input type="checkbox" className="details__checkbox" />
          </li>
        ))}
      </ul>
      {/* -----------------------remove---------------------- */}
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
      {/* -----------------------order notes---------------------- */}
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
      <button>Add to Cart</button>
    </>
  );
};

export default MenuItemDetails;
