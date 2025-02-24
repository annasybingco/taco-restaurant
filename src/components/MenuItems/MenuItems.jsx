import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../MenuItems/MenuItems.scss";

function MenuItems() {
  const [menu, setMenu] = useState([]);
  const base_URL = import.meta.env.VITE_API_URL;

  const getMenu = async () => {
    try {
      const response = await axios.get(`${base_URL}/api/menu/`);
      setMenu(response.data);
    } catch (error) {
      console.error("Error fetching menu", error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="page">
      <ul className="menu">
        {menu.map((item) => (
          <li className="" key={item.id}>
            <Link to={`/menu/${item.id}`} className="menu__item">
              <div className="menu__details">
                <h4>{item.title}</h4>
                <p className="body-small">{item.description}</p>
                <p>${item.price}</p>
              </div>
              <div>
                <img
                  src={item.photo}
                  alt={item.title}
                  className="menu__image"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuItems;
