import React from 'react';
import styles from './OneCard.module.css'
import CardImage from '../../../assets/CardImage.png'

const Cart = () => {
    return (
        <div className={styles.Card}>
                <div className={styles.image}><img src={CardImage} alt="" /></div>

                <div className={styles.description}>
                    <div className={styles.title}>
                        ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
                    </div>
                    <div className={styles.composition}>
                         Кальмары, мидии, креветки, сыр маасдам, 
                         красный лук, микс оливок, базилик, соус песто
                    </div>
                </div>
                <div className={styles.Numbers}>
                    <button className={styles.decriment}>-</button>
                    <div>5</div>
                    <button className={styles.incriment}>+</button>
                </div>
                <div className={styles.price}>1640 ₽</div>
                <div className={styles.deleteCard}><button>x</button></div>
            </div>
    );
};

export default Cart;