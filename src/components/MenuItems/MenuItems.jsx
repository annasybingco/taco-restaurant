import React, { useEffect, useState } from "react";
import axios from "axios";
import "../MenuItems/MenuItems.scss";

function MenuItems() {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/menu/");
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
          <li className="menu__item" key={item.id}>
            <div className="menu__details">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
            <div className="menu__photo">
              <img src={item.photo} alt={item.title} className="menu__image" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuItems;
