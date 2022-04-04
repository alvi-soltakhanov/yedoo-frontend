import React from 'react';
import styles from './FullCard.module.css'
import cart from '../../../assets/FullCardPage/Cart.png'

const FullCard = () => {
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
                        <img src="https://incrussia.ru/wp-content/uploads/2018/10/iStock-694189032.jpg" alt="Еда" />
                    </div>
                    <div className={styles.fullCardInfo}>
                        <div>
                            <h3>Ягненок</h3>
                            <p>помидор, сыр фета, масло подсолнечное, капуста пекинская,
                                перец сладкийы красный, огурцы, оливки без косточек</p>
                        </div>
                        <div className={styles.cartInfo}>
                            <div className={styles.cartBtn}>
                                <p>Корзина</p>
                                <img src={cart} alt="Cart" />
                            </div>
                            <div className={styles.cartPrice}>
                                <p>259₽</p>
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