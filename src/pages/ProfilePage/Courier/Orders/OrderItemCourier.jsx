import styles from "./OrderItemCourier.module.css";
import image from "../../../../assets/Profile/bgFoodNoOrder.jpg"

const OrderItemCourier = () => {
    return (
        <div className={styles.orderCard}>
            <table>
                <tr>
                    <th>Ресторан</th>
                    <th>Номер заказа</th>
                    <th>Откуда</th>
                    <th>Куда</th>
                    <th className={styles.time}>Время доставки</th>
                    <th>Принять</th>
                </tr>
                <tr>
                    <td> <div className={styles.image}><img src={image} alt="" /></div></td>
                    <td>Заказ №12399939</td>
                    <td>пр. Путина 17</td>
                    <td>ул. Грибоедова 104</td>
                    <td>14:50</td>
                    <td><button>Принять</button></td>
                </tr>
            </table>
        </div>
    );
};

export default OrderItemCourier;