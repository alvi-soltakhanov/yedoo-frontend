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
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { useSelector } from "react-redux";
import CafeMenu from "./CafeProfile/CafeMenu";
import CafeOrders from "../pages/ProfilePage/Cafe/Orders/CafeOrders";
import Promotions from "../pages/ProfilePage/Cafe/Promotions/Promotions";


const App = () => {

    // const token = localStorage.getItem("token");
    const token = useSelector(state => state.application.token);
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
                        <Route path="/cafeprofile" element={<CafeProfile />} />
                        <Route path="/cafeprofile2/" element={<ProfilePage />}>
                          {/* <Route index element={<ProfilePage />} /> */}
                          <Route path="menu" element={<CafeMenu />} />
                          <Route path="order" element={<CafeOrders />} />
                          <Route path="promotions" element={<Promotions />} />
                        </Route>

                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/signin" element={<SignIn />} />
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
                        <Route path="/cafeprofile" element={<Navigate to="/" replace />} />
                        <Route path="/cafeprofile2" element={<Navigate to="/" replace />} />
                        <Route path="/cafeprofile2/*" element={<Navigate to="/" replace />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/signin" element={<SignIn />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }

};

export default App;
