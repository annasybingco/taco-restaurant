import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import FunctionContextComponent from "./Functions/FunctionContextComponent.jsx";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";
import { ThemeProvider } from "./Context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
