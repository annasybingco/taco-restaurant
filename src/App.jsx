import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useContext, useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";

const shoppingCartContext = createContext();
function App() {
  const [shoppingCart, setShoppingCart] = useState([]); //initialize shopping cart
  return (
    <shoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </shoppingCartContext.Provider>
  );
}

export default App;
