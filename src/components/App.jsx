import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import MainPage from "../pages/MainPage/MainPage";
import FullCardPage from "../pages/FullCardPage/FullCard";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
