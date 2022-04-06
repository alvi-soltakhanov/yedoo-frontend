import React from 'react';
import styles from "./card.module.css"
import food from "../../assets/food.png"
import cart from "../../assets/OneCard/Buy.png"
import { Link } from 'react-router-dom';

const Card = ({ id, name, description, price, image }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}><img style={{ width: '100%' }} src={image ? `http://localhost:4000/${image}` : food} alt="" /></div>
            <div className={styles.description}>
                <div className={styles.nameAll}>
                <Link to={`/FullCard/${id}`}><p className={styles.name}>{name}</p></Link>
                    <p className={styles.weighth}>Вес: 225г</p>
                </div>
                <p className={styles.script}>{description}</p>
                <div className={styles.price_script}>
               <p className={styles.price}>{price}₽</p>
                    <button className={styles.cart}><img src={cart} alt="" />В корзину</button>
                </div>
            </div>
        </div>
    );
};

export default Card;