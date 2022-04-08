import React from 'react';
import styles from './CategoryCards.module.css'
import { useSelector } from 'react-redux';
import FoodByCategory from './FoodByCategory/FoodByCategory';

const CategoryCards = () => {
    const categories = useSelector(state => state.categories.categories)
    return (
        <>
            <div className={styles.categoriesContainer}>
                {!categories ? '' :
                    categories.map((item) => {
                        return (
                            <>
                                <div className={styles.pageTitles}>
                                    <p>ТОП В КАТЕГОРИИ {item.name.toUpperCase()} </p>
                                </div>
                                <div className={styles.CategoryCards}>
                                    <FoodByCategory categoryId={item._id} />
                                </div>
                                <div className={styles.gradientLine}></div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
};

export default CategoryCards;