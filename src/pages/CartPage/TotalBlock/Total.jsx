import React from 'react';
import styles from './Total.module.css'

const Total = () => {
    return (
        <div className={styles.Total}>
            <div className={styles.Content}>
                <div className={styles.Order}>Итого: <div className={styles.OrderCount}>500 ₽</div></div>
                <button className={styles.ChecoutOrderButton}>Оформить заказ</button>
            </div>
        </div>
    );
};

export default Total;