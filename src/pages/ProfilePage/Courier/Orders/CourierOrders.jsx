import styles from "./CourierOrders.module.css";
import noFood from "../../../../assets/Profile/noFood.png";
import stick from "../../../../assets/heigthLine.png";
import OrderItemCourier from "./OrderItemCourier";

const CourierOrders = () => {
    const orders = 1
    return (
        <div className={styles.ordersContainer}>
            {orders ? (
                <div className={styles.ordersMain}>
                    <div className={styles.ordersHeader}>
                        <div className={styles.title}>
                            <img src={stick} alt="" />
                            Список заказов <span>(доступно 3 заказа)</span>
                        </div>
                    </div>
                    <div className={styles.ordersList}>
                       <OrderItemCourier />
                       <OrderItemCourier />
                       <OrderItemCourier />
                    </div>
                </div>
            ) : (
                <div className={styles.wrapper}>
                    <div className={styles.noOrdersContainer}></div>
                    <div className={styles.noOrder}>
                        Нет доступных заказов <img src={noFood} alt="no-food" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CourierOrders