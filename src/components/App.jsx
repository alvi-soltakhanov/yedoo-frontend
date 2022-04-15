import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import FullCardPage from "../pages/FullCardPage/FullCardPage";
import OrderRegistPage from "../pages/OrderRegistPage/OrderRegistPage";
import TermsPage from "../pages/DeliveryTermsPage/Terms";
import ActionPage from "../pages/ActionPage/ActionPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUpPage from "../pages/SignUpPage/SignUp";
import "./App.css";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { useSelector } from "react-redux";
import CafeMenu from "../pages/ProfilePage/Cafe/Menu/CafeMenu";
import CafeOrders from "../pages/ProfilePage/Cafe/Orders/CafeOrders";
import Promotions from "../pages/ProfilePage/Cafe/Promotions/Promotions";
import CafeInfo from "../pages/ProfilePage/Cafe/CafeInfo/CafeInfo";
import ProtectedRoute from "../pages/ProfilePage/ProtectedRoute";
import CourierOrders from "../pages/ProfilePage/Courier/Orders/CourierOrders";
import CompleteOrders from "../pages/ProfilePage/Courier/CompleteOrders/CompleteOrders";
import CourierInfo from "../pages/ProfilePage/Courier/CourierInfo/CourierInfo";
import Addresses from "../pages/ProfilePage/Courier/Adresses/Adresses";
import ClientPersonalPage from "../pages/clientPersonalPage/ClientPersonalPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import CafePage from "../pages/CafePage/CafePage";
import MainPage from "../pages/MainPage/MainPage";

const App = () => {
  const token = useSelector((state) => state.application.token);
  const role = useSelector((state) => state.application.role);

  if (token) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/fullcard/:id" element={<FullCardPage />} />
            <Route path="/termspage" element={<TermsPage />} />
            <Route path="/actionpage" element={<ActionPage />} />
            <Route path="/orderregistpage" element={<OrderRegistPage />} />
            <Route
              element={
                <ProtectedRoute
                  token={token}
                  allowedRoles={["cafe"]}
                  role={role}
                />
              }
            >
              <Route path="/profile/cafe/" element={<ProfilePage />}>
                <Route path="menu" element={<CafeMenu />} />
                <Route path="orders" element={<CafeOrders />} />
                <Route path="promotions" element={<Promotions />} />
                <Route path="info" element={<CafeInfo />} />
              </Route>
            </Route>
            <Route
              element={
                <ProtectedRoute
                  token={token}
                  allowedRoles={["courier"]}
                  role={role}
                />
              }
            >
              <Route path="/profile/courier/" element={<ProfilePage />}>
                <Route path="orders" element={<CourierOrders />} />
                <Route path="completed" element={<CompleteOrders />} />
                <Route path="info" element={<CourierInfo />} />
                <Route path="addresses" element={<Addresses />} />
              </Route>
            </Route>
            <Route
              element={
                <ProtectedRoute
                  token={token}
                  allowedRoles={["client"]}
                  role={role}
                />
              }
            >
              <Route path="/profile/client/" element={<ProfilePage />}>
                <Route path="orders" element={<CafeOrders />} />
              </Route>
            </Route>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cafe/:id" element={<CafePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/fullcard/:id" element={<FullCardPage />} />
            <Route path="/termspage" element={<TermsPage />} />
            <Route path="/actionpage" element={<ActionPage />} />
            <Route path="/orderregistpage" element={<OrderRegistPage />} />
            <Route path="/cafeprofile" element={<Navigate to="/" replace />} />
            <Route path="/profile" element={<Navigate to="/" replace />} />
            <Route path="/profile/*" element={<Navigate to="/" replace />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cafe/:id" element={<CafePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
