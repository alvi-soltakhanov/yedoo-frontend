import React from 'react';
import styles from './FullCard.module.css'
import cart from '../../../assets/FullCardPage/Cart.png'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

const FullCard = () => {
    const { id } = useParams()
    
    const food = useSelector(state=> state.food.food)

    let currentFood = food.find(item => {
        if (item._id === id) {
            return item
        }
    })

    console.log(currentFood)

    return (
        <>
            <div className={styles.fullCardPage}>
                <div className={styles.turnBack}>
                    <div className={styles.backBtn}>
                        &#8249;
                    </div>
                    <p>Вернуться назад</p>
                </div>
                <div className={styles.fullCardBlock}>
                    <div className={styles.fullCardImg}>
                        <img src={currentFood.image} alt="Еда" />
                    </div>
                    <div className={styles.fullCardInfo}>
                        <div>
                            <h3>{currentFood.name}</h3>
                            <p>{currentFood.info}</p>
                        </div>
                        <div className={styles.cartInfo}>
                            <div className={styles.cartBtn}>
                                <p>Корзина</p>
                                <img src={cart} alt="Cart" />
                            </div>
                            <div className={styles.cartPrice}>
                                <p>{currentFood.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gradientLine}></div>
        </>
    );
};

export default FullCard;