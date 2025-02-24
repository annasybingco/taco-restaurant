import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MenuItemDetails from "../../components/MenuItemDetails/MenuItemDetails";
import "../Details/Details.scss";

const Details = () => {
  const [item, setItem] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const base_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const getItem = async (id) => {
    try {
      const response = await axios.get(`${base_URL}/api/menu/${id}`);
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
      const response = await axios.get(`${base_URL}/api/ingredient/`);
      setIngredient(response.data);
    } catch (error) {
      console.error("Error fetching ingredients", error);
    }
  };

  useEffect(() => {
    getAddOns();
  }, [ingredient]);

  return (
    <div className="page">
      <MenuItemDetails item={item} ingredient={ingredient} />
    </div>
  );
};

export default Details;
