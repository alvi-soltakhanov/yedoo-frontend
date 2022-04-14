import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCafeById } from "../../../../redux/features/cafe";
import styles from "./OrderItemCafe.module.css";

const OrderItemCafe = ({order}) => {
    
    return (
        <div className={styles.orderCard}>
            <div className={styles.card}>
                <div className={styles.orderNumber}>Заказ № {order?._id.slice(16)}</div>

                <div className={styles.orderTime}>
                    Получен в 12:35 (2 часа назад)
                </div>
                <div className={styles.status}>
                    <div>
                        Статус: {order?.courierId ? <span className={styles.accepted}>принят курьером</span> : <span className={styles.waiting}>в ожидании курьера</span>}
                    </div>
                </div>
                <div className={styles.price}>{order?.total} ₽</div>
                <div className={styles.deleteCard}>
                    <button>x</button>
                </div>
            </div>
        </div>
    );
};

export default OrderItemCafe;
