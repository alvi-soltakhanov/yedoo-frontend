import styles from "./CafeOrders.module.css";
import noFood from "../../../../assets/Profile/noFood.png";
import stick from "../../../../assets/heigthLine.png";
import OrderItemCafe from "./OrderItemCafe";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../redux/features/order";

const CafeOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const orders = useSelector(state => state.order.orders)
    const orders1 = 1;
    return (
        <div className={styles.ordersContainer}>
            {orders1 ? (
                <div className={styles.ordersMain}>
                    <div className={styles.ordersHeader}>
                        <div className={styles.title}>
                            <img src={stick} alt="" />
                            Список заказов <span>(количество активных заказов: {orders ? orders?.length : 0})</span>
                        </div>
                    </div>
                    <div className={styles.ordersList}>
                        {orders.map(order => {
                            return <OrderItemCafe key={order._id} order={order} />
                        })}
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
