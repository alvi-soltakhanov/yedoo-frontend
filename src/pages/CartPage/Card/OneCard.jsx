import React from 'react';
import styles from './OneCard.module.css'

const Cart = ({image, title, composition, count, price}) => {

    

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
                    <button className={styles.decriment}>-</button>
                    <div>{count}</div>
                    <button className={styles.incriment}>+</button>
                </div>
                <div className={styles.price}>{price} ₽</div>
                <div className={styles.deleteCard}><button>x</button></div>
            </div>
    );
};

export default Cart;