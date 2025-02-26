import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header.jsx";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";
import Faq from "./pages/Faq/Faq.jsx";
import Rewards from "./pages/Rewards/Rewards.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation.jsx";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ToastContainer />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/confirmation" element={<OrderConfirmation />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
