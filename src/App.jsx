import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
