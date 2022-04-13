import React from 'react';
import styles from "./cardCafe.module.css"

const SearchForm = ({cafe}) => {
    return (
        <div className={styles.cafe_card}>
            <div className={styles.image}>
                <img src={cafe.image} alt="" />
            </div>
            <div className={styles.name}>
               <h4>{cafe.name}</h4>
               <h5>Описание</h5>
            </div>
        </div>
    );
};

export default SearchForm;