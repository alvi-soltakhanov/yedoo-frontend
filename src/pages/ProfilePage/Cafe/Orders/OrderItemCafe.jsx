import styles from "./OrderItemCafe.module.css";

const OrderItemCafe = () => {
    return (
        <div className={styles.orderCard}>
            <div className={styles.card}>
                <div className={styles.orderNumber}>Заказ №12399939</div>

                <div className={styles.orderTime}>
                    Получен в 12:35 (2 часа назад)
                </div>
                <div className={styles.status}>
                    <div>
                        Статус: <span>принят курьером</span>
                    </div>
                </div>
                <div className={styles.price}>1500 ₽</div>
                <div className={styles.deleteCard}>
                    <button>x</button>
                </div>
            </div>
        </div>
    );
};

export default OrderItemCafe;
