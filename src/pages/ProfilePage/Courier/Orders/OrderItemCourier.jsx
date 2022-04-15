import styles from "./OrderItemCourier.module.css";
import image from "../../../../assets/Profile/bgFoodNoOrder.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCafeById } from "../../../../redux/features/cafe";
import { acceptOrder, deliverOrder } from "../../../../redux/features/order";
import ModalAcceptOrder from "./Modals/ModalAcceptOrder";

const OrderItemCourier = ({ order, cafe }) => {
    const dispatch = useDispatch();
    const [modalAcceptActive, setModalAcceptActive] = useState(false);
    const [isDisabled, setDisabled] = useState("");

    const [currentCafe, setCurrentCafe] = useState("");
    useEffect(() => {
        setCurrentCafe(cafe?.find((cafe) => cafe._id === order.cafeId));
    }, [cafe, order]);
    console.log(order.available);

    const handleAcceptOrder = (e, orderId) => {
        // if (loading) {
        //     e.target.active = "disabled"
        // }
        console.log(orderId);
        // dispatch(acceptOrder(orderId));
        setModalAcceptActive(true);
    };

    const handleDelivered = (orderId) => {
        dispatch({type: "order/available"});
        dispatch(deliverOrder(orderId));
    }

    return (
        <div className={order?.disavailable && !order.courierId ? styles.orderCardInActive : styles.orderCard }>
            <table>
                <thead>
                    <tr>
                        <th>Ресторан</th>
                        <th>Номер заказа</th>
                        <th>Откуда</th>
                        <th>Куда</th>
                        <th className={styles.time}>Время доставки</th>
                        <th>Принять</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.image}>
                            {" "}
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
                        <td className={styles.orderNumber}>
                            Заказ № {order?._id.slice(16)}
                        </td>
                        <td className={styles.from}>{order?.from}</td>
                        <td className={styles.to}>{order?.to}</td>
                        <td>14:50</td>
                        <td>
                            {!order.courierId && <button
                                className={styles.btnAccept}
                                onClick={(e) => handleAcceptOrder(e, order._id)}
                                disabled={order?.disavailable ? "disabled" : ""}
                            >
                                Принять
                            </button>}
                            {order.courierId && <button onClick={() => {handleDelivered(order._id)}}>Доставлен</button>}
                        </td>
                    </tr>
                </tbody>
            </table>
            <ModalAcceptOrder
                active={modalAcceptActive}
                setActive={setModalAcceptActive}
                orderId={order._id}
            />
        </div>
    );
};

export default OrderItemCourier;
