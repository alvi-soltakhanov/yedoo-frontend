import styles from "./CompleteOrderItem.module.css";
import image from "../../../../assets/Profile/bgFoodNoOrder.jpg"

const CompleteOrderItem = ({order}) => {
    return (
        <div className={styles.orderCard}>
            <table>
                <tr>
                    <th>Ресторан</th>
                    <th>Номер заказа</th>
                    <th>Откуда</th>
                    <th>Куда</th>
                    <th className={styles.time}>Время доставки</th>
                    <th>Статус</th>
                </tr>
                <tr>
                    <td> <div className={styles.image}><img src={image} alt="" /></div></td>
                    <td>Заказ №  {order?._id.slice(16)}</td>
                    <td> {order?.from}</td>
                    <td>{order?.to}</td>
                    <td>14:50</td>
                    <td><span className={styles.status}>Выполнен ✅</span></td>
                </tr>
            </table>
        </div>
    );
};

export default CompleteOrderItem;