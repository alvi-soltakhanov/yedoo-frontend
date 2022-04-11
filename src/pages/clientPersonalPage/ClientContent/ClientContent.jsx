import React from 'react';
import styles from './ClientContent.module.css'
import LineHeight from '../../../assets/heigthLine.png'
import OrderCard from '../OrderCard/OrderCard'
import fakedateBase from '../../CartPage/fakedateBase'

const ClientContent = () => {

    return (
        <div className={styles.content}>
            
            {/* Блок акции  */}
            <div className={styles.HeaderBlock}>
                    <div className={styles.Title}><img className={styles.LineHeight} src={LineHeight} alt=""/> МОИ АКЦИИ <span></span></div>
            </div>

            {/* Блок карточек */}
            <div className={styles.CardsBlock}>


            </div>

            {/* Блок Мои заказы */}

            <div className={styles.HeaderBlock}>
                    <div className={styles.Title}><img className={styles.LineHeight} src={LineHeight} alt=""/>МОИ ЗАКАЗЫ <span></span></div>
            </div>


            {/* Блок карточек заказов */}

            <div className={styles.CardsBlock}>
                {fakedateBase.map((base) => {
                    return <OrderCard base={base} fakedateBase={fakedateBase}/>
                })}
            </div>

        </div>
    );
};

export default ClientContent;