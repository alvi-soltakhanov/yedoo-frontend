import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import MainPage from "../pages/MainPage/MainPage";
import FullCardPage from "../pages/FullCardPage/FullCardPage";
import OrderRegistPage from "../pages/OrderRegistPage/OrderRegistPage";
import TermsPage from "../pages/DeliveryTermsPage/Terms";
import ActionPage from "../pages/ActionPage/ActionPage";
import Messanger from "../pages/Messenger/Messenger";
import Signin from "../pages/SignIn/SignIn"
import SignUp from '../pages/SignUpPage/SignUp'
import CafeProfile from "./CafeProfile/CafeProfile";
import HomePage from "../pages/HomePage/HomePage";
import "./App.css";
import ClientPersonalPage from "../pages/clientPersonalPage/ClientPersonalPage";
import { useState } from "react";

const App = () => {

    const token = localStorage.getItem("token");

    const [ chatWindow, setChatWindow ] = useState(false);

    // const token1 = useSelector(state => state.application.token);

    if (token) {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/cart" element={<CartPage />}  />
                        <Route path="/FullCard/:id" element={<FullCardPage />}  />
                        <Route path="/TermsPage" element={<TermsPage />}  />
                        <Route path="/ActionPage" element={<ActionPage />}  />
                        <Route path="/OrderRegistPage" element={<OrderRegistPage />} />
                        <Route path="/CafeProfile" element={<CafeProfile />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/ClientProfile" element={<ClientPersonalPage chatWindow={chatWindow} setChatWindow={setChatWindow} />} />
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
                        <Route path="/Signin" element={<Signin />} />
                        <Route path="/SignUp" element={<SignUp />} />
                        <Route path="/ClientProfile" element={<ClientPersonalPage />} />
                        <Route path="/SearchPage" element={<}
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }

};

export default App;
