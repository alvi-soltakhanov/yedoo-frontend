import React, { useEffect } from "react";
import styles from "./card.module.css";
import food from "../../assets/food.png";
import cart from "../../assets/OneCard/Buy.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFoodToCart, createCart } from "../../redux/features/cart";
import { useState } from "react";

const Card = ({ id, name, description, price, image, cafeId }) => {
  const foods = useSelector((state) => state.cart.foods);

  const add = foods.find((item) => item.foodId === id);
  const cafe = useSelector((state) => state.cart.cafeId);

  const dispatch = useDispatch();

  const handleCart = (id) => {
    if (localStorage.getItem("cartId")) {
      dispatch(addFoodToCart(localStorage.getItem("cartId"), id));
    } else {
      dispatch(createCart(id, cafeId));
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img
          style={{ width: "100%" }}
          src={`http://localhost:4000/${image}`}
          alt=""
        />
      </div>
      <div className={styles.description}>
        <div className={styles.nameAll}>
          <Link to={`/FullCard/${id}`}>
            <p className={styles.name}>{name}</p>
          </Link>
          <p className={styles.weighth}>Вес: 225г</p>
        </div>
        <p className={styles.script}>{description}</p>
        <div className={styles.price_script}>
          <p className={styles.price}>{price}₽</p>
          <button
            onClick={() => handleCart(id)}
            className={styles.cart}
            disabled={add || (cafe && cafe !== cafeId)}
          >
            <img src={cart} alt="" />
            {add ? "Уже в корзине" : "В корзину"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
