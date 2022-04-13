import React, { useEffect } from 'react';
import styles from "./card.module.css"
import food from "../../assets/food.png"
import cart from "../../assets/OneCard/Buy.png"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFood, createCart } from '../../redux/features/cart';
import { useState } from 'react';


const Card = ({ id, name, info, price, image }) => {
    const foods = useSelector(state => state.cart.foods)

    const add = foods.find(item=>item.foodId === id)

    const dispatch = useDispatch()

    const handleCart = (id) => {
        if (localStorage.getItem('cartId')) {
            dispatch(addFood(localStorage.getItem('cartId'), id))
            console.log('корзину уже есть сделано')
        } else {
            dispatch(createCart(id))
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardImg}><img style={{ width: '100%' }} src={image ? `http://localhost:4000/${image}` : food} alt="" /></div>
            <div className={styles.description}>
                <div className={styles.nameAll}>
                    <Link to={`/FullCard/${id}`}><p className={styles.name}>{name}</p></Link>
                    <p className={styles.weighth}>Вес: 225г</p>
                </div>
                <p className={styles.script}>{info}</p>
                <div className={styles.price_script}>
                    <p className={styles.price}>{price}₽</p>
                    <button onClick={() => handleCart(id)} className={styles.cart} disabled={add}><img src={cart} alt="" />{add ? 'Уже в корзине' : 'В корзину'}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;