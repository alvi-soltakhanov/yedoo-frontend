import React from "react";
import styles from "./CategoryCards.module.css";
import { useSelector } from "react-redux";
import FoodByCategory from "./FoodByCategory/FoodByCategory";
import { useState } from "react";

const CategoryCards = () => {
  const categories = useSelector((state) => state.categories.categories);
  const [categoryCount, setCategoryCount] = useState(4);

  const handleCategoryCount = (count) => {
    setCategoryCount(count);
  };
  return (
    <>
      <div className={styles.categoriesContainer}>
        {!categories
          ? ""
          : categories.slice(0, categoryCount)?.map((item) => {
              return (
                <FoodByCategory
                  categoryId={item._id}
                  categoryName={item.name}
                  key={item._id}
                />
              );
            })}
        <div className={styles.moreBlock}>
          <button
            onClick={() => handleCategoryCount(categoryCount + 4)}
            className={`${styles.moreBtn} ${
              categoryCount >= categories.length ? styles.hide : ""
            }`}
          >
            Показать еще категории
          </button>
          <button
            onClick={() => handleCategoryCount(4)}
            className={`${styles.moreBtn} ${
              categoryCount === 4 ? styles.hide : ""
            }`}
          >
            Скрыть категории
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryCards;
