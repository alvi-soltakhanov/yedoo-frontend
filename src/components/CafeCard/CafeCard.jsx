import React from 'react';
import styles from './CafeCard.module.css'

const CafeCard = () => {
    return (
        <div className={styles.border}>
            <div className={styles.wrap}>
                <div className={styles.productWrap}>
                    <a href=""><img src="https://i.pinimg.com/originals/68/80/b8/6880b8a23068f38ed86a3ba9575a9c7a.jpg" /></a>
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