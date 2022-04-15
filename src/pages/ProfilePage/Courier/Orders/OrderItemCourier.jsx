import styles from "./OrderItemCourier.module.css";
import image from "../../../../assets/Profile/bgFoodNoOrder.jpg";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchCafeById } from "../../../../redux/features/cafe";

const OrderItemCourier = ({ order, cafe, showOne, setShowOne, showClick }) => {
  const [currentCafe, setCurrentCafe] = useState("");

  useEffect(() => {
    setCurrentCafe(cafe?.find((cafe) => cafe._id === order.cafeId));
  }, [cafe, order]);

  return (
    <div className={styles.orderCard}>
      <table>
        <thead>
          <tr>
            <th>Ресторан</th>
            {!showOne && <th>Номер заказа</th>}
            <th>Откуда</th>
            <th>Куда</th>
            <th className={styles.time}>Время доставки</th>
            <th>Принять</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.image}>
              <div>
                <img
                  src={
                    currentCafe?.image
                      ? `http://localhost:4000/${currentCafe.image}`
                      : image
                  }
                  alt=""
                />
              </div>
            </td>
            {!showOne && (
              <td className={styles.orderNumber}>
                Заказ № {order?._id.slice(16)}
              </td>
            )}
            <td className={styles.from}>{order?.from}</td>
            <td className={styles.to}>{order?.to}</td>
            <td>14:50</td>
            <td>
              <button className={styles.btnAccept} id={order._id}>
                Принять
              </button>
              {showOne && (
                <button
                  className={styles.btnDecline}
                  onClick={(e) => showClick(e)}
                  id="close"
                >
                  Отмена
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemCourier;
