import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../MenuId/MenuId.scss";

function MenuId() {
  const [item, setItem] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const { id } = useParams();

  const getItem = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/menu/${id}`);
      setItem(response.data);
    } catch (error) {
      console.error("Error fetching menu item", error);
    }
  };
  useEffect(() => {
    getItem(id);
  }, [id]);

  const getAddOns = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/ingredient/");
      setIngredient(response.data);
    } catch (error) {
      console.error("Error fetching ingredients", error);
    }
  };

  useEffect(() => {
    getAddOns();
  }, []);

  return (
    <>
      <section className="details">
        {/* -----------------------image---------------------- */}
        <img src={item.photo} alt={item.title} className="details__photo" />
        <section className="details__info">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </section>
        {/* -----------------------add-ons---------------------- */}
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
      </section>
    </>
  );
}

export default MenuId;
