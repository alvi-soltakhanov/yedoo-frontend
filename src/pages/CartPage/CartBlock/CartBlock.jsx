import React from 'react';
import Cart from '../Card/OneCard';
import styles from './CartBlock.module.css'
import LineHeight from '../../../assets/heigthLine.png'

const CartBlock = () => {
    return (
        <div className={styles.CartBlock}>
            <div className={styles.CartBlockHeader}>
                <div className={styles.returnBlock}> - к выбору блюда</div>
                <div className={styles.Title}><img src={LineHeight} alt="" />КОРЗИНА <span>(в корзине 3 товара)</span></div>
            </div>
            <Cart />
        </div>
    );
};

export default CartBlock;