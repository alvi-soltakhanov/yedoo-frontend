import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../../components/Card/Card';
import { fetchFood } from '../../../../redux/features/food';
import styles from './FoodByCategory.module.css'

const FoodByCategory = ({categoryId}) => {
    const dispatch = useDispatch()
    const food = useSelector(state => state.food.food)
    // console.log(food)



    return (
        <div className={`${styles.foodByCategory} ${food ? styles.showFood : styles.hideFood}`}>
            {!food ? '' :
            food.map(item => {
                if(item.categoryId === categoryId) {
                return <div className={styles.CardItem}><Card key={item._id} id={item._id} name={item.name} description={item.info} price={item.price} image={item.image} cafeId={item.cafeId} /></div>
            }
            })
        }
        </div>
    );
};

export default FoodByCategory;