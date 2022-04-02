import React from 'react';
import styles from './SameCategory.module.css'
import Card from '../../../components/Card/Card'

const SameCategory = () => {
    const arrNum = [1, 2, 3, 4]

    return (
        <div className={styles.sameCategoryBlock}>
            <div className={styles.sameCategoryTitle}>
                <p>С ЭТИМ ТОВАРОМ ПОКУПАЮТ</p>
            </div>
            <div className={styles.sameCategoryItem}>
                {arrNum.map(item => {
                    return <><Card /></>
                })}
            </div>
        </div>
    );
};

export default SameCategory;