import React, { useEffect, useRef } from "react";
import CartLine from "../../assets/Header/CartLine.png";
import exit from "../../assets/Profile/logout.png";
import { useDispatch, useSelector } from "react-redux";
import style from "./header.module.css";
import logo from "../../assets/Header/Calling.png";
import location from "../../assets/Header/Location.png";
import search from "../../assets/Header/Search.png";
import { Link } from "react-router-dom";
import { fetchFood } from "../../redux/features/food";
import { getCurrentCart } from "../../redux/features/cart";

const Header = () => {
  const token = useSelector((state) => state.application.token);
  const role = useSelector((state) => state.application.role);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFood());
    {
      localStorage.getItem("cartId")
        ? dispatch(getCurrentCart(localStorage.getItem("cartId")))
        : console.log("Нет id корзины");
    }
  }, [dispatch]);

  const handleExit = () => {
    dispatch({ type: "logout" });
    localStorage.clear();
  };

  let pathToProfile;
  if (role === "cafe") {
    pathToProfile = "cafe/orders";
  } else if (role === "courier") {
    pathToProfile = "courier/orders";
  } else if (role === "client") {
    pathToProfile = "client/orders";
  }

  const foodsCount = useSelector((state) => state.cart.foods);
  // const token = localStorage.getItem('token');

  return (
    <div className={style.header}>
      <div className={style.content}>
        <Link to={"/"}>
          <div className={style.name}>YEDOO</div>
        </Link>
        <div className={style.inp}>
          <img src={location} className={style.location} alt="" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Введите адрес доставки"
          />
          <img src={search} className={style.search} alt="" />
        </div>
        <div className={style.contact}>
          <div className={style.call}>
            {" "}
            <img src={logo} alt="" />
          </div>
          <div className={style.iph}>
            <h5 className={style.phone}>Контакты: </h5>
            <span className={style.number}>+7(910)510-57-59</span>
          </div>
        </div>
        <Link to={"/cart"}>
          <div className={style.cartBut}>
            <div>Корзина</div>
            <img src={CartLine} alt="" />
            <div className={style.CartCount}>
              <span>5</span>
            </div>
          </div>
        </Link>
        {token ? (
          <div className={style.profileContainer}>
            <div className={style.profile}>
              <Link to={`/profile/${pathToProfile}`}>
                <button>Личный кабинет</button>
              </Link>
            </div>
            <div className={style.exit} onClick={() => handleExit()}>
              <img src={exit} alt="exit" />
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <Link to="/signin">
              <div className={style.sign}>Вход</div>
            </Link>{" "}
            <Link to="/signup">
              <div className={style.sign}>Регистрация</div>
            </Link>
          </div>
        )}
      </div>
      <Link to={"/cart"}>
        <div className={style.cartBut}>
          <div>Корзина</div>
          <img src={CartLine} alt="" />
          <div className={style.CartCount}>
            <span>{foodsCount ? foodsCount.length : "..."}</span>
          </div>
        </div>
      </Link>
      {/* {token ? <div className={style.profile}><Link to="/CafeProfile"><button>Личный кабинет</button></Link></div> :<div> <Link to="/signin"><div>Вход</div></Link> <Link to="/signup"><div>Регистрация</div></Link></div>} */}
    </div>
  );
};

export default Header;
