import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptOrder } from "../../../../../redux/features/order";
import styles from "./ModalAcceptOrder.module.css";

const ModalAcceptOrder = ({ active, setActive, orderId }) => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMesssage] = useState(false)
    const loading = useSelector( state => state.order.loading);
    const error = useSelector( state => state.order.error);


    const handleAccept = (orderId) => {
        console.log(orderId);
        
        dispatch(acceptOrder(orderId));
        if (!error && !loading) {
            setActive(false);
            dispatch({type: "order/disavailable"})
        } else if (error) {
            setErrorMesssage("Не удалось принять заказ")
        };
        
     
    };
    
    const handleCancel = () => {
        console.log();
        // setLoader(false)
        setActive(false);
        setErrorMesssage("");
    };

    return (
        <div
            className={
                active ? `${styles.modal} ${styles.modalActive}` : styles.modal
            }
            onClick={() => setActive(false)}
        >
            <div
                className={
                    active
                        ? `${styles.modalContent} ${styles.modalContentActive}`
                        : styles.modalContent
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.acceptOrder}>
                    <div className={styles.title}>
                        <h3>Принятие заказа</h3>
                        <span onClick={() => handleCancel()}>×</span>
                    </div>
                    <hr />
                    <div className={styles.text}>
                        Вы подтверждаете принятие заказа?
                    </div>
                    {loading && <div className={styles.ldsHourglass}></div> }
                    {error && <div className={styles.errorMessage}>{errorMessage}</div>}
                    <div
                        className={styles.btns}
                    >
                        <button className={styles.btnAccept} onClick={() => handleAccept(orderId)}>Принять</button>
                        <button className={styles.btnCancel} onClick={() => handleCancel()}>Отклонить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAcceptOrder;
