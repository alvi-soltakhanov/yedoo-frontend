import React from 'react';
import styles from './SameCategory.module.css'

const SameCategory = () => {
    return (
        <div className={styles.sameCategoryBlock}>
            <div className={styles.sameCategoryTitle}>
                <p>С ЭТИМ ТОВАРОМ ПОКУПАЮТ</p>
            </div>
            <div className={styles.sameCategoryContainer}>
                {/* Нужно последнее обновление фронта поэтому пока не доделано */}
            </div>
        </div>
    );
};

export default SameCategory;