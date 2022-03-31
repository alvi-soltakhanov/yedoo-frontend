import React from "react";
import styles from "./OneStoreFilter.module.css";

const OneStoreFilter = () => {
  const fakeBase = [
    "Холодные закуски",
    "Горячие закуски",
    "Мясные блюдо",
    "Супы",
    "Рыбные блюдо",
    "Гриль меню",
    "Фирменные блюда",
    "Напитик",
  ];
  return (
    <div className={styles.OneStoreFilter}>
      <div className={styles.Content}>
          {fakeBase.map((oneTypeOfMenu) => {
              return (
                  <label htmlFor="">{oneTypeOfMenu}</label>
              )
          })}
      </div>
    </div>
  );
};

export default OneStoreFilter;
