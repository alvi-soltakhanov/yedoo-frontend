import React, { useEffect } from 'react';
import styles from './CafeCards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafe } from '../../../redux/features/cafe';
import CafeCard from '../../../components/CafeCard/CafeCard';

const CafeCards = () => {

    const cafe = useSelector(state => state.cafe.cafe)
    const loading = useSelector(state => state.cafe.loading)

    return (
        <>
            <div className={styles.pageTitles}>
                <p>ТОП ЗАВЕДЕНИЙ ПО ОТЗЫВАМ</p>
            </div>
            <div className={styles.cafeOverflow}>
                <div className={`${styles.cafeContainer} ${cafe ? styles.showCafe : styles.hideCafe}`}>
                    {!cafe ? '' :
                        cafe.map(item => {
                            return ( <CafeCard name={item.name} image={item.image} />)
                        })
                    }
                </div>
            </div>
            <div className={styles.gradientLine}></div>
        </>
    );
};

export default CafeCards;