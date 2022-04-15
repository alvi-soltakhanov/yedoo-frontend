import React, { useEffect } from 'react';
import styles from './CafeCards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafe } from '../../../redux/features/cafe';
import CafeCard from '../../../components/CafeCard/CafeCard';
import { useState } from 'react'

const CafeCards = () => {

    const cafe = useSelector(state => state.cafe.cafe)
    const loading = useSelector(state => state.cafe.loading)

    const [someCafe, setSomeCafe] = useState(4)

    const handleMore = (count) => {
        setSomeCafe(count)
    }

    return (
        <>
            <div className={styles.pageTitles}>
                <p>ТОП ЗАВЕДЕНИЙ ПО ОТЗЫВАМ</p>
            </div>
            <div className={styles.cafeOverflow}>
                <div className={`${styles.cafeContainer} ${cafe ? styles.showCafe : styles.hideCafe}`}>
                    {!cafe ? '' :
                        cafe.slice(0, someCafe).map(item => {
                            return (<CafeCard id={item._id} name={item.name} image={item.image} />)
                        })
                    }
                </div>
            </div>
            <div className={styles.moreBlock}>
                <button onClick={() => handleMore(someCafe + 4)} className={`${styles.moreBtn} ${someCafe >= cafe?.length ? styles.hide : ''}`}>Показать больше</button>
                <button onClick={() => handleMore(4)} className={`${styles.moreBtn} ${someCafe === 4 ? styles.hide : ''}`}>Скрыть</button>
            </div>
            <div className={styles.gradientLine}></div>
        </>
    );
};

export default CafeCards;