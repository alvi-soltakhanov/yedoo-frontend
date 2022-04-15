import React from 'react';
import styles from './CafeCard.module.css'
import { Link } from 'react-router-dom';


const CafeCard = ({id, name, image}) => {
    return (
        <div className={styles.border}>
            <div className={styles.wrap}>
                <div className={styles.productWrap}>
                    <img src={`http://localhost:4000/${image}`} />
                </div>
                <div className={styles.loopAction}>
                    <p>{name}</p>
                    <Link to={`/cafe/${id}`}><div className={styles.addToCart}>Быстрый просмотр</div></Link>
                    <a href="" className={styles.loopAddToCart}>Описание</a>
                    <div className={styles.stars}></div>
                </div>
            </div>
        </div>
    );
};

export default CafeCard;