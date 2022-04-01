import React from 'react';
import Cart from '../Card/OneCard';
import styles from './CartBlock.module.css'
import LineHeight from '../../../assets/heigthLine.png'
import arr from '../fakedateBase';

const CartBlock = () => {
    
    return (
            // header страницы корзина
            <div className={styles.CartBlock}>
                <div className={styles.CartBlockHeader}>
                    <div className={styles.returnBlock}> - к выбору блюда</div>
                    <div className={styles.Title}><img src={LineHeight} alt="" />КОРЗИНА <span>(в корзине 3 товара)</span></div>
                </div>

            {/* Map карточек корзины  */}
            {arr.map((item) => {
                return <Cart image={item.image} title={item.title} composition={item.composition} count={item.count} price={item.price}/>
            })}
                
            </div>
    );
};

export default CartBlock;