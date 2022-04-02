import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import MainPage from "../pages/MainPage/MainPage";
import FullCardPage from "../pages/FullCardPage/FullCardPage";
import OrderRegistPage from '../pages/OrderRegistPage/OrderRegistPage'
import "./App.css";
import TermsPage from "../pages/DeliveryTermsPage/Terms";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<CartPage />}  />
          <Route path="/" element={<MainPage />}  />
          <Route path="/FullCard" element={<FullCardPage />}  />
          <Route path="/TermsPage" element={<TermsPage />}  />
          <Route path="/OrderRegistPage" element={<OrderRegistPage />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
