import styles from "./Promotions.module.css";

const Promotions = () => {
    const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className={styles.promotionsContainer}>
            {/* <div className={styles.orderRegistTitle}>
                <p>АКЦИИ</p>
            </div>
            <div className={styles.gradientLine}></div> */}
            <div className={styles.actionsPage}>
                {arrNum.map((item) => {
                    return (
                        <div key={item} className={styles.actionsItem}>
                            <div className={styles.actionImg}>
                                <img
                                    src="https://www.ixbt.com/img/n1/news/2021/9/5/d5d11c91b095686fcaa0f14cf8bbb7fa-600x450_large.jpg"
                                    alt="Еда"
                                />
                            </div>
                            <div className={styles.actionInfo}>
                                <h3>Без мяса? Здесь</h3>
                                <p>
                                    Самое время попробовать «Сырную» пиццу,
                                    «Маргариту», пиццу «Овощи и грибы», Пасту
                                    Четыре сыра, Томатный суп с гренками
                                </p>
                                <span>до 31 июля.</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Promotions;
