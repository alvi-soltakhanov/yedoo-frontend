import React, { useEffect } from 'react';
import Cart from '../Card/OneCard';
import styles from './CartBlock.module.css'
import LineHeight from '../../../assets/heigthLine.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getCurrentCart } from '../../../redux/features/cart';

const CartBlock = () => {

    // const dispatch = useDispatch();

    const foods = useSelector(state => state.cart.foods)
    const food = useSelector(state => state.food.food)

    // useEffect(()=>{
    //     {localStorage.getItem('cartId') ? dispatch(getCurrentCart(localStorage.getItem('cartId'))) : console.log('Нет id корзины')}
    // }, [dispatch])

    return (
        // header страницы корзина

        <div className={styles.CartBlock}>
            <div className={styles.CartBlockHeader}>
                <Link to={'/'} className={styles.returnBlock}> - к выбору блюда</Link>
                <div className={styles.Title}><img src={LineHeight} alt="" />КОРЗИНА <span>(в корзине {foods.length} товара)</span></div>
            </div>

            {/* Map карточек корзины  */}
            <div>
                {!food || !foods ? '' :
                    foods.map((cartItem) => {
                        return (
                        food.map(item => {
                            if (cartItem.foodId === item._id) {
                                // console.log(item)
                                return (
                                    <Cart id={cartItem.foodId} image={item.image} title={item.name} composition={item.info} count={cartItem.count} price={item.price} />
                                )
                            }
                        })
                        )
                    })
                }
            </div>
        </div>
    );


};

export default CartBlock;