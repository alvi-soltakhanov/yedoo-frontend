import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CartPage />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
