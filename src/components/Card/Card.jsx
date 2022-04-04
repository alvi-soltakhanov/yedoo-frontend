import React from 'react';
import styles from "./card.module.css"
import food from "../../assets/food.png"
import cart from "../../assets/OneCard/Buy.png"

const Card = () => {
    return (
        <div className={styles.card}>
            <div><img src={food} alt="" /></div>
            <div className={styles.description}>
                <div className={styles.nameAll}>
                <p className={styles.name}>Индейка</p>
                <p className={styles.weighth}>Вес: 225г</p>
                </div>
                <p className={styles.script}>Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком</p>
                <div className={styles.price_script}>
                    <p className={styles.price}>220₽</p>
                    <button className={styles.cart}><img src={cart} alt="" />В корзину</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;