import React from 'react';
import styles from './CafeCard.module.css'

const CafeCard = ({name, image}) => {
    return (
        <div className={styles.border}>
            <div className={styles.wrap}>
                <div className={styles.productWrap}>
                    <a href=""><img src={`http://localhost:4000/${image}`} /></a>
                </div>
                <div className={styles.loopAction}>
                    <a href="" className={styles.addToCart}>Быстрый просмотр</a>
                    <a href="" className={styles.loopAddToCart}>Оставить отзыв</a>
                    <div className={styles.stars}></div>
                </div>
            </div>
        </div>
    );
};

export default CafeCard;