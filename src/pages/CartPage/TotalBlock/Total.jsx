import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Total.module.css'

const Total = () => {

    const products = useSelector(state => state.cart.products)
    const total = getTotalOfProducts()

    return (
        <div className={styles.Total}>
            <div className={styles.Content}>
                <div className={styles.Order}>Итого: <div className={styles.OrderCount}>{total} ₽</div></div>
                <Link to={'/OrderRegistPage'}><button className={styles.ChecoutOrderButton}>Оформить заказ</button></Link>
            </div>
        </div>       
    );
    
    // Функция для получения итого всех продуктов

    function getTotalOfProducts () {
        let total = 0;
        products.map((item) => {
            return (
                total += item.price
            )
        })
        return total;
    }
    
};


export default Total;