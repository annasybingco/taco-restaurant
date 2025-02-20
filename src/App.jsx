import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import FunctionContextComponent from "./Functions/FunctionContextComponent.jsx";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";
import Cart1 from "./pages/Cart/Cart1";
import Faq from "./pages/Faq/Faq.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import Header from "./components/Header/Header.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import Rewards from "./pages/Rewards/Rewards.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <FunctionContextComponent />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu/:id" element={<Details />} />
            <Route path="/cart" element={<Cart1 />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
