import React from 'react';
import styles from './OneCard.module.css'
import { useDispatch } from 'react-redux';
import { foodCount, foodRemove, getCurrentCart } from '../../../redux/features/cart';


const Cart = ({ id, image, title, composition, count, price }) => {
    const dispatch = useDispatch()

    const handleIncrement = (count) => {
        dispatch(foodCount(localStorage.getItem('cartId'), id, count))
        dispatch(getCurrentCart(localStorage.getItem('cartId')))
    }

    const handleRemove = () => {
        dispatch(foodRemove(localStorage.getItem('cartId'), id))
        dispatch(getCurrentCart(localStorage.getItem('cartId')))
    }

    return (
        <div className={styles.Card}>
            <div className={styles.image}><img src={image} alt="" /></div>

            <div className={styles.description}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.composition}>
                    {composition}
                </div>
            </div>
            <div className={styles.Numbers}>
                <button className={styles.decriment} onClick={() => handleIncrement(count - 1)}>-</button>
                <div>{count}</div>
                <button className={styles.incriment} onClick={() => handleIncrement(count + 1)}>+</button>
            </div>
            <div className={styles.price}>{price} ₽</div>
            <div className={styles.deleteCard}><button onClick={handleRemove}>x</button></div>
        </div>
    );
};

export default Cart;