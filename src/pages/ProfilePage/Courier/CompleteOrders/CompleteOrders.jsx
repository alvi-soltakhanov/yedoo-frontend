import styles from "./CompleteOrders.module.css";
import noFood from "../../../../assets/Profile/noFood.png";
import stick from "../../../../assets/heigthLine.png";
import CompleteOrderItem from "./CompleteOrderItem";


const CompleteOrders = () => {
    const orders = 1
    return (
        <div className={styles.ordersContainer}>
            {orders ? (
                <div className={styles.ordersMain}>
                    <div className={styles.ordersHeader}>
                        <div className={styles.title}>
                            <img src={stick} alt="" />
                            Выполненные заказы <span>(3 заказа)</span>
                        </div>
                    </div>
                    <div className={styles.ordersList}>
                       <CompleteOrderItem />
                      
                    </div>
                </div>
            ) : (
                <div className={styles.wrapper}>
                    <div className={styles.noOrdersContainer}></div>
                    <div className={styles.noOrder}>
                        Нет выполненных заказов <img src={noFood} alt="no-food" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CompleteOrders