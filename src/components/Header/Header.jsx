import exit from "../../assets/Profile/logout.png"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from 'react';
import style from "./header.module.css"
import logo from '../../assets/Header/Calling.png'
import CartLine from '../../assets/Header/CartLine.png'
import location from "../../assets/Header/Location.png"
import search from "../../assets/Header/Search.png"
import { Link } from 'react-router-dom';
import { fetchFood } from '../../redux/features/food';
import { getCurrentCart } from '../../redux/features/cart';

const Header = ({ inputText, setInputText }) => {
    // рабочий Header от Сайд-Мохьмада (начало)
    const token = useSelector((state) => state.application.token);
    const role = useSelector((state) => state.application.role);
    const dispatch = useDispatch();
    const [inputHref, setInputHref] = useState("");

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

  useEffect(() => {
    dispatch(fetchFood());
    {
      localStorage.getItem("cartId")
        ? dispatch(getCurrentCart(localStorage.getItem("cartId")))
        : console.log("Нет id корзины");
    }
  }, [dispatch]);
    
     const clearInput = () => {
    setInputHref("");
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };


    return (
      <div>
        <div className={style.header}>
            <div className={style.content}>
                <Link to={"/"}>
                    <div className={style.name}>YEDOO</div>
                </Link>
                <div className={style.inp}>
                    <img src={location} className={style.location} alt="" />
                  <input
            type="text"
            placeholder="  Поиск ресторана.."
            value={inputText}
            onChange={(e) => handleInput(e)}
          />
          <Link to={`/search?${inputHref}`}>
            <img
              src={search}
              onClick={clearInput}
              className={style.search}
              alt=""
            />
          </Link>
                </div>
                <div className={style.contact}>
                    <div className={style.call}>
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
                            <span>{foodsCount?.length}</span>
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
                        <div
                            className={style.exit}
                            onClick={() => handleExit()}
                        >
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
        </div>
     
       
       
      </div>
  );
    // рабочий Header от Сайд-Мохьмада (конец)
};

export default Header;
