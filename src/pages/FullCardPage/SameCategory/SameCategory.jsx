import React from 'react';
import styles from './SameCategory.module.css'
import Card from '../../../components/Card/Card'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SameCategory = () => {
    const food = useSelector(state => state.food.food)

    const { id } = useParams()

    let currentFood = food?.find(item => {
        if (item._id === id) {
            return item
        }
    })

    return (
        <div className={styles.sameCategoryBlock}>
            <div className={styles.sameCategoryTitle}>
                <p>С ЭТИМ ТОВАРОМ ПОКУПАЮТ</p>
            </div>
            <div className={styles.sameCategoryItem}>
                <div className={`${styles.foodByCategory} ${food ? styles.showFood : styles.hideFood}`}>
                        {food?.map(item => {
                            if (item.categoryId === currentFood.categoryId) {
                                return <div className={styles.CardItem}><Card id={item._id} name={item.name} description={item.info} price={item.price} image={item.image} /></div>
                            }
                        })}
                </div>
            </div>
            </div>
            );
};

export default SameCategory;