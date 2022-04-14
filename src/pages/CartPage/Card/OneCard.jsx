import React from 'react';
import styles from './OneCard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { cartRemove, foodCount, foodRemove, getCurrentCart } from '../../../redux/features/cart';


const Cart = ({ id, image, title, composition, count, price }) => {
    const dispatch = useDispatch()
    const foods = useSelector(state=>state.cart.foods)

    const handleIncrement = (count) => {
        dispatch(foodCount(localStorage.getItem('cartId'), id, count))
        dispatch(getCurrentCart(localStorage.getItem('cartId')))
    }

    const handleRemove = () => {
        dispatch(foodRemove(localStorage.getItem('cartId'), id))
        dispatch(getCurrentCart(localStorage.getItem('cartId')))
        console.log(foods.length)
        if(foods.length === 1) {
            dispatch(cartRemove(localStorage.getItem('cartId')))
            localStorage.removeItem('cartId')
        }
    }

    return (
        <div className={styles.Card}>
            <div className={styles.image}>
                <div className={styles.imageBlock}>
                    <img src={`http://localhost:4000/${image}`} alt="" />
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.composition}>
                    {composition}
                </div>
            </div>
            <div className={styles.Numbers}>
                <button className={styles.decriment} onClick={() => handleIncrement(count - 1)} disabled={count === 1}>-</button>
                <div>{count}</div>
                <button className={styles.incriment} onClick={() => handleIncrement(count + 1)}>+</button>
            </div>
            <div className={styles.price}>{price * count} ₽</div>
            <div className={styles.deleteCard}><button onClick={handleRemove}>x</button></div>
        </div>
    );
};

export default Cart;