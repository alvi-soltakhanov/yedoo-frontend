import React, { useEffect, useRef } from 'react';
import style from "./header.module.css"
import logo from '../../assets/Header/Calling.png'
import CartLine from '../../assets/Header/CartLine.png'
import location from "../../assets/Header/Location.png"
import search from "../../assets/Header/Search.png"
import { Link } from 'react-router-dom';

const Header = () => {
    const token = localStorage.getItem('token');
    return (
        <div className={style.header}>
        <div className={style.content}>
            <Link to={'/'}><div className={style.name}>YEDOO</div></Link>
            <div className={style.inp}>
                <img src={location} className={style.location} alt="" />
                <input type="text" name="" id="" placeholder='Введите адрес доставки' />
                <img src={search} className={style.search} alt="" />
                </div>
            <div className={style.contact}>
               <div className={style.call}> <img src={logo} alt="" /></div>
                <div className={style.iph}>
                    <h5 className={style.phone}>Контакты: </h5>
                    <span className={style.number}>+7(910)510-57-59</span>
                </div>
            </div>
            <Link to={'/cart'}><div className={style.cartBut}>
                <div>Корзина</div>
               <img src={CartLine} alt="" />
               <div className={style.CartCount}><span>5</span></div>
            </div></Link>
            {token ? <div className={style.profile}><Link to="/CafeProfile"><button>Личный кабинет</button></Link></div> :<div> <Link to="/signin"><div>Вход</div></Link> <Link to="/signup"><div>Регистрация</div></Link></div>}
        </div>
        </div>
    );
};

export default Header;