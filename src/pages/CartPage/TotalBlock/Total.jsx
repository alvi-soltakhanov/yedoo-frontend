import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Total.module.css'
import { addTotal } from '../../../redux/features/cart';

const Total = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart.cart)

    let total = 0;

    const handleTotal = (total) => {
        dispatch(addTotal(total))
    }

    const foods = useSelector(state => state.cart.foods)
    const food = useSelector(state => state.food.food)
    return (
        <>
            {!foods || !food ? '' :
            <div className={styles.Total}>
                <div className={styles.Content}>
                    <div className={styles.Order}>Итого:
                        <div className={styles.OrderCount}>
                            {foods.map((cartItem) => {
                                food.map(item => {
                                    if (cartItem.foodId === item._id) {
                                        total += (cartItem.count * item.price)
                                    }
                                })
                            })}
                            <>{total} ₽</>
                        </div>
                    </div>
                    <Link to={'/OrderRegistPage'}><button onClick={() => handleTotal(total)} className={styles.ChecoutOrderButton} disabled={!cart}>Оформить заказ</button></Link>
                </div>
                </div>
            }
        </>
    );
};


export default Total;