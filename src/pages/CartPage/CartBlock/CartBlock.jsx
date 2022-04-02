import React, { useEffect } from 'react';
import Cart from '../Card/OneCard';
import styles from './CartBlock.module.css'
import LineHeight from '../../../assets/heigthLine.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FakeDataBase from '../../CartPage/fakedateBase'

const CartBlock = () => {

    const dispatch = useDispatch();

    useEffect( () => dispatch({
        type: 'addFakeDataBase', payload: FakeDataBase
    }), [dispatch])

    const products = useSelector(state => state.cart.products)

    return (
            // header страницы корзина

            <div className={styles.CartBlock}>
                <div className={styles.CartBlockHeader}>
                    <Link to={'/'} className={styles.returnBlock}> - к выбору блюда</Link>
                    <div className={styles.Title}><img src={LineHeight} alt="" />КОРЗИНА <span>(в корзине 3 товара)</span></div>
                </div>

            {/* Map карточек корзины  */}
            
                {products.map((item) => {
                    
                    return (
                        <Cart image={item.image} title={item.title} composition={item.composition} count={item.count} price={item.price} />
                    )
                })}
            </div>
    );
    
    
};

export default CartBlock;