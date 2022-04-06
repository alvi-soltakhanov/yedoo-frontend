import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import MainPage from "../pages/MainPage/MainPage";
import FullCardPage from "../pages/FullCardPage/FullCardPage";
import OrderRegistPage from "../pages/OrderRegistPage/OrderRegistPage";
import TermsPage from "../pages/DeliveryTermsPage/Terms";
import ActionPage from "../pages/ActionPage/ActionPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUpPage from "../pages/SignUpPage/SignUp";
import Messanger from "../pages/Messenger/Messenger";
import "./App.css";
import CafeProfile from "./CafeProfile/CafeProfile";


const App = () => {
    const token = localStorage.getItem("token");
    // const token1 = useSelector(state => state.application.token);
    if (token) {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage />}  />
                        <Route path="/cart" element={<CartPage />}  />
                        <Route path="/FullCard/:id" element={<FullCardPage />}  />
                        <Route path="/TermsPage" element={<TermsPage />}  />
                        <Route path="/ActionPage" element={<ActionPage />}  />
                        <Route path="/OrderRegistPage" element={<OrderRegistPage />} />
                        <Route path="/CafeProfile" element={<CafeProfile />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    } else {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage />}  />
                        <Route path="/cart" element={<CartPage />}  />
                        <Route path="/FullCard/:id" element={<FullCardPage />}  />
                        <Route path="/TermsPage" element={<TermsPage />}  />
                        <Route path="/ActionPage" element={<ActionPage />}  />
                        <Route path="/OrderRegistPage" element={<OrderRegistPage />} />
                        <Route path="/CafeProfile" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }

};

export default App;
