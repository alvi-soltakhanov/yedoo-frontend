import React, { useEffect } from 'react';
import styles from './CafeCards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafe } from '../../../redux/features/cafe';
import CafeCard from '../../../components/CafeCard/CafeCard';

const CafeCards = () => {

    const cafe = useSelector(state => state.cafe.cafe)
    const loading = useSelector(state => state.cafe.loading)

    const cafe1 = [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <div className={styles.pageTitles}>
                <p>ТОП ЗАВЕДЕНИЙ ПО ОТЗЫВАМ</p>
            </div>
            <div className={styles.cafeOverflow}>
                <div className={`${styles.cafeContainer} ${cafe ? styles.showCafe : styles.hideCafe}`}>
                    {!cafe ? '' :
                        cafe1.map(item => {
                            return ( <CafeCard />)
                        })
                    }
                </div>
            </div>
            <div className={styles.gradientLine}></div>
        </>
    );
};

export default CafeCards;