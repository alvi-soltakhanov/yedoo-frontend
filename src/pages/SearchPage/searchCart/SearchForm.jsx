import React from 'react';
import styles from "./cafeCard.module.css"

const SearchForm = ({name, menu}) => {
    return (
        <div className={styles.cafe_card}>
            <div className={styles.info}>
            <img src="" alt="" />
            <div className={styles.name}>
               <h1>{name}</h1>
               <h6>{menu}</h6> 
            </div>
            </div>
        </div>
    );
};

export default SearchForm;