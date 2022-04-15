import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../../components/Card/Card";
import styles from "./FoodByCategory.module.css";

const FoodByCategory = ({ categoryId, categoryName }) => {
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food.food);

  const [foodCount, setFoodCount] = useState(4);

  const handleFoodCount = (count) => {
    setFoodCount(count);
  };

  const categoryLength = food?.find((item) => item.categoryId === categoryId);

  const foodArr = food?.filter((item) => {
    if (item.categoryId === categoryId) {
      return item;
    }
  });

  return (
    <div
      className={`${styles.foodByCategory} ${
        food ? styles.showFood : styles.hideFood
      }`}
    >
      {!food || !categoryLength ? (
        ""
      ) : (
        <>
          <div className={styles.pageTitles}>
            <p> {categoryName.toUpperCase()} </p>
          </div>
          <div className={styles.foodItem}>
            {foodArr.slice(0, foodCount).map((item) => {
              if (item.categoryId === categoryId) {
                return (
                  <div key={item._id} className={styles.CardItem}>
                    <Card
                      id={item._id}
                      name={item.name}
                      description={item.info}
                      price={item.price}
                      image={item.image}
                      cafeId={item.cafeId}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.moreBlock}>
            <button
              onClick={() => handleFoodCount(foodCount + 4)}
              className={`${styles.moreBtn} ${
                foodCount >= foodArr.length ? styles.hide : ""
              }`}
            >
              Показать больше
            </button>
            <button
              onClick={() => handleFoodCount(4)}
              className={`${styles.moreBtn} ${
                foodCount === 4 ? styles.hide : ""
              }`}
            >
              Скрыть
            </button>
          </div>
          <div className={styles.gradientLine}></div>
        </>
      )}
    </div>
  );
};

export default FoodByCategory;
