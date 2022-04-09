import styles from "./CafeOrders.module.css";
import noFood from "../../../../assets/Profile/noFood.png";
import stick from "../../../../assets/heigthLine.png";
import image from "../../../../assets/Profile/bgFoodNoOrder.jpg";
import Order from "./Order";

const CafeOrders = () => {
    const orders = 1;
    return (
        <div className={styles.ordersContainer}>
            {orders ? (
                <div className={styles.ordersMain}>
                    <div className={styles.ordersHeader}>
                        <div className={styles.title}>
                            <img src={stick} alt="" />
                            Список заказов <span>(активно 3 заказа)</span>
                        </div>
                    </div>
                    <div className={styles.ordersList}>
                        <Order />
                        <Order />
                        <Order />
                    </div>
                </div>
            ) : (
                <div className={styles.wrapper}>
                    <div className={styles.noOrdersContainer}></div>
                    <div className={styles.noOrder}>
                        У вас нет заказов <img src={noFood} alt="no-food" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CafeOrders;
