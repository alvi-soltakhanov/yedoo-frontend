import styles from "./CompleteOrders.module.css";
import noFood from "../../../../assets/Profile/noFood.png";
import stick from "../../../../assets/heigthLine.png";
import CompleteOrderItem from "./CompleteOrderItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../../../../redux/features/order";


const CompleteOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);
    
    const orders = useSelector(state => state.order.orders);
    console.log(orders.length)
    return (
        <div className={styles.ordersContainer}>
            {orders.filter(order => order.declined === true).length ? (
                <div className={styles.ordersMain}>
                    <div className={styles.ordersHeader}>
                        <div className={styles.title}>
                            <img src={stick} alt="" />
                            Выполненные заказы <span>(3 заказа)</span>
                        </div>
                    </div>
                    <div className={styles.ordersList}>
                        {orders.filter(order => order.declined === true).map(order => {
                            return <CompleteOrderItem order={order} />
                        })}
                      
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