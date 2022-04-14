import styles from "./CourierOrders.module.css";
import noFood from "../../../../assets/Profile/noFood.png";
import stick from "../../../../assets/heigthLine.png";
import OrderItemCourier from "./OrderItemCourier";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../../../../redux/features/order";
import { fetchCafe } from "../../../../redux/features/cafe";

const CourierOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
        dispatch(fetchCafe())
    }, [dispatch]);

    const orders = useSelector(state => state.order.orders);
    const cafe = useSelector(state => state.cafe.cafe)
    console.log(orders, cafe)

    return (
        <div className={styles.ordersContainer}>
            {orders ? (
                <div className={styles.ordersMain}>
                    <div className={styles.ordersHeader}>
                        <div className={styles.title}>
                            <img src={stick} alt="" />
                            Список заказов <span>(доступно {orders?.length} заказа)</span>
                        </div>
                    </div>
                    <div className={styles.ordersList}>
                        {orders?.map(order => {
                            return <OrderItemCourier key={order._id} order={order} cafe={cafe} />
                        })}
                       
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